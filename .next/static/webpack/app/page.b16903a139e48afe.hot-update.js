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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gallery: function() { return /* binding */ Gallery; },\n/* harmony export */   searchPhotos: function() { return /* binding */ searchPhotos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchInput */ \"(app-pages-browser)/./src/app/SearchInput.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/pagination */ \"(app-pages-browser)/./src/components/ui/pagination.tsx\");\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./src/components/ui/skeleton.tsx\");\n/* __next_internal_client_entry_do_not_use__ searchPhotos,Gallery auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// TODO: Move API call to server side, environment variable should not be exposed\nasync function searchPhotos(query, page) {\n    const result = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"https://api.unsplash.com/search/photos\", {\n        params: {\n            query,\n            page,\n            per_page: 9,\n            client_id: \"ukJyK7f_oSD8sRs6GytnZxaxCnv8XCiFi05QKrF_BeQ\"\n        }\n    });\n    return (result === null || result === void 0 ? void 0 : result.data.results) || [];\n}\nconst Gallery = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const { status, data, error, isLoading } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery)({\n        queryKey: [\n            \"search\",\n            searchInput,\n            page\n        ],\n        queryFn: ()=>searchPhotos(searchInput, page),\n        enabled: !!searchInput\n    });\n    const onChange = async (e)=>{\n        if (e.key === \"Enter\") {\n            setSearchInput(e.target.value);\n            setPage(1);\n        }\n    };\n    const pageLowerBound = Math.max(page - 1, 1);\n    const pages = [\n        pageLowerBound,\n        pageLowerBound + 1,\n        pageLowerBound + 2\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchInput__WEBPACK_IMPORTED_MODULE_2__.SearchInput, {\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                        children: Array.from([\n                            1,\n                            2,\n                            3,\n                            4,\n                            5,\n                            6,\n                            7,\n                            8,\n                            9\n                        ]).map((a)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                                className: \"w-60 h-60\"\n                            }, a, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true) : (data || []).length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No results\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                        children: (data || []).map((img)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative aspect-square w-60 h-60\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    fill: true,\n                                    src: img.urls.regular,\n                                    className: \"object-cover\",\n                                    alt: img.alt_description\n                                }, void 0, false, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, img.id, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__.Pagination, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationContent, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationPrevious, {\n                                href: \"#\",\n                                onClick: ()=>setPage((prevPage)=>Math.max(prevPage - 1, 1))\n                            }, void 0, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined),\n                        pages.map((pageItem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationLink, {\n                                    href: \"#\",\n                                    isActive: page === pageItem,\n                                    onClick: ()=>setPage(pageItem),\n                                    children: pageItem\n                                }, void 0, false, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationNext, {\n                                href: \"#\",\n                                onClick: ()=>setPage((prevPage)=>prevPage + 1)\n                            }, void 0, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Gallery, \"3eqcdyJy4/ddH8qGaYA3DPhRrCo=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useQuery\n    ];\n});\n_c = Gallery;\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBU2lEO29DQUNuQkYsU0FBUyxJQUFNakMsUUFBUW1DOzhDQUV0QkE7Ozs7Ozs7Ozs7O3NDQUlQLDhEQUFDeEQscUVBQWNBO3NDQUNiLDRFQUFDRSxxRUFBY0E7Z0NBQ2JtRCxNQUFLO2dDQUNMQyxTQUFTLElBQU1qQyxRQUFRLENBQUNrQyxXQUFhQSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlELEVBQUU7R0FyRldyQzs7UUFLZ0N0QiwyREFBUUE7OztLQUx4Q3NCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvR2FsbGVyeS50c3g/Y2MyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBTZWFyY2hJbnB1dCB9IGZyb20gXCIuL1NlYXJjaElucHV0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIFBhZ2luYXRpb24sXG4gIFBhZ2luYXRpb25Db250ZW50LFxuICBQYWdpbmF0aW9uRWxsaXBzaXMsXG4gIFBhZ2luYXRpb25JdGVtLFxuICBQYWdpbmF0aW9uTGluayxcbiAgUGFnaW5hdGlvbk5leHQsXG4gIFBhZ2luYXRpb25QcmV2aW91cyxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9wYWdpbmF0aW9uXCI7XG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2tlbGV0b25cIjtcblxuLy8gVE9ETzogTW92ZSBBUEkgY2FsbCB0byBzZXJ2ZXIgc2lkZSwgZW52aXJvbm1lbnQgdmFyaWFibGUgc2hvdWxkIG5vdCBiZSBleHBvc2VkXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoUGhvdG9zKHF1ZXJ5OiBzdHJpbmcsIHBhZ2U6IG51bWJlcikge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2FwaS51bnNwbGFzaC5jb20vc2VhcmNoL3Bob3Rvc1wiLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICBxdWVyeSxcbiAgICAgIHBhZ2UsXG4gICAgICBwZXJfcGFnZTogOSxcbiAgICAgIGNsaWVudF9pZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVU5TUExBU0hfQUNDRVNTX0tFWSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0Py5kYXRhLnJlc3VsdHMgfHwgW107XG59XG5cbmV4cG9ydCBjb25zdCBHYWxsZXJ5ID0gKCkgPT4ge1xuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IHsgc3RhdHVzLCBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeSh7XG4gICAgcXVlcnlLZXk6IFtcInNlYXJjaFwiLCBzZWFyY2hJbnB1dCwgcGFnZV0sXG4gICAgcXVlcnlGbjogKCkgPT4gc2VhcmNoUGhvdG9zKHNlYXJjaElucHV0LCBwYWdlKSxcbiAgICBlbmFibGVkOiAhIXNlYXJjaElucHV0LFxuICB9KTtcblxuICBjb25zdCBvbkNoYW5nZSA9IGFzeW5jIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHNldFBhZ2UoMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBhZ2VMb3dlckJvdW5kID0gTWF0aC5tYXgocGFnZSAtIDEsIDEpO1xuXG4gIGNvbnN0IHBhZ2VzID0gW3BhZ2VMb3dlckJvdW5kLCBwYWdlTG93ZXJCb3VuZCArIDEsIHBhZ2VMb3dlckJvdW5kICsgMl07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNlYXJjaElucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCIgLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FwLTQgZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtM1wiPlxuICAgICAgICAgICAge0FycmF5LmZyb20oWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldKS5tYXAoKGEpID0+IChcbiAgICAgICAgICAgICAgPFNrZWxldG9uIGtleT17YX0gY2xhc3NOYW1lPVwidy02MCBoLTYwXCIgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoZGF0YSB8fCBbXSkubGVuZ3RoID09PSAwID8gKFxuICAgICAgICA8cD5ObyByZXN1bHRzPC9wPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FwLTQgZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtM1wiPlxuICAgICAgICAgICAgeyhkYXRhIHx8IFtdKS5tYXAoKGltZykgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW1nLmlkfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBhc3BlY3Qtc3F1YXJlIHctNjAgaC02MFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWcudXJscy5yZWd1bGFyfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAgIGFsdD17aW1nLmFsdF9kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIiAvPlxuXG4gICAgICA8UGFnaW5hdGlvbj5cbiAgICAgICAgPFBhZ2luYXRpb25Db250ZW50PlxuICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbT5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uUHJldmlvdXNcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChwcmV2UGFnZSkgPT4gTWF0aC5tYXgocHJldlBhZ2UgLSAxLCAxKSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUGFnaW5hdGlvbkl0ZW0+XG4gICAgICAgICAge3BhZ2VzLm1hcCgocGFnZUl0ZW0pID0+IChcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbT5cbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25MaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtwYWdlID09PSBwYWdlSXRlbX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKHBhZ2VJdGVtKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwYWdlSXRlbX1cbiAgICAgICAgICAgICAgPC9QYWdpbmF0aW9uTGluaz5cbiAgICAgICAgICAgIDwvUGFnaW5hdGlvbkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFBhZ2luYXRpb25JdGVtPlxuICAgICAgICAgICAgPFBhZ2luYXRpb25OZXh0XG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZSgocHJldlBhZ2UpID0+IHByZXZQYWdlICsgMSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUGFnaW5hdGlvbkl0ZW0+XG4gICAgICAgIDwvUGFnaW5hdGlvbkNvbnRlbnQ+XG4gICAgICA8L1BhZ2luYXRpb24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiYXhpb3MiLCJTZWFyY2hJbnB1dCIsInVzZVF1ZXJ5IiwidXNlU3RhdGUiLCJQYWdpbmF0aW9uIiwiUGFnaW5hdGlvbkNvbnRlbnQiLCJQYWdpbmF0aW9uSXRlbSIsIlBhZ2luYXRpb25MaW5rIiwiUGFnaW5hdGlvbk5leHQiLCJQYWdpbmF0aW9uUHJldmlvdXMiLCJTa2VsZXRvbiIsInNlYXJjaFBob3RvcyIsInF1ZXJ5IiwicGFnZSIsInJlc3VsdCIsImdldCIsInBhcmFtcyIsInBlcl9wYWdlIiwiY2xpZW50X2lkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1VOU1BMQVNIX0FDQ0VTU19LRVkiLCJkYXRhIiwicmVzdWx0cyIsIkdhbGxlcnkiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0Iiwic2V0UGFnZSIsInN0YXR1cyIsImVycm9yIiwiaXNMb2FkaW5nIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiZW5hYmxlZCIsIm9uQ2hhbmdlIiwiZSIsImtleSIsInRhcmdldCIsInZhbHVlIiwicGFnZUxvd2VyQm91bmQiLCJNYXRoIiwibWF4IiwicGFnZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJBcnJheSIsImZyb20iLCJtYXAiLCJhIiwibGVuZ3RoIiwicCIsImltZyIsImZpbGwiLCJzcmMiLCJ1cmxzIiwicmVndWxhciIsImFsdCIsImFsdF9kZXNjcmlwdGlvbiIsImlkIiwiaHJlZiIsIm9uQ2xpY2siLCJwcmV2UGFnZSIsInBhZ2VJdGVtIiwiaXNBY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Gallery.tsx\n"));

/***/ })

});