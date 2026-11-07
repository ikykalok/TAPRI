(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/motion/SmoothScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SmoothScroll({ children }) {
    _s();
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const wrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            if (reduced) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                return;
            }
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.15,
                easing: {
                    "SmoothScroll.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["SmoothScroll.useEffect"],
                smoothWheel: true,
                syncTouch: false,
                touchMultiplier: 1.4,
                wheelMultiplier: 0.95
            });
            window.__lenis = lenis;
            lenis.on("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.add({
                "SmoothScroll.useEffect": (t)=>lenis.raf(t * 1000)
            }["SmoothScroll.useEffect"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.lagSmoothing(0);
            document.documentElement.classList.add("lenis");
            // intercept anchor clicks
            const onClick = {
                "SmoothScroll.useEffect.onClick": (e)=>{
                    const a = e.target.closest('a[href^="#"]');
                    if (!a) return;
                    const hash = a.getAttribute("href");
                    if (!hash || hash === "#") return;
                    e.preventDefault();
                    try {
                        const target = document.querySelector(hash);
                        if (target) lenis.scrollTo(target, {
                            offset: 0,
                            duration: 1.6
                        });
                    } catch  {}
                }
            }["SmoothScroll.useEffect.onClick"];
            document.addEventListener("click", onClick);
            // refresh
            const refresh = {
                "SmoothScroll.useEffect.refresh": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh()
            }["SmoothScroll.useEffect.refresh"];
            const refreshTimer = setTimeout(refresh, 300);
            document.fonts?.ready.then(refresh);
            let lastW = window.innerWidth;
            let resizeTimer = 0;
            const onResize = {
                "SmoothScroll.useEffect.onResize": ()=>{
                    clearTimeout(resizeTimer);
                    resizeTimer = window.setTimeout({
                        "SmoothScroll.useEffect.onResize": ()=>{
                            if (Math.abs(window.innerWidth - lastW) < 2) return;
                            lastW = window.innerWidth;
                            refresh();
                        }
                    }["SmoothScroll.useEffect.onResize"], 250);
                }
            }["SmoothScroll.useEffect.onResize"];
            window.addEventListener("resize", onResize);
            return ({
                "SmoothScroll.useEffect": ()=>{
                    lenis.destroy();
                    window.__lenis = undefined;
                    document.documentElement.classList.remove("lenis");
                    document.removeEventListener("click", onClick);
                    clearTimeout(refreshTimer);
                    clearTimeout(resizeTimer);
                    window.removeEventListener("resize", onResize);
                }
            })["SmoothScroll.useEffect"];
        }
    }["SmoothScroll.useEffect"], [
        reduced
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrap,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/motion/SmoothScroll.tsx",
        lineNumber: 78,
        columnNumber: 10
    }, this);
}
_s(SmoothScroll, "R0A9wYMmbAtANJ6Q4uW7I9k11tA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Cursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Cursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Cursor() {
    _s();
    const fine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(pointer: fine)", false);
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const dot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const visible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Cursor.useEffect": ()=>{
            if (!fine || reduced) return;
            const d = dot.current, r = ring.current;
            let raf = 0;
            const move = {
                "Cursor.useEffect.move": (e)=>{
                    target.current.x = e.clientX;
                    target.current.y = e.clientY;
                    d.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
                    if (!visible.current) {
                        visible.current = true;
                        d.style.opacity = "1";
                        r.style.opacity = "1";
                    }
                }
            }["Cursor.useEffect.move"];
            const leave = {
                "Cursor.useEffect.leave": ()=>{
                    visible.current = false;
                    d.style.opacity = "0";
                    r.style.opacity = "0";
                }
            }["Cursor.useEffect.leave"];
            const enter = {
                "Cursor.useEffect.enter": ()=>{
                    visible.current = true;
                    d.style.opacity = "1";
                    r.style.opacity = "1";
                }
            }["Cursor.useEffect.enter"];
            const tick = {
                "Cursor.useEffect.tick": ()=>{
                    pos.current.x += (target.current.x - pos.current.x) * 0.18;
                    pos.current.y += (target.current.y - pos.current.y) * 0.18;
                    r.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
                    // detect nearest data-cursor
                    const el = document.elementFromPoint(target.current.x, target.current.y);
                    const cur = el?.closest?.("[data-cursor]");
                    const mode = cur?.getAttribute("data-cursor") ?? "";
                    r.dataset.mode = mode;
                    raf = requestAnimationFrame(tick);
                }
            }["Cursor.useEffect.tick"];
            window.addEventListener("mousemove", move);
            document.addEventListener("mouseleave", leave);
            document.addEventListener("mouseenter", enter);
            raf = requestAnimationFrame(tick);
            return ({
                "Cursor.useEffect": ()=>{
                    window.removeEventListener("mousemove", move);
                    document.removeEventListener("mouseleave", leave);
                    document.removeEventListener("mouseenter", enter);
                    cancelAnimationFrame(raf);
                }
            })["Cursor.useEffect"];
        }
    }["Cursor.useEffect"], [
        fine,
        reduced
    ]);
    if (!fine || reduced) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dot,
                className: "pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full opacity-0",
                style: {
                    backgroundColor: "#F5F3EE",
                    mixBlendMode: "difference"
                }
            }, void 0, false, {
                fileName: "[project]/components/ui/Cursor.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ring,
                className: "pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full border border-ivory opacity-0 transition-[width,height,background-color] duration-500",
                style: {
                    width: 32,
                    height: 32,
                    mixBlendMode: "difference",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
                },
                "data-mode": "",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          [data-mode="link"] { width: 48px !important; height: 48px !important; }
          [data-mode="cta"] { width: 64px !important; height: 64px !important; background: rgba(247,236,216,0.2) !important; }
          [data-mode="view"], [data-mode="drag"], [data-mode="3d"] { width: 80px !important; height: 80px !important; background: #f7ecd8 !important; border-color: transparent !important; }
          [data-mode="view"]::after, [data-mode="drag"]::after, [data-mode="3d"]::after {
            font-family: var(--font-mono);
            font-size: 0.6rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--color-ink);
          }
          [data-mode="view"]::after { content: "View"; }
          [data-mode="drag"]::after { content: "Drag"; }
          [data-mode="3d"]::after { content: "Rotate"; }
        `
                }, void 0, false, {
                    fileName: "[project]/components/ui/Cursor.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/Cursor.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Cursor.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(Cursor, "hSsnI5+oYo7QVWbbYK4X486SdRU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Cursor;
var _c;
__turbopack_context__.k.register(_c, "Cursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/gsap.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
"use client";
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].config({
        ignoreMobileResize: true,
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].defaults({
        ease: "power3.out",
        duration: 1
    });
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEvent",
    ()=>useEvent,
    "useInView",
    ()=>useInView,
    "useIsMobile",
    ()=>useIsMobile,
    "useIsTouch",
    ()=>useIsTouch,
    "useLatest",
    ()=>useLatest,
    "useMediaQuery",
    ()=>useMediaQuery,
    "usePointer",
    ()=>usePointer,
    "useQualityTier",
    ()=>useQualityTier,
    "useReducedMotion",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
"use client";
;
const useIsomorphicLayoutEffect = ("TURBOPACK compile-time truthy", 1) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : "TURBOPACK unreachable";
function useMediaQuery(query, initial = false) {
    _s();
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>{
            const mql = window.matchMedia(query);
            setMatches(mql.matches);
            const handler = {
                "useMediaQuery.useEffect.handler": (e)=>setMatches(e.matches)
            }["useMediaQuery.useEffect.handler"];
            mql.addEventListener("change", handler);
            return ({
                "useMediaQuery.useEffect": ()=>mql.removeEventListener("change", handler)
            })["useMediaQuery.useEffect"];
        }
    }["useMediaQuery.useEffect"], [
        query
    ]);
    return matches;
}
_s(useMediaQuery, "wsYc9Ou4Le2hWHXpjhm7bn2z/0o=");
function useReducedMotion() {
    _s1();
    return useMediaQuery("(prefers-reduced-motion: reduce)", false);
}
_s1(useReducedMotion, "AGUsWXV/IGWEYGrGyhqugaEb9zc=", false, function() {
    return [
        useMediaQuery
    ];
});
function useIsMobile() {
    _s2();
    return useMediaQuery("(max-width:767px)", false);
}
_s2(useIsMobile, "AGUsWXV/IGWEYGrGyhqugaEb9zc=", false, function() {
    return [
        useMediaQuery
    ];
});
function useIsTouch() {
    _s3();
    return useMediaQuery("(hover:none), (pointer:coarse)", false);
}
_s3(useIsTouch, "AGUsWXV/IGWEYGrGyhqugaEb9zc=", false, function() {
    return [
        useMediaQuery
    ];
});
function useQualityTier() {
    _s4();
    const [tier, setTier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useQualityTier.useEffect": ()=>{
            const mobile = window.matchMedia("(max-width:767px)").matches;
            const cores = navigator.hardwareConcurrency ?? 4;
            const mem = navigator.deviceMemory ?? 4;
            const dpr = window.devicePixelRatio ?? 1;
            if (mobile || cores <= 4 || mem <= 4) {
                setTier(0);
                return;
            }
            if (cores >= 8 && mem >= 8 && dpr <= 2) {
                setTier(2);
                return;
            }
            setTier(1);
        }
    }["useQualityTier.useEffect"], []);
    return tier;
}
_s4(useQualityTier, "008OswajImpzTuw2MXHcoZQuGII=");
function useInView(options) {
    _s5();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const io = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setInView(true);
                        if (options?.once !== false) io.disconnect();
                    } else {
                        if (options?.once === false) setInView(false);
                    }
                }
            }["useInView.useEffect"], {
                rootMargin: options?.rootMargin ?? "0px 0px -10% 0px",
                threshold: options?.threshold ?? 0.1
            });
            io.observe(el);
            return ({
                "useInView.useEffect": ()=>io.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        options?.rootMargin,
        options?.threshold,
        options?.once
    ]);
    return {
        ref,
        inView
    };
}
_s5(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
function usePointer() {
    _s6();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePointer.useEffect": ()=>{
            const handler = {
                "usePointer.useEffect.handler": (e)=>{
                    ref.current.x = e.clientX / window.innerWidth * 2 - 1;
                    ref.current.y = -(e.clientY / window.innerHeight * 2 - 1);
                }
            }["usePointer.useEffect.handler"];
            window.addEventListener("pointermove", handler, {
                passive: true
            });
            return ({
                "usePointer.useEffect": ()=>window.removeEventListener("pointermove", handler)
            })["usePointer.useEffect"];
        }
    }["usePointer.useEffect"], []);
    return ref;
}
_s6(usePointer, "8uVE59eA/r6b92xF80p7sH8rXLk=");
function useLatest(value) {
    _s7();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    useIsomorphicLayoutEffect({
        "useLatest.useIsomorphicLayoutEffect": ()=>{
            ref.current = value;
        }
    }["useLatest.useIsomorphicLayoutEffect"]);
    return ref;
}
_s7(useLatest, "grbnI+/2AClv8o2yiEFSlV7U3QY=", false, function() {
    return [
        useIsomorphicLayoutEffect
    ];
});
function useEvent(fn) {
    _s8();
    const ref = useLatest(fn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useEvent.useMemo": ()=>({
                "useEvent.useMemo": (...args)=>ref.current(...args)
            })["useEvent.useMemo"]
    }["useEvent.useMemo"], [
        ref
    ]);
}
_s8(useEvent, "w2AFC24tKFyQHXuWZUY36pXYL9o=", false, function() {
    return [
        useLatest
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_09539e5w_3ziw._.js.map