(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{9613:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return c},MDXProvider:function(){return f},mdx:function(){return p},useMDXComponents:function(){return s},withMDXComponents:function(){return u}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var c=r.createContext({}),u=function(e){return function(t){var n=s(t.components);return r.createElement(e,o({},t,{components:n}))}},s=function(e){var t,n=r.useContext(c),a=n;return e&&(a="function"==typeof(t=e)?e(n):i(i({},n),e)),a},f=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef(function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["components","mdxType","originalType","parentName"]),u=s(n),f=u["".concat(l,".").concat(a)]||u[a]||d[a]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))});function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5079:function(e,t,n){"use strict";var r,a=n(9496),o=n(9613),l=a&&"object"==typeof a&&"default"in a?a:{default:a},i=function(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,Object.freeze(t)}(o);"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),t.R=function({compiledSource:e,scope:t,components:n={},lazy:r}){let[o,c]=a.useState(!r||"undefined"==typeof window);a.useEffect(()=>{if(r){let e=window.requestIdleCallback(()=>{c(!0)});return()=>window.cancelIdleCallback(e)}},[]);let u=a.useMemo(()=>{let n=Object.assign({mdx:i.mdx,React:l.default},t),r=Object.keys(n),a=Object.values(n),o=Reflect.construct(Function,r.concat(`${e}; return MDXContent;`));return o.apply(o,a)},[t,e]);if(!o)return l.default.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let s=l.default.createElement(i.MDXProvider,{components:n},l.default.createElement(u,null));return r?l.default.createElement("div",null,s):s}},8230:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(2956)}])},2956:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return d}});var r=n(2006),a=n(4405),o=n(4637),l=n(4747),i=n.n(l),c=n(5079),u=n(5778),s=n(4714),f=!0;function d(e){var t,n,l,f,d=e.post;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.A.Blog,{seo:{title:"".concat(d.frontmatter.title," ─ Goutham Blog"),description:null!==(t=d.frontmatter.description)&&void 0!==t?t:void 0,openGraph:{title:d.frontmatter.title,images:[{url:null!==(n=d.frontmatter.banner)&&void 0!==n?n:"/banner.png",alt:d.frontmatter.description,width:1280,height:720},]}},children:(0,o.jsx)("div",{className:"relative px-4 py-16 overflow-hidden",children:(0,o.jsxs)("div",{className:"relative px-4 sm:px-6 lg:px-8",children:[d.frontmatter.banner&&(null===(l=d.frontmatter.banner_show)||void 0===l||l)&&(0,o.jsxs)("div",{className:"relative sm:max-w-2xl lg:sm:max-w-6xl mx-auto my-2 sm:my-4",children:[(0,o.jsx)("div",{className:"w-full h-full h-64 lg:h-96 mb-8 bg-gray-200 dark:bg-gray-600 rounded-3xl motion-safe:animate-pulse"}),(0,o.jsx)(i(),{alt:null!==(f=d.frontmatter.banner_alt)&&void 0!==f?f:d.frontmatter.title,className:"absolute top-0 left-0 w-full h-auto max-h-64 lg:max-h-96 mb-8 rounded-3xl object-cover select-none shadow-xl default-transition",draggable:!1,layout:"fill",src:d.frontmatter.banner})]}),(0,o.jsxs)("div",{className:"flex flex-col space-y-4 max-w-prose mx-auto my-4 text-lg text-center",children:[(0,o.jsxs)("div",{children:[d.frontmatter.title_prefix&&(0,o.jsx)("span",{className:"block text-primary-600 font-semibold tracking-wide uppercase text-base text-center",children:d.frontmatter.title_prefix}),(0,o.jsx)("span",{className:"text-gray-900 dark:text-white sm:text-4xl text-3xl text-center leading-8 font-extrabold tracking-tight",children:d.frontmatter.title})]}),(0,o.jsx)("span",{className:"flex justify-center items-center",children:(0,o.jsx)(u.DR.E,{children:d.frontmatter.date})}),d.frontmatter.description&&d.frontmatter.description_show&&(0,o.jsx)("p",{className:"mt-8 text-xl text-gray-400 leading-8",children:d.frontmatter.description})]}),(0,o.jsx)("article",{className:"max-w-prose prose prose-primary prose-lg text-gray-500 mx-auto",children:(0,o.jsx)(c.R,(0,a.Z)((0,r.Z)({},d.source),{components:u.l3.X}))})]})})}),(0,o.jsx)(u.l3.z0.E,{}),(0,o.jsx)(u.l3.z0.e,{})]})}}},function(e){e.O(0,[689,220,774,888,179],function(){return e(e.s=8230)}),_N_E=e.O()}]);