"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/Gallery.tsx":
/*!*****************************!*\
  !*** ./src/app/Gallery.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gallery: function() { return /* binding */ Gallery; },\n/* harmony export */   searchPhotos: function() { return /* binding */ searchPhotos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchInput */ \"(app-pages-browser)/./src/app/SearchInput.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/pagination */ \"(app-pages-browser)/./src/components/ui/pagination.tsx\");\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./src/components/ui/skeleton.tsx\");\n/* __next_internal_client_entry_do_not_use__ searchPhotos,Gallery auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// TODO: Move API call to server side, environment variable should not be exposed\nasync function searchPhotos(query, page) {\n    const result = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"https://api.unsplash.com/search/photos\", {\n        params: {\n            query,\n            page,\n            per_page: 9,\n            client_id: \"ukJyK7f_oSD8sRs6GytnZxaxCnv8XCiFi05QKrF_BeQ\"\n        }\n    });\n    return (result === null || result === void 0 ? void 0 : result.data.results) || [];\n}\nconst Gallery = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const { status, data, error, isLoading } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)({\n        queryKey: [\n            \"search\",\n            searchInput,\n            page\n        ],\n        queryFn: ()=>searchPhotos(searchInput, page),\n        enabled: !!searchInput\n    });\n    const onChange = async (e)=>{\n        if (e.key === \"Enter\") {\n            setSearchInput(e.target.value);\n            setPage(1);\n        }\n    };\n    const pageLowerBound = Math.max(page - 1, 1);\n    const pages = [\n        pageLowerBound,\n        pageLowerBound + 1,\n        pageLowerBound + 2\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchInput__WEBPACK_IMPORTED_MODULE_2__.SearchInput, {\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                        children: Array.from([\n                            1,\n                            2,\n                            3,\n                            4,\n                            5,\n                            6,\n                            7,\n                            8,\n                            9\n                        ]).map((a)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                                className: \"w-60 h-60\"\n                            }, a, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true) : (data || []).length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No results\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                        children: (data || []).map((img)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative aspect-square w-60 h-60\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    fill: true,\n                                    src: img.urls.regular,\n                                    className: \"object-cover\",\n                                    alt: img.alt_description\n                                }, void 0, false, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, img.id, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__.Pagination, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationContent, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationItem, {\n                            \"aria-disabled\": page === 1,\n                            className: page === 1 ? \"cursor-not-allowed\" : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationPrevious, {\n                                \"aria-disabled\": page === 1,\n                                // href=\"#\"\n                                onClick: ()=>setPage((prevPage)=>Math.max(prevPage - 1, 1))\n                            }, void 0, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined),\n                        pages.map((pageItem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationLink, {\n                                    href: \"#\",\n                                    isActive: page === pageItem,\n                                    onClick: ()=>setPage(pageItem),\n                                    children: pageItem\n                                }, void 0, false, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationNext, {\n                                onClick: ()=>setPage((prevPage)=>prevPage + 1)\n                            }, void 0, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Gallery, \"3eqcdyJy4/ddH8qGaYA3DPhRrCo=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery\n    ];\n});\n_c = Gallery;\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDZSx5QkFDViw4REFBQ3hELHFFQUFjQTswQ0FDYiw0RUFBQ0MscUVBQWNBO29DQUNid0QsTUFBSztvQ0FDTEMsVUFBVW5ELFNBQVNpRDtvQ0FDbkJGLFNBQVMsSUFBTWpDLFFBQVFtQzs4Q0FFdEJBOzs7Ozs7Ozs7OztzQ0FJUCw4REFBQ3hELHFFQUFjQTtzQ0FDYiw0RUFBQ0UscUVBQWNBO2dDQUNib0QsU0FBUyxJQUFNakMsUUFBUSxDQUFDa0MsV0FBYUEsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU85RCxFQUFFO0dBeEZXckM7O1FBS2dDdEIsMkRBQVFBOzs7S0FMeENzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0dhbGxlcnkudHN4P2NjMmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgU2VhcmNoSW5wdXQgfSBmcm9tIFwiLi9TZWFyY2hJbnB1dFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBQYWdpbmF0aW9uLFxuICBQYWdpbmF0aW9uQ29udGVudCxcbiAgUGFnaW5hdGlvbkVsbGlwc2lzLFxuICBQYWdpbmF0aW9uSXRlbSxcbiAgUGFnaW5hdGlvbkxpbmssXG4gIFBhZ2luYXRpb25OZXh0LFxuICBQYWdpbmF0aW9uUHJldmlvdXMsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvcGFnaW5hdGlvblwiO1xuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NrZWxldG9uXCI7XG5cbi8vIFRPRE86IE1vdmUgQVBJIGNhbGwgdG8gc2VydmVyIHNpZGUsIGVudmlyb25tZW50IHZhcmlhYmxlIHNob3VsZCBub3QgYmUgZXhwb3NlZFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFBob3RvcyhxdWVyeTogc3RyaW5nLCBwYWdlOiBudW1iZXIpIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3NlYXJjaC9waG90b3NcIiwge1xuICAgIHBhcmFtczoge1xuICAgICAgcXVlcnksXG4gICAgICBwYWdlLFxuICAgICAgcGVyX3BhZ2U6IDksXG4gICAgICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VOU1BMQVNIX0FDQ0VTU19LRVksXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdD8uZGF0YS5yZXN1bHRzIHx8IFtdO1xufVxuXG5leHBvcnQgY29uc3QgR2FsbGVyeSA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCB7IHN0YXR1cywgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5S2V5OiBbXCJzZWFyY2hcIiwgc2VhcmNoSW5wdXQsIHBhZ2VdLFxuICAgIHF1ZXJ5Rm46ICgpID0+IHNlYXJjaFBob3RvcyhzZWFyY2hJbnB1dCwgcGFnZSksXG4gICAgZW5hYmxlZDogISFzZWFyY2hJbnB1dCxcbiAgfSk7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSBhc3luYyAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICBzZXRQYWdlKDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwYWdlTG93ZXJCb3VuZCA9IE1hdGgubWF4KHBhZ2UgLSAxLCAxKTtcblxuICBjb25zdCBwYWdlcyA9IFtwYWdlTG93ZXJCb3VuZCwgcGFnZUxvd2VyQm91bmQgKyAxLCBwYWdlTG93ZXJCb3VuZCArIDJdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTZWFyY2hJbnB1dCBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNFwiIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhcC00IGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICAgIHtBcnJheS5mcm9tKFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XSkubWFwKChhKSA9PiAoXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiBrZXk9e2F9IGNsYXNzTmFtZT1cInctNjAgaC02MFwiIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKGRhdGEgfHwgW10pLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPHA+Tm8gcmVzdWx0czwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhcC00IGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICAgIHsoZGF0YSB8fCBbXSkubWFwKChpbWcpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2ltZy5pZH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgYXNwZWN0LXNxdWFyZSB3LTYwIGgtNjBcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1nLnVybHMucmVndWxhcn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAgICAgICBhbHQ9e2ltZy5hbHRfZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCIgLz5cblxuICAgICAgPFBhZ2luYXRpb24+XG4gICAgICAgIDxQYWdpbmF0aW9uQ29udGVudD5cbiAgICAgICAgICA8UGFnaW5hdGlvbkl0ZW1cbiAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3BhZ2UgPT09IDEgPyBcImN1cnNvci1ub3QtYWxsb3dlZFwiIDogXCJcIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGFnaW5hdGlvblByZXZpb3VzXG4gICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICAgICAgICAgIC8vIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZSgocHJldlBhZ2UpID0+IE1hdGgubWF4KHByZXZQYWdlIC0gMSwgMSkpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1BhZ2luYXRpb25JdGVtPlxuICAgICAgICAgIHtwYWdlcy5tYXAoKHBhZ2VJdGVtKSA9PiAoXG4gICAgICAgICAgICA8UGFnaW5hdGlvbkl0ZW0+XG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uTGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17cGFnZSA9PT0gcGFnZUl0ZW19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZShwYWdlSXRlbSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cGFnZUl0ZW19XG4gICAgICAgICAgICAgIDwvUGFnaW5hdGlvbkxpbms+XG4gICAgICAgICAgICA8L1BhZ2luYXRpb25JdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbT5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uTmV4dFxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChwcmV2UGFnZSkgPT4gcHJldlBhZ2UgKyAxKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9QYWdpbmF0aW9uSXRlbT5cbiAgICAgICAgPC9QYWdpbmF0aW9uQ29udGVudD5cbiAgICAgIDwvUGFnaW5hdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJheGlvcyIsIlNlYXJjaElucHV0IiwidXNlUXVlcnkiLCJ1c2VTdGF0ZSIsIlBhZ2luYXRpb24iLCJQYWdpbmF0aW9uQ29udGVudCIsIlBhZ2luYXRpb25JdGVtIiwiUGFnaW5hdGlvbkxpbmsiLCJQYWdpbmF0aW9uTmV4dCIsIlBhZ2luYXRpb25QcmV2aW91cyIsIlNrZWxldG9uIiwic2VhcmNoUGhvdG9zIiwicXVlcnkiLCJwYWdlIiwicmVzdWx0IiwiZ2V0IiwicGFyYW1zIiwicGVyX3BhZ2UiLCJjbGllbnRfaWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVU5TUExBU0hfQUNDRVNTX0tFWSIsImRhdGEiLCJyZXN1bHRzIiwiR2FsbGVyeSIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJzZXRQYWdlIiwic3RhdHVzIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJlbmFibGVkIiwib25DaGFuZ2UiLCJlIiwia2V5IiwidGFyZ2V0IiwidmFsdWUiLCJwYWdlTG93ZXJCb3VuZCIsIk1hdGgiLCJtYXgiLCJwYWdlcyIsImRpdiIsImNsYXNzTmFtZSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImEiLCJsZW5ndGgiLCJwIiwiaW1nIiwiZmlsbCIsInNyYyIsInVybHMiLCJyZWd1bGFyIiwiYWx0IiwiYWx0X2Rlc2NyaXB0aW9uIiwiaWQiLCJhcmlhLWRpc2FibGVkIiwib25DbGljayIsInByZXZQYWdlIiwicGFnZUl0ZW0iLCJocmVmIiwiaXNBY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Gallery.tsx\n"));

/***/ })

});