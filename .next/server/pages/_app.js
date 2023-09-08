"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7322:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App),
/* harmony export */   "reportWebVitals": () => (/* reexport safe */ next_axiom__WEBPACK_IMPORTED_MODULE_10__.reportWebVitals)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _splitbee_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3270);
/* harmony import */ var _splitbee_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_splitbee_web__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9752);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7832);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2943);
/* harmony import */ var next_axiom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2930);
/* harmony import */ var next_axiom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_axiom__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__, _lib__WEBPACK_IMPORTED_MODULE_8__]);
([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__, _lib__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













nprogress__WEBPACK_IMPORTED_MODULE_2___default().configure({
    easing: "ease",
    minimum: 0.3,
    showSpinner: false,
    speed: 800
});

function App({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const [play] = (0,_lib__WEBPACK_IMPORTED_MODULE_8__/* .useClick */ .eS)();
    (0,react_use__WEBPACK_IMPORTED_MODULE_6__.useEvent)("mousedown", ()=>play());
    (0,react_use__WEBPACK_IMPORTED_MODULE_6__.useEvent)("mouseup", ()=>play());
    (0,react_use__WEBPACK_IMPORTED_MODULE_6__.useEffectOnce)(()=>{
        router.events.on("routeChangeStart", ()=>nprogress__WEBPACK_IMPORTED_MODULE_2___default().start());
        router.events.on("routeChangeComplete", ()=>nprogress__WEBPACK_IMPORTED_MODULE_2___default().done());
        router.events.on("routeChangeError", ()=>nprogress__WEBPACK_IMPORTED_MODULE_2___default().done());
        if (true) _splitbee_web__WEBPACK_IMPORTED_MODULE_3___default().init({
            disableCookie: true
        });
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_themes__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
        attribute: "class",
        defaultTheme: _types__WEBPACK_IMPORTED_MODULE_9__/* .Theme.SYSTEM */ .Q2.SYSTEM,
        themes: Object.values(_types__WEBPACK_IMPORTED_MODULE_9__/* .Theme */ .Q2),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__.Analytics, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps,
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "ddc01bb75632aac9",
                        [
                            _lib__WEBPACK_IMPORTED_MODULE_8__/* .colors.primary[500] */ .O9.primary[500]
                        ]
                    ]
                ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "ddc01bb75632aac9",
                dynamic: [
                    _lib__WEBPACK_IMPORTED_MODULE_8__/* .colors.primary[500] */ .O9.primary[500]
                ],
                children: `#nprogress .bar{height:.25rem;background-color:${_lib__WEBPACK_IMPORTED_MODULE_8__/* .colors.primary[500] */ .O9.primary[500]}}`
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9463:
/***/ ((module) => {

module.exports = require("@hookstate/core");

/***/ }),

/***/ 2142:
/***/ ((module) => {

module.exports = require("@hookstate/persistence");

/***/ }),

/***/ 3270:
/***/ ((module) => {

module.exports = require("@splitbee/web");

/***/ }),

/***/ 2930:
/***/ ((module) => {

module.exports = require("next-axiom");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("react-use");

/***/ }),

/***/ 7893:
/***/ ((module) => {

module.exports = require("react-use-lanyard");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 971:
/***/ ((module) => {

module.exports = require("use-sound");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@vercel/analytics/react");;

/***/ }),

/***/ 1220:
/***/ ((module) => {

module.exports = import("windicss/defaultTheme");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [832], () => (__webpack_exec__(7322)));
module.exports = __webpack_exports__;

})();