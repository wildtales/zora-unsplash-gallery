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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gallery: function() { return /* binding */ Gallery; },\n/* harmony export */   searchPhotos: function() { return /* binding */ searchPhotos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchInput */ \"(app-pages-browser)/./src/app/SearchInput.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/dropdown-menu */ \"(app-pages-browser)/./src/components/ui/dropdown-menu.tsx\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var _components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/pagination */ \"(app-pages-browser)/./src/components/ui/pagination.tsx\");\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./src/components/ui/skeleton.tsx\");\n/* __next_internal_client_entry_do_not_use__ searchPhotos,Gallery auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar OrderBy;\n(function(OrderBy) {\n    OrderBy[\"LATEST\"] = \"latest\";\n    OrderBy[\"RELEVANT\"] = \"relevant\";\n})(OrderBy || (OrderBy = {}));\nvar Color;\n(function(Color) {\n    Color[\"blackAndWhite\"] = \"black_and_white\";\n    Color[\"black\"] = \"black\";\n    Color[\"white\"] = \"white\";\n    Color[\"yellow\"] = \"yellow\";\n    Color[\"orange\"] = \"orange\";\n    Color[\"red\"] = \"red\";\n    Color[\"purple\"] = \"purple\";\n    Color[\"magenta\"] = \"magenta\";\n    Color[\"green\"] = \"green\";\n    Color[\"teal\"] = \"teal\";\n    Color[\"blue\"] = \"blue\";\n})(Color || (Color = {}));\nconst OrderByLabel = {\n    [\"latest\"]: \"Latest\",\n    [\"relevant\"]: \"Relevant\"\n};\n// TODO: Move API call to server side, environment variable should not be exposed\nasync function searchPhotos(query, page, order_by) {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"https://api.unsplash.com/search/photos\", {\n        params: {\n            query,\n            page,\n            per_page: 9,\n            order_by,\n            client_id: \"ukJyK7f_oSD8sRs6GytnZxaxCnv8XCiFi05QKrF_BeQ\"\n        }\n    });\n    return response === null || response === void 0 ? void 0 : response.data;\n}\nconst Gallery = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        orderBy: \"latest\",\n        color: undefined\n    });\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const { status, data, error, isLoading } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)({\n        queryKey: [\n            \"search\",\n            searchInput,\n            page,\n            filters.orderBy\n        ],\n        queryFn: ()=>searchPhotos(searchInput, page, filters.orderBy),\n        enabled: !!searchInput\n    });\n    console.log(data);\n    const { results, total_pages } = data || {};\n    const onChange = async (e)=>{\n        if (e.key === \"Enter\") {\n            setSearchInput(e.target.value);\n            setPage(1);\n        }\n    };\n    const pageLowerBound = Math.max(page - 1, 1);\n    const pages = [\n        pageLowerBound,\n        pageLowerBound + 1,\n        pageLowerBound + 2\n    ];\n    const updateFilters = (key, value)=>{\n        setFilters((prevFilters)=>{\n            const updatedFilters = {\n                ...prevFilters\n            };\n            updatedFilters[key] = value;\n            setPage(1);\n            return updatedFilters;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchInput__WEBPACK_IMPORTED_MODULE_2__.SearchInput, {\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenu, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuTrigger, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    \"Sort By \",\n                                    OrderByLabel[filters.orderBy],\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        className: \"h-4 w-4 ml-1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                        lineNumber: 135,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuContent, {\n                            children: Object.keys(OrderByLabel).map((value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuCheckboxItem, {\n                                    checked: filters.orderBy === value,\n                                    onClick: ()=>updateFilters(\"orderBy\", value),\n                                    children: OrderByLabel[value]\n                                }, void 0, false, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 142,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, undefined),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                        children: Array.from([\n                            1,\n                            2,\n                            3,\n                            4,\n                            5,\n                            6,\n                            7,\n                            8,\n                            9\n                        ]).map((a)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {\n                                className: \"w-60 h-60\"\n                            }, a, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 158,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 156,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true) : (results || []).length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No results\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 163,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 166,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                        children: (results || []).map((img)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative aspect-square\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    fill: true,\n                                    src: img.urls.regular,\n                                    className: \"object-cover\",\n                                    alt: img.alt_description\n                                }, void 0, false, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 170,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, img.id, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 169,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 167,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 181,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.Pagination, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationContent, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationItem, {\n                            \"aria-disabled\": page === 1,\n                            className: page === 1 ? \"cursor-not-allowed\" : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationPrevious, {\n                                // href=\"#\"\n                                onClick: ()=>setPage((prevPage)=>Math.max(prevPage - 1, 1))\n                            }, void 0, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 189,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                            lineNumber: 185,\n                            columnNumber: 11\n                        }, undefined),\n                        pages.map((pageItem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationLink, {\n                                    href: \"#\",\n                                    isActive: page === pageItem,\n                                    onClick: ()=>setPage(pageItem),\n                                    children: pageItem\n                                }, void 0, false, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 196,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 195,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationNext, {\n                                \"aria-disabled\": page === total_pages,\n                                className: page === total_pages ? \"cursor-not-allowed\" : \"\",\n                                onClick: ()=>setPage((prevPage)=>prevPage + 1)\n                            }, void 0, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 206,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                            lineNumber: 205,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                    lineNumber: 184,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 183,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n        lineNumber: 128,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Gallery, \"SREYxf3ehNkn/aoJ1qDxblo5O4M=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery\n    ];\n});\n_c = Gallery;\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvR2FsbGVyeS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytCO0FBRUw7QUFDa0I7QUFDSztBQUNoQjtBQVNNO0FBQ0k7QUFVUDtBQUNnQjs7VUFnQi9DaUI7OztHQUFBQSxZQUFBQTs7VUFLQUM7Ozs7Ozs7Ozs7OztHQUFBQSxVQUFBQTtBQWNMLE1BQU1DLGVBQWU7SUFDbkIsVUFBZ0IsRUFBRTtJQUNsQixZQUFrQixFQUFFO0FBQ3RCO0FBRUEsaUZBQWlGO0FBQzFFLGVBQWVDLGFBQ3BCQyxLQUFhLEVBQ2JDLElBQVksRUFDWkMsUUFBaUI7SUFFakIsTUFBTUMsV0FBVyxNQUFNdkIsNkNBQUtBLENBQUN3QixHQUFHLENBQUMsMENBQTBDO1FBQ3pFQyxRQUFRO1lBQ05MO1lBQ0FDO1lBQ0FLLFVBQVU7WUFDVko7WUFDQUssV0FBV0MsNkNBQTJDO1FBQ3hEO0lBQ0Y7SUFFQSxPQUFPTCxxQkFBQUEsK0JBQUFBLFNBQVVRLElBQUk7QUFDdkI7QUFFTyxNQUFNQyxVQUFVOztJQUNyQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBRy9CLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2dDLFNBQVNDLFdBQVcsR0FBR2pDLCtDQUFRQSxDQUFDO1FBQ3JDa0MsT0FBTztRQUNQQyxPQUFPQztJQUNUO0lBRUEsTUFBTSxDQUFDbEIsTUFBTW1CLFFBQVEsR0FBR3JDLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU0sRUFBRXNDLE1BQU0sRUFBRVYsSUFBSSxFQUFFVyxLQUFLLEVBQUVDLFNBQVMsRUFBRSxHQUFHekMsK0RBQVFBLENBQUM7UUFDbEQwQyxVQUFVO1lBQUM7WUFBVVg7WUFBYVo7WUFBTWMsUUFBUUUsT0FBTztTQUFDO1FBQ3hEUSxTQUFTLElBQU0xQixhQUFhYyxhQUFhWixNQUFNYyxRQUFRRSxPQUFPO1FBQzlEUyxTQUFTLENBQUMsQ0FBQ2I7SUFDYjtJQUVBYyxRQUFRQyxHQUFHLENBQUNq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QWNBO29DQUNiMkUsTUFBSztvQ0FDTEMsVUFBVW5FLFNBQVNpRTtvQ0FDbkJoQixTQUFTLElBQU05QixRQUFROEM7OENBRXRCQTs7Ozs7Ozs7Ozs7c0NBSVAsOERBQUMzRSxxRUFBY0E7c0NBQ2IsNEVBQUNFLHFFQUFjQTtnQ0FDYnVFLGlCQUFlL0QsU0FBUzZCO2dDQUN4QmMsV0FBVzNDLFNBQVM2QixjQUFjLHVCQUF1QjtnQ0FDekRvQixTQUFTLElBQU05QixRQUFRLENBQUM2QyxXQUFhQSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlELEVBQUU7R0FqSVdyRDs7UUFTZ0M5QiwyREFBUUE7OztLQVR4QzhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvR2FsbGVyeS50c3g/Y2MyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBTZWFyY2hJbnB1dCB9IGZyb20gXCIuL1NlYXJjaElucHV0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duTWVudUNvbnRlbnQsXG4gIERyb3Bkb3duTWVudUl0ZW0sXG4gIERyb3Bkb3duTWVudUxhYmVsLFxuICBEcm9wZG93bk1lbnVTZXBhcmF0b3IsXG4gIERyb3Bkb3duTWVudVRyaWdnZXIsXG4gIERyb3Bkb3duTWVudUNoZWNrYm94SXRlbSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBDaGV2cm9uRG93biB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgUGFnaW5hdGlvbixcbiAgUGFnaW5hdGlvbkNvbnRlbnQsXG4gIFBhZ2luYXRpb25FbGxpcHNpcyxcbiAgUGFnaW5hdGlvbkl0ZW0sXG4gIFBhZ2luYXRpb25MaW5rLFxuICBQYWdpbmF0aW9uTmV4dCxcbiAgUGFnaW5hdGlvblByZXZpb3VzLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3BhZ2luYXRpb25cIjtcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9za2VsZXRvblwiO1xuXG5pbnRlcmZhY2UgU2VhcmNoUmVzdWx0IHtcbiAgaWQ6IHN0cmluZztcbiAgdXJsczoge1xuICAgIHJlZ3VsYXI6IHN0cmluZztcbiAgfTtcbiAgYWx0X2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTZWFyY2hSZXNwb25zZSB7XG4gIHJlc3VsdHM6IFNlYXJjaFJlc3VsdFtdO1xuICB0b3RhbDogbnVtYmVyO1xuICB0b3RhbF9wYWdlczogbnVtYmVyO1xufVxuXG5lbnVtIE9yZGVyQnkge1xuICBMQVRFU1QgPSBcImxhdGVzdFwiLFxuICBSRUxFVkFOVCA9IFwicmVsZXZhbnRcIixcbn1cblxuZW51bSBDb2xvciB7XG4gIGJsYWNrQW5kV2hpdGUgPSBcImJsYWNrX2FuZF93aGl0ZVwiLFxuICBibGFjayA9IFwiYmxhY2tcIixcbiAgd2hpdGUgPSBcIndoaXRlXCIsXG4gIHllbGxvdyA9IFwieWVsbG93XCIsXG4gIG9yYW5nZSA9IFwib3JhbmdlXCIsXG4gIHJlZCA9IFwicmVkXCIsXG4gIHB1cnBsZSA9IFwicHVycGxlXCIsXG4gIG1hZ2VudGEgPSBcIm1hZ2VudGFcIixcbiAgZ3JlZW4gPSBcImdyZWVuXCIsXG4gIHRlYWwgPSBcInRlYWxcIixcbiAgYmx1ZSA9IFwiYmx1ZVwiLFxufVxuXG5jb25zdCBPcmRlckJ5TGFiZWwgPSB7XG4gIFtPcmRlckJ5LkxBVEVTVF06IFwiTGF0ZXN0XCIsXG4gIFtPcmRlckJ5LlJFTEVWQU5UXTogXCJSZWxldmFudFwiLFxufTtcblxuLy8gVE9ETzogTW92ZSBBUEkgY2FsbCB0byBzZXJ2ZXIgc2lkZSwgZW52aXJvbm1lbnQgdmFyaWFibGUgc2hvdWxkIG5vdCBiZSBleHBvc2VkXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoUGhvdG9zKFxuICBxdWVyeTogc3RyaW5nLFxuICBwYWdlOiBudW1iZXIsXG4gIG9yZGVyX2J5OiBPcmRlckJ5XG4pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2FwaS51bnNwbGFzaC5jb20vc2VhcmNoL3Bob3Rvc1wiLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICBxdWVyeSxcbiAgICAgIHBhZ2UsXG4gICAgICBwZXJfcGFnZTogOSxcbiAgICAgIG9yZGVyX2J5LFxuICAgICAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VTlNQTEFTSF9BQ0NFU1NfS0VZLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiByZXNwb25zZT8uZGF0YSBhcyBTZWFyY2hSZXNwb25zZTtcbn1cblxuZXhwb3J0IGNvbnN0IEdhbGxlcnkgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmaWx0ZXJzLCBzZXRGaWx0ZXJzXSA9IHVzZVN0YXRlKHtcbiAgICBvcmRlckJ5OiBPcmRlckJ5LkxBVEVTVCxcbiAgICBjb2xvcjogdW5kZWZpbmVkLFxuICB9KTtcblxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCB7IHN0YXR1cywgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5S2V5OiBbXCJzZWFyY2hcIiwgc2VhcmNoSW5wdXQsIHBhZ2UsIGZpbHRlcnMub3JkZXJCeV0sXG4gICAgcXVlcnlGbjogKCkgPT4gc2VhcmNoUGhvdG9zKHNlYXJjaElucHV0LCBwYWdlLCBmaWx0ZXJzLm9yZGVyQnkpLFxuICAgIGVuYWJsZWQ6ICEhc2VhcmNoSW5wdXQsXG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBjb25zdCB7IHJlc3VsdHMsIHRvdGFsX3BhZ2VzIH0gPSBkYXRhIHx8IHt9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gYXN5bmMgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgc2V0UGFnZSgxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGFnZUxvd2VyQm91bmQgPSBNYXRoLm1heChwYWdlIC0gMSwgMSk7XG5cbiAgY29uc3QgcGFnZXMgPSBbcGFnZUxvd2VyQm91bmQsIHBhZ2VMb3dlckJvdW5kICsgMSwgcGFnZUxvd2VyQm91bmQgKyAyXTtcblxuICBjb25zdCB1cGRhdGVGaWx0ZXJzID0gKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0RmlsdGVycygocHJldkZpbHRlcnMpID0+IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRGaWx0ZXJzID0geyAuLi5wcmV2RmlsdGVycyB9O1xuICAgICAgdXBkYXRlZEZpbHRlcnNba2V5XSA9IHZhbHVlO1xuXG4gICAgICBzZXRQYWdlKDEpO1xuXG4gICAgICByZXR1cm4gdXBkYXRlZEZpbHRlcnM7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFNlYXJjaElucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBtdC00XCI+XG4gICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgPERyb3Bkb3duTWVudVRyaWdnZXI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICBTb3J0IEJ5IHtPcmRlckJ5TGFiZWxbZmlsdGVycy5vcmRlckJ5XX1cbiAgICAgICAgICAgICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT1cImgtNCB3LTQgbWwtMVwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxuICAgICAgICAgIDxEcm9wZG93bk1lbnVDb250ZW50PlxuICAgICAgICAgICAgey8qIDxEcm9wZG93bk1lbnVMYWJlbD5Tb3J0IEJ5IHtmaWx0ZXJzLm9yZGVyQnl9PC9Ecm9wZG93bk1lbnVMYWJlbD4gKi99XG4gICAgICAgICAgICB7LyogPERyb3Bkb3duTWVudVNlcGFyYXRvciAvPiAqL31cbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhPcmRlckJ5TGFiZWwpLm1hcCgodmFsdWUpID0+IChcbiAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUNoZWNrYm94SXRlbVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2ZpbHRlcnMub3JkZXJCeSA9PT0gdmFsdWV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlRmlsdGVycyhcIm9yZGVyQnlcIiwgdmFsdWUpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge09yZGVyQnlMYWJlbFt2YWx1ZV19XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51Q2hlY2tib3hJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Ecm9wZG93bk1lbnVDb250ZW50PlxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgIDwvZGl2PlxuICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTJcIiAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYXAtNCBncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zXCI+XG4gICAgICAgICAgICB7QXJyYXkuZnJvbShbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV0pLm1hcCgoYSkgPT4gKFxuICAgICAgICAgICAgICA8U2tlbGV0b24ga2V5PXthfSBjbGFzc05hbWU9XCJ3LTYwIGgtNjBcIiAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChyZXN1bHRzIHx8IFtdKS5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgIDxwPk5vIHJlc3VsdHM8L3A+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMlwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYXAtNCBncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zXCI+XG4gICAgICAgICAgICB7KHJlc3VsdHMgfHwgW10pLm1hcCgoaW1nKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbWcuaWR9IGNsYXNzTmFtZT1cInJlbGF0aXZlIGFzcGVjdC1zcXVhcmVcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1nLnVybHMucmVndWxhcn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgICAgICAgICBhbHQ9e2ltZy5hbHRfZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCIgLz5cblxuICAgICAgPFBhZ2luYXRpb24+XG4gICAgICAgIDxQYWdpbmF0aW9uQ29udGVudD5cbiAgICAgICAgICA8UGFnaW5hdGlvbkl0ZW1cbiAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3BhZ2UgPT09IDEgPyBcImN1cnNvci1ub3QtYWxsb3dlZFwiIDogXCJcIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGFnaW5hdGlvblByZXZpb3VzXG4gICAgICAgICAgICAgIC8vIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZSgocHJldlBhZ2UpID0+IE1hdGgubWF4KHByZXZQYWdlIC0gMSwgMSkpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1BhZ2luYXRpb25JdGVtPlxuICAgICAgICAgIHtwYWdlcy5tYXAoKHBhZ2VJdGVtKSA9PiAoXG4gICAgICAgICAgICA8UGFnaW5hdGlvbkl0ZW0+XG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uTGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17cGFnZSA9PT0gcGFnZUl0ZW19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZShwYWdlSXRlbSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cGFnZUl0ZW19XG4gICAgICAgICAgICAgIDwvUGFnaW5hdGlvbkxpbms+XG4gICAgICAgICAgICA8L1BhZ2luYXRpb25JdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbT5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uTmV4dFxuICAgICAgICAgICAgICBhcmlhLWRpc2FibGVkPXtwYWdlID09PSB0b3RhbF9wYWdlc31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYWdlID09PSB0b3RhbF9wYWdlcyA/IFwiY3Vyc29yLW5vdC1hbGxvd2VkXCIgOiBcIlwifVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChwcmV2UGFnZSkgPT4gcHJldlBhZ2UgKyAxKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9QYWdpbmF0aW9uSXRlbT5cbiAgICAgICAgPC9QYWdpbmF0aW9uQ29udGVudD5cbiAgICAgIDwvUGFnaW5hdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJheGlvcyIsIlNlYXJjaElucHV0IiwidXNlUXVlcnkiLCJ1c2VTdGF0ZSIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duTWVudUNvbnRlbnQiLCJEcm9wZG93bk1lbnVUcmlnZ2VyIiwiRHJvcGRvd25NZW51Q2hlY2tib3hJdGVtIiwiQ2hldnJvbkRvd24iLCJQYWdpbmF0aW9uIiwiUGFnaW5hdGlvbkNvbnRlbnQiLCJQYWdpbmF0aW9uSXRlbSIsIlBhZ2luYXRpb25MaW5rIiwiUGFnaW5hdGlvbk5leHQiLCJQYWdpbmF0aW9uUHJldmlvdXMiLCJTa2VsZXRvbiIsIk9yZGVyQnkiLCJDb2xvciIsIk9yZGVyQnlMYWJlbCIsInNlYXJjaFBob3RvcyIsInF1ZXJ5IiwicGFnZSIsIm9yZGVyX2J5IiwicmVzcG9uc2UiLCJnZXQiLCJwYXJhbXMiLCJwZXJfcGFnZSIsImNsaWVudF9pZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19VTlNQTEFTSF9BQ0NFU1NfS0VZIiwiZGF0YSIsIkdhbGxlcnkiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwiZmlsdGVycyIsInNldEZpbHRlcnMiLCJvcmRlckJ5IiwiY29sb3IiLCJ1bmRlZmluZWQiLCJzZXRQYWdlIiwic3RhdHVzIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJlbmFibGVkIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiLCJ0b3RhbF9wYWdlcyIsIm9uQ2hhbmdlIiwiZSIsImtleSIsInRhcmdldCIsInZhbHVlIiwicGFnZUxvd2VyQm91bmQiLCJNYXRoIiwibWF4IiwicGFnZXMiLCJ1cGRhdGVGaWx0ZXJzIiwicHJldkZpbHRlcnMiLCJ1cGRhdGVkRmlsdGVycyIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiY2hlY2tlZCIsIm9uQ2xpY2siLCJBcnJheSIsImZyb20iLCJhIiwibGVuZ3RoIiwicCIsImltZyIsImZpbGwiLCJzcmMiLCJ1cmxzIiwicmVndWxhciIsImFsdCIsImFsdF9kZXNjcmlwdGlvbiIsImlkIiwiYXJpYS1kaXNhYmxlZCIsInByZXZQYWdlIiwicGFnZUl0ZW0iLCJocmVmIiwiaXNBY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Gallery.tsx\n"));

/***/ })

});