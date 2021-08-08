webpackHotUpdate_N_E("pages/index",{

/***/ "./components/detail.js":
/*!******************************!*\
  !*** ./components/detail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_vivienneobrien_Desktop_mh2_tech_test_main_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button */ \"./components/button.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ \"./components/style.js\");\n\n\n\nvar _jsxFileName = \"/Users/vivienneobrien/Desktop/mh2-tech-test-main/components/detail.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable max-statements */\n\n\n\n\n\nvar account = {\n  uid: \"65156cdc-5cfd-4b34-b626-49c83569f35e\",\n  deleted: false,\n  dateCreated: \"2020-12-03T08:55:33.421Z\",\n  currency: \"GBP\",\n  name: \"15 Temple Way\",\n  bankName: \"Residential\",\n  type: \"properties\",\n  subType: \"residential\",\n  originalPurchasePrice: 250000,\n  originalPurchasePriceDate: \"2017-09-03\",\n  recentValuation: {\n    amount: 310000,\n    status: \"good\"\n  },\n  associatedMortgages: [{\n    name: \"HSBC Repayment Mortgage\",\n    uid: \"fb463121-b51a-490d-9f19-d2ea76f05e25\",\n    currentBalance: -175000\n  }],\n  canBeManaged: false,\n  postcode: \"BS1 2AA\",\n  lastUpdate: \"2020-12-01T08:55:33.421Z\",\n  updateAfterDays: 30\n};\n\nvar Detail = function Detail(_ref) {\n  _s();\n\n  Object(_Users_vivienneobrien_Desktop_mh2_tech_test_main_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    window.fetch(\"/api/account\").then(function (res) {\n      return res.json();\n    }).then(console.log);\n  }, []);\n  var mortgage;\n  var lastUpdate = new Date(account.lastUpdate);\n\n  if (account.associatedMortgages.length) {\n    mortgage = account.associatedMortgages[0];\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"Inset\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountLabel\"], {\n        children: \"Estimated Value\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountHeadline\"], {\n        children: new Intl.NumberFormat(\"en-GB\", {\n          style: \"currency\",\n          currency: \"GBP\"\n        }).format(account.recentValuation.amount)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountList\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n          children: \"Last updated \".concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"format\"])(lastUpdate, \"do MMM yyyy\"))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n          children: \"Next update \".concat(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"add\"])(lastUpdate, {\n            days: account.updateAfterDays\n          }), \"do MMM yyyy\"))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountLabel\"], {\n        children: \"Property details\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"RowContainer\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountList\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n            children: account.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n            children: account.bankName\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n            children: account.postcode\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this), mortgage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountLabel\"], {\n        children: \"Mortgage\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"RowContainer\"] // This is a dummy action\n      , {\n        onClick: function onClick() {\n          return alert(\"You have navigated to the mortgage page\");\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountList\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n            children: new Intl.NumberFormat(\"en-GB\", {\n              style: \"currency\",\n              currency: \"GBP\"\n            }).format(Math.abs(account.associatedMortgages[0].currentBalance))\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n            children: account.associatedMortgages[0].name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountSection\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountLabel\"], {\n        children: \"Valuation Changes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"RowContainer\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"AccountList\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n            children: [\"Purchased for \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \"\\xA3199,500\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 37\n            }, _this), \" in September 2015\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n            children: [\"Since purchase \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \" \\xA350,000 (20%)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 38\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_style__WEBPACK_IMPORTED_MODULE_6__[\"InfoText\"], {\n            children: [\"Annual Appreciation \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"strong\", {\n              children: \" (5%)\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 43\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_button__WEBPACK_IMPORTED_MODULE_5__[\"Button\"] // This is a dummy action\n    , {\n      onClick: function onClick() {\n        return alert(\"You have navigated to the edit account page\");\n      },\n      children: \"Edit account\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Detail, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Detail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\n\nvar _c;\n\n$RefreshReg$(_c, \"Detail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZXRhaWwuanM/MjkwYiJdLCJuYW1lcyI6WyJhY2NvdW50IiwidWlkIiwiZGVsZXRlZCIsImRhdGVDcmVhdGVkIiwiY3VycmVuY3kiLCJuYW1lIiwiYmFua05hbWUiLCJ0eXBlIiwic3ViVHlwZSIsIm9yaWdpbmFsUHVyY2hhc2VQcmljZSIsIm9yaWdpbmFsUHVyY2hhc2VQcmljZURhdGUiLCJyZWNlbnRWYWx1YXRpb24iLCJhbW91bnQiLCJzdGF0dXMiLCJhc3NvY2lhdGVkTW9ydGdhZ2VzIiwiY3VycmVudEJhbGFuY2UiLCJjYW5CZU1hbmFnZWQiLCJwb3N0Y29kZSIsImxhc3RVcGRhdGUiLCJ1cGRhdGVBZnRlckRheXMiLCJEZXRhaWwiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm1vcnRnYWdlIiwiRGF0ZSIsImxlbmd0aCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImZvcm1hdCIsImFkZCIsImRheXMiLCJhbGVydCIsIk1hdGgiLCJhYnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBLElBQU1BLE9BQU8sR0FBRztBQUNkQyxLQUFHLEVBQUUsc0NBRFM7QUFFZEMsU0FBTyxFQUFFLEtBRks7QUFHZEMsYUFBVyxFQUFFLDBCQUhDO0FBSWRDLFVBQVEsRUFBRSxLQUpJO0FBS2RDLE1BQUksRUFBRSxlQUxRO0FBTWRDLFVBQVEsRUFBRSxhQU5JO0FBT2RDLE1BQUksRUFBRSxZQVBRO0FBUWRDLFNBQU8sRUFBRSxhQVJLO0FBU2RDLHVCQUFxQixFQUFFLE1BVFQ7QUFVZEMsMkJBQXlCLEVBQUUsWUFWYjtBQVdkQyxpQkFBZSxFQUFFO0FBQUVDLFVBQU0sRUFBRSxNQUFWO0FBQWtCQyxVQUFNLEVBQUU7QUFBMUIsR0FYSDtBQVlkQyxxQkFBbUIs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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwREYsZUE4REUscUVBQUMsOENBQUQsQ0FDRTtBQURGO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTWlDLEtBQUssQ0FBQyw2Q0FBRCxDQUFYO0FBQUEsT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVFRCxDQXJGRDs7R0FBTWxCLE07O0tBQUFBLE07QUF1RlNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kZXRhaWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtc3RhdGVtZW50cyAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYWRkLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL2J1dHRvblwiO1xuXG5pbXBvcnQge1xuICBBY2NvdW50SGVhZGxpbmUsXG4gIEFjY291bnRMYWJlbCxcbiAgQWNjb3VudFNlY3Rpb24sXG4gIEFjY291bnRMaXN0LFxuICBJbmZvVGV4dCxcbiAgSW5zZXQsXG4gIFJvd0NvbnRhaW5lcixcbn0gZnJvbSBcIi4vc3R5bGVcIjtcblxuY29uc3QgYWNjb3VudCA9IHtcbiAgdWlkOiBcIjY1MTU2Y2RjLTVjZmQtNGIzNC1iNjI2LTQ5YzgzNTY5ZjM1ZVwiLFxuICBkZWxldGVkOiBmYWxzZSxcbiAgZGF0ZUNyZWF0ZWQ6IFwiMjAyMC0xMi0wM1QwODo1NTozMy40MjFaXCIsXG4gIGN1cnJlbmN5OiBcIkdCUFwiLFxuICBuYW1lOiBcIjE1IFRlbXBsZSBXYXlcIixcbiAgYmFua05hbWU6IFwiUmVzaWRlbnRpYWxcIixcbiAgdHlwZTogXCJwcm9wZXJ0aWVzXCIsXG4gIHN1YlR5cGU6IFwicmVzaWRlbnRpYWxcIixcbiAgb3JpZ2luYWxQdXJjaGFzZVByaWNlOiAyNTAwMDAsXG4gIG9yaWdpbmFsUHVyY2hhc2VQcmljZURhdGU6IFwiMjAxNy0wOS0wM1wiLFxuICByZWNlbnRWYWx1YXRpb246IHsgYW1vdW50OiAzMTAwMDAsIHN0YXR1czogXCJnb29kXCIgfSxcbiAgYXNzb2NpYXRlZE1vcnRnYWdlczogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiSFNCQyBSZXBheW1lbnQgTW9ydGdhZ2VcIixcbiAgICAgIHVpZDogXCJmYjQ2MzEyMS1iNTFhLTQ5MGQtOWYxOS1kMmVhNzZmMDVlMjVcIixcbiAgICAgIGN1cnJlbnRCYWxhbmNlOiAtMTc1MDAwLFxuICAgIH0sXG4gIF0sXG4gIGNhbkJlTWFuYWdlZDogZmFsc2UsXG4gIHBvc3Rjb2RlOiBcIkJTMSAyQUFcIixcbiAgbGFzdFVwZGF0ZTogXCIyMDIwLTEyLTAxVDA4OjU1OjMzLjQyMVpcIixcbiAgdXBkYXRlQWZ0ZXJEYXlzOiAzMCxcbn07XG5cbmNvbnN0IERldGFpbCA9ICh7fSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvd1xuICAgICAgLmZldGNoKFwiL2FwaS9hY2NvdW50XCIpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oY29uc29sZS5sb2cpO1xuICB9LCBbXSk7XG5cbiAgbGV0IG1vcnRnYWdlO1xuICBjb25zdCBsYXN0VXBkYXRlID0gbmV3IERhdGUoYWNjb3VudC5sYXN0VXBkYXRlKTtcbiAgaWYgKGFjY291bnQuYXNzb2NpYXRlZE1vcnRnYWdlcy5sZW5ndGgpIHtcbiAgICBtb3J0Z2FnZSA9IGFjY291bnQuYXNzb2NpYXRlZE1vcnRnYWdlc1swXTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEluc2V0PlxuICAgICAgPEFjY291bnRTZWN0aW9uPlxuICAgICAgICA8QWNjb3VudExhYmVsPkVzdGltYXRlZCBWYWx1ZTwvQWNjb3VudExhYmVsPlxuICAgICAgICA8QWNjb3VudEhlYWRsaW5lPlxuICAgICAgICAgIHtuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1HQlwiLCB7XG4gICAgICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgICAgICAgY3VycmVuY3k6IFwiR0JQXCIsXG4gICAgICAgICAgfSkuZm9ybWF0KGFjY291bnQucmVjZW50VmFsdWF0aW9uLmFtb3VudCl9XG4gICAgICAgIDwvQWNjb3VudEhlYWRsaW5lPlxuICAgICAgICA8QWNjb3VudExpc3Q+XG4gICAgICAgICAgPEluZm9UZXh0PlxuICAgICAgICAgICAge2BMYXN0IHVwZGF0ZWQgJHtmb3JtYXQobGFzdFVwZGF0ZSwgXCJkbyBNTU0geXl5eVwiKX1gfVxuICAgICAgICAgIDwvSW5mb1RleHQ+XG4gICAgICAgICAgPEluZm9UZXh0PlxuICAgICAgICAgICAge2BOZXh0IHVwZGF0ZSAke2Zvcm1hdChcbiAgICAgICAgICAgICAgYWRkKGxhc3RVcGRhdGUsIHsgZGF5czogYWNjb3VudC51cGRhdGVBZnRlckRheXMgfSksXG4gICAgICAgICAgICAgIFwiZG8gTU1NIHl5eXlcIlxuICAgICAgICAgICAgKX1gfVxuICAgICAgICAgIDwvSW5mb1RleHQ+XG4gICAgICAgIDwvQWNjb3VudExpc3Q+XG4gICAgICA8L0FjY291bnRTZWN0aW9uPlxuICAgICAgPEFjY291bnRTZWN0aW9uPlxuICAgICAgICA8QWNjb3VudExhYmVsPlByb3BlcnR5IGRldGFpbHM8L0FjY291bnRMYWJlbD5cbiAgICAgICAgPFJvd0NvbnRhaW5lcj5cbiAgICAgICAgICA8QWNjb3VudExpc3Q+XG4gICAgICAgICAgICA8SW5mb1RleHQ+e2FjY291bnQubmFtZX08L0luZm9UZXh0PlxuICAgICAgICAgICAgPEluZm9UZXh0PnthY2NvdW50LmJhbmtOYW1lfTwvSW5mb1RleHQ+XG4gICAgICAgICAgICA8SW5mb1RleHQ+e2FjY291bnQucG9zdGNvZGV9PC9JbmZvVGV4dD5cbiAgICAgICAgICA8L0FjY291bnRMaXN0PlxuICAgICAgICA8L1Jvd0NvbnRhaW5lcj5cbiAgICAgIDwvQWNjb3VudFNlY3Rpb24+XG4gICAgICB7bW9ydGdhZ2UgJiYgKFxuICAgICAgICA8QWNjb3VudFNlY3Rpb24+XG4gICAgICAgICAgPEFjY291bnRMYWJlbD5Nb3J0Z2FnZTwvQWNjb3VudExhYmVsPlxuICAgICAgICAgIDxSb3dDb250YWluZXJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBkdW1teSBhY3Rpb25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFsZXJ0KFwiWW91IGhhdmUgbmF2aWdhdGVkIHRvIHRoZSBtb3J0Z2FnZSBwYWdlXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBY2NvdW50TGlzdD5cbiAgICAgICAgICAgICAgPEluZm9UZXh0PlxuICAgICAgICAgICAgICAgIHtuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1HQlwiLCB7XG4gICAgICAgICAgICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IFwiR0JQXCIsXG4gICAgICAgICAgICAgICAgfSkuZm9ybWF0KFxuICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoYWNjb3VudC5hc3NvY2lhdGVkTW9ydGdhZ2VzWzBdLmN1cnJlbnRCYWxhbmNlKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvSW5mb1RleHQ+XG4gICAgICAgICAgICAgIDxJbmZvVGV4dD57YWNjb3VudC5hc3NvY2lhdGVkTW9ydGdhZ2VzWzBdLm5hbWV9PC9JbmZvVGV4dD5cbiAgICAgICAgICAgIDwvQWNjb3VudExpc3Q+XG4gICAgICAgICAgPC9Sb3dDb250YWluZXI+XG4gICAgICAgIDwvQWNjb3VudFNlY3Rpb24+XG4gICAgICApfVxuICAgICAgPEFjY291bnRTZWN0aW9uPlxuICAgICAgICA8QWNjb3VudExhYmVsPlZhbHVhdGlvbiBDaGFuZ2VzPC9BY2NvdW50TGFiZWw+XG4gICAgICAgIDxSb3dDb250YWluZXI+XG4gICAgICAgICAgPEFjY291bnRMaXN0PlxuICAgICAgICAgICAgPEluZm9UZXh0PlB1cmNoYXNlZCBmb3IgPHN0cm9uZz7CozE5OSw1MDA8L3N0cm9uZz4gaW4gU2VwdGVtYmVyIDIwMTU8L0luZm9UZXh0PlxuICAgICAgICAgICAgPEluZm9UZXh0PlNpbmNlIHB1cmNoYXNlIDxzdHJvbmc+IMKjNTAsMDAwICgyMCUpPC9zdHJvbmc+PC9JbmZvVGV4dD5cbiAgICAgICAgICAgIDxJbmZvVGV4dD5Bbm51YWwgQXBwcmVjaWF0aW9uIDxzdHJvbmc+ICg1JSk8L3N0cm9uZz48L0luZm9UZXh0PlxuICAgICAgICAgIDwvQWNjb3VudExpc3Q+XG4gICAgICAgIDwvUm93Q29udGFpbmVyPlxuICAgICAgPC9BY2NvdW50U2VjdGlvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgLy8gVGhpcyBpcyBhIGR1bW15IGFjdGlvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbGVydChcIllvdSBoYXZlIG5hdmlnYXRlZCB0byB0aGUgZWRpdCBhY2NvdW50IHBhZ2VcIil9XG4gICAgICA+XG4gICAgICAgIEVkaXQgYWNjb3VudFxuICAgICAgPC9CdXR0b24+XG4gICAgPC9JbnNldD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/detail.js\n");

/***/ })

})