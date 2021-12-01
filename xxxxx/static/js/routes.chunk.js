(this["webpackJsonporchestrator"] = this["webpackJsonporchestrator"] || []).push([["routes"],{

/***/ "./src/Components/Routes/MainApp.tsx":
/*!*******************************************!*\
  !*** ./src/Components/Routes/MainApp.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common_MicroFrontend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common/MicroFrontend */ "./src/Components/Common/MicroFrontend.js");
var _jsxFileName = "/Users/diego/Projects/micro-frontends/poc/orchestrator/front/src/Components/Routes/MainApp.tsx";


const MainAppRoutes = [{
  title: props => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, "Main App"));
  },
  aside: props => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 14
      }
    }, "Aside Main");
  },
  footer: props => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 14
      }
    }, "Footer Main App");
  },
  render: props => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_MicroFrontend__WEBPACK_IMPORTED_MODULE_1__["default"], {
      history: props.history,
      host: "/api/main-app",
      name: "Restaurant",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    });
  },
  path: "/",
  exact: true
}];
/* harmony default export */ __webpack_exports__["default"] = (MainAppRoutes);

/***/ }),

/***/ "./src/Components/Routes/index.tsx":
/*!*****************************************!*\
  !*** ./src/Components/Routes/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Common_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/Loading */ "./src/Components/Common/Loading/index.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/diego/Projects/micro-frontends/poc/orchestrator/front/src/Components/Routes/index.tsx";




/* harmony default export */ __webpack_exports__["default"] = (({
  routerPosition
}) => {
  const [routes, setRoutes] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [routeList, setRouteList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    (async function () {
      const routes = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/static/js/routes.chunk.js");
      setRoutes([]);
    })();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const myRouteList = routes && routes.map(route => {
      const routeProps = {
        key: route.path,
        path: route.path,
        exact: route.exact,
        render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)
      };
      let routeComponent = null;

      if (routerPosition !== "app") {
        routeProps.render = route[routerPosition];
        routeComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], Object.assign({}, routeProps, {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 28
          }
        }));
      } else {
        if (route.render) {
          routeProps.render = route.render;
        }

        routeComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], Object.assign({}, routeProps, {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 28
          }
        }));
      }

      return routeComponent;
    }); // if (myRouteList) setRouteList(myRouteList);
  }, [routes]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, routeList));
});

/***/ }),

/***/ "./src/Components/Routes/routes.js":
/*!*****************************************!*\
  !*** ./src/Components/Routes/routes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainApp */ "./src/Components/Routes/MainApp.tsx");

/* harmony default export */ __webpack_exports__["default"] = ([..._MainApp__WEBPACK_IMPORTED_MODULE_0__["default"]]);

/***/ })

}]);
//# sourceMappingURL=routes.chunk.js.map