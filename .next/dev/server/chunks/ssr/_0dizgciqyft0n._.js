(()=>{"use strict";module.exports = [
"[project]/components/motion/Counter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Counter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Counter({ value, suffix = "", decimals = 0, className }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        const tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(obj, {
            v: value,
            duration: 1.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true
            },
            onUpdate: ()=>{
                el.textContent = obj.v.toLocaleString("en-IN", {
                    minimumFractionDigits: decimals,
                    maximumFractionDigits: decimals
                }) + suffix;
            }
        });
        return ()=>{
            tween.kill();
        };
    }, [
        value,
        suffix,
        decimals,
        reduced
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/components/motion/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Reveal({ children, className, delay = 0, lines, as: Tag = "div" }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                if (delay) {
                    setTimeout(()=>el.classList.add("is-in"), delay * 1000);
                } else {
                    el.classList.add("is-in");
                }
                io.disconnect();
            }
        }, {
            rootMargin: "0px 0px -12% 0px",
            threshold: 0.05
        });
        io.observe(el);
        return ()=>io.disconnect();
    }, [
        delay
    ]);
    if (lines) {
        const parts = lines.split("\n");
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
            ref: ref,
            "data-reveal": true,
            className: className,
            children: parts.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "line-mask",
                    style: {
                        transitionDelay: `${i * 80}ms`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ref: ref,
        "data-reveal": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(className),
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
}),
"[project]/components/sections/DunkSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DunkSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$DunkScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/story/DunkScene.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function DunkSection() {
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("glucose");
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [elapsed, setElapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bests, setBests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const curDunkable = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dunkables"].find((d)=>d.id === selected) || __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dunkables"][0];
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Load personal bests
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const stored = localStorage.getItem("tapri:dunk:bests");
            if (stored) setBests(JSON.parse(stored));
        } catch  {}
    }, []);
    const handleStart = (e)=>{
        e.preventDefault();
        if (state === "broken") {
            setState("idle");
            setElapsed(0);
            setResult(null);
            return;
        }
        setState("dunking");
        setResult(null);
        startRef.current = performance.now();
        const tick = ()=>{
            const now = performance.now();
            const sec = (now - startRef.current) / 1000;
            setElapsed(sec);
            if (sec >= curDunkable.limit) {
                setState("broken");
                setResult("SNAP! Broken into the chai. We’ll bring a spoon.");
                if (timerRef.current) cancelAnimationFrame(timerRef.current);
                return;
            }
            timerRef.current = requestAnimationFrame(tick);
        };
        timerRef.current = requestAnimationFrame(tick);
    };
    const handleEnd = ()=>{
        if (state !== "dunking") return;
        if (timerRef.current) cancelAnimationFrame(timerRef.current);
        const time = elapsed;
        const [min, max] = curDunkable.sweet;
        if (time >= min && time <= max) {
            setState("safe");
            const currentBest = bests[selected];
            const mid = (min + max) / 2;
            const isNewBest = !currentBest || Math.abs(time - mid) < Math.abs(currentBest - mid);
            if (isNewBest) {
                const nextBests = {
                    ...bests,
                    [selected]: Number(time.toFixed(1))
                };
                setBests(nextBests);
                try {
                    localStorage.setItem("tapri:dunk:bests", JSON.stringify(nextBests));
                } catch  {}
                setResult(`NEW PERSONAL BEST! (${time.toFixed(1)}s) ★ Malty, warm, holds its spine.`);
            } else {
                setResult(`PERFECT DUNK! (${time.toFixed(1)}s) Malty, warm, holds its spine.`);
            }
        } else if (time < min) {
            setState("safe");
            setResult(`Under-dunked (${time.toFixed(1)}s). Still bone-dry inside.`);
        } else {
            setState("broken");
            setResult(`Four seconds! Saturated and dropped to the bottom.`);
        }
    };
    const handleReset = ()=>{
        if (timerRef.current) cancelAnimationFrame(timerRef.current);
        setState("idle");
        setElapsed(0);
        setResult(null);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        handleReset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        selected
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "dunk",
        className: "relative bg-deep text-ivory py-28 md:py-36",
        "data-theme": "dark",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-x",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow !text-ivory/50",
                            children: "The dunk test"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/DunkSection.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            as: "h2",
                            className: "fat text-[clamp(2.6rem,7vw,5.5rem)] leading-none text-ivory",
                            children: [
                                "Hold to dunk. ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-kesar italic font-normal",
                                    children: "Let go in time."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 104,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/DunkSection.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "body-sm mt-4 text-ivory/70 max-w-xl",
                            children: "A physics test of structural integrity. Every biscuit has a precise sweet spot before the matrix dissolves. Pick your biscuit, press and hold the button, and release before it collapses."
                        }, void 0, false, {
                            fileName: "[project]/components/sections/DunkSection.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/DunkSection.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 grid grid-cols-12 gap-8 lg:gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-12 lg:col-span-5 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dunkables"].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSelected(d.id);
                                            },
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col p-4 rounded-xl text-left border transition-all duration-300", selected === d.id ? "border-kesar bg-kesar/15 text-ivory shadow-lg" : "border-ivory/15 bg-white/5 text-ivory/60 hover:border-ivory/40 hover:text-ivory"),
                                            "data-cursor": "link",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[0.6rem] uppercase tracking-wider text-kesar",
                                                    children: d.sub
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fat text-xl mt-1",
                                                    children: d.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[0.62rem] mt-2 opacity-70",
                                                    children: [
                                                        "Limit: ",
                                                        d.limit,
                                                        "s"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, d.id, true, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-ivory/10 bg-white/5 p-4 text-sm text-ivory/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[0.6rem] uppercase text-kesar tracking-wider block mb-1",
                                            children: "Baker’s Note:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        curDunkable.note
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-baseline justify-between border-y border-ivory/15 py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-xs uppercase tracking-widest text-ivory/60",
                                                    children: "Timer"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this),
                                                bests[selected] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-kesar/20 px-2.5 py-0.5 font-mono text-[0.6rem] font-bold text-kesar border border-kesar/30",
                                                    children: [
                                                        "★ Best: ",
                                                        bests[selected],
                                                        "s"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-baseline gap-1 font-mono",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-5xl font-bold tabular-nums", state === "broken" ? "text-accent" : state === "safe" ? "text-leaf" : "text-ivory"),
                                                    children: elapsed.toFixed(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl text-ivory/50",
                                                    children: "s"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onMouseDown: handleStart,
                                        onMouseUp: handleEnd,
                                        onMouseLeave: handleEnd,
                                        onTouchStart: handleStart,
                                        onTouchEnd: handleEnd,
                                        onTouchCancel: handleEnd,
                                        "data-cursor": "cta",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("tapri-hold w-full rounded-full py-5 text-center font-body text-base font-bold uppercase tracking-widest shadow-2xl transition-all duration-300 select-none", state === "dunking" ? "bg-accent scale-95 text-white ring-4 ring-accent/40" : state === "broken" ? "bg-paper text-ink hover:bg-ivory" : "bg-kesar text-ink hover:bg-kesar/90 hover:scale-[1.02]"),
                                        children: state === "dunking" ? "HOLDING... RELEASE TO LIFT!" : state === "broken" ? "TRY AGAIN (TAP)" : "PRESS & HOLD TO DUNK"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/DunkSection.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-xl p-4 text-center font-mono text-xs font-semibold uppercase tracking-wider animate-[tapri-still-in_0.4s_ease-out]", state === "broken" ? "bg-accent/20 text-accent border border-accent/40" : "bg-leaf/20 text-pista border border-leaf/40"),
                                    children: result
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/DunkSection.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-12 lg:col-span-7 aspect-[4/3] rounded-3xl overflow-hidden bg-black/30 border border-ivory/10 shadow-inner relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$DunkScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    biscuitId: selected,
                                    state: state,
                                    elapsed: elapsed,
                                    limit: curDunkable.limit
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-4 left-6 right-6 flex items-center justify-between font-mono text-[0.6rem] text-ivory/50 bg-deep/80 backdrop-blur-sm px-4 py-2 rounded-full border border-ivory/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Target: ",
                                                curDunkable.sweet[0],
                                                "s – ",
                                                curDunkable.sweet[1],
                                                "s"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-kesar font-semibold",
                                            children: [
                                                "Max: ",
                                                curDunkable.limit,
                                                "s"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/DunkSection.tsx",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/DunkSection.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/DunkSection.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/DunkSection.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/DunkSection.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/DunkSection.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/ManifestoSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManifestoSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion/Reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function ManifestoSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "manifesto",
        className: "relative bg-paper text-ink pb-28 pt-24 md:pb-40 md:pt-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "tapri-scallop text-paper",
                viewBox: "0 0 1200 24",
                preserveAspectRatio: "none",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow mb-4",
                                children: "The house rules"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ManifestoSection.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                as: "h2",
                                className: "fat text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] tracking-tight",
                                children: [
                                    "How we brew. ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 grid grid-cols-12 gap-8 lg:gap-12 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-12 lg:col-span-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "group relative overflow-hidden rounded-2xl bg-deep shadow-2xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-[4/5] w-full overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-6 left-6 right-6 text-ivory",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[0.6rem] uppercase tracking-[0.2em] text-kesar",
                                                            children: "Rule 03 — The Long Pull"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 42,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "fat mt-1 text-2xl md:text-3xl",
                                                            children: "One metre from pan to rim."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 43,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                delay: 0.1,
                                                className: "relative aspect-[4/3] rounded-xl overflow-hidden shadow-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-ink/20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                delay: 0.2,
                                                className: "relative aspect-[4/3] rounded-xl overflow-hidden shadow-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-ink/20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-12 lg:col-span-5 space-y-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "rounded-2xl border border-ink/15 bg-cream/80 p-8 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between border-b border-ink/10 pb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink/60",
                                                        children: "FIG 01.1 — GLASS BLUEPRINT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative my-6 flex justify-center py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 240 300",
                                                    className: "h-64 w-auto text-ink/80",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                            points: "50,50 190,50 172,255 68,255",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2.5",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                            points: "63,130 177,130 168,230 72,230",
                                                            fill: "#c98a4f",
                                                            fillOpacity: "0.35"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "flex gap-4 border-t border-ink/10 pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-sm font-bold text-accent",
                                                        children: r.n
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "fat text-lg text-ink",
                                                                children: r.t
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/ManifestoSection.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/components/sections/MenuSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Still$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/Still.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$turntable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/turntable.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/Nav.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
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
;
function MenuCard({ item }) {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cheering, setCheering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleTap = async ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToBasket"])({
            id: item.id,
            name: item.name,
            price: item.price,
            sub: item.sub
        }, 1);
        setCheering(true);
        setTimeout(()=>setCheering(false), 900);
        const tt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$turntable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTurntable"])();
        if (!containerRef.current) return;
        tt.use(item.id);
        tt.mount(containerRef.current);
        setActive(true);
        const state = {
            hop: 0,
            spin: 0,
            sweep: 0,
            act: 0
        };
        animRef.current?.kill();
        animRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(state, {
            hop: 1,
            spin: 1,
            sweep: 1,
            act: 1,
            duration: 1.4,
            ease: "power2.out",
            onUpdate: ()=>{
                tt.apply(state);
                tt.render();
            },
            onComplete: ()=>{
                setActive(false);
                tt.unmount();
            }
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            animRef.current?.kill();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: handleTap,
        "data-cursor": "3d",
        className: "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ink/10 bg-cream p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-ink/30 hover:shadow-xl cursor-pointer",
        style: {
            backgroundColor: `${item.tint}33`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute right-4 top-4 z-30 rounded-full bg-accent px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-ivory shadow-lg transition-all duration-300 pointer-events-none", cheering ? "scale-100 opacity-100 -translate-y-1" : "scale-75 opacity-0 translate-y-2"),
                children: item.cheer
            }, void 0, false, {
                fileName: "[project]/components/sections/MenuSection.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[0.55rem] uppercase tracking-[0.2em] text-ink/50",
                                        children: item.sub
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/MenuSection.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "fat mt-1 text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/MenuSection.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/MenuSection.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "fat text-xl md:text-2xl text-ink font-semibold",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inr"])(item.price)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/MenuSection.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/MenuSection.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "body-sm mt-3 text-ink/75 line-clamp-3",
                        children: item.notes
                    }, void 0, false, {
                        fileName: "[project]/components/sections/MenuSection.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-wrap gap-1.5",
                        children: item.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-paper/80 px-2.5 py-0.5 font-mono text-[0.55rem] font-medium tracking-wider text-ink/70",
                                children: t
                            }, t, false, {
                                fileName: "[project]/components/sections/MenuSection.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/MenuSection.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/MenuSection.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-6 aspect-square w-full overflow-hidden rounded-xl bg-ivory/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: "absolute inset-0 z-20 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/MenuSection.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Still$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        still: `item:${item.id}`,
                        alt: item.name,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-full w-full transition-opacity duration-300", active ? "opacity-0" : "opacity-100")
                    }, void 0, false, {
                        fileName: "[project]/components/sections/MenuSection.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-deep/80 px-3 py-1 text-ivory backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-1.5 w-1.5 rounded-full bg-kesar animate-ping"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/MenuSection.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[0.55rem] tracking-wider uppercase",
                                children: item.verb
                            }, void 0, false, {
                                fileName: "[project]/components/sections/MenuSection.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/MenuSection.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/MenuSection.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/MenuSection.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function MenuSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "menu",
        className: "relative bg-ivory text-ink py-28 md:py-36",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-x",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ink/15 pb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow mb-3",
                                    children: "On the counter"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    as: "h2",
                                    className: "fat text-[clamp(2.6rem,7vw,5.5rem)] leading-none",
                                    children: [
                                        "Freshly made. ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-accent italic font-normal",
                                            children: "Boiled to order."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/MenuSection.tsx",
                                            lineNumber: 121,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/MenuSection.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-xs font-mono text-[0.65rem] uppercase leading-relaxed tracking-wider text-ink/60",
                            children: "Tap any live 3D item to interact and add it to your order."
                        }, void 0, false, {
                            fileName: "[project]/components/sections/MenuSection.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/MenuSection.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menu"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuCard, {
                            item: item
                        }, item.id, false, {
                            fileName: "[project]/components/sections/MenuSection.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/MenuSection.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-28 border-t border-ink/15 pt-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow mb-2",
                                            children: "From the kitchen"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/MenuSection.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "fat text-3xl md:text-4xl",
                                            children: "Morning plates & bakes"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/MenuSection.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[0.62rem] uppercase tracking-widest text-ink/60",
                                    children: "Available till 1:00 pm"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/MenuSection.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kitchen"].map((dish)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToBasket"])({
                                            id: dish.id,
                                            name: dish.name,
                                            price: dish.price,
                                            sub: dish.sub
                                        }, 1),
                                    "data-cursor": "cta",
                                    className: "group relative flex flex-col overflow-hidden rounded-2xl bg-cream border border-ink/10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-[4/3] w-full overflow-hidden bg-paper",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                    src: dish.photo,
                                                    alt: dish.alt,
                                                    fill: true,
                                                    sizes: "(max-width: 768px) 100vw, 25vw",
                                                    className: "object-cover transition-transform duration-700 group-hover:scale-105"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/MenuSection.tsx",
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 flex flex-col justify-between flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "fat text-xl text-ink group-hover:text-accent transition-colors",
                                                                    children: dish.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "fat text-lg text-ink font-semibold",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inr"])(dish.price)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                                                    lineNumber: 168,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/sections/MenuSection.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "body-sm mt-1 text-ink/60 text-xs",
                                                            children: dish.sub
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/MenuSection.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 flex items-center justify-between border-t border-ink/10 pt-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[0.55rem] uppercase tracking-wider text-ink/40",
                                                            children: "Order for table"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/MenuSection.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-xs text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity",
                                                            children: "+ Add"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/MenuSection.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/MenuSection.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, dish.id, true, {
                                    fileName: "[project]/components/sections/MenuSection.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/MenuSection.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/MenuSection.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/MenuSection.tsx",
            lineNumber: 115,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/MenuSection.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/ReviewsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion/Reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ReviewsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "reviews",
        className: "relative bg-ivory text-ink py-28 md:py-36 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-x",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow mb-3",
                            children: "Words from the counter"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ReviewsSection.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            as: "h2",
                            className: "fat text-[clamp(2.6rem,7vw,5.5rem)] leading-none",
                            children: [
                                "The regulars. ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 grid grid-cols-12 gap-8 items-stretch",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-12 lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-deep",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-6 left-6 text-ivory",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[0.6rem] uppercase tracking-widest text-kesar",
                                            children: "Table 04"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ReviewsSection.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-12 lg:col-span-6 flex flex-col justify-between rounded-2xl border border-ink/15 bg-cream p-8 md:p-10 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "40",
                                    height: "32",
                                    viewBox: "0 0 40 32",
                                    fill: "none",
                                    className: "text-kesar opacity-70",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                    className: "fat text-2xl md:text-3xl text-ink leading-snug my-6",
                                    children: [
                                        "“",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reviews"][0].quote,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-ink/10 pt-4 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fat text-lg text-ink block",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reviews"][0].name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ReviewsSection.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[0.6rem] uppercase tracking-widest text-ink/50",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reviews"][0].place
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reviews"].slice(1).map((rev, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-between rounded-2xl border border-ink/10 bg-cream/70 p-6 shadow-sm hover:border-ink/25 hover:shadow-md transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 border-t border-ink/10 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "fat text-base text-ink block",
                                            children: rev.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ReviewsSection.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-20 overflow-hidden border-y border-ink/15 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "marquee-track flex gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-ink/70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "First, chai"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Ginger pounded, never grated"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Three boils, no fewer"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "14 Homi Mody Street, Fort"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Glucose biscuits baked daily"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "First boil at 6 am"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "First, chai"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Ginger pounded, never grated"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Three boils, no fewer"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "14 Homi Mody Street, Fort"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Glucose biscuits baked daily"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "First boil at 6 am"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ReviewsSection.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/components/sections/VisitSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VisitSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Counter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion/Counter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/motion/Reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function useMumbaiTime() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [timeStr, setTimeStr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const update = ()=>{
            // Calculate Mumbai time (UTC + 5:30)
            const now = new Date();
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const mumbai = new Date(utc + 3600000 * 5.5);
            const hours = mumbai.getHours();
            const mins = mumbai.getMinutes();
            setIsOpen(hours >= 6 && hours < 23);
            setTimeStr(`${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")} IST`);
        };
        update();
        const interval = setInterval(update, 10000);
        return ()=>clearInterval(interval);
    }, []);
    return {
        isOpen,
        timeStr
    };
}
function VisitSection() {
    const { isOpen, timeStr } = useMumbaiTime();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "visit",
        className: "relative bg-paper text-ink py-28 md:py-36",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-x",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ink/15 pb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow mb-3",
                                    children: "14 Homi Mody Street, Fort"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    as: "h2",
                                    className: "fat text-[clamp(2.6rem,7vw,5.5rem)] leading-none",
                                    children: [
                                        "The café itself. ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-accent italic font-normal",
                                            children: "Pull up a bentwood chair."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                            lineNumber: 42,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/VisitSection.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 rounded-full border border-ink/15 bg-cream px-5 py-2.5 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `h-2.5 w-2.5 rounded-full ${isOpen ? "bg-leaf animate-pulse" : "bg-accent"}`
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-xs font-bold uppercase tracking-wider text-ink",
                                    children: [
                                        isOpen ? "Open now" : "Closed now",
                                        " · ",
                                        timeStr
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/VisitSection.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/VisitSection.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-ink/15 pb-14",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visit"].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "fat text-[clamp(3rem,6vw,5rem)] leading-none text-ink",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Counter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        value: stat.v,
                                        suffix: stat.s
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/VisitSection.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[0.62rem] uppercase tracking-wider text-ink/60 mt-3",
                                    children: stat.l
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/sections/VisitSection.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/VisitSection.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 grid grid-cols-12 gap-10 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-12 lg:col-span-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$motion$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xl bg-deep",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                            src: "/assets/photos/interior.webp",
                                            alt: "Inside BR-Tapri: marble tables, warm brass light, wooden shelves lined with biscuit jars",
                                            fill: true,
                                            sizes: "(max-width: 1024px) 100vw, 60vw",
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-6 left-6 right-6 text-ivory flex flex-col sm:flex-row sm:items-end justify-between gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[0.6rem] uppercase tracking-widest text-kesar",
                                                            children: "Fort, Mumbai"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "fat text-2xl mt-1",
                                                            children: "A minute off Flora Fountain"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-ivory/70 mt-1",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].address
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].address)}`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    "data-cursor": "cta",
                                                    className: "inline-flex items-center gap-2 rounded-full bg-ivory/20 px-4 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-ivory backdrop-blur-sm border border-ivory/30 hover:bg-ivory hover:text-ink transition-colors shrink-0",
                                                    children: "Directions ↗"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-ink/10 bg-cream p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[0.55rem] uppercase tracking-widest text-ink/50",
                                                    children: "Hours"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "fat text-lg mt-1 text-ink",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].hours
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-ink/60 mt-1",
                                                    children: "No closing on holidays. Chai does not take a holiday."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-ink/10 bg-cream p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-[0.55rem] uppercase tracking-widest text-ink/50",
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "fat text-lg mt-1 text-ink",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].phone.replace(/[^0-9+]/g, "")}`,
                                                        className: "hover:text-accent transition-colors",
                                                        "data-cursor": "link",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/VisitSection.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-ink/60 mt-1",
                                                    children: "For counter reservations and catering orders."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/VisitSection.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-12 lg:col-span-5 rounded-2xl border border-ink/15 bg-cream p-8 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "fat text-2xl md:text-3xl border-b border-ink/10 pb-4 text-ink",
                                    children: "A day at the tapri"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-[0.6rem] uppercase tracking-widest text-ink/50 mt-2",
                                    children: "The daily rhythm of Fort"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 space-y-6",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["day"].map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-sm font-bold text-accent shrink-0 w-14",
                                                    children: d.t
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-l border-ink/15 pl-4 pb-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "body-sm text-ink-soft leading-snug",
                                                        children: d.what
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/VisitSection.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/sections/VisitSection.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VisitSection.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/VisitSection.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/VisitSection.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/VisitSection.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/VisitSection.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/site/CartDrawer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function CartDrawer({ open, onClose, items, onUpdateQty, onRemoveItem, onClearCart }) {
    const [tableNo, setTableNo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("04");
    const [ordered, setOrdered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [orderNum, setOrderNum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(108);
    const subtotal = items.reduce((sum, item)=>sum + item.price * item.count, 0);
    const gst = Math.round(subtotal * 0.05);
    const total = subtotal + gst;
    const totalCount = items.reduce((sum, item)=>sum + item.count, 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onKey = (e)=>{
            if (e.key === "Escape") onClose();
        };
        if (open) {
            window.addEventListener("keydown", onKey);
            window.__lenis?.stop();
            document.documentElement.classList.add("lenis-stopped");
        } else {
            window.__lenis?.start();
            document.documentElement.classList.remove("lenis-stopped");
            // Reset order confirmation state on close
            setTimeout(()=>setOrdered(false), 500);
        }
        return ()=>{
            window.removeEventListener("keydown", onKey);
            window.__lenis?.start();
            document.documentElement.classList.remove("lenis-stopped");
        };
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-[70] bg-deep/60 backdrop-blur-sm transition-opacity duration-500", open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"),
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/site/CartDrawer.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                id: "cart-drawer",
                role: "dialog",
                "aria-label": "Table Order",
                "aria-modal": "true",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-y-0 right-0 z-[75] flex w-full max-w-md flex-col bg-ivory text-ink shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]", open ? "translate-x-0" : "translate-x-full"),
                "data-lenis-prevent": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-ink/15 px-6 py-5 bg-paper/60",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[0.6rem] uppercase tracking-widest text-ink/60",
                                        children: "Counter Ticket"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                "data-cursor": "cta",
                                className: "flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-ivory transition-colors",
                                "aria-label": "Close order ticket",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 14 14",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    ordered ? /* Order Confirmed Screen */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-col items-center justify-center p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-16 w-16 items-center justify-center rounded-full bg-kesar/20 text-accent mb-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "32",
                                    height: "32",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-sm text-ink/70 mt-3 max-w-xs",
                                children: "Ginger is pounded, glasses are steaming. The counter will bring your order hot to your table."
                            }, void 0, false, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    }, this) : items.length === 0 ? /* Empty State */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-col items-center justify-center p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-16 w-16 items-center justify-center rounded-full bg-paper text-ink/40 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "28",
                                    height: "28",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site/CartDrawer.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "3",
                                            y1: "6",
                                            x2: "21",
                                            y2: "6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site/CartDrawer.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "fat text-2xl text-ink",
                                children: "The glass is empty"
                            }, void 0, false, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-sm text-ink/65 mt-2 max-w-xs",
                                children: "Tap any 3D item on the counter or morning plate from the kitchen to add it to your order."
                            }, void 0, false, {
                                fileName: "[project]/components/site/CartDrawer.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                    }, this) : /* Items List */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-ink/10 px-6 py-2.5 bg-paper/30 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-ink/60",
                                        children: "Table:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 font-mono text-xs",
                                        children: [
                                            "02",
                                            "04",
                                            "07",
                                            "Counter"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setTableNo(t),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-0.5 rounded transition-colors", tableNo === t ? "bg-ink text-ivory font-bold" : "text-ink/60 hover:text-ink hover:bg-ink/5"),
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-6 space-y-4",
                                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-4 rounded-xl border border-ink/10 bg-cream p-4 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "fat text-lg text-ink truncate",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, this),
                                                    item.sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-mono text-[0.6rem] uppercase tracking-wider text-ink/50 truncate",
                                                        children: item.sub
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-xs font-bold text-accent mt-1 block",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inr"])(item.price * item.count)
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center rounded-full border border-ink/20 bg-paper/50 p-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-6 text-center font-mono text-xs font-bold tabular-nums",
                                                                children: item.count
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/site/CartDrawer.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>onRemoveItem(item.id),
                                                        className: "p-1 text-ink/40 hover:text-accent transition-colors",
                                                        "aria-label": `Remove ${item.name}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 16 16",
                                                            fill: "none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-ink/15 bg-paper/50 p-6 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 font-mono text-xs text-ink/70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tabular-nums font-semibold text-ink",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inr"])(subtotal)
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[0.65rem] text-ink/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Restaurant GST (5%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tabular-nums",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inr"])(gst)
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between border-t border-ink/10 pt-2 text-sm font-bold text-ink",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "fat text-base",
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/site/CartDrawer.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-base tabular-nums text-accent",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inr"])(total)
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handlePlaceOrder,
                                            "data-cursor": "cta",
                                            className: "w-full rounded-full bg-accent py-3.5 text-center font-body text-sm font-bold uppercase tracking-wider text-ivory shadow-lg hover:bg-accent-deep transition-colors",
                                            children: [
                                                "Send Order to Counter (",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inr"])(total),
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center font-mono text-[0.55rem] uppercase tracking-wider text-ink/45",
                                        children: [
                                            "Pay at counter when done · ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].hours
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
}),
"[project]/components/site/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Footer() {
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        "data-theme": "dark",
        className: "relative z-10 overflow-hidden bg-deep text-ivory",
        "aria-label": "Footer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x grid grid-cols-12 gap-x-6 gap-y-12 pb-10 pt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 md:col-span-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow !text-ivory/45",
                                children: "The regulars' list"
                            }, void 0, false, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fat mt-4 max-w-[17ch] text-[clamp(1.9rem,3.2vw,3rem)] leading-[1.08]",
                                children: [
                                    "Your first cutting is on us. ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                id: "newsletter",
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                    setDone(true);
                                },
                                className: "mt-8 flex max-w-md items-center gap-2 border-b border-ivory/25 pb-2 focus-within:border-ivory",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "tapri-news-email",
                                        className: "sr-only",
                                        children: "Email address"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/Footer.tsx",
                                        lineNumber: 15,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "col-span-6 md:col-span-2 md:col-start-7",
                        "aria-label": "Footer navigation",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow !text-ivory/45",
                                children: "Explore"
                            }, void 0, false, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-4 space-y-2 text-sm",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-6 md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow !text-ivory/45",
                                children: "On the counter"
                            }, void 0, false, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-4 space-y-2 text-sm",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menu"].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                        className: "col-span-12 not-italic md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow !text-ivory/45",
                                children: "Find us"
                            }, void 0, false, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm leading-relaxed text-ivory/75",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].address
                            }, void 0, false, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm text-ivory/75",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].hours
                            }, void 0, false, {
                                fileName: "[project]/components/site/Footer.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].phone.replace(/\s/g, "")}`,
                                className: "mt-3 block text-sm text-ivory/75 hover:text-ivory",
                                "data-cursor": "link",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].phone
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "container-x select-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "fat flex items-end justify-between whitespace-nowrap text-[15.5vw] leading-[0.95] text-ivory/[0.07]",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].wordmark,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mark"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x flex flex-col items-start justify-between gap-3 border-t border-ivory/10 py-6 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ivory/40 md:flex-row md:items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].name,
                            ". ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].product,
                            ", ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].place,
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site/Footer.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/components/site/Intro.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Intro,
    "onIntroDone",
    ()=>onIntroDone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function onIntroDone(fn) {
    if ("TURBOPACK compile-time truthy", 1) return ()=>{};
    //TURBOPACK unreachable
    ;
    const h = undefined;
}
function Intro() {
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("load");
    const fill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const finish = ()=>{
            window.__tapriIntroDone = true;
            window.dispatchEvent(new Event("tapri:intro-done"));
        };
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
        const onScene = ()=>{
            sceneReady = true;
        };
        window.addEventListener("tapri:scene-ready", onScene);
        (document.fonts?.ready ?? Promise.resolve()).then(()=>{
            target = Math.max(target, 50);
        });
        const tick = ()=>{
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
                setTimeout(()=>{
                    document.documentElement.classList.remove("lenis-stopped");
                    window.__lenis?.start();
                    finish();
                }, 650);
                setTimeout(()=>setPhase("done"), 1500);
                return;
            }
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return ()=>{
            cancelAnimationFrame(raf);
            window.removeEventListener("tapri:scene-ready", onScene);
            document.documentElement.classList.remove("lenis-stopped");
        };
    }, []);
    if (phase === "done") return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-[90] flex items-center justify-center bg-deep text-ivory transition-transform delay-300 duration-[900ms] ease-[cubic-bezier(.76,0,.24,1)]", phase === "lift" && "-translate-y-full"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-7",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            "aria-hidden": true,
                            className: "absolute -top-9 left-1/2 h-8 w-12 -translate-x-1/2 text-ivory/50",
                            viewBox: "0 0 48 32",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "animate-[tapri-steam_2.2s_ease-in-out_infinite]",
                                    d: "M12 30c-4-6 4-9 0-15s4-9 0-13"
                                }, void 0, false, {
                                    fileName: "[project]/components/site/Intro.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "animate-[tapri-steam_2.2s_ease-in-out_0.5s_infinite]",
                                    d: "M24 30c-4-6 4-9 0-15s4-9 0-13"
                                }, void 0, false, {
                                    fileName: "[project]/components/site/Intro.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-32 w-[5.5rem] overflow-hidden border-2 border-ivory/40 [clip-path:polygon(0_0,100%_0,84%_100%,16%_100%)]",
                            style: {
                                borderRadius: "0.4rem 0.4rem 0.9rem 0.9rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: fill,
                                    className: "absolute inset-0 translate-y-full bg-chai",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "absolute -top-3 left-0 h-4 w-[200%] animate-[tapri-wave_1.6s_linear_infinite] text-chai",
                                        viewBox: "0 0 200 16",
                                        preserveAspectRatio: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute inset-y-2 left-[22%] w-1.5 rounded-full bg-ivory/25"
                                }, void 0, false, {
                                    fileName: "[project]/components/site/Intro.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mark"], {
                            className: "h-8 text-ivory"
                        }, void 0, false, {
                            fileName: "[project]/components/site/Intro.tsx",
                            lineNumber: 78,
                            columnNumber: 51
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "fat text-[2.1rem] leading-none",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].wordmark
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ivory/50",
                    children: [
                        "brewing · ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/components/site/Logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mark",
    ()=>Mark,
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
;
;
;
function Mark({ className, chai = "var(--color-chai)", title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "6 3 20 24",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-8 w-auto", className),
        role: title ? "img" : undefined,
        "aria-label": title,
        "aria-hidden": title ? undefined : true,
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.5 11h13l-1.7 13.2a1.6 1.6 0 0 1-1.6 1.4h-6.4a1.6 1.6 0 0 1-1.6-1.4z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/site/Logo.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.9 15.6h10.2l-1 8.3a1 1 0 0 1-1 .9h-6.2a1 1 0 0 1-1-.9z",
                fill: chai
            }, void 0, false, {
                fileName: "[project]/components/site/Logo.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
function Logo({ className, compact = false, chai }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-2.5 text-current", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Mark, {
                className: compact ? "h-7" : "h-8",
                chai: chai
            }, void 0, false, {
                fileName: "[project]/components/site/Logo.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex flex-col leading-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "fat text-[1.5rem] leading-[1]",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].wordmark
                    }, void 0, false, {
                        fileName: "[project]/components/site/Logo.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-1 font-mono text-[0.5rem] uppercase tracking-[0.2em] opacity-60",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].product,
                            " · ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].place
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
}),
"[project]/components/site/Nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToBasket",
    ()=>addToBasket,
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$CartDrawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/CartDrawer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
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
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dark, setDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cartOpen, setCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bump, setBump] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let raf = 0;
        const onScroll = ()=>{
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(()=>setScrolled(window.scrollY > 40));
        };
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        const inside = new Set();
        const triggers = Array.from(document.querySelectorAll("[data-theme='dark']")).map((sec)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: sec,
                start: "top 44px",
                end: "bottom 44px",
                refreshPriority: -1,
                onToggle: (self)=>{
                    if (self.isActive) inside.add(sec);
                    else inside.delete(sec);
                    setDark(inside.size > 0);
                }
            }));
        const onBasket = (e)=>{
            const detail = e.detail;
            const addQty = detail?.add ?? 1;
            const item = detail?.item;
            if (item) {
                setItems((prev)=>{
                    const idx = prev.findIndex((i)=>i.id === item.id);
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
                });
            } else {
                // generic fallback (e.g. cutting chai)
                setItems((prev)=>{
                    const idx = prev.findIndex((i)=>i.id === "chai");
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
                });
            }
            setBump(true);
            setTimeout(()=>setBump(false), 450);
        };
        window.addEventListener("tapri:basket", onBasket);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(raf);
            triggers.forEach((t)=>t.kill());
            window.removeEventListener("tapri:basket", onBasket);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lenis = window.__lenis;
        if (open) lenis?.stop();
        else if (!cartOpen) lenis?.start();
        document.documentElement.classList.toggle("lenis-stopped", open || cartOpen);
    }, [
        open,
        cartOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onKey = (e)=>{
            if (e.key === "Escape") {
                setOpen(false);
                setCartOpen(false);
            }
        };
        window.addEventListener("keydown", onKey);
        return ()=>window.removeEventListener("keydown", onKey);
    }, []);
    const light = dark || open;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-x-0 top-0 z-50 transition-colors duration-500", light ? "text-ivory" : "text-ink"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    "aria-label": "Primary",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("container-x flex items-center justify-between transition-[height] duration-700", scrolled ? "h-16" : "h-[88px]"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#story",
                            className: "relative z-[60]",
                            "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].name} — back to top`,
                            "data-cursor": "link",
                            onClick: ()=>{
                                setOpen(false);
                                setCartOpen(false);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-[60] flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setCartOpen(true);
                                        setOpen(false);
                                    },
                                    "data-cursor": "cta",
                                    "aria-label": `Your table order — ${count} ${count === 1 ? "item" : "items"}`,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 items-center gap-2 rounded-full border px-3.5 font-mono text-[0.7rem] tabular-nums transition-[colors,transform] duration-300", light ? "border-ivory/30 hover:border-ivory" : "border-ink/20 hover:border-ink", bump && "scale-110"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            "aria-hidden": true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M2.5 6h11l-1.2 7.5H3.7z",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.3",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/site/Nav.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 87
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setOpen((o)=>!o);
                                        setCartOpen(false);
                                    },
                                    "aria-expanded": open,
                                    "aria-controls": "tapri-menu",
                                    "data-cursor": "cta",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 items-center gap-3 rounded-full px-5 font-body text-[0.8rem] font-semibold tracking-[0.02em] transition-colors duration-500", light ? "bg-ivory text-ink hover:bg-kesar" : "bg-ink text-ivory hover:bg-accent"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative block h-2.5 w-4",
                                            "aria-hidden": true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute left-0 h-px w-full bg-current transition-transform duration-500", open ? "top-1/2 rotate-45" : "top-0")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/site/Nav.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute left-0 h-px w-full bg-current transition-transform duration-500", open ? "top-1/2 -rotate-45" : "top-full")
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "tapri-menu",
                "aria-hidden": !open,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-[45] bg-deep text-ivory transition-[clip-path] duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)]", open ? "[clip-path:circle(150%_at_calc(100%-5rem)_2.75rem)]" : "pointer-events-none [clip-path:circle(0%_at_calc(100%-5rem)_2.75rem)]"),
                "data-lenis-prevent": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-x grid h-full grid-cols-12 gap-x-6 pb-10 pt-28 md:pt-32",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "col-span-12 flex flex-col justify-end gap-0.5 md:col-span-7",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: n.href,
                                        tabIndex: open ? 0 : -1,
                                        onClick: ()=>setOpen(false),
                                        "data-cursor": "link",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fat group flex items-baseline gap-5 text-[clamp(2.6rem,7vw,6rem)] leading-[1.12] transition-[transform,opacity,color] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:text-kesar", open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"),
                                        style: {
                                            transitionDelay: open ? `${0.14 + i * 0.06}s` : "0s"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-span-12 mt-10 flex flex-col justify-end gap-8 border-t border-ivory/15 pt-6 transition-opacity duration-700 md:col-span-4 md:col-start-9 md:mt-0 md:border-l md:border-t-0 md:pl-8 md:pt-0", open ? "opacity-100 delay-300" : "opacity-0"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow !text-ivory/45",
                                            children: "On the counter"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site/Nav.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "mt-3 space-y-2 text-sm text-ivory/75",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menu"].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center justify-between gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[0.62rem] text-ivory/45",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inr"])(f.price)
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-mono text-[0.6rem] uppercase leading-relaxed tracking-[0.14em] text-ivory/45",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].hours,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/site/Nav.tsx",
                                            lineNumber: 164,
                                            columnNumber: 123
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].address
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$CartDrawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/components/site/OfferBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OfferBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Intro$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/Intro.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function OfferBar() {
    const [shown, setShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [closed, setClosed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (sessionStorage.getItem("tapri-offer-closed")) {
            setClosed(true);
            return;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Intro$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onIntroDone"])(()=>setTimeout(()=>setShown(true), 1600));
    }, []);
    if (closed) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "region",
        "aria-label": "First cutting offer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-x-3 bottom-3 z-40 mx-auto max-w-[640px] transition-[transform,opacity] duration-700 ease-[cubic-bezier(.16,1,.3,1)] md:bottom-5", shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[140%] opacity-0"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: (e)=>{
                e.preventDefault();
                setDone(true);
            },
            className: "flex items-center gap-2 rounded-full border border-ink/10 bg-cream/95 py-1.5 pl-2 pr-1.5 text-ink shadow-[0_18px_40px_-18px_rgba(50,24,6,.5)] backdrop-blur-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-deep text-ivory",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mark"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "min-w-0 flex-1 truncate pl-1 text-[0.78rem] leading-tight",
                    children: done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Done — show the email at the counter for a ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
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
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                className: "font-semibold",
                                children: "First cutting's on us"
                            }, void 0, false, {
                                fileName: "[project]/components/site/OfferBar.tsx",
                                lineNumber: 22,
                                columnNumber: 134
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: " — leave your email, show it at the counter"
                            }, void 0, false, {
                                fileName: "[project]/components/site/OfferBar.tsx",
                                lineNumber: 22,
                                columnNumber: 193
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                !done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "tapri-offer-email",
                            className: "sr-only",
                            children: "Email address"
                        }, void 0, false, {
                            fileName: "[project]/components/site/OfferBar.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "hidden shrink-0 rounded-full bg-ink px-4 py-2 text-[0.75rem] font-semibold text-ivory transition-colors hover:bg-accent md:block",
                            "data-cursor": "cta",
                            children: "Get the pass"
                        }, void 0, false, {
                            fileName: "[project]/components/site/OfferBar.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-label": "Dismiss offer",
                    onClick: ()=>{
                        setClosed(true);
                        sessionStorage.setItem("tapri-offer-closed", "1");
                    },
                    className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink/50 hover:text-ink",
                    "data-cursor": "link",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "10",
                        height: "10",
                        viewBox: "0 0 10 10",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
}),
"[project]/components/site/Still.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Still
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Still({ still, alt, className, imgClassName }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [src, setSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        let alive = true;
        const io = new IntersectionObserver(([e])=>{
            if (!e.isIntersecting) return;
            io.disconnect();
            __turbopack_context__.A("[project]/lib/story/engine.ts [app-ssr] (ecmascript, async loader)").then(({ getStill })=>getStill(still)).then((u)=>{
                if (alive) setSrc(u);
            }).catch(()=>{});
        }, {
            rootMargin: "800px 800px"
        });
        io.observe(el);
        return ()=>{
            alive = false;
            io.disconnect();
        };
    }, [
        still
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        children: src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: alt,
            draggable: false,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("tapri-still-in h-full w-full select-none object-contain", imgClassName)
        }, void 0, false, {
            fileName: "[project]/components/site/Still.tsx",
            lineNumber: 25,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full animate-pulse bg-paper/30"
        }, void 0, false, {
            fileName: "[project]/components/site/Still.tsx",
            lineNumber: 27,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/site/Still.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/story/DunkScene.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DunkScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-ssr] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-ssr] (ecmascript) <export D as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/models.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/studio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/print.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const BASE = -0.55;
const SURF = BASE + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLASS"].LEVEL_MAX;
function DunkRig({ biscuitId, state, elapsed, limit }) {
    const { camera, gl, scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"])();
    const cam = camera;
    const lights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studioLights"])({
            shadows: true,
            reach: 3,
            mapSize: 1024
        }), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        scene.environment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studioEnvironment"])(gl);
        scene.environmentIntensity = 0.95;
        scene.add(lights);
        return ()=>{
            scene.remove(lights);
        };
    }, [
        gl,
        scene,
        lights
    ]);
    const glass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGlass"])();
        g.root.position.set(0, BASE, 0);
        g.setLevel(0.85);
        return g;
    }, []);
    const biscuits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        const kinds = [
            "glucose",
            "rusk",
            "osmania",
            "nankhatai"
        ];
        kinds.forEach((k)=>{
            const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDunkBiscuit"])(k);
            b.root.visible = false;
            map.set(k, b);
        });
        return map;
    }, []);
    const splash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDrops"])(16), []);
    const floor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](8, 8), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowMaterial"]({
            opacity: 0.22,
            color: "#3a1d0a"
        }));
        m.rotation.x = -Math.PI / 2;
        m.position.y = BASE;
        m.receiveShadow = true;
        return m;
    }, []);
    const curB = biscuits.get(biscuitId);
    const breakTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        biscuits.forEach((b, k)=>{
            b.root.visible = k === biscuitId;
        });
    }, [
        biscuitId,
        biscuits
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state === "broken") {
            breakTime.current = performance.now();
        }
    }, [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])((st)=>{
        const t = st.clock.elapsedTime;
        glass.chai.uTime.value = t;
        const hoverY = BASE + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLASS"].H + 0.35 + curB.half;
        const dunkY = SURF - 0.38 + curB.half;
        let targetY = hoverY;
        let split = false;
        let soak = -99;
        if (state === "dunking") {
            const p = Math.min(1, elapsed / 0.4);
            targetY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lerp"])(hoverY, dunkY, p);
            soak = Math.min(SURF - targetY, SURF - dunkY) + elapsed / limit * 0.15;
            curB.set({
                soak,
                split: false,
                wet: 1
            });
            glass.chai.uSlosh.value = Math.sin(t * 10) * 0.08;
        } else if (state === "safe") {
            targetY = hoverY;
            soak = 0.25;
            curB.set({
                soak,
                split: false,
                wet: 0.85
            });
            glass.chai.uSlosh.value = 0;
        } else if (state === "broken") {
            targetY = hoverY - 0.15;
            split = true;
            const brokenElapsed = (performance.now() - breakTime.current) / 1000;
            const dropK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(brokenElapsed / 0.35);
            curB.set({
                soak: 0.4,
                split: true,
                wet: 1
            });
            curB.hinge.rotation.x = dropK * 1.8;
            curB.hinge.position.y = -curB.half * 0.16 - dropK * dropK * 2.5;
            curB.hinge.position.z = dropK * 0.15;
            curB.hinge.visible = curB.root.position.y + curB.hinge.position.y > SURF - 0.2;
            if (brokenElapsed < 0.6) {
                splash.burst(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, SURF + 0.02, 0), brokenElapsed / 0.6, 0.7, 12);
            } else {
                splash.mesh.visible = false;
            }
            glass.chai.uSlosh.value = Math.sin(brokenElapsed * 20) * 0.25 * (1 - dropK);
        } else {
            // idle
            targetY = hoverY + Math.sin(t * 2) * 0.03;
            curB.set({
                soak: -99,
                split: false,
                wet: 1
            });
            curB.hinge.rotation.x = 0;
            curB.hinge.position.set(0, -curB.half * 0.16, 0);
            curB.hinge.visible = true;
            glass.chai.uSlosh.value = 0;
            splash.mesh.visible = false;
        }
        curB.root.position.y += (targetY - curB.root.position.y) * 0.15;
        curB.root.rotation.set(-0.06, Math.sin(t * 0.8) * 0.08 - 0.3, 0);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: floor
            }, void 0, false, {
                fileName: "[project]/components/story/DunkScene.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: glass.root
            }, void 0, false, {
                fileName: "[project]/components/story/DunkScene.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            Array.from(biscuits.values()).map((b, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                    object: b.root
                }, idx, false, {
                    fileName: "[project]/components/story/DunkScene.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: splash.mesh
            }, void 0, false, {
                fileName: "[project]/components/story/DunkScene.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/story/DunkScene.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
function DunkScene(props) {
    const [fonts, setFonts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontsReady"])().then(()=>setFonts(true));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full",
        children: fonts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            shadows: true,
            dpr: [
                1,
                1.5
            ],
            camera: {
                fov: 25,
                position: [
                    0,
                    0.4,
                    4.4
                ],
                near: 0.1,
                far: 40
            },
            gl: {
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
                toneMapping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NeutralToneMapping"],
                toneMappingExposure: 1.0
            },
            className: "!absolute inset-0",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DunkRig, {
                    ...props
                }, void 0, false, {
                    fileName: "[project]/components/story/DunkScene.tsx",
                    lineNumber: 162,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/story/DunkScene.tsx",
                lineNumber: 161,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/story/DunkScene.tsx",
            lineNumber: 153,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/story/DunkScene.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/story/StorySection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StorySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/timeline.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Magnetic.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Intro$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/Intro.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
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
;
const StoryScene = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/lib/story/engine.ts [app-ssr] (ecmascript, async loader)").then((m)=>({
            default: m.StoryScene
        })));
const at = (k)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"][k][0];
const len = (k)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"][k][1] - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"][k][0];
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
    const s = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stickers"][i], v = STK[i];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-stk": i,
        "data-shape": s.shape,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("tapri-sticker absolute opacity-0", v.pos),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "face",
            style: {
                background: v.bg,
                color: v.fg
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "edge"
                }, void 0, false, {
                    fileName: "[project]/components/story/StorySection.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "fat text-[clamp(2.2rem,3.6vw,3.4rem)] leading-[0.9]",
                    children: [
                        s.value,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
function StorySection() {
    const wrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const entrance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const stageText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stageNum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const secs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const boilN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setReady(true);
        const el = wrap.current;
        if (reduced) {
            entrance.current = 1;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(el.querySelectorAll("[data-in]"), {
                opacity: 1,
                yPercent: 0,
                y: 0
            });
        }
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context(()=>{
            let intro = null;
            if (!reduced) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set("[data-in='line'] > span", {
                    yPercent: 130
                });
                intro = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
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
            const off = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Intro$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onIntroDone"])(()=>intro?.play());
            let stage = -1, lastMl = -1, lastS = -1, lastB = -1;
            const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: el,
                start: "top top",
                end: "bottom bottom",
                onUpdate: (self)=>{
                    const p = self.progress;
                    progress.current = p;
                    let s = -1;
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STAGE_AT"].forEach((v, i)=>{
                        if (p >= v) s = i;
                    });
                    if (s !== stage) {
                        stage = s;
                        if (stageText.current && stageNum.current && s >= 0) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo([
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
                            stageText.current.textContent = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stages"][s];
                            stageNum.current.textContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(s + 1);
                        }
                    }
                    const m = Math.round((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].pour[0] + len("pour") * 0.07, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].pour[0] + len("pour") * 0.9) * 90);
                    if (m !== lastMl && ml.current) {
                        lastMl = m;
                        ml.current.textContent = String(m);
                    }
                    const sc = Math.round((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].soak[0], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].soak[1]) * 41);
                    if (sc !== lastS && secs.current) {
                        lastS = sc;
                        secs.current.textContent = (sc / 10).toFixed(1);
                        secs.current.parentElement.dataset.over = sc > 32 ? "1" : "0";
                    }
                    const bn = Math.min(3, 1 + Math.floor((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].boil[0], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].boil[1]) * 3));
                    if (bn !== lastB && boilN.current) {
                        lastB = bn;
                        boilN.current.textContent = String(bn);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(boilN.current, {
                            scale: 1.25
                        }, {
                            scale: 1,
                            duration: 0.5,
                            ease: "back.out(2)"
                        });
                    }
                }
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
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
            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stickers"].forEach((_, i)=>{
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
            });
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
            }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STAGE_AT"][0] - 0.01).fromTo("[data-readout-bar]", {
                scaleX: 0
            }, {
                scaleX: 1,
                duration: 0.91 - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STAGE_AT"][0]
            }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STAGE_AT"][0]).to("[data-readout]", {
                color: "#2a160c",
                duration: len("day")
            }, at("day")).to("[data-readout]", {
                opacity: 0,
                duration: 0.02
            }, 0.91);
            const block = (title, copy, inK, outK)=>{
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
            };
            block("[data-brew-title]", "[data-brew]", "brewCopyIn", "brewCopyOut");
            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spices"].forEach((_, i)=>{
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
            });
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
            return ()=>{
                off();
                st.kill();
                intro?.kill();
            };
        }, el);
        return ()=>ctx.revert();
    }, [
        reduced
    ]);
    const line = "block w-max overflow-hidden whitespace-nowrap pt-[0.14em] pb-[0.22em] -mt-[0.14em] -mb-[0.2em]";
    const h2 = "fat text-[clamp(2.3rem,9.6vw,3.2rem)] leading-[1.02] md:text-[clamp(2.8rem,5vw,5.4rem)]";
    const nightSpan = {
        top: `calc(${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].night[0] + 0.02} * (100% - 100svh))`,
        height: `calc(${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].day[0] + 0.018 - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].night[0] - 0.02} * (100% - 100svh) + 60px)`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: wrap,
        id: "story",
        className: "relative h-[1150svh] md:h-[1350vh]",
        "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].name} — how a glass of chai is made`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                "data-theme": "dark",
                className: "pointer-events-none absolute inset-x-0",
                style: nightSpan
            }, void 0, false, {
                fileName: "[project]/components/story/StorySection.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 h-[100svh] w-full overflow-hidden bg-ivory",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        "data-night": true,
                        className: "absolute inset-0 opacity-0",
                        style: {
                            background: "radial-gradient(70% 60% at 50% 58%, #4a2410 0%, #2c140a 46%, #170a05 100%)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "grain absolute inset-0 opacity-70"
                    }, void 0, false, {
                        fileName: "[project]/components/story/StorySection.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "fat leading-[0.9] text-ink",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-hero-a": true,
                                        className: "absolute left-[var(--gutter)] top-[calc(var(--nav-h)+1.25rem)] block text-[clamp(4.2rem,22vw,7rem)] md:top-[calc(var(--nav-h)+1rem)] md:text-[clamp(5rem,13.5vw,15rem)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-in": "line",
                                            className: line,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-hero-b": true,
                                        className: "absolute bottom-[max(10svh,7rem)] right-[var(--gutter)] block text-right text-[clamp(4.2rem,22vw,7rem)] md:bottom-[8svh] md:text-[clamp(5rem,13.5vw,15rem)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-in": "line",
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(line, "ml-auto"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-boilword": true,
                                "aria-hidden": true,
                                className: "fat absolute inset-x-0 top-[9%] text-center leading-[0.85] text-ivory/[0.09] opacity-0 text-[clamp(9rem,46vw,34rem)] md:top-[2%]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[0.5em]",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-10",
                        children: ready && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                            fallback: null,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StoryScene, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 z-20 text-ink",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-hero-copy": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-in": "fade",
                                        className: "pointer-events-auto absolute right-[var(--gutter)] top-[calc(var(--nav-h)+1.25rem)] hidden max-w-[28ch] text-right opacity-0 md:block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "body-sm text-ink/70",
                                                children: [
                                                    "A chai café in ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].place,
                                                    ". Ginger pounded every morning, milk boiled up three times, poured from as high as the arm goes."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 175,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 flex justify-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-in": "fade",
                                        className: "absolute bottom-[max(11svh,7.5rem)] left-[var(--gutter)] hidden max-w-[40ch] font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.14em] text-ink/55 opacity-0 md:block",
                                        children: [
                                            "Cutting chai · 90 ml · ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inr"])(20),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 178,
                                                columnNumber: 252
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].hours
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-hint": true,
                                        "data-in": "fade",
                                        className: "absolute bottom-[max(3.5svh,4.5rem)] left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap font-mono text-[0.58rem] uppercase tracking-[0.18em] text-ink/50 opacity-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative block h-8 w-px overflow-hidden bg-ink/15",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stickers"].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Sticker, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[max(13svh,8.5rem)] left-[var(--gutter)] max-w-[34ch] text-ivory md:bottom-[11svh]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-brew": true,
                                        className: "eyebrow mb-3 !text-ivory/55 opacity-0",
                                        children: "01 — 5:40 am, the first pan"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-brew-title": true,
                                        className: h2,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "absolute right-[var(--gutter)] top-[calc(var(--nav-h)+1rem)] space-y-2.5 text-right text-ivory md:top-[22%] md:space-y-3.5",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spices"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        "data-spice": i,
                                        className: "opacity-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "fat block text-[clamp(1.05rem,4.2vw,1.3rem)] leading-none md:text-[clamp(1.3rem,1.9vw,2rem)]",
                                                children: s.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[max(13svh,8.5rem)] left-[var(--gutter)] max-w-[34ch] text-ivory md:bottom-[11svh]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-milk": true,
                                        className: "eyebrow mb-3 !text-ivory/55 opacity-0",
                                        children: "03 — Milked"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-milk-title": true,
                                        className: h2,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[max(13svh,8.5rem)] left-[var(--gutter)] max-w-[34ch] text-ivory md:bottom-[11svh]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-boil": true,
                                        className: "eyebrow mb-3 !text-ivory/55 opacity-0",
                                        children: "04 — Boiled"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-boil-title": true,
                                        className: h2,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[max(13svh,8.5rem)] right-[var(--gutter)] max-w-[26ch] text-right text-ivory md:bottom-[13svh]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-boil": true,
                                        className: "body-sm text-ivory/70 opacity-0 max-md:hidden",
                                        children: "Let it climb to the rim, drop the flame, let it climb again. That is where the colour comes from."
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-[var(--gutter)] top-[calc(var(--nav-h)+1rem)] max-w-[34ch] md:top-1/2 md:-translate-y-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-pour": true,
                                        className: "eyebrow mb-3 opacity-0",
                                        children: "05 — Poured"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-pour-title": true,
                                        className: h2,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[max(13svh,8.5rem)] left-[var(--gutter)] md:bottom-[11svh] md:left-auto md:right-[var(--gutter)] md:text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-pour": true,
                                        className: "flex items-start gap-1 opacity-0 md:justify-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                ref: ml,
                                                className: "fat text-[clamp(4.2rem,16vw,6rem)] leading-[0.8] tabular-nums text-accent md:text-[clamp(5rem,9vw,9rem)]",
                                                children: "0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 238,
                                                columnNumber: 86
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-pour": true,
                                        className: "mt-3 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink/55 opacity-0",
                                        children: [
                                            "One cutting · ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inr"])(20),
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[max(13svh,8.5rem)] left-[var(--gutter)] max-w-[34ch] md:bottom-[11svh]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-dunk": true,
                                        className: "eyebrow mb-3 opacity-0",
                                        children: "06 — Dunked"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-dunk-title": true,
                                        className: h2,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-[var(--gutter)] top-[calc(var(--nav-h)+1rem)] text-right md:top-auto md:bottom-[11svh]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-dunk": true,
                                        className: "group flex items-start justify-end gap-1 text-ink opacity-0 data-[over='1']:text-accent",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                ref: secs,
                                                className: "fat text-[clamp(3.6rem,14vw,5rem)] leading-[0.8] tabular-nums md:text-[clamp(5rem,9vw,9rem)]",
                                                children: "0.0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/story/StorySection.tsx",
                                                lineNumber: 252,
                                                columnNumber: 126
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-[var(--gutter)] top-[calc(var(--nav-h)+0.5rem)] md:inset-x-auto md:left-[var(--gutter)] md:top-[calc(var(--nav-h)+1.5rem)] md:max-w-[40ch]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-spread-copy": true,
                                        className: "eyebrow mb-4 opacity-0",
                                        children: "07 — Served"
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-spread-title": true,
                                        className: "fat text-[clamp(2.6rem,11vw,3.6rem)] leading-[1.02] md:text-[clamp(3rem,5.4vw,5.8rem)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: line,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-spread-copy": true,
                                        className: "body-sm mt-5 hidden max-w-[34ch] text-ink/70 opacity-0 md:block",
                                        children: "Chai, a stack of glucose biscuits, bun maska, hot samosas — and a filter kaapi for the one friend who insists."
                                    }, void 0, false, {
                                        fileName: "[project]/components/story/StorySection.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-spread-copy": true,
                                        className: "pointer-events-auto mt-6 hidden gap-3 opacity-0 md:flex",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Magnetic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "absolute bottom-[max(11svh,7rem)] left-[var(--gutter)] hidden space-y-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink/60 md:block",
                                children: [
                                    "Marble tables · bentwood chairs",
                                    "Nine biscuit jars, always full",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].hours,
                                    "No laptops before 10 am"
                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-readout": true,
                                className: "absolute bottom-[max(2.2svh,1rem)] left-[var(--gutter)] w-[min(15rem,40vw)] text-ivory opacity-0 max-md:bottom-[5.25rem]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-end justify-between font-mono text-[0.6rem] uppercase tracking-[0.16em]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    ref: stageText,
                                                    className: "block",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stages"][0]
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block overflow-hidden tabular-nums",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        ref: stageNum,
                                                        className: "block",
                                                        children: "01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/story/StorySection.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 68
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "opacity-40",
                                                        children: [
                                                            " / ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stages"].length)
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 h-px w-full bg-current/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Arrow = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        "aria-hidden": true,
        className: "transition-transform duration-500 group-hover:translate-x-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 7h11M7 1l6 6-6 6",
            stroke: "currentColor",
            strokeWidth: "1.4",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/components/ui/Button.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function Button({ href, variant = "ink", size = "md", className, children }) {
    const base = "group inline-flex items-center gap-3 font-body font-medium tracking-[0.02em] rounded-full transition-all duration-500";
    const sizes = {
        md: "px-6 py-3 text-[0.85rem]",
        lg: "px-8 py-4 text-[0.95rem]"
    };
    const variants = {
        ink: "bg-ink text-ivory hover:bg-accent",
        ivory: "bg-ivory text-ink hover:bg-white hover:shadow-md hover:-translate-y-px",
        ghost: "border border-ink/20 text-ink hover:border-ink",
        "ghost-light": "border border-ivory/30 text-ivory hover:border-ivory"
    };
    const cls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(base, sizes[size], variants[variant], className);
    const isExt = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    const inner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {}, void 0, false, {
                fileName: "[project]/components/ui/Button.tsx",
                lineNumber: 30,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 30,
        columnNumber: 17
    }, this);
    if (isExt) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: cls,
        "data-cursor": "cta",
        children: inner
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 32,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: cls,
        "data-cursor": "cta",
        children: inner
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/ui/Magnetic.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Magnetic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Magnetic({ children, strength = 0.22 }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])("(pointer: fine)", false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!fine) return;
        const el = ref.current;
        if (!el) return;
        let raf = 0;
        let tx = 0, ty = 0, cx = 0, cy = 0;
        const move = (e)=>{
            const rect = el.getBoundingClientRect();
            tx = (e.clientX - rect.left - rect.width / 2) * strength;
            ty = (e.clientY - rect.top - rect.height / 2) * strength;
        };
        const leave = ()=>{
            tx = 0;
            ty = 0;
        };
        const tick = ()=>{
            cx += (tx - cx) * 0.16;
            cy += (ty - cy) * 0.16;
            if (Math.abs(cx) > 0.01 || Math.abs(cy) > 0.01 || Math.abs(tx) > 0.01 || Math.abs(ty) > 0.01) {
                el.style.transform = `translate(${cx}px, ${cy}px)`;
            }
            raf = requestAnimationFrame(tick);
        };
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", leave);
        el.style.willChange = "transform";
        raf = requestAnimationFrame(tick);
        return ()=>{
            el.removeEventListener("mousemove", move);
            el.removeEventListener("mouseleave", leave);
            cancelAnimationFrame(raf);
            el.style.willChange = "";
            el.style.transform = "";
        };
    }, [
        fine,
        strength
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "inline-block",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Magnetic.tsx",
        lineNumber: 43,
        columnNumber: 10
    }, this);
}
}),
"[project]/data/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/story/materials.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHAI",
    ()=>CHAI,
    "biscuitMaterial",
    ()=>biscuitMaterial,
    "brewMaterial",
    ()=>brewMaterial,
    "ceramic",
    ()=>ceramic,
    "chaiMaterial",
    ()=>chaiMaterial,
    "flameMaterial",
    ()=>flameMaterial,
    "glassMaterial",
    ()=>glassMaterial,
    "steel",
    ()=>steel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
function glassMaterial(tint = "#fffdf5", { opacity = 0.04, edge = 0.36, gloss = 1 } = {}) {
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: "#000000",
        roughness: 0.05,
        metalness: 0,
        transparent: true,
        opacity,
        clearcoat: 0,
        envMapIntensity: 0.66 * gloss,
        depthWrite: false,
        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"],
        specularIntensity: 1,
        specularColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](tint),
        ior: 1.5,
        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomBlending"],
        blendSrc: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OneFactor"],
        blendDst: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OneMinusSrcAlphaFactor"],
        blendSrcAlpha: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OneFactor"],
        blendDstAlpha: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OneMinusSrcAlphaFactor"]
    });
    m.onBeforeCompile = (s)=>{
        s.fragmentShader = s.fragmentShader.replace("#include <opaque_fragment>", `float gFres = pow(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 2.6);
       diffuseColor.a = clamp(diffuseColor.a + gFres * ${edge.toFixed(3)}, 0.0, 1.0);
       outgoingLight *= 1.0 + gFres * 0.35;
       #include <opaque_fragment>`);
    };
    m.customProgramCacheKey = ()=>`tapri-glass-${edge.toFixed(3)}`;
    return m;
}
const NOISE = /* glsl */ `
float ah3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float anoise(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(ah3(i), ah3(i + vec3(1,0,0)), f.x), mix(ah3(i + vec3(0,1,0)), ah3(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(ah3(i + vec3(0,0,1)), ah3(i + vec3(1,0,1)), f.x), mix(ah3(i + vec3(0,1,1)), ah3(i + vec3(1,1,1)), f.x), f.y), f.z); }
float afbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * anoise(p); p = p * 2.03 + 11.3; a *= 0.5; } return s; }
`;
const CHAI = "#bb8a66";
function chaiMaterial(color = CHAI, level = 10) {
    const u = {
        uLevel: {
            value: level
        },
        uSlosh: {
            value: 0
        },
        uTime: {
            value: 0
        }
    };
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color,
        roughness: 0.34,
        clearcoat: 0.5,
        clearcoatRoughness: 0.25,
        sheen: 0.5,
        sheenColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]("#ffe2c0"),
        sheenRoughness: 0.5,
        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
    });
    m.onBeforeCompile = (s)=>{
        Object.assign(s.uniforms, u);
        s.vertexShader = s.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vJ;").replace("#include <begin_vertex>", "#include <begin_vertex>\nvJ = position;");
        s.fragmentShader = s.fragmentShader.replace("#include <common>", `#include <common>\nvarying vec3 vJ;\nuniform float uLevel, uSlosh, uTime;\n${NOISE}`).replace("#include <clipping_planes_fragment>", `#include <clipping_planes_fragment>
        float jw = vJ.x * uSlosh * 0.35 + sin(atan(vJ.z, vJ.x) * 3.0 + uTime * 4.0) * 0.01 * (0.2 + abs(uSlosh) * 3.0);
        if (vJ.y > uLevel + jw) discard;`).replace("#include <color_fragment>", `#include <color_fragment>
        float jn = anoise(vJ * 7.0 + vec3(0.0, uTime * 0.25, 0.0));
        diffuseColor.rgb *= (0.93 + 0.1 * jn) * mix(0.8, 1.04, smoothstep(0.1, 1.3, vJ.y));
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.22 + 0.03, smoothstep(0.07, 0.0, uLevel + jw - vJ.y));`).replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * 0.09;");
    };
    m.customProgramCacheKey = ()=>"tapri-chai";
    return {
        material: m,
        uniforms: u
    };
}
function brewMaterial() {
    const u = {
        uTea: {
            value: 0
        },
        uMilk: {
            value: 0
        },
        uMix: {
            value: 0
        },
        uFoam: {
            value: 0
        },
        uTime: {
            value: 0
        },
        uSwirl: {
            value: 0
        },
        uHit: {
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](-0.3, -0.15)
        }
    };
    const col = (hex)=>{
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](hex);
        return `vec3(${c.r.toFixed(4)}, ${c.g.toFixed(4)}, ${c.b.toFixed(4)})`;
    };
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: "#ffffff",
        roughness: 0.1,
        clearcoat: 1,
        clearcoatRoughness: 0.06,
        metalness: 0
    });
    m.onBeforeCompile = (s)=>{
        Object.assign(s.uniforms, u);
        s.vertexShader = s.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vB;").replace("#include <begin_vertex>", "#include <begin_vertex>\nvB = position;");
        s.fragmentShader = s.fragmentShader.replace("#include <common>", `#include <common>\nvarying vec3 vB;\nuniform float uTea, uMilk, uMix, uFoam, uTime, uSwirl;\nuniform vec2 uHit;\n${NOISE}\nfloat bFoam;`).replace("#include <map_fragment>", `#include <map_fragment>
        vec2 q = vB.xy; float r = length(q);
        float sw = uSwirl * (1.0 - r * 0.55);
        mat2 R = mat2(cos(sw), -sin(sw), sin(sw), cos(sw));
        vec2 w = R * q;
        float n = afbm(vec3(w * 1.9, uTime * 0.07));
        float n2 = afbm(vec3(w * 3.6 + n * 1.7, uTime * 0.1 + 3.0));
        vec3 cWater = ${col("#8f9a98")}, cTea = ${col("#4a1d08")}, cDeep = ${col("#2c0e03")}, cMilk = ${col("#f3e4cb")}, cChai = ${col("#c39068")}, cFoam = ${col("#ecd3ae")};
        float tea = smoothstep(0.0, 0.5, uTea * 1.6 - (1.0 - n2) * 0.95 + 0.04);
        vec3 c = mix(cWater * (0.85 + 0.3 * n), mix(cTea, cDeep, n), tea);
        float d = length(q - uHit);
        float cl = smoothstep(0.0, 0.2, uMilk * 2.3 - d * 1.1 + (n2 - 0.5) * 1.9 - 0.2);
        float wisp = smoothstep(0.42, 0.5, n2) * smoothstep(0.62, 0.5, n2) * cl;
        c = mix(c, mix(cMilk, cChai, 0.25 + 0.5 * n), cl * (0.82 + 0.18 * wisp));
        c = mix(c, cChai * (0.92 + 0.16 * n), uMix);
        bFoam = uFoam * smoothstep(0.38, 0.62, n2 * 0.8 + uFoam * 0.42 + r * r * 0.3 * uFoam);
        float cells = anoise(vec3(q * 34.0, uTime * 1.4));
        c = mix(c, cFoam * (0.9 + 0.2 * cells), bFoam);
        diffuseColor.rgb = c;`).replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.55, bFoam);").replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * 0.1;");
    };
    m.customProgramCacheKey = ()=>"tapri-brew";
    return {
        material: m,
        uniforms: u
    };
}
function biscuitMaterial(map, bump, { dunk = false, crumb = "#e9c98f", rough = 0.86, bumpScale = 1.2 } = {}) {
    const u = {
        uSoak: {
            value: -99
        },
        uBreak: {
            value: 0
        },
        uPart: {
            value: 0
        },
        uWet: {
            value: 1
        }
    };
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        map,
        bumpMap: bump,
        bumpScale,
        roughness: rough,
        metalness: 0,
        side: dunk ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FrontSide"]
    });
    if (!dunk) return {
        material: m,
        uniforms: u
    };
    const cc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](crumb);
    m.onBeforeCompile = (s)=>{
        Object.assign(s.uniforms, u);
        s.vertexShader = s.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vK;").replace("#include <begin_vertex>", "#include <begin_vertex>\nvK = position;");
        s.fragmentShader = s.fragmentShader.replace("#include <common>", `#include <common>\nvarying vec3 vK;\nuniform float uSoak, uBreak, uPart, uWet;\n${NOISE}\nfloat kSoak;`).replace("#include <clipping_planes_fragment>", `#include <clipping_planes_fragment>
        float kb = uBreak + (anoise(vec3(vK.x * 13.0, vK.z * 9.0, 2.0)) - 0.5) * 0.11 + (anoise(vec3(vK.x * 41.0, 0.0, 7.0)) - 0.5) * 0.03;
        if (uPart > 0.5 && uPart < 1.5 && vK.y < kb) discard;
        if (uPart > 1.5 && vK.y > kb) discard;`).replace("#include <map_fragment>", `#include <map_fragment>
        float ks = uSoak + (anoise(vec3(vK.x * 9.0, vK.z * 9.0, 4.0)) - 0.5) * 0.07;
        kSoak = smoothstep(ks + 0.035, ks - 0.02, vK.y) * uWet;
        if (!gl_FrontFacing) diffuseColor.rgb = vec3(${cc.r.toFixed(4)}, ${cc.g.toFixed(4)}, ${cc.b.toFixed(4)}) * (0.8 + 0.3 * anoise(vK * 40.0));
        diffuseColor.rgb *= mix(vec3(1.0), vec3(0.5, 0.37, 0.27), kSoak);`).replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.22, kSoak);");
    };
    m.customProgramCacheKey = ()=>"tapri-biscuit-dunk";
    return {
        material: m,
        uniforms: u
    };
}
function flameMaterial() {
    const u = {
        uTime: {
            value: 0
        },
        uPower: {
            value: 0
        }
    };
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
        uniforms: u,
        transparent: true,
        depthWrite: false,
        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"],
        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"],
        toneMapped: false,
        vertexShader: /* glsl */ `
      uniform float uTime, uPower; varying float vH; varying float vId; varying vec3 vN; varying vec3 vV;
      void main() {
        float id = float(gl_InstanceID);
        vId = id; vH = position.y;
        vec3 p = position;
        float fl = 0.72 + 0.28 * sin(uTime * 11.0 + id * 2.4) + 0.12 * sin(uTime * 23.0 + id * 5.1);
        p.y *= fl * (0.25 + 0.75 * uPower);
        p.x += sin(uTime * 13.0 + id * 1.7) * 0.07 * vH; p.z += cos(uTime * 9.0 + id * 2.9) * 0.07 * vH;
        vec4 mv = modelViewMatrix * instanceMatrix * vec4(p, 1.0);
        vN = normalize(normalMatrix * mat3(instanceMatrix) * normal); vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,
        fragmentShader: /* glsl */ `
      uniform float uPower; varying float vH; varying float vId; varying vec3 vN; varying vec3 vV;
      void main() {
        float core = pow(abs(dot(normalize(vN), normalize(vV))), 1.4);
        vec3 c = mix(vec3(0.10, 0.34, 1.0), vec3(0.42, 0.74, 1.0), smoothstep(0.0, 0.7, vH));
        c = mix(c, vec3(1.0, 0.62, 0.22), smoothstep(0.62, 1.0, vH) * (0.35 + 0.35 * sin(vId * 3.7)));
        float a = (1.0 - smoothstep(0.35, 1.0, vH)) * (0.35 + 0.65 * core) * uPower;
        gl_FragColor = vec4(c * a * 1.5, a);
      }`
    });
    return {
        material: m,
        uniforms: u
    };
}
const steel = (rough = 0.24, color = "#d7dbdc")=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color,
        metalness: 1,
        roughness: rough,
        envMapIntensity: 1.15
    });
const ceramic = (color = "#fbf6ec")=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color,
        roughness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.08
    });
}),
"[project]/lib/story/models.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BISCUIT",
    ()=>BISCUIT,
    "GLASS",
    ()=>GLASS,
    "PAN",
    ()=>PAN,
    "PLATE_Y",
    ()=>PLATE_Y,
    "TABLE",
    ()=>TABLE,
    "biscuitGeometry",
    ()=>biscuitGeometry,
    "createBiscuit",
    ()=>createBiscuit,
    "createBun",
    ()=>createBun,
    "createBurner",
    ()=>createBurner,
    "createCappuccino",
    ()=>createCappuccino,
    "createDrops",
    ()=>createDrops,
    "createDunkBiscuit",
    ()=>createDunkBiscuit,
    "createFilterCoffee",
    ()=>createFilterCoffee,
    "createFlat",
    ()=>createFlat,
    "createGlass",
    ()=>createGlass,
    "createPan",
    ()=>createPan,
    "createPlate",
    ()=>createPlate,
    "createSamosas",
    ()=>createSamosas,
    "createSpices",
    ()=>createSpices,
    "createStack",
    ()=>createStack,
    "createSteam",
    ()=>createSteam,
    "createStream",
    ()=>createStream,
    "createTable",
    ()=>createTable,
    "shadowed",
    ()=>shadowed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/geometries/RoundedBoxGeometry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/print.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/materials.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/textures.ts [app-ssr] (ecmascript)");
;
;
;
;
;
/* ------------------------------------------------------------------
   Plain three.js builders shared by the story, the stills, the card
   turntable and the dunk test. Units: the chai glass is 1.5 tall.
   ------------------------------------------------------------------ */ const ss = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep;
const lerp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].lerp;
const clamp01 = (v)=>Math.min(1, Math.max(0, v));
const TAU = Math.PI * 2;
const V2 = (x, y)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](x, y);
const lathe = (pts, seg = 96)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LatheGeometry"](pts.map(([x, y])=>V2(x, y)), seg);
function shadowed(root) {
    root.traverse((o)=>{
        const m = o;
        if (m.isMesh && !m.userData.noShadow) {
            m.castShadow = true;
            m.receiveShadow = true;
        }
    });
    return root;
}
/** Planar UVs across the xy face of a centred geometry. */ function planarUV(g) {
    g.computeBoundingBox();
    const bb = g.boundingBox;
    const p = g.getAttribute("position");
    const uv = new Float32Array(p.count * 2);
    const w = bb.max.x - bb.min.x, h = bb.max.y - bb.min.y;
    for(let i = 0; i < p.count; i++){
        uv[i * 2] = (p.getX(i) - bb.min.x) / w;
        uv[i * 2 + 1] = (p.getY(i) - bb.min.y) / h;
    }
    g.setAttribute("uv", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](uv, 2));
    return g;
}
const GLASS = {
    H: 1.5,
    R_TOP: 0.53,
    R_BOT: 0.372,
    LEVEL_MIN: 0.17,
    LEVEL_MAX: 1.3,
    FLUTES: 18
};
const wallR = (y)=>GLASS.R_BOT + (GLASS.R_TOP - GLASS.R_BOT) * (y / 1.47);
let glassGeo = null;
function glassGeometry() {
    if (glassGeo) return glassGeo;
    const outer = [
        [
            0,
            0
        ],
        [
            0.335,
            0
        ],
        [
            0.36,
            0.012
        ],
        [
            0.372,
            0.05
        ]
    ];
    for(let y = 0.1; y < 1.46; y += 0.065)outer.push([
        wallR(y),
        y
    ]);
    outer.push([
        wallR(1.47),
        1.47
    ], [
        0.534,
        1.492
    ], [
        0.526,
        1.5
    ]);
    const inner = [
        [
            0.512,
            1.495
        ],
        [
            0.505,
            1.47
        ]
    ];
    for(let y = 1.4; y > 0.21; y -= 0.1)inner.push([
        wallR(y) - 0.024,
        y
    ]);
    inner.push([
        0.335,
        0.166
    ], [
        0.2,
        0.153
    ], [
        0,
        0.15
    ]);
    const pts = [
        ...outer,
        ...inner
    ], n = pts.length, SEG = GLASS.FLUTES * 12;
    const g = lathe(pts, SEG);
    const p = g.getAttribute("position");
    for(let i = 0; i <= SEG; i++){
        const a = i / SEG * TAU;
        for(let j = 0; j < outer.length; j++){
            const idx = i * n + j, y = p.getY(idx);
            const mask = ss(y, 0.07, 0.17) * (1 - ss(y, 0.9, 1.03));
            if (mask <= 0) continue;
            const k = 1 + 0.034 * mask * (Math.abs(Math.cos(a * GLASS.FLUTES / 2)) - 0.62);
            p.setXYZ(idx, p.getX(idx) * k, y, p.getZ(idx) * k);
        }
    }
    g.computeVertexNormals();
    // close the seam the lathe leaves at 0 / 2π
    const nm = g.getAttribute("normal");
    for(let j = 0; j < n; j++){
        const a = j, b = SEG * n + j;
        const x = nm.getX(a) + nm.getX(b), y = nm.getY(a) + nm.getY(b), z = nm.getZ(a) + nm.getZ(b), l = Math.hypot(x, y, z) || 1;
        nm.setXYZ(a, x / l, y / l, z / l);
        nm.setXYZ(b, x / l, y / l, z / l);
    }
    glassGeo = g;
    return g;
}
function createGlass() {
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "glass";
    const glass = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](glassGeometry(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["glassMaterial"])("#fffdf5", {
        edge: 0.34
    }));
    glass.renderOrder = 3;
    glass.userData.noShadow = true;
    const vol = [
        [
            0,
            0.158
        ],
        [
            0.325,
            0.162
        ],
        [
            0.35,
            0.2
        ]
    ];
    for(let y = 0.3; y < 1.49; y += 0.1)vol.push([
        wallR(y) - 0.028,
        y
    ]);
    vol.push([
        wallR(1.49) - 0.028,
        1.49
    ], [
        0,
        1.49
    ]);
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chaiMaterial"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAI"]);
    const chai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](lathe(vol, 72), c.material);
    chai.renderOrder = 1;
    const surface = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircleGeometry"](1, 64), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chaiSurface"])(),
        roughness: 0.22,
        clearcoat: 0.7,
        clearcoatRoughness: 0.2,
        emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAI"]),
        emissiveIntensity: 0.1
    }));
    surface.rotation.x = -Math.PI / 2;
    surface.renderOrder = 1;
    surface.userData.noShadow = true;
    root.add(chai, surface, glass);
    const levelY = (l)=>lerp(GLASS.LEVEL_MIN, GLASS.LEVEL_MAX, l);
    const setLevel = (l)=>{
        const y = levelY(l);
        c.uniforms.uLevel.value = y;
        surface.visible = l > 0.004;
        chai.visible = l > 0.004;
        surface.position.y = y;
        surface.scale.setScalar((wallR(y) - 0.029) * 0.998);
    };
    setLevel(1);
    shadowed(root);
    return {
        root,
        glass,
        chai: c.uniforms,
        surface,
        setLevel,
        levelY
    };
}
function createPlate(r = 0.95, mat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ceramic"])()) {
    const k = r / 0.95;
    const g = lathe([
        [
            0,
            0
        ],
        [
            0.5,
            0
        ],
        [
            0.56,
            0.018
        ],
        [
            0.92,
            0.1
        ],
        [
            0.95,
            0.118
        ],
        [
            0.94,
            0.132
        ],
        [
            0.56,
            0.05
        ],
        [
            0.5,
            0.036
        ],
        [
            0,
            0.036
        ]
    ].map(([x, y])=>[
            x * k,
            y * Math.min(1.15, k)
        ]), 72);
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](g, mat);
    m.name = "plate";
    return shadowed(m);
}
const PLATE_Y = 0.036;
const BISCUIT = {
    glucose: {
        w: 0.6,
        h: 0.97,
        t: 0.078,
        crumb: "#ecd09a"
    },
    rusk: {
        w: 0.5,
        h: 1.06,
        t: 0.14,
        crumb: "#f0d6a0"
    },
    osmania: {
        w: 0.74,
        h: 0.74,
        t: 0.1,
        crumb: "#efd3a0"
    },
    nankhatai: {
        w: 0.68,
        h: 0.68,
        t: 0.2,
        crumb: "#f4e2ba"
    },
    jeera: {
        w: 0.6,
        h: 0.6,
        t: 0.07,
        crumb: "#ecd09a"
    }
};
const geoCache = new Map();
function biscuitGeometry(kind) {
    const hit = geoCache.get(kind);
    if (hit) return hit;
    const B = BISCUIT[kind];
    let g;
    if (kind === "glucose") {
        // a rectangle whose every edge is a row of scallops
        const hw = B.w / 2 - 0.02, hh = B.h / 2 - 0.02, amp = 0.02;
        const pts = [];
        const edge = (x0, y0, x1, y1, n)=>{
            const dx = x1 - x0, dy = y1 - y0, len = Math.hypot(dx, dy), nx = dy / len, ny = -dx / len;
            for(let i = 0; i < n * 7; i++){
                const s = i / (n * 7), o = amp * Math.abs(Math.sin(Math.PI * n * s));
                pts.push(V2(x0 + dx * s + nx * o, y0 + dy * s + ny * o));
            }
        };
        edge(-hw, -hh, hw, -hh, 7);
        edge(hw, -hh, hw, hh, 11);
        edge(hw, hh, -hw, hh, 7);
        edge(-hw, hh, -hw, -hh, 11);
        g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shape"](pts), {
            depth: B.t - 0.024,
            bevelEnabled: true,
            bevelThickness: 0.012,
            bevelSize: 0.012,
            bevelSegments: 2,
            curveSegments: 1
        });
        g.translate(0, 0, -(B.t - 0.024) / 2);
    } else if (kind === "rusk") {
        // a slice of a small loaf: flat base, domed top
        const hw = B.w / 2 - 0.015, hh = B.h / 2 - 0.015;
        const s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Shape"]();
        s.moveTo(-hw + 0.05, -hh);
        s.lineTo(hw - 0.05, -hh);
        s.quadraticCurveTo(hw, -hh, hw, -hh + 0.05);
        s.lineTo(hw, hh - 0.28);
        s.bezierCurveTo(hw + 0.02, hh - 0.05, hw * 0.5, hh, 0, hh);
        s.bezierCurveTo(-hw * 0.5, hh, -hw - 0.02, hh - 0.05, -hw, hh - 0.28);
        s.lineTo(-hw, -hh + 0.05);
        s.quadraticCurveTo(-hw, -hh, -hw + 0.05, -hh);
        g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](s, {
            depth: B.t - 0.03,
            bevelEnabled: true,
            bevelThickness: 0.015,
            bevelSize: 0.015,
            bevelSegments: 2,
            curveSegments: 14
        });
        g.translate(0, 0, -(B.t - 0.03) / 2);
    } else {
        const R = B.w / 2, t = B.t;
        const prof = kind === "nankhatai" ? [
            [
                0,
                0
            ],
            [
                R * 0.94,
                0
            ],
            [
                R * 0.985,
                0.02
            ],
            [
                R,
                t * 0.14
            ],
            [
                R * 0.88,
                t * 0.45
            ],
            [
                R * 0.65,
                t * 0.78
            ],
            [
                R * 0.35,
                t * 0.96
            ],
            [
                0,
                t
            ]
        ] : [
            [
                0,
                0
            ],
            [
                R - 0.05,
                0
            ],
            [
                R - 0.012,
                0.016
            ],
            [
                R,
                t / 2
            ],
            [
                R - 0.012,
                t - 0.016
            ],
            [
                R - 0.05,
                t
            ],
            [
                0,
                t
            ]
        ];
        g = lathe(prof, 64);
        g.translate(0, -t / 2, 0);
        g.rotateX(Math.PI / 2);
    }
    planarUV(g);
    g.computeVertexNormals();
    geoCache.set(kind, g);
    return g;
}
const printFor = (kind)=>kind === "glucose" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["glucosePrint"])() : kind === "rusk" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ruskPrint"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundPrint"])(kind);
const plainMat = new Map();
function createBiscuit(kind = "glucose") {
    let m = plainMat.get(kind);
    if (!m) {
        const p = printFor(kind);
        m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["biscuitMaterial"])(p.map, p.bump, {
            rough: kind === "osmania" ? 0.55 : 0.86
        }).material;
        plainMat.set(kind, m);
    }
    const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](biscuitGeometry(kind), m);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
}
function createFlat(kind = "glucose") {
    const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    const m = createBiscuit(kind);
    m.rotation.x = -Math.PI / 2;
    m.position.y = BISCUIT[kind].t / 2;
    g.add(m);
    return g;
}
function createDunkBiscuit(kind = "glucose") {
    const B = BISCUIT[kind], p = printFor(kind), geo = biscuitGeometry(kind);
    const mk = (part)=>{
        const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["biscuitMaterial"])(p.map, p.bump, {
            dunk: true,
            crumb: B.crumb,
            rough: kind === "osmania" ? 0.55 : 0.86
        });
        b.uniforms.uPart.value = part;
        return b;
    };
    const mats = [
        mk(0),
        mk(1),
        mk(2)
    ];
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    root.name = `dunk-${kind}`;
    const whole = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geo, mats[0].material), top = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geo, mats[1].material), bottom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](geo, mats[2].material);
    const hinge = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    hinge.add(bottom);
    root.add(whole, top, hinge);
    [
        whole,
        top,
        bottom
    ].forEach((m)=>{
        m.castShadow = true;
    });
    const us = mats.map((m)=>m.uniforms);
    const set = ({ soak, wet, snap, split })=>{
        if (soak !== undefined) us.forEach((u)=>u.uSoak.value = soak);
        if (wet !== undefined) us.forEach((u)=>u.uWet.value = wet);
        if (snap !== undefined) {
            us.forEach((u)=>u.uBreak.value = snap);
            hinge.position.set(0, snap, 0);
            bottom.position.set(0, -snap, 0);
        }
        if (split !== undefined) {
            whole.visible = !split;
            top.visible = split;
            hinge.visible = split;
        }
    };
    set({
        soak: -99,
        wet: 1,
        snap: -B.h * 0.08,
        split: false
    });
    return {
        root,
        whole,
        top,
        hinge,
        bottom,
        kind,
        half: B.h / 2,
        set
    };
}
function createStack(n = 6, kind = "glucose") {
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "stack";
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(4), B = BISCUIT[kind];
    const items = Array.from({
        length: n
    }, (_, i)=>{
        const b = createFlat(kind);
        const rest = {
            x: (r() - 0.5) * 0.035,
            y: i * (B.t + 0.003),
            z: (r() - 0.5) * 0.035,
            ry: (r() - 0.5) * 0.2
        };
        b.position.set(rest.x, rest.y, rest.z);
        b.rotation.y = rest.ry;
        root.add(b);
        return {
            obj: b,
            rest
        };
    });
    const fan = (k)=>items.forEach(({ obj, rest }, i)=>{
            obj.position.set(rest.x + Math.sin(i * 1.1) * 0.12 * k, rest.y + k * i * 0.13, rest.z);
            obj.rotation.set(Math.sin(i * 2.3) * 0.12 * k, rest.ry + k * (i - (n - 1) / 2) * 0.42, Math.cos(i * 1.7) * 0.1 * k);
        });
    return {
        root,
        items,
        fan,
        height: n * (B.t + 0.003)
    };
}
const PAN = {
    R: 1.2,
    H: 0.9,
    LEVEL: 0.46,
    LIP: -1.2
};
const panInner = (y)=>lerp(1.112, 1.185, y / PAN.H);
function createPan() {
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "pan";
    const body = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    root.add(body);
    const outside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["steel"])(0.3);
    outside.bumpMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brushedBump"])();
    outside.bumpScale = 0.35;
    outside.bumpMap.repeat.set(1, 3);
    const shell = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](lathe([
        [
            0,
            0
        ],
        [
            1.13,
            0
        ],
        [
            1.175,
            0.02
        ],
        [
            1.2,
            0.07
        ],
        [
            1.215,
            0.86
        ],
        [
            1.25,
            0.9
        ],
        [
            1.262,
            0.915
        ],
        [
            1.25,
            0.93
        ],
        [
            1.2,
            0.925
        ],
        [
            1.185,
            0.88
        ],
        [
            1.112,
            0.07
        ],
        [
            1.07,
            0.035
        ],
        [
            0,
            0.03
        ]
    ], 128), outside);
    body.add(shell);
    // handle: a riveted steel tang and a bakelite grip
    const handle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    handle.position.set(1.2, 0.8, 0);
    handle.rotation.z = 0.16;
    const tang = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](0.75, 0.035, 0.2, 2, 0.015), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["steel"])(0.3));
    tang.position.x = 0.36;
    const grip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](1.05, 0.13, 0.25, 4, 0.06), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: "#17120f",
        roughness: 0.42,
        clearcoat: 0.4,
        clearcoatRoughness: 0.4
    }));
    grip.position.x = 1.2;
    const eye = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TorusGeometry"](0.05, 0.016, 8, 20), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["steel"])(0.25));
    eye.position.set(1.66, 0, 0);
    eye.rotation.x = Math.PI / 2;
    handle.add(tang, grip, eye);
    for (const z of [
        -0.055,
        0.055
    ]){
        const rv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](0.026, 12, 8), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["steel"])(0.2));
        rv.position.set(0.07, 0.02, z);
        rv.scale.y = 0.5;
        handle.add(rv);
    }
    body.add(handle);
    // the brew
    const brew = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brewMaterial"])();
    const liquid = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircleGeometry"](1, 96), brew.material);
    liquid.rotation.x = -Math.PI / 2;
    liquid.userData.noShadow = true;
    liquid.receiveShadow = true;
    body.add(liquid);
    let levelY = PAN.LEVEL;
    const setLevel = (y)=>{
        levelY = y;
        liquid.position.y = y;
        liquid.scale.setScalar(panInner(y) * 0.998);
    };
    setLevel(PAN.LEVEL);
    // bubbles: half-domes that swell and pop
    const N = 110, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(19);
    const bubbleMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: "#f0dcc0",
        roughness: 0.12,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        transparent: true,
        opacity: 0.86
    });
    const bubbles = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InstancedMesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](1, 14, 8, 0, TAU, 0, Math.PI / 2), bubbleMat, N);
    bubbles.frustumCulled = false;
    bubbles.userData.noShadow = true;
    body.add(bubbles);
    const seeds = Array.from({
        length: N
    }, ()=>({
            a: r() * TAU,
            d: Math.pow(r(), 0.45),
            rate: 0.5 + r() * 1.3,
            ph: r(),
            s: 0.03 + r() * r() * 0.085
        }));
    const M = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"](), q = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"](), v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](), sv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
    /** amt 0..1 (how hard it boils), edge 0..1 (0: all over · 1: crowding the rim) */ const setBubbles = (t, amt, edge = 0)=>{
        bubbles.visible = amt > 0.004;
        if (!bubbles.visible) return;
        const R = panInner(levelY) * 0.97;
        seeds.forEach((b, i)=>{
            const life = (t * b.rate + b.ph) % 1;
            const grow = life < 0.82 ? 1 - Math.pow(1 - life / 0.82, 3) : 0;
            const d = lerp(b.d, 0.6 + 0.4 * b.d, edge);
            const on = i / N < amt * 1.15 ? 1 : 0;
            sv.setScalar(Math.max(0.0001, b.s * grow * on * (0.5 + 0.7 * amt)));
            sv.y *= 0.72;
            v.set(Math.cos(b.a) * d * R, levelY - 0.004, Math.sin(b.a) * d * R);
            M.compose(v, q, sv);
            bubbles.setMatrixAt(i, M);
        });
        bubbles.instanceMatrix.needsUpdate = true;
    };
    setBubbles(0, 0);
    shadowed(root);
    return {
        root,
        body,
        shell,
        handle,
        liquid,
        brew: brew.uniforms,
        bubbles,
        bubbleMat,
        setLevel,
        setBubbles,
        innerAt: panInner
    };
}
function createBurner() {
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "burner";
    const iron = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#1b1917",
        roughness: 0.62,
        metalness: 0.55
    });
    const base = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.72, 0.9, 0.2, 56), iron);
    base.position.y = -0.5;
    const head = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.78, 0.84, 0.09, 56), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#3a332c",
        roughness: 0.45,
        metalness: 0.8
    }));
    head.position.y = -0.37;
    const cap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.56, 0.6, 0.06, 48), iron);
    cap.position.y = -0.3;
    root.add(base, head, cap);
    for(let i = 0; i < 4; i++){
        const a = i / 4 * TAU + Math.PI / 4;
        const arm = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](1.0, 0.07, 0.09, 2, 0.02), iron);
        arm.position.set(Math.cos(a) * 1.0, -0.04, Math.sin(a) * 1.0);
        arm.rotation.y = -a;
        root.add(arm);
        const leg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.035, 0.035, 0.5, 8), iron);
        leg.position.set(Math.cos(a) * 1.46, -0.3, Math.sin(a) * 1.46);
        root.add(leg);
    }
    const ring = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TorusGeometry"](1.46, 0.035, 8, 72), iron);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.55;
    root.add(ring);
    // flames
    const N = 30, fl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flameMaterial"])();
    const cone = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConeGeometry"](0.085, 1, 10, 6, true);
    cone.translate(0, 0.5, 0);
    const flames = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InstancedMesh"](cone, fl.material, N);
    flames.frustumCulled = false;
    flames.userData.noShadow = true;
    flames.renderOrder = 5;
    const M = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"](), q = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"](), up = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), dir = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](), pos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](), sc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
    for(let i = 0; i < N; i++){
        const a = i / N * TAU, tilt = 0.98;
        dir.set(Math.cos(a) * Math.sin(tilt), Math.cos(tilt), Math.sin(a) * Math.sin(tilt));
        q.setFromUnitVectors(up, dir);
        pos.set(Math.cos(a) * 0.8, -0.33, Math.sin(a) * 0.8);
        sc.set(1, 0.66 + i % 3 * 0.05, 1);
        M.compose(pos, q, sc);
        flames.setMatrixAt(i, M);
    }
    root.add(flames);
    const glow = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sprite"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpriteMaterial"]({
        map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["glowTexture"])(),
        transparent: true,
        depthWrite: false,
        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"],
        opacity: 0,
        toneMapped: false
    }));
    glow.scale.set(4.4, 1.6, 1);
    glow.position.set(0, -0.22, 0.2);
    glow.renderOrder = 4;
    glow.userData.noShadow = true;
    root.add(glow);
    const light = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointLight"]("#6f9dff", 0, 2.4, 1.4);
    light.position.set(0, -0.6, 1.3);
    root.add(light);
    const warm = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointLight"]("#ffab5c", 0, 9, 1.5);
    warm.position.set(0.4, -0.1, 2.2);
    root.add(warm);
    shadowed(root);
    const setPower = (p, t)=>{
        fl.uniforms.uPower.value = p;
        fl.uniforms.uTime.value = t;
        flames.visible = p > 0.003;
        const f = 0.9 + 0.1 * Math.sin(t * 17) * Math.sin(t * 7.3);
        glow.material.opacity = p * 0.75 * f;
        light.intensity = p * 5 * f;
        warm.intensity = p * 5 * f;
    };
    return {
        root,
        flames,
        glow,
        light,
        setPower
    };
}
function createSpices() {
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "spices";
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(33);
    const items = [];
    const add = (obj, group, delay, float = 0)=>{
        obj.traverse((o)=>{
            const m = o;
            if (m.isMesh) {
                m.castShadow = true;
            }
        });
        const a = r() * TAU, d = 0.18 + r() * 0.66;
        items.push({
            obj,
            a,
            d,
            delay,
            from: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]((r() - 0.5) * 0.9, 3.4 + r() * 0.8, (r() - 0.5) * 0.5),
            spin: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](r() * 6 - 3, r() * 6 - 3, r() * 6 - 3),
            ph: r() * TAU,
            float,
            group
        });
        obj.visible = false;
        root.add(obj);
    };
    // ginger — pounded, fibrous
    const gingerGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](0.105, 2);
    {
        const p = gingerGeo.getAttribute("position");
        const v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        for(let i = 0; i < p.count; i++){
            v.fromBufferAttribute(p, i);
            const k = 1 + 0.22 * Math.sin(v.x * 23 + v.y * 11) * Math.cos(v.z * 17 + v.x * 7);
            v.multiplyScalar(k);
            p.setXYZ(i, v.x * 1.35, v.y * 0.62, v.z);
        }
        gingerGeo.computeVertexNormals();
    }
    const gingerMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#cdb886",
        roughness: 0.82
    });
    for(let i = 0; i < 4; i++){
        const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](gingerGeo, gingerMat);
        m.scale.setScalar(0.85 + r() * 0.5);
        add(m, 0, i * 0.028, 0.03);
    }
    // green cardamom
    const podGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](0.06, 16, 12);
    podGeo.scale(1, 2.1, 1);
    {
        const p = podGeo.getAttribute("position");
        for(let i = 0; i < p.count; i++){
            const x = p.getX(i), z = p.getZ(i), a = Math.atan2(z, x), k = 1 + 0.1 * Math.cos(a * 3);
            p.setX(i, x * k);
            p.setZ(i, z * k);
        }
        podGeo.computeVertexNormals();
    }
    const podMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#96a65a",
        roughness: 0.7
    });
    for(let i = 0; i < 6; i++){
        const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](podGeo, podMat);
        m.rotation.z = Math.PI / 2;
        const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        g.add(m);
        add(g, 1, 0.17 + i * 0.02, 0.02);
    }
    // cloves
    const cloveMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#3b2212",
        roughness: 0.8
    });
    for(let i = 0; i < 5; i++){
        const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        const stem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.014, 0.022, 0.17, 8), cloveMat);
        stem.rotation.z = Math.PI / 2;
        const head = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](0.038, 10, 8), cloveMat);
        head.position.x = 0.1;
        g.add(stem, head);
        add(g, 2, 0.32 + i * 0.02, 0.015);
    }
    // one curl of cinnamon
    {
        const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: "#8f5527",
            roughness: 0.85,
            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"]
        });
        const a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.075, 0.075, 0.85, 20, 1, true, 0, TAU * 0.86), mat);
        a.rotation.z = Math.PI / 2;
        const b = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.045, 0.045, 0.85, 16, 1, true, 1, TAU * 0.8), mat);
        b.rotation.z = Math.PI / 2;
        b.position.z = 0.02;
        g.add(a, b);
        add(g, 3, 0.44, 0.045);
    }
    // black pepper
    const pepGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](0.04, 10, 8), pepMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#1c1511",
        roughness: 0.75
    });
    for(let i = 0; i < 9; i++)add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](pepGeo, pepMat), 4, 0.54 + i * 0.012, 0.012);
    // tea: a shower of CTC granules
    const N = 520;
    const tea = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InstancedMesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](0.016, 0), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#1d0f08",
        roughness: 0.9
    }), N);
    tea.frustumCulled = false;
    tea.castShadow = true;
    root.add(tea);
    const leaves = Array.from({
        length: N
    }, ()=>({
            a: r() * TAU,
            d: Math.sqrt(r()) * 0.9,
            delay: r() * 0.62,
            jx: (r() - 0.5) * 0.5,
            jz: (r() - 0.5) * 0.5,
            s: 0.5 + r() * 1.2,
            ph: r() * TAU
        }));
    const M = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"](), q = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"](), e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Euler"](), v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](), sv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
    /**
   * k: 0..1 across the whole-spice drop · teaK: 0..1 for the leaves · y: surface height · R: surface radius
   * swirl: the brew's rotation · sink: 0..1, everything goes under
   */ const update = (k, teaK, t, y, R, swirl, sink)=>{
        for (const it of items){
            const kk = clamp01((k - it.delay) / 0.15);
            it.obj.visible = kk > 0 && sink < 0.999;
            if (!it.obj.visible) continue;
            const land = 1 - kk, ang = it.a - swirl * (1 - it.d * 0.55);
            const lx = Math.cos(ang) * it.d * R, lz = Math.sin(ang) * it.d * R;
            const dip = kk >= 1 ? 0 : Math.sin(Math.PI * clamp01((kk - 0.86) / 0.14)) * 0.03;
            it.obj.position.set(lerp(it.from.x + lx * 0.5, lx, kk), lerp(y + it.from.y, y + it.float + Math.sin(t * 1.7 + it.ph) * 0.008 - dip, kk * kk) - sink * 0.16, lerp(it.from.z + lz * 0.5, lz, kk));
            it.obj.rotation.set(it.spin.x * land * 2 + (it.group === 0 ? 0.2 : 0), it.ph + it.spin.y * land * 2 - swirl * 0.6, it.spin.z * land * 2);
            it.obj.scale.setScalar(it.obj.userData.s0 ?? (it.obj.userData.s0 = it.obj.scale.x));
            it.obj.scale.multiplyScalar(1 - sink * 0.5);
        }
        tea.visible = teaK > 0 && sink < 0.999;
        if (tea.visible) {
            leaves.forEach((l, i)=>{
                const kk = clamp01((teaK - l.delay) / 0.36);
                const ang = l.a - swirl * (1 - l.d * 0.55);
                const lx = Math.cos(ang) * l.d * R, lz = Math.sin(ang) * l.d * R;
                v.set(lerp(-0.3 + l.jx, lx, kk), lerp(y + 3.3 + l.jz, y + 0.008 - sink * 0.1, kk * kk), lerp(0.1 + l.jz, lz, kk));
                e.set(t * (1 - kk) * 6 + l.ph, l.ph * 2, t * (1 - kk) * 4);
                sv.setScalar(kk > 0 ? l.s * (1 - sink * 0.8) : 0.0001);
                M.compose(v, q.setFromEuler(e), sv);
                tea.setMatrixAt(i, M);
            });
            tea.instanceMatrix.needsUpdate = true;
        }
    };
    return {
        root,
        items,
        tea,
        update
    };
}
function createStream(color = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAI"], { S = 34, RS = 12, gloss = true } = {}) {
    const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]();
    const pos = new Float32Array((S + 1) * (RS + 1) * 3), nor = new Float32Array((S + 1) * (RS + 1) * 3);
    const idx = [];
    for(let i = 0; i < S; i++)for(let j = 0; j < RS; j++){
        const a = i * (RS + 1) + j, b = a + RS + 1;
        idx.push(a, a + 1, b, b, a + 1, b + 1);
    }
    g.setIndex(idx);
    g.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](pos, 3));
    g.setAttribute("normal", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](nor, 3));
    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color,
        roughness: gloss ? 0.16 : 0.3,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](color),
        emissiveIntensity: 0.16
    });
    const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](g, mat);
    mesh.frustumCulled = false;
    mesh.castShadow = true;
    mesh.visible = false;
    const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](), T = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](), N = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](), Z = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1), B = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
    /**
   * A falling arc from `from` (leaving sideways) to `to`. `tail`..`head` (0..1) is the part of the arc that exists:
   * head grows as the pour starts, tail follows when it is cut off.
   */ const set = (from, to, r0, r1, t, head = 1, tail = 0)=>{
        mesh.visible = head - tail > 0.01;
        if (!mesh.visible) return;
        for(let i = 0; i <= S; i++){
            const s = lerp(tail, head, i / S);
            c.set(lerp(from.x, to.x, s), from.y + (to.y - from.y) * s * s, lerp(from.z, to.z, s));
            T.set(to.x - from.x, 2 * (to.y - from.y) * Math.max(s, 0.02), to.z - from.z).normalize();
            N.crossVectors(Z, T).normalize();
            B.crossVectors(T, N).normalize();
            const ends = Math.min(1, i / S * 14 + 0.25) * Math.min(1, (S - i) / S * 10 + 0.4);
            const rad = lerp(r0, r1, s) * (1 + 0.14 * Math.sin(s * 26 - t * 16) + 0.06 * Math.sin(s * 57 - t * 31)) * ends;
            for(let j = 0; j <= RS; j++){
                const a = j / RS * TAU, cx = Math.cos(a), sn = Math.sin(a), o = (i * (RS + 1) + j) * 3;
                const nx = N.x * cx + B.x * sn, ny = N.y * cx + B.y * sn, nz = N.z * cx + B.z * sn;
                pos[o] = c.x + nx * rad;
                pos[o + 1] = c.y + ny * rad;
                pos[o + 2] = c.z + nz * rad * 0.8;
                nor[o] = nx;
                nor[o + 1] = ny;
                nor[o + 2] = nz;
            }
        }
        g.attributes.position.needsUpdate = true;
        g.attributes.normal.needsUpdate = true;
    };
    return {
        mesh,
        material: mat,
        set
    };
}
function createDrops(n = 24, color = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAI"]) {
    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color,
        roughness: 0.15,
        clearcoat: 1,
        emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](color),
        emissiveIntensity: 0.15
    });
    const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InstancedMesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](1, 12, 10), mat, n);
    mesh.frustumCulled = false;
    mesh.visible = false;
    const M = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"](), q = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"](), v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](), sv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(51);
    const seeds = Array.from({
        length: n
    }, ()=>({
            a: r() * TAU,
            sp: 0.4 + r() * 0.8,
            up: 0.5 + r() * 0.9,
            s: 0.018 + r() * 0.03,
            ph: r()
        }));
    /** A crown of droplets thrown up from `at`; life 0..1. */ const burst = (at, life, spread = 1, count = n)=>{
        mesh.visible = life > 0 && life < 1;
        if (!mesh.visible) return;
        seeds.forEach((d, i)=>{
            const l = clamp01(life * 1.2 - d.ph * 0.2);
            const on = i < count && l > 0 && l < 1;
            v.set(at.x + Math.cos(d.a) * d.sp * 0.45 * l * spread, at.y + (d.up * l - 1.9 * l * l) * 0.75 * spread, at.z + Math.sin(d.a) * d.sp * 0.45 * l * spread);
            sv.setScalar(on ? d.s * (1 - l * 0.4) : 0.0001);
            sv.y *= 1.25;
            M.compose(v, q, sv);
            mesh.setMatrixAt(i, M);
        });
        mesh.instanceMatrix.needsUpdate = true;
    };
    /** Place droplets one by one (for drips). */ const place = (i, x, y, z, s)=>{
        v.set(x, y, z);
        sv.set(s, s * 1.35, s);
        M.compose(v, q, sv);
        mesh.setMatrixAt(i, M);
    };
    const commit = (on)=>{
        mesh.visible = on;
        mesh.instanceMatrix.needsUpdate = true;
    };
    return {
        mesh,
        burst,
        place,
        commit,
        n
    };
}
function createSteam(n = 12, { rise = 1.7, size = 0.62, spread = 0.2, color = "#ffffff" } = {}) {
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "steam";
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(n * 7 + 3);
    const puffs = Array.from({
        length: n
    }, (_, i)=>{
        const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpriteMaterial"]({
            map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["puffTexture"])(1 + i % 3),
            color,
            transparent: true,
            depthWrite: false,
            opacity: 0
        });
        const s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sprite"](mat);
        s.renderOrder = 8;
        s.userData.noShadow = true;
        root.add(s);
        return {
            s,
            mat,
            ph: r(),
            sp: 0.1 + r() * 0.07,
            x: (r() - 0.5) * spread,
            z: (r() - 0.5) * spread,
            w: 0.6 + r() * 0.8,
            sw: r() * TAU
        };
    });
    const update = (t, amt, tint)=>{
        root.visible = amt > 0.004;
        if (!root.visible) return;
        for (const p of puffs){
            const life = (t * p.sp + p.ph) % 1;
            const curl = Math.sin(life * 4.2 + p.sw + t * 0.3) * 0.16 * life + Math.sin(life * 9 + p.sw * 2) * 0.04 * life;
            p.s.position.set(p.x + curl * p.w, life * rise, p.z + Math.cos(life * 3 + p.sw) * 0.06 * life);
            const sc = size * (0.3 + 0.9 * life) * p.w;
            p.s.scale.set(sc * 0.8, sc * 1.25, 1);
            p.mat.rotation = p.sw + life * 1.4;
            p.mat.opacity = amt * Math.pow(Math.sin(Math.PI * life), 1.3) * (1 - life * 0.35);
            if (tint) p.mat.color.copy(tint);
        }
    };
    return {
        root,
        update
    };
}
const TABLE = {
    R: 3.85,
    T: 0.14
};
function createTable() {
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "table";
    const marble = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["marbleTexture"])();
    const top = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        map: marble,
        color: "#cdcbc8",
        roughness: 0.3,
        clearcoat: 0.45,
        clearcoatRoughness: 0.22,
        envMapIntensity: 0.6
    });
    const side = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: "#cfc8bd",
        roughness: 0.35,
        clearcoat: 0.4,
        envMapIntensity: 0.7
    });
    const slab = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](TABLE.R, TABLE.R, TABLE.T, 128), [
        side,
        top,
        side
    ]);
    slab.position.y = -TABLE.T / 2;
    slab.receiveShadow = true;
    slab.userData.noShadow = true;
    const bull = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TorusGeometry"](TABLE.R, TABLE.T / 2, 12, 128), side);
    bull.rotation.x = Math.PI / 2;
    bull.position.y = -TABLE.T / 2;
    bull.receiveShadow = true;
    bull.userData.noShadow = true;
    const band = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderGeometry"](TABLE.R - 0.12, TABLE.R - 0.2, 0.2, 96, 1, true), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#3a2416",
        roughness: 0.6
    }));
    band.position.y = -TABLE.T - 0.1;
    // the key light is one of many here, so its shadows are doubled up on a shadow-only sheet lying on the marble
    const contact = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircleGeometry"](TABLE.R - 0.02, 96), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowMaterial"]({
        opacity: 0.34,
        color: "#2e1a0c"
    }));
    contact.rotation.x = -Math.PI / 2;
    contact.position.y = 0.003;
    contact.receiveShadow = true;
    contact.userData.noShadow = true;
    root.add(slab, bull, band, contact);
    return {
        root,
        slab
    };
}
function createBun() {
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "bun";
    const crust = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bunCrust"])(),
        roughness: 0.38,
        clearcoat: 0.55,
        clearcoatRoughness: 0.3,
        sheen: 0.4,
        sheenColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]("#ffd9a0")
    });
    const crumb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crumbTexture"])(),
        roughness: 0.9
    });
    const R = 0.62, HB = 0.2, HT = 0.4, BUT = 0.085;
    const squash = (g, h)=>{
        const p = g.getAttribute("position");
        for(let i = 0; i < p.count; i++){
            const x = p.getX(i), y = p.getY(i), z = p.getZ(i), rr = Math.hypot(x, z) / R;
            p.setXYZ(i, x * (1 + 0.05 * (1 - rr)), y / R * h * (1 + 0.06 * Math.min(1, rr * 2.5) * Math.sin(Math.atan2(z, x) * 3 + 1)), z * (1 + 0.05 * (1 - rr)));
        }
        g.computeVertexNormals();
        return g;
    };
    const base = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    const bot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](squash(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](R, 56, 20, 0, TAU, Math.PI / 2, Math.PI / 2), HB), crust);
    bot.position.y = HB;
    const botCut = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircleGeometry"](R * 1.0, 56), crumb);
    botCut.rotation.x = -Math.PI / 2;
    botCut.position.y = HB + 0.001;
    const butter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](0.92, BUT, 0.74, 4, 0.03), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: "#f8e9a8",
        roughness: 0.3,
        clearcoat: 0.6,
        clearcoatRoughness: 0.25,
        sheen: 0.5,
        sheenColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]("#fff6cf")
    }));
    butter.position.y = HB + BUT / 2;
    butter.rotation.y = 0.12;
    base.add(bot, botCut, butter);
    const lid = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    lid.position.y = HB + BUT;
    const top = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](squash(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](R, 56, 28, 0, TAU, 0, Math.PI / 2), HT), crust);
    const topCut = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircleGeometry"](R * 1.0, 56), crumb);
    topCut.rotation.x = Math.PI / 2;
    topCut.position.y = -0.001;
    lid.add(top, topCut);
    root.add(base, lid);
    const open = (k)=>{
        lid.position.set(0, HB + BUT + k * 0.42, -k * 0.34);
        lid.rotation.set(-k * 0.62, k * 0.25, 0);
    };
    shadowed(root);
    return {
        root,
        lid,
        butter,
        open,
        height: HB + BUT + HT
    };
}
let samosaGeo = null;
function samosaGeometry() {
    if (samosaGeo) return samosaGeo;
    const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereGeometry"](1, 64, 48);
    const f = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, -1, 0)
    ];
    for(let i = 0; i < 3; i++){
        const a = i / 3 * TAU;
        f.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](Math.sqrt(8) / 3 * Math.cos(a), 1 / 3, Math.sqrt(8) / 3 * Math.sin(a)));
    }
    const p = g.getAttribute("position"), v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](), P = 3.6;
    for(let i = 0; i < p.count; i++){
        v.fromBufferAttribute(p, i).normalize();
        let s = 0;
        for (const n of f)s += Math.pow(Math.max(0, v.dot(n)), P);
        const rad = Math.min(2.05, 1 / Math.pow(s, 1 / P)) * (1 + 0.035 * Math.sin(v.x * 9 + v.z * 7) * Math.cos(v.y * 8));
        p.setXYZ(i, v.x * rad * 0.27, (v.y * rad + 1) * 0.25, v.z * rad * 0.27);
    }
    g.computeVertexNormals();
    samosaGeo = g;
    return g;
}
function createSamosas() {
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "samosas";
    const plate = createPlate(1.0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["steel"])(0.22));
    root.add(plate);
    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["friedPastry"])();
    p.map.repeat.set(2, 1.5);
    p.bump.repeat.set(2, 1.5);
    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        map: p.map,
        bumpMap: p.bump,
        bumpScale: 2.2,
        roughness: 0.5,
        clearcoat: 0.35,
        clearcoatRoughness: 0.4
    });
    const rest = [
        {
            x: -0.3,
            z: 0.1,
            ry: 0.5,
            rz: 0
        },
        {
            x: 0.24,
            z: -0.2,
            ry: 2.4,
            rz: 0.05
        }
    ];
    const items = rest.map((q)=>{
        const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](samosaGeometry(), mat);
        m.position.set(q.x, PLATE_Y, q.z);
        m.rotation.set(0, q.ry, q.rz);
        root.add(m);
        return m;
    });
    const bowl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](lathe([
        [
            0,
            0
        ],
        [
            0.15,
            0
        ],
        [
            0.2,
            0.03
        ],
        [
            0.25,
            0.13
        ],
        [
            0.255,
            0.14
        ],
        [
            0.235,
            0.135
        ],
        [
            0.18,
            0.04
        ],
        [
            0,
            0.03
        ]
    ], 40), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["steel"])(0.2));
    bowl.position.set(0.42, PLATE_Y, 0.42);
    const chutney = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircleGeometry"](0.225, 32), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: "#5f8a2c",
        roughness: 0.3,
        clearcoat: 0.8
    }));
    chutney.rotation.x = -Math.PI / 2;
    chutney.position.set(0.42, PLATE_Y + 0.11, 0.42);
    root.add(bowl, chutney);
    const toss = (k)=>items.forEach((m, i)=>{
            const q = rest[i], s = Math.sin(Math.PI * k);
            m.position.set(q.x + (i ? 0.12 : -0.12) * s, PLATE_Y + s * (0.55 + i * 0.2), q.z);
            m.rotation.set(k * TAU * (i ? -1 : 1), q.ry + k * TAU, q.rz);
        });
    shadowed(root);
    return {
        root,
        items,
        toss
    };
}
function createCappuccino() {
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "cappuccino";
    const white = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ceramic"])("#fbf7ef");
    const saucer = createPlate(0.86, white);
    root.add(saucer);
    const cup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    cup.position.y = PLATE_Y;
    const body = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](lathe([
        [
            0,
            0
        ],
        [
            0.26,
            0
        ],
        [
            0.3,
            0.02
        ],
        [
            0.36,
            0.1
        ],
        [
            0.43,
            0.22
        ],
        [
            0.48,
            0.34
        ],
        [
            0.505,
            0.42
        ],
        [
            0.512,
            0.436
        ],
        [
            0.5,
            0.442
        ],
        [
            0.485,
            0.42
        ],
        [
            0.46,
            0.33
        ],
        [
            0.41,
            0.21
        ],
        [
            0.34,
            0.1
        ],
        [
            0.27,
            0.05
        ],
        [
            0,
            0.045
        ]
    ], 80), white);
    const arc = Math.PI * 1.15;
    const handle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TorusGeometry"](0.15, 0.036, 12, 28, arc), white);
    handle.rotation.z = -arc / 2;
    handle.position.set(0.5, 0.235, 0);
    handle.scale.set(1, 1, 1.25);
    const coffee = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircleGeometry"](0.468, 56), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["latteArt"])(),
        roughness: 0.3,
        clearcoat: 0.5,
        clearcoatRoughness: 0.3
    }));
    coffee.rotation.x = -Math.PI / 2;
    coffee.position.y = 0.385;
    coffee.userData.noShadow = true;
    cup.add(body, handle, coffee);
    root.add(cup);
    shadowed(root);
    return {
        root,
        cup,
        coffee
    };
}
function createFilterCoffee() {
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "filter";
    const st = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["steel"])(0.17);
    const dabara = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](lathe([
        [
            0,
            0
        ],
        [
            0.36,
            0
        ],
        [
            0.39,
            0.02
        ],
        [
            0.47,
            0.27
        ],
        [
            0.54,
            0.31
        ],
        [
            0.55,
            0.322
        ],
        [
            0.535,
            0.32
        ],
        [
            0.455,
            0.272
        ],
        [
            0.375,
            0.035
        ],
        [
            0,
            0.03
        ]
    ], 72), st);
    const pool = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircleGeometry"](0.405, 48), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: "#3a1c0b",
        roughness: 0.16,
        clearcoat: 1
    }));
    pool.rotation.x = -Math.PI / 2;
    pool.position.y = 0.11;
    pool.userData.noShadow = true;
    const tumbler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    tumbler.position.y = 0.03;
    const tb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](lathe([
        [
            0,
            0
        ],
        [
            0.24,
            0
        ],
        [
            0.262,
            0.015
        ],
        [
            0.275,
            0.5
        ],
        [
            0.29,
            0.6
        ],
        [
            0.345,
            0.64
        ],
        [
            0.352,
            0.652
        ],
        [
            0.336,
            0.648
        ],
        [
            0.28,
            0.602
        ],
        [
            0.262,
            0.5
        ],
        [
            0.25,
            0.03
        ],
        [
            0,
            0.03
        ]
    ], 72), st);
    const foam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircleGeometry"](0.268, 40), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kaapiFoam"])(),
        roughness: 0.7
    }));
    foam.rotation.x = -Math.PI / 2;
    foam.position.y = 0.565;
    foam.userData.noShadow = true;
    tumbler.add(tb, foam);
    root.add(dabara, pool, tumbler);
    const pull = (k)=>{
        const s = Math.sin(Math.PI * k);
        tumbler.position.set(s * 0.16, 0.03 + s * 0.5, 0);
        tumbler.rotation.z = s * 0.45;
    };
    shadowed(root);
    return {
        root,
        tumbler,
        pull
    };
}
}),
"[project]/lib/story/print.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FONT",
    ()=>FONT,
    "Sheet",
    ()=>Sheet,
    "barcode",
    ()=>barcode,
    "fitText",
    ()=>fitText,
    "fontsReady",
    ()=>fontsReady,
    "frame",
    ()=>frame,
    "mulberry32",
    ()=>mulberry32,
    "printedMaterial",
    ()=>printedMaterial,
    "registration",
    ()=>registration,
    "roundRect",
    ()=>roundRect,
    "spaced",
    ()=>spaced
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
;
function mulberry32(seed) {
    let a = seed;
    return ()=>{
        a |= 0;
        a = a + 0x6d2b79f5 | 0;
        let t = Math.imul(a ^ a >>> 15, 1 | a);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
const FONT = {
    display: (px)=>`400 ${px}px "Rozha One", Georgia, serif`,
    sans: (w, px)=>`${w} ${px}px "Albert Sans", "Helvetica Neue", Arial, sans-serif`,
    mono: (w, px)=>`${w} ${px}px "Azeret Mono", Menlo, monospace`
};
let fontsPromise = null;
function fontsReady() {
    if (typeof document === "undefined") return Promise.resolve();
    fontsPromise ??= (async ()=>{
        try {
            await Promise.race([
                Promise.all([
                    document.fonts.load(FONT.display(64)),
                    document.fonts.load(FONT.sans(500, 32)),
                    document.fonts.load(FONT.sans(700, 32)),
                    document.fonts.load(FONT.mono(400, 24)),
                    document.fonts.load(FONT.mono(700, 24))
                ]),
                new Promise((r)=>setTimeout(r, 2500))
            ]);
        } catch  {}
    })();
    return fontsPromise;
}
const PAPER_ROUGH = 0.74;
const FOIL_ROUGH = 0.3;
class Sheet {
    W;
    H;
    map;
    mask;
    bump;
    /** foil only — a faint emissive so hot-foil reads as gold even off-highlight */ glow;
    foilGrad;
    constructor(W, H, { mask = true, bump = true, foil = [
        "#fff0b8",
        "#e7b53a",
        "#ffe28a",
        "#c9921f"
    ] } = {}){
        this.W = Math.round(W);
        this.H = Math.round(H);
        const mk = ()=>{
            const c = document.createElement("canvas");
            c.width = this.W;
            c.height = this.H;
            return c.getContext("2d");
        };
        this.map = mk();
        this.mask = mask ? mk() : null;
        this.bump = bump ? mk() : null;
        this.glow = mask ? mk() : null;
        if (this.glow) {
            this.glow.fillStyle = "#000";
            this.glow.fillRect(0, 0, this.W, this.H);
        }
        const g = this.map.createLinearGradient(0, 0, this.W, this.H);
        foil.forEach((c, i)=>g.addColorStop(i / (foil.length - 1), c));
        this.foilGrad = g;
        this.mask && (this.mask.fillStyle = `rgb(0,${Math.round(PAPER_ROUGH * 255)},0)`, this.mask.fillRect(0, 0, this.W, this.H));
        this.bump && (this.bump.fillStyle = "#808080", this.bump.fillRect(0, 0, this.W, this.H));
    }
    each(fn, map, mask, bump) {
        const run = (ctx, style)=>{
            if (!ctx || style === null) return;
            ctx.save();
            ctx.fillStyle = style;
            ctx.strokeStyle = style;
            fn(ctx);
            ctx.restore();
        };
        run(this.map, map);
        run(this.mask, mask);
        run(this.bump, bump);
    }
    /** Flood the sheet with a paper/ink colour. `rough` sets the finish (0 = gloss). */ paper(color, rough = PAPER_ROUGH) {
        this.each((c)=>c.fillRect(0, 0, this.W, this.H), color, `rgb(0,${Math.round(rough * 255)},0)`, null);
        return this;
    }
    /** Printed ink (colour only). */ ink(color, fn) {
        this.each(fn, color, null, null);
        return this;
    }
    /** Hot-foil stamping: metallic, low roughness; optionally embossed. */ foil(fn, { emboss = 0, color } = {}) {
        this.each(fn, color ?? this.foilGrad, `rgb(0,${Math.round(FOIL_ROUGH * 255)},255)`, emboss ? `rgb(${128 + emboss * 127},${128 + emboss * 127},${128 + emboss * 127})` : null);
        if (this.glow) {
            this.glow.save();
            this.glow.fillStyle = this.glow.strokeStyle = "#e7b53a";
            fn(this.glow);
            this.glow.restore();
        }
        return this;
    }
    /** Spot UV varnish: gloss only, no colour change. */ spot(fn, rough = PAPER_ROUGH) {
        this.each(fn, null, `rgb(255,${Math.round(rough * 255)},0)`, null);
        return this;
    }
    /** Blind emboss (>0) or deboss (<0) without ink. */ emboss(fn, depth = 1) {
        const v = Math.round(128 + depth * 127);
        this.each(fn, null, null, `rgb(${v},${v},${v})`);
        return this;
    }
    /** Direct access for gradients / images on the colour layer. */ raw(fn) {
        this.map.save();
        fn(this.map);
        this.map.restore();
        return this;
    }
    textures(aniso = 8) {
        const t = (ctx, srgb)=>{
            const tex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](ctx.canvas);
            if (srgb) tex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            tex.anisotropy = aniso;
            tex.needsUpdate = true;
            return tex;
        };
        return {
            map: t(this.map, true),
            mask: this.mask ? t(this.mask, false) : null,
            bump: this.bump ? t(this.bump, false) : null,
            glow: this.glow ? t(this.glow, true) : null
        };
    }
}
function printedMaterial(p, { bumpScale = 1.4, side = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FrontSide"] } = {}) {
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        map: p.map,
        roughness: p.mask ? 1 : PAPER_ROUGH,
        metalness: p.mask ? 1 : 0,
        roughnessMap: p.mask,
        metalnessMap: p.mask,
        clearcoat: p.mask ? 1 : 0,
        clearcoatMap: p.mask,
        clearcoatRoughness: 0.06,
        bumpMap: p.bump,
        bumpScale,
        emissive: p.glow ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]("#ffffff") : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]("#000000"),
        emissiveMap: p.glow ?? null,
        emissiveIntensity: p.glow ? 0.3 : 0,
        side
    });
    return m;
}
function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
}
function frame(ctx, x, y, w, h, lw) {
    ctx.fillRect(x, y, w, lw);
    ctx.fillRect(x, y + h - lw, w, lw);
    ctx.fillRect(x, y, lw, h);
    ctx.fillRect(x + w - lw, y, lw, h);
}
function fitText(ctx, text, font, max, width) {
    ctx.font = font(max);
    const w = ctx.measureText(text).width;
    const px = w > width ? Math.floor(max * (width / w)) : max;
    ctx.font = font(px);
    return px;
}
function spaced(ctx, px) {
    ctx.letterSpacing = `${px}px`;
}
function barcode(ctx, x, y, w, h, seed) {
    const rnd = mulberry32(seed);
    let cx = x;
    while(cx < x + w){
        const bw = 2 + Math.floor(rnd() * 3) * 2;
        ctx.fillRect(cx, y, bw, h);
        cx += bw + 2 + Math.floor(rnd() * 3) * 2;
    }
}
function registration(ctx, x, y, s = 12, lw = 2) {
    ctx.fillRect(x - s, y - lw / 2, s * 2, lw);
    ctx.fillRect(x - lw / 2, y - s, lw, s * 2);
}
}),
"[project]/lib/story/stills.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STUDIO",
    ()=>STUDIO,
    "buildItem",
    ()=>buildItem,
    "createStudioScene",
    ()=>createStudioScene,
    "getStill",
    ()=>getStill
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/models.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/materials.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/print.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/studio.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const STUDIO = {
    W: 720,
    H: 720,
    fov: 24
};
function createStudioScene(renderer) {
    const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
    scene.environment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studioEnvironment"])(renderer);
    scene.environmentIntensity = 1;
    scene.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studioLights"])({
        shadows: true,
        reach: 3,
        mapSize: 1024
    }));
    // a counter that only shows the shadows falling on it
    const floor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](14, 14), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowMaterial"]({
        opacity: 0.26,
        color: "#3a1d0a"
    }));
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);
    return scene;
}
function buildItem(id) {
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"](), inner = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    root.add(inner);
    let act = ()=>{};
    let cam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 2.5, 6.6), look = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0.3, 0);
    if (id === "chai") {
        const plate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPlate"])(0.95);
        const g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGlass"])();
        g.root.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATE_Y"];
        g.setLevel(1);
        const b1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBiscuit"])("glucose");
        b1.position.set(0.7, 0.33, 0.28);
        b1.rotation.set(-1.15, 0.5, 0.25);
        const b2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFlat"])("glucose");
        b2.position.set(-0.56, 0.09, 0.52);
        b2.rotation.set(0.1, 1.1, 0.05);
        inner.add(plate, g.root, b1, b2);
        act = (k, t)=>{
            g.chai.uSlosh.value = Math.sin(t * 9) * 0.5 * Math.sin(Math.PI * k);
            g.chai.uTime.value = t;
            g.surface.rotation.z = k * Math.PI * 2;
            g.root.rotation.z = Math.sin(t * 9) * 0.05 * Math.sin(Math.PI * k);
        };
        cam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1.75, 6.1);
        look = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0.7, 0);
    } else if (id === "biscuits") {
        const plate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPlate"])(1.0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["steel"])(0.22));
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStack"])(6);
        s.root.position.set(-0.12, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATE_Y"], 0);
        s.root.rotation.y = 0.5;
        const lean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBiscuit"])("glucose");
        lean.position.set(0.52, 0.3, 0.26);
        lean.rotation.set(-1.0, -0.5, -0.2);
        inner.add(plate, s.root, lean);
        act = (k)=>s.fan(Math.sin(Math.PI * k));
        cam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 2.25, 5.2);
        look = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0.3, 0);
    } else if (id === "bun") {
        const plate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPlate"])(1.05);
        const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBun"])();
        b.root.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATE_Y"];
        b.root.rotation.y = -0.4;
        b.open(0.16);
        inner.add(plate, b.root);
        act = (k)=>b.open(0.16 + Math.sin(Math.PI * k) * 0.84);
        cam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 2.1, 5.4);
        look = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0.34, 0);
    } else if (id === "samosa") {
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSamosas"])();
        inner.add(s.root);
        act = (k)=>s.toss(k);
        cam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 2.25, 5.2);
        look = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0.24, 0);
    } else if (id === "cappuccino") {
        const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCappuccino"])();
        c.cup.rotation.y = 0.7;
        inner.add(c.root);
        act = (k)=>{
            c.cup.rotation.y = 0.7 + k * Math.PI * 2;
            c.cup.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATE_Y"] + Math.sin(Math.PI * k) * 0.3;
        };
        cam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 2.4, 4.6);
        look = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0.2, 0);
    } else {
        const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFilterCoffee"])();
        inner.add(f.root);
        act = (k)=>f.pull(k);
        cam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1.75, 3.9);
        look = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0.34, 0);
    }
    root.rotation.y = -0.3;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowed"])(root);
    return {
        root,
        inner,
        act,
        cam,
        look
    };
}
/** The whole counter, for the wide still. */ function buildSpread() {
    const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTable"])();
    g.add(t.root);
    const put = (o, x, z, ry = 0)=>{
        o.position.set(x, o.position.y, z);
        o.rotation.y = ry;
        g.add(o);
    };
    const glass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGlass"])();
    put(glass.root, 0, 0.2);
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStack"])(7);
    put(s.root, -1.7, 0.9, 0.4);
    const bunPlate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPlate"])(1.05);
    put(bunPlate, -1.9, -1.3);
    const bun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBun"])();
    bun.root.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATE_Y"];
    bun.open(0.3);
    put(bun.root, -1.9, -1.3, -0.5);
    const cap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCappuccino"])();
    put(cap.root, 1.9, -1.0, 0.8);
    const sam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSamosas"])();
    put(sam.root, 0.3, -2.3, 0.3);
    const fil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFilterCoffee"])();
    put(fil.root, 1.7, 1.3);
    [
        "nankhatai",
        "osmania",
        "nankhatai",
        "jeera"
    ].forEach((k, i)=>{
        const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFlat"])(k);
        put(c, -0.4 + i * 0.75, 2.1 + Math.sin(i * 2) * 0.25, i);
        void __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BISCUIT"];
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowed"])(g);
    return g;
}
const cache = new Map();
const queue = [];
let running = false;
let ctx = null;
let idleTimer = 0;
function setup() {
    if (ctx) return ctx;
    const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
        powerPreference: "low-power"
    });
    renderer.setPixelRatio(1.5);
    renderer.setSize(STUDIO.W, STUDIO.H, false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["configureRenderer"])(renderer, true);
    ctx = {
        renderer,
        scene: createStudioScene(renderer),
        camera: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](STUDIO.fov, STUDIO.W / STUDIO.H, 0.1, 60)
    };
    return ctx;
}
function teardown() {
    if (!ctx) return;
    ctx.renderer.dispose();
    ctx.renderer.forceContextLoss();
    ctx = null;
}
function stage(key) {
    const [kind, arg] = key.split(":");
    if (kind === "item") {
        const s = buildItem(arg);
        return {
            obj: s.root,
            cam: s.cam,
            look: s.look
        };
    }
    const g = buildSpread();
    g.rotation.y = -0.35;
    return {
        obj: g,
        cam: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 11.5, 13.5),
        look: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0.2),
        wide: true
    };
}
async function run() {
    if (running) return;
    running = true;
    clearTimeout(idleTimer);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontsReady"])();
    while(queue.length){
        const job = queue.shift();
        try {
            const { renderer, scene, camera } = setup();
            const { obj, cam, look, wide } = stage(job.key);
            camera.aspect = wide ? 16 / 10 : STUDIO.W / STUDIO.H;
            camera.updateProjectionMatrix();
            renderer.setSize(wide ? 1120 : STUDIO.W, wide ? 700 : STUDIO.H, false);
            scene.add(obj);
            camera.position.copy(cam);
            camera.lookAt(look);
            renderer.render(scene, camera);
            const blob = await new Promise((r)=>renderer.domElement.toBlob(r, "image/webp", 0.93));
            scene.remove(obj);
            if (!blob) throw new Error("toBlob failed");
            job.resolve(URL.createObjectURL(blob));
        } catch (e) {
            job.reject(e);
        }
        await new Promise((r)=>setTimeout(r, 0));
    }
    running = false;
    idleTimer = window.setTimeout(teardown, 1500);
}
function getStill(key) {
    let p = cache.get(key);
    if (!p) {
        p = new Promise((resolve, reject)=>{
            queue.push({
                key,
                resolve,
                reject
            });
        });
        cache.set(key, p);
        const w = window;
        if (w.requestIdleCallback) w.requestIdleCallback(()=>run(), {
            timeout: 600
        });
        else setTimeout(()=>run(), 50);
    }
    return p;
}
}),
"[project]/lib/story/studio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "configureRenderer",
    ()=>configureRenderer,
    "studioEnvScene",
    ()=>studioEnvScene,
    "studioEnvironment",
    ()=>studioEnvironment,
    "studioLights",
    ()=>studioLights
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
;
/* ------------------------------------------------------------------
   One studio for everything: the live story, the offscreen stills, the card
   turntable and the dunk test all light the counter with the same softbox
   environment and the same lamps, so a still and a live frame match.
   ------------------------------------------------------------------ */ function softbox(w, h, color, intensity, pos, rot) {
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](w, h), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
        color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](color).multiplyScalar(intensity),
        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DoubleSide"],
        toneMapped: false
    }));
    m.position.set(...pos);
    m.rotation.set(...rot);
    return m;
}
function studioEnvScene() {
    const s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
    s.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]("#6e5f4c");
    s.add(softbox(9, 6, "#fff6e8", 2.4, [
        0,
        5.5,
        1
    ], [
        Math.PI / 2,
        0,
        0
    ]), softbox(3.2, 6.5, "#fff3df", 4.4, [
        -4.4,
        1.9,
        2.6
    ], [
        0,
        Math.PI / 3,
        0
    ]), softbox(1.2, 6.5, "#ffe9d0", 3.0, [
        4.6,
        1.5,
        1.0
    ], [
        0,
        -Math.PI / 2.4,
        0
    ]), softbox(3.5, 2.2, "#fff4e4", 1.5, [
        1.5,
        0.8,
        6
    ], [
        0,
        Math.PI,
        0
    ]), softbox(7, 1.0, "#ffffff", 1.9, [
        0,
        2.5,
        -5.5
    ], [
        0,
        0,
        0
    ]), softbox(8, 4, "#efe2cc", 0.7, [
        0,
        -3.2,
        2
    ], [
        -Math.PI / 2,
        0,
        0
    ]));
    return s;
}
const envCache = new WeakMap();
function studioEnvironment(renderer) {
    let t = envCache.get(renderer);
    if (!t) {
        const pmrem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PMREMGenerator"](renderer);
        t = pmrem.fromScene(studioEnvScene(), 0.02).texture;
        pmrem.dispose();
        envCache.set(renderer, t);
    }
    return t;
}
function studioLights({ shadows = false, reach = 5, mapSize = 2048 } = {}) {
    const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    const amb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmbientLight"]("#fff3e0", 0.62);
    const key = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"]("#fff0dc", 2.3);
    key.position.set(-4.2, 6.5, 4.2);
    const rim = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"]("#ffe8d2", 1.2);
    rim.position.set(4.5, 2.4, -3.5);
    const fill = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"]("#f6e3d0", 0.32);
    fill.position.set(0.5, -2.5, 3);
    if (shadows) {
        key.castShadow = true;
        key.shadow.mapSize.set(mapSize, mapSize);
        const c = key.shadow.camera;
        c.left = -reach;
        c.right = reach;
        c.top = reach;
        c.bottom = -reach;
        c.near = 0.5;
        c.far = 24;
        key.shadow.bias = -0.0005;
        key.shadow.normalBias = 0.025;
        key.shadow.radius = 3.5;
        g.add(key.target);
    }
    g.add(amb, key, rim, fill);
    g.userData = {
        key,
        rim,
        fill,
        amb
    };
    return g;
}
function configureRenderer(r, shadows = false) {
    r.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    r.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NeutralToneMapping"];
    r.toneMappingExposure = 1;
    r.setClearColor(0x000000, 0);
    if (shadows) {
        r.shadowMap.enabled = true;
        r.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PCFSoftShadowMap"];
    }
}
}),
"[project]/lib/story/textures.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blobTexture",
    ()=>blobTexture,
    "brushedBump",
    ()=>brushedBump,
    "bunCrust",
    ()=>bunCrust,
    "chaiSurface",
    ()=>chaiSurface,
    "crumbTexture",
    ()=>crumbTexture,
    "friedPastry",
    ()=>friedPastry,
    "glowTexture",
    ()=>glowTexture,
    "glucosePrint",
    ()=>glucosePrint,
    "kaapiFoam",
    ()=>kaapiFoam,
    "latteArt",
    ()=>latteArt,
    "marbleTexture",
    ()=>marbleTexture,
    "puffTexture",
    ()=>puffTexture,
    "roundPrint",
    ()=>roundPrint,
    "ruskPrint",
    ()=>ruskPrint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/print.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-ssr] (ecmascript)");
;
;
;
/* ------------------------------------------------------------------
   Everything painted or baked in the café: biscuit faces (with their emboss),
   foam, latte art, marble, bun crust, samosa blisters and steam. All canvas —
   nothing is downloaded.
   ------------------------------------------------------------------ */ const canvas = (w, h)=>{
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    return {
        c,
        x: c.getContext("2d")
    };
};
const tex = (c, srgb = true)=>{
    const t = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasTexture"](c);
    if (srgb) t.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    t.anisotropy = 8;
    return t;
};
const TAU = Math.PI * 2;
const memo = new Map();
function once(key, make) {
    if (!memo.has(key)) memo.set(key, make());
    return memo.get(key);
}
function speckle(x, W, H, n, r, cols, size = 1.4) {
    for(let i = 0; i < n; i++){
        x.fillStyle = cols[Math.floor(r() * cols.length)];
        x.globalAlpha = 0.25 + r() * 0.5;
        x.beginPath();
        x.arc(r() * W, r() * H, 0.4 + r() * size, 0, TAU);
        x.fill();
    }
    x.globalAlpha = 1;
}
/** Oven browning that creeps in from the edges of a rectangle. */ function bakeEdges(x, W, H, color, depth, alpha = 0.6) {
    const edge = (x0, y0, x1, y1, rx, ry, rw, rh)=>{
        const g = x.createLinearGradient(x0, y0, x1, y1);
        g.addColorStop(0, color.replace("A", String(alpha)));
        g.addColorStop(1, color.replace("A", "0"));
        x.fillStyle = g;
        x.fillRect(rx, ry, rw, rh);
    };
    edge(0, 0, depth, 0, 0, 0, depth, H);
    edge(W, 0, W - depth, 0, W - depth, 0, depth, H);
    edge(0, 0, 0, depth, 0, 0, W, depth);
    edge(0, H, 0, H - depth, 0, H - depth, W, depth);
}
function glucosePrint() {
    return once("glucose", ()=>{
        const W = 512, H = 826;
        const { c, x } = canvas(W, H), { c: bc, x: b } = canvas(W, H);
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(21);
        const g = x.createRadialGradient(W / 2, H / 2, 40, W / 2, H / 2, H * 0.62);
        g.addColorStop(0, "#e8bf7c");
        g.addColorStop(0.6, "#dfae66");
        g.addColorStop(1, "#cf954a");
        x.fillStyle = g;
        x.fillRect(0, 0, W, H);
        for(let i = 0; i < 26; i++){
            const gx = r() * W, gy = r() * H, gr = 40 + r() * 110;
            const gg = x.createRadialGradient(gx, gy, 0, gx, gy, gr);
            gg.addColorStop(0, r() > 0.5 ? "rgba(240,205,140,0.3)" : "rgba(190,128,58,0.22)");
            gg.addColorStop(1, "rgba(0,0,0,0)");
            x.fillStyle = gg;
            x.fillRect(gx - gr, gy - gr, gr * 2, gr * 2);
        }
        bakeEdges(x, W, H, "rgba(168,98,34,A)", 70, 0.62);
        speckle(x, W, H, 2600, r, [
            "#b9803a",
            "#f3d49a",
            "#a86a2a"
        ], 1.1);
        b.fillStyle = "#808080";
        b.fillRect(0, 0, W, H);
        // fine baked grain on the bump
        for(let i = 0; i < 5000; i++){
            const v = 112 + Math.floor(r() * 32);
            b.fillStyle = `rgb(${v},${v},${v})`;
            b.fillRect(r() * W, r() * H, 2, 2);
        }
        const raise = (fn, level = 215)=>{
            // colour: a soft lit edge above, shade below — so the emboss reads even in flat light
            x.save();
            x.translate(0, 2.5);
            x.fillStyle = x.strokeStyle = "rgba(120,66,18,0.5)";
            fn(x);
            x.restore();
            x.save();
            x.translate(0, -1.5);
            x.fillStyle = x.strokeStyle = "rgba(255,232,180,0.55)";
            fn(x);
            x.restore();
            x.save();
            x.fillStyle = x.strokeStyle = "#deae68";
            fn(x);
            x.restore();
            b.save();
            b.fillStyle = b.strokeStyle = `rgb(${level},${level},${level})`;
            fn(b);
            b.restore();
        };
        // frame
        raise((k)=>{
            k.lineWidth = 9;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundRect"])(k, 44, 44, W - 88, H - 88, 26);
            k.stroke();
        });
        raise((k)=>{
            k.lineWidth = 4;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundRect"])(k, 66, 66, W - 132, H - 132, 16);
            k.stroke();
        });
        // beaded border
        raise((k)=>{
            for(let i = 0; i < 13; i++){
                const px = 96 + i * (W - 192) / 12;
                for (const py of [
                    100,
                    H - 100
                ]){
                    k.beginPath();
                    k.arc(px, py, 7, 0, TAU);
                    k.fill();
                }
            }
            for(let i = 1; i < 20; i++){
                const py = 100 + i * (H - 200) / 20;
                for (const px of [
                    96,
                    W - 96
                ]){
                    k.beginPath();
                    k.arc(px, py, 7, 0, TAU);
                    k.fill();
                }
            }
        });
        // wordmark, running up the biscuit
        raise((k)=>{
            k.save();
            k.translate(W / 2, H / 2);
            k.rotate(-Math.PI / 2);
            k.textAlign = "center";
            k.textBaseline = "middle";
            k.font = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FONT"].display(138);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaced"])(k, 4);
            k.fillText(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["brand"].short, 0, 8);
            k.restore();
        }, 235);
        raise((k)=>{
            k.save();
            k.translate(W / 2, H / 2);
            k.rotate(-Math.PI / 2);
            k.textAlign = "center";
            k.textBaseline = "middle";
            k.font = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FONT"].sans(700, 25);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaced"])(k, 9);
            k.fillText("GLUCOSE", 0, -112);
            k.fillText("CHAI BISCUIT", 0, 118);
            k.restore();
        }, 205);
        // docker holes
        const holes = [];
        for (const px of [
            150,
            W - 150
        ])for(let i = 0; i < 4; i++)holes.push([
            px,
            200 + i * ((H - 400) / 3)
        ]);
        holes.forEach(([px, py])=>{
            x.fillStyle = "rgba(110,60,18,0.85)";
            x.beginPath();
            x.arc(px, py, 6.5, 0, TAU);
            x.fill();
            x.fillStyle = "rgba(255,230,180,0.5)";
            x.beginPath();
            x.arc(px, py + 5, 6, 0, Math.PI);
            x.fill();
            b.fillStyle = "#1c1c1c";
            b.beginPath();
            b.arc(px, py, 8, 0, TAU);
            b.fill();
        });
        return {
            map: tex(c),
            bump: tex(bc, false)
        };
    });
}
function ruskPrint() {
    return once("rusk", ()=>{
        const W = 420, H = 840;
        const { c, x } = canvas(W, H), { c: bc, x: b } = canvas(W, H);
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(5);
        x.fillStyle = "#e3b56c";
        x.fillRect(0, 0, W, H);
        b.fillStyle = "#8c8c8c";
        b.fillRect(0, 0, W, H);
        for(let i = 0; i < 30; i++){
            const gx = r() * W, gy = r() * H, gr = 60 + r() * 120;
            const gg = x.createRadialGradient(gx, gy, 0, gx, gy, gr);
            gg.addColorStop(0, r() > 0.4 ? "rgba(204,140,60,0.35)" : "rgba(246,214,150,0.35)");
            gg.addColorStop(1, "rgba(0,0,0,0)");
            x.fillStyle = gg;
            x.fillRect(gx - gr, gy - gr, gr * 2, gr * 2);
        }
        // open crumb: lots of little pores
        for(let i = 0; i < 1500; i++){
            const px = r() * W, py = r() * H, rx = 1.5 + r() * 5.5, ry = rx * (0.5 + r() * 0.8), a = r() * Math.PI;
            x.fillStyle = `rgba(150,88,30,${0.3 + r() * 0.4})`;
            x.beginPath();
            x.ellipse(px, py, rx, ry, a, 0, TAU);
            x.fill();
            x.fillStyle = "rgba(255,236,190,0.4)";
            x.beginPath();
            x.ellipse(px, py + ry * 0.7, rx, ry * 0.4, a, 0, TAU);
            x.fill();
            b.fillStyle = "#303030";
            b.beginPath();
            b.ellipse(px, py, rx, ry, a, 0, TAU);
            b.fill();
        }
        bakeEdges(x, W, H, "rgba(138,72,20,A)", 34, 0.95);
        bakeEdges(x, W, H, "rgba(150,84,26,A)", 90, 0.4);
        return {
            map: tex(c),
            bump: tex(bc, false)
        };
    });
}
function roundPrint(kind) {
    return once(`round-${kind}`, ()=>{
        const S = 512, R = S / 2;
        const { c, x } = canvas(S, S), { c: bc, x: b } = canvas(S, S);
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(kind === "osmania" ? 3 : kind === "jeera" ? 9 : 14);
        const pal = kind === "nankhatai" ? [
            "#f1dcb0",
            "#e9cc98",
            "#d7b077"
        ] : kind === "jeera" ? [
            "#e6bf80",
            "#d9a85e",
            "#b97c36"
        ] : [
            "#e0a04c",
            "#cf8a38",
            "#a9631f"
        ];
        const g = x.createRadialGradient(R, R, 20, R, R, R);
        g.addColorStop(0, pal[0]);
        g.addColorStop(0.72, pal[1]);
        g.addColorStop(1, pal[2]);
        x.fillStyle = g;
        x.fillRect(0, 0, S, S);
        b.fillStyle = "#808080";
        b.fillRect(0, 0, S, S);
        speckle(x, S, S, 1800, r, [
            pal[2],
            "#fff0cc"
        ], 1.2);
        for(let i = 0; i < 3000; i++){
            const v = 114 + Math.floor(r() * 28);
            b.fillStyle = `rgb(${v},${v},${v})`;
            b.fillRect(r() * S, r() * S, 2, 2);
        }
        if (kind === "nankhatai") {
            // the cracks that open as it bakes
            const crack = (px, py, a, len, w)=>{
                x.strokeStyle = "rgba(170,120,60,0.75)";
                b.strokeStyle = "#2a2a2a";
                x.lineCap = b.lineCap = "round";
                let cx = px, cy = py, ang = a;
                for(let i = 0; i < len; i++){
                    const nx = cx + Math.cos(ang) * 11, ny = cy + Math.sin(ang) * 11;
                    const lw = w * (1 - i / len) + 0.6;
                    x.lineWidth = lw;
                    x.beginPath();
                    x.moveTo(cx, cy);
                    x.lineTo(nx, ny);
                    x.stroke();
                    b.lineWidth = lw + 2;
                    b.beginPath();
                    b.moveTo(cx, cy);
                    b.lineTo(nx, ny);
                    b.stroke();
                    cx = nx;
                    cy = ny;
                    ang += (r() - 0.5) * 0.9;
                    if (r() > 0.88 && i < len - 4) crack(cx, cy, ang + (r() > 0.5 ? 1 : -1) * (0.6 + r() * 0.5), Math.floor((len - i) * 0.6), lw * 0.7);
                }
            };
            for(let i = 0; i < 7; i++){
                const a = i / 7 * TAU + r() * 0.5;
                crack(R + Math.cos(a) * 34, R + Math.sin(a) * 34, a, 12 + Math.floor(r() * 6), 6);
            }
            // pistachio slivers pressed into the middle
            for(let i = 0; i < 9; i++){
                const a = r() * TAU, d = r() * 30, px = R + Math.cos(a) * d, py = R + Math.sin(a) * d;
                x.save();
                x.translate(px, py);
                x.rotate(r() * Math.PI);
                x.fillStyle = r() > 0.4 ? "#8fae4c" : "#b7c96a";
                x.beginPath();
                x.ellipse(0, 0, 11, 5, 0, 0, TAU);
                x.fill();
                x.fillStyle = "rgba(255,255,220,0.35)";
                x.beginPath();
                x.ellipse(-2, -1.5, 6, 1.6, 0, 0, TAU);
                x.fill();
                x.restore();
                b.save();
                b.translate(px, py);
                b.fillStyle = "#c8c8c8";
                b.beginPath();
                b.ellipse(0, 0, 11, 6, 0, 0, TAU);
                b.fill();
                b.restore();
            }
        } else if (kind === "jeera") {
            for(let i = 0; i < 46; i++){
                const a = r() * TAU, d = Math.sqrt(r()) * R * 0.86, px = R + Math.cos(a) * d, py = R + Math.sin(a) * d, rot = r() * Math.PI;
                x.save();
                x.translate(px, py);
                x.rotate(rot);
                x.fillStyle = "#6b4a22";
                x.beginPath();
                x.ellipse(0, 0, 9, 2.6, 0, 0, TAU);
                x.fill();
                x.restore();
                b.save();
                b.translate(px, py);
                b.rotate(rot);
                b.fillStyle = "#bdbdbd";
                b.beginPath();
                b.ellipse(0, 0, 9, 3, 0, 0, TAU);
                b.fill();
                b.restore();
            }
        } else {
            // Osmania: an egg-washed top with a scored lattice
            x.strokeStyle = "rgba(140,78,22,0.55)";
            b.strokeStyle = "#484848";
            x.lineWidth = 3;
            b.lineWidth = 5;
            for(let i = -5; i <= 5; i++)for (const ctx of [
                x,
                b
            ]){
                ctx.beginPath();
                ctx.moveTo(R + i * 52 - R, 0);
                ctx.lineTo(R + i * 52 + R, S);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(R + i * 52 + R, 0);
                ctx.lineTo(R + i * 52 - R, S);
                ctx.stroke();
            }
            const ring = x.createRadialGradient(R, R, R * 0.7, R, R, R);
            ring.addColorStop(0, "rgba(120,60,10,0)");
            ring.addColorStop(1, "rgba(120,60,10,0.55)");
            x.fillStyle = ring;
            x.fillRect(0, 0, S, S);
        }
        return {
            map: tex(c),
            bump: tex(bc, false)
        };
    });
}
/* ---------------- surfaces of drinks ---------------- */ function bubbles(x, S, r, n, where, max, light) {
    for(let i = 0; i < n; i++){
        const [px, py] = where(i), s = 1.5 + r() * r() * max;
        x.strokeStyle = light;
        x.lineWidth = 1 + s * 0.14;
        x.globalAlpha = 0.45 + r() * 0.5;
        x.beginPath();
        x.arc(px, py, s, 0, TAU);
        x.stroke();
        x.fillStyle = "rgba(255,255,255,0.75)";
        x.beginPath();
        x.arc(px - s * 0.3, py - s * 0.35, Math.max(0.6, s * 0.22), 0, TAU);
        x.fill();
    }
    x.globalAlpha = 1;
    void S;
}
function chaiSurface() {
    return once("chai-surface", ()=>{
        const S = 512, R = S / 2;
        const { c, x } = canvas(S, S);
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(31);
        const g = x.createRadialGradient(R * 0.9, R * 0.9, 10, R, R, R);
        g.addColorStop(0, "#cd9f7a");
        g.addColorStop(0.7, "#c1906a");
        g.addColorStop(1, "#b17f58");
        x.fillStyle = g;
        x.fillRect(0, 0, S, S);
        // a slow swirl of lighter milk
        x.strokeStyle = "rgba(236,204,160,0.5)";
        x.lineCap = "round";
        for(let k = 0; k < 3; k++){
            x.lineWidth = 10 - k * 2;
            x.beginPath();
            for(let i = 0; i <= 60; i++){
                const a = i / 60 * TAU * 1.2 + k * 2.1, d = 30 + i * 2.6;
                const px = R + Math.cos(a) * d, py = R + Math.sin(a) * d;
                if (i) x.lineTo(px, py);
                else x.moveTo(px, py);
            }
            x.stroke();
        }
        // froth gathered at the rim, a raft of it off-centre
        const rim = x.createRadialGradient(R, R, R * 0.72, R, R, R);
        rim.addColorStop(0, "rgba(240,214,176,0)");
        rim.addColorStop(1, "rgba(240,214,176,0.8)");
        x.fillStyle = rim;
        x.fillRect(0, 0, S, S);
        bubbles(x, S, r, 260, ()=>{
            const a = r() * TAU, d = R * (0.8 + r() * 0.19);
            return [
                R + Math.cos(a) * d,
                R + Math.sin(a) * d
            ];
        }, 9, "rgba(255,240,214,0.95)");
        bubbles(x, S, r, 90, ()=>{
            const a = r() * TAU, d = r() * 70;
            return [
                R * 1.25 + Math.cos(a) * d,
                R * 0.75 + Math.sin(a) * d * 0.7
            ];
        }, 8, "rgba(255,240,214,0.9)");
        return tex(c);
    });
}
function latteArt() {
    return once("latte", ()=>{
        const S = 512, R = S / 2;
        const { c, x } = canvas(S, S);
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(8);
        const g = x.createRadialGradient(R, R, 20, R, R, R);
        g.addColorStop(0, "#9c5a26");
        g.addColorStop(0.8, "#8a4a1c");
        g.addColorStop(1, "#6f3713");
        x.fillStyle = g;
        x.fillRect(0, 0, S, S);
        for(let i = 0; i < 400; i++){
            x.fillStyle = `rgba(${r() > 0.5 ? "190,120,60" : "90,44,14"},${0.12 + r() * 0.2})`;
            x.beginPath();
            x.arc(r() * S, r() * S, 1 + r() * 5, 0, TAU);
            x.fill();
        }
        x.save();
        x.translate(R, R + 18);
        x.rotate(-0.25);
        x.shadowColor = "rgba(250,236,214,0.9)";
        x.shadowBlur = 5;
        x.strokeStyle = "#f8eedc";
        x.lineCap = "round";
        x.lineJoin = "round";
        // rosetta: nested leaves that narrow toward the top, then the pull-through
        for(let i = 0; i < 9; i++){
            const y = 132 - i * 30, w = 150 - i * 12, h = 46 - i * 2;
            x.lineWidth = 15 - i * 0.9;
            x.beginPath();
            x.moveTo(-w, y - h * 0.2);
            x.quadraticCurveTo(-w * 0.6, y + h, 0, y + h * 0.35);
            x.quadraticCurveTo(w * 0.6, y + h, w, y - h * 0.2);
            x.stroke();
        }
        x.fillStyle = "#f8eedc";
        x.beginPath();
        x.moveTo(0, -122);
        x.bezierCurveTo(-52, -190, -100, -128, 0, -78);
        x.bezierCurveTo(100, -128, 52, -190, 0, -122);
        x.fill();
        x.globalCompositeOperation = "destination-out";
        x.shadowBlur = 0;
        x.lineWidth = 7;
        x.beginPath();
        x.moveTo(0, 176);
        x.lineTo(0, -110);
        x.stroke();
        x.restore();
        x.globalCompositeOperation = "destination-over";
        x.fillStyle = "#8a4a1c";
        x.fillRect(0, 0, S, S);
        x.globalCompositeOperation = "source-over";
        const rim = x.createRadialGradient(R, R, R * 0.86, R, R, R);
        rim.addColorStop(0, "rgba(80,36,10,0)");
        rim.addColorStop(1, "rgba(80,36,10,0.6)");
        x.fillStyle = rim;
        x.fillRect(0, 0, S, S);
        return tex(c);
    });
}
function kaapiFoam() {
    return once("kaapi", ()=>{
        const S = 384, R = S / 2;
        const { c, x } = canvas(S, S);
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(17);
        const g = x.createRadialGradient(R, R, 10, R, R, R);
        g.addColorStop(0, "#dcb98c");
        g.addColorStop(1, "#b98552");
        x.fillStyle = g;
        x.fillRect(0, 0, S, S);
        bubbles(x, S, r, 1100, ()=>[
                r() * S,
                r() * S
            ], 11, "rgba(255,240,214,0.9)");
        return tex(c);
    });
}
function marbleTexture() {
    return once("marble", ()=>{
        const S = 1536;
        const { c, x } = canvas(S, S);
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(44);
        x.fillStyle = "#f6f2ea";
        x.fillRect(0, 0, S, S);
        for(let i = 0; i < 70; i++){
            const gx = r() * S, gy = r() * S, gr = 140 + r() * 380;
            const g = x.createRadialGradient(gx, gy, 0, gx, gy, gr);
            const grey = r() > 0.7;
            g.addColorStop(0, grey ? "rgba(214,209,201,0.22)" : "rgba(255,254,250,0.45)");
            g.addColorStop(1, grey ? "rgba(214,209,201,0)" : "rgba(255,254,250,0)");
            x.fillStyle = g;
            x.fillRect(gx - gr, gy - gr, gr * 2, gr * 2);
        }
        // veins: every stroke is laid down three times, wider and fainter, so it reads soft without a canvas filter
        const vein = (px, py, a, len, w, al)=>{
            let cx = px, cy = py, ang = a;
            x.lineCap = "round";
            for(let i = 0; i < len; i++){
                const nx = cx + Math.cos(ang) * 16, ny = cy + Math.sin(ang) * 16, k = 0.5 + r() * 0.5, lw = w * (0.5 + r());
                for (const [m, f] of [
                    [
                        1,
                        1
                    ],
                    [
                        2.4,
                        0.3
                    ],
                    [
                        5,
                        0.07
                    ]
                ]){
                    x.strokeStyle = `rgba(128,124,122,${al * k * f})`;
                    x.lineWidth = lw * m;
                    x.beginPath();
                    x.moveTo(cx, cy);
                    x.lineTo(nx, ny);
                    x.stroke();
                }
                cx = nx;
                cy = ny;
                ang += (r() - 0.5) * 0.5;
                if (r() > 0.94) vein(cx, cy, ang + (r() - 0.5) * 1.6, Math.floor(len * 0.35), w * 0.6, al * 0.7);
            }
        };
        for(let i = 0; i < 18; i++)vein(r() * S, r() * S, 0.6 + (r() - 0.5) * 1.2, 50 + Math.floor(r() * 70), 1 + r() * 2.4, 0.3 + r() * 0.3);
        const t = tex(c);
        t.anisotropy = 16;
        return t;
    });
}
function bunCrust() {
    return once("bun", ()=>{
        const W = 512, H = 512;
        const { c, x } = canvas(W, H);
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(12);
        const g = x.createLinearGradient(0, 0, 0, H);
        g.addColorStop(0, "#96501a");
        g.addColorStop(0.2, "#b3661f");
        g.addColorStop(0.36, "#d08f3f");
        g.addColorStop(0.47, "#ecc88c");
        g.addColorStop(0.53, "#efd09a");
        g.addColorStop(0.75, "#dba85e");
        g.addColorStop(1, "#bf8440");
        x.fillStyle = g;
        x.fillRect(0, 0, W, H);
        for(let i = 0; i < 60; i++){
            const gx = r() * W, gy = r() * H * 0.42, gr = 30 + r() * 80;
            const gg = x.createRadialGradient(gx, gy, 0, gx, gy, gr);
            gg.addColorStop(0, r() > 0.5 ? "rgba(120,58,14,0.28)" : "rgba(214,150,70,0.3)");
            gg.addColorStop(1, "rgba(0,0,0,0)");
            x.fillStyle = gg;
            x.fillRect(gx - gr, gy - gr, gr * 2, gr * 2);
        }
        speckle(x, W, H, 900, r, [
            "#8a4a16",
            "#f4d8a0"
        ], 1);
        return tex(c);
    });
}
function crumbTexture() {
    return once("crumb", ()=>{
        const S = 384, R = S / 2;
        const { c, x } = canvas(S, S);
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(6);
        x.fillStyle = "#f6e6c4";
        x.fillRect(0, 0, S, S);
        for(let i = 0; i < 900; i++){
            const px = r() * S, py = r() * S, s = 1 + r() * 5;
            x.fillStyle = `rgba(206,170,112,${0.25 + r() * 0.4})`;
            x.beginPath();
            x.ellipse(px, py, s, s * (0.5 + r() * 0.6), r() * 3, 0, TAU);
            x.fill();
        }
        const ring = x.createRadialGradient(R, R, R * 0.84, R, R, R);
        ring.addColorStop(0, "rgba(190,120,50,0)");
        ring.addColorStop(1, "rgba(176,104,40,0.95)");
        x.fillStyle = ring;
        x.fillRect(0, 0, S, S);
        return tex(c);
    });
}
function friedPastry() {
    return once("fried", ()=>{
        const S = 512;
        const { c, x } = canvas(S, S), { c: bc, x: b } = canvas(S, S);
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(27);
        x.fillStyle = "#cf9440";
        x.fillRect(0, 0, S, S);
        b.fillStyle = "#707070";
        b.fillRect(0, 0, S, S);
        for(let i = 0; i < 70; i++){
            const gx = r() * S, gy = r() * S, gr = 40 + r() * 100;
            const g = x.createRadialGradient(gx, gy, 0, gx, gy, gr);
            g.addColorStop(0, r() > 0.45 ? "rgba(160,92,26,0.4)" : "rgba(236,186,104,0.4)");
            g.addColorStop(1, "rgba(0,0,0,0)");
            x.fillStyle = g;
            x.fillRect(gx - gr, gy - gr, gr * 2, gr * 2);
        }
        for(let i = 0; i < 520; i++){
            const px = r() * S, py = r() * S, s = 2 + r() * r() * 15;
            const g = x.createRadialGradient(px - s * 0.3, py - s * 0.3, 0, px, py, s);
            g.addColorStop(0, "rgba(246,208,132,0.9)");
            g.addColorStop(0.7, "rgba(214,156,70,0.5)");
            g.addColorStop(1, "rgba(150,84,24,0.45)");
            x.fillStyle = g;
            x.beginPath();
            x.arc(px, py, s, 0, TAU);
            x.fill();
            const gb = b.createRadialGradient(px, py, 0, px, py, s);
            gb.addColorStop(0, "#f0f0f0");
            gb.addColorStop(1, "#707070");
            b.fillStyle = gb;
            b.beginPath();
            b.arc(px, py, s, 0, TAU);
            b.fill();
        }
        speckle(x, S, S, 700, r, [
            "#8f4f14"
        ], 1.3);
        const m = tex(c), bm = tex(bc, false);
        m.wrapS = m.wrapT = bm.wrapS = bm.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepeatWrapping"];
        return {
            map: m,
            bump: bm
        };
    });
}
function puffTexture(seed = 1) {
    return once(`puff-${seed}`, ()=>{
        const S = 128;
        const { c, x } = canvas(S, S);
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(seed * 13 + 1);
        for(let i = 0; i < 9; i++){
            const px = S / 2 + (r() - 0.5) * 46, py = S / 2 + (r() - 0.5) * 46, rr = 18 + r() * 24;
            const g = x.createRadialGradient(px, py, 0, px, py, rr);
            g.addColorStop(0, "rgba(255,255,255,0.3)");
            g.addColorStop(0.5, "rgba(255,255,255,0.12)");
            g.addColorStop(1, "rgba(255,255,255,0)");
            x.fillStyle = g;
            x.fillRect(0, 0, S, S);
        }
        return tex(c);
    });
}
function blobTexture(color = "50,28,10") {
    return once(`blob-${color}`, ()=>{
        const { c, x } = canvas(256, 256);
        const g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
        g.addColorStop(0, `rgba(${color},0.55)`);
        g.addColorStop(0.45, `rgba(${color},0.22)`);
        g.addColorStop(1, `rgba(${color},0)`);
        x.fillStyle = g;
        x.fillRect(0, 0, 256, 256);
        return tex(c);
    });
}
function glowTexture() {
    return once("glow", ()=>{
        const { c, x } = canvas(256, 256);
        const g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
        g.addColorStop(0, "rgba(120,170,255,0.9)");
        g.addColorStop(0.35, "rgba(70,110,255,0.35)");
        g.addColorStop(0.7, "rgba(255,140,60,0.1)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        x.fillStyle = g;
        x.fillRect(0, 0, 256, 256);
        return tex(c);
    });
}
function brushedBump() {
    return once("brushed", ()=>{
        const { c, x } = canvas(64, 512);
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mulberry32"])(2);
        for(let y = 0; y < 512; y++){
            const v = 110 + Math.floor(r() * 40);
            x.fillStyle = `rgb(${v},${v},${v})`;
            x.fillRect(0, y, 64, 1);
        }
        const t = tex(c, false);
        t.wrapS = t.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RepeatWrapping"];
        return t;
    });
}
}),
"[project]/lib/story/timeline.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/story/turntable.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTurntable",
    ()=>getTurntable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/print.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/studio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/stills.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
class Turntable {
    renderer;
    scene;
    camera;
    sweep;
    items = new Map();
    cur = null;
    clock = 0;
    busy = false;
    constructor(){
        this.renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["configureRenderer"])(this.renderer, true);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        this.scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStudioScene"])(this.renderer);
        this.camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STUDIO"].fov, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STUDIO"].W / __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STUDIO"].H, 0.1, 60);
        this.sweep = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"]("#fff4e0", 0);
        this.scene.add(this.sweep);
        const el = this.renderer.domElement;
        el.setAttribute("aria-hidden", "true");
        el.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;display:block";
    }
    use(id) {
        let e = this.items.get(id);
        if (!e) {
            const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildItem"])(id);
            e = {
                ...b,
                ry: b.root.rotation.y
            };
            this.items.set(id, e);
        }
        if (this.cur !== e) {
            if (this.cur) this.scene.remove(this.cur.root);
            this.scene.add(e.root);
            this.cur = e;
        }
        this.camera.position.copy(e.cam);
        this.camera.lookAt(e.look);
    }
    mount(host, overscan = 1) {
        host.appendChild(this.renderer.domElement);
        const w = Math.max(1, host.clientWidth), h = Math.max(1, host.clientHeight);
        this.renderer.setSize(w, h, false);
        this.camera.aspect = w / h;
        this.camera.zoom = 1 / overscan;
        this.camera.updateProjectionMatrix();
    }
    unmount() {
        this.renderer.domElement.remove();
    }
    apply(s) {
        const e = this.cur;
        if (!e) return;
        this.clock += 1 / 60;
        e.inner.position.y = s.hop * 0.22;
        e.root.rotation.y = e.ry + s.spin * Math.PI * 2;
        e.act(s.act, this.clock);
        this.sweep.intensity = Math.sin(Math.PI * s.sweep) * 2.2;
        this.sweep.position.set(-5 + 10 * s.sweep, 2.5, 4);
    }
    render() {
        this.renderer.render(this.scene, this.camera);
    }
    warm(id) {
        this.use(id);
        this.renderer.compile(this.scene, this.camera);
    }
}
let instance = null;
function getTurntable() {
    instance ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontsReady"])().then(()=>new Turntable());
    return instance;
}
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
];})()

//# sourceMappingURL=_0dizgciqyft0n._.js.map