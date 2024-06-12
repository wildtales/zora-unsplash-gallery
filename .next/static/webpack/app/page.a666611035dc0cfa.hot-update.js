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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gallery: function() { return /* binding */ Gallery; },\n/* harmony export */   searchPhotos: function() { return /* binding */ searchPhotos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchInput */ \"(app-pages-browser)/./src/app/SearchInput.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/dropdown-menu */ \"(app-pages-browser)/./src/components/ui/dropdown-menu.tsx\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var _components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/pagination */ \"(app-pages-browser)/./src/components/ui/pagination.tsx\");\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./src/components/ui/skeleton.tsx\");\n/* __next_internal_client_entry_do_not_use__ searchPhotos,Gallery auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar OrderBy;\n(function(OrderBy) {\n    OrderBy[\"LATEST\"] = \"latest\";\n    OrderBy[\"RELEVANT\"] = \"relevant\";\n})(OrderBy || (OrderBy = {}));\nvar Color;\n(function(Color) {\n    Color[\"blackAndWhite\"] = \"black_and_white\";\n    Color[\"black\"] = \"black\";\n    Color[\"white\"] = \"white\";\n    Color[\"yellow\"] = \"yellow\";\n    Color[\"orange\"] = \"orange\";\n    Color[\"red\"] = \"red\";\n    Color[\"purple\"] = \"purple\";\n    Color[\"magenta\"] = \"magenta\";\n    Color[\"green\"] = \"green\";\n    Color[\"teal\"] = \"teal\";\n    Color[\"blue\"] = \"blue\";\n})(Color || (Color = {}));\nconst OrderByLabel = {\n    [\"latest\"]: \"Latest\",\n    [\"relevant\"]: \"Relevant\"\n};\n// TODO: Move API call to server side, environment variable should not be exposed\nasync function searchPhotos(query, page, order_by) {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"https://api.unsplash.com/search/photos\", {\n        params: {\n            query,\n            page,\n            per_page: 9,\n            color: \"red\",\n            order_by,\n            client_id: \"ukJyK7f_oSD8sRs6GytnZxaxCnv8XCiFi05QKrF_BeQ\"\n        }\n    });\n    return response === null || response === void 0 ? void 0 : response.data;\n}\nconst Gallery = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        orderBy: \"latest\",\n        color: undefined\n    });\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const { status, data, error, isLoading } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)({\n        queryKey: [\n            \"search\",\n            searchInput,\n            page,\n            filters.orderBy\n        ],\n        queryFn: ()=>searchPhotos(searchInput, page, filters.orderBy),\n        enabled: !!searchInput\n    });\n    const { results, total_pages } = data || {};\n    const onChange = async (e)=>{\n        if (e.key === \"Enter\") {\n            setSearchInput(e.target.value);\n            setPage(1);\n        }\n    };\n    const pageLowerBound = Math.max(page - 1, 1);\n    const pages = [\n        pageLowerBound,\n        pageLowerBound + 1,\n        pageLowerBound + 2\n    ];\n    const updateFilters = (key, value)=>{\n        setFilters((prevFilters)=>{\n            const updatedFilters = {\n                ...prevFilters\n            };\n            updatedFilters[key] = value;\n            setPage(1);\n            return updatedFilters;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchInput__WEBPACK_IMPORTED_MODULE_2__.SearchInput, {\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenu, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuTrigger, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    \"Sort By \",\n                                    OrderByLabel[filters.orderBy],\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        className: \"h-4 w-4 ml-1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                        lineNumber: 136,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 134,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuContent, {\n                            children: Object.keys(OrderByLabel).map((value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuCheckboxItem, {\n                                    checked: filters.orderBy === value,\n                                    onClick: ()=>updateFilters(\"orderBy\", value),\n                                    children: OrderByLabel[value]\n                                }, void 0, false, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                            lineNumber: 139,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, undefined),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 153,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                        children: Array.from([\n                            1,\n                            2,\n                            3,\n                            4,\n                            5,\n                            6,\n                            7,\n                            8,\n                            9\n                        ]).map((a)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {\n                                className: \"w-60 h-60\"\n                            }, a, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 157,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 155,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true) : (results || []).length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No results\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 162,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 165,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                        children: (results || []).map((img)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative aspect-square\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    fill: true,\n                                    src: img.urls.regular,\n                                    className: \"object-cover\",\n                                    alt: img.alt_description\n                                }, void 0, false, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 169,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, img.id, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 168,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 166,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 180,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.Pagination, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationContent, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationItem, {\n                            \"aria-disabled\": page === 1,\n                            className: page === 1 ? \"cursor-not-allowed\" : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationPrevious, {\n                                // href=\"#\"\n                                onClick: ()=>setPage((prevPage)=>Math.max(prevPage - 1, 1))\n                            }, void 0, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 188,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                            lineNumber: 184,\n                            columnNumber: 11\n                        }, undefined),\n                        pages.map((pageItem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationLink, {\n                                    href: \"#\",\n                                    isActive: page === pageItem,\n                                    onClick: ()=>setPage(pageItem),\n                                    children: pageItem\n                                }, void 0, false, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 195,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 194,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationNext, {\n                                \"aria-disabled\": page === total_pages,\n                                className: page === total_pages ? \"cursor-not-allowed\" : \"\",\n                                onClick: ()=>setPage((prevPage)=>prevPage + 1)\n                            }, void 0, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 205,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                            lineNumber: 204,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                    lineNumber: 183,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 182,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Gallery, \"SREYxf3ehNkn/aoJ1qDxblo5O4M=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery\n    ];\n});\n_c = Gallery;\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvR2FsbGVyeS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytCO0FBRUw7QUFDa0I7QUFDSztBQUNoQjtBQVNNO0FBQ0k7QUFVUDtBQUNnQjs7VUFnQi9DaUI7OztHQUFBQSxZQUFBQTs7VUFLQUM7Ozs7Ozs7Ozs7OztHQUFBQSxVQUFBQTtBQWNMLE1BQU1DLGVBQWU7SUFDbkIsVUFBZ0IsRUFBRTtJQUNsQixZQUFrQixFQUFFO0FBQ3RCO0FBRUEsaUZBQWlGO0FBQzFFLGVBQWVDLGFBQ3BCQyxLQUFhLEVBQ2JDLElBQVksRUFDWkMsUUFBaUI7SUFFakIsTUFBTUMsV0FBVyxNQUFNdkIsNkNBQUtBLENBQUN3QixHQUFHLENBQUMsMENBQTBDO1FBQ3pFQyxRQUFRO1lBQ05MO1lBQ0FDO1lBQ0FLLFVBQVU7WUFDVkMsT0FBTztZQUNQTDtZQUNBTSxXQUFXQyw2Q0FBMkM7UUFDeEQ7SUFDRjtJQUVBLE9BQU9OLHFCQUFBQSwrQkFBQUEsU0FBVVMsSUFBSTtBQUN2QjtBQUVPLE1BQU1DLFVBQVU7O0lBQ3JCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHaEMsK0NBQVFBLENBQUM7SUFFL0MsTUFBTSxDQUFDaUMsU0FBU0MsV0FBVyxHQUFHbEMsK0NBQVFBLENBQXNDO1FBQzFFbUMsT0FBTztRQUNQWCxPQUFPWTtJQUNUO0lBRUEsTUFBTSxDQUFDbEIsTUFBTW1CLFFBQVEsR0FBR3JDLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU0sRUFBRXNDLE1BQU0sRUFBRVQsSUFBSSxFQUFFVSxLQUFLLEVBQUVDLFNBQVMsRUFBRSxHQUFHekMsK0RBQVFBLENBQUM7UUFDbEQwQyxVQUFVO1lBQUM7WUFBVVY7WUFBYWI7WUFBTWUsUUFBUUUsT0FBTztTQUFDO1FBQ3hETyxTQUFTLElBQU0xQixhQUFhZSxhQUFhYixNQUFNZSxRQUFRRSxPQUFPO1FBQzlEUSxTQUFTLENBQUMsQ0FBQ1o7SUFDYjtJQUVBLE1BQU0s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O29DQUNMQyxVQUFVakUsU0FBUytEO29DQUNuQmhCLFNBQVMsSUFBTTVCLFFBQVE0Qzs4Q0FFdEJBOzs7Ozs7Ozs7OztzQ0FJUCw4REFBQ3pFLHFFQUFjQTtzQ0FDYiw0RUFBQ0UscUVBQWNBO2dDQUNicUUsaUJBQWU3RCxTQUFTMkI7Z0NBQ3hCYyxXQUFXekMsU0FBUzJCLGNBQWMsdUJBQXVCO2dDQUN6RG9CLFNBQVMsSUFBTTVCLFFBQVEsQ0FBQzJDLFdBQWFBLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUQsRUFBRTtHQS9IV2xEOztRQVVnQy9CLDJEQUFRQTs7O0tBVnhDK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9HYWxsZXJ5LnRzeD9jYzJmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFNlYXJjaElucHV0IH0gZnJvbSBcIi4vU2VhcmNoSW5wdXRcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25NZW51Q29udGVudCxcbiAgRHJvcGRvd25NZW51SXRlbSxcbiAgRHJvcGRvd25NZW51TGFiZWwsXG4gIERyb3Bkb3duTWVudVNlcGFyYXRvcixcbiAgRHJvcGRvd25NZW51VHJpZ2dlcixcbiAgRHJvcGRvd25NZW51Q2hlY2tib3hJdGVtLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2Ryb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IENoZXZyb25Eb3duIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbXBvcnQge1xuICBQYWdpbmF0aW9uLFxuICBQYWdpbmF0aW9uQ29udGVudCxcbiAgUGFnaW5hdGlvbkVsbGlwc2lzLFxuICBQYWdpbmF0aW9uSXRlbSxcbiAgUGFnaW5hdGlvbkxpbmssXG4gIFBhZ2luYXRpb25OZXh0LFxuICBQYWdpbmF0aW9uUHJldmlvdXMsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvcGFnaW5hdGlvblwiO1xuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NrZWxldG9uXCI7XG5cbmludGVyZmFjZSBTZWFyY2hSZXN1bHQge1xuICBpZDogc3RyaW5nO1xuICB1cmxzOiB7XG4gICAgcmVndWxhcjogc3RyaW5nO1xuICB9O1xuICBhbHRfZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNlYXJjaFJlc3BvbnNlIHtcbiAgcmVzdWx0czogU2VhcmNoUmVzdWx0W107XG4gIHRvdGFsOiBudW1iZXI7XG4gIHRvdGFsX3BhZ2VzOiBudW1iZXI7XG59XG5cbmVudW0gT3JkZXJCeSB7XG4gIExBVEVTVCA9IFwibGF0ZXN0XCIsXG4gIFJFTEVWQU5UID0gXCJyZWxldmFudFwiLFxufVxuXG5lbnVtIENvbG9yIHtcbiAgYmxhY2tBbmRXaGl0ZSA9IFwiYmxhY2tfYW5kX3doaXRlXCIsXG4gIGJsYWNrID0gXCJibGFja1wiLFxuICB3aGl0ZSA9IFwid2hpdGVcIixcbiAgeWVsbG93ID0gXCJ5ZWxsb3dcIixcbiAgb3JhbmdlID0gXCJvcmFuZ2VcIixcbiAgcmVkID0gXCJyZWRcIixcbiAgcHVycGxlID0gXCJwdXJwbGVcIixcbiAgbWFnZW50YSA9IFwibWFnZW50YVwiLFxuICBncmVlbiA9IFwiZ3JlZW5cIixcbiAgdGVhbCA9IFwidGVhbFwiLFxuICBibHVlID0gXCJibHVlXCIsXG59XG5cbmNvbnN0IE9yZGVyQnlMYWJlbCA9IHtcbiAgW09yZGVyQnkuTEFURVNUXTogXCJMYXRlc3RcIixcbiAgW09yZGVyQnkuUkVMRVZBTlRdOiBcIlJlbGV2YW50XCIsXG59O1xuXG4vLyBUT0RPOiBNb3ZlIEFQSSBjYWxsIHRvIHNlcnZlciBzaWRlLCBlbnZpcm9ubWVudCB2YXJpYWJsZSBzaG91bGQgbm90IGJlIGV4cG9zZWRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hQaG90b3MoXG4gIHF1ZXJ5OiBzdHJpbmcsXG4gIHBhZ2U6IG51bWJlcixcbiAgb3JkZXJfYnk6IE9yZGVyQnlcbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9zZWFyY2gvcGhvdG9zXCIsIHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIHF1ZXJ5LFxuICAgICAgcGFnZSxcbiAgICAgIHBlcl9wYWdlOiA5LFxuICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICBvcmRlcl9ieSxcbiAgICAgIGNsaWVudF9pZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVU5TUExBU0hfQUNDRVNTX0tFWSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzcG9uc2U/LmRhdGEgYXMgU2VhcmNoUmVzcG9uc2U7XG59XG5cbmV4cG9ydCBjb25zdCBHYWxsZXJ5ID0gKCkgPT4ge1xuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IFtmaWx0ZXJzLCBzZXRGaWx0ZXJzXSA9IHVzZVN0YXRlPHsgb3JkZXJCeTogT3JkZXJCeTsgY29sb3I/OiBDb2xvciB9Pih7XG4gICAgb3JkZXJCeTogT3JkZXJCeS5MQVRFU1QsXG4gICAgY29sb3I6IHVuZGVmaW5lZCxcbiAgfSk7XG5cbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XG5cbiAgY29uc3QgeyBzdGF0dXMsIGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KHtcbiAgICBxdWVyeUtleTogW1wic2VhcmNoXCIsIHNlYXJjaElucHV0LCBwYWdlLCBmaWx0ZXJzLm9yZGVyQnldLFxuICAgIHF1ZXJ5Rm46ICgpID0+IHNlYXJjaFBob3RvcyhzZWFyY2hJbnB1dCwgcGFnZSwgZmlsdGVycy5vcmRlckJ5KSxcbiAgICBlbmFibGVkOiAhIXNlYXJjaElucHV0LFxuICB9KTtcblxuICBjb25zdCB7IHJlc3VsdHMsIHRvdGFsX3BhZ2VzIH0gPSBkYXRhIHx8IHt9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gYXN5bmMgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgc2V0UGFnZSgxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGFnZUxvd2VyQm91bmQgPSBNYXRoLm1heChwYWdlIC0gMSwgMSk7XG5cbiAgY29uc3QgcGFnZXMgPSBbcGFnZUxvd2VyQm91bmQsIHBhZ2VMb3dlckJvdW5kICsgMSwgcGFnZUxvd2VyQm91bmQgKyAyXTtcblxuICBjb25zdCB1cGRhdGVGaWx0ZXJzID0gKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0RmlsdGVycygocHJldkZpbHRlcnMpID0+IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRGaWx0ZXJzID0geyAuLi5wcmV2RmlsdGVycyB9O1xuICAgICAgdXBkYXRlZEZpbHRlcnNba2V5XSA9IHZhbHVlO1xuXG4gICAgICBzZXRQYWdlKDEpO1xuXG4gICAgICByZXR1cm4gdXBkYXRlZEZpbHRlcnM7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFNlYXJjaElucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBtdC00XCI+XG4gICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgPERyb3Bkb3duTWVudVRyaWdnZXI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICBTb3J0IEJ5IHtPcmRlckJ5TGFiZWxbZmlsdGVycy5vcmRlckJ5XX1cbiAgICAgICAgICAgICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT1cImgtNCB3LTQgbWwtMVwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxuICAgICAgICAgIDxEcm9wZG93bk1lbnVDb250ZW50PlxuICAgICAgICAgICAge09iamVjdC5rZXlzKE9yZGVyQnlMYWJlbCkubWFwKCh2YWx1ZSkgPT4gKFxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51Q2hlY2tib3hJdGVtXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17ZmlsdGVycy5vcmRlckJ5ID09PSB2YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVGaWx0ZXJzKFwib3JkZXJCeVwiLCB2YWx1ZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7T3JkZXJCeUxhYmVsW3ZhbHVlXX1cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVDaGVja2JveEl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0Ryb3Bkb3duTWVudUNvbnRlbnQ+XG4gICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgPC9kaXY+XG4gICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMlwiIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhcC00IGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICAgIHtBcnJheS5mcm9tKFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XSkubWFwKChhKSA9PiAoXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiBrZXk9e2F9IGNsYXNzTmFtZT1cInctNjAgaC02MFwiIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKHJlc3VsdHMgfHwgW10pLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPHA+Tm8gcmVzdWx0czwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhcC00IGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICAgIHsocmVzdWx0cyB8fCBbXSkubWFwKChpbWcpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2ltZy5pZH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgYXNwZWN0LXNxdWFyZVwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWcudXJscy5yZWd1bGFyfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAgIGFsdD17aW1nLmFsdF9kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIiAvPlxuXG4gICAgICA8UGFnaW5hdGlvbj5cbiAgICAgICAgPFBhZ2luYXRpb25Db250ZW50PlxuICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbVxuICAgICAgICAgICAgYXJpYS1kaXNhYmxlZD17cGFnZSA9PT0gMX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17cGFnZSA9PT0gMSA/IFwiY3Vyc29yLW5vdC1hbGxvd2VkXCIgOiBcIlwifVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uUHJldmlvdXNcbiAgICAgICAgICAgICAgLy8gaHJlZj1cIiNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChwcmV2UGFnZSkgPT4gTWF0aC5tYXgocHJldlBhZ2UgLSAxLCAxKSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUGFnaW5hdGlvbkl0ZW0+XG4gICAgICAgICAge3BhZ2VzLm1hcCgocGFnZUl0ZW0pID0+IChcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbT5cbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25MaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtwYWdlID09PSBwYWdlSXRlbX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKHBhZ2VJdGVtKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwYWdlSXRlbX1cbiAgICAgICAgICAgICAgPC9QYWdpbmF0aW9uTGluaz5cbiAgICAgICAgICAgIDwvUGFnaW5hdGlvbkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFBhZ2luYXRpb25JdGVtPlxuICAgICAgICAgICAgPFBhZ2luYXRpb25OZXh0XG4gICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9e3BhZ2UgPT09IHRvdGFsX3BhZ2VzfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3BhZ2UgPT09IHRvdGFsX3BhZ2VzID8gXCJjdXJzb3Itbm90LWFsbG93ZWRcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKHByZXZQYWdlKSA9PiBwcmV2UGFnZSArIDEpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1BhZ2luYXRpb25JdGVtPlxuICAgICAgICA8L1BhZ2luYXRpb25Db250ZW50PlxuICAgICAgPC9QYWdpbmF0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsImF4aW9zIiwiU2VhcmNoSW5wdXQiLCJ1c2VRdWVyeSIsInVzZVN0YXRlIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25NZW51Q29udGVudCIsIkRyb3Bkb3duTWVudVRyaWdnZXIiLCJEcm9wZG93bk1lbnVDaGVja2JveEl0ZW0iLCJDaGV2cm9uRG93biIsIlBhZ2luYXRpb24iLCJQYWdpbmF0aW9uQ29udGVudCIsIlBhZ2luYXRpb25JdGVtIiwiUGFnaW5hdGlvbkxpbmsiLCJQYWdpbmF0aW9uTmV4dCIsIlBhZ2luYXRpb25QcmV2aW91cyIsIlNrZWxldG9uIiwiT3JkZXJCeSIsIkNvbG9yIiwiT3JkZXJCeUxhYmVsIiwic2VhcmNoUGhvdG9zIiwicXVlcnkiLCJwYWdlIiwib3JkZXJfYnkiLCJyZXNwb25zZSIsImdldCIsInBhcmFtcyIsInBlcl9wYWdlIiwiY29sb3IiLCJjbGllbnRfaWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVU5TUExBU0hfQUNDRVNTX0tFWSIsImRhdGEiLCJHYWxsZXJ5Iiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwib3JkZXJCeSIsInVuZGVmaW5lZCIsInNldFBhZ2UiLCJzdGF0dXMiLCJlcnJvciIsImlzTG9hZGluZyIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImVuYWJsZWQiLCJyZXN1bHRzIiwidG90YWxfcGFnZXMiLCJvbkNoYW5nZSIsImUiLCJrZXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhZ2VMb3dlckJvdW5kIiwiTWF0aCIsIm1heCIsInBhZ2VzIiwidXBkYXRlRmlsdGVycyIsInByZXZGaWx0ZXJzIiwidXBkYXRlZEZpbHRlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImNoZWNrZWQiLCJvbkNsaWNrIiwiQXJyYXkiLCJmcm9tIiwiYSIsImxlbmd0aCIsInAiLCJpbWciLCJmaWxsIiwic3JjIiwidXJscyIsInJlZ3VsYXIiLCJhbHQiLCJhbHRfZGVzY3JpcHRpb24iLCJpZCIsImFyaWEtZGlzYWJsZWQiLCJwcmV2UGFnZSIsInBhZ2VJdGVtIiwiaHJlZiIsImlzQWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Gallery.tsx\n"));

/***/ })

});