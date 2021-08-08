webpackHotUpdate_N_E("pages/index",{

/***/ "./components/detail.js":
/*!******************************!*\
  !*** ./components/detail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_vivienneobrien_Desktop_mh2_tech_test_main_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button */ \"./components/button.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ \"./components/style.js\");\n\n\n\nvar _jsxFileName = \"/Users/vivienneobrien/Desktop/mh2-tech-test-main/components/detail.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable max-statements */\n\n\n\n\n\n\nvar sincePurchased = function sincePurchased(_ref) {\n  var recentValuation = _ref.recentValuation,\n      originalPurchasePrice = _ref.originalPurchasePrice;\n  var sincePruchasedPrice = recentValuation - originalPurchasePrice;\n  console.log(sincePruchasedPrice);\n  return sincePruchasedPrice;\n};\n\nvar account = {\n  uid: \"65156cdc-5cfd-4b34-b626-49c83569f35e\",\n  deleted: false,\n  dateCreated: \"2020-12-03T08:55:33.421Z\",\n  currency: \"GBP\",\n  name: \"15 Temple Way\",\n  bankName: \"Residential\",\n  type: \"properties\",\n  subType: \"residential\",\n  originalPurchasePrice: 250000,\n  originalPurchasePriceDate: \"2017-09-03\",\n  recentValuation: {\n    amount: 310000,\n    status: \"good\"\n  },\n  associatedMortgages: [{\n    name: \"HSBC Repayment Mortgage\",\n    uid: \"fb463121-b51a-490d-9f19-d2ea76f05e25\",\n    currentBalance: -175000\n  }],\n  canBeManaged: false,\n  postcode: \"BS1 2AA\",\n  lastUpdate: \"2020-12-01T08:55:33.421Z\",\n  updateAfterDays: 30\n};\n\nvar Detail = function Detail(_ref2) {\n  _s();\n\n  Object(_Users_vivienneobrien_Desktop_mh2_tech_test_main_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref2);\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    window.fetch(\"/api/account\").then(function (res) {\n      return res.json();\n    }).then(console.log);\n  }, []);\n  var mortgage;\n  var lastUpdate = new Date(account.lastUpdate);\n\n  if (account.associatedMortgages.length) {\n    mortgage = account.associatedMortgages[0];\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Inset\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountLabel\"], {\n        children: \"Estimated Value\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountHeadline\"], {\n        children: new Intl.NumberFormat(\"en-GB\", {\n          style: \"currency\",\n          currency: \"GBP\"\n        }).format(account.recentValuation.amount)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountList\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n          children: \"Last updated \".concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"format\"])(lastUpdate, \"do MMM yyyy\"))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n          children: \"Next update \".concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"add\"])(lastUpdate, {\n            days: account.updateAfterDays\n          }), \"do MMM yyyy\"))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountLabel\"], {\n        children: \"Property details\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"RowContainer\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountList\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n            children: account.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n            children: account.bankName\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n            children: account.postcode\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, _this), mortgage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountLabel\"], {\n        children: \"Mortgage\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"RowContainer\"] // This is a dummy action\n      , {\n        onClick: function onClick() {\n          return alert(\"You have navigated to the mortgage page\");\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountList\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n            children: new Intl.NumberFormat(\"en-GB\", {\n              style: \"currency\",\n              currency: \"GBP\"\n            }).format(Math.abs(account.associatedMortgages[0].currentBalance))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n            children: account.associatedMortgages[0].name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountLabel\"], {\n        children: \"Valuation Changes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"RowContainer\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountList\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n            children: [\"Purchased for\\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"\\xA3199,500\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 42\n            }, _this), \"\\xA0 in September 2015\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n            children: [\"Since purchase\\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"\\xA350,000 (20%)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 43\n            }, _this), sincePurchased(account)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n            children: [\"Annual Appreciation\\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"(5%)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 48\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_button__WEBPACK_IMPORTED_MODULE_5__[\"Button\"] // This is a dummy action\n    , {\n      onClick: function onClick() {\n        return alert(\"You have navigated to the edit account page\");\n      },\n      children: \"Edit account\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Detail, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Detail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\n\nvar _c;\n\n$RefreshReg$(_c, \"Detail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZXRhaWwuanM/MjkwYiJdLCJuYW1lcyI6WyJzaW5jZVB1cmNoYXNlZCIsInJlY2VudFZhbHVhdGlvbiIsIm9yaWdpbmFsUHVyY2hhc2VQcmljZSIsInNpbmNlUHJ1Y2hhc2VkUHJpY2UiLCJjb25zb2xlIiwibG9nIiwiYWNjb3VudCIsInVpZCIsImRlbGV0ZWQiLCJkYXRlQ3JlYXRlZCIsImN1cnJlbmN5IiwibmFtZSIsImJhbmtOYW1lIiwidHlwZSIsInN1YlR5cGUiLCJvcmlnaW5hbFB1cmNoYXNlUHJpY2VEYXRlIiwiYW1vdW50Iiwic3RhdHVzIiwiYXNzb2NpYXRlZE1vcnRnYWdlcyIsImN1cnJlbnRCYWxhbmNlIiwiY2FuQmVNYW5hZ2VkIiwicG9zdGNvZGUiLCJsYXN0VXBkYXRlIiwidXBkYXRlQWZ0ZXJEYXlzIiwiRGV0YWlsIiwidXNlRWZmZWN0Iiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIm1vcnRnYWdlIiwiRGF0ZSIsImxlbmd0aCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImZvcm1hdCIsImFkZCIsImRheXMiLCJhbGVydCIsIk1hdGgiLCJhYnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFXQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQStDO0FBQUEsTUFBN0NDLGVBQTZDLFFBQTdDQSxlQUE2QztBQUFBLE1BQTVCQyxxQkFBNEIsUUFBNUJBLHFCQUE0QjtBQUNwRSxNQUFNQyxtQkFBbUIsR0FBR0YsZUFBZSxHQUFHQyxxQkFBOUM7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlGLG1CQUFaO0FBQ0EsU0FDRUEsbUJBREY7QUFHRCxDQU5EOztBQVFBLElBQU1HLE9BQU8sR0FBRztBQUNkQyxLQUFHLEVBQUUsc0NBRFM7QUFFZEMsU0FBTyxFQUFFLEtBRks7QUFH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QUFEO0FBQUEseURBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQywrQ0FBRDtBQUFBLDBEQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBOUIsRUFBNkRYLGNBQWMsQ0FBQ00sT0FBRCxDQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRSxxRUFBQywrQ0FBRDtBQUFBLCtEQUFtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwREYsZUE4REUscUVBQUMsOENBQUQsQ0FDRTtBQURGO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTWtDLEtBQUssQ0FBQyw2Q0FBRCxDQUFYO0FBQUEsT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVFRCxDQXJGRDs7R0FBTWhCLE07O0tBQUFBLE07QUF1RlNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kZXRhaWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtc3RhdGVtZW50cyAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYWRkLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL2J1dHRvblwiO1xuXG5pbXBvcnQge1xuICBBY2NvdW50SGVhZGxpbmUsXG4gIEFjY291bnRMYWJlbCxcbiAgQWNjb3VudFNlY3Rpb24sXG4gIEFjY291bnRMaXN0LFxuICBJbmZvVGV4dCxcbiAgSW5zZXQsXG4gIFJvd0NvbnRhaW5lcixcbn0gZnJvbSBcIi4vc3R5bGVcIjtcblxuXG5jb25zdCBzaW5jZVB1cmNoYXNlZCA9ICh7cmVjZW50VmFsdWF0aW9uLCBvcmlnaW5hbFB1cmNoYXNlUHJpY2UgfSkgPT4ge1xuICBjb25zdCBzaW5jZVBydWNoYXNlZFByaWNlID0gcmVjZW50VmFsdWF0aW9uIC0gb3JpZ2luYWxQdXJjaGFzZVByaWNlXG4gIGNvbnNvbGUubG9nKHNpbmNlUHJ1Y2hhc2VkUHJpY2UgKVxuICByZXR1cm4gKFxuICAgIHNpbmNlUHJ1Y2hhc2VkUHJpY2VcbiAgKTtcbn07XG5cbmNvbnN0IGFjY291bnQgPSB7XG4gIHVpZDogXCI2NTE1NmNkYy01Y2ZkLTRiMzQtYjYyNi00OWM4MzU2OWYzNWVcIixcbiAgZGVsZXRlZDogZmFsc2UsXG4gIGRhdGVDcmVhdGVkOiBcIjIwMjAtMTItMDNUMDg6NTU6MzMuNDIxWlwiLFxuICBjdXJyZW5jeTogXCJHQlBcIixcbiAgbmFtZTogXCIxNSBUZW1wbGUgV2F5XCIsXG4gIGJhbmtOYW1lOiBcIlJlc2lkZW50aWFsXCIsXG4gIHR5cGU6IFwicHJvcGVydGllc1wiLFxuICBzdWJUeXBlOiBcInJlc2lkZW50aWFsXCIsXG4gIG9yaWdpbmFsUHVyY2hhc2VQcmljZTogMjUwMDAwLFxuICBvcmlnaW5hbFB1cmNoYXNlUHJpY2VEYXRlOiBcIjIwMTctMDktMDNcIixcbiAgcmVjZW50VmFsdWF0aW9uOiB7IGFtb3VudDogMzEwMDAwLCBzdGF0dXM6IFwiZ29vZFwiIH0sXG4gIGFzc29jaWF0ZWRNb3J0Z2FnZXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkhTQkMgUmVwYXltZW50IE1vcnRnYWdlXCIsXG4gICAgICB1aWQ6IFwiZmI0NjMxMjEtYjUxYS00OTBkLTlmMTktZDJlYTc2ZjA1ZTI1XCIsXG4gICAgICBjdXJyZW50QmFsYW5jZTogLTE3NTAwMCxcbiAgICB9LFxuICBdLFxuICBjYW5CZU1hbmFnZWQ6IGZhbHNlLFxuICBwb3N0Y29kZTogXCJCUzEgMkFBXCIsXG4gIGxhc3RVcGRhdGU6IFwiMjAyMC0xMi0wMVQwODo1NTozMy40MjFaXCIsXG4gIHVwZGF0ZUFmdGVyRGF5czogMzAsXG59O1xuXG5jb25zdCBEZXRhaWwgPSAoe30pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3dcbiAgICAgIC5mZXRjaChcIi9hcGkvYWNjb3VudFwiKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGNvbnNvbGUubG9nKTtcbiAgfSwgW10pO1xuXG4gIGxldCBtb3J0Z2FnZTtcbiAgY29uc3QgbGFzdFVwZGF0ZSA9IG5ldyBEYXRlKGFjY291bnQubGFzdFVwZGF0ZSk7XG4gIGlmIChhY2NvdW50LmFzc29jaWF0ZWRNb3J0Z2FnZXMubGVuZ3RoKSB7XG4gICAgbW9ydGdhZ2UgPSBhY2NvdW50LmFzc29jaWF0ZWRNb3J0Z2FnZXNbMF07XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxJbnNldD5cbiAgICAgIDxBY2NvdW50U2VjdGlvbj5cbiAgICAgICAgPEFjY291bnRMYWJlbD5Fc3RpbWF0ZWQgVmFsdWU8L0FjY291bnRMYWJlbD5cbiAgICAgICAgPEFjY291bnRIZWFkbGluZT5cbiAgICAgICAgICB7bmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tR0JcIiwge1xuICAgICAgICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICAgICAgICAgIGN1cnJlbmN5OiBcIkdCUFwiLFxuICAgICAgICAgIH0pLmZvcm1hdChhY2NvdW50LnJlY2VudFZhbHVhdGlvbi5hbW91bnQpfVxuICAgICAgICA8L0FjY291bnRIZWFkbGluZT5cbiAgICAgICAgPEFjY291bnRMaXN0PlxuICAgICAgICAgIDxJbmZvVGV4dD5cbiAgICAgICAgICAgIHtgTGFzdCB1cGRhdGVkICR7Zm9ybWF0KGxhc3RVcGRhdGUsIFwiZG8gTU1NIHl5eXlcIil9YH1cbiAgICAgICAgICA8L0luZm9UZXh0PlxuICAgICAgICAgIDxJbmZvVGV4dD5cbiAgICAgICAgICAgIHtgTmV4dCB1cGRhdGUgJHtmb3JtYXQoXG4gICAgICAgICAgICAgIGFkZChsYXN0VXBkYXRlLCB7IGRheXM6IGFjY291bnQudXBkYXRlQWZ0ZXJEYXlzIH0pLFxuICAgICAgICAgICAgICBcImRvIE1NTSB5eXl5XCJcbiAgICAgICAgICAgICl9YH1cbiAgICAgICAgICA8L0luZm9UZXh0PlxuICAgICAgICA8L0FjY291bnRMaXN0PlxuICAgICAgPC9BY2NvdW50U2VjdGlvbj5cbiAgICAgIDxBY2NvdW50U2VjdGlvbj5cbiAgICAgICAgPEFjY291bnRMYWJlbD5Qcm9wZXJ0eSBkZXRhaWxzPC9BY2NvdW50TGFiZWw+XG4gICAgICAgIDxSb3dDb250YWluZXI+XG4gICAgICAgICAgPEFjY291bnRMaXN0PlxuICAgICAgICAgICAgPEluZm9UZXh0PnthY2NvdW50Lm5hbWV9PC9JbmZvVGV4dD5cbiAgICAgICAgICAgIDxJbmZvVGV4dD57YWNjb3VudC5iYW5rTmFtZX08L0luZm9UZXh0PlxuICAgICAgICAgICAgPEluZm9UZXh0PnthY2NvdW50LnBvc3Rjb2RlfTwvSW5mb1RleHQ+XG4gICAgICAgICAgPC9BY2NvdW50TGlzdD5cbiAgICAgICAgPC9Sb3dDb250YWluZXI+XG4gICAgICA8L0FjY291bnRTZWN0aW9uPlxuICAgICAge21vcnRnYWdlICYmIChcbiAgICAgICAgPEFjY291bnRTZWN0aW9uPlxuICAgICAgICAgIDxBY2NvdW50TGFiZWw+TW9ydGdhZ2U8L0FjY291bnRMYWJlbD5cbiAgICAgICAgICA8Um93Q29udGFpbmVyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgZHVtbXkgYWN0aW9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydChcIllvdSBoYXZlIG5hdmlnYXRlZCB0byB0aGUgbW9ydGdhZ2UgcGFnZVwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QWNjb3VudExpc3Q+XG4gICAgICAgICAgICAgIDxJbmZvVGV4dD5cbiAgICAgICAgICAgICAgICB7bmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tR0JcIiwge1xuICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiBcIkdCUFwiLFxuICAgICAgICAgICAgICAgIH0pLmZvcm1hdChcbiAgICAgICAgICAgICAgICAgIE1hdGguYWJzKGFjY291bnQuYXNzb2NpYXRlZE1vcnRnYWdlc1swXS5jdXJyZW50QmFsYW5jZSlcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0luZm9UZXh0PlxuICAgICAgICAgICAgICA8SW5mb1RleHQ+e2FjY291bnQuYXNzb2NpYXRlZE1vcnRnYWdlc1swXS5uYW1lfTwvSW5mb1RleHQ+XG4gICAgICAgICAgICA8L0FjY291bnRMaXN0PlxuICAgICAgICAgIDwvUm93Q29udGFpbmVyPlxuICAgICAgICA8L0FjY291bnRTZWN0aW9uPlxuICAgICAgKX1cbiAgICAgIDxBY2NvdW50U2VjdGlvbj5cbiAgICAgICAgPEFjY291bnRMYWJlbD5WYWx1YXRpb24gQ2hhbmdlczwvQWNjb3VudExhYmVsPlxuICAgICAgICA8Um93Q29udGFpbmVyPlxuICAgICAgICAgIDxBY2NvdW50TGlzdD5cbiAgICAgICAgICAgIDxJbmZvVGV4dD5QdXJjaGFzZWQgZm9yJm5ic3A7PHN0cm9uZz7CozE5OSw1MDA8L3N0cm9uZz4mbmJzcDsgaW4gU2VwdGVtYmVyIDIwMTU8L0luZm9UZXh0PlxuICAgICAgICAgICAgPEluZm9UZXh0PlNpbmNlIHB1cmNoYXNlJm5ic3A7PHN0cm9uZz7CozUwLDAwMCAoMjAlKTwvc3Ryb25nPntzaW5jZVB1cmNoYXNlZChhY2NvdW50KX08L0luZm9UZXh0PlxuICAgICAgICAgICAgPEluZm9UZXh0PkFubnVhbCBBcHByZWNpYXRpb24mbmJzcDs8c3Ryb25nPig1JSk8L3N0cm9uZz48L0luZm9UZXh0PlxuICAgICAgICAgIDwvQWNjb3VudExpc3Q+XG4gICAgICAgIDwvUm93Q29udGFpbmVyPlxuICAgICAgPC9BY2NvdW50U2VjdGlvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgLy8gVGhpcyBpcyBhIGR1bW15IGFjdGlvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydChcIllvdSBoYXZlIG5hdmlnYXRlZCB0byB0aGUgZWRpdCBhY2NvdW50IHBhZ2VcIil9XG4gICAgICA+XG4gICAgICAgIEVkaXQgYWNjb3VudFxuICAgICAgPC9CdXR0b24+XG4gICAgPC9JbnNldD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/detail.js\n");

/***/ })

})