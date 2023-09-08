"use strict";
exports.id = 832;
exports.ids = [832];
exports.modules = {

/***/ 7096:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useNavigation)
/* harmony export */ });
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7832);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2943);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib__WEBPACK_IMPORTED_MODULE_1__]);
_lib__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const staticMenuItems = [
    [
        {
            type: _types__WEBPACK_IMPORTED_MODULE_2__/* .NavigationItemType.LINK */ .GU.LINK,
            icon: "feather:home",
            text: "Home",
            href: "/"
        },
        {
            type: _types__WEBPACK_IMPORTED_MODULE_2__/* .NavigationItemType.LINK */ .GU.LINK,
            icon: "feather:edit-3",
            text: "Blog",
            href: "/blog"
        },
        {
            type: _types__WEBPACK_IMPORTED_MODULE_2__/* .NavigationItemType.LINK */ .GU.LINK,
            icon: "feather:copy",
            text: "Projects",
            href: "/projects"
        },
        {
            type: _types__WEBPACK_IMPORTED_MODULE_2__/* .NavigationItemType.LINK */ .GU.LINK,
            icon: "feather:clock",
            text: "Timeline",
            href: "/timeline"
        }, 
    ],
    [
        {
            type: _types__WEBPACK_IMPORTED_MODULE_2__/* .NavigationItemType.LINK */ .GU.LINK,
            icon: "feather:instagram",
            text: "Instagram",
            href: "https://www.instagram.com/gouthamsp03/",
            external: true
        },
        {
            type: _types__WEBPACK_IMPORTED_MODULE_2__/* .NavigationItemType.LINK */ .GU.LINK,
            icon: "feather:github",
            text: "GitHub",
            href: "https://github.com/spgoutham",
            external: true
        }, 
    ], 
];
function useNavigation() {
    const state = (0,_lib__WEBPACK_IMPORTED_MODULE_1__/* .usePersistantState */ .AB)();
    const { animations: background , sound  } = state.get();
    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const menuItems = [
        ...staticMenuItems
    ];
    const settingsItems = [
        [
            {
                type: _types__WEBPACK_IMPORTED_MODULE_2__/* .NavigationItemType.ACTION */ .GU.ACTION,
                icon: "feather:image",
                endIcon: background ? "feather:check-circle" : "feather:circle",
                text: `Animations ${background ? "On" : "Off"}`,
                onClick: ()=>state.set((settings)=>({
                            ...settings,
                            animations: !settings.animations
                        }))
            },
            {
                type: _types__WEBPACK_IMPORTED_MODULE_2__/* .NavigationItemType.ACTION */ .GU.ACTION,
                icon: sound ? "feather:volume-2" : "feather:volume-x",
                endIcon: sound ? "feather:check-circle" : "feather:circle",
                text: `Sounds ${sound ? "On" : "Off"}`,
                onClick: ()=>state.set((settings)=>({
                            ...settings,
                            sound: !settings.sound
                        }))
            },
            {
                type: _types__WEBPACK_IMPORTED_MODULE_2__/* .NavigationItemType.DIVIDER */ .GU.DIVIDER
            },
            {
                type: _types__WEBPACK_IMPORTED_MODULE_2__/* .NavigationItemType.ACTION */ .GU.ACTION,
                icon: "feather:monitor",
                endIcon: theme === _types__WEBPACK_IMPORTED_MODULE_2__/* .Theme.SYSTEM */ .Q2.SYSTEM ? "feather:check-circle" : undefined,
                text: "System Theme",
                onClick: ()=>setTheme(_types__WEBPACK_IMPORTED_MODULE_2__/* .Theme.SYSTEM */ .Q2.SYSTEM)
            },
            {
                type: _types__WEBPACK_IMPORTED_MODULE_2__/* .NavigationItemType.ACTION */ .GU.ACTION,
                icon: "feather:sun",
                endIcon: theme === _types__WEBPACK_IMPORTED_MODULE_2__/* .Theme.LIGHT */ .Q2.LIGHT ? "feather:check-circle" : undefined,
                text: "Light Theme",
                onClick: ()=>setTheme(_types__WEBPACK_IMPORTED_MODULE_2__/* .Theme.LIGHT */ .Q2.LIGHT)
            },
            {
                type: _types__WEBPACK_IMPORTED_MODULE_2__/* .NavigationItemType.ACTION */ .GU.ACTION,
                icon: "feather:moon",
                endIcon: theme === _types__WEBPACK_IMPORTED_MODULE_2__/* .Theme.DARK */ .Q2.DARK ? "feather:check-circle" : undefined,
                text: "Dark Theme",
                onClick: ()=>setTheme(_types__WEBPACK_IMPORTED_MODULE_2__/* .Theme.DARK */ .Q2.DARK)
            }, 
        ], 
    ];
    return {
        menu: menuItems,
        settings: settingsItems
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6557:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ colors)
/* harmony export */ });
/* harmony import */ var windicss_defaultTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1220);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([windicss_defaultTheme__WEBPACK_IMPORTED_MODULE_0__]);
windicss_defaultTheme__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const colors = {
    ...windicss_defaultTheme__WEBPACK_IMPORTED_MODULE_0__["default"].colors,
    gray: {
        50: "#f9fafb",
        100: "#eaeaeb",
        200: "#cacbcd",
        300: "#a7a9ac",
        400: "#696c71",
        500: "#282d34",
        600: "#24292f",
        700: "#181b20",
        800: "#121518",
        900: "#0c0e10"
    },
    primary: {
        50: "#32a4ff",
        100: "#289aff",
        200: "#1e90ff",
        300: "#1486ff",
        400: "#0a7cff",
        500: "#0072ff",
        600: "#0068f5",
        700: "#005eeb",
        800: "#0054e1",
        900: "#004ad7"
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7832:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$M": () => (/* reexport safe */ _seo__WEBPACK_IMPORTED_MODULE_4__.$),
/* harmony export */   "$z": () => (/* reexport safe */ _lanyard__WEBPACK_IMPORTED_MODULE_5__.$),
/* harmony export */   "AB": () => (/* reexport safe */ _state__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   "HJ": () => (/* reexport safe */ _navigation__WEBPACK_IMPORTED_MODULE_3__.H),
/* harmony export */   "O9": () => (/* reexport safe */ _colors__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   "eS": () => (/* reexport safe */ _sounds__WEBPACK_IMPORTED_MODULE_2__.e)
/* harmony export */ });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6557);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(533);
/* harmony import */ var _sounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2548);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7096);
/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8559);
/* harmony import */ var _lanyard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_colors__WEBPACK_IMPORTED_MODULE_0__, _sounds__WEBPACK_IMPORTED_MODULE_2__, _navigation__WEBPACK_IMPORTED_MODULE_3__]);
([_colors__WEBPACK_IMPORTED_MODULE_0__, _sounds__WEBPACK_IMPORTED_MODULE_2__, _navigation__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Note: The following `~/lib/` modules container
 * Node.js modules & cannot be barreled
 *
 *  - post.ts
 */ 






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useStatus)
/* harmony export */ });
/* harmony import */ var react_use_lanyard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7893);
/* harmony import */ var react_use_lanyard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_use_lanyard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2943);


function useStatus() {
    const userId = process.env.NEXT_PUBLIC_DISCORD_ID;
    const result = (0,react_use_lanyard__WEBPACK_IMPORTED_MODULE_0__.useLanyard)({
        userId,
        socket: true
    });
    return {
        ...result,
        color: result.status && !result.loading ? _types__WEBPACK_IMPORTED_MODULE_1__/* .DISCORD_STATUS_COLOR */ .HK[result.status.discord_status] : null
    };
}


/***/ }),

/***/ 8559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useSeoProps)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

function useSeoProps(props = {}) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const title = "Goutham";
    const description = "Hello, Checkout my Portfolio";
    const domainName = "your-domain.com"; // Replace 'your-domain.com' with your actual domain name
    return {
        title,
        description,
        canonical: `https://${domainName}/${router.asPath}`,
        openGraph: {
            title,
            description,
            site_name: "Goutham",
            url: `https://${domainName}/${router.asPath}`,
            type: "website",
            images: [
                {
                    url: "/banner.png",
                    alt: description,
                    width: 1280,
                    height: 720
                }, 
            ]
        },
        twitter: {
            cardType: "summary_large_image",
            handle: "@spgoutham",
            site: "@spgoutham"
        },
        ...props
    };
}


/***/ }),

/***/ 2548:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useClick)
/* harmony export */ });
/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(971);
/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(use_sound__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7832);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_1__]);
___WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useClick() {
    const state = (0,___WEBPACK_IMPORTED_MODULE_1__/* .usePersistantState */ .AB)();
    const result = (0,use_sound__WEBPACK_IMPORTED_MODULE_0__.useSound)("/sounds/click.ogg", {
        volume: 0.05
    });
    if (!state.get().sound) return [
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        ()=>{},
        null, 
    ];
    return result;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ usePersistantState)
/* harmony export */ });
/* unused harmony export STATE_KEY */
/* harmony import */ var _hookstate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9463);
/* harmony import */ var _hookstate_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hookstate_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hookstate_persistence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2142);
/* harmony import */ var _hookstate_persistence__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hookstate_persistence__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_3__);




// Note: `createState` needed as without it it looses reactivity for some reason. Needs to be looked into further
const DEFAULT_STATE = (0,_hookstate_core__WEBPACK_IMPORTED_MODULE_0__.createState)({
    animations: null,
    sound: true
});
const STATE_KEY = "settings";
function usePersistantState() {
    const noMotionPreference = (0,react_use__WEBPACK_IMPORTED_MODULE_3__.useMedia)("(prefers-reduced-motion: no-preference)", true);
    const persistance = (0,_hookstate_persistence__WEBPACK_IMPORTED_MODULE_1__.Persistence)(STATE_KEY);
    const state = (0,_hookstate_core__WEBPACK_IMPORTED_MODULE_0__.useState)(DEFAULT_STATE);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        state.attach(persistance);
        // @TODO Add event listener to handle switching dynamically
        if (state.get().animations === null) state.set((state)=>({
                ...state,
                animations: noMotionPreference
            }));
    }, [
        noMotionPreference,
        persistance,
        state
    ]);
    return state;
}


/***/ }),

/***/ 2943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "HK": () => (/* reexport */ DISCORD_STATUS_COLOR),
  "tw": () => (/* reexport */ EventType),
  "Ec": () => (/* reexport */ LanyardAvatarType),
  "GY": () => (/* reexport */ ListActionType),
  "GU": () => (/* reexport */ NavigationItemType),
  "Q2": () => (/* reexport */ Theme)
});

// UNUSED EXPORTS: READABLE_DISCORD_STATUS

;// CONCATENATED MODULE: ./src/types/events.ts
// @TODO: Add Xmas type with snowing effect
var EventType;
(function(EventType) {
    EventType["BIRTHDAY"] = "birthday";
})(EventType || (EventType = {}));

;// CONCATENATED MODULE: ./src/types/lanyard.ts
const READABLE_DISCORD_STATUS = {
    ["dnd"]: "Do Not Disturb",
    ["idle"]: "Away",
    ["offline"]: "Offline",
    ["online"]: "Online"
};
const DISCORD_STATUS_COLOR = {
    ["dnd"]: "red",
    ["idle"]: "yellow",
    ["offline"]: "gray",
    ["online"]: "green"
};
var LanyardAvatarType;
(function(LanyardAvatarType) {
    LanyardAvatarType["USER"] = "user";
    LanyardAvatarType["MUSIC"] = "music";
})(LanyardAvatarType || (LanyardAvatarType = {}));

;// CONCATENATED MODULE: ./src/types/list.ts
var ListActionType;
(function(ListActionType) {
    ListActionType["BUTTON"] = "button";
    ListActionType["LINK"] = "link";
})(ListActionType || (ListActionType = {}));

;// CONCATENATED MODULE: ./src/types/navigation.ts
var NavigationItemType;
(function(NavigationItemType) {
    NavigationItemType["ACTION"] = "action";
    NavigationItemType["DIVIDER"] = "divider";
    NavigationItemType["LINK"] = "link";
})(NavigationItemType || (NavigationItemType = {}));

;// CONCATENATED MODULE: ./src/types/theme.ts
var Theme;
(function(Theme) {
    Theme["LIGHT"] = "light";
    Theme["DARK"] = "dark";
    Theme["SYSTEM"] = "system";
})(Theme || (Theme = {}));

;// CONCATENATED MODULE: ./src/types/index.ts













/***/ })

};
;