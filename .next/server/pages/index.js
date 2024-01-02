(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7:
/***/ ((module) => {

// Exports
module.exports = {
	"Portfolio": "Main_Portfolio__vF8V0",
	"hello": "Main_hello__pibRH",
	"Links": "Main_Links__LVVrZ",
	"Portrait": "Main_Portrait__ZfUzp",
	"Name": "Main_Name__lX53U",
	"AboutMe": "Main_AboutMe__lQaKt",
	"Blogs": "Main_Blogs__r7BlR",
	"BlogHeading": "Main_BlogHeading__Ke44v",
	"Home": "Main_Home__cWtpK"
};


/***/ }),

/***/ 8276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./styles/Main.module.css
var Main_module = __webpack_require__(7);
var Main_module_default = /*#__PURE__*/__webpack_require__.n(Main_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/homepage/blogpost.js




function BlogPost(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/posts/" + props.id,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Home_module_default())[props.css],
            style: {
                width: "100%",
                position: "relative"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: props.bg_image,
                    layout: "fill"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(PostDetails, {
                    ...props
                })
            ]
        })
    });
};
function PostDetails(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).PostDetails,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                className: (Home_module_default()).postTitle,
                children: [
                    " ",
                    props.title.slice(0, 50),
                    " "
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Home_module_default()).postDate,
                children: props.date
            })
        ]
    });
}

// EXTERNAL MODULE: ./lib/posts.js
var posts = __webpack_require__(8904);
;// CONCATENATED MODULE: ./pages/index.js





async function getStaticProps() {
    const allPostsData = (0,posts/* getSortedPostsData */.ld)();
    return {
        props: {
            allPostsData
        }
    };
}
function App({ allPostsData  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Main_module_default()).Home,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Main_module_default()).Portfolio,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Portrait, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Name, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(AboutMe, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (Main_module_default()).BlogHeading,
                children: "Blogs"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Blogs, {
                allPostsData: allPostsData
            })
        ]
    });
};
class Portrait extends (external_react_default()).Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Main_module_default()).Portrait,
            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/portrait.png",
                alt: ""
            })
        });
    }
}
class Name extends (external_react_default()).Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Main_module_default()).Name,
            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: " Emad Siddiq "
            })
        });
    }
}
class AboutMe extends (external_react_default()).Component {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Main_module_default()).AboutMe,
            id: "About Me",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (Main_module_default()).hello,
                    children: "Hello \uD83D\uDC4B"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "I like technology and politics. During my undergraduate I studied Political Economy & Data Science. I now work as a Software Engineer (actively looking!)."
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Main_module_default()).Links,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "Emad_Siddiq_Resume.pdf",
                            children: "Resume"
                        }),
                        " |",
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "https://www.linkedin.com/in/emad-siddiq-2b9979164/",
                            children: [
                                " ",
                                "LinkedIn",
                                " "
                            ]
                        }),
                        " ",
                        "|",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.github.com/adriatic1517",
                            children: " GitHub"
                        }),
                        "|",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://docs.google.com/document/d/1Arf0A1_9D6eAew49qxsM57Nhh2Nqw_Vj7TYoWBiwSzY/edit",
                            children: " CS Resources"
                        })
                    ]
                })
            ]
        });
    }
}
function Blogs({ allPostsData  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Main_module_default()).Blogs,
        children: allPostsData.map(({ id , date , title , bg_image  })=>/*#__PURE__*/ jsx_runtime_.jsx(BlogPost, {
                css: "Blog",
                title: title,
                id: id,
                date: date,
                bg_image: bg_image
            }, id))
    });
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 2781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,675,952,664,904,288], () => (__webpack_exec__(8276)));
module.exports = __webpack_exports__;

})();