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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gallery: function() { return /* binding */ Gallery; },\n/* harmony export */   searchPhotos: function() { return /* binding */ searchPhotos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchInput */ \"(app-pages-browser)/./src/app/SearchInput.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./src/components/ui/skeleton.tsx\");\n/* harmony import */ var _PaginationBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PaginationBar */ \"(app-pages-browser)/./src/app/PaginationBar.tsx\");\n/* harmony import */ var _SortFilterToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SortFilterToolbar */ \"(app-pages-browser)/./src/app/SortFilterToolbar.tsx\");\n/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! unsplash-js */ \"(app-pages-browser)/./node_modules/unsplash-js/dist/unsplash-js.esm.js\");\n/* harmony import */ var _lib_filters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/filters */ \"(app-pages-browser)/./src/lib/filters.ts\");\n/* __next_internal_client_entry_do_not_use__ searchPhotos,Gallery auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n// TODO: Move API call to server side, environment variable should not be exposed\nasync function searchPhotos(query, page, param) {\n    let { color, orderBy: order_by } = param;\n    const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"https://api.unsplash.com/search/photos\", {\n        params: {\n            client_id: \"ukJyK7f_oSD8sRs6GytnZxaxCnv8XCiFi05QKrF_BeQ\",\n            color: color === _lib_filters__WEBPACK_IMPORTED_MODULE_7__.Color.all ? undefined : color,\n            order_by,\n            page,\n            per_page: 9,\n            query\n        }\n    });\n    return response === null || response === void 0 ? void 0 : response.data;\n}\nconst LoadingGallery = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-2\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                children: Array(9).fill(1).map((_elem, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {\n                        className: \"w-60 h-60\"\n                    }, idx, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = LoadingGallery;\nconst GalleryItem = (param)=>{\n    let { item } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative aspect-square\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            alt: item.alt_description,\n            className: \"object-cover\",\n            fill: true,\n            src: item.urls.regular\n        }, void 0, false, {\n            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = GalleryItem;\nconst Gallery = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        orderBy: unsplash_js__WEBPACK_IMPORTED_MODULE_9__.OrderBy.LATEST,\n        color: _lib_filters__WEBPACK_IMPORTED_MODULE_7__.Color.all\n    });\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const { data, error, isLoading, status } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useQuery)({\n        queryKey: [\n            \"search\",\n            searchInput,\n            page,\n            filters\n        ],\n        queryFn: ()=>searchPhotos(searchInput, page, filters),\n        enabled: !!searchInput\n    });\n    console.log(status);\n    const { results, total_pages } = data || {};\n    const onChange = async (e)=>{\n        if (e.key === \"Enter\") {\n            setSearchInput(e.target.value);\n            setPage(1);\n        }\n    };\n    const updateFilters = (key, value)=>{\n        setFilters((prevFilters)=>{\n            const updatedFilters = {\n                ...prevFilters\n            };\n            updatedFilters[key] = value;\n            // setPage(1);\n            return updatedFilters;\n        });\n    };\n    const galleryItems = results || [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchInput__WEBPACK_IMPORTED_MODULE_2__.SearchInput, {\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortFilterToolbar__WEBPACK_IMPORTED_MODULE_6__.SortFilterToolbar, {\n                updateFilters: updateFilters,\n                filters: filters\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined),\n            error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"There was an issue fetching photos.\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 128,\n                columnNumber: 9\n            }, undefined) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadingGallery, {}, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 130,\n                columnNumber: 9\n            }, undefined) : galleryItems.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No results\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 132,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                        children: galleryItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GalleryItem, {\n                                item: item\n                            }, item.id, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 138,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PaginationBar__WEBPACK_IMPORTED_MODULE_5__.PaginationBar, {\n                currentPage: page,\n                setPage: setPage,\n                totalPages: total_pages\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n        lineNumber: 123,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Gallery, \"IRJdXg6DjRQFk+SuYW+4MXa1NaU=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useQuery\n    ];\n});\n_c2 = Gallery;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"LoadingGallery\");\n$RefreshReg$(_c1, \"GalleryItem\");\n$RefreshReg$(_c2, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvR2FsbGVyeS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUVMO0FBQ2tCO0FBQ0s7QUFDaEI7QUFFbUI7QUFDSjtBQUNRO0FBQ2xCO0FBQ0E7QUFxQnRDLGlGQUFpRjtBQUMxRSxlQUFlVSxhQUNwQkMsS0FBYSxFQUNiQyxJQUFZLEVBQ1osS0FBeUM7UUFBekMsRUFBRUMsS0FBSyxFQUFFQyxTQUFTQyxRQUFRLEVBQWUsR0FBekM7SUFFQSxNQUFNQyxXQUFXLE1BQU1mLDZDQUFLQSxDQUFDZ0IsR0FBRyxDQUFDLDBDQUEwQztRQUN6RUMsUUFBUTtZQUNOQyxXQUFXQyw2Q0FBMkM7WUFDdERQLE9BQU9BLFVBQVVKLCtDQUFLQSxDQUFDYyxHQUFHLEdBQUdDLFlBQVlYO1lBQ3pDRTtZQUNBSDtZQUNBYSxVQUFVO1lBQ1ZkO1FBQ0Y7SUFDRjtJQUVBLE9BQU9LLHFCQUFBQSwrQkFBQUEsU0FBVVUsSUFBSTtBQUN2QjtBQUVBLE1BQU1DLGlCQUFpQjtJQUNyQixxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFJQyxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaQyxNQUFNLEdBQ0pDLElBQUksQ0FBQyxHQUNMQyxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msb0JBQ1gsOERBQUM3Qiw2REFBUUE7d0JBQVd3QixXQUFVO3VCQUFmSzs7Ozs7Ozs7Ozs7O0FBSzNCO0tBYk1QO0FBZU4sTUFBTVEsY0FBYztRQUFDLEVBQUVDLElBQUksRUFBMEI7SUFDbkQscUJBQ0UsOERBQUNSO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUM3QixrREFBS0E7WUFDSnFDLEtBQUtELEtBQUtFLGVBQWU7WUFDekJULFdBQVU7WUFDVkUsSUFBSTtZQUNKUSxLQUFLSCxLQUFLSSxJQUFJLENBQUNDLE9BQU87Ozs7Ozs7Ozs7O0FBSTlCO01BWE1OO0FBYUMsTUFBTU8sVUFBVTs7SUFDckIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUd4QywrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNLENBQUN5QyxTQUFTQyxXQUFXLEdBQUcxQywrQ0FBUUEsQ0FBYztRQUNsRFUsU0FBU04sZ0RBQU9BLENBQUN1QyxNQUFNO1FBQ3ZCbEMsT0FBT0osK0NBQUtBLENBQUNjLEdBQUc7SUFDbEI7SUFFQSxNQUFNLENBQUNYLE1BQU1vQyxRQUFRLEdBQUc1QywrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNLEVBQUVzQixJQUFJLEVBQUV1QixLQUFLLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFLEdBQUdoRCxnRUFBUUEsQ0FBQztRQUNsRGlELFVBQVU7WUFBQztZQUFVVDtZQUFhL0I7WUFBTWlDO1NBQVE7UUFDaERRLFNBQVMsSUFBTTNDLGFBQWFpQyxhQUFhL0IsTUFBTWlDO1FBQy9DUyxTQUFTLENBQUMsQ0FBQ1g7SUFDYjtJQUVBWSxRQUFRQyxHQUFHLENBQUNMO0lBRVosTUFBTSxFQUFFTSxPQUFPLEVBQUVDLFdBQVcsRUFBRSxHQUFHaEMsUUFBUSxDQUFDO0lBRTFDLE1BQU1pQyxXQUFXLE9BQU9DO1FBQ3RCLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxTQUFTO1lBQ3JCakIsZUFBZWdCLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztZQUM3QmYsUUFBUTtRQUNWO0lBQ0Y7SUFFQSxNQUFNZ0IsZ0JBQWdCLENBQUNILEtBQTBCRTtRQUMvQ2pCLFdBQVcsQ0FBQ21CO1lBQ1YsTUFBTUMsaUJBQWlCO2dCQUFFLEdBQUdELFdBQVc7WUFBQztZQUN2Q0MsY0FBc0IsQ0FBQ0wsSUFBSSxHQUFHRTtZQUUvQixjQUFjO1lBRWQsT0FBT0c7UUFDVDtJQUNGO0lBRUEsTUFBTUMsZUFBZVYsV0FBVyxFQUFFO0lBRWxDLHFCQUNFLDhEQUFDN0I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUMzQixxREFBV0E7Z0JBQUN5RCxVQUFVQTs7Ozs7OzBCQUN2Qiw4REFBQ3BELGlFQUFpQkE7Z0JBQUN5RCxlQUFlQTtnQkFBZW5CLFNBQVNBOzs7Ozs7WUFFekRJLHNCQUNDLDhEQUFDckI7MEJBQUk7Ozs7OzRCQUNIc0IsMEJBQ0YsOERBQUN2Qjs7Ozs0QkFDQ3dDLGFBQWFDLE1BQU0sS0FBSyxrQkFDMUIsOERBQUNDOzBCQUFFOzs7OzswQ0FFSDs7a0NBQ0UsOERBQUN6Qzt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWnNDLGFBQWFuQyxHQUFHLENBQUMsQ0FBQ0kscUJBQ2pCLDhEQUFDRDtnQ0FBMEJDLE1BQU1BOytCQUFmQSxLQUFLa0MsRUFBRTs7Ozs7Ozs7Ozs7OzBCQU1qQyw4REFBQzFDO2dCQUFJQyxXQUFVOzs7Ozs7MEJBRWYsOERBQUN2Qix5REFBYUE7Z0JBQ1ppRSxhQUFhM0Q7Z0JBQ2JvQyxTQUFTQTtnQkFDVHdCLFlBQVlkOzs7Ozs7Ozs7Ozs7QUFJcEIsRUFBRTtHQXZFV2hCOztRQVVnQ3ZDLDREQUFRQTs7O01BVnhDdUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9HYWxsZXJ5LnRzeD9jYzJmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFNlYXJjaElucHV0IH0gZnJvbSBcIi4vU2VhcmNoSW5wdXRcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NrZWxldG9uXCI7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQmFyIH0gZnJvbSBcIi4vUGFnaW5hdGlvbkJhclwiO1xuaW1wb3J0IHsgU29ydEZpbHRlclRvb2xiYXIgfSBmcm9tIFwiLi9Tb3J0RmlsdGVyVG9vbGJhclwiO1xuaW1wb3J0IHsgT3JkZXJCeSB9IGZyb20gXCJ1bnNwbGFzaC1qc1wiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiQC9saWIvZmlsdGVyc1wiO1xuXG5pbnRlcmZhY2UgU2VhcmNoUmVzdWx0IHtcbiAgaWQ6IHN0cmluZztcbiAgdXJsczoge1xuICAgIHJlZ3VsYXI6IHN0cmluZztcbiAgfTtcbiAgYWx0X2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTZWFyY2hSZXNwb25zZSB7XG4gIHJlc3VsdHM6IFNlYXJjaFJlc3VsdFtdO1xuICB0b3RhbDogbnVtYmVyO1xuICB0b3RhbF9wYWdlczogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgRmlsdGVyU3RhdGUge1xuICBvcmRlckJ5OiBPcmRlckJ5O1xuICBjb2xvcjogQ29sb3I7XG59XG5cbi8vIFRPRE86IE1vdmUgQVBJIGNhbGwgdG8gc2VydmVyIHNpZGUsIGVudmlyb25tZW50IHZhcmlhYmxlIHNob3VsZCBub3QgYmUgZXhwb3NlZFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFBob3RvcyhcbiAgcXVlcnk6IHN0cmluZyxcbiAgcGFnZTogbnVtYmVyLFxuICB7IGNvbG9yLCBvcmRlckJ5OiBvcmRlcl9ieSB9OiBGaWx0ZXJTdGF0ZVxuKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3NlYXJjaC9waG90b3NcIiwge1xuICAgIHBhcmFtczoge1xuICAgICAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VTlNQTEFTSF9BQ0NFU1NfS0VZLFxuICAgICAgY29sb3I6IGNvbG9yID09PSBDb2xvci5hbGwgPyB1bmRlZmluZWQgOiBjb2xvcixcbiAgICAgIG9yZGVyX2J5LFxuICAgICAgcGFnZSxcbiAgICAgIHBlcl9wYWdlOiA5LFxuICAgICAgcXVlcnksXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlPy5kYXRhIGFzIFNlYXJjaFJlc3BvbnNlO1xufVxuXG5jb25zdCBMb2FkaW5nR2FsbGVyeSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FwLTQgZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtM1wiPlxuICAgICAgICB7QXJyYXkoOSlcbiAgICAgICAgICAuZmlsbCgxKVxuICAgICAgICAgIC5tYXAoKF9lbGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgIDxTa2VsZXRvbiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwidy02MCBoLTYwXCIgLz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgR2FsbGVyeUl0ZW0gPSAoeyBpdGVtIH06IHsgaXRlbTogU2VhcmNoUmVzdWx0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGFzcGVjdC1zcXVhcmVcIj5cbiAgICAgIDxJbWFnZVxuICAgICAgICBhbHQ9e2l0ZW0uYWx0X2Rlc2NyaXB0aW9ufVxuICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXJcIlxuICAgICAgICBmaWxsXG4gICAgICAgIHNyYz17aXRlbS51cmxzLnJlZ3VsYXJ9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEdhbGxlcnkgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGU8RmlsdGVyU3RhdGU+KHtcbiAgICBvcmRlckJ5OiBPcmRlckJ5LkxBVEVTVCxcbiAgICBjb2xvcjogQ29sb3IuYWxsLFxuICB9KTtcblxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcsIHN0YXR1cyB9ID0gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5S2V5OiBbXCJzZWFyY2hcIiwgc2VhcmNoSW5wdXQsIHBhZ2UsIGZpbHRlcnNdLFxuICAgIHF1ZXJ5Rm46ICgpID0+IHNlYXJjaFBob3RvcyhzZWFyY2hJbnB1dCwgcGFnZSwgZmlsdGVycyksXG4gICAgZW5hYmxlZDogISFzZWFyY2hJbnB1dCxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coc3RhdHVzKTtcblxuICBjb25zdCB7IHJlc3VsdHMsIHRvdGFsX3BhZ2VzIH0gPSBkYXRhIHx8IHt9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gYXN5bmMgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgc2V0UGFnZSgxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRmlsdGVycyA9IChrZXk6IFwib3JkZXJCeVwiIHwgXCJjb2xvclwiLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0RmlsdGVycygocHJldkZpbHRlcnMpID0+IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRGaWx0ZXJzID0geyAuLi5wcmV2RmlsdGVycyB9O1xuICAgICAgKHVwZGF0ZWRGaWx0ZXJzIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuXG4gICAgICAvLyBzZXRQYWdlKDEpO1xuXG4gICAgICByZXR1cm4gdXBkYXRlZEZpbHRlcnM7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2FsbGVyeUl0ZW1zID0gcmVzdWx0cyB8fCBbXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8U2VhcmNoSW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgPFNvcnRGaWx0ZXJUb29sYmFyIHVwZGF0ZUZpbHRlcnM9e3VwZGF0ZUZpbHRlcnN9IGZpbHRlcnM9e2ZpbHRlcnN9IC8+XG5cbiAgICAgIHtlcnJvciA/IChcbiAgICAgICAgPGRpdj5UaGVyZSB3YXMgYW4gaXNzdWUgZmV0Y2hpbmcgcGhvdG9zLjwvZGl2PlxuICAgICAgKSA6IGlzTG9hZGluZyA/IChcbiAgICAgICAgPExvYWRpbmdHYWxsZXJ5IC8+XG4gICAgICApIDogZ2FsbGVyeUl0ZW1zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPHA+Tm8gcmVzdWx0czwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhcC00IGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICAgIHtnYWxsZXJ5SXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxHYWxsZXJ5SXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIiAvPlxuXG4gICAgICA8UGFnaW5hdGlvbkJhclxuICAgICAgICBjdXJyZW50UGFnZT17cGFnZX1cbiAgICAgICAgc2V0UGFnZT17c2V0UGFnZX1cbiAgICAgICAgdG90YWxQYWdlcz17dG90YWxfcGFnZXN9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsImF4aW9zIiwiU2VhcmNoSW5wdXQiLCJ1c2VRdWVyeSIsInVzZVN0YXRlIiwiU2tlbGV0b24iLCJQYWdpbmF0aW9uQmFyIiwiU29ydEZpbHRlclRvb2xiYXIiLCJPcmRlckJ5IiwiQ29sb3IiLCJzZWFyY2hQaG90b3MiLCJxdWVyeSIsInBhZ2UiLCJjb2xvciIsIm9yZGVyQnkiLCJvcmRlcl9ieSIsInJlc3BvbnNlIiwiZ2V0IiwicGFyYW1zIiwiY2xpZW50X2lkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1VOU1BMQVNIX0FDQ0VTU19LRVkiLCJhbGwiLCJ1bmRlZmluZWQiLCJwZXJfcGFnZSIsImRhdGEiLCJMb2FkaW5nR2FsbGVyeSIsImRpdiIsImNsYXNzTmFtZSIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl9lbGVtIiwiaWR4IiwiR2FsbGVyeUl0ZW0iLCJpdGVtIiwiYWx0IiwiYWx0X2Rlc2NyaXB0aW9uIiwic3JjIiwidXJscyIsInJlZ3VsYXIiLCJHYWxsZXJ5Iiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwiTEFURVNUIiwic2V0UGFnZSIsImVycm9yIiwiaXNMb2FkaW5nIiwic3RhdHVzIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiZW5hYmxlZCIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwidG90YWxfcGFnZXMiLCJvbkNoYW5nZSIsImUiLCJrZXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVwZGF0ZUZpbHRlcnMiLCJwcmV2RmlsdGVycyIsInVwZGF0ZWRGaWx0ZXJzIiwiZ2FsbGVyeUl0ZW1zIiwibGVuZ3RoIiwicCIsImlkIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Gallery.tsx\n"));

/***/ })

});