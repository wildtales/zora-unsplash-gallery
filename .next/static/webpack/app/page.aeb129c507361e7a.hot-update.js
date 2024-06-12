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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gallery: function() { return /* binding */ Gallery; },\n/* harmony export */   searchPhotos: function() { return /* binding */ searchPhotos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchInput */ \"(app-pages-browser)/./src/app/SearchInput.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/dropdown-menu */ \"(app-pages-browser)/./src/components/ui/dropdown-menu.tsx\");\n/* harmony import */ var _components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/pagination */ \"(app-pages-browser)/./src/components/ui/pagination.tsx\");\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./src/components/ui/skeleton.tsx\");\n/* __next_internal_client_entry_do_not_use__ searchPhotos,Gallery auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar OrderBy;\n(function(OrderBy) {\n    OrderBy[\"LATEST\"] = \"latest\";\n    OrderBy[\"RELEVANT\"] = \"relevant\";\n})(OrderBy || (OrderBy = {}));\n// TODO: Move API call to server side, environment variable should not be exposed\nasync function searchPhotos(query, page) {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"https://api.unsplash.com/search/photos\", {\n        params: {\n            query,\n            page,\n            per_page: 9,\n            order_by: \"relevant\",\n            client_id: \"ukJyK7f_oSD8sRs6GytnZxaxCnv8XCiFi05QKrF_BeQ\"\n        }\n    });\n    return response === null || response === void 0 ? void 0 : response.data;\n}\nconst Gallery = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        orderBy: \"latest\"\n    });\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const { status, data, error, isLoading } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)({\n        queryKey: [\n            \"search\",\n            searchInput,\n            page\n        ],\n        queryFn: ()=>searchPhotos(searchInput, page),\n        enabled: !!searchInput\n    });\n    console.log(data);\n    const { results, total_pages } = data || {};\n    const onChange = async (e)=>{\n        if (e.key === \"Enter\") {\n            setSearchInput(e.target.value);\n            setPage(1);\n        }\n    };\n    const pageLowerBound = Math.max(page - 1, 1);\n    const pages = [\n        pageLowerBound,\n        pageLowerBound + 1,\n        pageLowerBound + 2\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchInput__WEBPACK_IMPORTED_MODULE_2__.SearchInput, {\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenu, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuTrigger, {\n                            children: \"Open\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuContent, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuLabel, {\n                                    children: [\n                                        \"Sort By \",\n                                        filters.orderBy\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuSeparator, {}, void 0, false, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuItem, {\n                                    children: \"latest\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenuItem, {\n                                    children: \"relevant\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                        children: Array.from([\n                            1,\n                            2,\n                            3,\n                            4,\n                            5,\n                            6,\n                            7,\n                            8,\n                            9\n                        ]).map((a)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {\n                                className: \"w-60 h-60\"\n                            }, a, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true) : (results || []).length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No results\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                        children: (results || []).map((img)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative aspect-square w-60 h-60\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    fill: true,\n                                    src: img.urls.regular,\n                                    className: \"object-cover\",\n                                    alt: img.alt_description\n                                }, void 0, false, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, img.id, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.Pagination, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationContent, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationItem, {\n                            \"aria-disabled\": page === 1,\n                            className: page === 1 ? \"cursor-not-allowed\" : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationPrevious, {\n                                // href=\"#\"\n                                onClick: ()=>setPage((prevPage)=>Math.max(prevPage - 1, 1))\n                            }, void 0, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 140,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 11\n                        }, undefined),\n                        pages.map((pageItem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationItem, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationLink, {\n                                    href: \"#\",\n                                    isActive: page === pageItem,\n                                    onClick: ()=>setPage(pageItem),\n                                    children: pageItem\n                                }, void 0, false, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 147,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 146,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationNext, {\n                                \"aria-disabled\": page === total_pages,\n                                className: page === total_pages ? \"cursor-not-allowed\" : \"\",\n                                onClick: ()=>setPage((prevPage)=>prevPage + 1)\n                            }, void 0, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 157,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                            lineNumber: 156,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Gallery, \"jxM0yfv4PVytXoe8aXI6zwpxQA4=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery\n    ];\n});\n_c = Gallery;\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNKQyxLQUFLRixJQUFJRyxJQUFJLENBQUNDLE9BQU87b0NBQ3JCWCxXQUFVO29DQUNWWSxLQUFLTCxJQUFJTSxlQUFlOzs7Ozs7K0JBTGxCTixJQUFJTyxFQUFFOzs7Ozs7Ozs7Ozs7MEJBWXhCLDhEQUFDZjtnQkFBSUMsV0FBVTs7Ozs7OzBCQUVmLDhEQUFDaEQsaUVBQVVBOzBCQUNULDRFQUFDQyx3RUFBaUJBOztzQ0FDaEIsOERBQUNDLHFFQUFjQTs0QkFDYjZELGlCQUFlckQsU0FBUzs0QkFDeEJzQyxXQUFXdEMsU0FBUyxJQUFJLHVCQUF1QjtzQ0FFL0MsNEVBQUNMLHlFQUFrQkE7Z0NBQ2pCLFdBQVc7Z0NBQ1gyRCxTQUFTLElBQU1yQyxRQUFRLENBQUNzQyxXQUFhckIsS0FBS0MsR0FBRyxDQUFDb0IsV0FBVyxHQUFHOzs7Ozs7Ozs7Ozt3QkFHL0RuQixNQUFNSyxHQUFHLENBQUMsQ0FBQ2UseUJBQ1YsOERBQUNoRSxxRUFBY0E7MENBQ2IsNEVBQUNDLHFFQUFjQTtvQ0FDYmdFLE1BQUs7b0NBQ0xDLFVBQVUxRCxTQUFTd0Q7b0NBQ25CRixTQUFTLElBQU1yQyxRQUFRdUM7OENBRXRCQTs7Ozs7Ozs7Ozs7c0NBSVAsOERBQUNoRSxxRUFBY0E7c0NBQ2IsNEVBQUNFLHFFQUFjQTtnQ0FDYjJELGlCQUFlckQsU0FBUzJCO2dDQUN4QlcsV0FBV3RDLFNBQVMyQixjQUFjLHVCQUF1QjtnQ0FDekQyQixTQUFTLElBQU1yQyxRQUFRLENBQUNzQyxXQUFhQSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlELEVBQUU7R0F6R1c1Qzs7UUFPZ0M3QiwyREFBUUE7OztLQVB4QzZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvR2FsbGVyeS50c3g/Y2MyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBTZWFyY2hJbnB1dCB9IGZyb20gXCIuL1NlYXJjaElucHV0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duTWVudUNvbnRlbnQsXG4gIERyb3Bkb3duTWVudUl0ZW0sXG4gIERyb3Bkb3duTWVudUxhYmVsLFxuICBEcm9wZG93bk1lbnVTZXBhcmF0b3IsXG4gIERyb3Bkb3duTWVudVRyaWdnZXIsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZHJvcGRvd24tbWVudVwiO1xuXG5pbXBvcnQge1xuICBQYWdpbmF0aW9uLFxuICBQYWdpbmF0aW9uQ29udGVudCxcbiAgUGFnaW5hdGlvbkVsbGlwc2lzLFxuICBQYWdpbmF0aW9uSXRlbSxcbiAgUGFnaW5hdGlvbkxpbmssXG4gIFBhZ2luYXRpb25OZXh0LFxuICBQYWdpbmF0aW9uUHJldmlvdXMsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvcGFnaW5hdGlvblwiO1xuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NrZWxldG9uXCI7XG5cbmludGVyZmFjZSBTZWFyY2hSZXN1bHQge1xuICBpZDogc3RyaW5nO1xuICB1cmxzOiB7XG4gICAgcmVndWxhcjogc3RyaW5nO1xuICB9O1xuICBhbHRfZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNlYXJjaFJlc3BvbnNlIHtcbiAgcmVzdWx0czogU2VhcmNoUmVzdWx0W107XG4gIHRvdGFsOiBudW1iZXI7XG4gIHRvdGFsX3BhZ2VzOiBudW1iZXI7XG59XG5cbmVudW0gT3JkZXJCeSB7XG4gIExBVEVTVCA9IFwibGF0ZXN0XCIsXG4gIFJFTEVWQU5UID0gXCJyZWxldmFudFwiLFxufVxuXG4vLyBUT0RPOiBNb3ZlIEFQSSBjYWxsIHRvIHNlcnZlciBzaWRlLCBlbnZpcm9ubWVudCB2YXJpYWJsZSBzaG91bGQgbm90IGJlIGV4cG9zZWRcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hQaG90b3MocXVlcnk6IHN0cmluZywgcGFnZTogbnVtYmVyKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3NlYXJjaC9waG90b3NcIiwge1xuICAgIHBhcmFtczoge1xuICAgICAgcXVlcnksXG4gICAgICBwYWdlLFxuICAgICAgcGVyX3BhZ2U6IDksXG4gICAgICBvcmRlcl9ieTogT3JkZXJCeS5SRUxFVkFOVCxcbiAgICAgIGNsaWVudF9pZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVU5TUExBU0hfQUNDRVNTX0tFWSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzcG9uc2U/LmRhdGEgYXMgU2VhcmNoUmVzcG9uc2U7XG59XG5cbmV4cG9ydCBjb25zdCBHYWxsZXJ5ID0gKCkgPT4ge1xuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSB1c2VTdGF0ZSh7XG4gICAgb3JkZXJCeTogT3JkZXJCeS5MQVRFU1QsXG4gIH0pO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCB7IHN0YXR1cywgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5S2V5OiBbXCJzZWFyY2hcIiwgc2VhcmNoSW5wdXQsIHBhZ2VdLFxuICAgIHF1ZXJ5Rm46ICgpID0+IHNlYXJjaFBob3RvcyhzZWFyY2hJbnB1dCwgcGFnZSksXG4gICAgZW5hYmxlZDogISFzZWFyY2hJbnB1dCxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnN0IHsgcmVzdWx0cywgdG90YWxfcGFnZXMgfSA9IGRhdGEgfHwge307XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSBhc3luYyAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICBzZXRQYWdlKDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwYWdlTG93ZXJCb3VuZCA9IE1hdGgubWF4KHBhZ2UgLSAxLCAxKTtcblxuICBjb25zdCBwYWdlcyA9IFtwYWdlTG93ZXJCb3VuZCwgcGFnZUxvd2VyQm91bmQgKyAxLCBwYWdlTG93ZXJCb3VuZCArIDJdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTZWFyY2hJbnB1dCBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgIDxEcm9wZG93bk1lbnVUcmlnZ2VyPk9wZW48L0Ryb3Bkb3duTWVudVRyaWdnZXI+XG4gICAgICAgICAgPERyb3Bkb3duTWVudUNvbnRlbnQ+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51TGFiZWw+U29ydCBCeSB7ZmlsdGVycy5vcmRlckJ5fTwvRHJvcGRvd25NZW51TGFiZWw+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51U2VwYXJhdG9yIC8+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbT57T3JkZXJCeS5MQVRFU1R9PC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0+e09yZGVyQnkuUkVMRVZBTlR9PC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICAgICAgIDwvRHJvcGRvd25NZW51Q29udGVudD5cbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCIgLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FwLTQgZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtM1wiPlxuICAgICAgICAgICAge0FycmF5LmZyb20oWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldKS5tYXAoKGEpID0+IChcbiAgICAgICAgICAgICAgPFNrZWxldG9uIGtleT17YX0gY2xhc3NOYW1lPVwidy02MCBoLTYwXCIgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAocmVzdWx0cyB8fCBbXSkubGVuZ3RoID09PSAwID8gKFxuICAgICAgICA8cD5ObyByZXN1bHRzPC9wPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FwLTQgZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtM1wiPlxuICAgICAgICAgICAgeyhyZXN1bHRzIHx8IFtdKS5tYXAoKGltZykgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW1nLmlkfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBhc3BlY3Qtc3F1YXJlIHctNjAgaC02MFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWcudXJscy5yZWd1bGFyfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAgIGFsdD17aW1nLmFsdF9kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIiAvPlxuXG4gICAgICA8UGFnaW5hdGlvbj5cbiAgICAgICAgPFBhZ2luYXRpb25Db250ZW50PlxuICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbVxuICAgICAgICAgICAgYXJpYS1kaXNhYmxlZD17cGFnZSA9PT0gMX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17cGFnZSA9PT0gMSA/IFwiY3Vyc29yLW5vdC1hbGxvd2VkXCIgOiBcIlwifVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uUHJldmlvdXNcbiAgICAgICAgICAgICAgLy8gaHJlZj1cIiNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChwcmV2UGFnZSkgPT4gTWF0aC5tYXgocHJldlBhZ2UgLSAxLCAxKSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUGFnaW5hdGlvbkl0ZW0+XG4gICAgICAgICAge3BhZ2VzLm1hcCgocGFnZUl0ZW0pID0+IChcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbT5cbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25MaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtwYWdlID09PSBwYWdlSXRlbX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKHBhZ2VJdGVtKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwYWdlSXRlbX1cbiAgICAgICAgICAgICAgPC9QYWdpbmF0aW9uTGluaz5cbiAgICAgICAgICAgIDwvUGFnaW5hdGlvbkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPFBhZ2luYXRpb25JdGVtPlxuICAgICAgICAgICAgPFBhZ2luYXRpb25OZXh0XG4gICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9e3BhZ2UgPT09IHRvdGFsX3BhZ2VzfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3BhZ2UgPT09IHRvdGFsX3BhZ2VzID8gXCJjdXJzb3Itbm90LWFsbG93ZWRcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKHByZXZQYWdlKSA9PiBwcmV2UGFnZSArIDEpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1BhZ2luYXRpb25JdGVtPlxuICAgICAgICA8L1BhZ2luYXRpb25Db250ZW50PlxuICAgICAgPC9QYWdpbmF0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsImF4aW9zIiwiU2VhcmNoSW5wdXQiLCJ1c2VRdWVyeSIsInVzZVN0YXRlIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25NZW51Q29udGVudCIsIkRyb3Bkb3duTWVudUl0ZW0iLCJEcm9wZG93bk1lbnVMYWJlbCIsIkRyb3Bkb3duTWVudVNlcGFyYXRvciIsIkRyb3Bkb3duTWVudVRyaWdnZXIiLCJQYWdpbmF0aW9uIiwiUGFnaW5hdGlvbkNvbnRlbnQiLCJQYWdpbmF0aW9uSXRlbSIsIlBhZ2luYXRpb25MaW5rIiwiUGFnaW5hdGlvbk5leHQiLCJQYWdpbmF0aW9uUHJldmlvdXMiLCJTa2VsZXRvbiIsIk9yZGVyQnkiLCJzZWFyY2hQaG90b3MiLCJxdWVyeSIsInBhZ2UiLCJyZXNwb25zZSIsImdldCIsInBhcmFtcyIsInBlcl9wYWdlIiwib3JkZXJfYnkiLCJjbGllbnRfaWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVU5TUExBU0hfQUNDRVNTX0tFWSIsImRhdGEiLCJHYWxsZXJ5Iiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwib3JkZXJCeSIsInNldFBhZ2UiLCJzdGF0dXMiLCJlcnJvciIsImlzTG9hZGluZyIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImVuYWJsZWQiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0cyIsInRvdGFsX3BhZ2VzIiwib25DaGFuZ2UiLCJlIiwia2V5IiwidGFyZ2V0IiwidmFsdWUiLCJwYWdlTG93ZXJCb3VuZCIsIk1hdGgiLCJtYXgiLCJwYWdlcyIsImRpdiIsImNsYXNzTmFtZSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImEiLCJsZW5ndGgiLCJwIiwiaW1nIiwiZmlsbCIsInNyYyIsInVybHMiLCJyZWd1bGFyIiwiYWx0IiwiYWx0X2Rlc2NyaXB0aW9uIiwiaWQiLCJhcmlhLWRpc2FibGVkIiwib25DbGljayIsInByZXZQYWdlIiwicGFnZUl0ZW0iLCJocmVmIiwiaXNBY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Gallery.tsx\n"));

/***/ })

});