"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("next/node_modules/babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("next/node_modules/babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _jsxFileName = "/Users/thomas/dev/wild-next/pages/_document.js?entry";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _document = require("next/dist/server/document.js");

var _document2 = _interopRequireDefault(_document);

var _server = require("styled-jsx/server");

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);
    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: "render",
    value: function render() {
      // make the environment available on the client
      var envScript = "window.ENV = '" + (process.env.NODE_ENV || "development") + "';";
      return _react2.default.createElement("html", { lang: "en", __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement("link", { rel: "shortcut icon", href: "/static/favicon.ico", __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement("script", { dangerouslySetInnerHTML: { __html: envScript }, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })), _react2.default.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _document2.default.getInitialProps(ctx));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJNeURvY3VtZW50IiwiZW52U2NyaXB0IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiX19odG1sIiwiY3R4IiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCLEE7Ozs7Ozs7Ozs7NkJBTVYsQUFDUDtBQUNBO1VBQU0sZ0NBQTZCLFFBQUEsQUFBUSxJQUFSLEFBQVksWUFBekMsQUFBcUQsaUJBQTNELEFBQ0E7NkJBQ0UsY0FBQSxVQUFNLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSx3QkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsaURBQ1EsTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7b0JBQTlCO3NCQURGLEFBQ0UsQUFDQTtBQURBO2tEQUNNLEtBQU4sQUFBVSxpQkFBZ0IsTUFBMUIsQUFBK0I7b0JBQS9CO3NCQUZGLEFBRUUsQUFDQTtBQURBO29EQUNRLHlCQUF5QixFQUFDLFFBQWxDLEFBQWlDLEFBQVM7b0JBQTFDO3NCQUpKLEFBQ0UsQUFHRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUE7O29CQUNFO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUE7O29CQUNBO3NCQVROLEFBQ0UsQUFNRSxBQUVFLEFBSVA7QUFKTztBQUFBOzs7OzsyR0FoQnNCLEE7Ozs7O2lEQUNyQixtQkFBQSxBQUFTLGdCQUFULEFBQXlCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUhmLEEiLCJmaWxlIjoiX2RvY3VtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90aG9tYXMvZGV2L3dpbGQtbmV4dCJ9