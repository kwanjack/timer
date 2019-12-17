webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/StatusIndicator.js":
/*!***************************************!*\
  !*** ./components/StatusIndicator.js ***!
  \***************************************/
/*! exports provided: StatusIndicator, BigStatusIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusIndicator", function() { return StatusIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigStatusIndicator", function() { return BigStatusIndicator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/Users/jackkwan/Projects/papulatus/components/StatusIndicator.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var StatusIndicator = function StatusIndicator(_ref) {
  var msLeft = _ref.msLeft,
      pickedTime = _ref.pickedTime,
      isPaused = _ref.isPaused;
  var status = 'PLAY';

  if (pickedTime === msLeft) {
    status = 'RESET';
  } else if (msLeft === 0) {
    status = 'BEEP';
  } else if (isPaused) {
    status = 'PAUSE';
  }

  ;
  var transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useTransition"])(status, null, {
    from: {
      position: 'absolute',
      opacity: 0
    },
    enter: {
      opacity: 0.5
    },
    leave: {
      opacity: 0
    }
  });
  var icons = {
    PLAY: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPause"],
    PAUSE: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlay"],
    RESET: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUndo"],
    BEEP: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBell"]
  };
  return __jsx("div", {
    className: "status-indicator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, transitions.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;
    return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
      key: key,
      style: props,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: icons[item],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }));
  }));
};
var BigStatusIndicator = function BigStatusIndicator(_ref3) {
  var msLeft = _ref3.msLeft,
      pickedTime = _ref3.pickedTime,
      isPaused = _ref3.isPaused;
  var status = 'PLAY';

  if (pickedTime === msLeft) {
    status = 'RESET';
  } else if (msLeft === 0) {
    status = 'BEEP';
  } else if (isPaused) {
    status = 'PAUSE';
  }

  ;
  var transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useTransition"])(status, function (status) {
    return status;
  }, {
    from: {
      position: 'absolute',
      opacity: 0
    },
    enter: [{
      opacity: 0.1
    }, {
      opacity: 0
    }],
    leave: {
      opacity: 0
    }
  });
  var icons = {
    PLAY: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlay"],
    PAUSE: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPause"],
    RESET: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUndo"],
    BEEP: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBell"]
  };
  return __jsx("div", {
    className: "big-status-indicator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, transitions.map(function (_ref4) {
    var item = _ref4.item,
        key = _ref4.key,
        props = _ref4.props;
    return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
      key: key,
      style: props,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: icons[item],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }));
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.787c00eaf60ddc161c93.hot-update.js.map