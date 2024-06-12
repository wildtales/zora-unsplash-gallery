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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gallery: function() { return /* binding */ Gallery; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchInput */ \"(app-pages-browser)/./src/app/SearchInput.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./src/components/ui/skeleton.tsx\");\n/* harmony import */ var _PaginationBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PaginationBar */ \"(app-pages-browser)/./src/app/PaginationBar.tsx\");\n/* harmony import */ var _SortFilterToolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SortFilterToolbar */ \"(app-pages-browser)/./src/app/SortFilterToolbar.tsx\");\n/* harmony import */ var _lib_filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/filters */ \"(app-pages-browser)/./src/lib/filters.ts\");\n/* __next_internal_client_entry_do_not_use__ Gallery auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// TODO: Move API call to server side, environment variable should not be exposed\nconst searchPhotos = async (query, page, param)=>{\n    let { color, orderBy: order_by } = param;\n    const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"https://api.unsplash.com/search/photos\", {\n        params: {\n            client_id: \"ukJyK7f_oSD8sRs6GytnZxaxCnv8XCiFi05QKrF_BeQ\",\n            color: color === _lib_filters__WEBPACK_IMPORTED_MODULE_6__.Color.all ? undefined : color,\n            order_by,\n            page,\n            per_page: 9,\n            query\n        }\n    });\n    return response === null || response === void 0 ? void 0 : response.data;\n};\nconst LoadingGallery = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-2\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                children: Array(9).fill(1).map((_elem, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {\n                        className: \"w-60 h-60\"\n                    }, idx, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = LoadingGallery;\nconst Gallery = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        orderBy: _lib_filters__WEBPACK_IMPORTED_MODULE_6__.OrderBy.LATEST,\n        color: _lib_filters__WEBPACK_IMPORTED_MODULE_6__.Color.all\n    });\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const { data, error, isLoading, status } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)({\n        queryKey: [\n            \"search\",\n            searchInput,\n            page,\n            filters\n        ],\n        queryFn: ()=>searchPhotos(searchInput, page, filters),\n        enabled: !!searchInput\n    });\n    const { results, total_pages } = data || {};\n    const onChange = async (e)=>{\n        if (e.key === \"Enter\") {\n            setSearchInput(e.target.value);\n            setPage(1);\n        }\n    };\n    const updateFilters = (key, value)=>{\n        setFilters((prevFilters)=>{\n            const updatedFilters = {\n                ...prevFilters\n            };\n            updatedFilters[key] = value;\n            setPage(1);\n            return updatedFilters;\n        });\n    };\n    const galleryItems = results || [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchInput__WEBPACK_IMPORTED_MODULE_1__.SearchInput, {\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortFilterToolbar__WEBPACK_IMPORTED_MODULE_5__.SortFilterToolbar, {\n                updateFilters: updateFilters,\n                filters: filters\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"There was an issue fetching photos.\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, undefined) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadingGallery, {}, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 101,\n                columnNumber: 9\n            }, undefined) : galleryItems.length === 0 && status === \"success\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No items matched your query.\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                        children: galleryItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GalleryItem, {\n                                item: item\n                            }, item.id, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PaginationBar__WEBPACK_IMPORTED_MODULE_4__.PaginationBar, {\n                currentPage: page,\n                setPage: setPage,\n                totalPages: total_pages\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Gallery, \"IRJdXg6DjRQFk+SuYW+4MXa1NaU=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery\n    ];\n});\n_c1 = Gallery;\nvar _c, _c1;\n$RefreshReg$(_c, \"LoadingGallery\");\n$RefreshReg$(_c1, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvR2FsbGVyeS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUUwQjtBQUNrQjtBQUNLO0FBQ2hCO0FBRW1CO0FBQ0o7QUFDUTtBQUNUO0FBUS9DLGlGQUFpRjtBQUNqRixNQUFNUyxlQUFlLE9BQ25CQyxPQUNBQztRQUNBLEVBQUVDLEtBQUssRUFBRUMsU0FBU0MsUUFBUSxFQUFlO0lBRXpDLE1BQU1DLFdBQVcsTUFBTWYsNkNBQUtBLENBQUNnQixHQUFHLENBQUMsMENBQTBDO1FBQ3pFQyxRQUFRO1lBQ05DLFdBQVdDLDZDQUEyQztZQUN0RFAsT0FBT0EsVUFBVUwsK0NBQUtBLENBQUNlLEdBQUcsR0FBR0MsWUFBWVg7WUFDekNFO1lBQ0FIO1lBQ0FhLFVBQVU7WUFDVmQ7UUFDRjtJQUNGO0lBRUEsT0FBT0sscUJBQUFBLCtCQUFBQSxTQUFVVSxJQUFJO0FBQ3ZCO0FBRUEsTUFBTUMsaUJBQWlCO0lBQ3JCLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQUlDLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pDLE1BQU0sR0FDSkMsSUFBSSxDQUFDLEdBQ0xDLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxvQkFDWCw4REFBQzdCLDZEQUFRQTt3QkFBV3dCLFdBQVU7dUJBQWZLOzs7Ozs7Ozs7Ozs7QUFLM0I7S0FiTVA7QUFlQyxNQUFNUSxVQUFVOztJQUNyQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2pDLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU0sQ0FBQ2tDLFNBQVNDLFdBQVcsR0FBR25DLCtDQUFRQSxDQUFjO1FBQ2xEVSxTQUFTTCxpREFBT0EsQ0FBQytCLE1BQU07UUFDdkIzQixPQUFPTCwrQ0FBS0EsQ0FBQ2UsR0FBRztJQUNsQjtJQUVBLE1BQU0sQ0FBQ1gsTUFBTTZCLFFBQVEsR0FBR3JDLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU0sRUFBRXNCLElBQUksRUFBRWdCLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUUsR0FBR3pDLCtEQUFRQSxDQUFDO1FBQ2xEMEMsVUFBVTtZQUFDO1lBQVVUO1lBQWF4QjtZQUFNMEI7U0FBUTtRQUNoRFEsU0FBUyxJQUFNcEMsYUFBYTBCLGFBQWF4QixNQUFNMEI7UUFDL0NTLFNBQVMsQ0FBQyxDQUFDWDtJQUNiO0lBRUEsTUFBTSxFQUFFWSxPQUFPLEVBQUVDLFdBQVcsRUFBRSxHQUFHdkIsUUFBUSxDQUFDO0lBRTFDLE1BQU13QixXQUFXLE9BQU9DO1FBQ3RCLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxTQUFTO1lBQ3JCZixlQUFlYyxFQUFFRSxNQUFNLENBQUNDLEtBQUs7WUFDN0JiLFFBQVE7UUFDVjtJQUNGO0lBRUEsTUFBTWMsZ0JBQWdCLENBQUNILEtBQTBCRTtRQUMvQ2YsV0FBVyxDQUFDaUI7WUFDVixNQUFNQyxpQkFBaUI7Z0JBQUUsR0FBR0QsV0FBVztZQUFDO1lBRXZDQyxjQUFzQixDQUFDTCxJQUFJLEdBQUdFO1lBRS9CYixRQUFRO1lBRVIsT0FBT2dCO1FBQ1Q7SUFDRjtJQUVBLE1BQU1DLGVBQWVWLFdBQVcsRUFBRTtJQUVsQyxxQkFDRSw4REFBQ3BCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDM0IscURBQVdBO2dCQUFDZ0QsVUFBVUE7Ozs7OzswQkFDdkIsOERBQUMzQyxpRUFBaUJBO2dCQUFDZ0QsZUFBZUE7Z0JBQWVqQixTQUFTQTs7Ozs7O1lBRXpESSxzQkFDQyw4REFBQ2Q7MEJBQUk7Ozs7OzRCQUNIZSwwQkFDRiw4REFBQ2hCOzs7OzRCQUNDK0IsYUFBYUMsTUFBTSxLQUFLLEtBQUtmLFdBQVcsMEJBQzFDLDhEQUFDZ0I7MEJBQUU7Ozs7OzBDQUVIOztrQ0FDRSw4REFBQ2hDO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNaNkIsYUFBYTFCLEdBQUcsQ0FBQyxDQUFDNkIscUJBQ2pCLDhEQUFDQztnQ0FBMEJELE1BQU1BOytCQUFmQSxLQUFLRSxFQUFFOzs7Ozs7Ozs7Ozs7MEJBTWpDLDhEQUFDbkM7Z0JBQUlDLFdBQVU7Ozs7OzswQkFFZiw4REFBQ3ZCLHlEQUFhQTtnQkFDWjBELGFBQWFwRDtnQkFDYjZCLFNBQVNBO2dCQUNUd0IsWUFBWWhCOzs7Ozs7Ozs7Ozs7QUFJcEIsRUFBRTtHQXRFV2Q7O1FBVWdDaEMsMkRBQVFBOzs7TUFWeENnQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0dhbGxlcnkudHN4P2NjMmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFNlYXJjaElucHV0IH0gZnJvbSBcIi4vU2VhcmNoSW5wdXRcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NrZWxldG9uXCI7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQmFyIH0gZnJvbSBcIi4vUGFnaW5hdGlvbkJhclwiO1xuaW1wb3J0IHsgU29ydEZpbHRlclRvb2xiYXIgfSBmcm9tIFwiLi9Tb3J0RmlsdGVyVG9vbGJhclwiO1xuaW1wb3J0IHsgQ29sb3IsIE9yZGVyQnkgfSBmcm9tIFwiQC9saWIvZmlsdGVyc1wiO1xuaW1wb3J0IHsgU2VhcmNoUmVzcG9uc2UgfSBmcm9tIFwiQC9saWIvc2VhcmNoLXJlc3VsdFwiO1xuXG5pbnRlcmZhY2UgRmlsdGVyU3RhdGUge1xuICBvcmRlckJ5OiBPcmRlckJ5O1xuICBjb2xvcjogQ29sb3I7XG59XG5cbi8vIFRPRE86IE1vdmUgQVBJIGNhbGwgdG8gc2VydmVyIHNpZGUsIGVudmlyb25tZW50IHZhcmlhYmxlIHNob3VsZCBub3QgYmUgZXhwb3NlZFxuY29uc3Qgc2VhcmNoUGhvdG9zID0gYXN5bmMgKFxuICBxdWVyeTogc3RyaW5nLFxuICBwYWdlOiBudW1iZXIsXG4gIHsgY29sb3IsIG9yZGVyQnk6IG9yZGVyX2J5IH06IEZpbHRlclN0YXRlXG4pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2FwaS51bnNwbGFzaC5jb20vc2VhcmNoL3Bob3Rvc1wiLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VOU1BMQVNIX0FDQ0VTU19LRVksXG4gICAgICBjb2xvcjogY29sb3IgPT09IENvbG9yLmFsbCA/IHVuZGVmaW5lZCA6IGNvbG9yLFxuICAgICAgb3JkZXJfYnksXG4gICAgICBwYWdlLFxuICAgICAgcGVyX3BhZ2U6IDksXG4gICAgICBxdWVyeSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzcG9uc2U/LmRhdGEgYXMgU2VhcmNoUmVzcG9uc2U7XG59O1xuXG5jb25zdCBMb2FkaW5nR2FsbGVyeSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FwLTQgZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtM1wiPlxuICAgICAgICB7QXJyYXkoOSlcbiAgICAgICAgICAuZmlsbCgxKVxuICAgICAgICAgIC5tYXAoKF9lbGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgIDxTa2VsZXRvbiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwidy02MCBoLTYwXCIgLz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEdhbGxlcnkgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGU8RmlsdGVyU3RhdGU+KHtcbiAgICBvcmRlckJ5OiBPcmRlckJ5LkxBVEVTVCxcbiAgICBjb2xvcjogQ29sb3IuYWxsLFxuICB9KTtcblxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcsIHN0YXR1cyB9ID0gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5S2V5OiBbXCJzZWFyY2hcIiwgc2VhcmNoSW5wdXQsIHBhZ2UsIGZpbHRlcnNdLFxuICAgIHF1ZXJ5Rm46ICgpID0+IHNlYXJjaFBob3RvcyhzZWFyY2hJbnB1dCwgcGFnZSwgZmlsdGVycyksXG4gICAgZW5hYmxlZDogISFzZWFyY2hJbnB1dCxcbiAgfSk7XG5cbiAgY29uc3QgeyByZXN1bHRzLCB0b3RhbF9wYWdlcyB9ID0gZGF0YSB8fCB7fTtcblxuICBjb25zdCBvbkNoYW5nZSA9IGFzeW5jIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHNldFBhZ2UoMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUZpbHRlcnMgPSAoa2V5OiBcIm9yZGVyQnlcIiB8IFwiY29sb3JcIiwgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHNldEZpbHRlcnMoKHByZXZGaWx0ZXJzKSA9PiB7XG4gICAgICBjb25zdCB1cGRhdGVkRmlsdGVycyA9IHsgLi4ucHJldkZpbHRlcnMgfTtcblxuICAgICAgKHVwZGF0ZWRGaWx0ZXJzIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuXG4gICAgICBzZXRQYWdlKDEpO1xuXG4gICAgICByZXR1cm4gdXBkYXRlZEZpbHRlcnM7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2FsbGVyeUl0ZW1zID0gcmVzdWx0cyB8fCBbXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8U2VhcmNoSW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgPFNvcnRGaWx0ZXJUb29sYmFyIHVwZGF0ZUZpbHRlcnM9e3VwZGF0ZUZpbHRlcnN9IGZpbHRlcnM9e2ZpbHRlcnN9IC8+XG5cbiAgICAgIHtlcnJvciA/IChcbiAgICAgICAgPGRpdj5UaGVyZSB3YXMgYW4gaXNzdWUgZmV0Y2hpbmcgcGhvdG9zLjwvZGl2PlxuICAgICAgKSA6IGlzTG9hZGluZyA/IChcbiAgICAgICAgPExvYWRpbmdHYWxsZXJ5IC8+XG4gICAgICApIDogZ2FsbGVyeUl0ZW1zLmxlbmd0aCA9PT0gMCAmJiBzdGF0dXMgPT09IFwic3VjY2Vzc1wiID8gKFxuICAgICAgICA8cD5ObyBpdGVtcyBtYXRjaGVkIHlvdXIgcXVlcnkuPC9wPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTJcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FwLTQgZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtM1wiPlxuICAgICAgICAgICAge2dhbGxlcnlJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPEdhbGxlcnlJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNFwiIC8+XG5cbiAgICAgIDxQYWdpbmF0aW9uQmFyXG4gICAgICAgIGN1cnJlbnRQYWdlPXtwYWdlfVxuICAgICAgICBzZXRQYWdlPXtzZXRQYWdlfVxuICAgICAgICB0b3RhbFBhZ2VzPXt0b3RhbF9wYWdlc31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiU2VhcmNoSW5wdXQiLCJ1c2VRdWVyeSIsInVzZVN0YXRlIiwiU2tlbGV0b24iLCJQYWdpbmF0aW9uQmFyIiwiU29ydEZpbHRlclRvb2xiYXIiLCJDb2xvciIsIk9yZGVyQnkiLCJzZWFyY2hQaG90b3MiLCJxdWVyeSIsInBhZ2UiLCJjb2xvciIsIm9yZGVyQnkiLCJvcmRlcl9ieSIsInJlc3BvbnNlIiwiZ2V0IiwicGFyYW1zIiwiY2xpZW50X2lkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1VOU1BMQVNIX0FDQ0VTU19LRVkiLCJhbGwiLCJ1bmRlZmluZWQiLCJwZXJfcGFnZSIsImRhdGEiLCJMb2FkaW5nR2FsbGVyeSIsImRpdiIsImNsYXNzTmFtZSIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl9lbGVtIiwiaWR4IiwiR2FsbGVyeSIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsIkxBVEVTVCIsInNldFBhZ2UiLCJlcnJvciIsImlzTG9hZGluZyIsInN0YXR1cyIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImVuYWJsZWQiLCJyZXN1bHRzIiwidG90YWxfcGFnZXMiLCJvbkNoYW5nZSIsImUiLCJrZXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVwZGF0ZUZpbHRlcnMiLCJwcmV2RmlsdGVycyIsInVwZGF0ZWRGaWx0ZXJzIiwiZ2FsbGVyeUl0ZW1zIiwibGVuZ3RoIiwicCIsIml0ZW0iLCJHYWxsZXJ5SXRlbSIsImlkIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Gallery.tsx\n"));

/***/ })

});