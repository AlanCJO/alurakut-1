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
    fetch('https://api.github.com/users/raphaelaferraz/followers').then(function (respostaDoServidor) {
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

    fetch('https://graph  l.datocms.com/', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZVNpZGViYXIiLCJwcm9wcmllZGFkZXMiLCJ1c3VhcmlvQWxlYXRvcmlvIiwiYm9yZGVyUmFkaXVzIiwiUHJvZmlsZVJlbGF0aW9uc0JveCIsInRpdGxlIiwiaXRlbXMiLCJsZW5ndGgiLCJIb21lIiwiUmVhY3QiLCJjb211bmlkYWRlcyIsInNldENvbXVuaWRhZGVzIiwiY29uc29sZSIsImxvZyIsInBlc3NvYXNGYXZvcml0YXMiLCJzZWd1aWRvcmVzIiwic2V0U2VndWlkb3JlcyIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhRG9TZXJ2aWRvciIsImpzb24iLCJyZXNwb3N0YUNvbXBsZXRhIiwicmVzcG9uc2UiLCJjb211bmlkYWRlc0RvRGF0byIsImRhdGEiLCJhbGxDb21tdW5pdGllcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlZ3VpbmRvIiwic2V0U2VndWluZG8iLCJncmlkQXJlYSIsImhhbmRsZUNyaWFyY29tdW5pZGFkZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhZG9zRG9Gb3JtdWxhcmlvIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJnZXQiLCJjb211bmlkYWRlIiwiaWQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJpbWFnZSIsImxpbmsiLCJjb211bmlkYWRlc0F0dWFsaXphZGFzIiwibWFwIiwiaXRlbUF0dWFsIiwiY29tbXVuaXR5VXJsIiwiaW1hZ2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxZQUF4QixFQUFzQztBQUNwQyxzQkFDRSw4REFBQyx5REFBRDtBQUFLLGFBQVMsTUFBZDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBdUIsU0FBRywrQkFBd0JBLFlB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFTNEMsU0FBUyxDQUFDUCxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBUUQsYUFUQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5BLGVBeUJFLDhEQUFDLHlGQUFEO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLFlBQWQ7QUFBQSw4Q0FDc0I1QixnQkFBZ0IsQ0FBQ1AsTUFEdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBTUU7QUFBQSxzQkFDS08sZ0JBQWdCLENBQUNrQyxHQUFqQixDQUFxQixVQUFDQyxTQUFELEVBQWU7QUFDbkMsa0NBQ0U7QUFBQSx1Q0FDRTtBQUFHLHNCQUFJLG1CQUFZQSxTQUFaLENBQVA7QUFBQSwwQ0FDRTtBQUFLLHVCQUFHLCtCQUF3QkEsU0FBeEI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUU7QUFBQSw4QkFBT0E7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUEsbUJBQXFDQSxTQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQVNBLFNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQVFELGFBVEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhBO0FBQUEsa0JBREY7QUEwSEQ7O0dBeEx1QnpDLEk7O01BQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTI3YzE3MTA4MjZjNzk4NmYzMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFpbkdyaWQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudGVzL01haW5HcmlkJ1xuaW1wb3J0IEJveCBmcm9tICcuLi9zcmMvY29tcG9uZW50ZXMvQm94J1xuaW1wb3J0ICB7IEFsdXJha3V0TWVudSwgQWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0LCBPcmt1dE5vc3RhbGdpY0ljb25TZXQgfSAgZnJvbSAnLi4vc3JjL2xpYi9BbHVyYWt1dENvbW1vbnMnO1xuaW1wb3J0IHsgUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXIgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50ZXMvUHJvZmlsZVJlbGF0aW9ucyc7XG5cbmZ1bmN0aW9uIFByb2ZpbGVTaWRlYmFyKHByb3ByaWVkYWRlcykge1xuICByZXR1cm4gKCBcbiAgICA8Qm94IGNsYXNzTmFtZT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHtwcm9wcmllZGFkZXMudXN1YXJpb0FsZWF0b3Jpb30ucG5nYH0gc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnOHB4J319Lz5cblxuICAgICAgPGhyIC8+IFxuXG4gICAgICA8cD4gXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJveExpbmtcIiBocmVmID17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3Byb3ByaWVkYWRlcy51c3VhcmlvQWxlYXRvcmlvfWB9PlxuICAgICAgICAgIEB7cHJvcHJpZWRhZGVzLnVzdWFyaW9BbGVhdG9yaW99XG4gICAgICAgIDwvYT5cblxuICAgICAgPC9wPlxuICAgICAgPGhyIC8+IFxuICAgICAgPEFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdCAvPlxuICAgIDwvQm94PlxuICBcbiAgIFxuICBcbiAgXG4gIClcbn1cblxuZnVuY3Rpb24gUHJvZmlsZVJlbGF0aW9uc0JveChwcm9wcmllZGFkZXMpe1xuICByZXR1cm4gKFxuICAgIDxQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJzbWFsbFRpdGxlXCI+XG4gICAgICAgICAgIHtwcm9wcmllZGFkZXMudGl0bGV9ICAgKHsgcHJvcHJpZWRhZGVzLml0ZW1zLmxlbmd0aCB9KSA8L2gyPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgeyAvKiBzZWd1aWRvcmVzLm1hcCgoaXRlbUF0dWFsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW1BdHVhbH0gPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7aXRlbUF0dWFsfS5wbmdgfT5cbiAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtQXR1YWwuaW1hZ2V9IC8+IFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtQXR1YWwudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9ICovfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1Byb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPiBcbiAgKX1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHVzdWFyaW9BbGVhdG9yaW8gPSAncmFwaGFlbGFmZXJyYXonXG4gIGNvbnN0IFtjb211bmlkYWRlcywgc2V0Q29tdW5pZGFkZXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG4gIGNvbnNvbGUubG9nKGNvbXVuaWRhZGVzKTtcbiAgLy9jb25zdCBjb211bmlkYWRlcyA9IFsnQWx1cmFrdXQnXVxuICBjb25zdCBwZXNzb2FzRmF2b3JpdGFzID0gW1xuICAgICdWaWN0b3JHTTAxJyxcbiAgICAnanV1bmVncmVpcm9zJyxcbiAgICAnb21hcmlvc291dG8nLFxuICAgICdwZWFzJyxcbiAgICAnZmlsaXBlZGVzY2hhbXBzJ1xuICBdXG4gIFxuY29uc3QgW3NlZ3VpZG9yZXMsIHNldFNlZ3VpZG9yZXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBcblJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbigpIHtcbiAgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvcmFwaGFlbGFmZXJyYXovZm9sbG93ZXJzJylcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3Bvc3RhRG9TZXJ2aWRvcikge1xuICAgIHJldHVybiByZXNwb3N0YURvU2Vydmlkb3IuanNvbigpO1xuICB9KVxuICAudGhlbihmdW5jdGlvbiAocmVzcG9zdGFDb21wbGV0YSl7XG4gICAgc2V0U2VndWlkb3JlcyhyZXNwb3N0YUNvbXBsZXRhKTtcbiAgfSlcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC50aGVuICgocmVzcG9zdGFDb21wbGV0YSkgPT4ge1xuICAgIGNvbnN0IGNvbXVuaWRhZGVzRG9EYXRvPXJlc3Bvc3RhQ29tcGxldGEuZGF0YS5hbGxDb21tdW5pdGllcztcbiAgICBjb25zb2xlLmxvZyhjb211bmlkYWRlc0RvRGF0bylcbiAgICBzZXRDb211bmlkYWRlcyhjb211bmlkYWRlc0RvRGF0bylcbiAgfSlcblxuICAvL0FQSSBHcmFwaFFMXG4gICAgZmV0Y2goJ2h0dHBzOi8vZ3JhcGggIGwuZGF0b2Ntcy5jb20vJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJzVmOWY2NDE2ZDJjZGJlMzkwODc2MDI4YzIxM2QyOCcsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1wicXVlcnlcIjogYHF1ZXJ5IHtcbiAgICAgICAgYWxsQ29tbXVuaXRpZXMge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgaW1hZ2VVcmxcbiAgICAgICAgICBjb21tdW5pdHlVcmxcbiAgICAgICAgfVxuICAgICAgfWAgIH0pXG4gICAgfSlcblxufSwgW10pXG5cbmNvbnN0IFtzZWd1aW5kbywgc2V0U2VndWluZG9dID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG5SZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL3JhcGhhZWxhZmVycmF6L2ZvbGxvd2luZycpXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb3N0YURvU2Vydmlkb3IpIHtcbiAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZpZG9yLmpzb24oKTtcbiAgfSlcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3Bvc3RhQ29tcGxldGEpe1xuICAgIHNldFNlZ3VpbmRvKHJlc3Bvc3RhQ29tcGxldGEpO1xuICB9KVxufSwgW10pXG5cbiAgcmV0dXJuICggXG4gICAgPD5cbiAgICA8QWx1cmFrdXRNZW51IHVzdWFyaW9BbGVhdG9yaW89e3VzdWFyaW9BbGVhdG9yaW99Lz4gXG4gICAgICBcbiAgICA8TWFpbkdyaWQ+IFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlQXJlYVwiIHN0eWxlID0ge3sgZ3JpZEFyZWE6ICdwcm9maWxlQXJlYScgfX0+IFxuICAgICAgIDxQcm9maWxlU2lkZWJhciB1c3VhcmlvQWxlYXRvcmlvPXt1c3VhcmlvQWxlYXRvcmlvfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lQXJlYVwiIHN0eWxlID0ge3sgZ3JpZEFyZWE6ICd3ZWxjb21lQXJlYScgfX0+XG4gICAgICAgIFxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPiBcbiAgICAgICAgICAgIEJlbSB2aW5kbyAoYSlcbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPE9ya3V0Tm9zdGFsZ2ljSWNvblNldCAvPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94PiBcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3ViVGl0bGVcIj4gTyBxdWUgdm9jw6ogZGVzZWphIGZhemVyPzwvaDI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Z1bmN0aW9uIGhhbmRsZUNyaWFyY29tdW5pZGFkZShlKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGNvbnN0IGRhZG9zRG9Gb3JtdWxhcmlvID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbXBvOiAnLCBkYWRvc0RvRm9ybXVsYXJpby5nZXQoJ3RpdGxlJykpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FtcG86ICcsIGRhZG9zRG9Gb3JtdWxhcmlvLmdldCgnaW1hZ2UnKSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW1wbzogJywgZGFkb3NEb0Zvcm11bGFyaW8uZ2V0KCdsaW5rJykpXG5cbiAgICAgICAgICAgICAgY29uc3QgY29tdW5pZGFkZSA9IHtcbiAgICAgICAgICAgICAgICBpZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBkYWRvc0RvRm9ybXVsYXJpby5nZXQoJ3RpdGxlJyksXG4gICAgICAgICAgICAgICAgaW1hZ2U6IGRhZG9zRG9Gb3JtdWxhcmlvLmdldCgnaW1hZ2UnKSxcbiAgICAgICAgICAgICAgICBsaW5rOiBkYWRvc0RvRm9ybXVsYXJpby5nZXQoJ2xpbmsnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjb25zdCBjb211bmlkYWRlc0F0dWFsaXphZGFzID0gWy4uLmNvbXVuaWRhZGVzLCBjb211bmlkYWRlXVxuXG4gICAgICAgICAgICAgIHNldENvbXVuaWRhZGVzKGNvbXVuaWRhZGVzQXR1YWxpemFkYXMpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICA8ZGl2PiBcbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiUXVhbCB2YWkgc2VyIG8gbm9tZSBkYSBjb211bmlkYWRlP1wiIG5hbWU9XCJ0aXRsZVwiIFxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUXVhbCB2YWkgc2VyIG8gbm9tZSBkYSBjb211bmlkYWRlP1wiIFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkNvbG9xdWUgYXF1aSBhIFVSTCBkYSBjYXBhIGRlIHN1YSBjb211bmlkYWRlXCIgbmFtZT1cImltYWdlXCIgXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDb2xvcXVlIGFxdWkgYSBVUkwgZGEgY2FwYSBkZSBzdWEgY29tdW5pZGFkZVwiIFxuICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb2xvcXVlIGFxdWksIG8gbGluayBkYSBzdWEgY29tdW5pZGFkZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJsaW5rXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNvbG9xdWUgYXF1aSwgbyBsaW5rIGRhIHN1YSBjb211bmlkYWRlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgICAgICBDcmlhciBjb211bmlkYWRlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIDwvQm94PlxuXG4gICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlUmVsYXRpb25zQXJlYVwiIHN0eWxlID0ge3sgZ3JpZEFyZWE6ICdwcm9maWxlUmVsYXRpb25zQXJlYScgfX0+XG4gICAgICA8UHJvZmlsZVJlbGF0aW9uc0JveCB0aXRsZT1cIlNlZ3VpZG9yZXNcIiBpdGVtcz17c2VndWlkb3Jlc30vPlxuXG4gICAgICA8UHJvZmlsZVJlbGF0aW9uc0JveCB0aXRsZT0nU2VndWluZG8nIGl0ZW1zPXtzZWd1aW5kb30gLz5cbiAgICAgIFxuICAgICAgXG4gICAgICA8UHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwic21hbGxUaXRsZVwiPlxuICAgICAgICAgICAgICBNaW5oYXMgY29tdW5pZGFkZXMgKHsgY29tdW5pZGFkZXMubGVuZ3RoIH0pIDwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7Y29tdW5pZGFkZXMubWFwKChpdGVtQXR1YWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbUF0dWFsLmlkfSA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW1BdHVhbC5jb21tdW5pdHlVcmx9PlxuICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW1BdHVhbC5pbWFnZVVybH0gLz4gXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW1BdHVhbC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9Qcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzbWFsbFRpdGxlXCI+IFxuICAgICAgICAgICAgUGVzc29hcyBmYXZvcml0YXMgKHtwZXNzb2FzRmF2b3JpdGFzLmxlbmd0aH0pIFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgXG5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtwZXNzb2FzRmF2b3JpdGFzLm1hcCgoaXRlbUF0dWFsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW1BdHVhbH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvdXNlcnMvJHtpdGVtQXR1YWx9YH0ga2V5PXtpdGVtQXR1YWx9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7aXRlbUF0dWFsfS5wbmdgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtQXR1YWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NYWluR3JpZD5cbiAgICA8Lz5cbiAgKVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9