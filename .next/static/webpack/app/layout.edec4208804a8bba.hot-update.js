"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"98f6e93b41fc\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZjYxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjk4ZjZlOTNiNDFmY1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/base/Breadcrumb.js":
/*!***********************************************!*\
  !*** ./src/app/components/base/Breadcrumb.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n// /components/Breadcrumb.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Breadcrumb = (param)=>{\n    let { homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks } = param;\n    _s();\n    const paths = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const pathNames = paths.split(\"/\").filter((path)=>path);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: containerClasses,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: listClasses,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: homeElement\n                    }, void 0, false, {\n                        fileName: \"/Users/pasupathiragavan/MyWorks/Interview Task/next-js-task/src/app/components/base/Breadcrumb.js\",\n                        lineNumber: 18,\n                        columnNumber: 45\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/pasupathiragavan/MyWorks/Interview Task/next-js-task/src/app/components/base/Breadcrumb.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, undefined),\n                pathNames.length > 0 && separator,\n                pathNames.map((link, index)=>{\n                    let href = \"/\".concat(pathNames.slice(0, index + 1).join(\"/\"));\n                    let itemClasses = paths === href ? \"\".concat(activeClasses, \" \").concat(listClasses) : \"text-gray-300 \".concat(listClasses);\n                    let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: itemClasses,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: href,\n                                    children: itemLink\n                                }, void 0, false, {\n                                    fileName: \"/Users/pasupathiragavan/MyWorks/Interview Task/next-js-task/src/app/components/base/Breadcrumb.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/pasupathiragavan/MyWorks/Interview Task/next-js-task/src/app/components/base/Breadcrumb.js\",\n                                lineNumber: 27,\n                                columnNumber: 29\n                            }, undefined),\n                            pathNames.length !== index + 1 && separator\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/pasupathiragavan/MyWorks/Interview Task/next-js-task/src/app/components/base/Breadcrumb.js\",\n                        lineNumber: 26,\n                        columnNumber: 25\n                    }, undefined);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/pasupathiragavan/MyWorks/Interview Task/next-js-task/src/app/components/base/Breadcrumb.js\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/pasupathiragavan/MyWorks/Interview Task/next-js-task/src/app/components/base/Breadcrumb.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Breadcrumb, \"61MIGjUUltLqaAMwlk3uGzniYJA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Breadcrumb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Breadcrumb);\nvar _c;\n$RefreshReg$(_c, \"Breadcrumb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9iYXNlL0JyZWFkY3J1bWIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw2QkFBNkI7OztBQUdXO0FBRUs7QUFDakI7QUFHNUIsTUFBTUksYUFBYTtRQUFDLEVBQUNDLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxnQkFBZ0IsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUVDLGVBQWUsRUFBQzs7SUFFdkcsTUFBTUMsUUFBUVQsNERBQVdBO0lBQ3pCLE1BQU1VLFlBQVlELE1BQU1FLEtBQUssQ0FBQyxLQUFLQyxNQUFNLENBQUVDLENBQUFBLE9BQVFBO0lBRW5ELHFCQUNJLDhEQUFDQztrQkFDRyw0RUFBQ0M7WUFBR0MsV0FBV1g7OzhCQUNYLDhEQUFDWTtvQkFBR0QsV0FBV1Y7OEJBQWEsNEVBQUNMLGtEQUFJQTt3QkFBQ2lCLE1BQU07a0NBQU1mOzs7Ozs7Ozs7OztnQkFDN0NPLFVBQVVTLE1BQU0sR0FBRyxLQUFLZjtnQkFFekJNLFVBQVVVLEdBQUcsQ0FBRSxDQUFDQyxNQUFNQztvQkFDbEIsSUFBSUosT0FBTyxJQUE0QyxPQUF4Q1IsVUFBVWEsS0FBSyxDQUFDLEdBQUdELFFBQVEsR0FBR0UsSUFBSSxDQUFDO29CQUNsRCxJQUFJQyxjQUFjaEIsVUFBVVMsT0FBTyxHQUFvQlosT0FBakJDLGVBQWMsS0FBZSxPQUFaRCxlQUFnQixpQkFBa0MsT0FBWkE7b0JBQzdGLElBQUlvQixXQUFXbEIsa0JBQWtCYSxJQUFJLENBQUMsRUFBRSxDQUFDTSxXQUFXLEtBQUtOLEtBQUtFLEtBQUssQ0FBQyxHQUFHRixLQUFLRixNQUFNLElBQUlFO29CQUN0RixxQkFDSSw4REFBQ3ZCLHVEQUFjOzswQ0FDWCw4REFBQ21CO2dDQUFHRCxXQUFXUzswQ0FDWCw0RUFBQ3hCLGtEQUFJQTtvQ0FBQ2lCLE1BQU1BOzhDQUFPUTs7Ozs7Ozs7Ozs7NEJBRXRCaEIsVUFBVVMsTUFBTSxLQUFLRyxRQUFRLEtBQUtsQjs7dUJBSmxCa0I7Ozs7O2dCQU83Qjs7Ozs7Ozs7Ozs7O0FBS2hCO0dBNUJNcEI7O1FBRVlGLHdEQUFXQTs7O0tBRnZCRTtBQThCTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvYmFzZS9CcmVhZGNydW1iLmpzP2U1NDQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gL2NvbXBvbmVudHMvQnJlYWRjcnVtYi50c3hcbid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5cbmNvbnN0IEJyZWFkY3J1bWIgPSAoe2hvbWVFbGVtZW50LCBzZXBhcmF0b3IsIGNvbnRhaW5lckNsYXNzZXMsIGxpc3RDbGFzc2VzLCBhY3RpdmVDbGFzc2VzLCBjYXBpdGFsaXplTGlua3N9KSA9PiB7XG5cbiAgICBjb25zdCBwYXRocyA9IHVzZVBhdGhuYW1lKClcbiAgICBjb25zdCBwYXRoTmFtZXMgPSBwYXRocy5zcGxpdCgnLycpLmZpbHRlciggcGF0aCA9PiBwYXRoIClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc2VzfT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtsaXN0Q2xhc3Nlc30+PExpbmsgaHJlZj17Jy8nfT57aG9tZUVsZW1lbnR9PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAge3BhdGhOYW1lcy5sZW5ndGggPiAwICYmIHNlcGFyYXRvcn1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoTmFtZXMubWFwKCAobGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhyZWYgPSBgLyR7cGF0aE5hbWVzLnNsaWNlKDAsIGluZGV4ICsgMSkuam9pbignLycpfWBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1DbGFzc2VzID0gcGF0aHMgPT09IGhyZWYgPyBgJHthY3RpdmVDbGFzc2VzfSAke2xpc3RDbGFzc2VzfWAgOiBgJHtcInRleHQtZ3JheS0zMDBcIn0gJHtsaXN0Q2xhc3Nlc31gXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtTGluayA9IGNhcGl0YWxpemVMaW5rcyA/IGxpbmtbMF0udG9VcHBlckNhc2UoKSArIGxpbmsuc2xpY2UoMSwgbGluay5sZW5ndGgpIDogbGlua1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2l0ZW1DbGFzc2VzfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PntpdGVtTGlua308L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGF0aE5hbWVzLmxlbmd0aCAhPT0gaW5kZXggKyAxICYmIHNlcGFyYXRvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCcmVhZGNydW1iXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdE5vZGUiLCJ1c2VQYXRobmFtZSIsIkxpbmsiLCJCcmVhZGNydW1iIiwiaG9tZUVsZW1lbnQiLCJzZXBhcmF0b3IiLCJjb250YWluZXJDbGFzc2VzIiwibGlzdENsYXNzZXMiLCJhY3RpdmVDbGFzc2VzIiwiY2FwaXRhbGl6ZUxpbmtzIiwicGF0aHMiLCJwYXRoTmFtZXMiLCJzcGxpdCIsImZpbHRlciIsInBhdGgiLCJkaXYiLCJ1bCIsImNsYXNzTmFtZSIsImxpIiwiaHJlZiIsImxlbmd0aCIsIm1hcCIsImxpbmsiLCJpbmRleCIsInNsaWNlIiwiam9pbiIsIml0ZW1DbGFzc2VzIiwiaXRlbUxpbmsiLCJ0b1VwcGVyQ2FzZSIsIkZyYWdtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/base/Breadcrumb.js\n"));

/***/ })

});