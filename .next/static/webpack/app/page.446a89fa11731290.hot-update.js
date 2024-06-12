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

/***/ "(app-pages-browser)/./src/app/PaginationBar.tsx":
/*!***********************************!*\
  !*** ./src/app/PaginationBar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PaginationBar: function() { return /* binding */ PaginationBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/pagination */ \"(app-pages-browser)/./src/components/ui/pagination.tsx\");\n\n\n// TODO: Possible to add the page to the URL so user can always reference back\n// to the page in question (but have to save the parameters of the query in the URL as well)\nconst PaginationBar = (param)=>{\n    let { totalPages, currentPage, setPage } = param;\n    const pageLowerBound = Math.max(currentPage - 1, 1);\n    const pages = [\n        pageLowerBound,\n        pageLowerBound + 1,\n        pageLowerBound + 2\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_1__.Pagination, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationContent, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                    \"aria-disabled\": currentPage === 1,\n                    className: currentPage === 1 ? \"cursor-not-allowed\" : \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationPrevious, {\n                        onClick: ()=>setPage((prevPage)=>Math.max(prevPage - 1, 1))\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/PaginationBar.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/PaginationBar.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                pages.map((pageItem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationLink, {\n                            isActive: currentPage === pageItem,\n                            onClick: ()=>setPage(pageItem),\n                            children: pageItem\n                        }, void 0, false, {\n                            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/PaginationBar.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/PaginationBar.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationItem, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationNext, {\n                        \"aria-disabled\": currentPage === totalPages,\n                        className: currentPage === totalPages ? \"cursor-not-allowed\" : \"\",\n                        onClick: ()=>setPage((prevPage)=>prevPage + 1)\n                    }, void 0, false, {\n                        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/PaginationBar.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/PaginationBar.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/PaginationBar.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/amberchen/src/zora-unsplash-gallery/src/app/PaginationBar.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PaginationBar;\nvar _c;\n$RefreshReg$(_c, \"PaginationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvUGFnaW5hdGlvbkJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9vQztBQUdwQyw4RUFBOEU7QUFDOUUsNEZBQTRGO0FBQ3JGLE1BQU1NLGdCQUFnQjtRQUFDLEVBQzVCQyxVQUFVLEVBQ1ZDLFdBQVcsRUFDWEMsT0FBTyxFQUtSO0lBQ0MsTUFBTUMsaUJBQWlCQyxLQUFLQyxHQUFHLENBQUNKLGNBQWMsR0FBRztJQUVqRCxNQUFNSyxRQUFRO1FBQUNIO1FBQWdCQSxpQkFBaUI7UUFBR0EsaUJBQWlCO0tBQUU7SUFFdEUscUJBQ0UsOERBQUNWLGlFQUFVQTtrQkFDVCw0RUFBQ0Msd0VBQWlCQTs7OEJBQ2hCLDhEQUFDQyxxRUFBY0E7b0JBQ2JZLGlCQUFlTixnQkFBZ0I7b0JBQy9CTyxXQUFXUCxnQkFBZ0IsSUFBSSx1QkFBdUI7OEJBRXRELDRFQUFDSCx5RUFBa0JBO3dCQUNqQlcsU0FBUyxJQUFNUCxRQUFRLENBQUNRLFdBQWFOLEtBQUtDLEdBQUcsQ0FBQ0ssV0FBVyxHQUFHOzs7Ozs7Ozs7OztnQkFHL0RKLE1BQU1LLEdBQUcsQ0FBQyxDQUFDQyx5QkFDViw4REFBQ2pCLHFFQUFjQTtrQ0FDYiw0RUFBQ0MscUVBQWNBOzRCQUNiaUIsVUFBVVosZ0JBQWdCVzs0QkFDMUJILFNBQVMsSUFBTVAsUUFBUVU7c0NBRXRCQTs7Ozs7Ozs7Ozs7OEJBSVAsOERBQUNqQixxRUFBY0E7OEJBQ2IsNEVBQUNFLHFFQUFjQTt3QkFDYlUsaUJBQWVOLGdCQUFnQkQ7d0JBQy9CUSxXQUFXUCxnQkFBZ0JELGFBQWEsdUJBQXVCO3dCQUMvRFMsU0FBUyxJQUFNUCxRQUFRLENBQUNRLFdBQWFBLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUQsRUFBRTtLQTVDV1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9QYWdpbmF0aW9uQmFyLnRzeD9iZjUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFBhZ2luYXRpb24sXG4gIFBhZ2luYXRpb25Db250ZW50LFxuICBQYWdpbmF0aW9uSXRlbSxcbiAgUGFnaW5hdGlvbkxpbmssXG4gIFBhZ2luYXRpb25OZXh0LFxuICBQYWdpbmF0aW9uUHJldmlvdXMsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvcGFnaW5hdGlvblwiO1xuaW1wb3J0IHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIFRPRE86IFBvc3NpYmxlIHRvIGFkZCB0aGUgcGFnZSB0byB0aGUgVVJMIHNvIHVzZXIgY2FuIGFsd2F5cyByZWZlcmVuY2UgYmFja1xuLy8gdG8gdGhlIHBhZ2UgaW4gcXVlc3Rpb24gKGJ1dCBoYXZlIHRvIHNhdmUgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIHF1ZXJ5IGluIHRoZSBVUkwgYXMgd2VsbClcbmV4cG9ydCBjb25zdCBQYWdpbmF0aW9uQmFyID0gKHtcbiAgdG90YWxQYWdlcyxcbiAgY3VycmVudFBhZ2UsXG4gIHNldFBhZ2UsXG59OiB7XG4gIHRvdGFsUGFnZXM/OiBudW1iZXI7XG4gIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gIHNldFBhZ2U6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xufSkgPT4ge1xuICBjb25zdCBwYWdlTG93ZXJCb3VuZCA9IE1hdGgubWF4KGN1cnJlbnRQYWdlIC0gMSwgMSk7XG5cbiAgY29uc3QgcGFnZXMgPSBbcGFnZUxvd2VyQm91bmQsIHBhZ2VMb3dlckJvdW5kICsgMSwgcGFnZUxvd2VyQm91bmQgKyAyXTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdpbmF0aW9uPlxuICAgICAgPFBhZ2luYXRpb25Db250ZW50PlxuICAgICAgICA8UGFnaW5hdGlvbkl0ZW1cbiAgICAgICAgICBhcmlhLWRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gMX1cbiAgICAgICAgICBjbGFzc05hbWU9e2N1cnJlbnRQYWdlID09PSAxID8gXCJjdXJzb3Itbm90LWFsbG93ZWRcIiA6IFwiXCJ9XG4gICAgICAgID5cbiAgICAgICAgICA8UGFnaW5hdGlvblByZXZpb3VzXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKChwcmV2UGFnZSkgPT4gTWF0aC5tYXgocHJldlBhZ2UgLSAxLCAxKSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9QYWdpbmF0aW9uSXRlbT5cbiAgICAgICAge3BhZ2VzLm1hcCgocGFnZUl0ZW0pID0+IChcbiAgICAgICAgICA8UGFnaW5hdGlvbkl0ZW0+XG4gICAgICAgICAgICA8UGFnaW5hdGlvbkxpbmtcbiAgICAgICAgICAgICAgaXNBY3RpdmU9e2N1cnJlbnRQYWdlID09PSBwYWdlSXRlbX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZShwYWdlSXRlbSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwYWdlSXRlbX1cbiAgICAgICAgICAgIDwvUGFnaW5hdGlvbkxpbms+XG4gICAgICAgICAgPC9QYWdpbmF0aW9uSXRlbT5cbiAgICAgICAgKSl9XG4gICAgICAgIDxQYWdpbmF0aW9uSXRlbT5cbiAgICAgICAgICA8UGFnaW5hdGlvbk5leHRcbiAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSB0b3RhbFBhZ2VzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjdXJyZW50UGFnZSA9PT0gdG90YWxQYWdlcyA/IFwiY3Vyc29yLW5vdC1hbGxvd2VkXCIgOiBcIlwifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFnZSgocHJldlBhZ2UpID0+IHByZXZQYWdlICsgMSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9QYWdpbmF0aW9uSXRlbT5cbiAgICAgIDwvUGFnaW5hdGlvbkNvbnRlbnQ+XG4gICAgPC9QYWdpbmF0aW9uPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJQYWdpbmF0aW9uIiwiUGFnaW5hdGlvbkNvbnRlbnQiLCJQYWdpbmF0aW9uSXRlbSIsIlBhZ2luYXRpb25MaW5rIiwiUGFnaW5hdGlvbk5leHQiLCJQYWdpbmF0aW9uUHJldmlvdXMiLCJQYWdpbmF0aW9uQmFyIiwidG90YWxQYWdlcyIsImN1cnJlbnRQYWdlIiwic2V0UGFnZSIsInBhZ2VMb3dlckJvdW5kIiwiTWF0aCIsIm1heCIsInBhZ2VzIiwiYXJpYS1kaXNhYmxlZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJwcmV2UGFnZSIsIm1hcCIsInBhZ2VJdGVtIiwiaXNBY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/PaginationBar.tsx\n"));

/***/ })

});