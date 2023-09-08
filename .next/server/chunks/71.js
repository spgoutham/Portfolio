"use strict";
exports.id = 71;
exports.ids = [71];
exports.modules = {

/***/ 1293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ Animate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3086);
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var is_web_crawler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3216);
/* harmony import */ var is_web_crawler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(is_web_crawler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7832);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib__WEBPACK_IMPORTED_MODULE_5__]);
_lib__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const defaultTransition = {
    delay: 0,
    duration: 1500,
    easing: (0,motion__WEBPACK_IMPORTED_MODULE_1__.spring)(),
    repeat: 0
};
function Animate({ animation , as: Component = "div" , children , enabled =true , transition , ...rest }) {
    const { animations  } = (0,_lib__WEBPACK_IMPORTED_MODULE_5__/* .usePersistantState */ .AB)().get();
    const prefersReducedMotion = (0,react_use__WEBPACK_IMPORTED_MODULE_4__.useMedia)("(prefers-reduced-motion)", true);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (ref.current && enabled && animations && !(prefersReducedMotion || (0,is_web_crawler__WEBPACK_IMPORTED_MODULE_2__.isCrawlerUserAgent)())) (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)(ref.current, animation, {
            ...defaultTransition,
            ...transition
        });
    }, [
        animation,
        animations,
        enabled,
        prefersReducedMotion,
        transition
    ]);
    return(// @ts-expect-error Valid component
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ref: ref,
        ...rest,
        children: children
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Standard": () => (/* binding */ Standard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ogl_typescript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3512);
/* harmony import */ var ogl_typescript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9924);
/* harmony import */ var ogl_typescript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(674);
/* harmony import */ var ogl_typescript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3884);
/* harmony import */ var ogl_typescript__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4011);
/* harmony import */ var ogl_typescript__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1714);
/* harmony import */ var next_axiom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2930);
/* harmony import */ var next_axiom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_axiom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7832);
/* harmony import */ var _vertex_glsl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9789);
/* harmony import */ var _fragment_glsl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4458);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib__WEBPACK_IMPORTED_MODULE_4__]);
_lib__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Standard() {
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    (0,react_use__WEBPACK_IMPORTED_MODULE_2__.useEffectOnce)(()=>{
        let animationId = 1;
        const renderer = new ogl_typescript__WEBPACK_IMPORTED_MODULE_5__/* .Renderer */ .T({
            depth: false,
            dpr: 2,
            alpha: true
        });
        const gl = renderer.gl;
        const camera = new ogl_typescript__WEBPACK_IMPORTED_MODULE_6__/* .Camera */ .V(gl, {
            fov: 15
        });
        camera.position.z = 15;
        function handleReisze() {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.perspective({
                aspect: gl.canvas.width / gl.canvas.height
            });
        }
        try {
            containerRef.current.appendChild(gl.canvas);
            gl.clearColor(0, 0, 0, 0);
            window.addEventListener("resize", handleReisze, false);
            handleReisze();
        } catch (error) {
            console.error(error);
            next_axiom__WEBPACK_IMPORTED_MODULE_1__.log.error("Failed to initialize canvas", error);
        }
        const numParticles = 100;
        const position = new Float32Array(numParticles * 3);
        const random = new Float32Array(numParticles * 4);
        for(let i = 0; i < numParticles; i++){
            position.set([
                Math.random(),
                Math.random(),
                Math.random()
            ], i * 3);
            random.set([
                Math.random(),
                Math.random(),
                Math.random(),
                Math.random()
            ], i * 4);
        }
        const geometry = new ogl_typescript__WEBPACK_IMPORTED_MODULE_7__/* .Geometry */ .Z(gl, {
            position: {
                size: 3,
                data: position
            },
            random: {
                size: 4,
                data: random
            }
        });
        const program = new ogl_typescript__WEBPACK_IMPORTED_MODULE_8__/* .Program */ .$(gl, {
            vertex: _vertex_glsl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
            fragment: _fragment_glsl__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
            uniforms: {
                uTime: {
                    value: 0
                },
                uColor: {
                    value: new ogl_typescript__WEBPACK_IMPORTED_MODULE_11__/* .Color */ .I(_lib__WEBPACK_IMPORTED_MODULE_4__/* .colors.primary[500] */ .O9.primary[500])
                }
            },
            transparent: true,
            depthTest: false
        });
        const particles = new ogl_typescript__WEBPACK_IMPORTED_MODULE_12__/* .Mesh */ .K(gl, {
            mode: gl.POINTS,
            geometry,
            program
        });
        function update(t) {
            animationId = requestAnimationFrame(update);
            particles.rotation.z += 0.0025;
            program.uniforms.uTime.value = t * 0.00025;
            renderer.render({
                scene: particles,
                camera: camera
            });
        }
        animationId = requestAnimationFrame(update);
        return ()=>cancelAnimationFrame(animationId);
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed inset-0",
        ref: containerRef
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7834:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9508);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2943);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__, _layouts__WEBPACK_IMPORTED_MODULE_2__, ___WEBPACK_IMPORTED_MODULE_3__]);
([_iconify_react__WEBPACK_IMPORTED_MODULE_1__, _layouts__WEBPACK_IMPORTED_MODULE_2__, ___WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Error({ routeBlog =true  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts__WEBPACK_IMPORTED_MODULE_2__/* .Layout.Error */ .A.Error, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex flex-grow min-h-full pt-16 pb-12",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-shrink-0 flex justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                            className: "h-12 text-primary-500 w-auto",
                            icon: "feather:alert-circle"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "py-4 text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "mt-2 text-4xl font-extrabold text-gray-500 dark:text-white tracking-tight sm:text-5xl",
                                children: "No Posts Found"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-4 text-sm font-medium text-gray-300 dark:text-gray-400",
                                children: "Sorry, we couldn’t find any blog posts \xaf\\_(ツ)_/\xaf"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-6 flex justify-center items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_3__/* .Button.Standard */ .zx.qI, {
                                        icon: "feather:arrow-left",
                                        onClick: ()=>history.go(-1),
                                        type: _types__WEBPACK_IMPORTED_MODULE_4__/* .NavigationItemType.ACTION */ .GU.ACTION,
                                        children: "Back"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_3__/* .Button.Standard */ .zx.qI, {
                                        href: "/",
                                        icon: "feather:home",
                                        type: _types__WEBPACK_IMPORTED_MODULE_4__/* .NavigationItemType.LINK */ .GU.LINK,
                                        children: "Home"
                                    }),
                                    routeBlog && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_3__/* .Button.Standard */ .zx.qI, {
                                        href: "/blog",
                                        icon: "feather:book",
                                        type: _types__WEBPACK_IMPORTED_MODULE_4__/* .NavigationItemType.LINK */ .GU.LINK,
                                        children: "Blog"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7708:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ Latest)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4747);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1705);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__]);
_components__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Latest({ frontmatter  }) {
    const ariaLabel = `Read blog post: ${frontmatter.title}`;
    const href = `/blog/${frontmatter.slug}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        "aria-label": ariaLabel,
        href: href,
        passHref: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            "aria-label": ariaLabel,
            className: "flex flex-col lg:flex-row mt-12 bg-white/75 dark:bg-gray-900/75 dark:border-gray-500 backdrop-filter backdrop-blur-sm rounded-2xl hover:shadow-xl cursor-pointer border-2 border-gray-100 transform motion-safe:hover:-translate-y-1 default-transition default-focus",
            href: href,
            children: [
                (frontmatter.banner_show ?? true) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex justify-center my-auto w-full xl:w-2/4 h-64 border-b-2 sm:h-72 sm:border-0 sm:border-r-2 border-gray-100 dark:border-gray-500 overflow-hidden rounded-2xl rounded-b-none lg:max-w-xl lg:h-96 lg:rounded-l-2xl lg:rounded-r-none default-transition",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full h-full mb-8 bg-gray-200 dark:bg-gray-600 rounded-lg rounded-l-none lg:rounded-l-lg lg:rounded-r-none lg:motion-safe:animate-pulse"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            alt: frontmatter.banner_alt ?? frontmatter.title,
                            className: "absolute top-0 left-0 w-full h-full rounded-lg rounded-b-none lg:rounded-l-lg lg:rounded-r-none object-cover select-none",
                            draggable: false,
                            layout: "fill",
                            src: frontmatter.banner
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col flex-1 justify-evenly m-auto sm:m-0 pb-3 sm:p-1 sm:pt-0 lg:px-12 text-gray-300 dark:text-gray-400",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "mt-6 mx-4 py-4 text-3xl sm:text-4xl lg:mt-0 lg:mx-0 lg:text-5xl font-bold line-clamp-4 text-gray-500 dark:text-white text-left",
                            children: frontmatter.title || frontmatter.title
                        }),
                        (frontmatter.description && frontmatter.description_show || true) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mt-6 lg:mt-0 mx-6 lg:mx-0 text-lg line-clamp-3",
                            children: frontmatter.description || frontmatter.description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center mt-6 lg:mt-0 mx-6 lg:mx-0 pb-4 lg:pb-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Pill.Date */ .DR.E, {
                                children: frontmatter.date
                            })
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4913:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ _Post)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4747);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1705);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__]);
_components__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function _Post({ index , frontmatter  }) {
    const ariaLabel = `Read blog post: ${frontmatter.title}`;
    const href = `/blog/${frontmatter.slug}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        "aria-label": ariaLabel,
        href: href,
        passHref: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            "aria-label": ariaLabel,
            className: "flex flex-col bg-white bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border-2 border-gray-100 dark:border-gray-500 rounded-2xl overflow-hidden hover:shadow-xl cursor-pointer transform motion-safe:hover:-translate-y-1 default-transition default-focus",
            href: href,
            children: [
                frontmatter.banner && index <= 2 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex justify-center w-full max-w-xl my-auto rounded-t-lg overflow-hidden",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full h-full lg:h-48 bg-gray-200 dark:bg-gray-600 motion-safe:animate-pulse"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            alt: frontmatter.title,
                            className: "absolute top-0 left-0 w-full h-48 object-cover select-none",
                            draggable: false,
                            layout: "fill",
                            loading: "lazy",
                            src: frontmatter.banner
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("flex-1 flex flex-col justify-between p-6 rounded-2xl bg-transparent", frontmatter.banner && index <= 2 && "lg:rounded-tr-none lg:rounded-tl-none"),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col flex-1 justify-around rounded-lg text-gray-300 dark:text-gray-400 default-focus",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: "text-xl font-bold text-gray-900 dark:text-gray-100",
                                children: frontmatter.title
                            }),
                            (frontmatter.description && frontmatter.description_show || true) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                "aria-label": frontmatter.description,
                                className: "mt-3 text-base line-clamp-2",
                                children: frontmatter.description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-start space-x-1 mt-4 text-sm",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Pill.Date */ .DR.E, {
                                    children: frontmatter.date
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6739:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ XButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2943);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__]);
_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function XButton({ external , href , icon , label  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Button.Standard */ .zx.qI, {
        type: _types__WEBPACK_IMPORTED_MODULE_2__/* .NavigationItemType.LINK */ .GU.LINK,
        external: external,
        href: href,
        icon: icon,
        children: label
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ XFigure)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4747);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


function XFigure({ alt , caption , src  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: alt ?? caption,
                className: "rounded-3xl object-cover select-none hover:shadow-xl",
                draggable: false,
                height: "100%",
                layout: "responsive",
                src: src,
                width: "100%"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figcaption", {
                children: alt ?? caption
            })
        ]
    });
}


/***/ }),

/***/ 904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ XSandbox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function XSandbox({ height =32 , id  }) {
    const src = id ? "https://codesandbox.io/embed/new?codemirror=1" : `https://codesandbox.io/embed/${id}?hidenavigation=1&theme=dark`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
        allow: "accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",
        className: "w-full border-none rounded overflow-hidden",
        loading: "lazy",
        sandbox: "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts",
        style: {
            height: `${height}rem`
        },
        src: src
    });
}


/***/ }),

/***/ 1874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ XStreamable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function XStreamable({ id , loop =false , title  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative w-full h-0 my-2 pb-[56.250%]",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
            allowFullScreen: true,
            className: "absolute top-0 left-0 w-full h-full border-none rounded-lg overflow-hidden",
            frameBorder: 0,
            height: "100%",
            loading: "lazy",
            src: `https://streamable.com/e/${id}?loop=${Number(loop)}`,
            title: title,
            width: "100%"
        })
    });
}


/***/ }),

/***/ 8904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Icon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function Icon({ children , className , onClick , ...rest }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ref: ref,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("group", "relative inline-flex items-center px-3 py-2 bg-gray-50 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-white text-gray-400 rounded-lg text-sm font-medium default-transition default-focus", className),
        onClick: (e)=>onClick && onClick(e),
        ...rest,
        children: children
    });
});


/***/ }),

/***/ 1978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ Outline)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1705);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_3__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Outline({ children , className , external =false , href , icon , onClick , small =false , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("inline-flex items-center justify-center w-full sm:w-auto bg-gray-50/75 hover:bg-gray-100/75 hover:text-gray-500 dark:bg-gray-900/75 dark:hover:bg-gray-800/75 dark:border-gray-700 dark:text-primary-500 dark:hover:text-primary-400 backdrop-filter backdrop-blur-sm saturate-200 text-gray-400 font-medium border-2 border-gray-200/50 rounded-lg cursor-pointer default-transition default-focus", small ? "px-4 py-1 text-sm" : "px-8 py-2", className),
            href: href,
            onClick: (...args)=>onClick && onClick(...args),
            rel: "noopener noreferrer",
            target: external ? "_blank" : undefined,
            ...rest,
            children: [
                icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                    className: "mt-1 mr-3",
                    icon: icon
                }),
                children
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Standard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1705);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5566);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2943);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_3__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ButtonStyles = "flex justify-center items-center h-12 px-8 py-4 bg-gray-50 hover:bg-gray-100 hover:bg-opacity-50 hover:text-primary-400 dark:bg-gray-900 dark:hover:bg-gray-800 text-base font-bold text-primary-300 rounded-lg default-transition default-focus";
function Standard({ children , className , icon , ...rest }) {
    switch(rest.type){
        case _types__WEBPACK_IMPORTED_MODULE_4__/* .NavigationItemType.LINK */ .GU.LINK:
            if (rest.external ?? true) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                ...rest,
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(ButtonStyles, className),
                children: [
                    icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                        className: "mr-2",
                        icon: icon
                    }),
                    children
                ]
            });
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: rest.href,
                passHref: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    ...rest,
                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(ButtonStyles, className),
                    href: rest.href,
                    children: [
                        icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                            className: "mr-2",
                            icon: icon
                        }),
                        children
                    ]
                })
            });
        case _types__WEBPACK_IMPORTED_MODULE_4__/* .NavigationItemType.ACTION */ .GU.ACTION:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                ...rest,
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(ButtonStyles, className),
                onClick: (e)=>rest.onClick(e),
                type: "button",
                children: [
                    icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                        className: "mr-2",
                        icon: icon
                    }),
                    children
                ]
            });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export Event */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5245);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(canvas_confetti__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2943);




function Event({ event  }) {
    const canvasRef = useRef(null);
    const confetti = createConfetti(canvasRef.current, {
        resize: true
    });
    useEffect(()=>{
        switch(event){
            case EventType.BIRTHDAY:
                {
                    setTimeout(()=>{
                        Promise.all([
                            // Left Edge
                            confetti({
                                particleCount: 100,
                                startVelocity: 100,
                                angle: 60,
                                spread: 70,
                                origin: {
                                    x: 0,
                                    y: 1
                                }
                            }),
                            // Right Edge
                            confetti({
                                particleCount: 100,
                                startVelocity: 100,
                                angle: 120,
                                spread: 70,
                                origin: {
                                    x: 1,
                                    y: 1
                                }
                            }), 
                        ]);
                    }, 1000);
                }
        }
    }, [
        confetti,
        event
    ]);
    return /*#__PURE__*/ _jsx("canvas", {
        className: "fixed inset-0 z-20",
        ref: canvasRef
    });
}


/***/ }),

/***/ 9940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function Action({ as: Component = "button" , children , className , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("relative inline-flex justify-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-700 dark:hover:text-white border border-gray-100 dark:border-gray-500 rounded-lg text-sm font-medium default-transition default-focus", className),
        ...rest,
        children: children
    });
}


/***/ }),

/***/ 5180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Container({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: "flex flex-col space-y-4",
        role: "list",
        children: children
    });
}


/***/ }),

/***/ 7730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1705);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5566);
/* harmony import */ var _Action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9940);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2943);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_3__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Item({ actions , children , description , icon , iconColor , title  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: "bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-100 dark:border-gray-500 rounded-lg transition ease-in-out duration-300",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-1 items-center justify-start w-full",
                        children: [
                            icon && (typeof icon === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-full", iconColor === undefined && "bg-primary-500"),
                                style: {
                                    backgroundColor: iconColor !== undefined ? iconColor : undefined
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                                    className: "w-6 h-6 text-white",
                                    icon: icon
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: icon
                            })),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "min-w-0 flex-1 px-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-gray-700 dark:text-white text-lg font-bold",
                                        children: title
                                    }),
                                    description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "flex items-center mt-1 text-gray-500 dark:text-gray-400 text-xs",
                                        children: description
                                    })
                                ]
                            })
                        ]
                    }),
                    actions && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "inline-flex items-center justify-end space-x-2 w-full sm:w-auto mt-4 sm:mt-1",
                        children: actions.map((action, index)=>{
                            switch(action.type){
                                case _types__WEBPACK_IMPORTED_MODULE_5__/* .ListActionType.BUTTON */ .GY.BUTTON:
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Action_component__WEBPACK_IMPORTED_MODULE_4__/* .Action */ .a, {
                                        "aria-label": action.label,
                                        onClick: action.onClick,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sr-only",
                                                children: action.label
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                                                className: "mt-1",
                                                icon: action.icon
                                            })
                                        ]
                                    }, index);
                                case _types__WEBPACK_IMPORTED_MODULE_5__/* .ListActionType.LINK */ .GY.LINK:
                                    if (action.external ?? true) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Action_component__WEBPACK_IMPORTED_MODULE_4__/* .Action */ .a, {
                                        as: "a",
                                        "aria-label": action.label,
                                        href: action.href,
                                        onClick: action.onClick,
                                        rel: "noopener noreferrer",
                                        target: "_blank",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sr-only",
                                                children: action.label
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                                                className: "mt-1",
                                                icon: action.icon
                                            })
                                        ]
                                    }, index);
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: action.href,
                                        passHref: true,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Action_component__WEBPACK_IMPORTED_MODULE_4__/* .Action */ .a, {
                                            as: "a",
                                            "aria-label": action.label,
                                            onClick: action.onClick,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: action.label
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                                                    className: "mt-1",
                                                    icon: action.icon
                                                })
                                            ]
                                        }, index)
                                    });
                            }
                        })
                    })
                ]
            }),
            children
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2257:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ Dropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1705);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5566);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1185);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2943);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_4__, _headlessui_react__WEBPACK_IMPORTED_MODULE_5__]);
([_iconify_react__WEBPACK_IMPORTED_MODULE_4__, _headlessui_react__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const StyledMenuItem = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function StyledMenuItem({ active , children , className , ...rest }, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("flex items-center px-4 py-3 text-sm font-medium tracking-wide cursor-pointer default-transition", active ? "bg-gray-100/50 text-gray-900 dark:bg-gray-700/50 dark:text-white" : "text-gray-400 hover:text-gray-700 dark:hover:text-white", className),
        ref: ref,
        ...rest,
        children: children
    });
});
function MenuButtonIcon({ className , icon , direction: type = "left"  }) {
    if (typeof icon !== "string") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: icon
    });
    if (type === "right") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        "aria-hidden": "true",
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("w-4 h-4 ml-3", className),
        icon: icon
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        "aria-hidden": "true",
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("w-5 h-5 mr-3", className),
        icon: icon
    });
}
/**
 * Menu Link
 *
 * @see https://headlessui.dev/react/menu#integrating-with-next-js
 */ function MenuLink({ children , href , onClick , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledMenuItem, {
            onClick: (...args)=>onClick(...args),
            ...rest,
            children: children
        })
    });
}
function Dropdown({ children , items , position ="top-left"  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {
        as: "div",
        className: "relative inline-block text-left",
        children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Button, {
                        as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition, {
                        appear: true,
                        enter: "transition ease-in-out",
                        enterFrom: "transform scale-95 opacity-0",
                        enterTo: "transform scale-100 opacity-100",
                        leave: "transition ease-in-out",
                        leaveFrom: "transform scale-100 opacity-100",
                        leaveTo: "transform scale-95 opacity-0",
                        show: open,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Items, {
                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("absolute w-[calc(100vw-1rem)] sm:w-56 mt-2 bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-100 dark:border-gray-500 rounded-md shadow-lg divide-y divide-gray-100 dark:divide-gray-500 focus:outline-none", position === "top-left" && "origin-top-left left-0", position === "top-right" && "origin-top-right right-0"),
                            children: items.map((section, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "py-2",
                                    children: section.map((item, j)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Menu.Item, {
                                            children: ({ active  })=>{
                                                switch(item.type){
                                                    case _types__WEBPACK_IMPORTED_MODULE_6__/* .NavigationItemType.ACTION */ .GU.ACTION:
                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledMenuItem, {
                                                            active: active,
                                                            className: "group",
                                                            onClick: ()=>item.onClick(),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuButtonIcon, {
                                                                    icon: item.icon
                                                                }),
                                                                item.text,
                                                                item.endIcon && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "flex-1"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuButtonIcon, {
                                                                            direction: "right",
                                                                            icon: item.endIcon
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        });
                                                    case _types__WEBPACK_IMPORTED_MODULE_6__/* .NavigationItemType.DIVIDER */ .GU.DIVIDER:
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                            className: "mt-2 pb-2 border-gray-100 dark:border-gray-500"
                                                        });
                                                    case _types__WEBPACK_IMPORTED_MODULE_6__/* .NavigationItemType.LINK */ .GU.LINK:
                                                        const external = item.external ?? false;
                                                        if (external) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledMenuItem, {
                                                            className: "group",
                                                            active: active,
                                                            href: item.href,
                                                            rel: "noopener noreferrer",
                                                            target: "_blank",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuButtonIcon, {
                                                                    icon: item.icon
                                                                }),
                                                                item.text,
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "flex-1"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuButtonIcon, {
                                                                    direction: "right",
                                                                    icon: "feather:external-link"
                                                                })
                                                            ]
                                                        });
                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MenuLink, {
                                                            active: active,
                                                            href: item.href,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuButtonIcon, {
                                                                    icon: item.icon
                                                                }),
                                                                item.text
                                                            ]
                                                        });
                                                }
                                            }
                                        }, j))
                                }, index))
                        })
                    })
                ]
            })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_2__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Icon({ className , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("w-4 h-4 my-1", className),
        ...rest
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2891:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Standard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7832);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_2__, _lib__WEBPACK_IMPORTED_MODULE_3__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_2__, _lib__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function Standard() {
    const { menu , settings  } = (0,_lib__WEBPACK_IMPORTED_MODULE_3__/* .useNavigation */ .HJ)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Disclosure, {
        as: "nav",
        className: "fixed top-0 left-0 w-full z-10",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto px-2",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex items-center justify-between h-16",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Navbar.Dropdown */ .wp.Lt, {
                        items: menu,
                        position: "top-left",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Button.Icon */ .zx.JO, {
                            "aria-label": "Menu",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Navbar.Icon */ .wp.JO, {
                                icon: "feather:menu"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Navbar.Dropdown */ .wp.Lt, {
                        items: settings,
                        position: "top-right",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Button.Icon */ .zx.JO, {
                            "aria-label": "Settings",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Navbar.Icon */ .wp.JO, {
                                icon: "feather:settings"
                            })
                        })
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ DatePill)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_2__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function DatePill({ children , className , small =false  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("inline-flex justify-center w-full sm:w-auto bg-primary-500 bg-opacity-15 backdrop-filter backdrop-blur-sm saturate-200 rounded-lg text-sm text-primary-500", small ? "px-2 py-1" : "px-4 py-2", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("mt-0.5", small ? "mr-1.5" : "mr-3"),
                icon: "feather:calendar"
            }),
            children
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Standard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function Standard({ children , className , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("inline-flex px-3 lg:px-5 py-2 md:pb-4 bg-primary-500 bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200 rounded-2xl default-transition default-focus", className),
        target: "_blank",
        rel: "noreferrer noopener",
        ...rest,
        children: children
    });
}


/***/ }),

/***/ 8706:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Indicator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7832);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib__WEBPACK_IMPORTED_MODULE_2__]);
_lib__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Indicator({ className , color ="gray" , pulse =false  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("relative inline-flex justify-center items-center w-5 h-5 mr-3", className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            className: "absolute flex h-3 w-3",
            children: [
                pulse && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "absolute inline-flex w-full h-full opacity-75 rounded-full motion-safe:animate-ping",
                    style: {
                        backgroundColor: _lib__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O9?.[color]?.["400"]
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "relative inline-flex w-3 h-3 rounded-full",
                    style: {
                        backgroundColor: _lib__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O9?.[color]?.["500"]
                    }
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 321:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function Error() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex space-x-4 w-full max-w-sm mx-auto px-4 py-4 bg-red-900 backdrop-filter backdrop-blur-sm border-2 border-red-500 rounded-lg hover:shadow-lg default-transition motion-safe:animate-pulse",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-12 h-12 flex justify-center items-center my-auto text-red-500",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    className: "w-8 h-8",
                    icon: "feather:alert-triangle"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-1 space-y-4 py-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-3/4 h-4 rounded ring-2 ring-red-500"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-4 rounded ring-2 ring-red-500"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2943);



function Loading({ type  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex space-x-4 w-full max-w-sm mx-auto px-4 py-4 bg-white/50 dark:bg-gray-900/50 dark:border-gray-600 backdrop-filter backdrop-blur-sm border-2 border-gray-200 rounded-lg hover:shadow-lg default-transition motion-safe:animate-pulse",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("w-12 h-12 my-auto bg-gray-200 dark:bg-gray-600", type === _types__WEBPACK_IMPORTED_MODULE_2__/* .LanyardAvatarType.MUSIC */ .Ec.MUSIC ? "rounded" : "rounded-full")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-1 space-y-4 py-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-3/4 h-4 rounded bg-gray-200 dark:bg-gray-600"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-4 rounded bg-gray-200 dark:bg-gray-600"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3935:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4747);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5566);
/* harmony import */ var _components_Status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6041);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7832);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_3__, _components_Status__WEBPACK_IMPORTED_MODULE_4__, _components__WEBPACK_IMPORTED_MODULE_5__, _lib__WEBPACK_IMPORTED_MODULE_6__]);
([_iconify_react__WEBPACK_IMPORTED_MODULE_3__, _components_Status__WEBPACK_IMPORTED_MODULE_4__, _components__WEBPACK_IMPORTED_MODULE_5__, _lib__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Widget() {
    const { color , loading , status  } = (0,_lib__WEBPACK_IMPORTED_MODULE_6__/* .useStatus */ .$z)();
    if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Status__WEBPACK_IMPORTED_MODULE_4__/* .Loading */ .gb, {});
    if (!status || Object.keys(status).length === 0 || !status) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Status__WEBPACK_IMPORTED_MODULE_4__/* .Error */ .jj, {});
    const activities = [
        /**
		 * Discord User
		 */ {
            avatar: {
                alt: "Discord Avatar",
                url: `https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.webp?size=256`
            },
            title: status.discord_user.username,
            description: `#${status.discord_user.discriminator}`,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Status.Indicator */ .qb.z$, {
                color: color,
                pulse: status.discord_status !== "offline"
            })
        },
        /**
		 * Spotify
		 */ ...status.spotify && status.listening_to_spotify ? [
            {
                avatar: {
                    alt: `${status.spotify.song} - ${status.spotify.artist}`,
                    href: `https://open.spotify.com/track/${status.spotify.track_id}`,
                    url: status.spotify.album_art_url
                },
                title: status.spotify.song,
                description: status.spotify.artist,
                icon: "feather:music"
            }, 
        ] : [],
        /**
		 * All other activities
		 */ ...status.activities.length > 0 ? status.activities.map((activity)=>{
            if (activity.id === "custom" || activity.id.includes("spotify")) return null;
            const hasAsset = activity.assets && activity.assets.large_image ? true : false;
            const avatar = hasAsset ? {
                alt: activity.details,
                url: `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.webp`
            } : {
                alt: activity.name,
                icon: true,
                url: ""
            };
            return {
                avatar,
                title: activity.name,
                description: [
                    activity.details,
                    ...activity.state ? [
                        activity.state
                    ] : [], 
                ]
            };
        }) : [], 
    ].filter((item)=>item !== null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col space-y-5 w-full max-w-sm mx-auto px-4 py-4 bg-white/50 dark:bg-gray-900/50 dark:border-gray-600 backdrop-filter backdrop-blur-sm border-2 border-gray-200 rounded-lg hover:shadow-lg default-transition",
        children: activities.map((activity, index)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "inline-flex items-center",
                        children: [
                            "icon" in activity.avatar ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "max-w-md max-h-12 my-auto rounded pointer-events-none select-none ring-2 ring-gray-200 dark:ring-gray-500",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                                    className: "w-12 h-12 p-1 text-gray-200 dark:text-gray-400",
                                    icon: "lucide:gamepad-2"
                                })
                            }) : activity.avatar.href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "rounded default-transition default-focus",
                                href: activity.avatar.href,
                                target: "_blank",
                                rel: "noreferrer noopener",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "max-w-md max-h-12 my-auto rounded pointer-events-none select-none ring-2 ring-gray-200 dark:ring-gray-500",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        alt: activity.avatar.alt,
                                        className: "w-full max-h-12 rounded",
                                        height: 48,
                                        src: activity.avatar.url,
                                        width: 48
                                    })
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "max-w-md max-h-12 my-auto rounded pointer-events-none select-none ring-2 ring-gray-200 dark:ring-gray-500",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    alt: activity.avatar.alt,
                                    className: "w-full max-h-12 rounded",
                                    height: 48,
                                    src: activity.avatar.url,
                                    width: 48
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-1 ml-4",
                                children: "icon" in activity.avatar && activity.avatar.icon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mt-0 mb-1 text-xs tracking-wide font-medium text-gray-500 dark:text-gray-400",
                                            children: "Playing"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-base font-extrabold line-clamp-1 tracking-wide overflow-ellipsis text-gray-900 dark:text-white",
                                            children: activity.title
                                        })
                                    ]
                                }) : Array.isArray(activity.description) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-base font-extrabold line-clamp-1 tracking-wide overflow-ellipsis text-gray-900 dark:text-white",
                                            children: activity.title
                                        }),
                                        activity.description.map((description, descriptionIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mt-1 text-xs tracking-wide font-medium text-gray-500 dark:text-gray-400",
                                                children: description
                                            }, descriptionIndex))
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-base font-extrabold line-clamp-1 tracking-wide overflow-ellipsis text-gray-900 dark:text-white",
                                            children: activity.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mt-1 text-xs tracking-wide font-medium text-gray-500 dark:text-gray-400",
                                            children: activity.description
                                        })
                                    ]
                                })
                            }),
                            activity.icon && (typeof activity.icon === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                                className: "w-6 h-6 mx-3 text-gray-200 dark:text-gray-400 motion-safe:animate-pulse",
                                icon: activity.icon
                            }) : activity.icon)
                        ]
                    }),
                    index + 1 !== activities.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "h-0.5 bg-gray-100 dark:bg-gray-600 border-none rounded-full"
                    })
                ]
            }, index);
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1910:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ BlogLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7832);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__, _lib__WEBPACK_IMPORTED_MODULE_3__]);
([_components__WEBPACK_IMPORTED_MODULE_2__, _lib__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function BlogLayout({ children , seo  }) {
    const seoProps = (0,_lib__WEBPACK_IMPORTED_MODULE_3__/* .useSeoProps */ .$M)({
        title: "nuro ─ blog",
        ...seo
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
                ...seoProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Navbar.Standard */ .wp.qI, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "flex flex-col justify-center sm:px-8",
                children: children
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5540:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ DefaultLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8329);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7832);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__, _lib__WEBPACK_IMPORTED_MODULE_4__]);
([_components__WEBPACK_IMPORTED_MODULE_3__, _lib__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Background = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 4176)).then(({ Standard  })=>Standard), {
    loadableGenerated: {
        modules: [
            "../layouts/Default.layout.tsx -> " + "~/components/Background/Standard.component"
        ]
    }
});
function DefaultLayout({ background: overrideBackground , children , seo: customSeo  }) {
    const { animations: background  } = (0,_lib__WEBPACK_IMPORTED_MODULE_4__/* .usePersistantState */ .AB)().get();
    const showBackground = overrideBackground ?? background;
    const seo = (0,_lib__WEBPACK_IMPORTED_MODULE_4__/* .useSeoProps */ .$M)(customSeo);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
                ...seo
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Navbar.Standard */ .wp.qI, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "flex flex-col justify-center px-8",
                children: [
                    showBackground && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Background, {}),
                    children
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ErrorLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7832);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib__WEBPACK_IMPORTED_MODULE_2__]);
_lib__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ErrorLayout({ children , seo  }) {
    const seoProps = (0,_lib__WEBPACK_IMPORTED_MODULE_2__/* .useSeoProps */ .$M)({
        title: "Goutham Whoops!",
        ...seo
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
                ...seoProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "flex flex-col justify-center px-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative h-screen pt-24 sm:pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8",
                    children: children
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3801:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _Standard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Standard_component__WEBPACK_IMPORTED_MODULE_0__]);
_Standard_component__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Standard)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* reexport */ CodeStyles),
  "e": () => (/* reexport */ ElementsStyles)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./src/components/Blog/Styles/Code.styles.tsx


function CodeStyles() {
    return jsx_runtime_.jsx((style_default()), {
        id: "128ef65df0196604",
        children: 'code[class*="language-"],pre[class*="language-"]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(167,169,172,var(--tw-text-opacity));font-family:"Fira Code","Fira Mono",Menlo,Consolas,"DejaVu Sans Mono",monospace;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;line-height:1.5;-moz-tab-size:2;-o-tab-size:2;tab-size:2;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}.dark code[class*="language-"],.dark pre[class*="language-"]{--tw-bg-opacity:1;background-color:rgba(18,21,24,var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(202,203,205,var(--tw-text-opacity))}code[class*="language-"]::-moz-selection,code[class*="language-"] *::-moz-selection,pre[class*="language-"] *::-moz-selection{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity));color:inherit}.dark code[class*="language-"]::-moz-selection,.dark code[class*="language-"] *::-moz-selection,.dark pre[class*="language-"] *::-moz-selection{--tw-bg-opacity:1;background-color:rgba(167,169,172,var(--tw-bg-opacity));--tw-bg-opacity:0.25}code[class*="language-"]::selection,code[class*="language-"] *::selection,pre[class*="language-"] *::selection{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity));color:inherit}.dark code[class*="language-"]::selection,.dark code[class*="language-"] *::selection,.dark pre[class*="language-"] *::selection{--tw-bg-opacity:1;background-color:rgba(167,169,172,var(--tw-bg-opacity));--tw-bg-opacity:0.25}pre[class*="language-"]{margin-bottom:.375rem;overflow:auto;padding:1rem}:not(pre)>code[class*="language-"]{padding-top:.25rem;padding-bottom:.25rem;padding-left:.375rem;padding-right:.375rem;white-space:normal}@media print{code[class*="language-"],pre[class*="language-"]{text-shadow:none}}.token.comment,.token.prolog,.token.cdata{--tw-text-opacity:1;color:rgba(105,108,113,var(--tw-text-opacity))}.token.doctype,.token.punctuation,.token.entity{--tw-text-opacity:1;color:rgba(202,203,205,var(--tw-text-opacity))}.token.attr-name,.token.class-name,.token.boolean,.token.constant,.token.number,.token.atrule{--tw-text-opacity:1;color:rgba(245,158,11,var(--tw-text-opacity))}.token.keyword{--tw-text-opacity:1;color:rgba(236,72,153,var(--tw-text-opacity))}.token.property,.token.tag,.token.symbol,.token.deleted,.token.important{--tw-text-opacity:1;color:rgba(239,68,68,var(--tw-text-opacity))}.token.selector,.token.string,.token.char,.token.builtin,.token.inserted,.token.regex,.token.attr-value,.token.attr-value>.token.punctuation{--tw-text-opacity:1;color:rgba(16,185,129,var(--tw-text-opacity))}.token.variable,.token.operator,.token.function{--tw-text-opacity:1;color:rgba(59,130,246,var(--tw-text-opacity))}.token.url{color:hsl(187,47%,55%)}.token.attr-value>.token.punctuation.attr-equals,.token.special-attr>.token.attr-value>.token.value.css{color:hsl(220,14%,71%)}.language-css .token.selector{color:hsl(355,65%,65%)}.language-css .token.property{color:hsl(220,14%,71%)}.language-css .token.function,.language-css .token.url>.token.function{color:hsl(187,47%,55%)}.language-css .token.url>.token.string.url{color:hsl(95,38%,62%)}.language-css .token.important,.language-css .token.atrule .token.rule{color:hsl(286,60%,67%)}.language-javascript .token.operator{color:hsl(286,60%,67%)}.language-javascript .token.template-string>.token.interpolation>.token.interpolation-punctuation.punctuation{color:hsl(5,48%,51%)}.language-json .token.operator{color:hsl(220,14%,71%)}.language-json .token.null.keyword{color:hsl(29,54%,61%)}.language-markdown .token.url,.language-markdown .token.url>.token.operator,.language-markdown .token.url-reference.url>.token.string{color:hsl(220,14%,71%)}.language-markdown .token.url>.token.content{color:hsl(207,82%,66%)}.language-markdown .token.url>.token.url,.language-markdown .token.url-reference.url{color:hsl(187,47%,55%)}.language-markdown .token.blockquote.punctuation,.language-markdown .token.hr.punctuation{color:hsl(220,10%,40%);font-style:italic}.language-markdown .token.code-snippet{color:hsl(95,38%,62%)}.language-markdown .token.bold .token.content{color:hsl(29,54%,61%)}.language-markdown .token.italic .token.content{color:hsl(286,60%,67%)}.language-markdown .token.strike .token.content,.language-markdown .token.strike .token.punctuation,.language-markdown .token.list.punctuation,.language-markdown .token.title.important>.token.punctuation{color:hsl(355,65%,65%)}.token.bold{font-weight:bold}.token.comment,.token.italic{font-style:italic}.token.entity{cursor:help}.token.namespace{opacity:.8}.token.token.tab:not(:empty):before,.token.token.cr:before,.token.token.lf:before,.token.token.space:before{color:hsla(220,14%,71%,.15);text-shadow:none}div.code-toolbar>.toolbar.toolbar>.toolbar-item{margin-right:.4em}div.code-toolbar>.toolbar.toolbar>.toolbar-item>button,div.code-toolbar>.toolbar.toolbar>.toolbar-item>a,div.code-toolbar>.toolbar.toolbar>.toolbar-item>span{background:hsl(220,13%,26%);color:hsl(220,9%,55%);padding:.1em .4em}div.code-toolbar>.toolbar.toolbar>.toolbar-item>button:hover,div.code-toolbar>.toolbar.toolbar>.toolbar-item>button:focus,div.code-toolbar>.toolbar.toolbar>.toolbar-item>a:hover,div.code-toolbar>.toolbar.toolbar>.toolbar-item>a:focus,div.code-toolbar>.toolbar.toolbar>.toolbar-item>span:hover,div.code-toolbar>.toolbar.toolbar>.toolbar-item>span:focus{background:hsl(220,13%,28%);color:hsl(220,14%,71%)}.line-highlight.line-highlight{background:hsla(220,100%,80%,.04)}.line-highlight.line-highlight:before,.line-highlight.line-highlight[data-end]:after{background:hsl(220,13%,26%);color:hsl(220,14%,71%);padding:.1em .6em;-webkit-box-shadow:0 2px 0 0 rgba(0,0,0,.2);-moz-box-shadow:0 2px 0 0 rgba(0,0,0,.2);box-shadow:0 2px 0 0 rgba(0,0,0,.2)}pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows>span:hover:before{background-color:hsla(220,100%,80%,.04)}.line-numbers.line-numbers .line-numbers-rows,.command-line .command-line-prompt{border-right-color:hsla(220,14%,71%,.15)}.line-numbers .line-numbers-rows>span:before,.command-line .command-line-prompt>span:before{color:hsl(220,14%,45%)}.rainbow-braces .token.token.punctuation.brace-level-1,.rainbow-braces .token.token.punctuation.brace-level-5,.rainbow-braces .token.token.punctuation.brace-level-9{color:hsl(355,65%,65%)}.rainbow-braces .token.token.punctuation.brace-level-2,.rainbow-braces .token.token.punctuation.brace-level-6,.rainbow-braces .token.token.punctuation.brace-level-10{color:hsl(95,38%,62%)}.rainbow-braces .token.token.punctuation.brace-level-3,.rainbow-braces .token.token.punctuation.brace-level-7,.rainbow-braces .token.token.punctuation.brace-level-11{color:hsl(207,82%,66%)}.rainbow-braces .token.token.punctuation.brace-level-4,.rainbow-braces .token.token.punctuation.brace-level-8,.rainbow-braces .token.token.punctuation.brace-level-12{color:hsl(286,60%,67%)}pre.diff-highlight>code .token.token.deleted:not(.prefix),pre>code.diff-highlight .token.token.deleted:not(.prefix){background-color:hsla(353,100%,66%,.15)}pre.diff-highlight>code .token.token.deleted:not(.prefix)::-moz-selection,pre.diff-highlight>code .token.token.deleted:not(.prefix) *::-moz-selection,pre>code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection,pre>code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection{background-color:hsla(353,95%,66%,.25)}pre.diff-highlight>code .token.token.deleted:not(.prefix)::selection,pre.diff-highlight>code .token.token.deleted:not(.prefix) *::selection,pre>code.diff-highlight .token.token.deleted:not(.prefix)::selection,pre>code.diff-highlight .token.token.deleted:not(.prefix) *::selection{background-color:hsla(353,95%,66%,.25)}pre.diff-highlight>code .token.token.inserted:not(.prefix),pre>code.diff-highlight .token.token.inserted:not(.prefix){background-color:hsla(137,100%,55%,.15)}pre.diff-highlight>code .token.token.inserted:not(.prefix)::-moz-selection,pre.diff-highlight>code .token.token.inserted:not(.prefix) *::-moz-selection,pre>code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection,pre>code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection{background-color:hsla(135,73%,55%,.25)}pre.diff-highlight>code .token.token.inserted:not(.prefix)::selection,pre.diff-highlight>code .token.token.inserted:not(.prefix) *::selection,pre>code.diff-highlight .token.token.inserted:not(.prefix)::selection,pre>code.diff-highlight .token.token.inserted:not(.prefix) *::selection{background-color:hsla(135,73%,55%,.25)}.prism-previewer.prism-previewer:before,.prism-previewer-gradient.prism-previewer-gradient div{border-color:hsl(224,13%,17%)}.prism-previewer-color.prism-previewer-color:before,.prism-previewer-gradient.prism-previewer-gradient div,.prism-previewer-easing.prism-previewer-easing:before{-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em}.prism-previewer.prism-previewer:after{border-top-color:hsl(224,13%,17%)}.prism-previewer-flipped.prism-previewer-flipped.after{border-bottom-color:hsl(224,13%,17%)}.prism-previewer-angle.prism-previewer-angle:before,.prism-previewer-time.prism-previewer-time:before,.prism-previewer-easing.prism-previewer-easing{background:hsl(219,13%,22%)}.prism-previewer-angle.prism-previewer-angle circle,.prism-previewer-time.prism-previewer-time circle{stroke:hsl(220,14%,71%);stroke-opacity:1}.prism-previewer-easing.prism-previewer-easing circle,.prism-previewer-easing.prism-previewer-easing path,.prism-previewer-easing.prism-previewer-easing line{stroke:hsl(220,14%,71%)}.prism-previewer-easing.prism-previewer-easing circle{fill:transparent}'
    });
}

;// CONCATENATED MODULE: ./src/components/Blog/Styles/Elements.styles.tsx


function ElementsStyles() {
    return jsx_runtime_.jsx((style_default()), {
        id: "60c1546e9c741873",
        children: '.dark h1,.dark h2,.dark h3,.dark h4,.dark h5,.dark h6{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{border-style:none;float:left;margin-top:.125rem;margin-left:-1.25rem;opacity:0;padding-right:.5rem;text-decoration:none}h1 a .icon-link:before,h2 a .icon-link:before,h3 a .icon-link:before,h4 a .icon-link:before,h5 a .icon-link:before,h6 a .icon-link:before{content:"#"}h1:hover a,h1:focus a,h2:hover a,h2:focus a,h3:hover a,h3:focus a,h4:hover a,h4:focus a,h5:hover a,h5:focus a,h6:hover a,h6:focus a{opacity:1;text-decoration:none}a{-webkit-border-radius:.25rem;-moz-border-radius:.25rem;border-radius:.25rem;text-decoration:none;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform,filter,backdrop-filter;-o-transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;-moz-transition-timing-function:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,-moz-transform,-webkit-transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,-webkit-transform,-webkit-transform,-webkit-filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,-moz-transform,-webkit-transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,-o-transform,-webkit-transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,transform,-webkit-transform,filter,backdrop-filter;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);-o-transition-timing-function:cubic-bezier(.4,0,.2,1);-moz-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;-moz-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:300ms;-o-transition-duration:300ms;-moz-transition-duration:300ms;transition-duration:300ms}a:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);-webkit-box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0#0000);-moz-box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0#0000);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0#0000);--tw-ring-offset-width:2px;--tw-ring-opacity:1;--tw-ring-color:rgba(0, 114, 255, var(--tw-ring-opacity))}.dark a{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}a .item{border-bottom-width:0px;opacity:.6;text-decoration:none;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform,filter,backdrop-filter;-o-transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;-moz-transition-timing-function:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,-moz-transform,-webkit-transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,-webkit-transform,-webkit-transform,-webkit-filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,-moz-transform,-webkit-transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,-o-transform,-webkit-transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,transform,-webkit-transform,filter,backdrop-filter;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);-o-transition-timing-function:cubic-bezier(.4,0,.2,1);-moz-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;-moz-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:300ms;-o-transition-duration:300ms;-moz-transition-duration:300ms;transition-duration:300ms}a .item:hover{opacity:1}p,ul,li{--tw-text-opacity:1;color:rgba(105,108,113,var(--tw-text-opacity))}.dark strong{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}img{-webkit-border-radius:1.5rem;-moz-border-radius:1.5rem;border-radius:1.5rem;-o-object-fit:cover;object-fit:cover;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform,filter,backdrop-filter;-o-transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;-moz-transition-timing-function:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,-moz-transform,-webkit-transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,-webkit-transform,-webkit-transform,-webkit-filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,-moz-transform,-webkit-transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,-o-transform,-webkit-transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,-webkit-box-shadow,transform,-webkit-transform,filter,backdrop-filter;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);-o-transition-timing-function:cubic-bezier(.4,0,.2,1);-moz-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:150ms;-o-transition-duration:150ms;-moz-transition-duration:150ms;transition-duration:150ms;-webkit-transition-duration:300ms;-o-transition-duration:300ms;-moz-transition-duration:300ms;transition-duration:300ms}img:hover{--tw-shadow:0 20px 25px -5px rgb(0 0 0/0.1),0 8px 10px -6px rgb(0 0 0/0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0#0000),var(--tw-ring-shadow,0 0#0000),var(--tw-shadow);-moz-box-shadow:var(--tw-ring-offset-shadow,0 0#0000),var(--tw-ring-shadow,0 0#0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0#0000),var(--tw-ring-shadow,0 0#0000),var(--tw-shadow)}figcaption{text-align:center;--tw-text-opacity:1;color:rgba(202,203,205,var(--tw-text-opacity))}.dark figcaption{--tw-text-opacity:1;color:rgba(105,108,113,var(--tw-text-opacity))}.dark hr{--tw-border-opacity:1;border-color:rgba(36,41,47,var(--tw-border-opacity))}hr{margin-top:1rem;margin-bottom:1rem}code{--tw-bg-opacity:1;background-color:rgba(234,234,235,var(--tw-bg-opacity));-webkit-border-radius:.25rem;-moz-border-radius:.25rem;border-radius:.25rem;padding:.25rem;--tw-text-opacity:1;color:rgba(105,108,113,var(--tw-text-opacity))}.dark code{--tw-bg-opacity:1;background-color:rgba(24,27,32,var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(202,203,205,var(--tw-text-opacity))}code:after,code:before{display:none}pre{--tw-bg-opacity:1;background-color:rgba(202,203,205,var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(234,234,235,var(--tw-border-opacity));-webkit-border-radius:.5rem;-moz-border-radius:.5rem;border-radius:.5rem;-webkit-border-top-left-radius:0px;-moz-border-radius-topleft:0px;border-top-left-radius:0px;-webkit-border-top-right-radius:0px;-moz-border-radius-topright:0px;border-top-right-radius:0px;border-width:2px;margin:0px}.dark pre{--tw-bg-opacity:1;background-color:rgba(18,21,24,var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(40,45,52,var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.dark th{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.dark td{--tw-text-opacity:1;color:rgba(105,108,113,var(--tw-text-opacity))}.dark ol li::before{--tw-text-opacity:1;color:rgba(167,169,172,var(--tw-text-opacity))}.light .remark-code-title{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.remark-code-title{--tw-border-opacity:1;border-color:rgba(234,234,235,var(--tw-border-opacity));-webkit-border-radius:.5rem;-moz-border-radius:.5rem;border-radius:.5rem;-webkit-border-bottom-right-radius:0px;-moz-border-radius-bottomright:0px;border-bottom-right-radius:0px;-webkit-border-bottom-left-radius:0px;-moz-border-radius-bottomleft:0px;border-bottom-left-radius:0px;border-width:2px;border-bottom-width:0px;font-weight:500;padding-left:1rem;padding-right:1rem;padding-top:.5rem;padding-bottom:.5rem;--tw-text-opacity:1;color:rgba(167,169,172,var(--tw-text-opacity))}.dark .remark-code-title{--tw-border-opacity:1;border-color:rgba(40,45,52,var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}'
    });
}

;// CONCATENATED MODULE: ./src/components/Blog/Styles/index.ts
/**
 * Note: This styling system is very hacky & not ideal.
 * A new & better system for prose / code block styles needs to be looked into in future
 */ 



/***/ }),

/***/ 2446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XButton": () => (/* reexport safe */ _XButton_component__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   "XFigure": () => (/* reexport safe */ _XFigure_component__WEBPACK_IMPORTED_MODULE_1__.B),
/* harmony export */   "XSandbox": () => (/* reexport safe */ _XSandbox_component__WEBPACK_IMPORTED_MODULE_2__.b),
/* harmony export */   "XStreamable": () => (/* reexport safe */ _XStreamable_component__WEBPACK_IMPORTED_MODULE_3__.V)
/* harmony export */ });
/* harmony import */ var _XButton_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6739);
/* harmony import */ var _XFigure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1946);
/* harmony import */ var _XSandbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(904);
/* harmony import */ var _XStreamable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1874);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_XButton_component__WEBPACK_IMPORTED_MODULE_0__]);
_XButton_component__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7557:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SO": () => (/* reexport safe */ _Post_component__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   "X": () => (/* reexport module object */ _X__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "jj": () => (/* reexport safe */ _Error_component__WEBPACK_IMPORTED_MODULE_3__.j),
/* harmony export */   "lf": () => (/* reexport safe */ _Latest_component__WEBPACK_IMPORTED_MODULE_4__.l),
/* harmony export */   "z0": () => (/* reexport module object */ _Styles__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _Post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4913);
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3406);
/* harmony import */ var _X__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2446);
/* harmony import */ var _Error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7834);
/* harmony import */ var _Latest_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7708);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Post_component__WEBPACK_IMPORTED_MODULE_0__, _X__WEBPACK_IMPORTED_MODULE_2__, _Error_component__WEBPACK_IMPORTED_MODULE_3__, _Latest_component__WEBPACK_IMPORTED_MODULE_4__]);
([_Post_component__WEBPACK_IMPORTED_MODULE_0__, _X__WEBPACK_IMPORTED_MODULE_2__, _Error_component__WEBPACK_IMPORTED_MODULE_3__, _Latest_component__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JO": () => (/* reexport safe */ _Icon_component__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   "bw": () => (/* reexport safe */ _Outline_component__WEBPACK_IMPORTED_MODULE_2__.b),
/* harmony export */   "qI": () => (/* reexport safe */ _Standard_component__WEBPACK_IMPORTED_MODULE_1__.q)
/* harmony export */ });
/* harmony import */ var _Icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8904);
/* harmony import */ var _Standard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5930);
/* harmony import */ var _Outline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1978);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Standard_component__WEBPACK_IMPORTED_MODULE_1__, _Outline_component__WEBPACK_IMPORTED_MODULE_2__]);
([_Standard_component__WEBPACK_IMPORTED_MODULE_1__, _Outline_component__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1127:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* reexport safe */ _Container_component__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   "c": () => (/* reexport safe */ _Item_component__WEBPACK_IMPORTED_MODULE_1__.c)
/* harmony export */ });
/* harmony import */ var _Container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5180);
/* harmony import */ var _Item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7730);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Item_component__WEBPACK_IMPORTED_MODULE_1__]);
_Item_component__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9788:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JO": () => (/* reexport safe */ _Icon_component__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   "Lt": () => (/* reexport safe */ _Dropdown_component__WEBPACK_IMPORTED_MODULE_2__.L),
/* harmony export */   "qI": () => (/* reexport safe */ _Standard_component__WEBPACK_IMPORTED_MODULE_1__.q)
/* harmony export */ });
/* harmony import */ var _Icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7317);
/* harmony import */ var _Standard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2891);
/* harmony import */ var _Dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2257);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Icon_component__WEBPACK_IMPORTED_MODULE_0__, _Standard_component__WEBPACK_IMPORTED_MODULE_1__, _Dropdown_component__WEBPACK_IMPORTED_MODULE_2__]);
([_Icon_component__WEBPACK_IMPORTED_MODULE_0__, _Standard_component__WEBPACK_IMPORTED_MODULE_1__, _Dropdown_component__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9736:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _Date_component__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   "q": () => (/* reexport safe */ _Standard_component__WEBPACK_IMPORTED_MODULE_1__.q)
/* harmony export */ });
/* harmony import */ var _Date_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(697);
/* harmony import */ var _Standard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4425);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Date_component__WEBPACK_IMPORTED_MODULE_0__]);
_Date_component__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5820:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$L": () => (/* reexport safe */ _Standard_component__WEBPACK_IMPORTED_MODULE_2__.$),
/* harmony export */   "gb": () => (/* reexport safe */ _Loading_component__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   "jj": () => (/* reexport safe */ _Error_component__WEBPACK_IMPORTED_MODULE_0__.j)
/* harmony export */ });
/* harmony import */ var _Error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(321);
/* harmony import */ var _Loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5826);
/* harmony import */ var _Standard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3935);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Error_component__WEBPACK_IMPORTED_MODULE_0__, _Standard_component__WEBPACK_IMPORTED_MODULE_2__]);
([_Error_component__WEBPACK_IMPORTED_MODULE_0__, _Standard_component__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6041:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$L": () => (/* reexport safe */ _Widget__WEBPACK_IMPORTED_MODULE_1__.$L),
/* harmony export */   "gb": () => (/* reexport safe */ _Widget__WEBPACK_IMPORTED_MODULE_1__.gb),
/* harmony export */   "jj": () => (/* reexport safe */ _Widget__WEBPACK_IMPORTED_MODULE_1__.jj),
/* harmony export */   "z$": () => (/* reexport safe */ _Indicator_component__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _Indicator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8706);
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5820);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Indicator_component__WEBPACK_IMPORTED_MODULE_0__, _Widget__WEBPACK_IMPORTED_MODULE_1__]);
([_Indicator_component__WEBPACK_IMPORTED_MODULE_0__, _Widget__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DR": () => (/* reexport module object */ _Pill__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "aV": () => (/* reexport module object */ _List__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "l3": () => (/* reexport module object */ _Blog__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "qb": () => (/* reexport module object */ _Status__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   "rs": () => (/* reexport safe */ _Animate_component__WEBPACK_IMPORTED_MODULE_7__.r),
/* harmony export */   "wp": () => (/* reexport module object */ _Navbar__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "zx": () => (/* reexport module object */ _Button__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3801);
/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7557);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9745);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1127);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9788);
/* harmony import */ var _Pill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9736);
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6041);
/* harmony import */ var _Animate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1293);
/* harmony import */ var _Event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4576);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Background__WEBPACK_IMPORTED_MODULE_0__, _Blog__WEBPACK_IMPORTED_MODULE_1__, _Button__WEBPACK_IMPORTED_MODULE_2__, _List__WEBPACK_IMPORTED_MODULE_3__, _Navbar__WEBPACK_IMPORTED_MODULE_4__, _Pill__WEBPACK_IMPORTED_MODULE_5__, _Status__WEBPACK_IMPORTED_MODULE_6__, _Animate_component__WEBPACK_IMPORTED_MODULE_7__]);
([_Background__WEBPACK_IMPORTED_MODULE_0__, _Blog__WEBPACK_IMPORTED_MODULE_1__, _Button__WEBPACK_IMPORTED_MODULE_2__, _List__WEBPACK_IMPORTED_MODULE_3__, _Navbar__WEBPACK_IMPORTED_MODULE_4__, _Pill__WEBPACK_IMPORTED_MODULE_5__, _Status__WEBPACK_IMPORTED_MODULE_6__, _Animate_component__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9508:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _Blog_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1910);
/* harmony import */ var _Default_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5540);
/* harmony import */ var _Error_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7658);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Blog_layout__WEBPACK_IMPORTED_MODULE_0__, _Default_layout__WEBPACK_IMPORTED_MODULE_1__, _Error_layout__WEBPACK_IMPORTED_MODULE_2__]);
([_Blog_layout__WEBPACK_IMPORTED_MODULE_0__, _Default_layout__WEBPACK_IMPORTED_MODULE_1__, _Error_layout__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const Layout = {
    Blog: _Blog_layout__WEBPACK_IMPORTED_MODULE_0__/* .BlogLayout */ .E,
    Default: _Default_layout__WEBPACK_IMPORTED_MODULE_1__/* .DefaultLayout */ .H,
    Error: _Error_layout__WEBPACK_IMPORTED_MODULE_2__/* .ErrorLayout */ .Y
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("precision highp float;\n\nuniform float uTime;\nuniform vec3 uColor;\n\nvarying vec4 vRandom;\n\nvoid main() {\n\tvec2 uv = gl_PointCoord.xy;\n\t\n\tfloat circle = smoothstep(0.5, 0.4, length(uv - 0.5)) * 1.0;\n\t\n\tgl_FragColor.rgb = uColor;\n\tgl_FragColor.a = circle;\n}\n");

/***/ }),

/***/ 9789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("attribute vec3 position;\nattribute vec4 random;\n\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform float uTime;\n\nvarying vec4 vRandom;\n\nvoid main() {\n\tvRandom = random;\n\t\n\t// Positions are 0->1, so make -1->1\n\tvec3 pos = position * 2.0 - 1.0;\n\t\n\t// Scale towards camera to be more interesting\n\tpos.z *= 10.0;\n\t\n\t// modelMatrix is one of the automatically attached uniforms when using the Mesh class\n\tvec4 mPos = modelMatrix * vec4(pos, 1.0);\n\n\t// Add some movement in world space\n\tfloat t = uTime * 0.6;\n\tmPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);\n\tmPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);\n\tmPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);\n\t\n\t// Get the model view position so that we can scale the points off into the distance\n\tvec4 mvPos = viewMatrix * mPos;\n\tgl_PointSize = 300.0 / length(mvPos.xyz) * (random.x + 0.1);\n\tgl_Position = projectionMatrix * mvPos;\n}\n");

/***/ })

};
;