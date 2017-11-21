"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("next/node_modules/babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("next/node_modules/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("next/node_modules/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("next/node_modules/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("next/node_modules/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = "/Users/thomas/dev/wild-next/pages/_error.js?entry";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _httpStatus = require("http-status");

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Error = function (_React$Component) {
  (0, _inherits3.default)(Error, _React$Component);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);
    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
  }

  (0, _createClass3.default)(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;

      var title = statusCode === 404 ? "This page could not be found" : _httpStatus2.default[statusCode] || "An unexpected error has occurred";

      return _react2.default.createElement("div", { style: styles.error, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0", __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement("style", { dangerouslySetInnerHTML: { __html: "body { margin: 0 }" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), statusCode ? _react2.default.createElement("h1", { style: styles.h1, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, statusCode) : null, _react2.default.createElement("div", { style: styles.desc, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement("h2", { style: styles.h2, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, title, "."))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;

      var statusCode = res ? res.statusCode : err ? err.statusCode : null; // eslint-disable-line no-nested-ternary
      return { statusCode: statusCode };
    }
  }]);
  return Error;
}(_react2.default.Component);

exports.default = Error;

var styles = {
  error: {
    color: "#000",
    background: "#fff",
    fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif",
    height: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  desc: {
    display: "inline-block",
    textAlign: "left",
    lineHeight: "49px",
    height: "49px",
    verticalAlign: "middle"
  },

  h1: {
    display: "inline-block",
    borderRight: "1px solid rgba(0, 0, 0,.3)",
    margin: 0,
    marginRight: "20px",
    padding: "10px 23px 10px 0",
    fontSize: "24px",
    fontWeight: 500,
    verticalAlign: "top"
  },

  h2: {
    fontSize: "14px",
    fontWeight: "normal",
    margin: 0,
    padding: 0
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInN0YXR1c0NvZGUiLCJwcm9wcyIsInRpdGxlIiwic3R5bGVzIiwiZXJyb3IiLCJfX2h0bWwiLCJoMSIsImRlc2MiLCJoMiIsInJlcyIsImVyciIsIkNvbXBvbmVudCIsImNvbG9yIiwiYmFja2dyb3VuZCIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImxpbmVIZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiYm9yZGVyUmlnaHQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0ksQUFFcUI7Ozs7Ozs7Ozs7NkJBTVY7VUFBQSxBQUNDLGFBQWUsS0FEaEIsQUFDcUIsTUFEckIsQUFDQyxBQUNSOztVQUFNLFFBQVEsZUFBQSxBQUFlLE1BQWYsQUFDVixpQ0FDQSxxQkFBQSxBQUFXLGVBRmYsQUFFOEIsQUFFOUI7OzZCQUFRLGNBQUEsU0FBSyxPQUFPLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFBLEFBQ047QUFETTtPQUFBLGtCQUNOLHFCQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxpREFDUSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtvQkFBOUI7c0JBRkksQUFDTixBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxrREFDUyx5QkFBeUIsRUFBRSxRQUFsQyxBQUFnQyxBQUFVO29CQUExQztzQkFERixBQUNFLEFBQ0M7QUFERDt1Q0FDYyxjQUFBLFFBQUksT0FBTyxPQUFYLEFBQWtCO29CQUFsQjtzQkFBQSxBQUF1QjtBQUF2QjtPQUFBLEVBQWIsQUFBYSxjQUZoQixBQUUwRCxBQUN4RCxzQkFBQSxjQUFBLFNBQUssT0FBTyxPQUFaLEFBQW1CO29CQUFuQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxRQUFJLE9BQU8sT0FBWCxBQUFrQjtvQkFBbEI7c0JBQUEsQUFBdUI7QUFBdkI7U0FBQSxPQVJOLEFBQVEsQUFJTixBQUdFLEFBQ0UsQUFJUDs7OzswQ0F2Qm9DO1VBQVosQUFBWSxXQUFaLEFBQVk7VUFBUCxBQUFPLFdBQVAsQUFBTyxBQUNuQzs7VUFBTSxhQUFhLE1BQU0sSUFBTixBQUFVLGFBQWMsTUFBTSxJQUFOLEFBQVUsYUFEbEIsQUFDbkMsQUFBa0UsTUFBTyxBQUN6RTthQUFPLEVBQUUsWUFBVCxBQUFPLEFBQ1I7Ozs7RUFKZ0MsZ0JBQU0sQTs7a0IsQUFBcEI7O0FBMkJyQixJQUFNOztXQUNHLEFBQ0UsQUFDUDtnQkFGSyxBQUVPLEFBQ1o7Z0JBSEssQUFHTyxBQUNaO1lBSkssQUFJRyxBQUNSO2VBTEssQUFLTSxBQUNYO2FBTkssQUFNSSxBQUNUO21CQVBLLEFBT1UsQUFDZjtnQkFSSyxBQVFPLEFBQ1o7b0JBVlcsQUFDTixBQVNXLEFBR2xCO0FBWk8sQUFDTDs7O2FBV0ksQUFDSyxBQUNUO2VBRkksQUFFTyxBQUNYO2dCQUhJLEFBR1EsQUFDWjtZQUpJLEFBSUksQUFDUjttQkFsQlcsQUFhUCxBQUtXLEFBR2pCO0FBUk0sQUFDSjs7O2FBT0UsQUFDTyxBQUNUO2lCQUZFLEFBRVcsQUFDYjtZQUhFLEFBR00sQUFDUjtpQkFKRSxBQUlXLEFBQ2I7YUFMRSxBQUtPLEFBQ1Q7Y0FORSxBQU1RLEFBQ1Y7Z0JBUEUsQUFPVSxBQUNaO21CQTdCVyxBQXFCVCxBQVFhLEFBR2pCO0FBWEksQUFDRjs7O2NBVUUsQUFDUSxBQUNWO2dCQUZFLEFBRVUsQUFDWjtZQUhFLEFBR00sQUFDUjthQXBDSixBQUFlLEFBZ0NULEFBSU87QUFKUCxBQUNGO0FBakNXLEFBQ2IiLCJmaWxlIjoiX2Vycm9yLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90aG9tYXMvZGV2L3dpbGQtbmV4dCJ9