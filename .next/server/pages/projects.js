"use strict";
(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 29:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectsPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9541);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9508);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2943);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts__WEBPACK_IMPORTED_MODULE_2__, _components__WEBPACK_IMPORTED_MODULE_3__]);
([_layouts__WEBPACK_IMPORTED_MODULE_2__, _components__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const getStaticProps = async ()=>{
    const projects = await (0,_lib_projects__WEBPACK_IMPORTED_MODULE_1__/* .fetchProjects */ .b)();
    return {
        props: {
            stringifiedProjects: JSON.stringify(projects)
        },
        revalidate: 3600
    };
};
function ProjectsPage({ stringifiedProjects  }) {
    const projects = JSON.parse(stringifiedProjects);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts__WEBPACK_IMPORTED_MODULE_2__/* .Layout.Default */ .A.Default, {
        seo: {
            title: "Goutham Projects"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative max-w-xl mx-auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .List.Container */ .aV.W, {
                    children: projects.map((project, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Animate */ .rs, {
                            animation: {
                                y: [
                                    50,
                                    0
                                ],
                                opacity: [
                                    0,
                                    1
                                ]
                            },
                            transition: {
                                delay: 0.1 * index
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .List.Item */ .aV.c, {
                                actions: [
                                    ...project.post ? [
                                        {
                                            type: _types__WEBPACK_IMPORTED_MODULE_4__/* .ListActionType.LINK */ .GY.LINK,
                                            external: false,
                                            href: project.post,
                                            icon: "feather:edit-3",
                                            label: `Blog post about ${project.name}`
                                        }, 
                                    ] : [],
                                    ...project.homepage ? [
                                        {
                                            type: _types__WEBPACK_IMPORTED_MODULE_4__/* .ListActionType.LINK */ .GY.LINK,
                                            href: project.homepage,
                                            icon: "feather:home",
                                            label: `${project.name} homepage`
                                        }, 
                                    ] : [],
                                    {
                                        type: _types__WEBPACK_IMPORTED_MODULE_4__/* .ListActionType.LINK */ .GY.LINK,
                                        href: project.url,
                                        icon: "feather:github",
                                        label: "GitHub Repository"
                                    }, 
                                ],
                                description: project.description,
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-xl",
                                    children: project.icon
                                }),
                                title: project.name
                            })
                        }, index))
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* binding */ fetchProjects)
});

;// CONCATENATED MODULE: external "emoji-regex"
const external_emoji_regex_namespaceObject = require("emoji-regex");
var external_emoji_regex_default = /*#__PURE__*/__webpack_require__.n(external_emoji_regex_namespaceObject);
// EXTERNAL MODULE: external "next-axiom"
var external_next_axiom_ = __webpack_require__(2930);
;// CONCATENATED MODULE: external "dotenv"
const external_dotenv_namespaceObject = require("dotenv");
;// CONCATENATED MODULE: ./src/lib/projects.ts



(0,external_dotenv_namespaceObject.config)();
/**
 * Fetch Projects
 *
 * Make a GET request to the GitHub API to gather all repositories
 * under my `nurodev` username & then filter them down to only
 * include those that contain the `portfolio` topic
 *
 * @TODO Switch to v3 API using GraphQL to save over-fetching
 */ async function fetchProjects() {
    const response = await fetch("https://api.github.com/users/spgoutham/repos", {
        headers: {
            ...process.env.GITHUB_PAT && {
                authorization: `token ${process.env.GITHUB_PAT}`
            }
        }
    });
    if (response.status !== 200) {
        const json = await response.json();
        console.error({
            error: json
        });
        external_next_axiom_.log.error("Failed to fetch projects", {
            error: json
        });
        return null;
    }
    const json1 = await response.json();
    const { default: rawProjectPosts  } = await __webpack_require__.e(/* import() */ 551).then(__webpack_require__.t.bind(__webpack_require__, 2551, 19));
    const projectPosts = rawProjectPosts;
    const projects = json1.map((repo)=>{
        if (!repo.topics.includes("aiml")) return null;
        if (repo.archived) return null;
        // Strip the emoji suffix from the repo description
        const trimmedDescription = repo.description.split(" ");
        trimmedDescription.shift();
        const description = trimmedDescription.join(" ");
        // Check if there is a matching blog post to attach
        const repoPost = projectPosts.length > 0 && projectPosts.find((post)=>post.repository.toLowerCase() === repo.full_name.toLowerCase());
        return {
            description,
            icon: (()=>{
                if (!repo.description) return undefined;
                const char = repo.description.split(" ")[0];
                return external_emoji_regex_default()().test(char) ? char : undefined;
            })(),
            homepage: repo.homepage ?? undefined,
            name: repo.name,
            post: repoPost ? `/blog/${repoPost.post}` : undefined,
            template: false,
            url: repo.html_url.toLowerCase()
        };
    }).filter((project)=>project !== null);
    return projects;
}


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
var __webpack_exports__ = __webpack_require__.X(0, [521,56,832,71], () => (__webpack_exec__(29)));
module.exports = __webpack_exports__;

})();