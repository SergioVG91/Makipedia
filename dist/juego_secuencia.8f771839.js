// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/juego_secuencia.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var img_maki_0 = document.getElementById('img_round_maki_ur_0');
var img_maki_1 = document.getElementById('img_round_maki_ur_1');
var img_maki_2 = document.getElementById('img_round_maki_ur_2');
var img_maki_3 = document.getElementById('img_round_maki_ur_3');
var img_maki_4 = document.getElementById('img_round_maki_ur_4');
var img_maki_5 = document.getElementById('img_round_maki_ur_5');
var img_maki_6 = document.getElementById('img_round_maki_ur_6');
var img_maki_7 = document.getElementById('img_round_maki_ur_7');
var btn_empezar_juego = document.getElementById('btn_empezar_juego_maki');
var sound_do = document.getElementById('sound_do');
var sound_re = document.getElementById('sound_re');
var sound_mi = document.getElementById('sound_mi');
var sound_fa = document.getElementById('sound_fa');
var sound_sol = document.getElementById('sound_sol');
var sound_la = document.getElementById('sound_la');
var sound_si = document.getElementById('sound_si');
var sound_do8 = document.getElementById('sound_do8');
var sound_win = document.getElementById('sound_win');
var sound_lose = document.getElementById('sound_lose');

var Juego =
/*#__PURE__*/
function () {
  function Juego() {
    _classCallCheck(this, Juego);

    this.NIVEL_MAXIMO = 10;
    this.clickMaki = this.clickMaki.bind(this);
    this.iluminarImagenes = this.iluminarImagenes.bind(this);
    this.iniciar();
    this.generarSecuencia();
    this.generarNivel();
  }

  _createClass(Juego, [{
    key: "apagarImagenes",
    value: function apagarImagenes() {
      this.imagenes.img_maki_0.classList.add('apagar');
      this.imagenes.img_maki_1.classList.add('apagar');
      this.imagenes.img_maki_2.classList.add('apagar');
      this.imagenes.img_maki_3.classList.add('apagar');
      this.imagenes.img_maki_4.classList.add('apagar');
      this.imagenes.img_maki_5.classList.add('apagar');
      this.imagenes.img_maki_6.classList.add('apagar');
      this.imagenes.img_maki_7.classList.add('apagar');
    }
  }, {
    key: "apagarBoton",
    value: function apagarBoton() {
      this.btn.classList.add('apagar');
    }
  }, {
    key: "iluminarImagenes",
    value: function iluminarImagenes() {
      this.imagenes.img_maki_0.classList.remove('apagar');
      this.imagenes.img_maki_1.classList.remove('apagar');
      this.imagenes.img_maki_2.classList.remove('apagar');
      this.imagenes.img_maki_3.classList.remove('apagar');
      this.imagenes.img_maki_4.classList.remove('apagar');
      this.imagenes.img_maki_5.classList.remove('apagar');
      this.imagenes.img_maki_6.classList.remove('apagar');
      this.imagenes.img_maki_7.classList.remove('apagar');
    }
  }, {
    key: "iluminarBoton",
    value: function iluminarBoton() {
      this.btn.classList.remove('apagar');
    }
  }, {
    key: "iluminarMaki",
    value: function iluminarMaki(numMaki) {
      var _this = this;

      var nombre = "img_maki_".concat(numMaki);
      this.imagenes[nombre].classList.remove('apagar');
      this.generarSonido(numMaki);
      setTimeout(function () {
        return _this.imagenes[nombre].classList.add('apagar');
      }, 600);
    }
  }, {
    key: "btnActivarClick",
    value: function btnActivarClick() {
      this.btn.addEventListener("click", empezarJuegoMaki);
      this.btn.classList.add('pointer');
    }
  }, {
    key: "btnDesactivarClick",
    value: function btnDesactivarClick() {
      this.btn.removeEventListener("click", empezarJuegoMaki);
      this.btn.classList.remove('pointer');
    }
  }, {
    key: "generarSonido",
    value: function generarSonido(numMaki) {
      switch (numMaki) {
        case 0:
          this.sonidos.sound_do.play();
          break;

        case 1:
          this.sonidos.sound_re.play();
          break;

        case 2:
          this.sonidos.sound_mi.play();
          break;

        case 3:
          this.sonidos.sound_fa.play();
          break;

        case 4:
          this.sonidos.sound_sol.play();
          break;

        case 5:
          this.sonidos.sound_la.play();
          break;

        case 6:
          this.sonidos.sound_si.play();
          break;

        case 7:
          this.sonidos.sound_do8.play();
          break;

        case 'ganar':
          this.sonidos.sound_win.play();
          break;

        case 'perder':
          this.sonidos.sound_lose.play();
          break;
      }
    }
  }, {
    key: "generarSecuencia",
    value: function generarSecuencia() {
      this.secuencia = new Array(this.NIVEL_MAXIMO).fill(0).map(function () {
        return Math.floor(Math.random() * 8);
      });
    }
  }, {
    key: "delay",
    value: function delay(ms) {
      return new Promise(function (resolve) {
        setTimeout(resolve, ms);
      });
    }
  }, {
    key: "btnYourTurn",
    value: function btnYourTurn() {
      this.btn.innerHTML = "\uD83C\uDFA4";
    }
  }, {
    key: "btnMachineTurn",
    value: function btnMachineTurn() {
      this.btn.innerHTML = "Lv. ".concat(this.nivel);
    }
  }, {
    key: "generarNivel",
    value: function generarNivel() {
      var i, numMaki;
      return regeneratorRuntime.async(function generarNivel$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.subnivel = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(this.delay(1000));

            case 3:
              this.btnMachineTurn();
              i = 0;

            case 5:
              if (!(i < this.nivel)) {
                _context.next = 13;
                break;
              }

              numMaki = this.secuencia[i];
              this.iluminarMaki(numMaki);
              _context.next = 10;
              return regeneratorRuntime.awrap(this.delay(1200));

            case 10:
              i++;
              _context.next = 5;
              break;

            case 13:
              this.activarListener();
              this.btnYourTurn();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "activarListener",
    value: function activarListener() {
      this.imagenes.img_maki_0.addEventListener("click", this.clickMaki);
      this.imagenes.img_maki_1.addEventListener("click", this.clickMaki);
      this.imagenes.img_maki_2.addEventListener("click", this.clickMaki);
      this.imagenes.img_maki_3.addEventListener("click", this.clickMaki);
      this.imagenes.img_maki_4.addEventListener("click", this.clickMaki);
      this.imagenes.img_maki_5.addEventListener("click", this.clickMaki);
      this.imagenes.img_maki_6.addEventListener("click", this.clickMaki);
      this.imagenes.img_maki_7.addEventListener("click", this.clickMaki);
      this.imagenes.img_maki_0.classList.add('pointer');
      this.imagenes.img_maki_1.classList.add('pointer');
      this.imagenes.img_maki_2.classList.add('pointer');
      this.imagenes.img_maki_3.classList.add('pointer');
      this.imagenes.img_maki_4.classList.add('pointer');
      this.imagenes.img_maki_5.classList.add('pointer');
      this.imagenes.img_maki_6.classList.add('pointer');
      this.imagenes.img_maki_7.classList.add('pointer');
    }
  }, {
    key: "desactivarListener",
    value: function desactivarListener() {
      this.imagenes.img_maki_0.removeEventListener("click", this.clickMaki);
      this.imagenes.img_maki_1.removeEventListener("click", this.clickMaki);
      this.imagenes.img_maki_2.removeEventListener("click", this.clickMaki);
      this.imagenes.img_maki_3.removeEventListener("click", this.clickMaki);
      this.imagenes.img_maki_4.removeEventListener("click", this.clickMaki);
      this.imagenes.img_maki_5.removeEventListener("click", this.clickMaki);
      this.imagenes.img_maki_6.removeEventListener("click", this.clickMaki);
      this.imagenes.img_maki_7.removeEventListener("click", this.clickMaki);
      this.imagenes.img_maki_0.classList.remove('pointer');
      this.imagenes.img_maki_1.classList.remove('pointer');
      this.imagenes.img_maki_2.classList.remove('pointer');
      this.imagenes.img_maki_3.classList.remove('pointer');
      this.imagenes.img_maki_4.classList.remove('pointer');
      this.imagenes.img_maki_5.classList.remove('pointer');
      this.imagenes.img_maki_6.classList.remove('pointer');
      this.imagenes.img_maki_7.classList.remove('pointer');
    }
  }, {
    key: "clickMaki",
    value: function clickMaki(evento) {
      var numMaki = parseInt(evento.target.dataset.card);
      this.iluminarMaki(numMaki);

      if (numMaki === this.secuencia[this.subnivel]) {
        this.subnivel++;

        if (this.subnivel === this.nivel) {
          this.desactivarListener();
          this.nivel++;

          if (this.nivel === this.NIVEL_MAXIMO + 1) {
            this.ganarJuego();
          } else {
            this.generarNivel();
          }
        }
      } else {
        this.perderJuego();
      }
    }
  }, {
    key: "perderJuego",
    value: function perderJuego() {
      this.generarSonido('perder');
      this.btn.innerHTML = "Lose!";
      this.desactivarListener();
      this.iluminarBoton();
      this.btnActivarClick();
    }
  }, {
    key: "ganarJuego",
    value: function ganarJuego() {
      this.generarSonido('ganar');
      this.btn.innerHTML = "Win!";
      setTimeout(this.iluminarImagenes, 600);
      this.iluminarImagenes();
      this.iluminarBoton();
      this.desactivarListener();
      this.btnActivarClick();
    }
  }, {
    key: "iniciar",
    value: function iniciar() {
      this.nivel = 1;
      this.imagenes = {
        img_maki_0: img_maki_0,
        img_maki_1: img_maki_1,
        img_maki_2: img_maki_2,
        img_maki_3: img_maki_3,
        img_maki_4: img_maki_4,
        img_maki_5: img_maki_5,
        img_maki_6: img_maki_6,
        img_maki_7: img_maki_7
      };
      this.sonidos = {
        sound_do: sound_do,
        sound_re: sound_re,
        sound_mi: sound_mi,
        sound_fa: sound_fa,
        sound_sol: sound_sol,
        sound_la: sound_la,
        sound_si: sound_si,
        sound_do8: sound_do8,
        sound_win: sound_win,
        sound_lose: sound_lose
      };
      this.btn = btn_empezar_juego;
      this.apagarImagenes();
      this.apagarBoton();
      this.btnDesactivarClick();
      this.desactivarListener();
    }
  }]);

  return Juego;
}();

btn_empezar_juego.addEventListener("click", empezarJuegoMaki);
btn_empezar_juego.classList.add('pointer');

function empezarJuegoMaki() {
  var juego_maki = new Juego();
  juego_maki.iniciar();
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53525" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/juego_secuencia.js"], null)
//# sourceMappingURL=/juego_secuencia.8f771839.js.map