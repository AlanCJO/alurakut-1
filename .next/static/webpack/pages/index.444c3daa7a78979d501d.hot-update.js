self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_componentes_MainGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/componentes/MainGrid */ "./src/componentes/MainGrid/index.js");
/* harmony import */ var _src_componentes_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/componentes/Box */ "./src/componentes/Box/index.js");
/* harmony import */ var _src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/lib/AlurakutCommons */ "./src/lib/AlurakutCommons.js");
/* harmony import */ var _src_componentes_ProfileRelations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/componentes/ProfileRelations */ "./src/componentes/ProfileRelations/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\EPS\\Documents\\RAPHAELA\\DEV\\pages\\index.js",
    _s = $RefreshSig$();







function ProfileSidebar(propriedades) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
    className: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: "image",
      src: "https://github.com/".concat(propriedades.usuarioAleatorio, ".png"),
      style: {
        borderRadius: '8px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "boxLink",
        href: "https://github.com/".concat(propriedades.usuarioAleatorio),
        children: ["@", propriedades.usuarioAleatorio]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_6__.AlurakutProfileSidebarMenuDefault, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_c = ProfileSidebar;

function ProfileRelationsBox(propriedades) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_ProfileRelations__WEBPACK_IMPORTED_MODULE_7__.ProfileRelationsBoxWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "smallTitle",
      children: [propriedades.title, "   (", propriedades.items.length, ") "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

_c2 = ProfileRelationsBox;
function Home() {
  _s();

  var _this = this;

  var usuarioAleatorio = 'raphaelaferraz';

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]),
      _React$useState2 = (0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      comunidades = _React$useState2[0],
      setComunidades = _React$useState2[1];

  console.log(comunidades); //const comunidades = ['Alurakut']

  var pessoasFavoritas = ['VictorGM01', 'juunegreiros', 'omariosouto', 'peas', 'filipedeschamps'];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]),
      _React$useState4 = (0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState3, 2),
      seguidores = _React$useState4[0],
      setSeguidores = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(function () {
    fetch('').then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    }).then(function (respostaCompleta) {
      setSeguidores(respostaCompleta);
    }).then(function (response) {
      return response.json();
    }).then(function (respostaCompleta) {
      var comunidadesDoDato = respostaCompleta.data.allCommunities;
      console.log(comunidadesDoDato);
      setComunidades(comunidadesDoDato);
    }); //API GraphQL

    fetch('https://graphal.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '5f9f6416d2cdbe390876028c213d28',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "query": "query {\n        allCommunities {\n          title\n          imageUrl\n          communityUrl\n        }\n      }"
      })
    });
  }, []);

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]),
      _React$useState6 = (0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState5, 2),
      seguindo = _React$useState6[0],
      setSeguindo = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(function () {
    fetch('https://api.github.com/users/raphaelaferraz/following').then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    }).then(function (respostaCompleta) {
      setSeguindo(respostaCompleta);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_6__.AlurakutMenu, {
      usuarioAleatorio: usuarioAleatorio
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_MainGrid__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileArea",
        style: {
          gridArea: 'profileArea'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileSidebar, {
          usuarioAleatorio: usuarioAleatorio
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 8
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "welcomeArea",
        style: {
          gridArea: 'welcomeArea'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "title",
            children: "Bem vindo (a)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_6__.OrkutNostalgicIconSet, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_Box__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "subTitle",
            children: " O que voc\xEA deseja fazer?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            onSubmit: function handleCriarcomunidade(e) {
              e.preventDefault();
              var dadosDoFormulario = new FormData(e.target);
              console.log('Campo: ', dadosDoFormulario.get('title'));
              console.log('Campo: ', dadosDoFormulario.get('image'));
              console.log('Campo: ', dadosDoFormulario.get('link'));
              var comunidade = {
                id: new Date().toISOString(),
                title: dadosDoFormulario.get('title'),
                image: dadosDoFormulario.get('image'),
                link: dadosDoFormulario.get('link')
              };
              var comunidadesAtualizadas = [].concat((0,C_Users_EPS_Documents_RAPHAELA_DEV_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(comunidades), [comunidade]);
              setComunidades(comunidadesAtualizadas);
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Qual vai ser o nome da comunidade?",
                name: "title",
                "aria-label": "Qual vai ser o nome da comunidade?",
                type: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Coloque aqui a URL da capa de sua comunidade",
                name: "image",
                "aria-label": "Coloque aqui a URL da capa de sua comunidade"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                placeholder: "Coloque aqui, o link da sua comunidade",
                name: "link",
                "aria-label": "Coloque aqui, o link da sua comunidade"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "submit",
              children: "Criar comunidade"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileRelationsArea",
        style: {
          gridArea: 'profileRelationsArea'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileRelationsBox, {
          title: "Seguidores",
          items: seguidores
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileRelationsBox, {
          title: "Seguindo",
          items: seguindo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_ProfileRelations__WEBPACK_IMPORTED_MODULE_7__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Minhas comunidades (", comunidades.length, ") "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: comunidades.map(function (itemAtual) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: itemAtual.communityUrl,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: itemAtual.imageUrl
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 199,
                    columnNumber: 22
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 200,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 21
                }, _this)
              }, itemAtual.id, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_componentes_ProfileRelations__WEBPACK_IMPORTED_MODULE_7__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Pessoas favoritas (", pessoasFavoritas.length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: pessoasFavoritas.map(function (itemAtual) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "/users/".concat(itemAtual),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "https://github.com/".concat(itemAtual, ".png")
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: itemAtual
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 23
                  }, _this)]
                }, itemAtual, true, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 21
                }, _this)
              }, itemAtual, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(Home, "OowJsjEoEJqnqPB6WnU49N/CrHs=");

_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "ProfileSidebar");
$RefreshReg$(_c2, "ProfileRelationsBox");
$RefreshReg$(_c3, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZVNpZGViYXIiLCJwcm9wcmllZGFkZXMiLCJ1c3VhcmlvQWxlYXRvcmlvIiwiYm9yZGVyUmFkaXVzIiwiUHJvZmlsZVJlbGF0aW9uc0JveCIsInRpdGxlIiwiaXRlbXMiLCJsZW5ndGgiLCJIb21lIiwiUmVhY3QiLCJjb211bmlkYWRlcyIsInNldENvbXVuaWRhZGVzIiwiY29uc29sZSIsImxvZyIsInBlc3NvYXNGYXZvcml0YXMiLCJzZWd1aWRvcmVzIiwic2V0U2VndWlkb3JlcyIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhRG9TZXJ2aWRvciIsImpzb24iLCJyZXNwb3N0YUNvbXBsZXRhIiwicmVzcG9uc2UiLCJjb211bmlkYWRlc0RvRGF0byIsImRhdGEiLCJhbGxDb21tdW5pdGllcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlZ3VpbmRvIiwic2V0U2VndWluZG8iLCJncmlkQXJlYSIsImhhbmRsZUNyaWFyY29tdW5pZGFkZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhZG9zRG9Gb3JtdWxhcmlvIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJnZXQiLCJjb211bmlkYWRlIiwiaWQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJpbWFnZSIsImxpbmsiLCJjb211bmlkYWRlc0F0dWFsaXphZGFzIiwibWFwIiwiaXRlbUF0dWFsIiwiY29tbXVuaXR5VXJsIiwiaW1hZ2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxZQUF4QixFQUFzQztBQUNwQyxzQkFDRSw4REFBQyx5REFBRDtBQUFLLGFBQVMsTUFBZDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBdUIsU0FBRywrQkFBd0JBLFlBQVksQ0FBQ0MsZ0JBQXJDLFNBQTFCO0FBQXVGLFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFO0FBQWhCO0FBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUtFO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFDLFNBQWI7QUFBdUIsWUFBSSwrQkFBeUJGLFlBQVksQ0FBQ0MsZ0JBQXRDLENBQTNCO0FBQUEsd0JBQ0lELFlBQVksQ0FBQ0MsZ0JBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQVlFLDhEQUFDLHVGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7S0FyQlFGLGM7O0FBdUJULFNBQVNJLG1CQUFULENBQTZCSCxZQUE3QixFQUEwQztBQUN4QyxzQkFDRSw4REFBQyx5RkFBRDtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQSxpQkFDTUEsWUFBWSxDQUFDSSxLQURuQixVQUMrQkosWUFBWSxDQUFDSyxLQUFiLENBQW1CQyxNQURsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdNO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRTs7TUFsQktILG1CO0FBbUJNLFNBQVNJLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTU4sZ0JBQWdCLEdBQUcsZ0JBQXpCOztBQUQ2Qix3QkFFU08scURBQUEsQ0FBZSxFQUFmLENBRlQ7QUFBQTtBQUFBLE1BRXRCQyxXQUZzQjtBQUFBLE1BRVRDLGNBRlM7O0FBSTdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsV0FBWixFQUo2QixDQUs3Qjs7QUFDQSxNQUFNSSxnQkFBZ0IsR0FBRyxDQUN2QixZQUR1QixFQUV2QixjQUZ1QixFQUd2QixhQUh1QixFQUl2QixNQUp1QixFQUt2QixpQkFMdUIsQ0FBekI7O0FBTjZCLHlCQWNLTCxxREFBQSxDQUFlLEVBQWYsQ0FkTDtBQUFBO0FBQUEsTUFjeEJNLFVBZHdCO0FBQUEsTUFjWkMsYUFkWTs7QUFnQi9CUCx3REFBQSxDQUFnQixZQUFXO0FBQ3pCUSxTQUFLLENBQUMsRUFBRCxDQUFMLENBQ0NDLElBREQsQ0FDTSxVQUFVQyxrQkFBVixFQUE4QjtBQUNsQyxhQUFPQSxrQkFBa0IsQ0FBQ0MsSUFBbkIsRUFBUDtBQUNELEtBSEQsRUFJQ0YsSUFKRCxDQUlNLFVBQVVHLGdCQUFWLEVBQTJCO0FBQy9CTCxtQkFBYSxDQUFDSyxnQkFBRCxDQUFiO0FBQ0QsS0FORCxFQU9DSCxJQVBELENBT00sVUFBQ0ksUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0YsSUFBVCxFQUFkO0FBQUEsS0FQTixFQVFDRixJQVJELENBUU8sVUFBQ0csZ0JBQUQsRUFBc0I7QUFDM0IsVUFBTUUsaUJBQWlCLEdBQUNGLGdCQUFnQixDQUFDRyxJQUFqQixDQUFzQkMsY0FBOUM7QUFDQWIsYUFBTyxDQUFDQyxHQUFSLENBQVlVLGlCQUFaO0FBQ0FaLG9CQUFjLENBQUNZLGlCQUFELENBQWQ7QUFDRCxLQVpELEVBRHlCLENBZXpCOztBQUNFTixTQUFLLENBQUMsOEJBQUQsRUFBaUM7QUFDcENTLFlBQU0sRUFBRSxNQUQ0QjtBQUVwQ0MsYUFBTyxFQUFFO0FBQ1AseUJBQWlCLGdDQURWO0FBRVAsd0JBQWdCLGtCQUZUO0FBR1Asa0JBQVU7QUFISCxPQUYyQjtBQU9wQ0MsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDO0FBQUQsT0FBZjtBQVA4QixLQUFqQyxDQUFMO0FBZ0JILEdBaENELEVBZ0NHLEVBaENIOztBQWhCK0IseUJBa0RDckIscURBQUEsQ0FBZSxFQUFmLENBbEREO0FBQUE7QUFBQSxNQWtEeEJzQixRQWxEd0I7QUFBQSxNQWtEZEMsV0FsRGM7O0FBb0QvQnZCLHdEQUFBLENBQWdCLFlBQVc7QUFDekJRLFNBQUssQ0FBQyx1REFBRCxDQUFMLENBQ0NDLElBREQsQ0FDTSxVQUFVQyxrQkFBVixFQUE4QjtBQUNsQyxhQUFPQSxrQkFBa0IsQ0FBQ0MsSUFBbkIsRUFBUDtBQUNELEtBSEQsRUFJQ0YsSUFKRCxDQUlNLFVBQVVHLGdCQUFWLEVBQTJCO0FBQy9CVyxpQkFBVyxDQUFDWCxnQkFBRCxDQUFYO0FBQ0QsS0FORDtBQU9ELEdBUkQsRUFRRyxFQVJIO0FBVUUsc0JBQ0U7QUFBQSw0QkFDQSw4REFBQyxrRUFBRDtBQUFjLHNCQUFnQixFQUFFbkI7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBR0EsOERBQUMsOERBQUQ7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUE2QixhQUFLLEVBQUk7QUFBRStCLGtCQUFRLEVBQUU7QUFBWixTQUF0QztBQUFBLCtCQUNDLDhEQUFDLGNBQUQ7QUFBZ0IsMEJBQWdCLEVBQUUvQjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBNkIsYUFBSyxFQUFJO0FBQUUrQixrQkFBUSxFQUFFO0FBQVosU0FBdEM7QUFBQSxnQ0FFRSw4REFBQyx5REFBRDtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBS0UsOERBQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFVRSw4REFBQyx5REFBRDtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBTSxvQkFBUSxFQUFFLFNBQVNDLHFCQUFULENBQStCQyxDQUEvQixFQUFrQztBQUM5Q0EsZUFBQyxDQUFDQyxjQUFGO0FBRUEsa0JBQU1DLGlCQUFpQixHQUFHLElBQUlDLFFBQUosQ0FBYUgsQ0FBQyxDQUFDSSxNQUFmLENBQTFCO0FBQ0EzQixxQkFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QndCLGlCQUFpQixDQUFDRyxHQUFsQixDQUFzQixPQUF0QixDQUF2QjtBQUNBNUIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJ3QixpQkFBaUIsQ0FBQ0csR0FBbEIsQ0FBc0IsT0FBdEIsQ0FBdkI7QUFDQTVCLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCd0IsaUJBQWlCLENBQUNHLEdBQWxCLENBQXNCLE1BQXRCLENBQXZCO0FBRUEsa0JBQU1DLFVBQVUsR0FBRztBQUNqQkMsa0JBQUUsRUFBRSxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFEYTtBQUVqQnZDLHFCQUFLLEVBQUVnQyxpQkFBaUIsQ0FBQ0csR0FBbEIsQ0FBc0IsT0FBdEIsQ0FGVTtBQUdqQksscUJBQUssRUFBRVIsaUJBQWlCLENBQUNHLEdBQWxCLENBQXNCLE9BQXRCLENBSFU7QUFJakJNLG9CQUFJLEVBQUVULGlCQUFpQixDQUFDRyxHQUFsQixDQUFzQixNQUF0QjtBQUpXLGVBQW5CO0FBT0Esa0JBQU1PLHNCQUFzQixrSkFBT3JDLFdBQVAsSUFBb0IrQixVQUFwQixFQUE1QjtBQUVBOUIsNEJBQWMsQ0FBQ29DLHNCQUFELENBQWQ7QUFHSCxhQXBCRDtBQUFBLG9DQXFCRTtBQUFBLHFDQUNFO0FBQU8sMkJBQVcsRUFBQyxvQ0FBbkI7QUFBd0Qsb0JBQUksRUFBQyxPQUE3RDtBQUNBLDhCQUFXLG9DQURYO0FBRUEsb0JBQUksRUFBQztBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXJCRixlQTRCRTtBQUFBLHFDQUNFO0FBQU8sMkJBQVcsRUFBQyw4Q0FBbkI7QUFBa0Usb0JBQUksRUFBQyxPQUF2RTtBQUNBLDhCQUFXO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBNUJGLGVBa0NFO0FBQUEscUNBQ0U7QUFDQSwyQkFBVyxFQUFDLHdDQURaO0FBRUEsb0JBQUksRUFBQyxNQUZMO0FBR0EsOEJBQVc7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFsQ0YsZUF5Q0U7QUFBUSxrQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFzRUU7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQXNDLGFBQUssRUFBSTtBQUFFZCxrQkFBUSxFQUFFO0FBQVosU0FBL0M7QUFBQSxnQ0FDQSw4REFBQyxtQkFBRDtBQUFxQixlQUFLLEVBQUMsWUFBM0I7QUFBd0MsZUFBSyxFQUFFbEI7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUdBLDhEQUFDLG1CQUFEO0FBQXFCLGVBQUssRUFBQyxVQUEzQjtBQUFzQyxlQUFLLEVBQUVnQjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhBLGVBTUEsOERBQUMseUZBQUQ7QUFBQSxrQ0FDQTtBQUFJLHFCQUFTLEVBQUMsWUFBZDtBQUFBLCtDQUM4QnJCLFdBQVcsQ0FBQ0gsTUFEMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBR0k7QUFBQSxzQkFDS0csV0FBVyxDQUFDc0MsR0FBWixDQUFnQixVQUFDQyxTQUFELEVBQWU7QUFDOUIsa0NBQ0U7QUFBQSx1Q0FDRTtBQUFHLHNCQUFJLEVBQUVBLFNBQVMsQ0FBQ0MsWUFBbkI7QUFBQSwwQ0FDQztBQUFLLHVCQUFHLEVBQUVELFNBQVMsQ0FBQ0U7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERCxlQUVFO0FBQUEsOEJBQU9GLFNBQVMsQ0FBQzVDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQVM0QyxTQUFTLENBQUNQLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFRRCxhQVRBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkEsZUF5QkUsOERBQUMseUZBQUQ7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUMsWUFBZDtBQUFBLDhDQUNzQjVCLGdCQUFnQixDQUFDUCxNQUR2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFNRTtBQUFBLHNCQUNLTyxnQkFBZ0IsQ0FBQ2tDLEdBQWpCLENBQXFCLFVBQUNDLFNBQUQsRUFBZTtBQUNuQyxrQ0FDRTtBQUFBLHVDQUNFO0FBQUcsc0JBQUksbUJBQVlBLFNBQVosQ0FBUDtBQUFBLDBDQUNFO0FBQUssdUJBQUcsK0JBQXdCQSxTQUF4QjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFFRTtBQUFBLDhCQUFPQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQSxtQkFBcUNBLFNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFBU0EsU0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBUUQsYUFUQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEE7QUFBQSxrQkFERjtBQTBIRDs7R0F4THVCekMsSTs7TUFBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NDRjM2RhYTdhNzg5NzlkNTAxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYWluR3JpZCBmcm9tICcuLi9zcmMvY29tcG9uZW50ZXMvTWFpbkdyaWQnXG5pbXBvcnQgQm94IGZyb20gJy4uL3NyYy9jb21wb25lbnRlcy9Cb3gnXG5pbXBvcnQgIHsgQWx1cmFrdXRNZW51LCBBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHQsIE9ya3V0Tm9zdGFsZ2ljSWNvblNldCB9ICBmcm9tICcuLi9zcmMvbGliL0FsdXJha3V0Q29tbW9ucyc7XG5pbXBvcnQgeyBQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlciB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRlcy9Qcm9maWxlUmVsYXRpb25zJztcblxuZnVuY3Rpb24gUHJvZmlsZVNpZGViYXIocHJvcHJpZWRhZGVzKSB7XG4gIHJldHVybiAoIFxuICAgIDxCb3ggY2xhc3NOYW1lPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZVwiIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3Byb3ByaWVkYWRlcy51c3VhcmlvQWxlYXRvcmlvfS5wbmdgfSBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc4cHgnfX0vPlxuXG4gICAgICA8aHIgLz4gXG5cbiAgICAgIDxwPiBcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYm94TGlua1wiIGhyZWYgPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7cHJvcHJpZWRhZGVzLnVzdWFyaW9BbGVhdG9yaW99YH0+XG4gICAgICAgICAgQHtwcm9wcmllZGFkZXMudXN1YXJpb0FsZWF0b3Jpb31cbiAgICAgICAgPC9hPlxuXG4gICAgICA8L3A+XG4gICAgICA8aHIgLz4gXG4gICAgICA8QWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0IC8+XG4gICAgPC9Cb3g+XG4gIFxuICAgXG4gIFxuICBcbiAgKVxufVxuXG5mdW5jdGlvbiBQcm9maWxlUmVsYXRpb25zQm94KHByb3ByaWVkYWRlcyl7XG4gIHJldHVybiAoXG4gICAgPFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInNtYWxsVGl0bGVcIj5cbiAgICAgICAgICAge3Byb3ByaWVkYWRlcy50aXRsZX0gICAoeyBwcm9wcmllZGFkZXMuaXRlbXMubGVuZ3RoIH0pIDwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7IC8qIHNlZ3VpZG9yZXMubWFwKChpdGVtQXR1YWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbUF0dWFsfSA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL2dpdGh1Yi5jb20vJHtpdGVtQXR1YWx9LnBuZ2B9PlxuICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW1BdHVhbC5pbWFnZX0gLz4gXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW1BdHVhbC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX0gKi99XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+IFxuICApfVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgdXN1YXJpb0FsZWF0b3JpbyA9ICdyYXBoYWVsYWZlcnJheidcbiAgY29uc3QgW2NvbXVuaWRhZGVzLCBzZXRDb211bmlkYWRlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cbiAgY29uc29sZS5sb2coY29tdW5pZGFkZXMpO1xuICAvL2NvbnN0IGNvbXVuaWRhZGVzID0gWydBbHVyYWt1dCddXG4gIGNvbnN0IHBlc3NvYXNGYXZvcml0YXMgPSBbXG4gICAgJ1ZpY3RvckdNMDEnLFxuICAgICdqdXVuZWdyZWlyb3MnLFxuICAgICdvbWFyaW9zb3V0bycsXG4gICAgJ3BlYXMnLFxuICAgICdmaWxpcGVkZXNjaGFtcHMnXG4gIF1cbiAgXG5jb25zdCBbc2VndWlkb3Jlcywgc2V0U2VndWlkb3Jlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIFxuUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uKCkge1xuICBmZXRjaCgnJylcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3Bvc3RhRG9TZXJ2aWRvcikge1xuICAgIHJldHVybiByZXNwb3N0YURvU2Vydmlkb3IuanNvbigpO1xuICB9KVxuICAudGhlbihmdW5jdGlvbiAocmVzcG9zdGFDb21wbGV0YSl7XG4gICAgc2V0U2VndWlkb3JlcyhyZXNwb3N0YUNvbXBsZXRhKTtcbiAgfSlcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC50aGVuICgocmVzcG9zdGFDb21wbGV0YSkgPT4ge1xuICAgIGNvbnN0IGNvbXVuaWRhZGVzRG9EYXRvPXJlc3Bvc3RhQ29tcGxldGEuZGF0YS5hbGxDb21tdW5pdGllcztcbiAgICBjb25zb2xlLmxvZyhjb211bmlkYWRlc0RvRGF0bylcbiAgICBzZXRDb211bmlkYWRlcyhjb211bmlkYWRlc0RvRGF0bylcbiAgfSlcblxuICAvL0FQSSBHcmFwaFFMXG4gICAgZmV0Y2goJ2h0dHBzOi8vZ3JhcGhhbC5kYXRvY21zLmNvbS8nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnNWY5ZjY0MTZkMmNkYmUzOTA4NzYwMjhjMjEzZDI4JyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XCJxdWVyeVwiOiBgcXVlcnkge1xuICAgICAgICBhbGxDb21tdW5pdGllcyB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBpbWFnZVVybFxuICAgICAgICAgIGNvbW11bml0eVVybFxuICAgICAgICB9XG4gICAgICB9YCAgfSlcbiAgICB9KVxuXG59LCBbXSlcblxuY29uc3QgW3NlZ3VpbmRvLCBzZXRTZWd1aW5kb10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cblJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbigpIHtcbiAgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvcmFwaGFlbGFmZXJyYXovZm9sbG93aW5nJylcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3Bvc3RhRG9TZXJ2aWRvcikge1xuICAgIHJldHVybiByZXNwb3N0YURvU2Vydmlkb3IuanNvbigpO1xuICB9KVxuICAudGhlbihmdW5jdGlvbiAocmVzcG9zdGFDb21wbGV0YSl7XG4gICAgc2V0U2VndWluZG8ocmVzcG9zdGFDb21wbGV0YSk7XG4gIH0pXG59LCBbXSlcblxuICByZXR1cm4gKCBcbiAgICA8PlxuICAgIDxBbHVyYWt1dE1lbnUgdXN1YXJpb0FsZWF0b3Jpbz17dXN1YXJpb0FsZWF0b3Jpb30vPiBcbiAgICAgIFxuICAgIDxNYWluR3JpZD4gXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVBcmVhXCIgc3R5bGUgPSB7eyBncmlkQXJlYTogJ3Byb2ZpbGVBcmVhJyB9fT4gXG4gICAgICAgPFByb2ZpbGVTaWRlYmFyIHVzdWFyaW9BbGVhdG9yaW89e3VzdWFyaW9BbGVhdG9yaW99IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVBcmVhXCIgc3R5bGUgPSB7eyBncmlkQXJlYTogJ3dlbGNvbWVBcmVhJyB9fT5cbiAgICAgICAgXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+IFxuICAgICAgICAgICAgQmVtIHZpbmRvIChhKVxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8T3JrdXROb3N0YWxnaWNJY29uU2V0IC8+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3g+IFxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJUaXRsZVwiPiBPIHF1ZSB2b2PDqiBkZXNlamEgZmF6ZXI/PC9oMj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZnVuY3Rpb24gaGFuZGxlQ3JpYXJjb211bmlkYWRlKGUpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgY29uc3QgZGFkb3NEb0Zvcm11bGFyaW8gPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FtcG86ICcsIGRhZG9zRG9Gb3JtdWxhcmlvLmdldCgndGl0bGUnKSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW1wbzogJywgZGFkb3NEb0Zvcm11bGFyaW8uZ2V0KCdpbWFnZScpKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbXBvOiAnLCBkYWRvc0RvRm9ybXVsYXJpby5nZXQoJ2xpbmsnKSlcblxuICAgICAgICAgICAgICBjb25zdCBjb211bmlkYWRlID0ge1xuICAgICAgICAgICAgICAgIGlkOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgdGl0bGU6IGRhZG9zRG9Gb3JtdWxhcmlvLmdldCgndGl0bGUnKSxcbiAgICAgICAgICAgICAgICBpbWFnZTogZGFkb3NEb0Zvcm11bGFyaW8uZ2V0KCdpbWFnZScpLFxuICAgICAgICAgICAgICAgIGxpbms6IGRhZG9zRG9Gb3JtdWxhcmlvLmdldCgnbGluaycpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGNvbnN0IGNvbXVuaWRhZGVzQXR1YWxpemFkYXMgPSBbLi4uY29tdW5pZGFkZXMsIGNvbXVuaWRhZGVdXG5cbiAgICAgICAgICAgICAgc2V0Q29tdW5pZGFkZXMoY29tdW5pZGFkZXNBdHVhbGl6YWRhcylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJRdWFsIHZhaSBzZXIgbyBub21lIGRhIGNvbXVuaWRhZGU/XCIgbmFtZT1cInRpdGxlXCIgXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJRdWFsIHZhaSBzZXIgbyBub21lIGRhIGNvbXVuaWRhZGU/XCIgXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiQ29sb3F1ZSBhcXVpIGEgVVJMIGRhIGNhcGEgZGUgc3VhIGNvbXVuaWRhZGVcIiBuYW1lPVwiaW1hZ2VcIiBcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNvbG9xdWUgYXF1aSBhIFVSTCBkYSBjYXBhIGRlIHN1YSBjb211bmlkYWRlXCIgXG4gICAgICAgICAgICAgIC8+IFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbG9xdWUgYXF1aSwgbyBsaW5rIGRhIHN1YSBjb211bmlkYWRlXCJcbiAgICAgICAgICAgICAgbmFtZT1cImxpbmtcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ29sb3F1ZSBhcXVpLCBvIGxpbmsgZGEgc3VhIGNvbXVuaWRhZGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+XG4gICAgICAgICAgICAgIENyaWFyIGNvbXVuaWRhZGVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVSZWxhdGlvbnNBcmVhXCIgc3R5bGUgPSB7eyBncmlkQXJlYTogJ3Byb2ZpbGVSZWxhdGlvbnNBcmVhJyB9fT5cbiAgICAgIDxQcm9maWxlUmVsYXRpb25zQm94IHRpdGxlPVwiU2VndWlkb3Jlc1wiIGl0ZW1zPXtzZWd1aWRvcmVzfS8+XG5cbiAgICAgIDxQcm9maWxlUmVsYXRpb25zQm94IHRpdGxlPSdTZWd1aW5kbycgaXRlbXM9e3NlZ3VpbmRvfSAvPlxuICAgICAgXG4gICAgICBcbiAgICAgIDxQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJzbWFsbFRpdGxlXCI+XG4gICAgICAgICAgICAgIE1pbmhhcyBjb211bmlkYWRlcyAoeyBjb211bmlkYWRlcy5sZW5ndGggfSkgPC9oMj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtjb211bmlkYWRlcy5tYXAoKGl0ZW1BdHVhbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtQXR1YWwuaWR9ID5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbUF0dWFsLmNvbW11bml0eVVybH0+XG4gICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbUF0dWFsLmltYWdlVXJsfSAvPiBcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbUF0dWFsLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1Byb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICA8UHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNtYWxsVGl0bGVcIj4gXG4gICAgICAgICAgICBQZXNzb2FzIGZhdm9yaXRhcyAoe3Blc3NvYXNGYXZvcml0YXMubGVuZ3RofSkgXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICBcblxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3Blc3NvYXNGYXZvcml0YXMubWFwKChpdGVtQXR1YWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbUF0dWFsfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC91c2Vycy8ke2l0ZW1BdHVhbH1gfSBrZXk9e2l0ZW1BdHVhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHtpdGVtQXR1YWx9LnBuZ2B9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW1BdHVhbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9Qcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01haW5HcmlkPlxuICAgIDwvPlxuICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=