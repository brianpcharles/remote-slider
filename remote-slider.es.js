import A, { forwardRef as _e, useState as q, useRef as F, useEffect as re, createContext as De, useLayoutEffect as et } from "react";
import tt from "react-dom";
var le = { exports: {} }, J = {};
var Te;
function it() {
  if (Te) return J;
  Te = 1;
  var t = A, e = Symbol.for("react.element"), i = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(l, a, c) {
    var d, u = {}, f = null, p = null;
    c !== void 0 && (f = "" + c), a.key !== void 0 && (f = "" + a.key), a.ref !== void 0 && (p = a.ref);
    for (d in a) s.call(a, d) && !r.hasOwnProperty(d) && (u[d] = a[d]);
    if (l && l.defaultProps) for (d in a = l.defaultProps, a) u[d] === void 0 && (u[d] = a[d]);
    return { $$typeof: e, type: l, key: f, ref: p, props: u, _owner: n.current };
  }
  return J.Fragment = i, J.jsx = o, J.jsxs = o, J;
}
var ye;
function st() {
  return ye || (ye = 1, le.exports = it()), le.exports;
}
var D = st(), ee = {}, xe;
function rt() {
  if (xe) return ee;
  xe = 1;
  var t = tt;
  return ee.createRoot = t.createRoot, ee.hydrateRoot = t.hydrateRoot, ee;
}
var nt = rt();
function Ee(t) {
  return t !== null && typeof t == "object" && "constructor" in t && t.constructor === Object;
}
function Se(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = {}), Object.keys(e).forEach((i) => {
    typeof t[i] > "u" ? t[i] = e[i] : Ee(e[i]) && Ee(t[i]) && Object.keys(e[i]).length > 0 && Se(t[i], e[i]);
  });
}
const Ne = {
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
function R() {
  const t = typeof document < "u" ? document : {};
  return Se(t, Ne), t;
}
const at = {
  document: Ne,
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
  requestAnimationFrame(t) {
    return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0);
  },
  cancelAnimationFrame(t) {
    typeof setTimeout > "u" || clearTimeout(t);
  }
};
function N() {
  const t = typeof window < "u" ? window : {};
  return Se(t, at), t;
}
function lt(t) {
  const e = t;
  Object.keys(e).forEach((i) => {
    try {
      e[i] = null;
    } catch {
    }
    try {
      delete e[i];
    } catch {
    }
  });
}
function me(t, e) {
  return e === void 0 && (e = 0), setTimeout(t, e);
}
function ne() {
  return Date.now();
}
function ot(t) {
  const e = N();
  let i;
  return e.getComputedStyle && (i = e.getComputedStyle(t, null)), !i && t.currentStyle && (i = t.currentStyle), i || (i = t.style), i;
}
function dt(t, e) {
  e === void 0 && (e = "x");
  const i = N();
  let s, n, r;
  const o = ot(t);
  return i.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((l) => l.replace(",", ".")).join(", ")), r = new i.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), e === "x" && (i.WebKitCSSMatrix ? n = r.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])), e === "y" && (i.WebKitCSSMatrix ? n = r.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])), n || 0;
}
function Z(t) {
  return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object";
}
function ct(t) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? t instanceof HTMLElement : t && (t.nodeType === 1 || t.nodeType === 11);
}
function G() {
  const t = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (s != null && !ct(s)) {
      const n = Object.keys(Object(s)).filter((r) => e.indexOf(r) < 0);
      for (let r = 0, o = n.length; r < o; r += 1) {
        const l = n[r], a = Object.getOwnPropertyDescriptor(s, l);
        a !== void 0 && a.enumerable && (Z(t[l]) && Z(s[l]) ? s[l].__swiper__ ? t[l] = s[l] : G(t[l], s[l]) : !Z(t[l]) && Z(s[l]) ? (t[l] = {}, s[l].__swiper__ ? t[l] = s[l] : G(t[l], s[l])) : t[l] = s[l]);
      }
    }
  }
  return t;
}
function te(t, e, i) {
  t.style.setProperty(e, i);
}
function Ve(t) {
  let {
    swiper: e,
    targetPosition: i,
    side: s
  } = t;
  const n = N(), r = -e.translate;
  let o = null, l;
  const a = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
  const c = i > r ? "next" : "prev", d = (f, p) => c === "next" && f >= p || c === "prev" && f <= p, u = () => {
    l = (/* @__PURE__ */ new Date()).getTime(), o === null && (o = l);
    const f = Math.max(Math.min((l - o) / a, 1), 0), p = 0.5 - Math.cos(f * Math.PI) / 2;
    let g = r + p * (i - r);
    if (d(g, i) && (g = i), e.wrapperEl.scrollTo({
      [s]: g
    }), d(g, i)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
          [s]: g
        });
      }), n.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = n.requestAnimationFrame(u);
  };
  u();
}
function Ge(t) {
  return t.querySelector(".swiper-slide-transform") || t.shadowRoot && t.shadowRoot.querySelector(".swiper-slide-transform") || t;
}
function k(t, e) {
  return e === void 0 && (e = ""), [...t.children].filter((i) => i.matches(e));
}
function Re(t, e) {
  e === void 0 && (e = []);
  const i = document.createElement(t);
  return i.classList.add(...Array.isArray(e) ? e : [e]), i;
}
function ut(t) {
  const e = N(), i = R(), s = t.getBoundingClientRect(), n = i.body, r = t.clientTop || n.clientTop || 0, o = t.clientLeft || n.clientLeft || 0, l = t === e ? e.scrollY : t.scrollTop, a = t === e ? e.scrollX : t.scrollLeft;
  return {
    top: s.top + l - r,
    left: s.left + a - o
  };
}
function ft(t, e) {
  const i = [];
  for (; t.previousElementSibling; ) {
    const s = t.previousElementSibling;
    e ? s.matches(e) && i.push(s) : i.push(s), t = s;
  }
  return i;
}
function pt(t, e) {
  const i = [];
  for (; t.nextElementSibling; ) {
    const s = t.nextElementSibling;
    e ? s.matches(e) && i.push(s) : i.push(s), t = s;
  }
  return i;
}
function H(t, e) {
  return N().getComputedStyle(t, null).getPropertyValue(e);
}
function Pe(t) {
  let e = t, i;
  if (e) {
    for (i = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (i += 1);
    return i;
  }
}
function he(t, e) {
  const i = [];
  let s = t.parentElement;
  for (; s; )
    e ? s.matches(e) && i.push(s) : i.push(s), s = s.parentElement;
  return i;
}
function mt(t, e) {
  function i(s) {
    s.target === t && (e.call(t, s), t.removeEventListener("transitionend", i));
  }
  e && t.addEventListener("transitionend", i);
}
function Ce(t, e, i) {
  const s = N();
  return t[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"));
}
function ht(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s,
    emit: n
  } = t;
  const r = R(), o = N();
  e.keyboard = {
    enabled: !1
  }, i({
    keyboard: {
      enabled: !1,
      onlyInViewport: !0,
      pageUpDown: !0
    }
  });
  function l(d) {
    if (!e.enabled) return;
    const {
      rtlTranslate: u
    } = e;
    let f = d;
    f.originalEvent && (f = f.originalEvent);
    const p = f.keyCode || f.charCode, g = e.params.keyboard.pageUpDown, h = g && p === 33, v = g && p === 34, m = p === 37, S = p === 39, w = p === 38, y = p === 40;
    if (!e.allowSlideNext && (e.isHorizontal() && S || e.isVertical() && y || v) || !e.allowSlidePrev && (e.isHorizontal() && m || e.isVertical() && w || h))
      return !1;
    if (!(f.shiftKey || f.altKey || f.ctrlKey || f.metaKey) && !(r.activeElement && r.activeElement.nodeName && (r.activeElement.nodeName.toLowerCase() === "input" || r.activeElement.nodeName.toLowerCase() === "textarea"))) {
      if (e.params.keyboard.onlyInViewport && (h || v || m || S || w || y)) {
        let x = !1;
        if (he(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && he(e.el, `.${e.params.slideActiveClass}`).length === 0)
          return;
        const L = e.el, E = L.clientWidth, M = L.clientHeight, b = o.innerWidth, $ = o.innerHeight, T = ut(L);
        u && (T.left -= L.scrollLeft);
        const P = [[T.left, T.top], [T.left + E, T.top], [T.left, T.top + M], [T.left + E, T.top + M]];
        for (let C = 0; C < P.length; C += 1) {
          const z = P[C];
          if (z[0] >= 0 && z[0] <= b && z[1] >= 0 && z[1] <= $) {
            if (z[0] === 0 && z[1] === 0) continue;
            x = !0;
          }
        }
        if (!x) return;
      }
      e.isHorizontal() ? ((h || v || m || S) && (f.preventDefault ? f.preventDefault() : f.returnValue = !1), ((v || S) && !u || (h || m) && u) && e.slideNext(), ((h || m) && !u || (v || S) && u) && e.slidePrev()) : ((h || v || w || y) && (f.preventDefault ? f.preventDefault() : f.returnValue = !1), (v || y) && e.slideNext(), (h || w) && e.slidePrev()), n("keyPress", p);
    }
  }
  function a() {
    e.keyboard.enabled || (r.addEventListener("keydown", l), e.keyboard.enabled = !0);
  }
  function c() {
    e.keyboard.enabled && (r.removeEventListener("keydown", l), e.keyboard.enabled = !1);
  }
  s("init", () => {
    e.params.keyboard.enabled && a();
  }), s("destroy", () => {
    e.keyboard.enabled && c();
  }), Object.assign(e.keyboard, {
    enable: a,
    disable: c
  });
}
function vt(t, e, i, s) {
  return t.params.createElements && Object.keys(s).forEach((n) => {
    if (!i[n] && i.auto === !0) {
      let r = k(t.el, `.${s[n]}`)[0];
      r || (r = Re("div", s[n]), r.className = s[n], t.el.append(r)), i[n] = r, e[n] = r;
    }
  }), i;
}
function Me(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s,
    emit: n
  } = t;
  i({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), e.navigation = {
    nextEl: null,
    prevEl: null
  };
  const r = (h) => (Array.isArray(h) ? h : [h]).filter((v) => !!v);
  function o(h) {
    let v;
    return h && typeof h == "string" && e.isElement && (v = e.el.querySelector(h), v) ? v : (h && (typeof h == "string" && (v = [...document.querySelectorAll(h)]), e.params.uniqueNavElements && typeof h == "string" && v.length > 1 && e.el.querySelectorAll(h).length === 1 && (v = e.el.querySelector(h))), h && !v ? h : v);
  }
  function l(h, v) {
    const m = e.params.navigation;
    h = r(h), h.forEach((S) => {
      S && (S.classList[v ? "add" : "remove"](...m.disabledClass.split(" ")), S.tagName === "BUTTON" && (S.disabled = v), e.params.watchOverflow && e.enabled && S.classList[e.isLocked ? "add" : "remove"](m.lockClass));
    });
  }
  function a() {
    const {
      nextEl: h,
      prevEl: v
    } = e.navigation;
    if (e.params.loop) {
      l(v, !1), l(h, !1);
      return;
    }
    l(v, e.isBeginning && !e.params.rewind), l(h, e.isEnd && !e.params.rewind);
  }
  function c(h) {
    h.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), n("navigationPrev"));
  }
  function d(h) {
    h.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), n("navigationNext"));
  }
  function u() {
    const h = e.params.navigation;
    if (e.params.navigation = vt(e, e.originalParams.navigation, e.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    }), !(h.nextEl || h.prevEl)) return;
    let v = o(h.nextEl), m = o(h.prevEl);
    Object.assign(e.navigation, {
      nextEl: v,
      prevEl: m
    }), v = r(v), m = r(m);
    const S = (w, y) => {
      w && w.addEventListener("click", y === "next" ? d : c), !e.enabled && w && w.classList.add(...h.lockClass.split(" "));
    };
    v.forEach((w) => S(w, "next")), m.forEach((w) => S(w, "prev"));
  }
  function f() {
    let {
      nextEl: h,
      prevEl: v
    } = e.navigation;
    h = r(h), v = r(v);
    const m = (S, w) => {
      S.removeEventListener("click", w === "next" ? d : c), S.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    h.forEach((S) => m(S, "next")), v.forEach((S) => m(S, "prev"));
  }
  s("init", () => {
    e.params.navigation.enabled === !1 ? g() : (u(), a());
  }), s("toEdge fromEdge lock unlock", () => {
    a();
  }), s("destroy", () => {
    f();
  }), s("enable disable", () => {
    let {
      nextEl: h,
      prevEl: v
    } = e.navigation;
    if (h = r(h), v = r(v), e.enabled) {
      a();
      return;
    }
    [...h, ...v].filter((m) => !!m).forEach((m) => m.classList.add(e.params.navigation.lockClass));
  }), s("click", (h, v) => {
    let {
      nextEl: m,
      prevEl: S
    } = e.navigation;
    m = r(m), S = r(S);
    const w = v.target;
    if (e.params.navigation.hideOnClick && !S.includes(w) && !m.includes(w)) {
      if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === w || e.pagination.el.contains(w))) return;
      let y;
      m.length ? y = m[0].classList.contains(e.params.navigation.hiddenClass) : S.length && (y = S[0].classList.contains(e.params.navigation.hiddenClass)), n(y === !0 ? "navigationShow" : "navigationHide"), [...m, ...S].filter((x) => !!x).forEach((x) => x.classList.toggle(e.params.navigation.hiddenClass));
    }
  });
  const p = () => {
    e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), u(), a();
  }, g = () => {
    e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), f();
  };
  Object.assign(e.navigation, {
    enable: p,
    disable: g,
    update: a,
    init: u,
    destroy: f
  });
}
function gt(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s,
    emit: n,
    params: r
  } = t;
  e.autoplay = {
    running: !1,
    paused: !1,
    timeLeft: 0
  }, i({
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
  let o, l, a = r && r.autoplay ? r.autoplay.delay : 3e3, c = r && r.autoplay ? r.autoplay.delay : 3e3, d, u = (/* @__PURE__ */ new Date()).getTime, f, p, g, h, v, m;
  function S(O) {
    !e || e.destroyed || !e.wrapperEl || O.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", S), b());
  }
  const w = () => {
    if (e.destroyed || !e.autoplay.running) return;
    e.autoplay.paused ? f = !0 : f && (c = d, f = !1);
    const O = e.autoplay.paused ? d : u + c - (/* @__PURE__ */ new Date()).getTime();
    e.autoplay.timeLeft = O, n("autoplayTimeLeft", O, O / a), l = requestAnimationFrame(() => {
      w();
    });
  }, y = () => {
    let O;
    return e.virtual && e.params.virtual.enabled ? O = e.slides.filter((I) => I.classList.contains("swiper-slide-active"))[0] : O = e.slides[e.activeIndex], O ? parseInt(O.getAttribute("data-swiper-autoplay"), 10) : void 0;
  }, x = (O) => {
    if (e.destroyed || !e.autoplay.running) return;
    cancelAnimationFrame(l), w();
    let V = typeof O > "u" ? e.params.autoplay.delay : O;
    a = e.params.autoplay.delay, c = e.params.autoplay.delay;
    const I = y();
    !Number.isNaN(I) && I > 0 && typeof O > "u" && (V = I, a = I, c = I), d = V;
    const _ = e.params.speed, K = () => {
      !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(_, !0, !0), n("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, _, !0, !0), n("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(_, !0, !0), n("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, _, !0, !0), n("autoplay")), e.params.cssMode && (u = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
        x();
      })));
    };
    return V > 0 ? (clearTimeout(o), o = setTimeout(() => {
      K();
    }, V)) : requestAnimationFrame(() => {
      K();
    }), V;
  }, L = () => {
    e.autoplay.running = !0, x(), n("autoplayStart");
  }, E = () => {
    e.autoplay.running = !1, clearTimeout(o), cancelAnimationFrame(l), n("autoplayStop");
  }, M = (O, V) => {
    if (e.destroyed || !e.autoplay.running) return;
    clearTimeout(o), O || (m = !0);
    const I = () => {
      n("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", S) : b();
    };
    if (e.autoplay.paused = !0, V) {
      v && (d = e.params.autoplay.delay), v = !1, I();
      return;
    }
    d = (d || e.params.autoplay.delay) - ((/* @__PURE__ */ new Date()).getTime() - u), !(e.isEnd && d < 0 && !e.params.loop) && (d < 0 && (d = 0), I());
  }, b = () => {
    e.isEnd && d < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (u = (/* @__PURE__ */ new Date()).getTime(), m ? (m = !1, x(d)) : x(), e.autoplay.paused = !1, n("autoplayResume"));
  }, $ = () => {
    if (e.destroyed || !e.autoplay.running) return;
    const O = R();
    O.visibilityState === "hidden" && (m = !0, M(!0)), O.visibilityState === "visible" && b();
  }, T = (O) => {
    O.pointerType === "mouse" && (m = !0, !(e.animating || e.autoplay.paused) && M(!0));
  }, P = (O) => {
    O.pointerType === "mouse" && e.autoplay.paused && b();
  }, C = () => {
    e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", T), e.el.addEventListener("pointerleave", P));
  }, z = () => {
    e.el.removeEventListener("pointerenter", T), e.el.removeEventListener("pointerleave", P);
  }, B = () => {
    R().addEventListener("visibilitychange", $);
  }, X = () => {
    R().removeEventListener("visibilitychange", $);
  };
  s("init", () => {
    e.params.autoplay.enabled && (C(), B(), u = (/* @__PURE__ */ new Date()).getTime(), L());
  }), s("destroy", () => {
    z(), X(), e.autoplay.running && E();
  }), s("beforeTransitionStart", (O, V, I) => {
    e.destroyed || !e.autoplay.running || (I || !e.params.autoplay.disableOnInteraction ? M(!0, !0) : E());
  }), s("sliderFirstMove", () => {
    if (!(e.destroyed || !e.autoplay.running)) {
      if (e.params.autoplay.disableOnInteraction) {
        E();
        return;
      }
      p = !0, g = !1, m = !1, h = setTimeout(() => {
        m = !0, g = !0, M(!0);
      }, 200);
    }
  }), s("touchEnd", () => {
    if (!(e.destroyed || !e.autoplay.running || !p)) {
      if (clearTimeout(h), clearTimeout(o), e.params.autoplay.disableOnInteraction) {
        g = !1, p = !1;
        return;
      }
      g && e.params.cssMode && b(), g = !1, p = !1;
    }
  }), s("slideChange", () => {
    e.destroyed || !e.autoplay.running || (v = !0);
  }), Object.assign(e.autoplay, {
    start: L,
    stop: E,
    pause: M,
    resume: b
  });
}
function wt(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s
  } = t;
  i({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  let n = !1, r = !1;
  e.thumbs = {
    swiper: null
  };
  function o() {
    const c = e.thumbs.swiper;
    if (!c || c.destroyed) return;
    const d = c.clickedIndex, u = c.clickedSlide;
    if (u && u.classList.contains(e.params.thumbs.slideThumbActiveClass) || typeof d > "u" || d === null) return;
    let f;
    c.params.loop ? f = parseInt(c.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : f = d, e.params.loop ? e.slideToLoop(f) : e.slideTo(f);
  }
  function l() {
    const {
      thumbs: c
    } = e.params;
    if (n) return !1;
    n = !0;
    const d = e.constructor;
    if (c.swiper instanceof d)
      e.thumbs.swiper = c.swiper, Object.assign(e.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(e.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), e.thumbs.swiper.update();
    else if (Z(c.swiper)) {
      const u = Object.assign({}, c.swiper);
      Object.assign(u, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), e.thumbs.swiper = new d(u), r = !0;
    }
    return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", o), !0;
  }
  function a(c) {
    const d = e.thumbs.swiper;
    if (!d || d.destroyed) return;
    const u = d.params.slidesPerView === "auto" ? d.slidesPerViewDynamic() : d.params.slidesPerView;
    let f = 1;
    const p = e.params.thumbs.slideThumbActiveClass;
    if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (f = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (f = 1), f = Math.floor(f), d.slides.forEach((v) => v.classList.remove(p)), d.params.loop || d.params.virtual && d.params.virtual.enabled)
      for (let v = 0; v < f; v += 1)
        k(d.slidesEl, `[data-swiper-slide-index="${e.realIndex + v}"]`).forEach((m) => {
          m.classList.add(p);
        });
    else
      for (let v = 0; v < f; v += 1)
        d.slides[e.realIndex + v] && d.slides[e.realIndex + v].classList.add(p);
    const g = e.params.thumbs.autoScrollOffset, h = g && !d.params.loop;
    if (e.realIndex !== d.realIndex || h) {
      const v = d.activeIndex;
      let m, S;
      if (d.params.loop) {
        const w = d.slides.filter((y) => y.getAttribute("data-swiper-slide-index") === `${e.realIndex}`)[0];
        m = d.slides.indexOf(w), S = e.activeIndex > e.previousIndex ? "next" : "prev";
      } else
        m = e.realIndex, S = m > e.previousIndex ? "next" : "prev";
      h && (m += S === "next" ? g : -1 * g), d.visibleSlidesIndexes && d.visibleSlidesIndexes.indexOf(m) < 0 && (d.params.centeredSlides ? m > v ? m = m - Math.floor(u / 2) + 1 : m = m + Math.floor(u / 2) - 1 : m > v && d.params.slidesPerGroup, d.slideTo(m, c ? 0 : void 0));
    }
  }
  s("beforeInit", () => {
    const {
      thumbs: c
    } = e.params;
    if (!(!c || !c.swiper))
      if (typeof c.swiper == "string" || c.swiper instanceof HTMLElement) {
        const d = R(), u = () => {
          const p = typeof c.swiper == "string" ? d.querySelector(c.swiper) : c.swiper;
          if (p && p.swiper)
            c.swiper = p.swiper, l(), a(!0);
          else if (p) {
            const g = (h) => {
              c.swiper = h.detail[0], p.removeEventListener("init", g), l(), a(!0), c.swiper.update(), e.update();
            };
            p.addEventListener("init", g);
          }
          return p;
        }, f = () => {
          if (e.destroyed) return;
          u() || requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      } else
        l(), a(!0);
  }), s("slideChange update resize observerUpdate", () => {
    a();
  }), s("setTransition", (c, d) => {
    const u = e.thumbs.swiper;
    !u || u.destroyed || u.setTransition(d);
  }), s("beforeDestroy", () => {
    const c = e.thumbs.swiper;
    !c || c.destroyed || r && c.destroy();
  }), Object.assign(e.thumbs, {
    init: l,
    update: a
  });
}
function St(t) {
  const {
    effect: e,
    swiper: i,
    on: s,
    setTranslate: n,
    setTransition: r,
    overwriteParams: o,
    perspective: l,
    recreateShadows: a,
    getEffectParams: c
  } = t;
  s("beforeInit", () => {
    if (i.params.effect !== e) return;
    i.classNames.push(`${i.params.containerModifierClass}${e}`), l && l() && i.classNames.push(`${i.params.containerModifierClass}3d`);
    const u = o ? o() : {};
    Object.assign(i.params, u), Object.assign(i.originalParams, u);
  }), s("setTranslate", () => {
    i.params.effect === e && n();
  }), s("setTransition", (u, f) => {
    i.params.effect === e && r(f);
  }), s("transitionEnd", () => {
    if (i.params.effect === e && a) {
      if (!c || !c().slideShadows) return;
      i.slides.forEach((u) => {
        u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((f) => f.remove());
      }), a();
    }
  });
  let d;
  s("virtualUpdate", () => {
    i.params.effect === e && (i.slides.length || (d = !0), requestAnimationFrame(() => {
      d && i.slides && i.slides.length && (n(), d = !1);
    }));
  });
}
function bt(t, e) {
  const i = Ge(e);
  return i !== e && (i.style.backfaceVisibility = "hidden", i.style["-webkit-backface-visibility"] = "hidden"), i;
}
function Tt(t) {
  let {
    swiper: e,
    duration: i,
    transformElements: s
  } = t;
  const {
    activeIndex: n
  } = e;
  if (e.params.virtualTranslate && i !== 0) {
    let r = !1, o;
    o = s, o.forEach((l) => {
      mt(l, () => {
        if (r || !e || e.destroyed) return;
        r = !0, e.animating = !1;
        const a = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        e.wrapperEl.dispatchEvent(a);
      });
    });
  }
}
function yt(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s
  } = t;
  i({
    fadeEffect: {
      crossFade: !1
    }
  }), St({
    effect: "fade",
    swiper: e,
    on: s,
    setTranslate: () => {
      const {
        slides: o
      } = e, l = e.params.fadeEffect;
      for (let a = 0; a < o.length; a += 1) {
        const c = e.slides[a];
        let u = -c.swiperSlideOffset;
        e.params.virtualTranslate || (u -= e.translate);
        let f = 0;
        e.isHorizontal() || (f = u, u = 0);
        const p = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(c.progress), 0) : 1 + Math.min(Math.max(c.progress, -1), 0), g = bt(l, c);
        g.style.opacity = p, g.style.transform = `translate3d(${u}px, ${f}px, 0px)`;
      }
    },
    setTransition: (o) => {
      const l = e.slides.map((a) => Ge(a));
      l.forEach((a) => {
        a.style.transitionDuration = `${o}ms`;
      }), Tt({
        swiper: e,
        duration: o,
        transformElements: l
      });
    },
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !e.params.cssMode
    })
  });
}
let oe;
function xt() {
  const t = N(), e = R();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch)
  };
}
function $e() {
  return oe || (oe = xt()), oe;
}
let de;
function Et(t) {
  let {
    userAgent: e
  } = t === void 0 ? {} : t;
  const i = $e(), s = N(), n = s.navigator.platform, r = e || s.navigator.userAgent, o = {
    ios: !1,
    android: !1
  }, l = s.screen.width, a = s.screen.height, c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = r.match(/(iPad).*OS\s([\d_]+)/);
  const u = r.match(/(iPod)(.*OS\s([\d_]+))?/), f = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/), p = n === "Win32";
  let g = n === "MacIntel";
  const h = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !d && g && i.touch && h.indexOf(`${l}x${a}`) >= 0 && (d = r.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), g = !1), c && !p && (o.os = "android", o.android = !0), (d || f || u) && (o.os = "ios", o.ios = !0), o;
}
function Pt(t) {
  return t === void 0 && (t = {}), de || (de = Et(t)), de;
}
let ce;
function Ct() {
  const t = N();
  let e = !1;
  function i() {
    const s = t.navigator.userAgent.toLowerCase();
    return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0;
  }
  if (i()) {
    const s = String(t.navigator.userAgent);
    if (s.includes("Version/")) {
      const [n, r] = s.split("Version/")[1].split(" ")[0].split(".").map((o) => Number(o));
      e = n < 16 || n === 16 && r < 2;
    }
  }
  return {
    isSafari: e || i(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
  };
}
function Mt() {
  return ce || (ce = Ct()), ce;
}
function Lt(t) {
  let {
    swiper: e,
    on: i,
    emit: s
  } = t;
  const n = N();
  let r = null, o = null;
  const l = () => {
    !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
  }, a = () => {
    !e || e.destroyed || !e.initialized || (r = new ResizeObserver((u) => {
      o = n.requestAnimationFrame(() => {
        const {
          width: f,
          height: p
        } = e;
        let g = f, h = p;
        u.forEach((v) => {
          let {
            contentBoxSize: m,
            contentRect: S,
            target: w
          } = v;
          w && w !== e.el || (g = S ? S.width : (m[0] || m).inlineSize, h = S ? S.height : (m[0] || m).blockSize);
        }), (g !== f || h !== p) && l();
      });
    }), r.observe(e.el));
  }, c = () => {
    o && n.cancelAnimationFrame(o), r && r.unobserve && e.el && (r.unobserve(e.el), r = null);
  }, d = () => {
    !e || e.destroyed || !e.initialized || s("orientationchange");
  };
  i("init", () => {
    if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
      a();
      return;
    }
    n.addEventListener("resize", l), n.addEventListener("orientationchange", d);
  }), i("destroy", () => {
    c(), n.removeEventListener("resize", l), n.removeEventListener("orientationchange", d);
  });
}
function Ot(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s,
    emit: n
  } = t;
  const r = [], o = N(), l = function(d, u) {
    u === void 0 && (u = {});
    const f = o.MutationObserver || o.WebkitMutationObserver, p = new f((g) => {
      if (e.__preventObserver__) return;
      if (g.length === 1) {
        n("observerUpdate", g[0]);
        return;
      }
      const h = function() {
        n("observerUpdate", g[0]);
      };
      o.requestAnimationFrame ? o.requestAnimationFrame(h) : o.setTimeout(h, 0);
    });
    p.observe(d, {
      attributes: typeof u.attributes > "u" ? !0 : u.attributes,
      childList: typeof u.childList > "u" ? !0 : u.childList,
      characterData: typeof u.characterData > "u" ? !0 : u.characterData
    }), r.push(p);
  }, a = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const d = he(e.hostEl);
        for (let u = 0; u < d.length; u += 1)
          l(d[u]);
      }
      l(e.hostEl, {
        childList: e.params.observeSlideChildren
      }), l(e.wrapperEl, {
        attributes: !1
      });
    }
  }, c = () => {
    r.forEach((d) => {
      d.disconnect();
    }), r.splice(0, r.length);
  };
  i({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), s("init", a), s("destroy", c);
}
var It = {
  on(t, e, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    const n = i ? "unshift" : "push";
    return t.split(" ").forEach((r) => {
      s.eventsListeners[r] || (s.eventsListeners[r] = []), s.eventsListeners[r][n](e);
    }), s;
  },
  once(t, e, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    function n() {
      s.off(t, n), n.__emitterProxy && delete n.__emitterProxy;
      for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
        o[l] = arguments[l];
      e.apply(s, o);
    }
    return n.__emitterProxy = e, s.on(t, n, i);
  },
  onAny(t, e) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
    const s = e ? "unshift" : "push";
    return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i;
  },
  offAny(t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const i = e.eventsAnyListeners.indexOf(t);
    return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
  },
  off(t, e) {
    const i = this;
    return !i.eventsListeners || i.destroyed || !i.eventsListeners || t.split(" ").forEach((s) => {
      typeof e > "u" ? i.eventsListeners[s] = [] : i.eventsListeners[s] && i.eventsListeners[s].forEach((n, r) => {
        (n === e || n.__emitterProxy && n.__emitterProxy === e) && i.eventsListeners[s].splice(r, 1);
      });
    }), i;
  },
  emit() {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let e, i, s;
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0], i = r.slice(1, r.length), s = t) : (e = r[0].events, i = r[0].data, s = r[0].context || t), i.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach((a) => {
      t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((c) => {
        c.apply(s, [a, ...i]);
      }), t.eventsListeners && t.eventsListeners[a] && t.eventsListeners[a].forEach((c) => {
        c.apply(s, i);
      });
    }), t;
  }
};
function zt() {
  const t = this;
  let e, i;
  const s = t.el;
  typeof t.params.width < "u" && t.params.width !== null ? e = t.params.width : e = s.clientWidth, typeof t.params.height < "u" && t.params.height !== null ? i = t.params.height : i = s.clientHeight, !(e === 0 && t.isHorizontal() || i === 0 && t.isVertical()) && (e = e - parseInt(H(s, "padding-left") || 0, 10) - parseInt(H(s, "padding-right") || 0, 10), i = i - parseInt(H(s, "padding-top") || 0, 10) - parseInt(H(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(i) && (i = 0), Object.assign(t, {
    width: e,
    height: i,
    size: t.isHorizontal() ? e : i
  }));
}
function At() {
  const t = this;
  function e(T) {
    return t.isHorizontal() ? T : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[T];
  }
  function i(T, P) {
    return parseFloat(T.getPropertyValue(e(P)) || 0);
  }
  const s = t.params, {
    wrapperEl: n,
    slidesEl: r,
    size: o,
    rtlTranslate: l,
    wrongRTL: a
  } = t, c = t.virtual && s.virtual.enabled, d = c ? t.virtual.slides.length : t.slides.length, u = k(r, `.${t.params.slideClass}, swiper-slide`), f = c ? t.virtual.slides.length : u.length;
  let p = [];
  const g = [], h = [];
  let v = s.slidesOffsetBefore;
  typeof v == "function" && (v = s.slidesOffsetBefore.call(t));
  let m = s.slidesOffsetAfter;
  typeof m == "function" && (m = s.slidesOffsetAfter.call(t));
  const S = t.snapGrid.length, w = t.slidesGrid.length;
  let y = s.spaceBetween, x = -v, L = 0, E = 0;
  if (typeof o > "u")
    return;
  typeof y == "string" && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * o : typeof y == "string" && (y = parseFloat(y)), t.virtualSize = -y, u.forEach((T) => {
    l ? T.style.marginLeft = "" : T.style.marginRight = "", T.style.marginBottom = "", T.style.marginTop = "";
  }), s.centeredSlides && s.cssMode && (te(n, "--swiper-centered-offset-before", ""), te(n, "--swiper-centered-offset-after", ""));
  const M = s.grid && s.grid.rows > 1 && t.grid;
  M && t.grid.initSlides(f);
  let b;
  const $ = s.slidesPerView === "auto" && s.breakpoints && Object.keys(s.breakpoints).filter((T) => typeof s.breakpoints[T].slidesPerView < "u").length > 0;
  for (let T = 0; T < f; T += 1) {
    b = 0;
    let P;
    if (u[T] && (P = u[T]), M && t.grid.updateSlide(T, P, f, e), !(u[T] && H(P, "display") === "none")) {
      if (s.slidesPerView === "auto") {
        $ && (u[T].style[e("width")] = "");
        const C = getComputedStyle(P), z = P.style.transform, B = P.style.webkitTransform;
        if (z && (P.style.transform = "none"), B && (P.style.webkitTransform = "none"), s.roundLengths)
          b = t.isHorizontal() ? Ce(P, "width") : Ce(P, "height");
        else {
          const X = i(C, "width"), O = i(C, "padding-left"), V = i(C, "padding-right"), I = i(C, "margin-left"), _ = i(C, "margin-right"), K = C.getPropertyValue("box-sizing");
          if (K && K === "border-box")
            b = X + I + _;
          else {
            const {
              clientWidth: Ze,
              offsetWidth: Qe
            } = P;
            b = X + O + V + I + _ + (Qe - Ze);
          }
        }
        z && (P.style.transform = z), B && (P.style.webkitTransform = B), s.roundLengths && (b = Math.floor(b));
      } else
        b = (o - (s.slidesPerView - 1) * y) / s.slidesPerView, s.roundLengths && (b = Math.floor(b)), u[T] && (u[T].style[e("width")] = `${b}px`);
      u[T] && (u[T].swiperSlideSize = b), h.push(b), s.centeredSlides ? (x = x + b / 2 + L / 2 + y, L === 0 && T !== 0 && (x = x - o / 2 - y), T === 0 && (x = x - o / 2 - y), Math.abs(x) < 1 / 1e3 && (x = 0), s.roundLengths && (x = Math.floor(x)), E % s.slidesPerGroup === 0 && p.push(x), g.push(x)) : (s.roundLengths && (x = Math.floor(x)), (E - Math.min(t.params.slidesPerGroupSkip, E)) % t.params.slidesPerGroup === 0 && p.push(x), g.push(x), x = x + b + y), t.virtualSize += b + y, L = b, E += 1;
    }
  }
  if (t.virtualSize = Math.max(t.virtualSize, o) + m, l && a && (s.effect === "slide" || s.effect === "coverflow") && (n.style.width = `${t.virtualSize + y}px`), s.setWrapperSize && (n.style[e("width")] = `${t.virtualSize + y}px`), M && t.grid.updateWrapperSize(b, p, e), !s.centeredSlides) {
    const T = [];
    for (let P = 0; P < p.length; P += 1) {
      let C = p[P];
      s.roundLengths && (C = Math.floor(C)), p[P] <= t.virtualSize - o && T.push(C);
    }
    p = T, Math.floor(t.virtualSize - o) - Math.floor(p[p.length - 1]) > 1 && p.push(t.virtualSize - o);
  }
  if (c && s.loop) {
    const T = h[0] + y;
    if (s.slidesPerGroup > 1) {
      const P = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup), C = T * s.slidesPerGroup;
      for (let z = 0; z < P; z += 1)
        p.push(p[p.length - 1] + C);
    }
    for (let P = 0; P < t.virtual.slidesBefore + t.virtual.slidesAfter; P += 1)
      s.slidesPerGroup === 1 && p.push(p[p.length - 1] + T), g.push(g[g.length - 1] + T), t.virtualSize += T;
  }
  if (p.length === 0 && (p = [0]), y !== 0) {
    const T = t.isHorizontal() && l ? "marginLeft" : e("marginRight");
    u.filter((P, C) => !s.cssMode || s.loop ? !0 : C !== u.length - 1).forEach((P) => {
      P.style[T] = `${y}px`;
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let T = 0;
    h.forEach((C) => {
      T += C + (y || 0);
    }), T -= y;
    const P = T - o;
    p = p.map((C) => C <= 0 ? -v : C > P ? P + m : C);
  }
  if (s.centerInsufficientSlides) {
    let T = 0;
    if (h.forEach((P) => {
      T += P + (y || 0);
    }), T -= y, T < o) {
      const P = (o - T) / 2;
      p.forEach((C, z) => {
        p[z] = C - P;
      }), g.forEach((C, z) => {
        g[z] = C + P;
      });
    }
  }
  if (Object.assign(t, {
    slides: u,
    snapGrid: p,
    slidesGrid: g,
    slidesSizesGrid: h
  }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
    te(n, "--swiper-centered-offset-before", `${-p[0]}px`), te(n, "--swiper-centered-offset-after", `${t.size / 2 - h[h.length - 1] / 2}px`);
    const T = -t.snapGrid[0], P = -t.slidesGrid[0];
    t.snapGrid = t.snapGrid.map((C) => C + T), t.slidesGrid = t.slidesGrid.map((C) => C + P);
  }
  if (f !== d && t.emit("slidesLengthChange"), p.length !== S && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), g.length !== w && t.emit("slidesGridLengthChange"), s.watchSlidesProgress && t.updateSlidesOffset(), !c && !s.cssMode && (s.effect === "slide" || s.effect === "fade")) {
    const T = `${s.containerModifierClass}backface-hidden`, P = t.el.classList.contains(T);
    f <= s.maxBackfaceHiddenSlides ? P || t.el.classList.add(T) : P && t.el.classList.remove(T);
  }
}
function _t(t) {
  const e = this, i = [], s = e.virtual && e.params.virtual.enabled;
  let n = 0, r;
  typeof t == "number" ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
  const o = (l) => s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((l) => {
        i.push(l);
      });
    else
      for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
        const l = e.activeIndex + r;
        if (l > e.slides.length && !s) break;
        i.push(o(l));
      }
  else
    i.push(o(e.activeIndex));
  for (r = 0; r < i.length; r += 1)
    if (typeof i[r] < "u") {
      const l = i[r].offsetHeight;
      n = l > n ? l : n;
    }
  (n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
}
function Dt() {
  const t = this, e = t.slides, i = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
  for (let s = 0; s < e.length; s += 1)
    e[s].swiperSlideOffset = (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - i - t.cssOverflowAdjustment();
}
function Nt(t) {
  t === void 0 && (t = this && this.translate || 0);
  const e = this, i = e.params, {
    slides: s,
    rtlTranslate: n,
    snapGrid: r
  } = e;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -t;
  n && (o = t), s.forEach((a) => {
    a.classList.remove(i.slideVisibleClass);
  }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let l = i.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < s.length; a += 1) {
    const c = s[a];
    let d = c.swiperSlideOffset;
    i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
    const u = (o + (i.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + l), f = (o - r[0] + (i.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + l), p = -(o - d), g = p + e.slidesSizesGrid[a];
    (p >= 0 && p < e.size - 1 || g > 1 && g <= e.size || p <= 0 && g >= e.size) && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(a), s[a].classList.add(i.slideVisibleClass)), c.progress = n ? -u : u, c.originalProgress = n ? -f : f;
  }
}
function Vt(t) {
  const e = this;
  if (typeof t > "u") {
    const d = e.rtlTranslate ? -1 : 1;
    t = e && e.translate && e.translate * d || 0;
  }
  const i = e.params, s = e.maxTranslate() - e.minTranslate();
  let {
    progress: n,
    isBeginning: r,
    isEnd: o,
    progressLoop: l
  } = e;
  const a = r, c = o;
  if (s === 0)
    n = 0, r = !0, o = !0;
  else {
    n = (t - e.minTranslate()) / s;
    const d = Math.abs(t - e.minTranslate()) < 1, u = Math.abs(t - e.maxTranslate()) < 1;
    r = d || n <= 0, o = u || n >= 1, d && (n = 0), u && (n = 1);
  }
  if (i.loop) {
    const d = e.getSlideIndexByData(0), u = e.getSlideIndexByData(e.slides.length - 1), f = e.slidesGrid[d], p = e.slidesGrid[u], g = e.slidesGrid[e.slidesGrid.length - 1], h = Math.abs(t);
    h >= f ? l = (h - f) / g : l = (h + g - p) / g, l > 1 && (l -= 1);
  }
  Object.assign(e, {
    progress: n,
    progressLoop: l,
    isBeginning: r,
    isEnd: o
  }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && e.updateSlidesProgress(t), r && !a && e.emit("reachBeginning toEdge"), o && !c && e.emit("reachEnd toEdge"), (a && !r || c && !o) && e.emit("fromEdge"), e.emit("progress", n);
}
function Gt() {
  const t = this, {
    slides: e,
    params: i,
    slidesEl: s,
    activeIndex: n
  } = t, r = t.virtual && i.virtual.enabled, o = (a) => k(s, `.${i.slideClass}${a}, swiper-slide${a}`)[0];
  e.forEach((a) => {
    a.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass);
  });
  let l;
  if (r)
    if (i.loop) {
      let a = n - t.virtual.slidesBefore;
      a < 0 && (a = t.virtual.slides.length + a), a >= t.virtual.slides.length && (a -= t.virtual.slides.length), l = o(`[data-swiper-slide-index="${a}"]`);
    } else
      l = o(`[data-swiper-slide-index="${n}"]`);
  else
    l = e[n];
  if (l) {
    l.classList.add(i.slideActiveClass);
    let a = pt(l, `.${i.slideClass}, swiper-slide`)[0];
    i.loop && !a && (a = e[0]), a && a.classList.add(i.slideNextClass);
    let c = ft(l, `.${i.slideClass}, swiper-slide`)[0];
    i.loop && !c === 0 && (c = e[e.length - 1]), c && c.classList.add(i.slidePrevClass);
  }
  t.emitSlidesClasses();
}
const ie = (t, e) => {
  if (!t || t.destroyed || !t.params) return;
  const i = () => t.isElement ? "swiper-slide" : `.${t.params.slideClass}`, s = e.closest(i());
  if (s) {
    let n = s.querySelector(`.${t.params.lazyPreloaderClass}`);
    !n && t.isElement && (s.shadowRoot ? n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      s.shadowRoot && (n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`), n && n.remove());
    })), n && n.remove();
  }
}, ue = (t, e) => {
  if (!t.slides[e]) return;
  const i = t.slides[e].querySelector('[loading="lazy"]');
  i && i.removeAttribute("loading");
}, ve = (t) => {
  if (!t || t.destroyed || !t.params) return;
  let e = t.params.lazyPreloadPrevNext;
  const i = t.slides.length;
  if (!i || !e || e < 0) return;
  e = Math.min(e, i);
  const s = t.params.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView), n = t.activeIndex;
  if (t.params.grid && t.params.grid.rows > 1) {
    const o = n, l = [o - e];
    l.push(...Array.from({
      length: e
    }).map((a, c) => o + s + c)), t.slides.forEach((a, c) => {
      l.includes(a.column) && ue(t, c);
    });
    return;
  }
  const r = n + s - 1;
  if (t.params.rewind || t.params.loop)
    for (let o = n - e; o <= r + e; o += 1) {
      const l = (o % i + i) % i;
      (l < n || l > r) && ue(t, l);
    }
  else
    for (let o = Math.max(n - e, 0); o <= Math.min(r + e, i - 1); o += 1)
      o !== n && (o > r || o < n) && ue(t, o);
};
function Rt(t) {
  const {
    slidesGrid: e,
    params: i
  } = t, s = t.rtlTranslate ? t.translate : -t.translate;
  let n;
  for (let r = 0; r < e.length; r += 1)
    typeof e[r + 1] < "u" ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : s >= e[r] && s < e[r + 1] && (n = r + 1) : s >= e[r] && (n = r);
  return i.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function $t(t) {
  const e = this, i = e.rtlTranslate ? e.translate : -e.translate, {
    snapGrid: s,
    params: n,
    activeIndex: r,
    realIndex: o,
    snapIndex: l
  } = e;
  let a = t, c;
  const d = (f) => {
    let p = f - e.virtual.slidesBefore;
    return p < 0 && (p = e.virtual.slides.length + p), p >= e.virtual.slides.length && (p -= e.virtual.slides.length), p;
  };
  if (typeof a > "u" && (a = Rt(e)), s.indexOf(i) >= 0)
    c = s.indexOf(i);
  else {
    const f = Math.min(n.slidesPerGroupSkip, a);
    c = f + Math.floor((a - f) / n.slidesPerGroup);
  }
  if (c >= s.length && (c = s.length - 1), a === r) {
    c !== l && (e.snapIndex = c, e.emit("snapIndexChange")), e.params.loop && e.virtual && e.params.virtual.enabled && (e.realIndex = d(a));
    return;
  }
  let u;
  e.virtual && n.virtual.enabled && n.loop ? u = d(a) : e.slides[a] ? u = parseInt(e.slides[a].getAttribute("data-swiper-slide-index") || a, 10) : u = a, Object.assign(e, {
    previousSnapIndex: l,
    snapIndex: c,
    previousRealIndex: o,
    realIndex: u,
    previousIndex: r,
    activeIndex: a
  }), e.initialized && ve(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (o !== u && e.emit("realIndexChange"), e.emit("slideChange"));
}
function kt(t, e) {
  const i = this, s = i.params;
  let n = t.closest(`.${s.slideClass}, swiper-slide`);
  !n && i.isElement && e && e.length > 1 && e.includes(t) && [...e.slice(e.indexOf(t) + 1, e.length)].forEach((l) => {
    !n && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (n = l);
  });
  let r = !1, o;
  if (n) {
    for (let l = 0; l < i.slides.length; l += 1)
      if (i.slides[l] === n) {
        r = !0, o = l;
        break;
      }
  }
  if (n && r)
    i.clickedSlide = n, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = o;
  else {
    i.clickedSlide = void 0, i.clickedIndex = void 0;
    return;
  }
  s.slideToClickedSlide && i.clickedIndex !== void 0 && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide();
}
var Ft = {
  updateSize: zt,
  updateSlides: At,
  updateAutoHeight: _t,
  updateSlidesOffset: Dt,
  updateSlidesProgress: Nt,
  updateProgress: Vt,
  updateSlidesClasses: Gt,
  updateActiveIndex: $t,
  updateClickedSlide: kt
};
function jt(t) {
  t === void 0 && (t = this.isHorizontal() ? "x" : "y");
  const e = this, {
    params: i,
    rtlTranslate: s,
    translate: n,
    wrapperEl: r
  } = e;
  if (i.virtualTranslate)
    return s ? -n : n;
  if (i.cssMode)
    return n;
  let o = dt(r, t);
  return o += e.cssOverflowAdjustment(), s && (o = -o), o || 0;
}
function Bt(t, e) {
  const i = this, {
    rtlTranslate: s,
    params: n,
    wrapperEl: r,
    progress: o
  } = i;
  let l = 0, a = 0;
  const c = 0;
  i.isHorizontal() ? l = s ? -t : t : a = t, n.roundLengths && (l = Math.floor(l), a = Math.floor(a)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : a, n.cssMode ? r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -a : n.virtualTranslate || (i.isHorizontal() ? l -= i.cssOverflowAdjustment() : a -= i.cssOverflowAdjustment(), r.style.transform = `translate3d(${l}px, ${a}px, ${c}px)`);
  let d;
  const u = i.maxTranslate() - i.minTranslate();
  u === 0 ? d = 0 : d = (t - i.minTranslate()) / u, d !== o && i.updateProgress(t), i.emit("setTranslate", i.translate, e);
}
function Ht() {
  return -this.snapGrid[0];
}
function qt() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Wt(t, e, i, s, n) {
  t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), s === void 0 && (s = !0);
  const r = this, {
    params: o,
    wrapperEl: l
  } = r;
  if (r.animating && o.preventInteractionOnTransition)
    return !1;
  const a = r.minTranslate(), c = r.maxTranslate();
  let d;
  if (s && t > a ? d = a : s && t < c ? d = c : d = t, r.updateProgress(d), o.cssMode) {
    const u = r.isHorizontal();
    if (e === 0)
      l[u ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!r.support.smoothScroll)
        return Ve({
          swiper: r,
          targetPosition: -d,
          side: u ? "left" : "top"
        }), !0;
      l.scrollTo({
        [u ? "left" : "top"]: -d,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return e === 0 ? (r.setTransition(0), r.setTranslate(d), i && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(d), i && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(f) {
    !r || r.destroyed || f.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"));
  }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0;
}
var Yt = {
  getTranslate: jt,
  setTranslate: Bt,
  minTranslate: Ht,
  maxTranslate: qt,
  translateTo: Wt
};
function Xt(t, e) {
  const i = this;
  i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${t}ms`, i.wrapperEl.style.transitionDelay = t === 0 ? "0ms" : ""), i.emit("setTransition", t, e);
}
function ke(t) {
  let {
    swiper: e,
    runCallbacks: i,
    direction: s,
    step: n
  } = t;
  const {
    activeIndex: r,
    previousIndex: o
  } = e;
  let l = s;
  if (l || (r > o ? l = "next" : r < o ? l = "prev" : l = "reset"), e.emit(`transition${n}`), i && r !== o) {
    if (l === "reset") {
      e.emit(`slideResetTransition${n}`);
      return;
    }
    e.emit(`slideChangeTransition${n}`), l === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`);
  }
}
function Ut(t, e) {
  t === void 0 && (t = !0);
  const i = this, {
    params: s
  } = i;
  s.cssMode || (s.autoHeight && i.updateAutoHeight(), ke({
    swiper: i,
    runCallbacks: t,
    direction: e,
    step: "Start"
  }));
}
function Kt(t, e) {
  t === void 0 && (t = !0);
  const i = this, {
    params: s
  } = i;
  i.animating = !1, !s.cssMode && (i.setTransition(0), ke({
    swiper: i,
    runCallbacks: t,
    direction: e,
    step: "End"
  }));
}
var Jt = {
  setTransition: Xt,
  transitionStart: Ut,
  transitionEnd: Kt
};
function Zt(t, e, i, s, n) {
  t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), typeof t == "string" && (t = parseInt(t, 10));
  const r = this;
  let o = t;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: c,
    previousIndex: d,
    activeIndex: u,
    rtlTranslate: f,
    wrapperEl: p,
    enabled: g
  } = r;
  if (r.animating && l.preventInteractionOnTransition || !g && !s && !n)
    return !1;
  const h = Math.min(r.params.slidesPerGroupSkip, o);
  let v = h + Math.floor((o - h) / r.params.slidesPerGroup);
  v >= a.length && (v = a.length - 1);
  const m = -a[v];
  if (l.normalizeSlideIndex)
    for (let w = 0; w < c.length; w += 1) {
      const y = -Math.floor(m * 100), x = Math.floor(c[w] * 100), L = Math.floor(c[w + 1] * 100);
      typeof c[w + 1] < "u" ? y >= x && y < L - (L - x) / 2 ? o = w : y >= x && y < L && (o = w + 1) : y >= x && (o = w);
    }
  if (r.initialized && o !== u && (!r.allowSlideNext && (f ? m > r.translate && m > r.minTranslate() : m < r.translate && m < r.minTranslate()) || !r.allowSlidePrev && m > r.translate && m > r.maxTranslate() && (u || 0) !== o))
    return !1;
  o !== (d || 0) && i && r.emit("beforeSlideChangeStart"), r.updateProgress(m);
  let S;
  if (o > u ? S = "next" : o < u ? S = "prev" : S = "reset", f && -m === r.translate || !f && m === r.translate)
    return r.updateActiveIndex(o), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), l.effect !== "slide" && r.setTranslate(m), S !== "reset" && (r.transitionStart(i, S), r.transitionEnd(i, S)), !1;
  if (l.cssMode) {
    const w = r.isHorizontal(), y = f ? m : -m;
    if (e === 0) {
      const x = r.virtual && r.params.virtual.enabled;
      x && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), x && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        p[w ? "scrollLeft" : "scrollTop"] = y;
      })) : p[w ? "scrollLeft" : "scrollTop"] = y, x && requestAnimationFrame(() => {
        r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1;
      });
    } else {
      if (!r.support.smoothScroll)
        return Ve({
          swiper: r,
          targetPosition: y,
          side: w ? "left" : "top"
        }), !0;
      p.scrollTo({
        [w ? "left" : "top"]: y,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return r.setTransition(e), r.setTranslate(m), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, s), r.transitionStart(i, S), e === 0 ? r.transitionEnd(i, S) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(y) {
    !r || r.destroyed || y.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, S));
  }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0;
}
function Qt(t, e, i, s) {
  t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), typeof t == "string" && (t = parseInt(t, 10));
  const n = this;
  let r = t;
  return n.params.loop && (n.virtual && n.params.virtual.enabled ? r = r + n.virtual.slidesBefore : r = n.getSlideIndexByData(r)), n.slideTo(r, e, i, s);
}
function ei(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this, {
    enabled: n,
    params: r,
    animating: o
  } = s;
  if (!n) return s;
  let l = r.slidesPerGroup;
  r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : l, c = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (o && !c && r.loopPreventsSliding) return !1;
    if (s.loopFix({
      direction: "next"
    }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && r.cssMode)
      return requestAnimationFrame(() => {
        s.slideTo(s.activeIndex + a, t, e, i);
      }), !0;
  }
  return r.rewind && s.isEnd ? s.slideTo(0, t, e, i) : s.slideTo(s.activeIndex + a, t, e, i);
}
function ti(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this, {
    params: n,
    snapGrid: r,
    slidesGrid: o,
    rtlTranslate: l,
    enabled: a,
    animating: c
  } = s;
  if (!a) return s;
  const d = s.virtual && n.virtual.enabled;
  if (n.loop) {
    if (c && !d && n.loopPreventsSliding) return !1;
    s.loopFix({
      direction: "prev"
    }), s._clientLeft = s.wrapperEl.clientLeft;
  }
  const u = l ? s.translate : -s.translate;
  function f(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
  }
  const p = f(u), g = r.map((m) => f(m));
  let h = r[g.indexOf(p) - 1];
  if (typeof h > "u" && n.cssMode) {
    let m;
    r.forEach((S, w) => {
      p >= S && (m = w);
    }), typeof m < "u" && (h = r[m > 0 ? m - 1 : m]);
  }
  let v = 0;
  if (typeof h < "u" && (v = o.indexOf(h), v < 0 && (v = s.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (v = v - s.slidesPerViewDynamic("previous", !0) + 1, v = Math.max(v, 0))), n.rewind && s.isBeginning) {
    const m = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
    return s.slideTo(m, t, e, i);
  } else if (n.loop && s.activeIndex === 0 && n.cssMode)
    return requestAnimationFrame(() => {
      s.slideTo(v, t, e, i);
    }), !0;
  return s.slideTo(v, t, e, i);
}
function ii(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this;
  return s.slideTo(s.activeIndex, t, e, i);
}
function si(t, e, i, s) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0), s === void 0 && (s = 0.5);
  const n = this;
  let r = n.activeIndex;
  const o = Math.min(n.params.slidesPerGroupSkip, r), l = o + Math.floor((r - o) / n.params.slidesPerGroup), a = n.rtlTranslate ? n.translate : -n.translate;
  if (a >= n.snapGrid[l]) {
    const c = n.snapGrid[l], d = n.snapGrid[l + 1];
    a - c > (d - c) * s && (r += n.params.slidesPerGroup);
  } else {
    const c = n.snapGrid[l - 1], d = n.snapGrid[l];
    a - c <= (d - c) * s && (r -= n.params.slidesPerGroup);
  }
  return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, t, e, i);
}
function ri() {
  const t = this, {
    params: e,
    slidesEl: i
  } = t, s = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
  let n = t.clickedIndex, r;
  const o = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (t.animating) return;
    r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? n < t.loopedSlides - s / 2 || n > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), n = t.getSlideIndex(k(i, `${o}[data-swiper-slide-index="${r}"]`)[0]), me(() => {
      t.slideTo(n);
    })) : t.slideTo(n) : n > t.slides.length - s ? (t.loopFix(), n = t.getSlideIndex(k(i, `${o}[data-swiper-slide-index="${r}"]`)[0]), me(() => {
      t.slideTo(n);
    })) : t.slideTo(n);
  } else
    t.slideTo(n);
}
var ni = {
  slideTo: Zt,
  slideToLoop: Qt,
  slideNext: ei,
  slidePrev: ti,
  slideReset: ii,
  slideToClosest: si,
  slideToClickedSlide: ri
};
function ai(t) {
  const e = this, {
    params: i,
    slidesEl: s
  } = e;
  if (!i.loop || e.virtual && e.params.virtual.enabled) return;
  k(s, `.${i.slideClass}, swiper-slide`).forEach((r, o) => {
    r.setAttribute("data-swiper-slide-index", o);
  }), e.loopFix({
    slideRealIndex: t,
    direction: i.centeredSlides ? void 0 : "next"
  });
}
function li(t) {
  let {
    slideRealIndex: e,
    slideTo: i = !0,
    direction: s,
    setTranslate: n,
    activeSlideIndex: r,
    byController: o,
    byMousewheel: l
  } = t === void 0 ? {} : t;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: c,
    allowSlidePrev: d,
    allowSlideNext: u,
    slidesEl: f,
    params: p
  } = a;
  if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && p.virtual.enabled) {
    i && (!p.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : p.centeredSlides && a.snapIndex < p.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = d, a.allowSlideNext = u, a.emit("loopFix");
    return;
  }
  const g = p.slidesPerView === "auto" ? a.slidesPerViewDynamic() : Math.ceil(parseFloat(p.slidesPerView, 10));
  let h = p.loopedSlides || g;
  h % p.slidesPerGroup !== 0 && (h += p.slidesPerGroup - h % p.slidesPerGroup), a.loopedSlides = h;
  const v = [], m = [];
  let S = a.activeIndex;
  typeof r > "u" ? r = a.getSlideIndex(a.slides.filter((E) => E.classList.contains(p.slideActiveClass))[0]) : S = r;
  const w = s === "next" || !s, y = s === "prev" || !s;
  let x = 0, L = 0;
  if (r < h) {
    x = Math.max(h - r, p.slidesPerGroup);
    for (let E = 0; E < h - r; E += 1) {
      const M = E - Math.floor(E / c.length) * c.length;
      v.push(c.length - M - 1);
    }
  } else if (r > a.slides.length - h * 2) {
    L = Math.max(r - (a.slides.length - h * 2), p.slidesPerGroup);
    for (let E = 0; E < L; E += 1) {
      const M = E - Math.floor(E / c.length) * c.length;
      m.push(M);
    }
  }
  if (y && v.forEach((E) => {
    a.slides[E].swiperLoopMoveDOM = !0, f.prepend(a.slides[E]), a.slides[E].swiperLoopMoveDOM = !1;
  }), w && m.forEach((E) => {
    a.slides[E].swiperLoopMoveDOM = !0, f.append(a.slides[E]), a.slides[E].swiperLoopMoveDOM = !1;
  }), a.recalcSlides(), p.slidesPerView === "auto" && a.updateSlides(), p.watchSlidesProgress && a.updateSlidesOffset(), i) {
    if (v.length > 0 && y)
      if (typeof e > "u") {
        const E = a.slidesGrid[S], b = a.slidesGrid[S + x] - E;
        l ? a.setTranslate(a.translate - b) : (a.slideTo(S + x, 0, !1, !0), n && (a.touches[a.isHorizontal() ? "startX" : "startY"] += b, a.touchEventsData.currentTranslate = a.translate));
      } else
        n && (a.slideToLoop(e, 0, !1, !0), a.touchEventsData.currentTranslate = a.translate);
    else if (m.length > 0 && w)
      if (typeof e > "u") {
        const E = a.slidesGrid[S], b = a.slidesGrid[S - L] - E;
        l ? a.setTranslate(a.translate - b) : (a.slideTo(S - L, 0, !1, !0), n && (a.touches[a.isHorizontal() ? "startX" : "startY"] += b, a.touchEventsData.currentTranslate = a.translate));
      } else
        a.slideToLoop(e, 0, !1, !0);
  }
  if (a.allowSlidePrev = d, a.allowSlideNext = u, a.controller && a.controller.control && !o) {
    const E = {
      slideRealIndex: e,
      direction: s,
      setTranslate: n,
      activeSlideIndex: r,
      byController: !0
    };
    Array.isArray(a.controller.control) ? a.controller.control.forEach((M) => {
      !M.destroyed && M.params.loop && M.loopFix({
        ...E,
        slideTo: M.params.slidesPerView === p.slidesPerView ? i : !1
      });
    }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({
      ...E,
      slideTo: a.controller.control.params.slidesPerView === p.slidesPerView ? i : !1
    });
  }
  a.emit("loopFix");
}
function oi() {
  const t = this, {
    params: e,
    slidesEl: i
  } = t;
  if (!e.loop || t.virtual && t.params.virtual.enabled) return;
  t.recalcSlides();
  const s = [];
  t.slides.forEach((n) => {
    const r = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
    s[r] = n;
  }), t.slides.forEach((n) => {
    n.removeAttribute("data-swiper-slide-index");
  }), s.forEach((n) => {
    i.append(n);
  }), t.recalcSlides(), t.slideTo(t.realIndex, 0);
}
var di = {
  loopCreate: ai,
  loopFix: li,
  loopDestroy: oi
};
function ci(t) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
  const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = t ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  });
}
function ui() {
  const t = this;
  t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0), t[t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1;
  }));
}
var fi = {
  setGrabCursor: ci,
  unsetGrabCursor: ui
};
function pi(t, e) {
  e === void 0 && (e = this);
  function i(s) {
    if (!s || s === R() || s === N()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const n = s.closest(t);
    return !n && !s.getRootNode ? null : n || i(s.getRootNode().host);
  }
  return i(e);
}
function mi(t) {
  const e = this, i = R(), s = N(), n = e.touchEventsData;
  n.evCache.push(t);
  const {
    params: r,
    touches: o,
    enabled: l
  } = e;
  if (!l || !r.simulateTouch && t.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition)
    return;
  !e.animating && r.cssMode && r.loop && e.loopFix();
  let a = t;
  a.originalEvent && (a = a.originalEvent);
  let c = a.target;
  if (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(c) || "which" in a && a.which === 3 || "button" in a && a.button > 0 || n.isTouched && n.isMoved) return;
  const d = !!r.noSwipingClass && r.noSwipingClass !== "", u = t.composedPath ? t.composedPath() : t.path;
  d && a.target && a.target.shadowRoot && u && (c = u[0]);
  const f = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`, p = !!(a.target && a.target.shadowRoot);
  if (r.noSwiping && (p ? pi(f, c) : c.closest(f))) {
    e.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !c.closest(r.swipeHandler))
    return;
  o.currentX = a.pageX, o.currentY = a.pageY;
  const g = o.currentX, h = o.currentY, v = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection, m = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
  if (v && (g <= m || g >= s.innerWidth - m))
    if (v === "prevent")
      t.preventDefault();
    else
      return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), o.startX = g, o.startY = h, n.touchStartTime = ne(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1);
  let S = !0;
  c.matches(n.focusableElements) && (S = !1, c.nodeName === "SELECT" && (n.isTouched = !1)), i.activeElement && i.activeElement.matches(n.focusableElements) && i.activeElement !== c && i.activeElement.blur();
  const w = S && e.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || w) && !c.isContentEditable && a.preventDefault(), r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", a);
}
function hi(t) {
  const e = R(), i = this, s = i.touchEventsData, {
    params: n,
    touches: r,
    rtlTranslate: o,
    enabled: l
  } = i;
  if (!l || !n.simulateTouch && t.pointerType === "mouse") return;
  let a = t;
  if (a.originalEvent && (a = a.originalEvent), !s.isTouched) {
    s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", a);
    return;
  }
  const c = s.evCache.findIndex((E) => E.pointerId === a.pointerId);
  c >= 0 && (s.evCache[c] = a);
  const d = s.evCache.length > 1 ? s.evCache[0] : a, u = d.pageX, f = d.pageY;
  if (a.preventedByNestedSwiper) {
    r.startX = u, r.startY = f;
    return;
  }
  if (!i.allowTouchMove) {
    a.target.matches(s.focusableElements) || (i.allowClick = !1), s.isTouched && (Object.assign(r, {
      startX: u,
      startY: f,
      prevX: i.touches.currentX,
      prevY: i.touches.currentY,
      currentX: u,
      currentY: f
    }), s.touchStartTime = ne());
    return;
  }
  if (n.touchReleaseOnEdges && !n.loop) {
    if (i.isVertical()) {
      if (f < r.startY && i.translate <= i.maxTranslate() || f > r.startY && i.translate >= i.minTranslate()) {
        s.isTouched = !1, s.isMoved = !1;
        return;
      }
    } else if (u < r.startX && i.translate <= i.maxTranslate() || u > r.startX && i.translate >= i.minTranslate())
      return;
  }
  if (e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
    s.isMoved = !0, i.allowClick = !1;
    return;
  }
  if (s.allowTouchCallbacks && i.emit("touchMove", a), a.targetTouches && a.targetTouches.length > 1) return;
  r.currentX = u, r.currentY = f;
  const p = r.currentX - r.startX, g = r.currentY - r.startY;
  if (i.params.threshold && Math.sqrt(p ** 2 + g ** 2) < i.params.threshold) return;
  if (typeof s.isScrolling > "u") {
    let E;
    i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : p * p + g * g >= 25 && (E = Math.atan2(Math.abs(g), Math.abs(p)) * 180 / Math.PI, s.isScrolling = i.isHorizontal() ? E > n.touchAngle : 90 - E > n.touchAngle);
  }
  if (s.isScrolling && i.emit("touchMoveOpposite", a), typeof s.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0), s.isScrolling || i.zoom && i.params.zoom && i.params.zoom.enabled && s.evCache.length > 1) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving)
    return;
  i.allowClick = !1, !n.cssMode && a.cancelable && a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
  let h = i.isHorizontal() ? p : g, v = i.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  n.oneWayMovement && (h = Math.abs(h) * (o ? 1 : -1), v = Math.abs(v) * (o ? 1 : -1)), r.diff = h, h *= n.touchRatio, o && (h = -h, v = -v);
  const m = i.touchesDirection;
  i.swipeDirection = h > 0 ? "prev" : "next", i.touchesDirection = v > 0 ? "prev" : "next";
  const S = i.params.loop && !n.cssMode, w = i.swipeDirection === "next" && i.allowSlideNext || i.swipeDirection === "prev" && i.allowSlidePrev;
  if (!s.isMoved) {
    if (S && w && i.loopFix({
      direction: i.swipeDirection
    }), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating) {
      const E = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0
      });
      i.wrapperEl.dispatchEvent(E);
    }
    s.allowMomentumBounce = !1, n.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0), i.emit("sliderFirstMove", a);
  }
  let y;
  s.isMoved && m !== i.touchesDirection && S && w && Math.abs(h) >= 1 && (i.loopFix({
    direction: i.swipeDirection,
    setTranslate: !0
  }), y = !0), i.emit("sliderMove", a), s.isMoved = !0, s.currentTranslate = h + s.startTranslate;
  let x = !0, L = n.resistanceRatio;
  if (n.touchReleaseOnEdges && (L = 0), h > 0 ? (S && w && !y && s.currentTranslate > (n.centeredSlides ? i.minTranslate() - i.size / 2 : i.minTranslate()) && i.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), s.currentTranslate > i.minTranslate() && (x = !1, n.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + h) ** L))) : h < 0 && (S && w && !y && s.currentTranslate < (n.centeredSlides ? i.maxTranslate() + i.size / 2 : i.maxTranslate()) && i.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: i.slides.length - (n.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
  }), s.currentTranslate < i.maxTranslate() && (x = !1, n.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - h) ** L))), x && (a.preventedByNestedSwiper = !0), !i.allowSlideNext && i.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && i.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && !i.allowSlideNext && (s.currentTranslate = s.startTranslate), n.threshold > 0)
    if (Math.abs(h) > n.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && i.freeMode || n.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate));
}
function vi(t) {
  const e = this, i = e.touchEventsData, s = i.evCache.findIndex((w) => w.pointerId === t.pointerId);
  if (s >= 0 && i.evCache.splice(s, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(t.type) && !(["pointercancel", "contextmenu"].includes(t.type) && (e.browser.isSafari || e.browser.isWebView)))
    return;
  const {
    params: n,
    touches: r,
    rtlTranslate: o,
    slidesGrid: l,
    enabled: a
  } = e;
  if (!a || !n.simulateTouch && t.pointerType === "mouse") return;
  let c = t;
  if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", c), i.allowTouchCallbacks = !1, !i.isTouched) {
    i.isMoved && n.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, i.startMoving = !1;
    return;
  }
  n.grabCursor && i.isMoved && i.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const d = ne(), u = d - i.touchStartTime;
  if (e.allowClick) {
    const w = c.path || c.composedPath && c.composedPath();
    e.updateClickedSlide(w && w[0] || c.target, w), e.emit("tap click", c), u < 300 && d - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", c);
  }
  if (i.lastClickTime = ne(), me(() => {
    e.destroyed || (e.allowClick = !0);
  }), !i.isTouched || !i.isMoved || !e.swipeDirection || r.diff === 0 || i.currentTranslate === i.startTranslate) {
    i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
    return;
  }
  i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
  let f;
  if (n.followFinger ? f = o ? e.translate : -e.translate : f = -i.currentTranslate, n.cssMode)
    return;
  if (n.freeMode && n.freeMode.enabled) {
    e.freeMode.onTouchEnd({
      currentPos: f
    });
    return;
  }
  let p = 0, g = e.slidesSizesGrid[0];
  for (let w = 0; w < l.length; w += w < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
    const y = w < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    typeof l[w + y] < "u" ? f >= l[w] && f < l[w + y] && (p = w, g = l[w + y] - l[w]) : f >= l[w] && (p = w, g = l[l.length - 1] - l[l.length - 2]);
  }
  let h = null, v = null;
  n.rewind && (e.isBeginning ? v = n.virtual && n.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (h = 0));
  const m = (f - l[p]) / g, S = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
  if (u > n.longSwipesMs) {
    if (!n.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" && (m >= n.longSwipesRatio ? e.slideTo(n.rewind && e.isEnd ? h : p + S) : e.slideTo(p)), e.swipeDirection === "prev" && (m > 1 - n.longSwipesRatio ? e.slideTo(p + S) : v !== null && m < 0 && Math.abs(m) > n.longSwipesRatio ? e.slideTo(v) : e.slideTo(p));
  } else {
    if (!n.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (c.target === e.navigation.nextEl || c.target === e.navigation.prevEl) ? c.target === e.navigation.nextEl ? e.slideTo(p + S) : e.slideTo(p) : (e.swipeDirection === "next" && e.slideTo(h !== null ? h : p + S), e.swipeDirection === "prev" && e.slideTo(v !== null ? v : p));
  }
}
function Le() {
  const t = this, {
    params: e,
    el: i
  } = t;
  if (i && i.offsetWidth === 0) return;
  e.breakpoints && t.setBreakpoint();
  const {
    allowSlideNext: s,
    allowSlidePrev: n,
    snapGrid: r
  } = t, o = t.virtual && t.params.virtual.enabled;
  t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
  const l = o && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides && !l ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.params.loop && !o ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout), t.autoplay.resizeTimeout = setTimeout(() => {
    t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume();
  }, 500)), t.allowSlidePrev = n, t.allowSlideNext = s, t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow();
}
function gi(t) {
  const e = this;
  e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())));
}
function wi() {
  const t = this, {
    wrapperEl: e,
    rtlTranslate: i,
    enabled: s
  } = t;
  if (!s) return;
  t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, t.translate === 0 && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
  let n;
  const r = t.maxTranslate() - t.minTranslate();
  r === 0 ? n = 0 : n = (t.translate - t.minTranslate()) / r, n !== t.progress && t.updateProgress(i ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1);
}
function Si(t) {
  const e = this;
  ie(e, t.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
}
let Oe = !1;
function bi() {
}
const Fe = (t, e) => {
  const i = R(), {
    params: s,
    el: n,
    wrapperEl: r,
    device: o
  } = t, l = !!s.nested, a = e === "on" ? "addEventListener" : "removeEventListener", c = e;
  n[a]("pointerdown", t.onTouchStart, {
    passive: !1
  }), i[a]("pointermove", t.onTouchMove, {
    passive: !1,
    capture: l
  }), i[a]("pointerup", t.onTouchEnd, {
    passive: !0
  }), i[a]("pointercancel", t.onTouchEnd, {
    passive: !0
  }), i[a]("pointerout", t.onTouchEnd, {
    passive: !0
  }), i[a]("pointerleave", t.onTouchEnd, {
    passive: !0
  }), i[a]("contextmenu", t.onTouchEnd, {
    passive: !0
  }), (s.preventClicks || s.preventClicksPropagation) && n[a]("click", t.onClick, !0), s.cssMode && r[a]("scroll", t.onScroll), s.updateOnWindowResize ? t[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Le, !0) : t[c]("observerUpdate", Le, !0), n[a]("load", t.onLoad, {
    capture: !0
  });
};
function Ti() {
  const t = this, e = R(), {
    params: i
  } = t;
  t.onTouchStart = mi.bind(t), t.onTouchMove = hi.bind(t), t.onTouchEnd = vi.bind(t), i.cssMode && (t.onScroll = wi.bind(t)), t.onClick = gi.bind(t), t.onLoad = Si.bind(t), Oe || (e.addEventListener("touchstart", bi), Oe = !0), Fe(t, "on");
}
function yi() {
  Fe(this, "off");
}
var xi = {
  attachEvents: Ti,
  detachEvents: yi
};
const Ie = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function Ei() {
  const t = this, {
    realIndex: e,
    initialized: i,
    params: s,
    el: n
  } = t, r = s.breakpoints;
  if (!r || r && Object.keys(r).length === 0) return;
  const o = t.getBreakpoint(r, t.params.breakpointsBase, t.el);
  if (!o || t.currentBreakpoint === o) return;
  const a = (o in r ? r[o] : void 0) || t.originalParams, c = Ie(t, s), d = Ie(t, a), u = s.enabled;
  c && !d ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), t.emitContainerClasses()) : !c && d && (n.classList.add(`${s.containerModifierClass}grid`), (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && s.grid.fill === "column") && n.classList.add(`${s.containerModifierClass}grid-column`), t.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((m) => {
    if (typeof a[m] > "u") return;
    const S = s[m] && s[m].enabled, w = a[m] && a[m].enabled;
    S && !w && t[m].disable(), !S && w && t[m].enable();
  });
  const f = a.direction && a.direction !== s.direction, p = s.loop && (a.slidesPerView !== s.slidesPerView || f), g = s.loop;
  f && i && t.changeDirection(), G(t.params, a);
  const h = t.params.enabled, v = t.params.loop;
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev
  }), u && !h ? t.disable() : !u && h && t.enable(), t.currentBreakpoint = o, t.emit("_beforeBreakpoint", a), i && (p ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides()) : !g && v ? (t.loopCreate(e), t.updateSlides()) : g && !v && t.loopDestroy()), t.emit("breakpoint", a);
}
function Pi(t, e, i) {
  if (e === void 0 && (e = "window"), !t || e === "container" && !i) return;
  let s = !1;
  const n = N(), r = e === "window" ? n.innerHeight : i.clientHeight, o = Object.keys(t).map((l) => {
    if (typeof l == "string" && l.indexOf("@") === 0) {
      const a = parseFloat(l.substr(1));
      return {
        value: r * a,
        point: l
      };
    }
    return {
      value: l,
      point: l
    };
  });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const {
      point: a,
      value: c
    } = o[l];
    e === "window" ? n.matchMedia(`(min-width: ${c}px)`).matches && (s = a) : c <= i.clientWidth && (s = a);
  }
  return s || "max";
}
var Ci = {
  setBreakpoint: Ei,
  getBreakpoint: Pi
};
function Mi(t, e) {
  const i = [];
  return t.forEach((s) => {
    typeof s == "object" ? Object.keys(s).forEach((n) => {
      s[n] && i.push(e + n);
    }) : typeof s == "string" && i.push(e + s);
  }), i;
}
function Li() {
  const t = this, {
    classNames: e,
    params: i,
    rtl: s,
    el: n,
    device: r
  } = t, o = Mi(["initialized", i.direction, {
    "free-mode": t.params.freeMode && i.freeMode.enabled
  }, {
    autoheight: i.autoHeight
  }, {
    rtl: s
  }, {
    grid: i.grid && i.grid.rows > 1
  }, {
    "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column"
  }, {
    android: r.android
  }, {
    ios: r.ios
  }, {
    "css-mode": i.cssMode
  }, {
    centered: i.cssMode && i.centeredSlides
  }, {
    "watch-progress": i.watchSlidesProgress
  }], i.containerModifierClass);
  e.push(...o), n.classList.add(...e), t.emitContainerClasses();
}
function Oi() {
  const t = this, {
    el: e,
    classNames: i
  } = t;
  e.classList.remove(...i), t.emitContainerClasses();
}
var Ii = {
  addClasses: Li,
  removeClasses: Oi
};
function zi() {
  const t = this, {
    isLocked: e,
    params: i
  } = t, {
    slidesOffsetBefore: s
  } = i;
  if (s) {
    const n = t.slides.length - 1, r = t.slidesGrid[n] + t.slidesSizesGrid[n] + s * 2;
    t.isLocked = t.size > r;
  } else
    t.isLocked = t.snapGrid.length === 1;
  i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked), i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
}
var Ai = {
  checkOverflow: zi
}, ge = {
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
function _i(t, e) {
  return function(s) {
    s === void 0 && (s = {});
    const n = Object.keys(s)[0], r = s[n];
    if (typeof r != "object" || r === null) {
      G(e, s);
      return;
    }
    if (t[n] === !0 && (t[n] = {
      enabled: !0
    }), n === "navigation" && t[n] && t[n].enabled && !t[n].prevEl && !t[n].nextEl && (t[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && t[n] && t[n].enabled && !t[n].el && (t[n].auto = !0), !(n in t && "enabled" in r)) {
      G(e, s);
      return;
    }
    typeof t[n] == "object" && !("enabled" in t[n]) && (t[n].enabled = !0), t[n] || (t[n] = {
      enabled: !1
    }), G(e, s);
  };
}
const fe = {
  eventsEmitter: It,
  update: Ft,
  translate: Yt,
  transition: Jt,
  slide: ni,
  loop: di,
  grabCursor: fi,
  events: xi,
  breakpoints: Ci,
  checkOverflow: Ai,
  classes: Ii
}, pe = {};
let be = class j {
  constructor() {
    let e, i;
    for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++)
      n[r] = arguments[r];
    n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? i = n[0] : [e, i] = n, i || (i = {}), i = G({}, i), e && !i.el && (i.el = e);
    const o = R();
    if (i.el && typeof i.el == "string" && o.querySelectorAll(i.el).length > 1) {
      const d = [];
      return o.querySelectorAll(i.el).forEach((u) => {
        const f = G({}, i, {
          el: u
        });
        d.push(new j(f));
      }), d;
    }
    const l = this;
    l.__swiper__ = !0, l.support = $e(), l.device = Pt({
      userAgent: i.userAgent
    }), l.browser = Mt(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], i.modules && Array.isArray(i.modules) && l.modules.push(...i.modules);
    const a = {};
    l.modules.forEach((d) => {
      d({
        params: i,
        swiper: l,
        extendParams: _i(i, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l)
      });
    });
    const c = G({}, ge, a);
    return l.params = G({}, c, pe, i), l.originalParams = G({}, l.params), l.passedParams = G({}, i), l.params && l.params.on && Object.keys(l.params.on).forEach((d) => {
      l.on(d, l.params.on[d]);
    }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
      enabled: l.params.enabled,
      el: e,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return l.params.direction === "horizontal";
      },
      isVertical() {
        return l.params.direction === "vertical";
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
      allowSlideNext: l.params.allowSlideNext,
      allowSlidePrev: l.params.allowSlidePrev,
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
        focusableElements: l.params.focusableElements,
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
      allowTouchMove: l.params.allowTouchMove,
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
    }), l.emit("_swiper"), l.params.init && l.init(), l;
  }
  getSlideIndex(e) {
    const {
      slidesEl: i,
      params: s
    } = this, n = k(i, `.${s.slideClass}, swiper-slide`), r = Pe(n[0]);
    return Pe(e) - r;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.filter((i) => i.getAttribute("data-swiper-slide-index") * 1 === e)[0]);
  }
  recalcSlides() {
    const e = this, {
      slidesEl: i,
      params: s
    } = e;
    e.slides = k(i, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
  }
  setProgress(e, i) {
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const n = s.minTranslate(), o = (s.maxTranslate() - n) * e + n;
    s.translateTo(o, typeof i > "u" ? 0 : i), s.updateActiveIndex(), s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = e.el.className.split(" ").filter((s) => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
    e.emit("_containerClasses", i.join(" "));
  }
  getSlideClasses(e) {
    const i = this;
    return i.destroyed ? "" : e.className.split(" ").filter((s) => s.indexOf("swiper-slide") === 0 || s.indexOf(i.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = [];
    e.slides.forEach((s) => {
      const n = e.getSlideClasses(s);
      i.push({
        slideEl: s,
        classNames: n
      }), e.emit("_slideClass", s, n);
    }), e.emit("_slideClasses", i);
  }
  slidesPerViewDynamic(e, i) {
    e === void 0 && (e = "current"), i === void 0 && (i = !1);
    const s = this, {
      params: n,
      slides: r,
      slidesGrid: o,
      slidesSizesGrid: l,
      size: a,
      activeIndex: c
    } = s;
    let d = 1;
    if (typeof n.slidesPerView == "number") return n.slidesPerView;
    if (n.centeredSlides) {
      let u = r[c] ? r[c].swiperSlideSize : 0, f;
      for (let p = c + 1; p < r.length; p += 1)
        r[p] && !f && (u += r[p].swiperSlideSize, d += 1, u > a && (f = !0));
      for (let p = c - 1; p >= 0; p -= 1)
        r[p] && !f && (u += r[p].swiperSlideSize, d += 1, u > a && (f = !0));
    } else if (e === "current")
      for (let u = c + 1; u < r.length; u += 1)
        (i ? o[u] + l[u] - o[c] < a : o[u] - o[c] < a) && (d += 1);
    else
      for (let u = c - 1; u >= 0; u -= 1)
        o[c] - o[u] < a && (d += 1);
    return d;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const {
      snapGrid: i,
      params: s
    } = e;
    s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
      o.complete && ie(e, o);
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
    function n() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate, l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let r;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      n(), s.autoHeight && e.updateAutoHeight();
    else {
      if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
        const o = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
        r = e.slideTo(o.length - 1, 0, !1, !0);
      } else
        r = e.slideTo(e.activeIndex, 0, !1, !0);
      r || n();
    }
    s.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, i) {
    i === void 0 && (i = !0);
    const s = this, n = s.params.direction;
    return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${n}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((r) => {
      e === "vertical" ? r.style.width = "" : r.style.height = "";
    }), s.emit("changeDirection"), i && s.update()), s;
  }
  changeLanguageDirection(e) {
    const i = this;
    i.rtl && e === "rtl" || !i.rtl && e === "ltr" || (i.rtl = e === "rtl", i.rtlTranslate = i.params.direction === "horizontal" && i.rtl, i.rtl ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`), i.el.dir = "rtl") : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`), i.el.dir = "ltr"), i.update());
  }
  mount(e) {
    const i = this;
    if (i.mounted) return !0;
    let s = e || i.params.el;
    if (typeof s == "string" && (s = document.querySelector(s)), !s)
      return !1;
    s.swiper = i, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === "SWIPER-CONTAINER" && (i.isElement = !0);
    const n = () => `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : k(s, n())[0];
    return !o && i.params.createElements && (o = Re("div", i.params.wrapperClass), s.append(o), k(s, `.${i.params.slideClass}`).forEach((l) => {
      o.append(l);
    })), Object.assign(i, {
      el: s,
      wrapperEl: o,
      slidesEl: i.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
      hostEl: i.isElement ? s.parentNode.host : s,
      mounted: !0,
      // RTL
      rtl: s.dir.toLowerCase() === "rtl" || H(s, "direction") === "rtl",
      rtlTranslate: i.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || H(s, "direction") === "rtl"),
      wrongRTL: H(o, "display") === "-webkit-box"
    }), !0;
  }
  init(e) {
    const i = this;
    if (i.initialized || i.mount(e) === !1) return i;
    i.emit("beforeInit"), i.params.breakpoints && i.setBreakpoint(), i.addClasses(), i.updateSize(), i.updateSlides(), i.params.watchOverflow && i.checkOverflow(), i.params.grabCursor && i.enabled && i.setGrabCursor(), i.params.loop && i.virtual && i.params.virtual.enabled ? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0) : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0), i.params.loop && i.loopCreate(), i.attachEvents();
    const n = [...i.el.querySelectorAll('[loading="lazy"]')];
    return i.isElement && n.push(...i.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((r) => {
      r.complete ? ie(i, r) : r.addEventListener("load", (o) => {
        ie(i, o.target);
      });
    }), ve(i), i.initialized = !0, ve(i), i.emit("init"), i.emit("afterInit"), i;
  }
  destroy(e, i) {
    e === void 0 && (e = !0), i === void 0 && (i = !0);
    const s = this, {
      params: n,
      el: r,
      wrapperEl: o,
      slides: l
    } = s;
    return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), n.loop && s.loopDestroy(), i && (s.removeClasses(), r.removeAttribute("style"), o.removeAttribute("style"), l && l.length && l.forEach((a) => {
      a.classList.remove(n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index");
    })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((a) => {
      s.off(a);
    }), e !== !1 && (s.el.swiper = null, lt(s)), s.destroyed = !0), null;
  }
  static extendDefaults(e) {
    G(pe, e);
  }
  static get extendedDefaults() {
    return pe;
  }
  static get defaults() {
    return ge;
  }
  static installModule(e) {
    j.prototype.__modules__ || (j.prototype.__modules__ = []);
    const i = j.prototype.__modules__;
    typeof e == "function" && i.indexOf(e) < 0 && i.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((i) => j.installModule(i)), j) : (j.installModule(e), j);
  }
};
Object.keys(fe).forEach((t) => {
  Object.keys(fe[t]).forEach((e) => {
    be.prototype[e] = fe[t][e];
  });
});
be.use([Lt, Ot]);
const je = [
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
function Y(t) {
  return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object" && !t.__swiper__;
}
function W(t, e) {
  const i = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((s) => i.indexOf(s) < 0).forEach((s) => {
    typeof t[s] > "u" ? t[s] = e[s] : Y(e[s]) && Y(t[s]) && Object.keys(e[s]).length > 0 ? e[s].__swiper__ ? t[s] = e[s] : W(t[s], e[s]) : t[s] = e[s];
  });
}
function Be(t) {
  return t === void 0 && (t = {}), t.navigation && typeof t.navigation.nextEl > "u" && typeof t.navigation.prevEl > "u";
}
function He(t) {
  return t === void 0 && (t = {}), t.pagination && typeof t.pagination.el > "u";
}
function qe(t) {
  return t === void 0 && (t = {}), t.scrollbar && typeof t.scrollbar.el > "u";
}
function We(t) {
  t === void 0 && (t = "");
  const e = t.split(" ").map((s) => s.trim()).filter((s) => !!s), i = [];
  return e.forEach((s) => {
    i.indexOf(s) < 0 && i.push(s);
  }), i.join(" ");
}
function Di(t) {
  return t === void 0 && (t = ""), t ? t.includes("swiper-wrapper") ? t : `swiper-wrapper ${t}` : "swiper-wrapper";
}
function Ni(t) {
  let {
    swiper: e,
    slides: i,
    passedParams: s,
    changedParams: n,
    nextEl: r,
    prevEl: o,
    scrollbarEl: l,
    paginationEl: a
  } = t;
  const c = n.filter((b) => b !== "children" && b !== "direction" && b !== "wrapperClass"), {
    params: d,
    pagination: u,
    navigation: f,
    scrollbar: p,
    virtual: g,
    thumbs: h
  } = e;
  let v, m, S, w, y, x, L, E;
  n.includes("thumbs") && s.thumbs && s.thumbs.swiper && d.thumbs && !d.thumbs.swiper && (v = !0), n.includes("controller") && s.controller && s.controller.control && d.controller && !d.controller.control && (m = !0), n.includes("pagination") && s.pagination && (s.pagination.el || a) && (d.pagination || d.pagination === !1) && u && !u.el && (S = !0), n.includes("scrollbar") && s.scrollbar && (s.scrollbar.el || l) && (d.scrollbar || d.scrollbar === !1) && p && !p.el && (w = !0), n.includes("navigation") && s.navigation && (s.navigation.prevEl || o) && (s.navigation.nextEl || r) && (d.navigation || d.navigation === !1) && f && !f.prevEl && !f.nextEl && (y = !0);
  const M = (b) => {
    e[b] && (e[b].destroy(), b === "navigation" ? (e.isElement && (e[b].prevEl.remove(), e[b].nextEl.remove()), d[b].prevEl = void 0, d[b].nextEl = void 0, e[b].prevEl = void 0, e[b].nextEl = void 0) : (e.isElement && e[b].el.remove(), d[b].el = void 0, e[b].el = void 0));
  };
  n.includes("loop") && e.isElement && (d.loop && !s.loop ? x = !0 : !d.loop && s.loop ? L = !0 : E = !0), c.forEach((b) => {
    if (Y(d[b]) && Y(s[b]))
      W(d[b], s[b]), (b === "navigation" || b === "pagination" || b === "scrollbar") && "enabled" in s[b] && !s[b].enabled && M(b);
    else {
      const $ = s[b];
      ($ === !0 || $ === !1) && (b === "navigation" || b === "pagination" || b === "scrollbar") ? $ === !1 && M(b) : d[b] = s[b];
    }
  }), c.includes("controller") && !m && e.controller && e.controller.control && d.controller && d.controller.control && (e.controller.control = d.controller.control), n.includes("children") && i && g && d.virtual.enabled && (g.slides = i, g.update(!0)), n.includes("children") && i && d.loop && (E = !0), v && h.init() && h.update(!0), m && (e.controller.control = d.controller.control), S && (e.isElement && (!a || typeof a == "string") && (a = document.createElement("div"), a.classList.add("swiper-pagination"), a.part.add("pagination"), e.el.appendChild(a)), a && (d.pagination.el = a), u.init(), u.render(), u.update()), w && (e.isElement && (!l || typeof l == "string") && (l = document.createElement("div"), l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), e.el.appendChild(l)), l && (d.scrollbar.el = l), p.init(), p.updateSize(), p.setTranslate()), y && (e.isElement && ((!r || typeof r == "string") && (r = document.createElement("div"), r.classList.add("swiper-button-next"), r.innerHTML = e.hostEl.constructor.nextButtonSvg, r.part.add("button-next"), e.el.appendChild(r)), (!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-button-prev"), o.innerHTML = e.hostEl.constructor.prevButtonSvg, o.part.add("button-prev"), e.el.appendChild(o))), r && (d.navigation.nextEl = r), o && (d.navigation.prevEl = o), f.init(), f.update()), n.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext), n.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev), n.includes("direction") && e.changeDirection(s.direction, !1), (x || E) && e.loopDestroy(), (L || E) && e.loopCreate(), e.update();
}
function Vi(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = !0);
  const i = {
    on: {}
  }, s = {}, n = {};
  W(i, ge), i._emitClasses = !0, i.init = !1;
  const r = {}, o = je.map((a) => a.replace(/_/, "")), l = Object.assign({}, t);
  return Object.keys(l).forEach((a) => {
    typeof t[a] > "u" || (o.indexOf(a) >= 0 ? Y(t[a]) ? (i[a] = {}, n[a] = {}, W(i[a], t[a]), W(n[a], t[a])) : (i[a] = t[a], n[a] = t[a]) : a.search(/on[A-Z]/) === 0 && typeof t[a] == "function" ? e ? s[`${a[2].toLowerCase()}${a.substr(3)}`] = t[a] : i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = t[a] : r[a] = t[a]);
  }), ["navigation", "pagination", "scrollbar"].forEach((a) => {
    i[a] === !0 && (i[a] = {}), i[a] === !1 && delete i[a];
  }), {
    params: i,
    passedParams: n,
    rest: r,
    events: s
  };
}
function Gi(t, e) {
  let {
    el: i,
    nextEl: s,
    prevEl: n,
    paginationEl: r,
    scrollbarEl: o,
    swiper: l
  } = t;
  Be(e) && s && n && (l.params.navigation.nextEl = s, l.originalParams.navigation.nextEl = s, l.params.navigation.prevEl = n, l.originalParams.navigation.prevEl = n), He(e) && r && (l.params.pagination.el = r, l.originalParams.pagination.el = r), qe(e) && o && (l.params.scrollbar.el = o, l.originalParams.scrollbar.el = o), l.init(i);
}
function Ri(t, e, i, s, n) {
  const r = [];
  if (!e) return r;
  const o = (a) => {
    r.indexOf(a) < 0 && r.push(a);
  };
  if (i && s) {
    const a = s.map(n), c = i.map(n);
    a.join("") !== c.join("") && o("children"), s.length !== i.length && o("children");
  }
  return je.filter((a) => a[0] === "_").map((a) => a.replace(/_/, "")).forEach((a) => {
    if (a in t && a in e)
      if (Y(t[a]) && Y(e[a])) {
        const c = Object.keys(t[a]), d = Object.keys(e[a]);
        c.length !== d.length ? o(a) : (c.forEach((u) => {
          t[a][u] !== e[a][u] && o(a);
        }), d.forEach((u) => {
          t[a][u] !== e[a][u] && o(a);
        }));
      } else t[a] !== e[a] && o(a);
  }), r;
}
const $i = (t) => {
  !t || t.destroyed || !t.params.virtual || t.params.virtual && !t.params.virtual.enabled || (t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.parallax && t.params.parallax && t.params.parallax.enabled && t.parallax.setTranslate());
};
function ae() {
  return ae = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, ae.apply(this, arguments);
}
function Ye(t) {
  return t.type && t.type.displayName && t.type.displayName.includes("SwiperSlide");
}
function Xe(t) {
  const e = [];
  return A.Children.toArray(t).forEach((i) => {
    Ye(i) ? e.push(i) : i.props && i.props.children && Xe(i.props.children).forEach((s) => e.push(s));
  }), e;
}
function ki(t) {
  const e = [], i = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  return A.Children.toArray(t).forEach((s) => {
    if (Ye(s))
      e.push(s);
    else if (s.props && s.props.slot && i[s.props.slot])
      i[s.props.slot].push(s);
    else if (s.props && s.props.children) {
      const n = Xe(s.props.children);
      n.length > 0 ? n.forEach((r) => e.push(r)) : i["container-end"].push(s);
    } else
      i["container-end"].push(s);
  }), {
    slides: e,
    slots: i
  };
}
function Fi(t, e, i) {
  if (!i) return null;
  const s = (d) => {
    let u = d;
    return d < 0 ? u = e.length + d : u >= e.length && (u = u - e.length), u;
  }, n = t.isHorizontal() ? {
    [t.rtlTranslate ? "right" : "left"]: `${i.offset}px`
  } : {
    top: `${i.offset}px`
  }, {
    from: r,
    to: o
  } = i, l = t.params.loop ? -e.length : 0, a = t.params.loop ? e.length * 2 : e.length, c = [];
  for (let d = l; d < a; d += 1)
    d >= r && d <= o && c.push(e[s(d)]);
  return c.map((d, u) => /* @__PURE__ */ A.cloneElement(d, {
    swiper: t,
    style: n,
    key: `slide-${u}`
  }));
}
function Q(t, e) {
  return typeof window > "u" ? re(t, e) : et(t, e);
}
const ze = /* @__PURE__ */ De(null), ji = /* @__PURE__ */ De(null), we = /* @__PURE__ */ _e(function(t, e) {
  let {
    className: i,
    tag: s = "div",
    wrapperTag: n = "div",
    children: r,
    onSwiper: o,
    ...l
  } = t === void 0 ? {} : t, a = !1;
  const [c, d] = q("swiper"), [u, f] = q(null), [p, g] = q(!1), h = F(!1), v = F(null), m = F(null), S = F(null), w = F(null), y = F(null), x = F(null), L = F(null), E = F(null), {
    params: M,
    passedParams: b,
    rest: $,
    events: T
  } = Vi(l), {
    slides: P,
    slots: C
  } = ki(r), z = () => {
    g(!p);
  };
  Object.assign(M.on, {
    _containerClasses(I, _) {
      d(_);
    }
  });
  const B = () => {
    Object.assign(M.on, T), a = !0;
    const I = {
      ...M
    };
    if (delete I.wrapperClass, m.current = new be(I), m.current.virtual && m.current.params.virtual.enabled) {
      m.current.virtual.slides = P;
      const _ = {
        cache: !1,
        slides: P,
        renderExternal: f,
        renderExternalUpdate: !1
      };
      W(m.current.params.virtual, _), W(m.current.originalParams.virtual, _);
    }
  };
  v.current || B(), m.current && m.current.on("_beforeBreakpoint", z);
  const X = () => {
    a || !T || !m.current || Object.keys(T).forEach((I) => {
      m.current.on(I, T[I]);
    });
  }, O = () => {
    !T || !m.current || Object.keys(T).forEach((I) => {
      m.current.off(I, T[I]);
    });
  };
  re(() => () => {
    m.current && m.current.off("_beforeBreakpoint", z);
  }), re(() => {
    !h.current && m.current && (m.current.emitSlidesClasses(), h.current = !0);
  }), Q(() => {
    if (e && (e.current = v.current), !!v.current)
      return m.current.destroyed && B(), Gi({
        el: v.current,
        nextEl: y.current,
        prevEl: x.current,
        paginationEl: L.current,
        scrollbarEl: E.current,
        swiper: m.current
      }, M), o && o(m.current), () => {
        m.current && !m.current.destroyed && m.current.destroy(!0, !1);
      };
  }, []), Q(() => {
    X();
    const I = Ri(b, S.current, P, w.current, (_) => _.key);
    return S.current = b, w.current = P, I.length && m.current && !m.current.destroyed && Ni({
      swiper: m.current,
      slides: P,
      passedParams: b,
      changedParams: I,
      nextEl: y.current,
      prevEl: x.current,
      scrollbarEl: E.current,
      paginationEl: L.current
    }), () => {
      O();
    };
  }), Q(() => {
    $i(m.current);
  }, [u]);
  function V() {
    return M.virtual ? Fi(m.current, P, u) : P.map((I, _) => /* @__PURE__ */ A.cloneElement(I, {
      swiper: m.current,
      swiperSlideIndex: _
    }));
  }
  return /* @__PURE__ */ A.createElement(s, ae({
    ref: v,
    className: We(`${c}${i ? ` ${i}` : ""}`)
  }, $), /* @__PURE__ */ A.createElement(ji.Provider, {
    value: m.current
  }, C["container-start"], /* @__PURE__ */ A.createElement(n, {
    className: Di(M.wrapperClass)
  }, C["wrapper-start"], V(), C["wrapper-end"]), Be(M) && /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("div", {
    ref: x,
    className: "swiper-button-prev"
  }), /* @__PURE__ */ A.createElement("div", {
    ref: y,
    className: "swiper-button-next"
  })), qe(M) && /* @__PURE__ */ A.createElement("div", {
    ref: E,
    className: "swiper-scrollbar"
  }), He(M) && /* @__PURE__ */ A.createElement("div", {
    ref: L,
    className: "swiper-pagination"
  }), C["container-end"]));
});
we.displayName = "Swiper";
const se = /* @__PURE__ */ _e(function(t, e) {
  let {
    tag: i = "div",
    children: s,
    className: n = "",
    swiper: r,
    zoom: o,
    lazy: l,
    virtualIndex: a,
    swiperSlideIndex: c,
    ...d
  } = t === void 0 ? {} : t;
  const u = F(null), [f, p] = q("swiper-slide"), [g, h] = q(!1);
  function v(y, x, L) {
    x === u.current && p(L);
  }
  Q(() => {
    if (typeof c < "u" && (u.current.swiperSlideIndex = c), e && (e.current = u.current), !(!u.current || !r)) {
      if (r.destroyed) {
        f !== "swiper-slide" && p("swiper-slide");
        return;
      }
      return r.on("_slideClass", v), () => {
        r && r.off("_slideClass", v);
      };
    }
  }), Q(() => {
    r && u.current && !r.destroyed && p(r.getSlideClasses(u.current));
  }, [r]);
  const m = {
    isActive: f.indexOf("swiper-slide-active") >= 0,
    isVisible: f.indexOf("swiper-slide-visible") >= 0,
    isPrev: f.indexOf("swiper-slide-prev") >= 0,
    isNext: f.indexOf("swiper-slide-next") >= 0
  }, S = () => typeof s == "function" ? s(m) : s, w = () => {
    h(!0);
  };
  return /* @__PURE__ */ A.createElement(i, ae({
    ref: u,
    className: We(`${f}${n ? ` ${n}` : ""}`),
    "data-swiper-slide-index": a,
    onLoad: w
  }, d), o && /* @__PURE__ */ A.createElement(ze.Provider, {
    value: m
  }, /* @__PURE__ */ A.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof o == "number" ? o : void 0
  }, S(), l && !g && /* @__PURE__ */ A.createElement("div", {
    className: "swiper-lazy-preloader"
  }))), !o && /* @__PURE__ */ A.createElement(ze.Provider, {
    value: m
  }, S(), l && !g && /* @__PURE__ */ A.createElement("div", {
    className: "swiper-lazy-preloader"
  })));
});
se.displayName = "SwiperSlide";
function Bi(t) {
  if (!t?.resources) return [];
  const e = /* @__PURE__ */ new Map();
  let i = null;
  t.resources.forEach((n) => {
    let r = n.context?.custom?.alt || "";
    if (!r && n.metadata) {
      const c = n.metadata.find((d) => d.external_id === "alt" || d.label.toLowerCase() === "alt");
      c && (r = c.value);
    }
    let o = 0;
    if (n.metadata) {
      const c = n.metadata.find((d) => d.external_id === "sfcc-gallery-position");
      c && (o = parseInt(c.value, 10));
    }
    let l = !1;
    if (n.metadata) {
      const c = n.metadata.find((d) => d.external_id === "sfcc-is-main");
      c && (l = c.value?.value === "True");
    }
    const a = {
      id: n.asset_id,
      src: n.secure_url || n.url || n.public_id,
      type: n.resource_type || "image",
      // 'image' or 'video'
      width: n.width,
      height: n.height,
      format: n.format,
      alt: r,
      position: o,
      isMain: l,
      version: n.version || 0
    };
    l ? (!i || i.version < a.version) && (i = a) : (!e.has(o) || e.get(o).version < a.version) && e.set(o, a);
  });
  const s = Array.from(e.values()).sort((n, r) => n.position - r.position);
  return i && s.unshift(i), s;
}
function Ae({ config: t }) {
  const [e, i] = q(null), [s, n] = q([]);
  re(() => {
    !t || !t.slidesUrl || fetch(t.slidesUrl).then((f) => f.json()).then((f) => n(Bi(f))).catch((f) => console.error("Failed to fetch slides JSON:", f));
  }, [t]);
  function r(f) {
    if (!f || !f.src) return "";
    if (!t || !t.resourcePath) return f.src;
    if (f.format) {
      const p = f.format === "mp4" || f.format === "webm" ? t.resourcePath.video : t.resourcePath.image;
      if (!t.transformations) return p + f.src;
      const g = t.transformations[f.format === "mp4" || f.format === "webm" ? "video" : f.format === "gif" ? "gif" : "image"];
      return new URL(p + g + "v1/" + f.src).toString();
    }
    return resourcePath + transformation + "v1/" + f.src;
  }
  function o(f) {
    if (!f || !f.src) return "";
    if (!t || !t.resourcePath) return f.src;
    const p = f.format === "mp4" || f.format === "webm" ? t.resourcePath.video : t.resourcePath.image;
    if (!t.transformations) return p + f.src;
    const g = t.transformations.thumbnail;
    return new URL(p + g + "v1/" + f.src).toString();
  }
  if (!t || s.length === 0) return null;
  const l = window.innerWidth >= (t.thumbnails?.breakpoint || 768), a = l ? t.thumbnails?.desktop : t.thumbnails?.mobile, c = a?.enabled && s.length > 0, d = a?.direction || "horizontal", u = l ? t.desktopCrop : t.mobileCrop;
  return /* @__PURE__ */ D.jsxs("div", { "aria-live": "polite", style: { display: "flex", gap: "10px" }, children: [
    c && /* @__PURE__ */ D.jsxs("div", { className: "thumb-column", children: [
      /* @__PURE__ */ D.jsx("button", { className: "thumb-nav thumb-nav-prev", "aria-label": "Previous thumbnails", children: /* @__PURE__ */ D.jsx("i", { class: "fa-solid fa-angle-up" }) }),
      /* @__PURE__ */ D.jsx(
        we,
        {
          modules: [Me],
          autoplay: !1,
          onSwiper: i,
          direction: d,
          spaceBetween: 10,
          watchSlidesProgress: !0,
          slidesPerView: 6,
          navigation: {
            prevEl: ".thumb-nav-prev",
            nextEl: ".thumb-nav-next"
          },
          style: {
            height: d === "vertical" ? 70 * s.length + "px" : "auto",
            width: d === "vertical" ? "100px" : "100%"
          },
          children: s.map((f, p) => /* @__PURE__ */ D.jsx(se, { style: { width: 80, height: 80 }, children: /* @__PURE__ */ D.jsx(
            "img",
            {
              src: o(f),
              alt: f.alt || "",
              className: "thumb-slide",
              style: {
                width: 80,
                height: 80,
                objectFit: "cover",
                cursor: "pointer"
              }
            }
          ) }, p))
        }
      ),
      /* @__PURE__ */ D.jsx("button", { className: "thumb-nav thumb-nav-next", "aria-label": "Next thumbnails", children: /* @__PURE__ */ D.jsx("i", { class: "fa-solid fa-angle-down" }) })
    ] }),
    /* @__PURE__ */ D.jsx(
      we,
      {
        modules: [Me, wt, gt, ht, yt],
        keyboard: { enabled: !0, onlyInViewport: !0 },
        loop: t.loop || !1,
        navigation: !0,
        thumbs: { swiper: c ? e : null },
        lazy: { loadPrevNext: !0 },
        autoplay: t.videoProps?.autoplay ? { delay: 5e3 } : !1,
        slidesPerView: 1,
        effect: l ? "fade" : "slide",
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
          height: u?.height || "auto",
          width: u?.width || "auto"
        },
        children: s.map((f, p) => f.type === "image" ? /* @__PURE__ */ D.jsxs(se, { children: [
          /* @__PURE__ */ D.jsx(
            "img",
            {
              src: r(f),
              "data-src": r(f),
              alt: f.alt || "",
              className: "swiper-lazy",
              style: {
                width: u?.width || "auto",
                height: u?.height || "auto",
                objectFit: t.imageProps?.objectFit || "cover"
              },
              loading: t.imageProps?.lazyLoad ? "lazy" : "eager"
            }
          ),
          /* @__PURE__ */ D.jsx("div", { className: "swiper-lazy-preloader" })
        ] }, p) : f.type === "video" ? /* @__PURE__ */ D.jsx(se, { children: /* @__PURE__ */ D.jsx(
          "video",
          {
            src: r(f),
            poster: f.poster || "",
            muted: t.videoProps?.muted ?? !0,
            autoPlay: t.videoProps?.autoplay ?? !0,
            loop: t.videoProps?.loop ?? !0,
            playsInline: t.videoProps?.playsInline ?? !0,
            "aria-label": f.alt || "Product video",
            style: {
              width: u.width,
              height: u.height,
              objectFit: t.videoProps?.objectFit || "cover"
            }
          }
        ) }, p) : null)
      }
    )
  ] });
}
const U = /* @__PURE__ */ new Map();
function Ue(t) {
  return typeof t == "string" ? document.querySelector(t) : t;
}
function Ke(t, e) {
  const i = Ue(t);
  if (!i)
    return console.error("[RemoteSlider] mount target not found:", t), null;
  if (U.has(i)) {
    const { root: n } = U.get(i);
    return n.render(/* @__PURE__ */ D.jsx(Ae, { config: e })), i;
  }
  const s = nt.createRoot(i);
  return s.render(/* @__PURE__ */ D.jsx(Ae, { config: e })), U.set(i, { root: s }), i;
}
function Je(t) {
  const e = Ue(t);
  if (!e || !U.has(e)) return;
  const { root: i } = U.get(e);
  i.unmount(), U.delete(e);
}
function Hi(t, e) {
  return Je(t), Ke(t, e);
}
const Yi = { mount: Ke, unmount: Je, remount: Hi };
export {
  Yi as default,
  Ke as mount,
  Hi as remount,
  Je as unmount
};
