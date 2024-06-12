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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gallery: function() { return /* binding */ Gallery; },\n/* harmony export */   searchPhotos: function() { return /* binding */ searchPhotos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchInput */ \"(app-pages-browser)/./src/app/SearchInput.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./src/components/ui/skeleton.tsx\");\n/* harmony import */ var _PaginationBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PaginationBar */ \"(app-pages-browser)/./src/app/PaginationBar.tsx\");\n/* harmony import */ var _FiltersBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FiltersBar */ \"(app-pages-browser)/./src/app/FiltersBar.tsx\");\n/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! unsplash-js */ \"(app-pages-browser)/./node_modules/unsplash-js/dist/unsplash-js.esm.js\");\n/* harmony import */ var _lib_filters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/filters */ \"(app-pages-browser)/./src/lib/filters.ts\");\n/* __next_internal_client_entry_do_not_use__ searchPhotos,Gallery auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n// TODO: Move API call to server side, environment variable should not be exposed\nasync function searchPhotos(query, page, param) {\n    let { orderBy: order_by, color } = param;\n    const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"https://api.unsplash.com/search/photos\", {\n        params: {\n            query,\n            page,\n            per_page: 9,\n            color: color === _lib_filters__WEBPACK_IMPORTED_MODULE_7__.Color.all ? undefined : color,\n            order_by,\n            client_id: \"ukJyK7f_oSD8sRs6GytnZxaxCnv8XCiFi05QKrF_BeQ\"\n        }\n    });\n    return response === null || response === void 0 ? void 0 : response.data;\n}\nconst LoadingGallery = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-2\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                children: Array(9).fill(1).map((_elem, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {\n                        className: \"w-60 h-60\"\n                    }, idx, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = LoadingGallery;\nconst Gallery = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        orderBy: unsplash_js__WEBPACK_IMPORTED_MODULE_9__.OrderBy.LATEST,\n        color: _lib_filters__WEBPACK_IMPORTED_MODULE_7__.Color.all\n    });\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const { data, error, isLoading } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useQuery)({\n        queryKey: [\n            \"search\",\n            searchInput,\n            page,\n            filters\n        ],\n        queryFn: ()=>searchPhotos(searchInput, page, filters),\n        enabled: !!searchInput\n    });\n    const { results, total_pages } = data || {};\n    const onChange = async (e)=>{\n        if (e.key === \"Enter\") {\n            setSearchInput(e.target.value);\n            setPage(1);\n        }\n    };\n    const updateFilters = (key, value)=>{\n        setFilters((prevFilters)=>{\n            const updatedFilters = {\n                ...prevFilters\n            };\n            updatedFilters[key] = value;\n            // setPage(1);\n            return updatedFilters;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchInput__WEBPACK_IMPORTED_MODULE_2__.SearchInput, {\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FiltersBar__WEBPACK_IMPORTED_MODULE_6__.FiltersBar, {\n                updateFilters: updateFilters,\n                filters: filters\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined),\n            error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"There was an issue fetching photos.\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 112,\n                columnNumber: 9\n            }, undefined) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadingGallery, {}, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, undefined) : (results || []).length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No results\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 116,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                        children: (results || []).map((img)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative aspect-square\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    fill: true,\n                                    src: img.urls.regular,\n                                    className: \"object-cover\",\n                                    alt: img.alt_description\n                                }, void 0, false, {\n                                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, img.id, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PaginationBar__WEBPACK_IMPORTED_MODULE_5__.PaginationBar, {\n                currentPage: page,\n                setPage: setPage,\n                totalPages: total_pages\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Gallery, \"w336fXxz5tLuX4xa/lua9PUBF4U=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useQuery\n    ];\n});\n_c1 = Gallery;\nvar _c, _c1;\n$RefreshReg$(_c, \"LoadingGallery\");\n$RefreshReg$(_c1, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvR2FsbGVyeS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUVMO0FBQ2tCO0FBQ0s7QUFDaEI7QUFFbUI7QUFDSjtBQUNOO0FBQ0o7QUFDQTtBQWdCdEMsaUZBQWlGO0FBQzFFLGVBQWVVLGFBQ3BCQyxLQUFhLEVBQ2JDLElBQVksRUFDWixLQU1DO1FBTkQsRUFDRUMsU0FBU0MsUUFBUSxFQUNqQkMsS0FBSyxFQUlOLEdBTkQ7SUFRQSxNQUFNQyxXQUFXLE1BQU1mLDZDQUFLQSxDQUFDZ0IsR0FBRyxDQUFDLDBDQUEwQztRQUN6RUMsUUFBUTtZQUNOUDtZQUNBQztZQUNBTyxVQUFVO1lBQ1ZKLE9BQU9BLFVBQVVOLCtDQUFLQSxDQUFDVyxHQUFHLEdBQUdDLFlBQVlOO1lBQ3pDRDtZQUNBUSxXQUFXQyw2Q0FBMkM7UUFDeEQ7SUFDRjtJQUVBLE9BQU9QLHFCQUFBQSwrQkFBQUEsU0FBVVUsSUFBSTtBQUN2QjtBQUVBLE1BQU1DLGlCQUFpQjtJQUNyQixxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFJQyxXQUFVOzs7Ozs7MEJBRWYsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaQyxNQUFNLEdBQ0pDLElBQUksQ0FBQyxHQUNMQyxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msb0JBQ1gsOERBQUM3Qiw2REFBUUE7d0JBQVd3QixXQUFVO3VCQUFmSzs7Ozs7Ozs7Ozs7O0FBSzNCO0tBZE1QO0FBZ0JDLE1BQU1RLFVBQVU7O0lBQ3JCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHakMsK0NBQVFBLENBQUM7SUFFL0MsTUFBTSxDQUFDa0MsU0FBU0MsV0FBVyxHQUFHbkMsK0NBQVFBLENBQXFDO1FBQ3pFUyxTQUFTTCxnREFBT0EsQ0FBQ2dDLE1BQU07UUFDdkJ6QixPQUFPTiwrQ0FBS0EsQ0FBQ1csR0FBRztJQUNsQjtJQUVBLE1BQU0sQ0FBQ1IsTUFBTTZCLFFBQVEsR0FBR3JDLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU0sRUFBRXNCLElBQUksRUFBRWdCLEtBQUssRUFBRUMsU0FBUyxFQUFFLEdBQUd4QyxnRUFBUUEsQ0FBQztRQUMxQ3lDLFVBQVU7WUFBQztZQUFVUjtZQUFheEI7WUFBTTBCO1NBQVE7UUFDaERPLFNBQVMsSUFBTW5DLGFBQWEwQixhQUFheEIsTUFBTTBCO1FBQy9DUSxTQUFTLENBQUMsQ0FBQ1Y7SUFDYjtJQUVBLE1BQU0sRUFBRVcsT0FBTyxFQUFFQyxXQUFXLEVBQUUsR0FBR3RCLFFBQVEsQ0FBQztJQUUxQyxNQUFNdUIsV0FBVyxPQUFPQztRQUN0QixJQUFJQSxFQUFFQyxHQUFHLEtBQUssU0FBUztZQUNyQmQsZUFBZWEsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO1lBQzdCWixRQUFRO1FBQ1Y7SUFDRjtJQUVBLE1BQU1hLGdCQUFnQixDQUFDSCxLQUEwQkU7UUFDL0NkLFdBQVcsQ0FBQ2dCO1lBQ1YsTUFBTUMsaUJBQWlCO2dCQUFFLEdBQUdELFdBQVc7WUFBQztZQUN2Q0MsY0FBc0IsQ0FBQ0wsSUFBSSxHQUFHRTtZQUUvQixjQUFjO1lBRWQsT0FBT0c7UUFDVDtJQUNGO0lBRUEscUJBQ0UsOERBQUM1QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQzNCLHFEQUFXQTtnQkFBQytDLFVBQVVBOzs7Ozs7MEJBQ3ZCLDhEQUFDMUMsbURBQVVBO2dCQUFDK0MsZUFBZUE7Z0JBQWVoQixTQUFTQTs7Ozs7O1lBQ2xESSxzQkFDQyw4REFBQ2Q7MEJBQUk7Ozs7OzRCQUNIZSwwQkFDRiw4REFBQ2hCOzs7OzRCQUNDLENBQUNvQixXQUFXLEVBQUUsRUFBRVUsTUFBTSxLQUFLLGtCQUM3Qiw4REFBQ0M7MEJBQUU7Ozs7OzBDQUVIOztrQ0FDRSw4REFBQzlCO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNaLENBQUNrQixXQUFXLEVBQUUsRUFBRWYsR0FBRyxDQUFDLENBQUMyQixvQkFDcEIsOERBQUMvQjtnQ0FBaUJDLFdBQVU7MENBQzFCLDRFQUFDN0Isa0RBQUtBO29DQUNKK0IsSUFBSTtvQ0FDSjZCLEtBQUtELElBQUlFLElBQUksQ0FBQ0MsT0FBTztvQ0FDckJqQyxXQUFVO29DQUNWa0MsS0FBS0osSUFBSUssZUFBZTs7Ozs7OytCQUxsQkwsSUFBSU0sRUFBRTs7Ozs7Ozs7Ozs7OzBCQWF4Qiw4REFBQ3JDO2dCQUFJQyxXQUFVOzs7Ozs7MEJBRWYsOERBQUN2Qix5REFBYUE7Z0JBQ1o0RCxhQUFhdEQ7Z0JBQ2I2QixTQUFTQTtnQkFDVDBCLFlBQVluQjs7Ozs7Ozs7Ozs7O0FBSXBCLEVBQUU7R0F6RVdiOztRQVV3QmhDLDREQUFRQTs7O01BVmhDZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9HYWxsZXJ5LnRzeD9jYzJmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFNlYXJjaElucHV0IH0gZnJvbSBcIi4vU2VhcmNoSW5wdXRcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NrZWxldG9uXCI7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQmFyIH0gZnJvbSBcIi4vUGFnaW5hdGlvbkJhclwiO1xuaW1wb3J0IHsgRmlsdGVyc0JhciB9IGZyb20gXCIuL0ZpbHRlcnNCYXJcIjtcbmltcG9ydCB7IE9yZGVyQnkgfSBmcm9tIFwidW5zcGxhc2gtanNcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcIkAvbGliL2ZpbHRlcnNcIjtcblxuaW50ZXJmYWNlIFNlYXJjaFJlc3VsdCB7XG4gIGlkOiBzdHJpbmc7XG4gIHVybHM6IHtcbiAgICByZWd1bGFyOiBzdHJpbmc7XG4gIH07XG4gIGFsdF9kZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU2VhcmNoUmVzcG9uc2Uge1xuICByZXN1bHRzOiBTZWFyY2hSZXN1bHRbXTtcbiAgdG90YWw6IG51bWJlcjtcbiAgdG90YWxfcGFnZXM6IG51bWJlcjtcbn1cblxuLy8gVE9ETzogTW92ZSBBUEkgY2FsbCB0byBzZXJ2ZXIgc2lkZSwgZW52aXJvbm1lbnQgdmFyaWFibGUgc2hvdWxkIG5vdCBiZSBleHBvc2VkXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoUGhvdG9zKFxuICBxdWVyeTogc3RyaW5nLFxuICBwYWdlOiBudW1iZXIsXG4gIHtcbiAgICBvcmRlckJ5OiBvcmRlcl9ieSxcbiAgICBjb2xvcixcbiAgfToge1xuICAgIG9yZGVyQnk6IE9yZGVyQnk7XG4gICAgY29sb3I6IENvbG9yO1xuICB9XG4pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2FwaS51bnNwbGFzaC5jb20vc2VhcmNoL3Bob3Rvc1wiLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICBxdWVyeSxcbiAgICAgIHBhZ2UsXG4gICAgICBwZXJfcGFnZTogOSxcbiAgICAgIGNvbG9yOiBjb2xvciA9PT0gQ29sb3IuYWxsID8gdW5kZWZpbmVkIDogY29sb3IsXG4gICAgICBvcmRlcl9ieSxcbiAgICAgIGNsaWVudF9pZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVU5TUExBU0hfQUNDRVNTX0tFWSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzcG9uc2U/LmRhdGEgYXMgU2VhcmNoUmVzcG9uc2U7XG59XG5cbmNvbnN0IExvYWRpbmdHYWxsZXJ5ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTJcIiAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhcC00IGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAge0FycmF5KDkpXG4gICAgICAgICAgLmZpbGwoMSlcbiAgICAgICAgICAubWFwKChfZWxlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8U2tlbGV0b24ga2V5PXtpZHh9IGNsYXNzTmFtZT1cInctNjAgaC02MFwiIC8+XG4gICAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBHYWxsZXJ5ID0gKCkgPT4ge1xuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IFtmaWx0ZXJzLCBzZXRGaWx0ZXJzXSA9IHVzZVN0YXRlPHsgb3JkZXJCeTogT3JkZXJCeTsgY29sb3I6IENvbG9yIH0+KHtcbiAgICBvcmRlckJ5OiBPcmRlckJ5LkxBVEVTVCxcbiAgICBjb2xvcjogQ29sb3IuYWxsLFxuICB9KTtcblxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KHtcbiAgICBxdWVyeUtleTogW1wic2VhcmNoXCIsIHNlYXJjaElucHV0LCBwYWdlLCBmaWx0ZXJzXSxcbiAgICBxdWVyeUZuOiAoKSA9PiBzZWFyY2hQaG90b3Moc2VhcmNoSW5wdXQsIHBhZ2UsIGZpbHRlcnMpLFxuICAgIGVuYWJsZWQ6ICEhc2VhcmNoSW5wdXQsXG4gIH0pO1xuXG4gIGNvbnN0IHsgcmVzdWx0cywgdG90YWxfcGFnZXMgfSA9IGRhdGEgfHwge307XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSBhc3luYyAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICBzZXRQYWdlKDEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVGaWx0ZXJzID0gKGtleTogXCJvcmRlckJ5XCIgfCBcImNvbG9yXCIsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRGaWx0ZXJzKChwcmV2RmlsdGVycykgPT4ge1xuICAgICAgY29uc3QgdXBkYXRlZEZpbHRlcnMgPSB7IC4uLnByZXZGaWx0ZXJzIH07XG4gICAgICAodXBkYXRlZEZpbHRlcnMgYXMgYW55KVtrZXldID0gdmFsdWU7XG5cbiAgICAgIC8vIHNldFBhZ2UoMSk7XG5cbiAgICAgIHJldHVybiB1cGRhdGVkRmlsdGVycztcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8U2VhcmNoSW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgPEZpbHRlcnNCYXIgdXBkYXRlRmlsdGVycz17dXBkYXRlRmlsdGVyc30gZmlsdGVycz17ZmlsdGVyc30gLz5cbiAgICAgIHtlcnJvciA/IChcbiAgICAgICAgPGRpdj5UaGVyZSB3YXMgYW4gaXNzdWUgZmV0Y2hpbmcgcGhvdG9zLjwvZGl2PlxuICAgICAgKSA6IGlzTG9hZGluZyA/IChcbiAgICAgICAgPExvYWRpbmdHYWxsZXJ5IC8+XG4gICAgICApIDogKHJlc3VsdHMgfHwgW10pLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPHA+Tm8gcmVzdWx0czwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhcC00IGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICAgIHsocmVzdWx0cyB8fCBbXSkubWFwKChpbWcpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2ltZy5pZH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgYXNwZWN0LXNxdWFyZVwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWcudXJscy5yZWd1bGFyfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAgIGFsdD17aW1nLmFsdF9kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNFwiIC8+XG5cbiAgICAgIDxQYWdpbmF0aW9uQmFyXG4gICAgICAgIGN1cnJlbnRQYWdlPXtwYWdlfVxuICAgICAgICBzZXRQYWdlPXtzZXRQYWdlfVxuICAgICAgICB0b3RhbFBhZ2VzPXt0b3RhbF9wYWdlc31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiYXhpb3MiLCJTZWFyY2hJbnB1dCIsInVzZVF1ZXJ5IiwidXNlU3RhdGUiLCJTa2VsZXRvbiIsIlBhZ2luYXRpb25CYXIiLCJGaWx0ZXJzQmFyIiwiT3JkZXJCeSIsIkNvbG9yIiwic2VhcmNoUGhvdG9zIiwicXVlcnkiLCJwYWdlIiwib3JkZXJCeSIsIm9yZGVyX2J5IiwiY29sb3IiLCJyZXNwb25zZSIsImdldCIsInBhcmFtcyIsInBlcl9wYWdlIiwiYWxsIiwidW5kZWZpbmVkIiwiY2xpZW50X2lkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1VOU1BMQVNIX0FDQ0VTU19LRVkiLCJkYXRhIiwiTG9hZGluZ0dhbGxlcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfZWxlbSIsImlkeCIsIkdhbGxlcnkiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwiZmlsdGVycyIsInNldEZpbHRlcnMiLCJMQVRFU1QiLCJzZXRQYWdlIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJlbmFibGVkIiwicmVzdWx0cyIsInRvdGFsX3BhZ2VzIiwib25DaGFuZ2UiLCJlIiwia2V5IiwidGFyZ2V0IiwidmFsdWUiLCJ1cGRhdGVGaWx0ZXJzIiwicHJldkZpbHRlcnMiLCJ1cGRhdGVkRmlsdGVycyIsImxlbmd0aCIsInAiLCJpbWciLCJzcmMiLCJ1cmxzIiwicmVndWxhciIsImFsdCIsImFsdF9kZXNjcmlwdGlvbiIsImlkIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Gallery.tsx\n"));

/***/ })

});