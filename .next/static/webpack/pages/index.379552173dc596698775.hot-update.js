webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Gallery/Gallery.js":
/*!***************************************!*\
  !*** ./components/Gallery/Gallery.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _jsxFileName = \"/Users/daniel.perez/Documents/daniel/printingSolutions/ps-page-new/components/Gallery/Gallery.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar PsGallery = function PsGallery() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentSlide = _useState[0],\n      setCurrentSlide = _useState[1];\n\n  var activeImage = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var lightboxContainer = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var gallery = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(); //   useEffect(() => {\n  //     console.log(lightboxContainer.current);\n  //     // debugger;\n  //   }, []);\n\n  var images = ['https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fshutterstock_242497756.jpg?alt=media&token=df882298-4bd4-4f92-8999-f7d3484a96b3', 'https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fshutterstock_1719513457.jpg?alt=media&token=e09e6c78-ea16-4370-b6ec-82b9a8a02289', 'https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fshutterstock_1347514346.jpg?alt=media&token=987ba22d-738b-4964-b237-3eb9cf78203b', 'https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fshutterstock_1158108100.jpg?alt=media&token=99199a46-3f2a-47c0-b014-86c5f86d96dd', 'https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2FIMG_6363.jpg?alt=media&token=4e83b555-204e-4391-900a-b04dd7372956', 'https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2FIMG_6333.jpg?alt=media&token=a4d6e3f0-38b4-4b1b-9526-c1fed4b341cb', 'https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2FIMG_6311.jpg?alt=media&token=e72e9592-ad1d-457e-baea-0a5cfd33739c', 'https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2FIMG_6305.jpg?alt=media&token=d19ff4bc-0915-4bf6-ab8c-02bcb999c6fa', 'https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2FIMG_6317.jpg?alt=media&token=80f4b538-f6cf-43f5-b471-9315b11981f1'];\n  var imagesSmall = ['https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2Fshutterstock_242497756.jpg?alt=media&token=c2857bec-c4f2-4c81-850c-dc8436af103f', 'https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2Fshutterstock_1719513457.jpg?alt=media&token=44e502d5-ce71-46bd-ade5-143e8517bd54', 'https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2Fshutterstock_1347514346.jpg?alt=media&token=57568d4f-0506-4c8b-9bca-2aea8c307705', 'https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2Fshutterstock_1158108100.jpg?alt=media&token=dd52fa09-9bff-41b2-9690-48eb10759190', 'https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2FIMG_6363.jpg?alt=media&token=1ba5a901-1e54-4340-bafe-bee73bdd87c5', 'https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2FIMG_6333.jpg?alt=media&token=acecdf77-9b97-4233-84cf-85e634a8045e', 'https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2FIMG_6317.jpg?alt=media&token=76cc17da-973f-4ecc-94bc-622944cee802', 'https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2FIMG_6311.jpg?alt=media&token=2e750e47-80ca-4145-bdc5-8b4fb0997db1', 'https://firebasestorage.googleapis.com/v0/b/printing-solutions-co.appspot.com/o/gallery%2Fsmall%2FIMG_6305.jpg?alt=media&token=09d9b31c-ae9f-4854-9a1a-dd6365fc5987'];\n\n  var openModal = function openModal() {\n    lightboxContainer.current.style.display = 'flex';\n    document.body.style.overflow = 'hidden';\n    gallery.current.style.filter = 'blur(5px)';\n  };\n\n  var closeModal = function closeModal() {// lightboxContainer.current.style.display = 'none';\n    // document.body.style.overflow = 'initial';\n    // gallery.current.style.filter = 'blur(0)';\n  };\n\n  var changeImage = function changeImage(n) {// activeImage.current.src = images[n];\n    // setCurrentSlide(n);\n    // return currentSlide;\n  };\n\n  var onHandleClickImage = function onHandleClickImage(i) {\n    openModal();\n    changeImage(i);\n  };\n\n  var nextSlide = function nextSlide(n) {// if (currentSlide < 1 && n == -1) {\n    //   setCurrentSlide(images.length - 1);\n    //   activeImage.current.src = images[currentSlide];\n    //   return currentSlide;\n    // } else if (\n    //   currentSlide < images.length - 1 &&\n    //   currentSlide >= 0 &&\n    //   n == 1\n    // ) {\n    //   setCurrentSlide(currentSlide + 1);\n    //   activeImage.current.src = images[currentSlide];\n    //   return currentSlide;\n    // } else if (currentSlide == images.length - 1 && n == 1) {\n    //   setCurrentSlide(0);\n    //   activeImage.current.src = images[currentSlide];\n    //   return currentSlide;\n    // } else {\n    //   setCurrentSlide(currentSlide - 1);\n    //   activeImage.current.src = images[currentSlide];\n    //   return currentSlide;\n    // }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"gallery\",\n      ref: gallery,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"row\",\n        children: imagesSmall.map(function (image, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: image,\n            onClick: function onClick() {\n              onHandleClickImage(index);\n            },\n            alt: \"Printer Image\"\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"lightboxContainer\",\n      ref: lightboxContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"lightbox\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"close\",\n          onClick: closeModal,\n          children: \"\\u2716\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"prev\",\n          onClick: nextSlide(-1),\n          children: \"<\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"activeImage\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            id: \"activeImage\",\n            ref: activeImage,\n            src: images[0],\n            alt: \"Printing Solutions\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"next\",\n          onClick: nextSlide(1),\n          children: \">\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(PsGallery, \"yqPBXVBJijJJR4mLMUn02KnuoqM=\");\n\n_c = PsGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PsGallery);\n\nvar _c;\n\n$RefreshReg$(_c, \"PsGallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYWxsZXJ5L0dhbGxlcnkuanM/MTUyYyJdLCJuYW1lcyI6WyJQc0dhbGxlcnkiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsImFjdGl2ZUltYWdlIiwidXNlUmVmIiwibGlnaHRib3hDb250YWluZXIiLCJnYWxsZXJ5IiwiaW1hZ2VzIiwiaW1hZ2VzU21hbGwiLCJvcGVuTW9kYWwiLCJjdXJyZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiZG9jdW1lbnQiLCJib2R5Iiwib3ZlcmZsb3ciLCJmaWx0ZXIiLCJjbG9zZU1vZGFsIiwiY2hhbmdlSW1hZ2UiLCJuIiwib25IYW5kbGVDbGlja0ltYWdlIiwiaSIsIm5leHRTbGlkZSIsIm1hcCIsImltYWdlIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUMsQ0FBRCxDQUQxQjtBQUFBLE1BQ2ZDLFlBRGU7QUFBQSxNQUNEQyxlQURDOztBQUV0QixNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLEVBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUdELG9EQUFNLEVBQWhDO0FBQ0EsTUFBTUUsT0FBTyxHQUFHRixvREFBTSxFQUF0QixDQUpzQixDQU10QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRyxNQUFNLEdBQUcsQ0FDYiwyS0FEYSxFQUViLDRLQUZhLEVBR2IsNEtBSGEsRUFJYiw0S0FKYSxFQUtiLDZKQUxhLEVBTWIsNkpBTmEsRUFPYiw2SkFQYSxFQVFiLDZKQVJhLEVBU2IsNkpBVGEsQ0FBZjtBQVlBLE1BQU1DLFdBQVcsR0FBRyxDQUNsQixtTEFEa0IsRUFFbEIsb0xBRmtCLEVBR2xCLG9MQUhrQixFQUlsQixvTEFKa0IsRUFLbEIscUtBTGtCLEVBTWxCLHFLQU5rQixFQU9sQixxS0FQa0IsRUFRbEIscUtBUmtCLEVBU2xCLHFLQVRrQixDQUFwQjs7QUFZQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCSixxQkFBaUIsQ0FBQ0ssT0FBbEIsQ0FBMEJDLEtBQTFCLENBQWdDQyxPQUFoQyxHQUEwQyxNQUExQztBQUNBQyxZQUFRLENBQUNDLElBQVQsQ0FBY0gsS0FBZCxDQUFvQkksUUFBcEIsR0FBK0IsUUFBL0I7QUFDQVQsV0FBTyxDQUFDSSxPQUFSLENBQWdCQyxLQUFoQixDQUFzQkssTUFBdEIsR0FBK0IsV0FBL0I7QUFDRCxHQUpEOztBQU1BLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU0sQ0FDdkI7QUFDQTtBQUNBO0FBQ0QsR0FKRDs7QUFLQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxDQUFDLEVBQUksQ0FDdkI7QUFDQTtBQUNBO0FBQ0QsR0FKRDs7QUFNQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLENBQUMsRUFBSTtBQUM5QlosYUFBUztBQUNUUyxlQUFXLENBQUNHLENBQUQsQ0FBWDtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQUgsQ0FBQyxFQUFJLENBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBdEJEOztBQXdCQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBeUIsU0FBRyxFQUFFYixPQUE5QjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0dFLFdBQVcsQ0FBQ2UsR0FBWixDQUFnQixVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSw4QkFDZjtBQUNFLGVBQUcsRUFBRUQsS0FEUDtBQUdFLG1CQUFPLEVBQUUsbUJBQU07QUFDYkosZ0NBQWtCLENBQUNLLEtBQUQsQ0FBbEI7QUFDRCxhQUxIO0FBTUUsZUFBRyxFQUFDO0FBTk4sYUFFT0EsS0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURlO0FBQUEsU0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBZ0JFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQW1DLFNBQUcsRUFBRXBCLGlCQUF4QztBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLE9BQWY7QUFBdUIsaUJBQU8sRUFBRVksVUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFzQixpQkFBTyxFQUFFSyxTQUFTLENBQUMsQ0FBQyxDQUFGLENBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBUUU7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxpQ0FDRTtBQUNFLGNBQUUsRUFBQyxhQURMO0FBRUUsZUFBRyxFQUFFbkIsV0FGUDtBQUdFLGVBQUcsRUFBRUksTUFBTSxDQUFDLENBQUQsQ0FIYjtBQUlFLGVBQUcsRUFBQztBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBZ0JFO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQXNCLGlCQUFPLEVBQUVlLFNBQVMsQ0FBQyxDQUFELENBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGO0FBQUEsa0JBREY7QUF5Q0QsQ0ExSEQ7O0dBQU12QixTOztLQUFBQSxTO0FBNEhTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvR2FsbGVyeS9HYWxsZXJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUHNHYWxsZXJ5ID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGFjdGl2ZUltYWdlID0gdXNlUmVmKCk7XG4gIGNvbnN0IGxpZ2h0Ym94Q29udGFpbmVyID0gdXNlUmVmKCk7XG4gIGNvbnN0IGdhbGxlcnkgPSB1c2VSZWYoKTtcblxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhsaWdodGJveENvbnRhaW5lci5jdXJyZW50KTtcbiAgLy8gICAgIC8vIGRlYnVnZ2VyO1xuICAvLyAgIH0sIFtdKTtcblxuICBjb25zdCBpbWFnZXMgPSBbXG4gICAgJ2h0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcHJpbnRpbmctc29sdXRpb25zLWNvLmFwcHNwb3QuY29tL28vZ2FsbGVyeSUyRnNodXR0ZXJzdG9ja18yNDI0OTc3NTYuanBnP2FsdD1tZWRpYSZ0b2tlbj1kZjg4MjI5OC00YmQ0LTRmOTItODk5OS1mN2QzNDg0YTk2YjMnLFxuICAgICdodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3ByaW50aW5nLXNvbHV0aW9ucy1jby5hcHBzcG90LmNvbS9vL2dhbGxlcnklMkZzaHV0dGVyc3RvY2tfMTcxOTUxMzQ1Ny5qcGc/YWx0PW1lZGlhJnRva2VuPWUwOWU2Yzc4LWVhMTYtNDM3MC1iNmVjLTgyYjlhOGEwMjI4OScsXG4gICAgJ2h0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcHJpbnRpbmctc29sdXRpb25zLWNvLmFwcHNwb3QuY29tL28vZ2FsbGVyeSUyRnNodXR0ZXJzdG9ja18xMzQ3NTE0MzQ2LmpwZz9hbHQ9bWVkaWEmdG9rZW49OTg3YmEyMmQtNzM4Yi00OTY0LWIyMzctM2ViOWNmNzgyMDNiJyxcbiAgICAnaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9wcmludGluZy1zb2x1dGlvbnMtY28uYXBwc3BvdC5jb20vby9nYWxsZXJ5JTJGc2h1dHRlcnN0b2NrXzExNTgxMDgxMDAuanBnP2FsdD1tZWRpYSZ0b2tlbj05OTE5OWE0Ni0zZjJhLTQ3YzAtYjAxNC04NmM1Zjg2ZDk2ZGQnLFxuICAgICdodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3ByaW50aW5nLXNvbHV0aW9ucy1jby5hcHBzcG90LmNvbS9vL2dhbGxlcnklMkZJTUdfNjM2My5qcGc/YWx0PW1lZGlhJnRva2VuPTRlODNiNTU1LTIwNGUtNDM5MS05MDBhLWIwNGRkNzM3Mjk1NicsXG4gICAgJ2h0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcHJpbnRpbmctc29sdXRpb25zLWNvLmFwcHNwb3QuY29tL28vZ2FsbGVyeSUyRklNR182MzMzLmpwZz9hbHQ9bWVkaWEmdG9rZW49YTRkNmUzZjAtMzhiNC00YjFiLTk1MjYtYzFmZWQ0YjM0MWNiJyxcbiAgICAnaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9wcmludGluZy1zb2x1dGlvbnMtY28uYXBwc3BvdC5jb20vby9nYWxsZXJ5JTJGSU1HXzYzMTEuanBnP2FsdD1tZWRpYSZ0b2tlbj1lNzJlOTU5Mi1hZDFkLTQ1N2UtYmFlYS0wYTVjZmQzMzczOWMnLFxuICAgICdodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3ByaW50aW5nLXNvbHV0aW9ucy1jby5hcHBzcG90LmNvbS9vL2dhbGxlcnklMkZJTUdfNjMwNS5qcGc/YWx0PW1lZGlhJnRva2VuPWQxOWZmNGJjLTA5MTUtNGJmNi1hYjhjLTAyYmNiOTk5YzZmYScsXG4gICAgJ2h0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcHJpbnRpbmctc29sdXRpb25zLWNvLmFwcHNwb3QuY29tL28vZ2FsbGVyeSUyRklNR182MzE3LmpwZz9hbHQ9bWVkaWEmdG9rZW49ODBmNGI1MzgtZjZjZi00M2Y1LWI0NzEtOTMxNWIxMTk4MWYxJ1xuICBdO1xuXG4gIGNvbnN0IGltYWdlc1NtYWxsID0gW1xuICAgICdodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3ByaW50aW5nLXNvbHV0aW9ucy1jby5hcHBzcG90LmNvbS9vL2dhbGxlcnklMkZzbWFsbCUyRnNodXR0ZXJzdG9ja18yNDI0OTc3NTYuanBnP2FsdD1tZWRpYSZ0b2tlbj1jMjg1N2JlYy1jNGYyLTRjODEtODUwYy1kYzg0MzZhZjEwM2YnLFxuICAgICdodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3ByaW50aW5nLXNvbHV0aW9ucy1jby5hcHBzcG90LmNvbS9vL2dhbGxlcnklMkZzbWFsbCUyRnNodXR0ZXJzdG9ja18xNzE5NTEzNDU3LmpwZz9hbHQ9bWVkaWEmdG9rZW49NDRlNTAyZDUtY2U3MS00NmJkLWFkZTUtMTQzZTg1MTdiZDU0JyxcbiAgICAnaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9wcmludGluZy1zb2x1dGlvbnMtY28uYXBwc3BvdC5jb20vby9nYWxsZXJ5JTJGc21hbGwlMkZzaHV0dGVyc3RvY2tfMTM0NzUxNDM0Ni5qcGc/YWx0PW1lZGlhJnRva2VuPTU3NTY4ZDRmLTA1MDYtNGM4Yi05YmNhLTJhZWE4YzMwNzcwNScsXG4gICAgJ2h0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcHJpbnRpbmctc29sdXRpb25zLWNvLmFwcHNwb3QuY29tL28vZ2FsbGVyeSUyRnNtYWxsJTJGc2h1dHRlcnN0b2NrXzExNTgxMDgxMDAuanBnP2FsdD1tZWRpYSZ0b2tlbj1kZDUyZmEwOS05YmZmLTQxYjItOTY5MC00OGViMTA3NTkxOTAnLFxuICAgICdodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3ByaW50aW5nLXNvbHV0aW9ucy1jby5hcHBzcG90LmNvbS9vL2dhbGxlcnklMkZzbWFsbCUyRklNR182MzYzLmpwZz9hbHQ9bWVkaWEmdG9rZW49MWJhNWE5MDEtMWU1NC00MzQwLWJhZmUtYmVlNzNiZGQ4N2M1JyxcbiAgICAnaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9wcmludGluZy1zb2x1dGlvbnMtY28uYXBwc3BvdC5jb20vby9nYWxsZXJ5JTJGc21hbGwlMkZJTUdfNjMzMy5qcGc/YWx0PW1lZGlhJnRva2VuPWFjZWNkZjc3LTliOTctNDIzMy04NGNmLTg1ZTYzNGE4MDQ1ZScsXG4gICAgJ2h0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcHJpbnRpbmctc29sdXRpb25zLWNvLmFwcHNwb3QuY29tL28vZ2FsbGVyeSUyRnNtYWxsJTJGSU1HXzYzMTcuanBnP2FsdD1tZWRpYSZ0b2tlbj03NmNjMTdkYS05NzNmLTRlY2MtOTRiYy02MjI5NDRjZWU4MDInLFxuICAgICdodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL3ByaW50aW5nLXNvbHV0aW9ucy1jby5hcHBzcG90LmNvbS9vL2dhbGxlcnklMkZzbWFsbCUyRklNR182MzExLmpwZz9hbHQ9bWVkaWEmdG9rZW49MmU3NTBlNDctODBjYS00MTQ1LWJkYzUtOGI0ZmIwOTk3ZGIxJyxcbiAgICAnaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9wcmludGluZy1zb2x1dGlvbnMtY28uYXBwc3BvdC5jb20vby9nYWxsZXJ5JTJGc21hbGwlMkZJTUdfNjMwNS5qcGc/YWx0PW1lZGlhJnRva2VuPTA5ZDliMzFjLWFlOWYtNDg1NC05YTFhLWRkNjM2NWZjNTk4NydcbiAgXTtcblxuICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgbGlnaHRib3hDb250YWluZXIuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBnYWxsZXJ5LmN1cnJlbnQuc3R5bGUuZmlsdGVyID0gJ2JsdXIoNXB4KSc7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAvLyBsaWdodGJveENvbnRhaW5lci5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgLy8gZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdpbml0aWFsJztcbiAgICAvLyBnYWxsZXJ5LmN1cnJlbnQuc3R5bGUuZmlsdGVyID0gJ2JsdXIoMCknO1xuICB9O1xuICBjb25zdCBjaGFuZ2VJbWFnZSA9IG4gPT4ge1xuICAgIC8vIGFjdGl2ZUltYWdlLmN1cnJlbnQuc3JjID0gaW1hZ2VzW25dO1xuICAgIC8vIHNldEN1cnJlbnRTbGlkZShuKTtcbiAgICAvLyByZXR1cm4gY3VycmVudFNsaWRlO1xuICB9O1xuXG4gIGNvbnN0IG9uSGFuZGxlQ2xpY2tJbWFnZSA9IGkgPT4ge1xuICAgIG9wZW5Nb2RhbCgpO1xuICAgIGNoYW5nZUltYWdlKGkpO1xuICB9O1xuXG4gIGNvbnN0IG5leHRTbGlkZSA9IG4gPT4ge1xuICAgIC8vIGlmIChjdXJyZW50U2xpZGUgPCAxICYmIG4gPT0gLTEpIHtcbiAgICAvLyAgIHNldEN1cnJlbnRTbGlkZShpbWFnZXMubGVuZ3RoIC0gMSk7XG4gICAgLy8gICBhY3RpdmVJbWFnZS5jdXJyZW50LnNyYyA9IGltYWdlc1tjdXJyZW50U2xpZGVdO1xuICAgIC8vICAgcmV0dXJuIGN1cnJlbnRTbGlkZTtcbiAgICAvLyB9IGVsc2UgaWYgKFxuICAgIC8vICAgY3VycmVudFNsaWRlIDwgaW1hZ2VzLmxlbmd0aCAtIDEgJiZcbiAgICAvLyAgIGN1cnJlbnRTbGlkZSA+PSAwICYmXG4gICAgLy8gICBuID09IDFcbiAgICAvLyApIHtcbiAgICAvLyAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgKyAxKTtcbiAgICAvLyAgIGFjdGl2ZUltYWdlLmN1cnJlbnQuc3JjID0gaW1hZ2VzW2N1cnJlbnRTbGlkZV07XG4gICAgLy8gICByZXR1cm4gY3VycmVudFNsaWRlO1xuICAgIC8vIH0gZWxzZSBpZiAoY3VycmVudFNsaWRlID09IGltYWdlcy5sZW5ndGggLSAxICYmIG4gPT0gMSkge1xuICAgIC8vICAgc2V0Q3VycmVudFNsaWRlKDApO1xuICAgIC8vICAgYWN0aXZlSW1hZ2UuY3VycmVudC5zcmMgPSBpbWFnZXNbY3VycmVudFNsaWRlXTtcbiAgICAvLyAgIHJldHVybiBjdXJyZW50U2xpZGU7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgLSAxKTtcbiAgICAvLyAgIGFjdGl2ZUltYWdlLmN1cnJlbnQuc3JjID0gaW1hZ2VzW2N1cnJlbnRTbGlkZV07XG4gICAgLy8gICByZXR1cm4gY3VycmVudFNsaWRlO1xuICAgIC8vIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2FsbGVyeScgcmVmPXtnYWxsZXJ5fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAge2ltYWdlc1NtYWxsLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBvbkhhbmRsZUNsaWNrSW1hZ2UoaW5kZXgpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbHQ9J1ByaW50ZXIgSW1hZ2UnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlnaHRib3hDb250YWluZXInIHJlZj17bGlnaHRib3hDb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlnaHRib3gnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbG9zZScgb25DbGljaz17Y2xvc2VNb2RhbH0+XG4gICAgICAgICAgICAmIzEwMDA2O1xuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZXYnIG9uQ2xpY2s9e25leHRTbGlkZSgtMSl9PlxuICAgICAgICAgICAgJiM2MDtcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWN0aXZlSW1hZ2UnPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBpZD0nYWN0aXZlSW1hZ2UnXG4gICAgICAgICAgICAgIHJlZj17YWN0aXZlSW1hZ2V9XG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VzWzBdfVxuICAgICAgICAgICAgICBhbHQ9J1ByaW50aW5nIFNvbHV0aW9ucydcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25leHQnIG9uQ2xpY2s9e25leHRTbGlkZSgxKX0+XG4gICAgICAgICAgICAmIzYyO1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHNHYWxsZXJ5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Gallery/Gallery.js\n");

/***/ })

})