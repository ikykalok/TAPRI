(()=>{"use strict";module.exports = [
"[project]/components/story/StoryScene.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StoryScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-ssr] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-ssr] (ecmascript) <export D as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/models.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/print.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/studio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/timeline.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-ssr] (ecmascript)");
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
const b = (p, k)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"][k][0], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"][k][1]);
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
const SURF = BASE + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLASS"].LEVEL_MAX; // chai surface in a full glass
const LIP = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-1.262, 0.915, 0); // where the pan pours from, in its own space
const POUR_FROM = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0.05, 1.5, 0);
const gulps = (s)=>{
    const x = s * 3, i = Math.min(2, Math.floor(x)), f = x - i;
    return {
        level: (i + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((f - 0.15) / 0.7))) / 3,
        f
    };
};
const shot = (t, d, w, h)=>({
        t: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](...t),
        d: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](...d).normalize(),
        w,
        h
    });
function buildWorld() {
    // ---- hero: a full glass on its saucer, two biscuits
    const glass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGlass"])();
    const saucer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    const plate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPlate"])(0.95);
    const b1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBiscuit"])("glucose");
    b1.position.set(0.7, 0.33, 0.28);
    b1.rotation.set(-1.15, 0.5, 0.25);
    const b2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFlat"])("glucose");
    b2.position.set(-0.56, 0.09, 0.52);
    b2.rotation.set(0.1, 1.1, 0.05);
    saucer.add(plate, b1, b2);
    const glassSteam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSteam"])(12, {
        rise: 1.75,
        size: 0.62,
        spread: 0.26
    });
    // ---- the brew
    const pan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPan"])();
    const burner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBurner"])();
    const spices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSpices"])();
    pan.body.add(spices.root);
    const milk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStream"])("#f6ecd9", {
        gloss: true
    });
    milk.material.emissiveIntensity = 0.3;
    const panSteam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSteam"])(16, {
        rise: 2.6,
        size: 1.5,
        spread: 1.3
    });
    // ---- the pour
    const stream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStream"])();
    const splash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDrops"])(16);
    const drip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDrops"])(4);
    // ---- the dunk
    const biscuit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDunkBiscuit"])("glucose");
    // ---- the table
    const table = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    const top = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTable"])();
    table.add(top.root);
    const slot = (o, x, z, ry = 0)=>{
        const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        g.position.set(x, 0, z);
        g.rotation.y = ry;
        g.add(o);
        table.add(g);
        return g;
    };
    const stack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStack"])(7);
    const stackSlot = slot(stack.root, -2.05, 0.95, 0.45);
    const loose = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFlat"])("glucose"),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFlat"])("glucose")
    ];
    const looseSlots = [
        slot(loose[0], -1.3, 2.25, 1.0),
        slot(loose[1], -1.0, 2.1, 1.4)
    ];
    const bun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBun"])();
    const bunPlate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPlate"])(1.05);
    bun.root.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATE_Y"];
    const bunGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
    bunGroup.add(bunPlate, bun.root);
    const bunSlot = slot(bunGroup, -2.05, -1.2, -0.5);
    const cap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCappuccino"])();
    const capSlot = slot(cap.root, 2.1, -0.85, 0.8);
    const capSteam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSteam"])(6, {
        rise: 1.0,
        size: 0.42,
        spread: 0.2
    });
    capSteam.root.position.set(2.1, 0.5, -0.85);
    table.add(capSteam.root);
    const sam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSamosas"])();
    const samSlot = slot(sam.root, 0.3, -2.5, 0.3);
    const fil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFilterCoffee"])();
    const filSlot = slot(fil.root, 2.15, 1.2, 0);
    const kinds = [
        "nankhatai",
        "osmania",
        "jeera",
        "nankhatai",
        "osmania"
    ];
    const cookies = kinds.map((kind, i)=>{
        const mesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBiscuit"])(kind);
        const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"]();
        g.add(mesh);
        table.add(g);
        return {
            g,
            mesh,
            kind,
            x: -0.2 + i * 0.5 + i % 2 * 0.06,
            z: 2.35 + Math.sin(i * 2.2) * 0.3 - i * 0.06,
            r: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BISCUIT"][kind].w / 2,
            t: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BISCUIT"][kind].t,
            yaw: i * 1.3
        };
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowed"])(table);
    // ---- a counter that only shows the shadows that fall on it
    const counter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](22, 22), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowMaterial"]({
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
    const { camera, size, gl, scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"])();
    const cam = camera;
    const lights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studioLights"])({
            shadows: true,
            reach: 5.6,
            mapSize: tier === 0 ? 1024 : 2048
        }), [
        tier
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        scene.environment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$studio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studioEnvironment"])(gl);
        scene.environmentIntensity = 1;
        scene.add(lights);
        return ()=>{
            scene.remove(lights);
        };
    }, [
        gl,
        scene,
        lights
    ]);
    const W = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildWorld(), []);
    const pointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePointer"])();
    const ptr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const swirl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const camPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0.5, 9));
    const lookCur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, -0.2, 0));
    const V = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            t: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
            d: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
            off: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
            lip: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
            to: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
            a: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
            c1: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](),
            c2: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](),
            c3: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](),
            tmp: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]()
        }), []);
    const shots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
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
        }), []);
    const frames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])((st, dt)=>{
        if (++frames.current === 3) window.dispatchEvent(new Event("tapri:scene-ready"));
        const p = progress.current;
        const e = reduced ? 1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(entrance.current));
        const t = st.clock.elapsedTime;
        const d = Math.min(dt, 0.05);
        const k = 1 - Math.pow(0.0016, d);
        ptr.current.x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lerp"])(ptr.current.x, reduced ? 0 : pointer.current.x, k * 0.5);
        ptr.current.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lerp"])(ptr.current.y, reduced ? 0 : pointer.current.y, k * 0.5);
        const px = ptr.current.x, py = ptr.current.y;
        const sway = reduced ? 0 : 1;
        const sip = b(p, "sip"), away = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "glassAway")), panIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeOut"])(b(p, "panIn")), flame = b(p, "flame");
        const spice = b(p, "spice"), teaK = b(p, "tea"), steep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "steep")), milk = b(p, "milk"), mix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "mix")), boil = b(p, "boil");
        const lift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "lift")), pour = b(p, "pour"), panAway = easeIn(b(p, "panAway"));
        const bIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeOut"])(b(p, "biscuitIn")), dunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "dunk")), soak = b(p, "soak"), liftB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "liftB")), snap = b(p, "snap");
        const tableT = b(p, "table"), turn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "tableTurn")), cover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "cover"));
        const statsHold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "statsIn")) * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "statsOut")));
        const night = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "night")) * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])(b(p, "day")));
        const tableIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(tableT / 0.34));
        // ---------------- light: the kitchen before dawn, then the café
        scene.environmentIntensity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lerp"])(1, 0.42, night);
        lights.userData.amb.intensity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lerp"])(0.62, 0.16, night);
        lights.userData.key.intensity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lerp"])(2.3, 0.75, night);
        lights.userData.rim.intensity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lerp"])(1.2, 0.5, night);
        W.counter.material.opacity = 0.26 * (1 - night) * (1 - tableIn) * e;
        W.counter.visible = W.counter.material.opacity > 0.004;
        // ---------------- the glass
        const first = p < __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].glassAway[1];
        const second = p >= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].lift[0];
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
            g.root.position.set(x, y + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLATE_Y"], 0);
            g.root.rotation.set(0, t * 0.12 * sway + (1 - e) * 2, 0);
            g.root.scale.setScalar(0.7 + 0.3 * e);
            W.saucer.scale.setScalar(0.7 + 0.3 * e);
            g.chai.uSlosh.value = Math.sin(t * 8) * 0.22 * Math.sin(Math.PI * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((gp.f - 0.1) / 0.8)) * (sip > 0 && sip < 1 ? 1 : 0);
            glassSteam = e * (1 - away) * (0.35 + 0.65 * level);
        } else if (second) {
            level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((pour - 0.07) / 0.83));
            g.root.scale.setScalar(1);
            g.root.position.set(0, BASE - (1 - lift) * 4.5, 0);
            g.root.rotation.set(0, t * 0.1 * sway * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(tableT * 3)) + px * 0.1, 0);
            const plop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((snap - 0.74) / 0.26);
            g.chai.uSlosh.value = Math.sin(t * 13) * 0.07 * (pour > 0.07 && pour < 0.94 ? 1 : 0) + Math.sin(plop * 22) * 0.3 * (1 - plop) * (plop > 0 ? 1 : 0);
            glassSteam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((pour - 0.2) * 3) * (1 - cover);
        }
        g.setLevel(level);
        g.chai.uTime.value = t;
        g.surface.rotation.z = t * 0.15 * sway;
        W.glassSteam.root.position.set(g.root.position.x, g.root.position.y + g.levelY(Math.max(level, 0.5)) + 0.05, 0);
        W.glassSteam.update(t, glassSteam * 0.5);
        // ---------------- the pan on the flame
        const panOn = p > __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].panIn[0] && panAway < 1;
        const pan = W.pan;
        pan.root.visible = panOn;
        W.burner.root.visible = panOn && lift < 0.98;
        let surfaceY = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PAN"].LEVEL;
        if (panOn) {
            const ph = boil * 3, bi = Math.min(2, Math.floor(ph)), rise = boil > 0 && boil < 1 ? Math.sin(Math.PI * Math.pow(ph - bi, 0.8)) : 0;
            surfaceY = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PAN"].LEVEL + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(milk / 0.7)) * 0.08 + rise * 0.25 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((lift - 0.1) * 3) * 0.2;
            pan.setLevel(surfaceY);
            swirl.current += reduced ? 0 : d * (0.18 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(milk * 4) * 1.1 * (1 - mix * 0.5) + boil * 0.4);
            const u = pan.brew;
            u.uTime.value = t;
            u.uSwirl.value = swirl.current;
            u.uTea.value = steep;
            u.uMilk.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(milk / 0.85));
            u.uMix.value = mix;
            u.uFoam.value = boil > 0 ? 0.22 + 0.78 * rise : mix * 0.22;
            // bubbles take the colour of what is boiling
            V.c1.set("#dfe6e6");
            V.c2.set("#a5683a");
            V.c3.set("#efd8bd");
            pan.bubbleMat.color.copy(V.c1).lerp(V.c2, steep).lerp(V.c3, mix);
            pan.setBubbles(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(flame) * (0.12 + steep * 0.16 + mix * 0.12 + (boil > 0 ? 0.25 + rise * 0.5 : 0)) * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(lift * 4)), rise);
            pan.liquid.visible = lift < 0.42;
            W.spices.update(spice, teaK, t, surfaceY, pan.innerAt(surfaceY) * 0.9, swirl.current, mix);
            // from the flame to above the glass, tipping as it goes
            const tilt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((lift - 0.3) / 0.7) * 0.5 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(pour / 0.22)) * 0.66 * (1 - panAway) - panAway * 0.3;
            const cs = Math.cos(tilt), sn = Math.sin(tilt);
            const ox = POUR_FROM.x - (cs * LIP.x - sn * LIP.y), oy = POUR_FROM.y - (sn * LIP.x + cs * LIP.y);
            const hold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(lift * 1.15));
            pan.root.position.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lerp"])(0, ox, hold) + panAway * 5.5, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lerp"])(PAN_Y - (1 - panIn) * 5, oy, hold) + panAway * 3.4, 0);
            pan.root.rotation.set(0, 0, tilt * (lift > 0 ? 1 : 0));
            W.burner.root.position.set(0, PAN_Y - (1 - panIn) * 5 - easeIn(lift) * 5, 0);
            const fire = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(flame * 1.2) * (1 - 0.6 * rise) * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(b(p, "day") * 1.6));
            W.burner.setPower(fire * (0.92 + 0.08 * Math.sin(t * 31)), t);
            W.panSteam.root.position.set(pan.root.position.x, pan.root.position.y + surfaceY, 0);
            W.panSteam.update(t, (0.1 * steep + 0.25 * mix + (boil > 0 ? 0.3 + 0.35 * rise : 0)) * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(lift * 2.5)));
            // milk, from a jug off-camera
            const mOn = milk > 0 && milk < 0.86;
            if (mOn) {
                const R = pan.innerAt(surfaceY);
                V.to.set(pan.root.position.x + pan.brew.uHit.value.x * R, pan.root.position.y + surfaceY, -pan.brew.uHit.value.y * R);
                V.a.set(V.to.x + 0.22, V.to.y + 5.2, V.to.z - 0.1);
                W.milk.set(V.a, V.to, 0.05, 0.062, t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(milk / 0.1), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((milk - 0.7) / 0.14));
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
            W.stream.set(V.lip, V.to, 0.05, 0.034, t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(pour / 0.07), (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((pour - 0.9) / 0.08));
            const hit = pour > 0.07 && pour < 0.96;
            V.to.y += 0.03;
            W.splash.burst(V.to, hit ? t * 2.4 % 1 : 0, 0.3, 9);
        } else {
            W.stream.mesh.visible = false;
            if (snap <= 0.74 || snap >= 1) W.splash.mesh.visible = false;
        }
        // ---------------- the dunk
        const bis = W.biscuit;
        const bisOn = p > __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].biscuitIn[0] && tableT < 0.5;
        bis.root.visible = bisOn;
        W.drip.mesh.visible = false;
        if (bisOn) {
            const hover = BASE + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$models$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLASS"].H + 0.32 + bis.half, deep = SURF - 0.43 + bis.half, hover2 = hover - 0.1;
            const cy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lerp"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lerp"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lerp"])(5.2, hover, bIn), deep, dunk), hover2, liftB);
            const sagK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(snap / 0.42)), fallK = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((snap - 0.42) / 0.36);
            bis.root.position.set(0, cy + Math.sin(t * 1.3) * 0.012 * sway + Math.sin((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(snap / 0.5) * Math.PI) * 0.03 + easeIn((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(tableT / 0.4)) * 5, 0);
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
                    const life = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(((p - __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].liftB[0]) / 0.03 - 0.25 - i * 0.28) / 0.5);
                    const hang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(life / 0.5), fall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((life - 0.5) / 0.5);
                    const y = bottom - 0.02 - fall * fall * (bottom - SURF);
                    W.drip.place(i, (i - 1) * 0.12, y, 0.05, life > 0 && life < 1 ? 0.014 + hang * 0.012 : 0.0001);
                }
                W.drip.place(3, 0, -9, 0, 0.0001);
                W.drip.commit(true);
            }
            // the plop
            if (snap > 0.74 && snap < 1) {
                V.to.set(0, SURF + 0.02, 0);
                W.splash.burst(V.to, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((snap - 0.74) / 0.26), 0.85, 16);
            }
        }
        // ---------------- the table
        const tableOn = tableT > 0;
        W.table.visible = tableOn;
        if (tableOn) {
            W.table.position.set(0, BASE - (1 - tableIn) * 6 - cover * 0.6, 0);
            W.table.rotation.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lerp"])(0.25, -0.2, turn) + px * 0.05 * turn;
            W.drops.forEach((s, i)=>{
                const kk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((tableT - 0.3 - i * 0.075) / 0.26);
                s.visible = kk > 0;
                s.position.y = (1 - bounce(kk)) * 3.6;
                s.scale.setScalar(0.85 + 0.15 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(kk * 3));
            });
            // the stack lands one biscuit at a time
            W.stack.items.forEach(({ obj, rest }, i)=>{
                const kk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((tableT - 0.32 - i * 0.05) / 0.2);
                obj.visible = kk > 0;
                obj.position.y = rest.y + (1 - bounce(kk)) * 2.6;
                obj.rotation.y = rest.ry + (1 - kk) * (i % 2 ? 2 : -2);
            });
            W.looseSlots.forEach((s, i)=>{
                const kk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((tableT - 0.68 - i * 0.06) / 0.2);
                s.visible = kk > 0;
                s.position.y = (1 - bounce(kk)) * 2.4;
            });
            W.bun.open((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((tableT - 0.62) / 0.3)) * 0.3);
            W.fil.pull(0);
            // the round ones roll in on their edges, wobble and fall flat
            W.cookies.forEach((c, i)=>{
                const kk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((tableT - 0.42 - i * 0.07) / 0.32);
                c.g.visible = kk > 0;
                const roll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(kk / 0.72)), fall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((kk - 0.66) / 0.34));
                const dist = (1 - roll) * 5.4;
                c.g.position.set(c.x + dist, 0, c.z);
                c.g.rotation.y = c.yaw * fall;
                c.mesh.position.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lerp"])(c.r, c.t / 2 + (c.kind === "nankhatai" ? 0 : 0), fall);
                c.mesh.rotation.set(-Math.PI / 2 * fall, 0, dist / c.r + Math.sin(kk * 30) * 0.05 * (1 - fall));
            });
            W.capSteam.update(t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])((tableT - 0.55) * 3) * 0.4);
        }
        // ---------------- camera
        const aspect = size.width / Math.max(1, size.height);
        const tanH = Math.tan(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(cam.fov / 2));
        const fit = (s, sw = 1)=>Math.max(s.h / (2 * tanH), s.w * sw / (2 * tanH * aspect));
        const T = V.t.copy(shots.hero.t), Dd = V.d.copy(shots.hero.d);
        let dist = fit(shots.hero);
        const blend = (s, kk, x, sw = 1, dy = 0)=>{
            if (kk <= 0) return;
            T.lerp(V.off.copy(s.t).setX(x ?? s.t.x).setY(s.t.y + dy), kk);
            Dd.lerp(s.d, kk).normalize();
            dist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lerp"])(dist, fit(s, sw), kk);
        };
        blend(shots.brewLow, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].glassAway[0] + 0.012, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].panIn[1])), mobile ? 0.3 : -0.2);
        blend(shots.brew, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].flame[1] - 0.012, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].spice[0] + 0.03)), mobile ? 0.3 : 0.15, mobile ? 0.8 : 1);
        blend(shots.pour, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].lift[0], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].lift[1])), mobile ? 0.62 : 0.3, mobile ? 0.78 : 1);
        blend(shots.dunk, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].panAway[0], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].biscuitIn[1])), 0, mobile ? 1.3 : 1, mobile ? -0.5 : 0);
        blend(shots.table, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seg"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].table[0], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BEAT"].table[0] + 0.05)), mobile ? 0 : -1.45, mobile ? 0.78 : 1);
        dist *= 1 - statsHold * 0.04;
        if (boil > 0 && boil < 1) dist *= 1 - Math.sin(Math.PI * boil) * 0.05;
        if (soak > 0) dist *= 1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"])(soak) * 0.05 * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(tableT * 8));
        if (turn > 0) dist *= 1 + turn * 0.03;
        T.y -= cover * 0.6;
        camPos.current.copy(T).addScaledVector(Dd, dist);
        camPos.current.x += px * 0.28;
        camPos.current.y += py * 0.16;
        cam.position.lerp(camPos.current, k);
        lookCur.current.lerp(T, k);
        cam.lookAt(lookCur.current);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.counter
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.saucer
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.glass.root
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.glassSteam.root
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.burner.root
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.pan.root
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.panSteam.root
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.milk.mesh
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.stream.mesh
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.splash.mesh
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.drip.mesh
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: W.biscuit.root
            }, void 0, false, {
                fileName: "[project]/components/story/StoryScene.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
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
function StoryScene({ progress, entrance, reduced = false }) {
    const tier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQualityTier"])();
    const mobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const wrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fonts, setFonts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$print$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fontsReady"])().then(()=>setFonts(true));
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = wrap.current;
        if (!el) return;
        const io = new IntersectionObserver(([en])=>setVisible(en.isIntersecting), {
            threshold: 0
        });
        io.observe(el);
        return ()=>io.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrap,
        className: "absolute inset-0",
        children: fonts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
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
                toneMapping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NeutralToneMapping"],
                toneMappingExposure: 1.0
            },
            className: "!absolute inset-0",
            "aria-hidden": true,
            frameloop: visible ? "always" : "never",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Rig, {
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
}),
"[project]/lib/story/engine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DunkScene",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$DunkScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "StoryScene",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$StoryScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "getStill",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStill"],
    "getTurntable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$turntable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTurntable"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/story/engine.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$StoryScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/story/StoryScene.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$DunkScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/story/DunkScene.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/stills.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$turntable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/turntable.ts [app-ssr] (ecmascript)");
}),
"[project]/lib/story/engine.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/** The one async entry for everything WebGL, so three.js is fetched once and only when needed. */ var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$StoryScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/story/StoryScene.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$story$2f$DunkScene$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/story/DunkScene.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$stills$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/stills.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$story$2f$turntable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/story/turntable.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
}),
];})()

//# sourceMappingURL=_05t8_vlqwtgig._.js.map