"use strict";
(() => {
var exports = {};
exports.id = 463;
exports.ids = [463];
exports.modules = {

/***/ 4509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimelinePage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9508);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_2__, _components__WEBPACK_IMPORTED_MODULE_3__, _layouts__WEBPACK_IMPORTED_MODULE_4__]);
([_iconify_react__WEBPACK_IMPORTED_MODULE_2__, _components__WEBPACK_IMPORTED_MODULE_3__, _layouts__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const getStaticProps = async ()=>{
    const { default: rawTimeline  } = await __webpack_require__.e(/* import() */ 710).then(__webpack_require__.t.bind(__webpack_require__, 3710, 19));
    const timeline = rawTimeline.sort((a, b)=>+new Date(b.date) - +new Date(a.date));
    return {
        props: {
            timeline
        }
    };
};
function TimelinePage({ timeline: rawTimeline  }) {
    const timeline = rawTimeline.map((event)=>({
            ...event,
            // Note: Custom parser needed as Safari on iOS doesn't like the standard `new Date()` parsing
            date: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parse)(event.date.toString(), "MM-dd-yyyy", new Date())
        }));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts__WEBPACK_IMPORTED_MODULE_4__/* .Layout.Default */ .A.Default, {
        seo: {
            title: "Goutham Timeline"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex flex-grow min-h-screen pt-16 pb-12",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-grow flex flex-col justify-center max-w-sm sm:max-w-2xl w-full mx-auto px-0 sm:px-16",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "-mb-8",
                    role: "list",
                    children: timeline.map((event, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "my-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative pb-8",
                                children: [
                                    index !== timeline.length - 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        "aria-hidden": "true",
                                        className: "absolute top-1 left-1/2 w-0.5 h-full -ml-px bg-gray-200 dark:bg-gray-600"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative flex items-center space-x-3 bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm px-2 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "relative flex items-center justify-center w-12 h-12 bg-primary-500 bg-opacity-15 backdrop-filter backdrop-blur-sm saturate-200 mx-2 px-1 rounded-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                                    "aria-hidden": "true",
                                                    className: "w-6 h-6 text-primary-500",
                                                    icon: event.icon
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                        className: "flex flex-wrap justify-between mb-2 text-gray-500 dark:text-white text-lg tracking-tight font-bold",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: event.title
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "flex-1 sm:hidden"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Pill.Date */ .DR.E, {
                                                                className: "mt-2 sm:mt-0",
                                                                small: true,
                                                                children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(event.date, "PPP")
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "my-2 text-gray-300 text-base",
                                                        children: event.description
                                                    }),
                                                    event.link && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__/* .Button.Outline */ .zx.bw, {
                                                        className: "mt-2",
                                                        href: event.link.url,
                                                        rel: "noopener noreferrer",
                                                        small: true,
                                                        target: "_blank",
                                                        children: [
                                                            event.link.text,
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                                                "aria-hidden": "true",
                                                                className: "ml-3",
                                                                icon: "feather:external-link"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, event.title))
                })
            })
        })
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

/***/ 5245:
/***/ ((module) => {

module.exports = require("canvas-confetti");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 3216:
/***/ ((module) => {

module.exports = require("is-web-crawler");

/***/ }),

/***/ 3086:
/***/ ((module) => {

module.exports = require("motion");

/***/ }),

/***/ 2930:
/***/ ((module) => {

module.exports = require("next-axiom");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = import("@iconify/react");;

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
var __webpack_exports__ = __webpack_require__.X(0, [521,56,832,71], () => (__webpack_exec__(4509)));
module.exports = __webpack_exports__;

})();