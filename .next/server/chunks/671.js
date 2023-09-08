"use strict";
exports.id = 671;
exports.ids = [671];
exports.modules = {

/***/ 9671:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QN": () => (/* binding */ getAllPostsFrontMatter),
/* harmony export */   "bz": () => (/* binding */ getAllPostSlugs),
/* harmony export */   "xl": () => (/* binding */ getPost)
/* harmony export */ });
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7112);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9847);
/* harmony import */ var remark_code_titles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7275);
/* harmony import */ var remark_code_titles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(remark_code_titles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var remark_emoji__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3029);
/* harmony import */ var remark_prism__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2423);
/* harmony import */ var remark_prism__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remark_prism__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var remark_slug__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9071);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_5__, remark_emoji__WEBPACK_IMPORTED_MODULE_7__, remark_slug__WEBPACK_IMPORTED_MODULE_9__]);
([rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_5__, remark_emoji__WEBPACK_IMPORTED_MODULE_7__, remark_slug__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const BLOG_POSTS_DIR = (0,path__WEBPACK_IMPORTED_MODULE_2__.join)(process.cwd(), "src", "data", "blog");
/**
 * Get the slugs of all available blog posts
 */ async function getAllPostSlugs() {
    return (0,fs__WEBPACK_IMPORTED_MODULE_3__.readdirSync)(BLOG_POSTS_DIR);
}
/**
 * Get the frontmatter metadata for all available blog posts
 */ async function getAllPostsFrontMatter() {
    const files = (0,fs__WEBPACK_IMPORTED_MODULE_3__.readdirSync)(BLOG_POSTS_DIR);
    return files.map((slug)=>{
        const source = (0,fs__WEBPACK_IMPORTED_MODULE_3__.readFileSync)((0,path__WEBPACK_IMPORTED_MODULE_2__.join)(BLOG_POSTS_DIR, slug), "utf8");
        const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(source);
        const frontmatter = data;
        const trimmedSlug = slug.replace(".md", "");
        return {
            ...frontmatter,
            slug: trimmedSlug
        };
    }).sort((a, b)=>new Date(b.date).valueOf() - new Date(a.date).valueOf()).map((f)=>({
            ...f,
            date: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(f.date), "PPP")
        }));
}
/**
 * Get the frontmatter metadata & post MDX contents from file
 *
 * @param {string} slug - Slug / file name of the blog post to load data from
 */ async function getPost(slug) {
    const raw = (0,fs__WEBPACK_IMPORTED_MODULE_3__.readFileSync)((0,path__WEBPACK_IMPORTED_MODULE_2__.join)(BLOG_POSTS_DIR, `${slug}.md`)).toString();
    const { content , data  } = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(raw);
    const source = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__.serialize)(content, {
        scope: data,
        mdxOptions: {
            rehypePlugins: [
                rehype_autolink_headings__WEBPACK_IMPORTED_MODULE_5__["default"]
            ],
            remarkPlugins: [
                (remark_code_titles__WEBPACK_IMPORTED_MODULE_6___default()),
                remark_emoji__WEBPACK_IMPORTED_MODULE_7__["default"],
                (remark_prism__WEBPACK_IMPORTED_MODULE_8___default()),
                remark_slug__WEBPACK_IMPORTED_MODULE_9__["default"], 
            ]
        }
    });
    const frontmatter = data;
    const trimmedSlug = slug.replace(".md", "");
    return {
        frontmatter: {
            ...frontmatter,
            date: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(frontmatter.date), "PPP"),
            slug: trimmedSlug
        },
        source
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;