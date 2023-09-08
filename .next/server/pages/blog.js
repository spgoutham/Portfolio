"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 9583:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var _lib_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9671);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9508);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__, _lib_post__WEBPACK_IMPORTED_MODULE_2__, _layouts__WEBPACK_IMPORTED_MODULE_3__]);
([_components__WEBPACK_IMPORTED_MODULE_1__, _lib_post__WEBPACK_IMPORTED_MODULE_2__, _layouts__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getStaticProps = async ()=>{
    const frontmatters = await (0,_lib_post__WEBPACK_IMPORTED_MODULE_2__/* .getAllPostsFrontMatter */ .QN)();
    return {
        props: {
            serialisedFrontmatters: JSON.stringify(frontmatters)
        }
    };
};
function BlogPage({ serialisedFrontmatters  }) {
    const frontmatters = JSON.parse(serialisedFrontmatters);
    if (frontmatters.length <= 0) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Blog.Error */ .l3.jj, {
        routeBlog: false
    });
    const latestPost = frontmatters.shift();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__/* .Layout.Default */ .A.Default, {
        seo: {
            title: "Goutham Blog"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mt-8 sm:mt-16 mb-20 mx-0 sm:mx-6 lg:mb-28 lg:mx-8",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Blog.Latest */ .l3.lf, {
                        frontmatter: latestPost
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-4 lg:mt-12 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-none",
                        children: frontmatters.map((frontmatter, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Blog.Post */ .l3.SO, {
                                frontmatter: frontmatter,
                                index: i
                            }, i))
                    })
                ]
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

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

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

/***/ 7112:
/***/ ((module) => {

module.exports = require("next-mdx-remote/serialize");

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

/***/ 7275:
/***/ ((module) => {

module.exports = require("remark-code-titles");

/***/ }),

/***/ 2423:
/***/ ((module) => {

module.exports = require("remark-prism");

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

/***/ 9847:
/***/ ((module) => {

module.exports = import("rehype-autolink-headings");;

/***/ }),

/***/ 3029:
/***/ ((module) => {

module.exports = import("remark-emoji");;

/***/ }),

/***/ 9071:
/***/ ((module) => {

module.exports = import("remark-slug");;

/***/ }),

/***/ 1220:
/***/ ((module) => {

module.exports = import("windicss/defaultTheme");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [521,56,832,71,671], () => (__webpack_exec__(9583)));
module.exports = __webpack_exports__;

})();