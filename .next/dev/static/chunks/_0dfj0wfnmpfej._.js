(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/story/DunkScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DunkScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export D as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/print.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/studio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const BASE = -0.95, SURF = BASE + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLASS"].LEVEL_MAX;
function Rig({ ctrl }) {
    _s();
    const { camera, size, gl, scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"])();
    const cam = camera;
    const lights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Rig.useMemo[lights]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioLights"])({
                shadows: true,
                reach: 3.2,
                mapSize: 1024
            })
    }["Rig.useMemo[lights]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Rig.useEffect": ()=>{
            scene.environment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioEnvironment"])(gl);
            scene.add(lights);
            return ({
                "Rig.useEffect": ()=>{
                    scene.remove(lights);
                }
            })["Rig.useEffect"];
        }
    }["Rig.useEffect"], [
        gl,
        scene,
        lights
    ]);
    const W = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Rig.useMemo[W]": ()=>{
            const glass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlass"])();
            glass.root.position.y = BASE;
            glass.setLevel(1);
            const steam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSteam"])(10, {
                rise: 1.6,
                size: 0.6,
                spread: 0.26
            });
            steam.root.position.set(0, SURF + 0.05, 0);
            const splash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDrops"])(16);
            const counter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](14, 14), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShadowMaterial"]({
                opacity: 0.24,
                color: "#3a1d0a"
            }));
            counter.rotation.x = -Math.PI / 2;
            counter.position.y = BASE;
            counter.receiveShadow = true;
            const holder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            return {
                glass,
                steam,
                splash,
                counter,
                holder,
                biscuits: new Map()
            };
        }
    }["Rig.useMemo[W]"], []);
    const S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        kind: "",
        fresh: -1,
        y: 4,
        secs: 0,
        line: -99,
        phase: "hover",
        lostT: 0,
        enter: 0,
        lastTick: -1,
        slosh: 0
    });
    const V = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Rig.useMemo[V]": ()=>({
                at: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, SURF + 0.02, 0),
                t: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.36, 0),
                d: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.22, 0.26, 1).normalize()
            })
    }["Rig.useMemo[V]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Rig.useFrame": (st, dt)=>{
            const c = ctrl.current;
            if (!c) return;
            const s = S.current, t = st.clock.elapsedTime, d = Math.min(dt, 0.05);
            // a fresh biscuit
            if (c.kind !== s.kind || c.fresh !== s.fresh) {
                if (s.kind) {
                    const old = W.biscuits.get(s.kind);
                    if (old) old.root.visible = false;
                }
                let b = W.biscuits.get(c.kind);
                if (!b) {
                    b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDunkBiscuit"])(c.kind);
                    W.biscuits.set(c.kind, b);
                    W.holder.add(b.root);
                }
                b.root.visible = true;
                b.set({
                    soak: -99,
                    wet: 1,
                    split: false
                });
                b.hinge.rotation.set(0, 0, 0);
                Object.assign(s, {
                    kind: c.kind,
                    fresh: c.fresh,
                    secs: 0,
                    line: -99,
                    phase: "hover",
                    lostT: 0,
                    enter: 0,
                    lastTick: -1
                });
                c.onTick?.(0);
            }
            const b = W.biscuits.get(c.kind);
            const B = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BISCUIT"][c.kind], half = B.h / 2;
            const hover = BASE + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLASS"].H + 0.3 + half, depth = Math.min(0.46, B.h * 0.47), deep = SURF - depth + half;
            s.enter = Math.min(1, s.enter + d * 2.2);
            const want = s.phase === "hover" && c.holding ? deep : hover;
            const step = d * (want < s.y ? 3.4 : 2.6);
            s.y = Math.abs(want - s.y) <= step ? want : s.y + Math.sign(want - s.y) * step;
            if (s.enter < 1 && !c.holding) s.y = hover;
            const under = s.y < deep + 0.05;
            if (s.phase === "hover") {
                if (c.holding && under) {
                    s.secs += d;
                    if (s.secs >= c.limit) {
                        s.phase = "lost";
                        s.lostT = 0;
                        s.slosh = 1;
                        c.onResult?.("lost", s.secs);
                    }
                } else if (!c.holding && s.secs > 0 && s.y >= hover - 0.02) {
                    s.phase = "done";
                    c.onResult?.(s.secs < c.sweet[0] ? "dry" : s.secs <= c.sweet[1] ? "perfect" : "risky", s.secs);
                }
                const tick = Math.round(s.secs * 20);
                if (tick !== s.lastTick) {
                    s.lastTick = tick;
                    c.onTick?.(s.secs);
                }
            }
            // the wet line: wherever the chai reached, plus what creeps up while it sits
            if (s.y < hover - 0.05) s.line = Math.max(s.line, Math.min(SURF - s.y, SURF - deep) + 0.015 + Math.min(1, s.secs / c.limit) * 0.1);
            const snap = SURF - deep - 0.035;
            b.set({
                soak: s.line,
                snap,
                split: s.phase === "lost"
            });
            const drop = (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"])(s.enter)) * 3.2;
            const bend = s.phase === "hover" && under ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((s.secs / c.limit - 0.75) / 0.25) : 0;
            b.root.position.set(0, s.y + drop + Math.sin(t * 1.4) * 0.01, 0);
            b.root.rotation.set(-0.05, -0.42 + drop * 0.5, 0.05 + Math.sin(t * 30) * 0.012 * bend);
            if (s.phase === "lost") {
                s.lostT += d;
                const fall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(s.lostT / 0.55);
                b.hinge.position.set(0, snap - fall * fall * 1.3, fall * 0.06);
                b.hinge.rotation.x = 0.3 + fall * 1.4;
                b.hinge.visible = fall < 0.7;
                W.splash.burst(V.at, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((s.lostT - 0.1) / 0.7), 0.85, 16);
            } else W.splash.mesh.visible = false;
            s.slosh = Math.max(0, s.slosh - d * 0.9);
            const dip = c.holding && under ? 0.05 : 0;
            W.glass.chai.uSlosh.value = Math.sin(t * 15) * (0.28 * s.slosh + dip * Math.min(1, s.secs * 4) * (1 - Math.min(1, s.secs * 1.5)));
            W.glass.chai.uTime.value = t;
            W.glass.surface.rotation.z = t * 0.12;
            W.steam.update(t, 0.45);
            // camera: fit the glass and the biscuit hovering over it
            const aspect = size.width / Math.max(1, size.height), tanH = Math.tan(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(cam.fov / 2));
            const dist = Math.max(3.85 / (2 * tanH), 2.5 / (2 * tanH * aspect));
            cam.position.copy(V.t).addScaledVector(V.d, dist);
            cam.lookAt(V.t.x, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(V.t.y, V.t.y, 0), V.t.z);
        }
    }["Rig.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.counter
            }, void 0, false, {
                fileName: "[project]/components/story/DunkScene.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.glass.root
            }, void 0, false, {
                fileName: "[project]/components/story/DunkScene.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.steam.root
            }, void 0, false, {
                fileName: "[project]/components/story/DunkScene.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.splash.mesh
            }, void 0, false, {
                fileName: "[project]/components/story/DunkScene.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.holder
            }, void 0, false, {
                fileName: "[project]/components/story/DunkScene.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/story/DunkScene.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(Rig, "Z/gVuF3m97zN1P/w0/QExfG0/eE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Rig;
function DunkScene({ ctrl }) {
    _s1();
    const [fonts, setFonts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DunkScene.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontsReady"])().then({
                "DunkScene.useEffect": ()=>setFonts(true)
            }["DunkScene.useEffect"]);
        }
    }["DunkScene.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0",
        children: fonts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            shadows: true,
            dpr: [
                1,
                1.75
            ],
            camera: {
                fov: 26,
                position: [
                    1.6,
                    2.4,
                    8
                ],
                near: 0.1,
                far: 60
            },
            gl: {
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
                toneMapping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeutralToneMapping"],
                toneMappingExposure: 1.0
            },
            className: "!absolute inset-0",
            "aria-hidden": true,
            frameloop: "always",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Rig, {
                ctrl: ctrl
            }, void 0, false, {
                fileName: "[project]/components/story/DunkScene.tsx",
                lineNumber: 126,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/story/DunkScene.tsx",
            lineNumber: 123,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/story/DunkScene.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s1(DunkScene, "dtjaueJ5jBVKE7DFzHLlw0gxD4w=");
_c1 = DunkScene;
var _c, _c1;
__turbopack_context__.k.register(_c, "Rig");
__turbopack_context__.k.register(_c1, "DunkScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/story/StoryScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoryScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export D as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/print.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/studio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/timeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
const b = (p, k)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"][k][0], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"][k][1]);
const easeIn = (t)=>t * t * t;
const bounce = (t)=>{
    const n = 7.5625, d = 2.75;
    if (t < 1 / d) return n * t * t;
    if (t < 2 / d) return n * (t -= 1.5 / d) * t + 0.75;
    if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + 0.9375;
    return n * (t -= 2.625 / d) * t + 0.984375;
};
const TAU = Math.PI * 2;
/** Counter height: the base of the glass, the top of the table. */ const BASE = -0.95;
const PAN_Y = BASE + 0.62;
const SURF = BASE + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLASS"].LEVEL_MAX; // chai surface in a full glass
const LIP = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1.262, 0.915, 0); // where the pan pours from, in its own space
const POUR_FROM = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.05, 1.5, 0);
const gulps = (s)=>{
    const x = s * 3, i = Math.min(2, Math.floor(x)), f = x - i;
    return {
        level: (i + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((f - 0.15) / 0.7))) / 3,
        f
    };
};
const shot = (t, d, w, h)=>({
        t: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...t),
        d: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](...d).normalize(),
        w,
        h
    });
function buildWorld() {
    // ---- hero: a full glass on its saucer, two biscuits
    const glass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlass"])();
    const saucer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    const plate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPlate"])(0.95);
    const b1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBiscuit"])("glucose");
    b1.position.set(0.7, 0.33, 0.28);
    b1.rotation.set(-1.15, 0.5, 0.25);
    const b2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFlat"])("glucose");
    b2.position.set(-0.56, 0.09, 0.52);
    b2.rotation.set(0.1, 1.1, 0.05);
    saucer.add(plate, b1, b2);
    const glassSteam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSteam"])(12, {
        rise: 1.75,
        size: 0.62,
        spread: 0.26
    });
    // ---- the brew
    const pan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPan"])();
    const burner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBurner"])();
    const spices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSpices"])();
    pan.body.add(spices.root);
    const milk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStream"])("#f6ecd9", {
        gloss: true
    });
    milk.material.emissiveIntensity = 0.3;
    const panSteam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSteam"])(16, {
        rise: 2.6,
        size: 1.5,
        spread: 1.3
    });
    // ---- the pour
    const stream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStream"])();
    const splash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDrops"])(16);
    const drip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDrops"])(4);
    // ---- the dunk
    const biscuit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDunkBiscuit"])("glucose");
    // ---- the table
    const table = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    const top = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTable"])();
    table.add(top.root);
    const slot = (o, x, z, ry = 0)=>{
        const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
        g.position.set(x, 0, z);
        g.rotation.y = ry;
        g.add(o);
        table.add(g);
        return g;
    };
    const stack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStack"])(7);
    const stackSlot = slot(stack.root, -2.05, 0.95, 0.45);
    const loose = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFlat"])("glucose"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFlat"])("glucose")
    ];
    const looseSlots = [
        slot(loose[0], -1.3, 2.25, 1.0),
        slot(loose[1], -1.0, 2.1, 1.4)
    ];
    const bun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBun"])();
    const bunPlate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPlate"])(1.05);
    bun.root.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_Y"];
    const bunGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    bunGroup.add(bunPlate, bun.root);
    const bunSlot = slot(bunGroup, -2.05, -1.2, -0.5);
    const cap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCappuccino"])();
    const capSlot = slot(cap.root, 2.1, -0.85, 0.8);
    const capSteam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSteam"])(6, {
        rise: 1.0,
        size: 0.42,
        spread: 0.2
    });
    capSteam.root.position.set(2.1, 0.5, -0.85);
    table.add(capSteam.root);
    const sam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSamosas"])();
    const samSlot = slot(sam.root, 0.3, -2.5, 0.3);
    const fil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFilterCoffee"])();
    const filSlot = slot(fil.root, 2.15, 1.2, 0);
    const kinds = [
        "nankhatai",
        "osmania",
        "jeera",
        "nankhatai",
        "osmania"
    ];
    const cookies = kinds.map((kind, i)=>{
        const mesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBiscuit"])(kind);
        const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
        g.add(mesh);
        table.add(g);
        return {
            g,
            mesh,
            kind,
            x: -0.2 + i * 0.5 + i % 2 * 0.06,
            z: 2.35 + Math.sin(i * 2.2) * 0.3 - i * 0.06,
            r: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BISCUIT"][kind].w / 2,
            t: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BISCUIT"][kind].t,
            yaw: i * 1.3
        };
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowed"])(table);
    // ---- a counter that only shows the shadows that fall on it
    const counter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](22, 22), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShadowMaterial"]({
        opacity: 0.26,
        color: "#3a1d0a"
    }));
    counter.rotation.x = -Math.PI / 2;
    counter.position.y = BASE;
    counter.receiveShadow = true;
    const drops = [
        stackSlot,
        bunSlot,
        capSlot,
        samSlot,
        filSlot
    ];
    return {
        glass,
        saucer,
        glassSteam,
        pan,
        burner,
        spices,
        milk,
        panSteam,
        stream,
        splash,
        drip,
        biscuit,
        table,
        stack,
        looseSlots,
        bun,
        cap,
        capSteam,
        sam,
        fil,
        cookies,
        counter,
        drops,
        bunSlot,
        capSlot,
        samSlot,
        filSlot,
        stackSlot
    };
}
function Rig({ progress, entrance, mobile, reduced, tier }) {
    _s();
    const { camera, size, gl, scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"])();
    const cam = camera;
    const lights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Rig.useMemo[lights]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioLights"])({
                shadows: true,
                reach: 5.6,
                mapSize: tier === 0 ? 1024 : 2048
            })
    }["Rig.useMemo[lights]"], [
        tier
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Rig.useEffect": ()=>{
            scene.environment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioEnvironment"])(gl);
            scene.environmentIntensity = 1;
            scene.add(lights);
            return ({
                "Rig.useEffect": ()=>{
                    scene.remove(lights);
                }
            })["Rig.useEffect"];
        }
    }["Rig.useEffect"], [
        gl,
        scene,
        lights
    ]);
    const W = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Rig.useMemo[W]": ()=>buildWorld()
    }["Rig.useMemo[W]"], []);
    const pointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePointer"])();
    const ptr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const swirl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const camPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.5, 9));
    const lookCur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -0.2, 0));
    const V = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Rig.useMemo[V]": ()=>({
                t: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
                d: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
                off: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
                lip: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
                to: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
                a: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
                c1: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](),
                c2: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](),
                c3: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](),
                tmp: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]()
            })
    }["Rig.useMemo[V]"], []);
    const shots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Rig.useMemo[shots]": ()=>({
                hero: shot([
                    0,
                    -0.14,
                    0
                ], [
                    0,
                    0.2,
                    1
                ], 3.0, 3.5),
                brewLow: shot([
                    0.2,
                    -0.3,
                    0
                ], [
                    0,
                    0.4,
                    1
                ], 5.0, 3.3),
                brew: shot([
                    0.15,
                    -0.08,
                    0
                ], [
                    0,
                    1.02,
                    1
                ], 5.5, 3.9),
                pour: shot([
                    0.75,
                    0.82,
                    0
                ], [
                    0.08,
                    0.1,
                    1
                ], 5.0, 5.2),
                dunk: shot([
                    0,
                    0.24,
                    0
                ], [
                    0.24,
                    0.3,
                    1
                ], 2.6, 3.3),
                table: shot([
                    0,
                    BASE,
                    0.25
                ], [
                    0,
                    0.94,
                    1
                ], 10.2, 6.2)
            })
    }["Rig.useMemo[shots]"], []);
    const frames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Rig.useFrame": (st, dt)=>{
            if (++frames.current === 3) window.dispatchEvent(new Event("tapri:scene-ready"));
            const p = progress.current;
            const e = reduced ? 1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(entrance.current));
            const t = st.clock.elapsedTime;
            const d = Math.min(dt, 0.05);
            const k = 1 - Math.pow(0.0016, d);
            ptr.current.x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(ptr.current.x, reduced ? 0 : pointer.current.x, k * 0.5);
            ptr.current.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(ptr.current.y, reduced ? 0 : pointer.current.y, k * 0.5);
            const px = ptr.current.x, py = ptr.current.y;
            const sway = reduced ? 0 : 1;
            const sip = b(p, "sip"), away = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "glassAway")), panIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"])(b(p, "panIn")), flame = b(p, "flame");
            const spice = b(p, "spice"), teaK = b(p, "tea"), steep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "steep")), milk = b(p, "milk"), mix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "mix")), boil = b(p, "boil");
            const lift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "lift")), pour = b(p, "pour"), panAway = easeIn(b(p, "panAway"));
            const bIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"])(b(p, "biscuitIn")), dunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "dunk")), soak = b(p, "soak"), liftB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "liftB")), snap = b(p, "snap");
            const tableT = b(p, "table"), turn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "tableTurn")), cover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "cover"));
            const statsHold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "statsIn")) * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "statsOut")));
            const night = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "night")) * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "day")));
            const tableIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(tableT / 0.34));
            // ---------------- light: the kitchen before dawn, then the café
            scene.environmentIntensity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(1, 0.42, night);
            lights.userData.amb.intensity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(0.62, 0.16, night);
            lights.userData.key.intensity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(2.3, 0.75, night);
            lights.userData.rim.intensity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(1.2, 0.5, night);
            W.counter.material.opacity = 0.26 * (1 - night) * (1 - tableIn) * e;
            W.counter.visible = W.counter.material.opacity > 0.004;
            // ---------------- the glass
            const first = p < __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].glassAway[1];
            const second = p >= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].lift[0];
            const g = W.glass;
            g.root.visible = first || second;
            W.saucer.visible = first;
            let level = 0, glassSteam = 0;
            if (first) {
                const gp = gulps(sip);
                level = 1 - 0.9 * gp.level;
                const x = -away * 7.5, y = BASE - (1 - e) * 2.2;
                W.saucer.position.set(x, y, 0);
                W.saucer.rotation.y = -0.3 + (1 - e) * 1.4 + px * 0.12 + away * 1.2;
                g.root.position.set(x, y + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_Y"], 0);
                g.root.rotation.set(0, t * 0.12 * sway + (1 - e) * 2, 0);
                g.root.scale.setScalar(0.7 + 0.3 * e);
                W.saucer.scale.setScalar(0.7 + 0.3 * e);
                g.chai.uSlosh.value = Math.sin(t * 8) * 0.22 * Math.sin(Math.PI * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((gp.f - 0.1) / 0.8)) * (sip > 0 && sip < 1 ? 1 : 0);
                glassSteam = e * (1 - away) * (0.35 + 0.65 * level);
            } else if (second) {
                level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((pour - 0.07) / 0.83));
                g.root.scale.setScalar(1);
                g.root.position.set(0, BASE - (1 - lift) * 4.5, 0);
                g.root.rotation.set(0, t * 0.1 * sway * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(tableT * 3)) + px * 0.1, 0);
                const plop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((snap - 0.74) / 0.26);
                g.chai.uSlosh.value = Math.sin(t * 13) * 0.07 * (pour > 0.07 && pour < 0.94 ? 1 : 0) + Math.sin(plop * 22) * 0.3 * (1 - plop) * (plop > 0 ? 1 : 0);
                glassSteam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((pour - 0.2) * 3) * (1 - cover);
            }
            g.setLevel(level);
            g.chai.uTime.value = t;
            g.surface.rotation.z = t * 0.15 * sway;
            W.glassSteam.root.position.set(g.root.position.x, g.root.position.y + g.levelY(Math.max(level, 0.5)) + 0.05, 0);
            W.glassSteam.update(t, glassSteam * 0.5);
            // ---------------- the pan on the flame
            const panOn = p > __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].panIn[0] && panAway < 1;
            const pan = W.pan;
            pan.root.visible = panOn;
            W.burner.root.visible = panOn && lift < 0.98;
            let surfaceY = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAN"].LEVEL;
            if (panOn) {
                const ph = boil * 3, bi = Math.min(2, Math.floor(ph)), rise = boil > 0 && boil < 1 ? Math.sin(Math.PI * Math.pow(ph - bi, 0.8)) : 0;
                surfaceY = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAN"].LEVEL + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(milk / 0.7)) * 0.08 + rise * 0.25 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((lift - 0.1) * 3) * 0.2;
                pan.setLevel(surfaceY);
                swirl.current += reduced ? 0 : d * (0.18 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(milk * 4) * 1.1 * (1 - mix * 0.5) + boil * 0.4);
                const u = pan.brew;
                u.uTime.value = t;
                u.uSwirl.value = swirl.current;
                u.uTea.value = steep;
                u.uMilk.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(milk / 0.85));
                u.uMix.value = mix;
                u.uFoam.value = boil > 0 ? 0.22 + 0.78 * rise : mix * 0.22;
                // bubbles take the colour of what is boiling
                V.c1.set("#dfe6e6");
                V.c2.set("#a5683a");
                V.c3.set("#efd8bd");
                pan.bubbleMat.color.copy(V.c1).lerp(V.c2, steep).lerp(V.c3, mix);
                pan.setBubbles(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(flame) * (0.12 + steep * 0.16 + mix * 0.12 + (boil > 0 ? 0.25 + rise * 0.5 : 0)) * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(lift * 4)), rise);
                pan.liquid.visible = lift < 0.42;
                W.spices.update(spice, teaK, t, surfaceY, pan.innerAt(surfaceY) * 0.9, swirl.current, mix);
                // from the flame to above the glass, tipping as it goes
                const tilt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((lift - 0.3) / 0.7) * 0.5 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(pour / 0.22)) * 0.66 * (1 - panAway) - panAway * 0.3;
                const cs = Math.cos(tilt), sn = Math.sin(tilt);
                const ox = POUR_FROM.x - (cs * LIP.x - sn * LIP.y), oy = POUR_FROM.y - (sn * LIP.x + cs * LIP.y);
                const hold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(lift * 1.15));
                pan.root.position.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(0, ox, hold) + panAway * 5.5, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(PAN_Y - (1 - panIn) * 5, oy, hold) + panAway * 3.4, 0);
                pan.root.rotation.set(0, 0, tilt * (lift > 0 ? 1 : 0));
                W.burner.root.position.set(0, PAN_Y - (1 - panIn) * 5 - easeIn(lift) * 5, 0);
                const fire = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(flame * 1.2) * (1 - 0.6 * rise) * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(b(p, "day") * 1.6));
                W.burner.setPower(fire * (0.92 + 0.08 * Math.sin(t * 31)), t);
                W.panSteam.root.position.set(pan.root.position.x, pan.root.position.y + surfaceY, 0);
                W.panSteam.update(t, (0.1 * steep + 0.25 * mix + (boil > 0 ? 0.3 + 0.35 * rise : 0)) * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(lift * 2.5)));
                // milk, from a jug off-camera
                const mOn = milk > 0 && milk < 0.86;
                if (mOn) {
                    const R = pan.innerAt(surfaceY);
                    V.to.set(pan.root.position.x + pan.brew.uHit.value.x * R, pan.root.position.y + surfaceY, -pan.brew.uHit.value.y * R);
                    V.a.set(V.to.x + 0.22, V.to.y + 5.2, V.to.z - 0.1);
                    W.milk.set(V.a, V.to, 0.05, 0.062, t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(milk / 0.1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((milk - 0.7) / 0.14));
                } else W.milk.mesh.visible = false;
            } else {
                W.milk.mesh.visible = false;
                W.panSteam.update(t, 0);
                W.burner.setPower(0, t);
            }
            // ---------------- the pour
            const pouring = panOn && pour > 0 && pour < 1;
            if (pouring) {
                pan.root.updateMatrixWorld(true);
                V.lip.copy(LIP).applyMatrix4(pan.root.matrixWorld);
                V.to.set(0.0, BASE + g.levelY(level) - 0.02, 0);
                W.stream.set(V.lip, V.to, 0.05, 0.034, t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(pour / 0.07), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((pour - 0.9) / 0.08));
                const hit = pour > 0.07 && pour < 0.96;
                V.to.y += 0.03;
                W.splash.burst(V.to, hit ? t * 2.4 % 1 : 0, 0.3, 9);
            } else {
                W.stream.mesh.visible = false;
                if (snap <= 0.74 || snap >= 1) W.splash.mesh.visible = false;
            }
            // ---------------- the dunk
            const bis = W.biscuit;
            const bisOn = p > __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].biscuitIn[0] && tableT < 0.5;
            bis.root.visible = bisOn;
            W.drip.mesh.visible = false;
            if (bisOn) {
                const hover = BASE + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLASS"].H + 0.32 + bis.half, deep = SURF - 0.43 + bis.half, hover2 = hover - 0.1;
                const cy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(5.2, hover, bIn), deep, dunk), hover2, liftB);
                const sagK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(snap / 0.42)), fallK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((snap - 0.42) / 0.36);
                bis.root.position.set(0, cy + Math.sin(t * 1.3) * 0.012 * sway + Math.sin((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(snap / 0.5) * Math.PI) * 0.03 + easeIn((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(tableT / 0.4)) * 5, 0);
                bis.root.rotation.set(-0.05 + (1 - bIn) * 1.2, -0.42 + (1 - bIn) * 2.2 + px * 0.1, 0.06 + Math.sin(fallK * 40) * 0.02 * (fallK > 0 && fallK < 0.3 ? 1 : 0));
                // the wet line climbs as it sits in the chai
                const line = dunk > 0 ? Math.min(SURF - cy, SURF - deep) + (liftB > 0 || soak > 0 ? 0.02 + soak * 0.085 : 0) : -99;
                bis.set({
                    soak: line,
                    split: snap > 0
                });
                if (snap > 0) {
                    bis.hinge.rotation.x = sagK * 0.5 + fallK * 1.6;
                    bis.hinge.position.y = -bis.half * 0.16 - fallK * fallK * 1.5;
                    bis.hinge.position.z = sagK * 0.01 + fallK * 0.12;
                    // gone under
                    bis.hinge.visible = bis.root.position.y + bis.hinge.position.y - 0.2 > SURF - 0.12;
                } else {
                    bis.hinge.rotation.x = 0;
                    bis.hinge.position.set(0, -bis.half * 0.16, 0);
                }
                // drips off the wet edge
                if (liftB > 0.2 && snap < 0.6) {
                    const bottom = cy - bis.half;
                    for(let i = 0; i < 3; i++){
                        const life = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(((p - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].liftB[0]) / 0.03 - 0.25 - i * 0.28) / 0.5);
                        const hang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(life / 0.5), fall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((life - 0.5) / 0.5);
                        const y = bottom - 0.02 - fall * fall * (bottom - SURF);
                        W.drip.place(i, (i - 1) * 0.12, y, 0.05, life > 0 && life < 1 ? 0.014 + hang * 0.012 : 0.0001);
                    }
                    W.drip.place(3, 0, -9, 0, 0.0001);
                    W.drip.commit(true);
                }
                // the plop
                if (snap > 0.74 && snap < 1) {
                    V.to.set(0, SURF + 0.02, 0);
                    W.splash.burst(V.to, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((snap - 0.74) / 0.26), 0.85, 16);
                }
            }
            // ---------------- the table
            const tableOn = tableT > 0;
            W.table.visible = tableOn;
            if (tableOn) {
                W.table.position.set(0, BASE - (1 - tableIn) * 6 - cover * 0.6, 0);
                W.table.rotation.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(0.25, -0.2, turn) + px * 0.05 * turn;
                W.drops.forEach({
                    "Rig.useFrame": (s, i)=>{
                        const kk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((tableT - 0.3 - i * 0.075) / 0.26);
                        s.visible = kk > 0;
                        s.position.y = (1 - bounce(kk)) * 3.6;
                        s.scale.setScalar(0.85 + 0.15 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(kk * 3));
                    }
                }["Rig.useFrame"]);
                // the stack lands one biscuit at a time
                W.stack.items.forEach({
                    "Rig.useFrame": ({ obj, rest }, i)=>{
                        const kk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((tableT - 0.32 - i * 0.05) / 0.2);
                        obj.visible = kk > 0;
                        obj.position.y = rest.y + (1 - bounce(kk)) * 2.6;
                        obj.rotation.y = rest.ry + (1 - kk) * (i % 2 ? 2 : -2);
                    }
                }["Rig.useFrame"]);
                W.looseSlots.forEach({
                    "Rig.useFrame": (s, i)=>{
                        const kk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((tableT - 0.68 - i * 0.06) / 0.2);
                        s.visible = kk > 0;
                        s.position.y = (1 - bounce(kk)) * 2.4;
                    }
                }["Rig.useFrame"]);
                W.bun.open((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((tableT - 0.62) / 0.3)) * 0.3);
                W.fil.pull(0);
                // the round ones roll in on their edges, wobble and fall flat
                W.cookies.forEach({
                    "Rig.useFrame": (c, i)=>{
                        const kk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((tableT - 0.42 - i * 0.07) / 0.32);
                        c.g.visible = kk > 0;
                        const roll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(kk / 0.72)), fall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((kk - 0.66) / 0.34));
                        const dist = (1 - roll) * 5.4;
                        c.g.position.set(c.x + dist, 0, c.z);
                        c.g.rotation.y = c.yaw * fall;
                        c.mesh.position.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(c.r, c.t / 2 + (c.kind === "nankhatai" ? 0 : 0), fall);
                        c.mesh.rotation.set(-Math.PI / 2 * fall, 0, dist / c.r + Math.sin(kk * 30) * 0.05 * (1 - fall));
                    }
                }["Rig.useFrame"]);
                W.capSteam.update(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])((tableT - 0.55) * 3) * 0.4);
            }
            // ---------------- camera
            const aspect = size.width / Math.max(1, size.height);
            const tanH = Math.tan(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(cam.fov / 2));
            const fit = {
                "Rig.useFrame.fit": (s, sw = 1)=>Math.max(s.h / (2 * tanH), s.w * sw / (2 * tanH * aspect))
            }["Rig.useFrame.fit"];
            const T = V.t.copy(shots.hero.t), Dd = V.d.copy(shots.hero.d);
            let dist = fit(shots.hero);
            const blend = {
                "Rig.useFrame.blend": (s, kk, x, sw = 1, dy = 0)=>{
                    if (kk <= 0) return;
                    T.lerp(V.off.copy(s.t).setX(x ?? s.t.x).setY(s.t.y + dy), kk);
                    Dd.lerp(s.d, kk).normalize();
                    dist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lerp"])(dist, fit(s, sw), kk);
                }
            }["Rig.useFrame.blend"];
            blend(shots.brewLow, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].glassAway[0] + 0.012, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].panIn[1])), mobile ? 0.3 : -0.2);
            blend(shots.brew, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].flame[1] - 0.012, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].spice[0] + 0.03)), mobile ? 0.3 : 0.15, mobile ? 0.8 : 1);
            blend(shots.pour, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].lift[0], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].lift[1])), mobile ? 0.62 : 0.3, mobile ? 0.78 : 1);
            blend(shots.dunk, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].panAway[0], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].biscuitIn[1])), 0, mobile ? 1.3 : 1, mobile ? -0.5 : 0);
            blend(shots.table, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].table[0], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEAT"].table[0] + 0.05)), mobile ? 0 : -1.45, mobile ? 0.78 : 1);
            dist *= 1 - statsHold * 0.04;
            if (boil > 0 && boil < 1) dist *= 1 - Math.sin(Math.PI * boil) * 0.05;
            if (soak > 0) dist *= 1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeInOut"])(soak) * 0.05 * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(tableT * 8));
            if (turn > 0) dist *= 1 + turn * 0.03;
            T.y -= cover * 0.6;
            camPos.current.copy(T).addScaledVector(Dd, dist);
            camPos.current.x += px * 0.28;
            camPos.current.y += py * 0.16;
            cam.position.lerp(camPos.current, k);
            lookCur.current.lerp(T, k);
            cam.lookAt(lookCur.current);
        }
    }["Rig.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.counter
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.saucer
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.glass.root
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.glassSteam.root
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.burner.root
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.pan.root
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.panSteam.root
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.milk.mesh
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.stream.mesh
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.splash.mesh
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.drip.mesh
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.biscuit.root
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.table
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/story/StoryScene.tsx",
        lineNumber: 314,
        columnNumber: 5
    }, this);
}
_s(Rig, "4pDuiE75O75v5eHRAloX6ku6hz4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePointer"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Rig;
function StoryScene({ progress, entrance, reduced = false }) {
    _s1();
    const tier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQualityTier"])();
    const mobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const wrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fonts, setFonts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoryScene.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontsReady"])().then({
                "StoryScene.useEffect": ()=>setFonts(true)
            }["StoryScene.useEffect"]);
        }
    }["StoryScene.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoryScene.useEffect": ()=>{
            const el = wrap.current;
            if (!el) return;
            const io = new IntersectionObserver({
                "StoryScene.useEffect": ([en])=>setVisible(en.isIntersecting)
            }["StoryScene.useEffect"], {
                threshold: 0
            });
            io.observe(el);
            return ({
                "StoryScene.useEffect": ()=>io.disconnect()
            })["StoryScene.useEffect"];
        }
    }["StoryScene.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrap,
        className: "absolute inset-0",
        children: fonts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            shadows: true,
            dpr: [
                1,
                tier === 2 ? 1.75 : tier === 1 ? 1.5 : 1.25
            ],
            camera: {
                fov: mobile ? 30 : 26,
                position: [
                    0,
                    0.5,
                    9
                ],
                near: 0.1,
                far: 80
            },
            gl: {
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
                toneMapping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeutralToneMapping"],
                toneMappingExposure: 1.0
            },
            className: "!absolute inset-0",
            "aria-hidden": true,
            frameloop: visible ? "always" : "never",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Rig, {
                    progress: progress,
                    entrance: entrance,
                    mobile: mobile,
                    reduced: reduced,
                    tier: tier
                }, void 0, false, {
                    fileName: "[project]/components/story/StoryScene.tsx",
                    lineNumber: 357,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 356,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/story/StoryScene.tsx",
            lineNumber: 347,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/story/StoryScene.tsx",
        lineNumber: 345,
        columnNumber: 5
    }, this);
}
_s1(StoryScene, "6TV4FuKvNBQ3Sx3SyfhX2UupIK8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQualityTier"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c1 = StoryScene;
var _c, _c1;
__turbopack_context__.k.register(_c, "Rig");
__turbopack_context__.k.register(_c1, "StoryScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/story/engine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DunkScene",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$DunkScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "StoryScene",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$StoryScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "getStill",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStill"],
    "getTurntable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$turntable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTurntable"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$engine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/story/engine.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$StoryScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/story/StoryScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$DunkScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/story/DunkScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/stills.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$turntable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/turntable.ts [app-client] (ecmascript)");
}),
"[project]/lib/story/engine.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/** The one async entry for everything WebGL, so three.js is fetched once and only when needed. */ var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$StoryScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/story/StoryScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$DunkScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/story/DunkScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/stills.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$turntable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/turntable.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/story/materials.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
function glassMaterial(tint = "#fffdf5", { opacity = 0.04, edge = 0.36, gloss = 1 } = {}) {
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: "#000000",
        roughness: 0.05,
        metalness: 0,
        transparent: true,
        opacity,
        clearcoat: 0,
        envMapIntensity: 0.66 * gloss,
        depthWrite: false,
        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
        specularIntensity: 1,
        specularColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](tint),
        ior: 1.5,
        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomBlending"],
        blendSrc: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneFactor"],
        blendDst: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneMinusSrcAlphaFactor"],
        blendSrcAlpha: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneFactor"],
        blendDstAlpha: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneMinusSrcAlphaFactor"]
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
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color,
        roughness: 0.34,
        clearcoat: 0.5,
        clearcoatRoughness: 0.25,
        sheen: 0.5,
        sheenColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#ffe2c0"),
        sheenRoughness: 0.5,
        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
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
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-0.3, -0.15)
        }
    };
    const col = (hex)=>{
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](hex);
        return `vec3(${c.r.toFixed(4)}, ${c.g.toFixed(4)}, ${c.b.toFixed(4)})`;
    };
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
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
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        map,
        bumpMap: bump,
        bumpScale,
        roughness: rough,
        metalness: 0,
        side: dunk ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrontSide"]
    });
    if (!dunk) return {
        material: m,
        uniforms: u
    };
    const cc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](crumb);
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
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
        uniforms: u,
        transparent: true,
        depthWrite: false,
        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
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
const steel = (rough = 0.24, color = "#d7dbdc")=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color,
        metalness: 1,
        roughness: rough,
        envMapIntensity: 1.15
    });
const ceramic = (color = "#fbf6ec")=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color,
        roughness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.08
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/story/models.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/geometries/RoundedBoxGeometry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/print.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/materials.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/textures.ts [app-client] (ecmascript)");
;
;
;
;
;
/* ------------------------------------------------------------------
   Plain three.js builders shared by the story, the stills, the card
   turntable and the dunk test. Units: the chai glass is 1.5 tall.
   ------------------------------------------------------------------ */ const ss = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep;
const lerp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp;
const clamp01 = (v)=>Math.min(1, Math.max(0, v));
const TAU = Math.PI * 2;
const V2 = (x, y)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](x, y);
_c = V2;
const lathe = (pts, seg = 96)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LatheGeometry"](pts.map(([x, y])=>V2(x, y)), seg);
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
    g.setAttribute("uv", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](uv, 2));
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
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "glass";
    const glass = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](glassGeometry(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glassMaterial"])("#fffdf5", {
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
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chaiMaterial"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAI"]);
    const chai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](lathe(vol, 72), c.material);
    chai.renderOrder = 1;
    const surface = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleGeometry"](1, 64), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chaiSurface"])(),
        roughness: 0.22,
        clearcoat: 0.7,
        clearcoatRoughness: 0.2,
        emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAI"]),
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
function createPlate(r = 0.95, mat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ceramic"])()) {
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
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](g, mat);
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
        g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"](pts), {
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
        const s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
        s.moveTo(-hw + 0.05, -hh);
        s.lineTo(hw - 0.05, -hh);
        s.quadraticCurveTo(hw, -hh, hw, -hh + 0.05);
        s.lineTo(hw, hh - 0.28);
        s.bezierCurveTo(hw + 0.02, hh - 0.05, hw * 0.5, hh, 0, hh);
        s.bezierCurveTo(-hw * 0.5, hh, -hw - 0.02, hh - 0.05, -hw, hh - 0.28);
        s.lineTo(-hw, -hh + 0.05);
        s.quadraticCurveTo(-hw, -hh, -hw + 0.05, -hh);
        g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](s, {
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
const printFor = (kind)=>kind === "glucose" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glucosePrint"])() : kind === "rusk" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ruskPrint"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundPrint"])(kind);
const plainMat = new Map();
function createBiscuit(kind = "glucose") {
    let m = plainMat.get(kind);
    if (!m) {
        const p = printFor(kind);
        m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["biscuitMaterial"])(p.map, p.bump, {
            rough: kind === "osmania" ? 0.55 : 0.86
        }).material;
        plainMat.set(kind, m);
    }
    const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](biscuitGeometry(kind), m);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
}
function createFlat(kind = "glucose") {
    const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    const m = createBiscuit(kind);
    m.rotation.x = -Math.PI / 2;
    m.position.y = BISCUIT[kind].t / 2;
    g.add(m);
    return g;
}
function createDunkBiscuit(kind = "glucose") {
    const B = BISCUIT[kind], p = printFor(kind), geo = biscuitGeometry(kind);
    const mk = (part)=>{
        const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["biscuitMaterial"])(p.map, p.bump, {
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
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    root.name = `dunk-${kind}`;
    const whole = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geo, mats[0].material), top = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geo, mats[1].material), bottom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geo, mats[2].material);
    const hinge = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
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
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "stack";
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(4), B = BISCUIT[kind];
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
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "pan";
    const body = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    root.add(body);
    const outside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steel"])(0.3);
    outside.bumpMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brushedBump"])();
    outside.bumpScale = 0.35;
    outside.bumpMap.repeat.set(1, 3);
    const shell = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](lathe([
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
    const handle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    handle.position.set(1.2, 0.8, 0);
    handle.rotation.z = 0.16;
    const tang = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](0.75, 0.035, 0.2, 2, 0.015), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steel"])(0.3));
    tang.position.x = 0.36;
    const grip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](1.05, 0.13, 0.25, 4, 0.06), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: "#17120f",
        roughness: 0.42,
        clearcoat: 0.4,
        clearcoatRoughness: 0.4
    }));
    grip.position.x = 1.2;
    const eye = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](0.05, 0.016, 8, 20), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steel"])(0.25));
    eye.position.set(1.66, 0, 0);
    eye.rotation.x = Math.PI / 2;
    handle.add(tang, grip, eye);
    for (const z of [
        -0.055,
        0.055
    ]){
        const rv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.026, 12, 8), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steel"])(0.2));
        rv.position.set(0.07, 0.02, z);
        rv.scale.y = 0.5;
        handle.add(rv);
    }
    body.add(handle);
    // the brew
    const brew = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brewMaterial"])();
    const liquid = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleGeometry"](1, 96), brew.material);
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
    const N = 110, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(19);
    const bubbleMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: "#f0dcc0",
        roughness: 0.12,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        transparent: true,
        opacity: 0.86
    });
    const bubbles = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstancedMesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](1, 14, 8, 0, TAU, 0, Math.PI / 2), bubbleMat, N);
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
    const M = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"](), q = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"](), v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), sv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
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
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "burner";
    const iron = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#1b1917",
        roughness: 0.62,
        metalness: 0.55
    });
    const base = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.72, 0.9, 0.2, 56), iron);
    base.position.y = -0.5;
    const head = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.78, 0.84, 0.09, 56), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#3a332c",
        roughness: 0.45,
        metalness: 0.8
    }));
    head.position.y = -0.37;
    const cap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.56, 0.6, 0.06, 48), iron);
    cap.position.y = -0.3;
    root.add(base, head, cap);
    for(let i = 0; i < 4; i++){
        const a = i / 4 * TAU + Math.PI / 4;
        const arm = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](1.0, 0.07, 0.09, 2, 0.02), iron);
        arm.position.set(Math.cos(a) * 1.0, -0.04, Math.sin(a) * 1.0);
        arm.rotation.y = -a;
        root.add(arm);
        const leg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.035, 0.035, 0.5, 8), iron);
        leg.position.set(Math.cos(a) * 1.46, -0.3, Math.sin(a) * 1.46);
        root.add(leg);
    }
    const ring = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](1.46, 0.035, 8, 72), iron);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.55;
    root.add(ring);
    // flames
    const N = 30, fl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flameMaterial"])();
    const cone = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConeGeometry"](0.085, 1, 10, 6, true);
    cone.translate(0, 0.5, 0);
    const flames = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstancedMesh"](cone, fl.material, N);
    flames.frustumCulled = false;
    flames.userData.noShadow = true;
    flames.renderOrder = 5;
    const M = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"](), q = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"](), up = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), dir = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), pos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), sc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
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
    const glow = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sprite"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpriteMaterial"]({
        map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glowTexture"])(),
        transparent: true,
        depthWrite: false,
        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
        opacity: 0,
        toneMapped: false
    }));
    glow.scale.set(4.4, 1.6, 1);
    glow.position.set(0, -0.22, 0.2);
    glow.renderOrder = 4;
    glow.userData.noShadow = true;
    root.add(glow);
    const light = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"]("#6f9dff", 0, 2.4, 1.4);
    light.position.set(0, -0.6, 1.3);
    root.add(light);
    const warm = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"]("#ffab5c", 0, 9, 1.5);
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
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "spices";
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(33);
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
            from: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]((r() - 0.5) * 0.9, 3.4 + r() * 0.8, (r() - 0.5) * 0.5),
            spin: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](r() * 6 - 3, r() * 6 - 3, r() * 6 - 3),
            ph: r() * TAU,
            float,
            group
        });
        obj.visible = false;
        root.add(obj);
    };
    // ginger — pounded, fibrous
    const gingerGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](0.105, 2);
    {
        const p = gingerGeo.getAttribute("position");
        const v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        for(let i = 0; i < p.count; i++){
            v.fromBufferAttribute(p, i);
            const k = 1 + 0.22 * Math.sin(v.x * 23 + v.y * 11) * Math.cos(v.z * 17 + v.x * 7);
            v.multiplyScalar(k);
            p.setXYZ(i, v.x * 1.35, v.y * 0.62, v.z);
        }
        gingerGeo.computeVertexNormals();
    }
    const gingerMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#cdb886",
        roughness: 0.82
    });
    for(let i = 0; i < 4; i++){
        const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gingerGeo, gingerMat);
        m.scale.setScalar(0.85 + r() * 0.5);
        add(m, 0, i * 0.028, 0.03);
    }
    // green cardamom
    const podGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.06, 16, 12);
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
    const podMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#96a65a",
        roughness: 0.7
    });
    for(let i = 0; i < 6; i++){
        const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](podGeo, podMat);
        m.rotation.z = Math.PI / 2;
        const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
        g.add(m);
        add(g, 1, 0.17 + i * 0.02, 0.02);
    }
    // cloves
    const cloveMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#3b2212",
        roughness: 0.8
    });
    for(let i = 0; i < 5; i++){
        const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
        const stem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.014, 0.022, 0.17, 8), cloveMat);
        stem.rotation.z = Math.PI / 2;
        const head = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.038, 10, 8), cloveMat);
        head.position.x = 0.1;
        g.add(stem, head);
        add(g, 2, 0.32 + i * 0.02, 0.015);
    }
    // one curl of cinnamon
    {
        const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
        const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
            color: "#8f5527",
            roughness: 0.85,
            side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
        });
        const a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.075, 0.075, 0.85, 20, 1, true, 0, TAU * 0.86), mat);
        a.rotation.z = Math.PI / 2;
        const b = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.045, 0.045, 0.85, 16, 1, true, 1, TAU * 0.8), mat);
        b.rotation.z = Math.PI / 2;
        b.position.z = 0.02;
        g.add(a, b);
        add(g, 3, 0.44, 0.045);
    }
    // black pepper
    const pepGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.04, 10, 8), pepMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#1c1511",
        roughness: 0.75
    });
    for(let i = 0; i < 9; i++)add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](pepGeo, pepMat), 4, 0.54 + i * 0.012, 0.012);
    // tea: a shower of CTC granules
    const N = 520;
    const tea = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstancedMesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](0.016, 0), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
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
    const M = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"](), q = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"](), e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"](), v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), sv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
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
function createStream(color = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAI"], { S = 34, RS = 12, gloss = true } = {}) {
    const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
    const pos = new Float32Array((S + 1) * (RS + 1) * 3), nor = new Float32Array((S + 1) * (RS + 1) * 3);
    const idx = [];
    for(let i = 0; i < S; i++)for(let j = 0; j < RS; j++){
        const a = i * (RS + 1) + j, b = a + RS + 1;
        idx.push(a, a + 1, b, b, a + 1, b + 1);
    }
    g.setIndex(idx);
    g.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](pos, 3));
    g.setAttribute("normal", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](nor, 3));
    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color,
        roughness: gloss ? 0.16 : 0.3,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color),
        emissiveIntensity: 0.16
    });
    const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](g, mat);
    mesh.frustumCulled = false;
    mesh.castShadow = true;
    mesh.visible = false;
    const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), T = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), N = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), Z = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1), B = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
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
function createDrops(n = 24, color = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAI"]) {
    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color,
        roughness: 0.15,
        clearcoat: 1,
        emissive: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color),
        emissiveIntensity: 0.15
    });
    const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstancedMesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](1, 12, 10), mat, n);
    mesh.frustumCulled = false;
    mesh.visible = false;
    const M = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"](), q = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"](), v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), sv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(51);
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
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "steam";
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(n * 7 + 3);
    const puffs = Array.from({
        length: n
    }, (_, i)=>{
        const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpriteMaterial"]({
            map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["puffTexture"])(1 + i % 3),
            color,
            transparent: true,
            depthWrite: false,
            opacity: 0
        });
        const s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sprite"](mat);
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
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "table";
    const marble = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marbleTexture"])();
    const top = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        map: marble,
        color: "#cdcbc8",
        roughness: 0.3,
        clearcoat: 0.45,
        clearcoatRoughness: 0.22,
        envMapIntensity: 0.6
    });
    const side = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: "#cfc8bd",
        roughness: 0.35,
        clearcoat: 0.4,
        envMapIntensity: 0.7
    });
    const slab = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](TABLE.R, TABLE.R, TABLE.T, 128), [
        side,
        top,
        side
    ]);
    slab.position.y = -TABLE.T / 2;
    slab.receiveShadow = true;
    slab.userData.noShadow = true;
    const bull = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](TABLE.R, TABLE.T / 2, 12, 128), side);
    bull.rotation.x = Math.PI / 2;
    bull.position.y = -TABLE.T / 2;
    bull.receiveShadow = true;
    bull.userData.noShadow = true;
    const band = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](TABLE.R - 0.12, TABLE.R - 0.2, 0.2, 96, 1, true), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color: "#3a2416",
        roughness: 0.6
    }));
    band.position.y = -TABLE.T - 0.1;
    // the key light is one of many here, so its shadows are doubled up on a shadow-only sheet lying on the marble
    const contact = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleGeometry"](TABLE.R - 0.02, 96), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShadowMaterial"]({
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
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "bun";
    const crust = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bunCrust"])(),
        roughness: 0.38,
        clearcoat: 0.55,
        clearcoatRoughness: 0.3,
        sheen: 0.4,
        sheenColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#ffd9a0")
    });
    const crumb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["crumbTexture"])(),
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
    const base = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    const bot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](squash(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](R, 56, 20, 0, TAU, Math.PI / 2, Math.PI / 2), HB), crust);
    bot.position.y = HB;
    const botCut = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleGeometry"](R * 1.0, 56), crumb);
    botCut.rotation.x = -Math.PI / 2;
    botCut.position.y = HB + 0.001;
    const butter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$geometries$2f$RoundedBoxGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoundedBoxGeometry"](0.92, BUT, 0.74, 4, 0.03), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: "#f8e9a8",
        roughness: 0.3,
        clearcoat: 0.6,
        clearcoatRoughness: 0.25,
        sheen: 0.5,
        sheenColor: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#fff6cf")
    }));
    butter.position.y = HB + BUT / 2;
    butter.rotation.y = 0.12;
    base.add(bot, botCut, butter);
    const lid = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    lid.position.y = HB + BUT;
    const top = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](squash(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](R, 56, 28, 0, TAU, 0, Math.PI / 2), HT), crust);
    const topCut = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleGeometry"](R * 1.0, 56), crumb);
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
    const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](1, 64, 48);
    const f = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -1, 0)
    ];
    for(let i = 0; i < 3; i++){
        const a = i / 3 * TAU;
        f.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Math.sqrt(8) / 3 * Math.cos(a), 1 / 3, Math.sqrt(8) / 3 * Math.sin(a)));
    }
    const p = g.getAttribute("position"), v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), P = 3.6;
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
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "samosas";
    const plate = createPlate(1.0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steel"])(0.22));
    root.add(plate);
    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["friedPastry"])();
    p.map.repeat.set(2, 1.5);
    p.bump.repeat.set(2, 1.5);
    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
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
        const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](samosaGeometry(), mat);
        m.position.set(q.x, PLATE_Y, q.z);
        m.rotation.set(0, q.ry, q.rz);
        root.add(m);
        return m;
    });
    const bowl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](lathe([
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
    ], 40), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steel"])(0.2));
    bowl.position.set(0.42, PLATE_Y, 0.42);
    const chutney = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleGeometry"](0.225, 32), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
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
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "cappuccino";
    const white = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ceramic"])("#fbf7ef");
    const saucer = createPlate(0.86, white);
    root.add(saucer);
    const cup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    cup.position.y = PLATE_Y;
    const body = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](lathe([
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
    const handle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](0.15, 0.036, 12, 28, arc), white);
    handle.rotation.z = -arc / 2;
    handle.position.set(0.5, 0.235, 0);
    handle.scale.set(1, 1, 1.25);
    const coffee = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleGeometry"](0.468, 56), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latteArt"])(),
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
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    root.name = "filter";
    const st = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steel"])(0.17);
    const dabara = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](lathe([
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
    const pool = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleGeometry"](0.405, 48), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        color: "#3a1c0b",
        roughness: 0.16,
        clearcoat: 1
    }));
    pool.rotation.x = -Math.PI / 2;
    pool.position.y = 0.11;
    pool.userData.noShadow = true;
    const tumbler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    tumbler.position.y = 0.03;
    const tb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](lathe([
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
    const foam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleGeometry"](0.268, 40), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kaapiFoam"])(),
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
var _c;
__turbopack_context__.k.register(_c, "V2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/story/print.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
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
            const tex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](ctx.canvas);
            if (srgb) tex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
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
function printedMaterial(p, { bumpScale = 1.4, side = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrontSide"] } = {}) {
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
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
        emissive: p.glow ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#ffffff") : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#000000"),
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/story/stills.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/materials.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/print.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/studio.ts [app-client] (ecmascript)");
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
    const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
    scene.environment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioEnvironment"])(renderer);
    scene.environmentIntensity = 1;
    scene.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studioLights"])({
        shadows: true,
        reach: 3,
        mapSize: 1024
    }));
    // a counter that only shows the shadows falling on it
    const floor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](14, 14), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShadowMaterial"]({
        opacity: 0.26,
        color: "#3a1d0a"
    }));
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);
    return scene;
}
function buildItem(id) {
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"](), inner = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    root.add(inner);
    let act = ()=>{};
    let cam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 2.5, 6.6), look = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.3, 0);
    if (id === "chai") {
        const plate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPlate"])(0.95);
        const g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlass"])();
        g.root.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_Y"];
        g.setLevel(1);
        const b1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBiscuit"])("glucose");
        b1.position.set(0.7, 0.33, 0.28);
        b1.rotation.set(-1.15, 0.5, 0.25);
        const b2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFlat"])("glucose");
        b2.position.set(-0.56, 0.09, 0.52);
        b2.rotation.set(0.1, 1.1, 0.05);
        inner.add(plate, g.root, b1, b2);
        act = (k, t)=>{
            g.chai.uSlosh.value = Math.sin(t * 9) * 0.5 * Math.sin(Math.PI * k);
            g.chai.uTime.value = t;
            g.surface.rotation.z = k * Math.PI * 2;
            g.root.rotation.z = Math.sin(t * 9) * 0.05 * Math.sin(Math.PI * k);
        };
        cam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1.75, 6.1);
        look = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.7, 0);
    } else if (id === "biscuits") {
        const plate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPlate"])(1.0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$materials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steel"])(0.22));
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStack"])(6);
        s.root.position.set(-0.12, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_Y"], 0);
        s.root.rotation.y = 0.5;
        const lean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBiscuit"])("glucose");
        lean.position.set(0.52, 0.3, 0.26);
        lean.rotation.set(-1.0, -0.5, -0.2);
        inner.add(plate, s.root, lean);
        act = (k)=>s.fan(Math.sin(Math.PI * k));
        cam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 2.25, 5.2);
        look = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.3, 0);
    } else if (id === "bun") {
        const plate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPlate"])(1.05);
        const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBun"])();
        b.root.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_Y"];
        b.root.rotation.y = -0.4;
        b.open(0.16);
        inner.add(plate, b.root);
        act = (k)=>b.open(0.16 + Math.sin(Math.PI * k) * 0.84);
        cam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 2.1, 5.4);
        look = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.34, 0);
    } else if (id === "samosa") {
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSamosas"])();
        inner.add(s.root);
        act = (k)=>s.toss(k);
        cam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 2.25, 5.2);
        look = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.24, 0);
    } else if (id === "cappuccino") {
        const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCappuccino"])();
        c.cup.rotation.y = 0.7;
        inner.add(c.root);
        act = (k)=>{
            c.cup.rotation.y = 0.7 + k * Math.PI * 2;
            c.cup.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_Y"] + Math.sin(Math.PI * k) * 0.3;
        };
        cam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 2.4, 4.6);
        look = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.2, 0);
    } else {
        const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFilterCoffee"])();
        inner.add(f.root);
        act = (k)=>f.pull(k);
        cam = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1.75, 3.9);
        look = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.34, 0);
    }
    root.rotation.y = -0.3;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowed"])(root);
    return {
        root,
        inner,
        act,
        cam,
        look
    };
}
/** The whole counter, for the wide still. */ function buildSpread() {
    const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTable"])();
    g.add(t.root);
    const put = (o, x, z, ry = 0)=>{
        o.position.set(x, o.position.y, z);
        o.rotation.y = ry;
        g.add(o);
    };
    const glass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlass"])();
    put(glass.root, 0, 0.2);
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStack"])(7);
    put(s.root, -1.7, 0.9, 0.4);
    const bunPlate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPlate"])(1.05);
    put(bunPlate, -1.9, -1.3);
    const bun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBun"])();
    bun.root.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_Y"];
    bun.open(0.3);
    put(bun.root, -1.9, -1.3, -0.5);
    const cap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCappuccino"])();
    put(cap.root, 1.9, -1.0, 0.8);
    const sam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSamosas"])();
    put(sam.root, 0.3, -2.3, 0.3);
    const fil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFilterCoffee"])();
    put(fil.root, 1.7, 1.3);
    [
        "nankhatai",
        "osmania",
        "nankhatai",
        "jeera"
    ].forEach((k, i)=>{
        const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFlat"])(k);
        put(c, -0.4 + i * 0.75, 2.1 + Math.sin(i * 2) * 0.25, i);
        void __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BISCUIT"];
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowed"])(g);
    return g;
}
const cache = new Map();
const queue = [];
let running = false;
let ctx = null;
let idleTimer = 0;
function setup() {
    if (ctx) return ctx;
    const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
        powerPreference: "low-power"
    });
    renderer.setPixelRatio(1.5);
    renderer.setSize(STUDIO.W, STUDIO.H, false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configureRenderer"])(renderer, true);
    ctx = {
        renderer,
        scene: createStudioScene(renderer),
        camera: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](STUDIO.fov, STUDIO.W / STUDIO.H, 0.1, 60)
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
        cam: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 11.5, 13.5),
        look: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0.2),
        wide: true
    };
}
async function run() {
    if (running) return;
    running = true;
    clearTimeout(idleTimer);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontsReady"])();
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/story/studio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
/* ------------------------------------------------------------------
   One studio for everything: the live story, the offscreen stills, the card
   turntable and the dunk test all light the counter with the same softbox
   environment and the same lamps, so a still and a live frame match.
   ------------------------------------------------------------------ */ function softbox(w, h, color, intensity, pos, rot) {
    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](w, h), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
        color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color).multiplyScalar(intensity),
        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
        toneMapped: false
    }));
    m.position.set(...pos);
    m.rotation.set(...rot);
    return m;
}
function studioEnvScene() {
    const s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
    s.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#6e5f4c");
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
        const pmrem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PMREMGenerator"](renderer);
        t = pmrem.fromScene(studioEnvScene(), 0.02).texture;
        pmrem.dispose();
        envCache.set(renderer, t);
    }
    return t;
}
function studioLights({ shadows = false, reach = 5, mapSize = 2048 } = {}) {
    const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
    const amb = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"]("#fff3e0", 0.62);
    const key = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"]("#fff0dc", 2.3);
    key.position.set(-4.2, 6.5, 4.2);
    const rim = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"]("#ffe8d2", 1.2);
    rim.position.set(4.5, 2.4, -3.5);
    const fill = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"]("#f6e3d0", 0.32);
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
    r.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    r.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeutralToneMapping"];
    r.toneMappingExposure = 1;
    r.setClearColor(0x000000, 0);
    if (shadows) {
        r.shadowMap.enabled = true;
        r.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCFSoftShadowMap"];
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/story/textures.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/print.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-client] (ecmascript)");
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
    const t = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](c);
    if (srgb) t.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
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
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(21);
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundRect"])(k, 44, 44, W - 88, H - 88, 26);
            k.stroke();
        });
        raise((k)=>{
            k.lineWidth = 4;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundRect"])(k, 66, 66, W - 132, H - 132, 16);
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
            k.font = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONT"].display(138);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaced"])(k, 4);
            k.fillText(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"].short, 0, 8);
            k.restore();
        }, 235);
        raise((k)=>{
            k.save();
            k.translate(W / 2, H / 2);
            k.rotate(-Math.PI / 2);
            k.textAlign = "center";
            k.textBaseline = "middle";
            k.font = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONT"].sans(700, 25);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaced"])(k, 9);
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
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(5);
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
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(kind === "osmania" ? 3 : kind === "jeera" ? 9 : 14);
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
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(31);
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
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(8);
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
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(17);
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
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(44);
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
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(12);
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
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(6);
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
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(27);
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
        m.wrapS = m.wrapT = bm.wrapS = bm.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
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
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(seed * 13 + 1);
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
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(2);
        for(let y = 0; y < 512; y++){
            const v = 110 + Math.floor(r() * 40);
            x.fillStyle = `rgb(${v},${v},${v})`;
            x.fillRect(0, y, 64, 1);
        }
        const t = tex(c, false);
        t.wrapS = t.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
        return t;
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/story/turntable.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTurntable",
    ()=>getTurntable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/print.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/studio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/stills.ts [app-client] (ecmascript)");
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
        this.renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["configureRenderer"])(this.renderer, true);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        this.scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStudioScene"])(this.renderer);
        this.camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDIO"].fov, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDIO"].W / __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STUDIO"].H, 0.1, 60);
        this.sweep = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"]("#fff4e0", 0);
        this.scene.add(this.sweep);
        const el = this.renderer.domElement;
        el.setAttribute("aria-hidden", "true");
        el.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;display:block";
    }
    use(id) {
        let e = this.items.get(id);
        if (!e) {
            const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildItem"])(id);
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
    instance ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fontsReady"])().then(()=>new Turntable());
    return instance;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_0dfj0wfnmpfej._.js.map