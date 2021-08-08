webpackHotUpdate_N_E("pages/index",{

/***/ "./components/detail.js":
/*!******************************!*\
  !*** ./components/detail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_vivienneobrien_Desktop_mh2_tech_test_main_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-number-format */ \"./node_modules/react-number-format/dist/react-number-format.es.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button */ \"./components/button.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ \"./components/style.js\");\n\n\n\nvar _jsxFileName = \"/Users/vivienneobrien/Desktop/mh2-tech-test-main/components/detail.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n/* eslint-disable max-statements */\n\n\n\n\n\n\n\nvar sincePurchased = function sincePurchased(_ref) {\n  var recentValuation = _ref.recentValuation,\n      originalPurchasePrice = _ref.originalPurchasePrice;\n  var sincePurchasedPrice = recentValuation.amount - originalPurchasePrice;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_number_format__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    value: sincePurchasedPrice,\n    displayType: \"text\",\n    thousandSeparator: true,\n    prefix: \"\\xA3\",\n    decimalScale: 2\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n};\n\nvar account = {\n  uid: \"65156cdc-5cfd-4b34-b626-49c83569f35e\",\n  deleted: false,\n  dateCreated: \"2020-12-03T08:55:33.421Z\",\n  currency: \"GBP\",\n  name: \"15 Temple Way\",\n  bankName: \"Residential\",\n  type: \"properties\",\n  subType: \"residential\",\n  originalPurchasePrice: 250000,\n  originalPurchasePriceDate: \"2017-09-03\",\n  recentValuation: {\n    amount: 310000,\n    status: \"good\"\n  },\n  associatedMortgages: [{\n    name: \"HSBC Repayment Mortgage\",\n    uid: \"fb463121-b51a-490d-9f19-d2ea76f05e25\",\n    currentBalance: -175000\n  }],\n  canBeManaged: false,\n  postcode: \"BS1 2AA\",\n  lastUpdate: \"2020-12-01T08:55:33.421Z\",\n  updateAfterDays: 30\n};\n\nvar Detail = function Detail(_ref2) {\n  _s();\n\n  Object(_Users_vivienneobrien_Desktop_mh2_tech_test_main_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2);\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    window.fetch(\"/api/account\").then(function (res) {\n      return res.json();\n    }).then(console.log);\n  }, []);\n  var mortgage;\n  var lastUpdate = new Date(account.lastUpdate);\n\n  if (account.associatedMortgages.length) {\n    mortgage = account.associatedMortgages[0];\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"Inset\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountLabel\"], {\n        children: \"Estimated Value\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountHeadline\"], {\n        children: new Intl.NumberFormat(\"en-GB\", {\n          style: \"currency\",\n          currency: \"GBP\"\n        }).format(account.recentValuation.amount)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountList\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n          children: \"Last updated \".concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__[\"format\"])(lastUpdate, \"do MMM yyyy\"))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n          children: \"Next update \".concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__[\"add\"])(lastUpdate, {\n            days: account.updateAfterDays\n          }), \"do MMM yyyy\"))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountLabel\"], {\n        children: \"Property details\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"RowContainer\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountList\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n            children: account.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n            children: account.bankName\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n            children: account.postcode\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this), mortgage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountLabel\"], {\n        children: \"Mortgage\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"RowContainer\"] // This is a dummy action\n      , {\n        onClick: function onClick() {\n          return alert(\"You have navigated to the mortgage page\");\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountList\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n            children: new Intl.NumberFormat(\"en-GB\", {\n              style: \"currency\",\n              currency: \"GBP\"\n            }).format(Math.abs(account.associatedMortgages[0].currentBalance))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n            children: account.associatedMortgages[0].name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountLabel\"], {\n        children: \"Valuation Changes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"RowContainer\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"AccountList\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n            children: [\"Purchased for\\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"\\xA3199,500\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 42\n            }, _this), \"\\xA0 in September 2015\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n            children: [\"Since purchase\\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: [sincePurchased(account), \" (20%)\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 44\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_7__[\"InfoText\"], {\n            children: [\"Annual Appreciation\\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"(5%)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 125,\n              columnNumber: 48\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_button__WEBPACK_IMPORTED_MODULE_6__[\"Button\"] // This is a dummy action\n    , {\n      onClick: function onClick() {\n        return alert(\"You have navigated to the edit account page\");\n      },\n      children: \"Edit account\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Detail, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Detail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\n\nvar _c;\n\n$RefreshReg$(_c, \"Detail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZXRhaWwuanM/MjkwYiJdLCJuYW1lcyI6WyJzaW5jZVB1cmNoYXNlZCIsInJlY2VudFZhbHVhdGlvbiIsIm9yaWdpbmFsUHVyY2hhc2VQcmljZSIsInNpbmNlUHVyY2hhc2VkUHJpY2UiLCJhbW91bnQiLCJhY2NvdW50IiwidWlkIiwiZGVsZXRlZCIsImRhdGVDcmVhdGVkIiwiY3VycmVuY3kiLCJuYW1lIiwiYmFua05hbWUiLCJ0eXBlIiwic3ViVHlwZSIsIm9yaWdpbmFsUHVyY2hhc2VQcmljZURhdGUiLCJzdGF0dXMiLCJhc3NvY2lhdGVkTW9ydGdhZ2VzIiwiY3VycmVudEJhbGFuY2UiLCJjYW5CZU1hbmFnZWQiLCJwb3N0Y29kZSIsImxhc3RVcGRhdGUiLCJ1cGRhdGVBZnRlckRheXMiLCJEZXRhaWwiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm1vcnRnYWdlIiwiRGF0ZSIsImxlbmd0aCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImZvcm1hdCIsImFkZCIsImRheXMiLCJhbGVydCIsIk1hdGgiLCJhYnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBV0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUErQztBQUFBLE1BQTdDQyxlQUE2QyxRQUE3Q0EsZUFBNkM7QUFBQSxNQUE1QkMscUJBQTRCLFFBQTVCQSxxQkFBNEI7QUFDcEUsTUFBTUMsbUJBQW1CLEdBQUdGLGVBQWUsQ0FBQ0csTUFBaEIsR0FBeUJGLHFCQUFyRDtBQUNBLHNCQUNFLHFFQUFDLDJEQUFEO0FBQWMsU0FBSyxFQUFFQyxtQkFBckI7QUFBMEMsZUFBVyxFQUFDLE1BQXREO0FBQTZELHFCQUFpQixFQUFFLElBQWhGO0FBQXNGLFVBQU0sRUFBQyxN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LHFFQUFDLHFEQUFEO0FBQUEsOEJBQ0UscUVBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLG1EQUFEO0FBQUEsK0JBQ0UscUVBQUMsa0RBQUQ7QUFBQSxrQ0FDRSxxRUFBQywrQ0FBRDtBQUFBLHlEQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUscUVBQUMsK0NBQUQ7QUFBQSwwREFBK0I7QUFBQSx5QkFBU1YsY0FBYyxDQUFDSyxPQUFELENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0UscUVBQUMsK0NBQUQ7QUFBQSwrREFBbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcERGLGVBOERFLHFFQUFDLDhDQUFELENBQ0U7QUFERjtBQUVFLGFBQU8sRUFBRTtBQUFBLGVBQU1tQyxLQUFLLENBQUMsNkNBQUQsQ0FBWDtBQUFBLE9BRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1RUQsQ0FyRkQ7O0dBQU1sQixNOztLQUFBQSxNO0FBdUZTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZGV0YWlsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tICdyZWFjdC1udW1iZXItZm9ybWF0JztcblxuLyogZXNsaW50LWRpc2FibGUgbWF4LXN0YXRlbWVudHMgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFkZCwgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9idXR0b25cIjtcblxuaW1wb3J0IHtcbiAgQWNjb3VudEhlYWRsaW5lLFxuICBBY2NvdW50TGFiZWwsXG4gIEFjY291bnRTZWN0aW9uLFxuICBBY2NvdW50TGlzdCxcbiAgSW5mb1RleHQsXG4gIEluc2V0LFxuICBSb3dDb250YWluZXIsXG59IGZyb20gXCIuL3N0eWxlXCI7XG5cblxuY29uc3Qgc2luY2VQdXJjaGFzZWQgPSAoe3JlY2VudFZhbHVhdGlvbiwgb3JpZ2luYWxQdXJjaGFzZVByaWNlIH0pID0+IHtcbiAgY29uc3Qgc2luY2VQdXJjaGFzZWRQcmljZSA9IHJlY2VudFZhbHVhdGlvbi5hbW91bnQgLSBvcmlnaW5hbFB1cmNoYXNlUHJpY2VcbiAgcmV0dXJuIChcbiAgICA8TnVtYmVyRm9ybWF0IHZhbHVlPXtzaW5jZVB1cmNoYXNlZFByaWNlfSBkaXNwbGF5VHlwZT1cInRleHRcIiB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX0gcHJlZml4PVwiwqNcIiBkZWNpbWFsU2NhbGU9ezJ9IC8+XG4gICk7XG59O1xuXG5jb25zdCBhY2NvdW50ID0ge1xuICB1aWQ6IFwiNjUxNTZjZGMtNWNmZC00YjM0LWI2MjYtNDljODM1NjlmMzVlXCIsXG4gIGRlbGV0ZWQ6IGZhbHNlLFxuICBkYXRlQ3JlYXRlZDogXCIyMDIwLTEyLTAzVDA4OjU1OjMzLjQyMVpcIixcbiAgY3VycmVuY3k6IFwiR0JQXCIsXG4gIG5hbWU6IFwiMTUgVGVtcGxlIFdheVwiLFxuICBiYW5rTmFtZTogXCJSZXNpZGVudGlhbFwiLFxuICB0eXBlOiBcInByb3BlcnRpZXNcIixcbiAgc3ViVHlwZTogXCJyZXNpZGVudGlhbFwiLFxuICBvcmlnaW5hbFB1cmNoYXNlUHJpY2U6IDI1MDAwMCxcbiAgb3JpZ2luYWxQdXJjaGFzZVByaWNlRGF0ZTogXCIyMDE3LTA5LTAzXCIsXG4gIHJlY2VudFZhbHVhdGlvbjogeyBhbW91bnQ6IDMxMDAwMCwgc3RhdHVzOiBcImdvb2RcIiB9LFxuICBhc3NvY2lhdGVkTW9ydGdhZ2VzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJIU0JDIFJlcGF5bWVudCBNb3J0Z2FnZVwiLFxuICAgICAgdWlkOiBcImZiNDYzMTIxLWI1MWEtNDkwZC05ZjE5LWQyZWE3NmYwNWUyNVwiLFxuICAgICAgY3VycmVudEJhbGFuY2U6IC0xNzUwMDAsXG4gICAgfSxcbiAgXSxcbiAgY2FuQmVNYW5hZ2VkOiBmYWxzZSxcbiAgcG9zdGNvZGU6IFwiQlMxIDJBQVwiLFxuICBsYXN0VXBkYXRlOiBcIjIwMjAtMTItMDFUMDg6NTU6MzMuNDIxWlwiLFxuICB1cGRhdGVBZnRlckRheXM6IDMwLFxufTtcblxuY29uc3QgRGV0YWlsID0gKHt9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93XG4gICAgICAuZmV0Y2goXCIvYXBpL2FjY291bnRcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihjb25zb2xlLmxvZyk7XG4gIH0sIFtdKTtcblxuICBsZXQgbW9ydGdhZ2U7XG4gIGNvbnN0IGxhc3RVcGRhdGUgPSBuZXcgRGF0ZShhY2NvdW50Lmxhc3RVcGRhdGUpO1xuICBpZiAoYWNjb3VudC5hc3NvY2lhdGVkTW9ydGdhZ2VzLmxlbmd0aCkge1xuICAgIG1vcnRnYWdlID0gYWNjb3VudC5hc3NvY2lhdGVkTW9ydGdhZ2VzWzBdO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SW5zZXQ+XG4gICAgICA8QWNjb3VudFNlY3Rpb24+XG4gICAgICAgIDxBY2NvdW50TGFiZWw+RXN0aW1hdGVkIFZhbHVlPC9BY2NvdW50TGFiZWw+XG4gICAgICAgIDxBY2NvdW50SGVhZGxpbmU+XG4gICAgICAgICAge25ldyBJbnRsLk51bWJlckZvcm1hdChcImVuLUdCXCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgICAgICAgICBjdXJyZW5jeTogXCJHQlBcIixcbiAgICAgICAgICB9KS5mb3JtYXQoYWNjb3VudC5yZWNlbnRWYWx1YXRpb24uYW1vdW50KX1cbiAgICAgICAgPC9BY2NvdW50SGVhZGxpbmU+XG4gICAgICAgIDxBY2NvdW50TGlzdD5cbiAgICAgICAgICA8SW5mb1RleHQ+XG4gICAgICAgICAgICB7YExhc3QgdXBkYXRlZCAke2Zvcm1hdChsYXN0VXBkYXRlLCBcImRvIE1NTSB5eXl5XCIpfWB9XG4gICAgICAgICAgPC9JbmZvVGV4dD5cbiAgICAgICAgICA8SW5mb1RleHQ+XG4gICAgICAgICAgICB7YE5leHQgdXBkYXRlICR7Zm9ybWF0KFxuICAgICAgICAgICAgICBhZGQobGFzdFVwZGF0ZSwgeyBkYXlzOiBhY2NvdW50LnVwZGF0ZUFmdGVyRGF5cyB9KSxcbiAgICAgICAgICAgICAgXCJkbyBNTU0geXl5eVwiXG4gICAgICAgICAgICApfWB9XG4gICAgICAgICAgPC9JbmZvVGV4dD5cbiAgICAgICAgPC9BY2NvdW50TGlzdD5cbiAgICAgIDwvQWNjb3VudFNlY3Rpb24+XG4gICAgICA8QWNjb3VudFNlY3Rpb24+XG4gICAgICAgIDxBY2NvdW50TGFiZWw+UHJvcGVydHkgZGV0YWlsczwvQWNjb3VudExhYmVsPlxuICAgICAgICA8Um93Q29udGFpbmVyPlxuICAgICAgICAgIDxBY2NvdW50TGlzdD5cbiAgICAgICAgICAgIDxJbmZvVGV4dD57YWNjb3VudC5uYW1lfTwvSW5mb1RleHQ+XG4gICAgICAgICAgICA8SW5mb1RleHQ+e2FjY291bnQuYmFua05hbWV9PC9JbmZvVGV4dD5cbiAgICAgICAgICAgIDxJbmZvVGV4dD57YWNjb3VudC5wb3N0Y29kZX08L0luZm9UZXh0PlxuICAgICAgICAgIDwvQWNjb3VudExpc3Q+XG4gICAgICAgIDwvUm93Q29udGFpbmVyPlxuICAgICAgPC9BY2NvdW50U2VjdGlvbj5cbiAgICAgIHttb3J0Z2FnZSAmJiAoXG4gICAgICAgIDxBY2NvdW50U2VjdGlvbj5cbiAgICAgICAgICA8QWNjb3VudExhYmVsPk1vcnRnYWdlPC9BY2NvdW50TGFiZWw+XG4gICAgICAgICAgPFJvd0NvbnRhaW5lclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGR1bW15IGFjdGlvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWxlcnQoXCJZb3UgaGF2ZSBuYXZpZ2F0ZWQgdG8gdGhlIG1vcnRnYWdlIHBhZ2VcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFjY291bnRMaXN0PlxuICAgICAgICAgICAgICA8SW5mb1RleHQ+XG4gICAgICAgICAgICAgICAge25ldyBJbnRsLk51bWJlckZvcm1hdChcImVuLUdCXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgICAgICAgICAgICAgICBjdXJyZW5jeTogXCJHQlBcIixcbiAgICAgICAgICAgICAgICB9KS5mb3JtYXQoXG4gICAgICAgICAgICAgICAgICBNYXRoLmFicyhhY2NvdW50LmFzc29jaWF0ZWRNb3J0Z2FnZXNbMF0uY3VycmVudEJhbGFuY2UpXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9JbmZvVGV4dD5cbiAgICAgICAgICAgICAgPEluZm9UZXh0PnthY2NvdW50LmFzc29jaWF0ZWRNb3J0Z2FnZXNbMF0ubmFtZX08L0luZm9UZXh0PlxuICAgICAgICAgICAgPC9BY2NvdW50TGlzdD5cbiAgICAgICAgICA8L1Jvd0NvbnRhaW5lcj5cbiAgICAgICAgPC9BY2NvdW50U2VjdGlvbj5cbiAgICAgICl9XG4gICAgICA8QWNjb3VudFNlY3Rpb24+XG4gICAgICAgIDxBY2NvdW50TGFiZWw+VmFsdWF0aW9uIENoYW5nZXM8L0FjY291bnRMYWJlbD5cbiAgICAgICAgPFJvd0NvbnRhaW5lcj5cbiAgICAgICAgICA8QWNjb3VudExpc3Q+XG4gICAgICAgICAgICA8SW5mb1RleHQ+UHVyY2hhc2VkIGZvciZuYnNwOzxzdHJvbmc+wqMxOTksNTAwPC9zdHJvbmc+Jm5ic3A7IGluIFNlcHRlbWJlciAyMDE1PC9JbmZvVGV4dD5cbiAgICAgICAgICAgIDxJbmZvVGV4dCA+U2luY2UgcHVyY2hhc2UmbmJzcDs8c3Ryb25nPntzaW5jZVB1cmNoYXNlZChhY2NvdW50KX0gKDIwJSk8L3N0cm9uZz48L0luZm9UZXh0PlxuICAgICAgICAgICAgPEluZm9UZXh0PkFubnVhbCBBcHByZWNpYXRpb24mbmJzcDs8c3Ryb25nPig1JSk8L3N0cm9uZz48L0luZm9UZXh0PlxuICAgICAgICAgIDwvQWNjb3VudExpc3Q+XG4gICAgICAgIDwvUm93Q29udGFpbmVyPlxuICAgICAgPC9BY2NvdW50U2VjdGlvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgLy8gVGhpcyBpcyBhIGR1bW15IGFjdGlvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydChcIllvdSBoYXZlIG5hdmlnYXRlZCB0byB0aGUgZWRpdCBhY2NvdW50IHBhZ2VcIil9XG4gICAgICA+XG4gICAgICAgIEVkaXQgYWNjb3VudFxuICAgICAgPC9CdXR0b24+XG4gICAgPC9JbnNldD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/detail.js\n");

/***/ })

})