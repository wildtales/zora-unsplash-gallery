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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gallery: function() { return /* binding */ Gallery; },\n/* harmony export */   searchPhotos: function() { return /* binding */ searchPhotos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchInput */ \"(app-pages-browser)/./src/app/SearchInput.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./src/components/ui/skeleton.tsx\");\n/* harmony import */ var _PaginationBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PaginationBar */ \"(app-pages-browser)/./src/app/PaginationBar.tsx\");\n/* harmony import */ var _SortFilterToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SortFilterToolbar */ \"(app-pages-browser)/./src/app/SortFilterToolbar.tsx\");\n/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! unsplash-js */ \"(app-pages-browser)/./node_modules/unsplash-js/dist/unsplash-js.esm.js\");\n/* harmony import */ var _lib_filters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/filters */ \"(app-pages-browser)/./src/lib/filters.ts\");\n/* __next_internal_client_entry_do_not_use__ searchPhotos,Gallery auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n// TODO: Move API call to server side, environment variable should not be exposed\nasync function searchPhotos(query, page, param) {\n    let { color, orderBy: order_by } = param;\n    console.log(\"orderBy\", order_by);\n    const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"https://api.unsplash.com/search/photos\", {\n        params: {\n            client_id: \"ukJyK7f_oSD8sRs6GytnZxaxCnv8XCiFi05QKrF_BeQ\",\n            color: color === _lib_filters__WEBPACK_IMPORTED_MODULE_7__.Color.all ? undefined : color,\n            order_by,\n            page,\n            per_page: 9,\n            query\n        }\n    });\n    return response === null || response === void 0 ? void 0 : response.data;\n}\nconst LoadingGallery = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-2\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                children: Array(9).fill(1).map((_elem, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {\n                        className: \"w-60 h-60\"\n                    }, idx, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = LoadingGallery;\nconst GalleryItem = (param)=>{\n    let { item } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative aspect-square\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            alt: item.alt_description,\n            className: \"object-cover\",\n            fill: true,\n            src: item.urls.regular\n        }, void 0, false, {\n            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = GalleryItem;\nconst Gallery = ()=>{\n    _s();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        orderBy: unsplash_js__WEBPACK_IMPORTED_MODULE_9__.OrderBy.LATEST,\n        color: _lib_filters__WEBPACK_IMPORTED_MODULE_7__.Color.all\n    });\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const { data, error, isLoading, status } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useQuery)({\n        queryKey: [\n            \"search\",\n            searchInput,\n            page,\n            filters\n        ],\n        queryFn: ()=>searchPhotos(searchInput, page, filters),\n        enabled: !!searchInput\n    });\n    const { results, total_pages } = data || {};\n    const onChange = async (e)=>{\n        if (e.key === \"Enter\") {\n            setSearchInput(e.target.value);\n            setPage(1);\n        }\n    };\n    const updateFilters = (key, value)=>{\n        setFilters((prevFilters)=>{\n            const updatedFilters = {\n                ...prevFilters\n            };\n            updatedFilters[key] = value;\n            // setPage(1);\n            return updatedFilters;\n        });\n    };\n    const galleryItems = results || [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchInput__WEBPACK_IMPORTED_MODULE_2__.SearchInput, {\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortFilterToolbar__WEBPACK_IMPORTED_MODULE_6__.SortFilterToolbar, {\n                updateFilters: updateFilters,\n                filters: filters\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined),\n            error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"There was an issue fetching photos.\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 128,\n                columnNumber: 9\n            }, undefined) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadingGallery, {}, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 130,\n                columnNumber: 9\n            }, undefined) : galleryItems.length === 0 && status === \"success\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No items matched your query.\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 132,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\",\n                        children: galleryItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GalleryItem, {\n                                item: item\n                            }, item.id, false, {\n                                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                                lineNumber: 138,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-4\"\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PaginationBar__WEBPACK_IMPORTED_MODULE_5__.PaginationBar, {\n                currentPage: page,\n                setPage: setPage,\n                totalPages: total_pages\n            }, void 0, false, {\n                fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/Gallery.tsx\",\n        lineNumber: 123,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Gallery, \"IRJdXg6DjRQFk+SuYW+4MXa1NaU=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useQuery\n    ];\n});\n_c2 = Gallery;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"LoadingGallery\");\n$RefreshReg$(_c1, \"GalleryItem\");\n$RefreshReg$(_c2, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvR2FsbGVyeS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUVMO0FBQ2tCO0FBQ0s7QUFDaEI7QUFFbUI7QUFDSjtBQUNRO0FBQ2xCO0FBQ0E7QUFxQnRDLGlGQUFpRjtBQUMxRSxlQUFlVSxhQUNwQkMsS0FBYSxFQUNiQyxJQUFZLEVBQ1osS0FBeUM7UUFBekMsRUFBRUMsS0FBSyxFQUFFQyxTQUFTQyxRQUFRLEVBQWUsR0FBekM7SUFFQUMsUUFBUUMsR0FBRyxDQUFDLFdBQVdGO0lBQ3ZCLE1BQU1HLFdBQVcsTUFBTWpCLDZDQUFLQSxDQUFDa0IsR0FBRyxDQUFDLDBDQUEwQztRQUN6RUMsUUFBUTtZQUNOQyxXQUFXQyw2Q0FBMkM7WUFDdERULE9BQU9BLFVBQVVKLCtDQUFLQSxDQUFDZ0IsR0FBRyxHQUFHQyxZQUFZYjtZQUN6Q0U7WUFDQUg7WUFDQWUsVUFBVTtZQUNWaEI7UUFDRjtJQUNGO0lBRUEsT0FBT08scUJBQUFBLCtCQUFBQSxTQUFVVSxJQUFJO0FBQ3ZCO0FBRUEsTUFBTUMsaUJBQWlCO0lBQ3JCLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQUlDLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pDLE1BQU0sR0FDSkMsSUFBSSxDQUFDLEdBQ0xDLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxvQkFDWCw4REFBQy9CLDZEQUFRQTt3QkFBVzBCLFdBQVU7dUJBQWZLOzs7Ozs7Ozs7Ozs7QUFLM0I7S0FiTVA7QUFlTixNQUFNUSxjQUFjO1FBQUMsRUFBRUMsSUFBSSxFQUEwQjtJQUNuRCxxQkFDRSw4REFBQ1I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQy9CLGtEQUFLQTtZQUNKdUMsS0FBS0QsS0FBS0UsZUFBZTtZQUN6QlQsV0FBVTtZQUNWRSxJQUFJO1lBQ0pRLEtBQUtILEtBQUtJLElBQUksQ0FBQ0MsT0FBTzs7Ozs7Ozs7Ozs7QUFJOUI7TUFYTU47QUFhQyxNQUFNTyxVQUFVOztJQUNyQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBRzFDLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU0sQ0FBQzJDLFNBQVNDLFdBQVcsR0FBRzVDLCtDQUFRQSxDQUFjO1FBQ2xEVSxTQUFTTixnREFBT0EsQ0FBQ3lDLE1BQU07UUFDdkJwQyxPQUFPSiwrQ0FBS0EsQ0FBQ2dCLEdBQUc7SUFDbEI7SUFFQSxNQUFNLENBQUNiLE1BQU1zQyxRQUFRLEdBQUc5QywrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNLEVBQUV3QixJQUFJLEVBQUV1QixLQUFLLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFLEdBQUdsRCxnRUFBUUEsQ0FBQztRQUNsRG1ELFVBQVU7WUFBQztZQUFVVDtZQUFhakM7WUFBTW1DO1NBQVE7UUFDaERRLFNBQVMsSUFBTTdDLGFBQWFtQyxhQUFhakMsTUFBTW1DO1FBQy9DUyxTQUFTLENBQUMsQ0FBQ1g7SUFDYjtJQUVBLE1BQU0sRUFBRVksT0FBTyxFQUFFQyxXQUFXLEVBQUUsR0FBRzlCLFFBQVEsQ0FBQztJQUUxQyxNQUFNK0IsV0FBVyxPQUFPQztRQUN0QixJQUFJQSxFQUFFQyxHQUFHLEtBQUssU0FBUztZQUNyQmYsZUFBZWMsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO1lBQzdCYixRQUFRO1FBQ1Y7SUFDRjtJQUVBLE1BQU1jLGdCQUFnQixDQUFDSCxLQUEwQkU7UUFDL0NmLFdBQVcsQ0FBQ2lCO1lBQ1YsTUFBTUMsaUJBQWlCO2dCQUFFLEdBQUdELFdBQVc7WUFBQztZQUV2Q0MsY0FBc0IsQ0FBQ0wsSUFBSSxHQUFHRTtZQUUvQixjQUFjO1lBRWQsT0FBT0c7UUFDVDtJQUNGO0lBRUEsTUFBTUMsZUFBZVYsV0FBVyxFQUFFO0lBRWxDLHFCQUNFLDhEQUFDM0I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUM3QixxREFBV0E7Z0JBQUN5RCxVQUFVQTs7Ozs7OzBCQUN2Qiw4REFBQ3BELGlFQUFpQkE7Z0JBQUN5RCxlQUFlQTtnQkFBZWpCLFNBQVNBOzs7Ozs7WUFFekRJLHNCQUNDLDhEQUFDckI7MEJBQUk7Ozs7OzRCQUNIc0IsMEJBQ0YsOERBQUN2Qjs7Ozs0QkFDQ3NDLGFBQWFDLE1BQU0sS0FBSyxLQUFLZixXQUFXLDBCQUMxQyw4REFBQ2dCOzBCQUFFOzs7OzswQ0FFSDs7a0NBQ0UsOERBQUN2Qzt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWm9DLGFBQWFqQyxHQUFHLENBQUMsQ0FBQ0kscUJBQ2pCLDhEQUFDRDtnQ0FBMEJDLE1BQU1BOytCQUFmQSxLQUFLZ0MsRUFBRTs7Ozs7Ozs7Ozs7OzBCQU1qQyw4REFBQ3hDO2dCQUFJQyxXQUFVOzs7Ozs7MEJBRWYsOERBQUN6Qix5REFBYUE7Z0JBQ1ppRSxhQUFhM0Q7Z0JBQ2JzQyxTQUFTQTtnQkFDVHNCLFlBQVlkOzs7Ozs7Ozs7Ozs7QUFJcEIsRUFBRTtHQXRFV2Q7O1FBVWdDekMsNERBQVFBOzs7TUFWeEN5QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0dhbGxlcnkudHN4P2NjMmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgU2VhcmNoSW5wdXQgfSBmcm9tIFwiLi9TZWFyY2hJbnB1dFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2tlbGV0b25cIjtcbmltcG9ydCB7IFBhZ2luYXRpb25CYXIgfSBmcm9tIFwiLi9QYWdpbmF0aW9uQmFyXCI7XG5pbXBvcnQgeyBTb3J0RmlsdGVyVG9vbGJhciB9IGZyb20gXCIuL1NvcnRGaWx0ZXJUb29sYmFyXCI7XG5pbXBvcnQgeyBPcmRlckJ5IH0gZnJvbSBcInVuc3BsYXNoLWpzXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJAL2xpYi9maWx0ZXJzXCI7XG5cbmludGVyZmFjZSBTZWFyY2hSZXN1bHQge1xuICBpZDogc3RyaW5nO1xuICB1cmxzOiB7XG4gICAgcmVndWxhcjogc3RyaW5nO1xuICB9O1xuICBhbHRfZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNlYXJjaFJlc3BvbnNlIHtcbiAgcmVzdWx0czogU2VhcmNoUmVzdWx0W107XG4gIHRvdGFsOiBudW1iZXI7XG4gIHRvdGFsX3BhZ2VzOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBGaWx0ZXJTdGF0ZSB7XG4gIG9yZGVyQnk6IE9yZGVyQnk7XG4gIGNvbG9yOiBDb2xvcjtcbn1cblxuLy8gVE9ETzogTW92ZSBBUEkgY2FsbCB0byBzZXJ2ZXIgc2lkZSwgZW52aXJvbm1lbnQgdmFyaWFibGUgc2hvdWxkIG5vdCBiZSBleHBvc2VkXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoUGhvdG9zKFxuICBxdWVyeTogc3RyaW5nLFxuICBwYWdlOiBudW1iZXIsXG4gIHsgY29sb3IsIG9yZGVyQnk6IG9yZGVyX2J5IH06IEZpbHRlclN0YXRlXG4pIHtcbiAgY29uc29sZS5sb2coXCJvcmRlckJ5XCIsIG9yZGVyX2J5KTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2FwaS51bnNwbGFzaC5jb20vc2VhcmNoL3Bob3Rvc1wiLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VOU1BMQVNIX0FDQ0VTU19LRVksXG4gICAgICBjb2xvcjogY29sb3IgPT09IENvbG9yLmFsbCA/IHVuZGVmaW5lZCA6IGNvbG9yLFxuICAgICAgb3JkZXJfYnksXG4gICAgICBwYWdlLFxuICAgICAgcGVyX3BhZ2U6IDksXG4gICAgICBxdWVyeSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzcG9uc2U/LmRhdGEgYXMgU2VhcmNoUmVzcG9uc2U7XG59XG5cbmNvbnN0IExvYWRpbmdHYWxsZXJ5ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTJcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYXAtNCBncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zXCI+XG4gICAgICAgIHtBcnJheSg5KVxuICAgICAgICAgIC5maWxsKDEpXG4gICAgICAgICAgLm1hcCgoX2VsZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgPFNrZWxldG9uIGtleT17aWR4fSBjbGFzc05hbWU9XCJ3LTYwIGgtNjBcIiAvPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBHYWxsZXJ5SXRlbSA9ICh7IGl0ZW0gfTogeyBpdGVtOiBTZWFyY2hSZXN1bHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYXNwZWN0LXNxdWFyZVwiPlxuICAgICAgPEltYWdlXG4gICAgICAgIGFsdD17aXRlbS5hbHRfZGVzY3JpcHRpb259XG4gICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlclwiXG4gICAgICAgIGZpbGxcbiAgICAgICAgc3JjPXtpdGVtLnVybHMucmVndWxhcn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgR2FsbGVyeSA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSB1c2VTdGF0ZTxGaWx0ZXJTdGF0ZT4oe1xuICAgIG9yZGVyQnk6IE9yZGVyQnkuTEFURVNULFxuICAgIGNvbG9yOiBDb2xvci5hbGwsXG4gIH0pO1xuXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZywgc3RhdHVzIH0gPSB1c2VRdWVyeSh7XG4gICAgcXVlcnlLZXk6IFtcInNlYXJjaFwiLCBzZWFyY2hJbnB1dCwgcGFnZSwgZmlsdGVyc10sXG4gICAgcXVlcnlGbjogKCkgPT4gc2VhcmNoUGhvdG9zKHNlYXJjaElucHV0LCBwYWdlLCBmaWx0ZXJzKSxcbiAgICBlbmFibGVkOiAhIXNlYXJjaElucHV0LFxuICB9KTtcblxuICBjb25zdCB7IHJlc3VsdHMsIHRvdGFsX3BhZ2VzIH0gPSBkYXRhIHx8IHt9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gYXN5bmMgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgc2V0UGFnZSgxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRmlsdGVycyA9IChrZXk6IFwib3JkZXJCeVwiIHwgXCJjb2xvclwiLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0RmlsdGVycygocHJldkZpbHRlcnMpID0+IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRGaWx0ZXJzID0geyAuLi5wcmV2RmlsdGVycyB9O1xuXG4gICAgICAodXBkYXRlZEZpbHRlcnMgYXMgYW55KVtrZXldID0gdmFsdWU7XG5cbiAgICAgIC8vIHNldFBhZ2UoMSk7XG5cbiAgICAgIHJldHVybiB1cGRhdGVkRmlsdGVycztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnYWxsZXJ5SXRlbXMgPSByZXN1bHRzIHx8IFtdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxTZWFyY2hJbnB1dCBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICA8U29ydEZpbHRlclRvb2xiYXIgdXBkYXRlRmlsdGVycz17dXBkYXRlRmlsdGVyc30gZmlsdGVycz17ZmlsdGVyc30gLz5cblxuICAgICAge2Vycm9yID8gKFxuICAgICAgICA8ZGl2PlRoZXJlIHdhcyBhbiBpc3N1ZSBmZXRjaGluZyBwaG90b3MuPC9kaXY+XG4gICAgICApIDogaXNMb2FkaW5nID8gKFxuICAgICAgICA8TG9hZGluZ0dhbGxlcnkgLz5cbiAgICAgICkgOiBnYWxsZXJ5SXRlbXMubGVuZ3RoID09PSAwICYmIHN0YXR1cyA9PT0gXCJzdWNjZXNzXCIgPyAoXG4gICAgICAgIDxwPk5vIGl0ZW1zIG1hdGNoZWQgeW91ciBxdWVyeS48L3A+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMlwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYXAtNCBncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zXCI+XG4gICAgICAgICAgICB7Z2FsbGVyeUl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8R2FsbGVyeUl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCIgLz5cblxuICAgICAgPFBhZ2luYXRpb25CYXJcbiAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2V9XG4gICAgICAgIHNldFBhZ2U9e3NldFBhZ2V9XG4gICAgICAgIHRvdGFsUGFnZXM9e3RvdGFsX3BhZ2VzfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJheGlvcyIsIlNlYXJjaElucHV0IiwidXNlUXVlcnkiLCJ1c2VTdGF0ZSIsIlNrZWxldG9uIiwiUGFnaW5hdGlvbkJhciIsIlNvcnRGaWx0ZXJUb29sYmFyIiwiT3JkZXJCeSIsIkNvbG9yIiwic2VhcmNoUGhvdG9zIiwicXVlcnkiLCJwYWdlIiwiY29sb3IiLCJvcmRlckJ5Iiwib3JkZXJfYnkiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJnZXQiLCJwYXJhbXMiLCJjbGllbnRfaWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVU5TUExBU0hfQUNDRVNTX0tFWSIsImFsbCIsInVuZGVmaW5lZCIsInBlcl9wYWdlIiwiZGF0YSIsIkxvYWRpbmdHYWxsZXJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiX2VsZW0iLCJpZHgiLCJHYWxsZXJ5SXRlbSIsIml0ZW0iLCJhbHQiLCJhbHRfZGVzY3JpcHRpb24iLCJzcmMiLCJ1cmxzIiwicmVndWxhciIsIkdhbGxlcnkiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwiZmlsdGVycyIsInNldEZpbHRlcnMiLCJMQVRFU1QiLCJzZXRQYWdlIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJzdGF0dXMiLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJlbmFibGVkIiwicmVzdWx0cyIsInRvdGFsX3BhZ2VzIiwib25DaGFuZ2UiLCJlIiwia2V5IiwidGFyZ2V0IiwidmFsdWUiLCJ1cGRhdGVGaWx0ZXJzIiwicHJldkZpbHRlcnMiLCJ1cGRhdGVkRmlsdGVycyIsImdhbGxlcnlJdGVtcyIsImxlbmd0aCIsInAiLCJpZCIsImN1cnJlbnRQYWdlIiwidG90YWxQYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Gallery.tsx\n"));

/***/ })

});