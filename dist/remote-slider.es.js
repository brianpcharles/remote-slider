function WT(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var iy = { exports: {} }, uv = {}, ly = { exports: {} }, Dt = {};
var xT;
function JD() {
  if (xT) return Dt;
  xT = 1;
  var f = Symbol.for("react.element"), u = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), g = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), D = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), O = Symbol.iterator;
  function N(H) {
    return H === null || typeof H != "object" ? null : (H = O && H[O] || H["@@iterator"], typeof H == "function" ? H : null);
  }
  var L = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, J = Object.assign, I = {};
  function W(H, ae, et) {
    this.props = H, this.context = ae, this.refs = I, this.updater = et || L;
  }
  W.prototype.isReactComponent = {}, W.prototype.setState = function(H, ae) {
    if (typeof H != "object" && typeof H != "function" && H != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, H, ae, "setState");
  }, W.prototype.forceUpdate = function(H) {
    this.updater.enqueueForceUpdate(this, H, "forceUpdate");
  };
  function V() {
  }
  V.prototype = W.prototype;
  function te(H, ae, et) {
    this.props = H, this.context = ae, this.refs = I, this.updater = et || L;
  }
  var Z = te.prototype = new V();
  Z.constructor = te, J(Z, W.prototype), Z.isPureReactComponent = !0;
  var oe = Array.isArray, le = Object.prototype.hasOwnProperty, Me = { current: null }, ue = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ve(H, ae, et) {
    var tt, St = {}, ht = null, pt = null;
    if (ae != null) for (tt in ae.ref !== void 0 && (pt = ae.ref), ae.key !== void 0 && (ht = "" + ae.key), ae) le.call(ae, tt) && !ue.hasOwnProperty(tt) && (St[tt] = ae[tt]);
    var mt = arguments.length - 2;
    if (mt === 1) St.children = et;
    else if (1 < mt) {
      for (var Et = Array(mt), Yt = 0; Yt < mt; Yt++) Et[Yt] = arguments[Yt + 2];
      St.children = Et;
    }
    if (H && H.defaultProps) for (tt in mt = H.defaultProps, mt) St[tt] === void 0 && (St[tt] = mt[tt]);
    return { $$typeof: f, type: H, key: ht, ref: pt, props: St, _owner: Me.current };
  }
  function fe(H, ae) {
    return { $$typeof: f, type: H.type, key: ae, ref: H.ref, props: H.props, _owner: H._owner };
  }
  function Tt(H) {
    return typeof H == "object" && H !== null && H.$$typeof === f;
  }
  function me(H) {
    var ae = { "=": "=0", ":": "=2" };
    return "$" + H.replace(/[=:]/g, function(et) {
      return ae[et];
    });
  }
  var be = /\/+/g;
  function Ee(H, ae) {
    return typeof H == "object" && H !== null && H.key != null ? me("" + H.key) : ae.toString(36);
  }
  function Qe(H, ae, et, tt, St) {
    var ht = typeof H;
    (ht === "undefined" || ht === "boolean") && (H = null);
    var pt = !1;
    if (H === null) pt = !0;
    else switch (ht) {
      case "string":
      case "number":
        pt = !0;
        break;
      case "object":
        switch (H.$$typeof) {
          case f:
          case u:
            pt = !0;
        }
    }
    if (pt) return pt = H, St = St(pt), H = tt === "" ? "." + Ee(pt, 0) : tt, oe(St) ? (et = "", H != null && (et = H.replace(be, "$&/") + "/"), Qe(St, ae, et, "", function(Yt) {
      return Yt;
    })) : St != null && (Tt(St) && (St = fe(St, et + (!St.key || pt && pt.key === St.key ? "" : ("" + St.key).replace(be, "$&/") + "/") + H)), ae.push(St)), 1;
    if (pt = 0, tt = tt === "" ? "." : tt + ":", oe(H)) for (var mt = 0; mt < H.length; mt++) {
      ht = H[mt];
      var Et = tt + Ee(ht, mt);
      pt += Qe(ht, ae, et, Et, St);
    }
    else if (Et = N(H), typeof Et == "function") for (H = Et.call(H), mt = 0; !(ht = H.next()).done; ) ht = ht.value, Et = tt + Ee(ht, mt++), pt += Qe(ht, ae, et, Et, St);
    else if (ht === "object") throw ae = String(H), Error("Objects are not valid as a React child (found: " + (ae === "[object Object]" ? "object with keys {" + Object.keys(H).join(", ") + "}" : ae) + "). If you meant to render a collection of children, use an array instead.");
    return pt;
  }
  function dt(H, ae, et) {
    if (H == null) return H;
    var tt = [], St = 0;
    return Qe(H, tt, "", "", function(ht) {
      return ae.call(et, ht, St++);
    }), tt;
  }
  function bt(H) {
    if (H._status === -1) {
      var ae = H._result;
      ae = ae(), ae.then(function(et) {
        (H._status === 0 || H._status === -1) && (H._status = 1, H._result = et);
      }, function(et) {
        (H._status === 0 || H._status === -1) && (H._status = 2, H._result = et);
      }), H._status === -1 && (H._status = 0, H._result = ae);
    }
    if (H._status === 1) return H._result.default;
    throw H._result;
  }
  var we = { current: null }, pe = { transition: null }, Ce = { ReactCurrentDispatcher: we, ReactCurrentBatchConfig: pe, ReactCurrentOwner: Me };
  function Se() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Dt.Children = { map: dt, forEach: function(H, ae, et) {
    dt(H, function() {
      ae.apply(this, arguments);
    }, et);
  }, count: function(H) {
    var ae = 0;
    return dt(H, function() {
      ae++;
    }), ae;
  }, toArray: function(H) {
    return dt(H, function(ae) {
      return ae;
    }) || [];
  }, only: function(H) {
    if (!Tt(H)) throw Error("React.Children.only expected to receive a single React element child.");
    return H;
  } }, Dt.Component = W, Dt.Fragment = d, Dt.Profiler = E, Dt.PureComponent = te, Dt.StrictMode = h, Dt.Suspense = C, Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ce, Dt.act = Se, Dt.cloneElement = function(H, ae, et) {
    if (H == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + H + ".");
    var tt = J({}, H.props), St = H.key, ht = H.ref, pt = H._owner;
    if (ae != null) {
      if (ae.ref !== void 0 && (ht = ae.ref, pt = Me.current), ae.key !== void 0 && (St = "" + ae.key), H.type && H.type.defaultProps) var mt = H.type.defaultProps;
      for (Et in ae) le.call(ae, Et) && !ue.hasOwnProperty(Et) && (tt[Et] = ae[Et] === void 0 && mt !== void 0 ? mt[Et] : ae[Et]);
    }
    var Et = arguments.length - 2;
    if (Et === 1) tt.children = et;
    else if (1 < Et) {
      mt = Array(Et);
      for (var Yt = 0; Yt < Et; Yt++) mt[Yt] = arguments[Yt + 2];
      tt.children = mt;
    }
    return { $$typeof: f, type: H.type, key: St, ref: ht, props: tt, _owner: pt };
  }, Dt.createContext = function(H) {
    return H = { $$typeof: g, _currentValue: H, _currentValue2: H, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, H.Provider = { $$typeof: S, _context: H }, H.Consumer = H;
  }, Dt.createElement = Ve, Dt.createFactory = function(H) {
    var ae = Ve.bind(null, H);
    return ae.type = H, ae;
  }, Dt.createRef = function() {
    return { current: null };
  }, Dt.forwardRef = function(H) {
    return { $$typeof: R, render: H };
  }, Dt.isValidElement = Tt, Dt.lazy = function(H) {
    return { $$typeof: M, _payload: { _status: -1, _result: H }, _init: bt };
  }, Dt.memo = function(H, ae) {
    return { $$typeof: D, type: H, compare: ae === void 0 ? null : ae };
  }, Dt.startTransition = function(H) {
    var ae = pe.transition;
    pe.transition = {};
    try {
      H();
    } finally {
      pe.transition = ae;
    }
  }, Dt.unstable_act = Se, Dt.useCallback = function(H, ae) {
    return we.current.useCallback(H, ae);
  }, Dt.useContext = function(H) {
    return we.current.useContext(H);
  }, Dt.useDebugValue = function() {
  }, Dt.useDeferredValue = function(H) {
    return we.current.useDeferredValue(H);
  }, Dt.useEffect = function(H, ae) {
    return we.current.useEffect(H, ae);
  }, Dt.useId = function() {
    return we.current.useId();
  }, Dt.useImperativeHandle = function(H, ae, et) {
    return we.current.useImperativeHandle(H, ae, et);
  }, Dt.useInsertionEffect = function(H, ae) {
    return we.current.useInsertionEffect(H, ae);
  }, Dt.useLayoutEffect = function(H, ae) {
    return we.current.useLayoutEffect(H, ae);
  }, Dt.useMemo = function(H, ae) {
    return we.current.useMemo(H, ae);
  }, Dt.useReducer = function(H, ae, et) {
    return we.current.useReducer(H, ae, et);
  }, Dt.useRef = function(H) {
    return we.current.useRef(H);
  }, Dt.useState = function(H) {
    return we.current.useState(H);
  }, Dt.useSyncExternalStore = function(H, ae, et) {
    return we.current.useSyncExternalStore(H, ae, et);
  }, Dt.useTransition = function() {
    return we.current.useTransition();
  }, Dt.version = "18.3.1", Dt;
}
var cv = { exports: {} };
cv.exports;
var RT;
function ZD() {
  return RT || (RT = 1, (function(f, u) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = "18.3.1", h = Symbol.for("react.element"), E = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), D = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), W = Symbol.iterator, V = "@@iterator";
      function te(T) {
        if (T === null || typeof T != "object")
          return null;
        var z = W && T[W] || T[V];
        return typeof z == "function" ? z : null;
      }
      var Z = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, oe = {
        transition: null
      }, le = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Me = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ue = {}, Ve = null;
      function fe(T) {
        Ve = T;
      }
      ue.setExtraStackFrame = function(T) {
        Ve = T;
      }, ue.getCurrentStack = null, ue.getStackAddendum = function() {
        var T = "";
        Ve && (T += Ve);
        var z = ue.getCurrentStack;
        return z && (T += z() || ""), T;
      };
      var Tt = !1, me = !1, be = !1, Ee = !1, Qe = !1, dt = {
        ReactCurrentDispatcher: Z,
        ReactCurrentBatchConfig: oe,
        ReactCurrentOwner: Me
      };
      dt.ReactDebugCurrentFrame = ue, dt.ReactCurrentActQueue = le;
      function bt(T) {
        {
          for (var z = arguments.length, q = new Array(z > 1 ? z - 1 : 0), ee = 1; ee < z; ee++)
            q[ee - 1] = arguments[ee];
          pe("warn", T, q);
        }
      }
      function we(T) {
        {
          for (var z = arguments.length, q = new Array(z > 1 ? z - 1 : 0), ee = 1; ee < z; ee++)
            q[ee - 1] = arguments[ee];
          pe("error", T, q);
        }
      }
      function pe(T, z, q) {
        {
          var ee = dt.ReactDebugCurrentFrame, Te = ee.getStackAddendum();
          Te !== "" && (z += "%s", q = q.concat([Te]));
          var qe = q.map(function(_e) {
            return String(_e);
          });
          qe.unshift("Warning: " + z), Function.prototype.apply.call(console[T], console, qe);
        }
      }
      var Ce = {};
      function Se(T, z) {
        {
          var q = T.constructor, ee = q && (q.displayName || q.name) || "ReactClass", Te = ee + "." + z;
          if (Ce[Te])
            return;
          we("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", z, ee), Ce[Te] = !0;
        }
      }
      var H = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(T) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(T, z, q) {
          Se(T, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(T, z, q, ee) {
          Se(T, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(T, z, q, ee) {
          Se(T, "setState");
        }
      }, ae = Object.assign, et = {};
      Object.freeze(et);
      function tt(T, z, q) {
        this.props = T, this.context = z, this.refs = et, this.updater = q || H;
      }
      tt.prototype.isReactComponent = {}, tt.prototype.setState = function(T, z) {
        if (typeof T != "object" && typeof T != "function" && T != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, T, z, "setState");
      }, tt.prototype.forceUpdate = function(T) {
        this.updater.enqueueForceUpdate(this, T, "forceUpdate");
      };
      {
        var St = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ht = function(T, z) {
          Object.defineProperty(tt.prototype, T, {
            get: function() {
              bt("%s(...) is deprecated in plain JavaScript React classes. %s", z[0], z[1]);
            }
          });
        };
        for (var pt in St)
          St.hasOwnProperty(pt) && ht(pt, St[pt]);
      }
      function mt() {
      }
      mt.prototype = tt.prototype;
      function Et(T, z, q) {
        this.props = T, this.context = z, this.refs = et, this.updater = q || H;
      }
      var Yt = Et.prototype = new mt();
      Yt.constructor = Et, ae(Yt, tt.prototype), Yt.isPureReactComponent = !0;
      function kn() {
        var T = {
          current: null
        };
        return Object.seal(T), T;
      }
      var Rr = Array.isArray;
      function wn(T) {
        return Rr(T);
      }
      function nr(T) {
        {
          var z = typeof Symbol == "function" && Symbol.toStringTag, q = z && T[Symbol.toStringTag] || T.constructor.name || "Object";
          return q;
        }
      }
      function Vn(T) {
        try {
          return In(T), !1;
        } catch {
          return !0;
        }
      }
      function In(T) {
        return "" + T;
      }
      function Gr(T) {
        if (Vn(T))
          return we("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(T)), In(T);
      }
      function vi(T, z, q) {
        var ee = T.displayName;
        if (ee)
          return ee;
        var Te = z.displayName || z.name || "";
        return Te !== "" ? q + "(" + Te + ")" : q;
      }
      function ca(T) {
        return T.displayName || "Context";
      }
      function qn(T) {
        if (T == null)
          return null;
        if (typeof T.tag == "number" && we("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
          return T.displayName || T.name || null;
        if (typeof T == "string")
          return T;
        switch (T) {
          case S:
            return "Fragment";
          case E:
            return "Portal";
          case R:
            return "Profiler";
          case g:
            return "StrictMode";
          case O:
            return "Suspense";
          case N:
            return "SuspenseList";
        }
        if (typeof T == "object")
          switch (T.$$typeof) {
            case D:
              var z = T;
              return ca(z) + ".Consumer";
            case C:
              var q = T;
              return ca(q._context) + ".Provider";
            case M:
              return vi(T, T.render, "ForwardRef");
            case L:
              var ee = T.displayName || null;
              return ee !== null ? ee : qn(T.type) || "Memo";
            case J: {
              var Te = T, qe = Te._payload, _e = Te._init;
              try {
                return qn(_e(qe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Cn = Object.prototype.hasOwnProperty, Bn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Sr, Wa, Mn;
      Mn = {};
      function Er(T) {
        if (Cn.call(T, "ref")) {
          var z = Object.getOwnPropertyDescriptor(T, "ref").get;
          if (z && z.isReactWarning)
            return !1;
        }
        return T.ref !== void 0;
      }
      function fa(T) {
        if (Cn.call(T, "key")) {
          var z = Object.getOwnPropertyDescriptor(T, "key").get;
          if (z && z.isReactWarning)
            return !1;
        }
        return T.key !== void 0;
      }
      function Qa(T, z) {
        var q = function() {
          Sr || (Sr = !0, we("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        q.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: q,
          configurable: !0
        });
      }
      function hi(T, z) {
        var q = function() {
          Wa || (Wa = !0, we("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        q.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: q,
          configurable: !0
        });
      }
      function xe(T) {
        if (typeof T.ref == "string" && Me.current && T.__self && Me.current.stateNode !== T.__self) {
          var z = qn(Me.current.type);
          Mn[z] || (we('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z, T.ref), Mn[z] = !0);
        }
      }
      var Be = function(T, z, q, ee, Te, qe, _e) {
        var Je = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: h,
          // Built-in properties that belong on the element
          type: T,
          key: z,
          ref: q,
          props: _e,
          // Record the component responsible for creating this element.
          _owner: qe
        };
        return Je._store = {}, Object.defineProperty(Je._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Je, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ee
        }), Object.defineProperty(Je, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Te
        }), Object.freeze && (Object.freeze(Je.props), Object.freeze(Je)), Je;
      };
      function yt(T, z, q) {
        var ee, Te = {}, qe = null, _e = null, Je = null, Rt = null;
        if (z != null) {
          Er(z) && (_e = z.ref, xe(z)), fa(z) && (Gr(z.key), qe = "" + z.key), Je = z.__self === void 0 ? null : z.__self, Rt = z.__source === void 0 ? null : z.__source;
          for (ee in z)
            Cn.call(z, ee) && !Bn.hasOwnProperty(ee) && (Te[ee] = z[ee]);
        }
        var Nt = arguments.length - 2;
        if (Nt === 1)
          Te.children = q;
        else if (Nt > 1) {
          for (var an = Array(Nt), qt = 0; qt < Nt; qt++)
            an[qt] = arguments[qt + 2];
          Object.freeze && Object.freeze(an), Te.children = an;
        }
        if (T && T.defaultProps) {
          var gt = T.defaultProps;
          for (ee in gt)
            Te[ee] === void 0 && (Te[ee] = gt[ee]);
        }
        if (qe || _e) {
          var Xt = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          qe && Qa(Te, Xt), _e && hi(Te, Xt);
        }
        return Be(T, qe, _e, Je, Rt, Me.current, Te);
      }
      function It(T, z) {
        var q = Be(T.type, z, T.ref, T._self, T._source, T._owner, T.props);
        return q;
      }
      function tn(T, z, q) {
        if (T == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
        var ee, Te = ae({}, T.props), qe = T.key, _e = T.ref, Je = T._self, Rt = T._source, Nt = T._owner;
        if (z != null) {
          Er(z) && (_e = z.ref, Nt = Me.current), fa(z) && (Gr(z.key), qe = "" + z.key);
          var an;
          T.type && T.type.defaultProps && (an = T.type.defaultProps);
          for (ee in z)
            Cn.call(z, ee) && !Bn.hasOwnProperty(ee) && (z[ee] === void 0 && an !== void 0 ? Te[ee] = an[ee] : Te[ee] = z[ee]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          Te.children = q;
        else if (qt > 1) {
          for (var gt = Array(qt), Xt = 0; Xt < qt; Xt++)
            gt[Xt] = arguments[Xt + 2];
          Te.children = gt;
        }
        return Be(T.type, qe, _e, Je, Rt, Nt, Te);
      }
      function vn(T) {
        return typeof T == "object" && T !== null && T.$$typeof === h;
      }
      var on = ".", Xn = ":";
      function nn(T) {
        var z = /[=:]/g, q = {
          "=": "=0",
          ":": "=2"
        }, ee = T.replace(z, function(Te) {
          return q[Te];
        });
        return "$" + ee;
      }
      var Gt = !1, Wt = /\/+/g;
      function da(T) {
        return T.replace(Wt, "$&/");
      }
      function wr(T, z) {
        return typeof T == "object" && T !== null && T.key != null ? (Gr(T.key), nn("" + T.key)) : z.toString(36);
      }
      function Ra(T, z, q, ee, Te) {
        var qe = typeof T;
        (qe === "undefined" || qe === "boolean") && (T = null);
        var _e = !1;
        if (T === null)
          _e = !0;
        else
          switch (qe) {
            case "string":
            case "number":
              _e = !0;
              break;
            case "object":
              switch (T.$$typeof) {
                case h:
                case E:
                  _e = !0;
              }
          }
        if (_e) {
          var Je = T, Rt = Te(Je), Nt = ee === "" ? on + wr(Je, 0) : ee;
          if (wn(Rt)) {
            var an = "";
            Nt != null && (an = da(Nt) + "/"), Ra(Rt, z, an, "", function(ld) {
              return ld;
            });
          } else Rt != null && (vn(Rt) && (Rt.key && (!Je || Je.key !== Rt.key) && Gr(Rt.key), Rt = It(
            Rt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            q + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Rt.key && (!Je || Je.key !== Rt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              da("" + Rt.key) + "/"
            ) : "") + Nt
          )), z.push(Rt));
          return 1;
        }
        var qt, gt, Xt = 0, hn = ee === "" ? on : ee + Xn;
        if (wn(T))
          for (var _l = 0; _l < T.length; _l++)
            qt = T[_l], gt = hn + wr(qt, _l), Xt += Ra(qt, z, q, gt, Te);
        else {
          var ns = te(T);
          if (typeof ns == "function") {
            var Gi = T;
            ns === Gi.entries && (Gt || bt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Gt = !0);
            for (var rs = ns.call(Gi), vo, id = 0; !(vo = rs.next()).done; )
              qt = vo.value, gt = hn + wr(qt, id++), Xt += Ra(qt, z, q, gt, Te);
          } else if (qe === "object") {
            var yc = String(T);
            throw new Error("Objects are not valid as a React child (found: " + (yc === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : yc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Xt;
      }
      function Bi(T, z, q) {
        if (T == null)
          return T;
        var ee = [], Te = 0;
        return Ra(T, ee, "", "", function(qe) {
          return z.call(q, qe, Te++);
        }), ee;
      }
      function ao(T) {
        var z = 0;
        return Bi(T, function() {
          z++;
        }), z;
      }
      function io(T, z, q) {
        Bi(T, function() {
          z.apply(this, arguments);
        }, q);
      }
      function gl(T) {
        return Bi(T, function(z) {
          return z;
        }) || [];
      }
      function Sl(T) {
        if (!vn(T))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return T;
      }
      function lo(T) {
        var z = {
          $$typeof: D,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: T,
          _currentValue2: T,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        z.Provider = {
          $$typeof: C,
          _context: z
        };
        var q = !1, ee = !1, Te = !1;
        {
          var qe = {
            $$typeof: D,
            _context: z
          };
          Object.defineProperties(qe, {
            Provider: {
              get: function() {
                return ee || (ee = !0, we("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), z.Provider;
              },
              set: function(_e) {
                z.Provider = _e;
              }
            },
            _currentValue: {
              get: function() {
                return z._currentValue;
              },
              set: function(_e) {
                z._currentValue = _e;
              }
            },
            _currentValue2: {
              get: function() {
                return z._currentValue2;
              },
              set: function(_e) {
                z._currentValue2 = _e;
              }
            },
            _threadCount: {
              get: function() {
                return z._threadCount;
              },
              set: function(_e) {
                z._threadCount = _e;
              }
            },
            Consumer: {
              get: function() {
                return q || (q = !0, we("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), z.Consumer;
              }
            },
            displayName: {
              get: function() {
                return z.displayName;
              },
              set: function(_e) {
                Te || (bt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", _e), Te = !0);
              }
            }
          }), z.Consumer = qe;
        }
        return z._currentRenderer = null, z._currentRenderer2 = null, z;
      }
      var _r = -1, Dr = 0, rr = 1, mi = 2;
      function qa(T) {
        if (T._status === _r) {
          var z = T._result, q = z();
          if (q.then(function(qe) {
            if (T._status === Dr || T._status === _r) {
              var _e = T;
              _e._status = rr, _e._result = qe;
            }
          }, function(qe) {
            if (T._status === Dr || T._status === _r) {
              var _e = T;
              _e._status = mi, _e._result = qe;
            }
          }), T._status === _r) {
            var ee = T;
            ee._status = Dr, ee._result = q;
          }
        }
        if (T._status === rr) {
          var Te = T._result;
          return Te === void 0 && we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Te), "default" in Te || we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Te), Te.default;
        } else
          throw T._result;
      }
      function yi(T) {
        var z = {
          // We use these fields to store the result.
          _status: _r,
          _result: T
        }, q = {
          $$typeof: J,
          _payload: z,
          _init: qa
        };
        {
          var ee, Te;
          Object.defineProperties(q, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return ee;
              },
              set: function(qe) {
                we("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ee = qe, Object.defineProperty(q, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Te;
              },
              set: function(qe) {
                we("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Te = qe, Object.defineProperty(q, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return q;
      }
      function gi(T) {
        T != null && T.$$typeof === L ? we("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof T != "function" ? we("forwardRef requires a render function but was given %s.", T === null ? "null" : typeof T) : T.length !== 0 && T.length !== 2 && we("forwardRef render functions accept exactly two parameters: props and ref. %s", T.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), T != null && (T.defaultProps != null || T.propTypes != null) && we("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var z = {
          $$typeof: M,
          render: T
        };
        {
          var q;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(ee) {
              q = ee, !T.name && !T.displayName && (T.displayName = ee);
            }
          });
        }
        return z;
      }
      var A;
      A = Symbol.for("react.module.reference");
      function se(T) {
        return !!(typeof T == "string" || typeof T == "function" || T === S || T === R || Qe || T === g || T === O || T === N || Ee || T === I || Tt || me || be || typeof T == "object" && T !== null && (T.$$typeof === J || T.$$typeof === L || T.$$typeof === C || T.$$typeof === D || T.$$typeof === M || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        T.$$typeof === A || T.getModuleId !== void 0));
      }
      function De(T, z) {
        se(T) || we("memo: The first argument must be a component. Instead received: %s", T === null ? "null" : typeof T);
        var q = {
          $$typeof: L,
          type: T,
          compare: z === void 0 ? null : z
        };
        {
          var ee;
          Object.defineProperty(q, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ee;
            },
            set: function(Te) {
              ee = Te, !T.name && !T.displayName && (T.displayName = Te);
            }
          });
        }
        return q;
      }
      function Ue() {
        var T = Z.current;
        return T === null && we(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), T;
      }
      function st(T) {
        var z = Ue();
        if (T._context !== void 0) {
          var q = T._context;
          q.Consumer === T ? we("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : q.Provider === T && we("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return z.useContext(T);
      }
      function lt(T) {
        var z = Ue();
        return z.useState(T);
      }
      function xt(T, z, q) {
        var ee = Ue();
        return ee.useReducer(T, z, q);
      }
      function wt(T) {
        var z = Ue();
        return z.useRef(T);
      }
      function Tn(T, z) {
        var q = Ue();
        return q.useEffect(T, z);
      }
      function rn(T, z) {
        var q = Ue();
        return q.useInsertionEffect(T, z);
      }
      function un(T, z) {
        var q = Ue();
        return q.useLayoutEffect(T, z);
      }
      function ar(T, z) {
        var q = Ue();
        return q.useCallback(T, z);
      }
      function Xa(T, z) {
        var q = Ue();
        return q.useMemo(T, z);
      }
      function Ka(T, z, q) {
        var ee = Ue();
        return ee.useImperativeHandle(T, z, q);
      }
      function ct(T, z) {
        {
          var q = Ue();
          return q.useDebugValue(T, z);
        }
      }
      function vt() {
        var T = Ue();
        return T.useTransition();
      }
      function Ja(T) {
        var z = Ue();
        return z.useDeferredValue(T);
      }
      function oo() {
        var T = Ue();
        return T.useId();
      }
      function uo(T, z, q) {
        var ee = Ue();
        return ee.useSyncExternalStore(T, z, q);
      }
      var El = 0, eu, wl, Wr, Ju, Or, hc, mc;
      function tu() {
      }
      tu.__reactDisabledLog = !0;
      function Cl() {
        {
          if (El === 0) {
            eu = console.log, wl = console.info, Wr = console.warn, Ju = console.error, Or = console.group, hc = console.groupCollapsed, mc = console.groupEnd;
            var T = {
              configurable: !0,
              enumerable: !0,
              value: tu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: T,
              log: T,
              warn: T,
              error: T,
              group: T,
              groupCollapsed: T,
              groupEnd: T
            });
          }
          El++;
        }
      }
      function pa() {
        {
          if (El--, El === 0) {
            var T = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ae({}, T, {
                value: eu
              }),
              info: ae({}, T, {
                value: wl
              }),
              warn: ae({}, T, {
                value: Wr
              }),
              error: ae({}, T, {
                value: Ju
              }),
              group: ae({}, T, {
                value: Or
              }),
              groupCollapsed: ae({}, T, {
                value: hc
              }),
              groupEnd: ae({}, T, {
                value: mc
              })
            });
          }
          El < 0 && we("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Za = dt.ReactCurrentDispatcher, ei;
      function nu(T, z, q) {
        {
          if (ei === void 0)
            try {
              throw Error();
            } catch (Te) {
              var ee = Te.stack.trim().match(/\n( *(at )?)/);
              ei = ee && ee[1] || "";
            }
          return `
` + ei + T;
        }
      }
      var so = !1, Tl;
      {
        var ru = typeof WeakMap == "function" ? WeakMap : Map;
        Tl = new ru();
      }
      function au(T, z) {
        if (!T || so)
          return "";
        {
          var q = Tl.get(T);
          if (q !== void 0)
            return q;
        }
        var ee;
        so = !0;
        var Te = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var qe;
        qe = Za.current, Za.current = null, Cl();
        try {
          if (z) {
            var _e = function() {
              throw Error();
            };
            if (Object.defineProperty(_e.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(_e, []);
              } catch (hn) {
                ee = hn;
              }
              Reflect.construct(T, [], _e);
            } else {
              try {
                _e.call();
              } catch (hn) {
                ee = hn;
              }
              T.call(_e.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (hn) {
              ee = hn;
            }
            T();
          }
        } catch (hn) {
          if (hn && ee && typeof hn.stack == "string") {
            for (var Je = hn.stack.split(`
`), Rt = ee.stack.split(`
`), Nt = Je.length - 1, an = Rt.length - 1; Nt >= 1 && an >= 0 && Je[Nt] !== Rt[an]; )
              an--;
            for (; Nt >= 1 && an >= 0; Nt--, an--)
              if (Je[Nt] !== Rt[an]) {
                if (Nt !== 1 || an !== 1)
                  do
                    if (Nt--, an--, an < 0 || Je[Nt] !== Rt[an]) {
                      var qt = `
` + Je[Nt].replace(" at new ", " at ");
                      return T.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", T.displayName)), typeof T == "function" && Tl.set(T, qt), qt;
                    }
                  while (Nt >= 1 && an >= 0);
                break;
              }
          }
        } finally {
          so = !1, Za.current = qe, pa(), Error.prepareStackTrace = Te;
        }
        var gt = T ? T.displayName || T.name : "", Xt = gt ? nu(gt) : "";
        return typeof T == "function" && Tl.set(T, Xt), Xt;
      }
      function $i(T, z, q) {
        return au(T, !1);
      }
      function rd(T) {
        var z = T.prototype;
        return !!(z && z.isReactComponent);
      }
      function Yi(T, z, q) {
        if (T == null)
          return "";
        if (typeof T == "function")
          return au(T, rd(T));
        if (typeof T == "string")
          return nu(T);
        switch (T) {
          case O:
            return nu("Suspense");
          case N:
            return nu("SuspenseList");
        }
        if (typeof T == "object")
          switch (T.$$typeof) {
            case M:
              return $i(T.render);
            case L:
              return Yi(T.type, z, q);
            case J: {
              var ee = T, Te = ee._payload, qe = ee._init;
              try {
                return Yi(qe(Te), z, q);
              } catch {
              }
            }
          }
        return "";
      }
      var Pt = {}, iu = dt.ReactDebugCurrentFrame;
      function zt(T) {
        if (T) {
          var z = T._owner, q = Yi(T.type, T._source, z ? z.type : null);
          iu.setExtraStackFrame(q);
        } else
          iu.setExtraStackFrame(null);
      }
      function Zu(T, z, q, ee, Te) {
        {
          var qe = Function.call.bind(Cn);
          for (var _e in T)
            if (qe(T, _e)) {
              var Je = void 0;
              try {
                if (typeof T[_e] != "function") {
                  var Rt = Error((ee || "React class") + ": " + q + " type `" + _e + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[_e] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Rt.name = "Invariant Violation", Rt;
                }
                Je = T[_e](z, _e, ee, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Nt) {
                Je = Nt;
              }
              Je && !(Je instanceof Error) && (zt(Te), we("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ee || "React class", q, _e, typeof Je), zt(null)), Je instanceof Error && !(Je.message in Pt) && (Pt[Je.message] = !0, zt(Te), we("Failed %s type: %s", q, Je.message), zt(null));
            }
        }
      }
      function Si(T) {
        if (T) {
          var z = T._owner, q = Yi(T.type, T._source, z ? z.type : null);
          fe(q);
        } else
          fe(null);
      }
      var it;
      it = !1;
      function lu() {
        if (Me.current) {
          var T = qn(Me.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
      function ir(T) {
        if (T !== void 0) {
          var z = T.fileName.replace(/^.*[\\\/]/, ""), q = T.lineNumber;
          return `

Check your code at ` + z + ":" + q + ".";
        }
        return "";
      }
      function Ei(T) {
        return T != null ? ir(T.__source) : "";
      }
      var kr = {};
      function wi(T) {
        var z = lu();
        if (!z) {
          var q = typeof T == "string" ? T : T.displayName || T.name;
          q && (z = `

Check the top-level render call using <` + q + ">.");
        }
        return z;
      }
      function sn(T, z) {
        if (!(!T._store || T._store.validated || T.key != null)) {
          T._store.validated = !0;
          var q = wi(z);
          if (!kr[q]) {
            kr[q] = !0;
            var ee = "";
            T && T._owner && T._owner !== Me.current && (ee = " It was passed a child from " + qn(T._owner.type) + "."), Si(T), we('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, ee), Si(null);
          }
        }
      }
      function Qt(T, z) {
        if (typeof T == "object") {
          if (wn(T))
            for (var q = 0; q < T.length; q++) {
              var ee = T[q];
              vn(ee) && sn(ee, z);
            }
          else if (vn(T))
            T._store && (T._store.validated = !0);
          else if (T) {
            var Te = te(T);
            if (typeof Te == "function" && Te !== T.entries)
              for (var qe = Te.call(T), _e; !(_e = qe.next()).done; )
                vn(_e.value) && sn(_e.value, z);
          }
        }
      }
      function bl(T) {
        {
          var z = T.type;
          if (z == null || typeof z == "string")
            return;
          var q;
          if (typeof z == "function")
            q = z.propTypes;
          else if (typeof z == "object" && (z.$$typeof === M || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          z.$$typeof === L))
            q = z.propTypes;
          else
            return;
          if (q) {
            var ee = qn(z);
            Zu(q, T.props, "prop", ee, T);
          } else if (z.PropTypes !== void 0 && !it) {
            it = !0;
            var Te = qn(z);
            we("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Te || "Unknown");
          }
          typeof z.getDefaultProps == "function" && !z.getDefaultProps.isReactClassApproved && we("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function $n(T) {
        {
          for (var z = Object.keys(T.props), q = 0; q < z.length; q++) {
            var ee = z[q];
            if (ee !== "children" && ee !== "key") {
              Si(T), we("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ee), Si(null);
              break;
            }
          }
          T.ref !== null && (Si(T), we("Invalid attribute `ref` supplied to `React.Fragment`."), Si(null));
        }
      }
      function Mr(T, z, q) {
        var ee = se(T);
        if (!ee) {
          var Te = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (Te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var qe = Ei(z);
          qe ? Te += qe : Te += lu();
          var _e;
          T === null ? _e = "null" : wn(T) ? _e = "array" : T !== void 0 && T.$$typeof === h ? (_e = "<" + (qn(T.type) || "Unknown") + " />", Te = " Did you accidentally export a JSX literal instead of a component?") : _e = typeof T, we("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _e, Te);
        }
        var Je = yt.apply(this, arguments);
        if (Je == null)
          return Je;
        if (ee)
          for (var Rt = 2; Rt < arguments.length; Rt++)
            Qt(arguments[Rt], T);
        return T === S ? $n(Je) : bl(Je), Je;
      }
      var _a = !1;
      function co(T) {
        var z = Mr.bind(null, T);
        return z.type = T, _a || (_a = !0, bt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(z, "type", {
          enumerable: !1,
          get: function() {
            return bt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: T
            }), T;
          }
        }), z;
      }
      function es(T, z, q) {
        for (var ee = tn.apply(this, arguments), Te = 2; Te < arguments.length; Te++)
          Qt(arguments[Te], ee.type);
        return bl(ee), ee;
      }
      function ts(T, z) {
        var q = oe.transition;
        oe.transition = {};
        var ee = oe.transition;
        oe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          T();
        } finally {
          if (oe.transition = q, q === null && ee._updatedFibers) {
            var Te = ee._updatedFibers.size;
            Te > 10 && bt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), ee._updatedFibers.clear();
          }
        }
      }
      var xl = !1, fo = null;
      function ad(T) {
        if (fo === null)
          try {
            var z = ("require" + Math.random()).slice(0, 7), q = f && f[z];
            fo = q.call(f, "timers").setImmediate;
          } catch {
            fo = function(Te) {
              xl === !1 && (xl = !0, typeof MessageChannel > "u" && we("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var qe = new MessageChannel();
              qe.port1.onmessage = Te, qe.port2.postMessage(void 0);
            };
          }
        return fo(T);
      }
      var Da = 0, ti = !1;
      function Ci(T) {
        {
          var z = Da;
          Da++, le.current === null && (le.current = []);
          var q = le.isBatchingLegacy, ee;
          try {
            if (le.isBatchingLegacy = !0, ee = T(), !q && le.didScheduleLegacyUpdate) {
              var Te = le.current;
              Te !== null && (le.didScheduleLegacyUpdate = !1, Rl(Te));
            }
          } catch (gt) {
            throw Oa(z), gt;
          } finally {
            le.isBatchingLegacy = q;
          }
          if (ee !== null && typeof ee == "object" && typeof ee.then == "function") {
            var qe = ee, _e = !1, Je = {
              then: function(gt, Xt) {
                _e = !0, qe.then(function(hn) {
                  Oa(z), Da === 0 ? ou(hn, gt, Xt) : gt(hn);
                }, function(hn) {
                  Oa(z), Xt(hn);
                });
              }
            };
            return !ti && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              _e || (ti = !0, we("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Je;
          } else {
            var Rt = ee;
            if (Oa(z), Da === 0) {
              var Nt = le.current;
              Nt !== null && (Rl(Nt), le.current = null);
              var an = {
                then: function(gt, Xt) {
                  le.current === null ? (le.current = [], ou(Rt, gt, Xt)) : gt(Rt);
                }
              };
              return an;
            } else {
              var qt = {
                then: function(gt, Xt) {
                  gt(Rt);
                }
              };
              return qt;
            }
          }
        }
      }
      function Oa(T) {
        T !== Da - 1 && we("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Da = T;
      }
      function ou(T, z, q) {
        {
          var ee = le.current;
          if (ee !== null)
            try {
              Rl(ee), ad(function() {
                ee.length === 0 ? (le.current = null, z(T)) : ou(T, z, q);
              });
            } catch (Te) {
              q(Te);
            }
          else
            z(T);
        }
      }
      var uu = !1;
      function Rl(T) {
        if (!uu) {
          uu = !0;
          var z = 0;
          try {
            for (; z < T.length; z++) {
              var q = T[z];
              do
                q = q(!0);
              while (q !== null);
            }
            T.length = 0;
          } catch (ee) {
            throw T = T.slice(z + 1), ee;
          } finally {
            uu = !1;
          }
        }
      }
      var po = Mr, su = es, cu = co, ni = {
        map: Bi,
        forEach: io,
        count: ao,
        toArray: gl,
        only: Sl
      };
      u.Children = ni, u.Component = tt, u.Fragment = S, u.Profiler = R, u.PureComponent = Et, u.StrictMode = g, u.Suspense = O, u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dt, u.act = Ci, u.cloneElement = su, u.createContext = lo, u.createElement = po, u.createFactory = cu, u.createRef = kn, u.forwardRef = gi, u.isValidElement = vn, u.lazy = yi, u.memo = De, u.startTransition = ts, u.unstable_act = Ci, u.useCallback = ar, u.useContext = st, u.useDebugValue = ct, u.useDeferredValue = Ja, u.useEffect = Tn, u.useId = oo, u.useImperativeHandle = Ka, u.useInsertionEffect = rn, u.useLayoutEffect = un, u.useMemo = Xa, u.useReducer = xt, u.useRef = wt, u.useState = lt, u.useSyncExternalStore = uo, u.useTransition = vt, u.version = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(cv, cv.exports)), cv.exports;
}
var _T;
function pv() {
  return _T || (_T = 1, process.env.NODE_ENV === "production" ? ly.exports = JD() : ly.exports = ZD()), ly.exports;
}
var DT;
function eO() {
  if (DT) return uv;
  DT = 1;
  var f = pv(), u = Symbol.for("react.element"), d = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, E = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(R, C, D) {
    var M, O = {}, N = null, L = null;
    D !== void 0 && (N = "" + D), C.key !== void 0 && (N = "" + C.key), C.ref !== void 0 && (L = C.ref);
    for (M in C) h.call(C, M) && !S.hasOwnProperty(M) && (O[M] = C[M]);
    if (R && R.defaultProps) for (M in C = R.defaultProps, C) O[M] === void 0 && (O[M] = C[M]);
    return { $$typeof: u, type: R, key: N, ref: L, props: O, _owner: E.current };
  }
  return uv.Fragment = d, uv.jsx = g, uv.jsxs = g, uv;
}
var sv = {};
var OT;
function tO() {
  return OT || (OT = 1, process.env.NODE_ENV !== "production" && (function() {
    var f = pv(), u = Symbol.for("react.element"), d = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), R = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), J = Symbol.iterator, I = "@@iterator";
    function W(A) {
      if (A === null || typeof A != "object")
        return null;
      var se = J && A[J] || A[I];
      return typeof se == "function" ? se : null;
    }
    var V = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function te(A) {
      {
        for (var se = arguments.length, De = new Array(se > 1 ? se - 1 : 0), Ue = 1; Ue < se; Ue++)
          De[Ue - 1] = arguments[Ue];
        Z("error", A, De);
      }
    }
    function Z(A, se, De) {
      {
        var Ue = V.ReactDebugCurrentFrame, st = Ue.getStackAddendum();
        st !== "" && (se += "%s", De = De.concat([st]));
        var lt = De.map(function(xt) {
          return String(xt);
        });
        lt.unshift("Warning: " + se), Function.prototype.apply.call(console[A], console, lt);
      }
    }
    var oe = !1, le = !1, Me = !1, ue = !1, Ve = !1, fe;
    fe = Symbol.for("react.module.reference");
    function Tt(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === h || A === S || Ve || A === E || A === D || A === M || ue || A === L || oe || le || Me || typeof A == "object" && A !== null && (A.$$typeof === N || A.$$typeof === O || A.$$typeof === g || A.$$typeof === R || A.$$typeof === C || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === fe || A.getModuleId !== void 0));
    }
    function me(A, se, De) {
      var Ue = A.displayName;
      if (Ue)
        return Ue;
      var st = se.displayName || se.name || "";
      return st !== "" ? De + "(" + st + ")" : De;
    }
    function be(A) {
      return A.displayName || "Context";
    }
    function Ee(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && te("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case h:
          return "Fragment";
        case d:
          return "Portal";
        case S:
          return "Profiler";
        case E:
          return "StrictMode";
        case D:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case R:
            var se = A;
            return be(se) + ".Consumer";
          case g:
            var De = A;
            return be(De._context) + ".Provider";
          case C:
            return me(A, A.render, "ForwardRef");
          case O:
            var Ue = A.displayName || null;
            return Ue !== null ? Ue : Ee(A.type) || "Memo";
          case N: {
            var st = A, lt = st._payload, xt = st._init;
            try {
              return Ee(xt(lt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Qe = Object.assign, dt = 0, bt, we, pe, Ce, Se, H, ae;
    function et() {
    }
    et.__reactDisabledLog = !0;
    function tt() {
      {
        if (dt === 0) {
          bt = console.log, we = console.info, pe = console.warn, Ce = console.error, Se = console.group, H = console.groupCollapsed, ae = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: et,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        dt++;
      }
    }
    function St() {
      {
        if (dt--, dt === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Qe({}, A, {
              value: bt
            }),
            info: Qe({}, A, {
              value: we
            }),
            warn: Qe({}, A, {
              value: pe
            }),
            error: Qe({}, A, {
              value: Ce
            }),
            group: Qe({}, A, {
              value: Se
            }),
            groupCollapsed: Qe({}, A, {
              value: H
            }),
            groupEnd: Qe({}, A, {
              value: ae
            })
          });
        }
        dt < 0 && te("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ht = V.ReactCurrentDispatcher, pt;
    function mt(A, se, De) {
      {
        if (pt === void 0)
          try {
            throw Error();
          } catch (st) {
            var Ue = st.stack.trim().match(/\n( *(at )?)/);
            pt = Ue && Ue[1] || "";
          }
        return `
` + pt + A;
      }
    }
    var Et = !1, Yt;
    {
      var kn = typeof WeakMap == "function" ? WeakMap : Map;
      Yt = new kn();
    }
    function Rr(A, se) {
      if (!A || Et)
        return "";
      {
        var De = Yt.get(A);
        if (De !== void 0)
          return De;
      }
      var Ue;
      Et = !0;
      var st = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var lt;
      lt = ht.current, ht.current = null, tt();
      try {
        if (se) {
          var xt = function() {
            throw Error();
          };
          if (Object.defineProperty(xt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(xt, []);
            } catch (ct) {
              Ue = ct;
            }
            Reflect.construct(A, [], xt);
          } else {
            try {
              xt.call();
            } catch (ct) {
              Ue = ct;
            }
            A.call(xt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ct) {
            Ue = ct;
          }
          A();
        }
      } catch (ct) {
        if (ct && Ue && typeof ct.stack == "string") {
          for (var wt = ct.stack.split(`
`), Tn = Ue.stack.split(`
`), rn = wt.length - 1, un = Tn.length - 1; rn >= 1 && un >= 0 && wt[rn] !== Tn[un]; )
            un--;
          for (; rn >= 1 && un >= 0; rn--, un--)
            if (wt[rn] !== Tn[un]) {
              if (rn !== 1 || un !== 1)
                do
                  if (rn--, un--, un < 0 || wt[rn] !== Tn[un]) {
                    var ar = `
` + wt[rn].replace(" at new ", " at ");
                    return A.displayName && ar.includes("<anonymous>") && (ar = ar.replace("<anonymous>", A.displayName)), typeof A == "function" && Yt.set(A, ar), ar;
                  }
                while (rn >= 1 && un >= 0);
              break;
            }
        }
      } finally {
        Et = !1, ht.current = lt, St(), Error.prepareStackTrace = st;
      }
      var Xa = A ? A.displayName || A.name : "", Ka = Xa ? mt(Xa) : "";
      return typeof A == "function" && Yt.set(A, Ka), Ka;
    }
    function wn(A, se, De) {
      return Rr(A, !1);
    }
    function nr(A) {
      var se = A.prototype;
      return !!(se && se.isReactComponent);
    }
    function Vn(A, se, De) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return Rr(A, nr(A));
      if (typeof A == "string")
        return mt(A);
      switch (A) {
        case D:
          return mt("Suspense");
        case M:
          return mt("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case C:
            return wn(A.render);
          case O:
            return Vn(A.type, se, De);
          case N: {
            var Ue = A, st = Ue._payload, lt = Ue._init;
            try {
              return Vn(lt(st), se, De);
            } catch {
            }
          }
        }
      return "";
    }
    var In = Object.prototype.hasOwnProperty, Gr = {}, vi = V.ReactDebugCurrentFrame;
    function ca(A) {
      if (A) {
        var se = A._owner, De = Vn(A.type, A._source, se ? se.type : null);
        vi.setExtraStackFrame(De);
      } else
        vi.setExtraStackFrame(null);
    }
    function qn(A, se, De, Ue, st) {
      {
        var lt = Function.call.bind(In);
        for (var xt in A)
          if (lt(A, xt)) {
            var wt = void 0;
            try {
              if (typeof A[xt] != "function") {
                var Tn = Error((Ue || "React class") + ": " + De + " type `" + xt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[xt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              wt = A[xt](se, xt, Ue, De, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rn) {
              wt = rn;
            }
            wt && !(wt instanceof Error) && (ca(st), te("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ue || "React class", De, xt, typeof wt), ca(null)), wt instanceof Error && !(wt.message in Gr) && (Gr[wt.message] = !0, ca(st), te("Failed %s type: %s", De, wt.message), ca(null));
          }
      }
    }
    var Cn = Array.isArray;
    function Bn(A) {
      return Cn(A);
    }
    function Sr(A) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, De = se && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return De;
      }
    }
    function Wa(A) {
      try {
        return Mn(A), !1;
      } catch {
        return !0;
      }
    }
    function Mn(A) {
      return "" + A;
    }
    function Er(A) {
      if (Wa(A))
        return te("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(A)), Mn(A);
    }
    var fa = V.ReactCurrentOwner, Qa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hi, xe;
    function Be(A) {
      if (In.call(A, "ref")) {
        var se = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function yt(A) {
      if (In.call(A, "key")) {
        var se = Object.getOwnPropertyDescriptor(A, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function It(A, se) {
      typeof A.ref == "string" && fa.current;
    }
    function tn(A, se) {
      {
        var De = function() {
          hi || (hi = !0, te("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        De.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: De,
          configurable: !0
        });
      }
    }
    function vn(A, se) {
      {
        var De = function() {
          xe || (xe = !0, te("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        De.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: De,
          configurable: !0
        });
      }
    }
    var on = function(A, se, De, Ue, st, lt, xt) {
      var wt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: A,
        key: se,
        ref: De,
        props: xt,
        // Record the component responsible for creating this element.
        _owner: lt
      };
      return wt._store = {}, Object.defineProperty(wt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(wt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ue
      }), Object.defineProperty(wt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: st
      }), Object.freeze && (Object.freeze(wt.props), Object.freeze(wt)), wt;
    };
    function Xn(A, se, De, Ue, st) {
      {
        var lt, xt = {}, wt = null, Tn = null;
        De !== void 0 && (Er(De), wt = "" + De), yt(se) && (Er(se.key), wt = "" + se.key), Be(se) && (Tn = se.ref, It(se, st));
        for (lt in se)
          In.call(se, lt) && !Qa.hasOwnProperty(lt) && (xt[lt] = se[lt]);
        if (A && A.defaultProps) {
          var rn = A.defaultProps;
          for (lt in rn)
            xt[lt] === void 0 && (xt[lt] = rn[lt]);
        }
        if (wt || Tn) {
          var un = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          wt && tn(xt, un), Tn && vn(xt, un);
        }
        return on(A, wt, Tn, st, Ue, fa.current, xt);
      }
    }
    var nn = V.ReactCurrentOwner, Gt = V.ReactDebugCurrentFrame;
    function Wt(A) {
      if (A) {
        var se = A._owner, De = Vn(A.type, A._source, se ? se.type : null);
        Gt.setExtraStackFrame(De);
      } else
        Gt.setExtraStackFrame(null);
    }
    var da;
    da = !1;
    function wr(A) {
      return typeof A == "object" && A !== null && A.$$typeof === u;
    }
    function Ra() {
      {
        if (nn.current) {
          var A = Ee(nn.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function Bi(A) {
      return "";
    }
    var ao = {};
    function io(A) {
      {
        var se = Ra();
        if (!se) {
          var De = typeof A == "string" ? A : A.displayName || A.name;
          De && (se = `

Check the top-level render call using <` + De + ">.");
        }
        return se;
      }
    }
    function gl(A, se) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var De = io(se);
        if (ao[De])
          return;
        ao[De] = !0;
        var Ue = "";
        A && A._owner && A._owner !== nn.current && (Ue = " It was passed a child from " + Ee(A._owner.type) + "."), Wt(A), te('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', De, Ue), Wt(null);
      }
    }
    function Sl(A, se) {
      {
        if (typeof A != "object")
          return;
        if (Bn(A))
          for (var De = 0; De < A.length; De++) {
            var Ue = A[De];
            wr(Ue) && gl(Ue, se);
          }
        else if (wr(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var st = W(A);
          if (typeof st == "function" && st !== A.entries)
            for (var lt = st.call(A), xt; !(xt = lt.next()).done; )
              wr(xt.value) && gl(xt.value, se);
        }
      }
    }
    function lo(A) {
      {
        var se = A.type;
        if (se == null || typeof se == "string")
          return;
        var De;
        if (typeof se == "function")
          De = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === C || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === O))
          De = se.propTypes;
        else
          return;
        if (De) {
          var Ue = Ee(se);
          qn(De, A.props, "prop", Ue, A);
        } else if (se.PropTypes !== void 0 && !da) {
          da = !0;
          var st = Ee(se);
          te("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", st || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && te("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(A) {
      {
        for (var se = Object.keys(A.props), De = 0; De < se.length; De++) {
          var Ue = se[De];
          if (Ue !== "children" && Ue !== "key") {
            Wt(A), te("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ue), Wt(null);
            break;
          }
        }
        A.ref !== null && (Wt(A), te("Invalid attribute `ref` supplied to `React.Fragment`."), Wt(null));
      }
    }
    var Dr = {};
    function rr(A, se, De, Ue, st, lt) {
      {
        var xt = Tt(A);
        if (!xt) {
          var wt = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (wt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Bi();
          Tn ? wt += Tn : wt += Ra();
          var rn;
          A === null ? rn = "null" : Bn(A) ? rn = "array" : A !== void 0 && A.$$typeof === u ? (rn = "<" + (Ee(A.type) || "Unknown") + " />", wt = " Did you accidentally export a JSX literal instead of a component?") : rn = typeof A, te("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", rn, wt);
        }
        var un = Xn(A, se, De, st, lt);
        if (un == null)
          return un;
        if (xt) {
          var ar = se.children;
          if (ar !== void 0)
            if (Ue)
              if (Bn(ar)) {
                for (var Xa = 0; Xa < ar.length; Xa++)
                  Sl(ar[Xa], A);
                Object.freeze && Object.freeze(ar);
              } else
                te("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Sl(ar, A);
        }
        if (In.call(se, "key")) {
          var Ka = Ee(A), ct = Object.keys(se).filter(function(oo) {
            return oo !== "key";
          }), vt = ct.length > 0 ? "{key: someKey, " + ct.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Dr[Ka + vt]) {
            var Ja = ct.length > 0 ? "{" + ct.join(": ..., ") + ": ...}" : "{}";
            te(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, vt, Ka, Ja, Ka), Dr[Ka + vt] = !0;
          }
        }
        return A === h ? _r(un) : lo(un), un;
      }
    }
    function mi(A, se, De) {
      return rr(A, se, De, !0);
    }
    function qa(A, se, De) {
      return rr(A, se, De, !1);
    }
    var yi = qa, gi = mi;
    sv.Fragment = h, sv.jsx = yi, sv.jsxs = gi;
  })()), sv;
}
var kT;
function nO() {
  return kT || (kT = 1, process.env.NODE_ENV === "production" ? iy.exports = eO() : iy.exports = tO()), iy.exports;
}
var Yr = nO(), fn = pv();
const gr = /* @__PURE__ */ WT(fn);
var td = {}, oy = { exports: {} }, Ya = {}, uy = { exports: {} }, kE = {};
var MT;
function rO() {
  return MT || (MT = 1, (function(f) {
    function u(pe, Ce) {
      var Se = pe.length;
      pe.push(Ce);
      e: for (; 0 < Se; ) {
        var H = Se - 1 >>> 1, ae = pe[H];
        if (0 < E(ae, Ce)) pe[H] = Ce, pe[Se] = ae, Se = H;
        else break e;
      }
    }
    function d(pe) {
      return pe.length === 0 ? null : pe[0];
    }
    function h(pe) {
      if (pe.length === 0) return null;
      var Ce = pe[0], Se = pe.pop();
      if (Se !== Ce) {
        pe[0] = Se;
        e: for (var H = 0, ae = pe.length, et = ae >>> 1; H < et; ) {
          var tt = 2 * (H + 1) - 1, St = pe[tt], ht = tt + 1, pt = pe[ht];
          if (0 > E(St, Se)) ht < ae && 0 > E(pt, St) ? (pe[H] = pt, pe[ht] = Se, H = ht) : (pe[H] = St, pe[tt] = Se, H = tt);
          else if (ht < ae && 0 > E(pt, Se)) pe[H] = pt, pe[ht] = Se, H = ht;
          else break e;
        }
      }
      return Ce;
    }
    function E(pe, Ce) {
      var Se = pe.sortIndex - Ce.sortIndex;
      return Se !== 0 ? Se : pe.id - Ce.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var S = performance;
      f.unstable_now = function() {
        return S.now();
      };
    } else {
      var g = Date, R = g.now();
      f.unstable_now = function() {
        return g.now() - R;
      };
    }
    var C = [], D = [], M = 1, O = null, N = 3, L = !1, J = !1, I = !1, W = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, te = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Z(pe) {
      for (var Ce = d(D); Ce !== null; ) {
        if (Ce.callback === null) h(D);
        else if (Ce.startTime <= pe) h(D), Ce.sortIndex = Ce.expirationTime, u(C, Ce);
        else break;
        Ce = d(D);
      }
    }
    function oe(pe) {
      if (I = !1, Z(pe), !J) if (d(C) !== null) J = !0, bt(le);
      else {
        var Ce = d(D);
        Ce !== null && we(oe, Ce.startTime - pe);
      }
    }
    function le(pe, Ce) {
      J = !1, I && (I = !1, V(Ve), Ve = -1), L = !0;
      var Se = N;
      try {
        for (Z(Ce), O = d(C); O !== null && (!(O.expirationTime > Ce) || pe && !me()); ) {
          var H = O.callback;
          if (typeof H == "function") {
            O.callback = null, N = O.priorityLevel;
            var ae = H(O.expirationTime <= Ce);
            Ce = f.unstable_now(), typeof ae == "function" ? O.callback = ae : O === d(C) && h(C), Z(Ce);
          } else h(C);
          O = d(C);
        }
        if (O !== null) var et = !0;
        else {
          var tt = d(D);
          tt !== null && we(oe, tt.startTime - Ce), et = !1;
        }
        return et;
      } finally {
        O = null, N = Se, L = !1;
      }
    }
    var Me = !1, ue = null, Ve = -1, fe = 5, Tt = -1;
    function me() {
      return !(f.unstable_now() - Tt < fe);
    }
    function be() {
      if (ue !== null) {
        var pe = f.unstable_now();
        Tt = pe;
        var Ce = !0;
        try {
          Ce = ue(!0, pe);
        } finally {
          Ce ? Ee() : (Me = !1, ue = null);
        }
      } else Me = !1;
    }
    var Ee;
    if (typeof te == "function") Ee = function() {
      te(be);
    };
    else if (typeof MessageChannel < "u") {
      var Qe = new MessageChannel(), dt = Qe.port2;
      Qe.port1.onmessage = be, Ee = function() {
        dt.postMessage(null);
      };
    } else Ee = function() {
      W(be, 0);
    };
    function bt(pe) {
      ue = pe, Me || (Me = !0, Ee());
    }
    function we(pe, Ce) {
      Ve = W(function() {
        pe(f.unstable_now());
      }, Ce);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(pe) {
      pe.callback = null;
    }, f.unstable_continueExecution = function() {
      J || L || (J = !0, bt(le));
    }, f.unstable_forceFrameRate = function(pe) {
      0 > pe || 125 < pe ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : fe = 0 < pe ? Math.floor(1e3 / pe) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, f.unstable_getFirstCallbackNode = function() {
      return d(C);
    }, f.unstable_next = function(pe) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var Ce = 3;
          break;
        default:
          Ce = N;
      }
      var Se = N;
      N = Ce;
      try {
        return pe();
      } finally {
        N = Se;
      }
    }, f.unstable_pauseExecution = function() {
    }, f.unstable_requestPaint = function() {
    }, f.unstable_runWithPriority = function(pe, Ce) {
      switch (pe) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          pe = 3;
      }
      var Se = N;
      N = pe;
      try {
        return Ce();
      } finally {
        N = Se;
      }
    }, f.unstable_scheduleCallback = function(pe, Ce, Se) {
      var H = f.unstable_now();
      switch (typeof Se == "object" && Se !== null ? (Se = Se.delay, Se = typeof Se == "number" && 0 < Se ? H + Se : H) : Se = H, pe) {
        case 1:
          var ae = -1;
          break;
        case 2:
          ae = 250;
          break;
        case 5:
          ae = 1073741823;
          break;
        case 4:
          ae = 1e4;
          break;
        default:
          ae = 5e3;
      }
      return ae = Se + ae, pe = { id: M++, callback: Ce, priorityLevel: pe, startTime: Se, expirationTime: ae, sortIndex: -1 }, Se > H ? (pe.sortIndex = Se, u(D, pe), d(C) === null && pe === d(D) && (I ? (V(Ve), Ve = -1) : I = !0, we(oe, Se - H))) : (pe.sortIndex = ae, u(C, pe), J || L || (J = !0, bt(le))), pe;
    }, f.unstable_shouldYield = me, f.unstable_wrapCallback = function(pe) {
      var Ce = N;
      return function() {
        var Se = N;
        N = Ce;
        try {
          return pe.apply(this, arguments);
        } finally {
          N = Se;
        }
      };
    };
  })(kE)), kE;
}
var ME = {};
var LT;
function aO() {
  return LT || (LT = 1, (function(f) {
    process.env.NODE_ENV !== "production" && (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var u = !1, d = 5;
      function h(xe, Be) {
        var yt = xe.length;
        xe.push(Be), g(xe, Be, yt);
      }
      function E(xe) {
        return xe.length === 0 ? null : xe[0];
      }
      function S(xe) {
        if (xe.length === 0)
          return null;
        var Be = xe[0], yt = xe.pop();
        return yt !== Be && (xe[0] = yt, R(xe, yt, 0)), Be;
      }
      function g(xe, Be, yt) {
        for (var It = yt; It > 0; ) {
          var tn = It - 1 >>> 1, vn = xe[tn];
          if (C(vn, Be) > 0)
            xe[tn] = Be, xe[It] = vn, It = tn;
          else
            return;
        }
      }
      function R(xe, Be, yt) {
        for (var It = yt, tn = xe.length, vn = tn >>> 1; It < vn; ) {
          var on = (It + 1) * 2 - 1, Xn = xe[on], nn = on + 1, Gt = xe[nn];
          if (C(Xn, Be) < 0)
            nn < tn && C(Gt, Xn) < 0 ? (xe[It] = Gt, xe[nn] = Be, It = nn) : (xe[It] = Xn, xe[on] = Be, It = on);
          else if (nn < tn && C(Gt, Be) < 0)
            xe[It] = Gt, xe[nn] = Be, It = nn;
          else
            return;
        }
      }
      function C(xe, Be) {
        var yt = xe.sortIndex - Be.sortIndex;
        return yt !== 0 ? yt : xe.id - Be.id;
      }
      var D = 1, M = 2, O = 3, N = 4, L = 5;
      function J(xe, Be) {
      }
      var I = typeof performance == "object" && typeof performance.now == "function";
      if (I) {
        var W = performance;
        f.unstable_now = function() {
          return W.now();
        };
      } else {
        var V = Date, te = V.now();
        f.unstable_now = function() {
          return V.now() - te;
        };
      }
      var Z = 1073741823, oe = -1, le = 250, Me = 5e3, ue = 1e4, Ve = Z, fe = [], Tt = [], me = 1, be = null, Ee = O, Qe = !1, dt = !1, bt = !1, we = typeof setTimeout == "function" ? setTimeout : null, pe = typeof clearTimeout == "function" ? clearTimeout : null, Ce = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Se(xe) {
        for (var Be = E(Tt); Be !== null; ) {
          if (Be.callback === null)
            S(Tt);
          else if (Be.startTime <= xe)
            S(Tt), Be.sortIndex = Be.expirationTime, h(fe, Be);
          else
            return;
          Be = E(Tt);
        }
      }
      function H(xe) {
        if (bt = !1, Se(xe), !dt)
          if (E(fe) !== null)
            dt = !0, Mn(ae);
          else {
            var Be = E(Tt);
            Be !== null && Er(H, Be.startTime - xe);
          }
      }
      function ae(xe, Be) {
        dt = !1, bt && (bt = !1, fa()), Qe = !0;
        var yt = Ee;
        try {
          var It;
          if (!u) return et(xe, Be);
        } finally {
          be = null, Ee = yt, Qe = !1;
        }
      }
      function et(xe, Be) {
        var yt = Be;
        for (Se(yt), be = E(fe); be !== null && !(be.expirationTime > yt && (!xe || vi())); ) {
          var It = be.callback;
          if (typeof It == "function") {
            be.callback = null, Ee = be.priorityLevel;
            var tn = be.expirationTime <= yt, vn = It(tn);
            yt = f.unstable_now(), typeof vn == "function" ? be.callback = vn : be === E(fe) && S(fe), Se(yt);
          } else
            S(fe);
          be = E(fe);
        }
        if (be !== null)
          return !0;
        var on = E(Tt);
        return on !== null && Er(H, on.startTime - yt), !1;
      }
      function tt(xe, Be) {
        switch (xe) {
          case D:
          case M:
          case O:
          case N:
          case L:
            break;
          default:
            xe = O;
        }
        var yt = Ee;
        Ee = xe;
        try {
          return Be();
        } finally {
          Ee = yt;
        }
      }
      function St(xe) {
        var Be;
        switch (Ee) {
          case D:
          case M:
          case O:
            Be = O;
            break;
          default:
            Be = Ee;
            break;
        }
        var yt = Ee;
        Ee = Be;
        try {
          return xe();
        } finally {
          Ee = yt;
        }
      }
      function ht(xe) {
        var Be = Ee;
        return function() {
          var yt = Ee;
          Ee = Be;
          try {
            return xe.apply(this, arguments);
          } finally {
            Ee = yt;
          }
        };
      }
      function pt(xe, Be, yt) {
        var It = f.unstable_now(), tn;
        if (typeof yt == "object" && yt !== null) {
          var vn = yt.delay;
          typeof vn == "number" && vn > 0 ? tn = It + vn : tn = It;
        } else
          tn = It;
        var on;
        switch (xe) {
          case D:
            on = oe;
            break;
          case M:
            on = le;
            break;
          case L:
            on = Ve;
            break;
          case N:
            on = ue;
            break;
          case O:
          default:
            on = Me;
            break;
        }
        var Xn = tn + on, nn = {
          id: me++,
          callback: Be,
          priorityLevel: xe,
          startTime: tn,
          expirationTime: Xn,
          sortIndex: -1
        };
        return tn > It ? (nn.sortIndex = tn, h(Tt, nn), E(fe) === null && nn === E(Tt) && (bt ? fa() : bt = !0, Er(H, tn - It))) : (nn.sortIndex = Xn, h(fe, nn), !dt && !Qe && (dt = !0, Mn(ae))), nn;
      }
      function mt() {
      }
      function Et() {
        !dt && !Qe && (dt = !0, Mn(ae));
      }
      function Yt() {
        return E(fe);
      }
      function kn(xe) {
        xe.callback = null;
      }
      function Rr() {
        return Ee;
      }
      var wn = !1, nr = null, Vn = -1, In = d, Gr = -1;
      function vi() {
        var xe = f.unstable_now() - Gr;
        return !(xe < In);
      }
      function ca() {
      }
      function qn(xe) {
        if (xe < 0 || xe > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        xe > 0 ? In = Math.floor(1e3 / xe) : In = d;
      }
      var Cn = function() {
        if (nr !== null) {
          var xe = f.unstable_now();
          Gr = xe;
          var Be = !0, yt = !0;
          try {
            yt = nr(Be, xe);
          } finally {
            yt ? Bn() : (wn = !1, nr = null);
          }
        } else
          wn = !1;
      }, Bn;
      if (typeof Ce == "function")
        Bn = function() {
          Ce(Cn);
        };
      else if (typeof MessageChannel < "u") {
        var Sr = new MessageChannel(), Wa = Sr.port2;
        Sr.port1.onmessage = Cn, Bn = function() {
          Wa.postMessage(null);
        };
      } else
        Bn = function() {
          we(Cn, 0);
        };
      function Mn(xe) {
        nr = xe, wn || (wn = !0, Bn());
      }
      function Er(xe, Be) {
        Vn = we(function() {
          xe(f.unstable_now());
        }, Be);
      }
      function fa() {
        pe(Vn), Vn = -1;
      }
      var Qa = ca, hi = null;
      f.unstable_IdlePriority = L, f.unstable_ImmediatePriority = D, f.unstable_LowPriority = N, f.unstable_NormalPriority = O, f.unstable_Profiling = hi, f.unstable_UserBlockingPriority = M, f.unstable_cancelCallback = kn, f.unstable_continueExecution = Et, f.unstable_forceFrameRate = qn, f.unstable_getCurrentPriorityLevel = Rr, f.unstable_getFirstCallbackNode = Yt, f.unstable_next = St, f.unstable_pauseExecution = mt, f.unstable_requestPaint = Qa, f.unstable_runWithPriority = tt, f.unstable_scheduleCallback = pt, f.unstable_shouldYield = vi, f.unstable_wrapCallback = ht, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  })(ME)), ME;
}
var zT;
function QT() {
  return zT || (zT = 1, process.env.NODE_ENV === "production" ? uy.exports = rO() : uy.exports = aO()), uy.exports;
}
var NT;
function iO() {
  if (NT) return Ya;
  NT = 1;
  var f = pv(), u = QT();
  function d(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var h = /* @__PURE__ */ new Set(), E = {};
  function S(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (E[n] = r, n = 0; n < r.length; n++) h.add(r[n]);
  }
  var R = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), C = Object.prototype.hasOwnProperty, D = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = {}, O = {};
  function N(n) {
    return C.call(O, n) ? !0 : C.call(M, n) ? !1 : D.test(n) ? O[n] = !0 : (M[n] = !0, !1);
  }
  function L(n, r, l, s) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function J(n, r, l, s) {
    if (r === null || typeof r > "u" || L(n, r, l, s)) return !0;
    if (s) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function I(n, r, l, s, p, m, b) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = s, this.attributeNamespace = p, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = m, this.removeEmptyString = b;
  }
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    W[n] = new I(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    W[r] = new I(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    W[n] = new I(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    W[n] = new I(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    W[n] = new I(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    W[n] = new I(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    W[n] = new I(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    W[n] = new I(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    W[n] = new I(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var V = /[\-:]([a-z])/g;
  function te(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      V,
      te
    );
    W[r] = new I(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(V, te);
    W[r] = new I(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(V, te);
    W[r] = new I(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    W[n] = new I(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new I("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    W[n] = new I(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Z(n, r, l, s) {
    var p = W.hasOwnProperty(r) ? W[r] : null;
    (p !== null ? p.type !== 0 : s || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (J(r, l, p, s) && (l = null), s || p === null ? N(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : p.mustUseProperty ? n[p.propertyName] = l === null ? p.type === 3 ? !1 : "" : l : (r = p.attributeName, s = p.attributeNamespace, l === null ? n.removeAttribute(r) : (p = p.type, l = p === 3 || p === 4 && l === !0 ? "" : "" + l, s ? n.setAttributeNS(s, r, l) : n.setAttribute(r, l))));
  }
  var oe = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, le = Symbol.for("react.element"), Me = Symbol.for("react.portal"), ue = Symbol.for("react.fragment"), Ve = Symbol.for("react.strict_mode"), fe = Symbol.for("react.profiler"), Tt = Symbol.for("react.provider"), me = Symbol.for("react.context"), be = Symbol.for("react.forward_ref"), Ee = Symbol.for("react.suspense"), Qe = Symbol.for("react.suspense_list"), dt = Symbol.for("react.memo"), bt = Symbol.for("react.lazy"), we = Symbol.for("react.offscreen"), pe = Symbol.iterator;
  function Ce(n) {
    return n === null || typeof n != "object" ? null : (n = pe && n[pe] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Se = Object.assign, H;
  function ae(n) {
    if (H === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      H = r && r[1] || "";
    }
    return `
` + H + n;
  }
  var et = !1;
  function tt(n, r) {
    if (!n || et) return "";
    et = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (X) {
          var s = X;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (X) {
          s = X;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (X) {
          s = X;
        }
        n();
      }
    } catch (X) {
      if (X && s && typeof X.stack == "string") {
        for (var p = X.stack.split(`
`), m = s.stack.split(`
`), b = p.length - 1, k = m.length - 1; 1 <= b && 0 <= k && p[b] !== m[k]; ) k--;
        for (; 1 <= b && 0 <= k; b--, k--) if (p[b] !== m[k]) {
          if (b !== 1 || k !== 1)
            do
              if (b--, k--, 0 > k || p[b] !== m[k]) {
                var P = `
` + p[b].replace(" at new ", " at ");
                return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)), P;
              }
            while (1 <= b && 0 <= k);
          break;
        }
      }
    } finally {
      et = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? ae(n) : "";
  }
  function St(n) {
    switch (n.tag) {
      case 5:
        return ae(n.type);
      case 16:
        return ae("Lazy");
      case 13:
        return ae("Suspense");
      case 19:
        return ae("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = tt(n.type, !1), n;
      case 11:
        return n = tt(n.type.render, !1), n;
      case 1:
        return n = tt(n.type, !0), n;
      default:
        return "";
    }
  }
  function ht(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ue:
        return "Fragment";
      case Me:
        return "Portal";
      case fe:
        return "Profiler";
      case Ve:
        return "StrictMode";
      case Ee:
        return "Suspense";
      case Qe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case me:
        return (n.displayName || "Context") + ".Consumer";
      case Tt:
        return (n._context.displayName || "Context") + ".Provider";
      case be:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case dt:
        return r = n.displayName || null, r !== null ? r : ht(n.type) || "Memo";
      case bt:
        r = n._payload, n = n._init;
        try {
          return ht(n(r));
        } catch {
        }
    }
    return null;
  }
  function pt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ht(r);
      case 8:
        return r === Ve ? "StrictMode" : "Mode";
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
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function mt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Et(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Yt(n) {
    var r = Et(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), s = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var p = l.get, m = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(b) {
        s = "" + b, m.call(this, b);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(b) {
        s = "" + b;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function kn(n) {
    n._valueTracker || (n._valueTracker = Yt(n));
  }
  function Rr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), s = "";
    return n && (s = Et(n) ? n.checked ? "true" : "false" : n.value), n = s, n !== l ? (r.setValue(n), !0) : !1;
  }
  function wn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function nr(n, r) {
    var l = r.checked;
    return Se({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Vn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, s = r.checked != null ? r.checked : r.defaultChecked;
    l = mt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: s, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function In(n, r) {
    r = r.checked, r != null && Z(n, "checked", r, !1);
  }
  function Gr(n, r) {
    In(n, r);
    var l = mt(r.value), s = r.type;
    if (l != null) s === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (s === "submit" || s === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ca(n, r.type, l) : r.hasOwnProperty("defaultValue") && ca(n, r.type, mt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function vi(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var s = r.type;
      if (!(s !== "submit" && s !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function ca(n, r, l) {
    (r !== "number" || wn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var qn = Array.isArray;
  function Cn(n, r, l, s) {
    if (n = n.options, r) {
      r = {};
      for (var p = 0; p < l.length; p++) r["$" + l[p]] = !0;
      for (l = 0; l < n.length; l++) p = r.hasOwnProperty("$" + n[l].value), n[l].selected !== p && (n[l].selected = p), p && s && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + mt(l), r = null, p = 0; p < n.length; p++) {
        if (n[p].value === l) {
          n[p].selected = !0, s && (n[p].defaultSelected = !0);
          return;
        }
        r !== null || n[p].disabled || (r = n[p]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Bn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(d(91));
    return Se({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Sr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(d(92));
        if (qn(l)) {
          if (1 < l.length) throw Error(d(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: mt(l) };
  }
  function Wa(n, r) {
    var l = mt(r.value), s = mt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), s != null && (n.defaultValue = "" + s);
  }
  function Mn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Er(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function fa(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Er(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Qa, hi = (function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, s, p) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, s, p);
      });
    } : n;
  })(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Qa = Qa || document.createElement("div"), Qa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Qa.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function xe(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Be = {
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
  }, yt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Be).forEach(function(n) {
    yt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Be[r] = Be[n];
    });
  });
  function It(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Be.hasOwnProperty(n) && Be[n] ? ("" + r).trim() : r + "px";
  }
  function tn(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var s = l.indexOf("--") === 0, p = It(l, r[l], s);
      l === "float" && (l = "cssFloat"), s ? n.setProperty(l, p) : n[l] = p;
    }
  }
  var vn = Se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function on(n, r) {
    if (r) {
      if (vn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(d(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(d(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(d(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(d(62));
    }
  }
  function Xn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var nn = null;
  function Gt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Wt = null, da = null, wr = null;
  function Ra(n) {
    if (n = Ge(n)) {
      if (typeof Wt != "function") throw Error(d(280));
      var r = n.stateNode;
      r && (r = mn(r), Wt(n.stateNode, n.type, r));
    }
  }
  function Bi(n) {
    da ? wr ? wr.push(n) : wr = [n] : da = n;
  }
  function ao() {
    if (da) {
      var n = da, r = wr;
      if (wr = da = null, Ra(n), r) for (n = 0; n < r.length; n++) Ra(r[n]);
    }
  }
  function io(n, r) {
    return n(r);
  }
  function gl() {
  }
  var Sl = !1;
  function lo(n, r, l) {
    if (Sl) return n(r, l);
    Sl = !0;
    try {
      return io(n, r, l);
    } finally {
      Sl = !1, (da !== null || wr !== null) && (gl(), ao());
    }
  }
  function _r(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var s = mn(l);
    if (s === null) return null;
    l = s[r];
    e: switch (r) {
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
        (s = !s.disabled) || (n = n.type, s = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !s;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(d(231, r, typeof l));
    return l;
  }
  var Dr = !1;
  if (R) try {
    var rr = {};
    Object.defineProperty(rr, "passive", { get: function() {
      Dr = !0;
    } }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr);
  } catch {
    Dr = !1;
  }
  function mi(n, r, l, s, p, m, b, k, P) {
    var X = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, X);
    } catch (ve) {
      this.onError(ve);
    }
  }
  var qa = !1, yi = null, gi = !1, A = null, se = { onError: function(n) {
    qa = !0, yi = n;
  } };
  function De(n, r, l, s, p, m, b, k, P) {
    qa = !1, yi = null, mi.apply(se, arguments);
  }
  function Ue(n, r, l, s, p, m, b, k, P) {
    if (De.apply(this, arguments), qa) {
      if (qa) {
        var X = yi;
        qa = !1, yi = null;
      } else throw Error(d(198));
      gi || (gi = !0, A = X);
    }
  }
  function st(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function lt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function xt(n) {
    if (st(n) !== n) throw Error(d(188));
  }
  function wt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = st(n), r === null) throw Error(d(188));
      return r !== n ? null : n;
    }
    for (var l = n, s = r; ; ) {
      var p = l.return;
      if (p === null) break;
      var m = p.alternate;
      if (m === null) {
        if (s = p.return, s !== null) {
          l = s;
          continue;
        }
        break;
      }
      if (p.child === m.child) {
        for (m = p.child; m; ) {
          if (m === l) return xt(p), n;
          if (m === s) return xt(p), r;
          m = m.sibling;
        }
        throw Error(d(188));
      }
      if (l.return !== s.return) l = p, s = m;
      else {
        for (var b = !1, k = p.child; k; ) {
          if (k === l) {
            b = !0, l = p, s = m;
            break;
          }
          if (k === s) {
            b = !0, s = p, l = m;
            break;
          }
          k = k.sibling;
        }
        if (!b) {
          for (k = m.child; k; ) {
            if (k === l) {
              b = !0, l = m, s = p;
              break;
            }
            if (k === s) {
              b = !0, s = m, l = p;
              break;
            }
            k = k.sibling;
          }
          if (!b) throw Error(d(189));
        }
      }
      if (l.alternate !== s) throw Error(d(190));
    }
    if (l.tag !== 3) throw Error(d(188));
    return l.stateNode.current === l ? n : r;
  }
  function Tn(n) {
    return n = wt(n), n !== null ? rn(n) : null;
  }
  function rn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = rn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var un = u.unstable_scheduleCallback, ar = u.unstable_cancelCallback, Xa = u.unstable_shouldYield, Ka = u.unstable_requestPaint, ct = u.unstable_now, vt = u.unstable_getCurrentPriorityLevel, Ja = u.unstable_ImmediatePriority, oo = u.unstable_UserBlockingPriority, uo = u.unstable_NormalPriority, El = u.unstable_LowPriority, eu = u.unstable_IdlePriority, wl = null, Wr = null;
  function Ju(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(wl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Or = Math.clz32 ? Math.clz32 : tu, hc = Math.log, mc = Math.LN2;
  function tu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (hc(n) / mc | 0) | 0;
  }
  var Cl = 64, pa = 4194304;
  function Za(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ei(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var s = 0, p = n.suspendedLanes, m = n.pingedLanes, b = l & 268435455;
    if (b !== 0) {
      var k = b & ~p;
      k !== 0 ? s = Za(k) : (m &= b, m !== 0 && (s = Za(m)));
    } else b = l & ~p, b !== 0 ? s = Za(b) : m !== 0 && (s = Za(m));
    if (s === 0) return 0;
    if (r !== 0 && r !== s && (r & p) === 0 && (p = s & -s, m = r & -r, p >= m || p === 16 && (m & 4194240) !== 0)) return r;
    if ((s & 4) !== 0 && (s |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= s; 0 < r; ) l = 31 - Or(r), p = 1 << l, s |= n[l], r &= ~p;
    return s;
  }
  function nu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function so(n, r) {
    for (var l = n.suspendedLanes, s = n.pingedLanes, p = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var b = 31 - Or(m), k = 1 << b, P = p[b];
      P === -1 ? ((k & l) === 0 || (k & s) !== 0) && (p[b] = nu(k, r)) : P <= r && (n.expiredLanes |= k), m &= ~k;
    }
  }
  function Tl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ru() {
    var n = Cl;
    return Cl <<= 1, (Cl & 4194240) === 0 && (Cl = 64), n;
  }
  function au(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function $i(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Or(r), n[r] = l;
  }
  function rd(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var s = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var p = 31 - Or(l), m = 1 << p;
      r[p] = 0, s[p] = -1, n[p] = -1, l &= ~m;
    }
  }
  function Yi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var s = 31 - Or(l), p = 1 << s;
      p & r | n[s] & r && (n[s] |= r), l &= ~p;
    }
  }
  var Pt = 0;
  function iu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var zt, Zu, Si, it, lu, ir = !1, Ei = [], kr = null, wi = null, sn = null, Qt = /* @__PURE__ */ new Map(), bl = /* @__PURE__ */ new Map(), $n = [], Mr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function _a(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        kr = null;
        break;
      case "dragenter":
      case "dragleave":
        wi = null;
        break;
      case "mouseover":
      case "mouseout":
        sn = null;
        break;
      case "pointerover":
      case "pointerout":
        Qt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bl.delete(r.pointerId);
    }
  }
  function co(n, r, l, s, p, m) {
    return n === null || n.nativeEvent !== m ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: s, nativeEvent: m, targetContainers: [p] }, r !== null && (r = Ge(r), r !== null && Zu(r)), n) : (n.eventSystemFlags |= s, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
  }
  function es(n, r, l, s, p) {
    switch (r) {
      case "focusin":
        return kr = co(kr, n, r, l, s, p), !0;
      case "dragenter":
        return wi = co(wi, n, r, l, s, p), !0;
      case "mouseover":
        return sn = co(sn, n, r, l, s, p), !0;
      case "pointerover":
        var m = p.pointerId;
        return Qt.set(m, co(Qt.get(m) || null, n, r, l, s, p)), !0;
      case "gotpointercapture":
        return m = p.pointerId, bl.set(m, co(bl.get(m) || null, n, r, l, s, p)), !0;
    }
    return !1;
  }
  function ts(n) {
    var r = Eo(n.target);
    if (r !== null) {
      var l = st(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = lt(l), r !== null) {
            n.blockedOn = r, lu(n.priority, function() {
              Si(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function xl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = su(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var s = new l.constructor(l.type, l);
        nn = s, l.target.dispatchEvent(s), nn = null;
      } else return r = Ge(l), r !== null && Zu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function fo(n, r, l) {
    xl(n) && l.delete(r);
  }
  function ad() {
    ir = !1, kr !== null && xl(kr) && (kr = null), wi !== null && xl(wi) && (wi = null), sn !== null && xl(sn) && (sn = null), Qt.forEach(fo), bl.forEach(fo);
  }
  function Da(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ir || (ir = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, ad)));
  }
  function ti(n) {
    function r(p) {
      return Da(p, n);
    }
    if (0 < Ei.length) {
      Da(Ei[0], n);
      for (var l = 1; l < Ei.length; l++) {
        var s = Ei[l];
        s.blockedOn === n && (s.blockedOn = null);
      }
    }
    for (kr !== null && Da(kr, n), wi !== null && Da(wi, n), sn !== null && Da(sn, n), Qt.forEach(r), bl.forEach(r), l = 0; l < $n.length; l++) s = $n[l], s.blockedOn === n && (s.blockedOn = null);
    for (; 0 < $n.length && (l = $n[0], l.blockedOn === null); ) ts(l), l.blockedOn === null && $n.shift();
  }
  var Ci = oe.ReactCurrentBatchConfig, Oa = !0;
  function ou(n, r, l, s) {
    var p = Pt, m = Ci.transition;
    Ci.transition = null;
    try {
      Pt = 1, Rl(n, r, l, s);
    } finally {
      Pt = p, Ci.transition = m;
    }
  }
  function uu(n, r, l, s) {
    var p = Pt, m = Ci.transition;
    Ci.transition = null;
    try {
      Pt = 4, Rl(n, r, l, s);
    } finally {
      Pt = p, Ci.transition = m;
    }
  }
  function Rl(n, r, l, s) {
    if (Oa) {
      var p = su(n, r, l, s);
      if (p === null) Dc(n, r, s, po, l), _a(n, s);
      else if (es(p, n, r, l, s)) s.stopPropagation();
      else if (_a(n, s), r & 4 && -1 < Mr.indexOf(n)) {
        for (; p !== null; ) {
          var m = Ge(p);
          if (m !== null && zt(m), m = su(n, r, l, s), m === null && Dc(n, r, s, po, l), m === p) break;
          p = m;
        }
        p !== null && s.stopPropagation();
      } else Dc(n, r, s, null, l);
    }
  }
  var po = null;
  function su(n, r, l, s) {
    if (po = null, n = Gt(s), n = Eo(n), n !== null) if (r = st(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = lt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return po = n, null;
  }
  function cu(n) {
    switch (n) {
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
        switch (vt()) {
          case Ja:
            return 1;
          case oo:
            return 4;
          case uo:
          case El:
            return 16;
          case eu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ni = null, T = null, z = null;
  function q() {
    if (z) return z;
    var n, r = T, l = r.length, s, p = "value" in ni ? ni.value : ni.textContent, m = p.length;
    for (n = 0; n < l && r[n] === p[n]; n++) ;
    var b = l - n;
    for (s = 1; s <= b && r[l - s] === p[m - s]; s++) ;
    return z = p.slice(n, 1 < s ? 1 - s : void 0);
  }
  function ee(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Te() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function _e(n) {
    function r(l, s, p, m, b) {
      this._reactName = l, this._targetInst = p, this.type = s, this.nativeEvent = m, this.target = b, this.currentTarget = null;
      for (var k in n) n.hasOwnProperty(k) && (l = n[k], this[k] = l ? l(m) : m[k]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? Te : qe, this.isPropagationStopped = qe, this;
    }
    return Se(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Te);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Te);
    }, persist: function() {
    }, isPersistent: Te }), r;
  }
  var Je = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Rt = _e(Je), Nt = Se({}, Je, { view: 0, detail: 0 }), an = _e(Nt), qt, gt, Xt, hn = Se({}, Nt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: sd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Xt && (Xt && n.type === "mousemove" ? (qt = n.screenX - Xt.screenX, gt = n.screenY - Xt.screenY) : gt = qt = 0, Xt = n), qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : gt;
  } }), _l = _e(hn), ns = Se({}, hn, { dataTransfer: 0 }), Gi = _e(ns), rs = Se({}, Nt, { relatedTarget: 0 }), vo = _e(rs), id = Se({}, Je, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), yc = _e(id), ld = Se({}, Je, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), vv = _e(ld), od = Se({}, Je, { data: 0 }), ud = _e(od), hv = {
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
  }, mv = {
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
  }, vy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Wi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = vy[n]) ? !!r[n] : !1;
  }
  function sd() {
    return Wi;
  }
  var cd = Se({}, Nt, { key: function(n) {
    if (n.key) {
      var r = hv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = ee(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? mv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: sd, charCode: function(n) {
    return n.type === "keypress" ? ee(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? ee(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), fd = _e(cd), dd = Se({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), yv = _e(dd), gc = Se({}, Nt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: sd }), gv = _e(gc), Qr = Se({}, Je, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Qi = _e(Qr), Ln = Se({}, hn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), qi = _e(Ln), pd = [9, 13, 27, 32], fu = R && "CompositionEvent" in window, as = null;
  R && "documentMode" in document && (as = document.documentMode);
  var is = R && "TextEvent" in window && !as, Sv = R && (!fu || as && 8 < as && 11 >= as), Ev = " ", Sc = !1;
  function wv(n, r) {
    switch (n) {
      case "keyup":
        return pd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Cv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var du = !1;
  function Tv(n, r) {
    switch (n) {
      case "compositionend":
        return Cv(r);
      case "keypress":
        return r.which !== 32 ? null : (Sc = !0, Ev);
      case "textInput":
        return n = r.data, n === Ev && Sc ? null : n;
      default:
        return null;
    }
  }
  function hy(n, r) {
    if (du) return n === "compositionend" || !fu && wv(n, r) ? (n = q(), z = T = ni = null, du = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Sv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var my = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function bv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!my[n.type] : r === "textarea";
  }
  function vd(n, r, l, s) {
    Bi(s), r = fs(r, "onChange"), 0 < r.length && (l = new Rt("onChange", "change", null, l, s), n.push({ event: l, listeners: r }));
  }
  var Ti = null, ho = null;
  function xv(n) {
    go(n, 0);
  }
  function ls(n) {
    var r = ai(n);
    if (Rr(r)) return n;
  }
  function yy(n, r) {
    if (n === "change") return r;
  }
  var Rv = !1;
  if (R) {
    var hd;
    if (R) {
      var md = "oninput" in document;
      if (!md) {
        var _v = document.createElement("div");
        _v.setAttribute("oninput", "return;"), md = typeof _v.oninput == "function";
      }
      hd = md;
    } else hd = !1;
    Rv = hd && (!document.documentMode || 9 < document.documentMode);
  }
  function Dv() {
    Ti && (Ti.detachEvent("onpropertychange", Ov), ho = Ti = null);
  }
  function Ov(n) {
    if (n.propertyName === "value" && ls(ho)) {
      var r = [];
      vd(r, ho, n, Gt(n)), lo(xv, r);
    }
  }
  function gy(n, r, l) {
    n === "focusin" ? (Dv(), Ti = r, ho = l, Ti.attachEvent("onpropertychange", Ov)) : n === "focusout" && Dv();
  }
  function kv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ls(ho);
  }
  function Sy(n, r) {
    if (n === "click") return ls(r);
  }
  function Mv(n, r) {
    if (n === "input" || n === "change") return ls(r);
  }
  function Ey(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ri = typeof Object.is == "function" ? Object.is : Ey;
  function os(n, r) {
    if (ri(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), s = Object.keys(r);
    if (l.length !== s.length) return !1;
    for (s = 0; s < l.length; s++) {
      var p = l[s];
      if (!C.call(r, p) || !ri(n[p], r[p])) return !1;
    }
    return !0;
  }
  function Lv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Ec(n, r) {
    var l = Lv(n);
    n = 0;
    for (var s; l; ) {
      if (l.nodeType === 3) {
        if (s = n + l.textContent.length, n <= r && s >= r) return { node: l, offset: r - n };
        n = s;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Lv(l);
    }
  }
  function Dl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Dl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function us() {
    for (var n = window, r = wn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = wn(n.document);
    }
    return r;
  }
  function wc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function pu(n) {
    var r = us(), l = n.focusedElem, s = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Dl(l.ownerDocument.documentElement, l)) {
      if (s !== null && wc(l)) {
        if (r = s.start, n = s.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = l.textContent.length, m = Math.min(s.start, p);
          s = s.end === void 0 ? m : Math.min(s.end, p), !n.extend && m > s && (p = s, s = m, m = p), p = Ec(l, m);
          var b = Ec(
            l,
            s
          );
          p && b && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== b.node || n.focusOffset !== b.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), m > s ? (n.addRange(r), n.extend(b.node, b.offset)) : (r.setEnd(b.node, b.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var wy = R && "documentMode" in document && 11 >= document.documentMode, vu = null, yd = null, ss = null, gd = !1;
  function Sd(n, r, l) {
    var s = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    gd || vu == null || vu !== wn(s) || (s = vu, "selectionStart" in s && wc(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), ss && os(ss, s) || (ss = s, s = fs(yd, "onSelect"), 0 < s.length && (r = new Rt("onSelect", "select", null, r, l), n.push({ event: r, listeners: s }), r.target = vu)));
  }
  function Cc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var mo = { animationend: Cc("Animation", "AnimationEnd"), animationiteration: Cc("Animation", "AnimationIteration"), animationstart: Cc("Animation", "AnimationStart"), transitionend: Cc("Transition", "TransitionEnd") }, lr = {}, Ed = {};
  R && (Ed = document.createElement("div").style, "AnimationEvent" in window || (delete mo.animationend.animation, delete mo.animationiteration.animation, delete mo.animationstart.animation), "TransitionEvent" in window || delete mo.transitionend.transition);
  function Tc(n) {
    if (lr[n]) return lr[n];
    if (!mo[n]) return n;
    var r = mo[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Ed) return lr[n] = r[l];
    return n;
  }
  var zv = Tc("animationend"), Nv = Tc("animationiteration"), Av = Tc("animationstart"), Pv = Tc("transitionend"), wd = /* @__PURE__ */ new Map(), bc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ka(n, r) {
    wd.set(n, r), S(r, [n]);
  }
  for (var Cd = 0; Cd < bc.length; Cd++) {
    var yo = bc[Cd], Cy = yo.toLowerCase(), Ty = yo[0].toUpperCase() + yo.slice(1);
    ka(Cy, "on" + Ty);
  }
  ka(zv, "onAnimationEnd"), ka(Nv, "onAnimationIteration"), ka(Av, "onAnimationStart"), ka("dblclick", "onDoubleClick"), ka("focusin", "onFocus"), ka("focusout", "onBlur"), ka(Pv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), S("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), S("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), S("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), S("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var cs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Td = new Set("cancel close invalid load scroll toggle".split(" ").concat(cs));
  function xc(n, r, l) {
    var s = n.type || "unknown-event";
    n.currentTarget = l, Ue(s, r, void 0, n), n.currentTarget = null;
  }
  function go(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var s = n[l], p = s.event;
      s = s.listeners;
      e: {
        var m = void 0;
        if (r) for (var b = s.length - 1; 0 <= b; b--) {
          var k = s[b], P = k.instance, X = k.currentTarget;
          if (k = k.listener, P !== m && p.isPropagationStopped()) break e;
          xc(p, k, X), m = P;
        }
        else for (b = 0; b < s.length; b++) {
          if (k = s[b], P = k.instance, X = k.currentTarget, k = k.listener, P !== m && p.isPropagationStopped()) break e;
          xc(p, k, X), m = P;
        }
      }
    }
    if (gi) throw n = A, gi = !1, A = null, n;
  }
  function Bt(n, r) {
    var l = r[vs];
    l === void 0 && (l = r[vs] = /* @__PURE__ */ new Set());
    var s = n + "__bubble";
    l.has(s) || (Uv(r, n, 2, !1), l.add(s));
  }
  function Rc(n, r, l) {
    var s = 0;
    r && (s |= 4), Uv(l, n, s, r);
  }
  var _c = "_reactListening" + Math.random().toString(36).slice(2);
  function hu(n) {
    if (!n[_c]) {
      n[_c] = !0, h.forEach(function(l) {
        l !== "selectionchange" && (Td.has(l) || Rc(l, !1, n), Rc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[_c] || (r[_c] = !0, Rc("selectionchange", !1, r));
    }
  }
  function Uv(n, r, l, s) {
    switch (cu(r)) {
      case 1:
        var p = ou;
        break;
      case 4:
        p = uu;
        break;
      default:
        p = Rl;
    }
    l = p.bind(null, r, l, n), p = void 0, !Dr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), s ? p !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: p }) : n.addEventListener(r, l, !0) : p !== void 0 ? n.addEventListener(r, l, { passive: p }) : n.addEventListener(r, l, !1);
  }
  function Dc(n, r, l, s, p) {
    var m = s;
    if ((r & 1) === 0 && (r & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var b = s.tag;
      if (b === 3 || b === 4) {
        var k = s.stateNode.containerInfo;
        if (k === p || k.nodeType === 8 && k.parentNode === p) break;
        if (b === 4) for (b = s.return; b !== null; ) {
          var P = b.tag;
          if ((P === 3 || P === 4) && (P = b.stateNode.containerInfo, P === p || P.nodeType === 8 && P.parentNode === p)) return;
          b = b.return;
        }
        for (; k !== null; ) {
          if (b = Eo(k), b === null) return;
          if (P = b.tag, P === 5 || P === 6) {
            s = m = b;
            continue e;
          }
          k = k.parentNode;
        }
      }
      s = s.return;
    }
    lo(function() {
      var X = m, ve = Gt(l), ye = [];
      e: {
        var de = wd.get(n);
        if (de !== void 0) {
          var ze = Rt, Fe = n;
          switch (n) {
            case "keypress":
              if (ee(l) === 0) break e;
            case "keydown":
            case "keyup":
              ze = fd;
              break;
            case "focusin":
              Fe = "focus", ze = vo;
              break;
            case "focusout":
              Fe = "blur", ze = vo;
              break;
            case "beforeblur":
            case "afterblur":
              ze = vo;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ze = _l;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ze = Gi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ze = gv;
              break;
            case zv:
            case Nv:
            case Av:
              ze = yc;
              break;
            case Pv:
              ze = Qi;
              break;
            case "scroll":
              ze = an;
              break;
            case "wheel":
              ze = qi;
              break;
            case "copy":
            case "cut":
            case "paste":
              ze = vv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ze = yv;
          }
          var Ie = (r & 4) !== 0, Dn = !Ie && n === "scroll", B = Ie ? de !== null ? de + "Capture" : null : de;
          Ie = [];
          for (var F = X, G; F !== null; ) {
            G = F;
            var he = G.stateNode;
            if (G.tag === 5 && he !== null && (G = he, B !== null && (he = _r(F, B), he != null && Ie.push(mu(F, he, G)))), Dn) break;
            F = F.return;
          }
          0 < Ie.length && (de = new ze(de, Fe, null, l, ve), ye.push({ event: de, listeners: Ie }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (de = n === "mouseover" || n === "pointerover", ze = n === "mouseout" || n === "pointerout", de && l !== nn && (Fe = l.relatedTarget || l.fromElement) && (Eo(Fe) || Fe[Xi])) break e;
          if ((ze || de) && (de = ve.window === ve ? ve : (de = ve.ownerDocument) ? de.defaultView || de.parentWindow : window, ze ? (Fe = l.relatedTarget || l.toElement, ze = X, Fe = Fe ? Eo(Fe) : null, Fe !== null && (Dn = st(Fe), Fe !== Dn || Fe.tag !== 5 && Fe.tag !== 6) && (Fe = null)) : (ze = null, Fe = X), ze !== Fe)) {
            if (Ie = _l, he = "onMouseLeave", B = "onMouseEnter", F = "mouse", (n === "pointerout" || n === "pointerover") && (Ie = yv, he = "onPointerLeave", B = "onPointerEnter", F = "pointer"), Dn = ze == null ? de : ai(ze), G = Fe == null ? de : ai(Fe), de = new Ie(he, F + "leave", ze, l, ve), de.target = Dn, de.relatedTarget = G, he = null, Eo(ve) === X && (Ie = new Ie(B, F + "enter", Fe, l, ve), Ie.target = G, Ie.relatedTarget = Dn, he = Ie), Dn = he, ze && Fe) t: {
              for (Ie = ze, B = Fe, F = 0, G = Ie; G; G = Ol(G)) F++;
              for (G = 0, he = B; he; he = Ol(he)) G++;
              for (; 0 < F - G; ) Ie = Ol(Ie), F--;
              for (; 0 < G - F; ) B = Ol(B), G--;
              for (; F--; ) {
                if (Ie === B || B !== null && Ie === B.alternate) break t;
                Ie = Ol(Ie), B = Ol(B);
              }
              Ie = null;
            }
            else Ie = null;
            ze !== null && Fv(ye, de, ze, Ie, !1), Fe !== null && Dn !== null && Fv(ye, Dn, Fe, Ie, !0);
          }
        }
        e: {
          if (de = X ? ai(X) : window, ze = de.nodeName && de.nodeName.toLowerCase(), ze === "select" || ze === "input" && de.type === "file") var je = yy;
          else if (bv(de)) if (Rv) je = Mv;
          else {
            je = kv;
            var Ke = gy;
          }
          else (ze = de.nodeName) && ze.toLowerCase() === "input" && (de.type === "checkbox" || de.type === "radio") && (je = Sy);
          if (je && (je = je(n, X))) {
            vd(ye, je, l, ve);
            break e;
          }
          Ke && Ke(n, de, X), n === "focusout" && (Ke = de._wrapperState) && Ke.controlled && de.type === "number" && ca(de, "number", de.value);
        }
        switch (Ke = X ? ai(X) : window, n) {
          case "focusin":
            (bv(Ke) || Ke.contentEditable === "true") && (vu = Ke, yd = X, ss = null);
            break;
          case "focusout":
            ss = yd = vu = null;
            break;
          case "mousedown":
            gd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gd = !1, Sd(ye, l, ve);
            break;
          case "selectionchange":
            if (wy) break;
          case "keydown":
          case "keyup":
            Sd(ye, l, ve);
        }
        var Ze;
        if (fu) e: {
          switch (n) {
            case "compositionstart":
              var at = "onCompositionStart";
              break e;
            case "compositionend":
              at = "onCompositionEnd";
              break e;
            case "compositionupdate":
              at = "onCompositionUpdate";
              break e;
          }
          at = void 0;
        }
        else du ? wv(n, l) && (at = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (at = "onCompositionStart");
        at && (Sv && l.locale !== "ko" && (du || at !== "onCompositionStart" ? at === "onCompositionEnd" && du && (Ze = q()) : (ni = ve, T = "value" in ni ? ni.value : ni.textContent, du = !0)), Ke = fs(X, at), 0 < Ke.length && (at = new ud(at, n, null, l, ve), ye.push({ event: at, listeners: Ke }), Ze ? at.data = Ze : (Ze = Cv(l), Ze !== null && (at.data = Ze)))), (Ze = is ? Tv(n, l) : hy(n, l)) && (X = fs(X, "onBeforeInput"), 0 < X.length && (ve = new ud("onBeforeInput", "beforeinput", null, l, ve), ye.push({ event: ve, listeners: X }), ve.data = Ze));
      }
      go(ye, r);
    });
  }
  function mu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function fs(n, r) {
    for (var l = r + "Capture", s = []; n !== null; ) {
      var p = n, m = p.stateNode;
      p.tag === 5 && m !== null && (p = m, m = _r(n, l), m != null && s.unshift(mu(n, m, p)), m = _r(n, r), m != null && s.push(mu(n, m, p))), n = n.return;
    }
    return s;
  }
  function Ol(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Fv(n, r, l, s, p) {
    for (var m = r._reactName, b = []; l !== null && l !== s; ) {
      var k = l, P = k.alternate, X = k.stateNode;
      if (P !== null && P === s) break;
      k.tag === 5 && X !== null && (k = X, p ? (P = _r(l, m), P != null && b.unshift(mu(l, P, k))) : p || (P = _r(l, m), P != null && b.push(mu(l, P, k)))), l = l.return;
    }
    b.length !== 0 && n.push({ event: r, listeners: b });
  }
  var jv = /\r\n?/g, by = /\u0000|\uFFFD/g;
  function Hv(n) {
    return (typeof n == "string" ? n : "" + n).replace(jv, `
`).replace(by, "");
  }
  function Oc(n, r, l) {
    if (r = Hv(r), Hv(n) !== r && l) throw Error(d(425));
  }
  function kl() {
  }
  var ds = null, So = null;
  function kc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Mc = typeof setTimeout == "function" ? setTimeout : void 0, bd = typeof clearTimeout == "function" ? clearTimeout : void 0, Vv = typeof Promise == "function" ? Promise : void 0, yu = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vv < "u" ? function(n) {
    return Vv.resolve(null).then(n).catch(Lc);
  } : Mc;
  function Lc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function gu(n, r) {
    var l = r, s = 0;
    do {
      var p = l.nextSibling;
      if (n.removeChild(l), p && p.nodeType === 8) if (l = p.data, l === "/$") {
        if (s === 0) {
          n.removeChild(p), ti(r);
          return;
        }
        s--;
      } else l !== "$" && l !== "$?" && l !== "$!" || s++;
      l = p;
    } while (l);
    ti(r);
  }
  function bi(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Iv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ml = Math.random().toString(36).slice(2), xi = "__reactFiber$" + Ml, ps = "__reactProps$" + Ml, Xi = "__reactContainer$" + Ml, vs = "__reactEvents$" + Ml, Su = "__reactListeners$" + Ml, xy = "__reactHandles$" + Ml;
  function Eo(n) {
    var r = n[xi];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Xi] || l[xi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Iv(n); n !== null; ) {
          if (l = n[xi]) return l;
          n = Iv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ge(n) {
    return n = n[xi] || n[Xi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ai(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(d(33));
  }
  function mn(n) {
    return n[ps] || null;
  }
  var Ot = [], Ma = -1;
  function La(n) {
    return { current: n };
  }
  function ln(n) {
    0 > Ma || (n.current = Ot[Ma], Ot[Ma] = null, Ma--);
  }
  function Ye(n, r) {
    Ma++, Ot[Ma] = n.current, n.current = r;
  }
  var Cr = {}, En = La(Cr), Yn = La(!1), qr = Cr;
  function Xr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Cr;
    var s = n.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === r) return s.__reactInternalMemoizedMaskedChildContext;
    var p = {}, m;
    for (m in l) p[m] = r[m];
    return s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Eu() {
    ln(Yn), ln(En);
  }
  function Bv(n, r, l) {
    if (En.current !== Cr) throw Error(d(168));
    Ye(En, r), Ye(Yn, l);
  }
  function hs(n, r, l) {
    var s = n.stateNode;
    if (r = r.childContextTypes, typeof s.getChildContext != "function") return l;
    s = s.getChildContext();
    for (var p in s) if (!(p in r)) throw Error(d(108, pt(n) || "Unknown", p));
    return Se({}, l, s);
  }
  function Kn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Cr, qr = En.current, Ye(En, n), Ye(Yn, Yn.current), !0;
  }
  function zc(n, r, l) {
    var s = n.stateNode;
    if (!s) throw Error(d(169));
    l ? (n = hs(n, r, qr), s.__reactInternalMemoizedMergedChildContext = n, ln(Yn), ln(En), Ye(En, n)) : ln(Yn), Ye(Yn, l);
  }
  var Ri = null, wu = !1, Ki = !1;
  function Nc(n) {
    Ri === null ? Ri = [n] : Ri.push(n);
  }
  function Ll(n) {
    wu = !0, Nc(n);
  }
  function _i() {
    if (!Ki && Ri !== null) {
      Ki = !0;
      var n = 0, r = Pt;
      try {
        var l = Ri;
        for (Pt = 1; n < l.length; n++) {
          var s = l[n];
          do
            s = s(!0);
          while (s !== null);
        }
        Ri = null, wu = !1;
      } catch (p) {
        throw Ri !== null && (Ri = Ri.slice(n + 1)), un(Ja, _i), p;
      } finally {
        Pt = r, Ki = !1;
      }
    }
    return null;
  }
  var zl = [], Nl = 0, Al = null, Ji = 0, Nn = [], za = 0, va = null, Di = 1, Oi = "";
  function wo(n, r) {
    zl[Nl++] = Ji, zl[Nl++] = Al, Al = n, Ji = r;
  }
  function $v(n, r, l) {
    Nn[za++] = Di, Nn[za++] = Oi, Nn[za++] = va, va = n;
    var s = Di;
    n = Oi;
    var p = 32 - Or(s) - 1;
    s &= ~(1 << p), l += 1;
    var m = 32 - Or(r) + p;
    if (30 < m) {
      var b = p - p % 5;
      m = (s & (1 << b) - 1).toString(32), s >>= b, p -= b, Di = 1 << 32 - Or(r) + p | l << p | s, Oi = m + n;
    } else Di = 1 << m | l << p | s, Oi = n;
  }
  function Ac(n) {
    n.return !== null && (wo(n, 1), $v(n, 1, 0));
  }
  function Pc(n) {
    for (; n === Al; ) Al = zl[--Nl], zl[Nl] = null, Ji = zl[--Nl], zl[Nl] = null;
    for (; n === va; ) va = Nn[--za], Nn[za] = null, Oi = Nn[--za], Nn[za] = null, Di = Nn[--za], Nn[za] = null;
  }
  var Kr = null, Jr = null, dn = !1, Na = null;
  function xd(n, r) {
    var l = ja(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Yv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Kr = n, Jr = bi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Kr = n, Jr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = va !== null ? { id: Di, overflow: Oi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ja(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Kr = n, Jr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Rd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function _d(n) {
    if (dn) {
      var r = Jr;
      if (r) {
        var l = r;
        if (!Yv(n, r)) {
          if (Rd(n)) throw Error(d(418));
          r = bi(l.nextSibling);
          var s = Kr;
          r && Yv(n, r) ? xd(s, l) : (n.flags = n.flags & -4097 | 2, dn = !1, Kr = n);
        }
      } else {
        if (Rd(n)) throw Error(d(418));
        n.flags = n.flags & -4097 | 2, dn = !1, Kr = n;
      }
    }
  }
  function Gn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Kr = n;
  }
  function Uc(n) {
    if (n !== Kr) return !1;
    if (!dn) return Gn(n), dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !kc(n.type, n.memoizedProps)), r && (r = Jr)) {
      if (Rd(n)) throw ms(), Error(d(418));
      for (; r; ) xd(n, r), r = bi(r.nextSibling);
    }
    if (Gn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Jr = bi(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Jr = null;
      }
    } else Jr = Kr ? bi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ms() {
    for (var n = Jr; n; ) n = bi(n.nextSibling);
  }
  function Pl() {
    Jr = Kr = null, dn = !1;
  }
  function Zi(n) {
    Na === null ? Na = [n] : Na.push(n);
  }
  var Ry = oe.ReactCurrentBatchConfig;
  function Co(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(d(309));
          var s = l.stateNode;
        }
        if (!s) throw Error(d(147, n));
        var p = s, m = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(b) {
          var k = p.refs;
          b === null ? delete k[m] : k[m] = b;
        }, r._stringRef = m, r);
      }
      if (typeof n != "string") throw Error(d(284));
      if (!l._owner) throw Error(d(290, n));
    }
    return n;
  }
  function Fc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(d(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Gv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function To(n) {
    function r(B, F) {
      if (n) {
        var G = B.deletions;
        G === null ? (B.deletions = [F], B.flags |= 16) : G.push(F);
      }
    }
    function l(B, F) {
      if (!n) return null;
      for (; F !== null; ) r(B, F), F = F.sibling;
      return null;
    }
    function s(B, F) {
      for (B = /* @__PURE__ */ new Map(); F !== null; ) F.key !== null ? B.set(F.key, F) : B.set(F.index, F), F = F.sibling;
      return B;
    }
    function p(B, F) {
      return B = $l(B, F), B.index = 0, B.sibling = null, B;
    }
    function m(B, F, G) {
      return B.index = G, n ? (G = B.alternate, G !== null ? (G = G.index, G < F ? (B.flags |= 2, F) : G) : (B.flags |= 2, F)) : (B.flags |= 1048576, F);
    }
    function b(B) {
      return n && B.alternate === null && (B.flags |= 2), B;
    }
    function k(B, F, G, he) {
      return F === null || F.tag !== 6 ? (F = ap(G, B.mode, he), F.return = B, F) : (F = p(F, G), F.return = B, F);
    }
    function P(B, F, G, he) {
      var je = G.type;
      return je === ue ? ve(B, F, G.props.children, he, G.key) : F !== null && (F.elementType === je || typeof je == "object" && je !== null && je.$$typeof === bt && Gv(je) === F.type) ? (he = p(F, G.props), he.ref = Co(B, F, G), he.return = B, he) : (he = Gs(G.type, G.key, G.props, null, B.mode, he), he.ref = Co(B, F, G), he.return = B, he);
    }
    function X(B, F, G, he) {
      return F === null || F.tag !== 4 || F.stateNode.containerInfo !== G.containerInfo || F.stateNode.implementation !== G.implementation ? (F = gf(G, B.mode, he), F.return = B, F) : (F = p(F, G.children || []), F.return = B, F);
    }
    function ve(B, F, G, he, je) {
      return F === null || F.tag !== 7 ? (F = il(G, B.mode, he, je), F.return = B, F) : (F = p(F, G), F.return = B, F);
    }
    function ye(B, F, G) {
      if (typeof F == "string" && F !== "" || typeof F == "number") return F = ap("" + F, B.mode, G), F.return = B, F;
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case le:
            return G = Gs(F.type, F.key, F.props, null, B.mode, G), G.ref = Co(B, null, F), G.return = B, G;
          case Me:
            return F = gf(F, B.mode, G), F.return = B, F;
          case bt:
            var he = F._init;
            return ye(B, he(F._payload), G);
        }
        if (qn(F) || Ce(F)) return F = il(F, B.mode, G, null), F.return = B, F;
        Fc(B, F);
      }
      return null;
    }
    function de(B, F, G, he) {
      var je = F !== null ? F.key : null;
      if (typeof G == "string" && G !== "" || typeof G == "number") return je !== null ? null : k(B, F, "" + G, he);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case le:
            return G.key === je ? P(B, F, G, he) : null;
          case Me:
            return G.key === je ? X(B, F, G, he) : null;
          case bt:
            return je = G._init, de(
              B,
              F,
              je(G._payload),
              he
            );
        }
        if (qn(G) || Ce(G)) return je !== null ? null : ve(B, F, G, he, null);
        Fc(B, G);
      }
      return null;
    }
    function ze(B, F, G, he, je) {
      if (typeof he == "string" && he !== "" || typeof he == "number") return B = B.get(G) || null, k(F, B, "" + he, je);
      if (typeof he == "object" && he !== null) {
        switch (he.$$typeof) {
          case le:
            return B = B.get(he.key === null ? G : he.key) || null, P(F, B, he, je);
          case Me:
            return B = B.get(he.key === null ? G : he.key) || null, X(F, B, he, je);
          case bt:
            var Ke = he._init;
            return ze(B, F, G, Ke(he._payload), je);
        }
        if (qn(he) || Ce(he)) return B = B.get(G) || null, ve(F, B, he, je, null);
        Fc(F, he);
      }
      return null;
    }
    function Fe(B, F, G, he) {
      for (var je = null, Ke = null, Ze = F, at = F = 0, er = null; Ze !== null && at < G.length; at++) {
        Ze.index > at ? (er = Ze, Ze = null) : er = Ze.sibling;
        var jt = de(B, Ze, G[at], he);
        if (jt === null) {
          Ze === null && (Ze = er);
          break;
        }
        n && Ze && jt.alternate === null && r(B, Ze), F = m(jt, F, at), Ke === null ? je = jt : Ke.sibling = jt, Ke = jt, Ze = er;
      }
      if (at === G.length) return l(B, Ze), dn && wo(B, at), je;
      if (Ze === null) {
        for (; at < G.length; at++) Ze = ye(B, G[at], he), Ze !== null && (F = m(Ze, F, at), Ke === null ? je = Ze : Ke.sibling = Ze, Ke = Ze);
        return dn && wo(B, at), je;
      }
      for (Ze = s(B, Ze); at < G.length; at++) er = ze(Ze, B, at, G[at], he), er !== null && (n && er.alternate !== null && Ze.delete(er.key === null ? at : er.key), F = m(er, F, at), Ke === null ? je = er : Ke.sibling = er, Ke = er);
      return n && Ze.forEach(function(Wl) {
        return r(B, Wl);
      }), dn && wo(B, at), je;
    }
    function Ie(B, F, G, he) {
      var je = Ce(G);
      if (typeof je != "function") throw Error(d(150));
      if (G = je.call(G), G == null) throw Error(d(151));
      for (var Ke = je = null, Ze = F, at = F = 0, er = null, jt = G.next(); Ze !== null && !jt.done; at++, jt = G.next()) {
        Ze.index > at ? (er = Ze, Ze = null) : er = Ze.sibling;
        var Wl = de(B, Ze, jt.value, he);
        if (Wl === null) {
          Ze === null && (Ze = er);
          break;
        }
        n && Ze && Wl.alternate === null && r(B, Ze), F = m(Wl, F, at), Ke === null ? je = Wl : Ke.sibling = Wl, Ke = Wl, Ze = er;
      }
      if (jt.done) return l(
        B,
        Ze
      ), dn && wo(B, at), je;
      if (Ze === null) {
        for (; !jt.done; at++, jt = G.next()) jt = ye(B, jt.value, he), jt !== null && (F = m(jt, F, at), Ke === null ? je = jt : Ke.sibling = jt, Ke = jt);
        return dn && wo(B, at), je;
      }
      for (Ze = s(B, Ze); !jt.done; at++, jt = G.next()) jt = ze(Ze, B, at, jt.value, he), jt !== null && (n && jt.alternate !== null && Ze.delete(jt.key === null ? at : jt.key), F = m(jt, F, at), Ke === null ? je = jt : Ke.sibling = jt, Ke = jt);
      return n && Ze.forEach(function(Dh) {
        return r(B, Dh);
      }), dn && wo(B, at), je;
    }
    function Dn(B, F, G, he) {
      if (typeof G == "object" && G !== null && G.type === ue && G.key === null && (G = G.props.children), typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case le:
            e: {
              for (var je = G.key, Ke = F; Ke !== null; ) {
                if (Ke.key === je) {
                  if (je = G.type, je === ue) {
                    if (Ke.tag === 7) {
                      l(B, Ke.sibling), F = p(Ke, G.props.children), F.return = B, B = F;
                      break e;
                    }
                  } else if (Ke.elementType === je || typeof je == "object" && je !== null && je.$$typeof === bt && Gv(je) === Ke.type) {
                    l(B, Ke.sibling), F = p(Ke, G.props), F.ref = Co(B, Ke, G), F.return = B, B = F;
                    break e;
                  }
                  l(B, Ke);
                  break;
                } else r(B, Ke);
                Ke = Ke.sibling;
              }
              G.type === ue ? (F = il(G.props.children, B.mode, he, G.key), F.return = B, B = F) : (he = Gs(G.type, G.key, G.props, null, B.mode, he), he.ref = Co(B, F, G), he.return = B, B = he);
            }
            return b(B);
          case Me:
            e: {
              for (Ke = G.key; F !== null; ) {
                if (F.key === Ke) if (F.tag === 4 && F.stateNode.containerInfo === G.containerInfo && F.stateNode.implementation === G.implementation) {
                  l(B, F.sibling), F = p(F, G.children || []), F.return = B, B = F;
                  break e;
                } else {
                  l(B, F);
                  break;
                }
                else r(B, F);
                F = F.sibling;
              }
              F = gf(G, B.mode, he), F.return = B, B = F;
            }
            return b(B);
          case bt:
            return Ke = G._init, Dn(B, F, Ke(G._payload), he);
        }
        if (qn(G)) return Fe(B, F, G, he);
        if (Ce(G)) return Ie(B, F, G, he);
        Fc(B, G);
      }
      return typeof G == "string" && G !== "" || typeof G == "number" ? (G = "" + G, F !== null && F.tag === 6 ? (l(B, F.sibling), F = p(F, G), F.return = B, B = F) : (l(B, F), F = ap(G, B.mode, he), F.return = B, B = F), b(B)) : l(B, F);
    }
    return Dn;
  }
  var bn = To(!0), Oe = To(!1), ha = La(null), Zr = null, Cu = null, Dd = null;
  function Od() {
    Dd = Cu = Zr = null;
  }
  function kd(n) {
    var r = ha.current;
    ln(ha), n._currentValue = r;
  }
  function Md(n, r, l) {
    for (; n !== null; ) {
      var s = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, s !== null && (s.childLanes |= r)) : s !== null && (s.childLanes & r) !== r && (s.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function yn(n, r) {
    Zr = n, Dd = Cu = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (Pn = !0), n.firstContext = null);
  }
  function Aa(n) {
    var r = n._currentValue;
    if (Dd !== n) if (n = { context: n, memoizedValue: r, next: null }, Cu === null) {
      if (Zr === null) throw Error(d(308));
      Cu = n, Zr.dependencies = { lanes: 0, firstContext: n };
    } else Cu = Cu.next = n;
    return r;
  }
  var bo = null;
  function Ld(n) {
    bo === null ? bo = [n] : bo.push(n);
  }
  function zd(n, r, l, s) {
    var p = r.interleaved;
    return p === null ? (l.next = l, Ld(r)) : (l.next = p.next, p.next = l), r.interleaved = l, ma(n, s);
  }
  function ma(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ya = !1;
  function Nd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Wv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function el(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ul(n, r, l) {
    var s = n.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (kt & 2) !== 0) {
      var p = s.pending;
      return p === null ? r.next = r : (r.next = p.next, p.next = r), s.pending = r, ma(n, l);
    }
    return p = s.interleaved, p === null ? (r.next = r, Ld(s)) : (r.next = p.next, p.next = r), s.interleaved = r, ma(n, l);
  }
  function jc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var s = r.lanes;
      s &= n.pendingLanes, l |= s, r.lanes = l, Yi(n, l);
    }
  }
  function Qv(n, r) {
    var l = n.updateQueue, s = n.alternate;
    if (s !== null && (s = s.updateQueue, l === s)) {
      var p = null, m = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var b = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          m === null ? p = m = b : m = m.next = b, l = l.next;
        } while (l !== null);
        m === null ? p = m = r : m = m.next = r;
      } else p = m = r;
      l = { baseState: s.baseState, firstBaseUpdate: p, lastBaseUpdate: m, shared: s.shared, effects: s.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ys(n, r, l, s) {
    var p = n.updateQueue;
    ya = !1;
    var m = p.firstBaseUpdate, b = p.lastBaseUpdate, k = p.shared.pending;
    if (k !== null) {
      p.shared.pending = null;
      var P = k, X = P.next;
      P.next = null, b === null ? m = X : b.next = X, b = P;
      var ve = n.alternate;
      ve !== null && (ve = ve.updateQueue, k = ve.lastBaseUpdate, k !== b && (k === null ? ve.firstBaseUpdate = X : k.next = X, ve.lastBaseUpdate = P));
    }
    if (m !== null) {
      var ye = p.baseState;
      b = 0, ve = X = P = null, k = m;
      do {
        var de = k.lane, ze = k.eventTime;
        if ((s & de) === de) {
          ve !== null && (ve = ve.next = {
            eventTime: ze,
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          });
          e: {
            var Fe = n, Ie = k;
            switch (de = r, ze = l, Ie.tag) {
              case 1:
                if (Fe = Ie.payload, typeof Fe == "function") {
                  ye = Fe.call(ze, ye, de);
                  break e;
                }
                ye = Fe;
                break e;
              case 3:
                Fe.flags = Fe.flags & -65537 | 128;
              case 0:
                if (Fe = Ie.payload, de = typeof Fe == "function" ? Fe.call(ze, ye, de) : Fe, de == null) break e;
                ye = Se({}, ye, de);
                break e;
              case 2:
                ya = !0;
            }
          }
          k.callback !== null && k.lane !== 0 && (n.flags |= 64, de = p.effects, de === null ? p.effects = [k] : de.push(k));
        } else ze = { eventTime: ze, lane: de, tag: k.tag, payload: k.payload, callback: k.callback, next: null }, ve === null ? (X = ve = ze, P = ye) : ve = ve.next = ze, b |= de;
        if (k = k.next, k === null) {
          if (k = p.shared.pending, k === null) break;
          de = k, k = de.next, de.next = null, p.lastBaseUpdate = de, p.shared.pending = null;
        }
      } while (!0);
      if (ve === null && (P = ye), p.baseState = P, p.firstBaseUpdate = X, p.lastBaseUpdate = ve, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          b |= p.lane, p = p.next;
        while (p !== r);
      } else m === null && (p.shared.lanes = 0);
      Ni |= b, n.lanes = b, n.memoizedState = ye;
    }
  }
  function Ad(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var s = n[r], p = s.callback;
      if (p !== null) {
        if (s.callback = null, s = l, typeof p != "function") throw Error(d(191, p));
        p.call(s);
      }
    }
  }
  var gs = {}, ki = La(gs), Ss = La(gs), Es = La(gs);
  function xo(n) {
    if (n === gs) throw Error(d(174));
    return n;
  }
  function Pd(n, r) {
    switch (Ye(Es, r), Ye(Ss, n), Ye(ki, gs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : fa(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = fa(r, n);
    }
    ln(ki), Ye(ki, r);
  }
  function Ro() {
    ln(ki), ln(Ss), ln(Es);
  }
  function qv(n) {
    xo(Es.current);
    var r = xo(ki.current), l = fa(r, n.type);
    r !== l && (Ye(Ss, n), Ye(ki, l));
  }
  function Hc(n) {
    Ss.current === n && (ln(ki), ln(Ss));
  }
  var gn = La(0);
  function Vc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ws = [];
  function We() {
    for (var n = 0; n < ws.length; n++) ws[n]._workInProgressVersionPrimary = null;
    ws.length = 0;
  }
  var Ct = oe.ReactCurrentDispatcher, Ut = oe.ReactCurrentBatchConfig, Kt = 0, Ft = null, An = null, Jn = null, Ic = !1, Cs = !1, _o = 0, ce = 0;
  function At() {
    throw Error(d(321));
  }
  function nt(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ri(n[l], r[l])) return !1;
    return !0;
  }
  function Fl(n, r, l, s, p, m) {
    if (Kt = m, Ft = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ct.current = n === null || n.memoizedState === null ? rf : Ds, n = l(s, p), Cs) {
      m = 0;
      do {
        if (Cs = !1, _o = 0, 25 <= m) throw Error(d(301));
        m += 1, Jn = An = null, r.updateQueue = null, Ct.current = af, n = l(s, p);
      } while (Cs);
    }
    if (Ct.current = Lo, r = An !== null && An.next !== null, Kt = 0, Jn = An = Ft = null, Ic = !1, r) throw Error(d(300));
    return n;
  }
  function ii() {
    var n = _o !== 0;
    return _o = 0, n;
  }
  function Tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Jn === null ? Ft.memoizedState = Jn = n : Jn = Jn.next = n, Jn;
  }
  function xn() {
    if (An === null) {
      var n = Ft.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = An.next;
    var r = Jn === null ? Ft.memoizedState : Jn.next;
    if (r !== null) Jn = r, An = n;
    else {
      if (n === null) throw Error(d(310));
      An = n, n = { memoizedState: An.memoizedState, baseState: An.baseState, baseQueue: An.baseQueue, queue: An.queue, next: null }, Jn === null ? Ft.memoizedState = Jn = n : Jn = Jn.next = n;
    }
    return Jn;
  }
  function tl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function jl(n) {
    var r = xn(), l = r.queue;
    if (l === null) throw Error(d(311));
    l.lastRenderedReducer = n;
    var s = An, p = s.baseQueue, m = l.pending;
    if (m !== null) {
      if (p !== null) {
        var b = p.next;
        p.next = m.next, m.next = b;
      }
      s.baseQueue = p = m, l.pending = null;
    }
    if (p !== null) {
      m = p.next, s = s.baseState;
      var k = b = null, P = null, X = m;
      do {
        var ve = X.lane;
        if ((Kt & ve) === ve) P !== null && (P = P.next = { lane: 0, action: X.action, hasEagerState: X.hasEagerState, eagerState: X.eagerState, next: null }), s = X.hasEagerState ? X.eagerState : n(s, X.action);
        else {
          var ye = {
            lane: ve,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null
          };
          P === null ? (k = P = ye, b = s) : P = P.next = ye, Ft.lanes |= ve, Ni |= ve;
        }
        X = X.next;
      } while (X !== null && X !== m);
      P === null ? b = s : P.next = k, ri(s, r.memoizedState) || (Pn = !0), r.memoizedState = s, r.baseState = b, r.baseQueue = P, l.lastRenderedState = s;
    }
    if (n = l.interleaved, n !== null) {
      p = n;
      do
        m = p.lane, Ft.lanes |= m, Ni |= m, p = p.next;
      while (p !== n);
    } else p === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Do(n) {
    var r = xn(), l = r.queue;
    if (l === null) throw Error(d(311));
    l.lastRenderedReducer = n;
    var s = l.dispatch, p = l.pending, m = r.memoizedState;
    if (p !== null) {
      l.pending = null;
      var b = p = p.next;
      do
        m = n(m, b.action), b = b.next;
      while (b !== p);
      ri(m, r.memoizedState) || (Pn = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), l.lastRenderedState = m;
    }
    return [m, s];
  }
  function Bc() {
  }
  function $c(n, r) {
    var l = Ft, s = xn(), p = r(), m = !ri(s.memoizedState, p);
    if (m && (s.memoizedState = p, Pn = !0), s = s.queue, Ts(Wc.bind(null, l, s, n), [n]), s.getSnapshot !== r || m || Jn !== null && Jn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Oo(9, Gc.bind(null, l, s, p, r), void 0, null), Wn === null) throw Error(d(349));
      (Kt & 30) !== 0 || Yc(l, r, p);
    }
    return p;
  }
  function Yc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Ft.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ft.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Gc(n, r, l, s) {
    r.value = l, r.getSnapshot = s, Qc(r) && qc(n);
  }
  function Wc(n, r, l) {
    return l(function() {
      Qc(r) && qc(n);
    });
  }
  function Qc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ri(n, l);
    } catch {
      return !0;
    }
  }
  function qc(n) {
    var r = ma(n, 1);
    r !== null && Ar(r, n, 1, -1);
  }
  function Xc(n) {
    var r = Tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: tl, lastRenderedState: n }, r.queue = n, n = n.dispatch = Mo.bind(null, Ft, n), [r.memoizedState, n];
  }
  function Oo(n, r, l, s) {
    return n = { tag: n, create: r, destroy: l, deps: s, next: null }, r = Ft.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ft.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (s = l.next, l.next = n, n.next = s, r.lastEffect = n)), n;
  }
  function Kc() {
    return xn().memoizedState;
  }
  function Tu(n, r, l, s) {
    var p = Tr();
    Ft.flags |= n, p.memoizedState = Oo(1 | r, l, void 0, s === void 0 ? null : s);
  }
  function bu(n, r, l, s) {
    var p = xn();
    s = s === void 0 ? null : s;
    var m = void 0;
    if (An !== null) {
      var b = An.memoizedState;
      if (m = b.destroy, s !== null && nt(s, b.deps)) {
        p.memoizedState = Oo(r, l, m, s);
        return;
      }
    }
    Ft.flags |= n, p.memoizedState = Oo(1 | r, l, m, s);
  }
  function Jc(n, r) {
    return Tu(8390656, 8, n, r);
  }
  function Ts(n, r) {
    return bu(2048, 8, n, r);
  }
  function Zc(n, r) {
    return bu(4, 2, n, r);
  }
  function bs(n, r) {
    return bu(4, 4, n, r);
  }
  function ko(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function ef(n, r, l) {
    return l = l != null ? l.concat([n]) : null, bu(4, 4, ko.bind(null, r, n), l);
  }
  function xs() {
  }
  function tf(n, r) {
    var l = xn();
    r = r === void 0 ? null : r;
    var s = l.memoizedState;
    return s !== null && r !== null && nt(r, s[1]) ? s[0] : (l.memoizedState = [n, r], n);
  }
  function nf(n, r) {
    var l = xn();
    r = r === void 0 ? null : r;
    var s = l.memoizedState;
    return s !== null && r !== null && nt(r, s[1]) ? s[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Ud(n, r, l) {
    return (Kt & 21) === 0 ? (n.baseState && (n.baseState = !1, Pn = !0), n.memoizedState = l) : (ri(l, r) || (l = ru(), Ft.lanes |= l, Ni |= l, n.baseState = !0), r);
  }
  function Rs(n, r) {
    var l = Pt;
    Pt = l !== 0 && 4 > l ? l : 4, n(!0);
    var s = Ut.transition;
    Ut.transition = {};
    try {
      n(!1), r();
    } finally {
      Pt = l, Ut.transition = s;
    }
  }
  function Fd() {
    return xn().memoizedState;
  }
  function _s(n, r, l) {
    var s = Ai(n);
    if (l = { lane: s, action: l, hasEagerState: !1, eagerState: null, next: null }, ea(n)) Xv(r, l);
    else if (l = zd(n, r, l, s), l !== null) {
      var p = jn();
      Ar(l, n, s, p), en(l, r, s);
    }
  }
  function Mo(n, r, l) {
    var s = Ai(n), p = { lane: s, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ea(n)) Xv(r, p);
    else {
      var m = n.alternate;
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
        var b = r.lastRenderedState, k = m(b, l);
        if (p.hasEagerState = !0, p.eagerState = k, ri(k, b)) {
          var P = r.interleaved;
          P === null ? (p.next = p, Ld(r)) : (p.next = P.next, P.next = p), r.interleaved = p;
          return;
        }
      } catch {
      } finally {
      }
      l = zd(n, r, p, s), l !== null && (p = jn(), Ar(l, n, s, p), en(l, r, s));
    }
  }
  function ea(n) {
    var r = n.alternate;
    return n === Ft || r !== null && r === Ft;
  }
  function Xv(n, r) {
    Cs = Ic = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function en(n, r, l) {
    if ((l & 4194240) !== 0) {
      var s = r.lanes;
      s &= n.pendingLanes, l |= s, r.lanes = l, Yi(n, l);
    }
  }
  var Lo = { readContext: Aa, useCallback: At, useContext: At, useEffect: At, useImperativeHandle: At, useInsertionEffect: At, useLayoutEffect: At, useMemo: At, useReducer: At, useRef: At, useState: At, useDebugValue: At, useDeferredValue: At, useTransition: At, useMutableSource: At, useSyncExternalStore: At, useId: At, unstable_isNewReconciler: !1 }, rf = { readContext: Aa, useCallback: function(n, r) {
    return Tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Aa, useEffect: Jc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Tu(
      4194308,
      4,
      ko.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Tu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Tu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Tr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var s = Tr();
    return r = l !== void 0 ? l(r) : r, s.memoizedState = s.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, s.queue = n, n = n.dispatch = _s.bind(null, Ft, n), [s.memoizedState, n];
  }, useRef: function(n) {
    var r = Tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Xc, useDebugValue: xs, useDeferredValue: function(n) {
    return Tr().memoizedState = n;
  }, useTransition: function() {
    var n = Xc(!1), r = n[0];
    return n = Rs.bind(null, n[1]), Tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var s = Ft, p = Tr();
    if (dn) {
      if (l === void 0) throw Error(d(407));
      l = l();
    } else {
      if (l = r(), Wn === null) throw Error(d(349));
      (Kt & 30) !== 0 || Yc(s, r, l);
    }
    p.memoizedState = l;
    var m = { value: l, getSnapshot: r };
    return p.queue = m, Jc(Wc.bind(
      null,
      s,
      m,
      n
    ), [n]), s.flags |= 2048, Oo(9, Gc.bind(null, s, m, l, r), void 0, null), l;
  }, useId: function() {
    var n = Tr(), r = Wn.identifierPrefix;
    if (dn) {
      var l = Oi, s = Di;
      l = (s & ~(1 << 32 - Or(s) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = _o++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ce++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ds = {
    readContext: Aa,
    useCallback: tf,
    useContext: Aa,
    useEffect: Ts,
    useImperativeHandle: ef,
    useInsertionEffect: Zc,
    useLayoutEffect: bs,
    useMemo: nf,
    useReducer: jl,
    useRef: Kc,
    useState: function() {
      return jl(tl);
    },
    useDebugValue: xs,
    useDeferredValue: function(n) {
      var r = xn();
      return Ud(r, An.memoizedState, n);
    },
    useTransition: function() {
      var n = jl(tl)[0], r = xn().memoizedState;
      return [n, r];
    },
    useMutableSource: Bc,
    useSyncExternalStore: $c,
    useId: Fd,
    unstable_isNewReconciler: !1
  }, af = { readContext: Aa, useCallback: tf, useContext: Aa, useEffect: Ts, useImperativeHandle: ef, useInsertionEffect: Zc, useLayoutEffect: bs, useMemo: nf, useReducer: Do, useRef: Kc, useState: function() {
    return Do(tl);
  }, useDebugValue: xs, useDeferredValue: function(n) {
    var r = xn();
    return An === null ? r.memoizedState = n : Ud(r, An.memoizedState, n);
  }, useTransition: function() {
    var n = Do(tl)[0], r = xn().memoizedState;
    return [n, r];
  }, useMutableSource: Bc, useSyncExternalStore: $c, useId: Fd, unstable_isNewReconciler: !1 };
  function li(n, r) {
    if (n && n.defaultProps) {
      r = Se({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function jd(n, r, l, s) {
    r = n.memoizedState, l = l(s, r), l = l == null ? r : Se({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var lf = { isMounted: function(n) {
    return (n = n._reactInternals) ? st(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var s = jn(), p = Ai(n), m = el(s, p);
    m.payload = r, l != null && (m.callback = l), r = Ul(n, m, p), r !== null && (Ar(r, n, p, s), jc(r, n, p));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var s = jn(), p = Ai(n), m = el(s, p);
    m.tag = 1, m.payload = r, l != null && (m.callback = l), r = Ul(n, m, p), r !== null && (Ar(r, n, p, s), jc(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = jn(), s = Ai(n), p = el(l, s);
    p.tag = 2, r != null && (p.callback = r), r = Ul(n, p, s), r !== null && (Ar(r, n, s, l), jc(r, n, s));
  } };
  function Kv(n, r, l, s, p, m, b) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(s, m, b) : r.prototype && r.prototype.isPureReactComponent ? !os(l, s) || !os(p, m) : !0;
  }
  function of(n, r, l) {
    var s = !1, p = Cr, m = r.contextType;
    return typeof m == "object" && m !== null ? m = Aa(m) : (p = zn(r) ? qr : En.current, s = r.contextTypes, m = (s = s != null) ? Xr(n, p) : Cr), r = new r(l, m), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = lf, n.stateNode = r, r._reactInternals = n, s && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function Jv(n, r, l, s) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, s), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, s), r.state !== n && lf.enqueueReplaceState(r, r.state, null);
  }
  function Os(n, r, l, s) {
    var p = n.stateNode;
    p.props = l, p.state = n.memoizedState, p.refs = {}, Nd(n);
    var m = r.contextType;
    typeof m == "object" && m !== null ? p.context = Aa(m) : (m = zn(r) ? qr : En.current, p.context = Xr(n, m)), p.state = n.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (jd(n, r, m, l), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && lf.enqueueReplaceState(p, p.state, null), ys(n, l, p, s), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function zo(n, r) {
    try {
      var l = "", s = r;
      do
        l += St(s), s = s.return;
      while (s);
      var p = l;
    } catch (m) {
      p = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function Hd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Vd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var uf = typeof WeakMap == "function" ? WeakMap : Map;
  function Zv(n, r, l) {
    l = el(-1, l), l.tag = 3, l.payload = { element: null };
    var s = r.value;
    return l.callback = function() {
      ku || (ku = !0, Po = s), Vd(n, r);
    }, l;
  }
  function Id(n, r, l) {
    l = el(-1, l), l.tag = 3;
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var p = r.value;
      l.payload = function() {
        return s(p);
      }, l.callback = function() {
        Vd(n, r);
      };
    }
    var m = n.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      Vd(n, r), typeof s != "function" && (Il === null ? Il = /* @__PURE__ */ new Set([this]) : Il.add(this));
      var b = r.stack;
      this.componentDidCatch(r.value, { componentStack: b !== null ? b : "" });
    }), l;
  }
  function Bd(n, r, l) {
    var s = n.pingCache;
    if (s === null) {
      s = n.pingCache = new uf();
      var p = /* @__PURE__ */ new Set();
      s.set(r, p);
    } else p = s.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), s.set(r, p));
    p.has(l) || (p.add(l), n = zy.bind(null, n, r, l), r.then(n, n));
  }
  function eh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Hl(n, r, l, s, p) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = el(-1, 1), r.tag = 2, Ul(l, r, 1))), l.lanes |= 1), n) : (n.flags |= 65536, n.lanes = p, n);
  }
  var ks = oe.ReactCurrentOwner, Pn = !1;
  function or(n, r, l, s) {
    r.child = n === null ? Oe(r, null, l, s) : bn(r, n.child, l, s);
  }
  function ta(n, r, l, s, p) {
    l = l.render;
    var m = r.ref;
    return yn(r, p), s = Fl(n, r, l, s, m, p), l = ii(), n !== null && !Pn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, Ua(n, r, p)) : (dn && l && Ac(r), r.flags |= 1, or(n, r, s, p), r.child);
  }
  function No(n, r, l, s, p) {
    if (n === null) {
      var m = l.type;
      return typeof m == "function" && !rp(m) && m.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = m, ft(n, r, m, s, p)) : (n = Gs(l.type, null, s, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (m = n.child, (n.lanes & p) === 0) {
      var b = m.memoizedProps;
      if (l = l.compare, l = l !== null ? l : os, l(b, s) && n.ref === r.ref) return Ua(n, r, p);
    }
    return r.flags |= 1, n = $l(m, s), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ft(n, r, l, s, p) {
    if (n !== null) {
      var m = n.memoizedProps;
      if (os(m, s) && n.ref === r.ref) if (Pn = !1, r.pendingProps = s = m, (n.lanes & p) !== 0) (n.flags & 131072) !== 0 && (Pn = !0);
      else return r.lanes = n.lanes, Ua(n, r, p);
    }
    return th(n, r, l, s, p);
  }
  function Ms(n, r, l) {
    var s = r.pendingProps, p = s.children, m = n !== null ? n.memoizedState : null;
    if (s.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ye(_u, ga), ga |= l;
    else {
      if ((l & 1073741824) === 0) return n = m !== null ? m.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ye(_u, ga), ga |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = m !== null ? m.baseLanes : l, Ye(_u, ga), ga |= s;
    }
    else m !== null ? (s = m.baseLanes | l, r.memoizedState = null) : s = l, Ye(_u, ga), ga |= s;
    return or(n, r, p, l), r.child;
  }
  function $d(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function th(n, r, l, s, p) {
    var m = zn(l) ? qr : En.current;
    return m = Xr(r, m), yn(r, p), l = Fl(n, r, l, s, m, p), s = ii(), n !== null && !Pn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, Ua(n, r, p)) : (dn && s && Ac(r), r.flags |= 1, or(n, r, l, p), r.child);
  }
  function nh(n, r, l, s, p) {
    if (zn(l)) {
      var m = !0;
      Kn(r);
    } else m = !1;
    if (yn(r, p), r.stateNode === null) Pa(n, r), of(r, l, s), Os(r, l, s, p), s = !0;
    else if (n === null) {
      var b = r.stateNode, k = r.memoizedProps;
      b.props = k;
      var P = b.context, X = l.contextType;
      typeof X == "object" && X !== null ? X = Aa(X) : (X = zn(l) ? qr : En.current, X = Xr(r, X));
      var ve = l.getDerivedStateFromProps, ye = typeof ve == "function" || typeof b.getSnapshotBeforeUpdate == "function";
      ye || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (k !== s || P !== X) && Jv(r, b, s, X), ya = !1;
      var de = r.memoizedState;
      b.state = de, ys(r, s, b, p), P = r.memoizedState, k !== s || de !== P || Yn.current || ya ? (typeof ve == "function" && (jd(r, l, ve, s), P = r.memoizedState), (k = ya || Kv(r, l, k, s, de, P, X)) ? (ye || typeof b.UNSAFE_componentWillMount != "function" && typeof b.componentWillMount != "function" || (typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount()), typeof b.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof b.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = s, r.memoizedState = P), b.props = s, b.state = P, b.context = X, s = k) : (typeof b.componentDidMount == "function" && (r.flags |= 4194308), s = !1);
    } else {
      b = r.stateNode, Wv(n, r), k = r.memoizedProps, X = r.type === r.elementType ? k : li(r.type, k), b.props = X, ye = r.pendingProps, de = b.context, P = l.contextType, typeof P == "object" && P !== null ? P = Aa(P) : (P = zn(l) ? qr : En.current, P = Xr(r, P));
      var ze = l.getDerivedStateFromProps;
      (ve = typeof ze == "function" || typeof b.getSnapshotBeforeUpdate == "function") || typeof b.UNSAFE_componentWillReceiveProps != "function" && typeof b.componentWillReceiveProps != "function" || (k !== ye || de !== P) && Jv(r, b, s, P), ya = !1, de = r.memoizedState, b.state = de, ys(r, s, b, p);
      var Fe = r.memoizedState;
      k !== ye || de !== Fe || Yn.current || ya ? (typeof ze == "function" && (jd(r, l, ze, s), Fe = r.memoizedState), (X = ya || Kv(r, l, X, s, de, Fe, P) || !1) ? (ve || typeof b.UNSAFE_componentWillUpdate != "function" && typeof b.componentWillUpdate != "function" || (typeof b.componentWillUpdate == "function" && b.componentWillUpdate(s, Fe, P), typeof b.UNSAFE_componentWillUpdate == "function" && b.UNSAFE_componentWillUpdate(s, Fe, P)), typeof b.componentDidUpdate == "function" && (r.flags |= 4), typeof b.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof b.componentDidUpdate != "function" || k === n.memoizedProps && de === n.memoizedState || (r.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && de === n.memoizedState || (r.flags |= 1024), r.memoizedProps = s, r.memoizedState = Fe), b.props = s, b.state = Fe, b.context = P, s = X) : (typeof b.componentDidUpdate != "function" || k === n.memoizedProps && de === n.memoizedState || (r.flags |= 4), typeof b.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && de === n.memoizedState || (r.flags |= 1024), s = !1);
    }
    return Ls(n, r, l, s, m, p);
  }
  function Ls(n, r, l, s, p, m) {
    $d(n, r);
    var b = (r.flags & 128) !== 0;
    if (!s && !b) return p && zc(r, l, !1), Ua(n, r, m);
    s = r.stateNode, ks.current = r;
    var k = b && typeof l.getDerivedStateFromError != "function" ? null : s.render();
    return r.flags |= 1, n !== null && b ? (r.child = bn(r, n.child, null, m), r.child = bn(r, null, k, m)) : or(n, r, k, m), r.memoizedState = s.state, p && zc(r, l, !0), r.child;
  }
  function xu(n) {
    var r = n.stateNode;
    r.pendingContext ? Bv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Bv(n, r.context, !1), Pd(n, r.containerInfo);
  }
  function rh(n, r, l, s, p) {
    return Pl(), Zi(p), r.flags |= 256, or(n, r, l, s), r.child;
  }
  var sf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Yd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function cf(n, r, l) {
    var s = r.pendingProps, p = gn.current, m = !1, b = (r.flags & 128) !== 0, k;
    if ((k = b) || (k = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), k ? (m = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), Ye(gn, p & 1), n === null)
      return _d(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (b = s.children, n = s.fallback, m ? (s = r.mode, m = r.child, b = { mode: "hidden", children: b }, (s & 1) === 0 && m !== null ? (m.childLanes = 0, m.pendingProps = b) : m = Yl(b, s, 0, null), n = il(n, s, l, null), m.return = r, n.return = r, m.sibling = n, r.child = m, r.child.memoizedState = Yd(l), r.memoizedState = sf, n) : Gd(r, b));
    if (p = n.memoizedState, p !== null && (k = p.dehydrated, k !== null)) return ah(n, r, b, s, k, p, l);
    if (m) {
      m = s.fallback, b = r.mode, p = n.child, k = p.sibling;
      var P = { mode: "hidden", children: s.children };
      return (b & 1) === 0 && r.child !== p ? (s = r.child, s.childLanes = 0, s.pendingProps = P, r.deletions = null) : (s = $l(p, P), s.subtreeFlags = p.subtreeFlags & 14680064), k !== null ? m = $l(k, m) : (m = il(m, b, l, null), m.flags |= 2), m.return = r, s.return = r, s.sibling = m, r.child = s, s = m, m = r.child, b = n.child.memoizedState, b = b === null ? Yd(l) : { baseLanes: b.baseLanes | l, cachePool: null, transitions: b.transitions }, m.memoizedState = b, m.childLanes = n.childLanes & ~l, r.memoizedState = sf, s;
    }
    return m = n.child, n = m.sibling, s = $l(m, { mode: "visible", children: s.children }), (r.mode & 1) === 0 && (s.lanes = l), s.return = r, s.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = s, r.memoizedState = null, s;
  }
  function Gd(n, r) {
    return r = Yl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function zs(n, r, l, s) {
    return s !== null && Zi(s), bn(r, n.child, null, l), n = Gd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ah(n, r, l, s, p, m, b) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, s = Hd(Error(d(422))), zs(n, r, b, s)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (m = s.fallback, p = r.mode, s = Yl({ mode: "visible", children: s.children }, p, 0, null), m = il(m, p, b, null), m.flags |= 2, s.return = r, m.return = r, s.sibling = m, r.child = s, (r.mode & 1) !== 0 && bn(r, n.child, null, b), r.child.memoizedState = Yd(b), r.memoizedState = sf, m);
    if ((r.mode & 1) === 0) return zs(n, r, b, null);
    if (p.data === "$!") {
      if (s = p.nextSibling && p.nextSibling.dataset, s) var k = s.dgst;
      return s = k, m = Error(d(419)), s = Hd(m, s, void 0), zs(n, r, b, s);
    }
    if (k = (b & n.childLanes) !== 0, Pn || k) {
      if (s = Wn, s !== null) {
        switch (b & -b) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
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
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        p = (p & (s.suspendedLanes | b)) !== 0 ? 0 : p, p !== 0 && p !== m.retryLane && (m.retryLane = p, ma(n, p), Ar(s, n, p, -1));
      }
      return np(), s = Hd(Error(d(421))), zs(n, r, b, s);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Ny.bind(null, n), p._reactRetry = r, null) : (n = m.treeContext, Jr = bi(p.nextSibling), Kr = r, dn = !0, Na = null, n !== null && (Nn[za++] = Di, Nn[za++] = Oi, Nn[za++] = va, Di = n.id, Oi = n.overflow, va = r), r = Gd(r, s.children), r.flags |= 4096, r);
  }
  function Wd(n, r, l) {
    n.lanes |= r;
    var s = n.alternate;
    s !== null && (s.lanes |= r), Md(n.return, r, l);
  }
  function Lr(n, r, l, s, p) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: s, tail: l, tailMode: p } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = s, m.tail = l, m.tailMode = p);
  }
  function Mi(n, r, l) {
    var s = r.pendingProps, p = s.revealOrder, m = s.tail;
    if (or(n, r, s.children, l), s = gn.current, (s & 2) !== 0) s = s & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Wd(n, l, r);
        else if (n.tag === 19) Wd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      s &= 1;
    }
    if (Ye(gn, s), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (p) {
      case "forwards":
        for (l = r.child, p = null; l !== null; ) n = l.alternate, n !== null && Vc(n) === null && (p = l), l = l.sibling;
        l = p, l === null ? (p = r.child, r.child = null) : (p = l.sibling, l.sibling = null), Lr(r, !1, p, l, m);
        break;
      case "backwards":
        for (l = null, p = r.child, r.child = null; p !== null; ) {
          if (n = p.alternate, n !== null && Vc(n) === null) {
            r.child = p;
            break;
          }
          n = p.sibling, p.sibling = l, l = p, p = n;
        }
        Lr(r, !0, l, null, m);
        break;
      case "together":
        Lr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Pa(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ua(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Ni |= r.lanes, (l & r.childLanes) === 0) return null;
    if (n !== null && r.child !== n.child) throw Error(d(153));
    if (r.child !== null) {
      for (n = r.child, l = $l(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = $l(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ns(n, r, l) {
    switch (r.tag) {
      case 3:
        xu(r), Pl();
        break;
      case 5:
        qv(r);
        break;
      case 1:
        zn(r.type) && Kn(r);
        break;
      case 4:
        Pd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var s = r.type._context, p = r.memoizedProps.value;
        Ye(ha, s._currentValue), s._currentValue = p;
        break;
      case 13:
        if (s = r.memoizedState, s !== null)
          return s.dehydrated !== null ? (Ye(gn, gn.current & 1), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? cf(n, r, l) : (Ye(gn, gn.current & 1), n = Ua(n, r, l), n !== null ? n.sibling : null);
        Ye(gn, gn.current & 1);
        break;
      case 19:
        if (s = (l & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (s) return Mi(n, r, l);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), Ye(gn, gn.current), s) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ms(n, r, l);
    }
    return Ua(n, r, l);
  }
  var Fa, Un, ih, lh;
  Fa = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Un = function() {
  }, ih = function(n, r, l, s) {
    var p = n.memoizedProps;
    if (p !== s) {
      n = r.stateNode, xo(ki.current);
      var m = null;
      switch (l) {
        case "input":
          p = nr(n, p), s = nr(n, s), m = [];
          break;
        case "select":
          p = Se({}, p, { value: void 0 }), s = Se({}, s, { value: void 0 }), m = [];
          break;
        case "textarea":
          p = Bn(n, p), s = Bn(n, s), m = [];
          break;
        default:
          typeof p.onClick != "function" && typeof s.onClick == "function" && (n.onclick = kl);
      }
      on(l, s);
      var b;
      l = null;
      for (X in p) if (!s.hasOwnProperty(X) && p.hasOwnProperty(X) && p[X] != null) if (X === "style") {
        var k = p[X];
        for (b in k) k.hasOwnProperty(b) && (l || (l = {}), l[b] = "");
      } else X !== "dangerouslySetInnerHTML" && X !== "children" && X !== "suppressContentEditableWarning" && X !== "suppressHydrationWarning" && X !== "autoFocus" && (E.hasOwnProperty(X) ? m || (m = []) : (m = m || []).push(X, null));
      for (X in s) {
        var P = s[X];
        if (k = p?.[X], s.hasOwnProperty(X) && P !== k && (P != null || k != null)) if (X === "style") if (k) {
          for (b in k) !k.hasOwnProperty(b) || P && P.hasOwnProperty(b) || (l || (l = {}), l[b] = "");
          for (b in P) P.hasOwnProperty(b) && k[b] !== P[b] && (l || (l = {}), l[b] = P[b]);
        } else l || (m || (m = []), m.push(
          X,
          l
        )), l = P;
        else X === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, k = k ? k.__html : void 0, P != null && k !== P && (m = m || []).push(X, P)) : X === "children" ? typeof P != "string" && typeof P != "number" || (m = m || []).push(X, "" + P) : X !== "suppressContentEditableWarning" && X !== "suppressHydrationWarning" && (E.hasOwnProperty(X) ? (P != null && X === "onScroll" && Bt("scroll", n), m || k === P || (m = [])) : (m = m || []).push(X, P));
      }
      l && (m = m || []).push("style", l);
      var X = m;
      (r.updateQueue = X) && (r.flags |= 4);
    }
  }, lh = function(n, r, l, s) {
    l !== s && (r.flags |= 4);
  };
  function As(n, r) {
    if (!dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var s = null; l !== null; ) l.alternate !== null && (s = l), l = l.sibling;
        s === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : s.sibling = null;
    }
  }
  function Zn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, s = 0;
    if (r) for (var p = n.child; p !== null; ) l |= p.lanes | p.childLanes, s |= p.subtreeFlags & 14680064, s |= p.flags & 14680064, p.return = n, p = p.sibling;
    else for (p = n.child; p !== null; ) l |= p.lanes | p.childLanes, s |= p.subtreeFlags, s |= p.flags, p.return = n, p = p.sibling;
    return n.subtreeFlags |= s, n.childLanes = l, r;
  }
  function oh(n, r, l) {
    var s = r.pendingProps;
    switch (Pc(r), r.tag) {
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
        return Zn(r), null;
      case 1:
        return zn(r.type) && Eu(), Zn(r), null;
      case 3:
        return s = r.stateNode, Ro(), ln(Yn), ln(En), We(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (n === null || n.child === null) && (Uc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Na !== null && (Uo(Na), Na = null))), Un(n, r), Zn(r), null;
      case 5:
        Hc(r);
        var p = xo(Es.current);
        if (l = r.type, n !== null && r.stateNode != null) ih(n, r, l, s, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!s) {
            if (r.stateNode === null) throw Error(d(166));
            return Zn(r), null;
          }
          if (n = xo(ki.current), Uc(r)) {
            s = r.stateNode, l = r.type;
            var m = r.memoizedProps;
            switch (s[xi] = r, s[ps] = m, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Bt("cancel", s), Bt("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Bt("load", s);
                break;
              case "video":
              case "audio":
                for (p = 0; p < cs.length; p++) Bt(cs[p], s);
                break;
              case "source":
                Bt("error", s);
                break;
              case "img":
              case "image":
              case "link":
                Bt(
                  "error",
                  s
                ), Bt("load", s);
                break;
              case "details":
                Bt("toggle", s);
                break;
              case "input":
                Vn(s, m), Bt("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!m.multiple }, Bt("invalid", s);
                break;
              case "textarea":
                Sr(s, m), Bt("invalid", s);
            }
            on(l, m), p = null;
            for (var b in m) if (m.hasOwnProperty(b)) {
              var k = m[b];
              b === "children" ? typeof k == "string" ? s.textContent !== k && (m.suppressHydrationWarning !== !0 && Oc(s.textContent, k, n), p = ["children", k]) : typeof k == "number" && s.textContent !== "" + k && (m.suppressHydrationWarning !== !0 && Oc(
                s.textContent,
                k,
                n
              ), p = ["children", "" + k]) : E.hasOwnProperty(b) && k != null && b === "onScroll" && Bt("scroll", s);
            }
            switch (l) {
              case "input":
                kn(s), vi(s, m, !0);
                break;
              case "textarea":
                kn(s), Mn(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (s.onclick = kl);
            }
            s = p, r.updateQueue = s, s !== null && (r.flags |= 4);
          } else {
            b = p.nodeType === 9 ? p : p.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Er(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = b.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof s.is == "string" ? n = b.createElement(l, { is: s.is }) : (n = b.createElement(l), l === "select" && (b = n, s.multiple ? b.multiple = !0 : s.size && (b.size = s.size))) : n = b.createElementNS(n, l), n[xi] = r, n[ps] = s, Fa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (b = Xn(l, s), l) {
                case "dialog":
                  Bt("cancel", n), Bt("close", n), p = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Bt("load", n), p = s;
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < cs.length; p++) Bt(cs[p], n);
                  p = s;
                  break;
                case "source":
                  Bt("error", n), p = s;
                  break;
                case "img":
                case "image":
                case "link":
                  Bt(
                    "error",
                    n
                  ), Bt("load", n), p = s;
                  break;
                case "details":
                  Bt("toggle", n), p = s;
                  break;
                case "input":
                  Vn(n, s), p = nr(n, s), Bt("invalid", n);
                  break;
                case "option":
                  p = s;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!s.multiple }, p = Se({}, s, { value: void 0 }), Bt("invalid", n);
                  break;
                case "textarea":
                  Sr(n, s), p = Bn(n, s), Bt("invalid", n);
                  break;
                default:
                  p = s;
              }
              on(l, p), k = p;
              for (m in k) if (k.hasOwnProperty(m)) {
                var P = k[m];
                m === "style" ? tn(n, P) : m === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, P != null && hi(n, P)) : m === "children" ? typeof P == "string" ? (l !== "textarea" || P !== "") && xe(n, P) : typeof P == "number" && xe(n, "" + P) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (E.hasOwnProperty(m) ? P != null && m === "onScroll" && Bt("scroll", n) : P != null && Z(n, m, P, b));
              }
              switch (l) {
                case "input":
                  kn(n), vi(n, s, !1);
                  break;
                case "textarea":
                  kn(n), Mn(n);
                  break;
                case "option":
                  s.value != null && n.setAttribute("value", "" + mt(s.value));
                  break;
                case "select":
                  n.multiple = !!s.multiple, m = s.value, m != null ? Cn(n, !!s.multiple, m, !1) : s.defaultValue != null && Cn(
                    n,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = kl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Zn(r), null;
      case 6:
        if (n && r.stateNode != null) lh(n, r, n.memoizedProps, s);
        else {
          if (typeof s != "string" && r.stateNode === null) throw Error(d(166));
          if (l = xo(Es.current), xo(ki.current), Uc(r)) {
            if (s = r.stateNode, l = r.memoizedProps, s[xi] = r, (m = s.nodeValue !== l) && (n = Kr, n !== null)) switch (n.tag) {
              case 3:
                Oc(s.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Oc(s.nodeValue, l, (n.mode & 1) !== 0);
            }
            m && (r.flags |= 4);
          } else s = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(s), s[xi] = r, r.stateNode = s;
        }
        return Zn(r), null;
      case 13:
        if (ln(gn), s = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (dn && Jr !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) ms(), Pl(), r.flags |= 98560, m = !1;
          else if (m = Uc(r), s !== null && s.dehydrated !== null) {
            if (n === null) {
              if (!m) throw Error(d(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(d(317));
              m[xi] = r;
            } else Pl(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            Zn(r), m = !1;
          } else Na !== null && (Uo(Na), Na = null), m = !0;
          if (!m) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = l, r) : (s = s !== null, s !== (n !== null && n.memoizedState !== null) && s && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (gn.current & 1) !== 0 ? _n === 0 && (_n = 3) : np())), r.updateQueue !== null && (r.flags |= 4), Zn(r), null);
      case 4:
        return Ro(), Un(n, r), n === null && hu(r.stateNode.containerInfo), Zn(r), null;
      case 10:
        return kd(r.type._context), Zn(r), null;
      case 17:
        return zn(r.type) && Eu(), Zn(r), null;
      case 19:
        if (ln(gn), m = r.memoizedState, m === null) return Zn(r), null;
        if (s = (r.flags & 128) !== 0, b = m.rendering, b === null) if (s) As(m, !1);
        else {
          if (_n !== 0 || n !== null && (n.flags & 128) !== 0) for (n = r.child; n !== null; ) {
            if (b = Vc(n), b !== null) {
              for (r.flags |= 128, As(m, !1), s = b.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), r.subtreeFlags = 0, s = l, l = r.child; l !== null; ) m = l, n = s, m.flags &= 14680066, b = m.alternate, b === null ? (m.childLanes = 0, m.lanes = n, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = b.childLanes, m.lanes = b.lanes, m.child = b.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = b.memoizedProps, m.memoizedState = b.memoizedState, m.updateQueue = b.updateQueue, m.type = b.type, n = b.dependencies, m.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Ye(gn, gn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          m.tail !== null && ct() > Ou && (r.flags |= 128, s = !0, As(m, !1), r.lanes = 4194304);
        }
        else {
          if (!s) if (n = Vc(b), n !== null) {
            if (r.flags |= 128, s = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), As(m, !0), m.tail === null && m.tailMode === "hidden" && !b.alternate && !dn) return Zn(r), null;
          } else 2 * ct() - m.renderingStartTime > Ou && l !== 1073741824 && (r.flags |= 128, s = !0, As(m, !1), r.lanes = 4194304);
          m.isBackwards ? (b.sibling = r.child, r.child = b) : (l = m.last, l !== null ? l.sibling = b : r.child = b, m.last = b);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = ct(), r.sibling = null, l = gn.current, Ye(gn, s ? l & 1 | 2 : l & 1), r) : (Zn(r), null);
      case 22:
      case 23:
        return tp(), s = r.memoizedState !== null, n !== null && n.memoizedState !== null !== s && (r.flags |= 8192), s && (r.mode & 1) !== 0 ? (ga & 1073741824) !== 0 && (Zn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Zn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, r.tag));
  }
  function ff(n, r) {
    switch (Pc(r), r.tag) {
      case 1:
        return zn(r.type) && Eu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Ro(), ln(Yn), ln(En), We(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Hc(r), null;
      case 13:
        if (ln(gn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(d(340));
          Pl();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return ln(gn), null;
      case 4:
        return Ro(), null;
      case 10:
        return kd(r.type._context), null;
      case 22:
      case 23:
        return tp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ps = !1, br = !1, _y = typeof WeakSet == "function" ? WeakSet : Set, Pe = null;
  function Ru(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (s) {
      pn(n, r, s);
    }
    else l.current = null;
  }
  function df(n, r, l) {
    try {
      l();
    } catch (s) {
      pn(n, r, s);
    }
  }
  var uh = !1;
  function sh(n, r) {
    if (ds = Oa, n = us(), wc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var s = l.getSelection && l.getSelection();
        if (s && s.rangeCount !== 0) {
          l = s.anchorNode;
          var p = s.anchorOffset, m = s.focusNode;
          s = s.focusOffset;
          try {
            l.nodeType, m.nodeType;
          } catch {
            l = null;
            break e;
          }
          var b = 0, k = -1, P = -1, X = 0, ve = 0, ye = n, de = null;
          t: for (; ; ) {
            for (var ze; ye !== l || p !== 0 && ye.nodeType !== 3 || (k = b + p), ye !== m || s !== 0 && ye.nodeType !== 3 || (P = b + s), ye.nodeType === 3 && (b += ye.nodeValue.length), (ze = ye.firstChild) !== null; )
              de = ye, ye = ze;
            for (; ; ) {
              if (ye === n) break t;
              if (de === l && ++X === p && (k = b), de === m && ++ve === s && (P = b), (ze = ye.nextSibling) !== null) break;
              ye = de, de = ye.parentNode;
            }
            ye = ze;
          }
          l = k === -1 || P === -1 ? null : { start: k, end: P };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (So = { focusedElem: n, selectionRange: l }, Oa = !1, Pe = r; Pe !== null; ) if (r = Pe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Pe = n;
    else for (; Pe !== null; ) {
      r = Pe;
      try {
        var Fe = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Fe !== null) {
              var Ie = Fe.memoizedProps, Dn = Fe.memoizedState, B = r.stateNode, F = B.getSnapshotBeforeUpdate(r.elementType === r.type ? Ie : li(r.type, Ie), Dn);
              B.__reactInternalSnapshotBeforeUpdate = F;
            }
            break;
          case 3:
            var G = r.stateNode.containerInfo;
            G.nodeType === 1 ? G.textContent = "" : G.nodeType === 9 && G.documentElement && G.removeChild(G.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(d(163));
        }
      } catch (he) {
        pn(r, r.return, he);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Pe = n;
        break;
      }
      Pe = r.return;
    }
    return Fe = uh, uh = !1, Fe;
  }
  function Us(n, r, l) {
    var s = r.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var p = s = s.next;
      do {
        if ((p.tag & n) === n) {
          var m = p.destroy;
          p.destroy = void 0, m !== void 0 && df(r, l, m);
        }
        p = p.next;
      } while (p !== s);
    }
  }
  function Fs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var s = l.create;
          l.destroy = s();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Qd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function pf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, pf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[xi], delete r[ps], delete r[vs], delete r[Su], delete r[xy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function js(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function nl(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || js(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Li(n, r, l) {
    var s = n.tag;
    if (s === 5 || s === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = kl));
    else if (s !== 4 && (n = n.child, n !== null)) for (Li(n, r, l), n = n.sibling; n !== null; ) Li(n, r, l), n = n.sibling;
  }
  function zi(n, r, l) {
    var s = n.tag;
    if (s === 5 || s === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (s !== 4 && (n = n.child, n !== null)) for (zi(n, r, l), n = n.sibling; n !== null; ) zi(n, r, l), n = n.sibling;
  }
  var Rn = null, zr = !1;
  function Nr(n, r, l) {
    for (l = l.child; l !== null; ) ch(n, r, l), l = l.sibling;
  }
  function ch(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(wl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        br || Ru(l, r);
      case 6:
        var s = Rn, p = zr;
        Rn = null, Nr(n, r, l), Rn = s, zr = p, Rn !== null && (zr ? (n = Rn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Rn.removeChild(l.stateNode));
        break;
      case 18:
        Rn !== null && (zr ? (n = Rn, l = l.stateNode, n.nodeType === 8 ? gu(n.parentNode, l) : n.nodeType === 1 && gu(n, l), ti(n)) : gu(Rn, l.stateNode));
        break;
      case 4:
        s = Rn, p = zr, Rn = l.stateNode.containerInfo, zr = !0, Nr(n, r, l), Rn = s, zr = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!br && (s = l.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          p = s = s.next;
          do {
            var m = p, b = m.destroy;
            m = m.tag, b !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && df(l, r, b), p = p.next;
          } while (p !== s);
        }
        Nr(n, r, l);
        break;
      case 1:
        if (!br && (Ru(l, r), s = l.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = l.memoizedProps, s.state = l.memoizedState, s.componentWillUnmount();
        } catch (k) {
          pn(l, r, k);
        }
        Nr(n, r, l);
        break;
      case 21:
        Nr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (br = (s = br) || l.memoizedState !== null, Nr(n, r, l), br = s) : Nr(n, r, l);
        break;
      default:
        Nr(n, r, l);
    }
  }
  function fh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new _y()), r.forEach(function(s) {
        var p = Eh.bind(null, n, s);
        l.has(s) || (l.add(s), s.then(p, p));
      });
    }
  }
  function oi(n, r) {
    var l = r.deletions;
    if (l !== null) for (var s = 0; s < l.length; s++) {
      var p = l[s];
      try {
        var m = n, b = r, k = b;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 5:
              Rn = k.stateNode, zr = !1;
              break e;
            case 3:
              Rn = k.stateNode.containerInfo, zr = !0;
              break e;
            case 4:
              Rn = k.stateNode.containerInfo, zr = !0;
              break e;
          }
          k = k.return;
        }
        if (Rn === null) throw Error(d(160));
        ch(m, b, p), Rn = null, zr = !1;
        var P = p.alternate;
        P !== null && (P.return = null), p.return = null;
      } catch (X) {
        pn(p, r, X);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) qd(r, n), r = r.sibling;
  }
  function qd(n, r) {
    var l = n.alternate, s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (oi(r, n), na(n), s & 4) {
          try {
            Us(3, n, n.return), Fs(3, n);
          } catch (Ie) {
            pn(n, n.return, Ie);
          }
          try {
            Us(5, n, n.return);
          } catch (Ie) {
            pn(n, n.return, Ie);
          }
        }
        break;
      case 1:
        oi(r, n), na(n), s & 512 && l !== null && Ru(l, l.return);
        break;
      case 5:
        if (oi(r, n), na(n), s & 512 && l !== null && Ru(l, l.return), n.flags & 32) {
          var p = n.stateNode;
          try {
            xe(p, "");
          } catch (Ie) {
            pn(n, n.return, Ie);
          }
        }
        if (s & 4 && (p = n.stateNode, p != null)) {
          var m = n.memoizedProps, b = l !== null ? l.memoizedProps : m, k = n.type, P = n.updateQueue;
          if (n.updateQueue = null, P !== null) try {
            k === "input" && m.type === "radio" && m.name != null && In(p, m), Xn(k, b);
            var X = Xn(k, m);
            for (b = 0; b < P.length; b += 2) {
              var ve = P[b], ye = P[b + 1];
              ve === "style" ? tn(p, ye) : ve === "dangerouslySetInnerHTML" ? hi(p, ye) : ve === "children" ? xe(p, ye) : Z(p, ve, ye, X);
            }
            switch (k) {
              case "input":
                Gr(p, m);
                break;
              case "textarea":
                Wa(p, m);
                break;
              case "select":
                var de = p._wrapperState.wasMultiple;
                p._wrapperState.wasMultiple = !!m.multiple;
                var ze = m.value;
                ze != null ? Cn(p, !!m.multiple, ze, !1) : de !== !!m.multiple && (m.defaultValue != null ? Cn(
                  p,
                  !!m.multiple,
                  m.defaultValue,
                  !0
                ) : Cn(p, !!m.multiple, m.multiple ? [] : "", !1));
            }
            p[ps] = m;
          } catch (Ie) {
            pn(n, n.return, Ie);
          }
        }
        break;
      case 6:
        if (oi(r, n), na(n), s & 4) {
          if (n.stateNode === null) throw Error(d(162));
          p = n.stateNode, m = n.memoizedProps;
          try {
            p.nodeValue = m;
          } catch (Ie) {
            pn(n, n.return, Ie);
          }
        }
        break;
      case 3:
        if (oi(r, n), na(n), s & 4 && l !== null && l.memoizedState.isDehydrated) try {
          ti(r.containerInfo);
        } catch (Ie) {
          pn(n, n.return, Ie);
        }
        break;
      case 4:
        oi(r, n), na(n);
        break;
      case 13:
        oi(r, n), na(n), p = n.child, p.flags & 8192 && (m = p.memoizedState !== null, p.stateNode.isHidden = m, !m || p.alternate !== null && p.alternate.memoizedState !== null || (Jd = ct())), s & 4 && fh(n);
        break;
      case 22:
        if (ve = l !== null && l.memoizedState !== null, n.mode & 1 ? (br = (X = br) || ve, oi(r, n), br = X) : oi(r, n), na(n), s & 8192) {
          if (X = n.memoizedState !== null, (n.stateNode.isHidden = X) && !ve && (n.mode & 1) !== 0) for (Pe = n, ve = n.child; ve !== null; ) {
            for (ye = Pe = ve; Pe !== null; ) {
              switch (de = Pe, ze = de.child, de.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Us(4, de, de.return);
                  break;
                case 1:
                  Ru(de, de.return);
                  var Fe = de.stateNode;
                  if (typeof Fe.componentWillUnmount == "function") {
                    s = de, l = de.return;
                    try {
                      r = s, Fe.props = r.memoizedProps, Fe.state = r.memoizedState, Fe.componentWillUnmount();
                    } catch (Ie) {
                      pn(s, l, Ie);
                    }
                  }
                  break;
                case 5:
                  Ru(de, de.return);
                  break;
                case 22:
                  if (de.memoizedState !== null) {
                    Hs(ye);
                    continue;
                  }
              }
              ze !== null ? (ze.return = de, Pe = ze) : Hs(ye);
            }
            ve = ve.sibling;
          }
          e: for (ve = null, ye = n; ; ) {
            if (ye.tag === 5) {
              if (ve === null) {
                ve = ye;
                try {
                  p = ye.stateNode, X ? (m = p.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (k = ye.stateNode, P = ye.memoizedProps.style, b = P != null && P.hasOwnProperty("display") ? P.display : null, k.style.display = It("display", b));
                } catch (Ie) {
                  pn(n, n.return, Ie);
                }
              }
            } else if (ye.tag === 6) {
              if (ve === null) try {
                ye.stateNode.nodeValue = X ? "" : ye.memoizedProps;
              } catch (Ie) {
                pn(n, n.return, Ie);
              }
            } else if ((ye.tag !== 22 && ye.tag !== 23 || ye.memoizedState === null || ye === n) && ye.child !== null) {
              ye.child.return = ye, ye = ye.child;
              continue;
            }
            if (ye === n) break e;
            for (; ye.sibling === null; ) {
              if (ye.return === null || ye.return === n) break e;
              ve === ye && (ve = null), ye = ye.return;
            }
            ve === ye && (ve = null), ye.sibling.return = ye.return, ye = ye.sibling;
          }
        }
        break;
      case 19:
        oi(r, n), na(n), s & 4 && fh(n);
        break;
      case 21:
        break;
      default:
        oi(
          r,
          n
        ), na(n);
    }
  }
  function na(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (js(l)) {
              var s = l;
              break e;
            }
            l = l.return;
          }
          throw Error(d(160));
        }
        switch (s.tag) {
          case 5:
            var p = s.stateNode;
            s.flags & 32 && (xe(p, ""), s.flags &= -33);
            var m = nl(n);
            zi(n, m, p);
            break;
          case 3:
          case 4:
            var b = s.stateNode.containerInfo, k = nl(n);
            Li(n, k, b);
            break;
          default:
            throw Error(d(161));
        }
      } catch (P) {
        pn(n, n.return, P);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Dy(n, r, l) {
    Pe = n, Xd(n);
  }
  function Xd(n, r, l) {
    for (var s = (n.mode & 1) !== 0; Pe !== null; ) {
      var p = Pe, m = p.child;
      if (p.tag === 22 && s) {
        var b = p.memoizedState !== null || Ps;
        if (!b) {
          var k = p.alternate, P = k !== null && k.memoizedState !== null || br;
          k = Ps;
          var X = br;
          if (Ps = b, (br = P) && !X) for (Pe = p; Pe !== null; ) b = Pe, P = b.child, b.tag === 22 && b.memoizedState !== null ? Kd(p) : P !== null ? (P.return = b, Pe = P) : Kd(p);
          for (; m !== null; ) Pe = m, Xd(m), m = m.sibling;
          Pe = p, Ps = k, br = X;
        }
        dh(n);
      } else (p.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = p, Pe = m) : dh(n);
    }
  }
  function dh(n) {
    for (; Pe !== null; ) {
      var r = Pe;
      if ((r.flags & 8772) !== 0) {
        var l = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              br || Fs(5, r);
              break;
            case 1:
              var s = r.stateNode;
              if (r.flags & 4 && !br) if (l === null) s.componentDidMount();
              else {
                var p = r.elementType === r.type ? l.memoizedProps : li(r.type, l.memoizedProps);
                s.componentDidUpdate(p, l.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var m = r.updateQueue;
              m !== null && Ad(r, m, s);
              break;
            case 3:
              var b = r.updateQueue;
              if (b !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Ad(r, b, l);
              }
              break;
            case 5:
              var k = r.stateNode;
              if (l === null && r.flags & 4) {
                l = k;
                var P = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    P.autoFocus && l.focus();
                    break;
                  case "img":
                    P.src && (l.src = P.src);
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
              if (r.memoizedState === null) {
                var X = r.alternate;
                if (X !== null) {
                  var ve = X.memoizedState;
                  if (ve !== null) {
                    var ye = ve.dehydrated;
                    ye !== null && ti(ye);
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
              throw Error(d(163));
          }
          br || r.flags & 512 && Qd(r);
        } catch (de) {
          pn(r, r.return, de);
        }
      }
      if (r === n) {
        Pe = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Pe = l;
        break;
      }
      Pe = r.return;
    }
  }
  function Hs(n) {
    for (; Pe !== null; ) {
      var r = Pe;
      if (r === n) {
        Pe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Pe = l;
        break;
      }
      Pe = r.return;
    }
  }
  function Kd(n) {
    for (; Pe !== null; ) {
      var r = Pe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Fs(4, r);
            } catch (P) {
              pn(r, l, P);
            }
            break;
          case 1:
            var s = r.stateNode;
            if (typeof s.componentDidMount == "function") {
              var p = r.return;
              try {
                s.componentDidMount();
              } catch (P) {
                pn(r, p, P);
              }
            }
            var m = r.return;
            try {
              Qd(r);
            } catch (P) {
              pn(r, m, P);
            }
            break;
          case 5:
            var b = r.return;
            try {
              Qd(r);
            } catch (P) {
              pn(r, b, P);
            }
        }
      } catch (P) {
        pn(r, r.return, P);
      }
      if (r === n) {
        Pe = null;
        break;
      }
      var k = r.sibling;
      if (k !== null) {
        k.return = r.return, Pe = k;
        break;
      }
      Pe = r.return;
    }
  }
  var Oy = Math.ceil, Vl = oe.ReactCurrentDispatcher, Ao = oe.ReactCurrentOwner, ur = oe.ReactCurrentBatchConfig, kt = 0, Wn = null, Fn = null, sr = 0, ga = 0, _u = La(0), _n = 0, Vs = null, Ni = 0, Du = 0, vf = 0, Is = null, ra = null, Jd = 0, Ou = 1 / 0, Sa = null, ku = !1, Po = null, Il = null, hf = !1, rl = null, Bs = 0, Bl = 0, Mu = null, $s = -1, xr = 0;
  function jn() {
    return (kt & 6) !== 0 ? ct() : $s !== -1 ? $s : $s = ct();
  }
  function Ai(n) {
    return (n.mode & 1) === 0 ? 1 : (kt & 2) !== 0 && sr !== 0 ? sr & -sr : Ry.transition !== null ? (xr === 0 && (xr = ru()), xr) : (n = Pt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : cu(n.type)), n);
  }
  function Ar(n, r, l, s) {
    if (50 < Bl) throw Bl = 0, Mu = null, Error(d(185));
    $i(n, l, s), ((kt & 2) === 0 || n !== Wn) && (n === Wn && ((kt & 2) === 0 && (Du |= l), _n === 4 && ui(n, sr)), aa(n, s), l === 1 && kt === 0 && (r.mode & 1) === 0 && (Ou = ct() + 500, wu && _i()));
  }
  function aa(n, r) {
    var l = n.callbackNode;
    so(n, r);
    var s = ei(n, n === Wn ? sr : 0);
    if (s === 0) l !== null && ar(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = s & -s, n.callbackPriority !== r) {
      if (l != null && ar(l), r === 1) n.tag === 0 ? Ll(Zd.bind(null, n)) : Nc(Zd.bind(null, n)), yu(function() {
        (kt & 6) === 0 && _i();
      }), l = null;
      else {
        switch (iu(s)) {
          case 1:
            l = Ja;
            break;
          case 4:
            l = oo;
            break;
          case 16:
            l = uo;
            break;
          case 536870912:
            l = eu;
            break;
          default:
            l = uo;
        }
        l = Ch(l, mf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function mf(n, r) {
    if ($s = -1, xr = 0, (kt & 6) !== 0) throw Error(d(327));
    var l = n.callbackNode;
    if (Lu() && n.callbackNode !== l) return null;
    var s = ei(n, n === Wn ? sr : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & n.expiredLanes) !== 0 || r) r = yf(n, s);
    else {
      r = s;
      var p = kt;
      kt |= 2;
      var m = vh();
      (Wn !== n || sr !== r) && (Sa = null, Ou = ct() + 500, al(n, r));
      do
        try {
          hh();
          break;
        } catch (k) {
          ph(n, k);
        }
      while (!0);
      Od(), Vl.current = m, kt = p, Fn !== null ? r = 0 : (Wn = null, sr = 0, r = _n);
    }
    if (r !== 0) {
      if (r === 2 && (p = Tl(n), p !== 0 && (s = p, r = Ys(n, p))), r === 1) throw l = Vs, al(n, 0), ui(n, s), aa(n, ct()), l;
      if (r === 6) ui(n, s);
      else {
        if (p = n.current.alternate, (s & 30) === 0 && !ky(p) && (r = yf(n, s), r === 2 && (m = Tl(n), m !== 0 && (s = m, r = Ys(n, m))), r === 1)) throw l = Vs, al(n, 0), ui(n, s), aa(n, ct()), l;
        switch (n.finishedWork = p, n.finishedLanes = s, r) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            jo(n, ra, Sa);
            break;
          case 3:
            if (ui(n, s), (s & 130023424) === s && (r = Jd + 500 - ct(), 10 < r)) {
              if (ei(n, 0) !== 0) break;
              if (p = n.suspendedLanes, (p & s) !== s) {
                jn(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = Mc(jo.bind(null, n, ra, Sa), r);
              break;
            }
            jo(n, ra, Sa);
            break;
          case 4:
            if (ui(n, s), (s & 4194240) === s) break;
            for (r = n.eventTimes, p = -1; 0 < s; ) {
              var b = 31 - Or(s);
              m = 1 << b, b = r[b], b > p && (p = b), s &= ~m;
            }
            if (s = p, s = ct() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Oy(s / 1960)) - s, 10 < s) {
              n.timeoutHandle = Mc(jo.bind(null, n, ra, Sa), s);
              break;
            }
            jo(n, ra, Sa);
            break;
          case 5:
            jo(n, ra, Sa);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return aa(n, ct()), n.callbackNode === l ? mf.bind(null, n) : null;
  }
  function Ys(n, r) {
    var l = Is;
    return n.current.memoizedState.isDehydrated && (al(n, r).flags |= 256), n = yf(n, r), n !== 2 && (r = ra, ra = l, r !== null && Uo(r)), n;
  }
  function Uo(n) {
    ra === null ? ra = n : ra.push.apply(ra, n);
  }
  function ky(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var s = 0; s < l.length; s++) {
          var p = l[s], m = p.getSnapshot;
          p = p.value;
          try {
            if (!ri(m(), p)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ui(n, r) {
    for (r &= ~vf, r &= ~Du, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Or(r), s = 1 << l;
      n[l] = -1, r &= ~s;
    }
  }
  function Zd(n) {
    if ((kt & 6) !== 0) throw Error(d(327));
    Lu();
    var r = ei(n, 0);
    if ((r & 1) === 0) return aa(n, ct()), null;
    var l = yf(n, r);
    if (n.tag !== 0 && l === 2) {
      var s = Tl(n);
      s !== 0 && (r = s, l = Ys(n, s));
    }
    if (l === 1) throw l = Vs, al(n, 0), ui(n, r), aa(n, ct()), l;
    if (l === 6) throw Error(d(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, jo(n, ra, Sa), aa(n, ct()), null;
  }
  function ep(n, r) {
    var l = kt;
    kt |= 1;
    try {
      return n(r);
    } finally {
      kt = l, kt === 0 && (Ou = ct() + 500, wu && _i());
    }
  }
  function Fo(n) {
    rl !== null && rl.tag === 0 && (kt & 6) === 0 && Lu();
    var r = kt;
    kt |= 1;
    var l = ur.transition, s = Pt;
    try {
      if (ur.transition = null, Pt = 1, n) return n();
    } finally {
      Pt = s, ur.transition = l, kt = r, (kt & 6) === 0 && _i();
    }
  }
  function tp() {
    ga = _u.current, ln(_u);
  }
  function al(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, bd(l)), Fn !== null) for (l = Fn.return; l !== null; ) {
      var s = l;
      switch (Pc(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && Eu();
          break;
        case 3:
          Ro(), ln(Yn), ln(En), We();
          break;
        case 5:
          Hc(s);
          break;
        case 4:
          Ro();
          break;
        case 13:
          ln(gn);
          break;
        case 19:
          ln(gn);
          break;
        case 10:
          kd(s.type._context);
          break;
        case 22:
        case 23:
          tp();
      }
      l = l.return;
    }
    if (Wn = n, Fn = n = $l(n.current, null), sr = ga = r, _n = 0, Vs = null, vf = Du = Ni = 0, ra = Is = null, bo !== null) {
      for (r = 0; r < bo.length; r++) if (l = bo[r], s = l.interleaved, s !== null) {
        l.interleaved = null;
        var p = s.next, m = l.pending;
        if (m !== null) {
          var b = m.next;
          m.next = p, s.next = b;
        }
        l.pending = s;
      }
      bo = null;
    }
    return n;
  }
  function ph(n, r) {
    do {
      var l = Fn;
      try {
        if (Od(), Ct.current = Lo, Ic) {
          for (var s = Ft.memoizedState; s !== null; ) {
            var p = s.queue;
            p !== null && (p.pending = null), s = s.next;
          }
          Ic = !1;
        }
        if (Kt = 0, Jn = An = Ft = null, Cs = !1, _o = 0, Ao.current = null, l === null || l.return === null) {
          _n = 1, Vs = r, Fn = null;
          break;
        }
        e: {
          var m = n, b = l.return, k = l, P = r;
          if (r = sr, k.flags |= 32768, P !== null && typeof P == "object" && typeof P.then == "function") {
            var X = P, ve = k, ye = ve.tag;
            if ((ve.mode & 1) === 0 && (ye === 0 || ye === 11 || ye === 15)) {
              var de = ve.alternate;
              de ? (ve.updateQueue = de.updateQueue, ve.memoizedState = de.memoizedState, ve.lanes = de.lanes) : (ve.updateQueue = null, ve.memoizedState = null);
            }
            var ze = eh(b);
            if (ze !== null) {
              ze.flags &= -257, Hl(ze, b, k, m, r), ze.mode & 1 && Bd(m, X, r), r = ze, P = X;
              var Fe = r.updateQueue;
              if (Fe === null) {
                var Ie = /* @__PURE__ */ new Set();
                Ie.add(P), r.updateQueue = Ie;
              } else Fe.add(P);
              break e;
            } else {
              if ((r & 1) === 0) {
                Bd(m, X, r), np();
                break e;
              }
              P = Error(d(426));
            }
          } else if (dn && k.mode & 1) {
            var Dn = eh(b);
            if (Dn !== null) {
              (Dn.flags & 65536) === 0 && (Dn.flags |= 256), Hl(Dn, b, k, m, r), Zi(zo(P, k));
              break e;
            }
          }
          m = P = zo(P, k), _n !== 4 && (_n = 2), Is === null ? Is = [m] : Is.push(m), m = b;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var B = Zv(m, P, r);
                Qv(m, B);
                break e;
              case 1:
                k = P;
                var F = m.type, G = m.stateNode;
                if ((m.flags & 128) === 0 && (typeof F.getDerivedStateFromError == "function" || G !== null && typeof G.componentDidCatch == "function" && (Il === null || !Il.has(G)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var he = Id(m, k, r);
                  Qv(m, he);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        yh(l);
      } catch (je) {
        r = je, Fn === l && l !== null && (Fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function vh() {
    var n = Vl.current;
    return Vl.current = Lo, n === null ? Lo : n;
  }
  function np() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), Wn === null || (Ni & 268435455) === 0 && (Du & 268435455) === 0 || ui(Wn, sr);
  }
  function yf(n, r) {
    var l = kt;
    kt |= 2;
    var s = vh();
    (Wn !== n || sr !== r) && (Sa = null, al(n, r));
    do
      try {
        My();
        break;
      } catch (p) {
        ph(n, p);
      }
    while (!0);
    if (Od(), kt = l, Vl.current = s, Fn !== null) throw Error(d(261));
    return Wn = null, sr = 0, _n;
  }
  function My() {
    for (; Fn !== null; ) mh(Fn);
  }
  function hh() {
    for (; Fn !== null && !Xa(); ) mh(Fn);
  }
  function mh(n) {
    var r = wh(n.alternate, n, ga);
    n.memoizedProps = n.pendingProps, r === null ? yh(n) : Fn = r, Ao.current = null;
  }
  function yh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (l = oh(l, r, ga), l !== null) {
          Fn = l;
          return;
        }
      } else {
        if (l = ff(l, r), l !== null) {
          l.flags &= 32767, Fn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          _n = 6, Fn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Fn = r;
        return;
      }
      Fn = r = n;
    } while (r !== null);
    _n === 0 && (_n = 5);
  }
  function jo(n, r, l) {
    var s = Pt, p = ur.transition;
    try {
      ur.transition = null, Pt = 1, Ly(n, r, l, s);
    } finally {
      ur.transition = p, Pt = s;
    }
    return null;
  }
  function Ly(n, r, l, s) {
    do
      Lu();
    while (rl !== null);
    if ((kt & 6) !== 0) throw Error(d(327));
    l = n.finishedWork;
    var p = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(d(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var m = l.lanes | l.childLanes;
    if (rd(n, m), n === Wn && (Fn = Wn = null, sr = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || hf || (hf = !0, Ch(uo, function() {
      return Lu(), null;
    })), m = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || m) {
      m = ur.transition, ur.transition = null;
      var b = Pt;
      Pt = 1;
      var k = kt;
      kt |= 4, Ao.current = null, sh(n, l), qd(l, n), pu(So), Oa = !!ds, So = ds = null, n.current = l, Dy(l), Ka(), kt = k, Pt = b, ur.transition = m;
    } else n.current = l;
    if (hf && (hf = !1, rl = n, Bs = p), m = n.pendingLanes, m === 0 && (Il = null), Ju(l.stateNode), aa(n, ct()), r !== null) for (s = n.onRecoverableError, l = 0; l < r.length; l++) p = r[l], s(p.value, { componentStack: p.stack, digest: p.digest });
    if (ku) throw ku = !1, n = Po, Po = null, n;
    return (Bs & 1) !== 0 && n.tag !== 0 && Lu(), m = n.pendingLanes, (m & 1) !== 0 ? n === Mu ? Bl++ : (Bl = 0, Mu = n) : Bl = 0, _i(), null;
  }
  function Lu() {
    if (rl !== null) {
      var n = iu(Bs), r = ur.transition, l = Pt;
      try {
        if (ur.transition = null, Pt = 16 > n ? 16 : n, rl === null) var s = !1;
        else {
          if (n = rl, rl = null, Bs = 0, (kt & 6) !== 0) throw Error(d(331));
          var p = kt;
          for (kt |= 4, Pe = n.current; Pe !== null; ) {
            var m = Pe, b = m.child;
            if ((Pe.flags & 16) !== 0) {
              var k = m.deletions;
              if (k !== null) {
                for (var P = 0; P < k.length; P++) {
                  var X = k[P];
                  for (Pe = X; Pe !== null; ) {
                    var ve = Pe;
                    switch (ve.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Us(8, ve, m);
                    }
                    var ye = ve.child;
                    if (ye !== null) ye.return = ve, Pe = ye;
                    else for (; Pe !== null; ) {
                      ve = Pe;
                      var de = ve.sibling, ze = ve.return;
                      if (pf(ve), ve === X) {
                        Pe = null;
                        break;
                      }
                      if (de !== null) {
                        de.return = ze, Pe = de;
                        break;
                      }
                      Pe = ze;
                    }
                  }
                }
                var Fe = m.alternate;
                if (Fe !== null) {
                  var Ie = Fe.child;
                  if (Ie !== null) {
                    Fe.child = null;
                    do {
                      var Dn = Ie.sibling;
                      Ie.sibling = null, Ie = Dn;
                    } while (Ie !== null);
                  }
                }
                Pe = m;
              }
            }
            if ((m.subtreeFlags & 2064) !== 0 && b !== null) b.return = m, Pe = b;
            else e: for (; Pe !== null; ) {
              if (m = Pe, (m.flags & 2048) !== 0) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  Us(9, m, m.return);
              }
              var B = m.sibling;
              if (B !== null) {
                B.return = m.return, Pe = B;
                break e;
              }
              Pe = m.return;
            }
          }
          var F = n.current;
          for (Pe = F; Pe !== null; ) {
            b = Pe;
            var G = b.child;
            if ((b.subtreeFlags & 2064) !== 0 && G !== null) G.return = b, Pe = G;
            else e: for (b = F; Pe !== null; ) {
              if (k = Pe, (k.flags & 2048) !== 0) try {
                switch (k.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fs(9, k);
                }
              } catch (je) {
                pn(k, k.return, je);
              }
              if (k === b) {
                Pe = null;
                break e;
              }
              var he = k.sibling;
              if (he !== null) {
                he.return = k.return, Pe = he;
                break e;
              }
              Pe = k.return;
            }
          }
          if (kt = p, _i(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(wl, n);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        Pt = l, ur.transition = r;
      }
    }
    return !1;
  }
  function gh(n, r, l) {
    r = zo(l, r), r = Zv(n, r, 1), n = Ul(n, r, 1), r = jn(), n !== null && ($i(n, 1, r), aa(n, r));
  }
  function pn(n, r, l) {
    if (n.tag === 3) gh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        gh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var s = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Il === null || !Il.has(s))) {
          n = zo(l, n), n = Id(r, n, 1), r = Ul(r, n, 1), n = jn(), r !== null && ($i(r, 1, n), aa(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function zy(n, r, l) {
    var s = n.pingCache;
    s !== null && s.delete(r), r = jn(), n.pingedLanes |= n.suspendedLanes & l, Wn === n && (sr & l) === l && (_n === 4 || _n === 3 && (sr & 130023424) === sr && 500 > ct() - Jd ? al(n, 0) : vf |= l), aa(n, r);
  }
  function Sh(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = pa, pa <<= 1, (pa & 130023424) === 0 && (pa = 4194304)));
    var l = jn();
    n = ma(n, r), n !== null && ($i(n, r, l), aa(n, l));
  }
  function Ny(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Sh(n, l);
  }
  function Eh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var s = n.stateNode, p = n.memoizedState;
        p !== null && (l = p.retryLane);
        break;
      case 19:
        s = n.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    s !== null && s.delete(r), Sh(n, l);
  }
  var wh;
  wh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Yn.current) Pn = !0;
    else {
      if ((n.lanes & l) === 0 && (r.flags & 128) === 0) return Pn = !1, Ns(n, r, l);
      Pn = (n.flags & 131072) !== 0;
    }
    else Pn = !1, dn && (r.flags & 1048576) !== 0 && $v(r, Ji, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var s = r.type;
        Pa(n, r), n = r.pendingProps;
        var p = Xr(r, En.current);
        yn(r, l), p = Fl(null, r, s, n, p, l);
        var m = ii();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(s) ? (m = !0, Kn(r)) : m = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Nd(r), p.updater = lf, r.stateNode = p, p._reactInternals = r, Os(r, s, n, l), r = Ls(null, r, s, !0, m, l)) : (r.tag = 0, dn && m && Ac(r), or(null, r, p, l), r = r.child), r;
      case 16:
        s = r.elementType;
        e: {
          switch (Pa(n, r), n = r.pendingProps, p = s._init, s = p(s._payload), r.type = s, p = r.tag = Py(s), n = li(s, n), p) {
            case 0:
              r = th(null, r, s, n, l);
              break e;
            case 1:
              r = nh(null, r, s, n, l);
              break e;
            case 11:
              r = ta(null, r, s, n, l);
              break e;
            case 14:
              r = No(null, r, s, li(s.type, n), l);
              break e;
          }
          throw Error(d(
            306,
            s,
            ""
          ));
        }
        return r;
      case 0:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : li(s, p), th(n, r, s, p, l);
      case 1:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : li(s, p), nh(n, r, s, p, l);
      case 3:
        e: {
          if (xu(r), n === null) throw Error(d(387));
          s = r.pendingProps, m = r.memoizedState, p = m.element, Wv(n, r), ys(r, s, null, l);
          var b = r.memoizedState;
          if (s = b.element, m.isDehydrated) if (m = { element: s, isDehydrated: !1, cache: b.cache, pendingSuspenseBoundaries: b.pendingSuspenseBoundaries, transitions: b.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
            p = zo(Error(d(423)), r), r = rh(n, r, s, l, p);
            break e;
          } else if (s !== p) {
            p = zo(Error(d(424)), r), r = rh(n, r, s, l, p);
            break e;
          } else for (Jr = bi(r.stateNode.containerInfo.firstChild), Kr = r, dn = !0, Na = null, l = Oe(r, null, s, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Pl(), s === p) {
              r = Ua(n, r, l);
              break e;
            }
            or(n, r, s, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return qv(r), n === null && _d(r), s = r.type, p = r.pendingProps, m = n !== null ? n.memoizedProps : null, b = p.children, kc(s, p) ? b = null : m !== null && kc(s, m) && (r.flags |= 32), $d(n, r), or(n, r, b, l), r.child;
      case 6:
        return n === null && _d(r), null;
      case 13:
        return cf(n, r, l);
      case 4:
        return Pd(r, r.stateNode.containerInfo), s = r.pendingProps, n === null ? r.child = bn(r, null, s, l) : or(n, r, s, l), r.child;
      case 11:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : li(s, p), ta(n, r, s, p, l);
      case 7:
        return or(n, r, r.pendingProps, l), r.child;
      case 8:
        return or(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return or(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (s = r.type._context, p = r.pendingProps, m = r.memoizedProps, b = p.value, Ye(ha, s._currentValue), s._currentValue = b, m !== null) if (ri(m.value, b)) {
            if (m.children === p.children && !Yn.current) {
              r = Ua(n, r, l);
              break e;
            }
          } else for (m = r.child, m !== null && (m.return = r); m !== null; ) {
            var k = m.dependencies;
            if (k !== null) {
              b = m.child;
              for (var P = k.firstContext; P !== null; ) {
                if (P.context === s) {
                  if (m.tag === 1) {
                    P = el(-1, l & -l), P.tag = 2;
                    var X = m.updateQueue;
                    if (X !== null) {
                      X = X.shared;
                      var ve = X.pending;
                      ve === null ? P.next = P : (P.next = ve.next, ve.next = P), X.pending = P;
                    }
                  }
                  m.lanes |= l, P = m.alternate, P !== null && (P.lanes |= l), Md(
                    m.return,
                    l,
                    r
                  ), k.lanes |= l;
                  break;
                }
                P = P.next;
              }
            } else if (m.tag === 10) b = m.type === r.type ? null : m.child;
            else if (m.tag === 18) {
              if (b = m.return, b === null) throw Error(d(341));
              b.lanes |= l, k = b.alternate, k !== null && (k.lanes |= l), Md(b, l, r), b = m.sibling;
            } else b = m.child;
            if (b !== null) b.return = m;
            else for (b = m; b !== null; ) {
              if (b === r) {
                b = null;
                break;
              }
              if (m = b.sibling, m !== null) {
                m.return = b.return, b = m;
                break;
              }
              b = b.return;
            }
            m = b;
          }
          or(n, r, p.children, l), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, s = r.pendingProps.children, yn(r, l), p = Aa(p), s = s(p), r.flags |= 1, or(n, r, s, l), r.child;
      case 14:
        return s = r.type, p = li(s, r.pendingProps), p = li(s.type, p), No(n, r, s, p, l);
      case 15:
        return ft(n, r, r.type, r.pendingProps, l);
      case 17:
        return s = r.type, p = r.pendingProps, p = r.elementType === s ? p : li(s, p), Pa(n, r), r.tag = 1, zn(s) ? (n = !0, Kn(r)) : n = !1, yn(r, l), of(r, s, p), Os(r, s, p, l), Ls(null, r, s, !0, n, l);
      case 19:
        return Mi(n, r, l);
      case 22:
        return Ms(n, r, l);
    }
    throw Error(d(156, r.tag));
  };
  function Ch(n, r) {
    return un(n, r);
  }
  function Ay(n, r, l, s) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ja(n, r, l, s) {
    return new Ay(n, r, l, s);
  }
  function rp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Py(n) {
    if (typeof n == "function") return rp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === be) return 11;
      if (n === dt) return 14;
    }
    return 2;
  }
  function $l(n, r) {
    var l = n.alternate;
    return l === null ? (l = ja(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Gs(n, r, l, s, p, m) {
    var b = 2;
    if (s = n, typeof n == "function") rp(n) && (b = 1);
    else if (typeof n == "string") b = 5;
    else e: switch (n) {
      case ue:
        return il(l.children, p, m, r);
      case Ve:
        b = 8, p |= 8;
        break;
      case fe:
        return n = ja(12, l, r, p | 2), n.elementType = fe, n.lanes = m, n;
      case Ee:
        return n = ja(13, l, r, p), n.elementType = Ee, n.lanes = m, n;
      case Qe:
        return n = ja(19, l, r, p), n.elementType = Qe, n.lanes = m, n;
      case we:
        return Yl(l, p, m, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Tt:
            b = 10;
            break e;
          case me:
            b = 9;
            break e;
          case be:
            b = 11;
            break e;
          case dt:
            b = 14;
            break e;
          case bt:
            b = 16, s = null;
            break e;
        }
        throw Error(d(130, n == null ? n : typeof n, ""));
    }
    return r = ja(b, l, r, p), r.elementType = n, r.type = s, r.lanes = m, r;
  }
  function il(n, r, l, s) {
    return n = ja(7, n, s, r), n.lanes = l, n;
  }
  function Yl(n, r, l, s) {
    return n = ja(22, n, s, r), n.elementType = we, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function ap(n, r, l) {
    return n = ja(6, n, null, r), n.lanes = l, n;
  }
  function gf(n, r, l) {
    return r = ja(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Th(n, r, l, s, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = au(0), this.expirationTimes = au(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = au(0), this.identifierPrefix = s, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function Sf(n, r, l, s, p, m, b, k, P) {
    return n = new Th(n, r, l, k, P), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = ja(3, null, null, r), n.current = m, m.stateNode = n, m.memoizedState = { element: s, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Nd(m), n;
  }
  function Uy(n, r, l) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Me, key: s == null ? null : "" + s, children: n, containerInfo: r, implementation: l };
  }
  function ip(n) {
    if (!n) return Cr;
    n = n._reactInternals;
    e: {
      if (st(n) !== n || n.tag !== 1) throw Error(d(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (zn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(d(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (zn(l)) return hs(n, l, r);
    }
    return r;
  }
  function bh(n, r, l, s, p, m, b, k, P) {
    return n = Sf(l, s, !0, n, p, m, b, k, P), n.context = ip(null), l = n.current, s = jn(), p = Ai(l), m = el(s, p), m.callback = r ?? null, Ul(l, m, p), n.current.lanes = p, $i(n, p, s), aa(n, s), n;
  }
  function Ef(n, r, l, s) {
    var p = r.current, m = jn(), b = Ai(p);
    return l = ip(l), r.context === null ? r.context = l : r.pendingContext = l, r = el(m, b), r.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (r.callback = s), n = Ul(p, r, b), n !== null && (Ar(n, p, b, m), jc(n, p, b)), b;
  }
  function wf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function lp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Cf(n, r) {
    lp(n, r), (n = n.alternate) && lp(n, r);
  }
  function xh() {
    return null;
  }
  var Ho = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function op(n) {
    this._internalRoot = n;
  }
  Tf.prototype.render = op.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(d(409));
    Ef(n, r, null, null);
  }, Tf.prototype.unmount = op.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Fo(function() {
        Ef(null, n, null, null);
      }), r[Xi] = null;
    }
  };
  function Tf(n) {
    this._internalRoot = n;
  }
  Tf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = it();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < $n.length && r !== 0 && r < $n[l].priority; l++) ;
      $n.splice(l, 0, n), l === 0 && ts(n);
    }
  };
  function up(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function bf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Rh() {
  }
  function Fy(n, r, l, s, p) {
    if (p) {
      if (typeof s == "function") {
        var m = s;
        s = function() {
          var X = wf(b);
          m.call(X);
        };
      }
      var b = bh(r, s, n, 0, null, !1, !1, "", Rh);
      return n._reactRootContainer = b, n[Xi] = b.current, hu(n.nodeType === 8 ? n.parentNode : n), Fo(), b;
    }
    for (; p = n.lastChild; ) n.removeChild(p);
    if (typeof s == "function") {
      var k = s;
      s = function() {
        var X = wf(P);
        k.call(X);
      };
    }
    var P = Sf(n, 0, !1, null, null, !1, !1, "", Rh);
    return n._reactRootContainer = P, n[Xi] = P.current, hu(n.nodeType === 8 ? n.parentNode : n), Fo(function() {
      Ef(r, P, l, s);
    }), P;
  }
  function Ws(n, r, l, s, p) {
    var m = l._reactRootContainer;
    if (m) {
      var b = m;
      if (typeof p == "function") {
        var k = p;
        p = function() {
          var P = wf(b);
          k.call(P);
        };
      }
      Ef(r, b, n, p);
    } else b = Fy(l, r, n, p, s);
    return wf(b);
  }
  zt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Za(r.pendingLanes);
          l !== 0 && (Yi(r, l | 1), aa(r, ct()), (kt & 6) === 0 && (Ou = ct() + 500, _i()));
        }
        break;
      case 13:
        Fo(function() {
          var s = ma(n, 1);
          if (s !== null) {
            var p = jn();
            Ar(s, n, 1, p);
          }
        }), Cf(n, 1);
    }
  }, Zu = function(n) {
    if (n.tag === 13) {
      var r = ma(n, 134217728);
      if (r !== null) {
        var l = jn();
        Ar(r, n, 134217728, l);
      }
      Cf(n, 134217728);
    }
  }, Si = function(n) {
    if (n.tag === 13) {
      var r = Ai(n), l = ma(n, r);
      if (l !== null) {
        var s = jn();
        Ar(l, n, r, s);
      }
      Cf(n, r);
    }
  }, it = function() {
    return Pt;
  }, lu = function(n, r) {
    var l = Pt;
    try {
      return Pt = n, r();
    } finally {
      Pt = l;
    }
  }, Wt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Gr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var s = l[r];
            if (s !== n && s.form === n.form) {
              var p = mn(s);
              if (!p) throw Error(d(90));
              Rr(s), Gr(s, p);
            }
          }
        }
        break;
      case "textarea":
        Wa(n, l);
        break;
      case "select":
        r = l.value, r != null && Cn(n, !!l.multiple, r, !1);
    }
  }, io = ep, gl = Fo;
  var jy = { usingClientEntryPoint: !1, Events: [Ge, ai, mn, Bi, ao, ep] }, Qs = { findFiberByHostInstance: Eo, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _h = { bundleType: Qs.bundleType, version: Qs.version, rendererPackageName: Qs.rendererPackageName, rendererConfig: Qs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: oe.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Qs.findFiberByHostInstance || xh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gl.isDisabled && Gl.supportsFiber) try {
      wl = Gl.inject(_h), Wr = Gl;
    } catch {
    }
  }
  return Ya.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jy, Ya.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!up(r)) throw Error(d(200));
    return Uy(n, r, null, l);
  }, Ya.createRoot = function(n, r) {
    if (!up(n)) throw Error(d(299));
    var l = !1, s = "", p = Ho;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = Sf(n, 1, !1, null, null, l, !1, s, p), n[Xi] = r.current, hu(n.nodeType === 8 ? n.parentNode : n), new op(r);
  }, Ya.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(d(188)) : (n = Object.keys(n).join(","), Error(d(268, n)));
    return n = Tn(r), n = n === null ? null : n.stateNode, n;
  }, Ya.flushSync = function(n) {
    return Fo(n);
  }, Ya.hydrate = function(n, r, l) {
    if (!bf(r)) throw Error(d(200));
    return Ws(null, n, r, !0, l);
  }, Ya.hydrateRoot = function(n, r, l) {
    if (!up(n)) throw Error(d(405));
    var s = l != null && l.hydratedSources || null, p = !1, m = "", b = Ho;
    if (l != null && (l.unstable_strictMode === !0 && (p = !0), l.identifierPrefix !== void 0 && (m = l.identifierPrefix), l.onRecoverableError !== void 0 && (b = l.onRecoverableError)), r = bh(r, null, n, 1, l ?? null, p, !1, m, b), n[Xi] = r.current, hu(n), s) for (n = 0; n < s.length; n++) l = s[n], p = l._getVersion, p = p(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, p] : r.mutableSourceEagerHydrationData.push(
      l,
      p
    );
    return new Tf(r);
  }, Ya.render = function(n, r, l) {
    if (!bf(r)) throw Error(d(200));
    return Ws(null, n, r, !1, l);
  }, Ya.unmountComponentAtNode = function(n) {
    if (!bf(n)) throw Error(d(40));
    return n._reactRootContainer ? (Fo(function() {
      Ws(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Xi] = null;
      });
    }), !0) : !1;
  }, Ya.unstable_batchedUpdates = ep, Ya.unstable_renderSubtreeIntoContainer = function(n, r, l, s) {
    if (!bf(l)) throw Error(d(200));
    if (n == null || n._reactInternals === void 0) throw Error(d(38));
    return Ws(n, r, l, !1, s);
  }, Ya.version = "18.3.1-next-f1338f8080-20240426", Ya;
}
var Ga = {};
var AT;
function lO() {
  return AT || (AT = 1, process.env.NODE_ENV !== "production" && (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var f = pv(), u = QT(), d = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, h = !1;
    function E(e) {
      h = e;
    }
    function S(e) {
      if (!h) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        R("warn", e, a);
      }
    }
    function g(e) {
      if (!h) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        R("error", e, a);
      }
    }
    function R(e, t, a) {
      {
        var i = d.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var c = a.map(function(v) {
          return String(v);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var C = 0, D = 1, M = 2, O = 3, N = 4, L = 5, J = 6, I = 7, W = 8, V = 9, te = 10, Z = 11, oe = 12, le = 13, Me = 14, ue = 15, Ve = 16, fe = 17, Tt = 18, me = 19, be = 21, Ee = 22, Qe = 23, dt = 24, bt = 25, we = !0, pe = !1, Ce = !1, Se = !1, H = !1, ae = !0, et = !0, tt = !0, St = !0, ht = /* @__PURE__ */ new Set(), pt = {}, mt = {};
    function Et(e, t) {
      Yt(e, t), Yt(e + "Capture", t);
    }
    function Yt(e, t) {
      pt[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), pt[e] = t;
      {
        var a = e.toLowerCase();
        mt[a] = e, e === "onDoubleClick" && (mt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ht.add(t[i]);
    }
    var kn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Rr = Object.prototype.hasOwnProperty;
    function wn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function nr(e) {
      try {
        return Vn(e), !1;
      } catch {
        return !0;
      }
    }
    function Vn(e) {
      return "" + e;
    }
    function In(e, t) {
      if (nr(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, wn(e)), Vn(e);
    }
    function Gr(e) {
      if (nr(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wn(e)), Vn(e);
    }
    function vi(e, t) {
      if (nr(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, wn(e)), Vn(e);
    }
    function ca(e, t) {
      if (nr(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, wn(e)), Vn(e);
    }
    function qn(e) {
      if (nr(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", wn(e)), Vn(e);
    }
    function Cn(e) {
      if (nr(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", wn(e)), Vn(e);
    }
    var Bn = 0, Sr = 1, Wa = 2, Mn = 3, Er = 4, fa = 5, Qa = 6, hi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", xe = hi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Be = new RegExp("^[" + hi + "][" + xe + "]*$"), yt = {}, It = {};
    function tn(e) {
      return Rr.call(It, e) ? !0 : Rr.call(yt, e) ? !1 : Be.test(e) ? (It[e] = !0, !0) : (yt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === Bn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function on(e, t, a, i) {
      if (a !== null && a.type === Bn)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Xn(e, t, a, i) {
      if (t === null || typeof t > "u" || on(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Mn:
            return !t;
          case Er:
            return t === !1;
          case fa:
            return isNaN(t);
          case Qa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function nn(e) {
      return Wt.hasOwnProperty(e) ? Wt[e] : null;
    }
    function Gt(e, t, a, i, o, c, v) {
      this.acceptsBooleans = t === Wa || t === Mn || t === Er, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = v;
    }
    var Wt = {}, da = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    da.forEach(function(e) {
      Wt[e] = new Gt(
        e,
        Bn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Wt[t] = new Gt(
        t,
        Sr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        Wa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        Wa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        Mn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        Mn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        Er,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        Qa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        fa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var wr = /[\-\:]([a-z])/g, Ra = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(wr, Ra);
      Wt[t] = new Gt(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(wr, Ra);
      Wt[t] = new Gt(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(wr, Ra);
      Wt[t] = new Gt(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        Sr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Bi = "xlinkHref";
    Wt[Bi] = new Gt(
      "xlinkHref",
      Sr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        Sr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ao = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, io = !1;
    function gl(e) {
      !io && ao.test(e) && (io = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Sl(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        In(a, t), i.sanitizeURL && gl("" + a);
        var c = i.attributeName, v = null;
        if (i.type === Er) {
          if (e.hasAttribute(c)) {
            var y = e.getAttribute(c);
            return y === "" ? !0 : Xn(t, a, i, !1) ? y : y === "" + a ? a : y;
          }
        } else if (e.hasAttribute(c)) {
          if (Xn(t, a, i, !1))
            return e.getAttribute(c);
          if (i.type === Mn)
            return a;
          v = e.getAttribute(c);
        }
        return Xn(t, a, i, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function lo(e, t, a, i) {
      {
        if (!tn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return In(a, t), o === "" + a ? a : o;
      }
    }
    function _r(e, t, a, i) {
      var o = nn(t);
      if (!vn(t, o, i)) {
        if (Xn(t, a, o, i) && (a = null), i || o === null) {
          if (tn(t)) {
            var c = t;
            a === null ? e.removeAttribute(c) : (In(a, t), e.setAttribute(c, "" + a));
          }
          return;
        }
        var v = o.mustUseProperty;
        if (v) {
          var y = o.propertyName;
          if (a === null) {
            var w = o.type;
            e[y] = w === Mn ? !1 : "";
          } else
            e[y] = a;
          return;
        }
        var x = o.attributeName, _ = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(x);
        else {
          var j = o.type, U;
          j === Mn || j === Er && a === !0 ? U = "" : (In(a, x), U = "" + a, o.sanitizeURL && gl(U.toString())), _ ? e.setAttributeNS(_, x, U) : e.setAttribute(x, U);
        }
      }
    }
    var Dr = Symbol.for("react.element"), rr = Symbol.for("react.portal"), mi = Symbol.for("react.fragment"), qa = Symbol.for("react.strict_mode"), yi = Symbol.for("react.profiler"), gi = Symbol.for("react.provider"), A = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), De = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), st = Symbol.for("react.memo"), lt = Symbol.for("react.lazy"), xt = Symbol.for("react.scope"), wt = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), rn = Symbol.for("react.legacy_hidden"), un = Symbol.for("react.cache"), ar = Symbol.for("react.tracing_marker"), Xa = Symbol.iterator, Ka = "@@iterator";
    function ct(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Xa && e[Xa] || e[Ka];
      return typeof t == "function" ? t : null;
    }
    var vt = Object.assign, Ja = 0, oo, uo, El, eu, wl, Wr, Ju;
    function Or() {
    }
    Or.__reactDisabledLog = !0;
    function hc() {
      {
        if (Ja === 0) {
          oo = console.log, uo = console.info, El = console.warn, eu = console.error, wl = console.group, Wr = console.groupCollapsed, Ju = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Or,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ja++;
      }
    }
    function mc() {
      {
        if (Ja--, Ja === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: vt({}, e, {
              value: oo
            }),
            info: vt({}, e, {
              value: uo
            }),
            warn: vt({}, e, {
              value: El
            }),
            error: vt({}, e, {
              value: eu
            }),
            group: vt({}, e, {
              value: wl
            }),
            groupCollapsed: vt({}, e, {
              value: Wr
            }),
            groupEnd: vt({}, e, {
              value: Ju
            })
          });
        }
        Ja < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var tu = d.ReactCurrentDispatcher, Cl;
    function pa(e, t, a) {
      {
        if (Cl === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            Cl = i && i[1] || "";
          }
        return `
` + Cl + e;
      }
    }
    var Za = !1, ei;
    {
      var nu = typeof WeakMap == "function" ? WeakMap : Map;
      ei = new nu();
    }
    function so(e, t) {
      if (!e || Za)
        return "";
      {
        var a = ei.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Za = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = tu.current, tu.current = null, hc();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (K) {
              i = K;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (K) {
              i = K;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            i = K;
          }
          e();
        }
      } catch (K) {
        if (K && i && typeof K.stack == "string") {
          for (var y = K.stack.split(`
`), w = i.stack.split(`
`), x = y.length - 1, _ = w.length - 1; x >= 1 && _ >= 0 && y[x] !== w[_]; )
            _--;
          for (; x >= 1 && _ >= 0; x--, _--)
            if (y[x] !== w[_]) {
              if (x !== 1 || _ !== 1)
                do
                  if (x--, _--, _ < 0 || y[x] !== w[_]) {
                    var j = `
` + y[x].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && ei.set(e, j), j;
                  }
                while (x >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        Za = !1, tu.current = c, mc(), Error.prepareStackTrace = o;
      }
      var U = e ? e.displayName || e.name : "", Q = U ? pa(U) : "";
      return typeof e == "function" && ei.set(e, Q), Q;
    }
    function Tl(e, t, a) {
      return so(e, !0);
    }
    function ru(e, t, a) {
      return so(e, !1);
    }
    function au(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function $i(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return so(e, au(e));
      if (typeof e == "string")
        return pa(e);
      switch (e) {
        case De:
          return pa("Suspense");
        case Ue:
          return pa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case se:
            return ru(e.render);
          case st:
            return $i(e.type, t, a);
          case lt: {
            var i = e, o = i._payload, c = i._init;
            try {
              return $i(c(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function rd(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case L:
          return pa(e.type);
        case Ve:
          return pa("Lazy");
        case le:
          return pa("Suspense");
        case me:
          return pa("SuspenseList");
        case C:
        case M:
        case ue:
          return ru(e.type);
        case Z:
          return ru(e.type.render);
        case D:
          return Tl(e.type);
        default:
          return "";
      }
    }
    function Yi(e) {
      try {
        var t = "", a = e;
        do
          t += rd(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Pt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function iu(e) {
      return e.displayName || "Context";
    }
    function zt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case mi:
          return "Fragment";
        case rr:
          return "Portal";
        case yi:
          return "Profiler";
        case qa:
          return "StrictMode";
        case De:
          return "Suspense";
        case Ue:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case A:
            var t = e;
            return iu(t) + ".Consumer";
          case gi:
            var a = e;
            return iu(a._context) + ".Provider";
          case se:
            return Pt(e, e.render, "ForwardRef");
          case st:
            var i = e.displayName || null;
            return i !== null ? i : zt(e.type) || "Memo";
          case lt: {
            var o = e, c = o._payload, v = o._init;
            try {
              return zt(v(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Zu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Si(e) {
      return e.displayName || "Context";
    }
    function it(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case dt:
          return "Cache";
        case V:
          var i = a;
          return Si(i) + ".Consumer";
        case te:
          var o = a;
          return Si(o._context) + ".Provider";
        case Tt:
          return "DehydratedFragment";
        case Z:
          return Zu(a, a.render, "ForwardRef");
        case I:
          return "Fragment";
        case L:
          return a;
        case N:
          return "Portal";
        case O:
          return "Root";
        case J:
          return "Text";
        case Ve:
          return zt(a);
        case W:
          return a === qa ? "StrictMode" : "Mode";
        case Ee:
          return "Offscreen";
        case oe:
          return "Profiler";
        case be:
          return "Scope";
        case le:
          return "Suspense";
        case me:
          return "SuspenseList";
        case bt:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case D:
        case C:
        case fe:
        case M:
        case Me:
        case ue:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var lu = d.ReactDebugCurrentFrame, ir = null, Ei = !1;
    function kr() {
      {
        if (ir === null)
          return null;
        var e = ir._debugOwner;
        if (e !== null && typeof e < "u")
          return it(e);
      }
      return null;
    }
    function wi() {
      return ir === null ? "" : Yi(ir);
    }
    function sn() {
      lu.getCurrentStack = null, ir = null, Ei = !1;
    }
    function Qt(e) {
      lu.getCurrentStack = e === null ? null : wi, ir = e, Ei = !1;
    }
    function bl() {
      return ir;
    }
    function $n(e) {
      Ei = e;
    }
    function Mr(e) {
      return "" + e;
    }
    function _a(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Cn(e), e;
        default:
          return "";
      }
    }
    var co = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function es(e, t) {
      co[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ts(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function xl(e) {
      return e._valueTracker;
    }
    function fo(e) {
      e._valueTracker = null;
    }
    function ad(e) {
      var t = "";
      return e && (ts(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Da(e) {
      var t = ts(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Cn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, c = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(y) {
            Cn(y), i = "" + y, c.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return i;
          },
          setValue: function(y) {
            Cn(y), i = "" + y;
          },
          stopTracking: function() {
            fo(e), delete e[t];
          }
        };
        return v;
      }
    }
    function ti(e) {
      xl(e) || (e._valueTracker = Da(e));
    }
    function Ci(e) {
      if (!e)
        return !1;
      var t = xl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = ad(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Oa(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var ou = !1, uu = !1, Rl = !1, po = !1;
    function su(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function cu(e, t) {
      var a = e, i = t.checked, o = vt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function ni(e, t) {
      es("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !uu && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), uu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ou && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), ou = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: _a(t.value != null ? t.value : i),
        controlled: su(t)
      };
    }
    function T(e, t) {
      var a = e, i = t.checked;
      i != null && _r(a, "checked", i, !1);
    }
    function z(e, t) {
      var a = e;
      {
        var i = su(t);
        !a._wrapperState.controlled && i && !po && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), po = !0), a._wrapperState.controlled && !i && !Rl && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Rl = !0);
      }
      T(e, t);
      var o = _a(t.value), c = t.type;
      if (o != null)
        c === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = Mr(o)) : a.value !== Mr(o) && (a.value = Mr(o));
      else if (c === "submit" || c === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? qe(a, t.type, o) : t.hasOwnProperty("defaultValue") && qe(a, t.type, _a(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function q(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, c = o === "submit" || o === "reset";
        if (c && (t.value === void 0 || t.value === null))
          return;
        var v = Mr(i._wrapperState.initialValue);
        a || v !== i.value && (i.value = v), i.defaultValue = v;
      }
      var y = i.name;
      y !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, y !== "" && (i.name = y);
    }
    function ee(e, t) {
      var a = e;
      z(a, t), Te(a, t);
    }
    function Te(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        In(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), c = 0; c < o.length; c++) {
          var v = o[c];
          if (!(v === e || v.form !== e.form)) {
            var y = Yh(v);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ci(v), z(v, y);
          }
        }
      }
    }
    function qe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Oa(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Mr(e._wrapperState.initialValue) : e.defaultValue !== Mr(a) && (e.defaultValue = Mr(a)));
    }
    var _e = !1, Je = !1, Rt = !1;
    function Nt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? f.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Je || (Je = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Rt || (Rt = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !_e && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), _e = !0);
    }
    function an(e, t) {
      t.value != null && e.setAttribute("value", Mr(_a(t.value)));
    }
    var qt = Array.isArray;
    function gt(e) {
      return qt(e);
    }
    var Xt;
    Xt = !1;
    function hn() {
      var e = kr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var _l = ["value", "defaultValue"];
    function ns(e) {
      {
        es("select", e);
        for (var t = 0; t < _l.length; t++) {
          var a = _l[t];
          if (e[a] != null) {
            var i = gt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, hn()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, hn());
          }
        }
      }
    }
    function Gi(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var c = a, v = {}, y = 0; y < c.length; y++)
          v["$" + c[y]] = !0;
        for (var w = 0; w < o.length; w++) {
          var x = v.hasOwnProperty("$" + o[w].value);
          o[w].selected !== x && (o[w].selected = x), x && i && (o[w].defaultSelected = !0);
        }
      } else {
        for (var _ = Mr(_a(a)), j = null, U = 0; U < o.length; U++) {
          if (o[U].value === _) {
            o[U].selected = !0, i && (o[U].defaultSelected = !0);
            return;
          }
          j === null && !o[U].disabled && (j = o[U]);
        }
        j !== null && (j.selected = !0);
      }
    }
    function rs(e, t) {
      return vt({}, t, {
        value: void 0
      });
    }
    function vo(e, t) {
      var a = e;
      ns(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Xt && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Xt = !0);
    }
    function id(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Gi(a, !!t.multiple, i, !1) : t.defaultValue != null && Gi(a, !!t.multiple, t.defaultValue, !0);
    }
    function yc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? Gi(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? Gi(a, !!t.multiple, t.defaultValue, !0) : Gi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function ld(e, t) {
      var a = e, i = t.value;
      i != null && Gi(a, !!t.multiple, i, !1);
    }
    var vv = !1;
    function od(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = vt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Mr(a._wrapperState.initialValue)
      });
      return i;
    }
    function ud(e, t) {
      var a = e;
      es("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !vv && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component"), vv = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, c = t.defaultValue;
        if (o != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (c != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (gt(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            c = o;
          }
        }
        c == null && (c = ""), i = c;
      }
      a._wrapperState = {
        initialValue: _a(i)
      };
    }
    function hv(e, t) {
      var a = e, i = _a(t.value), o = _a(t.defaultValue);
      if (i != null) {
        var c = Mr(i);
        c !== a.value && (a.value = c), t.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c);
      }
      o != null && (a.defaultValue = Mr(o));
    }
    function mv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function vy(e, t) {
      hv(e, t);
    }
    var Wi = "http://www.w3.org/1999/xhtml", sd = "http://www.w3.org/1998/Math/MathML", cd = "http://www.w3.org/2000/svg";
    function fd(e) {
      switch (e) {
        case "svg":
          return cd;
        case "math":
          return sd;
        default:
          return Wi;
      }
    }
    function dd(e, t) {
      return e == null || e === Wi ? fd(t) : e === cd && t === "foreignObject" ? Wi : e;
    }
    var yv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, gc, gv = yv(function(e, t) {
      if (e.namespaceURI === cd && !("innerHTML" in e)) {
        gc = gc || document.createElement("div"), gc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = gc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qr = 1, Qi = 3, Ln = 8, qi = 9, pd = 11, fu = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Qi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, as = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, is = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Sv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Ev = ["Webkit", "ms", "Moz", "O"];
    Object.keys(is).forEach(function(e) {
      Ev.forEach(function(t) {
        is[Sv(t, e)] = is[e];
      });
    });
    function Sc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(is.hasOwnProperty(e) && is[e]) ? t + "px" : (ca(t, e), ("" + t).trim());
    }
    var wv = /([A-Z])/g, Cv = /^ms-/;
    function du(e) {
      return e.replace(wv, "-$1").toLowerCase().replace(Cv, "-ms-");
    }
    var Tv = function() {
    };
    {
      var hy = /^(?:webkit|moz|o)[A-Z]/, my = /^-ms-/, bv = /-(.)/g, vd = /;\s*$/, Ti = {}, ho = {}, xv = !1, ls = !1, yy = function(e) {
        return e.replace(bv, function(t, a) {
          return a.toUpperCase();
        });
      }, Rv = function(e) {
        Ti.hasOwnProperty(e) && Ti[e] || (Ti[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          yy(e.replace(my, "ms-"))
        ));
      }, hd = function(e) {
        Ti.hasOwnProperty(e) && Ti[e] || (Ti[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, md = function(e, t) {
        ho.hasOwnProperty(t) && ho[t] || (ho[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(vd, "")));
      }, _v = function(e, t) {
        xv || (xv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Dv = function(e, t) {
        ls || (ls = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Tv = function(e, t) {
        e.indexOf("-") > -1 ? Rv(e) : hy.test(e) ? hd(e) : vd.test(t) && md(e, t), typeof t == "number" && (isNaN(t) ? _v(e, t) : isFinite(t) || Dv(e, t));
      };
    }
    var Ov = Tv;
    function gy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var c = i.indexOf("--") === 0;
              t += a + (c ? i : du(i)) + ":", t += Sc(i, o, c), a = ";";
            }
          }
        return t || null;
      }
    }
    function kv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || Ov(i, t[i]);
          var c = Sc(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, c) : a[i] = c;
        }
    }
    function Sy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Mv(e) {
      var t = {};
      for (var a in e)
        for (var i = as[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function Ey(e, t) {
      {
        if (!t)
          return;
        var a = Mv(e), i = Mv(t), o = {};
        for (var c in a) {
          var v = a[c], y = i[c];
          if (y && v !== y) {
            var w = v + "," + y;
            if (o[w])
              continue;
            o[w] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Sy(e[v]) ? "Removing" : "Updating", v, y);
          }
        }
      }
    }
    var ri = {
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
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, os = vt({
      menuitem: !0
    }, ri), Lv = "__html";
    function Ec(e, t) {
      if (t) {
        if (os[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Lv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Dl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
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
    var us = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, wc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, pu = {}, wy = new RegExp("^(aria)-[" + xe + "]*$"), vu = new RegExp("^(aria)[A-Z][" + xe + "]*$");
    function yd(e, t) {
      {
        if (Rr.call(pu, t) && pu[t])
          return !0;
        if (vu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = wc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), pu[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), pu[t] = !0, !0;
        }
        if (wy.test(t)) {
          var o = t.toLowerCase(), c = wc.hasOwnProperty(o) ? o : null;
          if (c == null)
            return pu[t] = !0, !1;
          if (t !== c)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), pu[t] = !0, !0;
        }
      }
      return !0;
    }
    function ss(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = yd(e, i);
          o || a.push(i);
        }
        var c = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function gd(e, t) {
      Dl(e, t) || ss(e, t);
    }
    var Sd = !1;
    function Cc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Sd && (Sd = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var mo = function() {
    };
    {
      var lr = {}, Ed = /^on./, Tc = /^on[^A-Z]/, zv = new RegExp("^(aria)-[" + xe + "]*$"), Nv = new RegExp("^(aria)[A-Z][" + xe + "]*$");
      mo = function(e, t, a, i) {
        if (Rr.call(lr, t) && lr[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), lr[t] = !0, !0;
        if (i != null) {
          var c = i.registrationNameDependencies, v = i.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var y = v.hasOwnProperty(o) ? v[o] : null;
          if (y != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, y), lr[t] = !0, !0;
          if (Ed.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), lr[t] = !0, !0;
        } else if (Ed.test(t))
          return Tc.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), lr[t] = !0, !0;
        if (zv.test(t) || Nv.test(t))
          return !0;
        if (o === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), lr[t] = !0, !0;
        if (o === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), lr[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), lr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), lr[t] = !0, !0;
        var w = nn(t), x = w !== null && w.type === Bn;
        if (us.hasOwnProperty(o)) {
          var _ = us[o];
          if (_ !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, _), lr[t] = !0, !0;
        } else if (!x && t !== o)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), lr[t] = !0, !0;
        return typeof a == "boolean" && on(t, a, w, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), lr[t] = !0, !0) : x ? !0 : on(t, a, w, !1) ? (lr[t] = !0, !1) : ((a === "false" || a === "true") && w !== null && w.type === Mn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), lr[t] = !0), !0);
      };
    }
    var Av = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var c = mo(e, o, t[o], a);
          c || i.push(o);
        }
        var v = i.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function Pv(e, t, a) {
      Dl(e, t) || Av(e, t, a);
    }
    var wd = 1, bc = 2, ka = 4, Cd = wd | bc | ka, yo = null;
    function Cy(e) {
      yo !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), yo = e;
    }
    function Ty() {
      yo === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), yo = null;
    }
    function cs(e) {
      return e === yo;
    }
    function Td(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Qi ? t.parentNode : t;
    }
    var xc = null, go = null, Bt = null;
    function Rc(e) {
      var t = Au(e);
      if (t) {
        if (typeof xc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Yh(a);
          xc(t.stateNode, t.type, i);
        }
      }
    }
    function _c(e) {
      xc = e;
    }
    function hu(e) {
      go ? Bt ? Bt.push(e) : Bt = [e] : go = e;
    }
    function Uv() {
      return go !== null || Bt !== null;
    }
    function Dc() {
      if (go) {
        var e = go, t = Bt;
        if (go = null, Bt = null, Rc(e), t)
          for (var a = 0; a < t.length; a++)
            Rc(t[a]);
      }
    }
    var mu = function(e, t) {
      return e(t);
    }, fs = function() {
    }, Ol = !1;
    function Fv() {
      var e = Uv();
      e && (fs(), Dc());
    }
    function jv(e, t, a) {
      if (Ol)
        return e(t, a);
      Ol = !0;
      try {
        return mu(e, t, a);
      } finally {
        Ol = !1, Fv();
      }
    }
    function by(e, t, a) {
      mu = e, fs = a;
    }
    function Hv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Oc(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Hv(t));
        default:
          return !1;
      }
    }
    function kl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Yh(a);
      if (i === null)
        return null;
      var o = i[t];
      if (Oc(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var ds = !1;
    if (kn)
      try {
        var So = {};
        Object.defineProperty(So, "passive", {
          get: function() {
            ds = !0;
          }
        }), window.addEventListener("test", So, So), window.removeEventListener("test", So, So);
      } catch {
        ds = !1;
      }
    function kc(e, t, a, i, o, c, v, y, w) {
      var x = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, x);
      } catch (_) {
        this.onError(_);
      }
    }
    var Mc = kc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var bd = document.createElement("react");
      Mc = function(t, a, i, o, c, v, y, w, x) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var _ = document.createEvent("Event"), j = !1, U = !0, Q = window.event, K = Object.getOwnPropertyDescriptor(window, "event");
        function ne() {
          bd.removeEventListener(re, Xe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = Q);
        }
        var ke = Array.prototype.slice.call(arguments, 3);
        function Xe() {
          j = !0, ne(), a.apply(i, ke), U = !1;
        }
        var $e, Lt = !1, _t = !1;
        function $(Y) {
          if ($e = Y.error, Lt = !0, $e === null && Y.colno === 0 && Y.lineno === 0 && (_t = !0), Y.defaultPrevented && $e != null && typeof $e == "object")
            try {
              $e._suppressLogging = !0;
            } catch {
            }
        }
        var re = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", $), bd.addEventListener(re, Xe, !1), _.initEvent(re, !1, !1), bd.dispatchEvent(_), K && Object.defineProperty(window, "event", K), j && U && (Lt ? _t && ($e = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : $e = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError($e)), window.removeEventListener("error", $), !j)
          return ne(), kc.apply(this, arguments);
      };
    }
    var Vv = Mc, yu = !1, Lc = null, gu = !1, bi = null, Iv = {
      onError: function(e) {
        yu = !0, Lc = e;
      }
    };
    function Ml(e, t, a, i, o, c, v, y, w) {
      yu = !1, Lc = null, Vv.apply(Iv, arguments);
    }
    function xi(e, t, a, i, o, c, v, y, w) {
      if (Ml.apply(this, arguments), yu) {
        var x = vs();
        gu || (gu = !0, bi = x);
      }
    }
    function ps() {
      if (gu) {
        var e = bi;
        throw gu = !1, bi = null, e;
      }
    }
    function Xi() {
      return yu;
    }
    function vs() {
      if (yu) {
        var e = Lc;
        return yu = !1, Lc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Su(e) {
      return e._reactInternals;
    }
    function xy(e) {
      return e._reactInternals !== void 0;
    }
    function Eo(e, t) {
      e._reactInternals = t;
    }
    var Ge = (
      /*                      */
      0
    ), ai = (
      /*                */
      1
    ), mn = (
      /*                    */
      2
    ), Ot = (
      /*                       */
      4
    ), Ma = (
      /*                */
      16
    ), La = (
      /*                 */
      32
    ), ln = (
      /*                     */
      64
    ), Ye = (
      /*                   */
      128
    ), Cr = (
      /*            */
      256
    ), En = (
      /*                          */
      512
    ), Yn = (
      /*                     */
      1024
    ), qr = (
      /*                      */
      2048
    ), Xr = (
      /*                    */
      4096
    ), zn = (
      /*                   */
      8192
    ), Eu = (
      /*             */
      16384
    ), Bv = (
      /*               */
      32767
    ), hs = (
      /*                   */
      32768
    ), Kn = (
      /*                */
      65536
    ), zc = (
      /* */
      131072
    ), Ri = (
      /*                       */
      1048576
    ), wu = (
      /*                    */
      2097152
    ), Ki = (
      /*                 */
      4194304
    ), Nc = (
      /*                */
      8388608
    ), Ll = (
      /*               */
      16777216
    ), _i = (
      /*              */
      33554432
    ), zl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ot | Yn | 0
    ), Nl = mn | Ot | Ma | La | En | Xr | zn, Al = Ot | ln | En | zn, Ji = qr | Ma, Nn = Ki | Nc | wu, za = d.ReactCurrentOwner;
    function va(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (mn | Xr)) !== Ge && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === O ? a : null;
    }
    function Di(e) {
      if (e.tag === le) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Oi(e) {
      return e.tag === O ? e.stateNode.containerInfo : null;
    }
    function wo(e) {
      return va(e) === e;
    }
    function $v(e) {
      {
        var t = za.current;
        if (t !== null && t.tag === D) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", it(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = Su(e);
      return o ? va(o) === o : !1;
    }
    function Ac(e) {
      if (va(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Pc(e) {
      var t = e.alternate;
      if (!t) {
        var a = va(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var c = i.return;
        if (c === null)
          break;
        var v = c.alternate;
        if (v === null) {
          var y = c.return;
          if (y !== null) {
            i = o = y;
            continue;
          }
          break;
        }
        if (c.child === v.child) {
          for (var w = c.child; w; ) {
            if (w === i)
              return Ac(c), e;
            if (w === o)
              return Ac(c), t;
            w = w.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = c, o = v;
        else {
          for (var x = !1, _ = c.child; _; ) {
            if (_ === i) {
              x = !0, i = c, o = v;
              break;
            }
            if (_ === o) {
              x = !0, o = c, i = v;
              break;
            }
            _ = _.sibling;
          }
          if (!x) {
            for (_ = v.child; _; ) {
              if (_ === i) {
                x = !0, i = v, o = c;
                break;
              }
              if (_ === o) {
                x = !0, o = v, i = c;
                break;
              }
              _ = _.sibling;
            }
            if (!x)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== O)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Kr(e) {
      var t = Pc(e);
      return t !== null ? Jr(t) : null;
    }
    function Jr(e) {
      if (e.tag === L || e.tag === J)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Jr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function dn(e) {
      var t = Pc(e);
      return t !== null ? Na(t) : null;
    }
    function Na(e) {
      if (e.tag === L || e.tag === J)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== N) {
          var a = Na(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var xd = u.unstable_scheduleCallback, Yv = u.unstable_cancelCallback, Rd = u.unstable_shouldYield, _d = u.unstable_requestPaint, Gn = u.unstable_now, Uc = u.unstable_getCurrentPriorityLevel, ms = u.unstable_ImmediatePriority, Pl = u.unstable_UserBlockingPriority, Zi = u.unstable_NormalPriority, Ry = u.unstable_LowPriority, Co = u.unstable_IdlePriority, Fc = u.unstable_yieldValue, Gv = u.unstable_setDisableYieldValue, To = null, bn = null, Oe = null, ha = !1, Zr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Cu(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        et && (e = vt({}, e, {
          getLaneLabelMap: bo,
          injectProfilingHooks: Aa
        })), To = t.inject(e), bn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Dd(e, t) {
      if (bn && typeof bn.onScheduleFiberRoot == "function")
        try {
          bn.onScheduleFiberRoot(To, e, t);
        } catch (a) {
          ha || (ha = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Od(e, t) {
      if (bn && typeof bn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ye) === Ye;
          if (tt) {
            var i;
            switch (t) {
              case Lr:
                i = ms;
                break;
              case Mi:
                i = Pl;
                break;
              case Pa:
                i = Zi;
                break;
              case Ua:
                i = Co;
                break;
              default:
                i = Zi;
                break;
            }
            bn.onCommitFiberRoot(To, e, i, a);
          }
        } catch (o) {
          ha || (ha = !0, g("React instrumentation encountered an error: %s", o));
        }
    }
    function kd(e) {
      if (bn && typeof bn.onPostCommitFiberRoot == "function")
        try {
          bn.onPostCommitFiberRoot(To, e);
        } catch (t) {
          ha || (ha = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Md(e) {
      if (bn && typeof bn.onCommitFiberUnmount == "function")
        try {
          bn.onCommitFiberUnmount(To, e);
        } catch (t) {
          ha || (ha = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function yn(e) {
      if (typeof Fc == "function" && (Gv(e), E(e)), bn && typeof bn.setStrictMode == "function")
        try {
          bn.setStrictMode(To, e);
        } catch (t) {
          ha || (ha = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Aa(e) {
      Oe = e;
    }
    function bo() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < _o; a++) {
          var i = Xv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ld(e) {
      Oe !== null && typeof Oe.markCommitStarted == "function" && Oe.markCommitStarted(e);
    }
    function zd() {
      Oe !== null && typeof Oe.markCommitStopped == "function" && Oe.markCommitStopped();
    }
    function ma(e) {
      Oe !== null && typeof Oe.markComponentRenderStarted == "function" && Oe.markComponentRenderStarted(e);
    }
    function ya() {
      Oe !== null && typeof Oe.markComponentRenderStopped == "function" && Oe.markComponentRenderStopped();
    }
    function Nd(e) {
      Oe !== null && typeof Oe.markComponentPassiveEffectMountStarted == "function" && Oe.markComponentPassiveEffectMountStarted(e);
    }
    function Wv() {
      Oe !== null && typeof Oe.markComponentPassiveEffectMountStopped == "function" && Oe.markComponentPassiveEffectMountStopped();
    }
    function el(e) {
      Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStarted == "function" && Oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ul() {
      Oe !== null && typeof Oe.markComponentPassiveEffectUnmountStopped == "function" && Oe.markComponentPassiveEffectUnmountStopped();
    }
    function jc(e) {
      Oe !== null && typeof Oe.markComponentLayoutEffectMountStarted == "function" && Oe.markComponentLayoutEffectMountStarted(e);
    }
    function Qv() {
      Oe !== null && typeof Oe.markComponentLayoutEffectMountStopped == "function" && Oe.markComponentLayoutEffectMountStopped();
    }
    function ys(e) {
      Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStarted == "function" && Oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function Ad() {
      Oe !== null && typeof Oe.markComponentLayoutEffectUnmountStopped == "function" && Oe.markComponentLayoutEffectUnmountStopped();
    }
    function gs(e, t, a) {
      Oe !== null && typeof Oe.markComponentErrored == "function" && Oe.markComponentErrored(e, t, a);
    }
    function ki(e, t, a) {
      Oe !== null && typeof Oe.markComponentSuspended == "function" && Oe.markComponentSuspended(e, t, a);
    }
    function Ss(e) {
      Oe !== null && typeof Oe.markLayoutEffectsStarted == "function" && Oe.markLayoutEffectsStarted(e);
    }
    function Es() {
      Oe !== null && typeof Oe.markLayoutEffectsStopped == "function" && Oe.markLayoutEffectsStopped();
    }
    function xo(e) {
      Oe !== null && typeof Oe.markPassiveEffectsStarted == "function" && Oe.markPassiveEffectsStarted(e);
    }
    function Pd() {
      Oe !== null && typeof Oe.markPassiveEffectsStopped == "function" && Oe.markPassiveEffectsStopped();
    }
    function Ro(e) {
      Oe !== null && typeof Oe.markRenderStarted == "function" && Oe.markRenderStarted(e);
    }
    function qv() {
      Oe !== null && typeof Oe.markRenderYielded == "function" && Oe.markRenderYielded();
    }
    function Hc() {
      Oe !== null && typeof Oe.markRenderStopped == "function" && Oe.markRenderStopped();
    }
    function gn(e) {
      Oe !== null && typeof Oe.markRenderScheduled == "function" && Oe.markRenderScheduled(e);
    }
    function Vc(e, t) {
      Oe !== null && typeof Oe.markForceUpdateScheduled == "function" && Oe.markForceUpdateScheduled(e, t);
    }
    function ws(e, t) {
      Oe !== null && typeof Oe.markStateUpdateScheduled == "function" && Oe.markStateUpdateScheduled(e, t);
    }
    var We = (
      /*                         */
      0
    ), Ct = (
      /*                 */
      1
    ), Ut = (
      /*                    */
      2
    ), Kt = (
      /*               */
      8
    ), Ft = (
      /*              */
      16
    ), An = Math.clz32 ? Math.clz32 : Cs, Jn = Math.log, Ic = Math.LN2;
    function Cs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Jn(t) / Ic | 0) | 0;
    }
    var _o = 31, ce = (
      /*                        */
      0
    ), At = (
      /*                          */
      0
    ), nt = (
      /*                        */
      1
    ), Fl = (
      /*    */
      2
    ), ii = (
      /*             */
      4
    ), Tr = (
      /*            */
      8
    ), xn = (
      /*                     */
      16
    ), tl = (
      /*                */
      32
    ), jl = (
      /*                       */
      4194240
    ), Do = (
      /*                        */
      64
    ), Bc = (
      /*                        */
      128
    ), $c = (
      /*                        */
      256
    ), Yc = (
      /*                        */
      512
    ), Gc = (
      /*                        */
      1024
    ), Wc = (
      /*                        */
      2048
    ), Qc = (
      /*                        */
      4096
    ), qc = (
      /*                        */
      8192
    ), Xc = (
      /*                        */
      16384
    ), Oo = (
      /*                       */
      32768
    ), Kc = (
      /*                       */
      65536
    ), Tu = (
      /*                       */
      131072
    ), bu = (
      /*                       */
      262144
    ), Jc = (
      /*                       */
      524288
    ), Ts = (
      /*                       */
      1048576
    ), Zc = (
      /*                       */
      2097152
    ), bs = (
      /*                            */
      130023424
    ), ko = (
      /*                             */
      4194304
    ), ef = (
      /*                             */
      8388608
    ), xs = (
      /*                             */
      16777216
    ), tf = (
      /*                             */
      33554432
    ), nf = (
      /*                             */
      67108864
    ), Ud = ko, Rs = (
      /*          */
      134217728
    ), Fd = (
      /*                          */
      268435455
    ), _s = (
      /*               */
      268435456
    ), Mo = (
      /*                        */
      536870912
    ), ea = (
      /*                   */
      1073741824
    );
    function Xv(e) {
      {
        if (e & nt)
          return "Sync";
        if (e & Fl)
          return "InputContinuousHydration";
        if (e & ii)
          return "InputContinuous";
        if (e & Tr)
          return "DefaultHydration";
        if (e & xn)
          return "Default";
        if (e & tl)
          return "TransitionHydration";
        if (e & jl)
          return "Transition";
        if (e & bs)
          return "Retry";
        if (e & Rs)
          return "SelectiveHydration";
        if (e & _s)
          return "IdleHydration";
        if (e & Mo)
          return "Idle";
        if (e & ea)
          return "Offscreen";
      }
    }
    var en = -1, Lo = Do, rf = ko;
    function Ds(e) {
      switch (Hl(e)) {
        case nt:
          return nt;
        case Fl:
          return Fl;
        case ii:
          return ii;
        case Tr:
          return Tr;
        case xn:
          return xn;
        case tl:
          return tl;
        case Do:
        case Bc:
        case $c:
        case Yc:
        case Gc:
        case Wc:
        case Qc:
        case qc:
        case Xc:
        case Oo:
        case Kc:
        case Tu:
        case bu:
        case Jc:
        case Ts:
        case Zc:
          return e & jl;
        case ko:
        case ef:
        case xs:
        case tf:
        case nf:
          return e & bs;
        case Rs:
          return Rs;
        case _s:
          return _s;
        case Mo:
          return Mo;
        case ea:
          return ea;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function af(e, t) {
      var a = e.pendingLanes;
      if (a === ce)
        return ce;
      var i = ce, o = e.suspendedLanes, c = e.pingedLanes, v = a & Fd;
      if (v !== ce) {
        var y = v & ~o;
        if (y !== ce)
          i = Ds(y);
        else {
          var w = v & c;
          w !== ce && (i = Ds(w));
        }
      } else {
        var x = a & ~o;
        x !== ce ? i = Ds(x) : c !== ce && (i = Ds(c));
      }
      if (i === ce)
        return ce;
      if (t !== ce && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === ce) {
        var _ = Hl(i), j = Hl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          _ >= j || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          _ === xn && (j & jl) !== ce
        )
          return t;
      }
      (i & ii) !== ce && (i |= a & xn);
      var U = e.entangledLanes;
      if (U !== ce)
        for (var Q = e.entanglements, K = i & U; K > 0; ) {
          var ne = Pn(K), ke = 1 << ne;
          i |= Q[ne], K &= ~ke;
        }
      return i;
    }
    function li(e, t) {
      for (var a = e.eventTimes, i = en; t > 0; ) {
        var o = Pn(t), c = 1 << o, v = a[o];
        v > i && (i = v), t &= ~c;
      }
      return i;
    }
    function jd(e, t) {
      switch (e) {
        case nt:
        case Fl:
        case ii:
          return t + 250;
        case Tr:
        case xn:
        case tl:
        case Do:
        case Bc:
        case $c:
        case Yc:
        case Gc:
        case Wc:
        case Qc:
        case qc:
        case Xc:
        case Oo:
        case Kc:
        case Tu:
        case bu:
        case Jc:
        case Ts:
        case Zc:
          return t + 5e3;
        case ko:
        case ef:
        case xs:
        case tf:
        case nf:
          return en;
        case Rs:
        case _s:
        case Mo:
        case ea:
          return en;
        default:
          return g("Should have found matching lanes. This is a bug in React."), en;
      }
    }
    function lf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, c = e.expirationTimes, v = a; v > 0; ) {
        var y = Pn(v), w = 1 << y, x = c[y];
        x === en ? ((w & i) === ce || (w & o) !== ce) && (c[y] = jd(w, t)) : x <= t && (e.expiredLanes |= w), v &= ~w;
      }
    }
    function Kv(e) {
      return Ds(e.pendingLanes);
    }
    function of(e) {
      var t = e.pendingLanes & ~ea;
      return t !== ce ? t : t & ea ? ea : ce;
    }
    function Jv(e) {
      return (e & nt) !== ce;
    }
    function Os(e) {
      return (e & Fd) !== ce;
    }
    function zo(e) {
      return (e & bs) === e;
    }
    function Hd(e) {
      var t = nt | ii | xn;
      return (e & t) === ce;
    }
    function Vd(e) {
      return (e & jl) === e;
    }
    function uf(e, t) {
      var a = Fl | ii | Tr | xn;
      return (t & a) !== ce;
    }
    function Zv(e, t) {
      return (t & e.expiredLanes) !== ce;
    }
    function Id(e) {
      return (e & jl) !== ce;
    }
    function Bd() {
      var e = Lo;
      return Lo <<= 1, (Lo & jl) === ce && (Lo = Do), e;
    }
    function eh() {
      var e = rf;
      return rf <<= 1, (rf & bs) === ce && (rf = ko), e;
    }
    function Hl(e) {
      return e & -e;
    }
    function ks(e) {
      return Hl(e);
    }
    function Pn(e) {
      return 31 - An(e);
    }
    function or(e) {
      return Pn(e);
    }
    function ta(e, t) {
      return (e & t) !== ce;
    }
    function No(e, t) {
      return (e & t) === t;
    }
    function ft(e, t) {
      return e | t;
    }
    function Ms(e, t) {
      return e & ~t;
    }
    function $d(e, t) {
      return e & t;
    }
    function th(e) {
      return e;
    }
    function nh(e, t) {
      return e !== At && e < t ? e : t;
    }
    function Ls(e) {
      for (var t = [], a = 0; a < _o; a++)
        t.push(e);
      return t;
    }
    function xu(e, t, a) {
      e.pendingLanes |= t, t !== Mo && (e.suspendedLanes = ce, e.pingedLanes = ce);
      var i = e.eventTimes, o = or(t);
      i[o] = a;
    }
    function rh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Pn(i), c = 1 << o;
        a[o] = en, i &= ~c;
      }
    }
    function sf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Yd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ce, e.pingedLanes = ce, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, c = e.expirationTimes, v = a; v > 0; ) {
        var y = Pn(v), w = 1 << y;
        i[y] = ce, o[y] = en, c[y] = en, v &= ~w;
      }
    }
    function cf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var c = Pn(o), v = 1 << c;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[c] & t && (i[c] |= t), o &= ~v;
      }
    }
    function Gd(e, t) {
      var a = Hl(t), i;
      switch (a) {
        case ii:
          i = Fl;
          break;
        case xn:
          i = Tr;
          break;
        case Do:
        case Bc:
        case $c:
        case Yc:
        case Gc:
        case Wc:
        case Qc:
        case qc:
        case Xc:
        case Oo:
        case Kc:
        case Tu:
        case bu:
        case Jc:
        case Ts:
        case Zc:
        case ko:
        case ef:
        case xs:
        case tf:
        case nf:
          i = tl;
          break;
        case Mo:
          i = _s;
          break;
        default:
          i = At;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== At ? At : i;
    }
    function zs(e, t, a) {
      if (Zr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = or(a), c = 1 << o, v = i[o];
          v.add(t), a &= ~c;
        }
    }
    function ah(e, t) {
      if (Zr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = or(t), c = 1 << o, v = a[o];
          v.size > 0 && (v.forEach(function(y) {
            var w = y.alternate;
            (w === null || !i.has(w)) && i.add(y);
          }), v.clear()), t &= ~c;
        }
    }
    function Wd(e, t) {
      return null;
    }
    var Lr = nt, Mi = ii, Pa = xn, Ua = Mo, Ns = At;
    function Fa() {
      return Ns;
    }
    function Un(e) {
      Ns = e;
    }
    function ih(e, t) {
      var a = Ns;
      try {
        return Ns = e, t();
      } finally {
        Ns = a;
      }
    }
    function lh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function As(e, t) {
      return e > t ? e : t;
    }
    function Zn(e, t) {
      return e !== 0 && e < t;
    }
    function oh(e) {
      var t = Hl(e);
      return Zn(Lr, t) ? Zn(Mi, t) ? Os(t) ? Pa : Ua : Mi : Lr;
    }
    function ff(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ps;
    function br(e) {
      Ps = e;
    }
    function _y(e) {
      Ps(e);
    }
    var Pe;
    function Ru(e) {
      Pe = e;
    }
    var df;
    function uh(e) {
      df = e;
    }
    var sh;
    function Us(e) {
      sh = e;
    }
    var Fs;
    function Qd(e) {
      Fs = e;
    }
    var pf = !1, js = [], nl = null, Li = null, zi = null, Rn = /* @__PURE__ */ new Map(), zr = /* @__PURE__ */ new Map(), Nr = [], ch = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function fh(e) {
      return ch.indexOf(e) > -1;
    }
    function oi(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function qd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          nl = null;
          break;
        case "dragenter":
        case "dragleave":
          Li = null;
          break;
        case "mouseover":
        case "mouseout":
          zi = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Rn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          zr.delete(i);
          break;
        }
      }
    }
    function na(e, t, a, i, o, c) {
      if (e === null || e.nativeEvent !== c) {
        var v = oi(t, a, i, o, c);
        if (t !== null) {
          var y = Au(t);
          y !== null && Pe(y);
        }
        return v;
      }
      e.eventSystemFlags |= i;
      var w = e.targetContainers;
      return o !== null && w.indexOf(o) === -1 && w.push(o), e;
    }
    function Dy(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var c = o;
          return nl = na(nl, e, t, a, i, c), !0;
        }
        case "dragenter": {
          var v = o;
          return Li = na(Li, e, t, a, i, v), !0;
        }
        case "mouseover": {
          var y = o;
          return zi = na(zi, e, t, a, i, y), !0;
        }
        case "pointerover": {
          var w = o, x = w.pointerId;
          return Rn.set(x, na(Rn.get(x) || null, e, t, a, i, w)), !0;
        }
        case "gotpointercapture": {
          var _ = o, j = _.pointerId;
          return zr.set(j, na(zr.get(j) || null, e, t, a, i, _)), !0;
        }
      }
      return !1;
    }
    function Xd(e) {
      var t = Ks(e.target);
      if (t !== null) {
        var a = va(t);
        if (a !== null) {
          var i = a.tag;
          if (i === le) {
            var o = Di(a);
            if (o !== null) {
              e.blockedOn = o, Fs(e.priority, function() {
                df(a);
              });
              return;
            }
          } else if (i === O) {
            var c = a.stateNode;
            if (ff(c)) {
              e.blockedOn = Oi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function dh(e) {
      for (var t = sh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Nr.length && Zn(t, Nr[i].priority); i++)
        ;
      Nr.splice(i, 0, a), i === 0 && Xd(a);
    }
    function Hs(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Du(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, c = new o.constructor(o.type, o);
          Cy(c), o.target.dispatchEvent(c), Ty();
        } else {
          var v = Au(i);
          return v !== null && Pe(v), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Kd(e, t, a) {
      Hs(e) && a.delete(t);
    }
    function Oy() {
      pf = !1, nl !== null && Hs(nl) && (nl = null), Li !== null && Hs(Li) && (Li = null), zi !== null && Hs(zi) && (zi = null), Rn.forEach(Kd), zr.forEach(Kd);
    }
    function Vl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, pf || (pf = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, Oy)));
    }
    function Ao(e) {
      if (js.length > 0) {
        Vl(js[0], e);
        for (var t = 1; t < js.length; t++) {
          var a = js[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      nl !== null && Vl(nl, e), Li !== null && Vl(Li, e), zi !== null && Vl(zi, e);
      var i = function(y) {
        return Vl(y, e);
      };
      Rn.forEach(i), zr.forEach(i);
      for (var o = 0; o < Nr.length; o++) {
        var c = Nr[o];
        c.blockedOn === e && (c.blockedOn = null);
      }
      for (; Nr.length > 0; ) {
        var v = Nr[0];
        if (v.blockedOn !== null)
          break;
        Xd(v), v.blockedOn === null && Nr.shift();
      }
    }
    var ur = d.ReactCurrentBatchConfig, kt = !0;
    function Wn(e) {
      kt = !!e;
    }
    function Fn() {
      return kt;
    }
    function sr(e, t, a) {
      var i = vf(t), o;
      switch (i) {
        case Lr:
          o = ga;
          break;
        case Mi:
          o = _u;
          break;
        case Pa:
        default:
          o = _n;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function ga(e, t, a, i) {
      var o = Fa(), c = ur.transition;
      ur.transition = null;
      try {
        Un(Lr), _n(e, t, a, i);
      } finally {
        Un(o), ur.transition = c;
      }
    }
    function _u(e, t, a, i) {
      var o = Fa(), c = ur.transition;
      ur.transition = null;
      try {
        Un(Mi), _n(e, t, a, i);
      } finally {
        Un(o), ur.transition = c;
      }
    }
    function _n(e, t, a, i) {
      kt && Vs(e, t, a, i);
    }
    function Vs(e, t, a, i) {
      var o = Du(e, t, a, i);
      if (o === null) {
        Gy(e, t, i, Ni, a), qd(e, i);
        return;
      }
      if (Dy(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (qd(e, i), t & ka && fh(e)) {
        for (; o !== null; ) {
          var c = Au(o);
          c !== null && _y(c);
          var v = Du(e, t, a, i);
          if (v === null && Gy(e, t, i, Ni, a), v === o)
            break;
          o = v;
        }
        o !== null && i.stopPropagation();
        return;
      }
      Gy(e, t, i, null, a);
    }
    var Ni = null;
    function Du(e, t, a, i) {
      Ni = null;
      var o = Td(i), c = Ks(o);
      if (c !== null) {
        var v = va(c);
        if (v === null)
          c = null;
        else {
          var y = v.tag;
          if (y === le) {
            var w = Di(v);
            if (w !== null)
              return w;
            c = null;
          } else if (y === O) {
            var x = v.stateNode;
            if (ff(x))
              return Oi(v);
            c = null;
          } else v !== c && (c = null);
        }
      }
      return Ni = c, null;
    }
    function vf(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
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
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Lr;
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
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Mi;
        case "message": {
          var t = Uc();
          switch (t) {
            case ms:
              return Lr;
            case Pl:
              return Mi;
            case Zi:
            case Ry:
              return Pa;
            case Co:
              return Ua;
            default:
              return Pa;
          }
        }
        default:
          return Pa;
      }
    }
    function Is(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ra(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Jd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ou(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Sa = null, ku = null, Po = null;
    function Il(e) {
      return Sa = e, ku = Bs(), !0;
    }
    function hf() {
      Sa = null, ku = null, Po = null;
    }
    function rl() {
      if (Po)
        return Po;
      var e, t = ku, a = t.length, i, o = Bs(), c = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var v = a - e;
      for (i = 1; i <= v && t[a - i] === o[c - i]; i++)
        ;
      var y = i > 1 ? 1 - i : void 0;
      return Po = o.slice(e, y), Po;
    }
    function Bs() {
      return "value" in Sa ? Sa.value : Sa.textContent;
    }
    function Bl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Mu() {
      return !0;
    }
    function $s() {
      return !1;
    }
    function xr(e) {
      function t(a, i, o, c, v) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = c, this.target = v, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var w = e[y];
            w ? this[y] = w(c) : this[y] = c[y];
          }
        var x = c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1;
        return x ? this.isDefaultPrevented = Mu : this.isDefaultPrevented = $s, this.isPropagationStopped = $s, this;
      }
      return vt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Mu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Mu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Mu
      }), t;
    }
    var jn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ai = xr(jn), Ar = vt({}, jn, {
      view: 0,
      detail: 0
    }), aa = xr(Ar), mf, Ys, Uo;
    function ky(e) {
      e !== Uo && (Uo && e.type === "mousemove" ? (mf = e.screenX - Uo.screenX, Ys = e.screenY - Uo.screenY) : (mf = 0, Ys = 0), Uo = e);
    }
    var ui = vt({}, Ar, {
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
      getModifierState: pn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (ky(e), mf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ys;
      }
    }), Zd = xr(ui), ep = vt({}, ui, {
      dataTransfer: 0
    }), Fo = xr(ep), tp = vt({}, Ar, {
      relatedTarget: 0
    }), al = xr(tp), ph = vt({}, jn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), vh = xr(ph), np = vt({}, jn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), yf = xr(np), My = vt({}, jn, {
      data: 0
    }), hh = xr(My), mh = hh, yh = {
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
    }, jo = {
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
    };
    function Ly(e) {
      if (e.key) {
        var t = yh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Bl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? jo[e.keyCode] || "Unidentified" : "";
    }
    var Lu = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function gh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Lu[e];
      return i ? !!a[i] : !1;
    }
    function pn(e) {
      return gh;
    }
    var zy = vt({}, Ar, {
      key: Ly,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Bl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Bl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Sh = xr(zy), Ny = vt({}, ui, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Eh = xr(Ny), wh = vt({}, Ar, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pn
    }), Ch = xr(wh), Ay = vt({}, jn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ja = xr(Ay), rp = vt({}, ui, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Py = xr(rp), $l = [9, 13, 27, 32], Gs = 229, il = kn && "CompositionEvent" in window, Yl = null;
    kn && "documentMode" in document && (Yl = document.documentMode);
    var ap = kn && "TextEvent" in window && !Yl, gf = kn && (!il || Yl && Yl > 8 && Yl <= 11), Th = 32, Sf = String.fromCharCode(Th);
    function Uy() {
      Et("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Et("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Et("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Et("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ip = !1;
    function bh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Ef(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function wf(e, t) {
      return e === "keydown" && t.keyCode === Gs;
    }
    function lp(e, t) {
      switch (e) {
        case "keyup":
          return $l.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Gs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Cf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function xh(e) {
      return e.locale === "ko";
    }
    var Ho = !1;
    function op(e, t, a, i, o) {
      var c, v;
      if (il ? c = Ef(t) : Ho ? lp(t, i) && (c = "onCompositionEnd") : wf(t, i) && (c = "onCompositionStart"), !c)
        return null;
      gf && !xh(i) && (!Ho && c === "onCompositionStart" ? Ho = Il(o) : c === "onCompositionEnd" && Ho && (v = rl()));
      var y = Lh(a, c);
      if (y.length > 0) {
        var w = new hh(c, t, null, i, o);
        if (e.push({
          event: w,
          listeners: y
        }), v)
          w.data = v;
        else {
          var x = Cf(i);
          x !== null && (w.data = x);
        }
      }
    }
    function Tf(e, t) {
      switch (e) {
        case "compositionend":
          return Cf(t);
        case "keypress":
          var a = t.which;
          return a !== Th ? null : (ip = !0, Sf);
        case "textInput":
          var i = t.data;
          return i === Sf && ip ? null : i;
        default:
          return null;
      }
    }
    function up(e, t) {
      if (Ho) {
        if (e === "compositionend" || !il && lp(e, t)) {
          var a = rl();
          return hf(), Ho = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!bh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return gf && !xh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function bf(e, t, a, i, o) {
      var c;
      if (ap ? c = Tf(t, i) : c = up(t, i), !c)
        return null;
      var v = Lh(a, "onBeforeInput");
      if (v.length > 0) {
        var y = new mh("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: y,
          listeners: v
        }), y.data = c;
      }
    }
    function Rh(e, t, a, i, o, c, v) {
      op(e, t, a, i, o), bf(e, t, a, i, o);
    }
    var Fy = {
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
      week: !0
    };
    function Ws(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Fy[e.type] : t === "textarea";
    }
    function jy(e) {
      if (!kn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Qs() {
      Et("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function _h(e, t, a, i) {
      hu(i);
      var o = Lh(t, "onChange");
      if (o.length > 0) {
        var c = new Ai("onChange", "change", null, a, i);
        e.push({
          event: c,
          listeners: o
        });
      }
    }
    var Gl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      _h(t, n, e, Td(e)), jv(s, t);
    }
    function s(e) {
      nw(e, 0);
    }
    function p(e) {
      var t = kf(e);
      if (Ci(t))
        return e;
    }
    function m(e, t) {
      if (e === "change")
        return t;
    }
    var b = !1;
    kn && (b = jy("input") && (!document.documentMode || document.documentMode > 9));
    function k(e, t) {
      Gl = e, n = t, Gl.attachEvent("onpropertychange", X);
    }
    function P() {
      Gl && (Gl.detachEvent("onpropertychange", X), Gl = null, n = null);
    }
    function X(e) {
      e.propertyName === "value" && p(n) && l(e);
    }
    function ve(e, t, a) {
      e === "focusin" ? (P(), k(t, a)) : e === "focusout" && P();
    }
    function ye(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return p(n);
    }
    function de(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ze(e, t) {
      if (e === "click")
        return p(t);
    }
    function Fe(e, t) {
      if (e === "input" || e === "change")
        return p(t);
    }
    function Ie(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || qe(e, "number", e.value);
    }
    function Dn(e, t, a, i, o, c, v) {
      var y = a ? kf(a) : window, w, x;
      if (r(y) ? w = m : Ws(y) ? b ? w = Fe : (w = ye, x = ve) : de(y) && (w = ze), w) {
        var _ = w(t, a);
        if (_) {
          _h(e, _, i, o);
          return;
        }
      }
      x && x(t, y, a), t === "focusout" && Ie(y);
    }
    function B() {
      Yt("onMouseEnter", ["mouseout", "mouseover"]), Yt("onMouseLeave", ["mouseout", "mouseover"]), Yt("onPointerEnter", ["pointerout", "pointerover"]), Yt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function F(e, t, a, i, o, c, v) {
      var y = t === "mouseover" || t === "pointerover", w = t === "mouseout" || t === "pointerout";
      if (y && !cs(i)) {
        var x = i.relatedTarget || i.fromElement;
        if (x && (Ks(x) || Cp(x)))
          return;
      }
      if (!(!w && !y)) {
        var _;
        if (o.window === o)
          _ = o;
        else {
          var j = o.ownerDocument;
          j ? _ = j.defaultView || j.parentWindow : _ = window;
        }
        var U, Q;
        if (w) {
          var K = i.relatedTarget || i.toElement;
          if (U = a, Q = K ? Ks(K) : null, Q !== null) {
            var ne = va(Q);
            (Q !== ne || Q.tag !== L && Q.tag !== J) && (Q = null);
          }
        } else
          U = null, Q = a;
        if (U !== Q) {
          var ke = Zd, Xe = "onMouseLeave", $e = "onMouseEnter", Lt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ke = Eh, Xe = "onPointerLeave", $e = "onPointerEnter", Lt = "pointer");
          var _t = U == null ? _ : kf(U), $ = Q == null ? _ : kf(Q), re = new ke(Xe, Lt + "leave", U, i, o);
          re.target = _t, re.relatedTarget = $;
          var Y = null, ge = Ks(o);
          if (ge === a) {
            var Ae = new ke($e, Lt + "enter", Q, i, o);
            Ae.target = $, Ae.relatedTarget = _t, Y = Ae;
          }
          kb(e, re, Y, U, Q);
        }
      }
    }
    function G(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var he = typeof Object.is == "function" ? Object.is : G;
    function je(e, t) {
      if (he(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var c = a[o];
        if (!Rr.call(t, c) || !he(e[c], t[c]))
          return !1;
      }
      return !0;
    }
    function Ke(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ze(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function at(e, t) {
      for (var a = Ke(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Qi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = Ke(Ze(a));
      }
    }
    function er(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, c = i.anchorOffset, v = i.focusNode, y = i.focusOffset;
      try {
        o.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return jt(e, o, c, v, y);
    }
    function jt(e, t, a, i, o) {
      var c = 0, v = -1, y = -1, w = 0, x = 0, _ = e, j = null;
      e: for (; ; ) {
        for (var U = null; _ === t && (a === 0 || _.nodeType === Qi) && (v = c + a), _ === i && (o === 0 || _.nodeType === Qi) && (y = c + o), _.nodeType === Qi && (c += _.nodeValue.length), (U = _.firstChild) !== null; )
          j = _, _ = U;
        for (; ; ) {
          if (_ === e)
            break e;
          if (j === t && ++w === a && (v = c), j === i && ++x === o && (y = c), (U = _.nextSibling) !== null)
            break;
          _ = j, j = _.parentNode;
        }
        _ = U;
      }
      return v === -1 || y === -1 ? null : {
        start: v,
        end: y
      };
    }
    function Wl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), c = e.textContent.length, v = Math.min(t.start, c), y = t.end === void 0 ? v : Math.min(t.end, c);
        if (!o.extend && v > y) {
          var w = y;
          y = v, v = w;
        }
        var x = at(e, v), _ = at(e, y);
        if (x && _) {
          if (o.rangeCount === 1 && o.anchorNode === x.node && o.anchorOffset === x.offset && o.focusNode === _.node && o.focusOffset === _.offset)
            return;
          var j = a.createRange();
          j.setStart(x.node, x.offset), o.removeAllRanges(), v > y ? (o.addRange(j), o.extend(_.node, _.offset)) : (j.setEnd(_.node, _.offset), o.addRange(j));
        }
      }
    }
    function Dh(e) {
      return e && e.nodeType === Qi;
    }
    function YE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Dh(e) ? !1 : Dh(t) ? YE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function db(e) {
      return e && e.ownerDocument && YE(e.ownerDocument.documentElement, e);
    }
    function pb(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function GE() {
      for (var e = window, t = Oa(); t instanceof e.HTMLIFrameElement; ) {
        if (pb(t))
          e = t.contentWindow;
        else
          return t;
        t = Oa(e.document);
      }
      return t;
    }
    function Hy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function vb() {
      var e = GE();
      return {
        focusedElem: e,
        selectionRange: Hy(e) ? mb(e) : null
      };
    }
    function hb(e) {
      var t = GE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && db(a)) {
        i !== null && Hy(a) && yb(a, i);
        for (var o = [], c = a; c = c.parentNode; )
          c.nodeType === Qr && o.push({
            element: c,
            left: c.scrollLeft,
            top: c.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < o.length; v++) {
          var y = o[v];
          y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
        }
      }
    }
    function mb(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = er(e), t || {
        start: 0,
        end: 0
      };
    }
    function yb(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Wl(e, t);
    }
    var gb = kn && "documentMode" in document && document.documentMode <= 11;
    function Sb() {
      Et("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var xf = null, Vy = null, sp = null, Iy = !1;
    function Eb(e) {
      if ("selectionStart" in e && Hy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function wb(e) {
      return e.window === e ? e.document : e.nodeType === qi ? e : e.ownerDocument;
    }
    function WE(e, t, a) {
      var i = wb(a);
      if (!(Iy || xf == null || xf !== Oa(i))) {
        var o = Eb(xf);
        if (!sp || !je(sp, o)) {
          sp = o;
          var c = Lh(Vy, "onSelect");
          if (c.length > 0) {
            var v = new Ai("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: c
            }), v.target = xf;
          }
        }
      }
    }
    function Cb(e, t, a, i, o, c, v) {
      var y = a ? kf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Ws(y) || y.contentEditable === "true") && (xf = y, Vy = a, sp = null);
          break;
        case "focusout":
          xf = null, Vy = null, sp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Iy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Iy = !1, WE(e, i, o);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (gb)
            break;
        // falls through
        case "keydown":
        case "keyup":
          WE(e, i, o);
      }
    }
    function Oh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Rf = {
      animationend: Oh("Animation", "AnimationEnd"),
      animationiteration: Oh("Animation", "AnimationIteration"),
      animationstart: Oh("Animation", "AnimationStart"),
      transitionend: Oh("Transition", "TransitionEnd")
    }, By = {}, QE = {};
    kn && (QE = document.createElement("div").style, "AnimationEvent" in window || (delete Rf.animationend.animation, delete Rf.animationiteration.animation, delete Rf.animationstart.animation), "TransitionEvent" in window || delete Rf.transitionend.transition);
    function kh(e) {
      if (By[e])
        return By[e];
      if (!Rf[e])
        return e;
      var t = Rf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in QE)
          return By[e] = t[a];
      return e;
    }
    var qE = kh("animationend"), XE = kh("animationiteration"), KE = kh("animationstart"), JE = kh("transitionend"), ZE = /* @__PURE__ */ new Map(), ew = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function zu(e, t) {
      ZE.set(e, t), Et(t, [e]);
    }
    function Tb() {
      for (var e = 0; e < ew.length; e++) {
        var t = ew[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        zu(a, "on" + i);
      }
      zu(qE, "onAnimationEnd"), zu(XE, "onAnimationIteration"), zu(KE, "onAnimationStart"), zu("dblclick", "onDoubleClick"), zu("focusin", "onFocus"), zu("focusout", "onBlur"), zu(JE, "onTransitionEnd");
    }
    function bb(e, t, a, i, o, c, v) {
      var y = ZE.get(t);
      if (y !== void 0) {
        var w = Ai, x = t;
        switch (t) {
          case "keypress":
            if (Bl(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            w = Sh;
            break;
          case "focusin":
            x = "focus", w = al;
            break;
          case "focusout":
            x = "blur", w = al;
            break;
          case "beforeblur":
          case "afterblur":
            w = al;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Zd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Fo;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Ch;
            break;
          case qE:
          case XE:
          case KE:
            w = vh;
            break;
          case JE:
            w = ja;
            break;
          case "scroll":
            w = aa;
            break;
          case "wheel":
            w = Py;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = yf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Eh;
            break;
        }
        var _ = (c & ka) !== 0;
        {
          var j = !_ && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", U = Db(a, y, i.type, _, j);
          if (U.length > 0) {
            var Q = new w(y, x, null, i, o);
            e.push({
              event: Q,
              listeners: U
            });
          }
        }
      }
    }
    Tb(), B(), Qs(), Sb(), Uy();
    function xb(e, t, a, i, o, c, v) {
      bb(e, t, a, i, o, c);
      var y = (c & Cd) === 0;
      y && (F(e, t, a, i, o), Dn(e, t, a, i, o), Cb(e, t, a, i, o), Rh(e, t, a, i, o));
    }
    var cp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], $y = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(cp));
    function tw(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, xi(i, t, void 0, e), e.currentTarget = null;
    }
    function Rb(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var c = t[o], v = c.instance, y = c.currentTarget, w = c.listener;
          if (v !== i && e.isPropagationStopped())
            return;
          tw(e, w, y), i = v;
        }
      else
        for (var x = 0; x < t.length; x++) {
          var _ = t[x], j = _.instance, U = _.currentTarget, Q = _.listener;
          if (j !== i && e.isPropagationStopped())
            return;
          tw(e, Q, U), i = j;
        }
    }
    function nw(e, t) {
      for (var a = (t & ka) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], c = o.event, v = o.listeners;
        Rb(c, v, a);
      }
      ps();
    }
    function _b(e, t, a, i, o) {
      var c = Td(a), v = [];
      xb(v, e, i, a, c, t), nw(v, t);
    }
    function Sn(e, t) {
      $y.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = rR(t), o = Mb(e);
      i.has(o) || (rw(t, e, bc, a), i.add(o));
    }
    function Yy(e, t, a) {
      $y.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ka), rw(a, e, i, t);
    }
    var Mh = "_reactListening" + Math.random().toString(36).slice(2);
    function fp(e) {
      if (!e[Mh]) {
        e[Mh] = !0, ht.forEach(function(a) {
          a !== "selectionchange" && ($y.has(a) || Yy(a, !1, e), Yy(a, !0, e));
        });
        var t = e.nodeType === qi ? e : e.ownerDocument;
        t !== null && (t[Mh] || (t[Mh] = !0, Yy("selectionchange", !1, t)));
      }
    }
    function rw(e, t, a, i, o) {
      var c = sr(e, t, a), v = void 0;
      ds && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, i ? v !== void 0 ? Jd(e, t, c, v) : ra(e, t, c) : v !== void 0 ? Ou(e, t, c, v) : Is(e, t, c);
    }
    function aw(e, t) {
      return e === t || e.nodeType === Ln && e.parentNode === t;
    }
    function Gy(e, t, a, i, o) {
      var c = i;
      if ((t & wd) === 0 && (t & bc) === 0) {
        var v = o;
        if (i !== null) {
          var y = i;
          e: for (; ; ) {
            if (y === null)
              return;
            var w = y.tag;
            if (w === O || w === N) {
              var x = y.stateNode.containerInfo;
              if (aw(x, v))
                break;
              if (w === N)
                for (var _ = y.return; _ !== null; ) {
                  var j = _.tag;
                  if (j === O || j === N) {
                    var U = _.stateNode.containerInfo;
                    if (aw(U, v))
                      return;
                  }
                  _ = _.return;
                }
              for (; x !== null; ) {
                var Q = Ks(x);
                if (Q === null)
                  return;
                var K = Q.tag;
                if (K === L || K === J) {
                  y = c = Q;
                  continue e;
                }
                x = x.parentNode;
              }
            }
            y = y.return;
          }
        }
      }
      jv(function() {
        return _b(e, t, a, c);
      });
    }
    function dp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Db(e, t, a, i, o, c) {
      for (var v = t !== null ? t + "Capture" : null, y = i ? v : t, w = [], x = e, _ = null; x !== null; ) {
        var j = x, U = j.stateNode, Q = j.tag;
        if (Q === L && U !== null && (_ = U, y !== null)) {
          var K = kl(x, y);
          K != null && w.push(dp(x, K, _));
        }
        if (o)
          break;
        x = x.return;
      }
      return w;
    }
    function Lh(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var c = o, v = c.stateNode, y = c.tag;
        if (y === L && v !== null) {
          var w = v, x = kl(o, a);
          x != null && i.unshift(dp(o, x, w));
          var _ = kl(o, t);
          _ != null && i.push(dp(o, _, w));
        }
        o = o.return;
      }
      return i;
    }
    function _f(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== L);
      return e || null;
    }
    function Ob(e, t) {
      for (var a = e, i = t, o = 0, c = a; c; c = _f(c))
        o++;
      for (var v = 0, y = i; y; y = _f(y))
        v++;
      for (; o - v > 0; )
        a = _f(a), o--;
      for (; v - o > 0; )
        i = _f(i), v--;
      for (var w = o; w--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = _f(a), i = _f(i);
      }
      return null;
    }
    function iw(e, t, a, i, o) {
      for (var c = t._reactName, v = [], y = a; y !== null && y !== i; ) {
        var w = y, x = w.alternate, _ = w.stateNode, j = w.tag;
        if (x !== null && x === i)
          break;
        if (j === L && _ !== null) {
          var U = _;
          if (o) {
            var Q = kl(y, c);
            Q != null && v.unshift(dp(y, Q, U));
          } else if (!o) {
            var K = kl(y, c);
            K != null && v.push(dp(y, K, U));
          }
        }
        y = y.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function kb(e, t, a, i, o) {
      var c = i && o ? Ob(i, o) : null;
      i !== null && iw(e, t, i, c, !1), o !== null && a !== null && iw(e, a, o, c, !0);
    }
    function Mb(e, t) {
      return e + "__bubble";
    }
    var Ha = !1, pp = "dangerouslySetInnerHTML", zh = "suppressContentEditableWarning", Nu = "suppressHydrationWarning", lw = "autoFocus", qs = "children", Xs = "style", Nh = "__html", Wy, Ah, vp, ow, Ph, uw, sw;
    Wy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Ah = function(e, t) {
      gd(e, t), Cc(e, t), Pv(e, t, {
        registrationNameDependencies: pt,
        possibleRegistrationNames: mt
      });
    }, uw = kn && !document.documentMode, vp = function(e, t, a) {
      if (!Ha) {
        var i = Uh(a), o = Uh(t);
        o !== i && (Ha = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, ow = function(e) {
      if (!Ha) {
        Ha = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Ph = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, sw = function(e, t) {
      var a = e.namespaceURI === Wi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Lb = /\r\n?/g, zb = /\u0000|\uFFFD/g;
    function Uh(e) {
      qn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Lb, `
`).replace(zb, "");
    }
    function Fh(e, t, a, i) {
      var o = Uh(t), c = Uh(e);
      if (c !== o && (i && (Ha || (Ha = !0, g('Text content did not match. Server: "%s" Client: "%s"', c, o))), a && we))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function cw(e) {
      return e.nodeType === qi ? e : e.ownerDocument;
    }
    function Nb() {
    }
    function jh(e) {
      e.onclick = Nb;
    }
    function Ab(e, t, a, i, o) {
      for (var c in i)
        if (i.hasOwnProperty(c)) {
          var v = i[c];
          if (c === Xs)
            v && Object.freeze(v), kv(t, v);
          else if (c === pp) {
            var y = v ? v[Nh] : void 0;
            y != null && gv(t, y);
          } else if (c === qs)
            if (typeof v == "string") {
              var w = e !== "textarea" || v !== "";
              w && fu(t, v);
            } else typeof v == "number" && fu(t, "" + v);
          else c === zh || c === Nu || c === lw || (pt.hasOwnProperty(c) ? v != null && (typeof v != "function" && Ph(c, v), c === "onScroll" && Sn("scroll", t)) : v != null && _r(t, c, v, o));
        }
    }
    function Pb(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var c = t[o], v = t[o + 1];
        c === Xs ? kv(e, v) : c === pp ? gv(e, v) : c === qs ? fu(e, v) : _r(e, c, v, i);
      }
    }
    function Ub(e, t, a, i) {
      var o, c = cw(a), v, y = i;
      if (y === Wi && (y = fd(e)), y === Wi) {
        if (o = Dl(e, t), !o && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var w = c.createElement("div");
          w.innerHTML = "<script><\/script>";
          var x = w.firstChild;
          v = w.removeChild(x);
        } else if (typeof t.is == "string")
          v = c.createElement(e, {
            is: t.is
          });
        else if (v = c.createElement(e), e === "select") {
          var _ = v;
          t.multiple ? _.multiple = !0 : t.size && (_.size = t.size);
        }
      } else
        v = c.createElementNS(y, e);
      return y === Wi && !o && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !Rr.call(Wy, e) && (Wy[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function Fb(e, t) {
      return cw(t).createTextNode(e);
    }
    function jb(e, t, a, i) {
      var o = Dl(t, a);
      Ah(t, a);
      var c;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), c = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), c = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < cp.length; v++)
            Sn(cp[v], e);
          c = a;
          break;
        case "source":
          Sn("error", e), c = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), c = a;
          break;
        case "details":
          Sn("toggle", e), c = a;
          break;
        case "input":
          ni(e, a), c = cu(e, a), Sn("invalid", e);
          break;
        case "option":
          Nt(e, a), c = a;
          break;
        case "select":
          vo(e, a), c = rs(e, a), Sn("invalid", e);
          break;
        case "textarea":
          ud(e, a), c = od(e, a), Sn("invalid", e);
          break;
        default:
          c = a;
      }
      switch (Ec(t, c), Ab(t, e, i, c, o), t) {
        case "input":
          ti(e), q(e, a, !1);
          break;
        case "textarea":
          ti(e), mv(e);
          break;
        case "option":
          an(e, a);
          break;
        case "select":
          id(e, a);
          break;
        default:
          typeof c.onClick == "function" && jh(e);
          break;
      }
    }
    function Hb(e, t, a, i, o) {
      Ah(t, i);
      var c = null, v, y;
      switch (t) {
        case "input":
          v = cu(e, a), y = cu(e, i), c = [];
          break;
        case "select":
          v = rs(e, a), y = rs(e, i), c = [];
          break;
        case "textarea":
          v = od(e, a), y = od(e, i), c = [];
          break;
        default:
          v = a, y = i, typeof v.onClick != "function" && typeof y.onClick == "function" && jh(e);
          break;
      }
      Ec(t, y);
      var w, x, _ = null;
      for (w in v)
        if (!(y.hasOwnProperty(w) || !v.hasOwnProperty(w) || v[w] == null))
          if (w === Xs) {
            var j = v[w];
            for (x in j)
              j.hasOwnProperty(x) && (_ || (_ = {}), _[x] = "");
          } else w === pp || w === qs || w === zh || w === Nu || w === lw || (pt.hasOwnProperty(w) ? c || (c = []) : (c = c || []).push(w, null));
      for (w in y) {
        var U = y[w], Q = v?.[w];
        if (!(!y.hasOwnProperty(w) || U === Q || U == null && Q == null))
          if (w === Xs)
            if (U && Object.freeze(U), Q) {
              for (x in Q)
                Q.hasOwnProperty(x) && (!U || !U.hasOwnProperty(x)) && (_ || (_ = {}), _[x] = "");
              for (x in U)
                U.hasOwnProperty(x) && Q[x] !== U[x] && (_ || (_ = {}), _[x] = U[x]);
            } else
              _ || (c || (c = []), c.push(w, _)), _ = U;
          else if (w === pp) {
            var K = U ? U[Nh] : void 0, ne = Q ? Q[Nh] : void 0;
            K != null && ne !== K && (c = c || []).push(w, K);
          } else w === qs ? (typeof U == "string" || typeof U == "number") && (c = c || []).push(w, "" + U) : w === zh || w === Nu || (pt.hasOwnProperty(w) ? (U != null && (typeof U != "function" && Ph(w, U), w === "onScroll" && Sn("scroll", e)), !c && Q !== U && (c = [])) : (c = c || []).push(w, U));
      }
      return _ && (Ey(_, y[Xs]), (c = c || []).push(Xs, _)), c;
    }
    function Vb(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && T(e, o);
      var c = Dl(a, i), v = Dl(a, o);
      switch (Pb(e, t, c, v), a) {
        case "input":
          z(e, o);
          break;
        case "textarea":
          hv(e, o);
          break;
        case "select":
          yc(e, o);
          break;
      }
    }
    function Ib(e) {
      {
        var t = e.toLowerCase();
        return us.hasOwnProperty(t) && us[t] || null;
      }
    }
    function Bb(e, t, a, i, o, c, v) {
      var y, w;
      switch (y = Dl(t, a), Ah(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var x = 0; x < cp.length; x++)
            Sn(cp[x], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          ni(e, a), Sn("invalid", e);
          break;
        case "option":
          Nt(e, a);
          break;
        case "select":
          vo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          ud(e, a), Sn("invalid", e);
          break;
      }
      Ec(t, a);
      {
        w = /* @__PURE__ */ new Set();
        for (var _ = e.attributes, j = 0; j < _.length; j++) {
          var U = _[j].name.toLowerCase();
          switch (U) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              w.add(_[j].name);
          }
        }
      }
      var Q = null;
      for (var K in a)
        if (a.hasOwnProperty(K)) {
          var ne = a[K];
          if (K === qs)
            typeof ne == "string" ? e.textContent !== ne && (a[Nu] !== !0 && Fh(e.textContent, ne, c, v), Q = [qs, ne]) : typeof ne == "number" && e.textContent !== "" + ne && (a[Nu] !== !0 && Fh(e.textContent, ne, c, v), Q = [qs, "" + ne]);
          else if (pt.hasOwnProperty(K))
            ne != null && (typeof ne != "function" && Ph(K, ne), K === "onScroll" && Sn("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var ke = void 0, Xe = nn(K);
            if (a[Nu] !== !0) {
              if (!(K === zh || K === Nu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              K === "value" || K === "checked" || K === "selected")) {
                if (K === pp) {
                  var $e = e.innerHTML, Lt = ne ? ne[Nh] : void 0;
                  if (Lt != null) {
                    var _t = sw(e, Lt);
                    _t !== $e && vp(K, $e, _t);
                  }
                } else if (K === Xs) {
                  if (w.delete(K), uw) {
                    var $ = gy(ne);
                    ke = e.getAttribute("style"), $ !== ke && vp(K, ke, $);
                  }
                } else if (y && !H)
                  w.delete(K.toLowerCase()), ke = lo(e, K, ne), ne !== ke && vp(K, ke, ne);
                else if (!vn(K, Xe, y) && !Xn(K, ne, Xe, y)) {
                  var re = !1;
                  if (Xe !== null)
                    w.delete(Xe.attributeName), ke = Sl(e, K, ne, Xe);
                  else {
                    var Y = i;
                    if (Y === Wi && (Y = fd(t)), Y === Wi)
                      w.delete(K.toLowerCase());
                    else {
                      var ge = Ib(K);
                      ge !== null && ge !== K && (re = !0, w.delete(ge)), w.delete(K);
                    }
                    ke = lo(e, K, ne);
                  }
                  var Ae = H;
                  !Ae && ne !== ke && !re && vp(K, ke, ne);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      w.size > 0 && a[Nu] !== !0 && ow(w), t) {
        case "input":
          ti(e), q(e, a, !0);
          break;
        case "textarea":
          ti(e), mv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && jh(e);
          break;
      }
      return Q;
    }
    function $b(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Qy(e, t) {
      {
        if (Ha)
          return;
        Ha = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function qy(e, t) {
      {
        if (Ha)
          return;
        Ha = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Xy(e, t, a) {
      {
        if (Ha)
          return;
        Ha = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ky(e, t) {
      {
        if (t === "" || Ha)
          return;
        Ha = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Yb(e, t, a) {
      switch (t) {
        case "input":
          ee(e, a);
          return;
        case "textarea":
          vy(e, a);
          return;
        case "select":
          ld(e, a);
          return;
      }
    }
    var hp = function() {
    }, mp = function() {
    };
    {
      var Gb = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], fw = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Wb = fw.concat(["button"]), Qb = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], dw = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      mp = function(e, t) {
        var a = vt({}, e || dw), i = {
          tag: t
        };
        return fw.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Wb.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Gb.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var qb = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Qb.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Xb = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, pw = {};
      hp = function(e, t, a) {
        a = a || dw;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var c = qb(e, o) ? null : i, v = c ? null : Xb(e, a), y = c || v;
        if (y) {
          var w = y.tag, x = !!c + "|" + e + "|" + w;
          if (!pw[x]) {
            pw[x] = !0;
            var _ = e, j = "";
            if (e === "#text" ? /\S/.test(t) ? _ = "Text nodes" : (_ = "Whitespace text nodes", j = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : _ = "<" + e + ">", c) {
              var U = "";
              w === "table" && e === "tr" && (U += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", _, w, j, U);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", _, w);
          }
        }
      };
    }
    var Hh = "suppressHydrationWarning", Vh = "$", Ih = "/$", yp = "$?", gp = "$!", Kb = "style", Jy = null, Zy = null;
    function Jb(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case qi:
        case pd: {
          t = i === qi ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : dd(null, "");
          break;
        }
        default: {
          var c = i === Ln ? e.parentNode : e, v = c.namespaceURI || null;
          t = c.tagName, a = dd(v, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), w = mp(null, y);
        return {
          namespace: a,
          ancestorInfo: w
        };
      }
    }
    function Zb(e, t, a) {
      {
        var i = e, o = dd(i.namespace, t), c = mp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: c
        };
      }
    }
    function Xk(e) {
      return e;
    }
    function ex(e) {
      Jy = Fn(), Zy = vb();
      var t = null;
      return Wn(!1), t;
    }
    function tx(e) {
      hb(Zy), Wn(Jy), Jy = null, Zy = null;
    }
    function nx(e, t, a, i, o) {
      var c;
      {
        var v = i;
        if (hp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, w = mp(v.ancestorInfo, e);
          hp(null, y, w);
        }
        c = v.namespace;
      }
      var x = Ub(e, t, a, c);
      return wp(o, x), og(x, t), x;
    }
    function rx(e, t) {
      e.appendChild(t);
    }
    function ax(e, t, a, i, o) {
      switch (jb(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function ix(e, t, a, i, o, c) {
      {
        var v = c;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var y = "" + i.children, w = mp(v.ancestorInfo, t);
          hp(null, y, w);
        }
      }
      return Hb(e, t, a, i);
    }
    function eg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function lx(e, t, a, i) {
      {
        var o = a;
        hp(null, e, o.ancestorInfo);
      }
      var c = Fb(e, t);
      return wp(i, c), c;
    }
    function ox() {
      var e = window.event;
      return e === void 0 ? Pa : vf(e.type);
    }
    var tg = typeof setTimeout == "function" ? setTimeout : void 0, ux = typeof clearTimeout == "function" ? clearTimeout : void 0, ng = -1, vw = typeof Promise == "function" ? Promise : void 0, sx = typeof queueMicrotask == "function" ? queueMicrotask : typeof vw < "u" ? function(e) {
      return vw.resolve(null).then(e).catch(cx);
    } : tg;
    function cx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function fx(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function dx(e, t, a, i, o, c) {
      Vb(e, t, a, i, o), og(e, o);
    }
    function hw(e) {
      fu(e, "");
    }
    function px(e, t, a) {
      e.nodeValue = a;
    }
    function vx(e, t) {
      e.appendChild(t);
    }
    function hx(e, t) {
      var a;
      e.nodeType === Ln ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && jh(a);
    }
    function mx(e, t, a) {
      e.insertBefore(t, a);
    }
    function yx(e, t, a) {
      e.nodeType === Ln ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function gx(e, t) {
      e.removeChild(t);
    }
    function Sx(e, t) {
      e.nodeType === Ln ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function rg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === Ln) {
          var c = o.data;
          if (c === Ih)
            if (i === 0) {
              e.removeChild(o), Ao(t);
              return;
            } else
              i--;
          else (c === Vh || c === yp || c === gp) && i++;
        }
        a = o;
      } while (a);
      Ao(t);
    }
    function Ex(e, t) {
      e.nodeType === Ln ? rg(e.parentNode, t) : e.nodeType === Qr && rg(e, t), Ao(e);
    }
    function wx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Cx(e) {
      e.nodeValue = "";
    }
    function Tx(e, t) {
      e = e;
      var a = t[Kb], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Sc("display", i);
    }
    function bx(e, t) {
      e.nodeValue = t;
    }
    function xx(e) {
      e.nodeType === Qr ? e.textContent = "" : e.nodeType === qi && e.documentElement && e.removeChild(e.documentElement);
    }
    function Rx(e, t, a) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function _x(e, t) {
      return t === "" || e.nodeType !== Qi ? null : e;
    }
    function Dx(e) {
      return e.nodeType !== Ln ? null : e;
    }
    function mw(e) {
      return e.data === yp;
    }
    function ag(e) {
      return e.data === gp;
    }
    function Ox(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function kx(e, t) {
      e._reactRetry = t;
    }
    function Bh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qr || t === Qi)
          break;
        if (t === Ln) {
          var a = e.data;
          if (a === Vh || a === gp || a === yp)
            break;
          if (a === Ih)
            return null;
        }
      }
      return e;
    }
    function Sp(e) {
      return Bh(e.nextSibling);
    }
    function Mx(e) {
      return Bh(e.firstChild);
    }
    function Lx(e) {
      return Bh(e.firstChild);
    }
    function zx(e) {
      return Bh(e.nextSibling);
    }
    function Nx(e, t, a, i, o, c, v) {
      wp(c, e), og(e, a);
      var y;
      {
        var w = o;
        y = w.namespace;
      }
      var x = (c.mode & Ct) !== We;
      return Bb(e, t, a, y, i, x, v);
    }
    function Ax(e, t, a, i) {
      return wp(a, e), a.mode & Ct, $b(e, t);
    }
    function Px(e, t) {
      wp(t, e);
    }
    function Ux(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === Ih) {
            if (a === 0)
              return Sp(t);
            a--;
          } else (i === Vh || i === gp || i === yp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function yw(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === Vh || i === gp || i === yp) {
            if (a === 0)
              return t;
            a--;
          } else i === Ih && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Fx(e) {
      Ao(e);
    }
    function jx(e) {
      Ao(e);
    }
    function Hx(e) {
      return e !== "head" && e !== "body";
    }
    function Vx(e, t, a, i) {
      var o = !0;
      Fh(t.nodeValue, a, i, o);
    }
    function Ix(e, t, a, i, o, c) {
      if (t[Hh] !== !0) {
        var v = !0;
        Fh(i.nodeValue, o, c, v);
      }
    }
    function Bx(e, t) {
      t.nodeType === Qr ? Qy(e, t) : t.nodeType === Ln || qy(e, t);
    }
    function $x(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? Qy(a, t) : t.nodeType === Ln || qy(a, t));
      }
    }
    function Yx(e, t, a, i, o) {
      (o || t[Hh] !== !0) && (i.nodeType === Qr ? Qy(a, i) : i.nodeType === Ln || qy(a, i));
    }
    function Gx(e, t, a) {
      Xy(e, t);
    }
    function Wx(e, t) {
      Ky(e, t);
    }
    function Qx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Xy(i, t);
      }
    }
    function qx(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ky(a, t);
      }
    }
    function Xx(e, t, a, i, o, c) {
      (c || t[Hh] !== !0) && Xy(a, i);
    }
    function Kx(e, t, a, i, o) {
      (o || t[Hh] !== !0) && Ky(a, i);
    }
    function Jx(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Zx(e) {
      fp(e);
    }
    var Df = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Df, ig = "__reactProps$" + Df, Ep = "__reactContainer$" + Df, lg = "__reactEvents$" + Df, eR = "__reactListeners$" + Df, tR = "__reactHandles$" + Df;
    function nR(e) {
      delete e[Of], delete e[ig], delete e[lg], delete e[eR], delete e[tR];
    }
    function wp(e, t) {
      t[Of] = e;
    }
    function $h(e, t) {
      t[Ep] = e;
    }
    function gw(e) {
      e[Ep] = null;
    }
    function Cp(e) {
      return !!e[Ep];
    }
    function Ks(e) {
      var t = e[Of];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Ep] || a[Of], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = yw(e); o !== null; ) {
              var c = o[Of];
              if (c)
                return c;
              o = yw(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Au(e) {
      var t = e[Of] || e[Ep];
      return t && (t.tag === L || t.tag === J || t.tag === le || t.tag === O) ? t : null;
    }
    function kf(e) {
      if (e.tag === L || e.tag === J)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Yh(e) {
      return e[ig] || null;
    }
    function og(e, t) {
      e[ig] = t;
    }
    function rR(e) {
      var t = e[lg];
      return t === void 0 && (t = e[lg] = /* @__PURE__ */ new Set()), t;
    }
    var Sw = {}, Ew = d.ReactDebugCurrentFrame;
    function Gh(e) {
      if (e) {
        var t = e._owner, a = $i(e.type, e._source, t ? t.type : null);
        Ew.setExtraStackFrame(a);
      } else
        Ew.setExtraStackFrame(null);
    }
    function ll(e, t, a, i, o) {
      {
        var c = Function.call.bind(Rr);
        for (var v in e)
          if (c(e, v)) {
            var y = void 0;
            try {
              if (typeof e[v] != "function") {
                var w = Error((i || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              y = e[v](t, v, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              y = x;
            }
            y && !(y instanceof Error) && (Gh(o), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, v, typeof y), Gh(null)), y instanceof Error && !(y.message in Sw) && (Sw[y.message] = !0, Gh(o), g("Failed %s type: %s", a, y.message), Gh(null));
          }
      }
    }
    var ug = [], Wh;
    Wh = [];
    var Vo = -1;
    function Pu(e) {
      return {
        current: e
      };
    }
    function ia(e, t) {
      if (Vo < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Wh[Vo] && g("Unexpected Fiber popped."), e.current = ug[Vo], ug[Vo] = null, Wh[Vo] = null, Vo--;
    }
    function la(e, t, a) {
      Vo++, ug[Vo] = e.current, Wh[Vo] = a, e.current = t;
    }
    var sg;
    sg = {};
    var si = {};
    Object.freeze(si);
    var Io = Pu(si), Ql = Pu(!1), cg = si;
    function Mf(e, t, a) {
      return a && ql(t) ? cg : Io.current;
    }
    function ww(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Lf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return si;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var c = {};
        for (var v in i)
          c[v] = t[v];
        {
          var y = it(e) || "Unknown";
          ll(i, c, "context", y);
        }
        return o && ww(e, t, c), c;
      }
    }
    function Qh() {
      return Ql.current;
    }
    function ql(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function qh(e) {
      ia(Ql, e), ia(Io, e);
    }
    function fg(e) {
      ia(Ql, e), ia(Io, e);
    }
    function Cw(e, t, a) {
      {
        if (Io.current !== si)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        la(Io, t, e), la(Ql, a, e);
      }
    }
    function Tw(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var c = it(e) || "Unknown";
            sg[c] || (sg[c] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", c, c));
          }
          return a;
        }
        var v = i.getChildContext();
        for (var y in v)
          if (!(y in o))
            throw new Error((it(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var w = it(e) || "Unknown";
          ll(o, v, "child context", w);
        }
        return vt({}, a, v);
      }
    }
    function Xh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || si;
        return cg = Io.current, la(Io, a, e), la(Ql, Ql.current, e), !0;
      }
    }
    function bw(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = Tw(e, t, cg);
          i.__reactInternalMemoizedMergedChildContext = o, ia(Ql, e), ia(Io, e), la(Io, o, e), la(Ql, a, e);
        } else
          ia(Ql, e), la(Ql, a, e);
      }
    }
    function aR(e) {
      {
        if (!wo(e) || e.tag !== D)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case O:
              return t.stateNode.context;
            case D: {
              var a = t.type;
              if (ql(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Uu = 0, Kh = 1, Bo = null, dg = !1, pg = !1;
    function xw(e) {
      Bo === null ? Bo = [e] : Bo.push(e);
    }
    function iR(e) {
      dg = !0, xw(e);
    }
    function Rw() {
      dg && Fu();
    }
    function Fu() {
      if (!pg && Bo !== null) {
        pg = !0;
        var e = 0, t = Fa();
        try {
          var a = !0, i = Bo;
          for (Un(Lr); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Bo = null, dg = !1;
        } catch (c) {
          throw Bo !== null && (Bo = Bo.slice(e + 1)), xd(ms, Fu), c;
        } finally {
          Un(t), pg = !1;
        }
      }
      return null;
    }
    var zf = [], Nf = 0, Jh = null, Zh = 0, Pi = [], Ui = 0, Js = null, $o = 1, Yo = "";
    function lR(e) {
      return ec(), (e.flags & Ri) !== Ge;
    }
    function oR(e) {
      return ec(), Zh;
    }
    function uR() {
      var e = Yo, t = $o, a = t & ~sR(t);
      return a.toString(32) + e;
    }
    function Zs(e, t) {
      ec(), zf[Nf++] = Zh, zf[Nf++] = Jh, Jh = e, Zh = t;
    }
    function _w(e, t, a) {
      ec(), Pi[Ui++] = $o, Pi[Ui++] = Yo, Pi[Ui++] = Js, Js = e;
      var i = $o, o = Yo, c = em(i) - 1, v = i & ~(1 << c), y = a + 1, w = em(t) + c;
      if (w > 30) {
        var x = c - c % 5, _ = (1 << x) - 1, j = (v & _).toString(32), U = v >> x, Q = c - x, K = em(t) + Q, ne = y << Q, ke = ne | U, Xe = j + o;
        $o = 1 << K | ke, Yo = Xe;
      } else {
        var $e = y << c, Lt = $e | v, _t = o;
        $o = 1 << w | Lt, Yo = _t;
      }
    }
    function vg(e) {
      ec();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Zs(e, a), _w(e, a, i);
      }
    }
    function em(e) {
      return 32 - An(e);
    }
    function sR(e) {
      return 1 << em(e) - 1;
    }
    function hg(e) {
      for (; e === Jh; )
        Jh = zf[--Nf], zf[Nf] = null, Zh = zf[--Nf], zf[Nf] = null;
      for (; e === Js; )
        Js = Pi[--Ui], Pi[Ui] = null, Yo = Pi[--Ui], Pi[Ui] = null, $o = Pi[--Ui], Pi[Ui] = null;
    }
    function cR() {
      return ec(), Js !== null ? {
        id: $o,
        overflow: Yo
      } : null;
    }
    function fR(e, t) {
      ec(), Pi[Ui++] = $o, Pi[Ui++] = Yo, Pi[Ui++] = Js, $o = t.id, Yo = t.overflow, Js = e;
    }
    function ec() {
      Ur() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Pr = null, Fi = null, ol = !1, tc = !1, ju = null;
    function dR() {
      ol && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Dw() {
      tc = !0;
    }
    function pR() {
      return tc;
    }
    function vR(e) {
      var t = e.stateNode.containerInfo;
      return Fi = Lx(t), Pr = e, ol = !0, ju = null, tc = !1, !0;
    }
    function hR(e, t, a) {
      return Fi = zx(t), Pr = e, ol = !0, ju = null, tc = !1, a !== null && fR(e, a), !0;
    }
    function Ow(e, t) {
      switch (e.tag) {
        case O: {
          Bx(e.stateNode.containerInfo, t);
          break;
        }
        case L: {
          var a = (e.mode & Ct) !== We;
          Yx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case le: {
          var i = e.memoizedState;
          i.dehydrated !== null && $x(i.dehydrated, t);
          break;
        }
      }
    }
    function kw(e, t) {
      Ow(e, t);
      var a = SD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ma) : i.push(a);
    }
    function mg(e, t) {
      {
        if (tc)
          return;
        switch (e.tag) {
          case O: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case L:
                var i = t.type;
                t.pendingProps, Gx(a, i);
                break;
              case J:
                var o = t.pendingProps;
                Wx(a, o);
                break;
            }
            break;
          }
          case L: {
            var c = e.type, v = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case L: {
                var w = t.type, x = t.pendingProps, _ = (e.mode & Ct) !== We;
                Xx(
                  c,
                  v,
                  y,
                  w,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
              case J: {
                var j = t.pendingProps, U = (e.mode & Ct) !== We;
                Kx(
                  c,
                  v,
                  y,
                  j,
                  // TODO: Delete this argument when we remove the legacy root API.
                  U
                );
                break;
              }
            }
            break;
          }
          case le: {
            var Q = e.memoizedState, K = Q.dehydrated;
            if (K !== null) switch (t.tag) {
              case L:
                var ne = t.type;
                t.pendingProps, Qx(K, ne);
                break;
              case J:
                var ke = t.pendingProps;
                qx(K, ke);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function Mw(e, t) {
      t.flags = t.flags & ~Xr | mn, mg(e, t);
    }
    function Lw(e, t) {
      switch (e.tag) {
        case L: {
          var a = e.type;
          e.pendingProps;
          var i = Rx(t, a);
          return i !== null ? (e.stateNode = i, Pr = e, Fi = Mx(i), !0) : !1;
        }
        case J: {
          var o = e.pendingProps, c = _x(t, o);
          return c !== null ? (e.stateNode = c, Pr = e, Fi = null, !0) : !1;
        }
        case le: {
          var v = Dx(t);
          if (v !== null) {
            var y = {
              dehydrated: v,
              treeContext: cR(),
              retryLane: ea
            };
            e.memoizedState = y;
            var w = ED(v);
            return w.return = e, e.child = w, Pr = e, Fi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function yg(e) {
      return (e.mode & Ct) !== We && (e.flags & Ye) === Ge;
    }
    function gg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Sg(e) {
      if (ol) {
        var t = Fi;
        if (!t) {
          yg(e) && (mg(Pr, e), gg()), Mw(Pr, e), ol = !1, Pr = e;
          return;
        }
        var a = t;
        if (!Lw(e, t)) {
          yg(e) && (mg(Pr, e), gg()), t = Sp(a);
          var i = Pr;
          if (!t || !Lw(e, t)) {
            Mw(Pr, e), ol = !1, Pr = e;
            return;
          }
          kw(i, a);
        }
      }
    }
    function mR(e, t, a) {
      var i = e.stateNode, o = !tc, c = Nx(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = c, c !== null;
    }
    function yR(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Ax(t, a, e);
      if (i) {
        var o = Pr;
        if (o !== null)
          switch (o.tag) {
            case O: {
              var c = o.stateNode.containerInfo, v = (o.mode & Ct) !== We;
              Vx(
                c,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case L: {
              var y = o.type, w = o.memoizedProps, x = o.stateNode, _ = (o.mode & Ct) !== We;
              Ix(
                y,
                w,
                x,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                _
              );
              break;
            }
          }
      }
      return i;
    }
    function gR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Px(a, e);
    }
    function SR(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Ux(a);
    }
    function zw(e) {
      for (var t = e.return; t !== null && t.tag !== L && t.tag !== O && t.tag !== le; )
        t = t.return;
      Pr = t;
    }
    function tm(e) {
      if (e !== Pr)
        return !1;
      if (!ol)
        return zw(e), ol = !0, !1;
      if (e.tag !== O && (e.tag !== L || Hx(e.type) && !eg(e.type, e.memoizedProps))) {
        var t = Fi;
        if (t)
          if (yg(e))
            Nw(e), gg();
          else
            for (; t; )
              kw(e, t), t = Sp(t);
      }
      return zw(e), e.tag === le ? Fi = SR(e) : Fi = Pr ? Sp(e.stateNode) : null, !0;
    }
    function ER() {
      return ol && Fi !== null;
    }
    function Nw(e) {
      for (var t = Fi; t; )
        Ow(e, t), t = Sp(t);
    }
    function Af() {
      Pr = null, Fi = null, ol = !1, tc = !1;
    }
    function Aw() {
      ju !== null && (DC(ju), ju = null);
    }
    function Ur() {
      return ol;
    }
    function Eg(e) {
      ju === null ? ju = [e] : ju.push(e);
    }
    var wR = d.ReactCurrentBatchConfig, CR = null;
    function TR() {
      return wR.transition;
    }
    var ul = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var bR = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Kt && (t = a), a = a.return;
        return t;
      }, nc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Tp = [], bp = [], xp = [], Rp = [], _p = [], Dp = [], rc = /* @__PURE__ */ new Set();
      ul.recordUnsafeLifecycleWarnings = function(e, t) {
        rc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Tp.push(e), e.mode & Kt && typeof t.UNSAFE_componentWillMount == "function" && bp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && xp.push(e), e.mode & Kt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Rp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && _p.push(e), e.mode & Kt && typeof t.UNSAFE_componentWillUpdate == "function" && Dp.push(e));
      }, ul.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Tp.length > 0 && (Tp.forEach(function(U) {
          e.add(it(U) || "Component"), rc.add(U.type);
        }), Tp = []);
        var t = /* @__PURE__ */ new Set();
        bp.length > 0 && (bp.forEach(function(U) {
          t.add(it(U) || "Component"), rc.add(U.type);
        }), bp = []);
        var a = /* @__PURE__ */ new Set();
        xp.length > 0 && (xp.forEach(function(U) {
          a.add(it(U) || "Component"), rc.add(U.type);
        }), xp = []);
        var i = /* @__PURE__ */ new Set();
        Rp.length > 0 && (Rp.forEach(function(U) {
          i.add(it(U) || "Component"), rc.add(U.type);
        }), Rp = []);
        var o = /* @__PURE__ */ new Set();
        _p.length > 0 && (_p.forEach(function(U) {
          o.add(it(U) || "Component"), rc.add(U.type);
        }), _p = []);
        var c = /* @__PURE__ */ new Set();
        if (Dp.length > 0 && (Dp.forEach(function(U) {
          c.add(it(U) || "Component"), rc.add(U.type);
        }), Dp = []), t.size > 0) {
          var v = nc(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (i.size > 0) {
          var y = nc(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (c.size > 0) {
          var w = nc(c);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, w);
        }
        if (e.size > 0) {
          var x = nc(e);
          S(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (a.size > 0) {
          var _ = nc(a);
          S(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
        if (o.size > 0) {
          var j = nc(o);
          S(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, j);
        }
      };
      var nm = /* @__PURE__ */ new Map(), Pw = /* @__PURE__ */ new Set();
      ul.recordLegacyContextWarning = function(e, t) {
        var a = bR(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!Pw.has(e.type)) {
          var i = nm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], nm.set(a, i)), i.push(e));
        }
      }, ul.flushLegacyContextWarning = function() {
        nm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(c) {
              i.add(it(c) || "Component"), Pw.add(c.type);
            });
            var o = nc(i);
            try {
              Qt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              sn();
            }
          }
        });
      }, ul.discardPendingWarnings = function() {
        Tp = [], bp = [], xp = [], Rp = [], _p = [], Dp = [], nm = /* @__PURE__ */ new Map();
      };
    }
    var wg, Cg, Tg, bg, xg, Uw = function(e, t) {
    };
    wg = !1, Cg = !1, Tg = {}, bg = {}, xg = {}, Uw = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = it(t) || "Component";
        bg[a] || (bg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function xR(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Op(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Kt || ae) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== D) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !xR(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var o = it(e) || "Component";
          Tg[o] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o, i), Tg[o] = !0);
        }
        if (a._owner) {
          var c = a._owner, v;
          if (c) {
            var y = c;
            if (y.tag !== D)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = y.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var w = v;
          vi(i, "ref");
          var x = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === x)
            return t.ref;
          var _ = function(j) {
            var U = w.refs;
            j === null ? delete U[x] : U[x] = j;
          };
          return _._stringRef = x, _;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function rm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function am(e) {
      {
        var t = it(e) || "Component";
        if (xg[t])
          return;
        xg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Fw(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function jw(e) {
      function t($, re) {
        if (e) {
          var Y = $.deletions;
          Y === null ? ($.deletions = [re], $.flags |= Ma) : Y.push(re);
        }
      }
      function a($, re) {
        if (!e)
          return null;
        for (var Y = re; Y !== null; )
          t($, Y), Y = Y.sibling;
        return null;
      }
      function i($, re) {
        for (var Y = /* @__PURE__ */ new Map(), ge = re; ge !== null; )
          ge.key !== null ? Y.set(ge.key, ge) : Y.set(ge.index, ge), ge = ge.sibling;
        return Y;
      }
      function o($, re) {
        var Y = dc($, re);
        return Y.index = 0, Y.sibling = null, Y;
      }
      function c($, re, Y) {
        if ($.index = Y, !e)
          return $.flags |= Ri, re;
        var ge = $.alternate;
        if (ge !== null) {
          var Ae = ge.index;
          return Ae < re ? ($.flags |= mn, re) : Ae;
        } else
          return $.flags |= mn, re;
      }
      function v($) {
        return e && $.alternate === null && ($.flags |= mn), $;
      }
      function y($, re, Y, ge) {
        if (re === null || re.tag !== J) {
          var Ae = EE(Y, $.mode, ge);
          return Ae.return = $, Ae;
        } else {
          var Le = o(re, Y);
          return Le.return = $, Le;
        }
      }
      function w($, re, Y, ge) {
        var Ae = Y.type;
        if (Ae === mi)
          return _($, re, Y.props.children, ge, Y.key);
        if (re !== null && (re.elementType === Ae || // Keep this check inline so it only runs on the false path:
        $C(re, Y) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ae == "object" && Ae !== null && Ae.$$typeof === lt && Fw(Ae) === re.type)) {
          var Le = o(re, Y.props);
          return Le.ref = Op($, re, Y), Le.return = $, Le._debugSource = Y._source, Le._debugOwner = Y._owner, Le;
        }
        var rt = SE(Y, $.mode, ge);
        return rt.ref = Op($, re, Y), rt.return = $, rt;
      }
      function x($, re, Y, ge) {
        if (re === null || re.tag !== N || re.stateNode.containerInfo !== Y.containerInfo || re.stateNode.implementation !== Y.implementation) {
          var Ae = wE(Y, $.mode, ge);
          return Ae.return = $, Ae;
        } else {
          var Le = o(re, Y.children || []);
          return Le.return = $, Le;
        }
      }
      function _($, re, Y, ge, Ae) {
        if (re === null || re.tag !== I) {
          var Le = Xu(Y, $.mode, ge, Ae);
          return Le.return = $, Le;
        } else {
          var rt = o(re, Y);
          return rt.return = $, rt;
        }
      }
      function j($, re, Y) {
        if (typeof re == "string" && re !== "" || typeof re == "number") {
          var ge = EE("" + re, $.mode, Y);
          return ge.return = $, ge;
        }
        if (typeof re == "object" && re !== null) {
          switch (re.$$typeof) {
            case Dr: {
              var Ae = SE(re, $.mode, Y);
              return Ae.ref = Op($, null, re), Ae.return = $, Ae;
            }
            case rr: {
              var Le = wE(re, $.mode, Y);
              return Le.return = $, Le;
            }
            case lt: {
              var rt = re._payload, ut = re._init;
              return j($, ut(rt), Y);
            }
          }
          if (gt(re) || ct(re)) {
            var Zt = Xu(re, $.mode, Y, null);
            return Zt.return = $, Zt;
          }
          rm($, re);
        }
        return typeof re == "function" && am($), null;
      }
      function U($, re, Y, ge) {
        var Ae = re !== null ? re.key : null;
        if (typeof Y == "string" && Y !== "" || typeof Y == "number")
          return Ae !== null ? null : y($, re, "" + Y, ge);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case Dr:
              return Y.key === Ae ? w($, re, Y, ge) : null;
            case rr:
              return Y.key === Ae ? x($, re, Y, ge) : null;
            case lt: {
              var Le = Y._payload, rt = Y._init;
              return U($, re, rt(Le), ge);
            }
          }
          if (gt(Y) || ct(Y))
            return Ae !== null ? null : _($, re, Y, ge, null);
          rm($, Y);
        }
        return typeof Y == "function" && am($), null;
      }
      function Q($, re, Y, ge, Ae) {
        if (typeof ge == "string" && ge !== "" || typeof ge == "number") {
          var Le = $.get(Y) || null;
          return y(re, Le, "" + ge, Ae);
        }
        if (typeof ge == "object" && ge !== null) {
          switch (ge.$$typeof) {
            case Dr: {
              var rt = $.get(ge.key === null ? Y : ge.key) || null;
              return w(re, rt, ge, Ae);
            }
            case rr: {
              var ut = $.get(ge.key === null ? Y : ge.key) || null;
              return x(re, ut, ge, Ae);
            }
            case lt:
              var Zt = ge._payload, Ht = ge._init;
              return Q($, re, Y, Ht(Zt), Ae);
          }
          if (gt(ge) || ct(ge)) {
            var Qn = $.get(Y) || null;
            return _(re, Qn, ge, Ae, null);
          }
          rm(re, ge);
        }
        return typeof ge == "function" && am(re), null;
      }
      function K($, re, Y) {
        {
          if (typeof $ != "object" || $ === null)
            return re;
          switch ($.$$typeof) {
            case Dr:
            case rr:
              Uw($, Y);
              var ge = $.key;
              if (typeof ge != "string")
                break;
              if (re === null) {
                re = /* @__PURE__ */ new Set(), re.add(ge);
                break;
              }
              if (!re.has(ge)) {
                re.add(ge);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ge);
              break;
            case lt:
              var Ae = $._payload, Le = $._init;
              K(Le(Ae), re, Y);
              break;
          }
        }
        return re;
      }
      function ne($, re, Y, ge) {
        for (var Ae = null, Le = 0; Le < Y.length; Le++) {
          var rt = Y[Le];
          Ae = K(rt, Ae, $);
        }
        for (var ut = null, Zt = null, Ht = re, Qn = 0, Vt = 0, Hn = null; Ht !== null && Vt < Y.length; Vt++) {
          Ht.index > Vt ? (Hn = Ht, Ht = null) : Hn = Ht.sibling;
          var ua = U($, Ht, Y[Vt], ge);
          if (ua === null) {
            Ht === null && (Ht = Hn);
            break;
          }
          e && Ht && ua.alternate === null && t($, Ht), Qn = c(ua, Qn, Vt), Zt === null ? ut = ua : Zt.sibling = ua, Zt = ua, Ht = Hn;
        }
        if (Vt === Y.length) {
          if (a($, Ht), Ur()) {
            var $r = Vt;
            Zs($, $r);
          }
          return ut;
        }
        if (Ht === null) {
          for (; Vt < Y.length; Vt++) {
            var fi = j($, Y[Vt], ge);
            fi !== null && (Qn = c(fi, Qn, Vt), Zt === null ? ut = fi : Zt.sibling = fi, Zt = fi);
          }
          if (Ur()) {
            var Ta = Vt;
            Zs($, Ta);
          }
          return ut;
        }
        for (var ba = i($, Ht); Vt < Y.length; Vt++) {
          var sa = Q(ba, $, Vt, Y[Vt], ge);
          sa !== null && (e && sa.alternate !== null && ba.delete(sa.key === null ? Vt : sa.key), Qn = c(sa, Qn, Vt), Zt === null ? ut = sa : Zt.sibling = sa, Zt = sa);
        }
        if (e && ba.forEach(function(ed) {
          return t($, ed);
        }), Ur()) {
          var Jo = Vt;
          Zs($, Jo);
        }
        return ut;
      }
      function ke($, re, Y, ge) {
        var Ae = ct(Y);
        if (typeof Ae != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Y[Symbol.toStringTag] === "Generator" && (Cg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Cg = !0), Y.entries === Ae && (wg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), wg = !0);
          var Le = Ae.call(Y);
          if (Le)
            for (var rt = null, ut = Le.next(); !ut.done; ut = Le.next()) {
              var Zt = ut.value;
              rt = K(Zt, rt, $);
            }
        }
        var Ht = Ae.call(Y);
        if (Ht == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Qn = null, Vt = null, Hn = re, ua = 0, $r = 0, fi = null, Ta = Ht.next(); Hn !== null && !Ta.done; $r++, Ta = Ht.next()) {
          Hn.index > $r ? (fi = Hn, Hn = null) : fi = Hn.sibling;
          var ba = U($, Hn, Ta.value, ge);
          if (ba === null) {
            Hn === null && (Hn = fi);
            break;
          }
          e && Hn && ba.alternate === null && t($, Hn), ua = c(ba, ua, $r), Vt === null ? Qn = ba : Vt.sibling = ba, Vt = ba, Hn = fi;
        }
        if (Ta.done) {
          if (a($, Hn), Ur()) {
            var sa = $r;
            Zs($, sa);
          }
          return Qn;
        }
        if (Hn === null) {
          for (; !Ta.done; $r++, Ta = Ht.next()) {
            var Jo = j($, Ta.value, ge);
            Jo !== null && (ua = c(Jo, ua, $r), Vt === null ? Qn = Jo : Vt.sibling = Jo, Vt = Jo);
          }
          if (Ur()) {
            var ed = $r;
            Zs($, ed);
          }
          return Qn;
        }
        for (var ov = i($, Hn); !Ta.done; $r++, Ta = Ht.next()) {
          var ro = Q(ov, $, $r, Ta.value, ge);
          ro !== null && (e && ro.alternate !== null && ov.delete(ro.key === null ? $r : ro.key), ua = c(ro, ua, $r), Vt === null ? Qn = ro : Vt.sibling = ro, Vt = ro);
        }
        if (e && ov.forEach(function(KD) {
          return t($, KD);
        }), Ur()) {
          var XD = $r;
          Zs($, XD);
        }
        return Qn;
      }
      function Xe($, re, Y, ge) {
        if (re !== null && re.tag === J) {
          a($, re.sibling);
          var Ae = o(re, Y);
          return Ae.return = $, Ae;
        }
        a($, re);
        var Le = EE(Y, $.mode, ge);
        return Le.return = $, Le;
      }
      function $e($, re, Y, ge) {
        for (var Ae = Y.key, Le = re; Le !== null; ) {
          if (Le.key === Ae) {
            var rt = Y.type;
            if (rt === mi) {
              if (Le.tag === I) {
                a($, Le.sibling);
                var ut = o(Le, Y.props.children);
                return ut.return = $, ut._debugSource = Y._source, ut._debugOwner = Y._owner, ut;
              }
            } else if (Le.elementType === rt || // Keep this check inline so it only runs on the false path:
            $C(Le, Y) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof rt == "object" && rt !== null && rt.$$typeof === lt && Fw(rt) === Le.type) {
              a($, Le.sibling);
              var Zt = o(Le, Y.props);
              return Zt.ref = Op($, Le, Y), Zt.return = $, Zt._debugSource = Y._source, Zt._debugOwner = Y._owner, Zt;
            }
            a($, Le);
            break;
          } else
            t($, Le);
          Le = Le.sibling;
        }
        if (Y.type === mi) {
          var Ht = Xu(Y.props.children, $.mode, ge, Y.key);
          return Ht.return = $, Ht;
        } else {
          var Qn = SE(Y, $.mode, ge);
          return Qn.ref = Op($, re, Y), Qn.return = $, Qn;
        }
      }
      function Lt($, re, Y, ge) {
        for (var Ae = Y.key, Le = re; Le !== null; ) {
          if (Le.key === Ae)
            if (Le.tag === N && Le.stateNode.containerInfo === Y.containerInfo && Le.stateNode.implementation === Y.implementation) {
              a($, Le.sibling);
              var rt = o(Le, Y.children || []);
              return rt.return = $, rt;
            } else {
              a($, Le);
              break;
            }
          else
            t($, Le);
          Le = Le.sibling;
        }
        var ut = wE(Y, $.mode, ge);
        return ut.return = $, ut;
      }
      function _t($, re, Y, ge) {
        var Ae = typeof Y == "object" && Y !== null && Y.type === mi && Y.key === null;
        if (Ae && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case Dr:
              return v($e($, re, Y, ge));
            case rr:
              return v(Lt($, re, Y, ge));
            case lt:
              var Le = Y._payload, rt = Y._init;
              return _t($, re, rt(Le), ge);
          }
          if (gt(Y))
            return ne($, re, Y, ge);
          if (ct(Y))
            return ke($, re, Y, ge);
          rm($, Y);
        }
        return typeof Y == "string" && Y !== "" || typeof Y == "number" ? v(Xe($, re, "" + Y, ge)) : (typeof Y == "function" && am($), a($, re));
      }
      return _t;
    }
    var Pf = jw(!0), Hw = jw(!1);
    function RR(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = dc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = dc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function _R(e, t) {
      for (var a = e.child; a !== null; )
        vD(a, t), a = a.sibling;
    }
    var Rg = Pu(null), _g;
    _g = {};
    var im = null, Uf = null, Dg = null, lm = !1;
    function om() {
      im = null, Uf = null, Dg = null, lm = !1;
    }
    function Vw() {
      lm = !0;
    }
    function Iw() {
      lm = !1;
    }
    function Bw(e, t, a) {
      la(Rg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== _g && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = _g;
    }
    function Og(e, t) {
      var a = Rg.current;
      ia(Rg, t), e._currentValue = a;
    }
    function kg(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (No(i.childLanes, t) ? o !== null && !No(o.childLanes, t) && (o.childLanes = ft(o.childLanes, t)) : (i.childLanes = ft(i.childLanes, t), o !== null && (o.childLanes = ft(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function DR(e, t, a) {
      OR(e, t, a);
    }
    function OR(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, c = i.dependencies;
        if (c !== null) {
          o = i.child;
          for (var v = c.firstContext; v !== null; ) {
            if (v.context === t) {
              if (i.tag === D) {
                var y = ks(a), w = Go(en, y);
                w.tag = sm;
                var x = i.updateQueue;
                if (x !== null) {
                  var _ = x.shared, j = _.pending;
                  j === null ? w.next = w : (w.next = j.next, j.next = w), _.pending = w;
                }
              }
              i.lanes = ft(i.lanes, a);
              var U = i.alternate;
              U !== null && (U.lanes = ft(U.lanes, a)), kg(i.return, a, e), c.lanes = ft(c.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (i.tag === te)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === Tt) {
          var Q = i.return;
          if (Q === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Q.lanes = ft(Q.lanes, a);
          var K = Q.alternate;
          K !== null && (K.lanes = ft(K.lanes, a)), kg(Q, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var ne = o.sibling;
            if (ne !== null) {
              ne.return = o.return, o = ne;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function Ff(e, t) {
      im = e, Uf = null, Dg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ta(a.lanes, t) && $p(), a.firstContext = null);
      }
    }
    function tr(e) {
      lm && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Dg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Uf === null) {
          if (im === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Uf = a, im.dependencies = {
            lanes: ce,
            firstContext: a
          };
        } else
          Uf = Uf.next = a;
      }
      return t;
    }
    var ac = null;
    function Mg(e) {
      ac === null ? ac = [e] : ac.push(e);
    }
    function kR() {
      if (ac !== null) {
        for (var e = 0; e < ac.length; e++) {
          var t = ac[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var c = o.next;
              o.next = i, a.next = c;
            }
            t.pending = a;
          }
        }
        ac = null;
      }
    }
    function $w(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Mg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, um(e, i);
    }
    function MR(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, Mg(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function LR(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Mg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, um(e, i);
    }
    function Va(e, t) {
      return um(e, t);
    }
    var zR = um;
    function um(e, t) {
      e.lanes = ft(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ft(a.lanes, t)), a === null && (e.flags & (mn | Xr)) !== Ge && HC(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = ft(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = ft(a.childLanes, t) : (o.flags & (mn | Xr)) !== Ge && HC(e), i = o, o = o.return;
      if (i.tag === O) {
        var c = i.stateNode;
        return c;
      } else
        return null;
    }
    var Yw = 0, Gw = 1, sm = 2, Lg = 3, cm = !1, zg, fm;
    zg = !1, fm = null;
    function Ng(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ce
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function Ww(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function Go(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: Yw,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Hu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (fm === o && !zg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), zg = !0), M_()) {
        var c = o.pending;
        return c === null ? t.next = t : (t.next = c.next, c.next = t), o.pending = t, zR(e, a);
      } else
        return LR(e, o, t, a);
    }
    function dm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Id(a)) {
          var c = o.lanes;
          c = $d(c, e.pendingLanes);
          var v = ft(c, a);
          o.lanes = v, cf(e, v);
        }
      }
    }
    function Ag(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var c = null, v = null, y = a.firstBaseUpdate;
          if (y !== null) {
            var w = y;
            do {
              var x = {
                eventTime: w.eventTime,
                lane: w.lane,
                tag: w.tag,
                payload: w.payload,
                callback: w.callback,
                next: null
              };
              v === null ? c = v = x : (v.next = x, v = x), w = w.next;
            } while (w !== null);
            v === null ? c = v = t : (v.next = t, v = t);
          } else
            c = v = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: c,
            lastBaseUpdate: v,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var _ = a.lastBaseUpdate;
      _ === null ? a.firstBaseUpdate = t : _.next = t, a.lastBaseUpdate = t;
    }
    function NR(e, t, a, i, o, c) {
      switch (a.tag) {
        case Gw: {
          var v = a.payload;
          if (typeof v == "function") {
            Vw();
            var y = v.call(c, i, o);
            {
              if (e.mode & Kt) {
                yn(!0);
                try {
                  v.call(c, i, o);
                } finally {
                  yn(!1);
                }
              }
              Iw();
            }
            return y;
          }
          return v;
        }
        case Lg:
          e.flags = e.flags & ~Kn | Ye;
        // Intentional fallthrough
        case Yw: {
          var w = a.payload, x;
          if (typeof w == "function") {
            Vw(), x = w.call(c, i, o);
            {
              if (e.mode & Kt) {
                yn(!0);
                try {
                  w.call(c, i, o);
                } finally {
                  yn(!1);
                }
              }
              Iw();
            }
          } else
            x = w;
          return x == null ? i : vt({}, i, x);
        }
        case sm:
          return cm = !0, i;
      }
      return i;
    }
    function pm(e, t, a, i) {
      var o = e.updateQueue;
      cm = !1, fm = o.shared;
      var c = o.firstBaseUpdate, v = o.lastBaseUpdate, y = o.shared.pending;
      if (y !== null) {
        o.shared.pending = null;
        var w = y, x = w.next;
        w.next = null, v === null ? c = x : v.next = x, v = w;
        var _ = e.alternate;
        if (_ !== null) {
          var j = _.updateQueue, U = j.lastBaseUpdate;
          U !== v && (U === null ? j.firstBaseUpdate = x : U.next = x, j.lastBaseUpdate = w);
        }
      }
      if (c !== null) {
        var Q = o.baseState, K = ce, ne = null, ke = null, Xe = null, $e = c;
        do {
          var Lt = $e.lane, _t = $e.eventTime;
          if (No(i, Lt)) {
            if (Xe !== null) {
              var re = {
                eventTime: _t,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: At,
                tag: $e.tag,
                payload: $e.payload,
                callback: $e.callback,
                next: null
              };
              Xe = Xe.next = re;
            }
            Q = NR(e, o, $e, Q, t, a);
            var Y = $e.callback;
            if (Y !== null && // If the update was already committed, we should not queue its
            // callback again.
            $e.lane !== At) {
              e.flags |= ln;
              var ge = o.effects;
              ge === null ? o.effects = [$e] : ge.push($e);
            }
          } else {
            var $ = {
              eventTime: _t,
              lane: Lt,
              tag: $e.tag,
              payload: $e.payload,
              callback: $e.callback,
              next: null
            };
            Xe === null ? (ke = Xe = $, ne = Q) : Xe = Xe.next = $, K = ft(K, Lt);
          }
          if ($e = $e.next, $e === null) {
            if (y = o.shared.pending, y === null)
              break;
            var Ae = y, Le = Ae.next;
            Ae.next = null, $e = Le, o.lastBaseUpdate = Ae, o.shared.pending = null;
          }
        } while (!0);
        Xe === null && (ne = Q), o.baseState = ne, o.firstBaseUpdate = ke, o.lastBaseUpdate = Xe;
        var rt = o.shared.interleaved;
        if (rt !== null) {
          var ut = rt;
          do
            K = ft(K, ut.lane), ut = ut.next;
          while (ut !== rt);
        } else c === null && (o.shared.lanes = ce);
        nv(K), e.lanes = K, e.memoizedState = Q;
      }
      fm = null;
    }
    function AR(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function Qw() {
      cm = !1;
    }
    function vm() {
      return cm;
    }
    function qw(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var c = i[o], v = c.callback;
          v !== null && (c.callback = null, AR(v, a));
        }
    }
    var kp = {}, Vu = Pu(kp), Mp = Pu(kp), hm = Pu(kp);
    function mm(e) {
      if (e === kp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function Xw() {
      var e = mm(hm.current);
      return e;
    }
    function Pg(e, t) {
      la(hm, t, e), la(Mp, e, e), la(Vu, kp, e);
      var a = Jb(t);
      ia(Vu, e), la(Vu, a, e);
    }
    function jf(e) {
      ia(Vu, e), ia(Mp, e), ia(hm, e);
    }
    function Ug() {
      var e = mm(Vu.current);
      return e;
    }
    function Kw(e) {
      mm(hm.current);
      var t = mm(Vu.current), a = Zb(t, e.type);
      t !== a && (la(Mp, e, e), la(Vu, a, e));
    }
    function Fg(e) {
      Mp.current === e && (ia(Vu, e), ia(Mp, e));
    }
    var PR = 0, Jw = 1, Zw = 1, Lp = 2, sl = Pu(PR);
    function jg(e, t) {
      return (e & t) !== 0;
    }
    function Hf(e) {
      return e & Jw;
    }
    function Hg(e, t) {
      return e & Jw | t;
    }
    function UR(e, t) {
      return e | t;
    }
    function Iu(e, t) {
      la(sl, t, e);
    }
    function Vf(e) {
      ia(sl, e);
    }
    function FR(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function ym(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === le) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || mw(i) || ag(i))
              return t;
          }
        } else if (t.tag === me && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & Ye) !== Ge;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ia = (
      /*   */
      0
    ), cr = (
      /* */
      1
    ), Xl = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), Vg = [];
    function Ig() {
      for (var e = 0; e < Vg.length; e++) {
        var t = Vg[e];
        t._workInProgressVersionPrimary = null;
      }
      Vg.length = 0;
    }
    function jR(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ne = d.ReactCurrentDispatcher, zp = d.ReactCurrentBatchConfig, Bg, If;
    Bg = /* @__PURE__ */ new Set();
    var ic = ce, Jt = null, dr = null, pr = null, gm = !1, Np = !1, Ap = 0, HR = 0, VR = 25, ie = null, ji = null, Bu = -1, $g = !1;
    function $t() {
      {
        var e = ie;
        ji === null ? ji = [e] : ji.push(e);
      }
    }
    function Re() {
      {
        var e = ie;
        ji !== null && (Bu++, ji[Bu] !== e && IR(e));
      }
    }
    function Bf(e) {
      e != null && !gt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ie, typeof e);
    }
    function IR(e) {
      {
        var t = it(Jt);
        if (!Bg.has(t) && (Bg.add(t), ji !== null)) {
          for (var a = "", i = 30, o = 0; o <= Bu; o++) {
            for (var c = ji[o], v = o === Bu ? e : c, y = o + 1 + ". " + c; y.length < i; )
              y += " ";
            y += v + `
`, a += y;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function oa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Yg(e, t) {
      if ($g)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ie), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ie, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!he(e[a], t[a]))
          return !1;
      return !0;
    }
    function $f(e, t, a, i, o, c) {
      ic = c, Jt = t, ji = e !== null ? e._debugHookTypes : null, Bu = -1, $g = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ce, e !== null && e.memoizedState !== null ? Ne.current = w0 : ji !== null ? Ne.current = E0 : Ne.current = S0;
      var v = a(i, o);
      if (Np) {
        var y = 0;
        do {
          if (Np = !1, Ap = 0, y >= VR)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, $g = !1, dr = null, pr = null, t.updateQueue = null, Bu = -1, Ne.current = C0, v = a(i, o);
        } while (Np);
      }
      Ne.current = Mm, t._debugHookTypes = ji;
      var w = dr !== null && dr.next !== null;
      if (ic = ce, Jt = null, dr = null, pr = null, ie = null, ji = null, Bu = -1, e !== null && (e.flags & Nn) !== (t.flags & Nn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ct) !== We && g("Internal React error: Expected static flag was missing. Please notify the React team."), gm = !1, w)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function Yf() {
      var e = Ap !== 0;
      return Ap = 0, e;
    }
    function e0(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ft) !== We ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ms(e.lanes, a);
    }
    function t0() {
      if (Ne.current = Mm, gm) {
        for (var e = Jt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        gm = !1;
      }
      ic = ce, Jt = null, dr = null, pr = null, ji = null, Bu = -1, ie = null, v0 = !1, Np = !1, Ap = 0;
    }
    function Kl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? Jt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Hi() {
      var e;
      if (dr === null) {
        var t = Jt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = Jt.memoizedState : a = pr.next, a !== null)
        pr = a, a = pr.next, dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        pr === null ? Jt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function n0() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Gg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Wg(e, t, a) {
      var i = Kl(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var c = {
        pending: null,
        interleaved: null,
        lanes: ce,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = c;
      var v = c.dispatch = GR.bind(null, Jt, c);
      return [i.memoizedState, v];
    }
    function Qg(e, t, a) {
      var i = Hi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var c = dr, v = c.baseQueue, y = o.pending;
      if (y !== null) {
        if (v !== null) {
          var w = v.next, x = y.next;
          v.next = x, y.next = w;
        }
        c.baseQueue !== v && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), c.baseQueue = v = y, o.pending = null;
      }
      if (v !== null) {
        var _ = v.next, j = c.baseState, U = null, Q = null, K = null, ne = _;
        do {
          var ke = ne.lane;
          if (No(ic, ke)) {
            if (K !== null) {
              var $e = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: At,
                action: ne.action,
                hasEagerState: ne.hasEagerState,
                eagerState: ne.eagerState,
                next: null
              };
              K = K.next = $e;
            }
            if (ne.hasEagerState)
              j = ne.eagerState;
            else {
              var Lt = ne.action;
              j = e(j, Lt);
            }
          } else {
            var Xe = {
              lane: ke,
              action: ne.action,
              hasEagerState: ne.hasEagerState,
              eagerState: ne.eagerState,
              next: null
            };
            K === null ? (Q = K = Xe, U = j) : K = K.next = Xe, Jt.lanes = ft(Jt.lanes, ke), nv(ke);
          }
          ne = ne.next;
        } while (ne !== null && ne !== _);
        K === null ? U = j : K.next = Q, he(j, i.memoizedState) || $p(), i.memoizedState = j, i.baseState = U, i.baseQueue = K, o.lastRenderedState = j;
      }
      var _t = o.interleaved;
      if (_t !== null) {
        var $ = _t;
        do {
          var re = $.lane;
          Jt.lanes = ft(Jt.lanes, re), nv(re), $ = $.next;
        } while ($ !== _t);
      } else v === null && (o.lanes = ce);
      var Y = o.dispatch;
      return [i.memoizedState, Y];
    }
    function qg(e, t, a) {
      var i = Hi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var c = o.dispatch, v = o.pending, y = i.memoizedState;
      if (v !== null) {
        o.pending = null;
        var w = v.next, x = w;
        do {
          var _ = x.action;
          y = e(y, _), x = x.next;
        } while (x !== w);
        he(y, i.memoizedState) || $p(), i.memoizedState = y, i.baseQueue === null && (i.baseState = y), o.lastRenderedState = y;
      }
      return [y, c];
    }
    function Kk(e, t, a) {
    }
    function Jk(e, t, a) {
    }
    function Xg(e, t, a) {
      var i = Jt, o = Kl(), c, v = Ur();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        c = a(), If || c !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), If = !0);
      } else {
        if (c = t(), !If) {
          var y = t();
          he(c, y) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), If = !0);
        }
        var w = Xm();
        if (w === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        uf(w, ic) || r0(i, t, c);
      }
      o.memoizedState = c;
      var x = {
        value: c,
        getSnapshot: t
      };
      return o.queue = x, Tm(i0.bind(null, i, x, e), [e]), i.flags |= qr, Pp(cr | Fr, a0.bind(null, i, x, c, t), void 0, null), c;
    }
    function Sm(e, t, a) {
      var i = Jt, o = Hi(), c = t();
      if (!If) {
        var v = t();
        he(c, v) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), If = !0);
      }
      var y = o.memoizedState, w = !he(y, c);
      w && (o.memoizedState = c, $p());
      var x = o.queue;
      if (Fp(i0.bind(null, i, x, e), [e]), x.getSnapshot !== t || w || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= qr, Pp(cr | Fr, a0.bind(null, i, x, c, t), void 0, null);
        var _ = Xm();
        if (_ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        uf(_, ic) || r0(i, t, c);
      }
      return c;
    }
    function r0(e, t, a) {
      e.flags |= Eu;
      var i = {
        getSnapshot: t,
        value: a
      }, o = Jt.updateQueue;
      if (o === null)
        o = n0(), Jt.updateQueue = o, o.stores = [i];
      else {
        var c = o.stores;
        c === null ? o.stores = [i] : c.push(i);
      }
    }
    function a0(e, t, a, i) {
      t.value = a, t.getSnapshot = i, l0(t) && o0(e);
    }
    function i0(e, t, a) {
      var i = function() {
        l0(t) && o0(e);
      };
      return a(i);
    }
    function l0(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !he(a, i);
      } catch {
        return !0;
      }
    }
    function o0(e) {
      var t = Va(e, nt);
      t !== null && yr(t, e, nt, en);
    }
    function Em(e) {
      var t = Kl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ce,
        dispatch: null,
        lastRenderedReducer: Gg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = WR.bind(null, Jt, a);
      return [t.memoizedState, i];
    }
    function Kg(e) {
      return Qg(Gg);
    }
    function Jg(e) {
      return qg(Gg);
    }
    function Pp(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, c = Jt.updateQueue;
      if (c === null)
        c = n0(), Jt.updateQueue = c, c.lastEffect = o.next = o;
      else {
        var v = c.lastEffect;
        if (v === null)
          c.lastEffect = o.next = o;
        else {
          var y = v.next;
          v.next = o, o.next = y, c.lastEffect = o;
        }
      }
      return o;
    }
    function Zg(e) {
      var t = Kl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function wm(e) {
      var t = Hi();
      return t.memoizedState;
    }
    function Up(e, t, a, i) {
      var o = Kl(), c = i === void 0 ? null : i;
      Jt.flags |= e, o.memoizedState = Pp(cr | t, a, void 0, c);
    }
    function Cm(e, t, a, i) {
      var o = Hi(), c = i === void 0 ? null : i, v = void 0;
      if (dr !== null) {
        var y = dr.memoizedState;
        if (v = y.destroy, c !== null) {
          var w = y.deps;
          if (Yg(c, w)) {
            o.memoizedState = Pp(t, a, v, c);
            return;
          }
        }
      }
      Jt.flags |= e, o.memoizedState = Pp(cr | t, a, v, c);
    }
    function Tm(e, t) {
      return (Jt.mode & Ft) !== We ? Up(_i | qr | Nc, Fr, e, t) : Up(qr | Nc, Fr, e, t);
    }
    function Fp(e, t) {
      return Cm(qr, Fr, e, t);
    }
    function eS(e, t) {
      return Up(Ot, Xl, e, t);
    }
    function bm(e, t) {
      return Cm(Ot, Xl, e, t);
    }
    function tS(e, t) {
      var a = Ot;
      return a |= Ki, (Jt.mode & Ft) !== We && (a |= Ll), Up(a, fr, e, t);
    }
    function xm(e, t) {
      return Cm(Ot, fr, e, t);
    }
    function u0(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var c = e();
        return o.current = c, function() {
          o.current = null;
        };
      }
    }
    function nS(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = Ot;
      return o |= Ki, (Jt.mode & Ft) !== We && (o |= Ll), Up(o, fr, u0.bind(null, t, e), i);
    }
    function Rm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Cm(Ot, fr, u0.bind(null, t, e), i);
    }
    function BR(e, t) {
    }
    var _m = BR;
    function rS(e, t) {
      var a = Kl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Dm(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var c = o[1];
        if (Yg(i, c))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function aS(e, t) {
      var a = Kl(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function Om(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var c = o[1];
        if (Yg(i, c))
          return o[0];
      }
      var v = e();
      return a.memoizedState = [v, i], v;
    }
    function iS(e) {
      var t = Kl();
      return t.memoizedState = e, e;
    }
    function s0(e) {
      var t = Hi(), a = dr, i = a.memoizedState;
      return f0(t, i, e);
    }
    function c0(e) {
      var t = Hi();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return f0(t, a, e);
    }
    function f0(e, t, a) {
      var i = !Hd(ic);
      if (i) {
        if (!he(a, t)) {
          var o = Bd();
          Jt.lanes = ft(Jt.lanes, o), nv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, $p()), e.memoizedState = a, a;
    }
    function $R(e, t, a) {
      var i = Fa();
      Un(lh(i, Mi)), e(!0);
      var o = zp.transition;
      zp.transition = {};
      var c = zp.transition;
      zp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Un(i), zp.transition = o, o === null && c._updatedFibers) {
          var v = c._updatedFibers.size;
          v > 10 && S("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), c._updatedFibers.clear();
        }
      }
    }
    function lS() {
      var e = Em(!1), t = e[0], a = e[1], i = $R.bind(null, a), o = Kl();
      return o.memoizedState = i, [t, i];
    }
    function d0() {
      var e = Kg(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    function p0() {
      var e = Jg(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    var v0 = !1;
    function YR() {
      return v0;
    }
    function oS() {
      var e = Kl(), t = Xm(), a = t.identifierPrefix, i;
      if (Ur()) {
        var o = uR();
        i = ":" + a + "R" + o;
        var c = Ap++;
        c > 0 && (i += "H" + c.toString(32)), i += ":";
      } else {
        var v = HR++;
        i = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function km() {
      var e = Hi(), t = e.memoizedState;
      return t;
    }
    function GR(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Qu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (h0(e))
        m0(t, o);
      else {
        var c = $w(e, t, o, i);
        if (c !== null) {
          var v = Ca();
          yr(c, e, i, v), y0(c, t, i);
        }
      }
      g0(e, i);
    }
    function WR(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Qu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (h0(e))
        m0(t, o);
      else {
        var c = e.alternate;
        if (e.lanes === ce && (c === null || c.lanes === ce)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var y;
            y = Ne.current, Ne.current = cl;
            try {
              var w = t.lastRenderedState, x = v(w, a);
              if (o.hasEagerState = !0, o.eagerState = x, he(x, w)) {
                MR(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Ne.current = y;
            }
          }
        }
        var _ = $w(e, t, o, i);
        if (_ !== null) {
          var j = Ca();
          yr(_, e, i, j), y0(_, t, i);
        }
      }
      g0(e, i);
    }
    function h0(e) {
      var t = e.alternate;
      return e === Jt || t !== null && t === Jt;
    }
    function m0(e, t) {
      Np = gm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function y0(e, t, a) {
      if (Id(a)) {
        var i = t.lanes;
        i = $d(i, e.pendingLanes);
        var o = ft(i, a);
        t.lanes = o, cf(e, o);
      }
    }
    function g0(e, t, a) {
      ws(e, t);
    }
    var Mm = {
      readContext: tr,
      useCallback: oa,
      useContext: oa,
      useEffect: oa,
      useImperativeHandle: oa,
      useInsertionEffect: oa,
      useLayoutEffect: oa,
      useMemo: oa,
      useReducer: oa,
      useRef: oa,
      useState: oa,
      useDebugValue: oa,
      useDeferredValue: oa,
      useTransition: oa,
      useMutableSource: oa,
      useSyncExternalStore: oa,
      useId: oa,
      unstable_isNewReconciler: pe
    }, S0 = null, E0 = null, w0 = null, C0 = null, Jl = null, cl = null, Lm = null;
    {
      var uS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ot = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      S0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", $t(), Bf(t), rS(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", $t(), tr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", $t(), Bf(t), Tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", $t(), Bf(a), nS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", $t(), Bf(t), eS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", $t(), Bf(t), tS(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", $t(), Bf(t);
          var a = Ne.current;
          Ne.current = Jl;
          try {
            return aS(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", $t();
          var i = Ne.current;
          Ne.current = Jl;
          try {
            return Wg(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", $t(), Zg(e);
        },
        useState: function(e) {
          ie = "useState", $t();
          var t = Ne.current;
          Ne.current = Jl;
          try {
            return Em(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", $t(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", $t(), iS(e);
        },
        useTransition: function() {
          return ie = "useTransition", $t(), lS();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", $t(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", $t(), Xg(e, t, a);
        },
        useId: function() {
          return ie = "useId", $t(), oS();
        },
        unstable_isNewReconciler: pe
      }, E0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", Re(), rS(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", Re(), tr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", Re(), Tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", Re(), nS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", Re(), eS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", Re(), tS(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", Re();
          var a = Ne.current;
          Ne.current = Jl;
          try {
            return aS(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", Re();
          var i = Ne.current;
          Ne.current = Jl;
          try {
            return Wg(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", Re(), Zg(e);
        },
        useState: function(e) {
          ie = "useState", Re();
          var t = Ne.current;
          Ne.current = Jl;
          try {
            return Em(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", Re(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", Re(), iS(e);
        },
        useTransition: function() {
          return ie = "useTransition", Re(), lS();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", Re(), Xg(e, t, a);
        },
        useId: function() {
          return ie = "useId", Re(), oS();
        },
        unstable_isNewReconciler: pe
      }, w0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", Re(), Dm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", Re(), tr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", Re(), Fp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", Re(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", Re(), bm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", Re(), xm(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", Re();
          var a = Ne.current;
          Ne.current = cl;
          try {
            return Om(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", Re();
          var i = Ne.current;
          Ne.current = cl;
          try {
            return Qg(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", Re(), wm();
        },
        useState: function(e) {
          ie = "useState", Re();
          var t = Ne.current;
          Ne.current = cl;
          try {
            return Kg(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", Re(), _m();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", Re(), s0(e);
        },
        useTransition: function() {
          return ie = "useTransition", Re(), d0();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", Re(), Sm(e, t);
        },
        useId: function() {
          return ie = "useId", Re(), km();
        },
        unstable_isNewReconciler: pe
      }, C0 = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", Re(), Dm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", Re(), tr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", Re(), Fp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", Re(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", Re(), bm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", Re(), xm(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", Re();
          var a = Ne.current;
          Ne.current = Lm;
          try {
            return Om(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", Re();
          var i = Ne.current;
          Ne.current = Lm;
          try {
            return qg(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", Re(), wm();
        },
        useState: function(e) {
          ie = "useState", Re();
          var t = Ne.current;
          Ne.current = Lm;
          try {
            return Jg(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", Re(), _m();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", Re(), c0(e);
        },
        useTransition: function() {
          return ie = "useTransition", Re(), p0();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", Re(), Sm(e, t);
        },
        useId: function() {
          return ie = "useId", Re(), km();
        },
        unstable_isNewReconciler: pe
      }, Jl = {
        readContext: function(e) {
          return uS(), tr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", ot(), $t(), rS(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", ot(), $t(), tr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", ot(), $t(), Tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", ot(), $t(), nS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", ot(), $t(), eS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", ot(), $t(), tS(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", ot(), $t();
          var a = Ne.current;
          Ne.current = Jl;
          try {
            return aS(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", ot(), $t();
          var i = Ne.current;
          Ne.current = Jl;
          try {
            return Wg(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", ot(), $t(), Zg(e);
        },
        useState: function(e) {
          ie = "useState", ot(), $t();
          var t = Ne.current;
          Ne.current = Jl;
          try {
            return Em(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", ot(), $t(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", ot(), $t(), iS(e);
        },
        useTransition: function() {
          return ie = "useTransition", ot(), $t(), lS();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", ot(), $t(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", ot(), $t(), Xg(e, t, a);
        },
        useId: function() {
          return ie = "useId", ot(), $t(), oS();
        },
        unstable_isNewReconciler: pe
      }, cl = {
        readContext: function(e) {
          return uS(), tr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", ot(), Re(), Dm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", ot(), Re(), tr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", ot(), Re(), Fp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", ot(), Re(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", ot(), Re(), bm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", ot(), Re(), xm(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", ot(), Re();
          var a = Ne.current;
          Ne.current = cl;
          try {
            return Om(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", ot(), Re();
          var i = Ne.current;
          Ne.current = cl;
          try {
            return Qg(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", ot(), Re(), wm();
        },
        useState: function(e) {
          ie = "useState", ot(), Re();
          var t = Ne.current;
          Ne.current = cl;
          try {
            return Kg(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", ot(), Re(), _m();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", ot(), Re(), s0(e);
        },
        useTransition: function() {
          return ie = "useTransition", ot(), Re(), d0();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", ot(), Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", ot(), Re(), Sm(e, t);
        },
        useId: function() {
          return ie = "useId", ot(), Re(), km();
        },
        unstable_isNewReconciler: pe
      }, Lm = {
        readContext: function(e) {
          return uS(), tr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", ot(), Re(), Dm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", ot(), Re(), tr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", ot(), Re(), Fp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", ot(), Re(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", ot(), Re(), bm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", ot(), Re(), xm(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", ot(), Re();
          var a = Ne.current;
          Ne.current = cl;
          try {
            return Om(e, t);
          } finally {
            Ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", ot(), Re();
          var i = Ne.current;
          Ne.current = cl;
          try {
            return qg(e, t, a);
          } finally {
            Ne.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", ot(), Re(), wm();
        },
        useState: function(e) {
          ie = "useState", ot(), Re();
          var t = Ne.current;
          Ne.current = cl;
          try {
            return Jg(e);
          } finally {
            Ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", ot(), Re(), _m();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", ot(), Re(), c0(e);
        },
        useTransition: function() {
          return ie = "useTransition", ot(), Re(), p0();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", ot(), Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", ot(), Re(), Sm(e, t);
        },
        useId: function() {
          return ie = "useId", ot(), Re(), km();
        },
        unstable_isNewReconciler: pe
      };
    }
    var $u = u.unstable_now, T0 = 0, zm = -1, jp = -1, Nm = -1, sS = !1, Am = !1;
    function b0() {
      return sS;
    }
    function QR() {
      Am = !0;
    }
    function qR() {
      sS = !1, Am = !1;
    }
    function XR() {
      sS = Am, Am = !1;
    }
    function x0() {
      return T0;
    }
    function R0() {
      T0 = $u();
    }
    function cS(e) {
      jp = $u(), e.actualStartTime < 0 && (e.actualStartTime = $u());
    }
    function _0(e) {
      jp = -1;
    }
    function Pm(e, t) {
      if (jp >= 0) {
        var a = $u() - jp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), jp = -1;
      }
    }
    function Zl(e) {
      if (zm >= 0) {
        var t = $u() - zm;
        zm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case O:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case oe:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function fS(e) {
      if (Nm >= 0) {
        var t = $u() - Nm;
        Nm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case O:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case oe:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function eo() {
      zm = $u();
    }
    function dS() {
      Nm = $u();
    }
    function pS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function fl(e, t) {
      if (e && e.defaultProps) {
        var a = vt({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var vS = {}, hS, mS, yS, gS, SS, D0, Um, ES, wS, CS, Hp;
    {
      hS = /* @__PURE__ */ new Set(), mS = /* @__PURE__ */ new Set(), yS = /* @__PURE__ */ new Set(), gS = /* @__PURE__ */ new Set(), ES = /* @__PURE__ */ new Set(), SS = /* @__PURE__ */ new Set(), wS = /* @__PURE__ */ new Set(), CS = /* @__PURE__ */ new Set(), Hp = /* @__PURE__ */ new Set();
      var O0 = /* @__PURE__ */ new Set();
      Um = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          O0.has(a) || (O0.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, D0 = function(e, t) {
        if (t === void 0) {
          var a = zt(e) || "Component";
          SS.has(a) || (SS.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(vS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(vS);
    }
    function TS(e, t, a, i) {
      var o = e.memoizedState, c = a(i, o);
      {
        if (e.mode & Kt) {
          yn(!0);
          try {
            c = a(i, o);
          } finally {
            yn(!1);
          }
        }
        D0(t, c);
      }
      var v = c == null ? o : vt({}, o, c);
      if (e.memoizedState = v, e.lanes === ce) {
        var y = e.updateQueue;
        y.baseState = v;
      }
    }
    var bS = {
      isMounted: $v,
      enqueueSetState: function(e, t, a) {
        var i = Su(e), o = Ca(), c = Qu(i), v = Go(o, c);
        v.payload = t, a != null && (Um(a, "setState"), v.callback = a);
        var y = Hu(i, v, c);
        y !== null && (yr(y, i, c, o), dm(y, i, c)), ws(i, c);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Su(e), o = Ca(), c = Qu(i), v = Go(o, c);
        v.tag = Gw, v.payload = t, a != null && (Um(a, "replaceState"), v.callback = a);
        var y = Hu(i, v, c);
        y !== null && (yr(y, i, c, o), dm(y, i, c)), ws(i, c);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Su(e), i = Ca(), o = Qu(a), c = Go(i, o);
        c.tag = sm, t != null && (Um(t, "forceUpdate"), c.callback = t);
        var v = Hu(a, c, o);
        v !== null && (yr(v, a, o, i), dm(v, a, o)), Vc(a, o);
      }
    };
    function k0(e, t, a, i, o, c, v) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        var w = y.shouldComponentUpdate(i, c, v);
        {
          if (e.mode & Kt) {
            yn(!0);
            try {
              w = y.shouldComponentUpdate(i, c, v);
            } finally {
              yn(!1);
            }
          }
          w === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", zt(t) || "Component");
        }
        return w;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !je(a, i) || !je(o, c) : !0;
    }
    function KR(e, t, a) {
      var i = e.stateNode;
      {
        var o = zt(t) || "Component", c = i.render;
        c || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), t.childContextTypes && !Hp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Kt) === We && (Hp.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), t.contextTypes && !Hp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Kt) === We && (Hp.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !wS.has(t) && (wS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", zt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var v = i.props !== a;
        i.props !== void 0 && v && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !yS.has(t) && (yS.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", zt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var y = i.state;
        y && (typeof y != "object" || gt(y)) && g("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function M0(e, t) {
      t.updater = bS, e.stateNode = t, Eo(t, e), t._reactInternalInstance = vS;
    }
    function L0(e, t, a) {
      var i = !1, o = si, c = si, v = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === A && v._context === void 0
        );
        if (!y && !CS.has(t)) {
          CS.add(t);
          var w = "";
          v === void 0 ? w = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? w = " However, it is set to a " + typeof v + "." : v.$$typeof === gi ? w = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? w = " Did you accidentally pass the Context.Consumer instead?" : w = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", zt(t) || "Component", w);
        }
      }
      if (typeof v == "object" && v !== null)
        c = tr(v);
      else {
        o = Mf(e, t, !0);
        var x = t.contextTypes;
        i = x != null, c = i ? Lf(e, o) : si;
      }
      var _ = new t(a, c);
      if (e.mode & Kt) {
        yn(!0);
        try {
          _ = new t(a, c);
        } finally {
          yn(!1);
        }
      }
      var j = e.memoizedState = _.state !== null && _.state !== void 0 ? _.state : null;
      M0(e, _);
      {
        if (typeof t.getDerivedStateFromProps == "function" && j === null) {
          var U = zt(t) || "Component";
          mS.has(U) || (mS.add(U), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", U, _.state === null ? "null" : "undefined", U));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof _.getSnapshotBeforeUpdate == "function") {
          var Q = null, K = null, ne = null;
          if (typeof _.componentWillMount == "function" && _.componentWillMount.__suppressDeprecationWarning !== !0 ? Q = "componentWillMount" : typeof _.UNSAFE_componentWillMount == "function" && (Q = "UNSAFE_componentWillMount"), typeof _.componentWillReceiveProps == "function" && _.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? K = "componentWillReceiveProps" : typeof _.UNSAFE_componentWillReceiveProps == "function" && (K = "UNSAFE_componentWillReceiveProps"), typeof _.componentWillUpdate == "function" && _.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ne = "componentWillUpdate" : typeof _.UNSAFE_componentWillUpdate == "function" && (ne = "UNSAFE_componentWillUpdate"), Q !== null || K !== null || ne !== null) {
            var ke = zt(t) || "Component", Xe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            gS.has(ke) || (gS.add(ke), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ke, Xe, Q !== null ? `
  ` + Q : "", K !== null ? `
  ` + K : "", ne !== null ? `
  ` + ne : ""));
          }
        }
      }
      return i && ww(e, o, c), _;
    }
    function JR(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", it(e) || "Component"), bS.enqueueReplaceState(t, t.state, null));
    }
    function z0(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var c = it(e) || "Component";
          hS.has(c) || (hS.add(c), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", c));
        }
        bS.enqueueReplaceState(t, t.state, null);
      }
    }
    function xS(e, t, a, i) {
      KR(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = {}, Ng(e);
      var c = t.contextType;
      if (typeof c == "object" && c !== null)
        o.context = tr(c);
      else {
        var v = Mf(e, t, !0);
        o.context = Lf(e, v);
      }
      {
        if (o.state === a) {
          var y = zt(t) || "Component";
          ES.has(y) || (ES.add(y), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & Kt && ul.recordLegacyContextWarning(e, o), ul.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var w = t.getDerivedStateFromProps;
      if (typeof w == "function" && (TS(e, t, w, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (JR(e, o), pm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var x = Ot;
        x |= Ki, (e.mode & Ft) !== We && (x |= Ll), e.flags |= x;
      }
    }
    function ZR(e, t, a, i) {
      var o = e.stateNode, c = e.memoizedProps;
      o.props = c;
      var v = o.context, y = t.contextType, w = si;
      if (typeof y == "object" && y !== null)
        w = tr(y);
      else {
        var x = Mf(e, t, !0);
        w = Lf(e, x);
      }
      var _ = t.getDerivedStateFromProps, j = typeof _ == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !j && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (c !== a || v !== w) && z0(e, o, a, w), Qw();
      var U = e.memoizedState, Q = o.state = U;
      if (pm(e, a, o, i), Q = e.memoizedState, c === a && U === Q && !Qh() && !vm()) {
        if (typeof o.componentDidMount == "function") {
          var K = Ot;
          K |= Ki, (e.mode & Ft) !== We && (K |= Ll), e.flags |= K;
        }
        return !1;
      }
      typeof _ == "function" && (TS(e, t, _, a), Q = e.memoizedState);
      var ne = vm() || k0(e, t, c, a, U, Q, w);
      if (ne) {
        if (!j && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var ke = Ot;
          ke |= Ki, (e.mode & Ft) !== We && (ke |= Ll), e.flags |= ke;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var Xe = Ot;
          Xe |= Ki, (e.mode & Ft) !== We && (Xe |= Ll), e.flags |= Xe;
        }
        e.memoizedProps = a, e.memoizedState = Q;
      }
      return o.props = a, o.state = Q, o.context = w, ne;
    }
    function e1(e, t, a, i, o) {
      var c = t.stateNode;
      Ww(e, t);
      var v = t.memoizedProps, y = t.type === t.elementType ? v : fl(t.type, v);
      c.props = y;
      var w = t.pendingProps, x = c.context, _ = a.contextType, j = si;
      if (typeof _ == "object" && _ !== null)
        j = tr(_);
      else {
        var U = Mf(t, a, !0);
        j = Lf(t, U);
      }
      var Q = a.getDerivedStateFromProps, K = typeof Q == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !K && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (v !== w || x !== j) && z0(t, c, i, j), Qw();
      var ne = t.memoizedState, ke = c.state = ne;
      if (pm(t, i, c, o), ke = t.memoizedState, v === w && ne === ke && !Qh() && !vm() && !Ce)
        return typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Ot), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Yn), !1;
      typeof Q == "function" && (TS(t, a, Q, i), ke = t.memoizedState);
      var Xe = vm() || k0(t, a, y, i, ne, ke, j) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ce;
      return Xe ? (!K && (typeof c.UNSAFE_componentWillUpdate == "function" || typeof c.componentWillUpdate == "function") && (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, ke, j), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(i, ke, j)), typeof c.componentDidUpdate == "function" && (t.flags |= Ot), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= Yn)) : (typeof c.componentDidUpdate == "function" && (v !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Ot), typeof c.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || ne !== e.memoizedState) && (t.flags |= Yn), t.memoizedProps = i, t.memoizedState = ke), c.props = i, c.state = ke, c.context = j, Xe;
    }
    function lc(e, t) {
      return {
        value: e,
        source: t,
        stack: Yi(t),
        digest: null
      };
    }
    function RS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function t1(e, t) {
      return !0;
    }
    function _S(e, t) {
      try {
        var a = t1(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, c = t.stack, v = c !== null ? c : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === D)
            return;
          console.error(i);
        }
        var y = o ? it(o) : null, w = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", x;
        if (e.tag === O)
          x = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var _ = it(e) || "Anonymous";
          x = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + _ + ".");
        }
        var j = w + `
` + v + `

` + ("" + x);
        console.error(j);
      } catch (U) {
        setTimeout(function() {
          throw U;
        });
      }
    }
    var n1 = typeof WeakMap == "function" ? WeakMap : Map;
    function N0(e, t, a) {
      var i = Go(en, a);
      i.tag = Lg, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        Q_(o), _S(e, t);
      }, i;
    }
    function DS(e, t, a) {
      var i = Go(en, a);
      i.tag = Lg;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var c = t.value;
        i.payload = function() {
          return o(c);
        }, i.callback = function() {
          YC(e), _S(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (i.callback = function() {
        YC(e), _S(e, t), typeof o != "function" && G_(this);
        var w = t.value, x = t.stack;
        this.componentDidCatch(w, {
          componentStack: x !== null ? x : ""
        }), typeof o != "function" && (ta(e.lanes, nt) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", it(e) || "Unknown"));
      }), i;
    }
    function A0(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new n1(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var c = q_.bind(null, e, t, a);
        Zr && rv(e, a), t.then(c, c);
      }
    }
    function r1(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var c = /* @__PURE__ */ new Set();
        c.add(a), e.updateQueue = c;
      } else
        o.add(a);
    }
    function a1(e, t) {
      var a = e.tag;
      if ((e.mode & Ct) === We && (a === C || a === Z || a === ue)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function P0(e) {
      var t = e;
      do {
        if (t.tag === le && FR(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function U0(e, t, a, i, o) {
      if ((e.mode & Ct) === We) {
        if (e === t)
          e.flags |= Kn;
        else {
          if (e.flags |= Ye, a.flags |= zc, a.flags &= -52805, a.tag === D) {
            var c = a.alternate;
            if (c === null)
              a.tag = fe;
            else {
              var v = Go(en, nt);
              v.tag = sm, Hu(a, v, nt);
            }
          }
          a.lanes = ft(a.lanes, nt);
        }
        return e;
      }
      return e.flags |= Kn, e.lanes = o, e;
    }
    function i1(e, t, a, i, o) {
      if (a.flags |= hs, Zr && rv(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var c = i;
        a1(a), Ur() && a.mode & Ct && Dw();
        var v = P0(t);
        if (v !== null) {
          v.flags &= ~Cr, U0(v, t, a, e, o), v.mode & Ct && A0(e, c, o), r1(v, e, c);
          return;
        } else {
          if (!Jv(o)) {
            A0(e, c, o), oE();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = y;
        }
      } else if (Ur() && a.mode & Ct) {
        Dw();
        var w = P0(t);
        if (w !== null) {
          (w.flags & Kn) === Ge && (w.flags |= Cr), U0(w, t, a, e, o), Eg(lc(i, a));
          return;
        }
      }
      i = lc(i, a), F_(i);
      var x = t;
      do {
        switch (x.tag) {
          case O: {
            var _ = i;
            x.flags |= Kn;
            var j = ks(o);
            x.lanes = ft(x.lanes, j);
            var U = N0(x, _, j);
            Ag(x, U);
            return;
          }
          case D:
            var Q = i, K = x.type, ne = x.stateNode;
            if ((x.flags & Ye) === Ge && (typeof K.getDerivedStateFromError == "function" || ne !== null && typeof ne.componentDidCatch == "function" && !PC(ne))) {
              x.flags |= Kn;
              var ke = ks(o);
              x.lanes = ft(x.lanes, ke);
              var Xe = DS(x, Q, ke);
              Ag(x, Xe);
              return;
            }
            break;
        }
        x = x.return;
      } while (x !== null);
    }
    function l1() {
      return null;
    }
    var Vp = d.ReactCurrentOwner, dl = !1, OS, Ip, kS, MS, LS, oc, zS, Fm, Bp;
    OS = {}, Ip = {}, kS = {}, MS = {}, LS = {}, oc = !1, zS = {}, Fm = {}, Bp = {};
    function Ea(e, t, a, i) {
      e === null ? t.child = Hw(t, null, a, i) : t.child = Pf(t, e.child, a, i);
    }
    function o1(e, t, a, i) {
      t.child = Pf(t, e.child, null, i), t.child = Pf(t, null, a, i);
    }
    function F0(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && ll(
          c,
          i,
          // Resolved props
          "prop",
          zt(a)
        );
      }
      var v = a.render, y = t.ref, w, x;
      Ff(t, o), ma(t);
      {
        if (Vp.current = t, $n(!0), w = $f(e, t, v, i, y, o), x = Yf(), t.mode & Kt) {
          yn(!0);
          try {
            w = $f(e, t, v, i, y, o), x = Yf();
          } finally {
            yn(!1);
          }
        }
        $n(!1);
      }
      return ya(), e !== null && !dl ? (e0(e, t, o), Wo(e, t, o)) : (Ur() && x && vg(t), t.flags |= ai, Ea(e, t, w, o), t.child);
    }
    function j0(e, t, a, i, o) {
      if (e === null) {
        var c = a.type;
        if (dD(c) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = c;
          return v = Zf(c), t.tag = ue, t.type = v, PS(t, c), H0(e, t, v, i, o);
        }
        {
          var y = c.propTypes;
          if (y && ll(
            y,
            i,
            // Resolved props
            "prop",
            zt(c)
          ), a.defaultProps !== void 0) {
            var w = zt(c) || "Unknown";
            Bp[w] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", w), Bp[w] = !0);
          }
        }
        var x = gE(a.type, null, i, t, t.mode, o);
        return x.ref = t.ref, x.return = t, t.child = x, x;
      }
      {
        var _ = a.type, j = _.propTypes;
        j && ll(
          j,
          i,
          // Resolved props
          "prop",
          zt(_)
        );
      }
      var U = e.child, Q = IS(e, o);
      if (!Q) {
        var K = U.memoizedProps, ne = a.compare;
        if (ne = ne !== null ? ne : je, ne(K, i) && e.ref === t.ref)
          return Wo(e, t, o);
      }
      t.flags |= ai;
      var ke = dc(U, i);
      return ke.ref = t.ref, ke.return = t, t.child = ke, ke;
    }
    function H0(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var c = t.elementType;
        if (c.$$typeof === lt) {
          var v = c, y = v._payload, w = v._init;
          try {
            c = w(y);
          } catch {
            c = null;
          }
          var x = c && c.propTypes;
          x && ll(
            x,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            zt(c)
          );
        }
      }
      if (e !== null) {
        var _ = e.memoizedProps;
        if (je(_, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (dl = !1, t.pendingProps = i = _, IS(e, o))
            (e.flags & zc) !== Ge && (dl = !0);
          else return t.lanes = e.lanes, Wo(e, t, o);
      }
      return NS(e, t, a, i, o);
    }
    function V0(e, t, a) {
      var i = t.pendingProps, o = i.children, c = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || Se)
        if ((t.mode & Ct) === We) {
          var v = {
            baseLanes: ce,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, Km(t, a);
        } else if (ta(a, ea)) {
          var j = {
            baseLanes: ce,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = j;
          var U = c !== null ? c.baseLanes : a;
          Km(t, U);
        } else {
          var y = null, w;
          if (c !== null) {
            var x = c.baseLanes;
            w = ft(x, a);
          } else
            w = a;
          t.lanes = t.childLanes = ea;
          var _ = {
            baseLanes: w,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = _, t.updateQueue = null, Km(t, w), null;
        }
      else {
        var Q;
        c !== null ? (Q = ft(c.baseLanes, a), t.memoizedState = null) : Q = a, Km(t, Q);
      }
      return Ea(e, t, o, a), t.child;
    }
    function u1(e, t, a) {
      var i = t.pendingProps;
      return Ea(e, t, i, a), t.child;
    }
    function s1(e, t, a) {
      var i = t.pendingProps.children;
      return Ea(e, t, i, a), t.child;
    }
    function c1(e, t, a) {
      {
        t.flags |= Ot;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, c = o.children;
      return Ea(e, t, c, a), t.child;
    }
    function I0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= En, t.flags |= wu);
    }
    function NS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var c = a.propTypes;
        c && ll(
          c,
          i,
          // Resolved props
          "prop",
          zt(a)
        );
      }
      var v;
      {
        var y = Mf(t, a, !0);
        v = Lf(t, y);
      }
      var w, x;
      Ff(t, o), ma(t);
      {
        if (Vp.current = t, $n(!0), w = $f(e, t, a, i, v, o), x = Yf(), t.mode & Kt) {
          yn(!0);
          try {
            w = $f(e, t, a, i, v, o), x = Yf();
          } finally {
            yn(!1);
          }
        }
        $n(!1);
      }
      return ya(), e !== null && !dl ? (e0(e, t, o), Wo(e, t, o)) : (Ur() && x && vg(t), t.flags |= ai, Ea(e, t, w, o), t.child);
    }
    function B0(e, t, a, i, o) {
      {
        switch (_D(t)) {
          case !1: {
            var c = t.stateNode, v = t.type, y = new v(t.memoizedProps, c.context), w = y.state;
            c.updater.enqueueSetState(c, w, null);
            break;
          }
          case !0: {
            t.flags |= Ye, t.flags |= Kn;
            var x = new Error("Simulated error coming from DevTools"), _ = ks(o);
            t.lanes = ft(t.lanes, _);
            var j = DS(t, lc(x, t), _);
            Ag(t, j);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var U = a.propTypes;
          U && ll(
            U,
            i,
            // Resolved props
            "prop",
            zt(a)
          );
        }
      }
      var Q;
      ql(a) ? (Q = !0, Xh(t)) : Q = !1, Ff(t, o);
      var K = t.stateNode, ne;
      K === null ? (Hm(e, t), L0(t, a, i), xS(t, a, i, o), ne = !0) : e === null ? ne = ZR(t, a, i, o) : ne = e1(e, t, a, i, o);
      var ke = AS(e, t, a, ne, Q, o);
      {
        var Xe = t.stateNode;
        ne && Xe.props !== i && (oc || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", it(t) || "a component"), oc = !0);
      }
      return ke;
    }
    function AS(e, t, a, i, o, c) {
      I0(e, t);
      var v = (t.flags & Ye) !== Ge;
      if (!i && !v)
        return o && bw(t, a, !1), Wo(e, t, c);
      var y = t.stateNode;
      Vp.current = t;
      var w;
      if (v && typeof a.getDerivedStateFromError != "function")
        w = null, _0();
      else {
        ma(t);
        {
          if ($n(!0), w = y.render(), t.mode & Kt) {
            yn(!0);
            try {
              y.render();
            } finally {
              yn(!1);
            }
          }
          $n(!1);
        }
        ya();
      }
      return t.flags |= ai, e !== null && v ? o1(e, t, w, c) : Ea(e, t, w, c), t.memoizedState = y.state, o && bw(t, a, !0), t.child;
    }
    function $0(e) {
      var t = e.stateNode;
      t.pendingContext ? Cw(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Cw(e, t.context, !1), Pg(e, t.containerInfo);
    }
    function f1(e, t, a) {
      if ($0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, c = o.element;
      Ww(e, t), pm(t, i, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var y = v.element;
      if (o.isDehydrated) {
        var w = {
          element: y,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, x = t.updateQueue;
        if (x.baseState = w, t.memoizedState = w, t.flags & Cr) {
          var _ = lc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Y0(e, t, y, a, _);
        } else if (y !== c) {
          var j = lc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Y0(e, t, y, a, j);
        } else {
          vR(t);
          var U = Hw(t, null, y, a);
          t.child = U;
          for (var Q = U; Q; )
            Q.flags = Q.flags & ~mn | Xr, Q = Q.sibling;
        }
      } else {
        if (Af(), y === c)
          return Wo(e, t, a);
        Ea(e, t, y, a);
      }
      return t.child;
    }
    function Y0(e, t, a, i, o) {
      return Af(), Eg(o), t.flags |= Cr, Ea(e, t, a, i), t.child;
    }
    function d1(e, t, a) {
      Kw(t), e === null && Sg(t);
      var i = t.type, o = t.pendingProps, c = e !== null ? e.memoizedProps : null, v = o.children, y = eg(i, o);
      return y ? v = null : c !== null && eg(i, c) && (t.flags |= La), I0(e, t), Ea(e, t, v, a), t.child;
    }
    function p1(e, t) {
      return e === null && Sg(t), null;
    }
    function v1(e, t, a, i) {
      Hm(e, t);
      var o = t.pendingProps, c = a, v = c._payload, y = c._init, w = y(v);
      t.type = w;
      var x = t.tag = pD(w), _ = fl(w, o), j;
      switch (x) {
        case C:
          return PS(t, w), t.type = w = Zf(w), j = NS(null, t, w, _, i), j;
        case D:
          return t.type = w = dE(w), j = B0(null, t, w, _, i), j;
        case Z:
          return t.type = w = pE(w), j = F0(null, t, w, _, i), j;
        case Me: {
          if (t.type !== t.elementType) {
            var U = w.propTypes;
            U && ll(
              U,
              _,
              // Resolved for outer only
              "prop",
              zt(w)
            );
          }
          return j = j0(
            null,
            t,
            w,
            fl(w.type, _),
            // The inner type can have defaults too
            i
          ), j;
        }
      }
      var Q = "";
      throw w !== null && typeof w == "object" && w.$$typeof === lt && (Q = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + w + ". " + ("Lazy element type must resolve to a class or function." + Q));
    }
    function h1(e, t, a, i, o) {
      Hm(e, t), t.tag = D;
      var c;
      return ql(a) ? (c = !0, Xh(t)) : c = !1, Ff(t, o), L0(t, a, i), xS(t, a, i, o), AS(null, t, a, !0, c, o);
    }
    function m1(e, t, a, i) {
      Hm(e, t);
      var o = t.pendingProps, c;
      {
        var v = Mf(t, a, !1);
        c = Lf(t, v);
      }
      Ff(t, i);
      var y, w;
      ma(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var x = zt(a) || "Unknown";
          OS[x] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", x, x), OS[x] = !0);
        }
        t.mode & Kt && ul.recordLegacyContextWarning(t, null), $n(!0), Vp.current = t, y = $f(null, t, a, o, c, i), w = Yf(), $n(!1);
      }
      if (ya(), t.flags |= ai, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var _ = zt(a) || "Unknown";
        Ip[_] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Ip[_] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var j = zt(a) || "Unknown";
          Ip[j] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", j, j, j), Ip[j] = !0);
        }
        t.tag = D, t.memoizedState = null, t.updateQueue = null;
        var U = !1;
        return ql(a) ? (U = !0, Xh(t)) : U = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, Ng(t), M0(t, y), xS(t, a, o, i), AS(null, t, a, !0, U, i);
      } else {
        if (t.tag = C, t.mode & Kt) {
          yn(!0);
          try {
            y = $f(null, t, a, o, c, i), w = Yf();
          } finally {
            yn(!1);
          }
        }
        return Ur() && w && vg(t), Ea(null, t, y, i), PS(t, a), t.child;
      }
    }
    function PS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = kr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", c = e._debugSource;
          c && (o = c.fileName + ":" + c.lineNumber), LS[o] || (LS[o] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var v = zt(t) || "Unknown";
          Bp[v] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", v), Bp[v] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = zt(t) || "Unknown";
          MS[y] || (g("%s: Function components do not support getDerivedStateFromProps.", y), MS[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var w = zt(t) || "Unknown";
          kS[w] || (g("%s: Function components do not support contextType.", w), kS[w] = !0);
        }
      }
    }
    var US = {
      dehydrated: null,
      treeContext: null,
      retryLane: At
    };
    function FS(e) {
      return {
        baseLanes: e,
        cachePool: l1(),
        transitions: null
      };
    }
    function y1(e, t) {
      var a = null;
      return {
        baseLanes: ft(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function g1(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return jg(e, Lp);
    }
    function S1(e, t) {
      return Ms(e.childLanes, t);
    }
    function G0(e, t, a) {
      var i = t.pendingProps;
      DD(t) && (t.flags |= Ye);
      var o = sl.current, c = !1, v = (t.flags & Ye) !== Ge;
      if (v || g1(o, e) ? (c = !0, t.flags &= ~Ye) : (e === null || e.memoizedState !== null) && (o = UR(o, Zw)), o = Hf(o), Iu(t, o), e === null) {
        Sg(t);
        var y = t.memoizedState;
        if (y !== null) {
          var w = y.dehydrated;
          if (w !== null)
            return b1(t, w);
        }
        var x = i.children, _ = i.fallback;
        if (c) {
          var j = E1(t, x, _, a), U = t.child;
          return U.memoizedState = FS(a), t.memoizedState = US, j;
        } else
          return jS(t, x);
      } else {
        var Q = e.memoizedState;
        if (Q !== null) {
          var K = Q.dehydrated;
          if (K !== null)
            return x1(e, t, v, i, K, Q, a);
        }
        if (c) {
          var ne = i.fallback, ke = i.children, Xe = C1(e, t, ke, ne, a), $e = t.child, Lt = e.child.memoizedState;
          return $e.memoizedState = Lt === null ? FS(a) : y1(Lt, a), $e.childLanes = S1(e, a), t.memoizedState = US, Xe;
        } else {
          var _t = i.children, $ = w1(e, t, _t, a);
          return t.memoizedState = null, $;
        }
      }
    }
    function jS(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, c = HS(o, i);
      return c.return = e, e.child = c, c;
    }
    function E1(e, t, a, i) {
      var o = e.mode, c = e.child, v = {
        mode: "hidden",
        children: t
      }, y, w;
      return (o & Ct) === We && c !== null ? (y = c, y.childLanes = ce, y.pendingProps = v, e.mode & Ut && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), w = Xu(a, o, i, null)) : (y = HS(v, o), w = Xu(a, o, i, null)), y.return = e, w.return = e, y.sibling = w, e.child = y, w;
    }
    function HS(e, t, a) {
      return WC(e, t, ce, null);
    }
    function W0(e, t) {
      return dc(e, t);
    }
    function w1(e, t, a, i) {
      var o = e.child, c = o.sibling, v = W0(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ct) === We && (v.lanes = i), v.return = t, v.sibling = null, c !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [c], t.flags |= Ma) : y.push(c);
      }
      return t.child = v, v;
    }
    function C1(e, t, a, i, o) {
      var c = t.mode, v = e.child, y = v.sibling, w = {
        mode: "hidden",
        children: a
      }, x;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (c & Ct) === We && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var _ = t.child;
        x = _, x.childLanes = ce, x.pendingProps = w, t.mode & Ut && (x.actualDuration = 0, x.actualStartTime = -1, x.selfBaseDuration = v.selfBaseDuration, x.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        x = W0(v, w), x.subtreeFlags = v.subtreeFlags & Nn;
      var j;
      return y !== null ? j = dc(y, i) : (j = Xu(i, c, o, null), j.flags |= mn), j.return = t, x.return = t, x.sibling = j, t.child = x, j;
    }
    function jm(e, t, a, i) {
      i !== null && Eg(i), Pf(t, e.child, null, a);
      var o = t.pendingProps, c = o.children, v = jS(t, c);
      return v.flags |= mn, t.memoizedState = null, v;
    }
    function T1(e, t, a, i, o) {
      var c = t.mode, v = {
        mode: "visible",
        children: a
      }, y = HS(v, c), w = Xu(i, c, o, null);
      return w.flags |= mn, y.return = t, w.return = t, y.sibling = w, t.child = y, (t.mode & Ct) !== We && Pf(t, e.child, null, o), w;
    }
    function b1(e, t, a) {
      return (e.mode & Ct) === We ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = nt) : ag(t) ? e.lanes = Tr : e.lanes = ea, null;
    }
    function x1(e, t, a, i, o, c, v) {
      if (a)
        if (t.flags & Cr) {
          t.flags &= ~Cr;
          var $ = RS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return jm(e, t, v, $);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ye, null;
          var re = i.children, Y = i.fallback, ge = T1(e, t, re, Y, v), Ae = t.child;
          return Ae.memoizedState = FS(v), t.memoizedState = US, ge;
        }
      else {
        if (dR(), (t.mode & Ct) === We)
          return jm(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (ag(o)) {
          var y, w, x;
          {
            var _ = Ox(o);
            y = _.digest, w = _.message, x = _.stack;
          }
          var j;
          w ? j = new Error(w) : j = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var U = RS(j, y, x);
          return jm(e, t, v, U);
        }
        var Q = ta(v, e.childLanes);
        if (dl || Q) {
          var K = Xm();
          if (K !== null) {
            var ne = Gd(K, v);
            if (ne !== At && ne !== c.retryLane) {
              c.retryLane = ne;
              var ke = en;
              Va(e, ne), yr(K, e, ne, ke);
            }
          }
          oE();
          var Xe = RS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return jm(e, t, v, Xe);
        } else if (mw(o)) {
          t.flags |= Ye, t.child = e.child;
          var $e = X_.bind(null, e);
          return kx(o, $e), null;
        } else {
          hR(t, o, c.treeContext);
          var Lt = i.children, _t = jS(t, Lt);
          return _t.flags |= Xr, _t;
        }
      }
    }
    function Q0(e, t, a) {
      e.lanes = ft(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ft(i.lanes, t)), kg(e.return, t, a);
    }
    function R1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === le) {
          var o = i.memoizedState;
          o !== null && Q0(i, a, e);
        } else if (i.tag === me)
          Q0(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function _1(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && ym(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function D1(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !zS[e])
        if (zS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function O1(e, t) {
      e !== void 0 && !Fm[e] && (e !== "collapsed" && e !== "hidden" ? (Fm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Fm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function q0(e, t) {
      {
        var a = gt(e), i = !a && typeof ct(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function k1(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (gt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!q0(e[a], a))
              return;
        } else {
          var i = ct(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var c = o.next(), v = 0; !c.done; c = o.next()) {
                if (!q0(c.value, v))
                  return;
                v++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function VS(e, t, a, i, o) {
      var c = e.memoizedState;
      c === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = i, c.tail = a, c.tailMode = o);
    }
    function X0(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, c = i.tail, v = i.children;
      D1(o), O1(c, o), k1(v, o), Ea(e, t, v, a);
      var y = sl.current, w = jg(y, Lp);
      if (w)
        y = Hg(y, Lp), t.flags |= Ye;
      else {
        var x = e !== null && (e.flags & Ye) !== Ge;
        x && R1(t, t.child, a), y = Hf(y);
      }
      if (Iu(t, y), (t.mode & Ct) === We)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var _ = _1(t.child), j;
            _ === null ? (j = t.child, t.child = null) : (j = _.sibling, _.sibling = null), VS(
              t,
              !1,
              // isBackwards
              j,
              _,
              c
            );
            break;
          }
          case "backwards": {
            var U = null, Q = t.child;
            for (t.child = null; Q !== null; ) {
              var K = Q.alternate;
              if (K !== null && ym(K) === null) {
                t.child = Q;
                break;
              }
              var ne = Q.sibling;
              Q.sibling = U, U = Q, Q = ne;
            }
            VS(
              t,
              !0,
              // isBackwards
              U,
              null,
              // last
              c
            );
            break;
          }
          case "together": {
            VS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function M1(e, t, a) {
      Pg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Pf(t, null, i, a) : Ea(e, t, i, a), t.child;
    }
    var K0 = !1;
    function L1(e, t, a) {
      var i = t.type, o = i._context, c = t.pendingProps, v = t.memoizedProps, y = c.value;
      {
        "value" in c || K0 || (K0 = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var w = t.type.propTypes;
        w && ll(w, c, "prop", "Context.Provider");
      }
      if (Bw(t, o, y), v !== null) {
        var x = v.value;
        if (he(x, y)) {
          if (v.children === c.children && !Qh())
            return Wo(e, t, a);
        } else
          DR(t, o, a);
      }
      var _ = c.children;
      return Ea(e, t, _, a), t.child;
    }
    var J0 = !1;
    function z1(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (J0 || (J0 = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, c = o.children;
      typeof c != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Ff(t, a);
      var v = tr(i);
      ma(t);
      var y;
      return Vp.current = t, $n(!0), y = c(v), $n(!1), ya(), t.flags |= ai, Ea(e, t, y, a), t.child;
    }
    function $p() {
      dl = !0;
    }
    function Hm(e, t) {
      (t.mode & Ct) === We && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mn);
    }
    function Wo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), _0(), nv(t.lanes), ta(a, t.childLanes) ? (RR(e, t), t.child) : null;
    }
    function N1(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var c = i.deletions;
        return c === null ? (i.deletions = [e], i.flags |= Ma) : c.push(e), a.flags |= mn, a;
      }
    }
    function IS(e, t) {
      var a = e.lanes;
      return !!ta(a, t);
    }
    function A1(e, t, a) {
      switch (t.tag) {
        case O:
          $0(t), t.stateNode, Af();
          break;
        case L:
          Kw(t);
          break;
        case D: {
          var i = t.type;
          ql(i) && Xh(t);
          break;
        }
        case N:
          Pg(t, t.stateNode.containerInfo);
          break;
        case te: {
          var o = t.memoizedProps.value, c = t.type._context;
          Bw(t, c, o);
          break;
        }
        case oe:
          {
            var v = ta(a, t.childLanes);
            v && (t.flags |= Ot);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case le: {
          var w = t.memoizedState;
          if (w !== null) {
            if (w.dehydrated !== null)
              return Iu(t, Hf(sl.current)), t.flags |= Ye, null;
            var x = t.child, _ = x.childLanes;
            if (ta(a, _))
              return G0(e, t, a);
            Iu(t, Hf(sl.current));
            var j = Wo(e, t, a);
            return j !== null ? j.sibling : null;
          } else
            Iu(t, Hf(sl.current));
          break;
        }
        case me: {
          var U = (e.flags & Ye) !== Ge, Q = ta(a, t.childLanes);
          if (U) {
            if (Q)
              return X0(e, t, a);
            t.flags |= Ye;
          }
          var K = t.memoizedState;
          if (K !== null && (K.rendering = null, K.tail = null, K.lastEffect = null), Iu(t, sl.current), Q)
            break;
          return null;
        }
        case Ee:
        case Qe:
          return t.lanes = ce, V0(e, t, a);
      }
      return Wo(e, t, a);
    }
    function Z0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return N1(e, t, gE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || Qh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          dl = !0;
        else {
          var c = IS(e, a);
          if (!c && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ye) === Ge)
            return dl = !1, A1(e, t, a);
          (e.flags & zc) !== Ge ? dl = !0 : dl = !1;
        }
      } else if (dl = !1, Ur() && lR(t)) {
        var v = t.index, y = oR();
        _w(t, y, v);
      }
      switch (t.lanes = ce, t.tag) {
        case M:
          return m1(e, t, t.type, a);
        case Ve: {
          var w = t.elementType;
          return v1(e, t, w, a);
        }
        case C: {
          var x = t.type, _ = t.pendingProps, j = t.elementType === x ? _ : fl(x, _);
          return NS(e, t, x, j, a);
        }
        case D: {
          var U = t.type, Q = t.pendingProps, K = t.elementType === U ? Q : fl(U, Q);
          return B0(e, t, U, K, a);
        }
        case O:
          return f1(e, t, a);
        case L:
          return d1(e, t, a);
        case J:
          return p1(e, t);
        case le:
          return G0(e, t, a);
        case N:
          return M1(e, t, a);
        case Z: {
          var ne = t.type, ke = t.pendingProps, Xe = t.elementType === ne ? ke : fl(ne, ke);
          return F0(e, t, ne, Xe, a);
        }
        case I:
          return u1(e, t, a);
        case W:
          return s1(e, t, a);
        case oe:
          return c1(e, t, a);
        case te:
          return L1(e, t, a);
        case V:
          return z1(e, t, a);
        case Me: {
          var $e = t.type, Lt = t.pendingProps, _t = fl($e, Lt);
          if (t.type !== t.elementType) {
            var $ = $e.propTypes;
            $ && ll(
              $,
              _t,
              // Resolved for outer only
              "prop",
              zt($e)
            );
          }
          return _t = fl($e.type, _t), j0(e, t, $e, _t, a);
        }
        case ue:
          return H0(e, t, t.type, t.pendingProps, a);
        case fe: {
          var re = t.type, Y = t.pendingProps, ge = t.elementType === re ? Y : fl(re, Y);
          return h1(e, t, re, ge, a);
        }
        case me:
          return X0(e, t, a);
        case be:
          break;
        case Ee:
          return V0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Gf(e) {
      e.flags |= Ot;
    }
    function eC(e) {
      e.flags |= En, e.flags |= wu;
    }
    var tC, BS, nC, rC;
    tC = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === L || o.tag === J)
          rx(e, o.stateNode);
        else if (o.tag !== N) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, BS = function(e, t) {
    }, nC = function(e, t, a, i, o) {
      var c = e.memoizedProps;
      if (c !== i) {
        var v = t.stateNode, y = Ug(), w = ix(v, a, c, i, o, y);
        t.updateQueue = w, w && Gf(t);
      }
    }, rC = function(e, t, a, i) {
      a !== i && Gf(t);
    };
    function Yp(e, t) {
      if (!Ur())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, c = null; o !== null; )
              o.alternate !== null && (c = o), o = o.sibling;
            c === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : c.sibling = null;
            break;
          }
        }
    }
    function jr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ce, i = Ge;
      if (t) {
        if ((e.mode & Ut) !== We) {
          for (var w = e.selfBaseDuration, x = e.child; x !== null; )
            a = ft(a, ft(x.lanes, x.childLanes)), i |= x.subtreeFlags & Nn, i |= x.flags & Nn, w += x.treeBaseDuration, x = x.sibling;
          e.treeBaseDuration = w;
        } else
          for (var _ = e.child; _ !== null; )
            a = ft(a, ft(_.lanes, _.childLanes)), i |= _.subtreeFlags & Nn, i |= _.flags & Nn, _.return = e, _ = _.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ut) !== We) {
          for (var o = e.actualDuration, c = e.selfBaseDuration, v = e.child; v !== null; )
            a = ft(a, ft(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, o += v.actualDuration, c += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = o, e.treeBaseDuration = c;
        } else
          for (var y = e.child; y !== null; )
            a = ft(a, ft(y.lanes, y.childLanes)), i |= y.subtreeFlags, i |= y.flags, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function P1(e, t, a) {
      if (ER() && (t.mode & Ct) !== We && (t.flags & Ye) === Ge)
        return Nw(t), Af(), t.flags |= Cr | hs | Kn, !1;
      var i = tm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (gR(t), jr(t), (t.mode & Ut) !== We) {
            var o = a !== null;
            if (o) {
              var c = t.child;
              c !== null && (t.treeBaseDuration -= c.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Af(), (t.flags & Ye) === Ge && (t.memoizedState = null), t.flags |= Ot, jr(t), (t.mode & Ut) !== We) {
            var v = a !== null;
            if (v) {
              var y = t.child;
              y !== null && (t.treeBaseDuration -= y.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return Aw(), !0;
    }
    function aC(e, t, a) {
      var i = t.pendingProps;
      switch (hg(t), t.tag) {
        case M:
        case Ve:
        case ue:
        case C:
        case Z:
        case I:
        case W:
        case oe:
        case V:
        case Me:
          return jr(t), null;
        case D: {
          var o = t.type;
          return ql(o) && qh(t), jr(t), null;
        }
        case O: {
          var c = t.stateNode;
          if (jf(t), fg(t), Ig(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), e === null || e.child === null) {
            var v = tm(t);
            if (v)
              Gf(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Cr) !== Ge) && (t.flags |= Yn, Aw());
            }
          }
          return BS(e, t), jr(t), null;
        }
        case L: {
          Fg(t);
          var w = Xw(), x = t.type;
          if (e !== null && t.stateNode != null)
            nC(e, t, x, i, w), e.ref !== t.ref && eC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return jr(t), null;
            }
            var _ = Ug(), j = tm(t);
            if (j)
              mR(t, w, _) && Gf(t);
            else {
              var U = nx(x, i, w, _, t);
              tC(U, t, !1, !1), t.stateNode = U, ax(U, x, i, w) && Gf(t);
            }
            t.ref !== null && eC(t);
          }
          return jr(t), null;
        }
        case J: {
          var Q = i;
          if (e && t.stateNode != null) {
            var K = e.memoizedProps;
            rC(e, t, K, Q);
          } else {
            if (typeof Q != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ne = Xw(), ke = Ug(), Xe = tm(t);
            Xe ? yR(t) && Gf(t) : t.stateNode = lx(Q, ne, ke, t);
          }
          return jr(t), null;
        }
        case le: {
          Vf(t);
          var $e = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Lt = P1(e, t, $e);
            if (!Lt)
              return t.flags & Kn ? t : null;
          }
          if ((t.flags & Ye) !== Ge)
            return t.lanes = a, (t.mode & Ut) !== We && pS(t), t;
          var _t = $e !== null, $ = e !== null && e.memoizedState !== null;
          if (_t !== $ && _t) {
            var re = t.child;
            if (re.flags |= zn, (t.mode & Ct) !== We) {
              var Y = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              Y || jg(sl.current, Zw) ? U_() : oE();
            }
          }
          var ge = t.updateQueue;
          if (ge !== null && (t.flags |= Ot), jr(t), (t.mode & Ut) !== We && _t) {
            var Ae = t.child;
            Ae !== null && (t.treeBaseDuration -= Ae.treeBaseDuration);
          }
          return null;
        }
        case N:
          return jf(t), BS(e, t), e === null && Zx(t.stateNode.containerInfo), jr(t), null;
        case te:
          var Le = t.type._context;
          return Og(Le, t), jr(t), null;
        case fe: {
          var rt = t.type;
          return ql(rt) && qh(t), jr(t), null;
        }
        case me: {
          Vf(t);
          var ut = t.memoizedState;
          if (ut === null)
            return jr(t), null;
          var Zt = (t.flags & Ye) !== Ge, Ht = ut.rendering;
          if (Ht === null)
            if (Zt)
              Yp(ut, !1);
            else {
              var Qn = j_() && (e === null || (e.flags & Ye) === Ge);
              if (!Qn)
                for (var Vt = t.child; Vt !== null; ) {
                  var Hn = ym(Vt);
                  if (Hn !== null) {
                    Zt = !0, t.flags |= Ye, Yp(ut, !1);
                    var ua = Hn.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= Ot), t.subtreeFlags = Ge, _R(t, a), Iu(t, Hg(sl.current, Lp)), t.child;
                  }
                  Vt = Vt.sibling;
                }
              ut.tail !== null && Gn() > xC() && (t.flags |= Ye, Zt = !0, Yp(ut, !1), t.lanes = Ud);
            }
          else {
            if (!Zt) {
              var $r = ym(Ht);
              if ($r !== null) {
                t.flags |= Ye, Zt = !0;
                var fi = $r.updateQueue;
                if (fi !== null && (t.updateQueue = fi, t.flags |= Ot), Yp(ut, !0), ut.tail === null && ut.tailMode === "hidden" && !Ht.alternate && !Ur())
                  return jr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Gn() * 2 - ut.renderingStartTime > xC() && a !== ea && (t.flags |= Ye, Zt = !0, Yp(ut, !1), t.lanes = Ud);
            }
            if (ut.isBackwards)
              Ht.sibling = t.child, t.child = Ht;
            else {
              var Ta = ut.last;
              Ta !== null ? Ta.sibling = Ht : t.child = Ht, ut.last = Ht;
            }
          }
          if (ut.tail !== null) {
            var ba = ut.tail;
            ut.rendering = ba, ut.tail = ba.sibling, ut.renderingStartTime = Gn(), ba.sibling = null;
            var sa = sl.current;
            return Zt ? sa = Hg(sa, Lp) : sa = Hf(sa), Iu(t, sa), ba;
          }
          return jr(t), null;
        }
        case be:
          break;
        case Ee:
        case Qe: {
          lE(t);
          var Jo = t.memoizedState, ed = Jo !== null;
          if (e !== null) {
            var ov = e.memoizedState, ro = ov !== null;
            ro !== ed && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Se && (t.flags |= zn);
          }
          return !ed || (t.mode & Ct) === We ? jr(t) : ta(no, ea) && (jr(t), t.subtreeFlags & (mn | Ot) && (t.flags |= zn)), null;
        }
        case dt:
          return null;
        case bt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function U1(e, t, a) {
      switch (hg(t), t.tag) {
        case D: {
          var i = t.type;
          ql(i) && qh(t);
          var o = t.flags;
          return o & Kn ? (t.flags = o & ~Kn | Ye, (t.mode & Ut) !== We && pS(t), t) : null;
        }
        case O: {
          t.stateNode, jf(t), fg(t), Ig();
          var c = t.flags;
          return (c & Kn) !== Ge && (c & Ye) === Ge ? (t.flags = c & ~Kn | Ye, t) : null;
        }
        case L:
          return Fg(t), null;
        case le: {
          Vf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Af();
          }
          var y = t.flags;
          return y & Kn ? (t.flags = y & ~Kn | Ye, (t.mode & Ut) !== We && pS(t), t) : null;
        }
        case me:
          return Vf(t), null;
        case N:
          return jf(t), null;
        case te:
          var w = t.type._context;
          return Og(w, t), null;
        case Ee:
        case Qe:
          return lE(t), null;
        case dt:
          return null;
        default:
          return null;
      }
    }
    function iC(e, t, a) {
      switch (hg(t), t.tag) {
        case D: {
          var i = t.type.childContextTypes;
          i != null && qh(t);
          break;
        }
        case O: {
          t.stateNode, jf(t), fg(t), Ig();
          break;
        }
        case L: {
          Fg(t);
          break;
        }
        case N:
          jf(t);
          break;
        case le:
          Vf(t);
          break;
        case me:
          Vf(t);
          break;
        case te:
          var o = t.type._context;
          Og(o, t);
          break;
        case Ee:
        case Qe:
          lE(t);
          break;
      }
    }
    var lC = null;
    lC = /* @__PURE__ */ new Set();
    var Vm = !1, Hr = !1, F1 = typeof WeakSet == "function" ? WeakSet : Set, He = null, Wf = null, Qf = null;
    function j1(e) {
      Ml(null, function() {
        throw e;
      }), vs();
    }
    var H1 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ut)
        try {
          eo(), t.componentWillUnmount();
        } finally {
          Zl(e);
        }
      else
        t.componentWillUnmount();
    };
    function oC(e, t) {
      try {
        Yu(fr, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function $S(e, t, a) {
      try {
        H1(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function V1(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function uC(e, t) {
      try {
        cC(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function qf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (tt && St && e.mode & Ut)
              try {
                eo(), i = a(null);
              } finally {
                Zl(e);
              }
            else
              i = a(null);
          } catch (o) {
            cn(e, t, o);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", it(e));
        } else
          a.current = null;
    }
    function Im(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var sC = !1;
    function I1(e, t) {
      ex(e.containerInfo), He = t, B1();
      var a = sC;
      return sC = !1, a;
    }
    function B1() {
      for (; He !== null; ) {
        var e = He, t = e.child;
        (e.subtreeFlags & zl) !== Ge && t !== null ? (t.return = e, He = t) : $1();
      }
    }
    function $1() {
      for (; He !== null; ) {
        var e = He;
        Qt(e);
        try {
          Y1(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        sn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, He = t;
          return;
        }
        He = e.return;
      }
    }
    function Y1(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Yn) !== Ge) {
        switch (Qt(e), e.tag) {
          case C:
          case Z:
          case ue:
            break;
          case D: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, c = e.stateNode;
              e.type === e.elementType && !oc && (c.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", it(e) || "instance"), c.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", it(e) || "instance"));
              var v = c.getSnapshotBeforeUpdate(e.elementType === e.type ? i : fl(e.type, i), o);
              {
                var y = lC;
                v === void 0 && !y.has(e.type) && (y.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", it(e)));
              }
              c.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case O: {
            {
              var w = e.stateNode;
              xx(w.containerInfo);
            }
            break;
          }
          case L:
          case J:
          case N:
          case fe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        sn();
      }
    }
    function pl(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var c = o.next, v = c;
        do {
          if ((v.tag & e) === e) {
            var y = v.destroy;
            v.destroy = void 0, y !== void 0 && ((e & Fr) !== Ia ? el(t) : (e & fr) !== Ia && ys(t), (e & Xl) !== Ia && av(!0), Im(t, a, y), (e & Xl) !== Ia && av(!1), (e & Fr) !== Ia ? Ul() : (e & fr) !== Ia && Ad());
          }
          v = v.next;
        } while (v !== c);
      }
    }
    function Yu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, c = o;
        do {
          if ((c.tag & e) === e) {
            (e & Fr) !== Ia ? Nd(t) : (e & fr) !== Ia && jc(t);
            var v = c.create;
            (e & Xl) !== Ia && av(!0), c.destroy = v(), (e & Xl) !== Ia && av(!1), (e & Fr) !== Ia ? Wv() : (e & fr) !== Ia && Qv();
            {
              var y = c.destroy;
              if (y !== void 0 && typeof y != "function") {
                var w = void 0;
                (c.tag & fr) !== Ge ? w = "useLayoutEffect" : (c.tag & Xl) !== Ge ? w = "useInsertionEffect" : w = "useEffect";
                var x = void 0;
                y === null ? x = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? x = `

It looks like you wrote ` + w + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + w + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : x = " You returned: " + y, g("%s must not return anything besides a function, which is used for clean-up.%s", w, x);
              }
            }
          }
          c = c.next;
        } while (c !== o);
      }
    }
    function G1(e, t) {
      if ((t.flags & Ot) !== Ge)
        switch (t.tag) {
          case oe: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, c = i.onPostCommit, v = x0(), y = t.alternate === null ? "mount" : "update";
            b0() && (y = "nested-update"), typeof c == "function" && c(o, y, a, v);
            var w = t.return;
            e: for (; w !== null; ) {
              switch (w.tag) {
                case O:
                  var x = w.stateNode;
                  x.passiveEffectDuration += a;
                  break e;
                case oe:
                  var _ = w.stateNode;
                  _.passiveEffectDuration += a;
                  break e;
              }
              w = w.return;
            }
            break;
          }
        }
    }
    function W1(e, t, a, i) {
      if ((a.flags & Al) !== Ge)
        switch (a.tag) {
          case C:
          case Z:
          case ue: {
            if (!Hr)
              if (a.mode & Ut)
                try {
                  eo(), Yu(fr | cr, a);
                } finally {
                  Zl(a);
                }
              else
                Yu(fr | cr, a);
            break;
          }
          case D: {
            var o = a.stateNode;
            if (a.flags & Ot && !Hr)
              if (t === null)
                if (a.type === a.elementType && !oc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", it(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", it(a) || "instance")), a.mode & Ut)
                  try {
                    eo(), o.componentDidMount();
                  } finally {
                    Zl(a);
                  }
                else
                  o.componentDidMount();
              else {
                var c = a.elementType === a.type ? t.memoizedProps : fl(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !oc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", it(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", it(a) || "instance")), a.mode & Ut)
                  try {
                    eo(), o.componentDidUpdate(c, v, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Zl(a);
                  }
                else
                  o.componentDidUpdate(c, v, o.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !oc && (o.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", it(a) || "instance"), o.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", it(a) || "instance")), qw(a, y, o));
            break;
          }
          case O: {
            var w = a.updateQueue;
            if (w !== null) {
              var x = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case L:
                    x = a.child.stateNode;
                    break;
                  case D:
                    x = a.child.stateNode;
                    break;
                }
              qw(a, w, x);
            }
            break;
          }
          case L: {
            var _ = a.stateNode;
            if (t === null && a.flags & Ot) {
              var j = a.type, U = a.memoizedProps;
              fx(_, j, U);
            }
            break;
          }
          case J:
            break;
          case N:
            break;
          case oe: {
            {
              var Q = a.memoizedProps, K = Q.onCommit, ne = Q.onRender, ke = a.stateNode.effectDuration, Xe = x0(), $e = t === null ? "mount" : "update";
              b0() && ($e = "nested-update"), typeof ne == "function" && ne(a.memoizedProps.id, $e, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Xe);
              {
                typeof K == "function" && K(a.memoizedProps.id, $e, ke, Xe), $_(a);
                var Lt = a.return;
                e: for (; Lt !== null; ) {
                  switch (Lt.tag) {
                    case O:
                      var _t = Lt.stateNode;
                      _t.effectDuration += ke;
                      break e;
                    case oe:
                      var $ = Lt.stateNode;
                      $.effectDuration += ke;
                      break e;
                  }
                  Lt = Lt.return;
                }
              }
            }
            break;
          }
          case le: {
            t_(e, a);
            break;
          }
          case me:
          case fe:
          case be:
          case Ee:
          case Qe:
          case bt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & En && cC(a);
    }
    function Q1(e) {
      switch (e.tag) {
        case C:
        case Z:
        case ue: {
          if (e.mode & Ut)
            try {
              eo(), oC(e, e.return);
            } finally {
              Zl(e);
            }
          else
            oC(e, e.return);
          break;
        }
        case D: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && V1(e, e.return, t), uC(e, e.return);
          break;
        }
        case L: {
          uC(e, e.return);
          break;
        }
      }
    }
    function q1(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === L) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? wx(o) : Tx(i.stateNode, i.memoizedProps);
            } catch (v) {
              cn(e, e.return, v);
            }
          }
        } else if (i.tag === J) {
          if (a === null)
            try {
              var c = i.stateNode;
              t ? Cx(c) : bx(c, i.memoizedProps);
            } catch (v) {
              cn(e, e.return, v);
            }
        } else if (!((i.tag === Ee || i.tag === Qe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function cC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case L:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & Ut)
            try {
              eo(), o = t(i);
            } finally {
              Zl(e);
            }
          else
            o = t(i);
          typeof o == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", it(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", it(e)), t.current = i;
      }
    }
    function X1(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function fC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, fC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === L) {
          var a = e.stateNode;
          a !== null && nR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function K1(e) {
      for (var t = e.return; t !== null; ) {
        if (dC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function dC(e) {
      return e.tag === L || e.tag === O || e.tag === N;
    }
    function pC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || dC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== L && t.tag !== J && t.tag !== Tt; ) {
          if (t.flags & mn || t.child === null || t.tag === N)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mn))
          return t.stateNode;
      }
    }
    function J1(e) {
      var t = K1(e);
      switch (t.tag) {
        case L: {
          var a = t.stateNode;
          t.flags & La && (hw(a), t.flags &= ~La);
          var i = pC(e);
          GS(e, i, a);
          break;
        }
        case O:
        case N: {
          var o = t.stateNode.containerInfo, c = pC(e);
          YS(e, c, o);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function YS(e, t, a) {
      var i = e.tag, o = i === L || i === J;
      if (o) {
        var c = e.stateNode;
        t ? yx(a, c, t) : hx(a, c);
      } else if (i !== N) {
        var v = e.child;
        if (v !== null) {
          YS(v, t, a);
          for (var y = v.sibling; y !== null; )
            YS(y, t, a), y = y.sibling;
        }
      }
    }
    function GS(e, t, a) {
      var i = e.tag, o = i === L || i === J;
      if (o) {
        var c = e.stateNode;
        t ? mx(a, c, t) : vx(a, c);
      } else if (i !== N) {
        var v = e.child;
        if (v !== null) {
          GS(v, t, a);
          for (var y = v.sibling; y !== null; )
            GS(y, t, a), y = y.sibling;
        }
      }
    }
    var Vr = null, vl = !1;
    function Z1(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case L: {
              Vr = i.stateNode, vl = !1;
              break e;
            }
            case O: {
              Vr = i.stateNode.containerInfo, vl = !0;
              break e;
            }
            case N: {
              Vr = i.stateNode.containerInfo, vl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        vC(e, t, a), Vr = null, vl = !1;
      }
      X1(a);
    }
    function Gu(e, t, a) {
      for (var i = a.child; i !== null; )
        vC(e, t, i), i = i.sibling;
    }
    function vC(e, t, a) {
      switch (Md(a), a.tag) {
        case L:
          Hr || qf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case J: {
          {
            var i = Vr, o = vl;
            Vr = null, Gu(e, t, a), Vr = i, vl = o, Vr !== null && (vl ? Sx(Vr, a.stateNode) : gx(Vr, a.stateNode));
          }
          return;
        }
        case Tt: {
          Vr !== null && (vl ? Ex(Vr, a.stateNode) : rg(Vr, a.stateNode));
          return;
        }
        case N: {
          {
            var c = Vr, v = vl;
            Vr = a.stateNode.containerInfo, vl = !0, Gu(e, t, a), Vr = c, vl = v;
          }
          return;
        }
        case C:
        case Z:
        case Me:
        case ue: {
          if (!Hr) {
            var y = a.updateQueue;
            if (y !== null) {
              var w = y.lastEffect;
              if (w !== null) {
                var x = w.next, _ = x;
                do {
                  var j = _, U = j.destroy, Q = j.tag;
                  U !== void 0 && ((Q & Xl) !== Ia ? Im(a, t, U) : (Q & fr) !== Ia && (ys(a), a.mode & Ut ? (eo(), Im(a, t, U), Zl(a)) : Im(a, t, U), Ad())), _ = _.next;
                } while (_ !== x);
              }
            }
          }
          Gu(e, t, a);
          return;
        }
        case D: {
          if (!Hr) {
            qf(a, t);
            var K = a.stateNode;
            typeof K.componentWillUnmount == "function" && $S(a, t, K);
          }
          Gu(e, t, a);
          return;
        }
        case be: {
          Gu(e, t, a);
          return;
        }
        case Ee: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ct
          ) {
            var ne = Hr;
            Hr = ne || a.memoizedState !== null, Gu(e, t, a), Hr = ne;
          } else
            Gu(e, t, a);
          break;
        }
        default: {
          Gu(e, t, a);
          return;
        }
      }
    }
    function e_(e) {
      e.memoizedState;
    }
    function t_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var c = o.dehydrated;
            c !== null && jx(c);
          }
        }
      }
    }
    function hC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new F1()), t.forEach(function(i) {
          var o = K_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Zr)
              if (Wf !== null && Qf !== null)
                rv(Qf, Wf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function n_(e, t, a) {
      Wf = a, Qf = e, Qt(t), mC(t, e), Qt(t), Wf = null, Qf = null;
    }
    function hl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var c = i[o];
          try {
            Z1(e, t, c);
          } catch (w) {
            cn(c, t, w);
          }
        }
      var v = bl();
      if (t.subtreeFlags & Nl)
        for (var y = t.child; y !== null; )
          Qt(y), mC(y, e), y = y.sibling;
      Qt(v);
    }
    function mC(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case C:
        case Z:
        case Me:
        case ue: {
          if (hl(t, e), to(e), o & Ot) {
            try {
              pl(Xl | cr, e, e.return), Yu(Xl | cr, e);
            } catch (rt) {
              cn(e, e.return, rt);
            }
            if (e.mode & Ut) {
              try {
                eo(), pl(fr | cr, e, e.return);
              } catch (rt) {
                cn(e, e.return, rt);
              }
              Zl(e);
            } else
              try {
                pl(fr | cr, e, e.return);
              } catch (rt) {
                cn(e, e.return, rt);
              }
          }
          return;
        }
        case D: {
          hl(t, e), to(e), o & En && i !== null && qf(i, i.return);
          return;
        }
        case L: {
          hl(t, e), to(e), o & En && i !== null && qf(i, i.return);
          {
            if (e.flags & La) {
              var c = e.stateNode;
              try {
                hw(c);
              } catch (rt) {
                cn(e, e.return, rt);
              }
            }
            if (o & Ot) {
              var v = e.stateNode;
              if (v != null) {
                var y = e.memoizedProps, w = i !== null ? i.memoizedProps : y, x = e.type, _ = e.updateQueue;
                if (e.updateQueue = null, _ !== null)
                  try {
                    dx(v, _, x, w, y, e);
                  } catch (rt) {
                    cn(e, e.return, rt);
                  }
              }
            }
          }
          return;
        }
        case J: {
          if (hl(t, e), to(e), o & Ot) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var j = e.stateNode, U = e.memoizedProps, Q = i !== null ? i.memoizedProps : U;
            try {
              px(j, Q, U);
            } catch (rt) {
              cn(e, e.return, rt);
            }
          }
          return;
        }
        case O: {
          if (hl(t, e), to(e), o & Ot && i !== null) {
            var K = i.memoizedState;
            if (K.isDehydrated)
              try {
                Fx(t.containerInfo);
              } catch (rt) {
                cn(e, e.return, rt);
              }
          }
          return;
        }
        case N: {
          hl(t, e), to(e);
          return;
        }
        case le: {
          hl(t, e), to(e);
          var ne = e.child;
          if (ne.flags & zn) {
            var ke = ne.stateNode, Xe = ne.memoizedState, $e = Xe !== null;
            if (ke.isHidden = $e, $e) {
              var Lt = ne.alternate !== null && ne.alternate.memoizedState !== null;
              Lt || P_();
            }
          }
          if (o & Ot) {
            try {
              e_(e);
            } catch (rt) {
              cn(e, e.return, rt);
            }
            hC(e);
          }
          return;
        }
        case Ee: {
          var _t = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ct
          ) {
            var $ = Hr;
            Hr = $ || _t, hl(t, e), Hr = $;
          } else
            hl(t, e);
          if (to(e), o & zn) {
            var re = e.stateNode, Y = e.memoizedState, ge = Y !== null, Ae = e;
            if (re.isHidden = ge, ge && !_t && (Ae.mode & Ct) !== We) {
              He = Ae;
              for (var Le = Ae.child; Le !== null; )
                He = Le, a_(Le), Le = Le.sibling;
            }
            q1(Ae, ge);
          }
          return;
        }
        case me: {
          hl(t, e), to(e), o & Ot && hC(e);
          return;
        }
        case be:
          return;
        default: {
          hl(t, e), to(e);
          return;
        }
      }
    }
    function to(e) {
      var t = e.flags;
      if (t & mn) {
        try {
          J1(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= ~mn;
      }
      t & Xr && (e.flags &= ~Xr);
    }
    function r_(e, t, a) {
      Wf = a, Qf = t, He = e, yC(e, t, a), Wf = null, Qf = null;
    }
    function yC(e, t, a) {
      for (var i = (e.mode & Ct) !== We; He !== null; ) {
        var o = He, c = o.child;
        if (o.tag === Ee && i) {
          var v = o.memoizedState !== null, y = v || Vm;
          if (y) {
            WS(e, t, a);
            continue;
          } else {
            var w = o.alternate, x = w !== null && w.memoizedState !== null, _ = x || Hr, j = Vm, U = Hr;
            Vm = y, Hr = _, Hr && !U && (He = o, i_(o));
            for (var Q = c; Q !== null; )
              He = Q, yC(
                Q,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Q = Q.sibling;
            He = o, Vm = j, Hr = U, WS(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & Al) !== Ge && c !== null ? (c.return = o, He = c) : WS(e, t, a);
      }
    }
    function WS(e, t, a) {
      for (; He !== null; ) {
        var i = He;
        if ((i.flags & Al) !== Ge) {
          var o = i.alternate;
          Qt(i);
          try {
            W1(t, o, i, a);
          } catch (v) {
            cn(i, i.return, v);
          }
          sn();
        }
        if (i === e) {
          He = null;
          return;
        }
        var c = i.sibling;
        if (c !== null) {
          c.return = i.return, He = c;
          return;
        }
        He = i.return;
      }
    }
    function a_(e) {
      for (; He !== null; ) {
        var t = He, a = t.child;
        switch (t.tag) {
          case C:
          case Z:
          case Me:
          case ue: {
            if (t.mode & Ut)
              try {
                eo(), pl(fr, t, t.return);
              } finally {
                Zl(t);
              }
            else
              pl(fr, t, t.return);
            break;
          }
          case D: {
            qf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && $S(t, t.return, i);
            break;
          }
          case L: {
            qf(t, t.return);
            break;
          }
          case Ee: {
            var o = t.memoizedState !== null;
            if (o) {
              gC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, He = a) : gC(e);
      }
    }
    function gC(e) {
      for (; He !== null; ) {
        var t = He;
        if (t === e) {
          He = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, He = a;
          return;
        }
        He = t.return;
      }
    }
    function i_(e) {
      for (; He !== null; ) {
        var t = He, a = t.child;
        if (t.tag === Ee) {
          var i = t.memoizedState !== null;
          if (i) {
            SC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, He = a) : SC(e);
      }
    }
    function SC(e) {
      for (; He !== null; ) {
        var t = He;
        Qt(t);
        try {
          Q1(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (sn(), t === e) {
          He = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, He = a;
          return;
        }
        He = t.return;
      }
    }
    function l_(e, t, a, i) {
      He = t, o_(t, e, a, i);
    }
    function o_(e, t, a, i) {
      for (; He !== null; ) {
        var o = He, c = o.child;
        (o.subtreeFlags & Ji) !== Ge && c !== null ? (c.return = o, He = c) : u_(e, t, a, i);
      }
    }
    function u_(e, t, a, i) {
      for (; He !== null; ) {
        var o = He;
        if ((o.flags & qr) !== Ge) {
          Qt(o);
          try {
            s_(t, o, a, i);
          } catch (v) {
            cn(o, o.return, v);
          }
          sn();
        }
        if (o === e) {
          He = null;
          return;
        }
        var c = o.sibling;
        if (c !== null) {
          c.return = o.return, He = c;
          return;
        }
        He = o.return;
      }
    }
    function s_(e, t, a, i) {
      switch (t.tag) {
        case C:
        case Z:
        case ue: {
          if (t.mode & Ut) {
            dS();
            try {
              Yu(Fr | cr, t);
            } finally {
              fS(t);
            }
          } else
            Yu(Fr | cr, t);
          break;
        }
      }
    }
    function c_(e) {
      He = e, f_();
    }
    function f_() {
      for (; He !== null; ) {
        var e = He, t = e.child;
        if ((He.flags & Ma) !== Ge) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              He = o, v_(o, e);
            }
            {
              var c = e.alternate;
              if (c !== null) {
                var v = c.child;
                if (v !== null) {
                  c.child = null;
                  do {
                    var y = v.sibling;
                    v.sibling = null, v = y;
                  } while (v !== null);
                }
              }
            }
            He = e;
          }
        }
        (e.subtreeFlags & Ji) !== Ge && t !== null ? (t.return = e, He = t) : d_();
      }
    }
    function d_() {
      for (; He !== null; ) {
        var e = He;
        (e.flags & qr) !== Ge && (Qt(e), p_(e), sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, He = t;
          return;
        }
        He = e.return;
      }
    }
    function p_(e) {
      switch (e.tag) {
        case C:
        case Z:
        case ue: {
          e.mode & Ut ? (dS(), pl(Fr | cr, e, e.return), fS(e)) : pl(Fr | cr, e, e.return);
          break;
        }
      }
    }
    function v_(e, t) {
      for (; He !== null; ) {
        var a = He;
        Qt(a), m_(a, t), sn();
        var i = a.child;
        i !== null ? (i.return = a, He = i) : h_(e);
      }
    }
    function h_(e) {
      for (; He !== null; ) {
        var t = He, a = t.sibling, i = t.return;
        if (fC(t), t === e) {
          He = null;
          return;
        }
        if (a !== null) {
          a.return = i, He = a;
          return;
        }
        He = i;
      }
    }
    function m_(e, t) {
      switch (e.tag) {
        case C:
        case Z:
        case ue: {
          e.mode & Ut ? (dS(), pl(Fr, e, t), fS(e)) : pl(Fr, e, t);
          break;
        }
      }
    }
    function y_(e) {
      switch (e.tag) {
        case C:
        case Z:
        case ue: {
          try {
            Yu(fr | cr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case D: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function g_(e) {
      switch (e.tag) {
        case C:
        case Z:
        case ue: {
          try {
            Yu(Fr | cr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function S_(e) {
      switch (e.tag) {
        case C:
        case Z:
        case ue: {
          try {
            pl(fr | cr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case D: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && $S(e, e.return, t);
          break;
        }
      }
    }
    function E_(e) {
      switch (e.tag) {
        case C:
        case Z:
        case ue:
          try {
            pl(Fr | cr, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Gp = Symbol.for;
      Gp("selector.component"), Gp("selector.has_pseudo_class"), Gp("selector.role"), Gp("selector.test_id"), Gp("selector.text");
    }
    var w_ = [];
    function C_() {
      w_.forEach(function(e) {
        return e();
      });
    }
    var T_ = d.ReactCurrentActQueue;
    function b_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function EC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && T_.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var x_ = Math.ceil, QS = d.ReactCurrentDispatcher, qS = d.ReactCurrentOwner, Ir = d.ReactCurrentBatchConfig, ml = d.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), wC = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), Vi = (
      /*                */
      4
    ), Qo = 0, Wp = 1, uc = 2, Bm = 3, Qp = 4, CC = 5, XS = 6, Mt = vr, wa = null, On = null, hr = ce, no = ce, KS = Pu(ce), mr = Qo, qp = null, $m = ce, Xp = ce, Ym = ce, Kp = null, Ba = null, JS = 0, TC = 500, bC = 1 / 0, R_ = 500, qo = null;
    function Jp() {
      bC = Gn() + R_;
    }
    function xC() {
      return bC;
    }
    var Gm = !1, ZS = null, Xf = null, sc = !1, Wu = null, Zp = ce, eE = [], tE = null, __ = 50, ev = 0, nE = null, rE = !1, Wm = !1, D_ = 50, Kf = 0, Qm = null, tv = en, qm = ce, RC = !1;
    function Xm() {
      return wa;
    }
    function Ca() {
      return (Mt & (Br | Vi)) !== vr ? Gn() : (tv !== en || (tv = Gn()), tv);
    }
    function Qu(e) {
      var t = e.mode;
      if ((t & Ct) === We)
        return nt;
      if ((Mt & Br) !== vr && hr !== ce)
        return ks(hr);
      var a = TR() !== CR;
      if (a) {
        if (Ir.transition !== null) {
          var i = Ir.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return qm === At && (qm = Bd()), qm;
      }
      var o = Fa();
      if (o !== At)
        return o;
      var c = ox();
      return c;
    }
    function O_(e) {
      var t = e.mode;
      return (t & Ct) === We ? nt : eh();
    }
    function yr(e, t, a, i) {
      Z_(), RC && g("useInsertionEffect must not schedule updates."), rE && (Wm = !0), xu(e, a, i), (Mt & Br) !== ce && e === wa ? nD(t) : (Zr && zs(e, t, a), rD(t), e === wa && ((Mt & Br) === vr && (Xp = ft(Xp, a)), mr === Qp && qu(e, hr)), $a(e, i), a === nt && Mt === vr && (t.mode & Ct) === We && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ml.isBatchingLegacy && (Jp(), Rw()));
    }
    function k_(e, t, a) {
      var i = e.current;
      i.lanes = t, xu(e, t, a), $a(e, a);
    }
    function M_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Mt & Br) !== vr
      );
    }
    function $a(e, t) {
      var a = e.callbackNode;
      lf(e, t);
      var i = af(e, e === wa ? hr : ce);
      if (i === ce) {
        a !== null && IC(a), e.callbackNode = null, e.callbackPriority = At;
        return;
      }
      var o = Hl(i), c = e.callbackPriority;
      if (c === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ml.current !== null && a !== cE)) {
        a == null && c !== nt && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && IC(a);
      var v;
      if (o === nt)
        e.tag === Uu ? (ml.isBatchingLegacy !== null && (ml.didScheduleLegacyUpdate = !0), iR(OC.bind(null, e))) : xw(OC.bind(null, e)), ml.current !== null ? ml.current.push(Fu) : sx(function() {
          (Mt & (Br | Vi)) === vr && Fu();
        }), v = null;
      else {
        var y;
        switch (oh(i)) {
          case Lr:
            y = ms;
            break;
          case Mi:
            y = Pl;
            break;
          case Pa:
            y = Zi;
            break;
          case Ua:
            y = Co;
            break;
          default:
            y = Zi;
            break;
        }
        v = fE(y, _C.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = v;
    }
    function _C(e, t) {
      if (qR(), tv = en, qm = ce, (Mt & (Br | Vi)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Ko();
      if (i && e.callbackNode !== a)
        return null;
      var o = af(e, e === wa ? hr : ce);
      if (o === ce)
        return null;
      var c = !uf(e, o) && !Zv(e, o) && !t, v = c ? V_(e, o) : Jm(e, o);
      if (v !== Qo) {
        if (v === uc) {
          var y = of(e);
          y !== ce && (o = y, v = aE(e, y));
        }
        if (v === Wp) {
          var w = qp;
          throw cc(e, ce), qu(e, o), $a(e, Gn()), w;
        }
        if (v === XS)
          qu(e, o);
        else {
          var x = !uf(e, o), _ = e.current.alternate;
          if (x && !z_(_)) {
            if (v = Jm(e, o), v === uc) {
              var j = of(e);
              j !== ce && (o = j, v = aE(e, j));
            }
            if (v === Wp) {
              var U = qp;
              throw cc(e, ce), qu(e, o), $a(e, Gn()), U;
            }
          }
          e.finishedWork = _, e.finishedLanes = o, L_(e, v, o);
        }
      }
      return $a(e, Gn()), e.callbackNode === a ? _C.bind(null, e) : null;
    }
    function aE(e, t) {
      var a = Kp;
      if (ff(e)) {
        var i = cc(e, t);
        i.flags |= Cr, Jx(e.containerInfo);
      }
      var o = Jm(e, t);
      if (o !== uc) {
        var c = Ba;
        Ba = a, c !== null && DC(c);
      }
      return o;
    }
    function DC(e) {
      Ba === null ? Ba = e : Ba.push.apply(Ba, e);
    }
    function L_(e, t, a) {
      switch (t) {
        case Qo:
        case Wp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case uc: {
          fc(e, Ba, qo);
          break;
        }
        case Bm: {
          if (qu(e, a), zo(a) && // do not delay if we're inside an act() scope
          !BC()) {
            var i = JS + TC - Gn();
            if (i > 10) {
              var o = af(e, ce);
              if (o !== ce)
                break;
              var c = e.suspendedLanes;
              if (!No(c, a)) {
                Ca(), sf(e, c);
                break;
              }
              e.timeoutHandle = tg(fc.bind(null, e, Ba, qo), i);
              break;
            }
          }
          fc(e, Ba, qo);
          break;
        }
        case Qp: {
          if (qu(e, a), Vd(a))
            break;
          if (!BC()) {
            var v = li(e, a), y = v, w = Gn() - y, x = J_(w) - w;
            if (x > 10) {
              e.timeoutHandle = tg(fc.bind(null, e, Ba, qo), x);
              break;
            }
          }
          fc(e, Ba, qo);
          break;
        }
        case CC: {
          fc(e, Ba, qo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function z_(e) {
      for (var t = e; ; ) {
        if (t.flags & Eu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var c = i[o], v = c.getSnapshot, y = c.value;
                try {
                  if (!he(v(), y))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var w = t.child;
        if (t.subtreeFlags & Eu && w !== null) {
          w.return = t, t = w;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function qu(e, t) {
      t = Ms(t, Ym), t = Ms(t, Xp), rh(e, t);
    }
    function OC(e) {
      if (XR(), (Mt & (Br | Vi)) !== vr)
        throw new Error("Should not already be working.");
      Ko();
      var t = af(e, ce);
      if (!ta(t, nt))
        return $a(e, Gn()), null;
      var a = Jm(e, t);
      if (e.tag !== Uu && a === uc) {
        var i = of(e);
        i !== ce && (t = i, a = aE(e, i));
      }
      if (a === Wp) {
        var o = qp;
        throw cc(e, ce), qu(e, t), $a(e, Gn()), o;
      }
      if (a === XS)
        throw new Error("Root did not complete. This is a bug in React.");
      var c = e.current.alternate;
      return e.finishedWork = c, e.finishedLanes = t, fc(e, Ba, qo), $a(e, Gn()), null;
    }
    function N_(e, t) {
      t !== ce && (cf(e, ft(t, nt)), $a(e, Gn()), (Mt & (Br | Vi)) === vr && (Jp(), Fu()));
    }
    function iE(e, t) {
      var a = Mt;
      Mt |= wC;
      try {
        return e(t);
      } finally {
        Mt = a, Mt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ml.isBatchingLegacy && (Jp(), Rw());
      }
    }
    function A_(e, t, a, i, o) {
      var c = Fa(), v = Ir.transition;
      try {
        return Ir.transition = null, Un(Lr), e(t, a, i, o);
      } finally {
        Un(c), Ir.transition = v, Mt === vr && Jp();
      }
    }
    function Xo(e) {
      Wu !== null && Wu.tag === Uu && (Mt & (Br | Vi)) === vr && Ko();
      var t = Mt;
      Mt |= wC;
      var a = Ir.transition, i = Fa();
      try {
        return Ir.transition = null, Un(Lr), e ? e() : void 0;
      } finally {
        Un(i), Ir.transition = a, Mt = t, (Mt & (Br | Vi)) === vr && Fu();
      }
    }
    function kC() {
      return (Mt & (Br | Vi)) !== vr;
    }
    function Km(e, t) {
      la(KS, no, e), no = ft(no, t);
    }
    function lE(e) {
      no = KS.current, ia(KS, e);
    }
    function cc(e, t) {
      e.finishedWork = null, e.finishedLanes = ce;
      var a = e.timeoutHandle;
      if (a !== ng && (e.timeoutHandle = ng, ux(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var o = i.alternate;
          iC(o, i), i = i.return;
        }
      wa = e;
      var c = dc(e.current, null);
      return On = c, hr = no = t, mr = Qo, qp = null, $m = ce, Xp = ce, Ym = ce, Kp = null, Ba = null, kR(), ul.discardPendingWarnings(), c;
    }
    function MC(e, t) {
      do {
        var a = On;
        try {
          if (om(), t0(), sn(), qS.current = null, a === null || a.return === null) {
            mr = Wp, qp = t, On = null;
            return;
          }
          if (tt && a.mode & Ut && Pm(a, !0), et)
            if (ya(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ki(a, i, hr);
            } else
              gs(a, t, hr);
          i1(e, a.return, a, t, hr), AC(a);
        } catch (o) {
          t = o, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function LC() {
      var e = QS.current;
      return QS.current = Mm, e === null ? Mm : e;
    }
    function zC(e) {
      QS.current = e;
    }
    function P_() {
      JS = Gn();
    }
    function nv(e) {
      $m = ft(e, $m);
    }
    function U_() {
      mr === Qo && (mr = Bm);
    }
    function oE() {
      (mr === Qo || mr === Bm || mr === uc) && (mr = Qp), wa !== null && (Os($m) || Os(Xp)) && qu(wa, hr);
    }
    function F_(e) {
      mr !== Qp && (mr = uc), Kp === null ? Kp = [e] : Kp.push(e);
    }
    function j_() {
      return mr === Qo;
    }
    function Jm(e, t) {
      var a = Mt;
      Mt |= Br;
      var i = LC();
      if (wa !== e || hr !== t) {
        if (Zr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (rv(e, hr), o.clear()), ah(e, t);
        }
        qo = Wd(), cc(e, t);
      }
      Ro(t);
      do
        try {
          H_();
          break;
        } catch (c) {
          MC(e, c);
        }
      while (!0);
      if (om(), Mt = a, zC(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Hc(), wa = null, hr = ce, mr;
    }
    function H_() {
      for (; On !== null; )
        NC(On);
    }
    function V_(e, t) {
      var a = Mt;
      Mt |= Br;
      var i = LC();
      if (wa !== e || hr !== t) {
        if (Zr) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (rv(e, hr), o.clear()), ah(e, t);
        }
        qo = Wd(), Jp(), cc(e, t);
      }
      Ro(t);
      do
        try {
          I_();
          break;
        } catch (c) {
          MC(e, c);
        }
      while (!0);
      return om(), zC(i), Mt = a, On !== null ? (qv(), Qo) : (Hc(), wa = null, hr = ce, mr);
    }
    function I_() {
      for (; On !== null && !Rd(); )
        NC(On);
    }
    function NC(e) {
      var t = e.alternate;
      Qt(e);
      var a;
      (e.mode & Ut) !== We ? (cS(e), a = uE(t, e, no), Pm(e, !0)) : a = uE(t, e, no), sn(), e.memoizedProps = e.pendingProps, a === null ? AC(e) : On = a, qS.current = null;
    }
    function AC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & hs) === Ge) {
          Qt(t);
          var o = void 0;
          if ((t.mode & Ut) === We ? o = aC(a, t, no) : (cS(t), o = aC(a, t, no), Pm(t, !1)), sn(), o !== null) {
            On = o;
            return;
          }
        } else {
          var c = U1(a, t);
          if (c !== null) {
            c.flags &= Bv, On = c;
            return;
          }
          if ((t.mode & Ut) !== We) {
            Pm(t, !1);
            for (var v = t.actualDuration, y = t.child; y !== null; )
              v += y.actualDuration, y = y.sibling;
            t.actualDuration = v;
          }
          if (i !== null)
            i.flags |= hs, i.subtreeFlags = Ge, i.deletions = null;
          else {
            mr = XS, On = null;
            return;
          }
        }
        var w = t.sibling;
        if (w !== null) {
          On = w;
          return;
        }
        t = i, On = t;
      } while (t !== null);
      mr === Qo && (mr = CC);
    }
    function fc(e, t, a) {
      var i = Fa(), o = Ir.transition;
      try {
        Ir.transition = null, Un(Lr), B_(e, t, a, i);
      } finally {
        Ir.transition = o, Un(i);
      }
      return null;
    }
    function B_(e, t, a, i) {
      do
        Ko();
      while (Wu !== null);
      if (eD(), (Mt & (Br | Vi)) !== vr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, c = e.finishedLanes;
      if (Ld(c), o === null)
        return zd(), null;
      if (c === ce && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ce, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = At;
      var v = ft(o.lanes, o.childLanes);
      Yd(e, v), e === wa && (wa = null, On = null, hr = ce), ((o.subtreeFlags & Ji) !== Ge || (o.flags & Ji) !== Ge) && (sc || (sc = !0, tE = a, fE(Zi, function() {
        return Ko(), null;
      })));
      var y = (o.subtreeFlags & (zl | Nl | Al | Ji)) !== Ge, w = (o.flags & (zl | Nl | Al | Ji)) !== Ge;
      if (y || w) {
        var x = Ir.transition;
        Ir.transition = null;
        var _ = Fa();
        Un(Lr);
        var j = Mt;
        Mt |= Vi, qS.current = null, I1(e, o), R0(), n_(e, o, c), tx(e.containerInfo), e.current = o, Ss(c), r_(o, e, c), Es(), _d(), Mt = j, Un(_), Ir.transition = x;
      } else
        e.current = o, R0();
      var U = sc;
      if (sc ? (sc = !1, Wu = e, Zp = c) : (Kf = 0, Qm = null), v = e.pendingLanes, v === ce && (Xf = null), U || jC(e.current, !1), Od(o.stateNode, i), Zr && e.memoizedUpdaters.clear(), C_(), $a(e, Gn()), t !== null)
        for (var Q = e.onRecoverableError, K = 0; K < t.length; K++) {
          var ne = t[K], ke = ne.stack, Xe = ne.digest;
          Q(ne.value, {
            componentStack: ke,
            digest: Xe
          });
        }
      if (Gm) {
        Gm = !1;
        var $e = ZS;
        throw ZS = null, $e;
      }
      return ta(Zp, nt) && e.tag !== Uu && Ko(), v = e.pendingLanes, ta(v, nt) ? (QR(), e === nE ? ev++ : (ev = 0, nE = e)) : ev = 0, Fu(), zd(), null;
    }
    function Ko() {
      if (Wu !== null) {
        var e = oh(Zp), t = As(Pa, e), a = Ir.transition, i = Fa();
        try {
          return Ir.transition = null, Un(t), Y_();
        } finally {
          Un(i), Ir.transition = a;
        }
      }
      return !1;
    }
    function $_(e) {
      eE.push(e), sc || (sc = !0, fE(Zi, function() {
        return Ko(), null;
      }));
    }
    function Y_() {
      if (Wu === null)
        return !1;
      var e = tE;
      tE = null;
      var t = Wu, a = Zp;
      if (Wu = null, Zp = ce, (Mt & (Br | Vi)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      rE = !0, Wm = !1, xo(a);
      var i = Mt;
      Mt |= Vi, c_(t.current), l_(t, t.current, a, e);
      {
        var o = eE;
        eE = [];
        for (var c = 0; c < o.length; c++) {
          var v = o[c];
          G1(t, v);
        }
      }
      Pd(), jC(t.current, !0), Mt = i, Fu(), Wm ? t === Qm ? Kf++ : (Kf = 0, Qm = t) : Kf = 0, rE = !1, Wm = !1, kd(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function PC(e) {
      return Xf !== null && Xf.has(e);
    }
    function G_(e) {
      Xf === null ? Xf = /* @__PURE__ */ new Set([e]) : Xf.add(e);
    }
    function W_(e) {
      Gm || (Gm = !0, ZS = e);
    }
    var Q_ = W_;
    function UC(e, t, a) {
      var i = lc(a, t), o = N0(e, i, nt), c = Hu(e, o, nt), v = Ca();
      c !== null && (xu(c, nt, v), $a(c, v));
    }
    function cn(e, t, a) {
      if (j1(a), av(!1), e.tag === O) {
        UC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === O) {
          UC(i, e, a);
          return;
        } else if (i.tag === D) {
          var o = i.type, c = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && !PC(c)) {
            var v = lc(a, e), y = DS(i, v, nt), w = Hu(i, y, nt), x = Ca();
            w !== null && (xu(w, nt, x), $a(w, x));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function q_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = Ca();
      sf(e, a), aD(e), wa === e && No(hr, a) && (mr === Qp || mr === Bm && zo(hr) && Gn() - JS < TC ? cc(e, ce) : Ym = ft(Ym, a)), $a(e, o);
    }
    function FC(e, t) {
      t === At && (t = O_(e));
      var a = Ca(), i = Va(e, t);
      i !== null && (xu(i, t, a), $a(i, a));
    }
    function X_(e) {
      var t = e.memoizedState, a = At;
      t !== null && (a = t.retryLane), FC(e, a);
    }
    function K_(e, t) {
      var a = At, i;
      switch (e.tag) {
        case le:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case me:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), FC(e, a);
    }
    function J_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : x_(e / 1960) * 1960;
    }
    function Z_() {
      if (ev > __)
        throw ev = 0, nE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Kf > D_ && (Kf = 0, Qm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function eD() {
      ul.flushLegacyContextWarning(), ul.flushPendingUnsafeLifecycleWarnings();
    }
    function jC(e, t) {
      Qt(e), Zm(e, Ll, S_), t && Zm(e, _i, E_), Zm(e, Ll, y_), t && Zm(e, _i, g_), sn();
    }
    function Zm(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var c = i.subtreeFlags & t;
        i !== o && i.child !== null && c !== Ge ? i = i.child : ((i.flags & t) !== Ge && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var ey = null;
    function HC(e) {
      {
        if ((Mt & Br) !== vr || !(e.mode & Ct))
          return;
        var t = e.tag;
        if (t !== M && t !== O && t !== D && t !== C && t !== Z && t !== Me && t !== ue)
          return;
        var a = it(e) || "ReactComponent";
        if (ey !== null) {
          if (ey.has(a))
            return;
          ey.add(a);
        } else
          ey = /* @__PURE__ */ new Set([a]);
        var i = ir;
        try {
          Qt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Qt(e) : sn();
        }
      }
    }
    var uE;
    {
      var tD = null;
      uE = function(e, t, a) {
        var i = QC(tD, t);
        try {
          return Z0(e, t, a);
        } catch (c) {
          if (pR() || c !== null && typeof c == "object" && typeof c.then == "function")
            throw c;
          if (om(), t0(), iC(e, t), QC(t, i), t.mode & Ut && cS(t), Ml(null, Z0, null, e, t, a), Xi()) {
            var o = vs();
            typeof o == "object" && o !== null && o._suppressLogging && typeof c == "object" && c !== null && !c._suppressLogging && (c._suppressLogging = !0);
          }
          throw c;
        }
      };
    }
    var VC = !1, sE;
    sE = /* @__PURE__ */ new Set();
    function nD(e) {
      if (Ei && !YR())
        switch (e.tag) {
          case C:
          case Z:
          case ue: {
            var t = On && it(On) || "Unknown", a = t;
            if (!sE.has(a)) {
              sE.add(a);
              var i = it(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case D: {
            VC || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), VC = !0);
            break;
          }
        }
    }
    function rv(e, t) {
      if (Zr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          zs(e, i, t);
        });
      }
    }
    var cE = {};
    function fE(e, t) {
      {
        var a = ml.current;
        return a !== null ? (a.push(t), cE) : xd(e, t);
      }
    }
    function IC(e) {
      if (e !== cE)
        return Yv(e);
    }
    function BC() {
      return ml.current !== null;
    }
    function rD(e) {
      {
        if (e.mode & Ct) {
          if (!EC())
            return;
        } else if (!b_() || Mt !== vr || e.tag !== C && e.tag !== Z && e.tag !== ue)
          return;
        if (ml.current === null) {
          var t = ir;
          try {
            Qt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, it(e));
          } finally {
            t ? Qt(e) : sn();
          }
        }
      }
    }
    function aD(e) {
      e.tag !== Uu && EC() && ml.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function av(e) {
      RC = e;
    }
    var Ii = null, Jf = null, iD = function(e) {
      Ii = e;
    };
    function Zf(e) {
      {
        if (Ii === null)
          return e;
        var t = Ii(e);
        return t === void 0 ? e : t.current;
      }
    }
    function dE(e) {
      return Zf(e);
    }
    function pE(e) {
      {
        if (Ii === null)
          return e;
        var t = Ii(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Zf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: se,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function $C(e, t) {
      {
        if (Ii === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, c = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case D: {
            typeof i == "function" && (o = !0);
            break;
          }
          case C: {
            (typeof i == "function" || c === lt) && (o = !0);
            break;
          }
          case Z: {
            (c === se || c === lt) && (o = !0);
            break;
          }
          case Me:
          case ue: {
            (c === st || c === lt) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var v = Ii(a);
          if (v !== void 0 && v === Ii(i))
            return !0;
        }
        return !1;
      }
    }
    function YC(e) {
      {
        if (Ii === null || typeof WeakSet != "function")
          return;
        Jf === null && (Jf = /* @__PURE__ */ new WeakSet()), Jf.add(e);
      }
    }
    var lD = function(e, t) {
      {
        if (Ii === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Ko(), Xo(function() {
          vE(e.current, i, a);
        });
      }
    }, oD = function(e, t) {
      {
        if (e.context !== si)
          return;
        Ko(), Xo(function() {
          iv(t, e, null, null);
        });
      }
    };
    function vE(e, t, a) {
      {
        var i = e.alternate, o = e.child, c = e.sibling, v = e.tag, y = e.type, w = null;
        switch (v) {
          case C:
          case ue:
          case D:
            w = y;
            break;
          case Z:
            w = y.render;
            break;
        }
        if (Ii === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var x = !1, _ = !1;
        if (w !== null) {
          var j = Ii(w);
          j !== void 0 && (a.has(j) ? _ = !0 : t.has(j) && (v === D ? _ = !0 : x = !0));
        }
        if (Jf !== null && (Jf.has(e) || i !== null && Jf.has(i)) && (_ = !0), _ && (e._debugNeedsRemount = !0), _ || x) {
          var U = Va(e, nt);
          U !== null && yr(U, e, nt, en);
        }
        o !== null && !_ && vE(o, t, a), c !== null && vE(c, t, a);
      }
    }
    var uD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return hE(e.current, i, a), a;
      }
    };
    function hE(e, t, a) {
      {
        var i = e.child, o = e.sibling, c = e.tag, v = e.type, y = null;
        switch (c) {
          case C:
          case ue:
          case D:
            y = v;
            break;
          case Z:
            y = v.render;
            break;
        }
        var w = !1;
        y !== null && t.has(y) && (w = !0), w ? sD(e, a) : i !== null && hE(i, t, a), o !== null && hE(o, t, a);
      }
    }
    function sD(e, t) {
      {
        var a = cD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case L:
              t.add(i.stateNode);
              return;
            case N:
              t.add(i.stateNode.containerInfo);
              return;
            case O:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function cD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === L)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var mE;
    {
      mE = !1;
      try {
        var GC = Object.preventExtensions({});
      } catch {
        mE = !0;
      }
    }
    function fD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ge, this.subtreeFlags = Ge, this.deletions = null, this.lanes = ce, this.childLanes = ce, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !mE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ci = function(e, t, a, i) {
      return new fD(e, t, a, i);
    };
    function yE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function dD(e) {
      return typeof e == "function" && !yE(e) && e.defaultProps === void 0;
    }
    function pD(e) {
      if (typeof e == "function")
        return yE(e) ? D : C;
      if (e != null) {
        var t = e.$$typeof;
        if (t === se)
          return Z;
        if (t === st)
          return Me;
      }
      return M;
    }
    function dc(e, t) {
      var a = e.alternate;
      a === null ? (a = ci(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ge, a.subtreeFlags = Ge, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Nn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case M:
        case C:
        case ue:
          a.type = Zf(e.type);
          break;
        case D:
          a.type = dE(e.type);
          break;
        case Z:
          a.type = pE(e.type);
          break;
      }
      return a;
    }
    function vD(e, t) {
      e.flags &= Nn | mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ce, e.lanes = t, e.child = null, e.subtreeFlags = Ge, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ge, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function hD(e, t, a) {
      var i;
      return e === Kh ? (i = Ct, t === !0 && (i |= Kt, i |= Ft)) : i = We, Zr && (i |= Ut), ci(O, null, null, i);
    }
    function gE(e, t, a, i, o, c) {
      var v = M, y = e;
      if (typeof e == "function")
        yE(e) ? (v = D, y = dE(y)) : y = Zf(y);
      else if (typeof e == "string")
        v = L;
      else
        e: switch (e) {
          case mi:
            return Xu(a.children, o, c, t);
          case qa:
            v = W, o |= Kt, (o & Ct) !== We && (o |= Ft);
            break;
          case yi:
            return mD(a, o, c, t);
          case De:
            return yD(a, o, c, t);
          case Ue:
            return gD(a, o, c, t);
          case Tn:
            return WC(a, o, c, t);
          case rn:
          // eslint-disable-next-line no-fallthrough
          case xt:
          // eslint-disable-next-line no-fallthrough
          case un:
          // eslint-disable-next-line no-fallthrough
          case ar:
          // eslint-disable-next-line no-fallthrough
          case wt:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case gi:
                  v = te;
                  break e;
                case A:
                  v = V;
                  break e;
                case se:
                  v = Z, y = pE(y);
                  break e;
                case st:
                  v = Me;
                  break e;
                case lt:
                  v = Ve, y = null;
                  break e;
              }
            var w = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var x = i ? it(i) : null;
              x && (w += `

Check the render method of \`` + x + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + w));
          }
        }
      var _ = ci(v, a, t, o);
      return _.elementType = e, _.type = y, _.lanes = c, _._debugOwner = i, _;
    }
    function SE(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, c = e.key, v = e.props, y = gE(o, c, v, i, t, a);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function Xu(e, t, a, i) {
      var o = ci(I, e, i, t);
      return o.lanes = a, o;
    }
    function mD(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = ci(oe, e, i, t | Ut);
      return o.elementType = yi, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function yD(e, t, a, i) {
      var o = ci(le, e, i, t);
      return o.elementType = De, o.lanes = a, o;
    }
    function gD(e, t, a, i) {
      var o = ci(me, e, i, t);
      return o.elementType = Ue, o.lanes = a, o;
    }
    function WC(e, t, a, i) {
      var o = ci(Ee, e, i, t);
      o.elementType = Tn, o.lanes = a;
      var c = {
        isHidden: !1
      };
      return o.stateNode = c, o;
    }
    function EE(e, t, a) {
      var i = ci(J, e, null, t);
      return i.lanes = a, i;
    }
    function SD() {
      var e = ci(L, null, null, We);
      return e.elementType = "DELETED", e;
    }
    function ED(e) {
      var t = ci(Tt, null, null, We);
      return t.stateNode = e, t;
    }
    function wE(e, t, a) {
      var i = e.children !== null ? e.children : [], o = ci(N, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function QC(e, t) {
      return e === null && (e = ci(M, null, null, We)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function wD(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = ng, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = At, this.eventTimes = Ls(ce), this.expirationTimes = Ls(en), this.pendingLanes = ce, this.suspendedLanes = ce, this.pingedLanes = ce, this.expiredLanes = ce, this.mutableReadLanes = ce, this.finishedLanes = ce, this.entangledLanes = ce, this.entanglements = Ls(ce), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var c = this.pendingUpdatersLaneMap = [], v = 0; v < _o; v++)
          c.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Kh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Uu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function qC(e, t, a, i, o, c, v, y, w, x) {
      var _ = new wD(e, t, a, y, w), j = hD(t, c);
      _.current = j, j.stateNode = _;
      {
        var U = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        j.memoizedState = U;
      }
      return Ng(j), _;
    }
    var CE = "18.3.1";
    function CD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Gr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: rr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var TE, bE;
    TE = !1, bE = {};
    function XC(e) {
      if (!e)
        return si;
      var t = Su(e), a = aR(t);
      if (t.tag === D) {
        var i = t.type;
        if (ql(i))
          return Tw(t, i, a);
      }
      return a;
    }
    function TD(e, t) {
      {
        var a = Su(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = Kr(a);
        if (o === null)
          return null;
        if (o.mode & Kt) {
          var c = it(a) || "Component";
          if (!bE[c]) {
            bE[c] = !0;
            var v = ir;
            try {
              Qt(o), a.mode & Kt ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c);
            } finally {
              v ? Qt(v) : sn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function KC(e, t, a, i, o, c, v, y) {
      var w = !1, x = null;
      return qC(e, t, w, x, a, i, o, c, v);
    }
    function JC(e, t, a, i, o, c, v, y, w, x) {
      var _ = !0, j = qC(a, i, _, e, o, c, v, y, w);
      j.context = XC(null);
      var U = j.current, Q = Ca(), K = Qu(U), ne = Go(Q, K);
      return ne.callback = t ?? null, Hu(U, ne, K), k_(j, K, Q), j;
    }
    function iv(e, t, a, i) {
      Dd(t, e);
      var o = t.current, c = Ca(), v = Qu(o);
      gn(v);
      var y = XC(a);
      t.context === null ? t.context = y : t.pendingContext = y, Ei && ir !== null && !TE && (TE = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, it(ir) || "Unknown"));
      var w = Go(c, v);
      w.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), w.callback = i);
      var x = Hu(o, w, v);
      return x !== null && (yr(x, o, v, c), dm(x, o, v)), v;
    }
    function ty(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case L:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function bD(e) {
      switch (e.tag) {
        case O: {
          var t = e.stateNode;
          if (ff(t)) {
            var a = Kv(t);
            N_(t, a);
          }
          break;
        }
        case le: {
          Xo(function() {
            var o = Va(e, nt);
            if (o !== null) {
              var c = Ca();
              yr(o, e, nt, c);
            }
          });
          var i = nt;
          xE(e, i);
          break;
        }
      }
    }
    function ZC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = nh(a.retryLane, t));
    }
    function xE(e, t) {
      ZC(e, t);
      var a = e.alternate;
      a && ZC(a, t);
    }
    function xD(e) {
      if (e.tag === le) {
        var t = Rs, a = Va(e, t);
        if (a !== null) {
          var i = Ca();
          yr(a, e, t, i);
        }
        xE(e, t);
      }
    }
    function RD(e) {
      if (e.tag === le) {
        var t = Qu(e), a = Va(e, t);
        if (a !== null) {
          var i = Ca();
          yr(a, e, t, i);
        }
        xE(e, t);
      }
    }
    function eT(e) {
      var t = dn(e);
      return t === null ? null : t.stateNode;
    }
    var tT = function(e) {
      return null;
    };
    function _D(e) {
      return tT(e);
    }
    var nT = function(e) {
      return !1;
    };
    function DD(e) {
      return nT(e);
    }
    var rT = null, aT = null, iT = null, lT = null, oT = null, uT = null, sT = null, cT = null, fT = null;
    {
      var dT = function(e, t, a) {
        var i = t[a], o = gt(e) ? e.slice() : vt({}, e);
        return a + 1 === t.length ? (gt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = dT(e[i], t, a + 1), o);
      }, pT = function(e, t) {
        return dT(e, t, 0);
      }, vT = function(e, t, a, i) {
        var o = t[i], c = gt(e) ? e.slice() : vt({}, e);
        if (i + 1 === t.length) {
          var v = a[i];
          c[v] = c[o], gt(c) ? c.splice(o, 1) : delete c[o];
        } else
          c[o] = vT(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return c;
      }, hT = function(e, t, a) {
        if (t.length !== a.length) {
          S("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              S("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return vT(e, t, a, 0);
      }, mT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], c = gt(e) ? e.slice() : vt({}, e);
        return c[o] = mT(e[o], t, a + 1, i), c;
      }, yT = function(e, t, a) {
        return mT(e, t, 0, a);
      }, RE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      rT = function(e, t, a, i) {
        var o = RE(e, t);
        if (o !== null) {
          var c = yT(o.memoizedState, a, i);
          o.memoizedState = c, o.baseState = c, e.memoizedProps = vt({}, e.memoizedProps);
          var v = Va(e, nt);
          v !== null && yr(v, e, nt, en);
        }
      }, aT = function(e, t, a) {
        var i = RE(e, t);
        if (i !== null) {
          var o = pT(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = vt({}, e.memoizedProps);
          var c = Va(e, nt);
          c !== null && yr(c, e, nt, en);
        }
      }, iT = function(e, t, a, i) {
        var o = RE(e, t);
        if (o !== null) {
          var c = hT(o.memoizedState, a, i);
          o.memoizedState = c, o.baseState = c, e.memoizedProps = vt({}, e.memoizedProps);
          var v = Va(e, nt);
          v !== null && yr(v, e, nt, en);
        }
      }, lT = function(e, t, a) {
        e.pendingProps = yT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, nt);
        i !== null && yr(i, e, nt, en);
      }, oT = function(e, t) {
        e.pendingProps = pT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Va(e, nt);
        a !== null && yr(a, e, nt, en);
      }, uT = function(e, t, a) {
        e.pendingProps = hT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, nt);
        i !== null && yr(i, e, nt, en);
      }, sT = function(e) {
        var t = Va(e, nt);
        t !== null && yr(t, e, nt, en);
      }, cT = function(e) {
        tT = e;
      }, fT = function(e) {
        nT = e;
      };
    }
    function OD(e) {
      var t = Kr(e);
      return t === null ? null : t.stateNode;
    }
    function kD(e) {
      return null;
    }
    function MD() {
      return ir;
    }
    function LD(e) {
      var t = e.findFiberByHostInstance, a = d.ReactCurrentDispatcher;
      return Cu({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: rT,
        overrideHookStateDeletePath: aT,
        overrideHookStateRenamePath: iT,
        overrideProps: lT,
        overridePropsDeletePath: oT,
        overridePropsRenamePath: uT,
        setErrorHandler: cT,
        setSuspenseHandler: fT,
        scheduleUpdate: sT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: OD,
        findFiberByHostInstance: t || kD,
        // React Refresh
        findHostInstancesForRefresh: uD,
        scheduleRefresh: lD,
        scheduleRoot: oD,
        setRefreshHandler: iD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: MD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: CE
      });
    }
    var gT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function _E(e) {
      this._internalRoot = e;
    }
    ny.prototype.render = _E.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ry(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Ln) {
          var i = eT(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      iv(e, t, null, null);
    }, ny.prototype.unmount = _E.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        kC() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Xo(function() {
          iv(null, e, null, null);
        }), gw(t);
      }
    };
    function zD(e, t) {
      if (!ry(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      ST(e);
      var a = !1, i = !1, o = "", c = gT;
      t != null && (t.hydrate ? S("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Dr && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = KC(e, Kh, null, a, i, o, c);
      $h(v.current, e);
      var y = e.nodeType === Ln ? e.parentNode : e;
      return fp(y), new _E(v);
    }
    function ny(e) {
      this._internalRoot = e;
    }
    function ND(e) {
      e && dh(e);
    }
    ny.prototype.unstable_scheduleHydration = ND;
    function AD(e, t, a) {
      if (!ry(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      ST(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, c = !1, v = !1, y = "", w = gT;
      a != null && (a.unstable_strictMode === !0 && (c = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (w = a.onRecoverableError));
      var x = JC(t, null, e, Kh, i, c, v, y, w);
      if ($h(x.current, e), fp(e), o)
        for (var _ = 0; _ < o.length; _++) {
          var j = o[_];
          jR(x, j);
        }
      return new ny(x);
    }
    function ry(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === qi || e.nodeType === pd));
    }
    function lv(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === qi || e.nodeType === pd || e.nodeType === Ln && e.nodeValue === " react-mount-point-unstable "));
    }
    function ST(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Cp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var PD = d.ReactCurrentOwner, ET;
    ET = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ln) {
        var t = eT(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = DE(e), o = !!(i && Au(i));
      o && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function DE(e) {
      return e ? e.nodeType === qi ? e.documentElement : e.firstChild : null;
    }
    function wT() {
    }
    function UD(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var c = i;
          i = function() {
            var U = ty(v);
            c.call(U);
          };
        }
        var v = JC(
          t,
          i,
          e,
          Uu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          wT
        );
        e._reactRootContainer = v, $h(v.current, e);
        var y = e.nodeType === Ln ? e.parentNode : e;
        return fp(y), Xo(), v;
      } else {
        for (var w; w = e.lastChild; )
          e.removeChild(w);
        if (typeof i == "function") {
          var x = i;
          i = function() {
            var U = ty(_);
            x.call(U);
          };
        }
        var _ = KC(
          e,
          Uu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          wT
        );
        e._reactRootContainer = _, $h(_.current, e);
        var j = e.nodeType === Ln ? e.parentNode : e;
        return fp(j), Xo(function() {
          iv(t, _, a, i);
        }), _;
      }
    }
    function FD(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ay(e, t, a, i, o) {
      ET(a), FD(o === void 0 ? null : o, "render");
      var c = a._reactRootContainer, v;
      if (!c)
        v = UD(a, t, e, o, i);
      else {
        if (v = c, typeof o == "function") {
          var y = o;
          o = function() {
            var w = ty(v);
            y.call(w);
          };
        }
        iv(t, v, e, o);
      }
      return ty(v);
    }
    var CT = !1;
    function jD(e) {
      {
        CT || (CT = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = PD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", zt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : TD(e, "findDOMNode");
    }
    function HD(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Cp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ay(null, e, t, !0, a);
    }
    function VD(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Cp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ay(null, e, t, !1, a);
    }
    function ID(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !lv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !xy(e))
        throw new Error("parentComponent must be a valid React Component");
      return ay(e, t, a, !1, i);
    }
    var TT = !1;
    function BD(e) {
      if (TT || (TT = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !lv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Cp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = DE(e), i = a && !Au(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Xo(function() {
          ay(null, null, e, !1, function() {
            e._reactRootContainer = null, gw(e);
          });
        }), !0;
      } else {
        {
          var o = DE(e), c = !!(o && Au(o)), v = e.nodeType === Qr && lv(e.parentNode) && !!e.parentNode._reactRootContainer;
          c && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    br(bD), Ru(xD), uh(RD), Us(Fa), Qd(ih), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), _c(Yb), by(iE, A_, Xo);
    function $D(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ry(t))
        throw new Error("Target container is not a DOM element.");
      return CD(e, t, null, a);
    }
    function YD(e, t, a, i) {
      return ID(e, t, a, i);
    }
    var OE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Au, kf, Yh, hu, Dc, iE]
    };
    function GD(e, t) {
      return OE.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), zD(e, t);
    }
    function WD(e, t, a) {
      return OE.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), AD(e, t, a);
    }
    function QD(e) {
      return kC() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Xo(e);
    }
    var qD = LD({
      findFiberByHostInstance: Ks,
      bundleType: 1,
      version: CE,
      rendererPackageName: "react-dom"
    });
    if (!qD && kn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var bT = window.location.protocol;
      /^(https?|file):$/.test(bT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (bT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = OE, Ga.createPortal = $D, Ga.createRoot = GD, Ga.findDOMNode = jD, Ga.flushSync = QD, Ga.hydrate = HD, Ga.hydrateRoot = WD, Ga.render = VD, Ga.unmountComponentAtNode = BD, Ga.unstable_batchedUpdates = iE, Ga.unstable_renderSubtreeIntoContainer = YD, Ga.version = CE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })()), Ga;
}
var PT;
function oO() {
  if (PT) return oy.exports;
  PT = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (u) {
        console.error(u);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (f(), oy.exports = iO()) : oy.exports = lO(), oy.exports;
}
var UT;
function uO() {
  if (UT) return td;
  UT = 1;
  var f = oO();
  if (process.env.NODE_ENV === "production")
    td.createRoot = f.createRoot, td.hydrateRoot = f.hydrateRoot;
  else {
    var u = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    td.createRoot = function(d, h) {
      u.usingClientEntryPoint = !0;
      try {
        return f.createRoot(d, h);
      } finally {
        u.usingClientEntryPoint = !1;
      }
    }, td.hydrateRoot = function(d, h, E) {
      u.usingClientEntryPoint = !0;
      try {
        return f.hydrateRoot(d, h, E);
      } finally {
        u.usingClientEntryPoint = !1;
      }
    };
  }
  return td;
}
var sO = uO();
const cO = /* @__PURE__ */ WT(sO);
function FT(f) {
  return f !== null && typeof f == "object" && "constructor" in f && f.constructor === Object;
}
function BE(f, u) {
  f === void 0 && (f = {}), u === void 0 && (u = {}), Object.keys(u).forEach((d) => {
    typeof f[d] > "u" ? f[d] = u[d] : FT(u[d]) && FT(f[d]) && Object.keys(u[d]).length > 0 && BE(f[d], u[d]);
  });
}
const qT = {
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
function pi() {
  const f = typeof document < "u" ? document : {};
  return BE(f, qT), f;
}
const fO = {
  document: qT,
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
  requestAnimationFrame(f) {
    return typeof setTimeout > "u" ? (f(), null) : setTimeout(f, 0);
  },
  cancelAnimationFrame(f) {
    typeof setTimeout > "u" || clearTimeout(f);
  }
};
function xa() {
  const f = typeof window < "u" ? window : {};
  return BE(f, fO), f;
}
function dO(f) {
  const u = f;
  Object.keys(u).forEach((d) => {
    try {
      u[d] = null;
    } catch {
    }
    try {
      delete u[d];
    } catch {
    }
  });
}
function FE(f, u) {
  return u === void 0 && (u = 0), setTimeout(f, u);
}
function dy() {
  return Date.now();
}
function pO(f) {
  const u = xa();
  let d;
  return u.getComputedStyle && (d = u.getComputedStyle(f, null)), !d && f.currentStyle && (d = f.currentStyle), d || (d = f.style), d;
}
function vO(f, u) {
  u === void 0 && (u = "x");
  const d = xa();
  let h, E, S;
  const g = pO(f);
  return d.WebKitCSSMatrix ? (E = g.transform || g.webkitTransform, E.split(",").length > 6 && (E = E.split(", ").map((R) => R.replace(",", ".")).join(", ")), S = new d.WebKitCSSMatrix(E === "none" ? "" : E)) : (S = g.MozTransform || g.OTransform || g.MsTransform || g.msTransform || g.transform || g.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), h = S.toString().split(",")), u === "x" && (d.WebKitCSSMatrix ? E = S.m41 : h.length === 16 ? E = parseFloat(h[12]) : E = parseFloat(h[4])), u === "y" && (d.WebKitCSSMatrix ? E = S.m42 : h.length === 16 ? E = parseFloat(h[13]) : E = parseFloat(h[5])), E || 0;
}
function fv(f) {
  return typeof f == "object" && f !== null && f.constructor && Object.prototype.toString.call(f).slice(8, -1) === "Object";
}
function hO(f) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? f instanceof HTMLElement : f && (f.nodeType === 1 || f.nodeType === 11);
}
function di() {
  const f = Object(arguments.length <= 0 ? void 0 : arguments[0]), u = ["__proto__", "constructor", "prototype"];
  for (let d = 1; d < arguments.length; d += 1) {
    const h = d < 0 || arguments.length <= d ? void 0 : arguments[d];
    if (h != null && !hO(h)) {
      const E = Object.keys(Object(h)).filter((S) => u.indexOf(S) < 0);
      for (let S = 0, g = E.length; S < g; S += 1) {
        const R = E[S], C = Object.getOwnPropertyDescriptor(h, R);
        C !== void 0 && C.enumerable && (fv(f[R]) && fv(h[R]) ? h[R].__swiper__ ? f[R] = h[R] : di(f[R], h[R]) : !fv(f[R]) && fv(h[R]) ? (f[R] = {}, h[R].__swiper__ ? f[R] = h[R] : di(f[R], h[R])) : f[R] = h[R]);
      }
    }
  }
  return f;
}
function sy(f, u, d) {
  f.style.setProperty(u, d);
}
function XT(f) {
  let {
    swiper: u,
    targetPosition: d,
    side: h
  } = f;
  const E = xa(), S = -u.translate;
  let g = null, R;
  const C = u.params.speed;
  u.wrapperEl.style.scrollSnapType = "none", E.cancelAnimationFrame(u.cssModeFrameID);
  const D = d > S ? "next" : "prev", M = (N, L) => D === "next" && N >= L || D === "prev" && N <= L, O = () => {
    R = (/* @__PURE__ */ new Date()).getTime(), g === null && (g = R);
    const N = Math.max(Math.min((R - g) / C, 1), 0), L = 0.5 - Math.cos(N * Math.PI) / 2;
    let J = S + L * (d - S);
    if (M(J, d) && (J = d), u.wrapperEl.scrollTo({
      [h]: J
    }), M(J, d)) {
      u.wrapperEl.style.overflow = "hidden", u.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        u.wrapperEl.style.overflow = "", u.wrapperEl.scrollTo({
          [h]: J
        });
      }), E.cancelAnimationFrame(u.cssModeFrameID);
      return;
    }
    u.cssModeFrameID = E.requestAnimationFrame(O);
  };
  O();
}
function KT(f) {
  return f.querySelector(".swiper-slide-transform") || f.shadowRoot && f.shadowRoot.querySelector(".swiper-slide-transform") || f;
}
function yl(f, u) {
  return u === void 0 && (u = ""), [...f.children].filter((d) => d.matches(u));
}
function JT(f, u) {
  u === void 0 && (u = []);
  const d = document.createElement(f);
  return d.classList.add(...Array.isArray(u) ? u : [u]), d;
}
function mO(f) {
  const u = xa(), d = pi(), h = f.getBoundingClientRect(), E = d.body, S = f.clientTop || E.clientTop || 0, g = f.clientLeft || E.clientLeft || 0, R = f === u ? u.scrollY : f.scrollTop, C = f === u ? u.scrollX : f.scrollLeft;
  return {
    top: h.top + R - S,
    left: h.left + C - g
  };
}
function yO(f, u) {
  const d = [];
  for (; f.previousElementSibling; ) {
    const h = f.previousElementSibling;
    u ? h.matches(u) && d.push(h) : d.push(h), f = h;
  }
  return d;
}
function gO(f, u) {
  const d = [];
  for (; f.nextElementSibling; ) {
    const h = f.nextElementSibling;
    u ? h.matches(u) && d.push(h) : d.push(h), f = h;
  }
  return d;
}
function Ku(f, u) {
  return xa().getComputedStyle(f, null).getPropertyValue(u);
}
function jT(f) {
  let u = f, d;
  if (u) {
    for (d = 0; (u = u.previousSibling) !== null; )
      u.nodeType === 1 && (d += 1);
    return d;
  }
}
function jE(f, u) {
  const d = [];
  let h = f.parentElement;
  for (; h; )
    u ? h.matches(u) && d.push(h) : d.push(h), h = h.parentElement;
  return d;
}
function SO(f, u) {
  function d(h) {
    h.target === f && (u.call(f, h), f.removeEventListener("transitionend", d));
  }
  u && f.addEventListener("transitionend", d);
}
function HT(f, u, d) {
  const h = xa();
  return f[u === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(h.getComputedStyle(f, null).getPropertyValue(u === "width" ? "margin-right" : "margin-top")) + parseFloat(h.getComputedStyle(f, null).getPropertyValue(u === "width" ? "margin-left" : "margin-bottom"));
}
function EO(f) {
  let {
    swiper: u,
    extendParams: d,
    on: h,
    emit: E
  } = f;
  const S = pi(), g = xa();
  u.keyboard = {
    enabled: !1
  }, d({
    keyboard: {
      enabled: !1,
      onlyInViewport: !0,
      pageUpDown: !0
    }
  });
  function R(M) {
    if (!u.enabled) return;
    const {
      rtlTranslate: O
    } = u;
    let N = M;
    N.originalEvent && (N = N.originalEvent);
    const L = N.keyCode || N.charCode, J = u.params.keyboard.pageUpDown, I = J && L === 33, W = J && L === 34, V = L === 37, te = L === 39, Z = L === 38, oe = L === 40;
    if (!u.allowSlideNext && (u.isHorizontal() && te || u.isVertical() && oe || W) || !u.allowSlidePrev && (u.isHorizontal() && V || u.isVertical() && Z || I))
      return !1;
    if (!(N.shiftKey || N.altKey || N.ctrlKey || N.metaKey) && !(S.activeElement && S.activeElement.nodeName && (S.activeElement.nodeName.toLowerCase() === "input" || S.activeElement.nodeName.toLowerCase() === "textarea"))) {
      if (u.params.keyboard.onlyInViewport && (I || W || V || te || Z || oe)) {
        let le = !1;
        if (jE(u.el, `.${u.params.slideClass}, swiper-slide`).length > 0 && jE(u.el, `.${u.params.slideActiveClass}`).length === 0)
          return;
        const Me = u.el, ue = Me.clientWidth, Ve = Me.clientHeight, fe = g.innerWidth, Tt = g.innerHeight, me = mO(Me);
        O && (me.left -= Me.scrollLeft);
        const be = [[me.left, me.top], [me.left + ue, me.top], [me.left, me.top + Ve], [me.left + ue, me.top + Ve]];
        for (let Ee = 0; Ee < be.length; Ee += 1) {
          const Qe = be[Ee];
          if (Qe[0] >= 0 && Qe[0] <= fe && Qe[1] >= 0 && Qe[1] <= Tt) {
            if (Qe[0] === 0 && Qe[1] === 0) continue;
            le = !0;
          }
        }
        if (!le) return;
      }
      u.isHorizontal() ? ((I || W || V || te) && (N.preventDefault ? N.preventDefault() : N.returnValue = !1), ((W || te) && !O || (I || V) && O) && u.slideNext(), ((I || V) && !O || (W || te) && O) && u.slidePrev()) : ((I || W || Z || oe) && (N.preventDefault ? N.preventDefault() : N.returnValue = !1), (W || oe) && u.slideNext(), (I || Z) && u.slidePrev()), E("keyPress", L);
    }
  }
  function C() {
    u.keyboard.enabled || (S.addEventListener("keydown", R), u.keyboard.enabled = !0);
  }
  function D() {
    u.keyboard.enabled && (S.removeEventListener("keydown", R), u.keyboard.enabled = !1);
  }
  h("init", () => {
    u.params.keyboard.enabled && C();
  }), h("destroy", () => {
    u.keyboard.enabled && D();
  }), Object.assign(u.keyboard, {
    enable: C,
    disable: D
  });
}
function wO(f, u, d, h) {
  return f.params.createElements && Object.keys(h).forEach((E) => {
    if (!d[E] && d.auto === !0) {
      let S = yl(f.el, `.${h[E]}`)[0];
      S || (S = JT("div", h[E]), S.className = h[E], f.el.append(S)), d[E] = S, u[E] = S;
    }
  }), d;
}
function VT(f) {
  let {
    swiper: u,
    extendParams: d,
    on: h,
    emit: E
  } = f;
  d({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), u.navigation = {
    nextEl: null,
    prevEl: null
  };
  const S = (I) => (Array.isArray(I) ? I : [I]).filter((W) => !!W);
  function g(I) {
    let W;
    return I && typeof I == "string" && u.isElement && (W = u.el.querySelector(I), W) ? W : (I && (typeof I == "string" && (W = [...document.querySelectorAll(I)]), u.params.uniqueNavElements && typeof I == "string" && W.length > 1 && u.el.querySelectorAll(I).length === 1 && (W = u.el.querySelector(I))), I && !W ? I : W);
  }
  function R(I, W) {
    const V = u.params.navigation;
    I = S(I), I.forEach((te) => {
      te && (te.classList[W ? "add" : "remove"](...V.disabledClass.split(" ")), te.tagName === "BUTTON" && (te.disabled = W), u.params.watchOverflow && u.enabled && te.classList[u.isLocked ? "add" : "remove"](V.lockClass));
    });
  }
  function C() {
    const {
      nextEl: I,
      prevEl: W
    } = u.navigation;
    if (u.params.loop) {
      R(W, !1), R(I, !1);
      return;
    }
    R(W, u.isBeginning && !u.params.rewind), R(I, u.isEnd && !u.params.rewind);
  }
  function D(I) {
    I.preventDefault(), !(u.isBeginning && !u.params.loop && !u.params.rewind) && (u.slidePrev(), E("navigationPrev"));
  }
  function M(I) {
    I.preventDefault(), !(u.isEnd && !u.params.loop && !u.params.rewind) && (u.slideNext(), E("navigationNext"));
  }
  function O() {
    const I = u.params.navigation;
    if (u.params.navigation = wO(u, u.originalParams.navigation, u.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    }), !(I.nextEl || I.prevEl)) return;
    let W = g(I.nextEl), V = g(I.prevEl);
    Object.assign(u.navigation, {
      nextEl: W,
      prevEl: V
    }), W = S(W), V = S(V);
    const te = (Z, oe) => {
      Z && Z.addEventListener("click", oe === "next" ? M : D), !u.enabled && Z && Z.classList.add(...I.lockClass.split(" "));
    };
    W.forEach((Z) => te(Z, "next")), V.forEach((Z) => te(Z, "prev"));
  }
  function N() {
    let {
      nextEl: I,
      prevEl: W
    } = u.navigation;
    I = S(I), W = S(W);
    const V = (te, Z) => {
      te.removeEventListener("click", Z === "next" ? M : D), te.classList.remove(...u.params.navigation.disabledClass.split(" "));
    };
    I.forEach((te) => V(te, "next")), W.forEach((te) => V(te, "prev"));
  }
  h("init", () => {
    u.params.navigation.enabled === !1 ? J() : (O(), C());
  }), h("toEdge fromEdge lock unlock", () => {
    C();
  }), h("destroy", () => {
    N();
  }), h("enable disable", () => {
    let {
      nextEl: I,
      prevEl: W
    } = u.navigation;
    if (I = S(I), W = S(W), u.enabled) {
      C();
      return;
    }
    [...I, ...W].filter((V) => !!V).forEach((V) => V.classList.add(u.params.navigation.lockClass));
  }), h("click", (I, W) => {
    let {
      nextEl: V,
      prevEl: te
    } = u.navigation;
    V = S(V), te = S(te);
    const Z = W.target;
    if (u.params.navigation.hideOnClick && !te.includes(Z) && !V.includes(Z)) {
      if (u.pagination && u.params.pagination && u.params.pagination.clickable && (u.pagination.el === Z || u.pagination.el.contains(Z))) return;
      let oe;
      V.length ? oe = V[0].classList.contains(u.params.navigation.hiddenClass) : te.length && (oe = te[0].classList.contains(u.params.navigation.hiddenClass)), E(oe === !0 ? "navigationShow" : "navigationHide"), [...V, ...te].filter((le) => !!le).forEach((le) => le.classList.toggle(u.params.navigation.hiddenClass));
    }
  });
  const L = () => {
    u.el.classList.remove(...u.params.navigation.navigationDisabledClass.split(" ")), O(), C();
  }, J = () => {
    u.el.classList.add(...u.params.navigation.navigationDisabledClass.split(" ")), N();
  };
  Object.assign(u.navigation, {
    enable: L,
    disable: J,
    update: C,
    init: O,
    destroy: N
  });
}
function CO(f) {
  let {
    swiper: u,
    extendParams: d,
    on: h,
    emit: E,
    params: S
  } = f;
  u.autoplay = {
    running: !1,
    paused: !1,
    timeLeft: 0
  }, d({
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
  let g, R, C = S && S.autoplay ? S.autoplay.delay : 3e3, D = S && S.autoplay ? S.autoplay.delay : 3e3, M, O = (/* @__PURE__ */ new Date()).getTime, N, L, J, I, W, V;
  function te(we) {
    !u || u.destroyed || !u.wrapperEl || we.target === u.wrapperEl && (u.wrapperEl.removeEventListener("transitionend", te), fe());
  }
  const Z = () => {
    if (u.destroyed || !u.autoplay.running) return;
    u.autoplay.paused ? N = !0 : N && (D = M, N = !1);
    const we = u.autoplay.paused ? M : O + D - (/* @__PURE__ */ new Date()).getTime();
    u.autoplay.timeLeft = we, E("autoplayTimeLeft", we, we / C), R = requestAnimationFrame(() => {
      Z();
    });
  }, oe = () => {
    let we;
    return u.virtual && u.params.virtual.enabled ? we = u.slides.filter((Ce) => Ce.classList.contains("swiper-slide-active"))[0] : we = u.slides[u.activeIndex], we ? parseInt(we.getAttribute("data-swiper-autoplay"), 10) : void 0;
  }, le = (we) => {
    if (u.destroyed || !u.autoplay.running) return;
    cancelAnimationFrame(R), Z();
    let pe = typeof we > "u" ? u.params.autoplay.delay : we;
    C = u.params.autoplay.delay, D = u.params.autoplay.delay;
    const Ce = oe();
    !Number.isNaN(Ce) && Ce > 0 && typeof we > "u" && (pe = Ce, C = Ce, D = Ce), M = pe;
    const Se = u.params.speed, H = () => {
      !u || u.destroyed || (u.params.autoplay.reverseDirection ? !u.isBeginning || u.params.loop || u.params.rewind ? (u.slidePrev(Se, !0, !0), E("autoplay")) : u.params.autoplay.stopOnLastSlide || (u.slideTo(u.slides.length - 1, Se, !0, !0), E("autoplay")) : !u.isEnd || u.params.loop || u.params.rewind ? (u.slideNext(Se, !0, !0), E("autoplay")) : u.params.autoplay.stopOnLastSlide || (u.slideTo(0, Se, !0, !0), E("autoplay")), u.params.cssMode && (O = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
        le();
      })));
    };
    return pe > 0 ? (clearTimeout(g), g = setTimeout(() => {
      H();
    }, pe)) : requestAnimationFrame(() => {
      H();
    }), pe;
  }, Me = () => {
    u.autoplay.running = !0, le(), E("autoplayStart");
  }, ue = () => {
    u.autoplay.running = !1, clearTimeout(g), cancelAnimationFrame(R), E("autoplayStop");
  }, Ve = (we, pe) => {
    if (u.destroyed || !u.autoplay.running) return;
    clearTimeout(g), we || (V = !0);
    const Ce = () => {
      E("autoplayPause"), u.params.autoplay.waitForTransition ? u.wrapperEl.addEventListener("transitionend", te) : fe();
    };
    if (u.autoplay.paused = !0, pe) {
      W && (M = u.params.autoplay.delay), W = !1, Ce();
      return;
    }
    M = (M || u.params.autoplay.delay) - ((/* @__PURE__ */ new Date()).getTime() - O), !(u.isEnd && M < 0 && !u.params.loop) && (M < 0 && (M = 0), Ce());
  }, fe = () => {
    u.isEnd && M < 0 && !u.params.loop || u.destroyed || !u.autoplay.running || (O = (/* @__PURE__ */ new Date()).getTime(), V ? (V = !1, le(M)) : le(), u.autoplay.paused = !1, E("autoplayResume"));
  }, Tt = () => {
    if (u.destroyed || !u.autoplay.running) return;
    const we = pi();
    we.visibilityState === "hidden" && (V = !0, Ve(!0)), we.visibilityState === "visible" && fe();
  }, me = (we) => {
    we.pointerType === "mouse" && (V = !0, !(u.animating || u.autoplay.paused) && Ve(!0));
  }, be = (we) => {
    we.pointerType === "mouse" && u.autoplay.paused && fe();
  }, Ee = () => {
    u.params.autoplay.pauseOnMouseEnter && (u.el.addEventListener("pointerenter", me), u.el.addEventListener("pointerleave", be));
  }, Qe = () => {
    u.el.removeEventListener("pointerenter", me), u.el.removeEventListener("pointerleave", be);
  }, dt = () => {
    pi().addEventListener("visibilitychange", Tt);
  }, bt = () => {
    pi().removeEventListener("visibilitychange", Tt);
  };
  h("init", () => {
    u.params.autoplay.enabled && (Ee(), dt(), O = (/* @__PURE__ */ new Date()).getTime(), Me());
  }), h("destroy", () => {
    Qe(), bt(), u.autoplay.running && ue();
  }), h("beforeTransitionStart", (we, pe, Ce) => {
    u.destroyed || !u.autoplay.running || (Ce || !u.params.autoplay.disableOnInteraction ? Ve(!0, !0) : ue());
  }), h("sliderFirstMove", () => {
    if (!(u.destroyed || !u.autoplay.running)) {
      if (u.params.autoplay.disableOnInteraction) {
        ue();
        return;
      }
      L = !0, J = !1, V = !1, I = setTimeout(() => {
        V = !0, J = !0, Ve(!0);
      }, 200);
    }
  }), h("touchEnd", () => {
    if (!(u.destroyed || !u.autoplay.running || !L)) {
      if (clearTimeout(I), clearTimeout(g), u.params.autoplay.disableOnInteraction) {
        J = !1, L = !1;
        return;
      }
      J && u.params.cssMode && fe(), J = !1, L = !1;
    }
  }), h("slideChange", () => {
    u.destroyed || !u.autoplay.running || (W = !0);
  }), Object.assign(u.autoplay, {
    start: Me,
    stop: ue,
    pause: Ve,
    resume: fe
  });
}
function TO(f) {
  let {
    swiper: u,
    extendParams: d,
    on: h
  } = f;
  d({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  let E = !1, S = !1;
  u.thumbs = {
    swiper: null
  };
  function g() {
    const D = u.thumbs.swiper;
    if (!D || D.destroyed) return;
    const M = D.clickedIndex, O = D.clickedSlide;
    if (O && O.classList.contains(u.params.thumbs.slideThumbActiveClass) || typeof M > "u" || M === null) return;
    let N;
    D.params.loop ? N = parseInt(D.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : N = M, u.params.loop ? u.slideToLoop(N) : u.slideTo(N);
  }
  function R() {
    const {
      thumbs: D
    } = u.params;
    if (E) return !1;
    E = !0;
    const M = u.constructor;
    if (D.swiper instanceof M)
      u.thumbs.swiper = D.swiper, Object.assign(u.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(u.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), u.thumbs.swiper.update();
    else if (fv(D.swiper)) {
      const O = Object.assign({}, D.swiper);
      Object.assign(O, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), u.thumbs.swiper = new M(O), S = !0;
    }
    return u.thumbs.swiper.el.classList.add(u.params.thumbs.thumbsContainerClass), u.thumbs.swiper.on("tap", g), !0;
  }
  function C(D) {
    const M = u.thumbs.swiper;
    if (!M || M.destroyed) return;
    const O = M.params.slidesPerView === "auto" ? M.slidesPerViewDynamic() : M.params.slidesPerView;
    let N = 1;
    const L = u.params.thumbs.slideThumbActiveClass;
    if (u.params.slidesPerView > 1 && !u.params.centeredSlides && (N = u.params.slidesPerView), u.params.thumbs.multipleActiveThumbs || (N = 1), N = Math.floor(N), M.slides.forEach((W) => W.classList.remove(L)), M.params.loop || M.params.virtual && M.params.virtual.enabled)
      for (let W = 0; W < N; W += 1)
        yl(M.slidesEl, `[data-swiper-slide-index="${u.realIndex + W}"]`).forEach((V) => {
          V.classList.add(L);
        });
    else
      for (let W = 0; W < N; W += 1)
        M.slides[u.realIndex + W] && M.slides[u.realIndex + W].classList.add(L);
    const J = u.params.thumbs.autoScrollOffset, I = J && !M.params.loop;
    if (u.realIndex !== M.realIndex || I) {
      const W = M.activeIndex;
      let V, te;
      if (M.params.loop) {
        const Z = M.slides.filter((oe) => oe.getAttribute("data-swiper-slide-index") === `${u.realIndex}`)[0];
        V = M.slides.indexOf(Z), te = u.activeIndex > u.previousIndex ? "next" : "prev";
      } else
        V = u.realIndex, te = V > u.previousIndex ? "next" : "prev";
      I && (V += te === "next" ? J : -1 * J), M.visibleSlidesIndexes && M.visibleSlidesIndexes.indexOf(V) < 0 && (M.params.centeredSlides ? V > W ? V = V - Math.floor(O / 2) + 1 : V = V + Math.floor(O / 2) - 1 : V > W && M.params.slidesPerGroup, M.slideTo(V, D ? 0 : void 0));
    }
  }
  h("beforeInit", () => {
    const {
      thumbs: D
    } = u.params;
    if (!(!D || !D.swiper))
      if (typeof D.swiper == "string" || D.swiper instanceof HTMLElement) {
        const M = pi(), O = () => {
          const L = typeof D.swiper == "string" ? M.querySelector(D.swiper) : D.swiper;
          if (L && L.swiper)
            D.swiper = L.swiper, R(), C(!0);
          else if (L) {
            const J = (I) => {
              D.swiper = I.detail[0], L.removeEventListener("init", J), R(), C(!0), D.swiper.update(), u.update();
            };
            L.addEventListener("init", J);
          }
          return L;
        }, N = () => {
          if (u.destroyed) return;
          O() || requestAnimationFrame(N);
        };
        requestAnimationFrame(N);
      } else
        R(), C(!0);
  }), h("slideChange update resize observerUpdate", () => {
    C();
  }), h("setTransition", (D, M) => {
    const O = u.thumbs.swiper;
    !O || O.destroyed || O.setTransition(M);
  }), h("beforeDestroy", () => {
    const D = u.thumbs.swiper;
    !D || D.destroyed || S && D.destroy();
  }), Object.assign(u.thumbs, {
    init: R,
    update: C
  });
}
function bO(f) {
  const {
    effect: u,
    swiper: d,
    on: h,
    setTranslate: E,
    setTransition: S,
    overwriteParams: g,
    perspective: R,
    recreateShadows: C,
    getEffectParams: D
  } = f;
  h("beforeInit", () => {
    if (d.params.effect !== u) return;
    d.classNames.push(`${d.params.containerModifierClass}${u}`), R && R() && d.classNames.push(`${d.params.containerModifierClass}3d`);
    const O = g ? g() : {};
    Object.assign(d.params, O), Object.assign(d.originalParams, O);
  }), h("setTranslate", () => {
    d.params.effect === u && E();
  }), h("setTransition", (O, N) => {
    d.params.effect === u && S(N);
  }), h("transitionEnd", () => {
    if (d.params.effect === u && C) {
      if (!D || !D().slideShadows) return;
      d.slides.forEach((O) => {
        O.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((N) => N.remove());
      }), C();
    }
  });
  let M;
  h("virtualUpdate", () => {
    d.params.effect === u && (d.slides.length || (M = !0), requestAnimationFrame(() => {
      M && d.slides && d.slides.length && (E(), M = !1);
    }));
  });
}
function xO(f, u) {
  const d = KT(u);
  return d !== u && (d.style.backfaceVisibility = "hidden", d.style["-webkit-backface-visibility"] = "hidden"), d;
}
function RO(f) {
  let {
    swiper: u,
    duration: d,
    transformElements: h
  } = f;
  const {
    activeIndex: E
  } = u;
  if (u.params.virtualTranslate && d !== 0) {
    let S = !1, g;
    g = h, g.forEach((R) => {
      SO(R, () => {
        if (S || !u || u.destroyed) return;
        S = !0, u.animating = !1;
        const C = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        u.wrapperEl.dispatchEvent(C);
      });
    });
  }
}
function _O(f) {
  let {
    swiper: u,
    extendParams: d,
    on: h
  } = f;
  d({
    fadeEffect: {
      crossFade: !1
    }
  }), bO({
    effect: "fade",
    swiper: u,
    on: h,
    setTranslate: () => {
      const {
        slides: g
      } = u, R = u.params.fadeEffect;
      for (let C = 0; C < g.length; C += 1) {
        const D = u.slides[C];
        let O = -D.swiperSlideOffset;
        u.params.virtualTranslate || (O -= u.translate);
        let N = 0;
        u.isHorizontal() || (N = O, O = 0);
        const L = u.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(D.progress), 0) : 1 + Math.min(Math.max(D.progress, -1), 0), J = xO(R, D);
        J.style.opacity = L, J.style.transform = `translate3d(${O}px, ${N}px, 0px)`;
      }
    },
    setTransition: (g) => {
      const R = u.slides.map((C) => KT(C));
      R.forEach((C) => {
        C.style.transitionDuration = `${g}ms`;
      }), RO({
        swiper: u,
        duration: g,
        transformElements: R
      });
    },
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !u.params.cssMode
    })
  });
}
let LE;
function DO() {
  const f = xa(), u = pi();
  return {
    smoothScroll: u.documentElement && u.documentElement.style && "scrollBehavior" in u.documentElement.style,
    touch: !!("ontouchstart" in f || f.DocumentTouch && u instanceof f.DocumentTouch)
  };
}
function ZT() {
  return LE || (LE = DO()), LE;
}
let zE;
function OO(f) {
  let {
    userAgent: u
  } = f === void 0 ? {} : f;
  const d = ZT(), h = xa(), E = h.navigator.platform, S = u || h.navigator.userAgent, g = {
    ios: !1,
    android: !1
  }, R = h.screen.width, C = h.screen.height, D = S.match(/(Android);?[\s\/]+([\d.]+)?/);
  let M = S.match(/(iPad).*OS\s([\d_]+)/);
  const O = S.match(/(iPod)(.*OS\s([\d_]+))?/), N = !M && S.match(/(iPhone\sOS|iOS)\s([\d_]+)/), L = E === "Win32";
  let J = E === "MacIntel";
  const I = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !M && J && d.touch && I.indexOf(`${R}x${C}`) >= 0 && (M = S.match(/(Version)\/([\d.]+)/), M || (M = [0, 1, "13_0_0"]), J = !1), D && !L && (g.os = "android", g.android = !0), (M || N || O) && (g.os = "ios", g.ios = !0), g;
}
function kO(f) {
  return f === void 0 && (f = {}), zE || (zE = OO(f)), zE;
}
let NE;
function MO() {
  const f = xa();
  let u = !1;
  function d() {
    const h = f.navigator.userAgent.toLowerCase();
    return h.indexOf("safari") >= 0 && h.indexOf("chrome") < 0 && h.indexOf("android") < 0;
  }
  if (d()) {
    const h = String(f.navigator.userAgent);
    if (h.includes("Version/")) {
      const [E, S] = h.split("Version/")[1].split(" ")[0].split(".").map((g) => Number(g));
      u = E < 16 || E === 16 && S < 2;
    }
  }
  return {
    isSafari: u || d(),
    needPerspectiveFix: u,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(f.navigator.userAgent)
  };
}
function LO() {
  return NE || (NE = MO()), NE;
}
function zO(f) {
  let {
    swiper: u,
    on: d,
    emit: h
  } = f;
  const E = xa();
  let S = null, g = null;
  const R = () => {
    !u || u.destroyed || !u.initialized || (h("beforeResize"), h("resize"));
  }, C = () => {
    !u || u.destroyed || !u.initialized || (S = new ResizeObserver((O) => {
      g = E.requestAnimationFrame(() => {
        const {
          width: N,
          height: L
        } = u;
        let J = N, I = L;
        O.forEach((W) => {
          let {
            contentBoxSize: V,
            contentRect: te,
            target: Z
          } = W;
          Z && Z !== u.el || (J = te ? te.width : (V[0] || V).inlineSize, I = te ? te.height : (V[0] || V).blockSize);
        }), (J !== N || I !== L) && R();
      });
    }), S.observe(u.el));
  }, D = () => {
    g && E.cancelAnimationFrame(g), S && S.unobserve && u.el && (S.unobserve(u.el), S = null);
  }, M = () => {
    !u || u.destroyed || !u.initialized || h("orientationchange");
  };
  d("init", () => {
    if (u.params.resizeObserver && typeof E.ResizeObserver < "u") {
      C();
      return;
    }
    E.addEventListener("resize", R), E.addEventListener("orientationchange", M);
  }), d("destroy", () => {
    D(), E.removeEventListener("resize", R), E.removeEventListener("orientationchange", M);
  });
}
function NO(f) {
  let {
    swiper: u,
    extendParams: d,
    on: h,
    emit: E
  } = f;
  const S = [], g = xa(), R = function(M, O) {
    O === void 0 && (O = {});
    const N = g.MutationObserver || g.WebkitMutationObserver, L = new N((J) => {
      if (u.__preventObserver__) return;
      if (J.length === 1) {
        E("observerUpdate", J[0]);
        return;
      }
      const I = function() {
        E("observerUpdate", J[0]);
      };
      g.requestAnimationFrame ? g.requestAnimationFrame(I) : g.setTimeout(I, 0);
    });
    L.observe(M, {
      attributes: typeof O.attributes > "u" ? !0 : O.attributes,
      childList: typeof O.childList > "u" ? !0 : O.childList,
      characterData: typeof O.characterData > "u" ? !0 : O.characterData
    }), S.push(L);
  }, C = () => {
    if (u.params.observer) {
      if (u.params.observeParents) {
        const M = jE(u.hostEl);
        for (let O = 0; O < M.length; O += 1)
          R(M[O]);
      }
      R(u.hostEl, {
        childList: u.params.observeSlideChildren
      }), R(u.wrapperEl, {
        attributes: !1
      });
    }
  }, D = () => {
    S.forEach((M) => {
      M.disconnect();
    }), S.splice(0, S.length);
  };
  d({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), h("init", C), h("destroy", D);
}
var AO = {
  on(f, u, d) {
    const h = this;
    if (!h.eventsListeners || h.destroyed || typeof u != "function") return h;
    const E = d ? "unshift" : "push";
    return f.split(" ").forEach((S) => {
      h.eventsListeners[S] || (h.eventsListeners[S] = []), h.eventsListeners[S][E](u);
    }), h;
  },
  once(f, u, d) {
    const h = this;
    if (!h.eventsListeners || h.destroyed || typeof u != "function") return h;
    function E() {
      h.off(f, E), E.__emitterProxy && delete E.__emitterProxy;
      for (var S = arguments.length, g = new Array(S), R = 0; R < S; R++)
        g[R] = arguments[R];
      u.apply(h, g);
    }
    return E.__emitterProxy = u, h.on(f, E, d);
  },
  onAny(f, u) {
    const d = this;
    if (!d.eventsListeners || d.destroyed || typeof f != "function") return d;
    const h = u ? "unshift" : "push";
    return d.eventsAnyListeners.indexOf(f) < 0 && d.eventsAnyListeners[h](f), d;
  },
  offAny(f) {
    const u = this;
    if (!u.eventsListeners || u.destroyed || !u.eventsAnyListeners) return u;
    const d = u.eventsAnyListeners.indexOf(f);
    return d >= 0 && u.eventsAnyListeners.splice(d, 1), u;
  },
  off(f, u) {
    const d = this;
    return !d.eventsListeners || d.destroyed || !d.eventsListeners || f.split(" ").forEach((h) => {
      typeof u > "u" ? d.eventsListeners[h] = [] : d.eventsListeners[h] && d.eventsListeners[h].forEach((E, S) => {
        (E === u || E.__emitterProxy && E.__emitterProxy === u) && d.eventsListeners[h].splice(S, 1);
      });
    }), d;
  },
  emit() {
    const f = this;
    if (!f.eventsListeners || f.destroyed || !f.eventsListeners) return f;
    let u, d, h;
    for (var E = arguments.length, S = new Array(E), g = 0; g < E; g++)
      S[g] = arguments[g];
    return typeof S[0] == "string" || Array.isArray(S[0]) ? (u = S[0], d = S.slice(1, S.length), h = f) : (u = S[0].events, d = S[0].data, h = S[0].context || f), d.unshift(h), (Array.isArray(u) ? u : u.split(" ")).forEach((C) => {
      f.eventsAnyListeners && f.eventsAnyListeners.length && f.eventsAnyListeners.forEach((D) => {
        D.apply(h, [C, ...d]);
      }), f.eventsListeners && f.eventsListeners[C] && f.eventsListeners[C].forEach((D) => {
        D.apply(h, d);
      });
    }), f;
  }
};
function PO() {
  const f = this;
  let u, d;
  const h = f.el;
  typeof f.params.width < "u" && f.params.width !== null ? u = f.params.width : u = h.clientWidth, typeof f.params.height < "u" && f.params.height !== null ? d = f.params.height : d = h.clientHeight, !(u === 0 && f.isHorizontal() || d === 0 && f.isVertical()) && (u = u - parseInt(Ku(h, "padding-left") || 0, 10) - parseInt(Ku(h, "padding-right") || 0, 10), d = d - parseInt(Ku(h, "padding-top") || 0, 10) - parseInt(Ku(h, "padding-bottom") || 0, 10), Number.isNaN(u) && (u = 0), Number.isNaN(d) && (d = 0), Object.assign(f, {
    width: u,
    height: d,
    size: f.isHorizontal() ? u : d
  }));
}
function UO() {
  const f = this;
  function u(me) {
    return f.isHorizontal() ? me : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[me];
  }
  function d(me, be) {
    return parseFloat(me.getPropertyValue(u(be)) || 0);
  }
  const h = f.params, {
    wrapperEl: E,
    slidesEl: S,
    size: g,
    rtlTranslate: R,
    wrongRTL: C
  } = f, D = f.virtual && h.virtual.enabled, M = D ? f.virtual.slides.length : f.slides.length, O = yl(S, `.${f.params.slideClass}, swiper-slide`), N = D ? f.virtual.slides.length : O.length;
  let L = [];
  const J = [], I = [];
  let W = h.slidesOffsetBefore;
  typeof W == "function" && (W = h.slidesOffsetBefore.call(f));
  let V = h.slidesOffsetAfter;
  typeof V == "function" && (V = h.slidesOffsetAfter.call(f));
  const te = f.snapGrid.length, Z = f.slidesGrid.length;
  let oe = h.spaceBetween, le = -W, Me = 0, ue = 0;
  if (typeof g > "u")
    return;
  typeof oe == "string" && oe.indexOf("%") >= 0 ? oe = parseFloat(oe.replace("%", "")) / 100 * g : typeof oe == "string" && (oe = parseFloat(oe)), f.virtualSize = -oe, O.forEach((me) => {
    R ? me.style.marginLeft = "" : me.style.marginRight = "", me.style.marginBottom = "", me.style.marginTop = "";
  }), h.centeredSlides && h.cssMode && (sy(E, "--swiper-centered-offset-before", ""), sy(E, "--swiper-centered-offset-after", ""));
  const Ve = h.grid && h.grid.rows > 1 && f.grid;
  Ve && f.grid.initSlides(N);
  let fe;
  const Tt = h.slidesPerView === "auto" && h.breakpoints && Object.keys(h.breakpoints).filter((me) => typeof h.breakpoints[me].slidesPerView < "u").length > 0;
  for (let me = 0; me < N; me += 1) {
    fe = 0;
    let be;
    if (O[me] && (be = O[me]), Ve && f.grid.updateSlide(me, be, N, u), !(O[me] && Ku(be, "display") === "none")) {
      if (h.slidesPerView === "auto") {
        Tt && (O[me].style[u("width")] = "");
        const Ee = getComputedStyle(be), Qe = be.style.transform, dt = be.style.webkitTransform;
        if (Qe && (be.style.transform = "none"), dt && (be.style.webkitTransform = "none"), h.roundLengths)
          fe = f.isHorizontal() ? HT(be, "width") : HT(be, "height");
        else {
          const bt = d(Ee, "width"), we = d(Ee, "padding-left"), pe = d(Ee, "padding-right"), Ce = d(Ee, "margin-left"), Se = d(Ee, "margin-right"), H = Ee.getPropertyValue("box-sizing");
          if (H && H === "border-box")
            fe = bt + Ce + Se;
          else {
            const {
              clientWidth: ae,
              offsetWidth: et
            } = be;
            fe = bt + we + pe + Ce + Se + (et - ae);
          }
        }
        Qe && (be.style.transform = Qe), dt && (be.style.webkitTransform = dt), h.roundLengths && (fe = Math.floor(fe));
      } else
        fe = (g - (h.slidesPerView - 1) * oe) / h.slidesPerView, h.roundLengths && (fe = Math.floor(fe)), O[me] && (O[me].style[u("width")] = `${fe}px`);
      O[me] && (O[me].swiperSlideSize = fe), I.push(fe), h.centeredSlides ? (le = le + fe / 2 + Me / 2 + oe, Me === 0 && me !== 0 && (le = le - g / 2 - oe), me === 0 && (le = le - g / 2 - oe), Math.abs(le) < 1 / 1e3 && (le = 0), h.roundLengths && (le = Math.floor(le)), ue % h.slidesPerGroup === 0 && L.push(le), J.push(le)) : (h.roundLengths && (le = Math.floor(le)), (ue - Math.min(f.params.slidesPerGroupSkip, ue)) % f.params.slidesPerGroup === 0 && L.push(le), J.push(le), le = le + fe + oe), f.virtualSize += fe + oe, Me = fe, ue += 1;
    }
  }
  if (f.virtualSize = Math.max(f.virtualSize, g) + V, R && C && (h.effect === "slide" || h.effect === "coverflow") && (E.style.width = `${f.virtualSize + oe}px`), h.setWrapperSize && (E.style[u("width")] = `${f.virtualSize + oe}px`), Ve && f.grid.updateWrapperSize(fe, L, u), !h.centeredSlides) {
    const me = [];
    for (let be = 0; be < L.length; be += 1) {
      let Ee = L[be];
      h.roundLengths && (Ee = Math.floor(Ee)), L[be] <= f.virtualSize - g && me.push(Ee);
    }
    L = me, Math.floor(f.virtualSize - g) - Math.floor(L[L.length - 1]) > 1 && L.push(f.virtualSize - g);
  }
  if (D && h.loop) {
    const me = I[0] + oe;
    if (h.slidesPerGroup > 1) {
      const be = Math.ceil((f.virtual.slidesBefore + f.virtual.slidesAfter) / h.slidesPerGroup), Ee = me * h.slidesPerGroup;
      for (let Qe = 0; Qe < be; Qe += 1)
        L.push(L[L.length - 1] + Ee);
    }
    for (let be = 0; be < f.virtual.slidesBefore + f.virtual.slidesAfter; be += 1)
      h.slidesPerGroup === 1 && L.push(L[L.length - 1] + me), J.push(J[J.length - 1] + me), f.virtualSize += me;
  }
  if (L.length === 0 && (L = [0]), oe !== 0) {
    const me = f.isHorizontal() && R ? "marginLeft" : u("marginRight");
    O.filter((be, Ee) => !h.cssMode || h.loop ? !0 : Ee !== O.length - 1).forEach((be) => {
      be.style[me] = `${oe}px`;
    });
  }
  if (h.centeredSlides && h.centeredSlidesBounds) {
    let me = 0;
    I.forEach((Ee) => {
      me += Ee + (oe || 0);
    }), me -= oe;
    const be = me - g;
    L = L.map((Ee) => Ee <= 0 ? -W : Ee > be ? be + V : Ee);
  }
  if (h.centerInsufficientSlides) {
    let me = 0;
    if (I.forEach((be) => {
      me += be + (oe || 0);
    }), me -= oe, me < g) {
      const be = (g - me) / 2;
      L.forEach((Ee, Qe) => {
        L[Qe] = Ee - be;
      }), J.forEach((Ee, Qe) => {
        J[Qe] = Ee + be;
      });
    }
  }
  if (Object.assign(f, {
    slides: O,
    snapGrid: L,
    slidesGrid: J,
    slidesSizesGrid: I
  }), h.centeredSlides && h.cssMode && !h.centeredSlidesBounds) {
    sy(E, "--swiper-centered-offset-before", `${-L[0]}px`), sy(E, "--swiper-centered-offset-after", `${f.size / 2 - I[I.length - 1] / 2}px`);
    const me = -f.snapGrid[0], be = -f.slidesGrid[0];
    f.snapGrid = f.snapGrid.map((Ee) => Ee + me), f.slidesGrid = f.slidesGrid.map((Ee) => Ee + be);
  }
  if (N !== M && f.emit("slidesLengthChange"), L.length !== te && (f.params.watchOverflow && f.checkOverflow(), f.emit("snapGridLengthChange")), J.length !== Z && f.emit("slidesGridLengthChange"), h.watchSlidesProgress && f.updateSlidesOffset(), !D && !h.cssMode && (h.effect === "slide" || h.effect === "fade")) {
    const me = `${h.containerModifierClass}backface-hidden`, be = f.el.classList.contains(me);
    N <= h.maxBackfaceHiddenSlides ? be || f.el.classList.add(me) : be && f.el.classList.remove(me);
  }
}
function FO(f) {
  const u = this, d = [], h = u.virtual && u.params.virtual.enabled;
  let E = 0, S;
  typeof f == "number" ? u.setTransition(f) : f === !0 && u.setTransition(u.params.speed);
  const g = (R) => h ? u.slides[u.getSlideIndexByData(R)] : u.slides[R];
  if (u.params.slidesPerView !== "auto" && u.params.slidesPerView > 1)
    if (u.params.centeredSlides)
      (u.visibleSlides || []).forEach((R) => {
        d.push(R);
      });
    else
      for (S = 0; S < Math.ceil(u.params.slidesPerView); S += 1) {
        const R = u.activeIndex + S;
        if (R > u.slides.length && !h) break;
        d.push(g(R));
      }
  else
    d.push(g(u.activeIndex));
  for (S = 0; S < d.length; S += 1)
    if (typeof d[S] < "u") {
      const R = d[S].offsetHeight;
      E = R > E ? R : E;
    }
  (E || E === 0) && (u.wrapperEl.style.height = `${E}px`);
}
function jO() {
  const f = this, u = f.slides, d = f.isElement ? f.isHorizontal() ? f.wrapperEl.offsetLeft : f.wrapperEl.offsetTop : 0;
  for (let h = 0; h < u.length; h += 1)
    u[h].swiperSlideOffset = (f.isHorizontal() ? u[h].offsetLeft : u[h].offsetTop) - d - f.cssOverflowAdjustment();
}
function HO(f) {
  f === void 0 && (f = this && this.translate || 0);
  const u = this, d = u.params, {
    slides: h,
    rtlTranslate: E,
    snapGrid: S
  } = u;
  if (h.length === 0) return;
  typeof h[0].swiperSlideOffset > "u" && u.updateSlidesOffset();
  let g = -f;
  E && (g = f), h.forEach((C) => {
    C.classList.remove(d.slideVisibleClass);
  }), u.visibleSlidesIndexes = [], u.visibleSlides = [];
  let R = d.spaceBetween;
  typeof R == "string" && R.indexOf("%") >= 0 ? R = parseFloat(R.replace("%", "")) / 100 * u.size : typeof R == "string" && (R = parseFloat(R));
  for (let C = 0; C < h.length; C += 1) {
    const D = h[C];
    let M = D.swiperSlideOffset;
    d.cssMode && d.centeredSlides && (M -= h[0].swiperSlideOffset);
    const O = (g + (d.centeredSlides ? u.minTranslate() : 0) - M) / (D.swiperSlideSize + R), N = (g - S[0] + (d.centeredSlides ? u.minTranslate() : 0) - M) / (D.swiperSlideSize + R), L = -(g - M), J = L + u.slidesSizesGrid[C];
    (L >= 0 && L < u.size - 1 || J > 1 && J <= u.size || L <= 0 && J >= u.size) && (u.visibleSlides.push(D), u.visibleSlidesIndexes.push(C), h[C].classList.add(d.slideVisibleClass)), D.progress = E ? -O : O, D.originalProgress = E ? -N : N;
  }
}
function VO(f) {
  const u = this;
  if (typeof f > "u") {
    const M = u.rtlTranslate ? -1 : 1;
    f = u && u.translate && u.translate * M || 0;
  }
  const d = u.params, h = u.maxTranslate() - u.minTranslate();
  let {
    progress: E,
    isBeginning: S,
    isEnd: g,
    progressLoop: R
  } = u;
  const C = S, D = g;
  if (h === 0)
    E = 0, S = !0, g = !0;
  else {
    E = (f - u.minTranslate()) / h;
    const M = Math.abs(f - u.minTranslate()) < 1, O = Math.abs(f - u.maxTranslate()) < 1;
    S = M || E <= 0, g = O || E >= 1, M && (E = 0), O && (E = 1);
  }
  if (d.loop) {
    const M = u.getSlideIndexByData(0), O = u.getSlideIndexByData(u.slides.length - 1), N = u.slidesGrid[M], L = u.slidesGrid[O], J = u.slidesGrid[u.slidesGrid.length - 1], I = Math.abs(f);
    I >= N ? R = (I - N) / J : R = (I + J - L) / J, R > 1 && (R -= 1);
  }
  Object.assign(u, {
    progress: E,
    progressLoop: R,
    isBeginning: S,
    isEnd: g
  }), (d.watchSlidesProgress || d.centeredSlides && d.autoHeight) && u.updateSlidesProgress(f), S && !C && u.emit("reachBeginning toEdge"), g && !D && u.emit("reachEnd toEdge"), (C && !S || D && !g) && u.emit("fromEdge"), u.emit("progress", E);
}
function IO() {
  const f = this, {
    slides: u,
    params: d,
    slidesEl: h,
    activeIndex: E
  } = f, S = f.virtual && d.virtual.enabled, g = (C) => yl(h, `.${d.slideClass}${C}, swiper-slide${C}`)[0];
  u.forEach((C) => {
    C.classList.remove(d.slideActiveClass, d.slideNextClass, d.slidePrevClass);
  });
  let R;
  if (S)
    if (d.loop) {
      let C = E - f.virtual.slidesBefore;
      C < 0 && (C = f.virtual.slides.length + C), C >= f.virtual.slides.length && (C -= f.virtual.slides.length), R = g(`[data-swiper-slide-index="${C}"]`);
    } else
      R = g(`[data-swiper-slide-index="${E}"]`);
  else
    R = u[E];
  if (R) {
    R.classList.add(d.slideActiveClass);
    let C = gO(R, `.${d.slideClass}, swiper-slide`)[0];
    d.loop && !C && (C = u[0]), C && C.classList.add(d.slideNextClass);
    let D = yO(R, `.${d.slideClass}, swiper-slide`)[0];
    d.loop && !D === 0 && (D = u[u.length - 1]), D && D.classList.add(d.slidePrevClass);
  }
  f.emitSlidesClasses();
}
const cy = (f, u) => {
  if (!f || f.destroyed || !f.params) return;
  const d = () => f.isElement ? "swiper-slide" : `.${f.params.slideClass}`, h = u.closest(d());
  if (h) {
    let E = h.querySelector(`.${f.params.lazyPreloaderClass}`);
    !E && f.isElement && (h.shadowRoot ? E = h.shadowRoot.querySelector(`.${f.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      h.shadowRoot && (E = h.shadowRoot.querySelector(`.${f.params.lazyPreloaderClass}`), E && E.remove());
    })), E && E.remove();
  }
}, AE = (f, u) => {
  if (!f.slides[u]) return;
  const d = f.slides[u].querySelector('[loading="lazy"]');
  d && d.removeAttribute("loading");
}, HE = (f) => {
  if (!f || f.destroyed || !f.params) return;
  let u = f.params.lazyPreloadPrevNext;
  const d = f.slides.length;
  if (!d || !u || u < 0) return;
  u = Math.min(u, d);
  const h = f.params.slidesPerView === "auto" ? f.slidesPerViewDynamic() : Math.ceil(f.params.slidesPerView), E = f.activeIndex;
  if (f.params.grid && f.params.grid.rows > 1) {
    const g = E, R = [g - u];
    R.push(...Array.from({
      length: u
    }).map((C, D) => g + h + D)), f.slides.forEach((C, D) => {
      R.includes(C.column) && AE(f, D);
    });
    return;
  }
  const S = E + h - 1;
  if (f.params.rewind || f.params.loop)
    for (let g = E - u; g <= S + u; g += 1) {
      const R = (g % d + d) % d;
      (R < E || R > S) && AE(f, R);
    }
  else
    for (let g = Math.max(E - u, 0); g <= Math.min(S + u, d - 1); g += 1)
      g !== E && (g > S || g < E) && AE(f, g);
};
function BO(f) {
  const {
    slidesGrid: u,
    params: d
  } = f, h = f.rtlTranslate ? f.translate : -f.translate;
  let E;
  for (let S = 0; S < u.length; S += 1)
    typeof u[S + 1] < "u" ? h >= u[S] && h < u[S + 1] - (u[S + 1] - u[S]) / 2 ? E = S : h >= u[S] && h < u[S + 1] && (E = S + 1) : h >= u[S] && (E = S);
  return d.normalizeSlideIndex && (E < 0 || typeof E > "u") && (E = 0), E;
}
function $O(f) {
  const u = this, d = u.rtlTranslate ? u.translate : -u.translate, {
    snapGrid: h,
    params: E,
    activeIndex: S,
    realIndex: g,
    snapIndex: R
  } = u;
  let C = f, D;
  const M = (N) => {
    let L = N - u.virtual.slidesBefore;
    return L < 0 && (L = u.virtual.slides.length + L), L >= u.virtual.slides.length && (L -= u.virtual.slides.length), L;
  };
  if (typeof C > "u" && (C = BO(u)), h.indexOf(d) >= 0)
    D = h.indexOf(d);
  else {
    const N = Math.min(E.slidesPerGroupSkip, C);
    D = N + Math.floor((C - N) / E.slidesPerGroup);
  }
  if (D >= h.length && (D = h.length - 1), C === S) {
    D !== R && (u.snapIndex = D, u.emit("snapIndexChange")), u.params.loop && u.virtual && u.params.virtual.enabled && (u.realIndex = M(C));
    return;
  }
  let O;
  u.virtual && E.virtual.enabled && E.loop ? O = M(C) : u.slides[C] ? O = parseInt(u.slides[C].getAttribute("data-swiper-slide-index") || C, 10) : O = C, Object.assign(u, {
    previousSnapIndex: R,
    snapIndex: D,
    previousRealIndex: g,
    realIndex: O,
    previousIndex: S,
    activeIndex: C
  }), u.initialized && HE(u), u.emit("activeIndexChange"), u.emit("snapIndexChange"), (u.initialized || u.params.runCallbacksOnInit) && (g !== O && u.emit("realIndexChange"), u.emit("slideChange"));
}
function YO(f, u) {
  const d = this, h = d.params;
  let E = f.closest(`.${h.slideClass}, swiper-slide`);
  !E && d.isElement && u && u.length > 1 && u.includes(f) && [...u.slice(u.indexOf(f) + 1, u.length)].forEach((R) => {
    !E && R.matches && R.matches(`.${h.slideClass}, swiper-slide`) && (E = R);
  });
  let S = !1, g;
  if (E) {
    for (let R = 0; R < d.slides.length; R += 1)
      if (d.slides[R] === E) {
        S = !0, g = R;
        break;
      }
  }
  if (E && S)
    d.clickedSlide = E, d.virtual && d.params.virtual.enabled ? d.clickedIndex = parseInt(E.getAttribute("data-swiper-slide-index"), 10) : d.clickedIndex = g;
  else {
    d.clickedSlide = void 0, d.clickedIndex = void 0;
    return;
  }
  h.slideToClickedSlide && d.clickedIndex !== void 0 && d.clickedIndex !== d.activeIndex && d.slideToClickedSlide();
}
var GO = {
  updateSize: PO,
  updateSlides: UO,
  updateAutoHeight: FO,
  updateSlidesOffset: jO,
  updateSlidesProgress: HO,
  updateProgress: VO,
  updateSlidesClasses: IO,
  updateActiveIndex: $O,
  updateClickedSlide: YO
};
function WO(f) {
  f === void 0 && (f = this.isHorizontal() ? "x" : "y");
  const u = this, {
    params: d,
    rtlTranslate: h,
    translate: E,
    wrapperEl: S
  } = u;
  if (d.virtualTranslate)
    return h ? -E : E;
  if (d.cssMode)
    return E;
  let g = vO(S, f);
  return g += u.cssOverflowAdjustment(), h && (g = -g), g || 0;
}
function QO(f, u) {
  const d = this, {
    rtlTranslate: h,
    params: E,
    wrapperEl: S,
    progress: g
  } = d;
  let R = 0, C = 0;
  const D = 0;
  d.isHorizontal() ? R = h ? -f : f : C = f, E.roundLengths && (R = Math.floor(R), C = Math.floor(C)), d.previousTranslate = d.translate, d.translate = d.isHorizontal() ? R : C, E.cssMode ? S[d.isHorizontal() ? "scrollLeft" : "scrollTop"] = d.isHorizontal() ? -R : -C : E.virtualTranslate || (d.isHorizontal() ? R -= d.cssOverflowAdjustment() : C -= d.cssOverflowAdjustment(), S.style.transform = `translate3d(${R}px, ${C}px, ${D}px)`);
  let M;
  const O = d.maxTranslate() - d.minTranslate();
  O === 0 ? M = 0 : M = (f - d.minTranslate()) / O, M !== g && d.updateProgress(f), d.emit("setTranslate", d.translate, u);
}
function qO() {
  return -this.snapGrid[0];
}
function XO() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function KO(f, u, d, h, E) {
  f === void 0 && (f = 0), u === void 0 && (u = this.params.speed), d === void 0 && (d = !0), h === void 0 && (h = !0);
  const S = this, {
    params: g,
    wrapperEl: R
  } = S;
  if (S.animating && g.preventInteractionOnTransition)
    return !1;
  const C = S.minTranslate(), D = S.maxTranslate();
  let M;
  if (h && f > C ? M = C : h && f < D ? M = D : M = f, S.updateProgress(M), g.cssMode) {
    const O = S.isHorizontal();
    if (u === 0)
      R[O ? "scrollLeft" : "scrollTop"] = -M;
    else {
      if (!S.support.smoothScroll)
        return XT({
          swiper: S,
          targetPosition: -M,
          side: O ? "left" : "top"
        }), !0;
      R.scrollTo({
        [O ? "left" : "top"]: -M,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return u === 0 ? (S.setTransition(0), S.setTranslate(M), d && (S.emit("beforeTransitionStart", u, E), S.emit("transitionEnd"))) : (S.setTransition(u), S.setTranslate(M), d && (S.emit("beforeTransitionStart", u, E), S.emit("transitionStart")), S.animating || (S.animating = !0, S.onTranslateToWrapperTransitionEnd || (S.onTranslateToWrapperTransitionEnd = function(N) {
    !S || S.destroyed || N.target === this && (S.wrapperEl.removeEventListener("transitionend", S.onTranslateToWrapperTransitionEnd), S.onTranslateToWrapperTransitionEnd = null, delete S.onTranslateToWrapperTransitionEnd, d && S.emit("transitionEnd"));
  }), S.wrapperEl.addEventListener("transitionend", S.onTranslateToWrapperTransitionEnd))), !0;
}
var JO = {
  getTranslate: WO,
  setTranslate: QO,
  minTranslate: qO,
  maxTranslate: XO,
  translateTo: KO
};
function ZO(f, u) {
  const d = this;
  d.params.cssMode || (d.wrapperEl.style.transitionDuration = `${f}ms`, d.wrapperEl.style.transitionDelay = f === 0 ? "0ms" : ""), d.emit("setTransition", f, u);
}
function eb(f) {
  let {
    swiper: u,
    runCallbacks: d,
    direction: h,
    step: E
  } = f;
  const {
    activeIndex: S,
    previousIndex: g
  } = u;
  let R = h;
  if (R || (S > g ? R = "next" : S < g ? R = "prev" : R = "reset"), u.emit(`transition${E}`), d && S !== g) {
    if (R === "reset") {
      u.emit(`slideResetTransition${E}`);
      return;
    }
    u.emit(`slideChangeTransition${E}`), R === "next" ? u.emit(`slideNextTransition${E}`) : u.emit(`slidePrevTransition${E}`);
  }
}
function ek(f, u) {
  f === void 0 && (f = !0);
  const d = this, {
    params: h
  } = d;
  h.cssMode || (h.autoHeight && d.updateAutoHeight(), eb({
    swiper: d,
    runCallbacks: f,
    direction: u,
    step: "Start"
  }));
}
function tk(f, u) {
  f === void 0 && (f = !0);
  const d = this, {
    params: h
  } = d;
  d.animating = !1, !h.cssMode && (d.setTransition(0), eb({
    swiper: d,
    runCallbacks: f,
    direction: u,
    step: "End"
  }));
}
var nk = {
  setTransition: ZO,
  transitionStart: ek,
  transitionEnd: tk
};
function rk(f, u, d, h, E) {
  f === void 0 && (f = 0), u === void 0 && (u = this.params.speed), d === void 0 && (d = !0), typeof f == "string" && (f = parseInt(f, 10));
  const S = this;
  let g = f;
  g < 0 && (g = 0);
  const {
    params: R,
    snapGrid: C,
    slidesGrid: D,
    previousIndex: M,
    activeIndex: O,
    rtlTranslate: N,
    wrapperEl: L,
    enabled: J
  } = S;
  if (S.animating && R.preventInteractionOnTransition || !J && !h && !E)
    return !1;
  const I = Math.min(S.params.slidesPerGroupSkip, g);
  let W = I + Math.floor((g - I) / S.params.slidesPerGroup);
  W >= C.length && (W = C.length - 1);
  const V = -C[W];
  if (R.normalizeSlideIndex)
    for (let Z = 0; Z < D.length; Z += 1) {
      const oe = -Math.floor(V * 100), le = Math.floor(D[Z] * 100), Me = Math.floor(D[Z + 1] * 100);
      typeof D[Z + 1] < "u" ? oe >= le && oe < Me - (Me - le) / 2 ? g = Z : oe >= le && oe < Me && (g = Z + 1) : oe >= le && (g = Z);
    }
  if (S.initialized && g !== O && (!S.allowSlideNext && (N ? V > S.translate && V > S.minTranslate() : V < S.translate && V < S.minTranslate()) || !S.allowSlidePrev && V > S.translate && V > S.maxTranslate() && (O || 0) !== g))
    return !1;
  g !== (M || 0) && d && S.emit("beforeSlideChangeStart"), S.updateProgress(V);
  let te;
  if (g > O ? te = "next" : g < O ? te = "prev" : te = "reset", N && -V === S.translate || !N && V === S.translate)
    return S.updateActiveIndex(g), R.autoHeight && S.updateAutoHeight(), S.updateSlidesClasses(), R.effect !== "slide" && S.setTranslate(V), te !== "reset" && (S.transitionStart(d, te), S.transitionEnd(d, te)), !1;
  if (R.cssMode) {
    const Z = S.isHorizontal(), oe = N ? V : -V;
    if (u === 0) {
      const le = S.virtual && S.params.virtual.enabled;
      le && (S.wrapperEl.style.scrollSnapType = "none", S._immediateVirtual = !0), le && !S._cssModeVirtualInitialSet && S.params.initialSlide > 0 ? (S._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        L[Z ? "scrollLeft" : "scrollTop"] = oe;
      })) : L[Z ? "scrollLeft" : "scrollTop"] = oe, le && requestAnimationFrame(() => {
        S.wrapperEl.style.scrollSnapType = "", S._immediateVirtual = !1;
      });
    } else {
      if (!S.support.smoothScroll)
        return XT({
          swiper: S,
          targetPosition: oe,
          side: Z ? "left" : "top"
        }), !0;
      L.scrollTo({
        [Z ? "left" : "top"]: oe,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return S.setTransition(u), S.setTranslate(V), S.updateActiveIndex(g), S.updateSlidesClasses(), S.emit("beforeTransitionStart", u, h), S.transitionStart(d, te), u === 0 ? S.transitionEnd(d, te) : S.animating || (S.animating = !0, S.onSlideToWrapperTransitionEnd || (S.onSlideToWrapperTransitionEnd = function(oe) {
    !S || S.destroyed || oe.target === this && (S.wrapperEl.removeEventListener("transitionend", S.onSlideToWrapperTransitionEnd), S.onSlideToWrapperTransitionEnd = null, delete S.onSlideToWrapperTransitionEnd, S.transitionEnd(d, te));
  }), S.wrapperEl.addEventListener("transitionend", S.onSlideToWrapperTransitionEnd)), !0;
}
function ak(f, u, d, h) {
  f === void 0 && (f = 0), u === void 0 && (u = this.params.speed), d === void 0 && (d = !0), typeof f == "string" && (f = parseInt(f, 10));
  const E = this;
  let S = f;
  return E.params.loop && (E.virtual && E.params.virtual.enabled ? S = S + E.virtual.slidesBefore : S = E.getSlideIndexByData(S)), E.slideTo(S, u, d, h);
}
function ik(f, u, d) {
  f === void 0 && (f = this.params.speed), u === void 0 && (u = !0);
  const h = this, {
    enabled: E,
    params: S,
    animating: g
  } = h;
  if (!E) return h;
  let R = S.slidesPerGroup;
  S.slidesPerView === "auto" && S.slidesPerGroup === 1 && S.slidesPerGroupAuto && (R = Math.max(h.slidesPerViewDynamic("current", !0), 1));
  const C = h.activeIndex < S.slidesPerGroupSkip ? 1 : R, D = h.virtual && S.virtual.enabled;
  if (S.loop) {
    if (g && !D && S.loopPreventsSliding) return !1;
    if (h.loopFix({
      direction: "next"
    }), h._clientLeft = h.wrapperEl.clientLeft, h.activeIndex === h.slides.length - 1 && S.cssMode)
      return requestAnimationFrame(() => {
        h.slideTo(h.activeIndex + C, f, u, d);
      }), !0;
  }
  return S.rewind && h.isEnd ? h.slideTo(0, f, u, d) : h.slideTo(h.activeIndex + C, f, u, d);
}
function lk(f, u, d) {
  f === void 0 && (f = this.params.speed), u === void 0 && (u = !0);
  const h = this, {
    params: E,
    snapGrid: S,
    slidesGrid: g,
    rtlTranslate: R,
    enabled: C,
    animating: D
  } = h;
  if (!C) return h;
  const M = h.virtual && E.virtual.enabled;
  if (E.loop) {
    if (D && !M && E.loopPreventsSliding) return !1;
    h.loopFix({
      direction: "prev"
    }), h._clientLeft = h.wrapperEl.clientLeft;
  }
  const O = R ? h.translate : -h.translate;
  function N(V) {
    return V < 0 ? -Math.floor(Math.abs(V)) : Math.floor(V);
  }
  const L = N(O), J = S.map((V) => N(V));
  let I = S[J.indexOf(L) - 1];
  if (typeof I > "u" && E.cssMode) {
    let V;
    S.forEach((te, Z) => {
      L >= te && (V = Z);
    }), typeof V < "u" && (I = S[V > 0 ? V - 1 : V]);
  }
  let W = 0;
  if (typeof I < "u" && (W = g.indexOf(I), W < 0 && (W = h.activeIndex - 1), E.slidesPerView === "auto" && E.slidesPerGroup === 1 && E.slidesPerGroupAuto && (W = W - h.slidesPerViewDynamic("previous", !0) + 1, W = Math.max(W, 0))), E.rewind && h.isBeginning) {
    const V = h.params.virtual && h.params.virtual.enabled && h.virtual ? h.virtual.slides.length - 1 : h.slides.length - 1;
    return h.slideTo(V, f, u, d);
  } else if (E.loop && h.activeIndex === 0 && E.cssMode)
    return requestAnimationFrame(() => {
      h.slideTo(W, f, u, d);
    }), !0;
  return h.slideTo(W, f, u, d);
}
function ok(f, u, d) {
  f === void 0 && (f = this.params.speed), u === void 0 && (u = !0);
  const h = this;
  return h.slideTo(h.activeIndex, f, u, d);
}
function uk(f, u, d, h) {
  f === void 0 && (f = this.params.speed), u === void 0 && (u = !0), h === void 0 && (h = 0.5);
  const E = this;
  let S = E.activeIndex;
  const g = Math.min(E.params.slidesPerGroupSkip, S), R = g + Math.floor((S - g) / E.params.slidesPerGroup), C = E.rtlTranslate ? E.translate : -E.translate;
  if (C >= E.snapGrid[R]) {
    const D = E.snapGrid[R], M = E.snapGrid[R + 1];
    C - D > (M - D) * h && (S += E.params.slidesPerGroup);
  } else {
    const D = E.snapGrid[R - 1], M = E.snapGrid[R];
    C - D <= (M - D) * h && (S -= E.params.slidesPerGroup);
  }
  return S = Math.max(S, 0), S = Math.min(S, E.slidesGrid.length - 1), E.slideTo(S, f, u, d);
}
function sk() {
  const f = this, {
    params: u,
    slidesEl: d
  } = f, h = u.slidesPerView === "auto" ? f.slidesPerViewDynamic() : u.slidesPerView;
  let E = f.clickedIndex, S;
  const g = f.isElement ? "swiper-slide" : `.${u.slideClass}`;
  if (u.loop) {
    if (f.animating) return;
    S = parseInt(f.clickedSlide.getAttribute("data-swiper-slide-index"), 10), u.centeredSlides ? E < f.loopedSlides - h / 2 || E > f.slides.length - f.loopedSlides + h / 2 ? (f.loopFix(), E = f.getSlideIndex(yl(d, `${g}[data-swiper-slide-index="${S}"]`)[0]), FE(() => {
      f.slideTo(E);
    })) : f.slideTo(E) : E > f.slides.length - h ? (f.loopFix(), E = f.getSlideIndex(yl(d, `${g}[data-swiper-slide-index="${S}"]`)[0]), FE(() => {
      f.slideTo(E);
    })) : f.slideTo(E);
  } else
    f.slideTo(E);
}
var ck = {
  slideTo: rk,
  slideToLoop: ak,
  slideNext: ik,
  slidePrev: lk,
  slideReset: ok,
  slideToClosest: uk,
  slideToClickedSlide: sk
};
function fk(f) {
  const u = this, {
    params: d,
    slidesEl: h
  } = u;
  if (!d.loop || u.virtual && u.params.virtual.enabled) return;
  yl(h, `.${d.slideClass}, swiper-slide`).forEach((S, g) => {
    S.setAttribute("data-swiper-slide-index", g);
  }), u.loopFix({
    slideRealIndex: f,
    direction: d.centeredSlides ? void 0 : "next"
  });
}
function dk(f) {
  let {
    slideRealIndex: u,
    slideTo: d = !0,
    direction: h,
    setTranslate: E,
    activeSlideIndex: S,
    byController: g,
    byMousewheel: R
  } = f === void 0 ? {} : f;
  const C = this;
  if (!C.params.loop) return;
  C.emit("beforeLoopFix");
  const {
    slides: D,
    allowSlidePrev: M,
    allowSlideNext: O,
    slidesEl: N,
    params: L
  } = C;
  if (C.allowSlidePrev = !0, C.allowSlideNext = !0, C.virtual && L.virtual.enabled) {
    d && (!L.centeredSlides && C.snapIndex === 0 ? C.slideTo(C.virtual.slides.length, 0, !1, !0) : L.centeredSlides && C.snapIndex < L.slidesPerView ? C.slideTo(C.virtual.slides.length + C.snapIndex, 0, !1, !0) : C.snapIndex === C.snapGrid.length - 1 && C.slideTo(C.virtual.slidesBefore, 0, !1, !0)), C.allowSlidePrev = M, C.allowSlideNext = O, C.emit("loopFix");
    return;
  }
  const J = L.slidesPerView === "auto" ? C.slidesPerViewDynamic() : Math.ceil(parseFloat(L.slidesPerView, 10));
  let I = L.loopedSlides || J;
  I % L.slidesPerGroup !== 0 && (I += L.slidesPerGroup - I % L.slidesPerGroup), C.loopedSlides = I;
  const W = [], V = [];
  let te = C.activeIndex;
  typeof S > "u" ? S = C.getSlideIndex(C.slides.filter((ue) => ue.classList.contains(L.slideActiveClass))[0]) : te = S;
  const Z = h === "next" || !h, oe = h === "prev" || !h;
  let le = 0, Me = 0;
  if (S < I) {
    le = Math.max(I - S, L.slidesPerGroup);
    for (let ue = 0; ue < I - S; ue += 1) {
      const Ve = ue - Math.floor(ue / D.length) * D.length;
      W.push(D.length - Ve - 1);
    }
  } else if (S > C.slides.length - I * 2) {
    Me = Math.max(S - (C.slides.length - I * 2), L.slidesPerGroup);
    for (let ue = 0; ue < Me; ue += 1) {
      const Ve = ue - Math.floor(ue / D.length) * D.length;
      V.push(Ve);
    }
  }
  if (oe && W.forEach((ue) => {
    C.slides[ue].swiperLoopMoveDOM = !0, N.prepend(C.slides[ue]), C.slides[ue].swiperLoopMoveDOM = !1;
  }), Z && V.forEach((ue) => {
    C.slides[ue].swiperLoopMoveDOM = !0, N.append(C.slides[ue]), C.slides[ue].swiperLoopMoveDOM = !1;
  }), C.recalcSlides(), L.slidesPerView === "auto" && C.updateSlides(), L.watchSlidesProgress && C.updateSlidesOffset(), d) {
    if (W.length > 0 && oe)
      if (typeof u > "u") {
        const ue = C.slidesGrid[te], fe = C.slidesGrid[te + le] - ue;
        R ? C.setTranslate(C.translate - fe) : (C.slideTo(te + le, 0, !1, !0), E && (C.touches[C.isHorizontal() ? "startX" : "startY"] += fe, C.touchEventsData.currentTranslate = C.translate));
      } else
        E && (C.slideToLoop(u, 0, !1, !0), C.touchEventsData.currentTranslate = C.translate);
    else if (V.length > 0 && Z)
      if (typeof u > "u") {
        const ue = C.slidesGrid[te], fe = C.slidesGrid[te - Me] - ue;
        R ? C.setTranslate(C.translate - fe) : (C.slideTo(te - Me, 0, !1, !0), E && (C.touches[C.isHorizontal() ? "startX" : "startY"] += fe, C.touchEventsData.currentTranslate = C.translate));
      } else
        C.slideToLoop(u, 0, !1, !0);
  }
  if (C.allowSlidePrev = M, C.allowSlideNext = O, C.controller && C.controller.control && !g) {
    const ue = {
      slideRealIndex: u,
      direction: h,
      setTranslate: E,
      activeSlideIndex: S,
      byController: !0
    };
    Array.isArray(C.controller.control) ? C.controller.control.forEach((Ve) => {
      !Ve.destroyed && Ve.params.loop && Ve.loopFix({
        ...ue,
        slideTo: Ve.params.slidesPerView === L.slidesPerView ? d : !1
      });
    }) : C.controller.control instanceof C.constructor && C.controller.control.params.loop && C.controller.control.loopFix({
      ...ue,
      slideTo: C.controller.control.params.slidesPerView === L.slidesPerView ? d : !1
    });
  }
  C.emit("loopFix");
}
function pk() {
  const f = this, {
    params: u,
    slidesEl: d
  } = f;
  if (!u.loop || f.virtual && f.params.virtual.enabled) return;
  f.recalcSlides();
  const h = [];
  f.slides.forEach((E) => {
    const S = typeof E.swiperSlideIndex > "u" ? E.getAttribute("data-swiper-slide-index") * 1 : E.swiperSlideIndex;
    h[S] = E;
  }), f.slides.forEach((E) => {
    E.removeAttribute("data-swiper-slide-index");
  }), h.forEach((E) => {
    d.append(E);
  }), f.recalcSlides(), f.slideTo(f.realIndex, 0);
}
var vk = {
  loopCreate: fk,
  loopFix: dk,
  loopDestroy: pk
};
function hk(f) {
  const u = this;
  if (!u.params.simulateTouch || u.params.watchOverflow && u.isLocked || u.params.cssMode) return;
  const d = u.params.touchEventsTarget === "container" ? u.el : u.wrapperEl;
  u.isElement && (u.__preventObserver__ = !0), d.style.cursor = "move", d.style.cursor = f ? "grabbing" : "grab", u.isElement && requestAnimationFrame(() => {
    u.__preventObserver__ = !1;
  });
}
function mk() {
  const f = this;
  f.params.watchOverflow && f.isLocked || f.params.cssMode || (f.isElement && (f.__preventObserver__ = !0), f[f.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", f.isElement && requestAnimationFrame(() => {
    f.__preventObserver__ = !1;
  }));
}
var yk = {
  setGrabCursor: hk,
  unsetGrabCursor: mk
};
function gk(f, u) {
  u === void 0 && (u = this);
  function d(h) {
    if (!h || h === pi() || h === xa()) return null;
    h.assignedSlot && (h = h.assignedSlot);
    const E = h.closest(f);
    return !E && !h.getRootNode ? null : E || d(h.getRootNode().host);
  }
  return d(u);
}
function Sk(f) {
  const u = this, d = pi(), h = xa(), E = u.touchEventsData;
  E.evCache.push(f);
  const {
    params: S,
    touches: g,
    enabled: R
  } = u;
  if (!R || !S.simulateTouch && f.pointerType === "mouse" || u.animating && S.preventInteractionOnTransition)
    return;
  !u.animating && S.cssMode && S.loop && u.loopFix();
  let C = f;
  C.originalEvent && (C = C.originalEvent);
  let D = C.target;
  if (S.touchEventsTarget === "wrapper" && !u.wrapperEl.contains(D) || "which" in C && C.which === 3 || "button" in C && C.button > 0 || E.isTouched && E.isMoved) return;
  const M = !!S.noSwipingClass && S.noSwipingClass !== "", O = f.composedPath ? f.composedPath() : f.path;
  M && C.target && C.target.shadowRoot && O && (D = O[0]);
  const N = S.noSwipingSelector ? S.noSwipingSelector : `.${S.noSwipingClass}`, L = !!(C.target && C.target.shadowRoot);
  if (S.noSwiping && (L ? gk(N, D) : D.closest(N))) {
    u.allowClick = !0;
    return;
  }
  if (S.swipeHandler && !D.closest(S.swipeHandler))
    return;
  g.currentX = C.pageX, g.currentY = C.pageY;
  const J = g.currentX, I = g.currentY, W = S.edgeSwipeDetection || S.iOSEdgeSwipeDetection, V = S.edgeSwipeThreshold || S.iOSEdgeSwipeThreshold;
  if (W && (J <= V || J >= h.innerWidth - V))
    if (W === "prevent")
      f.preventDefault();
    else
      return;
  Object.assign(E, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), g.startX = J, g.startY = I, E.touchStartTime = dy(), u.allowClick = !0, u.updateSize(), u.swipeDirection = void 0, S.threshold > 0 && (E.allowThresholdMove = !1);
  let te = !0;
  D.matches(E.focusableElements) && (te = !1, D.nodeName === "SELECT" && (E.isTouched = !1)), d.activeElement && d.activeElement.matches(E.focusableElements) && d.activeElement !== D && d.activeElement.blur();
  const Z = te && u.allowTouchMove && S.touchStartPreventDefault;
  (S.touchStartForcePreventDefault || Z) && !D.isContentEditable && C.preventDefault(), S.freeMode && S.freeMode.enabled && u.freeMode && u.animating && !S.cssMode && u.freeMode.onTouchStart(), u.emit("touchStart", C);
}
function Ek(f) {
  const u = pi(), d = this, h = d.touchEventsData, {
    params: E,
    touches: S,
    rtlTranslate: g,
    enabled: R
  } = d;
  if (!R || !E.simulateTouch && f.pointerType === "mouse") return;
  let C = f;
  if (C.originalEvent && (C = C.originalEvent), !h.isTouched) {
    h.startMoving && h.isScrolling && d.emit("touchMoveOpposite", C);
    return;
  }
  const D = h.evCache.findIndex((ue) => ue.pointerId === C.pointerId);
  D >= 0 && (h.evCache[D] = C);
  const M = h.evCache.length > 1 ? h.evCache[0] : C, O = M.pageX, N = M.pageY;
  if (C.preventedByNestedSwiper) {
    S.startX = O, S.startY = N;
    return;
  }
  if (!d.allowTouchMove) {
    C.target.matches(h.focusableElements) || (d.allowClick = !1), h.isTouched && (Object.assign(S, {
      startX: O,
      startY: N,
      prevX: d.touches.currentX,
      prevY: d.touches.currentY,
      currentX: O,
      currentY: N
    }), h.touchStartTime = dy());
    return;
  }
  if (E.touchReleaseOnEdges && !E.loop) {
    if (d.isVertical()) {
      if (N < S.startY && d.translate <= d.maxTranslate() || N > S.startY && d.translate >= d.minTranslate()) {
        h.isTouched = !1, h.isMoved = !1;
        return;
      }
    } else if (O < S.startX && d.translate <= d.maxTranslate() || O > S.startX && d.translate >= d.minTranslate())
      return;
  }
  if (u.activeElement && C.target === u.activeElement && C.target.matches(h.focusableElements)) {
    h.isMoved = !0, d.allowClick = !1;
    return;
  }
  if (h.allowTouchCallbacks && d.emit("touchMove", C), C.targetTouches && C.targetTouches.length > 1) return;
  S.currentX = O, S.currentY = N;
  const L = S.currentX - S.startX, J = S.currentY - S.startY;
  if (d.params.threshold && Math.sqrt(L ** 2 + J ** 2) < d.params.threshold) return;
  if (typeof h.isScrolling > "u") {
    let ue;
    d.isHorizontal() && S.currentY === S.startY || d.isVertical() && S.currentX === S.startX ? h.isScrolling = !1 : L * L + J * J >= 25 && (ue = Math.atan2(Math.abs(J), Math.abs(L)) * 180 / Math.PI, h.isScrolling = d.isHorizontal() ? ue > E.touchAngle : 90 - ue > E.touchAngle);
  }
  if (h.isScrolling && d.emit("touchMoveOpposite", C), typeof h.startMoving > "u" && (S.currentX !== S.startX || S.currentY !== S.startY) && (h.startMoving = !0), h.isScrolling || d.zoom && d.params.zoom && d.params.zoom.enabled && h.evCache.length > 1) {
    h.isTouched = !1;
    return;
  }
  if (!h.startMoving)
    return;
  d.allowClick = !1, !E.cssMode && C.cancelable && C.preventDefault(), E.touchMoveStopPropagation && !E.nested && C.stopPropagation();
  let I = d.isHorizontal() ? L : J, W = d.isHorizontal() ? S.currentX - S.previousX : S.currentY - S.previousY;
  E.oneWayMovement && (I = Math.abs(I) * (g ? 1 : -1), W = Math.abs(W) * (g ? 1 : -1)), S.diff = I, I *= E.touchRatio, g && (I = -I, W = -W);
  const V = d.touchesDirection;
  d.swipeDirection = I > 0 ? "prev" : "next", d.touchesDirection = W > 0 ? "prev" : "next";
  const te = d.params.loop && !E.cssMode, Z = d.swipeDirection === "next" && d.allowSlideNext || d.swipeDirection === "prev" && d.allowSlidePrev;
  if (!h.isMoved) {
    if (te && Z && d.loopFix({
      direction: d.swipeDirection
    }), h.startTranslate = d.getTranslate(), d.setTransition(0), d.animating) {
      const ue = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0
      });
      d.wrapperEl.dispatchEvent(ue);
    }
    h.allowMomentumBounce = !1, E.grabCursor && (d.allowSlideNext === !0 || d.allowSlidePrev === !0) && d.setGrabCursor(!0), d.emit("sliderFirstMove", C);
  }
  let oe;
  h.isMoved && V !== d.touchesDirection && te && Z && Math.abs(I) >= 1 && (d.loopFix({
    direction: d.swipeDirection,
    setTranslate: !0
  }), oe = !0), d.emit("sliderMove", C), h.isMoved = !0, h.currentTranslate = I + h.startTranslate;
  let le = !0, Me = E.resistanceRatio;
  if (E.touchReleaseOnEdges && (Me = 0), I > 0 ? (te && Z && !oe && h.currentTranslate > (E.centeredSlides ? d.minTranslate() - d.size / 2 : d.minTranslate()) && d.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), h.currentTranslate > d.minTranslate() && (le = !1, E.resistance && (h.currentTranslate = d.minTranslate() - 1 + (-d.minTranslate() + h.startTranslate + I) ** Me))) : I < 0 && (te && Z && !oe && h.currentTranslate < (E.centeredSlides ? d.maxTranslate() + d.size / 2 : d.maxTranslate()) && d.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: d.slides.length - (E.slidesPerView === "auto" ? d.slidesPerViewDynamic() : Math.ceil(parseFloat(E.slidesPerView, 10)))
  }), h.currentTranslate < d.maxTranslate() && (le = !1, E.resistance && (h.currentTranslate = d.maxTranslate() + 1 - (d.maxTranslate() - h.startTranslate - I) ** Me))), le && (C.preventedByNestedSwiper = !0), !d.allowSlideNext && d.swipeDirection === "next" && h.currentTranslate < h.startTranslate && (h.currentTranslate = h.startTranslate), !d.allowSlidePrev && d.swipeDirection === "prev" && h.currentTranslate > h.startTranslate && (h.currentTranslate = h.startTranslate), !d.allowSlidePrev && !d.allowSlideNext && (h.currentTranslate = h.startTranslate), E.threshold > 0)
    if (Math.abs(I) > E.threshold || h.allowThresholdMove) {
      if (!h.allowThresholdMove) {
        h.allowThresholdMove = !0, S.startX = S.currentX, S.startY = S.currentY, h.currentTranslate = h.startTranslate, S.diff = d.isHorizontal() ? S.currentX - S.startX : S.currentY - S.startY;
        return;
      }
    } else {
      h.currentTranslate = h.startTranslate;
      return;
    }
  !E.followFinger || E.cssMode || ((E.freeMode && E.freeMode.enabled && d.freeMode || E.watchSlidesProgress) && (d.updateActiveIndex(), d.updateSlidesClasses()), E.freeMode && E.freeMode.enabled && d.freeMode && d.freeMode.onTouchMove(), d.updateProgress(h.currentTranslate), d.setTranslate(h.currentTranslate));
}
function wk(f) {
  const u = this, d = u.touchEventsData, h = d.evCache.findIndex((Z) => Z.pointerId === f.pointerId);
  if (h >= 0 && d.evCache.splice(h, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(f.type) && !(["pointercancel", "contextmenu"].includes(f.type) && (u.browser.isSafari || u.browser.isWebView)))
    return;
  const {
    params: E,
    touches: S,
    rtlTranslate: g,
    slidesGrid: R,
    enabled: C
  } = u;
  if (!C || !E.simulateTouch && f.pointerType === "mouse") return;
  let D = f;
  if (D.originalEvent && (D = D.originalEvent), d.allowTouchCallbacks && u.emit("touchEnd", D), d.allowTouchCallbacks = !1, !d.isTouched) {
    d.isMoved && E.grabCursor && u.setGrabCursor(!1), d.isMoved = !1, d.startMoving = !1;
    return;
  }
  E.grabCursor && d.isMoved && d.isTouched && (u.allowSlideNext === !0 || u.allowSlidePrev === !0) && u.setGrabCursor(!1);
  const M = dy(), O = M - d.touchStartTime;
  if (u.allowClick) {
    const Z = D.path || D.composedPath && D.composedPath();
    u.updateClickedSlide(Z && Z[0] || D.target, Z), u.emit("tap click", D), O < 300 && M - d.lastClickTime < 300 && u.emit("doubleTap doubleClick", D);
  }
  if (d.lastClickTime = dy(), FE(() => {
    u.destroyed || (u.allowClick = !0);
  }), !d.isTouched || !d.isMoved || !u.swipeDirection || S.diff === 0 || d.currentTranslate === d.startTranslate) {
    d.isTouched = !1, d.isMoved = !1, d.startMoving = !1;
    return;
  }
  d.isTouched = !1, d.isMoved = !1, d.startMoving = !1;
  let N;
  if (E.followFinger ? N = g ? u.translate : -u.translate : N = -d.currentTranslate, E.cssMode)
    return;
  if (E.freeMode && E.freeMode.enabled) {
    u.freeMode.onTouchEnd({
      currentPos: N
    });
    return;
  }
  let L = 0, J = u.slidesSizesGrid[0];
  for (let Z = 0; Z < R.length; Z += Z < E.slidesPerGroupSkip ? 1 : E.slidesPerGroup) {
    const oe = Z < E.slidesPerGroupSkip - 1 ? 1 : E.slidesPerGroup;
    typeof R[Z + oe] < "u" ? N >= R[Z] && N < R[Z + oe] && (L = Z, J = R[Z + oe] - R[Z]) : N >= R[Z] && (L = Z, J = R[R.length - 1] - R[R.length - 2]);
  }
  let I = null, W = null;
  E.rewind && (u.isBeginning ? W = E.virtual && E.virtual.enabled && u.virtual ? u.virtual.slides.length - 1 : u.slides.length - 1 : u.isEnd && (I = 0));
  const V = (N - R[L]) / J, te = L < E.slidesPerGroupSkip - 1 ? 1 : E.slidesPerGroup;
  if (O > E.longSwipesMs) {
    if (!E.longSwipes) {
      u.slideTo(u.activeIndex);
      return;
    }
    u.swipeDirection === "next" && (V >= E.longSwipesRatio ? u.slideTo(E.rewind && u.isEnd ? I : L + te) : u.slideTo(L)), u.swipeDirection === "prev" && (V > 1 - E.longSwipesRatio ? u.slideTo(L + te) : W !== null && V < 0 && Math.abs(V) > E.longSwipesRatio ? u.slideTo(W) : u.slideTo(L));
  } else {
    if (!E.shortSwipes) {
      u.slideTo(u.activeIndex);
      return;
    }
    u.navigation && (D.target === u.navigation.nextEl || D.target === u.navigation.prevEl) ? D.target === u.navigation.nextEl ? u.slideTo(L + te) : u.slideTo(L) : (u.swipeDirection === "next" && u.slideTo(I !== null ? I : L + te), u.swipeDirection === "prev" && u.slideTo(W !== null ? W : L));
  }
}
function IT() {
  const f = this, {
    params: u,
    el: d
  } = f;
  if (d && d.offsetWidth === 0) return;
  u.breakpoints && f.setBreakpoint();
  const {
    allowSlideNext: h,
    allowSlidePrev: E,
    snapGrid: S
  } = f, g = f.virtual && f.params.virtual.enabled;
  f.allowSlideNext = !0, f.allowSlidePrev = !0, f.updateSize(), f.updateSlides(), f.updateSlidesClasses();
  const R = g && u.loop;
  (u.slidesPerView === "auto" || u.slidesPerView > 1) && f.isEnd && !f.isBeginning && !f.params.centeredSlides && !R ? f.slideTo(f.slides.length - 1, 0, !1, !0) : f.params.loop && !g ? f.slideToLoop(f.realIndex, 0, !1, !0) : f.slideTo(f.activeIndex, 0, !1, !0), f.autoplay && f.autoplay.running && f.autoplay.paused && (clearTimeout(f.autoplay.resizeTimeout), f.autoplay.resizeTimeout = setTimeout(() => {
    f.autoplay && f.autoplay.running && f.autoplay.paused && f.autoplay.resume();
  }, 500)), f.allowSlidePrev = E, f.allowSlideNext = h, f.params.watchOverflow && S !== f.snapGrid && f.checkOverflow();
}
function Ck(f) {
  const u = this;
  u.enabled && (u.allowClick || (u.params.preventClicks && f.preventDefault(), u.params.preventClicksPropagation && u.animating && (f.stopPropagation(), f.stopImmediatePropagation())));
}
function Tk() {
  const f = this, {
    wrapperEl: u,
    rtlTranslate: d,
    enabled: h
  } = f;
  if (!h) return;
  f.previousTranslate = f.translate, f.isHorizontal() ? f.translate = -u.scrollLeft : f.translate = -u.scrollTop, f.translate === 0 && (f.translate = 0), f.updateActiveIndex(), f.updateSlidesClasses();
  let E;
  const S = f.maxTranslate() - f.minTranslate();
  S === 0 ? E = 0 : E = (f.translate - f.minTranslate()) / S, E !== f.progress && f.updateProgress(d ? -f.translate : f.translate), f.emit("setTranslate", f.translate, !1);
}
function bk(f) {
  const u = this;
  cy(u, f.target), !(u.params.cssMode || u.params.slidesPerView !== "auto" && !u.params.autoHeight) && u.update();
}
let BT = !1;
function xk() {
}
const tb = (f, u) => {
  const d = pi(), {
    params: h,
    el: E,
    wrapperEl: S,
    device: g
  } = f, R = !!h.nested, C = u === "on" ? "addEventListener" : "removeEventListener", D = u;
  E[C]("pointerdown", f.onTouchStart, {
    passive: !1
  }), d[C]("pointermove", f.onTouchMove, {
    passive: !1,
    capture: R
  }), d[C]("pointerup", f.onTouchEnd, {
    passive: !0
  }), d[C]("pointercancel", f.onTouchEnd, {
    passive: !0
  }), d[C]("pointerout", f.onTouchEnd, {
    passive: !0
  }), d[C]("pointerleave", f.onTouchEnd, {
    passive: !0
  }), d[C]("contextmenu", f.onTouchEnd, {
    passive: !0
  }), (h.preventClicks || h.preventClicksPropagation) && E[C]("click", f.onClick, !0), h.cssMode && S[C]("scroll", f.onScroll), h.updateOnWindowResize ? f[D](g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", IT, !0) : f[D]("observerUpdate", IT, !0), E[C]("load", f.onLoad, {
    capture: !0
  });
};
function Rk() {
  const f = this, u = pi(), {
    params: d
  } = f;
  f.onTouchStart = Sk.bind(f), f.onTouchMove = Ek.bind(f), f.onTouchEnd = wk.bind(f), d.cssMode && (f.onScroll = Tk.bind(f)), f.onClick = Ck.bind(f), f.onLoad = bk.bind(f), BT || (u.addEventListener("touchstart", xk), BT = !0), tb(f, "on");
}
function _k() {
  tb(this, "off");
}
var Dk = {
  attachEvents: Rk,
  detachEvents: _k
};
const $T = (f, u) => f.grid && u.grid && u.grid.rows > 1;
function Ok() {
  const f = this, {
    realIndex: u,
    initialized: d,
    params: h,
    el: E
  } = f, S = h.breakpoints;
  if (!S || S && Object.keys(S).length === 0) return;
  const g = f.getBreakpoint(S, f.params.breakpointsBase, f.el);
  if (!g || f.currentBreakpoint === g) return;
  const C = (g in S ? S[g] : void 0) || f.originalParams, D = $T(f, h), M = $T(f, C), O = h.enabled;
  D && !M ? (E.classList.remove(`${h.containerModifierClass}grid`, `${h.containerModifierClass}grid-column`), f.emitContainerClasses()) : !D && M && (E.classList.add(`${h.containerModifierClass}grid`), (C.grid.fill && C.grid.fill === "column" || !C.grid.fill && h.grid.fill === "column") && E.classList.add(`${h.containerModifierClass}grid-column`), f.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((V) => {
    if (typeof C[V] > "u") return;
    const te = h[V] && h[V].enabled, Z = C[V] && C[V].enabled;
    te && !Z && f[V].disable(), !te && Z && f[V].enable();
  });
  const N = C.direction && C.direction !== h.direction, L = h.loop && (C.slidesPerView !== h.slidesPerView || N), J = h.loop;
  N && d && f.changeDirection(), di(f.params, C);
  const I = f.params.enabled, W = f.params.loop;
  Object.assign(f, {
    allowTouchMove: f.params.allowTouchMove,
    allowSlideNext: f.params.allowSlideNext,
    allowSlidePrev: f.params.allowSlidePrev
  }), O && !I ? f.disable() : !O && I && f.enable(), f.currentBreakpoint = g, f.emit("_beforeBreakpoint", C), d && (L ? (f.loopDestroy(), f.loopCreate(u), f.updateSlides()) : !J && W ? (f.loopCreate(u), f.updateSlides()) : J && !W && f.loopDestroy()), f.emit("breakpoint", C);
}
function kk(f, u, d) {
  if (u === void 0 && (u = "window"), !f || u === "container" && !d) return;
  let h = !1;
  const E = xa(), S = u === "window" ? E.innerHeight : d.clientHeight, g = Object.keys(f).map((R) => {
    if (typeof R == "string" && R.indexOf("@") === 0) {
      const C = parseFloat(R.substr(1));
      return {
        value: S * C,
        point: R
      };
    }
    return {
      value: R,
      point: R
    };
  });
  g.sort((R, C) => parseInt(R.value, 10) - parseInt(C.value, 10));
  for (let R = 0; R < g.length; R += 1) {
    const {
      point: C,
      value: D
    } = g[R];
    u === "window" ? E.matchMedia(`(min-width: ${D}px)`).matches && (h = C) : D <= d.clientWidth && (h = C);
  }
  return h || "max";
}
var Mk = {
  setBreakpoint: Ok,
  getBreakpoint: kk
};
function Lk(f, u) {
  const d = [];
  return f.forEach((h) => {
    typeof h == "object" ? Object.keys(h).forEach((E) => {
      h[E] && d.push(u + E);
    }) : typeof h == "string" && d.push(u + h);
  }), d;
}
function zk() {
  const f = this, {
    classNames: u,
    params: d,
    rtl: h,
    el: E,
    device: S
  } = f, g = Lk(["initialized", d.direction, {
    "free-mode": f.params.freeMode && d.freeMode.enabled
  }, {
    autoheight: d.autoHeight
  }, {
    rtl: h
  }, {
    grid: d.grid && d.grid.rows > 1
  }, {
    "grid-column": d.grid && d.grid.rows > 1 && d.grid.fill === "column"
  }, {
    android: S.android
  }, {
    ios: S.ios
  }, {
    "css-mode": d.cssMode
  }, {
    centered: d.cssMode && d.centeredSlides
  }, {
    "watch-progress": d.watchSlidesProgress
  }], d.containerModifierClass);
  u.push(...g), E.classList.add(...u), f.emitContainerClasses();
}
function Nk() {
  const f = this, {
    el: u,
    classNames: d
  } = f;
  u.classList.remove(...d), f.emitContainerClasses();
}
var Ak = {
  addClasses: zk,
  removeClasses: Nk
};
function Pk() {
  const f = this, {
    isLocked: u,
    params: d
  } = f, {
    slidesOffsetBefore: h
  } = d;
  if (h) {
    const E = f.slides.length - 1, S = f.slidesGrid[E] + f.slidesSizesGrid[E] + h * 2;
    f.isLocked = f.size > S;
  } else
    f.isLocked = f.snapGrid.length === 1;
  d.allowSlideNext === !0 && (f.allowSlideNext = !f.isLocked), d.allowSlidePrev === !0 && (f.allowSlidePrev = !f.isLocked), u && u !== f.isLocked && (f.isEnd = !1), u !== f.isLocked && f.emit(f.isLocked ? "lock" : "unlock");
}
var Uk = {
  checkOverflow: Pk
}, VE = {
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
function Fk(f, u) {
  return function(h) {
    h === void 0 && (h = {});
    const E = Object.keys(h)[0], S = h[E];
    if (typeof S != "object" || S === null) {
      di(u, h);
      return;
    }
    if (f[E] === !0 && (f[E] = {
      enabled: !0
    }), E === "navigation" && f[E] && f[E].enabled && !f[E].prevEl && !f[E].nextEl && (f[E].auto = !0), ["pagination", "scrollbar"].indexOf(E) >= 0 && f[E] && f[E].enabled && !f[E].el && (f[E].auto = !0), !(E in f && "enabled" in S)) {
      di(u, h);
      return;
    }
    typeof f[E] == "object" && !("enabled" in f[E]) && (f[E].enabled = !0), f[E] || (f[E] = {
      enabled: !1
    }), di(u, h);
  };
}
const PE = {
  eventsEmitter: AO,
  update: GO,
  translate: JO,
  transition: nk,
  slide: ck,
  loop: vk,
  grabCursor: yk,
  events: Dk,
  breakpoints: Mk,
  checkOverflow: Uk,
  classes: Ak
}, UE = {};
let $E = class Zo {
  constructor() {
    let u, d;
    for (var h = arguments.length, E = new Array(h), S = 0; S < h; S++)
      E[S] = arguments[S];
    E.length === 1 && E[0].constructor && Object.prototype.toString.call(E[0]).slice(8, -1) === "Object" ? d = E[0] : [u, d] = E, d || (d = {}), d = di({}, d), u && !d.el && (d.el = u);
    const g = pi();
    if (d.el && typeof d.el == "string" && g.querySelectorAll(d.el).length > 1) {
      const M = [];
      return g.querySelectorAll(d.el).forEach((O) => {
        const N = di({}, d, {
          el: O
        });
        M.push(new Zo(N));
      }), M;
    }
    const R = this;
    R.__swiper__ = !0, R.support = ZT(), R.device = kO({
      userAgent: d.userAgent
    }), R.browser = LO(), R.eventsListeners = {}, R.eventsAnyListeners = [], R.modules = [...R.__modules__], d.modules && Array.isArray(d.modules) && R.modules.push(...d.modules);
    const C = {};
    R.modules.forEach((M) => {
      M({
        params: d,
        swiper: R,
        extendParams: Fk(d, C),
        on: R.on.bind(R),
        once: R.once.bind(R),
        off: R.off.bind(R),
        emit: R.emit.bind(R)
      });
    });
    const D = di({}, VE, C);
    return R.params = di({}, D, UE, d), R.originalParams = di({}, R.params), R.passedParams = di({}, d), R.params && R.params.on && Object.keys(R.params.on).forEach((M) => {
      R.on(M, R.params.on[M]);
    }), R.params && R.params.onAny && R.onAny(R.params.onAny), Object.assign(R, {
      enabled: R.params.enabled,
      el: u,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return R.params.direction === "horizontal";
      },
      isVertical() {
        return R.params.direction === "vertical";
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
      allowSlideNext: R.params.allowSlideNext,
      allowSlidePrev: R.params.allowSlidePrev,
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
        focusableElements: R.params.focusableElements,
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
      allowTouchMove: R.params.allowTouchMove,
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
    }), R.emit("_swiper"), R.params.init && R.init(), R;
  }
  getSlideIndex(u) {
    const {
      slidesEl: d,
      params: h
    } = this, E = yl(d, `.${h.slideClass}, swiper-slide`), S = jT(E[0]);
    return jT(u) - S;
  }
  getSlideIndexByData(u) {
    return this.getSlideIndex(this.slides.filter((d) => d.getAttribute("data-swiper-slide-index") * 1 === u)[0]);
  }
  recalcSlides() {
    const u = this, {
      slidesEl: d,
      params: h
    } = u;
    u.slides = yl(d, `.${h.slideClass}, swiper-slide`);
  }
  enable() {
    const u = this;
    u.enabled || (u.enabled = !0, u.params.grabCursor && u.setGrabCursor(), u.emit("enable"));
  }
  disable() {
    const u = this;
    u.enabled && (u.enabled = !1, u.params.grabCursor && u.unsetGrabCursor(), u.emit("disable"));
  }
  setProgress(u, d) {
    const h = this;
    u = Math.min(Math.max(u, 0), 1);
    const E = h.minTranslate(), g = (h.maxTranslate() - E) * u + E;
    h.translateTo(g, typeof d > "u" ? 0 : d), h.updateActiveIndex(), h.updateSlidesClasses();
  }
  emitContainerClasses() {
    const u = this;
    if (!u.params._emitClasses || !u.el) return;
    const d = u.el.className.split(" ").filter((h) => h.indexOf("swiper") === 0 || h.indexOf(u.params.containerModifierClass) === 0);
    u.emit("_containerClasses", d.join(" "));
  }
  getSlideClasses(u) {
    const d = this;
    return d.destroyed ? "" : u.className.split(" ").filter((h) => h.indexOf("swiper-slide") === 0 || h.indexOf(d.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const u = this;
    if (!u.params._emitClasses || !u.el) return;
    const d = [];
    u.slides.forEach((h) => {
      const E = u.getSlideClasses(h);
      d.push({
        slideEl: h,
        classNames: E
      }), u.emit("_slideClass", h, E);
    }), u.emit("_slideClasses", d);
  }
  slidesPerViewDynamic(u, d) {
    u === void 0 && (u = "current"), d === void 0 && (d = !1);
    const h = this, {
      params: E,
      slides: S,
      slidesGrid: g,
      slidesSizesGrid: R,
      size: C,
      activeIndex: D
    } = h;
    let M = 1;
    if (typeof E.slidesPerView == "number") return E.slidesPerView;
    if (E.centeredSlides) {
      let O = S[D] ? S[D].swiperSlideSize : 0, N;
      for (let L = D + 1; L < S.length; L += 1)
        S[L] && !N && (O += S[L].swiperSlideSize, M += 1, O > C && (N = !0));
      for (let L = D - 1; L >= 0; L -= 1)
        S[L] && !N && (O += S[L].swiperSlideSize, M += 1, O > C && (N = !0));
    } else if (u === "current")
      for (let O = D + 1; O < S.length; O += 1)
        (d ? g[O] + R[O] - g[D] < C : g[O] - g[D] < C) && (M += 1);
    else
      for (let O = D - 1; O >= 0; O -= 1)
        g[D] - g[O] < C && (M += 1);
    return M;
  }
  update() {
    const u = this;
    if (!u || u.destroyed) return;
    const {
      snapGrid: d,
      params: h
    } = u;
    h.breakpoints && u.setBreakpoint(), [...u.el.querySelectorAll('[loading="lazy"]')].forEach((g) => {
      g.complete && cy(u, g);
    }), u.updateSize(), u.updateSlides(), u.updateProgress(), u.updateSlidesClasses();
    function E() {
      const g = u.rtlTranslate ? u.translate * -1 : u.translate, R = Math.min(Math.max(g, u.maxTranslate()), u.minTranslate());
      u.setTranslate(R), u.updateActiveIndex(), u.updateSlidesClasses();
    }
    let S;
    if (h.freeMode && h.freeMode.enabled && !h.cssMode)
      E(), h.autoHeight && u.updateAutoHeight();
    else {
      if ((h.slidesPerView === "auto" || h.slidesPerView > 1) && u.isEnd && !h.centeredSlides) {
        const g = u.virtual && h.virtual.enabled ? u.virtual.slides : u.slides;
        S = u.slideTo(g.length - 1, 0, !1, !0);
      } else
        S = u.slideTo(u.activeIndex, 0, !1, !0);
      S || E();
    }
    h.watchOverflow && d !== u.snapGrid && u.checkOverflow(), u.emit("update");
  }
  changeDirection(u, d) {
    d === void 0 && (d = !0);
    const h = this, E = h.params.direction;
    return u || (u = E === "horizontal" ? "vertical" : "horizontal"), u === E || u !== "horizontal" && u !== "vertical" || (h.el.classList.remove(`${h.params.containerModifierClass}${E}`), h.el.classList.add(`${h.params.containerModifierClass}${u}`), h.emitContainerClasses(), h.params.direction = u, h.slides.forEach((S) => {
      u === "vertical" ? S.style.width = "" : S.style.height = "";
    }), h.emit("changeDirection"), d && h.update()), h;
  }
  changeLanguageDirection(u) {
    const d = this;
    d.rtl && u === "rtl" || !d.rtl && u === "ltr" || (d.rtl = u === "rtl", d.rtlTranslate = d.params.direction === "horizontal" && d.rtl, d.rtl ? (d.el.classList.add(`${d.params.containerModifierClass}rtl`), d.el.dir = "rtl") : (d.el.classList.remove(`${d.params.containerModifierClass}rtl`), d.el.dir = "ltr"), d.update());
  }
  mount(u) {
    const d = this;
    if (d.mounted) return !0;
    let h = u || d.params.el;
    if (typeof h == "string" && (h = document.querySelector(h)), !h)
      return !1;
    h.swiper = d, h.parentNode && h.parentNode.host && h.parentNode.host.nodeName === "SWIPER-CONTAINER" && (d.isElement = !0);
    const E = () => `.${(d.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let g = h && h.shadowRoot && h.shadowRoot.querySelector ? h.shadowRoot.querySelector(E()) : yl(h, E())[0];
    return !g && d.params.createElements && (g = JT("div", d.params.wrapperClass), h.append(g), yl(h, `.${d.params.slideClass}`).forEach((R) => {
      g.append(R);
    })), Object.assign(d, {
      el: h,
      wrapperEl: g,
      slidesEl: d.isElement && !h.parentNode.host.slideSlots ? h.parentNode.host : g,
      hostEl: d.isElement ? h.parentNode.host : h,
      mounted: !0,
      // RTL
      rtl: h.dir.toLowerCase() === "rtl" || Ku(h, "direction") === "rtl",
      rtlTranslate: d.params.direction === "horizontal" && (h.dir.toLowerCase() === "rtl" || Ku(h, "direction") === "rtl"),
      wrongRTL: Ku(g, "display") === "-webkit-box"
    }), !0;
  }
  init(u) {
    const d = this;
    if (d.initialized || d.mount(u) === !1) return d;
    d.emit("beforeInit"), d.params.breakpoints && d.setBreakpoint(), d.addClasses(), d.updateSize(), d.updateSlides(), d.params.watchOverflow && d.checkOverflow(), d.params.grabCursor && d.enabled && d.setGrabCursor(), d.params.loop && d.virtual && d.params.virtual.enabled ? d.slideTo(d.params.initialSlide + d.virtual.slidesBefore, 0, d.params.runCallbacksOnInit, !1, !0) : d.slideTo(d.params.initialSlide, 0, d.params.runCallbacksOnInit, !1, !0), d.params.loop && d.loopCreate(), d.attachEvents();
    const E = [...d.el.querySelectorAll('[loading="lazy"]')];
    return d.isElement && E.push(...d.hostEl.querySelectorAll('[loading="lazy"]')), E.forEach((S) => {
      S.complete ? cy(d, S) : S.addEventListener("load", (g) => {
        cy(d, g.target);
      });
    }), HE(d), d.initialized = !0, HE(d), d.emit("init"), d.emit("afterInit"), d;
  }
  destroy(u, d) {
    u === void 0 && (u = !0), d === void 0 && (d = !0);
    const h = this, {
      params: E,
      el: S,
      wrapperEl: g,
      slides: R
    } = h;
    return typeof h.params > "u" || h.destroyed || (h.emit("beforeDestroy"), h.initialized = !1, h.detachEvents(), E.loop && h.loopDestroy(), d && (h.removeClasses(), S.removeAttribute("style"), g.removeAttribute("style"), R && R.length && R.forEach((C) => {
      C.classList.remove(E.slideVisibleClass, E.slideActiveClass, E.slideNextClass, E.slidePrevClass), C.removeAttribute("style"), C.removeAttribute("data-swiper-slide-index");
    })), h.emit("destroy"), Object.keys(h.eventsListeners).forEach((C) => {
      h.off(C);
    }), u !== !1 && (h.el.swiper = null, dO(h)), h.destroyed = !0), null;
  }
  static extendDefaults(u) {
    di(UE, u);
  }
  static get extendedDefaults() {
    return UE;
  }
  static get defaults() {
    return VE;
  }
  static installModule(u) {
    Zo.prototype.__modules__ || (Zo.prototype.__modules__ = []);
    const d = Zo.prototype.__modules__;
    typeof u == "function" && d.indexOf(u) < 0 && d.push(u);
  }
  static use(u) {
    return Array.isArray(u) ? (u.forEach((d) => Zo.installModule(d)), Zo) : (Zo.installModule(u), Zo);
  }
};
Object.keys(PE).forEach((f) => {
  Object.keys(PE[f]).forEach((u) => {
    $E.prototype[u] = PE[f][u];
  });
});
$E.use([zO, NO]);
const nb = [
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
function vc(f) {
  return typeof f == "object" && f !== null && f.constructor && Object.prototype.toString.call(f).slice(8, -1) === "Object" && !f.__swiper__;
}
function pc(f, u) {
  const d = ["__proto__", "constructor", "prototype"];
  Object.keys(u).filter((h) => d.indexOf(h) < 0).forEach((h) => {
    typeof f[h] > "u" ? f[h] = u[h] : vc(u[h]) && vc(f[h]) && Object.keys(u[h]).length > 0 ? u[h].__swiper__ ? f[h] = u[h] : pc(f[h], u[h]) : f[h] = u[h];
  });
}
function rb(f) {
  return f === void 0 && (f = {}), f.navigation && typeof f.navigation.nextEl > "u" && typeof f.navigation.prevEl > "u";
}
function ab(f) {
  return f === void 0 && (f = {}), f.pagination && typeof f.pagination.el > "u";
}
function ib(f) {
  return f === void 0 && (f = {}), f.scrollbar && typeof f.scrollbar.el > "u";
}
function lb(f) {
  f === void 0 && (f = "");
  const u = f.split(" ").map((h) => h.trim()).filter((h) => !!h), d = [];
  return u.forEach((h) => {
    d.indexOf(h) < 0 && d.push(h);
  }), d.join(" ");
}
function jk(f) {
  return f === void 0 && (f = ""), f ? f.includes("swiper-wrapper") ? f : `swiper-wrapper ${f}` : "swiper-wrapper";
}
function Hk(f) {
  let {
    swiper: u,
    slides: d,
    passedParams: h,
    changedParams: E,
    nextEl: S,
    prevEl: g,
    scrollbarEl: R,
    paginationEl: C
  } = f;
  const D = E.filter((fe) => fe !== "children" && fe !== "direction" && fe !== "wrapperClass"), {
    params: M,
    pagination: O,
    navigation: N,
    scrollbar: L,
    virtual: J,
    thumbs: I
  } = u;
  let W, V, te, Z, oe, le, Me, ue;
  E.includes("thumbs") && h.thumbs && h.thumbs.swiper && M.thumbs && !M.thumbs.swiper && (W = !0), E.includes("controller") && h.controller && h.controller.control && M.controller && !M.controller.control && (V = !0), E.includes("pagination") && h.pagination && (h.pagination.el || C) && (M.pagination || M.pagination === !1) && O && !O.el && (te = !0), E.includes("scrollbar") && h.scrollbar && (h.scrollbar.el || R) && (M.scrollbar || M.scrollbar === !1) && L && !L.el && (Z = !0), E.includes("navigation") && h.navigation && (h.navigation.prevEl || g) && (h.navigation.nextEl || S) && (M.navigation || M.navigation === !1) && N && !N.prevEl && !N.nextEl && (oe = !0);
  const Ve = (fe) => {
    u[fe] && (u[fe].destroy(), fe === "navigation" ? (u.isElement && (u[fe].prevEl.remove(), u[fe].nextEl.remove()), M[fe].prevEl = void 0, M[fe].nextEl = void 0, u[fe].prevEl = void 0, u[fe].nextEl = void 0) : (u.isElement && u[fe].el.remove(), M[fe].el = void 0, u[fe].el = void 0));
  };
  E.includes("loop") && u.isElement && (M.loop && !h.loop ? le = !0 : !M.loop && h.loop ? Me = !0 : ue = !0), D.forEach((fe) => {
    if (vc(M[fe]) && vc(h[fe]))
      pc(M[fe], h[fe]), (fe === "navigation" || fe === "pagination" || fe === "scrollbar") && "enabled" in h[fe] && !h[fe].enabled && Ve(fe);
    else {
      const Tt = h[fe];
      (Tt === !0 || Tt === !1) && (fe === "navigation" || fe === "pagination" || fe === "scrollbar") ? Tt === !1 && Ve(fe) : M[fe] = h[fe];
    }
  }), D.includes("controller") && !V && u.controller && u.controller.control && M.controller && M.controller.control && (u.controller.control = M.controller.control), E.includes("children") && d && J && M.virtual.enabled && (J.slides = d, J.update(!0)), E.includes("children") && d && M.loop && (ue = !0), W && I.init() && I.update(!0), V && (u.controller.control = M.controller.control), te && (u.isElement && (!C || typeof C == "string") && (C = document.createElement("div"), C.classList.add("swiper-pagination"), C.part.add("pagination"), u.el.appendChild(C)), C && (M.pagination.el = C), O.init(), O.render(), O.update()), Z && (u.isElement && (!R || typeof R == "string") && (R = document.createElement("div"), R.classList.add("swiper-scrollbar"), R.part.add("scrollbar"), u.el.appendChild(R)), R && (M.scrollbar.el = R), L.init(), L.updateSize(), L.setTranslate()), oe && (u.isElement && ((!S || typeof S == "string") && (S = document.createElement("div"), S.classList.add("swiper-button-next"), S.innerHTML = u.hostEl.constructor.nextButtonSvg, S.part.add("button-next"), u.el.appendChild(S)), (!g || typeof g == "string") && (g = document.createElement("div"), g.classList.add("swiper-button-prev"), g.innerHTML = u.hostEl.constructor.prevButtonSvg, g.part.add("button-prev"), u.el.appendChild(g))), S && (M.navigation.nextEl = S), g && (M.navigation.prevEl = g), N.init(), N.update()), E.includes("allowSlideNext") && (u.allowSlideNext = h.allowSlideNext), E.includes("allowSlidePrev") && (u.allowSlidePrev = h.allowSlidePrev), E.includes("direction") && u.changeDirection(h.direction, !1), (le || ue) && u.loopDestroy(), (Me || ue) && u.loopCreate(), u.update();
}
function Vk(f, u) {
  f === void 0 && (f = {}), u === void 0 && (u = !0);
  const d = {
    on: {}
  }, h = {}, E = {};
  pc(d, VE), d._emitClasses = !0, d.init = !1;
  const S = {}, g = nb.map((C) => C.replace(/_/, "")), R = Object.assign({}, f);
  return Object.keys(R).forEach((C) => {
    typeof f[C] > "u" || (g.indexOf(C) >= 0 ? vc(f[C]) ? (d[C] = {}, E[C] = {}, pc(d[C], f[C]), pc(E[C], f[C])) : (d[C] = f[C], E[C] = f[C]) : C.search(/on[A-Z]/) === 0 && typeof f[C] == "function" ? u ? h[`${C[2].toLowerCase()}${C.substr(3)}`] = f[C] : d.on[`${C[2].toLowerCase()}${C.substr(3)}`] = f[C] : S[C] = f[C]);
  }), ["navigation", "pagination", "scrollbar"].forEach((C) => {
    d[C] === !0 && (d[C] = {}), d[C] === !1 && delete d[C];
  }), {
    params: d,
    passedParams: E,
    rest: S,
    events: h
  };
}
function Ik(f, u) {
  let {
    el: d,
    nextEl: h,
    prevEl: E,
    paginationEl: S,
    scrollbarEl: g,
    swiper: R
  } = f;
  rb(u) && h && E && (R.params.navigation.nextEl = h, R.originalParams.navigation.nextEl = h, R.params.navigation.prevEl = E, R.originalParams.navigation.prevEl = E), ab(u) && S && (R.params.pagination.el = S, R.originalParams.pagination.el = S), ib(u) && g && (R.params.scrollbar.el = g, R.originalParams.scrollbar.el = g), R.init(d);
}
function Bk(f, u, d, h, E) {
  const S = [];
  if (!u) return S;
  const g = (C) => {
    S.indexOf(C) < 0 && S.push(C);
  };
  if (d && h) {
    const C = h.map(E), D = d.map(E);
    C.join("") !== D.join("") && g("children"), h.length !== d.length && g("children");
  }
  return nb.filter((C) => C[0] === "_").map((C) => C.replace(/_/, "")).forEach((C) => {
    if (C in f && C in u)
      if (vc(f[C]) && vc(u[C])) {
        const D = Object.keys(f[C]), M = Object.keys(u[C]);
        D.length !== M.length ? g(C) : (D.forEach((O) => {
          f[C][O] !== u[C][O] && g(C);
        }), M.forEach((O) => {
          f[C][O] !== u[C][O] && g(C);
        }));
      } else f[C] !== u[C] && g(C);
  }), S;
}
const $k = (f) => {
  !f || f.destroyed || !f.params.virtual || f.params.virtual && !f.params.virtual.enabled || (f.updateSlides(), f.updateProgress(), f.updateSlidesClasses(), f.parallax && f.params.parallax && f.params.parallax.enabled && f.parallax.setTranslate());
};
function py() {
  return py = Object.assign ? Object.assign.bind() : function(f) {
    for (var u = 1; u < arguments.length; u++) {
      var d = arguments[u];
      for (var h in d)
        Object.prototype.hasOwnProperty.call(d, h) && (f[h] = d[h]);
    }
    return f;
  }, py.apply(this, arguments);
}
function ob(f) {
  return f.type && f.type.displayName && f.type.displayName.includes("SwiperSlide");
}
function ub(f) {
  const u = [];
  return gr.Children.toArray(f).forEach((d) => {
    ob(d) ? u.push(d) : d.props && d.props.children && ub(d.props.children).forEach((h) => u.push(h));
  }), u;
}
function Yk(f) {
  const u = [], d = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  return gr.Children.toArray(f).forEach((h) => {
    if (ob(h))
      u.push(h);
    else if (h.props && h.props.slot && d[h.props.slot])
      d[h.props.slot].push(h);
    else if (h.props && h.props.children) {
      const E = ub(h.props.children);
      E.length > 0 ? E.forEach((S) => u.push(S)) : d["container-end"].push(h);
    } else
      d["container-end"].push(h);
  }), {
    slides: u,
    slots: d
  };
}
function Gk(f, u, d) {
  if (!d) return null;
  const h = (M) => {
    let O = M;
    return M < 0 ? O = u.length + M : O >= u.length && (O = O - u.length), O;
  }, E = f.isHorizontal() ? {
    [f.rtlTranslate ? "right" : "left"]: `${d.offset}px`
  } : {
    top: `${d.offset}px`
  }, {
    from: S,
    to: g
  } = d, R = f.params.loop ? -u.length : 0, C = f.params.loop ? u.length * 2 : u.length, D = [];
  for (let M = R; M < C; M += 1)
    M >= S && M <= g && D.push(u[h(M)]);
  return D.map((M, O) => /* @__PURE__ */ gr.cloneElement(M, {
    swiper: f,
    style: E,
    key: `slide-${O}`
  }));
}
function dv(f, u) {
  return typeof window > "u" ? fn.useEffect(f, u) : fn.useLayoutEffect(f, u);
}
const YT = /* @__PURE__ */ fn.createContext(null), Wk = /* @__PURE__ */ fn.createContext(null), IE = /* @__PURE__ */ fn.forwardRef(function(f, u) {
  let {
    className: d,
    tag: h = "div",
    wrapperTag: E = "div",
    children: S,
    onSwiper: g,
    ...R
  } = f === void 0 ? {} : f, C = !1;
  const [D, M] = fn.useState("swiper"), [O, N] = fn.useState(null), [L, J] = fn.useState(!1), I = fn.useRef(!1), W = fn.useRef(null), V = fn.useRef(null), te = fn.useRef(null), Z = fn.useRef(null), oe = fn.useRef(null), le = fn.useRef(null), Me = fn.useRef(null), ue = fn.useRef(null), {
    params: Ve,
    passedParams: fe,
    rest: Tt,
    events: me
  } = Vk(R), {
    slides: be,
    slots: Ee
  } = Yk(S), Qe = () => {
    J(!L);
  };
  Object.assign(Ve.on, {
    _containerClasses(Ce, Se) {
      M(Se);
    }
  });
  const dt = () => {
    Object.assign(Ve.on, me), C = !0;
    const Ce = {
      ...Ve
    };
    if (delete Ce.wrapperClass, V.current = new $E(Ce), V.current.virtual && V.current.params.virtual.enabled) {
      V.current.virtual.slides = be;
      const Se = {
        cache: !1,
        slides: be,
        renderExternal: N,
        renderExternalUpdate: !1
      };
      pc(V.current.params.virtual, Se), pc(V.current.originalParams.virtual, Se);
    }
  };
  W.current || dt(), V.current && V.current.on("_beforeBreakpoint", Qe);
  const bt = () => {
    C || !me || !V.current || Object.keys(me).forEach((Ce) => {
      V.current.on(Ce, me[Ce]);
    });
  }, we = () => {
    !me || !V.current || Object.keys(me).forEach((Ce) => {
      V.current.off(Ce, me[Ce]);
    });
  };
  fn.useEffect(() => () => {
    V.current && V.current.off("_beforeBreakpoint", Qe);
  }), fn.useEffect(() => {
    !I.current && V.current && (V.current.emitSlidesClasses(), I.current = !0);
  }), dv(() => {
    if (u && (u.current = W.current), !!W.current)
      return V.current.destroyed && dt(), Ik({
        el: W.current,
        nextEl: oe.current,
        prevEl: le.current,
        paginationEl: Me.current,
        scrollbarEl: ue.current,
        swiper: V.current
      }, Ve), g && g(V.current), () => {
        V.current && !V.current.destroyed && V.current.destroy(!0, !1);
      };
  }, []), dv(() => {
    bt();
    const Ce = Bk(fe, te.current, be, Z.current, (Se) => Se.key);
    return te.current = fe, Z.current = be, Ce.length && V.current && !V.current.destroyed && Hk({
      swiper: V.current,
      slides: be,
      passedParams: fe,
      changedParams: Ce,
      nextEl: oe.current,
      prevEl: le.current,
      scrollbarEl: ue.current,
      paginationEl: Me.current
    }), () => {
      we();
    };
  }), dv(() => {
    $k(V.current);
  }, [O]);
  function pe() {
    return Ve.virtual ? Gk(V.current, be, O) : be.map((Ce, Se) => /* @__PURE__ */ gr.cloneElement(Ce, {
      swiper: V.current,
      swiperSlideIndex: Se
    }));
  }
  return /* @__PURE__ */ gr.createElement(h, py({
    ref: W,
    className: lb(`${D}${d ? ` ${d}` : ""}`)
  }, Tt), /* @__PURE__ */ gr.createElement(Wk.Provider, {
    value: V.current
  }, Ee["container-start"], /* @__PURE__ */ gr.createElement(E, {
    className: jk(Ve.wrapperClass)
  }, Ee["wrapper-start"], pe(), Ee["wrapper-end"]), rb(Ve) && /* @__PURE__ */ gr.createElement(gr.Fragment, null, /* @__PURE__ */ gr.createElement("div", {
    ref: le,
    className: "swiper-button-prev"
  }), /* @__PURE__ */ gr.createElement("div", {
    ref: oe,
    className: "swiper-button-next"
  })), ib(Ve) && /* @__PURE__ */ gr.createElement("div", {
    ref: ue,
    className: "swiper-scrollbar"
  }), ab(Ve) && /* @__PURE__ */ gr.createElement("div", {
    ref: Me,
    className: "swiper-pagination"
  }), Ee["container-end"]));
});
IE.displayName = "Swiper";
const fy = /* @__PURE__ */ fn.forwardRef(function(f, u) {
  let {
    tag: d = "div",
    children: h,
    className: E = "",
    swiper: S,
    zoom: g,
    lazy: R,
    virtualIndex: C,
    swiperSlideIndex: D,
    ...M
  } = f === void 0 ? {} : f;
  const O = fn.useRef(null), [N, L] = fn.useState("swiper-slide"), [J, I] = fn.useState(!1);
  function W(oe, le, Me) {
    le === O.current && L(Me);
  }
  dv(() => {
    if (typeof D < "u" && (O.current.swiperSlideIndex = D), u && (u.current = O.current), !(!O.current || !S)) {
      if (S.destroyed) {
        N !== "swiper-slide" && L("swiper-slide");
        return;
      }
      return S.on("_slideClass", W), () => {
        S && S.off("_slideClass", W);
      };
    }
  }), dv(() => {
    S && O.current && !S.destroyed && L(S.getSlideClasses(O.current));
  }, [S]);
  const V = {
    isActive: N.indexOf("swiper-slide-active") >= 0,
    isVisible: N.indexOf("swiper-slide-visible") >= 0,
    isPrev: N.indexOf("swiper-slide-prev") >= 0,
    isNext: N.indexOf("swiper-slide-next") >= 0
  }, te = () => typeof h == "function" ? h(V) : h, Z = () => {
    I(!0);
  };
  return /* @__PURE__ */ gr.createElement(d, py({
    ref: O,
    className: lb(`${N}${E ? ` ${E}` : ""}`),
    "data-swiper-slide-index": C,
    onLoad: Z
  }, M), g && /* @__PURE__ */ gr.createElement(YT.Provider, {
    value: V
  }, /* @__PURE__ */ gr.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof g == "number" ? g : void 0
  }, te(), R && !J && /* @__PURE__ */ gr.createElement("div", {
    className: "swiper-lazy-preloader"
  }))), !g && /* @__PURE__ */ gr.createElement(YT.Provider, {
    value: V
  }, te(), R && !J && /* @__PURE__ */ gr.createElement("div", {
    className: "swiper-lazy-preloader"
  })));
});
fy.displayName = "SwiperSlide";
function Qk(f) {
  if (!f?.resources) return [];
  const u = /* @__PURE__ */ new Map();
  let d = null;
  f.resources.forEach((E) => {
    let S = E.context?.custom?.alt || "";
    if (!S && E.metadata) {
      const D = E.metadata.find((M) => M.external_id === "alt" || M.label.toLowerCase() === "alt");
      D && (S = D.value);
    }
    let g = 0;
    if (E.metadata) {
      const D = E.metadata.find((M) => M.external_id === "sfcc-gallery-position");
      D && (g = parseInt(D.value, 10));
    }
    let R = !1;
    if (E.metadata) {
      const D = E.metadata.find((M) => M.external_id === "sfcc-is-main");
      D && (R = D.value?.value === "True");
    }
    const C = {
      id: E.asset_id,
      src: E.secure_url || E.url || E.public_id,
      type: E.resource_type || "image",
      // 'image' or 'video'
      width: E.width,
      height: E.height,
      format: E.format,
      alt: S,
      position: g,
      isMain: R,
      version: E.version || 0
    };
    R ? (!d || d.version < C.version) && (d = C) : (!u.has(g) || u.get(g).version < C.version) && u.set(g, C);
  });
  const h = Array.from(u.values()).sort((E, S) => E.position - S.position);
  return d && h.unshift(d), h;
}
function GT({ config: f }) {
  const [u, d] = fn.useState(null), [h, E] = fn.useState([]);
  fn.useEffect(() => {
    !f || !f.slidesUrl || fetch(f.slidesUrl).then((N) => N.json()).then((N) => E(Qk(N))).catch((N) => console.error("Failed to fetch slides JSON:", N));
  }, [f]);
  function S(N) {
    if (!N || !N.src) return "";
    if (!f || !f.resourcePath) return N.src;
    if (N.format) {
      const L = N.format === "mp4" || N.format === "webm" ? f.resourcePath.video : f.resourcePath.image;
      if (!f.transformations) return L + N.src;
      const J = f.transformations[N.format === "mp4" || N.format === "webm" ? "video" : N.format === "gif" ? "gif" : "image"];
      return new URL(L + J + "v1/" + N.src).toString();
    }
    return resourcePath + transformation + "v1/" + N.src;
  }
  function g(N) {
    if (!N || !N.src) return "";
    if (!f || !f.resourcePath) return N.src;
    const L = N.format === "mp4" || N.format === "webm" ? f.resourcePath.video : f.resourcePath.image;
    if (!f.transformations) return L + N.src;
    const J = f.transformations.thumbnail;
    return new URL(L + J + "v1/" + N.src).toString();
  }
  if (!f || h.length === 0) return null;
  const R = window.innerWidth >= (f.thumbnails?.breakpoint || 768), C = R ? f.thumbnails?.desktop : f.thumbnails?.mobile, D = C?.enabled && h.length > 0, M = C?.direction || "horizontal", O = R ? f.desktopCrop : f.mobileCrop;
  return /* @__PURE__ */ Yr.jsxs("div", { "aria-live": "polite", style: { display: "flex", gap: "10px" }, children: [
    D && /* @__PURE__ */ Yr.jsxs("div", { className: "thumb-column", children: [
      /* @__PURE__ */ Yr.jsx("button", { className: "thumb-nav thumb-nav-prev", "aria-label": "Previous thumbnails", children: /* @__PURE__ */ Yr.jsx("i", { class: "fa-solid fa-angle-up" }) }),
      /* @__PURE__ */ Yr.jsx(
        IE,
        {
          modules: [VT],
          autoplay: !1,
          onSwiper: d,
          direction: M,
          spaceBetween: 10,
          watchSlidesProgress: !0,
          slidesPerView: 6,
          navigation: {
            prevEl: ".thumb-nav-prev",
            nextEl: ".thumb-nav-next"
          },
          style: {
            height: M === "vertical" ? 70 * h.length + "px" : "auto",
            width: M === "vertical" ? "100px" : "100%"
          },
          children: h.map((N, L) => /* @__PURE__ */ Yr.jsx(fy, { style: { width: 80, height: 80 }, children: /* @__PURE__ */ Yr.jsx(
            "img",
            {
              src: g(N),
              alt: N.alt || "",
              className: "thumb-slide",
              style: {
                width: 80,
                height: 80,
                objectFit: "cover",
                cursor: "pointer"
              }
            }
          ) }, L))
        }
      ),
      /* @__PURE__ */ Yr.jsx("button", { className: "thumb-nav thumb-nav-next", "aria-label": "Next thumbnails", children: /* @__PURE__ */ Yr.jsx("i", { class: "fa-solid fa-angle-down" }) })
    ] }),
    /* @__PURE__ */ Yr.jsx(
      IE,
      {
        modules: [VT, TO, CO, EO, _O],
        keyboard: { enabled: !0, onlyInViewport: !0 },
        loop: f.loop || !1,
        navigation: !0,
        thumbs: { swiper: D ? u : null },
        lazy: { loadPrevNext: !0 },
        autoplay: f.videoProps?.autoplay ? { delay: 5e3 } : !1,
        slidesPerView: 1,
        effect: R ? "fade" : "slide",
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
          height: O?.height || "auto",
          width: O?.width || "auto"
        },
        children: h.map((N, L) => N.type === "image" ? /* @__PURE__ */ Yr.jsxs(fy, { children: [
          /* @__PURE__ */ Yr.jsx(
            "img",
            {
              src: S(N),
              "data-src": S(N),
              alt: N.alt || "",
              className: "swiper-lazy",
              style: {
                width: O?.width || "auto",
                height: O?.height || "auto",
                objectFit: f.imageProps?.objectFit || "cover"
              },
              loading: f.imageProps?.lazyLoad ? "lazy" : "eager"
            }
          ),
          /* @__PURE__ */ Yr.jsx("div", { className: "swiper-lazy-preloader" })
        ] }, L) : N.type === "video" ? /* @__PURE__ */ Yr.jsx(fy, { children: /* @__PURE__ */ Yr.jsx(
          "video",
          {
            src: S(N),
            poster: N.poster || "",
            muted: f.videoProps?.muted ?? !0,
            autoPlay: f.videoProps?.autoplay ?? !0,
            loop: f.videoProps?.loop ?? !0,
            playsInline: f.videoProps?.playsInline ?? !0,
            "aria-label": N.alt || "Product video",
            style: {
              width: O.width,
              height: O.height,
              objectFit: f.videoProps?.objectFit || "cover"
            }
          }
        ) }, L) : null)
      }
    )
  ] });
}
const nd = /* @__PURE__ */ new Map();
function sb(f) {
  return typeof f == "string" ? document.querySelector(f) : f;
}
function cb(f, u) {
  const d = sb(f);
  if (!d)
    return console.error("[RemoteSlider] mount target not found:", f), null;
  if (nd.has(d)) {
    const { root: E } = nd.get(d);
    return E.render(/* @__PURE__ */ Yr.jsx(GT, { config: u })), d;
  }
  const h = cO.createRoot(d);
  return h.render(/* @__PURE__ */ Yr.jsx(GT, { config: u })), nd.set(d, { root: h }), d;
}
function fb(f) {
  const u = sb(f);
  if (u && nd.has(u)) {
    const { root: d } = nd.get(u);
    d.unmount(), nd.delete(u);
  }
}
function qk(f, u) {
  return fb(f), cb(f, u);
}
const Zk = { mount: cb, unmount: fb, remount: qk };
export {
  Zk as default,
  cb as mount,
  qk as remount,
  fb as unmount
};
