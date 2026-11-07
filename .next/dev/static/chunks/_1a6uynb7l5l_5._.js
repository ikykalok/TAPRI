(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/motion/Counter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Counter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Counter({ value, suffix = "", decimals = 0, className }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Counter.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            if (reduced) {
                el.textContent = value.toLocaleString("en-IN", {
                    minimumFractionDigits: decimals,
                    maximumFractionDigits: decimals
                }) + suffix;
                return;
            }
            const obj = {
                v: 0
            };
            const tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(obj, {
                v: value,
                duration: 1.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    once: true
                },
                onUpdate: {
                    "Counter.useEffect.tween": ()=>{
                        el.textContent = obj.v.toLocaleString("en-IN", {
                            minimumFractionDigits: decimals,
                            maximumFractionDigits: decimals
                        }) + suffix;
                    }
                }["Counter.useEffect.tween"]
            });
            return ({
                "Counter.useEffect": ()=>{
                    tween.kill();
                }
            })["Counter.useEffect"];
        }
    }["Counter.useEffect"], [
        value,
        suffix,
        decimals,
        reduced
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: className,
        children: [
            "0",
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/components/motion/Counter.tsx",
        lineNumber: 37,
        columnNumber: 10
    }, this);
}
_s(Counter, "qdA0ZTlsnOFgfHCauEbwXJ5DZCQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Counter;
var _c;
__turbopack_context__.k.register(_c, "Counter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/motion/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Reveal({ children, className, delay = 0, lines, as: Tag = "div" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const io = new IntersectionObserver({
                "Reveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        if (delay) {
                            setTimeout({
                                "Reveal.useEffect": ()=>el.classList.add("is-in")
                            }["Reveal.useEffect"], delay * 1000);
                        } else {
                            el.classList.add("is-in");
                        }
                        io.disconnect();
                    }
                }
            }["Reveal.useEffect"], {
                rootMargin: "0px 0px -12% 0px",
                threshold: 0.05
            });
            io.observe(el);
            return ({
                "Reveal.useEffect": ()=>io.disconnect()
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], [
        delay
    ]);
    if (lines) {
        const parts = lines.split("\n");
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
            ref: ref,
            "data-reveal": true,
            className: className,
            children: parts.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "line-mask",
                    style: {
                        transitionDelay: `${i * 80}ms`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: line
                    }, void 0, false, {
                        fileName: "[project]/components/motion/Reveal.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this)
                }, i, false, {
                    fileName: "[project]/components/motion/Reveal.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/motion/Reveal.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ref: ref,
        "data-reveal": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        style: delay ? {
            transitionDelay: `${delay}s`
        } : undefined,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/motion/Reveal.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(Reveal, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/DunkSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DunkSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const DunkScene = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/lib/story/engine.ts [app-client] (ecmascript, async loader)").then((m)=>({
            default: m.DunkScene
        })));
_c = DunkScene;
const VERDICT = {
    dry: {
        title: "Barely damp.",
        tone: "text-ink"
    },
    perfect: {
        title: "Perfect dunk.",
        tone: "text-leaf"
    },
    risky: {
        title: "Living dangerously.",
        tone: "text-kesar"
    },
    lost: {
        title: "Lost at sea.",
        tone: "text-accent"
    }
};
function DunkSection() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [id, setId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("glucose");
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [holding, setHolding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        saved: 0,
        lost: 0
    });
    const [mount, setMount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const secs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cur = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dunkables"].find((d)=>d.id === id);
    const scale = cur.limit * 1.12; // seconds across the whole meter
    const ctrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        holding: false,
        kind: "glucose",
        limit: cur.limit,
        sweet: cur.sweet,
        fresh: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DunkSection.useEffect": ()=>{
            const current = ctrl.current;
            current.onTick = ({
                "DunkSection.useEffect": (s)=>{
                    if (secs.current) secs.current.textContent = s.toFixed(1);
                    if (bar.current) bar.current.style.transform = `scaleX(${Math.min(1, s / (current.limit * 1.12))})`;
                }
            })["DunkSection.useEffect"];
            ctrl.current.onResult = ({
                "DunkSection.useEffect": (r, s)=>{
                    setResult({
                        r,
                        secs: s
                    });
                    setHolding(false);
                    ctrl.current.holding = false;
                    setScore({
                        "DunkSection.useEffect": (sc)=>r === "lost" ? {
                                ...sc,
                                lost: sc.lost + 1
                            } : r === "dry" ? sc : {
                                ...sc,
                                saved: sc.saved + 1
                            }
                    }["DunkSection.useEffect"]);
                }
            })["DunkSection.useEffect"];
            return ({
                "DunkSection.useEffect": ()=>{
                    current.onTick = undefined;
                    current.onResult = undefined;
                }
            })["DunkSection.useEffect"];
        }
    }["DunkSection.useEffect"], []);
    const pick = (next)=>{
        const d = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dunkables"].find((x)=>x.id === next);
        Object.assign(ctrl.current, {
            kind: next,
            limit: d.limit,
            sweet: d.sweet,
            holding: false,
            fresh: ctrl.current.fresh + 1
        });
        setId(next);
        setResult(null);
        setHolding(false);
    };
    const down = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DunkSection.useCallback[down]": ()=>{
            if (result) {
                ctrl.current.fresh += 1;
                setResult(null);
            }
            ctrl.current.holding = true;
            setHolding(true);
        }
    }["DunkSection.useCallback[down]"], [
        result
    ]);
    const up = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DunkSection.useCallback[up]": ()=>{
            ctrl.current.holding = false;
            setHolding(false);
        }
    }["DunkSection.useCallback[up]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DunkSection.useEffect": ()=>{
            const el = ref.current;
            const io = new IntersectionObserver({
                "DunkSection.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        setMount(true);
                        io.disconnect();
                    }
                }
            }["DunkSection.useEffect"], {
                rootMargin: "700px 0px"
            });
            io.observe(el);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "DunkSection.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo("[data-dk-h] > span > span", {
                        yPercent: 115
                    }, {
                        yPercent: 0,
                        duration: 1.2,
                        ease: "expo.out",
                        stagger: 0.08,
                        scrollTrigger: {
                            trigger: "[data-dk-h]",
                            start: "top 85%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo("[data-dk-in]", {
                        opacity: 0,
                        y: 40
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1.1,
                        stagger: 0.07,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 65%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo("[data-dk-stage]", {
                        scale: 0.94,
                        opacity: 0
                    }, {
                        scale: 1,
                        opacity: 1,
                        duration: 1.3,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: "[data-dk-stage]",
                            start: "top 85%"
                        }
                    });
                }
            }["DunkSection.useEffect.ctx"], el);
            return ({
                "DunkSection.useEffect": ()=>{
                    io.disconnect();
                    ctx.revert();
                }
            })["DunkSection.useEffect"];
        }
    }["DunkSection.useEffect"], []);
    const v = result ? VERDICT[result.r] : null;
    const line = "block overflow-hidden pb-[0.2em] -mb-[0.2em] pt-[0.1em] -mt-[0.1em]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        id: "dunk",
        className: "relative z-10 overflow-hidden bg-paper pb-[14vh] pt-[14vh] text-ink",
        "aria-labelledby": "dunk-h",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-x grid grid-cols-12 items-center gap-x-6 gap-y-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-12 lg:col-span-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow mb-6",
                            children: "10 — Play with your food"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/DunkSection.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "dunk-h",
                            "data-dk-h": true,
                            className: "fat text-[clamp(3rem,7vw,7.4rem)] leading-[1]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: line,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block",
                                        children: "The dunk"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/DunkSection.tsx",
                                        lineNumber: 77,
                                        columnNumber: 36
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: line,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-accent",
                                        children: "test."
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/DunkSection.tsx",
                                        lineNumber: 78,
                                        columnNumber: 36
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/DunkSection.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-dk-in": true,
                            className: "lede mt-6 max-w-[34ch] text-ink/70",
                            children: "Every biscuit has a number. Hold the button to dunk, let go before the chai wins."
                        }, void 0, false, {
                            fileName: "[project]/components/sections/DunkSection.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-dk-in": true,
                            role: "radiogroup",
                            "aria-label": "Choose a biscuit",
                            className: "mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dunkables"].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    role: "radio",
                                    "aria-checked": d.id === id,
                                    onClick: ()=>pick(d.id),
                                    "data-cursor": "link",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl border px-3.5 py-3 text-left transition-colors duration-300", d.id === id ? "border-ink bg-ink text-ivory" : "border-ink/20 hover:border-ink"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "fat block text-[1.15rem] leading-none",
                                            children: d.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-1.5 block font-mono text-[0.54rem] uppercase tracking-[0.12em] opacity-60",
                                            children: d.sub
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, d.id, true, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/DunkSection.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-dk-in": true,
                            className: "mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-end justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "flex items-start gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    ref: secs,
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fat text-[clamp(3.4rem,6vw,5.4rem)] leading-[0.85] tabular-nums transition-colors", result?.r === "lost" && "text-accent"),
                                                    children: "0.0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 53
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fat pt-1 text-2xl",
                                                    children: "s"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 219
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "pb-1 text-right font-mono text-[0.58rem] uppercase leading-relaxed tracking-[0.14em] text-ink/55",
                                            children: [
                                                "Saved ",
                                                String(score.saved).padStart(2, "0"),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 171
                                                }, this),
                                                "Lost ",
                                                String(score.lost).padStart(2, "0")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mt-4 h-3 overflow-hidden rounded-full bg-ink/10",
                                    "aria-hidden": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute inset-y-0 bg-pista",
                                            style: {
                                                left: `${cur.sweet[0] / scale * 100}%`,
                                                width: `${(cur.sweet[1] - cur.sweet[0]) / scale * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute inset-y-0 w-0.5 bg-accent",
                                            style: {
                                                left: `${cur.limit / scale * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: bar,
                                            className: "absolute inset-0 origin-left bg-ink/75 mix-blend-multiply",
                                            style: {
                                                transform: "scaleX(0)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex justify-between font-mono text-[0.54rem] uppercase tracking-[0.14em] text-ink/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Dry"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 102,
                                            columnNumber: 121
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-leaf",
                                            children: [
                                                "Sweet spot ",
                                                cur.sweet[0],
                                                "–",
                                                cur.sweet[1],
                                                " s"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 102,
                                            columnNumber: 137
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-accent",
                                            children: [
                                                "Gone at ",
                                                cur.limit,
                                                " s"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 102,
                                            columnNumber: 214
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/DunkSection.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-dk-in": true,
                            className: "mt-8 flex items-center gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "data-cursor": "cta",
                                    "aria-label": "Hold to dunk the biscuit",
                                    onPointerDown: (e)=>{
                                        e.preventDefault();
                                        e.target.setPointerCapture?.(e.pointerId);
                                        down();
                                    },
                                    onPointerUp: up,
                                    onPointerCancel: up,
                                    onLostPointerCapture: up,
                                    onKeyDown: (e)=>{
                                        if ((e.key === " " || e.key === "Enter") && !e.repeat) {
                                            e.preventDefault();
                                            down();
                                        }
                                    },
                                    onKeyUp: (e)=>{
                                        if (e.key === " " || e.key === "Enter") up();
                                    },
                                    onContextMenu: (e)=>e.preventDefault(),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("tapri-hold relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full text-center font-mono text-[0.6rem] font-bold uppercase leading-tight tracking-[0.12em] transition-[transform,background-color] duration-200", holding ? "scale-90 bg-accent text-cream" : "bg-ink text-ivory hover:bg-accent"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 rounded-full border-2 border-accent", holding ? "animate-ping opacity-60" : "opacity-0")
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        holding ? "Let go!" : result ? "Again" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Hold",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 63
                                                }, this),
                                                "to dunk"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 111,
                                            columnNumber: 57
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-live": "polite",
                                    className: "min-h-[4.5rem]",
                                    children: v ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fat text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.05]", v.tone),
                                                children: v.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/DunkSection.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "body-sm mt-1 max-w-[30ch] text-ink/65",
                                                children: result.r === "lost" ? cur.note : result.r === "dry" ? `${result.secs.toFixed(1)} s. Give it at least ${cur.sweet[0]}.` : result.r === "perfect" ? `${result.secs.toFixed(1)} s. Soft outside, still has a spine.` : `${result.secs.toFixed(1)} s. It held — just. Eat it now.`
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/DunkSection.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/DunkSection.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "body-sm max-w-[30ch] text-ink/60",
                                        children: [
                                            cur.name,
                                            ": ",
                                            cur.note
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/DunkSection.tsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/DunkSection.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/DunkSection.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-12 lg:col-span-7",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-dk-stage": true,
                        className: "relative mx-auto aspect-[4/5] w-full max-w-[640px] overflow-hidden rounded-[2.2rem] lg:aspect-[5/6]",
                        style: {
                            background: "radial-gradient(70% 60% at 50% 48%, #fdf6e8 0%, #f6e6cb 55%, #e9cd9f 100%)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "aria-hidden": true,
                                className: "fat pointer-events-none absolute inset-x-0 top-[6%] text-center text-[clamp(5rem,15vw,13rem)] leading-none text-ink/[0.06]",
                                children: [
                                    cur.limit,
                                    "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/DunkSection.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            mount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                                fallback: null,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DunkScene, {
                                    ctrl: ctrl
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 129,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/DunkSection.tsx",
                                lineNumber: 129,
                                columnNumber: 23
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "pointer-events-none absolute bottom-4 left-5 font-mono text-[0.56rem] uppercase tracking-[0.14em] text-ink/45",
                                children: [
                                    "Live 3D · ",
                                    cur.name,
                                    " · ",
                                    cur.sub
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/DunkSection.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/DunkSection.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/DunkSection.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/DunkSection.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/DunkSection.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(DunkSection, "qGrjP8Vx6Y/Bn4S3OQT+rhVi97o=");
_c1 = DunkSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "DunkScene");
__turbopack_context__.k.register(_c1, "DunkSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/ManifestoSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManifestoSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion/Reveal.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function ManifestoSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "manifesto",
        className: "relative bg-paper text-ink pb-28 pt-24 md:pb-40 md:pt-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "tapri-scallop text-paper",
                viewBox: "0 0 1200 24",
                preserveAspectRatio: "none",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0,24 C15,24 20,0 30,0 C40,0 45,24 60,24 C75,24 80,0 90,0 C100,0 105,24 120,24 C135,24 140,0 150,0 C160,0 165,24 180,24 C195,24 200,0 210,0 C220,0 225,24 240,24 C255,24 260,0 270,0 C280,0 285,24 300,24 C315,24 320,0 330,0 C340,0 345,24 360,24 C375,24 380,0 390,0 C400,0 405,24 420,24 C435,24 440,0 450,0 C460,0 465,24 480,24 C495,24 500,0 510,0 C520,0 525,24 540,24 C555,24 560,0 570,0 C580,0 585,24 600,24 C615,24 620,0 630,0 C640,0 645,24 660,24 C675,24 680,0 690,0 C700,0 705,24 720,24 C735,24 740,0 750,0 C760,0 765,24 780,24 C795,24 800,0 810,0 C820,0 825,24 840,24 C855,24 860,0 870,0 C880,0 885,24 900,24 C915,24 920,0 930,0 C940,0 945,24 960,24 C975,24 980,0 990,0 C1000,0 1005,24 1020,24 C1035,24 1040,0 1050,0 C1060,0 1065,24 1080,24 C1095,24 1100,0 1110,0 C1120,0 1125,24 1140,24 C1155,24 1160,0 1170,0 C1180,0 1185,24 1200,24 L1200,24 L0,24 Z"
                }, void 0, false, {
                    fileName: "[project]/components/sections/ManifestoSection.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/ManifestoSection.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow mb-4",
                                children: "The house rules"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ManifestoSection.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                as: "h2",
                                className: "fat text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] tracking-tight",
                                children: [
                                    "How we brew. ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-accent italic font-normal",
                                        children: "And why we don’t negotiate."
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                        lineNumber: 19,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/ManifestoSection.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: 0.2,
                                className: "lede mt-6 max-w-2xl text-ink-soft",
                                children: "In 1950 or 2026, Fort moves at one speed and chai moves at another. We take eleven minutes per batch because nine is under-steeped and twelve turns bitter."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ManifestoSection.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 grid grid-cols-12 gap-8 lg:gap-12 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-12 lg:col-span-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "group relative overflow-hidden rounded-2xl bg-deep shadow-2xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-[4/5] w-full overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                    src: "/assets/photos/pour.webp",
                                                    alt: "A hot stream of masala cutting chai poured from a steel saucepan into a glass",
                                                    fill: true,
                                                    sizes: "(max-width: 1024px) 100vw, 60vw",
                                                    className: "object-cover transition-transform duration-700 group-hover:scale-105",
                                                    priority: false
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-6 left-6 right-6 text-ivory",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[0.6rem] uppercase tracking-[0.2em] text-kesar",
                                                            children: "Rule 03 — The Long Pull"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 42,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "fat mt-1 text-2xl md:text-3xl",
                                                            children: "One metre from pan to rim."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 43,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-xs md:text-sm text-ivory/70",
                                                            children: "Wakes up the aromatic cardamom oils and aerates the malai into silk."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 44,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                delay: 0.1,
                                                className: "relative aspect-[4/3] rounded-xl overflow-hidden shadow-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                        src: "/assets/photos/spices.webp",
                                                        alt: "Bruised whole green cardamom, ginger and cinnamon curl",
                                                        fill: true,
                                                        sizes: "30vw",
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-ink/20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute bottom-3 left-3 font-mono text-[0.55rem] uppercase tracking-wider text-ivory bg-ink/70 px-2 py-1 rounded",
                                                        children: "Bruised whole"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                lineNumber: 51,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                delay: 0.2,
                                                className: "relative aspect-[4/3] rounded-xl overflow-hidden shadow-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                        src: "/assets/photos/jars.webp",
                                                        alt: "Nine glass jars of biscuits on the wooden shelf",
                                                        fill: true,
                                                        sizes: "30vw",
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-ink/20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute bottom-3 left-3 font-mono text-[0.55rem] uppercase tracking-wider text-ivory bg-ink/70 px-2 py-1 rounded",
                                                        children: "Always 9 jars"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/ManifestoSection.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-12 lg:col-span-5 space-y-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "rounded-2xl border border-ink/15 bg-cream/80 p-8 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between border-b border-ink/10 pb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink/60",
                                                        children: "FIG 01.1 — GLASS BLUEPRINT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[0.62rem] text-accent",
                                                        children: "SCALE 1:1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative my-6 flex justify-center py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 240 300",
                                                    className: "h-64 w-auto text-ink/80",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "20",
                                                            y1: "50",
                                                            x2: "220",
                                                            y2: "50",
                                                            stroke: "currentColor",
                                                            strokeDasharray: "2 3",
                                                            strokeOpacity: "0.2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "20",
                                                            y1: "120",
                                                            x2: "220",
                                                            y2: "120",
                                                            stroke: "currentColor",
                                                            strokeDasharray: "2 3",
                                                            strokeOpacity: "0.2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "20",
                                                            y1: "260",
                                                            x2: "220",
                                                            y2: "260",
                                                            stroke: "currentColor",
                                                            strokeDasharray: "2 3",
                                                            strokeOpacity: "0.2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "120",
                                                            y1: "20",
                                                            x2: "120",
                                                            y2: "280",
                                                            stroke: "#d6481c",
                                                            strokeDasharray: "4 4",
                                                            strokeWidth: "1",
                                                            strokeOpacity: "0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                            points: "50,50 190,50 172,255 68,255",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2.5",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "74",
                                                            y1: "90",
                                                            x2: "84",
                                                            y2: "225",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.2",
                                                            strokeOpacity: "0.4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "97",
                                                            y1: "90",
                                                            x2: "102",
                                                            y2: "225",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.2",
                                                            strokeOpacity: "0.4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "120",
                                                            y1: "90",
                                                            x2: "120",
                                                            y2: "225",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.2",
                                                            strokeOpacity: "0.4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "143",
                                                            y1: "90",
                                                            x2: "138",
                                                            y2: "225",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.2",
                                                            strokeOpacity: "0.4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "166",
                                                            y1: "90",
                                                            x2: "156",
                                                            y2: "225",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.2",
                                                            strokeOpacity: "0.4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M68,255 L172,255 L168,230 L72,230 Z",
                                                            fill: "currentColor",
                                                            fillOpacity: "0.08",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                            points: "63,130 177,130 168,230 72,230",
                                                            fill: "#c98a4f",
                                                            fillOpacity: "0.35"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "56",
                                                            y1: "130",
                                                            x2: "184",
                                                            y2: "130",
                                                            stroke: "#d6481c",
                                                            strokeWidth: "1.8",
                                                            strokeDasharray: "3 2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                            x: "195",
                                                            y: "134",
                                                            className: "font-mono text-[9px]",
                                                            fill: "#d6481c",
                                                            fontWeight: "bold",
                                                            children: "90 ml CUTTING"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                            x: "180",
                                                            y: "245",
                                                            className: "font-mono text-[8px]",
                                                            fill: "currentColor",
                                                            opacity: "0.6",
                                                            children: "SOLID HEEL (22mm)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                            x: "195",
                                                            y: "54",
                                                            className: "font-mono text-[8px]",
                                                            fill: "currentColor",
                                                            opacity: "0.6",
                                                            children: "Ø 68mm RIM"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                            x: "10",
                                                            y: "160",
                                                            className: "font-mono text-[8px]",
                                                            fill: "currentColor",
                                                            opacity: "0.6",
                                                            children: "18 FLUTES"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-mono text-[0.62rem] leading-relaxed text-ink/65",
                                                children: "The traditional Mumbai cutting glass: 18 pressed flutes allow you to hold boiling tea without burning your fingers. Heavy base prevents tipping on marble tables."
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            {
                                                n: "01",
                                                t: "Pounded, never powdered",
                                                d: "Old-crop ginger pounded in brass mortars every 2 hours. Powder dries out the soul."
                                            },
                                            {
                                                n: "02",
                                                t: "Three boils, no fewer",
                                                d: "The milk must climb the lip of the steel saucepan three distinct times before straining."
                                            },
                                            {
                                                n: "03",
                                                t: "Three seconds on the dunk",
                                                d: "Glucose biscuits forgive nothing past 3.2 seconds. Have respect for structural engineering."
                                            },
                                            {
                                                n: "04",
                                                t: "No laptops before 10 am",
                                                d: "Mornings in Fort belong to newspapers, conversation, and second cups."
                                            }
                                        ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "flex gap-4 border-t border-ink/10 pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-sm font-bold text-accent",
                                                        children: r.n
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "fat text-lg text-ink",
                                                                children: r.t
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "body-sm mt-1 text-ink-soft",
                                                                children: r.d
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, r.n, true, {
                                                fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/ManifestoSection.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/ManifestoSection.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/ManifestoSection.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = ManifestoSection;
var _c;
__turbopack_context__.k.register(_c, "ManifestoSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/MenuSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/Nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const loadStill = (key)=>__turbopack_context__.A("[project]/lib/story/engine.ts [app-client] (ecmascript, async loader)").then((m)=>m.getStill(key));
const OVERSCAN = 1.3;
const CRUMBS = Array.from({
    length: 16
}, (_, i)=>({
        a: -Math.PI / 2 + (i / 15 - 0.5) * 2.9,
        r: 60 + i * 29 % 80,
        s: 4 + i * 7 % 6
    }));
function AddButton({ label = "Add" }) {
    _s();
    const [added, setAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "data-cursor": "cta",
        onClick: ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToBasket"])(1);
            setAdded(true);
            setTimeout(()=>setAdded(false), 1400);
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 items-center gap-2 rounded-full px-4 text-[0.75rem] font-semibold transition-colors duration-300", added ? "bg-leaf text-cream" : "bg-ink text-ivory hover:bg-accent"),
        children: [
            added ? "Added ✓" : label,
            !added && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                children: "+"
            }, void 0, false, {
                fileName: "[project]/components/sections/MenuSection.tsx",
                lineNumber: 18,
                columnNumber: 237
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/MenuSection.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(AddButton, "xJr9e1OkmJ3VepoKkDqIuNzabHg=");
_c = AddButton;
function Card({ f, i }) {
    _s1();
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [live, setLive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const stage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const host = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Card.useEffect": ()=>{
            const el = stage.current;
            if (!el) return;
            let alive = true;
            const io = new IntersectionObserver({
                "Card.useEffect": ([e])=>{
                    if (!e.isIntersecting) return;
                    io.disconnect();
                    loadStill(`item:${f.id}`).then({
                        "Card.useEffect": (u)=>alive && setUrl(u)
                    }["Card.useEffect"]).catch({
                        "Card.useEffect": ()=>{}
                    }["Card.useEffect"]);
                }
            }["Card.useEffect"], {
                rootMargin: "600px 0px"
            });
            io.observe(el);
            return ({
                "Card.useEffect": ()=>{
                    alive = false;
                    io.disconnect();
                }
            })["Card.useEffect"];
        }
    }["Card.useEffect"], [
        f
    ]);
    const play = async ()=>{
        if (reduced || !host.current || !card.current) return;
        const { getTurntable } = await __turbopack_context__.A("[project]/lib/story/engine.ts [app-client] (ecmascript, async loader)");
        const tt = await getTurntable();
        if (tt.busy) return;
        tt.busy = true;
        const q = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.selector(card.current);
        tt.use(f.id);
        tt.mount(host.current, OVERSCAN);
        const s = {
            hop: 0,
            spin: 0,
            sweep: 0,
            act: 0
        };
        tt.apply(s);
        tt.render();
        setLive(true);
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
            onUpdate: ()=>{
                tt.apply(s);
                tt.render();
            }
        });
        tl.to(s, {
            hop: 1,
            duration: 0.3,
            ease: "power2.out"
        }, 0).to(s, {
            act: 1,
            duration: 1.5,
            ease: "power1.inOut"
        }, 0.1).to(s, {
            sweep: 1,
            duration: 1.1,
            ease: "power1.inOut"
        }, 0.25).fromTo(q("[data-crumb]"), {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1
        }, {
            x: (k)=>Math.cos(CRUMBS[k].a) * CRUMBS[k].r,
            y: (k)=>Math.sin(CRUMBS[k].a) * CRUMBS[k].r + 80,
            opacity: 0,
            scale: 0.5,
            duration: 0.9,
            ease: "power2.out",
            stagger: 0.015
        }, 0.5).fromTo(q("[data-cheer]"), {
            opacity: 0,
            scale: 0.6,
            rotate: -12
        }, {
            opacity: 1,
            scale: 1,
            rotate: -6,
            duration: 0.4,
            ease: "back.out(3)"
        }, 0.7).to(s, {
            spin: 1,
            duration: 1.2,
            ease: "power2.inOut"
        }, 1.1).to(s, {
            hop: 0,
            duration: 0.5,
            ease: "bounce.out"
        }, 1.9).to(q("[data-cheer]"), {
            opacity: 0,
            y: -20,
            duration: 0.4
        }, 2.0);
        await tl;
        setLive(false);
        requestAnimationFrame(()=>requestAnimationFrame(()=>{
                tt.unmount();
                tt.busy = false;
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        ref: card,
        "data-card": true,
        className: "group relative flex flex-col overflow-hidden rounded-[1.8rem] p-5 text-ink md:p-6",
        style: {
            background: f.tint
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink/55",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(i + 1),
                            " / ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menu"].length)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/MenuSection.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-ink px-2.5 py-1 text-[0.58rem] font-bold text-ivory",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(f.price)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/MenuSection.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/MenuSection.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: stage,
                type: "button",
                onClick: play,
                "aria-label": `${f.verb} — ${f.name}`,
                "data-cursor": "3d",
                className: "relative mx-auto -my-1 block aspect-square w-[88%] cursor-pointer transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-2 group-hover:scale-[1.04]",
                children: [
                    url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: url,
                        alt: `${f.name} — ${f.sub}`,
                        draggable: false,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("tapri-still-in pointer-events-none absolute inset-0 z-10 h-full w-full select-none object-contain", live && "invisible")
                    }, void 0, false, {
                        fileName: "[project]/components/sections/MenuSection.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: host,
                        "aria-hidden": true,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute left-1/2 top-1/2 z-10 aspect-square -translate-x-1/2 -translate-y-1/2", !live && "invisible"),
                        style: {
                            width: `${OVERSCAN * 100}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/MenuSection.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute left-1/2 top-[40%] z-20",
                        children: CRUMBS.map((c, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-crumb": true,
                                className: "absolute rounded-[40%] bg-chai opacity-0",
                                style: {
                                    width: c.s,
                                    height: c.s * 0.8
                                }
                            }, k, false, {
                                fileName: "[project]/components/sections/MenuSection.tsx",
                                lineNumber: 83,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/MenuSection.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-cheer": true,
                        "aria-hidden": true,
                        className: "fat pointer-events-none absolute right-[2%] top-[10%] z-20 rounded-full bg-ink px-3.5 pb-1 pt-0.5 text-lg text-kesar opacity-0",
                        children: f.cheer
                    }, void 0, false, {
                        fileName: "[project]/components/sections/MenuSection.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pointer-events-none absolute inset-x-0 bottom-1 z-20 text-center font-mono text-[0.55rem] uppercase tracking-[0.16em] text-ink/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100 max-md:opacity-100",
                        children: f.verb
                    }, void 0, false, {
                        fileName: "[project]/components/sections/MenuSection.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/MenuSection.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "fat mt-1 text-[1.9rem] leading-[1.05]",
                children: f.name
            }, void 0, false, {
                fileName: "[project]/components/sections/MenuSection.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ink/55",
                children: f.sub
            }, void 0, false, {
                fileName: "[project]/components/sections/MenuSection.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "body-sm mt-3 max-w-[38ch] text-ink/65",
                children: f.notes
            }, void 0, false, {
                fileName: "[project]/components/sections/MenuSection.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-4 flex flex-wrap gap-1.5",
                children: f.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "rounded-full border border-ink/15 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-ink/70",
                        children: t
                    }, t, false, {
                        fileName: "[project]/components/sections/MenuSection.tsx",
                        lineNumber: 91,
                        columnNumber: 70
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/MenuSection.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto pt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-t border-ink/10 pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink/60",
                            children: [
                                "Per ",
                                f.unit,
                                " · ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-ink",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(f.price)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                    lineNumber: 93,
                                    columnNumber: 107
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/MenuSection.tsx",
                            lineNumber: 93,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddButton, {}, void 0, false, {
                            fileName: "[project]/components/sections/MenuSection.tsx",
                            lineNumber: 94,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/MenuSection.tsx",
                    lineNumber: 92,
                    columnNumber: 37
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/MenuSection.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/MenuSection.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s1(Card, "9YdFb66lMFKDblICIgGoEKKRkdU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = Card;
function MenuSection() {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuSection.useEffect": ()=>{
            const el = ref.current;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "MenuSection.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo("[data-mn-a]", {
                        xPercent: -10,
                        opacity: 0
                    }, {
                        xPercent: 0,
                        opacity: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            end: "top 35%",
                            scrub: true
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo("[data-mn-b]", {
                        xPercent: 10,
                        opacity: 0
                    }, {
                        xPercent: 0,
                        opacity: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            end: "top 35%",
                            scrub: true
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to("[data-mn-spin]", {
                        rotate: 360,
                        repeat: -1,
                        duration: 16,
                        ease: "none"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set("[data-card]", {
                        y: 80,
                        opacity: 0,
                        rotate: {
                            "MenuSection.useEffect.ctx": (i)=>i % 2 ? 2 : -2
                        }["MenuSection.useEffect.ctx"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].batch("[data-card]", {
                        start: "top 90%",
                        once: true,
                        onEnter: {
                            "MenuSection.useEffect.ctx": (b)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(b, {
                                    y: 0,
                                    opacity: 1,
                                    rotate: 0,
                                    duration: 1.2,
                                    stagger: 0.08,
                                    ease: "expo.out"
                                })
                        }["MenuSection.useEffect.ctx"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set("[data-plate]", {
                        y: 60,
                        opacity: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].batch("[data-plate]", {
                        start: "top 92%",
                        once: true,
                        onEnter: {
                            "MenuSection.useEffect.ctx": (b)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(b, {
                                    y: 0,
                                    opacity: 1,
                                    duration: 1.1,
                                    stagger: 0.08,
                                    ease: "expo.out"
                                })
                        }["MenuSection.useEffect.ctx"]
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.toArray("[data-plate] img").forEach({
                        "MenuSection.useEffect.ctx": (img)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(img, {
                                yPercent: -6
                            }, {
                                yPercent: 6,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: img,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: true
                                }
                            })
                    }["MenuSection.useEffect.ctx"]);
                }
            }["MenuSection.useEffect.ctx"], el);
            let warmed = false;
            const io = new IntersectionObserver({
                "MenuSection.useEffect": ([e])=>{
                    if (!e.isIntersecting || warmed) return;
                    warmed = true;
                    io.disconnect();
                    const w = window;
                    const go = {
                        "MenuSection.useEffect.go": ()=>__turbopack_context__.A("[project]/lib/story/engine.ts [app-client] (ecmascript, async loader)").then({
                                "MenuSection.useEffect.go": ({ getTurntable })=>getTurntable()
                            }["MenuSection.useEffect.go"]).then({
                                "MenuSection.useEffect.go": (tt)=>tt.warm(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menu"][0].id)
                            }["MenuSection.useEffect.go"]).catch({
                                "MenuSection.useEffect.go": ()=>{}
                            }["MenuSection.useEffect.go"])
                    }["MenuSection.useEffect.go"];
                    if (w.requestIdleCallback) w.requestIdleCallback(go, {
                        timeout: 3000
                    });
                    else setTimeout(go, 1200);
                }
            }["MenuSection.useEffect"], {
                rootMargin: "200px 0px"
            });
            io.observe(el);
            return ({
                "MenuSection.useEffect": ()=>{
                    ctx.revert();
                    io.disconnect();
                }
            })["MenuSection.useEffect"];
        }
    }["MenuSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        id: "menu",
        className: "relative z-10 bg-ivory pb-[12vh] pt-[16vh] text-ink",
        "aria-labelledby": "menu-h",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-x",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "eyebrow mb-6",
                    children: "09 — The counter"
                }, void 0, false, {
                    fileName: "[project]/components/sections/MenuSection.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "menu-h",
                    className: "fat flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[clamp(2.8rem,7.8vw,8.4rem)] leading-[1]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "data-mn-a": true,
                            children: "Chai, and"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/MenuSection.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "data-mn-spin": true,
                            "aria-hidden": true,
                            className: "hidden h-[0.72em] w-[0.72em] md:inline-flex",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 100 100",
                                className: "h-full w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            id: "tapri-mn-arc",
                                            d: "M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/MenuSection.tsx",
                                            lineNumber: 132,
                                            columnNumber: 72
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/MenuSection.tsx",
                                        lineNumber: 132,
                                        columnNumber: 66
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "50",
                                        cy: "50",
                                        r: "46",
                                        fill: "var(--color-kesar)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/MenuSection.tsx",
                                        lineNumber: 132,
                                        columnNumber: 160
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        fontSize: "8.2",
                                        letterSpacing: "2.1",
                                        className: "font-mono",
                                        fontWeight: "700",
                                        fill: "var(--color-ink)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textPath", {
                                            href: "#tapri-mn-arc",
                                            children: "BAKED HERE · FRIED HERE · BOILED HERE · "
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/MenuSection.tsx",
                                            lineNumber: 132,
                                            columnNumber: 323
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/MenuSection.tsx",
                                        lineNumber: 132,
                                        columnNumber: 219
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/MenuSection.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/MenuSection.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "data-mn-b": true,
                            className: "text-accent",
                            children: "what goes with it."
                        }, void 0, false, {
                            fileName: "[project]/components/sections/MenuSection.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/MenuSection.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex flex-wrap items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink/55",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block h-px w-6 bg-ink/40"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                    lineNumber: 137,
                                    columnNumber: 115
                                }, this),
                                "Tap anything on the counter"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/MenuSection.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "body-sm max-w-[46ch] text-ink/60",
                            children: "Six things we will never take off the menu. The biscuits are baked upstairs at four every morning; everything else is made when you ask."
                        }, void 0, false, {
                            fileName: "[project]/components/sections/MenuSection.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/MenuSection.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 lg:gap-5",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menu"].map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                            f: f,
                            i: i
                        }, f.id, false, {
                            fileName: "[project]/components/sections/MenuSection.tsx",
                            lineNumber: 141,
                            columnNumber: 31
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/MenuSection.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-[12vh] flex flex-wrap items-end justify-between gap-4 border-t border-ink/15 pt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "fat text-[clamp(2rem,4.2vw,4rem)] leading-[1.05]",
                            children: [
                                "From the kitchen, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-accent",
                                    children: "till it runs out."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                    lineNumber: 145,
                                    columnNumber: 94
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/MenuSection.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink/55",
                            children: "Hot plates · 8 am onwards"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/MenuSection.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/MenuSection.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kitchen"].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            "data-plate": true,
                            className: "group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-paper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: k.photo,
                                            alt: k.alt,
                                            loading: "lazy",
                                            className: "absolute inset-0 h-[112%] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05]",
                                            style: {
                                                top: "-6%"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/MenuSection.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute left-3 top-3 rounded-full bg-cream/90 px-2.5 py-1 font-mono text-[0.58rem] font-bold text-ink backdrop-blur-sm",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(k.price)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/MenuSection.tsx",
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex items-start justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "fat text-[1.35rem] leading-[1.1] md:text-[1.5rem]",
                                                    children: k.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-ink/55",
                                                    children: k.sub
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 101
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/MenuSection.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden shrink-0 sm:block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddButton, {}, void 0, false, {
                                                fileName: "[project]/components/sections/MenuSection.tsx",
                                                lineNumber: 158,
                                                columnNumber: 60
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/MenuSection.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, k.id, true, {
                            fileName: "[project]/components/sections/MenuSection.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/MenuSection.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/MenuSection.tsx",
            lineNumber: 127,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/MenuSection.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s2(MenuSection, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c2 = MenuSection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AddButton");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "MenuSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/ReviewsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion/Reveal.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function ReviewsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "reviews",
        className: "relative bg-ivory text-ink py-28 md:py-36 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-x",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow mb-3",
                            children: "Words from the counter"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ReviewsSection.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            as: "h2",
                            className: "fat text-[clamp(2.6rem,7vw,5.5rem)] leading-none",
                            children: [
                                "The regulars. ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-accent italic font-normal",
                                    children: "Fort speaks for itself."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                                    lineNumber: 14,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ReviewsSection.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 grid grid-cols-12 gap-8 items-stretch",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-12 lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-deep",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                    src: "/assets/photos/table.webp",
                                    alt: "Marble table laid with cuttings, bun maska, samosas and biscuit stacks",
                                    fill: true,
                                    sizes: "(max-width: 1024px) 100vw, 50vw",
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-6 left-6 text-ivory",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[0.6rem] uppercase tracking-widest text-kesar",
                                            children: "Table 04"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ReviewsSection.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "fat text-xl mt-1",
                                            children: "Eleven cuttings, bun maska and samosas"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ReviewsSection.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ReviewsSection.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-12 lg:col-span-6 flex flex-col justify-between rounded-2xl border border-ink/15 bg-cream p-8 md:p-10 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "40",
                                    height: "32",
                                    viewBox: "0 0 40 32",
                                    fill: "none",
                                    className: "text-kesar opacity-70",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0 19.2C0 8.6 6.8 0 17.6 0V6.4C11.6 6.4 8 10.4 8 16H17.6V32H0V19.2ZM22.4 19.2C22.4 8.6 29.2 0 40 0V6.4C34 6.4 30.4 10.4 30.4 16H40V32H22.4V19.2Z",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/ReviewsSection.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                    className: "fat text-2xl md:text-3xl text-ink leading-snug my-6",
                                    children: [
                                        "“",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"][0].quote,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-ink/10 pt-4 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fat text-lg text-ink block",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"][0].name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[0.6rem] uppercase tracking-widest text-ink/50",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"][0].place
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/ReviewsSection.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-xs text-accent",
                                            children: "Regular since '18"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ReviewsSection.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ReviewsSection.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].slice(1).map((rev, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-between rounded-2xl border border-ink/10 bg-cream/70 p-6 shadow-sm hover:border-ink/25 hover:shadow-md transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "body-sm text-ink-soft leading-relaxed italic",
                                    children: [
                                        "“",
                                        rev.quote,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 border-t border-ink/10 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "fat text-base text-ink block",
                                            children: rev.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ReviewsSection.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[0.55rem] uppercase tracking-widest text-ink/50",
                                            children: rev.place
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ReviewsSection.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/sections/ReviewsSection.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-20 overflow-hidden border-y border-ink/15 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "marquee-track flex gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-ink/70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "First, chai"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Ginger pounded, never grated"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Three boils, no fewer"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "14 Homi Mody Street, Fort"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Glucose biscuits baked daily"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "First boil at 6 am"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "First, chai"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Ginger pounded, never grated"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Three boils, no fewer"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "14 Homi Mody Street, Fort"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Glucose biscuits baked daily"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "First boil at 6 am"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/ReviewsSection.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/ReviewsSection.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/ReviewsSection.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = ReviewsSection;
var _c;
__turbopack_context__.k.register(_c, "ReviewsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/VisitSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VisitSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Counter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion/Counter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/** Minutes past midnight in Mumbai, whatever the visitor's clock says. */ function mumbaiMinutes() {
    const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }).formatToParts(new Date());
    const h = Number(parts.find((p)=>p.type === "hour")?.value ?? 0), m = Number(parts.find((p)=>p.type === "minute")?.value ?? 0);
    return h % 24 * 60 + m;
}
const mins = (t)=>{
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
};
function VisitSection() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisitSection.useEffect": ()=>{
            setNow(mumbaiMinutes());
            const id = window.setInterval({
                "VisitSection.useEffect.id": ()=>setNow(mumbaiMinutes())
            }["VisitSection.useEffect.id"], 60000);
            return ({
                "VisitSection.useEffect": ()=>clearInterval(id)
            })["VisitSection.useEffect"];
        }
    }["VisitSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisitSection.useEffect": ()=>{
            const el = ref.current;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "VisitSection.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo("[data-vs-h] > span > span", {
                        yPercent: 115
                    }, {
                        yPercent: 0,
                        duration: 1.2,
                        ease: "expo.out",
                        stagger: 0.08,
                        scrollTrigger: {
                            trigger: "[data-vs-h]",
                            start: "top 85%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo("[data-vs-hero]", {
                        clipPath: "inset(12% 8% 12% 8% round 2rem)"
                    }, {
                        clipPath: "inset(0% 0% 0% 0% round 2rem)",
                        ease: "none",
                        scrollTrigger: {
                            trigger: "[data-vs-hero]",
                            start: "top 92%",
                            end: "top 30%",
                            scrub: true
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo("[data-vs-hero] img", {
                        scale: 1.2,
                        yPercent: -6
                    }, {
                        scale: 1.04,
                        yPercent: 6,
                        ease: "none",
                        scrollTrigger: {
                            trigger: "[data-vs-hero]",
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo("[data-vs-card]", {
                        y: 50,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1.1,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: "[data-vs-hero]",
                            start: "top 45%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo("[data-vs-row]", {
                        opacity: 0,
                        x: -30
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 0.9,
                        stagger: 0.08,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: "[data-vs-day]",
                            start: "top 80%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.toArray("[data-vs-float]").forEach({
                        "VisitSection.useEffect.ctx": (n, i)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(n, {
                                y: 70 + i * 40
                            }, {
                                y: -50 - i * 30,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: n,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: true
                                }
                            });
                        }
                    }["VisitSection.useEffect.ctx"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo("[data-vs-stat]", {
                        opacity: 0,
                        y: 30
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.08,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: "[data-vs-stats]",
                            start: "top 88%"
                        }
                    });
                }
            }["VisitSection.useEffect.ctx"], el);
            return ({
                "VisitSection.useEffect": ()=>ctx.revert()
            })["VisitSection.useEffect"];
        }
    }["VisitSection.useEffect"], []);
    const open = now !== null && now >= 6 * 60 && now < 23 * 60;
    let at = -1;
    if (now !== null) __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["day"].forEach((d, i)=>{
        if (now >= mins(d.t)) at = i;
    });
    const line = "block overflow-hidden pb-[0.2em] -mb-[0.2em] pt-[0.1em] -mt-[0.1em]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        id: "visit",
        "data-theme": "dark",
        className: "relative z-10 overflow-hidden bg-deep pb-[14vh] pt-[14vh] text-ivory",
        "aria-labelledby": "visit-h",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-x",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "eyebrow mb-6 !text-ivory/50",
                    children: "11 — Find us"
                }, void 0, false, {
                    fileName: "[project]/components/sections/VisitSection.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-end justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "visit-h",
                            "data-vs-h": true,
                            className: "fat text-[clamp(2.7rem,7.2vw,7.6rem)] leading-[1]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: line,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block",
                                        children: "Fourteen tables,"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/VisitSection.tsx",
                                        lineNumber: 50,
                                        columnNumber: 36
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: line,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-kesar",
                                        children: "one long counter."
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/VisitSection.tsx",
                                        lineNumber: 51,
                                        columnNumber: 36
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/VisitSection.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "body-sm max-w-[36ch] pb-2 text-ivory/65",
                            children: "Marble tops, bentwood chairs and a ceiling fan that has seen things. Come for one cutting, stay for the argument about cricket."
                        }, void 0, false, {
                            fileName: "[project]/components/sections/VisitSection.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/VisitSection.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-vs-hero": true,
                    className: "relative mt-10 aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[16/10] md:mt-14 lg:aspect-[16/8]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/assets/photos/interior.webp",
                            alt: "Inside the café: marble-top tables, bentwood chairs, a chequered floor and a long teak counter lined with biscuit jars",
                            loading: "lazy",
                            className: "absolute inset-0 h-full w-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/VisitSection.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: "absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/5 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/VisitSection.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-vs-card": true,
                            className: "absolute inset-x-3 bottom-3 rounded-[1.5rem] bg-cream p-5 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,.6)] sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-[23rem] sm:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex items-center gap-2 font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex h-2.5 w-2.5", now === null && "opacity-0"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 rounded-full", open ? "animate-ping bg-leaf/70" : "bg-transparent")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 94
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-2.5 w-2.5 rounded-full", open ? "bg-leaf" : "bg-accent")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 203
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            suppressHydrationWarning: true,
                                            children: now === null ? "Mumbai time" : open ? "Open now · the pan is on" : "Closed · first boil at 6 am"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "fat mt-4 text-[1.65rem] leading-[1.12]",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].address
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "mt-4 space-y-1.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: "Hours"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 59
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-ink",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].hours
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 73
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 59
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-ink",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].phone
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 73
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: "Nearest"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 59
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "text-ink",
                                                    children: "Churchgate · 9 min walk"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 75
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 flex flex-wrap gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].phone.replace(/\s/g, "")}`,
                                            variant: "ink",
                                            children: "Hold a table"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                            lineNumber: 71,
                                            columnNumber: 56
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#menu",
                                            variant: "ghost",
                                            children: "The menu"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                            lineNumber: 71,
                                            columnNumber: 146
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/VisitSection.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/VisitSection.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-[10vh] grid grid-cols-12 gap-x-6 gap-y-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-vs-day": true,
                            className: "col-span-12 lg:col-span-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "fat text-[clamp(1.9rem,3.4vw,3.2rem)] leading-[1.08]",
                                    children: "A day at the tapri"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "mt-6 border-t border-ivory/15",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["day"].map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            "data-vs-row": true,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-baseline gap-5 border-b border-ivory/15 py-4 transition-colors duration-500", i === at ? "text-ivory" : "text-ivory/55"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fat w-[4.6rem] shrink-0 text-[1.7rem] leading-none tabular-nums", i === at && "text-kesar"),
                                                    children: d.t
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "body-sm flex-1",
                                                    children: d.what
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 19
                                                }, this),
                                                i === at && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden shrink-0 rounded-full bg-kesar px-2.5 py-1 font-mono text-[0.54rem] font-bold uppercase tracking-[0.12em] text-ink sm:block",
                                                    children: "Now"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 32
                                                }, this)
                                            ]
                                        }, d.t, true, {
                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/VisitSection.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative col-span-12 grid grid-cols-2 gap-4 lg:col-span-5 lg:col-start-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                    "data-vs-float": true,
                                    className: "overflow-hidden rounded-[1.4rem]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/assets/photos/jars.webp",
                                        alt: "Glass biscuit jars with brass lids on the counter",
                                        loading: "lazy",
                                        className: "aspect-[4/5] h-full w-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/VisitSection.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                    "data-vs-float": true,
                                    className: "mt-12 overflow-hidden rounded-[1.4rem]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/assets/photos/spices.webp",
                                        alt: "A brass mortar of pounded ginger and cardamom beside tea, cinnamon and cloves",
                                        loading: "lazy",
                                        className: "aspect-[4/5] h-full w-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/VisitSection.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/VisitSection.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/VisitSection.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                    "data-vs-stats": true,
                    className: "mt-[10vh] grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ivory/15 pt-10 lg:grid-cols-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visit"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-vs-stat": true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    className: "fat text-[clamp(2.6rem,5vw,5rem)] leading-none text-kesar",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Counter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: s.v,
                                        suffix: s.s
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/VisitSection.tsx",
                                        lineNumber: 103,
                                        columnNumber: 89
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "mt-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ivory/55",
                                    children: s.l
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, s.l, true, {
                            fileName: "[project]/components/sections/VisitSection.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/VisitSection.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/VisitSection.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/VisitSection.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(VisitSection, "iTv6pQ9yExzcaQAAhGl7ASJEGvQ=");
_c = VisitSection;
var _c;
__turbopack_context__.k.register(_c, "VisitSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site/CartDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CartDrawer({ open, onClose, items, onUpdateQty, onRemoveItem, onClearCart }) {
    _s();
    const [tableNo, setTableNo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("04");
    const [ordered, setOrdered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [orderNum, setOrderNum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(108);
    const subtotal = items.reduce((sum, item)=>sum + item.price * item.count, 0);
    const gst = Math.round(subtotal * 0.05);
    const total = subtotal + gst;
    const totalCount = items.reduce((sum, item)=>sum + item.count, 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartDrawer.useEffect": ()=>{
            const onKey = {
                "CartDrawer.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["CartDrawer.useEffect.onKey"];
            if (open) {
                window.addEventListener("keydown", onKey);
                window.__lenis?.stop();
                document.documentElement.classList.add("lenis-stopped");
            } else {
                window.__lenis?.start();
                document.documentElement.classList.remove("lenis-stopped");
                // Reset order confirmation state on close
                setTimeout({
                    "CartDrawer.useEffect": ()=>setOrdered(false)
                }["CartDrawer.useEffect"], 500);
            }
            return ({
                "CartDrawer.useEffect": ()=>{
                    window.removeEventListener("keydown", onKey);
                    window.__lenis?.start();
                    document.documentElement.classList.remove("lenis-stopped");
                }
            })["CartDrawer.useEffect"];
        }
    }["CartDrawer.useEffect"], [
        open,
        onClose
    ]);
    const handlePlaceOrder = ()=>{
        setOrderNum((n)=>n + 1);
        setOrdered(true);
        setTimeout(()=>{
            onClearCart();
        }, 2500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-[70] bg-deep/60 backdrop-blur-sm transition-opacity duration-500", open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"),
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/site/CartDrawer.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                id: "cart-drawer",
                role: "dialog",
                "aria-label": "Table Order",
                "aria-modal": "true",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-y-0 right-0 z-[75] flex w-full max-w-md flex-col bg-ivory text-ink shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]", open ? "translate-x-0" : "translate-x-full"),
                "data-lenis-prevent": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-ink/15 px-6 py-5 bg-paper/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[0.6rem] uppercase tracking-widest text-ink/60",
                                        children: "Counter Ticket"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "fat text-2xl text-ink leading-tight",
                                        children: "Your Table Order"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                "data-cursor": "cta",
                                className: "flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-ivory transition-colors",
                                "aria-label": "Close order ticket",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 14 14",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M1 1l12 12M13 1L1 13",
                                        stroke: "currentColor",
                                        strokeWidth: "1.6",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/site/CartDrawer.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/CartDrawer.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    ordered ? /* Order Confirmed Screen */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-col items-center justify-center p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-16 w-16 items-center justify-center rounded-full bg-kesar/20 text-accent mb-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "32",
                                    height: "32",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "20 6 9 17 4 12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/site/CartDrawer.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-xs uppercase tracking-widest text-accent font-bold",
                                children: [
                                    "Order #",
                                    orderNum,
                                    " Confirmed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "fat text-3xl text-ink mt-2",
                                children: [
                                    "Boiling up for Table ",
                                    tableNo
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-sm text-ink/70 mt-3 max-w-xs",
                                children: "Ginger is pounded, glasses are steaming. The counter will bring your order hot to your table."
                            }, void 0, false, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "rounded-full bg-ink px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-ivory hover:bg-accent transition-colors",
                                    children: "Back to Café"
                                }, void 0, false, {
                                    fileName: "[project]/components/site/CartDrawer.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/CartDrawer.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this) : items.length === 0 ? /* Empty State */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-col items-center justify-center p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-16 w-16 items-center justify-center rounded-full bg-paper text-ink/40 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "28",
                                    height: "28",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site/CartDrawer.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "3",
                                            y1: "6",
                                            x2: "21",
                                            y2: "6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site/CartDrawer.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M16 10a4 4 0 01-8 0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site/CartDrawer.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/site/CartDrawer.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "fat text-2xl text-ink",
                                children: "The glass is empty"
                            }, void 0, false, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-sm text-ink/65 mt-2 max-w-xs",
                                children: "Tap any 3D item on the counter or morning plate from the kitchen to add it to your order."
                            }, void 0, false, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#menu",
                                onClick: onClose,
                                className: "mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-ivory hover:bg-accent transition-colors",
                                children: "Browse Counter"
                            }, void 0, false, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/CartDrawer.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this) : /* Items List */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-ink/10 px-6 py-2.5 bg-paper/30 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-ink/60",
                                        children: "Table:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 font-mono text-xs",
                                        children: [
                                            "02",
                                            "04",
                                            "07",
                                            "Counter"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setTableNo(t),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-0.5 rounded transition-colors", tableNo === t ? "bg-ink text-ivory font-bold" : "text-ink/60 hover:text-ink hover:bg-ink/5"),
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/components/site/CartDrawer.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-6 space-y-4",
                                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-4 rounded-xl border border-ink/10 bg-cream p-4 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "fat text-lg text-ink truncate",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, this),
                                                    item.sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-mono text-[0.6rem] uppercase tracking-wider text-ink/50 truncate",
                                                        children: item.sub
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-xs font-bold text-accent mt-1 block",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(item.price * item.count)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/site/CartDrawer.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center rounded-full border border-ink/20 bg-paper/50 p-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>onUpdateQty(item.id, -1),
                                                                className: "flex h-6 w-6 items-center justify-center rounded-full text-ink hover:bg-ink hover:text-ivory transition-colors text-sm font-bold",
                                                                "aria-label": `Decrease quantity of ${item.name}`,
                                                                children: "–"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/site/CartDrawer.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-6 text-center font-mono text-xs font-bold tabular-nums",
                                                                children: item.count
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/site/CartDrawer.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>onUpdateQty(item.id, 1),
                                                                className: "flex h-6 w-6 items-center justify-center rounded-full text-ink hover:bg-ink hover:text-ivory transition-colors text-sm font-bold",
                                                                "aria-label": `Increase quantity of ${item.name}`,
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/site/CartDrawer.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>onRemoveItem(item.id),
                                                        className: "p-1 text-ink/40 hover:text-accent transition-colors",
                                                        "aria-label": `Remove ${item.name}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 16 16",
                                                            fill: "none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M3 4h10M6 4V2.5h4V4M5 4v9h6V4",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.3",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/site/CartDrawer.tsx",
                                                                lineNumber: 232,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/site/CartDrawer.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/site/CartDrawer.tsx",
                                                lineNumber: 202,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-ink/15 bg-paper/50 p-6 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 font-mono text-xs text-ink/70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Subtotal (",
                                                            totalCount,
                                                            " items)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tabular-nums font-semibold text-ink",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(subtotal)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/site/CartDrawer.tsx",
                                                lineNumber: 243,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[0.65rem] text-ink/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Restaurant GST (5%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tabular-nums",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(gst)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/site/CartDrawer.tsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between border-t border-ink/10 pt-2 text-sm font-bold text-ink",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "fat text-base",
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-base tabular-nums text-accent",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(total)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/site/CartDrawer.tsx",
                                                lineNumber: 251,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handlePlaceOrder,
                                            "data-cursor": "cta",
                                            className: "w-full rounded-full bg-accent py-3.5 text-center font-body text-sm font-bold uppercase tracking-wider text-ivory shadow-lg hover:bg-accent-deep transition-colors",
                                            children: [
                                                "Send Order to Counter (",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(total),
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/site/CartDrawer.tsx",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center font-mono text-[0.55rem] uppercase tracking-wider text-ink/45",
                                        children: [
                                            "Pay at counter when done · ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].hours
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/CartDrawer.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/site/CartDrawer.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site/CartDrawer.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(CartDrawer, "fZhSMRNJrNT4DRq9klJ87wTv8Tk=");
_c = CartDrawer;
var _c;
__turbopack_context__.k.register(_c, "CartDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Footer() {
    _s();
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        "data-theme": "dark",
        className: "relative z-10 overflow-hidden bg-deep text-ivory",
        "aria-label": "Footer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x grid grid-cols-12 gap-x-6 gap-y-12 pb-10 pt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 md:col-span-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow !text-ivory/45",
                                children: "The regulars' list"
                            }, void 0, false, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fat mt-4 max-w-[17ch] text-[clamp(1.9rem,3.2vw,3rem)] leading-[1.08]",
                                children: [
                                    "Your first cutting is on us. ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-kesar",
                                        children: "The second you'll want anyway."
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/Footer.tsx",
                                        lineNumber: 13,
                                        columnNumber: 124
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                id: "newsletter",
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                    setDone(true);
                                },
                                className: "mt-8 flex max-w-md items-center gap-2 border-b border-ivory/25 pb-2 focus-within:border-ivory",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "tapri-news-email",
                                        className: "sr-only",
                                        children: "Email address"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/Footer.tsx",
                                        lineNumber: 15,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "tapri-news-email",
                                        type: "email",
                                        required: true,
                                        disabled: done,
                                        placeholder: done ? "Done. Show the email at the counter." : "you@email.com",
                                        className: "min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-ivory/40"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/Footer.tsx",
                                        lineNumber: 16,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: done,
                                        className: "rounded-full bg-ivory px-5 py-2.5 text-[0.8rem] font-semibold text-ink transition-colors hover:bg-kesar disabled:opacity-60",
                                        "data-cursor": "cta",
                                        children: done ? "Sent ✓" : "Get the pass"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/Footer.tsx",
                                        lineNumber: 17,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/Footer.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "col-span-6 md:col-span-2 md:col-start-7",
                        "aria-label": "Footer navigation",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow !text-ivory/45",
                                children: "Explore"
                            }, void 0, false, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-4 space-y-2 text-sm",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nav"].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: n.href,
                                            className: "text-ivory/75 hover:text-ivory",
                                            "data-cursor": "link",
                                            children: n.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/site/Footer.tsx",
                                            lineNumber: 22,
                                            columnNumber: 83
                                        }, this)
                                    }, n.href, false, {
                                        fileName: "[project]/components/site/Footer.tsx",
                                        lineNumber: 22,
                                        columnNumber: 66
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/Footer.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-6 md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow !text-ivory/45",
                                children: "On the counter"
                            }, void 0, false, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-4 space-y-2 text-sm",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menu"].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "text-ivory/75",
                                        children: f.name
                                    }, f.id, false, {
                                        fileName: "[project]/components/site/Footer.tsx",
                                        lineNumber: 26,
                                        columnNumber: 67
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/Footer.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                        className: "col-span-12 not-italic md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow !text-ivory/45",
                                children: "Find us"
                            }, void 0, false, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm leading-relaxed text-ivory/75",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].address
                            }, void 0, false, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm text-ivory/75",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].hours
                            }, void 0, false, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].phone.replace(/\s/g, "")}`,
                                className: "mt-3 block text-sm text-ivory/75 hover:text-ivory",
                                "data-cursor": "link",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].phone
                            }, void 0, false, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/Footer.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/site/Footer.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "container-x select-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "fat flex items-end justify-between whitespace-nowrap text-[15.5vw] leading-[0.95] text-ivory/[0.07]",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].wordmark,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"], {
                            className: "mb-[2.4vw] h-[11vw] text-ivory/[0.07]",
                            chai: "rgba(247,236,216,.07)"
                        }, void 0, false, {
                            fileName: "[project]/components/site/Footer.tsx",
                            lineNumber: 36,
                            columnNumber: 140
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site/Footer.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/site/Footer.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x flex flex-col items-start justify-between gap-3 border-t border-ivory/10 py-6 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ivory/40 md:flex-row md:items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].name,
                            ". ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].product,
                            ", ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].place,
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/Footer.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Chai boiled fresh every eleven minutes · FSSAI licensed"
                    }, void 0, false, {
                        fileName: "[project]/components/site/Footer.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/site/Footer.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site/Footer.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Footer, "0mz8s7cWzSmcGyoUdgXTliy2Hjc=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site/Intro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Intro,
    "onIntroDone",
    ()=>onIntroDone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function onIntroDone(fn) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (window.__tapriIntroDone) {
        fn();
        return ()=>{};
    }
    const h = ()=>fn();
    window.addEventListener("tapri:intro-done", h, {
        once: true
    });
    return ()=>window.removeEventListener("tapri:intro-done", h);
}
function Intro() {
    _s();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("load");
    const fill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Intro.useEffect": ()=>{
            const finish = {
                "Intro.useEffect.finish": ()=>{
                    window.__tapriIntroDone = true;
                    window.dispatchEvent(new Event("tapri:intro-done"));
                }
            }["Intro.useEffect.finish"];
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                setPhase("done");
                finish();
                return;
            }
            document.documentElement.classList.add("lenis-stopped");
            window.__lenis?.stop();
            window.scrollTo(0, 0);
            let shown = 0, target = 10, raf = 0, sceneReady = false, lifted = false;
            const t0 = performance.now();
            const onScene = {
                "Intro.useEffect.onScene": ()=>{
                    sceneReady = true;
                }
            }["Intro.useEffect.onScene"];
            window.addEventListener("tapri:scene-ready", onScene);
            (document.fonts?.ready ?? Promise.resolve()).then({
                "Intro.useEffect": ()=>{
                    target = Math.max(target, 50);
                }
            }["Intro.useEffect"]);
            const tick = {
                "Intro.useEffect.tick": ()=>{
                    const el = performance.now() - t0;
                    if (sceneReady) target = 100;
                    else target = Math.min(92, Math.max(target, 18 + el / 60));
                    if (el > 4500) target = 100;
                    shown += (target - shown) * 0.1;
                    if (fill.current) fill.current.style.transform = `translateY(${100 - shown}%)`;
                    if (count.current) count.current.textContent = String(Math.round(shown / 100 * 90));
                    if (!lifted && shown > 99.2 && el > 1100) {
                        lifted = true;
                        setPhase("lift");
                        setTimeout({
                            "Intro.useEffect.tick": ()=>{
                                document.documentElement.classList.remove("lenis-stopped");
                                window.__lenis?.start();
                                finish();
                            }
                        }["Intro.useEffect.tick"], 650);
                        setTimeout({
                            "Intro.useEffect.tick": ()=>setPhase("done")
                        }["Intro.useEffect.tick"], 1500);
                        return;
                    }
                    raf = requestAnimationFrame(tick);
                }
            }["Intro.useEffect.tick"];
            raf = requestAnimationFrame(tick);
            return ({
                "Intro.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    window.removeEventListener("tapri:scene-ready", onScene);
                    document.documentElement.classList.remove("lenis-stopped");
                }
            })["Intro.useEffect"];
        }
    }["Intro.useEffect"], []);
    if (phase === "done") return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-[90] flex items-center justify-center bg-deep text-ivory transition-transform delay-300 duration-[900ms] ease-[cubic-bezier(.76,0,.24,1)]", phase === "lift" && "-translate-y-full"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-7",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            "aria-hidden": true,
                            className: "absolute -top-9 left-1/2 h-8 w-12 -translate-x-1/2 text-ivory/50",
                            viewBox: "0 0 48 32",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "animate-[tapri-steam_2.2s_ease-in-out_infinite]",
                                    d: "M12 30c-4-6 4-9 0-15s4-9 0-13"
                                }, void 0, false, {
                                    fileName: "[project]/components/site/Intro.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "animate-[tapri-steam_2.2s_ease-in-out_0.5s_infinite]",
                                    d: "M24 30c-4-6 4-9 0-15s4-9 0-13"
                                }, void 0, false, {
                                    fileName: "[project]/components/site/Intro.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "animate-[tapri-steam_2.2s_ease-in-out_1s_infinite]",
                                    d: "M36 30c-4-6 4-9 0-15s4-9 0-13"
                                }, void 0, false, {
                                    fileName: "[project]/components/site/Intro.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site/Intro.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-32 w-[5.5rem] overflow-hidden border-2 border-ivory/40 [clip-path:polygon(0_0,100%_0,84%_100%,16%_100%)]",
                            style: {
                                borderRadius: "0.4rem 0.4rem 0.9rem 0.9rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: fill,
                                    className: "absolute inset-0 translate-y-full bg-chai",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "absolute -top-3 left-0 h-4 w-[200%] animate-[tapri-wave_1.6s_linear_infinite] text-chai",
                                        viewBox: "0 0 200 16",
                                        preserveAspectRatio: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0 8 Q 12.5 0 25 8 T 50 8 T 75 8 T 100 8 T 125 8 T 150 8 T 175 8 T 200 8 V16 H0 Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site/Intro.tsx",
                                            lineNumber: 72,
                                            columnNumber: 168
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/Intro.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/site/Intro.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute inset-y-2 left-[22%] w-1.5 rounded-full bg-ivory/25"
                                }, void 0, false, {
                                    fileName: "[project]/components/site/Intro.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute inset-x-0 bottom-0 h-3 bg-ivory/15"
                                }, void 0, false, {
                                    fileName: "[project]/components/site/Intro.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site/Intro.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site/Intro.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"], {
                            className: "h-8 text-ivory"
                        }, void 0, false, {
                            fileName: "[project]/components/site/Intro.tsx",
                            lineNumber: 78,
                            columnNumber: 51
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "fat text-[2.1rem] leading-none",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].wordmark
                        }, void 0, false, {
                            fileName: "[project]/components/site/Intro.tsx",
                            lineNumber: 78,
                            columnNumber: 86
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site/Intro.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ivory/50",
                    children: [
                        "brewing · ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            ref: count,
                            className: "tabular-nums text-ivory/85",
                            children: "0"
                        }, void 0, false, {
                            fileName: "[project]/components/site/Intro.tsx",
                            lineNumber: 79,
                            columnNumber: 102
                        }, this),
                        " ml"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site/Intro.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/site/Intro.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/site/Intro.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(Intro, "AMrFM6RRaPI2EQ3jxTZD153jK2M=");
_c = Intro;
var _c;
__turbopack_context__.k.register(_c, "Intro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mark",
    ()=>Mark,
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-client] (ecmascript)");
;
;
;
function Mark({ className, chai = "var(--color-chai)", title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "6 3 20 24",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-8 w-auto", className),
        role: title ? "img" : undefined,
        "aria-label": title,
        "aria-hidden": title ? undefined : true,
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.5 11h13l-1.7 13.2a1.6 1.6 0 0 1-1.6 1.4h-6.4a1.6 1.6 0 0 1-1.6-1.4z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/site/Logo.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.9 15.6h10.2l-1 8.3a1 1 0 0 1-1 .9h-6.2a1 1 0 0 1-1-.9z",
                fill: chai
            }, void 0, false, {
                fileName: "[project]/components/site/Logo.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 8.6c-1-1.2.9-1.8 0-3.1M16.4 8.6c-1-1.2.9-1.8 0-3.1M19.8 8.6c-1-1.2.9-1.8 0-3.1",
                stroke: "currentColor",
                strokeWidth: "1.2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/site/Logo.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site/Logo.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Mark;
function Logo({ className, compact = false, chai }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-2.5 text-current", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mark, {
                className: compact ? "h-7" : "h-8",
                chai: chai
            }, void 0, false, {
                fileName: "[project]/components/site/Logo.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex flex-col leading-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "fat text-[1.5rem] leading-[1]",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].wordmark
                    }, void 0, false, {
                        fileName: "[project]/components/site/Logo.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 font-mono text-[0.5rem] uppercase tracking-[0.2em] opacity-60",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].product,
                            " · ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].place
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/Logo.tsx",
                        lineNumber: 21,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/site/Logo.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site/Logo.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c1 = Logo;
var _c, _c1;
__turbopack_context__.k.register(_c, "Mark");
__turbopack_context__.k.register(_c1, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToBasket",
    ()=>addToBasket,
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$CartDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/CartDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function addToBasket(itemOrCount = 1, count = 1) {
    if (typeof itemOrCount === "number") {
        window.dispatchEvent(new CustomEvent("tapri:basket", {
            detail: {
                add: itemOrCount
            }
        }));
    } else {
        window.dispatchEvent(new CustomEvent("tapri:basket", {
            detail: {
                add: count,
                item: itemOrCount
            }
        }));
    }
}
function Nav() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dark, setDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cartOpen, setCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bump, setBump] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const count = items.reduce((sum, item)=>sum + item.count, 0);
    const handleUpdateQty = (id, delta)=>{
        setItems((prev)=>prev.map((it)=>it.id === id ? {
                    ...it,
                    count: it.count + delta
                } : it).filter((it)=>it.count > 0));
    };
    const handleRemoveItem = (id)=>{
        setItems((prev)=>prev.filter((it)=>it.id !== id));
    };
    const handleClearCart = ()=>{
        setItems([]);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            let raf = 0;
            const onScroll = {
                "Nav.useEffect.onScroll": ()=>{
                    cancelAnimationFrame(raf);
                    raf = requestAnimationFrame({
                        "Nav.useEffect.onScroll": ()=>setScrolled(window.scrollY > 40)
                    }["Nav.useEffect.onScroll"]);
                }
            }["Nav.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            const inside = new Set();
            const triggers = Array.from(document.querySelectorAll("[data-theme='dark']")).map({
                "Nav.useEffect.triggers": (sec)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: sec,
                        start: "top 44px",
                        end: "bottom 44px",
                        refreshPriority: -1,
                        onToggle: {
                            "Nav.useEffect.triggers": (self)=>{
                                if (self.isActive) inside.add(sec);
                                else inside.delete(sec);
                                setDark(inside.size > 0);
                            }
                        }["Nav.useEffect.triggers"]
                    })
            }["Nav.useEffect.triggers"]);
            const onBasket = {
                "Nav.useEffect.onBasket": (e)=>{
                    const detail = e.detail;
                    const addQty = detail?.add ?? 1;
                    const item = detail?.item;
                    if (item) {
                        setItems({
                            "Nav.useEffect.onBasket": (prev)=>{
                                const idx = prev.findIndex({
                                    "Nav.useEffect.onBasket.idx": (i)=>i.id === item.id
                                }["Nav.useEffect.onBasket.idx"]);
                                if (idx >= 0) {
                                    const next = [
                                        ...prev
                                    ];
                                    next[idx] = {
                                        ...next[idx],
                                        count: next[idx].count + addQty
                                    };
                                    return next;
                                }
                                return [
                                    ...prev,
                                    {
                                        ...item,
                                        count: addQty
                                    }
                                ];
                            }
                        }["Nav.useEffect.onBasket"]);
                    } else {
                        // generic fallback (e.g. cutting chai)
                        setItems({
                            "Nav.useEffect.onBasket": (prev)=>{
                                const idx = prev.findIndex({
                                    "Nav.useEffect.onBasket.idx": (i)=>i.id === "chai"
                                }["Nav.useEffect.onBasket.idx"]);
                                if (idx >= 0) {
                                    const next = [
                                        ...prev
                                    ];
                                    next[idx] = {
                                        ...next[idx],
                                        count: next[idx].count + addQty
                                    };
                                    return next;
                                }
                                return [
                                    ...prev,
                                    {
                                        id: "chai",
                                        name: "Cutting Chai",
                                        price: 20,
                                        sub: "Masala · 90 ml",
                                        count: addQty
                                    }
                                ];
                            }
                        }["Nav.useEffect.onBasket"]);
                    }
                    setBump(true);
                    setTimeout({
                        "Nav.useEffect.onBasket": ()=>setBump(false)
                    }["Nav.useEffect.onBasket"], 450);
                }
            }["Nav.useEffect.onBasket"];
            window.addEventListener("tapri:basket", onBasket);
            return ({
                "Nav.useEffect": ()=>{
                    window.removeEventListener("scroll", onScroll);
                    cancelAnimationFrame(raf);
                    triggers.forEach({
                        "Nav.useEffect": (t)=>t.kill()
                    }["Nav.useEffect"]);
                    window.removeEventListener("tapri:basket", onBasket);
                }
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const lenis = window.__lenis;
            if (open) lenis?.stop();
            else if (!cartOpen) lenis?.start();
            document.documentElement.classList.toggle("lenis-stopped", open || cartOpen);
        }
    }["Nav.useEffect"], [
        open,
        cartOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const onKey = {
                "Nav.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") {
                        setOpen(false);
                        setCartOpen(false);
                    }
                }
            }["Nav.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "Nav.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    const light = dark || open;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-x-0 top-0 z-50 transition-colors duration-500", light ? "text-ivory" : "text-ink"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    "aria-label": "Primary",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("container-x flex items-center justify-between transition-[height] duration-700", scrolled ? "h-16" : "h-[88px]"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#story",
                            className: "relative z-[60]",
                            "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].name} — back to top`,
                            "data-cursor": "link",
                            onClick: ()=>{
                                setOpen(false);
                                setCartOpen(false);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                compact: scrolled
                            }, void 0, false, {
                                fileName: "[project]/components/site/Nav.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/site/Nav.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-[60] flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setCartOpen(true);
                                        setOpen(false);
                                    },
                                    "data-cursor": "cta",
                                    "aria-label": `Your table order — ${count} ${count === 1 ? "item" : "items"}`,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 items-center gap-2 rounded-full border px-3.5 font-mono text-[0.7rem] tabular-nums transition-[colors,transform] duration-300", light ? "border-ivory/30 hover:border-ivory" : "border-ink/20 hover:border-ink", bump && "scale-110"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            "aria-hidden": true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M2.5 6h11l-1.2 7.5H3.7z",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.3",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/site/Nav.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 87
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5.5 6 8 2.5 10.5 6",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.3",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/site/Nav.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 186
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/site/Nav.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this),
                                        String(count).padStart(2, "0")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/site/Nav.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setOpen((o)=>!o);
                                        setCartOpen(false);
                                    },
                                    "aria-expanded": open,
                                    "aria-controls": "tapri-menu",
                                    "data-cursor": "cta",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 items-center gap-3 rounded-full px-5 font-body text-[0.8rem] font-semibold tracking-[0.02em] transition-colors duration-500", light ? "bg-ivory text-ink hover:bg-kesar" : "bg-ink text-ivory hover:bg-accent"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative block h-2.5 w-4",
                                            "aria-hidden": true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-0 h-px w-full bg-current transition-transform duration-500", open ? "top-1/2 rotate-45" : "top-0")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/site/Nav.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-0 h-px w-full bg-current transition-transform duration-500", open ? "top-1/2 -rotate-45" : "top-full")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/site/Nav.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/site/Nav.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        open ? "Close" : "Menu"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/site/Nav.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site/Nav.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site/Nav.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/site/Nav.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "tapri-menu",
                "aria-hidden": !open,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-[45] bg-deep text-ivory transition-[clip-path] duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)]", open ? "[clip-path:circle(150%_at_calc(100%-5rem)_2.75rem)]" : "pointer-events-none [clip-path:circle(0%_at_calc(100%-5rem)_2.75rem)]"),
                "data-lenis-prevent": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-x grid h-full grid-cols-12 gap-x-6 pb-10 pt-28 md:pt-32",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "col-span-12 flex flex-col justify-end gap-0.5 md:col-span-7",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nav"].map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: n.href,
                                        tabIndex: open ? 0 : -1,
                                        onClick: ()=>setOpen(false),
                                        "data-cursor": "link",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fat group flex items-baseline gap-5 text-[clamp(2.6rem,7vw,6rem)] leading-[1.12] transition-[transform,opacity,color] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:text-kesar", open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"),
                                        style: {
                                            transitionDelay: open ? `${0.14 + i * 0.06}s` : "0s"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[0.7rem] font-normal tracking-[0.16em] text-ivory/40",
                                                children: [
                                                    "0",
                                                    i + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/site/Nav.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this),
                                            n.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/site/Nav.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this)
                                }, n.href, false, {
                                    fileName: "[project]/components/site/Nav.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/site/Nav.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-span-12 mt-10 flex flex-col justify-end gap-8 border-t border-ivory/15 pt-6 transition-opacity duration-700 md:col-span-4 md:col-start-9 md:mt-0 md:border-l md:border-t-0 md:pl-8 md:pt-0", open ? "opacity-100 delay-300" : "opacity-0"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow !text-ivory/45",
                                            children: "On the counter"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site/Nav.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "mt-3 space-y-2 text-sm text-ivory/75",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menu"].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "h-2.5 w-2.5 rounded-full",
                                                                    style: {
                                                                        background: f.tint
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/site/Nav.tsx",
                                                                    lineNumber: 162,
                                                                    columnNumber: 194
                                                                }, this),
                                                                f.name
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/site/Nav.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 152
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[0.62rem] text-ivory/45",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(f.price)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/site/Nav.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 285
                                                        }, this)
                                                    ]
                                                }, f.id, true, {
                                                    fileName: "[project]/components/site/Nav.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 85
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/site/Nav.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/site/Nav.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-[0.6rem] uppercase leading-relaxed tracking-[0.14em] text-ivory/45",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].hours,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/site/Nav.tsx",
                                            lineNumber: 164,
                                            columnNumber: 123
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].address
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/site/Nav.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site/Nav.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site/Nav.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/site/Nav.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$CartDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: cartOpen,
                onClose: ()=>setCartOpen(false),
                items: items,
                onUpdateQty: handleUpdateQty,
                onRemoveItem: handleRemoveItem,
                onClearCart: handleClearCart
            }, void 0, false, {
                fileName: "[project]/components/site/Nav.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site/Nav.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(Nav, "4fSwWCNZkq6Ym6RmDm4R3AKv/vU=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site/OfferBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OfferBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Intro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/Intro.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function OfferBar() {
    _s();
    const [shown, setShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [closed, setClosed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OfferBar.useEffect": ()=>{
            if (sessionStorage.getItem("tapri-offer-closed")) {
                setClosed(true);
                return;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Intro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onIntroDone"])({
                "OfferBar.useEffect": ()=>setTimeout({
                        "OfferBar.useEffect": ()=>setShown(true)
                    }["OfferBar.useEffect"], 1600)
            }["OfferBar.useEffect"]);
        }
    }["OfferBar.useEffect"], []);
    if (closed) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "region",
        "aria-label": "First cutting offer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-x-3 bottom-3 z-40 mx-auto max-w-[640px] transition-[transform,opacity] duration-700 ease-[cubic-bezier(.16,1,.3,1)] md:bottom-5", shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[140%] opacity-0"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: (e)=>{
                e.preventDefault();
                setDone(true);
            },
            className: "flex items-center gap-2 rounded-full border border-ink/10 bg-cream/95 py-1.5 pl-2 pr-1.5 text-ink shadow-[0_18px_40px_-18px_rgba(50,24,6,.5)] backdrop-blur-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-deep text-ivory",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"], {
                        className: "h-5"
                    }, void 0, false, {
                        fileName: "[project]/components/site/OfferBar.tsx",
                        lineNumber: 20,
                        columnNumber: 109
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/site/OfferBar.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "min-w-0 flex-1 truncate pl-1 text-[0.78rem] leading-tight",
                    children: done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Done — show the email at the counter for a ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                className: "font-semibold",
                                children: "cutting on the house"
                            }, void 0, false, {
                                fileName: "[project]/components/site/OfferBar.tsx",
                                lineNumber: 22,
                                columnNumber: 68
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/OfferBar.tsx",
                        lineNumber: 22,
                        columnNumber: 19
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                className: "font-semibold",
                                children: "First cutting's on us"
                            }, void 0, false, {
                                fileName: "[project]/components/site/OfferBar.tsx",
                                lineNumber: 22,
                                columnNumber: 134
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: " — leave your email, show it at the counter"
                            }, void 0, false, {
                                fileName: "[project]/components/site/OfferBar.tsx",
                                lineNumber: 22,
                                columnNumber: 193
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sm:hidden",
                                children: " · get the pass"
                            }, void 0, false, {
                                fileName: "[project]/components/site/OfferBar.tsx",
                                lineNumber: 22,
                                columnNumber: 278
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/OfferBar.tsx",
                        lineNumber: 22,
                        columnNumber: 132
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/site/OfferBar.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                !done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "tapri-offer-email",
                            className: "sr-only",
                            children: "Email address"
                        }, void 0, false, {
                            fileName: "[project]/components/site/OfferBar.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "tapri-offer-email",
                            type: "email",
                            required: true,
                            placeholder: "you@email.com",
                            className: "hidden w-44 rounded-full bg-paper/70 px-4 py-2 text-[0.78rem] outline-none placeholder:text-ink/40 focus:bg-paper md:block"
                        }, void 0, false, {
                            fileName: "[project]/components/site/OfferBar.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "hidden shrink-0 rounded-full bg-ink px-4 py-2 text-[0.75rem] font-semibold text-ivory transition-colors hover:bg-accent md:block",
                            "data-cursor": "cta",
                            children: "Get the pass"
                        }, void 0, false, {
                            fileName: "[project]/components/site/OfferBar.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#newsletter",
                            className: "shrink-0 rounded-full bg-ink px-4 py-2 text-[0.75rem] font-semibold text-ivory md:hidden",
                            children: "Get it"
                        }, void 0, false, {
                            fileName: "[project]/components/site/OfferBar.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site/OfferBar.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-label": "Dismiss offer",
                    onClick: ()=>{
                        setClosed(true);
                        sessionStorage.setItem("tapri-offer-closed", "1");
                    },
                    className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink/50 hover:text-ink",
                    "data-cursor": "link",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "10",
                        height: "10",
                        viewBox: "0 0 10 10",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1 1l8 8M9 1L1 9",
                            stroke: "currentColor",
                            strokeWidth: "1.4"
                        }, void 0, false, {
                            fileName: "[project]/components/site/OfferBar.tsx",
                            lineNumber: 33,
                            columnNumber: 71
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/site/OfferBar.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/site/OfferBar.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/site/OfferBar.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/site/OfferBar.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(OfferBar, "Xi76iRudhnhXSBkVhHDn2sfdbFk=");
_c = OfferBar;
var _c;
__turbopack_context__.k.register(_c, "OfferBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/story/StorySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StorySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/timeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Magnetic.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Intro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/Intro.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const StoryScene = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/lib/story/engine.ts [app-client] (ecmascript, async loader)").then((m)=>({
            default: m.StoryScene
        })));
_c = StoryScene;
const at = (k)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"][k][0];
const len = (k)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"][k][1] - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"][k][0];
const STK = [
    {
        pos: "left-[5%] top-[19%] md:left-[16%] md:top-[19%]",
        bg: "var(--color-accent)",
        fg: "var(--color-cream)",
        rot: -12
    },
    {
        pos: "left-[60%] top-[14%] md:left-[69%] md:top-[15%]",
        bg: "var(--color-deep)",
        fg: "var(--color-malai)",
        rot: 9
    },
    {
        pos: "left-[3%] top-[64%] md:left-[11%] md:top-[60%]",
        bg: "var(--color-kesar)",
        fg: "var(--color-ink)",
        rot: 7
    },
    {
        pos: "left-[57%] top-[65%] md:left-[72%] md:top-[58%]",
        bg: "var(--color-pista)",
        fg: "var(--color-ink)",
        rot: -8
    }
];
function Sticker({ i }) {
    const s = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stickers"][i], v = STK[i];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-stk": i,
        "data-shape": s.shape,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("tapri-sticker absolute opacity-0", v.pos),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "face",
            style: {
                background: v.bg,
                color: v.fg
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "edge"
                }, void 0, false, {
                    fileName: "[project]/components/story/StorySection.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "fat text-[clamp(2.2rem,3.6vw,3.4rem)] leading-[0.9]",
                    children: [
                        s.value,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[0.48em]",
                            children: s.unit
                        }, void 0, false, {
                            fileName: "[project]/components/story/StorySection.tsx",
                            lineNumber: 30,
                            columnNumber: 88
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/story/StorySection.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mt-1.5 max-w-[80%] font-mono text-[0.54rem] font-bold uppercase leading-tight tracking-[0.1em]",
                    children: s.label
                }, void 0, false, {
                    fileName: "[project]/components/story/StorySection.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/story/StorySection.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/story/StorySection.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c1 = Sticker;
function StorySection() {
    _s();
    const wrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const entrance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const stageText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stageNum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const secs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const boilN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StorySection.useEffect": ()=>{
            setReady(true);
            const el = wrap.current;
            if (reduced) {
                entrance.current = 1;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(el.querySelectorAll("[data-in]"), {
                    opacity: 1,
                    yPercent: 0,
                    y: 0
                });
            }
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "StorySection.useEffect.ctx": ()=>{
                    let intro = null;
                    if (!reduced) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set("[data-in='line'] > span", {
                            yPercent: 130
                        });
                        intro = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                            paused: true,
                            defaults: {
                                ease: "power3.out"
                            }
                        }).to(entrance, {
                            current: 1,
                            duration: 1.9,
                            ease: "power2.out"
                        }, 0).to("[data-in='line'] > span", {
                            yPercent: 0,
                            duration: 1.3,
                            ease: "expo.out",
                            stagger: 0.12
                        }, 0.2).fromTo("[data-in='fade']", {
                            opacity: 0,
                            y: 14
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 0.9,
                            stagger: 0.08
                        }, 0.6);
                    }
                    const off = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Intro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onIntroDone"])({
                        "StorySection.useEffect.ctx.off": ()=>intro?.play()
                    }["StorySection.useEffect.ctx.off"]);
                    let stage = -1, lastMl = -1, lastS = -1, lastB = -1;
                    const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: el,
                        start: "top top",
                        end: "bottom bottom",
                        onUpdate: {
                            "StorySection.useEffect.ctx.st": (self)=>{
                                const p = self.progress;
                                progress.current = p;
                                let s = -1;
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_AT"].forEach({
                                    "StorySection.useEffect.ctx.st": (v, i)=>{
                                        if (p >= v) s = i;
                                    }
                                }["StorySection.useEffect.ctx.st"]);
                                if (s !== stage) {
                                    stage = s;
                                    if (stageText.current && stageNum.current && s >= 0) {
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo([
                                            stageText.current,
                                            stageNum.current
                                        ], {
                                            yPercent: 100,
                                            opacity: 0
                                        }, {
                                            yPercent: 0,
                                            opacity: 1,
                                            duration: 0.5,
                                            ease: "power3.out",
                                            overwrite: true
                                        });
                                        stageText.current.textContent = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stages"][s];
                                        stageNum.current.textContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(s + 1);
                                    }
                                }
                                const m = Math.round((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].pour[0] + len("pour") * 0.07, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].pour[0] + len("pour") * 0.9) * 90);
                                if (m !== lastMl && ml.current) {
                                    lastMl = m;
                                    ml.current.textContent = String(m);
                                }
                                const sc = Math.round((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].soak[0], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].soak[1]) * 41);
                                if (sc !== lastS && secs.current) {
                                    lastS = sc;
                                    secs.current.textContent = (sc / 10).toFixed(1);
                                    secs.current.parentElement.dataset.over = sc > 32 ? "1" : "0";
                                }
                                const bn = Math.min(3, 1 + Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].boil[0], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].boil[1]) * 3));
                                if (bn !== lastB && boilN.current) {
                                    lastB = bn;
                                    boilN.current.textContent = String(bn);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(boilN.current, {
                                        scale: 1.25
                                    }, {
                                        scale: 1,
                                        duration: 0.5,
                                        ease: "back.out(2)"
                                    });
                                }
                            }
                        }["StorySection.useEffect.ctx.st"]
                    });
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                        scrollTrigger: {
                            trigger: el,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 0.6
                        },
                        defaults: {
                            ease: "none"
                        }
                    });
                    tl.to("[data-hero-a]", {
                        xPercent: -20,
                        yPercent: -30,
                        opacity: 0,
                        duration: len("heroOut")
                    }, at("heroOut")).to("[data-hero-b]", {
                        xPercent: 20,
                        yPercent: 30,
                        opacity: 0,
                        duration: len("heroOut")
                    }, at("heroOut")).to("[data-hero-copy]", {
                        y: -40,
                        opacity: 0,
                        duration: len("heroOut") * 0.7
                    }, at("heroOut")).to("[data-hint]", {
                        opacity: 0,
                        duration: 0.02
                    }, 0.005);
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stickers"].forEach({
                        "StorySection.useEffect.ctx": (_, i)=>{
                            const a = at("statsIn") + i * 0.013;
                            tl.fromTo(`[data-stk='${i}']`, {
                                opacity: 0,
                                scale: 0.2,
                                rotate: STK[i].rot * -3
                            }, {
                                opacity: 1,
                                scale: 1,
                                rotate: STK[i].rot,
                                duration: 0.035,
                                ease: "back.out(2.2)"
                            }, a).fromTo(`[data-stk='${i}'] > .face`, {
                                "--sheen": "-120%"
                            }, {
                                "--sheen": "120%",
                                duration: 0.03
                            }, a + 0.02).to(`[data-stk='${i}']`, {
                                y: -50 - i * 12,
                                rotate: STK[i].rot * 0.4,
                                duration: at("statsOut") - a - 0.035
                            }, a + 0.035).to(`[data-stk='${i}']`, {
                                opacity: 0,
                                scale: 0.6,
                                y: -160,
                                rotate: STK[i].rot * 3,
                                duration: len("statsOut") * 0.8
                            }, at("statsOut") + i * 0.006);
                        }
                    }["StorySection.useEffect.ctx"]);
                    // before dawn in the kitchen → morning in the café
                    tl.fromTo("[data-night]", {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: len("night")
                    }, at("night")).to("[data-night]", {
                        opacity: 0,
                        duration: len("day")
                    }, at("day")).fromTo("[data-ember]", {
                        opacity: 0,
                        scale: 0.6
                    }, {
                        opacity: 1,
                        scale: 1,
                        duration: len("flame") * 1.5
                    }, at("flame")).to("[data-ember]", {
                        opacity: 0,
                        duration: len("day") * 0.7
                    }, at("day"));
                    tl.fromTo("[data-readout]", {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: 0.02
                    }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_AT"][0] - 0.01).fromTo("[data-readout-bar]", {
                        scaleX: 0
                    }, {
                        scaleX: 1,
                        duration: 0.91 - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_AT"][0]
                    }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGE_AT"][0]).to("[data-readout]", {
                        color: "#2a160c",
                        duration: len("day")
                    }, at("day")).to("[data-readout]", {
                        opacity: 0,
                        duration: 0.02
                    }, 0.91);
                    const block = {
                        "StorySection.useEffect.ctx.block": (title, copy, inK, outK)=>{
                            tl.fromTo(`${title} > span > span`, {
                                yPercent: 130,
                                y: 0
                            }, {
                                yPercent: 0,
                                y: 0,
                                duration: len(inK),
                                stagger: 0.008,
                                ease: "power2.out"
                            }, at(inK)).fromTo(copy, {
                                opacity: 0,
                                y: 22
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: len(inK),
                                stagger: 0.008
                            }, at(inK) + 0.01).to(`${title} > span > span`, {
                                yPercent: -130,
                                y: 0,
                                duration: len(outK),
                                stagger: 0.006
                            }, at(outK)).to(copy, {
                                opacity: 0,
                                y: -22,
                                duration: len(outK)
                            }, at(outK));
                        }
                    }["StorySection.useEffect.ctx.block"];
                    block("[data-brew-title]", "[data-brew]", "brewCopyIn", "brewCopyOut");
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spices"].forEach({
                        "StorySection.useEffect.ctx": (_, i)=>{
                            const a = i < 5 ? at("spice") + [
                                0,
                                0.17,
                                0.32,
                                0.44,
                                0.54
                            ][i] * len("spice") + 0.006 : at("tea") + 0.012;
                            tl.fromTo(`[data-spice='${i}']`, {
                                opacity: 0,
                                x: 24
                            }, {
                                opacity: 1,
                                x: 0,
                                duration: 0.014,
                                ease: "power2.out"
                            }, a).to(`[data-spice='${i}']`, {
                                opacity: 0,
                                x: 12,
                                duration: 0.012
                            }, at("milkCopyIn") - 0.012 + i * 0.002);
                        }
                    }["StorySection.useEffect.ctx"]);
                    block("[data-milk-title]", "[data-milk]", "milkCopyIn", "milkCopyOut");
                    block("[data-boil-title]", "[data-boil]", "boilCopyIn", "boilCopyOut");
                    tl.fromTo("[data-boilword]", {
                        opacity: 0,
                        yPercent: 20
                    }, {
                        opacity: 1,
                        yPercent: 0,
                        duration: len("boilCopyIn")
                    }, at("boilCopyIn")).to("[data-boilword]", {
                        opacity: 0,
                        yPercent: -20,
                        duration: len("boilCopyOut")
                    }, at("boilCopyOut"));
                    block("[data-pour-title]", "[data-pour]", "pourCopyIn", "pourCopyOut");
                    block("[data-dunk-title]", "[data-dunk]", "dunkCopyIn", "oopsOut");
                    tl.fromTo("[data-oops]", {
                        opacity: 0,
                        y: 16
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: len("oopsIn"),
                        stagger: 0.006
                    }, at("oopsIn")).to("[data-oops]", {
                        opacity: 0,
                        y: -16,
                        duration: len("oopsOut")
                    }, at("oopsOut"));
                    tl.fromTo("[data-spread-title] > span > span", {
                        yPercent: 130,
                        y: 0
                    }, {
                        yPercent: 0,
                        y: 0,
                        duration: len("spreadCopyIn"),
                        stagger: 0.008,
                        ease: "power2.out"
                    }, at("spreadCopyIn")).fromTo("[data-spread-copy]", {
                        opacity: 0,
                        y: 24
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: len("spreadCopyIn"),
                        stagger: 0.01
                    }, at("spreadCopyIn") + 0.012).fromTo("[data-spread-spec]", {
                        opacity: 0,
                        x: -20
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 0.03,
                        stagger: 0.008
                    }, at("tableTurn"));
                    tl.set({}, {}, 1);
                    return ({
                        "StorySection.useEffect.ctx": ()=>{
                            off();
                            st.kill();
                            intro?.kill();
                        }
                    })["StorySection.useEffect.ctx"];
                }
            }["StorySection.useEffect.ctx"], el);
            return ({
                "StorySection.useEffect": ()=>ctx.revert()
            })["StorySection.useEffect"];
        }
    }["StorySection.useEffect"], [
        reduced
    ]);
    const line = "block w-max overflow-hidden whitespace-nowrap pt-[0.14em] pb-[0.22em] -mt-[0.14em] -mb-[0.2em]";
    const h2 = "fat text-[clamp(2.3rem,9.6vw,3.2rem)] leading-[1.02] md:text-[clamp(2.8rem,5vw,5.4rem)]";
    const nightSpan = {
        top: `calc(${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].night[0] + 0.02} * (100% - 100svh))`,
        height: `calc(${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].day[0] + 0.018 - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].night[0] - 0.02} * (100% - 100svh) + 60px)`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: wrap,
        id: "story",
        className: "relative h-[1150svh] md:h-[1350vh]",
        "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].name} — how a glass of chai is made`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                "data-theme": "dark",
                className: "pointer-events-none absolute inset-x-0",
                style: nightSpan
            }, void 0, false, {
                fileName: "[project]/components/story/StorySection.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 h-[100svh] w-full overflow-hidden bg-ivory",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "absolute inset-0",
                        style: {
                            background: "radial-gradient(72% 64% at 50% 46%, #fdf6e8 0%, #f6e6cb 52%, #ecd2a6 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/story/StorySection.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "absolute inset-0",
                        style: {
                            background: "radial-gradient(34% 30% at 50% 56%, rgba(201,138,79,.16), transparent 70%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/story/StorySection.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        "data-night": true,
                        className: "absolute inset-0 opacity-0",
                        style: {
                            background: "radial-gradient(70% 60% at 50% 58%, #4a2410 0%, #2c140a 46%, #170a05 100%)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-ember": true,
                            className: "absolute inset-0 opacity-0",
                            style: {
                                background: "radial-gradient(36% 26% at 50% 66%, rgba(255,150,60,.3), rgba(70,110,255,.08) 55%, transparent 75%)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/story/StorySection.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/story/StorySection.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "grain absolute inset-0 opacity-70"
                    }, void 0, false, {
                        fileName: "[project]/components/story/StorySection.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "fat leading-[0.9] text-ink",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-hero-a": true,
                                        className: "absolute left-[var(--gutter)] top-[calc(var(--nav-h)+1.25rem)] block text-[clamp(4.2rem,22vw,7rem)] md:top-[calc(var(--nav-h)+1rem)] md:text-[clamp(5rem,13.5vw,15rem)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-in": "line",
                                            className: line,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block",
                                                children: "First,"
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 158,
                                                columnNumber: 53
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/story/StorySection.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-hero-b": true,
                                        className: "absolute bottom-[max(10svh,7rem)] right-[var(--gutter)] block text-right text-[clamp(4.2rem,22vw,7rem)] md:bottom-[8svh] md:text-[clamp(5rem,13.5vw,15rem)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-in": "line",
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(line, "ml-auto"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-accent",
                                                children: "chai."
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 161,
                                                columnNumber: 68
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/story/StorySection.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-boilword": true,
                                "aria-hidden": true,
                                className: "fat absolute inset-x-0 top-[9%] text-center leading-[0.85] text-ivory/[0.09] opacity-0 text-[clamp(9rem,46vw,34rem)] md:top-[2%]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[0.5em]",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: boilN,
                                        className: "inline-block",
                                        children: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 165,
                                        columnNumber: 52
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/story/StorySection.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-10",
                        children: ready && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                            fallback: null,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoryScene, {
                                progress: progress,
                                entrance: entrance,
                                reduced: reduced
                            }, void 0, false, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 169,
                                columnNumber: 84
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/story/StorySection.tsx",
                            lineNumber: 169,
                            columnNumber: 58
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/story/StorySection.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 z-20 text-ink",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-hero-copy": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-in": "fade",
                                        className: "pointer-events-auto absolute right-[var(--gutter)] top-[calc(var(--nav-h)+1.25rem)] hidden max-w-[28ch] text-right opacity-0 md:block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "body-sm text-ink/70",
                                                children: [
                                                    "A chai café in ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].place,
                                                    ". Ginger pounded every morning, milk boiled up three times, poured from as high as the arm goes."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 175,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 flex justify-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "#menu",
                                                        variant: "ghost",
                                                        children: "See the menu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/story/StorySection.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 64
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 54
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 176,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-in": "fade",
                                        className: "absolute bottom-[max(11svh,7.5rem)] left-[var(--gutter)] hidden max-w-[40ch] font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.14em] text-ink/55 opacity-0 md:block",
                                        children: [
                                            "Cutting chai · 90 ml · ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(20),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 178,
                                                columnNumber: 252
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].hours
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-hint": true,
                                        "data-in": "fade",
                                        className: "absolute bottom-[max(3.5svh,4.5rem)] left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap font-mono text-[0.58rem] uppercase tracking-[0.18em] text-ink/50 opacity-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative block h-8 w-px overflow-hidden bg-ink/15",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute inset-x-0 top-0 h-3 animate-[tapri-hint_1.8s_ease-in-out_infinite] bg-ink/70"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 83
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Scroll to take a sip"
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 181,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stickers"].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sticker, {
                                        i: i
                                    }, i, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 185,
                                        columnNumber: 69
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[max(13svh,8.5rem)] left-[var(--gutter)] max-w-[34ch] text-ivory md:bottom-[11svh]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-brew": true,
                                        className: "eyebrow mb-3 !text-ivory/55 opacity-0",
                                        children: "01 — 5:40 am, the first pan"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-brew-title": true,
                                        className: h2,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block",
                                                    children: "Ginger first."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 38
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-kesar",
                                                    children: "Always pounded."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 38
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 192,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-brew": true,
                                        className: "body-sm mt-4 hidden max-w-[32ch] text-ivory/70 opacity-0 md:block",
                                        children: "Every spice goes into the water whole and bruised, never as a powder — then two heaped spoons of Assam."
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "absolute right-[var(--gutter)] top-[calc(var(--nav-h)+1rem)] space-y-2.5 text-right text-ivory md:top-[22%] md:space-y-3.5",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spices"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        "data-spice": i,
                                        className: "opacity-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "fat block text-[clamp(1.05rem,4.2vw,1.3rem)] leading-none md:text-[clamp(1.3rem,1.9vw,2rem)]",
                                                children: s.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1 hidden font-mono text-[0.56rem] uppercase tracking-[0.14em] text-ivory/50 md:block",
                                                children: s.note
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 200,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, s.id, true, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[max(13svh,8.5rem)] left-[var(--gutter)] max-w-[34ch] text-ivory md:bottom-[11svh]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-milk": true,
                                        className: "eyebrow mb-3 !text-ivory/55 opacity-0",
                                        children: "03 — Milked"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-milk-title": true,
                                        className: h2,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block",
                                                    children: "Then the milk,"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 38
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-kesar",
                                                    children: "all at once."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 38
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 210,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-milk": true,
                                        className: "body-sm mt-4 hidden max-w-[32ch] text-ivory/70 opacity-0 md:block",
                                        children: "Full-cream buffalo milk, straight into the rolling tea. No water-to-milk maths on a napkin."
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[max(13svh,8.5rem)] left-[var(--gutter)] max-w-[34ch] text-ivory md:bottom-[11svh]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-boil": true,
                                        className: "eyebrow mb-3 !text-ivory/55 opacity-0",
                                        children: "04 — Boiled"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-boil-title": true,
                                        className: h2,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block",
                                                    children: "Boiled up"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 38
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-kesar",
                                                    children: "three times."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 38
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[max(13svh,8.5rem)] right-[var(--gutter)] max-w-[26ch] text-right text-ivory md:bottom-[13svh]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-boil": true,
                                        className: "body-sm text-ivory/70 opacity-0 max-md:hidden",
                                        children: "Let it climb to the rim, drop the flame, let it climb again. That is where the colour comes from."
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-boil": true,
                                        className: "mt-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ivory/50 opacity-0",
                                        children: "Eleven minutes · never less"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-[var(--gutter)] top-[calc(var(--nav-h)+1rem)] max-w-[34ch] md:top-1/2 md:-translate-y-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-pour": true,
                                        className: "eyebrow mb-3 opacity-0",
                                        children: "05 — Poured"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-pour-title": true,
                                        className: h2,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block",
                                                    children: "Pulled from"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 38
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-accent",
                                                    children: "a height."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 38
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-pour": true,
                                        className: "body-sm mt-4 hidden max-w-[30ch] text-ink/70 opacity-0 md:block",
                                        children: "The long pour cools it a degree, wakes up the froth and — let's be honest — looks fantastic."
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[max(13svh,8.5rem)] left-[var(--gutter)] md:bottom-[11svh] md:left-auto md:right-[var(--gutter)] md:text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-pour": true,
                                        className: "flex items-start gap-1 opacity-0 md:justify-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                ref: ml,
                                                className: "fat text-[clamp(4.2rem,16vw,6rem)] leading-[0.8] tabular-nums text-accent md:text-[clamp(5rem,9vw,9rem)]",
                                                children: "0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 238,
                                                columnNumber: 86
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "fat pt-2 text-[clamp(1.4rem,3vw,3rem)] text-accent",
                                                children: "ml"
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 238,
                                                columnNumber: 226
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-pour": true,
                                        className: "mt-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink/55 opacity-0",
                                        children: [
                                            "One cutting · ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inr"])(20),
                                            " · since forever"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[max(13svh,8.5rem)] left-[var(--gutter)] max-w-[34ch] md:bottom-[11svh]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-dunk": true,
                                        className: "eyebrow mb-3 opacity-0",
                                        children: "06 — Dunked"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-dunk-title": true,
                                        className: h2,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block",
                                                    children: "Three seconds."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 38
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-accent",
                                                    children: "Not four."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 38
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 247,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-oops": true,
                                        className: "body-sm mt-4 max-w-[30ch] text-ink/75 opacity-0",
                                        children: "That was four. We'll bring you another — and a spoon."
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-[var(--gutter)] top-[calc(var(--nav-h)+1rem)] text-right md:top-auto md:bottom-[11svh]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-dunk": true,
                                        className: "group flex items-start justify-end gap-1 text-ink opacity-0 data-[over='1']:text-accent",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                ref: secs,
                                                className: "fat text-[clamp(3.6rem,14vw,5rem)] leading-[0.8] tabular-nums md:text-[clamp(5rem,9vw,9rem)]",
                                                children: "0.0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 252,
                                                columnNumber: 126
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "fat pt-1 text-[clamp(1.2rem,2.4vw,2.6rem)]",
                                                children: "s"
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 252,
                                                columnNumber: 258
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-dunk": true,
                                        className: "mt-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink/55 opacity-0",
                                        children: "Glucose biscuit · safe till 3.2 s"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-[var(--gutter)] top-[calc(var(--nav-h)+0.5rem)] md:inset-x-auto md:left-[var(--gutter)] md:top-[calc(var(--nav-h)+1.5rem)] md:max-w-[40ch]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-spread-copy": true,
                                        className: "eyebrow mb-4 opacity-0",
                                        children: "07 — Served"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-spread-title": true,
                                        className: "fat text-[clamp(2.6rem,11vw,3.6rem)] leading-[1.02] md:text-[clamp(3rem,5.4vw,5.8rem)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block",
                                                    children: "Pull up"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 38
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 260,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block text-accent",
                                                    children: "a chair."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 38
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 261,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-spread-copy": true,
                                        className: "body-sm mt-5 hidden max-w-[34ch] text-ink/70 opacity-0 md:block",
                                        children: "Chai, a stack of glucose biscuits, bun maska, hot samosas — and a filter kaapi for the one friend who insists."
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-spread-copy": true,
                                        className: "pointer-events-auto mt-6 hidden gap-3 opacity-0 md:flex",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#menu",
                                                    variant: "ink",
                                                    children: "See the menu"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 113
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 264,
                                                columnNumber: 103
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#visit",
                                                    variant: "ghost",
                                                    children: "Find us"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 190
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 264,
                                                columnNumber: 180
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "absolute bottom-[max(11svh,7rem)] left-[var(--gutter)] hidden space-y-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink/60 md:block",
                                children: [
                                    "Marble tables · bentwood chairs",
                                    "Nine biscuit jars, always full",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].hours,
                                    "No laptops before 10 am"
                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        "data-spread-spec": true,
                                        className: "opacity-0",
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 267,
                                        columnNumber: 135
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-readout": true,
                                className: "absolute bottom-[max(2.2svh,1rem)] left-[var(--gutter)] w-[min(15rem,40vw)] text-ivory opacity-0 max-md:bottom-[5.25rem]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-end justify-between font-mono text-[0.6rem] uppercase tracking-[0.16em]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    ref: stageText,
                                                    className: "block",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stages"][0]
                                                }, void 0, false, {
                                                    fileName: "[project]/components/story/StorySection.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 55
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block overflow-hidden tabular-nums",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        ref: stageNum,
                                                        className: "block",
                                                        children: "01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/story/StorySection.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 68
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "opacity-40",
                                                        children: [
                                                            " / ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stages"].length)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/story/StorySection.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 116
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 273,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 271,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 h-px w-full bg-current/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-readout-bar": true,
                                            className: "h-full w-full origin-left bg-accent"
                                        }, void 0, false, {
                                            fileName: "[project]/components/story/StorySection.tsx",
                                            lineNumber: 275,
                                            columnNumber: 61
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/story/StorySection.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/story/StorySection.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/story/StorySection.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/story/StorySection.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_s(StorySection, "Rdcqewme+2Bw6G66IcGV9oPWaow=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c2 = StorySection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StoryScene");
__turbopack_context__.k.register(_c1, "Sticker");
__turbopack_context__.k.register(_c2, "StorySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
const variants = {
    ink: "bg-ink text-ivory hover:bg-accent",
    ivory: "bg-ivory text-ink hover:bg-white hover:-translate-y-px hover:shadow-[0_12px_30px_-14px_rgba(0,0,0,.35)]",
    ghost: "border border-ink/20 text-ink hover:border-ink",
    "ghost-light": "border border-ivory/30 text-ivory hover:border-ivory"
};
function Button({ href, children, variant = "ink", size = "md", className, onClick, target, rel }) {
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group inline-flex items-center gap-3 rounded-full font-body font-medium tracking-[0.02em] transition-all duration-500 ease-expo", size === "md" ? "px-6 py-3 text-[0.85rem]" : "px-8 py-4 text-[0.95rem]", variants[variant], className);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                "aria-hidden": "true",
                className: "transition-transform duration-500 ease-expo group-hover:translate-x-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1 7h11M7 1l6 6-6 6",
                    stroke: "currentColor",
                    strokeWidth: "1.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/ui/Button.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
    const external = /^(https?:|mailto:|tel:)/.test(href);
    if (external) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            target: target,
            rel: rel,
            onClick: onClick,
            className: classes,
            "data-cursor": "cta",
            children: content
        }, void 0, false, {
            fileName: "[project]/components/ui/Button.tsx",
            lineNumber: 59,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        target: target,
        rel: rel,
        onClick: onClick,
        className: classes,
        "data-cursor": "cta",
        children: content
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 61,
        columnNumber: 10
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Magnetic.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Magnetic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Magnetic({ children, strength = 0.22 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(pointer: fine)", false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Magnetic.useEffect": ()=>{
            if (!fine) return;
            const el = ref.current;
            if (!el) return;
            let raf = 0;
            let tx = 0, ty = 0, cx = 0, cy = 0;
            const move = {
                "Magnetic.useEffect.move": (e)=>{
                    const rect = el.getBoundingClientRect();
                    tx = (e.clientX - rect.left - rect.width / 2) * strength;
                    ty = (e.clientY - rect.top - rect.height / 2) * strength;
                }
            }["Magnetic.useEffect.move"];
            const leave = {
                "Magnetic.useEffect.leave": ()=>{
                    tx = 0;
                    ty = 0;
                }
            }["Magnetic.useEffect.leave"];
            const tick = {
                "Magnetic.useEffect.tick": ()=>{
                    cx += (tx - cx) * 0.16;
                    cy += (ty - cy) * 0.16;
                    if (Math.abs(cx) > 0.01 || Math.abs(cy) > 0.01 || Math.abs(tx) > 0.01 || Math.abs(ty) > 0.01) {
                        el.style.transform = `translate(${cx}px, ${cy}px)`;
                    }
                    raf = requestAnimationFrame(tick);
                }
            }["Magnetic.useEffect.tick"];
            el.addEventListener("mousemove", move);
            el.addEventListener("mouseleave", leave);
            el.style.willChange = "transform";
            raf = requestAnimationFrame(tick);
            return ({
                "Magnetic.useEffect": ()=>{
                    el.removeEventListener("mousemove", move);
                    el.removeEventListener("mouseleave", leave);
                    cancelAnimationFrame(raf);
                    el.style.willChange = "";
                    el.style.transform = "";
                }
            })["Magnetic.useEffect"];
        }
    }["Magnetic.useEffect"], [
        fine,
        strength
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "inline-block",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Magnetic.tsx",
        lineNumber: 43,
        columnNumber: 10
    }, this);
}
_s(Magnetic, "PA9R7kF1KFY2Xo1fRC+LdoQWmnk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
_c = Magnetic;
var _c;
__turbopack_context__.k.register(_c, "Magnetic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * BR-TAPRI — a chai café in Fort, Mumbai.
 * BR-Tapri and all copy, numbers, prices, hours and reviews are placeholder showcase content.
 */ __turbopack_context__.s([
    "brand",
    ()=>brand,
    "day",
    ()=>day,
    "dunkables",
    ()=>dunkables,
    "inr",
    ()=>inr,
    "kitchen",
    ()=>kitchen,
    "menu",
    ()=>menu,
    "nav",
    ()=>nav,
    "reviews",
    ()=>reviews,
    "spices",
    ()=>spices,
    "stages",
    ()=>stages,
    "stickers",
    ()=>stickers,
    "visit",
    ()=>visit
]);
const brand = {
    name: "BR-Tapri",
    wordmark: "BR-TAPRI",
    short: "TAPRI",
    product: "Chai café",
    tagline: "First, chai.",
    place: "Fort, Mumbai",
    address: "14 Homi Mody Street, Fort, Mumbai 400001",
    phone: "+91 22 5550 0142",
    hours: "6 am – 11 pm, every day"
};
const nav = [
    {
        label: "The chai",
        href: "#story"
    },
    {
        label: "Menu",
        href: "#menu"
    },
    {
        label: "The dunk test",
        href: "#dunk"
    },
    {
        label: "Visit",
        href: "#visit"
    },
    {
        label: "Reviews",
        href: "#reviews"
    }
];
const stickers = [
    {
        value: "11",
        unit: "min",
        label: "A batch, never less",
        shape: "burst"
    },
    {
        value: "3",
        unit: "×",
        label: "Boiled up",
        shape: "circle"
    },
    {
        value: "₹20",
        unit: "",
        label: "A cutting",
        shape: "pill"
    },
    {
        value: "6",
        unit: "am",
        label: "First boil",
        shape: "square"
    }
];
const stages = [
    "Spiced",
    "Steeped",
    "Milked",
    "Boiled",
    "Poured",
    "Dunked",
    "Served"
];
const spices = [
    {
        id: "ginger",
        name: "Ginger",
        note: "pounded, not grated"
    },
    {
        id: "cardamom",
        name: "Green cardamom",
        note: "pods split by hand"
    },
    {
        id: "clove",
        name: "Clove",
        note: "three, no more"
    },
    {
        id: "cinnamon",
        name: "Cinnamon",
        note: "one curl of bark"
    },
    {
        id: "pepper",
        name: "Black pepper",
        note: "for the back of the throat"
    },
    {
        id: "tea",
        name: "Assam CTC",
        note: "two heaped spoons"
    }
];
const menu = [
    {
        id: "chai",
        name: "Cutting Chai",
        sub: "Masala · 90 ml",
        notes: "Half a glass, twice the strength. Ginger-forward, boiled up three times and poured from as high as the arm goes.",
        tags: [
            "Ginger",
            "Cardamom",
            "Strong"
        ],
        price: 20,
        unit: "glass",
        tint: "#f4dcb8",
        verb: "Tap to swirl",
        cheer: "ek cutting!"
    },
    {
        id: "biscuits",
        name: "Glucose Biscuits",
        sub: "Baked in-house · stack of 6",
        notes: "Malty, barely sweet, and engineered for exactly three seconds in hot chai. We tested. A lot.",
        tags: [
            "Malty",
            "Crisp",
            "Dunkable"
        ],
        price: 30,
        unit: "stack",
        tint: "#f1e2c2",
        verb: "Tap to fan out",
        cheer: "crisp!"
    },
    {
        id: "bun",
        name: "Bun Maska",
        sub: "Soft bun · white butter",
        notes: "A pillowy bun, split and loaded with a slab of cold salted butter thick enough to leave teeth marks.",
        tags: [
            "Soft",
            "Buttery",
            "Salty"
        ],
        price: 60,
        unit: "plate",
        tint: "#f6dfc9",
        verb: "Tap to open",
        cheer: "maska!"
    },
    {
        id: "samosa",
        name: "Punjabi Samosa",
        sub: "Two · green chutney",
        notes: "Blistered, hand-folded pastry around potato, peas and crushed coriander seed. Fried to order, never reheated.",
        tags: [
            "Crisp",
            "Spiced",
            "Hot"
        ],
        price: 50,
        unit: "plate",
        tint: "#eadfbf",
        verb: "Tap to toss",
        cheer: "garam!"
    },
    {
        id: "cappuccino",
        name: "Cappuccino",
        sub: "Chikmagalur arabica",
        notes: "For the ones who came with a chai drinker. A double shot, steamed milk and a rosetta poured with real concentration.",
        tags: [
            "Double shot",
            "Silky",
            "Nutty"
        ],
        price: 140,
        unit: "cup",
        tint: "#eed9c4",
        verb: "Tap to spin",
        cheer: "wah!"
    },
    {
        id: "filter",
        name: "Filter Kaapi",
        sub: "Tumbler & dabara",
        notes: "Eighty-twenty peaberry and chicory, dripped overnight, pulled a metre between tumbler and dabara until it froths.",
        tags: [
            "Chicory",
            "Frothy",
            "Sweet"
        ],
        price: 70,
        unit: "tumbler",
        tint: "#e9dccb",
        verb: "Tap to pull",
        cheer: "strong!"
    }
];
const kitchen = [
    {
        id: "keema",
        name: "Keema Pav",
        sub: "Till 1 pm · or till it runs out",
        price: 180,
        photo: "/assets/photos/keema.webp",
        alt: "A plate of keema pav with buttered pav, onion and lime"
    },
    {
        id: "akuri",
        name: "Akuri on Toast",
        sub: "Parsi scrambled eggs",
        price: 140,
        photo: "/assets/photos/akuri.webp",
        alt: "Akuri — spiced scrambled eggs on buttered toast"
    },
    {
        id: "mawa",
        name: "Mawa Cake",
        sub: "Cardamom · cashew · almond",
        price: 90,
        photo: "/assets/photos/mawa.webp",
        alt: "Two slices of mawa cake with a glass of chai"
    },
    {
        id: "coldcoffee",
        name: "Cold Coffee",
        sub: "Thick, with a chocolate swirl",
        price: 130,
        photo: "/assets/photos/coldcoffee.webp",
        alt: "A tall glass of frothy cold coffee"
    }
];
const dunkables = [
    {
        id: "glucose",
        name: "Glucose",
        sub: "The classic",
        limit: 4,
        sweet: [
            2.4,
            3.6
        ],
        note: "Three seconds. It forgives nothing after four."
    },
    {
        id: "rusk",
        name: "Rusk",
        sub: "Twice baked",
        limit: 8,
        sweet: [
            4.5,
            7
        ],
        note: "Built like a brick. Give it time or it gives you nothing."
    },
    {
        id: "osmania",
        name: "Osmania",
        sub: "Sweet & salty",
        limit: 5,
        sweet: [
            2.8,
            4.4
        ],
        note: "Hyderabad's finest. Patient, but not a saint."
    },
    {
        id: "nankhatai",
        name: "Nankhatai",
        sub: "Ghee shortbread",
        limit: 2.6,
        sweet: [
            1.2,
            2.2
        ],
        note: "All ghee, no structure. Blink and it's soup."
    }
];
const visit = [
    {
        v: 1400,
        s: "",
        l: "Cuttings poured a day"
    },
    {
        v: 11,
        s: " min",
        l: "Every batch, start to glass"
    },
    {
        v: 9,
        s: "",
        l: "Biscuit jars on the counter"
    },
    {
        v: 17,
        s: " hrs",
        l: "Open, every single day"
    }
];
const day = [
    {
        t: "6:00",
        what: "First boil. Ginger gets pounded, the shutters go up."
    },
    {
        t: "8:30",
        what: "Bun maska comes out of the oven. Office crowd, two deep."
    },
    {
        t: "13:00",
        what: "Keema pav till it runs out — usually by half past."
    },
    {
        t: "16:30",
        what: "The rush. Four hundred cuttings in an hour."
    },
    {
        t: "23:00",
        what: "Last pour. The pan gets scrubbed for tomorrow."
    }
];
const reviews = [
    {
        quote: "The chai tastes like the one outside my college gate in 2009, except I can sit down and nobody is honking at me.",
        name: "Tanvi R.",
        place: "Colaba"
    },
    {
        quote: "I have lost four glucose biscuits to the dunk test on their website and zero at the actual counter. Three seconds. It works.",
        name: "Imran S.",
        place: "Byculla"
    },
    {
        quote: "Bun maska with a slab of butter you could tile a floor with. I come twice a week and I regret nothing.",
        name: "Karan J.",
        place: "Churchgate"
    },
    {
        quote: "We hold our Monday stand-up here now. Eleven of us, eleven cuttings, ₹220. Cheapest meeting room in Fort.",
        name: "Priya N.",
        place: "Fort"
    },
    {
        quote: "Brought my Chennai in-laws expecting a fight. They ordered a second filter kaapi. That's the review.",
        name: "Arjun V.",
        place: "Matunga"
    }
];
const inr = (n)=>`₹${n.toLocaleString("en-IN")}`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/story/timeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * One scroll progress value (0 → 1 across the pinned story) drives both the WebGL rig and the
 * HTML overlay timeline. Every beat is a [start, end] window in that progress space.
 */ __turbopack_context__.s([
    "BEAT",
    ()=>BEAT,
    "COVER_START",
    ()=>COVER_START,
    "STAGE_AT",
    ()=>STAGE_AT
]);
const COVER_START = 0.93;
const BEAT = {
    heroOut: [
        0.02,
        0.085
    ],
    sip: [
        0.03,
        0.15
    ],
    statsIn: [
        0.055,
        0.11
    ],
    statsOut: [
        0.15,
        0.185
    ],
    glassAway: [
        0.165,
        0.215
    ],
    night: [
        0.185,
        0.235
    ],
    panIn: [
        0.19,
        0.245
    ],
    flame: [
        0.228,
        0.255
    ],
    spice: [
        0.25,
        0.325
    ],
    brewCopyIn: [
        0.245,
        0.275
    ],
    brewCopyOut: [
        0.335,
        0.35
    ],
    tea: [
        0.305,
        0.365
    ],
    steep: [
        0.33,
        0.395
    ],
    milkCopyIn: [
        0.36,
        0.39
    ],
    milk: [
        0.385,
        0.445
    ],
    mix: [
        0.425,
        0.472
    ],
    milkCopyOut: [
        0.452,
        0.466
    ],
    boil: [
        0.465,
        0.545
    ],
    boilCopyIn: [
        0.47,
        0.5
    ],
    boilCopyOut: [
        0.54,
        0.555
    ],
    day: [
        0.535,
        0.578
    ],
    lift: [
        0.545,
        0.602
    ],
    pour: [
        0.596,
        0.686
    ],
    pourCopyIn: [
        0.6,
        0.63
    ],
    pourCopyOut: [
        0.68,
        0.695
    ],
    panAway: [
        0.682,
        0.722
    ],
    biscuitIn: [
        0.695,
        0.732
    ],
    dunkCopyIn: [
        0.7,
        0.73
    ],
    dunk: [
        0.732,
        0.756
    ],
    soak: [
        0.748,
        0.792
    ],
    liftB: [
        0.792,
        0.812
    ],
    dunkCopyOut: [
        0.8,
        0.812
    ],
    snap: [
        0.812,
        0.842
    ],
    oopsIn: [
        0.814,
        0.832
    ],
    oopsOut: [
        0.85,
        0.862
    ],
    table: [
        0.846,
        0.916
    ],
    spreadCopyIn: [
        0.876,
        0.91
    ],
    tableTurn: [
        0.9,
        0.935
    ],
    cover: [
        COVER_START,
        1
    ]
};
const STAGE_AT = [
    0.25,
    0.33,
    0.385,
    0.465,
    0.596,
    0.732,
    0.846
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp,
    "cn",
    ()=>cn,
    "easeInOut",
    ()=>easeInOut,
    "easeInOutQuint",
    ()=>easeInOutQuint,
    "easeOut",
    ()=>easeOut,
    "lerp",
    ()=>lerp,
    "pad",
    ()=>pad,
    "seg",
    ()=>seg
]);
function clamp(v, a = 0, b = 1) {
    return Math.min(b, Math.max(a, v));
}
function lerp(a, b, t) {
    return a + (b - a) * t;
}
function seg(p, a, b) {
    return clamp((p - a) / (b - a));
}
function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
}
function easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
}
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
function pad(n) {
    return String(n).padStart(2, "0");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_1a6uynb7l5l_5._.js.map