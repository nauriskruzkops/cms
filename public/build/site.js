/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"site": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/Resources/views/theme/assets/main.js","vendors~site"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Resources/views/theme/assets/css/bootstrap.css":
/*!************************************************************!*\
  !*** ./src/Resources/views/theme/assets/css/bootstrap.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Resources/views/theme/assets/css/responsive.css":
/*!*************************************************************!*\
  !*** ./src/Resources/views/theme/assets/css/responsive.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Resources/views/theme/assets/css/style-overwrite.css":
/*!******************************************************************!*\
  !*** ./src/Resources/views/theme/assets/css/style-overwrite.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Resources/views/theme/assets/css/style.css":
/*!********************************************************!*\
  !*** ./src/Resources/views/theme/assets/css/style.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Resources/views/theme/assets/js/bootstrap.min.js":
/*!**************************************************************!*\
  !*** ./src/Resources/views/theme/assets/js/bootstrap.min.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
  "use strict";

  var b = a.fn.jquery.split(" ")[0].split(".");
  if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery), +function (a) {
  "use strict";

  function b() {
    var a = document.createElement("bootstrap"),
        b = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };

    for (var c in b) {
      if (void 0 !== a.style[c]) return {
        end: b[c]
      };
    }

    return !1;
  }

  a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;
    a(this).one("bsTransitionEnd", function () {
      c = !0;
    });

    var e = function e() {
      c || a(d).trigger(a.support.transition.end);
    };

    return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
      bindType: a.support.transition.end,
      delegateType: a.support.transition.end,
      handle: function handle(b) {
        if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments);
      }
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.alert");
      e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
    });
  }

  var c = '[data-dismiss="alert"]',
      d = function d(b) {
    a(b).on("click", c, this.close);
  };

  d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove();
    }

    var e = a(this),
        f = e.attr("data-target");
    f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
    var g = a("#" === f ? [] : f);
    b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this;
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == _typeof(b) && b;
      e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
    });
  }

  var c = function c(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
  };

  c.VERSION = "3.3.7", c.DEFAULTS = {
    loadingText: "loading..."
  }, c.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();
    b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1));
    }, this), 0);
  }, c.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');

    if (b.length) {
      var c = this.$element.find("input");
      "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this;
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target).closest(".btn");
    b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"));
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == _typeof(b) && b),
          g = "string" == typeof b ? b : f.slide;
      e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }

  var c = function c(b, _c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
  };

  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, c.prototype.keydown = function (a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {
        case 37:
          this.prev();
          break;

        case 39:
          this.next();
          break;

        default:
          return;
      }

      a.preventDefault();
    }
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
  }, c.prototype.getItemForDirection = function (a, b) {
    var c = this.getItemIndex(b),
        d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
    if (d && !this.options.wrap) return b;
    var e = "prev" == a ? -1 : 1,
        f = (c + e) % this.$items.length;
    return this.$items.eq(f);
  }, c.prototype.to = function (a) {
    var b = this,
        c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
      b.to(a);
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    if (!this.sliding) return this.slide("next");
  }, c.prototype.prev = function () {
    if (!this.sliding) return this.slide("prev");
  }, c.prototype.slide = function (b, d) {
    var e = this.$element.find(".item.active"),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = "next" == b ? "left" : "right",
        i = this;
    if (f.hasClass("active")) return this.sliding = !1;
    var j = f[0],
        k = a.Event("slide.bs.carousel", {
      relatedTarget: j,
      direction: h
    });

    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
        l && l.addClass("active");
      }

      var m = a.Event("slid.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
      return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m);
        }, 0);
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this;
  };

  var e = function e(c) {
    var d,
        e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));

    if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
      h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
    }
  };

  a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);
      b.call(c, c.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    var c,
        d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
    return a(d);
  }

  function c(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == _typeof(b) && b);
      !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
    });
  }

  var d = function d(b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };

  d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
    toggle: !0
  }, d.prototype.dimension = function () {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height";
  }, d.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b,
          e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");

      if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");

        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
          var g = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;

          var h = function h() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };

          if (!a.support.transition) return h.call(this);
          var i = a.camelCase(["scroll", g].join("-"));
          this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
        }
      }
    }
  }, d.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");

      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;

        var e = function e() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };

        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
      }
    }
  }, d.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, d.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
      var e = a(d);
      this.addAriaAndCollapsedClass(b(e), e);
    }, this)).end();
  }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
    var c = a.hasClass("in");
    a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
  };
  var e = a.fn.collapse;
  a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = e, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
    var e = a(this);
    e.attr("data-target") || d.preventDefault();
    var f = b(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : e.data();
    c.call(f, h);
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent();
  }

  function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function () {
      var d = a(this),
          e = b(d),
          f = {
        relatedTarget: this
      };
      e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
    }));
  }

  function d(b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");
      d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
    });
  }

  var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function g(b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };

  g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
    var e = a(this);

    if (!e.is(".disabled, :disabled")) {
      var f = b(e),
          g = f.hasClass("open");

      if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
        var h = {
          relatedTarget: this
        };
        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
      }

      return !1;
    }
  }, g.prototype.keydown = function (c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);

      if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
            g = e.hasClass("open");
        if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
        var h = " li:not(.disabled):visible a",
            i = e.find(".dropdown-menu" + h);

        if (i.length) {
          var j = i.index(c.target);
          38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this;
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function (a) {
  "use strict";

  function b(b, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == _typeof(b) && b);
      f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
    });
  }

  var c = function c(b, _c2) {
    this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };

  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a);
  }, c.prototype.show = function (b) {
    var d = this,
        e = a.Event("show.bs.modal", {
      relatedTarget: b
    });
    this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      d.$element.one("mouseup.dismiss.bs.modal", function (b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
      });
    }), this.backdrop(function () {
      var e = a.support.transition && d.$element.hasClass("fade");
      d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
      var f = a.Event("shown.bs.modal", {
        relatedTarget: b
      });
      e ? d.$dialog.one("bsTransitionEnd", function () {
        d.$element.trigger("focus").trigger(f);
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
    }));
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
    }, this));
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, c.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
  }, c.prototype.hideModal = function () {
    var a = this;
    this.$element.hide(), this.backdrop(function () {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
    });
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function (b) {
    var d = this,
        e = this.$element.hasClass("fade") ? "fade" : "";

    if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;
      if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
      }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
      f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");

      var g = function g() {
        d.removeBackdrop(), b && b();
      };

      a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
    } else b && b();
  }, c.prototype.handleUpdate = function () {
    this.adjustDialog();
  }, c.prototype.adjustDialog = function () {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
    });
  }, c.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    });
  }, c.prototype.checkScrollbar = function () {
    var a = window.innerWidth;

    if (!a) {
      var b = document.documentElement.getBoundingClientRect();
      a = b.right - Math.abs(b.left);
    }

    this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad);
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");
    a.className = "modal-scrollbar-measure", this.$body.append(a);
    var b = a.offsetWidth - a.clientWidth;
    return this.$body[0].removeChild(a), b;
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle" : a.extend({
      remote: !/#/.test(e) && e
    }, f.data(), d.data());
    d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus");
      });
    }), b.call(f, g, this);
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == _typeof(b) && b;
      !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }

  var c = function c(a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
  };

  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, c.prototype.init = function (b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
      click: !1,
      hover: !1,
      focus: !1
    }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");

    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }

    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle();
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b;
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();
    return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show());
  }, c.prototype.isInStateTrue = function () {
    for (var a in this.inState) {
      if (this.inState[a]) return !0;
    }

    return !1;
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide();
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (b.isDefaultPrevented() || !d) return;
      var e = this,
          f = this.tip(),
          g = this.getUID(this.type);
      this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
      var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
          i = /\s?auto?\s?/i,
          j = i.test(h);
      j && (h = h.replace(i, "") || "top"), f.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var k = this.getPosition(),
          l = f[0].offsetWidth,
          m = f[0].offsetHeight;

      if (j) {
        var n = h,
            o = this.getPosition(this.$viewport);
        h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
      }

      var p = this.getCalculatedOffset(h, k, l, m);
      this.applyPlacement(p, h);

      var q = function q() {
        var a = e.hoverState;
        e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
      };

      a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
      using: function using(a) {
        d.css({
          top: Math.round(a.top),
          left: Math.round(a.left)
        });
      }
    }, b), 0), d.addClass("in");
    var i = d[0].offsetWidth,
        j = d[0].offsetHeight;
    "top" == c && j != f && (b.top = b.top + f - j);
    var k = this.getViewportAdjustedDelta(c, b, i, j);
    k.left ? b.left += k.left : b.top += k.top;
    var l = /top|bottom/.test(c),
        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
        n = l ? "offsetWidth" : "offsetHeight";
    d.offset(b), this.replaceArrow(m, d[0][n], l);
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, c.prototype.hide = function (b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
    }

    var e = this,
        f = a(this.$tip),
        g = a.Event("hide.bs." + this.type);
    if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this;
  }, c.prototype.fixTitle = function () {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, c.prototype.hasContent = function () {
    return this.getTitle();
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;
    var c = b[0],
        d = "BODY" == c.tagName,
        e = c.getBoundingClientRect();
    null == e.width && (e = a.extend({}, e, {
      width: e.right - e.left,
      height: e.bottom - e.top
    }));
    var f = window.SVGElement && c instanceof window.SVGElement,
        g = d ? {
      top: 0,
      left: 0
    } : f ? null : b.offset(),
        h = {
      scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
    },
        i = d ? {
      width: a(window).width(),
      height: a(window).height()
    } : null;
    return a.extend({}, e, h, i, g);
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : "left" == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    };
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return e;
    var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);

    if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
          i = b.top + f - g.scroll + d;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b.left - f,
          k = b.left + f + c;
      j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
    }

    return e;
  }, c.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, c.prototype.getUID = function (a) {
    do {
      a += ~~(1e6 * Math.random());
    } while (document.getElementById(a));

    return a;
  }, c.prototype.tip = function () {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip;
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, c.prototype.enable = function () {
    this.enabled = !0;
  }, c.prototype.disable = function () {
    this.enabled = !1;
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function (b) {
    var c = this;
    b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, c.prototype.destroy = function () {
    var a = this;
    clearTimeout(this.timeout), this.hide(function () {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null;
    });
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this;
  };
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == _typeof(b) && b;
      !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }

  var c = function c(a, b) {
    this.init("popover", a, b);
  };

  if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
  c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this;
  };
}(jQuery), +function (a) {
  "use strict";

  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
  }

  function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == _typeof(c) && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }

  b.VERSION = "3.3.7", b.DEFAULTS = {
    offset: 10
  }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function () {
    var b = this,
        c = "offset",
        d = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var b = a(this),
          e = b.data("target") || b.attr("href"),
          f = /^#./.test(e) && a(e);
      return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      b.offsets.push(this[0]), b.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;
    if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
    if (g && b < e[0]) return this.activeTarget = null, this.clear();

    for (a = e.length; a--;) {
      g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
    }
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, this.clear();
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  }, b.prototype.clear = function () {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this;
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);
      c.call(b, b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");
      e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
    });
  }

  var c = function c(b) {
    this.element = a(b);
  };

  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");

    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
          f = a.Event("hide.bs.tab", {
        relatedTarget: b[0]
      }),
          g = a.Event("show.bs.tab", {
        relatedTarget: e[0]
      });

      if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);
        this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
          e.trigger({
            type: "hidden.bs.tab",
            relatedTarget: b[0]
          }), b.trigger({
            type: "shown.bs.tab",
            relatedTarget: e[0]
          });
        });
      }
    }
  }, c.prototype.activate = function (b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
    }

    var g = d.find("> .active"),
        h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
    g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this;
  };

  var e = function e(c) {
    c.preventDefault(), b.call(a(this), "show");
  };

  a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == _typeof(b) && b;
      e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
    });
  }

  var c = function c(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
  };

  c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getState = function (a, b, c, d) {
    var e = this.$target.scrollTop(),
        f = this.$element.offset(),
        g = this.$target.height();
    if (null != c && "top" == this.affixed) return e < c && "top";
    if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
    var h = null == this.affixed,
        i = h ? e : f.top,
        j = h ? g : b;
    return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom";
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var a = this.$target.scrollTop(),
        b = this.$element.offset();
    return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
          d = this.options.offset,
          e = d.top,
          f = d.bottom,
          g = Math.max(a(document).height(), a(document.body).height());
      "object" != _typeof(d) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
      var h = this.getState(g, b, e, f);

      if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");
        var i = "affix" + (h ? "-" + h : ""),
            j = a.Event(i + ".bs.affix");
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
      }

      "bottom" == h && this.$element.offset({
        top: g - b - f
      });
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
          d = c.data();
      d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/Resources/views/theme/assets/js/jquery.fancybox.js":
/*!****************************************************************!*\
  !*** ./src/Resources/views/theme/assets/js/jquery.fancybox.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, jQuery) {// ==================================================
// fancyBox v3.2.10
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
;

(function (window, document, $, undefined) {
  'use strict'; // If there's no jQuery, fancyBox can't work
  // =========================================

  if (!$) {
    return;
  } // Check if fancyBox is already initialized
  // ========================================


  if ($.fn.fancybox) {
    if ('console' in window) {
      console.log('fancyBox already initialized');
    }

    return;
  } // Private default settings
  // ========================


  var defaults = {
    // Enable infinite gallery navigation
    loop: false,
    // Space around image, ignored if zoomed-in or viewport width is smaller than 800px
    margin: [44, 0],
    // Horizontal space between slides
    gutter: 50,
    // Enable keyboard navigation
    keyboard: true,
    // Should display navigation arrows at the screen edges
    arrows: true,
    // Should display infobar (counter and arrows at the top)
    infobar: true,
    // Should display toolbar (buttons at the top)
    toolbar: true,
    // What buttons should appear in the top right corner.
    // Buttons will be created using templates from `btnTpl` option
    // and they will be placed into toolbar (class="fancybox-toolbar"` element)
    buttons: ['slideShow', 'fullScreen', 'thumbs', 'share', //'download',
    //'zoom',
    'close'],
    // Detect "idle" time in seconds
    idleTime: 3,
    // Should display buttons at top right corner of the content
    // If 'auto' - they will be created for content having type 'html', 'inline' or 'ajax'
    // Use template from `btnTpl.smallBtn` for customization
    smallBtn: 'auto',
    // Disable right-click and use simple image protection for images
    protect: false,
    // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
    modal: false,
    image: {
      // Wait for images to load before displaying
      // Requires predefined image dimensions
      // If 'auto' - will zoom in thumbnail if 'width' and 'height' attributes are found
      preload: "auto"
    },
    ajax: {
      // Object containing settings for ajax request
      settings: {
        // This helps to indicate that request comes from the modal
        // Feel free to change naming
        data: {
          fancybox: true
        }
      }
    },
    iframe: {
      // Iframe template
      tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
      // Preload iframe before displaying it
      // This allows to calculate iframe content width and height
      // (note: Due to "Same Origin Policy", you can't get cross domain data).
      preload: true,
      // Custom CSS styling for iframe wrapping element
      // You can use this to set custom iframe dimensions
      css: {},
      // Iframe tag attributes
      attr: {
        scrolling: 'auto'
      }
    },
    // Default content type if cannot be detected automatically
    defaultType: 'image',
    // Open/close animation type
    // Possible values:
    //   false            - disable
    //   "zoom"           - zoom images from/to thumbnail
    //   "fade"
    //   "zoom-in-out"
    //
    animationEffect: "zoom",
    // Duration in ms for open/close animation
    animationDuration: 500,
    // Should image change opacity while zooming
    // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
    zoomOpacity: "auto",
    // Transition effect between slides
    //
    // Possible values:
    //   false            - disable
    //   "fade'
    //   "slide'
    //   "circular'
    //   "tube'
    //   "zoom-in-out'
    //   "rotate'
    //
    transitionEffect: "fade",
    // Duration in ms for transition animation
    transitionDuration: 366,
    // Custom CSS class for slide element
    slideClass: '',
    // Custom CSS class for layout
    baseClass: '',
    // Base template for layout
    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' + '<div class="fancybox-bg"></div>' + '<div class="fancybox-inner">' + '<div class="fancybox-infobar">' + '<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' + '</div>' + '<div class="fancybox-toolbar">{{buttons}}</div>' + '<div class="fancybox-navigation">{{arrows}}</div>' + '<div class="fancybox-stage"></div>' + '<div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div>' + '</div>' + '</div>',
    // Loading indicator template
    spinnerTpl: '<div class="fancybox-loading"></div>',
    // Error message template
    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
    btnTpl: {
      download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}">' + '<svg viewBox="0 0 40 40">' + '<path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" />' + '</svg>' + '</a>',
      zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' + '<svg viewBox="0 0 40 40">' + '<path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" />' + '</svg>' + '</button>',
      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' + '<svg viewBox="0 0 40 40">' + '<path d="M10,10 L30,30 M30,10 L10,30" />' + '</svg>' + '</button>',
      // This small close button will be appended to your html/inline/ajax content by default,
      // if "smallBtn" option is not set to false
      smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
      // Arrows
      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' + '<svg viewBox="0 0 40 40">' + '<path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path>' + '</svg>' + '</button>',
      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' + '<svg viewBox="0 0 40 40">' + '<path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path>' + '</svg>' + '</button>'
    },
    // Container is injected into this element
    parentEl: 'body',
    // Focus handling
    // ==============
    // Try to focus on the first focusable element after opening
    autoFocus: false,
    // Put focus back to active element after closing
    backFocus: true,
    // Do not let user to focus on element outside modal content
    trapFocus: true,
    // Module specific options
    // =======================
    fullScreen: {
      autoStart: false
    },
    // Set `touch: false` to disable dragging/swiping
    touch: {
      vertical: true,
      // Allow to drag content vertically
      momentum: true // Continue movement after releasing mouse/touch when panning

    },
    // Hash value when initializing manually,
    // set `false` to disable hash change
    hash: null,
    // Customize or add new media types
    // Example:

    /*
    media : {
        youtube : {
            params : {
                autoplay : 0
            }
        }
    }
    */
    media: {},
    slideShow: {
      autoStart: false,
      speed: 4000
    },
    thumbs: {
      autoStart: false,
      // Display thumbnails on opening
      hideOnClose: true,
      // Hide thumbnail grid when closing animation starts
      parentEl: '.fancybox-container',
      // Container is injected into this element
      axis: 'y' // Vertical (y) or horizontal (x) scrolling

    },
    // Use mousewheel to navigate gallery
    // If 'auto' - enabled for images only
    wheel: 'auto',
    // Callbacks
    //==========
    // See Documentation/API/Events for more information
    // Example:

    /*
        afterShow: function( instance, current ) {
             console.info( 'Clicked element:' );
             console.info( current.opts.$orig );
        }
    */
    onInit: $.noop,
    // When instance has been initialized
    beforeLoad: $.noop,
    // Before the content of a slide is being loaded
    afterLoad: $.noop,
    // When the content of a slide is done loading
    beforeShow: $.noop,
    // Before open animation starts
    afterShow: $.noop,
    // When content is done loading and animating
    beforeClose: $.noop,
    // Before the instance attempts to close. Return false to cancel the close.
    afterClose: $.noop,
    // After instance has been closed
    onActivate: $.noop,
    // When instance is brought to front
    onDeactivate: $.noop,
    // When other instance has been activated
    // Interaction
    // ===========
    // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
    // each option can be string or method that returns value.
    //
    // Possible values:
    //   "close"           - close instance
    //   "next"            - move to next gallery item
    //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
    //   "toggleControls"  - show/hide controls
    //   "zoom"            - zoom image (if loaded)
    //   false             - do nothing
    // Clicked on the content
    clickContent: function clickContent(current, event) {
      return current.type === 'image' ? 'zoom' : false;
    },
    // Clicked on the slide
    clickSlide: 'close',
    // Clicked on the background (backdrop) element
    clickOutside: 'close',
    // Same as previous two, but for double click
    dblclickContent: false,
    dblclickSlide: false,
    dblclickOutside: false,
    // Custom options when mobile device is detected
    // =============================================
    mobile: {
      idleTime: false,
      margin: 0,
      clickContent: function clickContent(current, event) {
        return current.type === 'image' ? 'toggleControls' : false;
      },
      clickSlide: function clickSlide(current, event) {
        return current.type === 'image' ? 'toggleControls' : 'close';
      },
      dblclickContent: function dblclickContent(current, event) {
        return current.type === 'image' ? 'zoom' : false;
      },
      dblclickSlide: function dblclickSlide(current, event) {
        return current.type === 'image' ? 'zoom' : false;
      }
    },
    // Internationalization
    // ============
    lang: 'en',
    i18n: {
      'en': {
        CLOSE: 'Close',
        NEXT: 'Next',
        PREV: 'Previous',
        ERROR: 'The requested content cannot be loaded. <br/> Please try again later.',
        PLAY_START: 'Start slideshow',
        PLAY_STOP: 'Pause slideshow',
        FULL_SCREEN: 'Full screen',
        THUMBS: 'Thumbnails',
        DOWNLOAD: 'Download',
        SHARE: 'Share',
        ZOOM: 'Zoom'
      },
      'de': {
        CLOSE: 'Schliessen',
        NEXT: 'Weiter',
        PREV: 'Zurück',
        ERROR: 'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.',
        PLAY_START: 'Diaschau starten',
        PLAY_STOP: 'Diaschau beenden',
        FULL_SCREEN: 'Vollbild',
        THUMBS: 'Vorschaubilder',
        DOWNLOAD: 'Herunterladen',
        SHARE: 'Teilen',
        ZOOM: 'Maßstab'
      }
    }
  }; // Few useful variables and methods
  // ================================

  var $W = $(window);
  var $D = $(document);
  var called = 0; // Check if an object is a jQuery object and not a native JavaScript object
  // ========================================================================

  var isQuery = function isQuery(obj) {
    return obj && obj.hasOwnProperty && obj instanceof $;
  }; // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
  // ===============================================================================


  var requestAFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || // if all else fails, use setTimeout
    function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }(); // Detect the supported transition-end event property name
  // =======================================================


  var transitionEnd = function () {
    var t,
        el = document.createElement("fakeelement");
    var transitions = {
      "transition": "transitionend",
      "OTransition": "oTransitionEnd",
      "MozTransition": "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }

    return 'transitionend';
  }(); // Force redraw on an element.
  // This helps in cases where the browser doesn't redraw an updated element properly.
  // =================================================================================


  var forceRedraw = function forceRedraw($el) {
    return $el && $el.length && $el[0].offsetHeight;
  }; // Class definition
  // ================


  var FancyBox = function FancyBox(content, opts, index) {
    var self = this;
    self.opts = $.extend(true, {
      index: index
    }, $.fancybox.defaults, opts || {});

    if ($.fancybox.isMobile) {
      self.opts = $.extend(true, {}, self.opts, self.opts.mobile);
    } // Exclude buttons option from deep merging


    if (opts && $.isArray(opts.buttons)) {
      self.opts.buttons = opts.buttons;
    }

    self.id = self.opts.id || ++called;
    self.group = [];
    self.currIndex = parseInt(self.opts.index, 10) || 0;
    self.prevIndex = null;
    self.prevPos = null;
    self.currPos = 0;
    self.firstRun = null; // Create group elements from original item collection

    self.createGroup(content);

    if (!self.group.length) {
      return;
    } // Save last active element and current scroll position


    self.$lastFocus = $(document.activeElement).blur(); // Collection of gallery objects

    self.slides = {};
    self.init();
  };

  $.extend(FancyBox.prototype, {
    // Create DOM structure
    // ====================
    init: function init() {
      var self = this,
          firstItem = self.group[self.currIndex],
          firstItemOpts = firstItem.opts,
          scrollbarWidth = $.fancybox.scrollbarWidth,
          $scrollDiv,
          $container,
          buttonStr;
      self.scrollTop = $D.scrollTop();
      self.scrollLeft = $D.scrollLeft(); // Hide scrollbars
      // ===============

      if (!$.fancybox.getInstance()) {
        $('body').addClass('fancybox-active'); // iOS hack

        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
          // iOS has problems for input elements inside fixed containers,
          // the workaround is to apply `position: fixed` to `<body>` element,
          // unfortunately, this makes it lose the scrollbars and forces address bar to appear.
          if (firstItem.type !== 'image') {
            $('body').css('top', $('body').scrollTop() * -1).addClass('fancybox-iosfix');
          }
        } else if (!$.fancybox.isMobile && document.body.scrollHeight > window.innerHeight) {
          if (scrollbarWidth === undefined) {
            $scrollDiv = $('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo('body');
            scrollbarWidth = $.fancybox.scrollbarWidth = $scrollDiv[0].offsetWidth - $scrollDiv[0].clientWidth;
            $scrollDiv.remove();
          }

          $('head').append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + scrollbarWidth + 'px; }</style>');
          $('body').addClass('compensate-for-scrollbar');
        }
      } // Build html markup and set references
      // ====================================
      // Build html code for buttons and insert into main template


      buttonStr = '';
      $.each(firstItemOpts.buttons, function (index, value) {
        buttonStr += firstItemOpts.btnTpl[value] || '';
      }); // Create markup from base template, it will be initially hidden to
      // avoid unnecessary work like painting while initializing is not complete

      $container = $(self.translate(self, firstItemOpts.baseTpl.replace('\{\{buttons\}\}', buttonStr).replace('\{\{arrows\}\}', firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight))).attr('id', 'fancybox-container-' + self.id).addClass('fancybox-is-hidden').addClass(firstItemOpts.baseClass).data('FancyBox', self).appendTo(firstItemOpts.parentEl); // Create object holding references to jQuery wrapped nodes

      self.$refs = {
        container: $container
      };
      ['bg', 'inner', 'infobar', 'toolbar', 'stage', 'caption', 'navigation'].forEach(function (item) {
        self.$refs[item] = $container.find('.fancybox-' + item);
      });
      self.trigger('onInit'); // Enable events, deactive previous instances

      self.activate(); // Build slides, load and reveal content

      self.jumpTo(self.currIndex);
    },
    // Simple i18n support - replaces object keys found in template
    // with corresponding values
    // ============================================================
    translate: function translate(obj, str) {
      var arr = obj.opts.i18n[obj.opts.lang];
      return str.replace(/\{\{(\w+)\}\}/g, function (match, n) {
        var value = arr[n];

        if (value === undefined) {
          return match;
        }

        return value;
      });
    },
    // Create array of gally item objects
    // Check if each object has valid type and content
    // ===============================================
    createGroup: function createGroup(content) {
      var self = this;
      var items = $.makeArray(content);
      $.each(items, function (i, item) {
        var obj = {},
            opts = {},
            $item,
            type,
            found,
            src,
            srcParts; // Step 1 - Make sure we have an object
        // ====================================

        if ($.isPlainObject(item)) {
          // We probably have manual usage here, something like
          // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )
          obj = item;
          opts = item.opts || item;
        } else if ($.type(item) === 'object' && $(item).length) {
          // Here we probably have jQuery collection returned by some selector
          $item = $(item);
          opts = $item.data();
          opts = $.extend({}, opts, opts.options || {}); // Here we store clicked element

          opts.$orig = $item;
          obj.src = opts.src || $item.attr('href'); // Assume that simple syntax is used, for example:
          //   `$.fancybox.open( $("#test"), {} );`

          if (!obj.type && !obj.src) {
            obj.type = 'inline';
            obj.src = item;
          }
        } else {
          // Assume we have a simple html code, for example:
          //   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
          obj = {
            type: 'html',
            src: item + ''
          };
        } // Each gallery object has full collection of options


        obj.opts = $.extend(true, {}, self.opts, opts); // Do not merge buttons array

        if ($.isArray(opts.buttons)) {
          obj.opts.buttons = opts.buttons;
        } // Step 2 - Make sure we have content type, if not - try to guess
        // ==============================================================


        type = obj.type || obj.opts.type;
        src = obj.src || '';

        if (!type && src) {
          if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
            type = 'image';
          } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
            type = 'pdf';
          } else if (found = src.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) {
            type = 'video';

            if (!obj.opts.videoFormat) {
              obj.opts.videoFormat = 'video/' + (found[1] === 'ogv' ? 'ogg' : found[1]);
            }
          } else if (src.charAt(0) === '#') {
            type = 'inline';
          }
        }

        if (type) {
          obj.type = type;
        } else {
          self.trigger('objectNeedsType', obj);
        } // Step 3 - Some adjustments
        // =========================


        obj.index = self.group.length; // Check if $orig and $thumb objects exist

        if (obj.opts.$orig && !obj.opts.$orig.length) {
          delete obj.opts.$orig;
        }

        if (!obj.opts.$thumb && obj.opts.$orig) {
          obj.opts.$thumb = obj.opts.$orig.find('img:first');
        }

        if (obj.opts.$thumb && !obj.opts.$thumb.length) {
          delete obj.opts.$thumb;
        } // "caption" is a "special" option, it can be used to customize caption per gallery item ..


        if ($.type(obj.opts.caption) === 'function') {
          obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
        }

        if ($.type(self.opts.caption) === 'function') {
          obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
        } // Make sure we have caption as a string or jQuery object


        if (!(obj.opts.caption instanceof $)) {
          obj.opts.caption = obj.opts.caption === undefined ? '' : obj.opts.caption + '';
        } // Check if url contains "filter" used to filter the content
        // Example: "ajax.html #something"


        if (type === 'ajax') {
          srcParts = src.split(/\s+/, 2);

          if (srcParts.length > 1) {
            obj.src = srcParts.shift();
            obj.opts.filter = srcParts.shift();
          }
        }

        if (obj.opts.smallBtn == 'auto') {
          if ($.inArray(type, ['html', 'inline', 'ajax']) > -1) {
            obj.opts.toolbar = false;
            obj.opts.smallBtn = true;
          } else {
            obj.opts.smallBtn = false;
          }
        } // If the type is "pdf", then simply load file into iframe


        if (type === 'pdf') {
          obj.type = 'iframe';
          obj.opts.iframe.preload = false;
        } // Hide all buttons and disable interactivity for modal items


        if (obj.opts.modal) {
          obj.opts = $.extend(true, obj.opts, {
            // Remove buttons
            infobar: 0,
            toolbar: 0,
            smallBtn: 0,
            // Disable keyboard navigation
            keyboard: 0,
            // Disable some modules
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,
            // Disable click event handlers
            clickContent: false,
            clickSlide: false,
            clickOutside: false,
            dblclickContent: false,
            dblclickSlide: false,
            dblclickOutside: false
          });
        } // Step 4 - Add processed object to group
        // ======================================


        self.group.push(obj);
      });
    },
    // Attach an event handler functions for:
    //   - navigation buttons
    //   - browser scrolling, resizing;
    //   - focusing
    //   - keyboard
    //   - detect idle
    // ======================================
    addEvents: function addEvents() {
      var self = this;
      self.removeEvents(); // Make navigation elements clickable

      self.$refs.container.on('click.fb-close', '[data-fancybox-close]', function (e) {
        e.stopPropagation();
        e.preventDefault();
        self.close(e);
      }).on('click.fb-prev touchend.fb-prev', '[data-fancybox-prev]', function (e) {
        e.stopPropagation();
        e.preventDefault();
        self.previous();
      }).on('click.fb-next touchend.fb-next', '[data-fancybox-next]', function (e) {
        e.stopPropagation();
        e.preventDefault();
        self.next();
      }).on('click.fb', '[data-fancybox-zoom]', function (e) {
        // Click handler for zoom button
        self[self.isScaledDown() ? 'scaleToActual' : 'scaleToFit']();
      }); // Handle page scrolling and browser resizing

      $W.on('orientationchange.fb resize.fb', function (e) {
        if (e && e.originalEvent && e.originalEvent.type === "resize") {
          requestAFrame(function () {
            self.update();
          });
        } else {
          self.$refs.stage.hide();
          setTimeout(function () {
            self.$refs.stage.show();
            self.update();
          }, 600);
        }
      }); // Trap keyboard focus inside of the modal, so the user does not accidentally tab outside of the modal
      // (a.k.a. "escaping the modal")

      $D.on('focusin.fb', function (e) {
        var instance = $.fancybox ? $.fancybox.getInstance() : null;

        if (instance.isClosing || !instance.current || !instance.current.opts.trapFocus || $(e.target).hasClass('fancybox-container') || $(e.target).is(document)) {
          return;
        }

        if (instance && $(e.target).css('position') !== 'fixed' && !instance.$refs.container.has(e.target).length) {
          e.stopPropagation();
          instance.focus(); // Sometimes page gets scrolled, set it back

          $W.scrollTop(self.scrollTop).scrollLeft(self.scrollLeft);
        }
      }); // Enable keyboard navigation

      $D.on('keydown.fb', function (e) {
        var current = self.current,
            keycode = e.keyCode || e.which;

        if (!current || !current.opts.keyboard) {
          return;
        }

        if ($(e.target).is('input') || $(e.target).is('textarea')) {
          return;
        } // Backspace and Esc keys


        if (keycode === 8 || keycode === 27) {
          e.preventDefault();
          self.close(e);
          return;
        } // Left arrow and Up arrow


        if (keycode === 37 || keycode === 38) {
          e.preventDefault();
          self.previous();
          return;
        } // Righ arrow and Down arrow


        if (keycode === 39 || keycode === 40) {
          e.preventDefault();
          self.next();
          return;
        }

        self.trigger('afterKeydown', e, keycode);
      }); // Hide controls after some inactivity period

      if (self.group[self.currIndex].opts.idleTime) {
        self.idleSecondsCounter = 0;
        $D.on('mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle', function (e) {
          self.idleSecondsCounter = 0;

          if (self.isIdle) {
            self.showControls();
          }

          self.isIdle = false;
        });
        self.idleInterval = window.setInterval(function () {
          self.idleSecondsCounter++;

          if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
            self.isIdle = true;
            self.idleSecondsCounter = 0;
            self.hideControls();
          }
        }, 1000);
      }
    },
    // Remove events added by the core
    // ===============================
    removeEvents: function removeEvents() {
      var self = this;
      $W.off('orientationchange.fb resize.fb');
      $D.off('focusin.fb keydown.fb .fb-idle');
      this.$refs.container.off('.fb-close .fb-prev .fb-next');

      if (self.idleInterval) {
        window.clearInterval(self.idleInterval);
        self.idleInterval = null;
      }
    },
    // Change to previous gallery item
    // ===============================
    previous: function previous(duration) {
      return this.jumpTo(this.currPos - 1, duration);
    },
    // Change to next gallery item
    // ===========================
    next: function next(duration) {
      return this.jumpTo(this.currPos + 1, duration);
    },
    // Switch to selected gallery item
    // ===============================
    jumpTo: function jumpTo(pos, duration, slide) {
      var self = this,
          firstRun,
          loop,
          current,
          previous,
          canvasWidth,
          currentPos,
          transitionProps;
      var groupLen = self.group.length;

      if (self.isDragging || self.isClosing || self.isAnimating && self.firstRun) {
        return;
      }

      pos = parseInt(pos, 10);
      loop = self.current ? self.current.opts.loop : self.opts.loop;

      if (!loop && (pos < 0 || pos >= groupLen)) {
        return false;
      }

      firstRun = self.firstRun = self.firstRun === null;

      if (groupLen < 2 && !firstRun && !!self.isDragging) {
        return;
      }

      previous = self.current;
      self.prevIndex = self.currIndex;
      self.prevPos = self.currPos; // Create slides

      current = self.createSlide(pos);

      if (groupLen > 1) {
        if (loop || current.index > 0) {
          self.createSlide(pos - 1);
        }

        if (loop || current.index < groupLen - 1) {
          self.createSlide(pos + 1);
        }
      }

      self.current = current;
      self.currIndex = current.index;
      self.currPos = current.pos;
      self.trigger('beforeShow', firstRun);
      self.updateControls();
      currentPos = $.fancybox.getTranslate(current.$slide);
      current.isMoved = (currentPos.left !== 0 || currentPos.top !== 0) && !current.$slide.hasClass('fancybox-animated');
      current.forcedDuration = undefined;

      if ($.isNumeric(duration)) {
        current.forcedDuration = duration;
      } else {
        duration = current.opts[firstRun ? 'animationDuration' : 'transitionDuration'];
      }

      duration = parseInt(duration, 10); // Fresh start - reveal container, current slide and start loading content

      if (firstRun) {
        if (current.opts.animationEffect && duration) {
          self.$refs.container.css('transition-duration', duration + 'ms');
        }

        self.$refs.container.removeClass('fancybox-is-hidden');
        forceRedraw(self.$refs.container);
        self.$refs.container.addClass('fancybox-is-open'); // Make first slide visible (to display loading icon, if needed)

        current.$slide.addClass('fancybox-slide--current');
        self.loadSlide(current);
        self.preload('image');
        return;
      } // Clean up


      $.each(self.slides, function (index, slide) {
        $.fancybox.stop(slide.$slide);
      }); // Make current that slide is visible even if content is still loading

      current.$slide.removeClass('fancybox-slide--next fancybox-slide--previous').addClass('fancybox-slide--current'); // If slides have been dragged, animate them to correct position

      if (current.isMoved) {
        canvasWidth = Math.round(current.$slide.width());
        $.each(self.slides, function (index, slide) {
          var pos = slide.pos - current.pos;
          $.fancybox.animate(slide.$slide, {
            top: 0,
            left: pos * canvasWidth + pos * slide.opts.gutter
          }, duration, function () {
            slide.$slide.removeAttr('style').removeClass('fancybox-slide--next fancybox-slide--previous');

            if (slide.pos === self.currPos) {
              current.isMoved = false;
              self.complete();
            }
          });
        });
      } else {
        self.$refs.stage.children().removeAttr('style');
      } // Start transition that reveals current content
      // or wait when it will be loaded


      if (current.isLoaded) {
        self.revealContent(current);
      } else {
        self.loadSlide(current);
      }

      self.preload('image');

      if (previous.pos === current.pos) {
        return;
      } // Handle previous slide
      // =====================


      transitionProps = 'fancybox-slide--' + (previous.pos > current.pos ? 'next' : 'previous');
      previous.$slide.removeClass('fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous');
      previous.isComplete = false;

      if (!duration || !current.isMoved && !current.opts.transitionEffect) {
        return;
      }

      if (current.isMoved) {
        previous.$slide.addClass(transitionProps);
      } else {
        transitionProps = 'fancybox-animated ' + transitionProps + ' fancybox-fx-' + current.opts.transitionEffect;
        $.fancybox.animate(previous.$slide, transitionProps, duration, function () {
          previous.$slide.removeClass(transitionProps).removeAttr('style');
        });
      }
    },
    // Create new "slide" element
    // These are gallery items  that are actually added to DOM
    // =======================================================
    createSlide: function createSlide(pos) {
      var self = this;
      var $slide;
      var index;
      index = pos % self.group.length;
      index = index < 0 ? self.group.length + index : index;

      if (!self.slides[pos] && self.group[index]) {
        $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);
        self.slides[pos] = $.extend(true, {}, self.group[index], {
          pos: pos,
          $slide: $slide,
          isLoaded: false
        });
        self.updateSlide(self.slides[pos]);
      }

      return self.slides[pos];
    },
    // Scale image to the actual size of the image
    // ===========================================
    scaleToActual: function scaleToActual(x, y, duration) {
      var self = this;
      var current = self.current;
      var $what = current.$content;
      var imgPos, posX, posY, scaleX, scaleY;
      var canvasWidth = parseInt(current.$slide.width(), 10);
      var canvasHeight = parseInt(current.$slide.height(), 10);
      var newImgWidth = current.width;
      var newImgHeight = current.height;

      if (!(current.type == 'image' && !current.hasError) || !$what || self.isAnimating) {
        return;
      }

      $.fancybox.stop($what);
      self.isAnimating = true;
      x = x === undefined ? canvasWidth * 0.5 : x;
      y = y === undefined ? canvasHeight * 0.5 : y;
      imgPos = $.fancybox.getTranslate($what);
      scaleX = newImgWidth / imgPos.width;
      scaleY = newImgHeight / imgPos.height; // Get center position for original image

      posX = canvasWidth * 0.5 - newImgWidth * 0.5;
      posY = canvasHeight * 0.5 - newImgHeight * 0.5; // Make sure image does not move away from edges

      if (newImgWidth > canvasWidth) {
        posX = imgPos.left * scaleX - (x * scaleX - x);

        if (posX > 0) {
          posX = 0;
        }

        if (posX < canvasWidth - newImgWidth) {
          posX = canvasWidth - newImgWidth;
        }
      }

      if (newImgHeight > canvasHeight) {
        posY = imgPos.top * scaleY - (y * scaleY - y);

        if (posY > 0) {
          posY = 0;
        }

        if (posY < canvasHeight - newImgHeight) {
          posY = canvasHeight - newImgHeight;
        }
      }

      self.updateCursor(newImgWidth, newImgHeight);
      $.fancybox.animate($what, {
        top: posY,
        left: posX,
        scaleX: scaleX,
        scaleY: scaleY
      }, duration || 330, function () {
        self.isAnimating = false;
      }); // Stop slideshow

      if (self.SlideShow && self.SlideShow.isActive) {
        self.SlideShow.stop();
      }
    },
    // Scale image to fit inside parent element
    // ========================================
    scaleToFit: function scaleToFit(duration) {
      var self = this;
      var current = self.current;
      var $what = current.$content;
      var end;

      if (!(current.type == 'image' && !current.hasError) || !$what || self.isAnimating) {
        return;
      }

      $.fancybox.stop($what);
      self.isAnimating = true;
      end = self.getFitPos(current);
      self.updateCursor(end.width, end.height);
      $.fancybox.animate($what, {
        top: end.top,
        left: end.left,
        scaleX: end.width / $what.width(),
        scaleY: end.height / $what.height()
      }, duration || 330, function () {
        self.isAnimating = false;
      });
    },
    // Calculate image size to fit inside viewport
    // ===========================================
    getFitPos: function getFitPos(slide) {
      var self = this;
      var $what = slide.$content;
      var imgWidth = slide.width;
      var imgHeight = slide.height;
      var margin = slide.opts.margin;
      var canvasWidth, canvasHeight, minRatio, width, height;

      if (!$what || !$what.length || !imgWidth && !imgHeight) {
        return false;
      } // Convert "margin to CSS style: [ top, right, bottom, left ]


      if ($.type(margin) === "number") {
        margin = [margin, margin];
      }

      if (margin.length == 2) {
        margin = [margin[0], margin[1], margin[0], margin[1]];
      } // We can not use $slide width here, because it can have different diemensions while in transiton


      canvasWidth = parseInt(self.$refs.stage.width(), 10) - (margin[1] + margin[3]);
      canvasHeight = parseInt(self.$refs.stage.height(), 10) - (margin[0] + margin[2]);
      minRatio = Math.min(1, canvasWidth / imgWidth, canvasHeight / imgHeight);
      width = Math.floor(minRatio * imgWidth);
      height = Math.floor(minRatio * imgHeight); // Use floor rounding to make sure it really fits

      return {
        top: Math.floor((canvasHeight - height) * 0.5) + margin[0],
        left: Math.floor((canvasWidth - width) * 0.5) + margin[3],
        width: width,
        height: height
      };
    },
    // Update content size and position for all slides
    // ==============================================
    update: function update() {
      var self = this;
      $.each(self.slides, function (key, slide) {
        self.updateSlide(slide);
      });
    },
    // Update slide content position and size
    // ======================================
    updateSlide: function updateSlide(slide, duration) {
      var self = this,
          $what = slide && slide.$content;

      if ($what && (slide.width || slide.height)) {
        self.isAnimating = false;
        $.fancybox.stop($what);
        $.fancybox.setTranslate($what, self.getFitPos(slide));

        if (slide.pos === self.currPos) {
          self.updateCursor();
        }
      }

      slide.$slide.trigger('refresh');
      self.trigger('onUpdate', slide);
    },
    // Horizontally center slide
    // =========================
    centerSlide: function centerSlide(slide, duration) {
      var self = this,
          canvasWidth,
          pos;

      if (self.current) {
        canvasWidth = Math.round(slide.$slide.width());
        pos = slide.pos - self.current.pos;
        $.fancybox.animate(slide.$slide, {
          top: 0,
          left: pos * canvasWidth + pos * slide.opts.gutter,
          opacity: 1
        }, duration === undefined ? 0 : duration, null, false);
      }
    },
    // Update cursor style depending if content can be zoomed
    // ======================================================
    updateCursor: function updateCursor(nextWidth, nextHeight) {
      var self = this;
      var isScaledDown;
      var $container = self.$refs.container.removeClass('fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut');

      if (!self.current || self.isClosing) {
        return;
      }

      if (self.isZoomable()) {
        $container.addClass('fancybox-is-zoomable');

        if (nextWidth !== undefined && nextHeight !== undefined) {
          isScaledDown = nextWidth < self.current.width && nextHeight < self.current.height;
        } else {
          isScaledDown = self.isScaledDown();
        }

        if (isScaledDown) {
          // If image is scaled down, then, obviously, it can be zoomed to full size
          $container.addClass('fancybox-can-zoomIn');
        } else {
          if (self.current.opts.touch) {
            // If image size ir largen than available available and touch module is not disable,
            // then user can do panning
            $container.addClass('fancybox-can-drag');
          } else {
            $container.addClass('fancybox-can-zoomOut');
          }
        }
      } else if (self.current.opts.touch) {
        $container.addClass('fancybox-can-drag');
      }
    },
    // Check if current slide is zoomable
    // ==================================
    isZoomable: function isZoomable() {
      var self = this;
      var current = self.current;
      var fitPos;

      if (!current || self.isClosing) {
        return;
      } // Assume that slide is zoomable if
      //   - image is loaded successfuly
      //   - click action is "zoom"
      //   - actual size of the image is smaller than available area


      if (current.type === 'image' && current.isLoaded && !current.hasError && (current.opts.clickContent === 'zoom' || $.isFunction(current.opts.clickContent) && current.opts.clickContent(current) === "zoom")) {
        fitPos = self.getFitPos(current);

        if (current.width > fitPos.width || current.height > fitPos.height) {
          return true;
        }
      }

      return false;
    },
    // Check if current image dimensions are smaller than actual
    // =========================================================
    isScaledDown: function isScaledDown() {
      var self = this;
      var current = self.current;
      var $what = current.$content;
      var rez = false;

      if ($what) {
        rez = $.fancybox.getTranslate($what);
        rez = rez.width < current.width || rez.height < current.height;
      }

      return rez;
    },
    // Check if image dimensions exceed parent element
    // ===============================================
    canPan: function canPan() {
      var self = this;
      var current = self.current;
      var $what = current.$content;
      var rez = false;

      if ($what) {
        rez = self.getFitPos(current);
        rez = Math.abs($what.width() - rez.width) > 1 || Math.abs($what.height() - rez.height) > 1;
      }

      return rez;
    },
    // Load content into the slide
    // ===========================
    loadSlide: function loadSlide(slide) {
      var self = this,
          type,
          $slide;
      var ajaxLoad;

      if (slide.isLoading) {
        return;
      }

      if (slide.isLoaded) {
        return;
      }

      slide.isLoading = true;
      self.trigger('beforeLoad', slide);
      type = slide.type;
      $slide = slide.$slide;
      $slide.off('refresh').trigger('onReset').addClass('fancybox-slide--' + (type || 'unknown')).addClass(slide.opts.slideClass); // Create content depending on the type

      switch (type) {
        case 'image':
          self.setImage(slide);
          break;

        case 'iframe':
          self.setIframe(slide);
          break;

        case 'html':
          self.setContent(slide, slide.src || slide.content);
          break;

        case 'inline':
          if ($(slide.src).length) {
            self.setContent(slide, $(slide.src));
          } else {
            self.setError(slide);
          }

          break;

        case 'ajax':
          self.showLoading(slide);
          ajaxLoad = $.ajax($.extend({}, slide.opts.ajax.settings, {
            url: slide.src,
            success: function success(data, textStatus) {
              if (textStatus === 'success') {
                self.setContent(slide, data);
              }
            },
            error: function error(jqXHR, textStatus) {
              if (jqXHR && textStatus !== 'abort') {
                self.setError(slide);
              }
            }
          }));
          $slide.one('onReset', function () {
            ajaxLoad.abort();
          });
          break;

        case 'video':
          self.setContent(slide, '<video controls>' + '<source src="' + slide.src + '" type="' + slide.opts.videoFormat + '">' + 'Your browser doesn\'t support HTML5 video' + '</video>');
          break;

        default:
          self.setError(slide);
          break;
      }

      return true;
    },
    // Use thumbnail image, if possible
    // ================================
    setImage: function setImage(slide) {
      var self = this;
      var srcset = slide.opts.srcset || slide.opts.image.srcset;
      var found, temp, pxRatio, windowWidth; // If we have "srcset", then we need to find matching "src" value.
      // This is necessary, because when you set an src attribute, the browser will preload the image
      // before any javascript or even CSS is applied.

      if (srcset) {
        pxRatio = window.devicePixelRatio || 1;
        windowWidth = window.innerWidth * pxRatio;
        temp = srcset.split(',').map(function (el) {
          var ret = {};
          el.trim().split(/\s+/).forEach(function (el, i) {
            var value = parseInt(el.substring(0, el.length - 1), 10);

            if (i === 0) {
              return ret.url = el;
            }

            if (value) {
              ret.value = value;
              ret.postfix = el[el.length - 1];
            }
          });
          return ret;
        }); // Sort by value

        temp.sort(function (a, b) {
          return a.value - b.value;
        }); // Ok, now we have an array of all srcset values

        for (var j = 0; j < temp.length; j++) {
          var el = temp[j];

          if (el.postfix === 'w' && el.value >= windowWidth || el.postfix === 'x' && el.value >= pxRatio) {
            found = el;
            break;
          }
        } // If not found, take the last one


        if (!found && temp.length) {
          found = temp[temp.length - 1];
        }

        if (found) {
          slide.src = found.url; // If we have default width/height values, we can calculate height for matching source

          if (slide.width && slide.height && found.postfix == 'w') {
            slide.height = slide.width / slide.height * found.value;
            slide.width = found.value;
          }
        }
      } // This will be wrapper containing both ghost and actual image


      slide.$content = $('<div class="fancybox-image-wrap"></div>').addClass('fancybox-is-hidden').appendTo(slide.$slide); // If we have a thumbnail, we can display it while actual image is loading
      // Users will not stare at black screen and actual image will appear gradually

      if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && (slide.opts.thumb || slide.opts.$thumb)) {
        slide.width = slide.opts.width;
        slide.height = slide.opts.height;
        slide.$ghost = $('<img />').one('error', function () {
          $(this).remove();
          slide.$ghost = null;
          self.setBigImage(slide);
        }).one('load', function () {
          self.afterLoad(slide);
          self.setBigImage(slide);
        }).addClass('fancybox-image').appendTo(slide.$content).attr('src', slide.opts.thumb || slide.opts.$thumb.attr('src'));
      } else {
        self.setBigImage(slide);
      }
    },
    // Create full-size image
    // ======================
    setBigImage: function setBigImage(slide) {
      var self = this;
      var $img = $('<img />');
      slide.$image = $img.one('error', function () {
        self.setError(slide);
      }).one('load', function () {
        // Clear timeout that checks if loading icon needs to be displayed
        clearTimeout(slide.timouts);
        slide.timouts = null;

        if (self.isClosing) {
          return;
        }

        slide.width = slide.opts.width || this.naturalWidth;
        slide.height = slide.opts.height || this.naturalHeight;

        if (slide.opts.image.srcset) {
          $img.attr('sizes', '100vw').attr('srcset', slide.opts.image.srcset);
        }

        self.hideLoading(slide);

        if (slide.$ghost) {
          slide.timouts = setTimeout(function () {
            slide.timouts = null;
            slide.$ghost.hide();
          }, Math.min(300, Math.max(1000, slide.height / 1600)));
        } else {
          self.afterLoad(slide);
        }
      }).addClass('fancybox-image').attr('src', slide.src).appendTo(slide.$content);

      if (($img[0].complete || $img[0].readyState == "complete") && $img[0].naturalWidth && $img[0].naturalHeight) {
        $img.trigger('load');
      } else if ($img[0].error) {
        $img.trigger('error');
      } else {
        slide.timouts = setTimeout(function () {
          if (!$img[0].complete && !slide.hasError) {
            self.showLoading(slide);
          }
        }, 100);
      }
    },
    // Create iframe wrapper, iframe and bindings
    // ==========================================
    setIframe: function setIframe(slide) {
      var self = this,
          opts = slide.opts.iframe,
          $slide = slide.$slide,
          $iframe;
      slide.$content = $('<div class="fancybox-content' + (opts.preload ? ' fancybox-is-hidden' : '') + '"></div>').css(opts.css).appendTo($slide);
      $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(opts.attr).appendTo(slide.$content);

      if (opts.preload) {
        self.showLoading(slide); // Unfortunately, it is not always possible to determine if iframe is successfully loaded
        // (due to browser security policy)

        $iframe.on('load.fb error.fb', function (e) {
          this.isReady = 1;
          slide.$slide.trigger('refresh');
          self.afterLoad(slide);
        }); // Recalculate iframe content size
        // ===============================

        $slide.on('refresh.fb', function () {
          var $wrap = slide.$content,
              frameWidth = opts.css.width,
              frameHeight = opts.css.height,
              scrollWidth,
              $contents,
              $body;

          if ($iframe[0].isReady !== 1) {
            return;
          } // Check if content is accessible,
          // it will fail if frame is not with the same origin


          try {
            $contents = $iframe.contents();
            $body = $contents.find('body');
          } catch (ignore) {} // Calculate dimensions for the wrapper


          if ($body && $body.length) {
            if (frameWidth === undefined) {
              scrollWidth = $iframe[0].contentWindow.document.documentElement.scrollWidth;
              frameWidth = Math.ceil($body.outerWidth(true) + ($wrap.width() - scrollWidth));
              frameWidth += $wrap.outerWidth() - $wrap.innerWidth();
            }

            if (frameHeight === undefined) {
              frameHeight = Math.ceil($body.outerHeight(true));
              frameHeight += $wrap.outerHeight() - $wrap.innerHeight();
            } // Resize wrapper to fit iframe content


            if (frameWidth) {
              $wrap.width(frameWidth);
            }

            if (frameHeight) {
              $wrap.height(frameHeight);
            }
          }

          $wrap.removeClass('fancybox-is-hidden');
        });
      } else {
        this.afterLoad(slide);
      }

      $iframe.attr('src', slide.src);

      if (slide.opts.smallBtn === true) {
        slide.$content.prepend(self.translate(slide, slide.opts.btnTpl.smallBtn));
      } // Remove iframe if closing or changing gallery item


      $slide.one('onReset', function () {
        // This helps IE not to throw errors when closing
        try {
          $(this).find('iframe').hide().attr('src', '//about:blank');
        } catch (ignore) {}

        $(this).empty();
        slide.isLoaded = false;
      });
    },
    // Wrap and append content to the slide
    // ======================================
    setContent: function setContent(slide, content) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      self.hideLoading(slide);
      slide.$slide.empty();

      if (isQuery(content) && content.parent().length) {
        // If content is a jQuery object, then it will be moved to the slide.
        // The placeholder is created so we will know where to put it back.
        // If user is navigating gallery fast, then the content might be already inside fancyBox
        // =====================================================================================
        // Make sure content is not already moved to fancyBox
        content.parent('.fancybox-slide--inline').trigger('onReset'); // Create temporary element marking original place of the content

        slide.$placeholder = $('<div></div>').hide().insertAfter(content); // Make sure content is visible

        content.css('display', 'inline-block');
      } else if (!slide.hasError) {
        // If content is just a plain text, try to convert it to html
        if ($.type(content) === 'string') {
          content = $('<div>').append($.trim(content)).contents(); // If we have text node, then add wrapping element to make vertical alignment work

          if (content[0].nodeType === 3) {
            content = $('<div>').html(content);
          }
        } // If "filter" option is provided, then filter content


        if (slide.opts.filter) {
          content = $('<div>').html(content).find(slide.opts.filter);
        }
      }

      slide.$slide.one('onReset', function () {
        // Pause all html5 video/audio
        $(this).find('video,audio').trigger('pause'); // Put content back

        if (slide.$placeholder) {
          slide.$placeholder.after(content.hide()).remove();
          slide.$placeholder = null;
        } // Remove custom close button


        if (slide.$smallBtn) {
          slide.$smallBtn.remove();
          slide.$smallBtn = null;
        } // Remove content and mark slide as not loaded


        if (!slide.hasError) {
          $(this).empty();
          slide.isLoaded = false;
        }
      });
      slide.$content = $(content).appendTo(slide.$slide);
      this.afterLoad(slide);
    },
    // Display error message
    // =====================
    setError: function setError(slide) {
      slide.hasError = true;
      slide.$slide.removeClass('fancybox-slide--' + slide.type);
      this.setContent(slide, this.translate(slide, slide.opts.errorTpl));
    },
    // Show loading icon inside the slide
    // ==================================
    showLoading: function showLoading(slide) {
      var self = this;
      slide = slide || self.current;

      if (slide && !slide.$spinner) {
        slide.$spinner = $(self.opts.spinnerTpl).appendTo(slide.$slide);
      }
    },
    // Remove loading icon from the slide
    // ==================================
    hideLoading: function hideLoading(slide) {
      var self = this;
      slide = slide || self.current;

      if (slide && slide.$spinner) {
        slide.$spinner.remove();
        delete slide.$spinner;
      }
    },
    // Adjustments after slide content has been loaded
    // ===============================================
    afterLoad: function afterLoad(slide) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      slide.isLoading = false;
      slide.isLoaded = true;
      self.trigger('afterLoad', slide);
      self.hideLoading(slide);

      if (slide.opts.smallBtn && !slide.$smallBtn) {
        slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content.filter('div,form').first());
      }

      if (slide.opts.protect && slide.$content && !slide.hasError) {
        // Disable right click
        slide.$content.on('contextmenu.fb', function (e) {
          if (e.button == 2) {
            e.preventDefault();
          }

          return true;
        }); // Add fake element on top of the image
        // This makes a bit harder for user to select image

        if (slide.type === 'image') {
          $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
        }
      }

      self.revealContent(slide);
    },
    // Make content visible
    // This method is called right after content has been loaded or
    // user navigates gallery and transition should start
    // ============================================================
    revealContent: function revealContent(slide) {
      var self = this;
      var $slide = slide.$slide;
      var effect,
          effectClassName,
          duration,
          opacity,
          end,
          start = false;
      effect = slide.opts[self.firstRun ? 'animationEffect' : 'transitionEffect'];
      duration = slide.opts[self.firstRun ? 'animationDuration' : 'transitionDuration'];
      duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);

      if (slide.isMoved || slide.pos !== self.currPos || !duration) {
        effect = false;
      } // Check if can zoom


      if (effect === 'zoom' && !(slide.pos === self.currPos && duration && slide.type === 'image' && !slide.hasError && (start = self.getThumbPos(slide)))) {
        effect = 'fade';
      } // Zoom animation
      // ==============


      if (effect === 'zoom') {
        end = self.getFitPos(slide);
        end.scaleX = end.width / start.width;
        end.scaleY = end.height / start.height;
        delete end.width;
        delete end.height; // Check if we need to animate opacity

        opacity = slide.opts.zoomOpacity;

        if (opacity == 'auto') {
          opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
        }

        if (opacity) {
          start.opacity = 0.1;
          end.opacity = 1;
        } // Draw image at start position


        $.fancybox.setTranslate(slide.$content.removeClass('fancybox-is-hidden'), start);
        forceRedraw(slide.$content); // Start animation

        $.fancybox.animate(slide.$content, end, duration, function () {
          self.complete();
        });
        return;
      }

      self.updateSlide(slide); // Simply show content
      // ===================

      if (!effect) {
        forceRedraw($slide);
        slide.$content.removeClass('fancybox-is-hidden');

        if (slide.pos === self.currPos) {
          self.complete();
        }

        return;
      }

      $.fancybox.stop($slide);
      effectClassName = 'fancybox-animated fancybox-slide--' + (slide.pos >= self.prevPos ? 'next' : 'previous') + ' fancybox-fx-' + effect;
      $slide.removeAttr('style').removeClass('fancybox-slide--current fancybox-slide--next fancybox-slide--previous').addClass(effectClassName);
      slide.$content.removeClass('fancybox-is-hidden'); //Force reflow for CSS3 transitions

      forceRedraw($slide);
      $.fancybox.animate($slide, 'fancybox-slide--current', duration, function (e) {
        $slide.removeClass(effectClassName).removeAttr('style');

        if (slide.pos === self.currPos) {
          self.complete();
        }
      }, true);
    },
    // Check if we can and have to zoom from thumbnail
    //================================================
    getThumbPos: function getThumbPos(slide) {
      var self = this;
      var rez = false; // Check if element is inside the viewport by at least 1 pixel

      var isElementVisible = function isElementVisible($el) {
        var element = $el[0];
        var elementRect = element.getBoundingClientRect();
        var parentRects = [];
        var visibleInAllParents;

        while (element.parentElement !== null) {
          if ($(element.parentElement).css('overflow') === 'hidden' || $(element.parentElement).css('overflow') === 'auto') {
            parentRects.push(element.parentElement.getBoundingClientRect());
          }

          element = element.parentElement;
        }

        visibleInAllParents = parentRects.every(function (parentRect) {
          var visiblePixelX = Math.min(elementRect.right, parentRect.right) - Math.max(elementRect.left, parentRect.left);
          var visiblePixelY = Math.min(elementRect.bottom, parentRect.bottom) - Math.max(elementRect.top, parentRect.top);
          return visiblePixelX > 0 && visiblePixelY > 0;
        });
        return visibleInAllParents && elementRect.bottom > 0 && elementRect.right > 0 && elementRect.left < $(window).width() && elementRect.top < $(window).height();
      };

      var $thumb = slide.opts.$thumb;
      var thumbPos = $thumb ? $thumb.offset() : 0;
      var slidePos;

      if (thumbPos && $thumb[0].ownerDocument === document && isElementVisible($thumb)) {
        slidePos = self.$refs.stage.offset();
        rez = {
          top: thumbPos.top - slidePos.top + parseFloat($thumb.css("border-top-width") || 0),
          left: thumbPos.left - slidePos.left + parseFloat($thumb.css("border-left-width") || 0),
          width: $thumb.width(),
          height: $thumb.height(),
          scaleX: 1,
          scaleY: 1
        };
      }

      return rez;
    },
    // Final adjustments after current gallery item is moved to position
    // and it`s content is loaded
    // ==================================================================
    complete: function complete() {
      var self = this,
          current = self.current,
          slides = {},
          promise;

      if (current.isMoved || !current.isLoaded || current.isComplete) {
        return;
      }

      current.isComplete = true;
      current.$slide.siblings().trigger('onReset');
      self.preload('inline'); // Trigger any CSS3 transiton inside the slide

      forceRedraw(current.$slide);
      current.$slide.addClass('fancybox-slide--complete'); // Remove unnecessary slides

      $.each(self.slides, function (key, slide) {
        if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
          slides[slide.pos] = slide;
        } else if (slide) {
          $.fancybox.stop(slide.$slide);
          slide.$slide.off().remove();
        }
      });
      self.slides = slides;
      self.updateCursor();
      self.trigger('afterShow'); // Play first html5 video/audio

      current.$slide.find('video,audio').first().trigger('play'); // Try to focus on the first focusable element

      if ($(document.activeElement).is('[disabled]') || current.opts.autoFocus && !(current.type == 'image' || current.type === 'iframe')) {
        self.focus();
      }
    },
    // Preload next and previous slides
    // ================================
    preload: function preload(type) {
      var self = this,
          next = self.slides[self.currPos + 1],
          prev = self.slides[self.currPos - 1];

      if (next && next.type === type) {
        self.loadSlide(next);
      }

      if (prev && prev.type === type) {
        self.loadSlide(prev);
      }
    },
    // Try to find and focus on the first focusable element
    // ====================================================
    focus: function focus() {
      var current = this.current;
      var $el;

      if (this.isClosing) {
        return;
      }

      if (current && current.isComplete) {
        // Look for first input with autofocus attribute
        $el = current.$slide.find('input[autofocus]:enabled:visible:first');

        if (!$el.length) {
          $el = current.$slide.find('button,:input,[tabindex],a').filter(':enabled:visible:first');
        }
      }

      $el = $el && $el.length ? $el : this.$refs.container;
      $el.focus();
    },
    // Activates current instance - brings container to the front and enables keyboard,
    // notifies other instances about deactivating
    // =================================================================================
    activate: function activate() {
      var self = this; // Deactivate all instances

      $('.fancybox-container').each(function () {
        var instance = $(this).data('FancyBox'); // Skip self and closing instances

        if (instance && instance.id !== self.id && !instance.isClosing) {
          instance.trigger('onDeactivate');
          instance.removeEvents();
          instance.isVisible = false;
        }
      });
      self.isVisible = true;

      if (self.current || self.isIdle) {
        self.update();
        self.updateControls();
      }

      self.trigger('onActivate');
      self.addEvents();
    },
    // Start closing procedure
    // This will start "zoom-out" animation if needed and clean everything up afterwards
    // =================================================================================
    close: function close(e, d) {
      var self = this;
      var current = self.current;
      var effect, duration;
      var $what, opacity, start, end;

      var done = function done() {
        self.cleanUp(e);
      };

      if (self.isClosing) {
        return false;
      }

      self.isClosing = true; // If beforeClose callback prevents closing, make sure content is centered

      if (self.trigger('beforeClose', e) === false) {
        self.isClosing = false;
        requestAFrame(function () {
          self.update();
        });
        return false;
      } // Remove all events
      // If there are multiple instances, they will be set again by "activate" method


      self.removeEvents();

      if (current.timouts) {
        clearTimeout(current.timouts);
      }

      $what = current.$content;
      effect = current.opts.animationEffect;
      duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0; // Remove other slides

      current.$slide.off(transitionEnd).removeClass('fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated');
      current.$slide.siblings().trigger('onReset').remove(); // Trigger animations

      if (duration) {
        self.$refs.container.removeClass('fancybox-is-open').addClass('fancybox-is-closing');
      } // Clean up


      self.hideLoading(current);
      self.hideControls();
      self.updateCursor(); // Check if possible to zoom-out

      if (effect === 'zoom' && !(e !== true && $what && duration && current.type === 'image' && !current.hasError && (end = self.getThumbPos(current)))) {
        effect = 'fade';
      }

      if (effect === 'zoom') {
        $.fancybox.stop($what);
        start = $.fancybox.getTranslate($what);
        start.width = start.width * start.scaleX;
        start.height = start.height * start.scaleY; // Check if we need to animate opacity

        opacity = current.opts.zoomOpacity;

        if (opacity == 'auto') {
          opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
        }

        if (opacity) {
          end.opacity = 0;
        }

        start.scaleX = start.width / end.width;
        start.scaleY = start.height / end.height;
        start.width = end.width;
        start.height = end.height;
        $.fancybox.setTranslate(current.$content, start);
        forceRedraw(current.$content);
        $.fancybox.animate(current.$content, end, duration, done);
        return true;
      }

      if (effect && duration) {
        // If skip animation
        if (e === true) {
          setTimeout(done, duration);
        } else {
          $.fancybox.animate(current.$slide.removeClass('fancybox-slide--current'), 'fancybox-animated fancybox-slide--previous fancybox-fx-' + effect, duration, done);
        }
      } else {
        done();
      }

      return true;
    },
    // Final adjustments after removing the instance
    // =============================================
    cleanUp: function cleanUp(e) {
      var self = this,
          $body = $('body'),
          instance,
          offset;
      self.current.$slide.trigger('onReset');
      self.$refs.container.empty().remove();
      self.trigger('afterClose', e); // Place back focus

      if (self.$lastFocus && !!self.current.opts.backFocus) {
        self.$lastFocus.focus();
      }

      self.current = null; // Check if there are other instances

      instance = $.fancybox.getInstance();

      if (instance) {
        instance.activate();
      } else {
        $W.scrollTop(self.scrollTop).scrollLeft(self.scrollLeft);
        $body.removeClass('fancybox-active compensate-for-scrollbar');

        if ($body.hasClass('fancybox-iosfix')) {
          offset = parseInt(document.body.style.top, 10);
          $body.removeClass('fancybox-iosfix').css('top', '').scrollTop(offset * -1);
        }

        $('#fancybox-style-noscroll').remove();
      }
    },
    // Call callback and trigger an event
    // ==================================
    trigger: function trigger(name, slide) {
      var args = Array.prototype.slice.call(arguments, 1),
          self = this,
          obj = slide && slide.opts ? slide : self.current,
          rez;

      if (obj) {
        args.unshift(obj);
      } else {
        obj = self;
      }

      args.unshift(self);

      if ($.isFunction(obj.opts[name])) {
        rez = obj.opts[name].apply(obj, args);
      }

      if (rez === false) {
        return rez;
      }

      if (name === 'afterClose' || !self.$refs) {
        $D.trigger(name + '.fb', args);
      } else {
        self.$refs.container.trigger(name + '.fb', args);
      }
    },
    // Update infobar values, navigation button states and reveal caption
    // ==================================================================
    updateControls: function updateControls(force) {
      var self = this;
      var current = self.current,
          index = current.index,
          caption = current.opts.caption,
          $container = self.$refs.container,
          $caption = self.$refs.caption; // Recalculate content dimensions

      current.$slide.trigger('refresh');
      self.$caption = caption && caption.length ? $caption.html(caption) : null;

      if (!self.isHiddenControls && !self.isIdle) {
        self.showControls();
      } // Update info and navigation elements


      $container.find('[data-fancybox-count]').html(self.group.length);
      $container.find('[data-fancybox-index]').html(index + 1);
      $container.find('[data-fancybox-prev]').prop('disabled', !current.opts.loop && index <= 0);
      $container.find('[data-fancybox-next]').prop('disabled', !current.opts.loop && index >= self.group.length - 1);

      if (current.type === 'image') {
        // Update download button source
        $container.find('[data-fancybox-download]').attr('href', current.opts.image.src || current.src).show();
      } else {
        $container.find('[data-fancybox-download],[data-fancybox-zoom]').hide();
      }
    },
    // Hide toolbar and caption
    // ========================
    hideControls: function hideControls() {
      this.isHiddenControls = true;
      this.$refs.container.removeClass('fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav');
    },
    showControls: function showControls() {
      var self = this;
      var opts = self.current ? self.current.opts : self.opts;
      var $container = self.$refs.container;
      self.isHiddenControls = false;
      self.idleSecondsCounter = 0;
      $container.toggleClass('fancybox-show-toolbar', !!(opts.toolbar && opts.buttons)).toggleClass('fancybox-show-infobar', !!(opts.infobar && self.group.length > 1)).toggleClass('fancybox-show-nav', !!(opts.arrows && self.group.length > 1)).toggleClass('fancybox-is-modal', !!opts.modal);

      if (self.$caption) {
        $container.addClass('fancybox-show-caption ');
      } else {
        $container.removeClass('fancybox-show-caption');
      }
    },
    // Toggle toolbar and caption
    // ==========================
    toggleControls: function toggleControls() {
      if (this.isHiddenControls) {
        this.showControls();
      } else {
        this.hideControls();
      }
    }
  });
  $.fancybox = {
    version: "3.2.10",
    defaults: defaults,
    // Get current instance and execute a command.
    //
    // Examples of usage:
    //
    //   $instance = $.fancybox.getInstance();
    //   $.fancybox.getInstance().jumpTo( 1 );
    //   $.fancybox.getInstance( 'jumpTo', 1 );
    //   $.fancybox.getInstance( function() {
    //       console.info( this.currIndex );
    //   });
    // ======================================================
    getInstance: function getInstance(command) {
      var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data('FancyBox');
      var args = Array.prototype.slice.call(arguments, 1);

      if (instance instanceof FancyBox) {
        if ($.type(command) === 'string') {
          instance[command].apply(instance, args);
        } else if ($.type(command) === 'function') {
          command.apply(instance, args);
        }

        return instance;
      }

      return false;
    },
    // Create new instance
    // ===================
    open: function open(items, opts, index) {
      return new FancyBox(items, opts, index);
    },
    // Close current or all instances
    // ==============================
    close: function close(all) {
      var instance = this.getInstance();

      if (instance) {
        instance.close(); // Try to find and close next instance

        if (all === true) {
          this.close();
        }
      }
    },
    // Close instances and unbind all events
    // ==============================
    destroy: function destroy() {
      this.close(true);
      $D.off('click.fb-start');
    },
    // Try to detect mobile devices
    // ============================
    isMobile: document.createTouch !== undefined && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    // Detect if 'translate3d' support is available
    // ============================================
    use3d: function () {
      var div = document.createElement('div');
      return window.getComputedStyle && window.getComputedStyle(div).getPropertyValue('transform') && !(document.documentMode && document.documentMode < 11);
    }(),
    // Helper function to get current visual state of an element
    // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
    // =====================================================================
    getTranslate: function getTranslate($el) {
      var matrix;

      if (!$el || !$el.length) {
        return false;
      }

      matrix = $el.eq(0).css('transform');

      if (matrix && matrix.indexOf('matrix') !== -1) {
        matrix = matrix.split('(')[1];
        matrix = matrix.split(')')[0];
        matrix = matrix.split(',');
      } else {
        matrix = [];
      }

      if (matrix.length) {
        // If IE
        if (matrix.length > 10) {
          matrix = [matrix[13], matrix[12], matrix[0], matrix[5]];
        } else {
          matrix = [matrix[5], matrix[4], matrix[0], matrix[3]];
        }

        matrix = matrix.map(parseFloat);
      } else {
        matrix = [0, 0, 1, 1];
        var transRegex = /\.*translate\((.*)px,(.*)px\)/i;
        var transRez = transRegex.exec($el.eq(0).attr('style'));

        if (transRez) {
          matrix[0] = parseFloat(transRez[2]);
          matrix[1] = parseFloat(transRez[1]);
        }
      }

      return {
        top: matrix[0],
        left: matrix[1],
        scaleX: matrix[2],
        scaleY: matrix[3],
        opacity: parseFloat($el.css('opacity')),
        width: $el.width(),
        height: $el.height()
      };
    },
    // Shortcut for setting "translate3d" properties for element
    // Can set be used to set opacity, too
    // ========================================================
    setTranslate: function setTranslate($el, props) {
      var str = '';
      var css = {};

      if (!$el || !props) {
        return;
      }

      if (props.left !== undefined || props.top !== undefined) {
        str = (props.left === undefined ? $el.position().left : props.left) + 'px, ' + (props.top === undefined ? $el.position().top : props.top) + 'px';

        if (this.use3d) {
          str = 'translate3d(' + str + ', 0px)';
        } else {
          str = 'translate(' + str + ')';
        }
      }

      if (props.scaleX !== undefined && props.scaleY !== undefined) {
        str = (str.length ? str + ' ' : '') + 'scale(' + props.scaleX + ', ' + props.scaleY + ')';
      }

      if (str.length) {
        css.transform = str;
      }

      if (props.opacity !== undefined) {
        css.opacity = props.opacity;
      }

      if (props.width !== undefined) {
        css.width = props.width;
      }

      if (props.height !== undefined) {
        css.height = props.height;
      }

      return $el.css(css);
    },
    // Simple CSS transition handler
    // =============================
    animate: function animate($el, to, duration, callback, leaveAnimationName) {
      if ($.isFunction(duration)) {
        callback = duration;
        duration = null;
      }

      if (!$.isPlainObject(to)) {
        $el.removeAttr('style');
      }

      $el.on(transitionEnd, function (e) {
        // Skip events from child elements and z-index change
        if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == 'z-index')) {
          return;
        }

        $.fancybox.stop($el);

        if ($.isPlainObject(to)) {
          if (to.scaleX !== undefined && to.scaleY !== undefined) {
            $el.css('transition-duration', '');
            to.width = Math.round($el.width() * to.scaleX);
            to.height = Math.round($el.height() * to.scaleY);
            to.scaleX = 1;
            to.scaleY = 1;
            $.fancybox.setTranslate($el, to);
          }

          if (leaveAnimationName === false) {
            $el.removeAttr('style');
          }
        } else if (leaveAnimationName !== true) {
          $el.removeClass(to);
        }

        if ($.isFunction(callback)) {
          callback(e);
        }
      });

      if ($.isNumeric(duration)) {
        $el.css('transition-duration', duration + 'ms');
      }

      if ($.isPlainObject(to)) {
        $.fancybox.setTranslate($el, to);
      } else {
        $el.addClass(to);
      }

      if (to.scaleX && $el.hasClass('fancybox-image-wrap')) {
        $el.parent().addClass('fancybox-is-scaling');
      } // Make sure that `transitionend` callback gets fired


      $el.data("timer", setTimeout(function () {
        $el.trigger('transitionend');
      }, duration + 16));
    },
    stop: function stop($el) {
      clearTimeout($el.data("timer"));
      $el.off('transitionend').css('transition-duration', '');

      if ($el.hasClass('fancybox-image-wrap')) {
        $el.parent().removeClass('fancybox-is-scaling');
      }
    }
  }; // Default click handler for "fancyboxed" links
  // ============================================

  function _run(e) {
    var $target = $(e.currentTarget),
        opts = e.data ? e.data.options : {},
        value = $target.attr('data-fancybox') || '',
        index = 0,
        items = []; // Avoid opening multiple times

    if (e.isDefaultPrevented()) {
      return;
    }

    e.preventDefault(); // Get all related items and find index for clicked one

    if (value) {
      items = opts.selector ? $(opts.selector) : e.data ? e.data.items : [];
      items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
      index = items.index($target); // Sometimes current item can not be found
      // (for example, when slider clones items)

      if (index < 0) {
        index = 0;
      }
    } else {
      items = [$target];
    }

    $.fancybox.open(items, opts, index);
  } // Create a jQuery plugin
  // ======================


  $.fn.fancybox = function (options) {
    var selector;
    options = options || {};
    selector = options.selector || false;

    if (selector) {
      $('body').off('click.fb-start', selector).on('click.fb-start', selector, {
        options: options
      }, _run);
    } else {
      this.off('click.fb-start').on('click.fb-start', {
        items: this,
        options: options
      }, _run);
    }

    return this;
  }; // Self initializing plugin
  // ========================


  $D.on('click.fb-start', '[data-fancybox]', _run);
})(window, document, __webpack_provided_window_dot_jQuery || jQuery); // ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================


;

(function ($) {
  'use strict'; // Formats matching url to final form

  var format = function format(url, rez, params) {
    if (!url) {
      return;
    }

    params = params || '';

    if ($.type(params) === "object") {
      params = $.param(params, true);
    }

    $.each(rez, function (key, value) {
      url = url.replace('$' + key, value || '');
    });

    if (params.length) {
      url += (url.indexOf('?') > 0 ? '&' : '?') + params;
    }

    return url;
  }; // Object containing properties for each media type


  var defaults = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: 'transparent',
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: 'iframe',
      url: '//www.youtube.com/embed/$4',
      thumb: '//img.youtube.com/vi/$4/hqdefault.jpg'
    },
    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1,
        api: 1
      },
      paramPlace: 3,
      type: 'iframe',
      url: '//player.vimeo.com/video/$2'
    },
    metacafe: {
      matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
      type: 'iframe',
      url: '//www.metacafe.com/embed/$1/?ap=1'
    },
    dailymotion: {
      matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
      params: {
        additionalInfos: 0,
        autoStart: 1
      },
      type: 'iframe',
      url: '//www.dailymotion.com/embed/video/$1'
    },
    vine: {
      matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
      type: 'iframe',
      url: '//vine.co/v/$1/embed/simple'
    },
    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: 'image',
      url: '//$1/p/$2/media/?size=l'
    },
    // Examples:
    // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
    // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
    // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: 'iframe',
      url: function url(rez) {
        return '//maps.google.' + rez[2] + '/?ll=' + (rez[9] ? rez[9] + '&z=' + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : '') : rez[12]) + '&output=' + (rez[12] && rez[12].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
      }
    },
    // Examples:
    // https://www.google.com/maps/search/Empire+State+Building/
    // https://www.google.com/maps/search/?api=1&query=centurylink+field
    // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: 'iframe',
      url: function url(rez) {
        return '//maps.google.' + rez[2] + '/maps?q=' + rez[5].replace('query=', 'q=').replace('api=1', '') + '&output=embed';
      }
    }
  };
  $(document).on('objectNeedsType.fb', function (e, instance, item) {
    var url = item.src || '',
        type = false,
        media,
        thumb,
        rez,
        params,
        urlParams,
        paramObj,
        provider;
    media = $.extend(true, {}, defaults, item.opts.media); // Look for any matching media type

    $.each(media, function (providerName, providerOpts) {
      rez = url.match(providerOpts.matcher);

      if (!rez) {
        return;
      }

      type = providerOpts.type;
      paramObj = {};

      if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
        urlParams = rez[providerOpts.paramPlace];

        if (urlParams[0] == '?') {
          urlParams = urlParams.substring(1);
        }

        urlParams = urlParams.split('&');

        for (var m = 0; m < urlParams.length; ++m) {
          var p = urlParams[m].split('=', 2);

          if (p.length == 2) {
            paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
          }
        }
      }

      params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);
      url = $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);
      thumb = $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);

      if (providerName === 'vimeo') {
        url = url.replace('&%23', '#');
      }

      return false;
    }); // If it is found, then change content type and update the url

    if (type) {
      item.src = url;
      item.type = type;

      if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
        item.opts.thumb = thumb;
      }

      if (type === 'iframe') {
        $.extend(true, item.opts, {
          iframe: {
            preload: false,
            attr: {
              scrolling: "no"
            }
          }
        });
        item.contentProvider = provider;
        item.opts.slideClass += ' fancybox-slide--' + (provider == 'gmap_place' || provider == 'gmap_search' ? 'map' : 'video');
      }
    } else if (url) {
      item.type = item.opts.defaultType;
    }
  });
})(__webpack_provided_window_dot_jQuery || jQuery); // ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================


;

(function (window, document, $) {
  'use strict';

  var requestAFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || // if all else fails, use setTimeout
    function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }();

  var cancelAFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
      window.clearTimeout(id);
    };
  }();

  var pointers = function pointers(e) {
    var result = [];
    e = e.originalEvent || e || window.e;
    e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

    for (var key in e) {
      if (e[key].pageX) {
        result.push({
          x: e[key].pageX,
          y: e[key].pageY
        });
      } else if (e[key].clientX) {
        result.push({
          x: e[key].clientX,
          y: e[key].clientY
        });
      }
    }

    return result;
  };

  var distance = function distance(point2, point1, what) {
    if (!point1 || !point2) {
      return 0;
    }

    if (what === 'x') {
      return point2.x - point1.x;
    } else if (what === 'y') {
      return point2.y - point1.y;
    }

    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  };

  var isClickable = function isClickable($el) {
    if ($el.is('a,area,button,[role="button"],input,label,select,summary,textarea') || $.isFunction($el.get(0).onclick) || $el.data('selectable')) {
      return true;
    } // Check for attributes like data-fancybox-next or data-fancybox-close


    for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
      if (atts[i].nodeName.substr(0, 14) === 'data-fancybox-') {
        return true;
      }
    }

    return false;
  };

  var hasScrollbars = function hasScrollbars(el) {
    var overflowY = window.getComputedStyle(el)['overflow-y'];
    var overflowX = window.getComputedStyle(el)['overflow-x'];
    var vertical = (overflowY === 'scroll' || overflowY === 'auto') && el.scrollHeight > el.clientHeight;
    var horizontal = (overflowX === 'scroll' || overflowX === 'auto') && el.scrollWidth > el.clientWidth;
    return vertical || horizontal;
  };

  var isScrollable = function isScrollable($el) {
    var rez = false;

    while (true) {
      rez = hasScrollbars($el.get(0));

      if (rez) {
        break;
      }

      $el = $el.parent();

      if (!$el.length || $el.hasClass('fancybox-stage') || $el.is('body')) {
        break;
      }
    }

    return rez;
  };

  var Guestures = function Guestures(instance) {
    var self = this;
    self.instance = instance;
    self.$bg = instance.$refs.bg;
    self.$stage = instance.$refs.stage;
    self.$container = instance.$refs.container;
    self.destroy();
    self.$container.on('touchstart.fb.touch mousedown.fb.touch', $.proxy(self, 'ontouchstart'));
  };

  Guestures.prototype.destroy = function () {
    this.$container.off('.fb.touch');
  };

  Guestures.prototype.ontouchstart = function (e) {
    var self = this;
    var $target = $(e.target);
    var instance = self.instance;
    var current = instance.current;
    var $content = current.$content;
    var isTouchDevice = e.type == 'touchstart'; // Do not respond to both (touch and mouse) events

    if (isTouchDevice) {
      self.$container.off('mousedown.fb.touch');
    } // Ignore right click


    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    } // Ignore taping on links, buttons, input elements


    if (!$target.length || isClickable($target) || isClickable($target.parent())) {
      return;
    } // Ignore clicks on the scrollbar


    if (!$target.is('img') && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
      return;
    } // Ignore clicks while zooming or closing


    if (!current || self.instance.isAnimating || self.instance.isClosing) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }

    self.realPoints = self.startPoints = pointers(e);

    if (!self.startPoints) {
      return;
    }

    e.stopPropagation();
    self.startEvent = e;
    self.canTap = true;
    self.$target = $target;
    self.$content = $content;
    self.opts = current.opts.touch;
    self.isPanning = false;
    self.isSwiping = false;
    self.isZooming = false;
    self.isScrolling = false;
    self.sliderStartPos = self.sliderLastPos || {
      top: 0,
      left: 0
    };
    self.contentStartPos = $.fancybox.getTranslate(self.$content);
    self.contentLastPos = null;
    self.startTime = new Date().getTime();
    self.distanceX = self.distanceY = self.distance = 0;
    self.canvasWidth = Math.round(current.$slide[0].clientWidth);
    self.canvasHeight = Math.round(current.$slide[0].clientHeight);
    $(document).off('.fb.touch').on(isTouchDevice ? 'touchend.fb.touch touchcancel.fb.touch' : 'mouseup.fb.touch mouseleave.fb.touch', $.proxy(self, "ontouchend")).on(isTouchDevice ? 'touchmove.fb.touch' : 'mousemove.fb.touch', $.proxy(self, "ontouchmove"));

    if ($.fancybox.isMobile) {
      document.addEventListener('scroll', self.onscroll, true);
    }

    if (!(self.opts || instance.canPan()) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
      // Prevent image ghosting while dragging
      if ($target.is('img')) {
        e.preventDefault();
      }

      return;
    }

    if (!($.fancybox.isMobile && (isScrollable($target) || isScrollable($target.parent())))) {
      e.preventDefault();
    }

    if (self.startPoints.length === 1) {
      if (current.type === 'image' && (self.contentStartPos.width > self.canvasWidth + 1 || self.contentStartPos.height > self.canvasHeight + 1)) {
        $.fancybox.stop(self.$content);
        self.$content.css('transition-duration', '');
        self.isPanning = true;
      } else {
        self.isSwiping = true;
      }

      self.$container.addClass('fancybox-controls--isGrabbing');
    }

    if (self.startPoints.length === 2 && !instance.isAnimating && !current.hasError && current.type === 'image' && (current.isLoaded || current.$ghost)) {
      self.canTap = false;
      self.isSwiping = false;
      self.isPanning = false;
      self.isZooming = true;
      $.fancybox.stop(self.$content);
      self.$content.css('transition-duration', '');
      self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
      self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();
      self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
      self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;
      self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
    }
  };

  Guestures.prototype.onscroll = function (e) {
    self.isScrolling = true;
  };

  Guestures.prototype.ontouchmove = function (e) {
    var self = this,
        $target = $(e.target);

    if (self.isScrolling || !($target.is(self.$stage) || self.$stage.find($target).length)) {
      self.canTap = false;
      return;
    }

    self.newPoints = pointers(e);

    if (!(self.opts || self.instance.canPan()) || !self.newPoints || !self.newPoints.length) {
      return;
    }

    if (!(self.isSwiping && self.isSwiping === true)) {
      e.preventDefault();
    }

    self.distanceX = distance(self.newPoints[0], self.startPoints[0], 'x');
    self.distanceY = distance(self.newPoints[0], self.startPoints[0], 'y');
    self.distance = distance(self.newPoints[0], self.startPoints[0]); // Skip false ontouchmove events (Chrome)

    if (self.distance > 0) {
      if (self.isSwiping) {
        self.onSwipe(e);
      } else if (self.isPanning) {
        self.onPan();
      } else if (self.isZooming) {
        self.onZoom();
      }
    }
  };

  Guestures.prototype.onSwipe = function (e) {
    var self = this,
        swiping = self.isSwiping,
        left = self.sliderStartPos.left || 0,
        angle; // If direction is not yet determined

    if (swiping === true) {
      // We need at least 10px distance to correctly calculate an angle
      if (Math.abs(self.distance) > 10) {
        self.canTap = false;

        if (self.instance.group.length < 2 && self.opts.vertical) {
          self.isSwiping = 'y';
        } else if (self.instance.isDragging || self.opts.vertical === false || self.opts.vertical === 'auto' && $(window).width() > 800) {
          self.isSwiping = 'x';
        } else {
          angle = Math.abs(Math.atan2(self.distanceY, self.distanceX) * 180 / Math.PI);
          self.isSwiping = angle > 45 && angle < 135 ? 'y' : 'x';
        }

        self.canTap = false;

        if (self.isSwiping === 'y' && $.fancybox.isMobile && (isScrollable(self.$target) || isScrollable(self.$target.parent()))) {
          self.isScrolling = true;
          return;
        }

        self.instance.isDragging = self.isSwiping; // Reset points to avoid jumping, because we dropped first swipes to calculate the angle

        self.startPoints = self.newPoints;
        $.each(self.instance.slides, function (index, slide) {
          $.fancybox.stop(slide.$slide);
          slide.$slide.css('transition-duration', '');
          slide.inTransition = false;

          if (slide.pos === self.instance.current.pos) {
            self.sliderStartPos.left = $.fancybox.getTranslate(slide.$slide).left;
          }
        }); // Stop slideshow

        if (self.instance.SlideShow && self.instance.SlideShow.isActive) {
          self.instance.SlideShow.stop();
        }
      }

      return;
    } // Sticky edges


    if (swiping == 'x') {
      if (self.distanceX > 0 && (self.instance.group.length < 2 || self.instance.current.index === 0 && !self.instance.current.opts.loop)) {
        left = left + Math.pow(self.distanceX, 0.8);
      } else if (self.distanceX < 0 && (self.instance.group.length < 2 || self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop)) {
        left = left - Math.pow(-self.distanceX, 0.8);
      } else {
        left = left + self.distanceX;
      }
    }

    self.sliderLastPos = {
      top: swiping == 'x' ? 0 : self.sliderStartPos.top + self.distanceY,
      left: left
    };

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    self.requestId = requestAFrame(function () {
      if (self.sliderLastPos) {
        $.each(self.instance.slides, function (index, slide) {
          var pos = slide.pos - self.instance.currPos;
          $.fancybox.setTranslate(slide.$slide, {
            top: self.sliderLastPos.top,
            left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
          });
        });
        self.$container.addClass('fancybox-is-sliding');
      }
    });
  };

  Guestures.prototype.onPan = function () {
    var self = this; // Sometimes, when tapping causally, image can move a bit and that breaks double tapping

    if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
      self.startPoints = self.newPoints;
      return;
    }

    self.canTap = false;
    self.contentLastPos = self.limitMovement();

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  }; // Make panning sticky to the edges


  Guestures.prototype.limitMovement = function () {
    var self = this;
    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;
    var distanceX = self.distanceX;
    var distanceY = self.distanceY;
    var contentStartPos = self.contentStartPos;
    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;
    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;
    var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;

    if (currentWidth > canvasWidth) {
      newOffsetX = currentOffsetX + distanceX;
    } else {
      newOffsetX = currentOffsetX;
    }

    newOffsetY = currentOffsetY + distanceY; // Slow down proportionally to traveled distance

    minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
    minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);
    maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
    maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);

    if (currentWidth > canvasWidth) {
      //   ->
      if (distanceX > 0 && newOffsetX > minTranslateX) {
        newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
      } //    <-


      if (distanceX < 0 && newOffsetX < maxTranslateX) {
        newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
      }
    }

    if (currentHeight > canvasHeight) {
      //   \/
      if (distanceY > 0 && newOffsetY > minTranslateY) {
        newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
      } //   /\


      if (distanceY < 0 && newOffsetY < maxTranslateY) {
        newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
      }
    }

    return {
      top: newOffsetY,
      left: newOffsetX,
      scaleX: contentStartPos.scaleX,
      scaleY: contentStartPos.scaleY
    };
  };

  Guestures.prototype.limitPosition = function (newOffsetX, newOffsetY, newWidth, newHeight) {
    var self = this;
    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    if (newWidth > canvasWidth) {
      newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
      newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
    } else {
      // Center horizontally
      newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
    }

    if (newHeight > canvasHeight) {
      newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
      newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
    } else {
      // Center vertically
      newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.onZoom = function () {
    var self = this; // Calculate current distance between points to get pinch ratio and new width and height

    var currentWidth = self.contentStartPos.width;
    var currentHeight = self.contentStartPos.height;
    var currentOffsetX = self.contentStartPos.left;
    var currentOffsetY = self.contentStartPos.top;
    var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);
    var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;
    var newWidth = Math.floor(currentWidth * pinchRatio);
    var newHeight = Math.floor(currentHeight * pinchRatio); // This is the translation due to pinch-zooming

    var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
    var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY; //Point between the two touches

    var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
    var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop(); // And this is the translation due to translation of the centerpoint
    // between the two fingers

    var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
    var translateFromTranslatingY = centerPointEndY - self.centerPointStartY; // The new offset is the old/current one plus the total translation

    var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
    var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);
    var newPos = {
      top: newOffsetY,
      left: newOffsetX,
      scaleX: self.contentStartPos.scaleX * pinchRatio,
      scaleY: self.contentStartPos.scaleY * pinchRatio
    };
    self.canTap = false;
    self.newWidth = newWidth;
    self.newHeight = newHeight;
    self.contentLastPos = newPos;

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  Guestures.prototype.ontouchend = function (e) {
    var self = this;
    var dMs = Math.max(new Date().getTime() - self.startTime, 1);
    var swiping = self.isSwiping;
    var panning = self.isPanning;
    var zooming = self.isZooming;
    var scrolling = self.isScrolling;
    self.endPoints = pointers(e);
    self.$container.removeClass('fancybox-controls--isGrabbing');
    $(document).off('.fb.touch');
    document.removeEventListener('scroll', self.onscroll, true);

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    self.isSwiping = false;
    self.isPanning = false;
    self.isZooming = false;
    self.isScrolling = false;
    self.instance.isDragging = false;

    if (self.canTap) {
      return self.onTap(e);
    }

    self.speed = 366; // Speed in px/ms

    self.velocityX = self.distanceX / dMs * 0.5;
    self.velocityY = self.distanceY / dMs * 0.5;
    self.speedX = Math.max(self.speed * 0.5, Math.min(self.speed * 1.5, 1 / Math.abs(self.velocityX) * self.speed));

    if (panning) {
      self.endPanning();
    } else if (zooming) {
      self.endZooming();
    } else {
      self.endSwiping(swiping, scrolling);
    }

    return;
  };

  Guestures.prototype.endSwiping = function (swiping, scrolling) {
    var self = this,
        ret = false,
        len = self.instance.group.length;
    self.sliderLastPos = null; // Close if swiped vertically / navigate if horizontally

    if (swiping == 'y' && !scrolling && Math.abs(self.distanceY) > 50) {
      // Continue vertical movement
      $.fancybox.animate(self.instance.current.$slide, {
        top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
        opacity: 0
      }, 150);
      ret = self.instance.close(true, 300);
    } else if (swiping == 'x' && self.distanceX > 50 && len > 1) {
      ret = self.instance.previous(self.speedX);
    } else if (swiping == 'x' && self.distanceX < -50 && len > 1) {
      ret = self.instance.next(self.speedX);
    }

    if (ret === false && (swiping == 'x' || swiping == 'y')) {
      if (scrolling || len < 2) {
        self.instance.centerSlide(self.instance.current, 150);
      } else {
        self.instance.jumpTo(self.instance.current.index);
      }
    }

    self.$container.removeClass('fancybox-is-sliding');
  }; // Limit panning from edges
  // ========================


  Guestures.prototype.endPanning = function () {
    var self = this;
    var newOffsetX, newOffsetY, newPos;

    if (!self.contentLastPos) {
      return;
    }

    if (self.opts.momentum === false) {
      newOffsetX = self.contentLastPos.left;
      newOffsetY = self.contentLastPos.top;
    } else {
      // Continue movement
      newOffsetX = self.contentLastPos.left + self.velocityX * self.speed;
      newOffsetY = self.contentLastPos.top + self.velocityY * self.speed;
    }

    newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);
    newPos.width = self.contentStartPos.width;
    newPos.height = self.contentStartPos.height;
    $.fancybox.animate(self.$content, newPos, 330);
  };

  Guestures.prototype.endZooming = function () {
    var self = this;
    var current = self.instance.current;
    var newOffsetX, newOffsetY, newPos, reset;
    var newWidth = self.newWidth;
    var newHeight = self.newHeight;

    if (!self.contentLastPos) {
      return;
    }

    newOffsetX = self.contentLastPos.left;
    newOffsetY = self.contentLastPos.top;
    reset = {
      top: newOffsetY,
      left: newOffsetX,
      width: newWidth,
      height: newHeight,
      scaleX: 1,
      scaleY: 1
    }; // Reset scalex/scaleY values; this helps for perfomance and does not break animation

    $.fancybox.setTranslate(self.$content, reset);

    if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
      self.instance.scaleToFit(150);
    } else if (newWidth > current.width || newHeight > current.height) {
      self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
    } else {
      newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight); // Switch from scale() to width/height or animation will not work correctly

      $.fancybox.setTranslate(self.content, $.fancybox.getTranslate(self.$content));
      $.fancybox.animate(self.$content, newPos, 150);
    }
  };

  Guestures.prototype.onTap = function (e) {
    var self = this;
    var $target = $(e.target);
    var instance = self.instance;
    var current = instance.current;
    var endPoints = e && pointers(e) || self.startPoints;
    var tapX = endPoints[0] ? endPoints[0].x - self.$stage.offset().left : 0;
    var tapY = endPoints[0] ? endPoints[0].y - self.$stage.offset().top : 0;
    var where;

    var process = function process(prefix) {
      var action = current.opts[prefix];

      if ($.isFunction(action)) {
        action = action.apply(instance, [current, e]);
      }

      if (!action) {
        return;
      }

      switch (action) {
        case "close":
          instance.close(self.startEvent);
          break;

        case "toggleControls":
          instance.toggleControls(true);
          break;

        case "next":
          instance.next();
          break;

        case "nextOrClose":
          if (instance.group.length > 1) {
            instance.next();
          } else {
            instance.close(self.startEvent);
          }

          break;

        case "zoom":
          if (current.type == 'image' && (current.isLoaded || current.$ghost)) {
            if (instance.canPan()) {
              instance.scaleToFit();
            } else if (instance.isScaledDown()) {
              instance.scaleToActual(tapX, tapY);
            } else if (instance.group.length < 2) {
              instance.close(self.startEvent);
            }
          }

          break;
      }
    }; // Ignore right click


    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    } // Skip if clicked on the scrollbar


    if (!$target.is('img') && tapX > $target[0].clientWidth + $target.offset().left) {
      return;
    } // Check where is clicked


    if ($target.is('.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container')) {
      where = 'Outside';
    } else if ($target.is('.fancybox-slide')) {
      where = 'Slide';
    } else if (instance.current.$content && instance.current.$content.find($target).addBack().filter($target).length) {
      where = 'Content';
    } else {
      return;
    } // Check if this is a double tap


    if (self.tapped) {
      // Stop previously created single tap
      clearTimeout(self.tapped);
      self.tapped = null; // Skip if distance between taps is too big

      if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
        return this;
      } // OK, now we assume that this is a double-tap


      process('dblclick' + where);
    } else {
      // Single tap will be processed if user has not clicked second time within 300ms
      // or there is no need to wait for double-tap
      self.tapX = tapX;
      self.tapY = tapY;

      if (current.opts['dblclick' + where] && current.opts['dblclick' + where] !== current.opts['click' + where]) {
        self.tapped = setTimeout(function () {
          self.tapped = null;
          process('click' + where);
        }, 500);
      } else {
        process('click' + where);
      }
    }

    return this;
  };

  $(document).on('onActivate.fb', function (e, instance) {
    if (instance && !instance.Guestures) {
      instance.Guestures = new Guestures(instance);
    }
  });
})(window, document, __webpack_provided_window_dot_jQuery || jQuery); // ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================


;

(function (document, $) {
  'use strict';

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' + '<svg viewBox="0 0 40 40">' + '<path d="M13,12 L27,20 L13,27 Z" />' + '<path d="M15,10 v19 M23,10 v19" />' + '</svg>' + '</button>'
    },
    slideShow: {
      autoStart: false,
      speed: 3000
    }
  });

  var SlideShow = function SlideShow(instance) {
    this.instance = instance;
    this.init();
  };

  $.extend(SlideShow.prototype, {
    timer: null,
    isActive: false,
    $button: null,
    init: function init() {
      var self = this;
      self.$button = self.instance.$refs.toolbar.find('[data-fancybox-play]').on('click', function () {
        self.toggle();
      });

      if (self.instance.group.length < 2 || !self.instance.group[self.instance.currIndex].opts.slideShow) {
        self.$button.hide();
      }
    },
    set: function set(force) {
      var self = this; // Check if reached last element

      if (self.instance && self.instance.current && (force === true || self.instance.current.opts.loop || self.instance.currIndex < self.instance.group.length - 1)) {
        self.timer = setTimeout(function () {
          if (self.isActive) {
            self.instance.jumpTo((self.instance.currIndex + 1) % self.instance.group.length);
          }
        }, self.instance.current.opts.slideShow.speed);
      } else {
        self.stop();
        self.instance.idleSecondsCounter = 0;
        self.instance.showControls();
      }
    },
    clear: function clear() {
      var self = this;
      clearTimeout(self.timer);
      self.timer = null;
    },
    start: function start() {
      var self = this;
      var current = self.instance.current;

      if (current) {
        self.isActive = true;
        self.$button.attr('title', current.opts.i18n[current.opts.lang].PLAY_STOP).removeClass('fancybox-button--play').addClass('fancybox-button--pause');
        self.set(true);
      }
    },
    stop: function stop() {
      var self = this;
      var current = self.instance.current;
      self.clear();
      self.$button.attr('title', current.opts.i18n[current.opts.lang].PLAY_START).removeClass('fancybox-button--pause').addClass('fancybox-button--play');
      self.isActive = false;
    },
    toggle: function toggle() {
      var self = this;

      if (self.isActive) {
        self.stop();
      } else {
        self.start();
      }
    }
  });
  $(document).on({
    'onInit.fb': function onInitFb(e, instance) {
      if (instance && !instance.SlideShow) {
        instance.SlideShow = new SlideShow(instance);
      }
    },
    'beforeShow.fb': function beforeShowFb(e, instance, current, firstRun) {
      var SlideShow = instance && instance.SlideShow;

      if (firstRun) {
        if (SlideShow && current.opts.slideShow.autoStart) {
          SlideShow.start();
        }
      } else if (SlideShow && SlideShow.isActive) {
        SlideShow.clear();
      }
    },
    'afterShow.fb': function afterShowFb(e, instance, current) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow && SlideShow.isActive) {
        SlideShow.set();
      }
    },
    'afterKeydown.fb': function afterKeydownFb(e, instance, current, keypress, keycode) {
      var SlideShow = instance && instance.SlideShow; // "P" or Spacebar

      if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is('button,a,input')) {
        keypress.preventDefault();
        SlideShow.toggle();
      }
    },
    'beforeClose.fb onDeactivate.fb': function beforeCloseFbOnDeactivateFb(e, instance) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow) {
        SlideShow.stop();
      }
    }
  }); // Page Visibility API to pause slideshow when window is not active

  $(document).on("visibilitychange", function () {
    var instance = $.fancybox.getInstance();
    var SlideShow = instance && instance.SlideShow;

    if (SlideShow && SlideShow.isActive) {
      if (document.hidden) {
        SlideShow.clear();
      } else {
        SlideShow.set();
      }
    }
  });
})(document, __webpack_provided_window_dot_jQuery || jQuery); // ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================


;

(function (document, $) {
  'use strict'; // Collection of methods supported by user browser

  var fn = function () {
    var fnMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], // new WebKit
    ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], // old WebKit (Safari 5.1)
    ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
    var val;
    var ret = {};
    var i, j;

    for (i = 0; i < fnMap.length; i++) {
      val = fnMap[i];

      if (val && val[1] in document) {
        for (j = 0; j < val.length; j++) {
          ret[fnMap[0][j]] = val[j];
        }

        return ret;
      }
    }

    return false;
  }(); // If browser does not have Full Screen API, then simply unset default button template and stop


  if (!fn) {
    if ($ && $.fancybox) {
      $.fancybox.defaults.btnTpl.fullScreen = false;
    }

    return;
  }

  var FullScreen = {
    request: function request(elem) {
      elem = elem || document.documentElement;
      elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
    },
    exit: function exit() {
      document[fn.exitFullscreen]();
    },
    toggle: function toggle(elem) {
      elem = elem || document.documentElement;

      if (this.isFullscreen()) {
        this.exit();
      } else {
        this.request(elem);
      }
    },
    isFullscreen: function isFullscreen() {
      return Boolean(document[fn.fullscreenElement]);
    },
    enabled: function enabled() {
      return Boolean(document[fn.fullscreenEnabled]);
    }
  };
  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}">' + '<svg viewBox="0 0 40 40">' + '<path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" />' + '</svg>' + '</button>'
    },
    fullScreen: {
      autoStart: false
    }
  });
  $(document).on({
    'onInit.fb': function onInitFb(e, instance) {
      var $container;

      if (instance && instance.group[instance.currIndex].opts.fullScreen) {
        $container = instance.$refs.container;
        $container.on('click.fb-fullscreen', '[data-fancybox-fullscreen]', function (e) {
          e.stopPropagation();
          e.preventDefault();
          FullScreen.toggle($container[0]);
        });

        if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
          FullScreen.request($container[0]);
        } // Expose API


        instance.FullScreen = FullScreen;
      } else if (instance) {
        instance.$refs.toolbar.find('[data-fancybox-fullscreen]').hide();
      }
    },
    'afterKeydown.fb': function afterKeydownFb(e, instance, current, keypress, keycode) {
      // "P" or Spacebar
      if (instance && instance.FullScreen && keycode === 70) {
        keypress.preventDefault();
        instance.FullScreen.toggle(instance.$refs.container[0]);
      }
    },
    'beforeClose.fb': function beforeCloseFb(instance) {
      if (instance && instance.FullScreen) {
        FullScreen.exit();
      }
    }
  });
  $(document).on(fn.fullscreenchange, function () {
    var isFullscreen = FullScreen.isFullscreen(),
        instance = $.fancybox.getInstance();

    if (instance) {
      // If image is zooming, then force to stop and reposition properly
      if (instance.current && instance.current.type === 'image' && instance.isAnimating) {
        instance.current.$content.css('transition', 'none');
        instance.isAnimating = false;
        instance.update(true, true, 0);
      }

      instance.trigger('onFullscreenChange', isFullscreen);
      instance.$refs.container.toggleClass('fancybox-is-fullscreen', isFullscreen);
    }
  });
})(document, __webpack_provided_window_dot_jQuery || jQuery); // ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================


;

(function (document, $) {
  'use strict'; // Make sure there are default values

  $.fancybox.defaults = $.extend(true, {
    btnTpl: {
      thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' + '<svg viewBox="0 0 120 120">' + '<path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" />' + '</svg>' + '</button>'
    },
    thumbs: {
      autoStart: false,
      // Display thumbnails on opening
      hideOnClose: true,
      // Hide thumbnail grid when closing animation starts
      parentEl: '.fancybox-container',
      // Container is injected into this element
      axis: 'y' // Vertical (y) or horizontal (x) scrolling

    }
  }, $.fancybox.defaults);

  var FancyThumbs = function FancyThumbs(instance) {
    this.init(instance);
  };

  $.extend(FancyThumbs.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: false,
    isActive: false,
    init: function init(instance) {
      var self = this;
      self.instance = instance;
      instance.Thumbs = self; // Enable thumbs if at least two group items have thumbnails

      var first = instance.group[0],
          second = instance.group[1];
      self.opts = instance.group[instance.currIndex].opts.thumbs;
      self.$button = instance.$refs.toolbar.find('[data-fancybox-thumbs]');

      if (self.opts && first && second && (first.type == 'image' || first.opts.thumb || first.opts.$thumb) && (second.type == 'image' || second.opts.thumb || second.opts.$thumb)) {
        self.$button.show().on('click', function () {
          self.toggle();
        });
        self.isActive = true;
      } else {
        self.$button.hide();
      }
    },
    create: function create() {
      var self = this,
          instance = self.instance,
          parentEl = self.opts.parentEl,
          list,
          src;
      self.$grid = $('<div class="fancybox-thumbs fancybox-thumbs-' + self.opts.axis + '"></div>').appendTo(instance.$refs.container.find(parentEl).addBack().filter(parentEl)); // Build list HTML

      list = '<ul>';
      $.each(instance.group, function (i, item) {
        src = item.opts.thumb || (item.opts.$thumb ? item.opts.$thumb.attr('src') : null);

        if (!src && item.type === 'image') {
          src = item.src;
        }

        if (src && src.length) {
          list += '<li data-index="' + i + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + src + '" /></li>';
        }
      });
      list += '</ul>';
      self.$list = $(list).appendTo(self.$grid).on('click', 'li', function () {
        instance.jumpTo($(this).data('index'));
      });
      self.$list.find('img').hide().one('load', function () {
        var $parent = $(this).parent().removeClass('fancybox-thumbs-loading'),
            thumbWidth = $parent.outerWidth(),
            thumbHeight = $parent.outerHeight(),
            width,
            height,
            widthRatio,
            heightRatio;
        width = this.naturalWidth || this.width;
        height = this.naturalHeight || this.height; // Calculate thumbnail dimensions; center vertically and horizontally

        widthRatio = width / thumbWidth;
        heightRatio = height / thumbHeight;

        if (widthRatio >= 1 && heightRatio >= 1) {
          if (widthRatio > heightRatio) {
            width = width / heightRatio;
            height = thumbHeight;
          } else {
            width = thumbWidth;
            height = height / widthRatio;
          }
        }

        $(this).css({
          width: Math.floor(width),
          height: Math.floor(height),
          'margin-top': height > thumbHeight ? Math.floor(thumbHeight * 0.3 - height * 0.3) : Math.floor(thumbHeight * 0.5 - height * 0.5),
          'margin-left': Math.floor(thumbWidth * 0.5 - width * 0.5)
        }).show();
      }).each(function () {
        this.src = $(this).data('src');
      });

      if (self.opts.axis === 'x') {
        self.$list.width(parseInt(self.$grid.css("padding-right")) + instance.group.length * self.$list.children().eq(0).outerWidth(true) + 'px');
      }
    },
    focus: function focus(duration) {
      var self = this,
          $list = self.$list,
          thumb,
          thumbPos;

      if (self.instance.current) {
        thumb = $list.children().removeClass('fancybox-thumbs-active').filter('[data-index="' + self.instance.current.index + '"]').addClass('fancybox-thumbs-active');
        thumbPos = thumb.position(); // Check if need to scroll to make current thumb visible

        if (self.opts.axis === 'y' && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
          $list.stop().animate({
            'scrollTop': $list.scrollTop() + thumbPos.top
          }, duration);
        } else if (self.opts.axis === 'x' && (thumbPos.left < $list.parent().scrollLeft() || thumbPos.left > $list.parent().scrollLeft() + ($list.parent().width() - thumb.outerWidth()))) {
          $list.parent().stop().animate({
            'scrollLeft': thumbPos.left
          }, duration);
        }
      }
    },
    update: function update() {
      this.instance.$refs.container.toggleClass('fancybox-show-thumbs', this.isVisible);

      if (this.isVisible) {
        if (!this.$grid) {
          this.create();
        }

        this.instance.trigger('onThumbsShow');
        this.focus(0);
      } else if (this.$grid) {
        this.instance.trigger('onThumbsHide');
      } // Update content position


      this.instance.update();
    },
    hide: function hide() {
      this.isVisible = false;
      this.update();
    },
    show: function show() {
      this.isVisible = true;
      this.update();
    },
    toggle: function toggle() {
      this.isVisible = !this.isVisible;
      this.update();
    }
  });
  $(document).on({
    'onInit.fb': function onInitFb(e, instance) {
      var Thumbs;

      if (instance && !instance.Thumbs) {
        Thumbs = new FancyThumbs(instance);

        if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
          Thumbs.show();
        }
      }
    },
    'beforeShow.fb': function beforeShowFb(e, instance, item, firstRun) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible) {
        Thumbs.focus(firstRun ? 0 : 250);
      }
    },
    'afterKeydown.fb': function afterKeydownFb(e, instance, current, keypress, keycode) {
      var Thumbs = instance && instance.Thumbs; // "G"

      if (Thumbs && Thumbs.isActive && keycode === 71) {
        keypress.preventDefault();
        Thumbs.toggle();
      }
    },
    'beforeClose.fb': function beforeCloseFb(e, instance) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
        Thumbs.$grid.hide();
      }
    }
  });
})(document, __webpack_provided_window_dot_jQuery); //// ==========================================================================
//
// Share
// Displays simple form for sharing current url
//
// ==========================================================================


;

(function (document, $) {
  'use strict';

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' + '<svg viewBox="0 0 40 40">' + '<path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z">' + '</svg>' + '</button>'
    },
    share: {
      tpl: '<div class="fancybox-share">' + '<h1>{{SHARE}}</h1>' + '<p class="fancybox-share__links">' + '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' + '<span>Facebook</span>' + '</a>' + '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' + '<span>Pinterest</span>' + '</a>' + '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' + '<span>Twitter</span>' + '</a>' + '</p>' + '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p>' + '</div>'
    }
  });

  function escapeHtml(string) {
    var entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    };
    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
      return entityMap[s];
    });
  }

  $(document).on('click', '[data-fancybox-share]', function () {
    var f = $.fancybox.getInstance(),
        url,
        tpl;

    if (f) {
      url = f.current.opts.hash === false ? f.current.src : window.location;
      tpl = f.current.opts.share.tpl.replace(/\{\{media\}\}/g, f.current.type === 'image' ? encodeURIComponent(f.current.src) : '').replace(/\{\{url\}\}/g, encodeURIComponent(url)).replace(/\{\{url_raw\}\}/g, escapeHtml(url)).replace(/\{\{descr\}\}/g, f.$caption ? encodeURIComponent(f.$caption.text()) : '');
      $.fancybox.open({
        src: f.translate(f, tpl),
        type: 'html',
        opts: {
          animationEffect: "fade",
          animationDuration: 250,
          afterLoad: function afterLoad(instance, current) {
            // Opening links in a popup window
            current.$content.find('.fancybox-share__links a').click(function () {
              window.open(this.href, "Share", "width=550, height=450");
              return false;
            });
          }
        }
      });
    }
  });
})(document, __webpack_provided_window_dot_jQuery || jQuery); // ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================


;

(function (document, window, $) {
  'use strict'; // Simple $.escapeSelector polyfill (for jQuery prior v3)

  if (!$.escapeSelector) {
    $.escapeSelector = function (sel) {
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

      var fcssescape = function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
          // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
          if (ch === "\0") {
            return "\uFFFD";
          } // Control characters and (dependent upon position) numbers get escaped as code points


          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        } // Other potentially-special ASCII characters get backslash-escaped


        return "\\" + ch;
      };

      return (sel + "").replace(rcssescape, fcssescape);
    };
  } // Create new history entry only once


  var shouldCreateHistory = true; // Variable containing last hash value set by fancyBox
  // It will be used to determine if fancyBox needs to close after hash change is detected

  var currentHash = null; // Throttling the history change

  var timerID = null; // Get info about gallery name and current index from url

  function parseUrl() {
    var hash = window.location.hash.substr(1);
    var rez = hash.split('-');
    var index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1;
    var gallery = rez.join('-'); // Index is starting from 1

    if (index < 1) {
      index = 1;
    }

    return {
      hash: hash,
      index: index,
      gallery: gallery
    };
  } // Trigger click evnt on links to open new fancyBox instance


  function triggerFromUrl(url) {
    var $el;

    if (url.gallery !== '') {
      // If we can find element matching 'data-fancybox' atribute, then trigger click event for that ..
      $el = $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']").eq(url.index - 1);

      if (!$el.length) {
        // .. if not, try finding element by ID
        $el = $("#" + $.escapeSelector(url.gallery) + "");
      }

      if ($el.length) {
        shouldCreateHistory = false;
        $el.trigger('click');
      }
    }
  } // Get gallery name from current instance


  function getGalleryID(instance) {
    var opts;

    if (!instance) {
      return false;
    }

    opts = instance.current ? instance.current.opts : instance.opts;
    return opts.hash || (opts.$orig ? opts.$orig.data('fancybox') : '');
  } // Start when DOM becomes ready


  $(function () {
    // Check if user has disabled this module
    if ($.fancybox.defaults.hash === false) {
      return;
    } // Update hash when opening/closing fancyBox


    $(document).on({
      'onInit.fb': function onInitFb(e, instance) {
        var url, gallery;

        if (instance.group[instance.currIndex].opts.hash === false) {
          return;
        }

        url = parseUrl();
        gallery = getGalleryID(instance); // Make sure gallery start index matches index from hash

        if (gallery && url.gallery && gallery == url.gallery) {
          instance.currIndex = url.index - 1;
        }
      },
      'beforeShow.fb': function beforeShowFb(e, instance, current) {
        var gallery;

        if (!current || current.opts.hash === false) {
          return;
        }

        gallery = getGalleryID(instance); // Update window hash

        if (gallery && gallery !== '') {
          if (window.location.hash.indexOf(gallery) < 0) {
            instance.opts.origHash = window.location.hash;
          }

          currentHash = gallery + (instance.group.length > 1 ? '-' + (current.index + 1) : '');

          if ('replaceState' in window.history) {
            if (timerID) {
              clearTimeout(timerID);
            }

            timerID = setTimeout(function () {
              window.history[shouldCreateHistory ? 'pushState' : 'replaceState']({}, document.title, window.location.pathname + window.location.search + '#' + currentHash);
              timerID = null;
              shouldCreateHistory = false;
            }, 300);
          } else {
            window.location.hash = currentHash;
          }
        }
      },
      'beforeClose.fb': function beforeCloseFb(e, instance, current) {
        var gallery, origHash;

        if (timerID) {
          clearTimeout(timerID);
        }

        if (current.opts.hash === false) {
          return;
        }

        gallery = getGalleryID(instance);
        origHash = instance && instance.opts.origHash ? instance.opts.origHash : ''; // Remove hash from location bar

        if (gallery && gallery !== '') {
          if ('replaceState' in history) {
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search + origHash);
          } else {
            window.location.hash = origHash; // Keep original scroll position

            $(window).scrollTop(instance.scrollTop).scrollLeft(instance.scrollLeft);
          }
        }

        currentHash = null;
      }
    }); // Check if need to close after url has changed

    $(window).on('hashchange.fb', function () {
      var url = parseUrl();

      if ($.fancybox.getInstance()) {
        if (currentHash && currentHash !== url.gallery + '-' + url.index && !(url.index === 1 && currentHash == url.gallery)) {
          currentHash = null;
          $.fancybox.close();
        }
      } else if (url.gallery !== '') {
        triggerFromUrl(url);
      }
    }); // Check current hash and trigger click event on matching element to start fancyBox, if needed

    setTimeout(function () {
      triggerFromUrl(parseUrl());
    }, 50);
  });
})(document, window, __webpack_provided_window_dot_jQuery || jQuery);

;

(function (document, $) {
  'use strict';

  var prevTime = new Date().getTime();
  $(document).on({
    'onInit.fb': function onInitFb(e, instance, current) {
      instance.$refs.stage.on('mousewheel DOMMouseScroll wheel MozMousePixelScroll', function (e) {
        var current = instance.current,
            currTime = new Date().getTime();

        if (instance.group.length < 1 || current.opts.wheel === false || current.opts.wheel === 'auto' && current.type !== 'image') {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (current.$slide.hasClass('fancybox-animated')) {
          return;
        }

        e = e.originalEvent || e;

        if (currTime - prevTime < 250) {
          return;
        }

        prevTime = currTime;
        instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? 'next' : 'previous']();
      });
    }
  });
})(document, __webpack_provided_window_dot_jQuery || jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/Resources/views/theme/assets/js/script.js":
/*!*******************************************************!*\
  !*** ./src/Resources/views/theme/assets/js/script.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {(function ($) {
  "use strict"; //Hide Loading Box (Preloader)

  function handlePreloader() {
    if ($('.preloader').length) {
      $('.preloader').delay(200).fadeOut(500);
    }
  } //Update Header Style and Scroll to Top


  function headerStyle() {
    if ($('.main-header').length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $('.main-header');
      var siteHeaderHeight = $('.main-header').height();
      var scrollLink = $('.scroll-to-top');

      if (windowpos >= siteHeaderHeight) {
        siteHeader.addClass('fixed-header');
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass('fixed-header');
        scrollLink.fadeOut(300);
      }
    }
  }

  headerStyle(); //Submenu Dropdown Toggle

  if ($('.main-header li.dropdown ul').length) {
    $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'); //Dropdown Button

    $('.main-header li.dropdown .dropdown-btn').on('click', function () {
      $(this).prev('ul').slideToggle(500);
    }); //Disable dropdown parent link
    // $('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
    // 	if ($(this).attr('href') === '') {
    // 		return true;
    // 	}
    // 	e.preventDefault();
    // });
  } //Event Countdown Timer


  if ($('.time-countdown').length) {
    $('.time-countdown').each(function () {
      var $this = $(this),
          finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function (event) {
        var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));
      });
    });
  } //Fact Counter + Text Count


  if ($('.count-box').length) {
    $('.count-box').appear(function () {
      var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

      if (!$t.hasClass("counted")) {
        $t.addClass("counted");
        $({
          countNum: $t.find(".count-text").text()
        }).animate({
          countNum: n
        }, {
          duration: r,
          easing: "linear",
          step: function step() {
            $t.find(".count-text").text(Math.floor(this.countNum));
          },
          complete: function complete() {
            $t.find(".count-text").text(this.countNum);
          }
        });
      }
    }, {
      accY: 0
    });
  } //Product Tabs


  if ($('.project-tab').length) {
    $('.project-tab .product-tab-btns .p-tab-btn').on('click', function (e) {
      e.preventDefault();
      var target = $($(this).attr('data-tab'));

      if ($(target).hasClass('actve-tab')) {
        return false;
      } else {
        $('.project-tab .product-tab-btns .p-tab-btn').removeClass('active-btn');
        $(this).addClass('active-btn');
        $('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');
        $(target).addClass('active-tab');
      }
    });
  } //Jquery Spinner / Quantity Spinner


  if ($('.quantity-spinner').length) {
    $("input.quantity-spinner").TouchSpin({
      verticalbuttons: true
    });
  } //Product Carousel


  if ($('.project-carousel').length) {
    $('.project-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 700,
      autoplay: 5000,
      navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        800: {
          items: 3
        },
        1024: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    });
  } //Product Carousel Two


  if ($('.project-carousel-two').length) {
    $('.project-carousel-two').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 700,
      autoplay: 5000,
      navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        800: {
          items: 3
        },
        1024: {
          items: 4
        },
        1200: {
          items: 4
        }
      }
    });
  } //Text Rotator


  if ($('.slider-banner-section .content h2 span').length) {} // $(".slider-banner-section .content h2 span").textrotator({
  // animation: "flip",
  // speed: 3000
  // });
  //Tabs Box


  if ($('.tabs-box').length) {
    $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
      e.preventDefault();
      var target = $($(this).attr('data-tab'));

      if ($(target).is(':visible')) {
        return false;
      } else {
        target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
        $(this).addClass('active-btn');
        target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
        target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
        $(target).fadeIn(300);
        $(target).addClass('active-tab');
      }
    });
  } //Accordion Box


  if ($('.accordion-box').length) {
    $(".accordion-box").on('click', '.acc-btn', function () {
      var outerBox = $(this).parents('.accordion-box');
      var target = $(this).parents('.accordion');

      if ($(this).hasClass('active') !== true) {
        $(outerBox).find('.accordion .acc-btn').removeClass('active');
      }

      if ($(this).next('.acc-content').is(':visible')) {
        return false;
      } else {
        $(this).addClass('active');
        $(outerBox).children('.accordion').removeClass('active-block');
        $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
        target.addClass('active-block');
        $(this).next('.acc-content').slideDown(300);
      }
    });
  } //Two Item Carousel


  if ($('.two-item-carousel').length) {
    $('.two-item-carousel').owlCarousel({
      loop: true,
      margin: 90,
      nav: true,
      smartSpeed: 700,
      autoplay: 4000,
      navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        800: {
          items: 1
        },
        1024: {
          items: 2
        },
        1200: {
          items: 2
        }
      }
    });
  } //Four Item Carousel


  if ($('.four-item-carousel').length) {
    $('.four-item-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 700,
      autoplay: 4000,
      navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        800: {
          items: 2
        },
        1024: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    });
  } //Sortable Masonary with Filters


  function sortableMasonry() {
    if ($('.sortable-masonry').length) {
      var winDow = $(window); // Needed variables

      var $container = $('.sortable-masonry .items-container');
      var $filter = $('.filter-btns');
      $container.isotope({
        filter: '*',
        masonry: {
          columnWidth: '.masonry-item.col-lg-4'
        },
        animationOptions: {
          duration: 500,
          easing: 'linear'
        }
      }); // Isotope Filter 

      $filter.find('li').on('click', function () {
        var selector = $(this).attr('data-filter');

        try {
          $container.isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: 'linear',
              queue: false
            }
          });
        } catch (err) {}

        return false;
      });
      winDow.on('resize', function () {
        var selector = $filter.find('li.active').attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: 'linear',
            queue: false
          }
        });
      });
      var filterItemA = $('.filter-btns li');
      filterItemA.on('click', function () {
        var $this = $(this);

        if (!$this.hasClass('active')) {
          filterItemA.removeClass('active');
          $this.addClass('active');
        }
      });
    }
  }

  sortableMasonry(); // Sponsors Carousel

  if ($('.sponsors-carousel').length) {
    $('.sponsors-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoplay: 4000,
      navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 2
        },
        600: {
          items: 3
        },
        800: {
          items: 5
        },
        1024: {
          items: 6
        }
      }
    });
  } //LightBox / Fancybox


  if ($('.lightbox-image').length) {
    $('.lightbox-image').fancybox({
      openEffect: 'fade',
      closeEffect: 'fade',
      helpers: {
        media: {}
      }
    });
  } //Contact Form Validation


  if ($('#contact-form').length) {
    $('#contact-form').validate({
      rules: {
        firstname: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true
        },
        subject: {
          required: true
        },
        message: {
          required: true
        }
      }
    });
  } //Gallery Filters


  if ($('.filter-list').length) {
    $('.filter-list').mixItUp({});
  } // Scroll to a Specific Div


  if ($('.scroll-to-target').length) {
    $(".scroll-to-target").on('click', function () {
      var target = $(this).attr('data-target'); // animate

      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1500);
    });
  } // Elements Animation


  if ($('.wow').length) {
    var wow = new WOW({
      boxClass: 'wow',
      // animated element css class (default is wow)
      animateClass: 'animated',
      // animation css class (default is animated)
      offset: 0,
      // distance to the element when triggering the animation (default is 0)
      mobile: false,
      // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)

    });
    wow.init();
  }
  /* ==========================================================================
     When document is Scrollig, do
     ========================================================================== */


  $(window).on('scroll', function () {
    headerStyle();
  });
  /* ==========================================================================
     When document is loading, do
     ========================================================================== */

  $(window).on('load', function () {
    handlePreloader();
    sortableMasonry();
  });
})(__webpack_provided_window_dot_jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/Resources/views/theme/assets/main.js":
/*!**************************************************!*\
  !*** ./src/Resources/views/theme/assets/main.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, global) {__webpack_require__(/*! ./css/bootstrap.css */ "./src/Resources/views/theme/assets/css/bootstrap.css");

__webpack_require__(/*! ./plugins/revolution/css/settings.css */ "./src/Resources/views/theme/assets/plugins/revolution/css/settings.css");

__webpack_require__(/*! ./plugins/revolution/css/layers.css */ "./src/Resources/views/theme/assets/plugins/revolution/css/layers.css");

__webpack_require__(/*! ./plugins/revolution/css/navigation.css */ "./src/Resources/views/theme/assets/plugins/revolution/css/navigation.css");

__webpack_require__(/*! ./css/style.css */ "./src/Resources/views/theme/assets/css/style.css");

__webpack_require__(/*! ./css/style-overwrite.css */ "./src/Resources/views/theme/assets/css/style-overwrite.css");

__webpack_require__(/*! ./css/responsive.css */ "./src/Resources/views/theme/assets/css/responsive.css");

var $ = jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

global.$ = global.jQuery = $;

__webpack_require__(/*! jquery-ui */ "./node_modules/jquery-ui/ui/widget.js");

__webpack_require__(/*! ./js/jquery.fancybox.js */ "./src/Resources/views/theme/assets/js/jquery.fancybox.js");

__webpack_require__(/*! ./js/bootstrap.min.js */ "./src/Resources/views/theme/assets/js/bootstrap.min.js"); // require('./plugins/TweenLite.min.js');
// require('./plugins/CSSPlugin.min.js');
// require('./plugins/revolution/js/jquery.themepunch.revolution.min.js');
// require('./plugins/revolution/js/jquery.themepunch.tools.min.js');
// require('./plugins/revolution/js/extensions/revolution.extension.actions.min.js');
// require('./plugins/revolution/js/extensions/revolution.extension.carousel.min.js');
// require('./plugins/revolution/js/extensions/revolution.extension.kenburn.min.js');
// require('./plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js');
// require('./plugins/revolution/js/extensions/revolution.extension.migration.min.js');
// require('./plugins/revolution/js/extensions/revolution.extension.navigation.min.js');
// require('./plugins/revolution/js/extensions/revolution.extension.parallax.min.js');
// require('./plugins/revolution/js/extensions/revolution.extension.slideanims.min.js');
// require('./plugins/revolution/js/extensions/revolution.extension.video.min.js');
//
//require('./js/main-slider-script.js');


__webpack_require__(/*! ./js/script.js */ "./src/Resources/views/theme/assets/js/script.js"); //require('./js/isotope.js');
//require('./js/owl.js');
//require('./js/mixitup.js');
//require('./js/wow.js');
//require('./js/appear.js');
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/Resources/views/theme/assets/plugins/revolution/css/layers.css":
/*!****************************************************************************!*\
  !*** ./src/Resources/views/theme/assets/plugins/revolution/css/layers.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Resources/views/theme/assets/plugins/revolution/css/navigation.css":
/*!********************************************************************************!*\
  !*** ./src/Resources/views/theme/assets/plugins/revolution/css/navigation.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Resources/views/theme/assets/plugins/revolution/css/settings.css":
/*!******************************************************************************!*\
  !*** ./src/Resources/views/theme/assets/plugins/revolution/css/settings.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlcy92aWV3cy90aGVtZS9hc3NldHMvY3NzL2Jvb3RzdHJhcC5jc3M/ZmQ0MiIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VzL3ZpZXdzL3RoZW1lL2Fzc2V0cy9jc3MvcmVzcG9uc2l2ZS5jc3M/ZThmNyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VzL3ZpZXdzL3RoZW1lL2Fzc2V0cy9jc3Mvc3R5bGUtb3ZlcndyaXRlLmNzcz8xYmVlIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvdmlld3MvdGhlbWUvYXNzZXRzL2Nzcy9zdHlsZS5jc3M/NDdjYSIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VzL3ZpZXdzL3RoZW1lL2Fzc2V0cy9qcy9ib290c3RyYXAubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZXMvdmlld3MvdGhlbWUvYXNzZXRzL2pzL2pxdWVyeS5mYW5jeWJveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VzL3ZpZXdzL3RoZW1lL2Fzc2V0cy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlcy92aWV3cy90aGVtZS9hc3NldHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VzL3ZpZXdzL3RoZW1lL2Fzc2V0cy9wbHVnaW5zL3Jldm9sdXRpb24vY3NzL2xheWVycy5jc3M/NzdiNCIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VzL3ZpZXdzL3RoZW1lL2Fzc2V0cy9wbHVnaW5zL3Jldm9sdXRpb24vY3NzL25hdmlnYXRpb24uY3NzPzk3NjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlcy92aWV3cy90aGVtZS9hc3NldHMvcGx1Z2lucy9yZXZvbHV0aW9uL2Nzcy9zZXR0aW5ncy5jc3M/MGVlNSJdLCJuYW1lcyI6WyJqUXVlcnkiLCJFcnJvciIsImEiLCJiIiwiZm4iLCJqcXVlcnkiLCJzcGxpdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIldlYmtpdFRyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJ0cmFuc2l0aW9uIiwiYyIsInN0eWxlIiwiZW5kIiwiZW11bGF0ZVRyYW5zaXRpb25FbmQiLCJkIiwib25lIiwiZSIsInRyaWdnZXIiLCJzdXBwb3J0Iiwic2V0VGltZW91dCIsImV2ZW50Iiwic3BlY2lhbCIsImJzVHJhbnNpdGlvbkVuZCIsImJpbmRUeXBlIiwiZGVsZWdhdGVUeXBlIiwiaGFuZGxlIiwidGFyZ2V0IiwiaXMiLCJoYW5kbGVPYmoiLCJoYW5kbGVyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJlYWNoIiwiZGF0YSIsImNhbGwiLCJvbiIsImNsb3NlIiwiVkVSU0lPTiIsIlRSQU5TSVRJT05fRFVSQVRJT04iLCJwcm90b3R5cGUiLCJnIiwiZGV0YWNoIiwicmVtb3ZlIiwiZiIsImF0dHIiLCJyZXBsYWNlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJjbG9zZXN0IiwiRXZlbnQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwiYWxlcnQiLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiLCJ0b2dnbGUiLCJzZXRTdGF0ZSIsIiRlbGVtZW50Iiwib3B0aW9ucyIsImV4dGVuZCIsIkRFRkFVTFRTIiwiaXNMb2FkaW5nIiwibG9hZGluZ1RleHQiLCJyZXNldFRleHQiLCJwcm94eSIsImFkZENsYXNzIiwicHJvcCIsInJlbW92ZUF0dHIiLCJmaW5kIiwidG9nZ2xlQ2xhc3MiLCJidXR0b24iLCJmaXJzdCIsInRlc3QiLCJ0eXBlIiwic2xpZGUiLCJ0byIsImludGVydmFsIiwicGF1c2UiLCJjeWNsZSIsIiRpbmRpY2F0b3JzIiwicGF1c2VkIiwic2xpZGluZyIsIiRhY3RpdmUiLCIkaXRlbXMiLCJrZXlib2FyZCIsImtleWRvd24iLCJkb2N1bWVudEVsZW1lbnQiLCJ3cmFwIiwidGFnTmFtZSIsIndoaWNoIiwicHJldiIsIm5leHQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJnZXRJdGVtSW5kZXgiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImluZGV4IiwiZ2V0SXRlbUZvckRpcmVjdGlvbiIsImVxIiwiaCIsImkiLCJqIiwiayIsInJlbGF0ZWRUYXJnZXQiLCJkaXJlY3Rpb24iLCJsIiwibSIsIm9mZnNldFdpZHRoIiwiam9pbiIsImNhcm91c2VsIiwid2luZG93IiwiJHRyaWdnZXIiLCJpZCIsInRyYW5zaXRpb25pbmciLCIkcGFyZW50IiwiZ2V0UGFyZW50IiwiYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzIiwiZGltZW5zaW9uIiwic2hvdyIsImNhbWVsQ2FzZSIsImhpZGUiLCJvZmZzZXRIZWlnaHQiLCJjb2xsYXBzZSIsImNvbnRhaW5zIiwiaW5zZXJ0QWZ0ZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJkcm9wZG93biIsIiRib2R5IiwiYm9keSIsIiRkaWFsb2ciLCIkYmFja2Ryb3AiLCJpc1Nob3duIiwib3JpZ2luYWxCb2R5UGFkIiwic2Nyb2xsYmFyV2lkdGgiLCJpZ25vcmVCYWNrZHJvcENsaWNrIiwicmVtb3RlIiwibG9hZCIsIkJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04iLCJiYWNrZHJvcCIsImNoZWNrU2Nyb2xsYmFyIiwic2V0U2Nyb2xsYmFyIiwiZXNjYXBlIiwicmVzaXplIiwiYXBwZW5kVG8iLCJzY3JvbGxUb3AiLCJhZGp1c3REaWFsb2ciLCJlbmZvcmNlRm9jdXMiLCJvZmYiLCJoaWRlTW9kYWwiLCJoYXMiLCJoYW5kbGVVcGRhdGUiLCJyZXNldEFkanVzdG1lbnRzIiwicmVzZXRTY3JvbGxiYXIiLCJyZW1vdmVCYWNrZHJvcCIsImN1cnJlbnRUYXJnZXQiLCJmb2N1cyIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImNzcyIsInBhZGRpbmdMZWZ0IiwiYm9keUlzT3ZlcmZsb3dpbmciLCJwYWRkaW5nUmlnaHQiLCJpbm5lcldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmlnaHQiLCJNYXRoIiwiYWJzIiwibGVmdCIsImNsaWVudFdpZHRoIiwibWVhc3VyZVNjcm9sbGJhciIsInBhcnNlSW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kIiwicmVtb3ZlQ2hpbGQiLCJtb2RhbCIsImVuYWJsZWQiLCJ0aW1lb3V0IiwiaG92ZXJTdGF0ZSIsImluU3RhdGUiLCJpbml0IiwiYW5pbWF0aW9uIiwicGxhY2VtZW50Iiwic2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsInRpdGxlIiwiZGVsYXkiLCJodG1sIiwiY29udGFpbmVyIiwidmlld3BvcnQiLCJwYWRkaW5nIiwiZ2V0T3B0aW9ucyIsIiR2aWV3cG9ydCIsImlzRnVuY3Rpb24iLCJjbGljayIsImhvdmVyIiwiY29uc3RydWN0b3IiLCJlbnRlciIsImxlYXZlIiwiX29wdGlvbnMiLCJmaXhUaXRsZSIsImdldERlZmF1bHRzIiwiZ2V0RGVsZWdhdGVPcHRpb25zIiwidGlwIiwiY2xlYXJUaW1lb3V0IiwiaXNJblN0YXRlVHJ1ZSIsImhhc0NvbnRlbnQiLCJvd25lckRvY3VtZW50IiwiZ2V0VUlEIiwic2V0Q29udGVudCIsInRvcCIsImRpc3BsYXkiLCJnZXRQb3NpdGlvbiIsIm4iLCJvIiwiYm90dG9tIiwid2lkdGgiLCJwIiwiZ2V0Q2FsY3VsYXRlZE9mZnNldCIsImFwcGx5UGxhY2VtZW50IiwicSIsIiR0aXAiLCJpc05hTiIsIm9mZnNldCIsInNldE9mZnNldCIsInVzaW5nIiwicm91bmQiLCJnZXRWaWV3cG9ydEFkanVzdGVkRGVsdGEiLCJyZXBsYWNlQXJyb3ciLCJhcnJvdyIsImdldFRpdGxlIiwiaGVpZ2h0IiwiU1ZHRWxlbWVudCIsInNjcm9sbCIsInJhbmRvbSIsImdldEVsZW1lbnRCeUlkIiwiJGFycm93IiwiZW5hYmxlIiwiZGlzYWJsZSIsInRvZ2dsZUVuYWJsZWQiLCJkZXN0cm95IiwicmVtb3ZlRGF0YSIsInRvb2x0aXAiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInBvcG92ZXIiLCIkc2Nyb2xsRWxlbWVudCIsIm9mZnNldHMiLCJ0YXJnZXRzIiwiYWN0aXZlVGFyZ2V0IiwicHJvY2VzcyIsInJlZnJlc2giLCJnZXRTY3JvbGxIZWlnaHQiLCJtYXgiLCJpc1dpbmRvdyIsIm1hcCIsInNvcnQiLCJwdXNoIiwiYWN0aXZhdGUiLCJjbGVhciIsInBhcmVudHMiLCJwYXJlbnRzVW50aWwiLCJzY3JvbGxzcHkiLCJlbGVtZW50IiwidGFiIiwiJHRhcmdldCIsImNoZWNrUG9zaXRpb24iLCJjaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcCIsImFmZml4ZWQiLCJ1bnBpbiIsInBpbm5lZE9mZnNldCIsIlJFU0VUIiwiZ2V0U3RhdGUiLCJnZXRQaW5uZWRPZmZzZXQiLCJhZmZpeCIsIm9mZnNldEJvdHRvbSIsIm9mZnNldFRvcCIsIiQiLCJ1bmRlZmluZWQiLCJmYW5jeWJveCIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0cyIsImxvb3AiLCJtYXJnaW4iLCJndXR0ZXIiLCJhcnJvd3MiLCJpbmZvYmFyIiwidG9vbGJhciIsImJ1dHRvbnMiLCJpZGxlVGltZSIsInNtYWxsQnRuIiwicHJvdGVjdCIsImltYWdlIiwicHJlbG9hZCIsImFqYXgiLCJzZXR0aW5ncyIsImlmcmFtZSIsInRwbCIsInNjcm9sbGluZyIsImRlZmF1bHRUeXBlIiwiYW5pbWF0aW9uRWZmZWN0IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJ6b29tT3BhY2l0eSIsInRyYW5zaXRpb25FZmZlY3QiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJzbGlkZUNsYXNzIiwiYmFzZUNsYXNzIiwiYmFzZVRwbCIsInNwaW5uZXJUcGwiLCJlcnJvclRwbCIsImJ0blRwbCIsImRvd25sb2FkIiwiem9vbSIsImFycm93TGVmdCIsImFycm93UmlnaHQiLCJwYXJlbnRFbCIsImF1dG9Gb2N1cyIsImJhY2tGb2N1cyIsInRyYXBGb2N1cyIsImZ1bGxTY3JlZW4iLCJhdXRvU3RhcnQiLCJ0b3VjaCIsInZlcnRpY2FsIiwibW9tZW50dW0iLCJoYXNoIiwibWVkaWEiLCJzbGlkZVNob3ciLCJzcGVlZCIsInRodW1icyIsImhpZGVPbkNsb3NlIiwiYXhpcyIsIndoZWVsIiwib25Jbml0Iiwibm9vcCIsImJlZm9yZUxvYWQiLCJhZnRlckxvYWQiLCJiZWZvcmVTaG93IiwiYWZ0ZXJTaG93IiwiYmVmb3JlQ2xvc2UiLCJhZnRlckNsb3NlIiwib25BY3RpdmF0ZSIsIm9uRGVhY3RpdmF0ZSIsImNsaWNrQ29udGVudCIsImN1cnJlbnQiLCJjbGlja1NsaWRlIiwiY2xpY2tPdXRzaWRlIiwiZGJsY2xpY2tDb250ZW50IiwiZGJsY2xpY2tTbGlkZSIsImRibGNsaWNrT3V0c2lkZSIsIm1vYmlsZSIsImxhbmciLCJpMThuIiwiQ0xPU0UiLCJORVhUIiwiUFJFViIsIkVSUk9SIiwiUExBWV9TVEFSVCIsIlBMQVlfU1RPUCIsIkZVTExfU0NSRUVOIiwiVEhVTUJTIiwiRE9XTkxPQUQiLCJTSEFSRSIsIlpPT00iLCIkVyIsIiREIiwiY2FsbGVkIiwiaXNRdWVyeSIsIm9iaiIsImhhc093blByb3BlcnR5IiwicmVxdWVzdEFGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInRyYW5zaXRpb25FbmQiLCJ0IiwiZWwiLCJ0cmFuc2l0aW9ucyIsImZvcmNlUmVkcmF3IiwiJGVsIiwiRmFuY3lCb3giLCJvcHRzIiwic2VsZiIsImlzTW9iaWxlIiwiaXNBcnJheSIsImdyb3VwIiwiY3VyckluZGV4IiwicHJldkluZGV4IiwicHJldlBvcyIsImN1cnJQb3MiLCJmaXJzdFJ1biIsImNyZWF0ZUdyb3VwIiwiJGxhc3RGb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwic2xpZGVzIiwiZmlyc3RJdGVtIiwiZmlyc3RJdGVtT3B0cyIsIiRzY3JvbGxEaXYiLCIkY29udGFpbmVyIiwiYnV0dG9uU3RyIiwic2Nyb2xsTGVmdCIsImdldEluc3RhbmNlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiTVNTdHJlYW0iLCJpbm5lckhlaWdodCIsInZhbHVlIiwidHJhbnNsYXRlIiwiJHJlZnMiLCJmb3JFYWNoIiwiaXRlbSIsImp1bXBUbyIsInN0ciIsImFyciIsIm1hdGNoIiwiaXRlbXMiLCJtYWtlQXJyYXkiLCIkaXRlbSIsImZvdW5kIiwic3JjIiwic3JjUGFydHMiLCJpc1BsYWluT2JqZWN0IiwiJG9yaWciLCJ2aWRlb0Zvcm1hdCIsImNoYXJBdCIsIiR0aHVtYiIsImNhcHRpb24iLCJzaGlmdCIsImZpbHRlciIsImluQXJyYXkiLCJhZGRFdmVudHMiLCJyZW1vdmVFdmVudHMiLCJwcmV2aW91cyIsImlzU2NhbGVkRG93biIsIm9yaWdpbmFsRXZlbnQiLCJ1cGRhdGUiLCJzdGFnZSIsImluc3RhbmNlIiwiaXNDbG9zaW5nIiwia2V5Y29kZSIsImtleUNvZGUiLCJpZGxlU2Vjb25kc0NvdW50ZXIiLCJpc0lkbGUiLCJzaG93Q29udHJvbHMiLCJpZGxlSW50ZXJ2YWwiLCJpc0RyYWdnaW5nIiwiaGlkZUNvbnRyb2xzIiwiZHVyYXRpb24iLCJwb3MiLCJjYW52YXNXaWR0aCIsImN1cnJlbnRQb3MiLCJ0cmFuc2l0aW9uUHJvcHMiLCJncm91cExlbiIsImlzQW5pbWF0aW5nIiwiY3JlYXRlU2xpZGUiLCJ1cGRhdGVDb250cm9scyIsImdldFRyYW5zbGF0ZSIsIiRzbGlkZSIsImlzTW92ZWQiLCJmb3JjZWREdXJhdGlvbiIsImlzTnVtZXJpYyIsImxvYWRTbGlkZSIsInN0b3AiLCJhbmltYXRlIiwiY29tcGxldGUiLCJpc0xvYWRlZCIsInJldmVhbENvbnRlbnQiLCJpc0NvbXBsZXRlIiwidXBkYXRlU2xpZGUiLCJzY2FsZVRvQWN0dWFsIiwieCIsInkiLCIkd2hhdCIsIiRjb250ZW50IiwiaW1nUG9zIiwicG9zWCIsInBvc1kiLCJzY2FsZVgiLCJzY2FsZVkiLCJjYW52YXNIZWlnaHQiLCJuZXdJbWdXaWR0aCIsIm5ld0ltZ0hlaWdodCIsImhhc0Vycm9yIiwidXBkYXRlQ3Vyc29yIiwiU2xpZGVTaG93IiwiaXNBY3RpdmUiLCJzY2FsZVRvRml0IiwiZ2V0Rml0UG9zIiwiaW1nV2lkdGgiLCJpbWdIZWlnaHQiLCJtaW5SYXRpbyIsIm1pbiIsImZsb29yIiwia2V5Iiwic2V0VHJhbnNsYXRlIiwiY2VudGVyU2xpZGUiLCJvcGFjaXR5IiwibmV4dFdpZHRoIiwibmV4dEhlaWdodCIsImlzWm9vbWFibGUiLCJmaXRQb3MiLCJyZXoiLCJjYW5QYW4iLCJhamF4TG9hZCIsInNldEltYWdlIiwic2V0SWZyYW1lIiwic2V0RXJyb3IiLCJzaG93TG9hZGluZyIsInVybCIsInN1Y2Nlc3MiLCJ0ZXh0U3RhdHVzIiwiZXJyb3IiLCJqcVhIUiIsImFib3J0Iiwic3Jjc2V0IiwidGVtcCIsInB4UmF0aW8iLCJ3aW5kb3dXaWR0aCIsImRldmljZVBpeGVsUmF0aW8iLCJyZXQiLCJ0cmltIiwic3Vic3RyaW5nIiwicG9zdGZpeCIsInRodW1iIiwiJGdob3N0Iiwic2V0QmlnSW1hZ2UiLCIkaW1nIiwiJGltYWdlIiwidGltb3V0cyIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJoaWRlTG9hZGluZyIsInJlYWR5U3RhdGUiLCIkaWZyYW1lIiwiRGF0ZSIsImdldFRpbWUiLCJpc1JlYWR5IiwiJHdyYXAiLCJmcmFtZVdpZHRoIiwiZnJhbWVIZWlnaHQiLCJzY3JvbGxXaWR0aCIsIiRjb250ZW50cyIsImNvbnRlbnRzIiwiaWdub3JlIiwiY29udGVudFdpbmRvdyIsImNlaWwiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJwcmVwZW5kIiwiZW1wdHkiLCIkcGxhY2Vob2xkZXIiLCJub2RlVHlwZSIsImFmdGVyIiwiJHNtYWxsQnRuIiwiJHNwaW5uZXIiLCJlZmZlY3QiLCJlZmZlY3RDbGFzc05hbWUiLCJzdGFydCIsImdldFRodW1iUG9zIiwiaXNFbGVtZW50VmlzaWJsZSIsImVsZW1lbnRSZWN0IiwicGFyZW50UmVjdHMiLCJ2aXNpYmxlSW5BbGxQYXJlbnRzIiwicGFyZW50RWxlbWVudCIsImV2ZXJ5IiwicGFyZW50UmVjdCIsInZpc2libGVQaXhlbFgiLCJ2aXNpYmxlUGl4ZWxZIiwidGh1bWJQb3MiLCJzbGlkZVBvcyIsInBhcnNlRmxvYXQiLCJwcm9taXNlIiwic2libGluZ3MiLCJpc1Zpc2libGUiLCJkb25lIiwiY2xlYW5VcCIsIm5hbWUiLCJhcmdzIiwiQXJyYXkiLCJzbGljZSIsInVuc2hpZnQiLCJmb3JjZSIsIiRjYXB0aW9uIiwiaXNIaWRkZW5Db250cm9scyIsInRvZ2dsZUNvbnRyb2xzIiwidmVyc2lvbiIsImNvbW1hbmQiLCJvcGVuIiwiYWxsIiwiY3JlYXRlVG91Y2giLCJ1c2UzZCIsImRpdiIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZG9jdW1lbnRNb2RlIiwibWF0cml4IiwiaW5kZXhPZiIsInRyYW5zUmVnZXgiLCJ0cmFuc1JleiIsImV4ZWMiLCJwcm9wcyIsInBvc2l0aW9uIiwidHJhbnNmb3JtIiwibGVhdmVBbmltYXRpb25OYW1lIiwicHJvcGVydHlOYW1lIiwiX3J1biIsImZvcm1hdCIsInBhcmFtcyIsInBhcmFtIiwieW91dHViZSIsIm1hdGNoZXIiLCJhdXRvcGxheSIsImF1dG9oaWRlIiwiZnMiLCJyZWwiLCJoZCIsIndtb2RlIiwiZW5hYmxlanNhcGkiLCJodG1sNSIsInBhcmFtUGxhY2UiLCJ2aW1lbyIsInNob3dfdGl0bGUiLCJzaG93X2J5bGluZSIsInNob3dfcG9ydHJhaXQiLCJmdWxsc2NyZWVuIiwiYXBpIiwibWV0YWNhZmUiLCJkYWlseW1vdGlvbiIsImFkZGl0aW9uYWxJbmZvcyIsInZpbmUiLCJpbnN0YWdyYW0iLCJnbWFwX3BsYWNlIiwiZ21hcF9zZWFyY2giLCJ1cmxQYXJhbXMiLCJwYXJhbU9iaiIsInByb3ZpZGVyIiwicHJvdmlkZXJOYW1lIiwicHJvdmlkZXJPcHRzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29udGVudFByb3ZpZGVyIiwiY2FuY2VsQUZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwib0NhbmNlbEFuaW1hdGlvbkZyYW1lIiwicG9pbnRlcnMiLCJyZXN1bHQiLCJ0b3VjaGVzIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiY2xpZW50WCIsImNsaWVudFkiLCJkaXN0YW5jZSIsInBvaW50MiIsInBvaW50MSIsIndoYXQiLCJzcXJ0IiwicG93IiwiaXNDbGlja2FibGUiLCJnZXQiLCJvbmNsaWNrIiwiYXR0cyIsImF0dHJpYnV0ZXMiLCJub2RlTmFtZSIsInN1YnN0ciIsImhhc1Njcm9sbGJhcnMiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJob3Jpem9udGFsIiwiaXNTY3JvbGxhYmxlIiwiR3Vlc3R1cmVzIiwiJGJnIiwiYmciLCIkc3RhZ2UiLCJvbnRvdWNoc3RhcnQiLCJpc1RvdWNoRGV2aWNlIiwicmVhbFBvaW50cyIsInN0YXJ0UG9pbnRzIiwic3RhcnRFdmVudCIsImNhblRhcCIsImlzUGFubmluZyIsImlzU3dpcGluZyIsImlzWm9vbWluZyIsImlzU2Nyb2xsaW5nIiwic2xpZGVyU3RhcnRQb3MiLCJzbGlkZXJMYXN0UG9zIiwiY29udGVudFN0YXJ0UG9zIiwiY29udGVudExhc3RQb3MiLCJzdGFydFRpbWUiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJhZGRFdmVudExpc3RlbmVyIiwib25zY3JvbGwiLCJjZW50ZXJQb2ludFN0YXJ0WCIsImNlbnRlclBvaW50U3RhcnRZIiwicGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRYIiwicGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRZIiwic3RhcnREaXN0YW5jZUJldHdlZW5GaW5nZXJzIiwib250b3VjaG1vdmUiLCJuZXdQb2ludHMiLCJvblN3aXBlIiwib25QYW4iLCJvblpvb20iLCJzd2lwaW5nIiwiYW5nbGUiLCJhdGFuMiIsIlBJIiwiaW5UcmFuc2l0aW9uIiwicmVxdWVzdElkIiwibGltaXRNb3ZlbWVudCIsImN1cnJlbnRPZmZzZXRYIiwiY3VycmVudE9mZnNldFkiLCJjdXJyZW50V2lkdGgiLCJjdXJyZW50SGVpZ2h0IiwibWluVHJhbnNsYXRlWCIsIm1pblRyYW5zbGF0ZVkiLCJtYXhUcmFuc2xhdGVYIiwibWF4VHJhbnNsYXRlWSIsIm5ld09mZnNldFgiLCJuZXdPZmZzZXRZIiwibGltaXRQb3NpdGlvbiIsIm5ld1dpZHRoIiwibmV3SGVpZ2h0IiwiZW5kRGlzdGFuY2VCZXR3ZWVuRmluZ2VycyIsInBpbmNoUmF0aW8iLCJ0cmFuc2xhdGVGcm9tWm9vbWluZ1giLCJ0cmFuc2xhdGVGcm9tWm9vbWluZ1kiLCJjZW50ZXJQb2ludEVuZFgiLCJjZW50ZXJQb2ludEVuZFkiLCJ0cmFuc2xhdGVGcm9tVHJhbnNsYXRpbmdYIiwidHJhbnNsYXRlRnJvbVRyYW5zbGF0aW5nWSIsIm5ld1BvcyIsIm9udG91Y2hlbmQiLCJkTXMiLCJwYW5uaW5nIiwiem9vbWluZyIsImVuZFBvaW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvblRhcCIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsInNwZWVkWCIsImVuZFBhbm5pbmciLCJlbmRab29taW5nIiwiZW5kU3dpcGluZyIsImxlbiIsInJlc2V0IiwidGFwWCIsInRhcFkiLCJ3aGVyZSIsInByZWZpeCIsImFjdGlvbiIsImFkZEJhY2siLCJ0YXBwZWQiLCJ0aW1lciIsIiRidXR0b24iLCJzZXQiLCJrZXlwcmVzcyIsImhpZGRlbiIsImZuTWFwIiwidmFsIiwiRnVsbFNjcmVlbiIsInJlcXVlc3QiLCJlbGVtIiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJBTExPV19LRVlCT0FSRF9JTlBVVCIsImV4aXQiLCJleGl0RnVsbHNjcmVlbiIsImlzRnVsbHNjcmVlbiIsIkJvb2xlYW4iLCJmdWxsc2NyZWVuRWxlbWVudCIsImZ1bGxzY3JlZW5FbmFibGVkIiwiZnVsbHNjcmVlbmNoYW5nZSIsIkZhbmN5VGh1bWJzIiwiJGdyaWQiLCIkbGlzdCIsIlRodW1icyIsInNlY29uZCIsImNyZWF0ZSIsImxpc3QiLCJ0aHVtYldpZHRoIiwidGh1bWJIZWlnaHQiLCJ3aWR0aFJhdGlvIiwiaGVpZ2h0UmF0aW8iLCJzaGFyZSIsImVzY2FwZUh0bWwiLCJzdHJpbmciLCJlbnRpdHlNYXAiLCJTdHJpbmciLCJzIiwibG9jYXRpb24iLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0ZXh0IiwiaHJlZiIsImVzY2FwZVNlbGVjdG9yIiwic2VsIiwicmNzc2VzY2FwZSIsImZjc3Nlc2NhcGUiLCJjaCIsImFzQ29kZVBvaW50IiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwic2hvdWxkQ3JlYXRlSGlzdG9yeSIsImN1cnJlbnRIYXNoIiwidGltZXJJRCIsInBhcnNlVXJsIiwicG9wIiwiZ2FsbGVyeSIsInRyaWdnZXJGcm9tVXJsIiwiZ2V0R2FsbGVyeUlEIiwib3JpZ0hhc2giLCJoaXN0b3J5IiwicGF0aG5hbWUiLCJzZWFyY2giLCJyZXBsYWNlU3RhdGUiLCJwcmV2VGltZSIsImN1cnJUaW1lIiwiZGVsdGFZIiwiZGVsdGFYIiwid2hlZWxEZWx0YSIsImRldGFpbCIsImhhbmRsZVByZWxvYWRlciIsImZhZGVPdXQiLCJoZWFkZXJTdHlsZSIsIndpbmRvd3BvcyIsInNpdGVIZWFkZXIiLCJzaXRlSGVhZGVySGVpZ2h0Iiwic2Nyb2xsTGluayIsImZhZGVJbiIsInNsaWRlVG9nZ2xlIiwiJHRoaXMiLCJmaW5hbERhdGUiLCJjb3VudGRvd24iLCJzdHJmdGltZSIsImFwcGVhciIsIiR0IiwiciIsImNvdW50TnVtIiwiZWFzaW5nIiwic3RlcCIsImFjY1kiLCJUb3VjaFNwaW4iLCJ2ZXJ0aWNhbGJ1dHRvbnMiLCJvd2xDYXJvdXNlbCIsIm5hdiIsInNtYXJ0U3BlZWQiLCJuYXZUZXh0IiwicmVzcG9uc2l2ZSIsIm91dGVyQm94Iiwic2xpZGVVcCIsInNsaWRlRG93biIsInNvcnRhYmxlTWFzb25yeSIsIndpbkRvdyIsIiRmaWx0ZXIiLCJpc290b3BlIiwibWFzb25yeSIsImNvbHVtbldpZHRoIiwiYW5pbWF0aW9uT3B0aW9ucyIsInF1ZXVlIiwiZXJyIiwiZmlsdGVySXRlbUEiLCJvcGVuRWZmZWN0IiwiY2xvc2VFZmZlY3QiLCJoZWxwZXJzIiwidmFsaWRhdGUiLCJydWxlcyIsImZpcnN0bmFtZSIsInJlcXVpcmVkIiwiZW1haWwiLCJwaG9uZSIsInN1YmplY3QiLCJtZXNzYWdlIiwibWl4SXRVcCIsIndvdyIsIldPVyIsImJveENsYXNzIiwiYW5pbWF0ZUNsYXNzIiwibGl2ZSIsInJlcXVpcmUiLCJnbG9iYWwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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TUFBRCxDQUFELENBQVU3RSxFQUFWLENBQWEsUUFBYixFQUF1QixZQUFXO0FBQ2pDeXhCLGVBQVc7QUFDWCxHQUZEO0FBSUQ7Ozs7QUFJQ3RpQixHQUFDLENBQUN0SyxNQUFELENBQUQsQ0FBVTdFLEVBQVYsQ0FBYSxNQUFiLEVBQXFCLFlBQVc7QUFDL0J1eEIsbUJBQWU7QUFDZjhCLG1CQUFlO0FBQ2YsR0FIRDtBQUtBLENBbGVELEVBa2VHeHVCLG9DQWxlSCxFOzs7Ozs7Ozs7Ozs7QUNBQW13Qix5RUFBTyxDQUFDLGlGQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMscUhBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxpSEFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLHlIQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMseUVBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyw2RkFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLG1GQUFELENBQVA7O0FBRUEsSUFBTTdsQixDQUFDLEdBQUd6UixNQUFNLEdBQUdzM0IsbUJBQU8sQ0FBQyxvREFBRCxDQUExQjs7QUFDQUMsTUFBTSxDQUFDOWxCLENBQVAsR0FBVzhsQixNQUFNLENBQUN2M0IsTUFBUCxHQUFnQnlSLENBQTNCOztBQUVBNmxCLG1CQUFPLENBQUMsd0RBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx5RkFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLHFGQUFELENBQVAsQyxDQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FBLG1CQUFPLENBQUMsdUVBQUQsQ0FBUCxDLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Qjs7Ozs7Ozs7Ozs7O0FDckNBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6InNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInNpdGVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvUmVzb3VyY2VzL3ZpZXdzL3RoZW1lL2Fzc2V0cy9tYWluLmpzXCIsXCJ2ZW5kb3JzfnNpdGVcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKiFcclxuICogQm9vdHN0cmFwIHYzLjMuNyAoaHR0cDovL2dldGJvb3RzdHJhcC5jb20pXHJcbiAqIENvcHlyaWdodCAyMDExLTIwMTYgVHdpdHRlciwgSW5jLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICovXHJcbmlmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBqUXVlcnkpdGhyb3cgbmV3IEVycm9yKFwiQm9vdHN0cmFwJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnlcIik7K2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO3ZhciBiPWEuZm4uanF1ZXJ5LnNwbGl0KFwiIFwiKVswXS5zcGxpdChcIi5cIik7aWYoYlswXTwyJiZiWzFdPDl8fDE9PWJbMF0mJjk9PWJbMV0mJmJbMl08MXx8YlswXT4zKXRocm93IG5ldyBFcnJvcihcIkJvb3RzdHJhcCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5IHZlcnNpb24gMS45LjEgb3IgaGlnaGVyLCBidXQgbG93ZXIgdGhhbiB2ZXJzaW9uIDRcIil9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYm9vdHN0cmFwXCIpLGI9e1dlYmtpdFRyYW5zaXRpb246XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsTW96VHJhbnNpdGlvbjpcInRyYW5zaXRpb25lbmRcIixPVHJhbnNpdGlvbjpcIm9UcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kXCIsdHJhbnNpdGlvbjpcInRyYW5zaXRpb25lbmRcIn07Zm9yKHZhciBjIGluIGIpaWYodm9pZCAwIT09YS5zdHlsZVtjXSlyZXR1cm57ZW5kOmJbY119O3JldHVybiExfWEuZm4uZW11bGF0ZVRyYW5zaXRpb25FbmQ9ZnVuY3Rpb24oYil7dmFyIGM9ITEsZD10aGlzO2EodGhpcykub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZnVuY3Rpb24oKXtjPSEwfSk7dmFyIGU9ZnVuY3Rpb24oKXtjfHxhKGQpLnRyaWdnZXIoYS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kKX07cmV0dXJuIHNldFRpbWVvdXQoZSxiKSx0aGlzfSxhKGZ1bmN0aW9uKCl7YS5zdXBwb3J0LnRyYW5zaXRpb249YigpLGEuc3VwcG9ydC50cmFuc2l0aW9uJiYoYS5ldmVudC5zcGVjaWFsLmJzVHJhbnNpdGlvbkVuZD17YmluZFR5cGU6YS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLGRlbGVnYXRlVHlwZTphLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsaGFuZGxlOmZ1bmN0aW9uKGIpe2lmKGEoYi50YXJnZXQpLmlzKHRoaXMpKXJldHVybiBiLmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGU9Yy5kYXRhKFwiYnMuYWxlcnRcIik7ZXx8Yy5kYXRhKFwiYnMuYWxlcnRcIixlPW5ldyBkKHRoaXMpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXS5jYWxsKGMpfSl9dmFyIGM9J1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXScsZD1mdW5jdGlvbihiKXthKGIpLm9uKFwiY2xpY2tcIixjLHRoaXMuY2xvc2UpfTtkLlZFUlNJT049XCIzLjMuN1wiLGQuVFJBTlNJVElPTl9EVVJBVElPTj0xNTAsZC5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oYil7ZnVuY3Rpb24gYygpe2cuZGV0YWNoKCkudHJpZ2dlcihcImNsb3NlZC5icy5hbGVydFwiKS5yZW1vdmUoKX12YXIgZT1hKHRoaXMpLGY9ZS5hdHRyKFwiZGF0YS10YXJnZXRcIik7Znx8KGY9ZS5hdHRyKFwiaHJlZlwiKSxmPWYmJmYucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLyxcIlwiKSk7dmFyIGc9YShcIiNcIj09PWY/W106Zik7YiYmYi5wcmV2ZW50RGVmYXVsdCgpLGcubGVuZ3RofHwoZz1lLmNsb3Nlc3QoXCIuYWxlcnRcIikpLGcudHJpZ2dlcihiPWEuRXZlbnQoXCJjbG9zZS5icy5hbGVydFwiKSksYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8KGcucmVtb3ZlQ2xhc3MoXCJpblwiKSxhLnN1cHBvcnQudHJhbnNpdGlvbiYmZy5oYXNDbGFzcyhcImZhZGVcIik/Zy5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixjKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChkLlRSQU5TSVRJT05fRFVSQVRJT04pOmMoKSl9O3ZhciBlPWEuZm4uYWxlcnQ7YS5mbi5hbGVydD1iLGEuZm4uYWxlcnQuQ29uc3RydWN0b3I9ZCxhLmZuLmFsZXJ0Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5hbGVydD1lLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuYWxlcnQuZGF0YS1hcGlcIixjLGQucHJvdG90eXBlLmNsb3NlKX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLmJ1dHRvblwiKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBiJiZiO2V8fGQuZGF0YShcImJzLmJ1dHRvblwiLGU9bmV3IGModGhpcyxmKSksXCJ0b2dnbGVcIj09Yj9lLnRvZ2dsZSgpOmImJmUuc2V0U3RhdGUoYil9KX12YXIgYz1mdW5jdGlvbihiLGQpe3RoaXMuJGVsZW1lbnQ9YShiKSx0aGlzLm9wdGlvbnM9YS5leHRlbmQoe30sYy5ERUZBVUxUUyxkKSx0aGlzLmlzTG9hZGluZz0hMX07Yy5WRVJTSU9OPVwiMy4zLjdcIixjLkRFRkFVTFRTPXtsb2FkaW5nVGV4dDpcImxvYWRpbmcuLi5cIn0sYy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYil7dmFyIGM9XCJkaXNhYmxlZFwiLGQ9dGhpcy4kZWxlbWVudCxlPWQuaXMoXCJpbnB1dFwiKT9cInZhbFwiOlwiaHRtbFwiLGY9ZC5kYXRhKCk7Yis9XCJUZXh0XCIsbnVsbD09Zi5yZXNldFRleHQmJmQuZGF0YShcInJlc2V0VGV4dFwiLGRbZV0oKSksc2V0VGltZW91dChhLnByb3h5KGZ1bmN0aW9uKCl7ZFtlXShudWxsPT1mW2JdP3RoaXMub3B0aW9uc1tiXTpmW2JdKSxcImxvYWRpbmdUZXh0XCI9PWI/KHRoaXMuaXNMb2FkaW5nPSEwLGQuYWRkQ2xhc3MoYykuYXR0cihjLGMpLnByb3AoYywhMCkpOnRoaXMuaXNMb2FkaW5nJiYodGhpcy5pc0xvYWRpbmc9ITEsZC5yZW1vdmVDbGFzcyhjKS5yZW1vdmVBdHRyKGMpLnByb3AoYywhMSkpfSx0aGlzKSwwKX0sYy5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKCl7dmFyIGE9ITAsYj10aGlzLiRlbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0nKTtpZihiLmxlbmd0aCl7dmFyIGM9dGhpcy4kZWxlbWVudC5maW5kKFwiaW5wdXRcIik7XCJyYWRpb1wiPT1jLnByb3AoXCJ0eXBlXCIpPyhjLnByb3AoXCJjaGVja2VkXCIpJiYoYT0hMSksYi5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSx0aGlzLiRlbGVtZW50LmFkZENsYXNzKFwiYWN0aXZlXCIpKTpcImNoZWNrYm94XCI9PWMucHJvcChcInR5cGVcIikmJihjLnByb3AoXCJjaGVja2VkXCIpIT09dGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImFjdGl2ZVwiKSYmKGE9ITEpLHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIikpLGMucHJvcChcImNoZWNrZWRcIix0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiYWN0aXZlXCIpKSxhJiZjLnRyaWdnZXIoXCJjaGFuZ2VcIil9ZWxzZSB0aGlzLiRlbGVtZW50LmF0dHIoXCJhcmlhLXByZXNzZWRcIiwhdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImFjdGl2ZVwiKSksdGhpcy4kZWxlbWVudC50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKX07dmFyIGQ9YS5mbi5idXR0b247YS5mbi5idXR0b249YixhLmZuLmJ1dHRvbi5Db25zdHJ1Y3Rvcj1jLGEuZm4uYnV0dG9uLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5idXR0b249ZCx0aGlzfSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmJ1dHRvbi5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGVePVwiYnV0dG9uXCJdJyxmdW5jdGlvbihjKXt2YXIgZD1hKGMudGFyZ2V0KS5jbG9zZXN0KFwiLmJ0blwiKTtiLmNhbGwoZCxcInRvZ2dsZVwiKSxhKGMudGFyZ2V0KS5pcygnaW5wdXRbdHlwZT1cInJhZGlvXCJdLCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKXx8KGMucHJldmVudERlZmF1bHQoKSxkLmlzKFwiaW5wdXQsYnV0dG9uXCIpP2QudHJpZ2dlcihcImZvY3VzXCIpOmQuZmluZChcImlucHV0OnZpc2libGUsYnV0dG9uOnZpc2libGVcIikuZmlyc3QoKS50cmlnZ2VyKFwiZm9jdXNcIikpfSkub24oXCJmb2N1cy5icy5idXR0b24uZGF0YS1hcGkgYmx1ci5icy5idXR0b24uZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsZnVuY3Rpb24oYil7YShiLnRhcmdldCkuY2xvc2VzdChcIi5idG5cIikudG9nZ2xlQ2xhc3MoXCJmb2N1c1wiLC9eZm9jdXMoaW4pPyQvLnRlc3QoYi50eXBlKSl9KX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLmNhcm91c2VsXCIpLGY9YS5leHRlbmQoe30sYy5ERUZBVUxUUyxkLmRhdGEoKSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksZz1cInN0cmluZ1wiPT10eXBlb2YgYj9iOmYuc2xpZGU7ZXx8ZC5kYXRhKFwiYnMuY2Fyb3VzZWxcIixlPW5ldyBjKHRoaXMsZikpLFwibnVtYmVyXCI9PXR5cGVvZiBiP2UudG8oYik6Zz9lW2ddKCk6Zi5pbnRlcnZhbCYmZS5wYXVzZSgpLmN5Y2xlKCl9KX12YXIgYz1mdW5jdGlvbihiLGMpe3RoaXMuJGVsZW1lbnQ9YShiKSx0aGlzLiRpbmRpY2F0b3JzPXRoaXMuJGVsZW1lbnQuZmluZChcIi5jYXJvdXNlbC1pbmRpY2F0b3JzXCIpLHRoaXMub3B0aW9ucz1jLHRoaXMucGF1c2VkPW51bGwsdGhpcy5zbGlkaW5nPW51bGwsdGhpcy5pbnRlcnZhbD1udWxsLHRoaXMuJGFjdGl2ZT1udWxsLHRoaXMuJGl0ZW1zPW51bGwsdGhpcy5vcHRpb25zLmtleWJvYXJkJiZ0aGlzLiRlbGVtZW50Lm9uKFwia2V5ZG93bi5icy5jYXJvdXNlbFwiLGEucHJveHkodGhpcy5rZXlkb3duLHRoaXMpKSxcImhvdmVyXCI9PXRoaXMub3B0aW9ucy5wYXVzZSYmIShcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSYmdGhpcy4kZWxlbWVudC5vbihcIm1vdXNlZW50ZXIuYnMuY2Fyb3VzZWxcIixhLnByb3h5KHRoaXMucGF1c2UsdGhpcykpLm9uKFwibW91c2VsZWF2ZS5icy5jYXJvdXNlbFwiLGEucHJveHkodGhpcy5jeWNsZSx0aGlzKSl9O2MuVkVSU0lPTj1cIjMuMy43XCIsYy5UUkFOU0lUSU9OX0RVUkFUSU9OPTYwMCxjLkRFRkFVTFRTPXtpbnRlcnZhbDo1ZTMscGF1c2U6XCJob3ZlclwiLHdyYXA6ITAsa2V5Ym9hcmQ6ITB9LGMucHJvdG90eXBlLmtleWRvd249ZnVuY3Rpb24oYSl7aWYoIS9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoYS50YXJnZXQudGFnTmFtZSkpe3N3aXRjaChhLndoaWNoKXtjYXNlIDM3OnRoaXMucHJldigpO2JyZWFrO2Nhc2UgMzk6dGhpcy5uZXh0KCk7YnJlYWs7ZGVmYXVsdDpyZXR1cm59YS5wcmV2ZW50RGVmYXVsdCgpfX0sYy5wcm90b3R5cGUuY3ljbGU9ZnVuY3Rpb24oYil7cmV0dXJuIGJ8fCh0aGlzLnBhdXNlZD0hMSksdGhpcy5pbnRlcnZhbCYmY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKSx0aGlzLm9wdGlvbnMuaW50ZXJ2YWwmJiF0aGlzLnBhdXNlZCYmKHRoaXMuaW50ZXJ2YWw9c2V0SW50ZXJ2YWwoYS5wcm94eSh0aGlzLm5leHQsdGhpcyksdGhpcy5vcHRpb25zLmludGVydmFsKSksdGhpc30sYy5wcm90b3R5cGUuZ2V0SXRlbUluZGV4PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLiRpdGVtcz1hLnBhcmVudCgpLmNoaWxkcmVuKFwiLml0ZW1cIiksdGhpcy4kaXRlbXMuaW5kZXgoYXx8dGhpcy4kYWN0aXZlKX0sYy5wcm90b3R5cGUuZ2V0SXRlbUZvckRpcmVjdGlvbj1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuZ2V0SXRlbUluZGV4KGIpLGQ9XCJwcmV2XCI9PWEmJjA9PT1jfHxcIm5leHRcIj09YSYmYz09dGhpcy4kaXRlbXMubGVuZ3RoLTE7aWYoZCYmIXRoaXMub3B0aW9ucy53cmFwKXJldHVybiBiO3ZhciBlPVwicHJldlwiPT1hPy0xOjEsZj0oYytlKSV0aGlzLiRpdGVtcy5sZW5ndGg7cmV0dXJuIHRoaXMuJGl0ZW1zLmVxKGYpfSxjLnByb3RvdHlwZS50bz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9dGhpcy5nZXRJdGVtSW5kZXgodGhpcy4kYWN0aXZlPXRoaXMuJGVsZW1lbnQuZmluZChcIi5pdGVtLmFjdGl2ZVwiKSk7aWYoIShhPnRoaXMuJGl0ZW1zLmxlbmd0aC0xfHxhPDApKXJldHVybiB0aGlzLnNsaWRpbmc/dGhpcy4kZWxlbWVudC5vbmUoXCJzbGlkLmJzLmNhcm91c2VsXCIsZnVuY3Rpb24oKXtiLnRvKGEpfSk6Yz09YT90aGlzLnBhdXNlKCkuY3ljbGUoKTp0aGlzLnNsaWRlKGE+Yz9cIm5leHRcIjpcInByZXZcIix0aGlzLiRpdGVtcy5lcShhKSl9LGMucHJvdG90eXBlLnBhdXNlPWZ1bmN0aW9uKGIpe3JldHVybiBifHwodGhpcy5wYXVzZWQ9ITApLHRoaXMuJGVsZW1lbnQuZmluZChcIi5uZXh0LCAucHJldlwiKS5sZW5ndGgmJmEuc3VwcG9ydC50cmFuc2l0aW9uJiYodGhpcy4kZWxlbWVudC50cmlnZ2VyKGEuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCksdGhpcy5jeWNsZSghMCkpLHRoaXMuaW50ZXJ2YWw9Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKSx0aGlzfSxjLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7aWYoIXRoaXMuc2xpZGluZylyZXR1cm4gdGhpcy5zbGlkZShcIm5leHRcIil9LGMucHJvdG90eXBlLnByZXY9ZnVuY3Rpb24oKXtpZighdGhpcy5zbGlkaW5nKXJldHVybiB0aGlzLnNsaWRlKFwicHJldlwiKX0sYy5wcm90b3R5cGUuc2xpZGU9ZnVuY3Rpb24oYixkKXt2YXIgZT10aGlzLiRlbGVtZW50LmZpbmQoXCIuaXRlbS5hY3RpdmVcIiksZj1kfHx0aGlzLmdldEl0ZW1Gb3JEaXJlY3Rpb24oYixlKSxnPXRoaXMuaW50ZXJ2YWwsaD1cIm5leHRcIj09Yj9cImxlZnRcIjpcInJpZ2h0XCIsaT10aGlzO2lmKGYuaGFzQ2xhc3MoXCJhY3RpdmVcIikpcmV0dXJuIHRoaXMuc2xpZGluZz0hMTt2YXIgaj1mWzBdLGs9YS5FdmVudChcInNsaWRlLmJzLmNhcm91c2VsXCIse3JlbGF0ZWRUYXJnZXQ6aixkaXJlY3Rpb246aH0pO2lmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihrKSwhay5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7aWYodGhpcy5zbGlkaW5nPSEwLGcmJnRoaXMucGF1c2UoKSx0aGlzLiRpbmRpY2F0b3JzLmxlbmd0aCl7dGhpcy4kaW5kaWNhdG9ycy5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTt2YXIgbD1hKHRoaXMuJGluZGljYXRvcnMuY2hpbGRyZW4oKVt0aGlzLmdldEl0ZW1JbmRleChmKV0pO2wmJmwuYWRkQ2xhc3MoXCJhY3RpdmVcIil9dmFyIG09YS5FdmVudChcInNsaWQuYnMuY2Fyb3VzZWxcIix7cmVsYXRlZFRhcmdldDpqLGRpcmVjdGlvbjpofSk7cmV0dXJuIGEuc3VwcG9ydC50cmFuc2l0aW9uJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwic2xpZGVcIik/KGYuYWRkQ2xhc3MoYiksZlswXS5vZmZzZXRXaWR0aCxlLmFkZENsYXNzKGgpLGYuYWRkQ2xhc3MoaCksZS5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixmdW5jdGlvbigpe2YucmVtb3ZlQ2xhc3MoW2IsaF0uam9pbihcIiBcIikpLmFkZENsYXNzKFwiYWN0aXZlXCIpLGUucmVtb3ZlQ2xhc3MoW1wiYWN0aXZlXCIsaF0uam9pbihcIiBcIikpLGkuc2xpZGluZz0hMSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS4kZWxlbWVudC50cmlnZ2VyKG0pfSwwKX0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTikpOihlLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLGYuYWRkQ2xhc3MoXCJhY3RpdmVcIiksdGhpcy5zbGlkaW5nPSExLHRoaXMuJGVsZW1lbnQudHJpZ2dlcihtKSksZyYmdGhpcy5jeWNsZSgpLHRoaXN9fTt2YXIgZD1hLmZuLmNhcm91c2VsO2EuZm4uY2Fyb3VzZWw9YixhLmZuLmNhcm91c2VsLkNvbnN0cnVjdG9yPWMsYS5mbi5jYXJvdXNlbC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uY2Fyb3VzZWw9ZCx0aGlzfTt2YXIgZT1mdW5jdGlvbihjKXt2YXIgZCxlPWEodGhpcyksZj1hKGUuYXR0cihcImRhdGEtdGFyZ2V0XCIpfHwoZD1lLmF0dHIoXCJocmVmXCIpKSYmZC5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLFwiXCIpKTtpZihmLmhhc0NsYXNzKFwiY2Fyb3VzZWxcIikpe3ZhciBnPWEuZXh0ZW5kKHt9LGYuZGF0YSgpLGUuZGF0YSgpKSxoPWUuYXR0cihcImRhdGEtc2xpZGUtdG9cIik7aCYmKGcuaW50ZXJ2YWw9ITEpLGIuY2FsbChmLGcpLGgmJmYuZGF0YShcImJzLmNhcm91c2VsXCIpLnRvKGgpLGMucHJldmVudERlZmF1bHQoKX19O2EoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuY2Fyb3VzZWwuZGF0YS1hcGlcIixcIltkYXRhLXNsaWRlXVwiLGUpLm9uKFwiY2xpY2suYnMuY2Fyb3VzZWwuZGF0YS1hcGlcIixcIltkYXRhLXNsaWRlLXRvXVwiLGUpLGEod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe2EoJ1tkYXRhLXJpZGU9XCJjYXJvdXNlbFwiXScpLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpO2IuY2FsbChjLGMuZGF0YSgpKX0pfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7dmFyIGMsZD1iLmF0dHIoXCJkYXRhLXRhcmdldFwiKXx8KGM9Yi5hdHRyKFwiaHJlZlwiKSkmJmMucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLyxcIlwiKTtyZXR1cm4gYShkKX1mdW5jdGlvbiBjKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGU9Yy5kYXRhKFwiYnMuY29sbGFwc2VcIiksZj1hLmV4dGVuZCh7fSxkLkRFRkFVTFRTLGMuZGF0YSgpLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKTshZSYmZi50b2dnbGUmJi9zaG93fGhpZGUvLnRlc3QoYikmJihmLnRvZ2dsZT0hMSksZXx8Yy5kYXRhKFwiYnMuY29sbGFwc2VcIixlPW5ldyBkKHRoaXMsZikpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdKCl9KX12YXIgZD1mdW5jdGlvbihiLGMpe3RoaXMuJGVsZW1lbnQ9YShiKSx0aGlzLm9wdGlvbnM9YS5leHRlbmQoe30sZC5ERUZBVUxUUyxjKSx0aGlzLiR0cmlnZ2VyPWEoJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2hyZWY9XCIjJytiLmlkKydcIl0sW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS10YXJnZXQ9XCIjJytiLmlkKydcIl0nKSx0aGlzLnRyYW5zaXRpb25pbmc9bnVsbCx0aGlzLm9wdGlvbnMucGFyZW50P3RoaXMuJHBhcmVudD10aGlzLmdldFBhcmVudCgpOnRoaXMuYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuJGVsZW1lbnQsdGhpcy4kdHJpZ2dlciksdGhpcy5vcHRpb25zLnRvZ2dsZSYmdGhpcy50b2dnbGUoKX07ZC5WRVJTSU9OPVwiMy4zLjdcIixkLlRSQU5TSVRJT05fRFVSQVRJT049MzUwLGQuREVGQVVMVFM9e3RvZ2dsZTohMH0sZC5wcm90b3R5cGUuZGltZW5zaW9uPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcIndpZHRoXCIpO3JldHVybiBhP1wid2lkdGhcIjpcImhlaWdodFwifSxkLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKCl7aWYoIXRoaXMudHJhbnNpdGlvbmluZyYmIXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJpblwiKSl7dmFyIGIsZT10aGlzLiRwYXJlbnQmJnRoaXMuJHBhcmVudC5jaGlsZHJlbihcIi5wYW5lbFwiKS5jaGlsZHJlbihcIi5pbiwgLmNvbGxhcHNpbmdcIik7aWYoIShlJiZlLmxlbmd0aCYmKGI9ZS5kYXRhKFwiYnMuY29sbGFwc2VcIiksYiYmYi50cmFuc2l0aW9uaW5nKSkpe3ZhciBmPWEuRXZlbnQoXCJzaG93LmJzLmNvbGxhcHNlXCIpO2lmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihmKSwhZi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7ZSYmZS5sZW5ndGgmJihjLmNhbGwoZSxcImhpZGVcIiksYnx8ZS5kYXRhKFwiYnMuY29sbGFwc2VcIixudWxsKSk7dmFyIGc9dGhpcy5kaW1lbnNpb24oKTt0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiY29sbGFwc2VcIikuYWRkQ2xhc3MoXCJjb2xsYXBzaW5nXCIpW2ddKDApLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITApLHRoaXMuJHRyaWdnZXIucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZWRcIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMCksdGhpcy50cmFuc2l0aW9uaW5nPTE7dmFyIGg9ZnVuY3Rpb24oKXt0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiY29sbGFwc2luZ1wiKS5hZGRDbGFzcyhcImNvbGxhcHNlIGluXCIpW2ddKFwiXCIpLHRoaXMudHJhbnNpdGlvbmluZz0wLHRoaXMuJGVsZW1lbnQudHJpZ2dlcihcInNob3duLmJzLmNvbGxhcHNlXCIpfTtpZighYS5zdXBwb3J0LnRyYW5zaXRpb24pcmV0dXJuIGguY2FsbCh0aGlzKTt2YXIgaT1hLmNhbWVsQ2FzZShbXCJzY3JvbGxcIixnXS5qb2luKFwiLVwiKSk7dGhpcy4kZWxlbWVudC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixhLnByb3h5KGgsdGhpcykpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGQuVFJBTlNJVElPTl9EVVJBVElPTilbZ10odGhpcy4kZWxlbWVudFswXVtpXSl9fX19LGQucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24oKXtpZighdGhpcy50cmFuc2l0aW9uaW5nJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiaW5cIikpe3ZhciBiPWEuRXZlbnQoXCJoaWRlLmJzLmNvbGxhcHNlXCIpO2lmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihiKSwhYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7dmFyIGM9dGhpcy5kaW1lbnNpb24oKTt0aGlzLiRlbGVtZW50W2NdKHRoaXMuJGVsZW1lbnRbY10oKSlbMF0ub2Zmc2V0SGVpZ2h0LHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoXCJjb2xsYXBzaW5nXCIpLnJlbW92ZUNsYXNzKFwiY29sbGFwc2UgaW5cIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMSksdGhpcy4kdHJpZ2dlci5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCExKSx0aGlzLnRyYW5zaXRpb25pbmc9MTt2YXIgZT1mdW5jdGlvbigpe3RoaXMudHJhbnNpdGlvbmluZz0wLHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzaW5nXCIpLmFkZENsYXNzKFwiY29sbGFwc2VcIikudHJpZ2dlcihcImhpZGRlbi5icy5jb2xsYXBzZVwiKX07cmV0dXJuIGEuc3VwcG9ydC50cmFuc2l0aW9uP3ZvaWQgdGhpcy4kZWxlbWVudFtjXSgwKS5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixhLnByb3h5KGUsdGhpcykpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGQuVFJBTlNJVElPTl9EVVJBVElPTik6ZS5jYWxsKHRoaXMpfX19LGQucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbigpe3RoaXNbdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImluXCIpP1wiaGlkZVwiOlwic2hvd1wiXSgpfSxkLnByb3RvdHlwZS5nZXRQYXJlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gYSh0aGlzLm9wdGlvbnMucGFyZW50KS5maW5kKCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXBhcmVudD1cIicrdGhpcy5vcHRpb25zLnBhcmVudCsnXCJdJykuZWFjaChhLnByb3h5KGZ1bmN0aW9uKGMsZCl7dmFyIGU9YShkKTt0aGlzLmFkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhiKGUpLGUpfSx0aGlzKSkuZW5kKCl9LGQucHJvdG90eXBlLmFkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcz1mdW5jdGlvbihhLGIpe3ZhciBjPWEuaGFzQ2xhc3MoXCJpblwiKTthLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsYyksYi50b2dnbGVDbGFzcyhcImNvbGxhcHNlZFwiLCFjKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLGMpfTt2YXIgZT1hLmZuLmNvbGxhcHNlO2EuZm4uY29sbGFwc2U9YyxhLmZuLmNvbGxhcHNlLkNvbnN0cnVjdG9yPWQsYS5mbi5jb2xsYXBzZS5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uY29sbGFwc2U9ZSx0aGlzfSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmNvbGxhcHNlLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJyxmdW5jdGlvbihkKXt2YXIgZT1hKHRoaXMpO2UuYXR0cihcImRhdGEtdGFyZ2V0XCIpfHxkLnByZXZlbnREZWZhdWx0KCk7dmFyIGY9YihlKSxnPWYuZGF0YShcImJzLmNvbGxhcHNlXCIpLGg9Zz9cInRvZ2dsZVwiOmUuZGF0YSgpO2MuY2FsbChmLGgpfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7dmFyIGM9Yi5hdHRyKFwiZGF0YS10YXJnZXRcIik7Y3x8KGM9Yi5hdHRyKFwiaHJlZlwiKSxjPWMmJi8jW0EtWmEtel0vLnRlc3QoYykmJmMucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLyxcIlwiKSk7dmFyIGQ9YyYmYShjKTtyZXR1cm4gZCYmZC5sZW5ndGg/ZDpiLnBhcmVudCgpfWZ1bmN0aW9uIGMoYyl7YyYmMz09PWMud2hpY2h8fChhKGUpLnJlbW92ZSgpLGEoZikuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1iKGQpLGY9e3JlbGF0ZWRUYXJnZXQ6dGhpc307ZS5oYXNDbGFzcyhcIm9wZW5cIikmJihjJiZcImNsaWNrXCI9PWMudHlwZSYmL2lucHV0fHRleHRhcmVhL2kudGVzdChjLnRhcmdldC50YWdOYW1lKSYmYS5jb250YWlucyhlWzBdLGMudGFyZ2V0KXx8KGUudHJpZ2dlcihjPWEuRXZlbnQoXCJoaWRlLmJzLmRyb3Bkb3duXCIsZikpLGMuaXNEZWZhdWx0UHJldmVudGVkKCl8fChkLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJmYWxzZVwiKSxlLnJlbW92ZUNsYXNzKFwib3BlblwiKS50cmlnZ2VyKGEuRXZlbnQoXCJoaWRkZW4uYnMuZHJvcGRvd25cIixmKSkpKSl9KSl9ZnVuY3Rpb24gZChiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKSxkPWMuZGF0YShcImJzLmRyb3Bkb3duXCIpO2R8fGMuZGF0YShcImJzLmRyb3Bkb3duXCIsZD1uZXcgZyh0aGlzKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmRbYl0uY2FsbChjKX0pfXZhciBlPVwiLmRyb3Bkb3duLWJhY2tkcm9wXCIsZj0nW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nLGc9ZnVuY3Rpb24oYil7YShiKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duXCIsdGhpcy50b2dnbGUpfTtnLlZFUlNJT049XCIzLjMuN1wiLGcucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbihkKXt2YXIgZT1hKHRoaXMpO2lmKCFlLmlzKFwiLmRpc2FibGVkLCA6ZGlzYWJsZWRcIikpe3ZhciBmPWIoZSksZz1mLmhhc0NsYXNzKFwib3BlblwiKTtpZihjKCksIWcpe1wib250b3VjaHN0YXJ0XCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQmJiFmLmNsb3Nlc3QoXCIubmF2YmFyLW5hdlwiKS5sZW5ndGgmJmEoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuYWRkQ2xhc3MoXCJkcm9wZG93bi1iYWNrZHJvcFwiKS5pbnNlcnRBZnRlcihhKHRoaXMpKS5vbihcImNsaWNrXCIsYyk7dmFyIGg9e3JlbGF0ZWRUYXJnZXQ6dGhpc307aWYoZi50cmlnZ2VyKGQ9YS5FdmVudChcInNob3cuYnMuZHJvcGRvd25cIixoKSksZC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSlyZXR1cm47ZS50cmlnZ2VyKFwiZm9jdXNcIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIixcInRydWVcIiksZi50b2dnbGVDbGFzcyhcIm9wZW5cIikudHJpZ2dlcihhLkV2ZW50KFwic2hvd24uYnMuZHJvcGRvd25cIixoKSl9cmV0dXJuITF9fSxnLnByb3RvdHlwZS5rZXlkb3duPWZ1bmN0aW9uKGMpe2lmKC8oMzh8NDB8Mjd8MzIpLy50ZXN0KGMud2hpY2gpJiYhL2lucHV0fHRleHRhcmVhL2kudGVzdChjLnRhcmdldC50YWdOYW1lKSl7dmFyIGQ9YSh0aGlzKTtpZihjLnByZXZlbnREZWZhdWx0KCksYy5zdG9wUHJvcGFnYXRpb24oKSwhZC5pcyhcIi5kaXNhYmxlZCwgOmRpc2FibGVkXCIpKXt2YXIgZT1iKGQpLGc9ZS5oYXNDbGFzcyhcIm9wZW5cIik7aWYoIWcmJjI3IT1jLndoaWNofHxnJiYyNz09Yy53aGljaClyZXR1cm4gMjc9PWMud2hpY2gmJmUuZmluZChmKS50cmlnZ2VyKFwiZm9jdXNcIiksZC50cmlnZ2VyKFwiY2xpY2tcIik7dmFyIGg9XCIgbGk6bm90KC5kaXNhYmxlZCk6dmlzaWJsZSBhXCIsaT1lLmZpbmQoXCIuZHJvcGRvd24tbWVudVwiK2gpO2lmKGkubGVuZ3RoKXt2YXIgaj1pLmluZGV4KGMudGFyZ2V0KTszOD09Yy53aGljaCYmaj4wJiZqLS0sNDA9PWMud2hpY2gmJmo8aS5sZW5ndGgtMSYmaisrLH5qfHwoaj0wKSxpLmVxKGopLnRyaWdnZXIoXCJmb2N1c1wiKX19fX07dmFyIGg9YS5mbi5kcm9wZG93bjthLmZuLmRyb3Bkb3duPWQsYS5mbi5kcm9wZG93bi5Db25zdHJ1Y3Rvcj1nLGEuZm4uZHJvcGRvd24ubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmRyb3Bkb3duPWgsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaVwiLGMpLm9uKFwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIixcIi5kcm9wZG93biBmb3JtXCIsZnVuY3Rpb24oYSl7YS5zdG9wUHJvcGFnYXRpb24oKX0pLm9uKFwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIixmLGcucHJvdG90eXBlLnRvZ2dsZSkub24oXCJrZXlkb3duLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsZixnLnByb3RvdHlwZS5rZXlkb3duKS5vbihcImtleWRvd24uYnMuZHJvcGRvd24uZGF0YS1hcGlcIixcIi5kcm9wZG93bi1tZW51XCIsZy5wcm90b3R5cGUua2V5ZG93bil9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYixkKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9YSh0aGlzKSxmPWUuZGF0YShcImJzLm1vZGFsXCIpLGc9YS5leHRlbmQoe30sYy5ERUZBVUxUUyxlLmRhdGEoKSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYik7Znx8ZS5kYXRhKFwiYnMubW9kYWxcIixmPW5ldyBjKHRoaXMsZykpLFwic3RyaW5nXCI9PXR5cGVvZiBiP2ZbYl0oZCk6Zy5zaG93JiZmLnNob3coZCl9KX12YXIgYz1mdW5jdGlvbihiLGMpe3RoaXMub3B0aW9ucz1jLHRoaXMuJGJvZHk9YShkb2N1bWVudC5ib2R5KSx0aGlzLiRlbGVtZW50PWEoYiksdGhpcy4kZGlhbG9nPXRoaXMuJGVsZW1lbnQuZmluZChcIi5tb2RhbC1kaWFsb2dcIiksdGhpcy4kYmFja2Ryb3A9bnVsbCx0aGlzLmlzU2hvd249bnVsbCx0aGlzLm9yaWdpbmFsQm9keVBhZD1udWxsLHRoaXMuc2Nyb2xsYmFyV2lkdGg9MCx0aGlzLmlnbm9yZUJhY2tkcm9wQ2xpY2s9ITEsdGhpcy5vcHRpb25zLnJlbW90ZSYmdGhpcy4kZWxlbWVudC5maW5kKFwiLm1vZGFsLWNvbnRlbnRcIikubG9hZCh0aGlzLm9wdGlvbnMucmVtb3RlLGEucHJveHkoZnVuY3Rpb24oKXt0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJsb2FkZWQuYnMubW9kYWxcIil9LHRoaXMpKX07Yy5WRVJTSU9OPVwiMy4zLjdcIixjLlRSQU5TSVRJT05fRFVSQVRJT049MzAwLGMuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTj0xNTAsYy5ERUZBVUxUUz17YmFja2Ryb3A6ITAsa2V5Ym9hcmQ6ITAsc2hvdzohMH0sYy5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmlzU2hvd24/dGhpcy5oaWRlKCk6dGhpcy5zaG93KGEpfSxjLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKGIpe3ZhciBkPXRoaXMsZT1hLkV2ZW50KFwic2hvdy5icy5tb2RhbFwiLHtyZWxhdGVkVGFyZ2V0OmJ9KTt0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSksdGhpcy5pc1Nob3dufHxlLmlzRGVmYXVsdFByZXZlbnRlZCgpfHwodGhpcy5pc1Nob3duPSEwLHRoaXMuY2hlY2tTY3JvbGxiYXIoKSx0aGlzLnNldFNjcm9sbGJhcigpLHRoaXMuJGJvZHkuYWRkQ2xhc3MoXCJtb2RhbC1vcGVuXCIpLHRoaXMuZXNjYXBlKCksdGhpcy5yZXNpemUoKSx0aGlzLiRlbGVtZW50Lm9uKFwiY2xpY2suZGlzbWlzcy5icy5tb2RhbFwiLCdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLGEucHJveHkodGhpcy5oaWRlLHRoaXMpKSx0aGlzLiRkaWFsb2cub24oXCJtb3VzZWRvd24uZGlzbWlzcy5icy5tb2RhbFwiLGZ1bmN0aW9uKCl7ZC4kZWxlbWVudC5vbmUoXCJtb3VzZXVwLmRpc21pc3MuYnMubW9kYWxcIixmdW5jdGlvbihiKXthKGIudGFyZ2V0KS5pcyhkLiRlbGVtZW50KSYmKGQuaWdub3JlQmFja2Ryb3BDbGljaz0hMCl9KX0pLHRoaXMuYmFja2Ryb3AoZnVuY3Rpb24oKXt2YXIgZT1hLnN1cHBvcnQudHJhbnNpdGlvbiYmZC4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIik7ZC4kZWxlbWVudC5wYXJlbnQoKS5sZW5ndGh8fGQuJGVsZW1lbnQuYXBwZW5kVG8oZC4kYm9keSksZC4kZWxlbWVudC5zaG93KCkuc2Nyb2xsVG9wKDApLGQuYWRqdXN0RGlhbG9nKCksZSYmZC4kZWxlbWVudFswXS5vZmZzZXRXaWR0aCxkLiRlbGVtZW50LmFkZENsYXNzKFwiaW5cIiksZC5lbmZvcmNlRm9jdXMoKTt2YXIgZj1hLkV2ZW50KFwic2hvd24uYnMubW9kYWxcIix7cmVsYXRlZFRhcmdldDpifSk7ZT9kLiRkaWFsb2cub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZnVuY3Rpb24oKXtkLiRlbGVtZW50LnRyaWdnZXIoXCJmb2N1c1wiKS50cmlnZ2VyKGYpfSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5UUkFOU0lUSU9OX0RVUkFUSU9OKTpkLiRlbGVtZW50LnRyaWdnZXIoXCJmb2N1c1wiKS50cmlnZ2VyKGYpfSkpfSxjLnByb3RvdHlwZS5oaWRlPWZ1bmN0aW9uKGIpe2ImJmIucHJldmVudERlZmF1bHQoKSxiPWEuRXZlbnQoXCJoaWRlLmJzLm1vZGFsXCIpLHRoaXMuJGVsZW1lbnQudHJpZ2dlcihiKSx0aGlzLmlzU2hvd24mJiFiLmlzRGVmYXVsdFByZXZlbnRlZCgpJiYodGhpcy5pc1Nob3duPSExLHRoaXMuZXNjYXBlKCksdGhpcy5yZXNpemUoKSxhKGRvY3VtZW50KS5vZmYoXCJmb2N1c2luLmJzLm1vZGFsXCIpLHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJpblwiKS5vZmYoXCJjbGljay5kaXNtaXNzLmJzLm1vZGFsXCIpLm9mZihcIm1vdXNldXAuZGlzbWlzcy5icy5tb2RhbFwiKSx0aGlzLiRkaWFsb2cub2ZmKFwibW91c2Vkb3duLmRpc21pc3MuYnMubW9kYWxcIiksYS5zdXBwb3J0LnRyYW5zaXRpb24mJnRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJmYWRlXCIpP3RoaXMuJGVsZW1lbnQub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsYS5wcm94eSh0aGlzLmhpZGVNb2RhbCx0aGlzKSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5UUkFOU0lUSU9OX0RVUkFUSU9OKTp0aGlzLmhpZGVNb2RhbCgpKX0sYy5wcm90b3R5cGUuZW5mb3JjZUZvY3VzPWZ1bmN0aW9uKCl7YShkb2N1bWVudCkub2ZmKFwiZm9jdXNpbi5icy5tb2RhbFwiKS5vbihcImZvY3VzaW4uYnMubW9kYWxcIixhLnByb3h5KGZ1bmN0aW9uKGEpe2RvY3VtZW50PT09YS50YXJnZXR8fHRoaXMuJGVsZW1lbnRbMF09PT1hLnRhcmdldHx8dGhpcy4kZWxlbWVudC5oYXMoYS50YXJnZXQpLmxlbmd0aHx8dGhpcy4kZWxlbWVudC50cmlnZ2VyKFwiZm9jdXNcIil9LHRoaXMpKX0sYy5wcm90b3R5cGUuZXNjYXBlPWZ1bmN0aW9uKCl7dGhpcy5pc1Nob3duJiZ0aGlzLm9wdGlvbnMua2V5Ym9hcmQ/dGhpcy4kZWxlbWVudC5vbihcImtleWRvd24uZGlzbWlzcy5icy5tb2RhbFwiLGEucHJveHkoZnVuY3Rpb24oYSl7Mjc9PWEud2hpY2gmJnRoaXMuaGlkZSgpfSx0aGlzKSk6dGhpcy5pc1Nob3dufHx0aGlzLiRlbGVtZW50Lm9mZihcImtleWRvd24uZGlzbWlzcy5icy5tb2RhbFwiKX0sYy5wcm90b3R5cGUucmVzaXplPWZ1bmN0aW9uKCl7dGhpcy5pc1Nob3duP2Eod2luZG93KS5vbihcInJlc2l6ZS5icy5tb2RhbFwiLGEucHJveHkodGhpcy5oYW5kbGVVcGRhdGUsdGhpcykpOmEod2luZG93KS5vZmYoXCJyZXNpemUuYnMubW9kYWxcIil9LGMucHJvdG90eXBlLmhpZGVNb2RhbD1mdW5jdGlvbigpe3ZhciBhPXRoaXM7dGhpcy4kZWxlbWVudC5oaWRlKCksdGhpcy5iYWNrZHJvcChmdW5jdGlvbigpe2EuJGJvZHkucmVtb3ZlQ2xhc3MoXCJtb2RhbC1vcGVuXCIpLGEucmVzZXRBZGp1c3RtZW50cygpLGEucmVzZXRTY3JvbGxiYXIoKSxhLiRlbGVtZW50LnRyaWdnZXIoXCJoaWRkZW4uYnMubW9kYWxcIil9KX0sYy5wcm90b3R5cGUucmVtb3ZlQmFja2Ryb3A9ZnVuY3Rpb24oKXt0aGlzLiRiYWNrZHJvcCYmdGhpcy4kYmFja2Ryb3AucmVtb3ZlKCksdGhpcy4kYmFja2Ryb3A9bnVsbH0sYy5wcm90b3R5cGUuYmFja2Ryb3A9ZnVuY3Rpb24oYil7dmFyIGQ9dGhpcyxlPXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJmYWRlXCIpP1wiZmFkZVwiOlwiXCI7aWYodGhpcy5pc1Nob3duJiZ0aGlzLm9wdGlvbnMuYmFja2Ryb3Ape3ZhciBmPWEuc3VwcG9ydC50cmFuc2l0aW9uJiZlO2lmKHRoaXMuJGJhY2tkcm9wPWEoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuYWRkQ2xhc3MoXCJtb2RhbC1iYWNrZHJvcCBcIitlKS5hcHBlbmRUbyh0aGlzLiRib2R5KSx0aGlzLiRlbGVtZW50Lm9uKFwiY2xpY2suZGlzbWlzcy5icy5tb2RhbFwiLGEucHJveHkoZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuaWdub3JlQmFja2Ryb3BDbGljaz92b2lkKHRoaXMuaWdub3JlQmFja2Ryb3BDbGljaz0hMSk6dm9pZChhLnRhcmdldD09PWEuY3VycmVudFRhcmdldCYmKFwic3RhdGljXCI9PXRoaXMub3B0aW9ucy5iYWNrZHJvcD90aGlzLiRlbGVtZW50WzBdLmZvY3VzKCk6dGhpcy5oaWRlKCkpKX0sdGhpcykpLGYmJnRoaXMuJGJhY2tkcm9wWzBdLm9mZnNldFdpZHRoLHRoaXMuJGJhY2tkcm9wLmFkZENsYXNzKFwiaW5cIiksIWIpcmV0dXJuO2Y/dGhpcy4kYmFja2Ryb3Aub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsYikuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5CQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OKTpiKCl9ZWxzZSBpZighdGhpcy5pc1Nob3duJiZ0aGlzLiRiYWNrZHJvcCl7dGhpcy4kYmFja2Ryb3AucmVtb3ZlQ2xhc3MoXCJpblwiKTt2YXIgZz1mdW5jdGlvbigpe2QucmVtb3ZlQmFja2Ryb3AoKSxiJiZiKCl9O2Euc3VwcG9ydC50cmFuc2l0aW9uJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKT90aGlzLiRiYWNrZHJvcC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixnKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLkJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pOmcoKX1lbHNlIGImJmIoKX0sYy5wcm90b3R5cGUuaGFuZGxlVXBkYXRlPWZ1bmN0aW9uKCl7dGhpcy5hZGp1c3REaWFsb2coKX0sYy5wcm90b3R5cGUuYWRqdXN0RGlhbG9nPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy4kZWxlbWVudFswXS5zY3JvbGxIZWlnaHQ+ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDt0aGlzLiRlbGVtZW50LmNzcyh7cGFkZGluZ0xlZnQ6IXRoaXMuYm9keUlzT3ZlcmZsb3dpbmcmJmE/dGhpcy5zY3JvbGxiYXJXaWR0aDpcIlwiLHBhZGRpbmdSaWdodDp0aGlzLmJvZHlJc092ZXJmbG93aW5nJiYhYT90aGlzLnNjcm9sbGJhcldpZHRoOlwiXCJ9KX0sYy5wcm90b3R5cGUucmVzZXRBZGp1c3RtZW50cz1mdW5jdGlvbigpe3RoaXMuJGVsZW1lbnQuY3NzKHtwYWRkaW5nTGVmdDpcIlwiLHBhZGRpbmdSaWdodDpcIlwifSl9LGMucHJvdG90eXBlLmNoZWNrU2Nyb2xsYmFyPWZ1bmN0aW9uKCl7dmFyIGE9d2luZG93LmlubmVyV2lkdGg7aWYoIWEpe3ZhciBiPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTthPWIucmlnaHQtTWF0aC5hYnMoYi5sZWZ0KX10aGlzLmJvZHlJc092ZXJmbG93aW5nPWRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg8YSx0aGlzLnNjcm9sbGJhcldpZHRoPXRoaXMubWVhc3VyZVNjcm9sbGJhcigpfSxjLnByb3RvdHlwZS5zZXRTY3JvbGxiYXI9ZnVuY3Rpb24oKXt2YXIgYT1wYXJzZUludCh0aGlzLiRib2R5LmNzcyhcInBhZGRpbmctcmlnaHRcIil8fDAsMTApO3RoaXMub3JpZ2luYWxCb2R5UGFkPWRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0fHxcIlwiLHRoaXMuYm9keUlzT3ZlcmZsb3dpbmcmJnRoaXMuJGJvZHkuY3NzKFwicGFkZGluZy1yaWdodFwiLGErdGhpcy5zY3JvbGxiYXJXaWR0aCl9LGMucHJvdG90eXBlLnJlc2V0U2Nyb2xsYmFyPWZ1bmN0aW9uKCl7dGhpcy4kYm9keS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIsdGhpcy5vcmlnaW5hbEJvZHlQYWQpfSxjLnByb3RvdHlwZS5tZWFzdXJlU2Nyb2xsYmFyPWZ1bmN0aW9uKCl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTthLmNsYXNzTmFtZT1cIm1vZGFsLXNjcm9sbGJhci1tZWFzdXJlXCIsdGhpcy4kYm9keS5hcHBlbmQoYSk7dmFyIGI9YS5vZmZzZXRXaWR0aC1hLmNsaWVudFdpZHRoO3JldHVybiB0aGlzLiRib2R5WzBdLnJlbW92ZUNoaWxkKGEpLGJ9O3ZhciBkPWEuZm4ubW9kYWw7YS5mbi5tb2RhbD1iLGEuZm4ubW9kYWwuQ29uc3RydWN0b3I9YyxhLmZuLm1vZGFsLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5tb2RhbD1kLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMubW9kYWwuZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLGZ1bmN0aW9uKGMpe3ZhciBkPWEodGhpcyksZT1kLmF0dHIoXCJocmVmXCIpLGY9YShkLmF0dHIoXCJkYXRhLXRhcmdldFwiKXx8ZSYmZS5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLFwiXCIpKSxnPWYuZGF0YShcImJzLm1vZGFsXCIpP1widG9nZ2xlXCI6YS5leHRlbmQoe3JlbW90ZTohLyMvLnRlc3QoZSkmJmV9LGYuZGF0YSgpLGQuZGF0YSgpKTtkLmlzKFwiYVwiKSYmYy5wcmV2ZW50RGVmYXVsdCgpLGYub25lKFwic2hvdy5icy5tb2RhbFwiLGZ1bmN0aW9uKGEpe2EuaXNEZWZhdWx0UHJldmVudGVkKCl8fGYub25lKFwiaGlkZGVuLmJzLm1vZGFsXCIsZnVuY3Rpb24oKXtkLmlzKFwiOnZpc2libGVcIikmJmQudHJpZ2dlcihcImZvY3VzXCIpfSl9KSxiLmNhbGwoZixnLHRoaXMpfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy50b29sdGlwXCIpLGY9XCJvYmplY3RcIj09dHlwZW9mIGImJmI7IWUmJi9kZXN0cm95fGhpZGUvLnRlc3QoYil8fChlfHxkLmRhdGEoXCJicy50b29sdGlwXCIsZT1uZXcgYyh0aGlzLGYpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXSgpKX0pfXZhciBjPWZ1bmN0aW9uKGEsYil7dGhpcy50eXBlPW51bGwsdGhpcy5vcHRpb25zPW51bGwsdGhpcy5lbmFibGVkPW51bGwsdGhpcy50aW1lb3V0PW51bGwsdGhpcy5ob3ZlclN0YXRlPW51bGwsdGhpcy4kZWxlbWVudD1udWxsLHRoaXMuaW5TdGF0ZT1udWxsLHRoaXMuaW5pdChcInRvb2x0aXBcIixhLGIpfTtjLlZFUlNJT049XCIzLjMuN1wiLGMuVFJBTlNJVElPTl9EVVJBVElPTj0xNTAsYy5ERUZBVUxUUz17YW5pbWF0aW9uOiEwLHBsYWNlbWVudDpcInRvcFwiLHNlbGVjdG9yOiExLHRlbXBsYXRlOic8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsdHJpZ2dlcjpcImhvdmVyIGZvY3VzXCIsdGl0bGU6XCJcIixkZWxheTowLGh0bWw6ITEsY29udGFpbmVyOiExLHZpZXdwb3J0OntzZWxlY3RvcjpcImJvZHlcIixwYWRkaW5nOjB9fSxjLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKGIsYyxkKXtpZih0aGlzLmVuYWJsZWQ9ITAsdGhpcy50eXBlPWIsdGhpcy4kZWxlbWVudD1hKGMpLHRoaXMub3B0aW9ucz10aGlzLmdldE9wdGlvbnMoZCksdGhpcy4kdmlld3BvcnQ9dGhpcy5vcHRpb25zLnZpZXdwb3J0JiZhKGEuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudmlld3BvcnQpP3RoaXMub3B0aW9ucy52aWV3cG9ydC5jYWxsKHRoaXMsdGhpcy4kZWxlbWVudCk6dGhpcy5vcHRpb25zLnZpZXdwb3J0LnNlbGVjdG9yfHx0aGlzLm9wdGlvbnMudmlld3BvcnQpLHRoaXMuaW5TdGF0ZT17Y2xpY2s6ITEsaG92ZXI6ITEsZm9jdXM6ITF9LHRoaXMuJGVsZW1lbnRbMF1pbnN0YW5jZW9mIGRvY3VtZW50LmNvbnN0cnVjdG9yJiYhdGhpcy5vcHRpb25zLnNlbGVjdG9yKXRocm93IG5ldyBFcnJvcihcImBzZWxlY3RvcmAgb3B0aW9uIG11c3QgYmUgc3BlY2lmaWVkIHdoZW4gaW5pdGlhbGl6aW5nIFwiK3RoaXMudHlwZStcIiBvbiB0aGUgd2luZG93LmRvY3VtZW50IG9iamVjdCFcIik7Zm9yKHZhciBlPXRoaXMub3B0aW9ucy50cmlnZ2VyLnNwbGl0KFwiIFwiKSxmPWUubGVuZ3RoO2YtLTspe3ZhciBnPWVbZl07aWYoXCJjbGlja1wiPT1nKXRoaXMuJGVsZW1lbnQub24oXCJjbGljay5cIit0aGlzLnR5cGUsdGhpcy5vcHRpb25zLnNlbGVjdG9yLGEucHJveHkodGhpcy50b2dnbGUsdGhpcykpO2Vsc2UgaWYoXCJtYW51YWxcIiE9Zyl7dmFyIGg9XCJob3ZlclwiPT1nP1wibW91c2VlbnRlclwiOlwiZm9jdXNpblwiLGk9XCJob3ZlclwiPT1nP1wibW91c2VsZWF2ZVwiOlwiZm9jdXNvdXRcIjt0aGlzLiRlbGVtZW50Lm9uKGgrXCIuXCIrdGhpcy50eXBlLHRoaXMub3B0aW9ucy5zZWxlY3RvcixhLnByb3h5KHRoaXMuZW50ZXIsdGhpcykpLHRoaXMuJGVsZW1lbnQub24oaStcIi5cIit0aGlzLnR5cGUsdGhpcy5vcHRpb25zLnNlbGVjdG9yLGEucHJveHkodGhpcy5sZWF2ZSx0aGlzKSl9fXRoaXMub3B0aW9ucy5zZWxlY3Rvcj90aGlzLl9vcHRpb25zPWEuZXh0ZW5kKHt9LHRoaXMub3B0aW9ucyx7dHJpZ2dlcjpcIm1hbnVhbFwiLHNlbGVjdG9yOlwiXCJ9KTp0aGlzLmZpeFRpdGxlKCl9LGMucHJvdG90eXBlLmdldERlZmF1bHRzPWZ1bmN0aW9uKCl7cmV0dXJuIGMuREVGQVVMVFN9LGMucHJvdG90eXBlLmdldE9wdGlvbnM9ZnVuY3Rpb24oYil7cmV0dXJuIGI9YS5leHRlbmQoe30sdGhpcy5nZXREZWZhdWx0cygpLHRoaXMuJGVsZW1lbnQuZGF0YSgpLGIpLGIuZGVsYXkmJlwibnVtYmVyXCI9PXR5cGVvZiBiLmRlbGF5JiYoYi5kZWxheT17c2hvdzpiLmRlbGF5LGhpZGU6Yi5kZWxheX0pLGJ9LGMucHJvdG90eXBlLmdldERlbGVnYXRlT3B0aW9ucz1mdW5jdGlvbigpe3ZhciBiPXt9LGM9dGhpcy5nZXREZWZhdWx0cygpO3JldHVybiB0aGlzLl9vcHRpb25zJiZhLmVhY2godGhpcy5fb3B0aW9ucyxmdW5jdGlvbihhLGQpe2NbYV0hPWQmJihiW2FdPWQpfSksYn0sYy5wcm90b3R5cGUuZW50ZXI9ZnVuY3Rpb24oYil7dmFyIGM9YiBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3I/YjphKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSk7cmV0dXJuIGN8fChjPW5ldyB0aGlzLmNvbnN0cnVjdG9yKGIuY3VycmVudFRhcmdldCx0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpKSxhKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSxjKSksYiBpbnN0YW5jZW9mIGEuRXZlbnQmJihjLmluU3RhdGVbXCJmb2N1c2luXCI9PWIudHlwZT9cImZvY3VzXCI6XCJob3ZlclwiXT0hMCksYy50aXAoKS5oYXNDbGFzcyhcImluXCIpfHxcImluXCI9PWMuaG92ZXJTdGF0ZT92b2lkKGMuaG92ZXJTdGF0ZT1cImluXCIpOihjbGVhclRpbWVvdXQoYy50aW1lb3V0KSxjLmhvdmVyU3RhdGU9XCJpblwiLGMub3B0aW9ucy5kZWxheSYmYy5vcHRpb25zLmRlbGF5LnNob3c/dm9pZChjLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe1wiaW5cIj09Yy5ob3ZlclN0YXRlJiZjLnNob3coKX0sYy5vcHRpb25zLmRlbGF5LnNob3cpKTpjLnNob3coKSl9LGMucHJvdG90eXBlLmlzSW5TdGF0ZVRydWU9ZnVuY3Rpb24oKXtmb3IodmFyIGEgaW4gdGhpcy5pblN0YXRlKWlmKHRoaXMuaW5TdGF0ZVthXSlyZXR1cm4hMDtyZXR1cm4hMX0sYy5wcm90b3R5cGUubGVhdmU9ZnVuY3Rpb24oYil7dmFyIGM9YiBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3I/YjphKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSk7aWYoY3x8KGM9bmV3IHRoaXMuY29uc3RydWN0b3IoYi5jdXJyZW50VGFyZ2V0LHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpLGEoYi5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlLGMpKSxiIGluc3RhbmNlb2YgYS5FdmVudCYmKGMuaW5TdGF0ZVtcImZvY3Vzb3V0XCI9PWIudHlwZT9cImZvY3VzXCI6XCJob3ZlclwiXT0hMSksIWMuaXNJblN0YXRlVHJ1ZSgpKXJldHVybiBjbGVhclRpbWVvdXQoYy50aW1lb3V0KSxjLmhvdmVyU3RhdGU9XCJvdXRcIixjLm9wdGlvbnMuZGVsYXkmJmMub3B0aW9ucy5kZWxheS5oaWRlP3ZvaWQoYy50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcIm91dFwiPT1jLmhvdmVyU3RhdGUmJmMuaGlkZSgpfSxjLm9wdGlvbnMuZGVsYXkuaGlkZSkpOmMuaGlkZSgpfSxjLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKCl7dmFyIGI9YS5FdmVudChcInNob3cuYnMuXCIrdGhpcy50eXBlKTtpZih0aGlzLmhhc0NvbnRlbnQoKSYmdGhpcy5lbmFibGVkKXt0aGlzLiRlbGVtZW50LnRyaWdnZXIoYik7dmFyIGQ9YS5jb250YWlucyh0aGlzLiRlbGVtZW50WzBdLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LHRoaXMuJGVsZW1lbnRbMF0pO2lmKGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fCFkKXJldHVybjt2YXIgZT10aGlzLGY9dGhpcy50aXAoKSxnPXRoaXMuZ2V0VUlEKHRoaXMudHlwZSk7dGhpcy5zZXRDb250ZW50KCksZi5hdHRyKFwiaWRcIixnKSx0aGlzLiRlbGVtZW50LmF0dHIoXCJhcmlhLWRlc2NyaWJlZGJ5XCIsZyksdGhpcy5vcHRpb25zLmFuaW1hdGlvbiYmZi5hZGRDbGFzcyhcImZhZGVcIik7dmFyIGg9XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5vcHRpb25zLnBsYWNlbWVudD90aGlzLm9wdGlvbnMucGxhY2VtZW50LmNhbGwodGhpcyxmWzBdLHRoaXMuJGVsZW1lbnRbMF0pOnRoaXMub3B0aW9ucy5wbGFjZW1lbnQsaT0vXFxzP2F1dG8/XFxzPy9pLGo9aS50ZXN0KGgpO2omJihoPWgucmVwbGFjZShpLFwiXCIpfHxcInRvcFwiKSxmLmRldGFjaCgpLmNzcyh7dG9wOjAsbGVmdDowLGRpc3BsYXk6XCJibG9ja1wifSkuYWRkQ2xhc3MoaCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSx0aGlzKSx0aGlzLm9wdGlvbnMuY29udGFpbmVyP2YuYXBwZW5kVG8odGhpcy5vcHRpb25zLmNvbnRhaW5lcik6Zi5pbnNlcnRBZnRlcih0aGlzLiRlbGVtZW50KSx0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJpbnNlcnRlZC5icy5cIit0aGlzLnR5cGUpO3ZhciBrPXRoaXMuZ2V0UG9zaXRpb24oKSxsPWZbMF0ub2Zmc2V0V2lkdGgsbT1mWzBdLm9mZnNldEhlaWdodDtpZihqKXt2YXIgbj1oLG89dGhpcy5nZXRQb3NpdGlvbih0aGlzLiR2aWV3cG9ydCk7aD1cImJvdHRvbVwiPT1oJiZrLmJvdHRvbSttPm8uYm90dG9tP1widG9wXCI6XCJ0b3BcIj09aCYmay50b3AtbTxvLnRvcD9cImJvdHRvbVwiOlwicmlnaHRcIj09aCYmay5yaWdodCtsPm8ud2lkdGg/XCJsZWZ0XCI6XCJsZWZ0XCI9PWgmJmsubGVmdC1sPG8ubGVmdD9cInJpZ2h0XCI6aCxmLnJlbW92ZUNsYXNzKG4pLmFkZENsYXNzKGgpfXZhciBwPXRoaXMuZ2V0Q2FsY3VsYXRlZE9mZnNldChoLGssbCxtKTt0aGlzLmFwcGx5UGxhY2VtZW50KHAsaCk7dmFyIHE9ZnVuY3Rpb24oKXt2YXIgYT1lLmhvdmVyU3RhdGU7ZS4kZWxlbWVudC50cmlnZ2VyKFwic2hvd24uYnMuXCIrZS50eXBlKSxlLmhvdmVyU3RhdGU9bnVsbCxcIm91dFwiPT1hJiZlLmxlYXZlKGUpfTthLnN1cHBvcnQudHJhbnNpdGlvbiYmdGhpcy4kdGlwLmhhc0NsYXNzKFwiZmFkZVwiKT9mLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLHEpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTik6cSgpfX0sYy5wcm90b3R5cGUuYXBwbHlQbGFjZW1lbnQ9ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLnRpcCgpLGU9ZFswXS5vZmZzZXRXaWR0aCxmPWRbMF0ub2Zmc2V0SGVpZ2h0LGc9cGFyc2VJbnQoZC5jc3MoXCJtYXJnaW4tdG9wXCIpLDEwKSxoPXBhcnNlSW50KGQuY3NzKFwibWFyZ2luLWxlZnRcIiksMTApO2lzTmFOKGcpJiYoZz0wKSxpc05hTihoKSYmKGg9MCksYi50b3ArPWcsYi5sZWZ0Kz1oLGEub2Zmc2V0LnNldE9mZnNldChkWzBdLGEuZXh0ZW5kKHt1c2luZzpmdW5jdGlvbihhKXtkLmNzcyh7dG9wOk1hdGgucm91bmQoYS50b3ApLGxlZnQ6TWF0aC5yb3VuZChhLmxlZnQpfSl9fSxiKSwwKSxkLmFkZENsYXNzKFwiaW5cIik7dmFyIGk9ZFswXS5vZmZzZXRXaWR0aCxqPWRbMF0ub2Zmc2V0SGVpZ2h0O1widG9wXCI9PWMmJmohPWYmJihiLnRvcD1iLnRvcCtmLWopO3ZhciBrPXRoaXMuZ2V0Vmlld3BvcnRBZGp1c3RlZERlbHRhKGMsYixpLGopO2subGVmdD9iLmxlZnQrPWsubGVmdDpiLnRvcCs9ay50b3A7dmFyIGw9L3RvcHxib3R0b20vLnRlc3QoYyksbT1sPzIqay5sZWZ0LWUraToyKmsudG9wLWYraixuPWw/XCJvZmZzZXRXaWR0aFwiOlwib2Zmc2V0SGVpZ2h0XCI7ZC5vZmZzZXQoYiksdGhpcy5yZXBsYWNlQXJyb3cobSxkWzBdW25dLGwpfSxjLnByb3RvdHlwZS5yZXBsYWNlQXJyb3c9ZnVuY3Rpb24oYSxiLGMpe3RoaXMuYXJyb3coKS5jc3MoYz9cImxlZnRcIjpcInRvcFwiLDUwKigxLWEvYikrXCIlXCIpLmNzcyhjP1widG9wXCI6XCJsZWZ0XCIsXCJcIil9LGMucHJvdG90eXBlLnNldENvbnRlbnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnRpcCgpLGI9dGhpcy5nZXRUaXRsZSgpO2EuZmluZChcIi50b29sdGlwLWlubmVyXCIpW3RoaXMub3B0aW9ucy5odG1sP1wiaHRtbFwiOlwidGV4dFwiXShiKSxhLnJlbW92ZUNsYXNzKFwiZmFkZSBpbiB0b3AgYm90dG9tIGxlZnQgcmlnaHRcIil9LGMucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24oYil7ZnVuY3Rpb24gZCgpe1wiaW5cIiE9ZS5ob3ZlclN0YXRlJiZmLmRldGFjaCgpLGUuJGVsZW1lbnQmJmUuJGVsZW1lbnQucmVtb3ZlQXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIikudHJpZ2dlcihcImhpZGRlbi5icy5cIitlLnR5cGUpLGImJmIoKX12YXIgZT10aGlzLGY9YSh0aGlzLiR0aXApLGc9YS5FdmVudChcImhpZGUuYnMuXCIrdGhpcy50eXBlKTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoZyksIWcuaXNEZWZhdWx0UHJldmVudGVkKCkpcmV0dXJuIGYucmVtb3ZlQ2xhc3MoXCJpblwiKSxhLnN1cHBvcnQudHJhbnNpdGlvbiYmZi5oYXNDbGFzcyhcImZhZGVcIik/Zi5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixkKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLlRSQU5TSVRJT05fRFVSQVRJT04pOmQoKSx0aGlzLmhvdmVyU3RhdGU9bnVsbCx0aGlzfSxjLnByb3RvdHlwZS5maXhUaXRsZT1mdW5jdGlvbigpe3ZhciBhPXRoaXMuJGVsZW1lbnQ7KGEuYXR0cihcInRpdGxlXCIpfHxcInN0cmluZ1wiIT10eXBlb2YgYS5hdHRyKFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiKSkmJmEuYXR0cihcImRhdGEtb3JpZ2luYWwtdGl0bGVcIixhLmF0dHIoXCJ0aXRsZVwiKXx8XCJcIikuYXR0cihcInRpdGxlXCIsXCJcIil9LGMucHJvdG90eXBlLmhhc0NvbnRlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRUaXRsZSgpfSxjLnByb3RvdHlwZS5nZXRQb3NpdGlvbj1mdW5jdGlvbihiKXtiPWJ8fHRoaXMuJGVsZW1lbnQ7dmFyIGM9YlswXSxkPVwiQk9EWVwiPT1jLnRhZ05hbWUsZT1jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO251bGw9PWUud2lkdGgmJihlPWEuZXh0ZW5kKHt9LGUse3dpZHRoOmUucmlnaHQtZS5sZWZ0LGhlaWdodDplLmJvdHRvbS1lLnRvcH0pKTt2YXIgZj13aW5kb3cuU1ZHRWxlbWVudCYmYyBpbnN0YW5jZW9mIHdpbmRvdy5TVkdFbGVtZW50LGc9ZD97dG9wOjAsbGVmdDowfTpmP251bGw6Yi5vZmZzZXQoKSxoPXtzY3JvbGw6ZD9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wfHxkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDpiLnNjcm9sbFRvcCgpfSxpPWQ/e3dpZHRoOmEod2luZG93KS53aWR0aCgpLGhlaWdodDphKHdpbmRvdykuaGVpZ2h0KCl9Om51bGw7cmV0dXJuIGEuZXh0ZW5kKHt9LGUsaCxpLGcpfSxjLnByb3RvdHlwZS5nZXRDYWxjdWxhdGVkT2Zmc2V0PWZ1bmN0aW9uKGEsYixjLGQpe3JldHVyblwiYm90dG9tXCI9PWE/e3RvcDpiLnRvcCtiLmhlaWdodCxsZWZ0OmIubGVmdCtiLndpZHRoLzItYy8yfTpcInRvcFwiPT1hP3t0b3A6Yi50b3AtZCxsZWZ0OmIubGVmdCtiLndpZHRoLzItYy8yfTpcImxlZnRcIj09YT97dG9wOmIudG9wK2IuaGVpZ2h0LzItZC8yLGxlZnQ6Yi5sZWZ0LWN9Ont0b3A6Yi50b3ArYi5oZWlnaHQvMi1kLzIsbGVmdDpiLmxlZnQrYi53aWR0aH19LGMucHJvdG90eXBlLmdldFZpZXdwb3J0QWRqdXN0ZWREZWx0YT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT17dG9wOjAsbGVmdDowfTtpZighdGhpcy4kdmlld3BvcnQpcmV0dXJuIGU7dmFyIGY9dGhpcy5vcHRpb25zLnZpZXdwb3J0JiZ0aGlzLm9wdGlvbnMudmlld3BvcnQucGFkZGluZ3x8MCxnPXRoaXMuZ2V0UG9zaXRpb24odGhpcy4kdmlld3BvcnQpO2lmKC9yaWdodHxsZWZ0Ly50ZXN0KGEpKXt2YXIgaD1iLnRvcC1mLWcuc2Nyb2xsLGk9Yi50b3ArZi1nLnNjcm9sbCtkO2g8Zy50b3A/ZS50b3A9Zy50b3AtaDppPmcudG9wK2cuaGVpZ2h0JiYoZS50b3A9Zy50b3ArZy5oZWlnaHQtaSl9ZWxzZXt2YXIgaj1iLmxlZnQtZixrPWIubGVmdCtmK2M7ajxnLmxlZnQ/ZS5sZWZ0PWcubGVmdC1qOms+Zy5yaWdodCYmKGUubGVmdD1nLmxlZnQrZy53aWR0aC1rKX1yZXR1cm4gZX0sYy5wcm90b3R5cGUuZ2V0VGl0bGU9ZnVuY3Rpb24oKXt2YXIgYSxiPXRoaXMuJGVsZW1lbnQsYz10aGlzLm9wdGlvbnM7cmV0dXJuIGE9Yi5hdHRyKFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiKXx8KFwiZnVuY3Rpb25cIj09dHlwZW9mIGMudGl0bGU/Yy50aXRsZS5jYWxsKGJbMF0pOmMudGl0bGUpfSxjLnByb3RvdHlwZS5nZXRVSUQ9ZnVuY3Rpb24oYSl7ZG8gYSs9fn4oMWU2Kk1hdGgucmFuZG9tKCkpO3doaWxlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEpKTtyZXR1cm4gYX0sYy5wcm90b3R5cGUudGlwPWZ1bmN0aW9uKCl7aWYoIXRoaXMuJHRpcCYmKHRoaXMuJHRpcD1hKHRoaXMub3B0aW9ucy50ZW1wbGF0ZSksMSE9dGhpcy4kdGlwLmxlbmd0aCkpdGhyb3cgbmV3IEVycm9yKHRoaXMudHlwZStcIiBgdGVtcGxhdGVgIG9wdGlvbiBtdXN0IGNvbnNpc3Qgb2YgZXhhY3RseSAxIHRvcC1sZXZlbCBlbGVtZW50IVwiKTtyZXR1cm4gdGhpcy4kdGlwfSxjLnByb3RvdHlwZS5hcnJvdz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRhcnJvdz10aGlzLiRhcnJvd3x8dGhpcy50aXAoKS5maW5kKFwiLnRvb2x0aXAtYXJyb3dcIil9LGMucHJvdG90eXBlLmVuYWJsZT1mdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hMH0sYy5wcm90b3R5cGUuZGlzYWJsZT1mdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hMX0sYy5wcm90b3R5cGUudG9nZ2xlRW5hYmxlZD1mdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hdGhpcy5lbmFibGVkfSxjLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oYil7dmFyIGM9dGhpcztiJiYoYz1hKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSksY3x8KGM9bmV3IHRoaXMuY29uc3RydWN0b3IoYi5jdXJyZW50VGFyZ2V0LHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpLGEoYi5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlLGMpKSksYj8oYy5pblN0YXRlLmNsaWNrPSFjLmluU3RhdGUuY2xpY2ssYy5pc0luU3RhdGVUcnVlKCk/Yy5lbnRlcihjKTpjLmxlYXZlKGMpKTpjLnRpcCgpLmhhc0NsYXNzKFwiaW5cIik/Yy5sZWF2ZShjKTpjLmVudGVyKGMpfSxjLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KSx0aGlzLmhpZGUoZnVuY3Rpb24oKXthLiRlbGVtZW50Lm9mZihcIi5cIithLnR5cGUpLnJlbW92ZURhdGEoXCJicy5cIithLnR5cGUpLGEuJHRpcCYmYS4kdGlwLmRldGFjaCgpLGEuJHRpcD1udWxsLGEuJGFycm93PW51bGwsYS4kdmlld3BvcnQ9bnVsbCxhLiRlbGVtZW50PW51bGx9KX07dmFyIGQ9YS5mbi50b29sdGlwO2EuZm4udG9vbHRpcD1iLGEuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvcj1jLGEuZm4udG9vbHRpcC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4udG9vbHRpcD1kLHRoaXN9fShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMucG9wb3ZlclwiKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBiJiZiOyFlJiYvZGVzdHJveXxoaWRlLy50ZXN0KGIpfHwoZXx8ZC5kYXRhKFwiYnMucG9wb3ZlclwiLGU9bmV3IGModGhpcyxmKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmVbYl0oKSl9KX12YXIgYz1mdW5jdGlvbihhLGIpe3RoaXMuaW5pdChcInBvcG92ZXJcIixhLGIpfTtpZighYS5mbi50b29sdGlwKXRocm93IG5ldyBFcnJvcihcIlBvcG92ZXIgcmVxdWlyZXMgdG9vbHRpcC5qc1wiKTtjLlZFUlNJT049XCIzLjMuN1wiLGMuREVGQVVMVFM9YS5leHRlbmQoe30sYS5mbi50b29sdGlwLkNvbnN0cnVjdG9yLkRFRkFVTFRTLHtwbGFjZW1lbnQ6XCJyaWdodFwiLHRyaWdnZXI6XCJjbGlja1wiLGNvbnRlbnQ6XCJcIix0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PjxoMyBjbGFzcz1cInBvcG92ZXItdGl0bGVcIj48L2gzPjxkaXYgY2xhc3M9XCJwb3BvdmVyLWNvbnRlbnRcIj48L2Rpdj48L2Rpdj4nfSksYy5wcm90b3R5cGU9YS5leHRlbmQoe30sYS5mbi50b29sdGlwLkNvbnN0cnVjdG9yLnByb3RvdHlwZSksYy5wcm90b3R5cGUuY29uc3RydWN0b3I9YyxjLnByb3RvdHlwZS5nZXREZWZhdWx0cz1mdW5jdGlvbigpe3JldHVybiBjLkRFRkFVTFRTfSxjLnByb3RvdHlwZS5zZXRDb250ZW50PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50aXAoKSxiPXRoaXMuZ2V0VGl0bGUoKSxjPXRoaXMuZ2V0Q29udGVudCgpO2EuZmluZChcIi5wb3BvdmVyLXRpdGxlXCIpW3RoaXMub3B0aW9ucy5odG1sP1wiaHRtbFwiOlwidGV4dFwiXShiKSxhLmZpbmQoXCIucG9wb3Zlci1jb250ZW50XCIpLmNoaWxkcmVuKCkuZGV0YWNoKCkuZW5kKClbdGhpcy5vcHRpb25zLmh0bWw/XCJzdHJpbmdcIj09dHlwZW9mIGM/XCJodG1sXCI6XCJhcHBlbmRcIjpcInRleHRcIl0oYyksYS5yZW1vdmVDbGFzcyhcImZhZGUgdG9wIGJvdHRvbSBsZWZ0IHJpZ2h0IGluXCIpLGEuZmluZChcIi5wb3BvdmVyLXRpdGxlXCIpLmh0bWwoKXx8YS5maW5kKFwiLnBvcG92ZXItdGl0bGVcIikuaGlkZSgpfSxjLnByb3RvdHlwZS5oYXNDb250ZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0VGl0bGUoKXx8dGhpcy5nZXRDb250ZW50KCl9LGMucHJvdG90eXBlLmdldENvbnRlbnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLiRlbGVtZW50LGI9dGhpcy5vcHRpb25zO3JldHVybiBhLmF0dHIoXCJkYXRhLWNvbnRlbnRcIil8fChcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLmNvbnRlbnQ/Yi5jb250ZW50LmNhbGwoYVswXSk6Yi5jb250ZW50KX0sYy5wcm90b3R5cGUuYXJyb3c9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kYXJyb3c9dGhpcy4kYXJyb3d8fHRoaXMudGlwKCkuZmluZChcIi5hcnJvd1wiKX07dmFyIGQ9YS5mbi5wb3BvdmVyO2EuZm4ucG9wb3Zlcj1iLGEuZm4ucG9wb3Zlci5Db25zdHJ1Y3Rvcj1jLGEuZm4ucG9wb3Zlci5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4ucG9wb3Zlcj1kLHRoaXN9fShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGMsZCl7dGhpcy4kYm9keT1hKGRvY3VtZW50LmJvZHkpLHRoaXMuJHNjcm9sbEVsZW1lbnQ9YShhKGMpLmlzKGRvY3VtZW50LmJvZHkpP3dpbmRvdzpjKSx0aGlzLm9wdGlvbnM9YS5leHRlbmQoe30sYi5ERUZBVUxUUyxkKSx0aGlzLnNlbGVjdG9yPSh0aGlzLm9wdGlvbnMudGFyZ2V0fHxcIlwiKStcIiAubmF2IGxpID4gYVwiLHRoaXMub2Zmc2V0cz1bXSx0aGlzLnRhcmdldHM9W10sdGhpcy5hY3RpdmVUYXJnZXQ9bnVsbCx0aGlzLnNjcm9sbEhlaWdodD0wLHRoaXMuJHNjcm9sbEVsZW1lbnQub24oXCJzY3JvbGwuYnMuc2Nyb2xsc3B5XCIsYS5wcm94eSh0aGlzLnByb2Nlc3MsdGhpcykpLHRoaXMucmVmcmVzaCgpLHRoaXMucHJvY2VzcygpfWZ1bmN0aW9uIGMoYyl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy5zY3JvbGxzcHlcIiksZj1cIm9iamVjdFwiPT10eXBlb2YgYyYmYztlfHxkLmRhdGEoXCJicy5zY3JvbGxzcHlcIixlPW5ldyBiKHRoaXMsZikpLFwic3RyaW5nXCI9PXR5cGVvZiBjJiZlW2NdKCl9KX1iLlZFUlNJT049XCIzLjMuN1wiLGIuREVGQVVMVFM9e29mZnNldDoxMH0sYi5wcm90b3R5cGUuZ2V0U2Nyb2xsSGVpZ2h0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJHNjcm9sbEVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0fHxNYXRoLm1heCh0aGlzLiRib2R5WzBdLnNjcm9sbEhlaWdodCxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0KX0sYi5wcm90b3R5cGUucmVmcmVzaD1mdW5jdGlvbigpe3ZhciBiPXRoaXMsYz1cIm9mZnNldFwiLGQ9MDt0aGlzLm9mZnNldHM9W10sdGhpcy50YXJnZXRzPVtdLHRoaXMuc2Nyb2xsSGVpZ2h0PXRoaXMuZ2V0U2Nyb2xsSGVpZ2h0KCksYS5pc1dpbmRvdyh0aGlzLiRzY3JvbGxFbGVtZW50WzBdKXx8KGM9XCJwb3NpdGlvblwiLGQ9dGhpcy4kc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKSksdGhpcy4kYm9keS5maW5kKHRoaXMuc2VsZWN0b3IpLm1hcChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyksZT1iLmRhdGEoXCJ0YXJnZXRcIil8fGIuYXR0cihcImhyZWZcIiksZj0vXiMuLy50ZXN0KGUpJiZhKGUpO3JldHVybiBmJiZmLmxlbmd0aCYmZi5pcyhcIjp2aXNpYmxlXCIpJiZbW2ZbY10oKS50b3ArZCxlXV18fG51bGx9KS5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGFbMF0tYlswXX0pLmVhY2goZnVuY3Rpb24oKXtiLm9mZnNldHMucHVzaCh0aGlzWzBdKSxiLnRhcmdldHMucHVzaCh0aGlzWzFdKX0pfSxiLnByb3RvdHlwZS5wcm9jZXNzPWZ1bmN0aW9uKCl7dmFyIGEsYj10aGlzLiRzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpK3RoaXMub3B0aW9ucy5vZmZzZXQsYz10aGlzLmdldFNjcm9sbEhlaWdodCgpLGQ9dGhpcy5vcHRpb25zLm9mZnNldCtjLXRoaXMuJHNjcm9sbEVsZW1lbnQuaGVpZ2h0KCksZT10aGlzLm9mZnNldHMsZj10aGlzLnRhcmdldHMsZz10aGlzLmFjdGl2ZVRhcmdldDtpZih0aGlzLnNjcm9sbEhlaWdodCE9YyYmdGhpcy5yZWZyZXNoKCksYj49ZClyZXR1cm4gZyE9KGE9ZltmLmxlbmd0aC0xXSkmJnRoaXMuYWN0aXZhdGUoYSk7aWYoZyYmYjxlWzBdKXJldHVybiB0aGlzLmFjdGl2ZVRhcmdldD1udWxsLHRoaXMuY2xlYXIoKTtmb3IoYT1lLmxlbmd0aDthLS07KWchPWZbYV0mJmI+PWVbYV0mJih2b2lkIDA9PT1lW2ErMV18fGI8ZVthKzFdKSYmdGhpcy5hY3RpdmF0ZShmW2FdKX0sYi5wcm90b3R5cGUuYWN0aXZhdGU9ZnVuY3Rpb24oYil7XHJcbnRoaXMuYWN0aXZlVGFyZ2V0PWIsdGhpcy5jbGVhcigpO3ZhciBjPXRoaXMuc2VsZWN0b3IrJ1tkYXRhLXRhcmdldD1cIicrYisnXCJdLCcrdGhpcy5zZWxlY3RvcisnW2hyZWY9XCInK2IrJ1wiXScsZD1hKGMpLnBhcmVudHMoXCJsaVwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtkLnBhcmVudChcIi5kcm9wZG93bi1tZW51XCIpLmxlbmd0aCYmKGQ9ZC5jbG9zZXN0KFwibGkuZHJvcGRvd25cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIikpLGQudHJpZ2dlcihcImFjdGl2YXRlLmJzLnNjcm9sbHNweVwiKX0sYi5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXthKHRoaXMuc2VsZWN0b3IpLnBhcmVudHNVbnRpbCh0aGlzLm9wdGlvbnMudGFyZ2V0LFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKX07dmFyIGQ9YS5mbi5zY3JvbGxzcHk7YS5mbi5zY3JvbGxzcHk9YyxhLmZuLnNjcm9sbHNweS5Db25zdHJ1Y3Rvcj1iLGEuZm4uc2Nyb2xsc3B5Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5zY3JvbGxzcHk9ZCx0aGlzfSxhKHdpbmRvdykub24oXCJsb2FkLmJzLnNjcm9sbHNweS5kYXRhLWFwaVwiLGZ1bmN0aW9uKCl7YSgnW2RhdGEtc3B5PVwic2Nyb2xsXCJdJykuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyk7Yy5jYWxsKGIsYi5kYXRhKCkpfSl9KX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLnRhYlwiKTtlfHxkLmRhdGEoXCJicy50YWJcIixlPW5ldyBjKHRoaXMpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXSgpfSl9dmFyIGM9ZnVuY3Rpb24oYil7dGhpcy5lbGVtZW50PWEoYil9O2MuVkVSU0lPTj1cIjMuMy43XCIsYy5UUkFOU0lUSU9OX0RVUkFUSU9OPTE1MCxjLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5lbGVtZW50LGM9Yi5jbG9zZXN0KFwidWw6bm90KC5kcm9wZG93bi1tZW51KVwiKSxkPWIuZGF0YShcInRhcmdldFwiKTtpZihkfHwoZD1iLmF0dHIoXCJocmVmXCIpLGQ9ZCYmZC5yZXBsYWNlKC8uKig/PSNbXlxcc10qJCkvLFwiXCIpKSwhYi5wYXJlbnQoXCJsaVwiKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSl7dmFyIGU9Yy5maW5kKFwiLmFjdGl2ZTpsYXN0IGFcIiksZj1hLkV2ZW50KFwiaGlkZS5icy50YWJcIix7cmVsYXRlZFRhcmdldDpiWzBdfSksZz1hLkV2ZW50KFwic2hvdy5icy50YWJcIix7cmVsYXRlZFRhcmdldDplWzBdfSk7aWYoZS50cmlnZ2VyKGYpLGIudHJpZ2dlcihnKSwhZy5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmIWYuaXNEZWZhdWx0UHJldmVudGVkKCkpe3ZhciBoPWEoZCk7dGhpcy5hY3RpdmF0ZShiLmNsb3Nlc3QoXCJsaVwiKSxjKSx0aGlzLmFjdGl2YXRlKGgsaC5wYXJlbnQoKSxmdW5jdGlvbigpe2UudHJpZ2dlcih7dHlwZTpcImhpZGRlbi5icy50YWJcIixyZWxhdGVkVGFyZ2V0OmJbMF19KSxiLnRyaWdnZXIoe3R5cGU6XCJzaG93bi5icy50YWJcIixyZWxhdGVkVGFyZ2V0OmVbMF19KX0pfX19LGMucHJvdG90eXBlLmFjdGl2YXRlPWZ1bmN0aW9uKGIsZCxlKXtmdW5jdGlvbiBmKCl7Zy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5maW5kKFwiPiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikuZW5kKCkuZmluZCgnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMSksYi5hZGRDbGFzcyhcImFjdGl2ZVwiKS5maW5kKCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCEwKSxoPyhiWzBdLm9mZnNldFdpZHRoLGIuYWRkQ2xhc3MoXCJpblwiKSk6Yi5yZW1vdmVDbGFzcyhcImZhZGVcIiksYi5wYXJlbnQoXCIuZHJvcGRvd24tbWVudVwiKS5sZW5ndGgmJmIuY2xvc2VzdChcImxpLmRyb3Bkb3duXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpLmVuZCgpLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITApLGUmJmUoKX12YXIgZz1kLmZpbmQoXCI+IC5hY3RpdmVcIiksaD1lJiZhLnN1cHBvcnQudHJhbnNpdGlvbiYmKGcubGVuZ3RoJiZnLmhhc0NsYXNzKFwiZmFkZVwiKXx8ISFkLmZpbmQoXCI+IC5mYWRlXCIpLmxlbmd0aCk7Zy5sZW5ndGgmJmg/Zy5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixmKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLlRSQU5TSVRJT05fRFVSQVRJT04pOmYoKSxnLnJlbW92ZUNsYXNzKFwiaW5cIil9O3ZhciBkPWEuZm4udGFiO2EuZm4udGFiPWIsYS5mbi50YWIuQ29uc3RydWN0b3I9YyxhLmZuLnRhYi5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4udGFiPWQsdGhpc307dmFyIGU9ZnVuY3Rpb24oYyl7Yy5wcmV2ZW50RGVmYXVsdCgpLGIuY2FsbChhKHRoaXMpLFwic2hvd1wiKX07YShkb2N1bWVudCkub24oXCJjbGljay5icy50YWIuZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJyxlKS5vbihcImNsaWNrLmJzLnRhYi5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGU9XCJwaWxsXCJdJyxlKX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLmFmZml4XCIpLGY9XCJvYmplY3RcIj09dHlwZW9mIGImJmI7ZXx8ZC5kYXRhKFwiYnMuYWZmaXhcIixlPW5ldyBjKHRoaXMsZikpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdKCl9KX12YXIgYz1mdW5jdGlvbihiLGQpe3RoaXMub3B0aW9ucz1hLmV4dGVuZCh7fSxjLkRFRkFVTFRTLGQpLHRoaXMuJHRhcmdldD1hKHRoaXMub3B0aW9ucy50YXJnZXQpLm9uKFwic2Nyb2xsLmJzLmFmZml4LmRhdGEtYXBpXCIsYS5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb24sdGhpcykpLm9uKFwiY2xpY2suYnMuYWZmaXguZGF0YS1hcGlcIixhLnByb3h5KHRoaXMuY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3AsdGhpcykpLHRoaXMuJGVsZW1lbnQ9YShiKSx0aGlzLmFmZml4ZWQ9bnVsbCx0aGlzLnVucGluPW51bGwsdGhpcy5waW5uZWRPZmZzZXQ9bnVsbCx0aGlzLmNoZWNrUG9zaXRpb24oKX07Yy5WRVJTSU9OPVwiMy4zLjdcIixjLlJFU0VUPVwiYWZmaXggYWZmaXgtdG9wIGFmZml4LWJvdHRvbVwiLGMuREVGQVVMVFM9e29mZnNldDowLHRhcmdldDp3aW5kb3d9LGMucHJvdG90eXBlLmdldFN0YXRlPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXRoaXMuJHRhcmdldC5zY3JvbGxUb3AoKSxmPXRoaXMuJGVsZW1lbnQub2Zmc2V0KCksZz10aGlzLiR0YXJnZXQuaGVpZ2h0KCk7aWYobnVsbCE9YyYmXCJ0b3BcIj09dGhpcy5hZmZpeGVkKXJldHVybiBlPGMmJlwidG9wXCI7aWYoXCJib3R0b21cIj09dGhpcy5hZmZpeGVkKXJldHVybiBudWxsIT1jPyEoZSt0aGlzLnVucGluPD1mLnRvcCkmJlwiYm90dG9tXCI6IShlK2c8PWEtZCkmJlwiYm90dG9tXCI7dmFyIGg9bnVsbD09dGhpcy5hZmZpeGVkLGk9aD9lOmYudG9wLGo9aD9nOmI7cmV0dXJuIG51bGwhPWMmJmU8PWM/XCJ0b3BcIjpudWxsIT1kJiZpK2o+PWEtZCYmXCJib3R0b21cIn0sYy5wcm90b3R5cGUuZ2V0UGlubmVkT2Zmc2V0PWZ1bmN0aW9uKCl7aWYodGhpcy5waW5uZWRPZmZzZXQpcmV0dXJuIHRoaXMucGlubmVkT2Zmc2V0O3RoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoYy5SRVNFVCkuYWRkQ2xhc3MoXCJhZmZpeFwiKTt2YXIgYT10aGlzLiR0YXJnZXQuc2Nyb2xsVG9wKCksYj10aGlzLiRlbGVtZW50Lm9mZnNldCgpO3JldHVybiB0aGlzLnBpbm5lZE9mZnNldD1iLnRvcC1hfSxjLnByb3RvdHlwZS5jaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcD1mdW5jdGlvbigpe3NldFRpbWVvdXQoYS5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb24sdGhpcyksMSl9LGMucHJvdG90eXBlLmNoZWNrUG9zaXRpb249ZnVuY3Rpb24oKXtpZih0aGlzLiRlbGVtZW50LmlzKFwiOnZpc2libGVcIikpe3ZhciBiPXRoaXMuJGVsZW1lbnQuaGVpZ2h0KCksZD10aGlzLm9wdGlvbnMub2Zmc2V0LGU9ZC50b3AsZj1kLmJvdHRvbSxnPU1hdGgubWF4KGEoZG9jdW1lbnQpLmhlaWdodCgpLGEoZG9jdW1lbnQuYm9keSkuaGVpZ2h0KCkpO1wib2JqZWN0XCIhPXR5cGVvZiBkJiYoZj1lPWQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJihlPWQudG9wKHRoaXMuJGVsZW1lbnQpKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBmJiYoZj1kLmJvdHRvbSh0aGlzLiRlbGVtZW50KSk7dmFyIGg9dGhpcy5nZXRTdGF0ZShnLGIsZSxmKTtpZih0aGlzLmFmZml4ZWQhPWgpe251bGwhPXRoaXMudW5waW4mJnRoaXMuJGVsZW1lbnQuY3NzKFwidG9wXCIsXCJcIik7dmFyIGk9XCJhZmZpeFwiKyhoP1wiLVwiK2g6XCJcIiksaj1hLkV2ZW50KGkrXCIuYnMuYWZmaXhcIik7aWYodGhpcy4kZWxlbWVudC50cmlnZ2VyKGopLGouaXNEZWZhdWx0UHJldmVudGVkKCkpcmV0dXJuO3RoaXMuYWZmaXhlZD1oLHRoaXMudW5waW49XCJib3R0b21cIj09aD90aGlzLmdldFBpbm5lZE9mZnNldCgpOm51bGwsdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhjLlJFU0VUKS5hZGRDbGFzcyhpKS50cmlnZ2VyKGkucmVwbGFjZShcImFmZml4XCIsXCJhZmZpeGVkXCIpK1wiLmJzLmFmZml4XCIpfVwiYm90dG9tXCI9PWgmJnRoaXMuJGVsZW1lbnQub2Zmc2V0KHt0b3A6Zy1iLWZ9KX19O3ZhciBkPWEuZm4uYWZmaXg7YS5mbi5hZmZpeD1iLGEuZm4uYWZmaXguQ29uc3RydWN0b3I9YyxhLmZuLmFmZml4Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5hZmZpeD1kLHRoaXN9LGEod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe2EoJ1tkYXRhLXNweT1cImFmZml4XCJdJykuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcyksZD1jLmRhdGEoKTtkLm9mZnNldD1kLm9mZnNldHx8e30sbnVsbCE9ZC5vZmZzZXRCb3R0b20mJihkLm9mZnNldC5ib3R0b209ZC5vZmZzZXRCb3R0b20pLG51bGwhPWQub2Zmc2V0VG9wJiYoZC5vZmZzZXQudG9wPWQub2Zmc2V0VG9wKSxiLmNhbGwoYyxkKX0pfSl9KGpRdWVyeSk7IiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gZmFuY3lCb3ggdjMuMi4xMFxyXG4vL1xyXG4vLyBMaWNlbnNlZCBHUEx2MyBmb3Igb3BlbiBzb3VyY2UgdXNlXHJcbi8vIG9yIGZhbmN5Qm94IENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2VcclxuLy9cclxuLy8gaHR0cDovL2ZhbmN5YXBwcy5jb20vZmFuY3lib3gvXHJcbi8vIENvcHlyaWdodCAyMDE3IGZhbmN5QXBwc1xyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG47KGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAvLyBJZiB0aGVyZSdzIG5vIGpRdWVyeSwgZmFuY3lCb3ggY2FuJ3Qgd29ya1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBpZiAoICEkICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiBmYW5jeUJveCBpcyBhbHJlYWR5IGluaXRpYWxpemVkXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgaWYgKCAkLmZuLmZhbmN5Ym94ICkge1xyXG5cclxuICAgICAgICBpZiAoICdjb25zb2xlJyBpbiB3aW5kb3cgKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnZmFuY3lCb3ggYWxyZWFkeSBpbml0aWFsaXplZCcgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcml2YXRlIGRlZmF1bHQgc2V0dGluZ3NcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHZhciBkZWZhdWx0cyA9IHtcclxuXHJcbiAgICAgICAgLy8gRW5hYmxlIGluZmluaXRlIGdhbGxlcnkgbmF2aWdhdGlvblxyXG4gICAgICAgIGxvb3AgOiBmYWxzZSxcclxuXHJcbiAgICAgICAgLy8gU3BhY2UgYXJvdW5kIGltYWdlLCBpZ25vcmVkIGlmIHpvb21lZC1pbiBvciB2aWV3cG9ydCB3aWR0aCBpcyBzbWFsbGVyIHRoYW4gODAwcHhcclxuICAgICAgICBtYXJnaW4gOiBbNDQsIDBdLFxyXG5cclxuICAgICAgICAvLyBIb3Jpem9udGFsIHNwYWNlIGJldHdlZW4gc2xpZGVzXHJcbiAgICAgICAgZ3V0dGVyIDogNTAsXHJcblxyXG4gICAgICAgIC8vIEVuYWJsZSBrZXlib2FyZCBuYXZpZ2F0aW9uXHJcbiAgICAgICAga2V5Ym9hcmQgOiB0cnVlLFxyXG5cclxuICAgICAgICAvLyBTaG91bGQgZGlzcGxheSBuYXZpZ2F0aW9uIGFycm93cyBhdCB0aGUgc2NyZWVuIGVkZ2VzXHJcbiAgICAgICAgYXJyb3dzIDogdHJ1ZSxcclxuXHJcbiAgICAgICAgLy8gU2hvdWxkIGRpc3BsYXkgaW5mb2JhciAoY291bnRlciBhbmQgYXJyb3dzIGF0IHRoZSB0b3ApXHJcbiAgICAgICAgaW5mb2JhciA6IHRydWUsXHJcblxyXG4gICAgICAgIC8vIFNob3VsZCBkaXNwbGF5IHRvb2xiYXIgKGJ1dHRvbnMgYXQgdGhlIHRvcClcclxuICAgICAgICB0b29sYmFyIDogdHJ1ZSxcclxuXHJcbiAgICAgICAgLy8gV2hhdCBidXR0b25zIHNob3VsZCBhcHBlYXIgaW4gdGhlIHRvcCByaWdodCBjb3JuZXIuXHJcbiAgICAgICAgLy8gQnV0dG9ucyB3aWxsIGJlIGNyZWF0ZWQgdXNpbmcgdGVtcGxhdGVzIGZyb20gYGJ0blRwbGAgb3B0aW9uXHJcbiAgICAgICAgLy8gYW5kIHRoZXkgd2lsbCBiZSBwbGFjZWQgaW50byB0b29sYmFyIChjbGFzcz1cImZhbmN5Ym94LXRvb2xiYXJcImAgZWxlbWVudClcclxuICAgICAgICBidXR0b25zIDogW1xyXG4gICAgICAgICAgICAnc2xpZGVTaG93JyxcclxuICAgICAgICAgICAgJ2Z1bGxTY3JlZW4nLFxyXG4gICAgICAgICAgICAndGh1bWJzJyxcclxuICAgICAgICAgICAgJ3NoYXJlJyxcclxuICAgICAgICAgICAgLy8nZG93bmxvYWQnLFxyXG4gICAgICAgICAgICAvLyd6b29tJyxcclxuICAgICAgICAgICAgJ2Nsb3NlJ1xyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICAgIC8vIERldGVjdCBcImlkbGVcIiB0aW1lIGluIHNlY29uZHNcclxuICAgICAgICBpZGxlVGltZSA6IDMsXHJcblxyXG4gICAgICAgIC8vIFNob3VsZCBkaXNwbGF5IGJ1dHRvbnMgYXQgdG9wIHJpZ2h0IGNvcm5lciBvZiB0aGUgY29udGVudFxyXG4gICAgICAgIC8vIElmICdhdXRvJyAtIHRoZXkgd2lsbCBiZSBjcmVhdGVkIGZvciBjb250ZW50IGhhdmluZyB0eXBlICdodG1sJywgJ2lubGluZScgb3IgJ2FqYXgnXHJcbiAgICAgICAgLy8gVXNlIHRlbXBsYXRlIGZyb20gYGJ0blRwbC5zbWFsbEJ0bmAgZm9yIGN1c3RvbWl6YXRpb25cclxuICAgICAgICBzbWFsbEJ0biA6ICdhdXRvJyxcclxuXHJcbiAgICAgICAgLy8gRGlzYWJsZSByaWdodC1jbGljayBhbmQgdXNlIHNpbXBsZSBpbWFnZSBwcm90ZWN0aW9uIGZvciBpbWFnZXNcclxuICAgICAgICBwcm90ZWN0IDogZmFsc2UsXHJcblxyXG4gICAgICAgIC8vIFNob3J0Y3V0IHRvIG1ha2UgY29udGVudCBcIm1vZGFsXCIgLSBkaXNhYmxlIGtleWJvYXJkIG5hdmlndGlvbiwgaGlkZSBidXR0b25zLCBldGNcclxuICAgICAgICBtb2RhbCA6IGZhbHNlLFxyXG5cclxuICAgICAgICBpbWFnZSA6IHtcclxuXHJcbiAgICAgICAgICAgIC8vIFdhaXQgZm9yIGltYWdlcyB0byBsb2FkIGJlZm9yZSBkaXNwbGF5aW5nXHJcbiAgICAgICAgICAgIC8vIFJlcXVpcmVzIHByZWRlZmluZWQgaW1hZ2UgZGltZW5zaW9uc1xyXG4gICAgICAgICAgICAvLyBJZiAnYXV0bycgLSB3aWxsIHpvb20gaW4gdGh1bWJuYWlsIGlmICd3aWR0aCcgYW5kICdoZWlnaHQnIGF0dHJpYnV0ZXMgYXJlIGZvdW5kXHJcbiAgICAgICAgICAgIHByZWxvYWQgOiBcImF1dG9cIlxyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhamF4IDoge1xyXG5cclxuICAgICAgICAgICAgLy8gT2JqZWN0IGNvbnRhaW5pbmcgc2V0dGluZ3MgZm9yIGFqYXggcmVxdWVzdFxyXG4gICAgICAgICAgICBzZXR0aW5ncyA6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGhlbHBzIHRvIGluZGljYXRlIHRoYXQgcmVxdWVzdCBjb21lcyBmcm9tIHRoZSBtb2RhbFxyXG4gICAgICAgICAgICAgICAgLy8gRmVlbCBmcmVlIHRvIGNoYW5nZSBuYW1pbmdcclxuICAgICAgICAgICAgICAgIGRhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFuY3lib3ggOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaWZyYW1lIDoge1xyXG5cclxuICAgICAgICAgICAgLy8gSWZyYW1lIHRlbXBsYXRlXHJcbiAgICAgICAgICAgIHRwbCA6ICc8aWZyYW1lIGlkPVwiZmFuY3lib3gtZnJhbWV7cm5kfVwiIG5hbWU9XCJmYW5jeWJveC1mcmFtZXtybmR9XCIgY2xhc3M9XCJmYW5jeWJveC1pZnJhbWVcIiBmcmFtZWJvcmRlcj1cIjBcIiB2c3BhY2U9XCIwXCIgaHNwYWNlPVwiMFwiIHdlYmtpdEFsbG93RnVsbFNjcmVlbiBtb3phbGxvd2Z1bGxzY3JlZW4gYWxsb3dGdWxsU2NyZWVuIGFsbG93dHJhbnNwYXJlbmN5PVwidHJ1ZVwiIHNyYz1cIlwiPjwvaWZyYW1lPicsXHJcblxyXG4gICAgICAgICAgICAvLyBQcmVsb2FkIGlmcmFtZSBiZWZvcmUgZGlzcGxheWluZyBpdFxyXG4gICAgICAgICAgICAvLyBUaGlzIGFsbG93cyB0byBjYWxjdWxhdGUgaWZyYW1lIGNvbnRlbnQgd2lkdGggYW5kIGhlaWdodFxyXG4gICAgICAgICAgICAvLyAobm90ZTogRHVlIHRvIFwiU2FtZSBPcmlnaW4gUG9saWN5XCIsIHlvdSBjYW4ndCBnZXQgY3Jvc3MgZG9tYWluIGRhdGEpLlxyXG4gICAgICAgICAgICBwcmVsb2FkIDogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIC8vIEN1c3RvbSBDU1Mgc3R5bGluZyBmb3IgaWZyYW1lIHdyYXBwaW5nIGVsZW1lbnRcclxuICAgICAgICAgICAgLy8gWW91IGNhbiB1c2UgdGhpcyB0byBzZXQgY3VzdG9tIGlmcmFtZSBkaW1lbnNpb25zXHJcbiAgICAgICAgICAgIGNzcyA6IHt9LFxyXG5cclxuICAgICAgICAgICAgLy8gSWZyYW1lIHRhZyBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGF0dHIgOiB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmcgOiAnYXV0bydcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBEZWZhdWx0IGNvbnRlbnQgdHlwZSBpZiBjYW5ub3QgYmUgZGV0ZWN0ZWQgYXV0b21hdGljYWxseVxyXG4gICAgICAgIGRlZmF1bHRUeXBlIDogJ2ltYWdlJyxcclxuXHJcbiAgICAgICAgLy8gT3Blbi9jbG9zZSBhbmltYXRpb24gdHlwZVxyXG4gICAgICAgIC8vIFBvc3NpYmxlIHZhbHVlczpcclxuICAgICAgICAvLyAgIGZhbHNlICAgICAgICAgICAgLSBkaXNhYmxlXHJcbiAgICAgICAgLy8gICBcInpvb21cIiAgICAgICAgICAgLSB6b29tIGltYWdlcyBmcm9tL3RvIHRodW1ibmFpbFxyXG4gICAgICAgIC8vICAgXCJmYWRlXCJcclxuICAgICAgICAvLyAgIFwiem9vbS1pbi1vdXRcIlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgYW5pbWF0aW9uRWZmZWN0IDogXCJ6b29tXCIsXHJcblxyXG4gICAgICAgIC8vIER1cmF0aW9uIGluIG1zIGZvciBvcGVuL2Nsb3NlIGFuaW1hdGlvblxyXG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uIDogNTAwLFxyXG5cclxuICAgICAgICAvLyBTaG91bGQgaW1hZ2UgY2hhbmdlIG9wYWNpdHkgd2hpbGUgem9vbWluZ1xyXG4gICAgICAgIC8vIElmIG9wYWNpdHkgaXMgXCJhdXRvXCIsIHRoZW4gb3BhY2l0eSB3aWxsIGJlIGNoYW5nZWQgaWYgaW1hZ2UgYW5kIHRodW1ibmFpbCBoYXZlIGRpZmZlcmVudCBhc3BlY3QgcmF0aW9zXHJcbiAgICAgICAgem9vbU9wYWNpdHkgOiBcImF1dG9cIixcclxuXHJcbiAgICAgICAgLy8gVHJhbnNpdGlvbiBlZmZlY3QgYmV0d2VlbiBzbGlkZXNcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFBvc3NpYmxlIHZhbHVlczpcclxuICAgICAgICAvLyAgIGZhbHNlICAgICAgICAgICAgLSBkaXNhYmxlXHJcbiAgICAgICAgLy8gICBcImZhZGUnXHJcbiAgICAgICAgLy8gICBcInNsaWRlJ1xyXG4gICAgICAgIC8vICAgXCJjaXJjdWxhcidcclxuICAgICAgICAvLyAgIFwidHViZSdcclxuICAgICAgICAvLyAgIFwiem9vbS1pbi1vdXQnXHJcbiAgICAgICAgLy8gICBcInJvdGF0ZSdcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRyYW5zaXRpb25FZmZlY3QgOiBcImZhZGVcIixcclxuXHJcbiAgICAgICAgLy8gRHVyYXRpb24gaW4gbXMgZm9yIHRyYW5zaXRpb24gYW5pbWF0aW9uXHJcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uIDogMzY2LFxyXG5cclxuICAgICAgICAvLyBDdXN0b20gQ1NTIGNsYXNzIGZvciBzbGlkZSBlbGVtZW50XHJcbiAgICAgICAgc2xpZGVDbGFzcyA6ICcnLFxyXG5cclxuICAgICAgICAvLyBDdXN0b20gQ1NTIGNsYXNzIGZvciBsYXlvdXRcclxuICAgICAgICBiYXNlQ2xhc3MgOiAnJyxcclxuXHJcbiAgICAgICAgLy8gQmFzZSB0ZW1wbGF0ZSBmb3IgbGF5b3V0XHJcbiAgICAgICAgYmFzZVRwbFx0OlxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWNvbnRhaW5lclwiIHJvbGU9XCJkaWFsb2dcIiB0YWJpbmRleD1cIi0xXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWJnXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWlubmVyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1pbmZvYmFyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBkYXRhLWZhbmN5Ym94LWluZGV4Pjwvc3Bhbj4mbmJzcDsvJm5ic3A7PHNwYW4gZGF0YS1mYW5jeWJveC1jb3VudD48L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtdG9vbGJhclwiPnt7YnV0dG9uc319PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1uYXZpZ2F0aW9uXCI+e3thcnJvd3N9fTwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtc3RhZ2VcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWNhcHRpb24td3JhcFwiPjxkaXYgY2xhc3M9XCJmYW5jeWJveC1jYXB0aW9uXCI+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nLFxyXG5cclxuICAgICAgICAvLyBMb2FkaW5nIGluZGljYXRvciB0ZW1wbGF0ZVxyXG4gICAgICAgIHNwaW5uZXJUcGwgOiAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWxvYWRpbmdcIj48L2Rpdj4nLFxyXG5cclxuICAgICAgICAvLyBFcnJvciBtZXNzYWdlIHRlbXBsYXRlXHJcbiAgICAgICAgZXJyb3JUcGwgOiAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWVycm9yXCI+PHA+e3tFUlJPUn19PHA+PC9kaXY+JyxcclxuXHJcbiAgICAgICAgYnRuVHBsIDoge1xyXG5cclxuICAgICAgICAgICAgZG93bmxvYWQgOiAnPGEgZG93bmxvYWQgZGF0YS1mYW5jeWJveC1kb3dubG9hZCBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLWRvd25sb2FkXCIgdGl0bGU9XCJ7e0RPV05MT0FEfX1cIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxzdmcgdmlld0JveD1cIjAgMCA0MCA0MFwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxwYXRoIGQ9XCJNMjAsMjMgTDIwLDggTDIwLDIzIEwxMywxNiBMMjAsMjMgTDI3LDE2IEwyMCwyMyBNMjYsMjggTDEzLDI4IEwyNywyOCBMMTQsMjhcIiAvPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9zdmc+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzwvYT4nLFxyXG5cclxuICAgICAgICAgICAgem9vbSA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtem9vbSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXpvb21cIiB0aXRsZT1cInt7Wk9PTX19XCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8c3ZnIHZpZXdCb3g9XCIwIDAgNDAgNDBcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8cGF0aCBkPVwiTSAxOCwxNyBtLTgsMCBhIDgsOCAwIDEsMCAxNiwwIGEgOCw4IDAgMSwwIC0xNiwwIE0yNSwyMyBMMzEsMjkgTDI1LDIzXCIgLz4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvc3ZnPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L2J1dHRvbj4nLFxyXG5cclxuICAgICAgICAgICAgY2xvc2UgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWNsb3NlIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tY2xvc2VcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDQwIDQwXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHBhdGggZD1cIk0xMCwxMCBMMzAsMzAgTTMwLDEwIEwxMCwzMFwiIC8+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L3N2Zz4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPC9idXR0b24+JyxcclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgc21hbGwgY2xvc2UgYnV0dG9uIHdpbGwgYmUgYXBwZW5kZWQgdG8geW91ciBodG1sL2lubGluZS9hamF4IGNvbnRlbnQgYnkgZGVmYXVsdCxcclxuICAgICAgICAgICAgLy8gaWYgXCJzbWFsbEJ0blwiIG9wdGlvbiBpcyBub3Qgc2V0IHRvIGZhbHNlXHJcbiAgICAgICAgICAgIHNtYWxsQnRuICAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWNsb3NlIGNsYXNzPVwiZmFuY3lib3gtY2xvc2Utc21hbGxcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPjwvYnV0dG9uPicsXHJcblxyXG4gICAgICAgICAgICAvLyBBcnJvd3NcclxuICAgICAgICAgICAgYXJyb3dMZWZ0IDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1wcmV2IGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tYXJyb3dfbGVmdFwiIHRpdGxlPVwie3tQUkVWfX1cIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3ZnIHZpZXdCb3g9XCIwIDAgNDAgNDBcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxwYXRoIGQ9XCJNMTAsMjAgTDMwLDIwIEwxMCwyMCBMMTgsMjggTDEwLDIwIEwxOCwxMiBMMTAsMjBcIj48L3BhdGg+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9zdmc+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvYnV0dG9uPicsXHJcblxyXG4gICAgICAgICAgICBhcnJvd1JpZ2h0IDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1uZXh0IGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tYXJyb3dfcmlnaHRcIiB0aXRsZT1cInt7TkVYVH19XCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzdmcgdmlld0JveD1cIjAgMCA0MCA0MFwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxwYXRoIGQ9XCJNMzAsMjAgTDEwLDIwIEwzMCwyMCBMMjIsMjggTDMwLDIwIEwyMiwxMiBMMzAsMjBcIj48L3BhdGg+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvc3ZnPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9idXR0b24+J1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIENvbnRhaW5lciBpcyBpbmplY3RlZCBpbnRvIHRoaXMgZWxlbWVudFxyXG4gICAgICAgIHBhcmVudEVsIDogJ2JvZHknLFxyXG5cclxuXHJcbiAgICAgICAgLy8gRm9jdXMgaGFuZGxpbmdcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAvLyBUcnkgdG8gZm9jdXMgb24gdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGFmdGVyIG9wZW5pbmdcclxuICAgICAgICBhdXRvRm9jdXMgOiBmYWxzZSxcclxuXHJcbiAgICAgICAgLy8gUHV0IGZvY3VzIGJhY2sgdG8gYWN0aXZlIGVsZW1lbnQgYWZ0ZXIgY2xvc2luZ1xyXG4gICAgICAgIGJhY2tGb2N1cyA6IHRydWUsXHJcblxyXG4gICAgICAgIC8vIERvIG5vdCBsZXQgdXNlciB0byBmb2N1cyBvbiBlbGVtZW50IG91dHNpZGUgbW9kYWwgY29udGVudFxyXG4gICAgICAgIHRyYXBGb2N1cyA6IHRydWUsXHJcblxyXG5cclxuICAgICAgICAvLyBNb2R1bGUgc3BlY2lmaWMgb3B0aW9uc1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIGZ1bGxTY3JlZW4gOiB7XHJcbiAgICAgICAgICAgIGF1dG9TdGFydCA6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIFNldCBgdG91Y2g6IGZhbHNlYCB0byBkaXNhYmxlIGRyYWdnaW5nL3N3aXBpbmdcclxuICAgICAgICB0b3VjaCA6IHtcclxuICAgICAgICAgICAgdmVydGljYWwgOiB0cnVlLCAgLy8gQWxsb3cgdG8gZHJhZyBjb250ZW50IHZlcnRpY2FsbHlcclxuICAgICAgICAgICAgbW9tZW50dW0gOiB0cnVlICAgLy8gQ29udGludWUgbW92ZW1lbnQgYWZ0ZXIgcmVsZWFzaW5nIG1vdXNlL3RvdWNoIHdoZW4gcGFubmluZ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIEhhc2ggdmFsdWUgd2hlbiBpbml0aWFsaXppbmcgbWFudWFsbHksXHJcbiAgICAgICAgLy8gc2V0IGBmYWxzZWAgdG8gZGlzYWJsZSBoYXNoIGNoYW5nZVxyXG4gICAgICAgIGhhc2ggOiBudWxsLFxyXG5cclxuICAgICAgICAvLyBDdXN0b21pemUgb3IgYWRkIG5ldyBtZWRpYSB0eXBlc1xyXG4gICAgICAgIC8vIEV4YW1wbGU6XHJcbiAgICAgICAgLypcclxuICAgICAgICBtZWRpYSA6IHtcclxuICAgICAgICAgICAgeW91dHViZSA6IHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheSA6IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG4gICAgICAgIG1lZGlhIDoge30sXHJcblxyXG4gICAgICAgIHNsaWRlU2hvdyA6IHtcclxuICAgICAgICAgICAgYXV0b1N0YXJ0IDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNwZWVkICAgICA6IDQwMDBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0aHVtYnMgOiB7XHJcblx0XHRcdGF1dG9TdGFydCAgIDogZmFsc2UsICAgICAgICAgICAgICAgICAgLy8gRGlzcGxheSB0aHVtYm5haWxzIG9uIG9wZW5pbmdcclxuXHRcdFx0aGlkZU9uQ2xvc2UgOiB0cnVlLCAgICAgICAgICAgICAgICAgICAvLyBIaWRlIHRodW1ibmFpbCBncmlkIHdoZW4gY2xvc2luZyBhbmltYXRpb24gc3RhcnRzXHJcblx0XHRcdHBhcmVudEVsICAgIDogJy5mYW5jeWJveC1jb250YWluZXInLCAgLy8gQ29udGFpbmVyIGlzIGluamVjdGVkIGludG8gdGhpcyBlbGVtZW50XHJcblx0XHRcdGF4aXMgICAgICAgIDogJ3knICAgICAgICAgICAgICAgICAgICAgLy8gVmVydGljYWwgKHkpIG9yIGhvcml6b250YWwgKHgpIHNjcm9sbGluZ1xyXG5cdFx0fSxcclxuXHJcbiAgICAgICAgLy8gVXNlIG1vdXNld2hlZWwgdG8gbmF2aWdhdGUgZ2FsbGVyeVxyXG4gICAgICAgIC8vIElmICdhdXRvJyAtIGVuYWJsZWQgZm9yIGltYWdlcyBvbmx5XHJcbiAgICAgICAgd2hlZWwgOiAnYXV0bycsXHJcblxyXG4gICAgICAgIC8vIENhbGxiYWNrc1xyXG4gICAgICAgIC8vPT09PT09PT09PVxyXG5cclxuICAgICAgICAvLyBTZWUgRG9jdW1lbnRhdGlvbi9BUEkvRXZlbnRzIGZvciBtb3JlIGluZm9ybWF0aW9uXHJcbiAgICAgICAgLy8gRXhhbXBsZTpcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICBhZnRlclNob3c6IGZ1bmN0aW9uKCBpbnN0YW5jZSwgY3VycmVudCApIHtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oICdDbGlja2VkIGVsZW1lbnQ6JyApO1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyggY3VycmVudC5vcHRzLiRvcmlnICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAqL1xyXG5cclxuICAgICAgICBvbkluaXQgICAgICAgOiAkLm5vb3AsICAvLyBXaGVuIGluc3RhbmNlIGhhcyBiZWVuIGluaXRpYWxpemVkXHJcblxyXG4gICAgICAgIGJlZm9yZUxvYWQgICA6ICQubm9vcCwgIC8vIEJlZm9yZSB0aGUgY29udGVudCBvZiBhIHNsaWRlIGlzIGJlaW5nIGxvYWRlZFxyXG4gICAgICAgIGFmdGVyTG9hZCAgICA6ICQubm9vcCwgIC8vIFdoZW4gdGhlIGNvbnRlbnQgb2YgYSBzbGlkZSBpcyBkb25lIGxvYWRpbmdcclxuXHJcbiAgICAgICAgYmVmb3JlU2hvdyAgIDogJC5ub29wLCAgLy8gQmVmb3JlIG9wZW4gYW5pbWF0aW9uIHN0YXJ0c1xyXG4gICAgICAgIGFmdGVyU2hvdyAgICA6ICQubm9vcCwgIC8vIFdoZW4gY29udGVudCBpcyBkb25lIGxvYWRpbmcgYW5kIGFuaW1hdGluZ1xyXG5cclxuICAgICAgICBiZWZvcmVDbG9zZSAgOiAkLm5vb3AsICAvLyBCZWZvcmUgdGhlIGluc3RhbmNlIGF0dGVtcHRzIHRvIGNsb3NlLiBSZXR1cm4gZmFsc2UgdG8gY2FuY2VsIHRoZSBjbG9zZS5cclxuICAgICAgICBhZnRlckNsb3NlICAgOiAkLm5vb3AsICAvLyBBZnRlciBpbnN0YW5jZSBoYXMgYmVlbiBjbG9zZWRcclxuXHJcbiAgICAgICAgb25BY3RpdmF0ZSAgIDogJC5ub29wLCAgLy8gV2hlbiBpbnN0YW5jZSBpcyBicm91Z2h0IHRvIGZyb250XHJcbiAgICAgICAgb25EZWFjdGl2YXRlIDogJC5ub29wLCAgLy8gV2hlbiBvdGhlciBpbnN0YW5jZSBoYXMgYmVlbiBhY3RpdmF0ZWRcclxuXHJcblxyXG4gICAgICAgIC8vIEludGVyYWN0aW9uXHJcbiAgICAgICAgLy8gPT09PT09PT09PT1cclxuXHJcbiAgICAgICAgLy8gVXNlIG9wdGlvbnMgYmVsb3cgdG8gY3VzdG9taXplIHRha2VuIGFjdGlvbiB3aGVuIHVzZXIgY2xpY2tzIG9yIGRvdWJsZSBjbGlja3Mgb24gdGhlIGZhbmN5Qm94IGFyZWEsXHJcbiAgICAgICAgLy8gZWFjaCBvcHRpb24gY2FuIGJlIHN0cmluZyBvciBtZXRob2QgdGhhdCByZXR1cm5zIHZhbHVlLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUG9zc2libGUgdmFsdWVzOlxyXG4gICAgICAgIC8vICAgXCJjbG9zZVwiICAgICAgICAgICAtIGNsb3NlIGluc3RhbmNlXHJcbiAgICAgICAgLy8gICBcIm5leHRcIiAgICAgICAgICAgIC0gbW92ZSB0byBuZXh0IGdhbGxlcnkgaXRlbVxyXG4gICAgICAgIC8vICAgXCJuZXh0T3JDbG9zZVwiICAgICAtIG1vdmUgdG8gbmV4dCBnYWxsZXJ5IGl0ZW0gb3IgY2xvc2UgaWYgZ2FsbGVyeSBoYXMgb25seSBvbmUgaXRlbVxyXG4gICAgICAgIC8vICAgXCJ0b2dnbGVDb250cm9sc1wiICAtIHNob3cvaGlkZSBjb250cm9sc1xyXG4gICAgICAgIC8vICAgXCJ6b29tXCIgICAgICAgICAgICAtIHpvb20gaW1hZ2UgKGlmIGxvYWRlZClcclxuICAgICAgICAvLyAgIGZhbHNlICAgICAgICAgICAgIC0gZG8gbm90aGluZ1xyXG5cclxuICAgICAgICAvLyBDbGlja2VkIG9uIHRoZSBjb250ZW50XHJcbiAgICAgICAgY2xpY2tDb250ZW50IDogZnVuY3Rpb24oIGN1cnJlbnQsIGV2ZW50ICkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudC50eXBlID09PSAnaW1hZ2UnID8gJ3pvb20nIDogZmFsc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gQ2xpY2tlZCBvbiB0aGUgc2xpZGVcclxuICAgICAgICBjbGlja1NsaWRlIDogJ2Nsb3NlJyxcclxuXHJcbiAgICAgICAgLy8gQ2xpY2tlZCBvbiB0aGUgYmFja2dyb3VuZCAoYmFja2Ryb3ApIGVsZW1lbnRcclxuICAgICAgICBjbGlja091dHNpZGUgOiAnY2xvc2UnLFxyXG5cclxuICAgICAgICAvLyBTYW1lIGFzIHByZXZpb3VzIHR3bywgYnV0IGZvciBkb3VibGUgY2xpY2tcclxuICAgICAgICBkYmxjbGlja0NvbnRlbnQgOiBmYWxzZSxcclxuICAgICAgICBkYmxjbGlja1NsaWRlICAgOiBmYWxzZSxcclxuICAgICAgICBkYmxjbGlja091dHNpZGUgOiBmYWxzZSxcclxuXHJcblxyXG4gICAgICAgIC8vIEN1c3RvbSBvcHRpb25zIHdoZW4gbW9iaWxlIGRldmljZSBpcyBkZXRlY3RlZFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBtb2JpbGUgOiB7XHJcbiAgICAgICAgICAgIGlkbGVUaW1lIDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1hcmdpbiAgIDogMCxcclxuXHJcbiAgICAgICAgICAgIGNsaWNrQ29udGVudCA6IGZ1bmN0aW9uKCBjdXJyZW50LCBldmVudCApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50LnR5cGUgPT09ICdpbWFnZScgPyAndG9nZ2xlQ29udHJvbHMnIDogZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsaWNrU2xpZGUgOiBmdW5jdGlvbiggY3VycmVudCwgZXZlbnQgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudC50eXBlID09PSAnaW1hZ2UnID8gJ3RvZ2dsZUNvbnRyb2xzJyA6ICdjbG9zZSc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRibGNsaWNrQ29udGVudCA6IGZ1bmN0aW9uKCBjdXJyZW50LCBldmVudCApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50LnR5cGUgPT09ICdpbWFnZScgPyAnem9vbScgOiBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGJsY2xpY2tTbGlkZSA6IGZ1bmN0aW9uKCBjdXJyZW50LCBldmVudCApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50LnR5cGUgPT09ICdpbWFnZScgPyAnem9vbScgOiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvLyBJbnRlcm5hdGlvbmFsaXphdGlvblxyXG4gICAgICAgIC8vID09PT09PT09PT09PVxyXG5cclxuICAgICAgICBsYW5nIDogJ2VuJyxcclxuICAgICAgICBpMThuIDoge1xyXG4gICAgICAgICAgICAnZW4nIDoge1xyXG4gICAgICAgICAgICAgICAgQ0xPU0UgICAgICAgOiAnQ2xvc2UnLFxyXG4gICAgICAgICAgICAgICAgTkVYVCAgICAgICAgOiAnTmV4dCcsXHJcbiAgICAgICAgICAgICAgICBQUkVWICAgICAgICA6ICdQcmV2aW91cycsXHJcbiAgICAgICAgICAgICAgICBFUlJPUiAgICAgICA6ICdUaGUgcmVxdWVzdGVkIGNvbnRlbnQgY2Fubm90IGJlIGxvYWRlZC4gPGJyLz4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxyXG4gICAgICAgICAgICAgICAgUExBWV9TVEFSVCAgOiAnU3RhcnQgc2xpZGVzaG93JyxcclxuICAgICAgICAgICAgICAgIFBMQVlfU1RPUCAgIDogJ1BhdXNlIHNsaWRlc2hvdycsXHJcbiAgICAgICAgICAgICAgICBGVUxMX1NDUkVFTiA6ICdGdWxsIHNjcmVlbicsXHJcbiAgICAgICAgICAgICAgICBUSFVNQlMgICAgICA6ICdUaHVtYm5haWxzJyxcclxuICAgICAgICAgICAgICAgIERPV05MT0FEICAgIDogJ0Rvd25sb2FkJyxcclxuICAgICAgICAgICAgICAgIFNIQVJFICAgICAgIDogJ1NoYXJlJyxcclxuICAgICAgICAgICAgICAgIFpPT00gICAgICAgIDogJ1pvb20nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdkZScgOiB7XHJcbiAgICAgICAgICAgICAgICBDTE9TRSAgICAgICA6ICdTY2hsaWVzc2VuJyxcclxuICAgICAgICAgICAgICAgIE5FWFQgICAgICAgIDogJ1dlaXRlcicsXHJcbiAgICAgICAgICAgICAgICBQUkVWICAgICAgICA6ICdadXLDvGNrJyxcclxuICAgICAgICAgICAgICAgIEVSUk9SICAgICAgIDogJ0RpZSBhbmdlZm9yZGVydGVuIERhdGVuIGtvbm50ZW4gbmljaHQgZ2VsYWRlbiB3ZXJkZW4uIDxici8+IEJpdHRlIHZlcnN1Y2hlbiBTaWUgZXMgc3DDpHRlciBub2NobWFsLicsXHJcbiAgICAgICAgICAgICAgICBQTEFZX1NUQVJUICA6ICdEaWFzY2hhdSBzdGFydGVuJyxcclxuICAgICAgICAgICAgICAgIFBMQVlfU1RPUCAgIDogJ0RpYXNjaGF1IGJlZW5kZW4nLFxyXG4gICAgICAgICAgICAgICAgRlVMTF9TQ1JFRU4gOiAnVm9sbGJpbGQnLFxyXG4gICAgICAgICAgICAgICAgVEhVTUJTICAgICAgOiAnVm9yc2NoYXViaWxkZXInLFxyXG4gICAgICAgICAgICAgICAgRE9XTkxPQUQgICAgOiAnSGVydW50ZXJsYWRlbicsXHJcbiAgICAgICAgICAgICAgICBTSEFSRSAgICAgICA6ICdUZWlsZW4nLFxyXG4gICAgICAgICAgICAgICAgWk9PTSAgICAgICAgOiAnTWHDn3N0YWInXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBGZXcgdXNlZnVsIHZhcmlhYmxlcyBhbmQgbWV0aG9kc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICB2YXIgJFcgPSAkKHdpbmRvdyk7XHJcbiAgICB2YXIgJEQgPSAkKGRvY3VtZW50KTtcclxuXHJcbiAgICB2YXIgY2FsbGVkID0gMDtcclxuXHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGEgalF1ZXJ5IG9iamVjdCBhbmQgbm90IGEgbmF0aXZlIEphdmFTY3JpcHQgb2JqZWN0XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICB2YXIgaXNRdWVyeSA9IGZ1bmN0aW9uICggb2JqICkge1xyXG4gICAgICAgIHJldHVybiBvYmogJiYgb2JqLmhhc093blByb3BlcnR5ICYmIG9iaiBpbnN0YW5jZW9mICQ7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBIYW5kbGUgbXVsdGlwbGUgYnJvd3NlcnMgZm9yIFwicmVxdWVzdEFuaW1hdGlvbkZyYW1lXCIgYW5kIFwiY2FuY2VsQW5pbWF0aW9uRnJhbWVcIlxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHZhciByZXF1ZXN0QUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgICAgIC8vIGlmIGFsbCBlbHNlIGZhaWxzLCB1c2Ugc2V0VGltZW91dFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgIH0pKCk7XHJcblxyXG5cclxuICAgIC8vIERldGVjdCB0aGUgc3VwcG9ydGVkIHRyYW5zaXRpb24tZW5kIGV2ZW50IHByb3BlcnR5IG5hbWVcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICB2YXIgdHJhbnNpdGlvbkVuZCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHQsIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZha2VlbGVtZW50XCIpO1xyXG5cclxuICAgICAgICB2YXIgdHJhbnNpdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIFwidHJhbnNpdGlvblwiICAgICAgOiBcInRyYW5zaXRpb25lbmRcIixcclxuICAgICAgICAgICAgXCJPVHJhbnNpdGlvblwiICAgICA6IFwib1RyYW5zaXRpb25FbmRcIixcclxuICAgICAgICAgICAgXCJNb3pUcmFuc2l0aW9uXCIgICA6IFwidHJhbnNpdGlvbmVuZFwiLFxyXG4gICAgICAgICAgICBcIldlYmtpdFRyYW5zaXRpb25cIjogXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKHQgaW4gdHJhbnNpdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25zW3RdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJ3RyYW5zaXRpb25lbmQnO1xyXG4gICAgfSkoKTtcclxuXHJcblxyXG4gICAgLy8gRm9yY2UgcmVkcmF3IG9uIGFuIGVsZW1lbnQuXHJcbiAgICAvLyBUaGlzIGhlbHBzIGluIGNhc2VzIHdoZXJlIHRoZSBicm93c2VyIGRvZXNuJ3QgcmVkcmF3IGFuIHVwZGF0ZWQgZWxlbWVudCBwcm9wZXJseS5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHZhciBmb3JjZVJlZHJhdyA9IGZ1bmN0aW9uKCAkZWwgKSB7XHJcbiAgICAgICAgcmV0dXJuICggJGVsICYmICRlbC5sZW5ndGggJiYgJGVsWzBdLm9mZnNldEhlaWdodCApO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHZhciBGYW5jeUJveCA9IGZ1bmN0aW9uKCBjb250ZW50LCBvcHRzLCBpbmRleCApIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHNlbGYub3B0cyA9ICQuZXh0ZW5kKCB0cnVlLCB7IGluZGV4IDogaW5kZXggfSwgJC5mYW5jeWJveC5kZWZhdWx0cywgb3B0cyB8fCB7fSApO1xyXG5cclxuICAgICAgICBpZiAoICQuZmFuY3lib3guaXNNb2JpbGUgKSB7XHJcbiAgICAgICAgICAgIHNlbGYub3B0cyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgc2VsZi5vcHRzLCBzZWxmLm9wdHMubW9iaWxlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFeGNsdWRlIGJ1dHRvbnMgb3B0aW9uIGZyb20gZGVlcCBtZXJnaW5nXHJcbiAgICAgICAgaWYgKCBvcHRzICYmICQuaXNBcnJheSggb3B0cy5idXR0b25zICkgKSB7XHJcbiAgICAgICAgICAgIHNlbGYub3B0cy5idXR0b25zID0gb3B0cy5idXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZi5pZCAgICA9IHNlbGYub3B0cy5pZCB8fCArK2NhbGxlZDtcclxuICAgICAgICBzZWxmLmdyb3VwID0gW107XHJcblxyXG4gICAgICAgIHNlbGYuY3VyckluZGV4ID0gcGFyc2VJbnQoIHNlbGYub3B0cy5pbmRleCwgMTAgKSB8fCAwO1xyXG4gICAgICAgIHNlbGYucHJldkluZGV4ID0gbnVsbDtcclxuXHJcbiAgICAgICAgc2VsZi5wcmV2UG9zID0gbnVsbDtcclxuICAgICAgICBzZWxmLmN1cnJQb3MgPSAwO1xyXG5cclxuICAgICAgICBzZWxmLmZpcnN0UnVuID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGdyb3VwIGVsZW1lbnRzIGZyb20gb3JpZ2luYWwgaXRlbSBjb2xsZWN0aW9uXHJcbiAgICAgICAgc2VsZi5jcmVhdGVHcm91cCggY29udGVudCApO1xyXG5cclxuICAgICAgICBpZiAoICFzZWxmLmdyb3VwLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2F2ZSBsYXN0IGFjdGl2ZSBlbGVtZW50IGFuZCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxyXG4gICAgICAgIHNlbGYuJGxhc3RGb2N1cyA9ICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkuYmx1cigpO1xyXG5cclxuICAgICAgICAvLyBDb2xsZWN0aW9uIG9mIGdhbGxlcnkgb2JqZWN0c1xyXG4gICAgICAgIHNlbGYuc2xpZGVzID0ge307XHJcblxyXG4gICAgICAgIHNlbGYuaW5pdCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkLmV4dGVuZChGYW5jeUJveC5wcm90b3R5cGUsIHtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIERPTSBzdHJ1Y3R1cmVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBpbml0IDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIGZpcnN0SXRlbSAgICAgID0gc2VsZi5ncm91cFsgc2VsZi5jdXJySW5kZXggXSxcclxuICAgICAgICAgICAgICAgIGZpcnN0SXRlbU9wdHMgID0gZmlyc3RJdGVtLm9wdHMsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxiYXJXaWR0aCA9ICQuZmFuY3lib3guc2Nyb2xsYmFyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAkc2Nyb2xsRGl2LFxyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0cjtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuc2Nyb2xsVG9wICA9ICRELnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICBzZWxmLnNjcm9sbExlZnQgPSAkRC5zY3JvbGxMZWZ0KCk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gSGlkZSBzY3JvbGxiYXJzXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgICAgaWYgKCAhJC5mYW5jeWJveC5nZXRJbnN0YW5jZSgpICkge1xyXG5cclxuICAgICAgICAgICAgICAgICQoICdib2R5JyApLmFkZENsYXNzKCAnZmFuY3lib3gtYWN0aXZlJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlPUyBoYWNrXHJcbiAgICAgICAgICAgICAgICBpZiAoIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW0gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlPUyBoYXMgcHJvYmxlbXMgZm9yIGlucHV0IGVsZW1lbnRzIGluc2lkZSBmaXhlZCBjb250YWluZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB3b3JrYXJvdW5kIGlzIHRvIGFwcGx5IGBwb3NpdGlvbjogZml4ZWRgIHRvIGA8Ym9keT5gIGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5mb3J0dW5hdGVseSwgdGhpcyBtYWtlcyBpdCBsb3NlIHRoZSBzY3JvbGxiYXJzIGFuZCBmb3JjZXMgYWRkcmVzcyBiYXIgdG8gYXBwZWFyLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGZpcnN0SXRlbS50eXBlICE9PSAnaW1hZ2UnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCAnYm9keScgKS5jc3MoICd0b3AnLCAkKCAnYm9keScgKS5zY3JvbGxUb3AoKSAqIC0xICkuYWRkQ2xhc3MoICdmYW5jeWJveC1pb3NmaXgnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoICEkLmZhbmN5Ym94LmlzTW9iaWxlICYmIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNjcm9sbGJhcldpZHRoID09PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY3JvbGxEaXYgPSAkKCc8ZGl2IHN0eWxlPVwid2lkdGg6NTBweDtoZWlnaHQ6NTBweDtvdmVyZmxvdzpzY3JvbGw7XCIgLz4nKS5hcHBlbmRUbyggJ2JvZHknICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxiYXJXaWR0aCA9ICQuZmFuY3lib3guc2Nyb2xsYmFyV2lkdGggPSAkc2Nyb2xsRGl2WzBdLm9mZnNldFdpZHRoIC0gJHNjcm9sbERpdlswXS5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY3JvbGxEaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCAnaGVhZCcgKS5hcHBlbmQoICc8c3R5bGUgaWQ9XCJmYW5jeWJveC1zdHlsZS1ub3Njcm9sbFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiPi5jb21wZW5zYXRlLWZvci1zY3JvbGxiYXIgeyBtYXJnaW4tcmlnaHQ6ICcgKyBzY3JvbGxiYXJXaWR0aCArICdweDsgfTwvc3R5bGU+JyApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoICdib2R5JyApLmFkZENsYXNzKCAnY29tcGVuc2F0ZS1mb3Itc2Nyb2xsYmFyJyApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gQnVpbGQgaHRtbCBtYXJrdXAgYW5kIHNldCByZWZlcmVuY2VzXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgICAgLy8gQnVpbGQgaHRtbCBjb2RlIGZvciBidXR0b25zIGFuZCBpbnNlcnQgaW50byBtYWluIHRlbXBsYXRlXHJcbiAgICAgICAgICAgIGJ1dHRvblN0ciA9ICcnO1xyXG5cclxuICAgICAgICAgICAgJC5lYWNoKCBmaXJzdEl0ZW1PcHRzLmJ1dHRvbnMsIGZ1bmN0aW9uKCBpbmRleCwgdmFsdWUgKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHIgKz0gKCBmaXJzdEl0ZW1PcHRzLmJ0blRwbFsgdmFsdWUgXSB8fCAnJyApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBtYXJrdXAgZnJvbSBiYXNlIHRlbXBsYXRlLCBpdCB3aWxsIGJlIGluaXRpYWxseSBoaWRkZW4gdG9cclxuICAgICAgICAgICAgLy8gYXZvaWQgdW5uZWNlc3Nhcnkgd29yayBsaWtlIHBhaW50aW5nIHdoaWxlIGluaXRpYWxpemluZyBpcyBub3QgY29tcGxldGVcclxuICAgICAgICAgICAgJGNvbnRhaW5lciA9ICQoXHJcbiAgICAgICAgICAgICAgICBzZWxmLnRyYW5zbGF0ZSggc2VsZixcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdEl0ZW1PcHRzLmJhc2VUcGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoICdcXHtcXHtidXR0b25zXFx9XFx9JywgYnV0dG9uU3RyIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoICdcXHtcXHthcnJvd3NcXH1cXH0nLCBmaXJzdEl0ZW1PcHRzLmJ0blRwbC5hcnJvd0xlZnQgKyBmaXJzdEl0ZW1PcHRzLmJ0blRwbC5hcnJvd1JpZ2h0IClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoICdpZCcsICdmYW5jeWJveC1jb250YWluZXItJyArIHNlbGYuaWQgKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnZmFuY3lib3gtaXMtaGlkZGVuJyApXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoIGZpcnN0SXRlbU9wdHMuYmFzZUNsYXNzIClcclxuICAgICAgICAgICAgICAgIC5kYXRhKCAnRmFuY3lCb3gnLCBzZWxmIClcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyggZmlyc3RJdGVtT3B0cy5wYXJlbnRFbCApO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIG9iamVjdCBob2xkaW5nIHJlZmVyZW5jZXMgdG8galF1ZXJ5IHdyYXBwZWQgbm9kZXNcclxuICAgICAgICAgICAgc2VsZi4kcmVmcyA9IHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA6ICRjb250YWluZXJcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFsgJ2JnJywgJ2lubmVyJywgJ2luZm9iYXInLCAndG9vbGJhcicsICdzdGFnZScsICdjYXB0aW9uJywgJ25hdmlnYXRpb24nIF0uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiRyZWZzWyBpdGVtIF0gPSAkY29udGFpbmVyLmZpbmQoICcuZmFuY3lib3gtJyArIGl0ZW0gKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnRyaWdnZXIoICdvbkluaXQnICk7XHJcblxyXG4gICAgICAgICAgICAvLyBFbmFibGUgZXZlbnRzLCBkZWFjdGl2ZSBwcmV2aW91cyBpbnN0YW5jZXNcclxuICAgICAgICAgICAgc2VsZi5hY3RpdmF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gQnVpbGQgc2xpZGVzLCBsb2FkIGFuZCByZXZlYWwgY29udGVudFxyXG4gICAgICAgICAgICBzZWxmLmp1bXBUbyggc2VsZi5jdXJySW5kZXggKTtcclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgLy8gU2ltcGxlIGkxOG4gc3VwcG9ydCAtIHJlcGxhY2VzIG9iamVjdCBrZXlzIGZvdW5kIGluIHRlbXBsYXRlXHJcbiAgICAgICAgLy8gd2l0aCBjb3JyZXNwb25kaW5nIHZhbHVlc1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICB0cmFuc2xhdGUgOiBmdW5jdGlvbiggb2JqLCBzdHIgKSB7XHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBvYmoub3B0cy5pMThuWyBvYmoub3B0cy5sYW5nIF07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xce1xceyhcXHcrKVxcfVxcfS9nLCBmdW5jdGlvbihtYXRjaCwgbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gYXJyW25dO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYXJyYXkgb2YgZ2FsbHkgaXRlbSBvYmplY3RzXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgZWFjaCBvYmplY3QgaGFzIHZhbGlkIHR5cGUgYW5kIGNvbnRlbnRcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBjcmVhdGVHcm91cCA6IGZ1bmN0aW9uICggY29udGVudCApIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gJC5tYWtlQXJyYXkoIGNvbnRlbnQgKTtcclxuXHJcbiAgICAgICAgICAgICQuZWFjaChpdGVtcywgZnVuY3Rpb24oIGksIGl0ZW0gKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqICA9IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMgPSB7fSxcclxuICAgICAgICAgICAgICAgICAgICAkaXRlbSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kLFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYyxcclxuICAgICAgICAgICAgICAgICAgICBzcmNQYXJ0cztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdGVwIDEgLSBNYWtlIHN1cmUgd2UgaGF2ZSBhbiBvYmplY3RcclxuICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggJC5pc1BsYWluT2JqZWN0KCBpdGVtICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHByb2JhYmx5IGhhdmUgbWFudWFsIHVzYWdlIGhlcmUsIHNvbWV0aGluZyBsaWtlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJC5mYW5jeWJveC5vcGVuKCBbIHsgc3JjIDogXCJpbWFnZS5qcGdcIiwgdHlwZSA6IFwiaW1hZ2VcIiB9IF0gKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBvYmogID0gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRzID0gaXRlbS5vcHRzIHx8IGl0ZW07XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggJC50eXBlKCBpdGVtICkgPT09ICdvYmplY3QnICYmICQoIGl0ZW0gKS5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhlcmUgd2UgcHJvYmFibHkgaGF2ZSBqUXVlcnkgY29sbGVjdGlvbiByZXR1cm5lZCBieSBzb21lIHNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgJGl0ZW0gPSAkKCBpdGVtICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMgPSAkaXRlbS5kYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0cyA9ICQuZXh0ZW5kKCB7fSwgb3B0cywgb3B0cy5vcHRpb25zIHx8IHt9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhlcmUgd2Ugc3RvcmUgY2xpY2tlZCBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0cy4kb3JpZyA9ICRpdGVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvYmouc3JjID0gb3B0cy5zcmMgfHwgJGl0ZW0uYXR0ciggJ2hyZWYnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFzc3VtZSB0aGF0IHNpbXBsZSBzeW50YXggaXMgdXNlZCwgZm9yIGV4YW1wbGU6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBgJC5mYW5jeWJveC5vcGVuKCAkKFwiI3Rlc3RcIiksIHt9ICk7YFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggIW9iai50eXBlICYmICFvYmouc3JjICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmoudHlwZSA9ICdpbmxpbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouc3JjICA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFzc3VtZSB3ZSBoYXZlIGEgc2ltcGxlIGh0bWwgY29kZSwgZm9yIGV4YW1wbGU6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAkLmZhbmN5Ym94Lm9wZW4oICc8ZGl2PjxoMT5IaSE8L2gxPjwvZGl2PicgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlIDogJ2h0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmMgIDogaXRlbSArICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRWFjaCBnYWxsZXJ5IG9iamVjdCBoYXMgZnVsbCBjb2xsZWN0aW9uIG9mIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIG9iai5vcHRzID0gJC5leHRlbmQoIHRydWUsIHt9LCBzZWxmLm9wdHMsIG9wdHMgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgbWVyZ2UgYnV0dG9ucyBhcnJheVxyXG4gICAgICAgICAgICAgICAgaWYgKCAkLmlzQXJyYXkoIG9wdHMuYnV0dG9ucyApICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5vcHRzLmJ1dHRvbnMgPSBvcHRzLmJ1dHRvbnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN0ZXAgMiAtIE1ha2Ugc3VyZSB3ZSBoYXZlIGNvbnRlbnQgdHlwZSwgaWYgbm90IC0gdHJ5IHRvIGd1ZXNzXHJcbiAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgICAgICAgIHR5cGUgPSBvYmoudHlwZSB8fCBvYmoub3B0cy50eXBlO1xyXG4gICAgICAgICAgICAgICAgc3JjICA9IG9iai5zcmMgfHwgJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCAhdHlwZSAmJiBzcmMgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzcmMubWF0Y2goLyheZGF0YTppbWFnZVxcL1thLXowLTkrXFwvPV0qLCl8KFxcLihqcChlfGd8ZWcpfGdpZnxwbmd8Ym1wfHdlYnB8c3ZnfGljbykoKFxcP3wjKS4qKT8kKS9pKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdpbWFnZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIHNyYy5tYXRjaCgvXFwuKHBkZikoKFxcP3wjKS4qKT8kL2kpICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ3BkZic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGZvdW5kID0gc3JjLm1hdGNoKC9cXC4obXA0fG1vdnxvZ3YpKChcXD98IykuKik/JC9pKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICd2aWRlbyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFvYmoub3B0cy52aWRlb0Zvcm1hdCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5vcHRzLnZpZGVvRm9ybWF0ID0gJ3ZpZGVvLycgKyAoIGZvdW5kWzFdID09PSAnb2d2JyA/ICdvZ2cnIDogZm91bmRbMV0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBzcmMuY2hhckF0KDApID09PSAnIycgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnaW5saW5lJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai50eXBlID0gdHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlciggJ29iamVjdE5lZWRzVHlwZScsIG9iaiApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdGVwIDMgLSBTb21lIGFkanVzdG1lbnRzXHJcbiAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgICAgICAgICAgb2JqLmluZGV4ID0gc2VsZi5ncm91cC5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgJG9yaWcgYW5kICR0aHVtYiBvYmplY3RzIGV4aXN0XHJcbiAgICAgICAgICAgICAgICBpZiAoIG9iai5vcHRzLiRvcmlnICYmICFvYmoub3B0cy4kb3JpZy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9iai5vcHRzLiRvcmlnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggIW9iai5vcHRzLiR0aHVtYiAmJiBvYmoub3B0cy4kb3JpZyApIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoub3B0cy4kdGh1bWIgPSBvYmoub3B0cy4kb3JpZy5maW5kKCAnaW1nOmZpcnN0JyApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggb2JqLm9wdHMuJHRodW1iICYmICFvYmoub3B0cy4kdGh1bWIubGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmoub3B0cy4kdGh1bWI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gXCJjYXB0aW9uXCIgaXMgYSBcInNwZWNpYWxcIiBvcHRpb24sIGl0IGNhbiBiZSB1c2VkIHRvIGN1c3RvbWl6ZSBjYXB0aW9uIHBlciBnYWxsZXJ5IGl0ZW0gLi5cclxuICAgICAgICAgICAgICAgIGlmICggJC50eXBlKCBvYmoub3B0cy5jYXB0aW9uICkgPT09ICdmdW5jdGlvbicgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLm9wdHMuY2FwdGlvbiA9IG9iai5vcHRzLmNhcHRpb24uYXBwbHkoIGl0ZW0sIFsgc2VsZiwgb2JqIF0gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoICQudHlwZSggc2VsZi5vcHRzLmNhcHRpb24gKSA9PT0gJ2Z1bmN0aW9uJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoub3B0cy5jYXB0aW9uID0gc2VsZi5vcHRzLmNhcHRpb24uYXBwbHkoIGl0ZW0sIFsgc2VsZiwgb2JqIF0gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBjYXB0aW9uIGFzIGEgc3RyaW5nIG9yIGpRdWVyeSBvYmplY3RcclxuICAgICAgICAgICAgICAgIGlmICggISggb2JqLm9wdHMuY2FwdGlvbiBpbnN0YW5jZW9mICQgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoub3B0cy5jYXB0aW9uID0gb2JqLm9wdHMuY2FwdGlvbiA9PT0gdW5kZWZpbmVkID8gJycgOiBvYmoub3B0cy5jYXB0aW9uICsgJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdXJsIGNvbnRhaW5zIFwiZmlsdGVyXCIgdXNlZCB0byBmaWx0ZXIgdGhlIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIC8vIEV4YW1wbGU6IFwiYWpheC5odG1sICNzb21ldGhpbmdcIlxyXG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlID09PSAnYWpheCcgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjUGFydHMgPSBzcmMuc3BsaXQoL1xccysvLCAyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzcmNQYXJ0cy5sZW5ndGggPiAxICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouc3JjID0gc3JjUGFydHMuc2hpZnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5vcHRzLmZpbHRlciA9IHNyY1BhcnRzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggb2JqLm9wdHMuc21hbGxCdG4gPT0gJ2F1dG8nICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoICQuaW5BcnJheSggdHlwZSwgWydodG1sJywgJ2lubGluZScsICdhamF4J10gKSA+IC0xICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmoub3B0cy50b29sYmFyICA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmoub3B0cy5zbWFsbEJ0biA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5vcHRzLnNtYWxsQnRuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdHlwZSBpcyBcInBkZlwiLCB0aGVuIHNpbXBseSBsb2FkIGZpbGUgaW50byBpZnJhbWVcclxuICAgICAgICAgICAgICAgIGlmICggdHlwZSA9PT0gJ3BkZicgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLnR5cGUgPSAnaWZyYW1lJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLm9wdHMuaWZyYW1lLnByZWxvYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBIaWRlIGFsbCBidXR0b25zIGFuZCBkaXNhYmxlIGludGVyYWN0aXZpdHkgZm9yIG1vZGFsIGl0ZW1zXHJcbiAgICAgICAgICAgICAgICBpZiAoIG9iai5vcHRzLm1vZGFsICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvYmoub3B0cyA9ICQuZXh0ZW5kKHRydWUsIG9iai5vcHRzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBidXR0b25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm9iYXIgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyIDogMCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsQnRuIDogMCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc2FibGUga2V5Ym9hcmQgbmF2aWdhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZCA6IDAsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIHNvbWUgbW9kdWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZVNob3cgIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFNjcmVlbiA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1icyAgICAgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaCAgICAgIDogMCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc2FibGUgY2xpY2sgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tDb250ZW50ICAgIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrU2xpZGUgICAgICA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja091dHNpZGUgICAgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGJsY2xpY2tDb250ZW50IDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRibGNsaWNrU2xpZGUgICA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYmxjbGlja091dHNpZGUgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdGVwIDQgLSBBZGQgcHJvY2Vzc2VkIG9iamVjdCB0byBncm91cFxyXG4gICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLmdyb3VwLnB1c2goIG9iaiApO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvLyBBdHRhY2ggYW4gZXZlbnQgaGFuZGxlciBmdW5jdGlvbnMgZm9yOlxyXG4gICAgICAgIC8vICAgLSBuYXZpZ2F0aW9uIGJ1dHRvbnNcclxuICAgICAgICAvLyAgIC0gYnJvd3NlciBzY3JvbGxpbmcsIHJlc2l6aW5nO1xyXG4gICAgICAgIC8vICAgLSBmb2N1c2luZ1xyXG4gICAgICAgIC8vICAgLSBrZXlib2FyZFxyXG4gICAgICAgIC8vICAgLSBkZXRlY3QgaWRsZVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIGFkZEV2ZW50cyA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnJlbW92ZUV2ZW50cygpO1xyXG5cclxuICAgICAgICAgICAgLy8gTWFrZSBuYXZpZ2F0aW9uIGVsZW1lbnRzIGNsaWNrYWJsZVxyXG4gICAgICAgICAgICBzZWxmLiRyZWZzLmNvbnRhaW5lci5vbignY2xpY2suZmItY2xvc2UnLCAnW2RhdGEtZmFuY3lib3gtY2xvc2VdJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNsb3NlKCBlICk7XHJcblxyXG4gICAgICAgICAgICB9KS5vbiggJ2NsaWNrLmZiLXByZXYgdG91Y2hlbmQuZmItcHJldicsICdbZGF0YS1mYW5jeWJveC1wcmV2XScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi5wcmV2aW91cygpO1xyXG5cclxuICAgICAgICAgICAgfSkub24oICdjbGljay5mYi1uZXh0IHRvdWNoZW5kLmZiLW5leHQnLCAnW2RhdGEtZmFuY3lib3gtbmV4dF0nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYubmV4dCgpO1xyXG5cclxuICAgICAgICAgICAgfSkub24oICdjbGljay5mYicsICdbZGF0YS1mYW5jeWJveC16b29tXScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIENsaWNrIGhhbmRsZXIgZm9yIHpvb20gYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzZWxmWyBzZWxmLmlzU2NhbGVkRG93bigpID8gJ3NjYWxlVG9BY3R1YWwnIDogJ3NjYWxlVG9GaXQnIF0oKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIHBhZ2Ugc2Nyb2xsaW5nIGFuZCBicm93c2VyIHJlc2l6aW5nXHJcbiAgICAgICAgICAgICRXLm9uKCdvcmllbnRhdGlvbmNoYW5nZS5mYiByZXNpemUuZmInLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBlICYmIGUub3JpZ2luYWxFdmVudCAmJiBlLm9yaWdpbmFsRXZlbnQudHlwZSA9PT0gXCJyZXNpemVcIiApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFGcmFtZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZWZzLnN0YWdlLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcmVmcy5zdGFnZS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUcmFwIGtleWJvYXJkIGZvY3VzIGluc2lkZSBvZiB0aGUgbW9kYWwsIHNvIHRoZSB1c2VyIGRvZXMgbm90IGFjY2lkZW50YWxseSB0YWIgb3V0c2lkZSBvZiB0aGUgbW9kYWxcclxuICAgICAgICAgICAgLy8gKGEuay5hLiBcImVzY2FwaW5nIHRoZSBtb2RhbFwiKVxyXG4gICAgICAgICAgICAkRC5vbignZm9jdXNpbi5mYicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9ICQuZmFuY3lib3ggPyAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCkgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggaW5zdGFuY2UuaXNDbG9zaW5nIHx8ICFpbnN0YW5jZS5jdXJyZW50IHx8ICFpbnN0YW5jZS5jdXJyZW50Lm9wdHMudHJhcEZvY3VzIHx8ICQoIGUudGFyZ2V0ICkuaGFzQ2xhc3MoICdmYW5jeWJveC1jb250YWluZXInICkgfHwgJCggZS50YXJnZXQgKS5pcyggZG9jdW1lbnQgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBpbnN0YW5jZSAmJiAkKCBlLnRhcmdldCApLmNzcyggJ3Bvc2l0aW9uJyApICE9PSAnZml4ZWQnICYmICFpbnN0YW5jZS4kcmVmcy5jb250YWluZXIuaGFzKCBlLnRhcmdldCApLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTb21ldGltZXMgcGFnZSBnZXRzIHNjcm9sbGVkLCBzZXQgaXQgYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICRXLnNjcm9sbFRvcCggc2VsZi5zY3JvbGxUb3AgKS5zY3JvbGxMZWZ0KCBzZWxmLnNjcm9sbExlZnQgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gRW5hYmxlIGtleWJvYXJkIG5hdmlnYXRpb25cclxuICAgICAgICAgICAgJEQub24oJ2tleWRvd24uZmInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBzZWxmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5Y29kZSA9IGUua2V5Q29kZSB8fCBlLndoaWNoO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggIWN1cnJlbnQgfHwgIWN1cnJlbnQub3B0cy5rZXlib2FyZCApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCAkKGUudGFyZ2V0KS5pcygnaW5wdXQnKSB8fCAkKGUudGFyZ2V0KS5pcygndGV4dGFyZWEnKSApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQmFja3NwYWNlIGFuZCBFc2Mga2V5c1xyXG4gICAgICAgICAgICAgICAgaWYgKCBrZXljb2RlID09PSA4IHx8IGtleWNvZGUgPT09IDI3ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jbG9zZSggZSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTGVmdCBhcnJvdyBhbmQgVXAgYXJyb3dcclxuICAgICAgICAgICAgICAgIGlmICgga2V5Y29kZSA9PT0gMzcgfHwga2V5Y29kZSA9PT0gMzggKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByZXZpb3VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSaWdoIGFycm93IGFuZCBEb3duIGFycm93XHJcbiAgICAgICAgICAgICAgICBpZiAoIGtleWNvZGUgPT09IDM5IHx8IGtleWNvZGUgPT09IDQwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5uZXh0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXIoJ2FmdGVyS2V5ZG93bicsIGUsIGtleWNvZGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBIaWRlIGNvbnRyb2xzIGFmdGVyIHNvbWUgaW5hY3Rpdml0eSBwZXJpb2RcclxuICAgICAgICAgICAgaWYgKCBzZWxmLmdyb3VwWyBzZWxmLmN1cnJJbmRleCBdLm9wdHMuaWRsZVRpbWUgKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmlkbGVTZWNvbmRzQ291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgJEQub24oJ21vdXNlbW92ZS5mYi1pZGxlIG1vdXNlbGVhdmUuZmItaWRsZSBtb3VzZWRvd24uZmItaWRsZSB0b3VjaHN0YXJ0LmZiLWlkbGUgdG91Y2htb3ZlLmZiLWlkbGUgc2Nyb2xsLmZiLWlkbGUga2V5ZG93bi5mYi1pZGxlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaWRsZVNlY29uZHNDb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzZWxmLmlzSWRsZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93Q29udHJvbHMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaXNJZGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLmlkbGVJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlkbGVTZWNvbmRzQ291bnRlcisrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNlbGYuaWRsZVNlY29uZHNDb3VudGVyID49IHNlbGYuZ3JvdXBbIHNlbGYuY3VyckluZGV4IF0ub3B0cy5pZGxlVGltZSAmJiAhc2VsZi5pc0RyYWdnaW5nICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmlzSWRsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaWRsZVNlY29uZHNDb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaGlkZUNvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgZXZlbnRzIGFkZGVkIGJ5IHRoZSBjb3JlXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICByZW1vdmVFdmVudHMgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgJFcub2ZmKCAnb3JpZW50YXRpb25jaGFuZ2UuZmIgcmVzaXplLmZiJyApO1xyXG4gICAgICAgICAgICAkRC5vZmYoICdmb2N1c2luLmZiIGtleWRvd24uZmIgLmZiLWlkbGUnICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRyZWZzLmNvbnRhaW5lci5vZmYoICcuZmItY2xvc2UgLmZiLXByZXYgLmZiLW5leHQnICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNlbGYuaWRsZUludGVydmFsICkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoIHNlbGYuaWRsZUludGVydmFsICk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi5pZGxlSW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIENoYW5nZSB0byBwcmV2aW91cyBnYWxsZXJ5IGl0ZW1cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIHByZXZpb3VzIDogZnVuY3Rpb24oIGR1cmF0aW9uICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5qdW1wVG8oIHRoaXMuY3VyclBvcyAtIDEsIGR1cmF0aW9uICk7XHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIENoYW5nZSB0byBuZXh0IGdhbGxlcnkgaXRlbVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBuZXh0IDogZnVuY3Rpb24oIGR1cmF0aW9uICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5qdW1wVG8oIHRoaXMuY3VyclBvcyArIDEsIGR1cmF0aW9uICk7XHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIFN3aXRjaCB0byBzZWxlY3RlZCBnYWxsZXJ5IGl0ZW1cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIGp1bXBUbyA6IGZ1bmN0aW9uICggcG9zLCBkdXJhdGlvbiwgc2xpZGUgKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIGZpcnN0UnVuLFxyXG4gICAgICAgICAgICAgICAgbG9vcCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQsXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91cyxcclxuICAgICAgICAgICAgICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBvcyxcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25Qcm9wcztcclxuXHJcbiAgICAgICAgICAgIHZhciBncm91cExlbiA9IHNlbGYuZ3JvdXAubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzZWxmLmlzRHJhZ2dpbmcgfHwgc2VsZi5pc0Nsb3NpbmcgfHwgKCBzZWxmLmlzQW5pbWF0aW5nICYmIHNlbGYuZmlyc3RSdW4gKSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcG9zICA9IHBhcnNlSW50KCBwb3MsIDEwICk7XHJcbiAgICAgICAgICAgIGxvb3AgPSBzZWxmLmN1cnJlbnQgPyBzZWxmLmN1cnJlbnQub3B0cy5sb29wIDogc2VsZi5vcHRzLmxvb3A7XHJcblxyXG4gICAgICAgICAgICBpZiAoICFsb29wICYmICggcG9zIDwgMCB8fCBwb3MgPj0gZ3JvdXBMZW4gKSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmlyc3RSdW4gPSBzZWxmLmZpcnN0UnVuID0gKCBzZWxmLmZpcnN0UnVuID09PSBudWxsICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGdyb3VwTGVuIDwgMiAmJiAhZmlyc3RSdW4gJiYgISFzZWxmLmlzRHJhZ2dpbmcgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByZXZpb3VzID0gc2VsZi5jdXJyZW50O1xyXG5cclxuICAgICAgICAgICAgc2VsZi5wcmV2SW5kZXggPSBzZWxmLmN1cnJJbmRleDtcclxuICAgICAgICAgICAgc2VsZi5wcmV2UG9zICAgPSBzZWxmLmN1cnJQb3M7XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgc2xpZGVzXHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBzZWxmLmNyZWF0ZVNsaWRlKCBwb3MgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggZ3JvdXBMZW4gPiAxICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBsb29wIHx8IGN1cnJlbnQuaW5kZXggPiAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY3JlYXRlU2xpZGUoIHBvcyAtIDEgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGxvb3AgfHwgY3VycmVudC5pbmRleCA8IGdyb3VwTGVuIC0gMSApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNyZWF0ZVNsaWRlKCBwb3MgKyAxICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudCAgID0gY3VycmVudDtcclxuICAgICAgICAgICAgc2VsZi5jdXJySW5kZXggPSBjdXJyZW50LmluZGV4O1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJQb3MgICA9IGN1cnJlbnQucG9zO1xyXG5cclxuICAgICAgICAgICAgc2VsZi50cmlnZ2VyKCAnYmVmb3JlU2hvdycsIGZpcnN0UnVuICk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZUNvbnRyb2xzKCk7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50UG9zID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoIGN1cnJlbnQuJHNsaWRlICk7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50LmlzTW92ZWQgICAgICAgID0gKCBjdXJyZW50UG9zLmxlZnQgIT09IDAgfHwgY3VycmVudFBvcy50b3AgIT09IDAgKSAmJiAhY3VycmVudC4kc2xpZGUuaGFzQ2xhc3MoICdmYW5jeWJveC1hbmltYXRlZCcgKTtcclxuICAgICAgICAgICAgY3VycmVudC5mb3JjZWREdXJhdGlvbiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIGlmICggJC5pc051bWVyaWMoIGR1cmF0aW9uICkgKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LmZvcmNlZER1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IGN1cnJlbnQub3B0c1sgZmlyc3RSdW4gPyAnYW5pbWF0aW9uRHVyYXRpb24nIDogJ3RyYW5zaXRpb25EdXJhdGlvbicgXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZHVyYXRpb24gPSBwYXJzZUludCggZHVyYXRpb24sIDEwICk7XHJcblxyXG4gICAgICAgICAgICAvLyBGcmVzaCBzdGFydCAtIHJldmVhbCBjb250YWluZXIsIGN1cnJlbnQgc2xpZGUgYW5kIHN0YXJ0IGxvYWRpbmcgY29udGVudFxyXG4gICAgICAgICAgICBpZiAoIGZpcnN0UnVuICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggY3VycmVudC5vcHRzLmFuaW1hdGlvbkVmZmVjdCAmJiBkdXJhdGlvbiApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRyZWZzLmNvbnRhaW5lci5jc3MoICd0cmFuc2l0aW9uLWR1cmF0aW9uJywgZHVyYXRpb24gKyAnbXMnICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi4kcmVmcy5jb250YWluZXIucmVtb3ZlQ2xhc3MoICdmYW5jeWJveC1pcy1oaWRkZW4nICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yY2VSZWRyYXcoIHNlbGYuJHJlZnMuY29udGFpbmVyICk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi4kcmVmcy5jb250YWluZXIuYWRkQ2xhc3MoICdmYW5jeWJveC1pcy1vcGVuJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1ha2UgZmlyc3Qgc2xpZGUgdmlzaWJsZSAodG8gZGlzcGxheSBsb2FkaW5nIGljb24sIGlmIG5lZWRlZClcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQuJHNsaWRlLmFkZENsYXNzKCAnZmFuY3lib3gtc2xpZGUtLWN1cnJlbnQnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi5sb2FkU2xpZGUoIGN1cnJlbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLnByZWxvYWQoICdpbWFnZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENsZWFuIHVwXHJcbiAgICAgICAgICAgICQuZWFjaChzZWxmLnNsaWRlcywgZnVuY3Rpb24oIGluZGV4LCBzbGlkZSApIHtcclxuICAgICAgICAgICAgICAgICQuZmFuY3lib3guc3RvcCggc2xpZGUuJHNsaWRlICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gTWFrZSBjdXJyZW50IHRoYXQgc2xpZGUgaXMgdmlzaWJsZSBldmVuIGlmIGNvbnRlbnQgaXMgc3RpbGwgbG9hZGluZ1xyXG4gICAgICAgICAgICBjdXJyZW50LiRzbGlkZS5yZW1vdmVDbGFzcyggJ2ZhbmN5Ym94LXNsaWRlLS1uZXh0IGZhbmN5Ym94LXNsaWRlLS1wcmV2aW91cycgKS5hZGRDbGFzcyggJ2ZhbmN5Ym94LXNsaWRlLS1jdXJyZW50JyApO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgc2xpZGVzIGhhdmUgYmVlbiBkcmFnZ2VkLCBhbmltYXRlIHRoZW0gdG8gY29ycmVjdCBwb3NpdGlvblxyXG4gICAgICAgICAgICBpZiAoIGN1cnJlbnQuaXNNb3ZlZCApIHtcclxuICAgICAgICAgICAgICAgIGNhbnZhc1dpZHRoID0gTWF0aC5yb3VuZCggY3VycmVudC4kc2xpZGUud2lkdGgoKSApO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZWFjaChzZWxmLnNsaWRlcywgZnVuY3Rpb24oIGluZGV4LCBzbGlkZSApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gc2xpZGUucG9zIC0gY3VycmVudC5wb3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZmFuY3lib3guYW5pbWF0ZSggc2xpZGUuJHNsaWRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCAgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0IDogKCBwb3MgKiBjYW52YXNXaWR0aCApICsgKCBwb3MgKiBzbGlkZS5vcHRzLmd1dHRlciApXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZHVyYXRpb24sIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuJHNsaWRlLnJlbW92ZUF0dHIoJ3N0eWxlJykucmVtb3ZlQ2xhc3MoICdmYW5jeWJveC1zbGlkZS0tbmV4dCBmYW5jeWJveC1zbGlkZS0tcHJldmlvdXMnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHNsaWRlLnBvcyA9PT0gc2VsZi5jdXJyUG9zICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudC5pc01vdmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiRyZWZzLnN0YWdlLmNoaWxkcmVuKCkucmVtb3ZlQXR0ciggJ3N0eWxlJyApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTdGFydCB0cmFuc2l0aW9uIHRoYXQgcmV2ZWFscyBjdXJyZW50IGNvbnRlbnRcclxuICAgICAgICAgICAgLy8gb3Igd2FpdCB3aGVuIGl0IHdpbGwgYmUgbG9hZGVkXHJcblxyXG4gICAgICAgICAgICBpZiAoIGN1cnJlbnQuaXNMb2FkZWQgKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJldmVhbENvbnRlbnQoIGN1cnJlbnQgKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvYWRTbGlkZSggY3VycmVudCApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWxmLnByZWxvYWQoICdpbWFnZScgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggcHJldmlvdXMucG9zID09PSBjdXJyZW50LnBvcyApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlIHByZXZpb3VzIHNsaWRlXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgICAgdHJhbnNpdGlvblByb3BzID0gJ2ZhbmN5Ym94LXNsaWRlLS0nICsgKCBwcmV2aW91cy5wb3MgPiBjdXJyZW50LnBvcyA/ICduZXh0JyA6ICdwcmV2aW91cycgKTtcclxuXHJcbiAgICAgICAgICAgIHByZXZpb3VzLiRzbGlkZS5yZW1vdmVDbGFzcyggJ2ZhbmN5Ym94LXNsaWRlLS1jb21wbGV0ZSBmYW5jeWJveC1zbGlkZS0tY3VycmVudCBmYW5jeWJveC1zbGlkZS0tbmV4dCBmYW5jeWJveC1zbGlkZS0tcHJldmlvdXMnICk7XHJcblxyXG4gICAgICAgICAgICBwcmV2aW91cy5pc0NvbXBsZXRlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoICFkdXJhdGlvbiB8fCAoICFjdXJyZW50LmlzTW92ZWQgJiYgIWN1cnJlbnQub3B0cy50cmFuc2l0aW9uRWZmZWN0ICkgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggY3VycmVudC5pc01vdmVkICkge1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXMuJHNsaWRlLmFkZENsYXNzKCB0cmFuc2l0aW9uUHJvcHMgKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvblByb3BzID0gJ2ZhbmN5Ym94LWFuaW1hdGVkICcgKyB0cmFuc2l0aW9uUHJvcHMgKyAnIGZhbmN5Ym94LWZ4LScgKyBjdXJyZW50Lm9wdHMudHJhbnNpdGlvbkVmZmVjdDtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmZhbmN5Ym94LmFuaW1hdGUoIHByZXZpb3VzLiRzbGlkZSwgdHJhbnNpdGlvblByb3BzLCBkdXJhdGlvbiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMuJHNsaWRlLnJlbW92ZUNsYXNzKCB0cmFuc2l0aW9uUHJvcHMgKS5yZW1vdmVBdHRyKCAnc3R5bGUnICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBuZXcgXCJzbGlkZVwiIGVsZW1lbnRcclxuICAgICAgICAvLyBUaGVzZSBhcmUgZ2FsbGVyeSBpdGVtcyAgdGhhdCBhcmUgYWN0dWFsbHkgYWRkZWQgdG8gRE9NXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBjcmVhdGVTbGlkZSA6IGZ1bmN0aW9uKCBwb3MgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciAkc2xpZGU7XHJcbiAgICAgICAgICAgIHZhciBpbmRleDtcclxuXHJcbiAgICAgICAgICAgIGluZGV4ID0gcG9zICUgc2VsZi5ncm91cC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGluZGV4ID0gaW5kZXggPCAwID8gc2VsZi5ncm91cC5sZW5ndGggKyBpbmRleCA6IGluZGV4O1xyXG5cclxuICAgICAgICAgICAgaWYgKCAhc2VsZi5zbGlkZXNbIHBvcyBdICYmIHNlbGYuZ3JvdXBbIGluZGV4IF0gKSB7XHJcbiAgICAgICAgICAgICAgICAkc2xpZGUgPSAkKCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtc2xpZGVcIj48L2Rpdj4nKS5hcHBlbmRUbyggc2VsZi4kcmVmcy5zdGFnZSApO1xyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYuc2xpZGVzWyBwb3MgXSA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgc2VsZi5ncm91cFsgaW5kZXggXSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcyAgICAgIDogcG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICRzbGlkZSAgIDogJHNsaWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGVkIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNsaWRlKCBzZWxmLnNsaWRlc1sgcG9zIF0gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuc2xpZGVzWyBwb3MgXTtcclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgLy8gU2NhbGUgaW1hZ2UgdG8gdGhlIGFjdHVhbCBzaXplIG9mIHRoZSBpbWFnZVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgc2NhbGVUb0FjdHVhbCA6IGZ1bmN0aW9uKCB4LCB5LCBkdXJhdGlvbiApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gc2VsZi5jdXJyZW50O1xyXG4gICAgICAgICAgICB2YXIgJHdoYXQgICA9IGN1cnJlbnQuJGNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW1nUG9zLCBwb3NYLCBwb3NZLCBzY2FsZVgsIHNjYWxlWTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjYW52YXNXaWR0aCAgPSBwYXJzZUludCggY3VycmVudC4kc2xpZGUud2lkdGgoKSwgMTAgKTtcclxuICAgICAgICAgICAgdmFyIGNhbnZhc0hlaWdodCA9IHBhcnNlSW50KCBjdXJyZW50LiRzbGlkZS5oZWlnaHQoKSwgMTAgKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBuZXdJbWdXaWR0aCAgPSBjdXJyZW50LndpZHRoO1xyXG4gICAgICAgICAgICB2YXIgbmV3SW1nSGVpZ2h0ID0gY3VycmVudC5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoICEoIGN1cnJlbnQudHlwZSA9PSAnaW1hZ2UnICYmICFjdXJyZW50Lmhhc0Vycm9yKSB8fCAhJHdoYXQgfHwgc2VsZi5pc0FuaW1hdGluZyApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJC5mYW5jeWJveC5zdG9wKCAkd2hhdCApO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5pc0FuaW1hdGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB4ID0geCA9PT0gdW5kZWZpbmVkID8gY2FudmFzV2lkdGggICogMC41ICA6IHg7XHJcbiAgICAgICAgICAgIHkgPSB5ID09PSB1bmRlZmluZWQgPyBjYW52YXNIZWlnaHQgKiAwLjUgIDogeTtcclxuXHJcbiAgICAgICAgICAgIGltZ1BvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKCAkd2hhdCApO1xyXG5cclxuICAgICAgICAgICAgc2NhbGVYICA9IG5ld0ltZ1dpZHRoICAvIGltZ1Bvcy53aWR0aDtcclxuICAgICAgICAgICAgc2NhbGVZICA9IG5ld0ltZ0hlaWdodCAvIGltZ1Bvcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgY2VudGVyIHBvc2l0aW9uIGZvciBvcmlnaW5hbCBpbWFnZVxyXG4gICAgICAgICAgICBwb3NYID0gKCBjYW52YXNXaWR0aCAqIDAuNSAgLSBuZXdJbWdXaWR0aCAqIDAuNSApO1xyXG4gICAgICAgICAgICBwb3NZID0gKCBjYW52YXNIZWlnaHQgKiAwLjUgLSBuZXdJbWdIZWlnaHQgKiAwLjUgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBpbWFnZSBkb2VzIG5vdCBtb3ZlIGF3YXkgZnJvbSBlZGdlc1xyXG4gICAgICAgICAgICBpZiAoIG5ld0ltZ1dpZHRoID4gY2FudmFzV2lkdGggKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NYID0gaW1nUG9zLmxlZnQgKiBzY2FsZVggLSAoICggeCAqIHNjYWxlWCApIC0geCApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggcG9zWCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zWCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBwb3NYIDwgIGNhbnZhc1dpZHRoIC0gbmV3SW1nV2lkdGggKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zWCA9IGNhbnZhc1dpZHRoIC0gbmV3SW1nV2lkdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggbmV3SW1nSGVpZ2h0ID4gY2FudmFzSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBwb3NZID0gaW1nUG9zLnRvcCAgKiBzY2FsZVkgLSAoICggeSAqIHNjYWxlWSApIC0geSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggcG9zWSA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zWSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBwb3NZIDwgIGNhbnZhc0hlaWdodCAtIG5ld0ltZ0hlaWdodCApIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NZID0gY2FudmFzSGVpZ2h0IC0gbmV3SW1nSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZUN1cnNvciggbmV3SW1nV2lkdGgsIG5ld0ltZ0hlaWdodCApO1xyXG5cclxuICAgICAgICAgICAgJC5mYW5jeWJveC5hbmltYXRlKCAkd2hhdCwge1xyXG4gICAgICAgICAgICAgICAgdG9wICAgIDogcG9zWSxcclxuICAgICAgICAgICAgICAgIGxlZnQgICA6IHBvc1gsXHJcbiAgICAgICAgICAgICAgICBzY2FsZVggOiBzY2FsZVgsXHJcbiAgICAgICAgICAgICAgICBzY2FsZVkgOiBzY2FsZVlcclxuICAgICAgICAgICAgfSwgZHVyYXRpb24gfHwgMzMwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBTdG9wIHNsaWRlc2hvd1xyXG4gICAgICAgICAgICBpZiAoIHNlbGYuU2xpZGVTaG93ICYmIHNlbGYuU2xpZGVTaG93LmlzQWN0aXZlICkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5TbGlkZVNob3cuc3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIFNjYWxlIGltYWdlIHRvIGZpdCBpbnNpZGUgcGFyZW50IGVsZW1lbnRcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIHNjYWxlVG9GaXQgOiBmdW5jdGlvbiggZHVyYXRpb24gKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHNlbGYuY3VycmVudDtcclxuICAgICAgICAgICAgdmFyICR3aGF0ICAgPSBjdXJyZW50LiRjb250ZW50O1xyXG4gICAgICAgICAgICB2YXIgZW5kO1xyXG5cclxuICAgICAgICAgICAgaWYgKCAhKCBjdXJyZW50LnR5cGUgPT0gJ2ltYWdlJyAmJiAhY3VycmVudC5oYXNFcnJvcikgfHwgISR3aGF0IHx8IHNlbGYuaXNBbmltYXRpbmcgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuZmFuY3lib3guc3RvcCggJHdoYXQgKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgZW5kID0gc2VsZi5nZXRGaXRQb3MoIGN1cnJlbnQgKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYudXBkYXRlQ3Vyc29yKCBlbmQud2lkdGgsIGVuZC5oZWlnaHQgKTtcclxuXHJcbiAgICAgICAgICAgICQuZmFuY3lib3guYW5pbWF0ZSggJHdoYXQsIHtcclxuICAgICAgICAgICAgICAgIHRvcCAgICA6IGVuZC50b3AsXHJcbiAgICAgICAgICAgICAgICBsZWZ0ICAgOiBlbmQubGVmdCxcclxuICAgICAgICAgICAgICAgIHNjYWxlWCA6IGVuZC53aWR0aCAgLyAkd2hhdC53aWR0aCgpLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVZIDogZW5kLmhlaWdodCAvICR3aGF0LmhlaWdodCgpXHJcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uIHx8IDMzMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmlzQW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgaW1hZ2Ugc2l6ZSB0byBmaXQgaW5zaWRlIHZpZXdwb3J0XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBnZXRGaXRQb3MgOiBmdW5jdGlvbiggc2xpZGUgKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmICA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciAkd2hhdCA9IHNsaWRlLiRjb250ZW50O1xyXG5cclxuICAgICAgICAgICAgdmFyIGltZ1dpZHRoICA9IHNsaWRlLndpZHRoO1xyXG4gICAgICAgICAgICB2YXIgaW1nSGVpZ2h0ID0gc2xpZGUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgdmFyIG1hcmdpbiA9IHNsaWRlLm9wdHMubWFyZ2luO1xyXG5cclxuICAgICAgICAgICAgdmFyIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIG1pblJhdGlvLCB3aWR0aCwgaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgaWYgKCAhJHdoYXQgfHwgISR3aGF0Lmxlbmd0aCB8fCAoICFpbWdXaWR0aCAmJiAhaW1nSGVpZ2h0KSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ29udmVydCBcIm1hcmdpbiB0byBDU1Mgc3R5bGU6IFsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IF1cclxuICAgICAgICAgICAgaWYgKCAkLnR5cGUoIG1hcmdpbiApID09PSBcIm51bWJlclwiICkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luID0gWyBtYXJnaW4sIG1hcmdpbiBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIG1hcmdpbi5sZW5ndGggPT0gMiApIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbiA9IFsgbWFyZ2luWzBdLCBtYXJnaW5bMV0sIG1hcmdpblswXSwgbWFyZ2luWzFdIF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFdlIGNhbiBub3QgdXNlICRzbGlkZSB3aWR0aCBoZXJlLCBiZWNhdXNlIGl0IGNhbiBoYXZlIGRpZmZlcmVudCBkaWVtZW5zaW9ucyB3aGlsZSBpbiB0cmFuc2l0b25cclxuICAgICAgICAgICAgY2FudmFzV2lkdGggID0gcGFyc2VJbnQoIHNlbGYuJHJlZnMuc3RhZ2Uud2lkdGgoKSwgMTAgKSAgLSAoIG1hcmdpblsgMSBdICsgbWFyZ2luWyAzIF0gKTtcclxuICAgICAgICAgICAgY2FudmFzSGVpZ2h0ID0gcGFyc2VJbnQoIHNlbGYuJHJlZnMuc3RhZ2UuaGVpZ2h0KCksIDEwICkgLSAoIG1hcmdpblsgMCBdICsgbWFyZ2luWyAyIF0gKTtcclxuXHJcbiAgICAgICAgICAgIG1pblJhdGlvID0gTWF0aC5taW4oMSwgY2FudmFzV2lkdGggLyBpbWdXaWR0aCwgY2FudmFzSGVpZ2h0IC8gaW1nSGVpZ2h0ICk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aCAgPSBNYXRoLmZsb29yKCBtaW5SYXRpbyAqIGltZ1dpZHRoICk7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IE1hdGguZmxvb3IoIG1pblJhdGlvICogaW1nSGVpZ2h0ICk7XHJcblxyXG4gICAgICAgICAgICAvLyBVc2UgZmxvb3Igcm91bmRpbmcgdG8gbWFrZSBzdXJlIGl0IHJlYWxseSBmaXRzXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0b3AgICAgOiBNYXRoLmZsb29yKCAoIGNhbnZhc0hlaWdodCAtIGhlaWdodCApICogMC41ICkgKyBtYXJnaW5bIDAgXSxcclxuICAgICAgICAgICAgICAgIGxlZnQgICA6IE1hdGguZmxvb3IoICggY2FudmFzV2lkdGggIC0gd2lkdGggKSAgKiAwLjUgKSArIG1hcmdpblsgMyBdLFxyXG4gICAgICAgICAgICAgICAgd2lkdGggIDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgOiBoZWlnaHRcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBjb250ZW50IHNpemUgYW5kIHBvc2l0aW9uIGZvciBhbGwgc2xpZGVzXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICB1cGRhdGUgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgJC5lYWNoKCBzZWxmLnNsaWRlcywgZnVuY3Rpb24oIGtleSwgc2xpZGUgKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNsaWRlKCBzbGlkZSApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHNsaWRlIGNvbnRlbnQgcG9zaXRpb24gYW5kIHNpemVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICB1cGRhdGVTbGlkZSA6IGZ1bmN0aW9uKCBzbGlkZSwgZHVyYXRpb24gKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmICA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAkd2hhdCA9IHNsaWRlICYmIHNsaWRlLiRjb250ZW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKCAkd2hhdCAmJiAoIHNsaWRlLndpZHRoIHx8IHNsaWRlLmhlaWdodCApICkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5pc0FuaW1hdGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICQuZmFuY3lib3guc3RvcCggJHdoYXQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmZhbmN5Ym94LnNldFRyYW5zbGF0ZSggJHdoYXQsIHNlbGYuZ2V0Rml0UG9zKCBzbGlkZSApICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBzbGlkZS5wb3MgPT09IHNlbGYuY3VyclBvcyApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZUN1cnNvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzbGlkZS4kc2xpZGUudHJpZ2dlciggJ3JlZnJlc2gnICk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnRyaWdnZXIoICdvblVwZGF0ZScsIHNsaWRlICk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvLyBIb3Jpem9udGFsbHkgY2VudGVyIHNsaWRlXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBjZW50ZXJTbGlkZSA6IGZ1bmN0aW9uKCBzbGlkZSwgZHVyYXRpb24gKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmICA9IHRoaXMsIGNhbnZhc1dpZHRoLCBwb3M7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNlbGYuY3VycmVudCApIHtcclxuICAgICAgICAgICAgICAgIGNhbnZhc1dpZHRoID0gTWF0aC5yb3VuZCggc2xpZGUuJHNsaWRlLndpZHRoKCkgKTtcclxuICAgICAgICAgICAgICAgIHBvcyA9IHNsaWRlLnBvcyAtIHNlbGYuY3VycmVudC5wb3M7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5mYW5jeWJveC5hbmltYXRlKCBzbGlkZS4kc2xpZGUsIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgIDogMCxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0IDogKCBwb3MgKiBjYW52YXNXaWR0aCApICsgKCBwb3MgKiBzbGlkZS5vcHRzLmd1dHRlciApLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgOiAxXHJcbiAgICAgICAgICAgICAgICB9LCBkdXJhdGlvbiA9PT0gdW5kZWZpbmVkID8gMCA6IGR1cmF0aW9uLCBudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGN1cnNvciBzdHlsZSBkZXBlbmRpbmcgaWYgY29udGVudCBjYW4gYmUgem9vbWVkXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIHVwZGF0ZUN1cnNvciA6IGZ1bmN0aW9uKCBuZXh0V2lkdGgsIG5leHRIZWlnaHQgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBpc1NjYWxlZERvd247XHJcblxyXG4gICAgICAgICAgICB2YXIgJGNvbnRhaW5lciA9IHNlbGYuJHJlZnMuY29udGFpbmVyLnJlbW92ZUNsYXNzKCAnZmFuY3lib3gtaXMtem9vbWFibGUgZmFuY3lib3gtY2FuLXpvb21JbiBmYW5jeWJveC1jYW4tZHJhZyBmYW5jeWJveC1jYW4tem9vbU91dCcgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggIXNlbGYuY3VycmVudCB8fCBzZWxmLmlzQ2xvc2luZyApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBzZWxmLmlzWm9vbWFibGUoKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFkZENsYXNzKCAnZmFuY3lib3gtaXMtem9vbWFibGUnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBuZXh0V2lkdGggIT09IHVuZGVmaW5lZCAmJiBuZXh0SGVpZ2h0ICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTY2FsZWREb3duID0gbmV4dFdpZHRoIDwgc2VsZi5jdXJyZW50LndpZHRoICYmIG5leHRIZWlnaHQgPCBzZWxmLmN1cnJlbnQuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTY2FsZWREb3duID0gc2VsZi5pc1NjYWxlZERvd24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGlzU2NhbGVkRG93biApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgaW1hZ2UgaXMgc2NhbGVkIGRvd24sIHRoZW4sIG9idmlvdXNseSwgaXQgY2FuIGJlIHpvb21lZCB0byBmdWxsIHNpemVcclxuICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFkZENsYXNzKCAnZmFuY3lib3gtY2FuLXpvb21JbicgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNlbGYuY3VycmVudC5vcHRzLnRvdWNoICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaW1hZ2Ugc2l6ZSBpciBsYXJnZW4gdGhhbiBhdmFpbGFibGUgYXZhaWxhYmxlIGFuZCB0b3VjaCBtb2R1bGUgaXMgbm90IGRpc2FibGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZW4gdXNlciBjYW4gZG8gcGFubmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFkZENsYXNzKCAnZmFuY3lib3gtY2FuLWRyYWcnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjb250YWluZXIuYWRkQ2xhc3MoICdmYW5jeWJveC1jYW4tem9vbU91dCcgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggc2VsZi5jdXJyZW50Lm9wdHMudG91Y2ggKSB7XHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFkZENsYXNzKCAnZmFuY3lib3gtY2FuLWRyYWcnICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIGN1cnJlbnQgc2xpZGUgaXMgem9vbWFibGVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIGlzWm9vbWFibGUgOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gc2VsZi5jdXJyZW50O1xyXG4gICAgICAgICAgICB2YXIgZml0UG9zO1xyXG5cclxuICAgICAgICAgICAgaWYgKCAhY3VycmVudCB8fCBzZWxmLmlzQ2xvc2luZyApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQXNzdW1lIHRoYXQgc2xpZGUgaXMgem9vbWFibGUgaWZcclxuICAgICAgICAgICAgLy8gICAtIGltYWdlIGlzIGxvYWRlZCBzdWNjZXNzZnVseVxyXG4gICAgICAgICAgICAvLyAgIC0gY2xpY2sgYWN0aW9uIGlzIFwiem9vbVwiXHJcbiAgICAgICAgICAgIC8vICAgLSBhY3R1YWwgc2l6ZSBvZiB0aGUgaW1hZ2UgaXMgc21hbGxlciB0aGFuIGF2YWlsYWJsZSBhcmVhXHJcbiAgICAgICAgICAgIGlmICggY3VycmVudC50eXBlID09PSAnaW1hZ2UnICYmIGN1cnJlbnQuaXNMb2FkZWQgJiYgIWN1cnJlbnQuaGFzRXJyb3IgJiZcclxuICAgICAgICAgICAgICAgICggY3VycmVudC5vcHRzLmNsaWNrQ29udGVudCA9PT0gJ3pvb20nIHx8ICggJC5pc0Z1bmN0aW9uKCBjdXJyZW50Lm9wdHMuY2xpY2tDb250ZW50ICkgJiYgY3VycmVudC5vcHRzLmNsaWNrQ29udGVudCggY3VycmVudCApID09PSAgXCJ6b29tXCIgKSApXHJcbiAgICAgICAgICAgICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGZpdFBvcyA9IHNlbGYuZ2V0Rml0UG9zKCBjdXJyZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBjdXJyZW50LndpZHRoID4gZml0UG9zLndpZHRoIHx8IGN1cnJlbnQuaGVpZ2h0ID4gZml0UG9zLmhlaWdodCApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIGN1cnJlbnQgaW1hZ2UgZGltZW5zaW9ucyBhcmUgc21hbGxlciB0aGFuIGFjdHVhbFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBpc1NjYWxlZERvd24gOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gc2VsZi5jdXJyZW50O1xyXG4gICAgICAgICAgICB2YXIgJHdoYXQgICA9IGN1cnJlbnQuJGNvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmV6ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoICR3aGF0ICkge1xyXG4gICAgICAgICAgICAgICAgcmV6ID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoICR3aGF0ICk7XHJcbiAgICAgICAgICAgICAgICByZXogPSByZXoud2lkdGggPCBjdXJyZW50LndpZHRoIHx8IHJlei5oZWlnaHQgPCBjdXJyZW50LmhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlejtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIGltYWdlIGRpbWVuc2lvbnMgZXhjZWVkIHBhcmVudCBlbGVtZW50XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgY2FuUGFuIDogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHNlbGYuY3VycmVudDtcclxuICAgICAgICAgICAgdmFyICR3aGF0ICAgPSBjdXJyZW50LiRjb250ZW50O1xyXG5cclxuICAgICAgICAgICAgdmFyIHJleiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCAkd2hhdCApIHtcclxuICAgICAgICAgICAgICAgIHJleiA9IHNlbGYuZ2V0Rml0UG9zKCBjdXJyZW50ICk7XHJcbiAgICAgICAgICAgICAgICByZXogPSBNYXRoLmFicyggJHdoYXQud2lkdGgoKSAtIHJlei53aWR0aCApID4gMSAgfHwgTWF0aC5hYnMoICR3aGF0LmhlaWdodCgpIC0gcmV6LmhlaWdodCApID4gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlejtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIExvYWQgY29udGVudCBpbnRvIHRoZSBzbGlkZVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBsb2FkU2xpZGUgOiBmdW5jdGlvbiggc2xpZGUgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIHR5cGUsICRzbGlkZTtcclxuICAgICAgICAgICAgdmFyIGFqYXhMb2FkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzbGlkZS5pc0xvYWRpbmcgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggc2xpZGUuaXNMb2FkZWQgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNsaWRlLmlzTG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnRyaWdnZXIoICdiZWZvcmVMb2FkJywgc2xpZGUgKTtcclxuXHJcbiAgICAgICAgICAgIHR5cGUgICA9IHNsaWRlLnR5cGU7XHJcbiAgICAgICAgICAgICRzbGlkZSA9IHNsaWRlLiRzbGlkZTtcclxuXHJcbiAgICAgICAgICAgICRzbGlkZVxyXG4gICAgICAgICAgICAgICAgLm9mZiggJ3JlZnJlc2gnIClcclxuICAgICAgICAgICAgICAgIC50cmlnZ2VyKCAnb25SZXNldCcgKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnZmFuY3lib3gtc2xpZGUtLScgKyAoIHR5cGUgfHwgJ3Vua25vd24nICkgKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCBzbGlkZS5vcHRzLnNsaWRlQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBjb250ZW50IGRlcGVuZGluZyBvbiB0aGUgdHlwZVxyXG5cclxuICAgICAgICAgICAgc3dpdGNoICggdHlwZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdpbWFnZSc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0SW1hZ2UoIHNsaWRlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnaWZyYW1lJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRJZnJhbWUoIHNsaWRlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnaHRtbCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0Q29udGVudCggc2xpZGUsIHNsaWRlLnNyYyB8fCBzbGlkZS5jb250ZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnaW5saW5lJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAkKCBzbGlkZS5zcmMgKS5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0Q29udGVudCggc2xpZGUsICQoIHNsaWRlLnNyYyApICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0RXJyb3IoIHNsaWRlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2FqYXgnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dMb2FkaW5nKCBzbGlkZSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhamF4TG9hZCA9ICQuYWpheCggJC5leHRlbmQoIHt9LCBzbGlkZS5vcHRzLmFqYXguc2V0dGluZ3MsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogc2xpZGUuc3JjLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzIDogZnVuY3Rpb24gKCBkYXRhLCB0ZXh0U3RhdHVzICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdGV4dFN0YXR1cyA9PT0gJ3N1Y2Nlc3MnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0Q29udGVudCggc2xpZGUsIGRhdGEgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIDogZnVuY3Rpb24gKCBqcVhIUiwgdGV4dFN0YXR1cyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGpxWEhSICYmIHRleHRTdGF0dXMgIT09ICdhYm9ydCcgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRFcnJvciggc2xpZGUgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzbGlkZS5vbmUoICdvblJlc2V0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhamF4TG9hZC5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ3ZpZGVvJyA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0Q29udGVudCggc2xpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8dmlkZW8gY29udHJvbHM+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzb3VyY2Ugc3JjPVwiJyArIHNsaWRlLnNyYyArICdcIiB0eXBlPVwiJyArIHNsaWRlLm9wdHMudmlkZW9Gb3JtYXQgKyAnXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWW91ciBicm93c2VyIGRvZXNuXFwndCBzdXBwb3J0IEhUTUw1IHZpZGVvJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L3ZpZGVvPidcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0RXJyb3IoIHNsaWRlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIFVzZSB0aHVtYm5haWwgaW1hZ2UsIGlmIHBvc3NpYmxlXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgc2V0SW1hZ2UgOiBmdW5jdGlvbiggc2xpZGUgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZiAgID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIHNyY3NldCA9IHNsaWRlLm9wdHMuc3Jjc2V0IHx8IHNsaWRlLm9wdHMuaW1hZ2Uuc3Jjc2V0O1xyXG5cclxuICAgICAgICAgICAgdmFyIGZvdW5kLCB0ZW1wLCBweFJhdGlvLCB3aW5kb3dXaWR0aDtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgXCJzcmNzZXRcIiwgdGhlbiB3ZSBuZWVkIHRvIGZpbmQgbWF0Y2hpbmcgXCJzcmNcIiB2YWx1ZS5cclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnksIGJlY2F1c2Ugd2hlbiB5b3Ugc2V0IGFuIHNyYyBhdHRyaWJ1dGUsIHRoZSBicm93c2VyIHdpbGwgcHJlbG9hZCB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgLy8gYmVmb3JlIGFueSBqYXZhc2NyaXB0IG9yIGV2ZW4gQ1NTIGlzIGFwcGxpZWQuXHJcbiAgICAgICAgICAgIGlmICggc3Jjc2V0ICkge1xyXG4gICAgICAgICAgICAgICAgcHhSYXRpbyAgICAgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xyXG4gICAgICAgICAgICAgICAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAgKiBweFJhdGlvO1xyXG5cclxuICAgICAgICAgICAgICAgIHRlbXAgPSBzcmNzZXQuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKCBlbCApIHtcclxuICAgICAgICAgICAgXHRcdHZhciByZXQgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIFx0XHRlbC50cmltKCkuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uICggZWwsIGkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcnNlSW50KCBlbC5zdWJzdHJpbmcoMCwgZWwubGVuZ3RoIC0gMSksIDEwICk7XHJcblxyXG4gICAgICAgICAgICBcdFx0XHRpZiAoIGkgPT09IDAgKSB7XHJcbiAgICAgICAgICAgIFx0XHRcdFx0cmV0dXJuICggcmV0LnVybCA9IGVsICk7XHJcbiAgICAgICAgICAgIFx0XHRcdH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdmFsdWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQudmFsdWUgICA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnBvc3RmaXggPSBlbFsgZWwubGVuZ3RoIC0gMSBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcdFx0fSk7XHJcblxyXG4gICAgICAgICAgICBcdFx0cmV0dXJuIHJldDtcclxuICAgICAgICAgICAgXHR9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTb3J0IGJ5IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB0ZW1wLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGEudmFsdWUgLSBiLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gT2ssIG5vdyB3ZSBoYXZlIGFuIGFycmF5IG9mIGFsbCBzcmNzZXQgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICBmb3IgKCB2YXIgaiA9IDA7IGogPCB0ZW1wLmxlbmd0aDsgaisrICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IHRlbXBbIGogXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAoIGVsLnBvc3RmaXggPT09ICd3JyAmJiBlbC52YWx1ZSA+PSB3aW5kb3dXaWR0aCApIHx8ICggZWwucG9zdGZpeCA9PT0gJ3gnICYmIGVsLnZhbHVlID49IHB4UmF0aW8gKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIG5vdCBmb3VuZCwgdGFrZSB0aGUgbGFzdCBvbmVcclxuICAgICAgICAgICAgICAgIGlmICggIWZvdW5kICYmIHRlbXAubGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdGVtcFsgdGVtcC5sZW5ndGggLSAxIF07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBmb3VuZCApIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5zcmMgPSBmb3VuZC51cmw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgZGVmYXVsdCB3aWR0aC9oZWlnaHQgdmFsdWVzLCB3ZSBjYW4gY2FsY3VsYXRlIGhlaWdodCBmb3IgbWF0Y2hpbmcgc291cmNlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzbGlkZS53aWR0aCAmJiBzbGlkZS5oZWlnaHQgJiYgZm91bmQucG9zdGZpeCA9PSAndycgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLmhlaWdodCA9ICggc2xpZGUud2lkdGggLyBzbGlkZS5oZWlnaHQgKSAqIGZvdW5kLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS53aWR0aCAgPSBmb3VuZC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgd2lsbCBiZSB3cmFwcGVyIGNvbnRhaW5pbmcgYm90aCBnaG9zdCBhbmQgYWN0dWFsIGltYWdlXHJcbiAgICAgICAgICAgIHNsaWRlLiRjb250ZW50ID0gJCgnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWltYWdlLXdyYXBcIj48L2Rpdj4nKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnZmFuY3lib3gtaXMtaGlkZGVuJyApXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8oIHNsaWRlLiRzbGlkZSApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSB0aHVtYm5haWwsIHdlIGNhbiBkaXNwbGF5IGl0IHdoaWxlIGFjdHVhbCBpbWFnZSBpcyBsb2FkaW5nXHJcbiAgICAgICAgICAgIC8vIFVzZXJzIHdpbGwgbm90IHN0YXJlIGF0IGJsYWNrIHNjcmVlbiBhbmQgYWN0dWFsIGltYWdlIHdpbGwgYXBwZWFyIGdyYWR1YWxseVxyXG4gICAgICAgICAgICBpZiAoIHNsaWRlLm9wdHMucHJlbG9hZCAhPT0gZmFsc2UgJiYgc2xpZGUub3B0cy53aWR0aCAmJiBzbGlkZS5vcHRzLmhlaWdodCAmJiAoIHNsaWRlLm9wdHMudGh1bWIgfHwgc2xpZGUub3B0cy4kdGh1bWIgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzbGlkZS53aWR0aCAgPSBzbGlkZS5vcHRzLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgc2xpZGUuaGVpZ2h0ID0gc2xpZGUub3B0cy5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGUuJGdob3N0ID0gJCgnPGltZyAvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uZSgnZXJyb3InLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS4kZ2hvc3QgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRCaWdJbWFnZSggc2xpZGUgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAub25lKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFmdGVyTG9hZCggc2xpZGUgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0QmlnSW1hZ2UoIHNsaWRlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnZmFuY3lib3gtaW1hZ2UnIClcclxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oIHNsaWRlLiRjb250ZW50IClcclxuICAgICAgICAgICAgICAgICAgICAuYXR0ciggJ3NyYycsIHNsaWRlLm9wdHMudGh1bWIgfHwgc2xpZGUub3B0cy4kdGh1bWIuYXR0ciggJ3NyYycgKSApO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldEJpZ0ltYWdlKCBzbGlkZSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGZ1bGwtc2l6ZSBpbWFnZVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgc2V0QmlnSW1hZ2UgOiBmdW5jdGlvbiAoIHNsaWRlICkge1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciAkaW1nID0gJCgnPGltZyAvPicpO1xyXG5cclxuICAgICAgICAgICAgc2xpZGUuJGltYWdlID0gJGltZ1xyXG4gICAgICAgICAgICAgICAgLm9uZSgnZXJyb3InLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRFcnJvciggc2xpZGUgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uZSgnbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhciB0aW1lb3V0IHRoYXQgY2hlY2tzIGlmIGxvYWRpbmcgaWNvbiBuZWVkcyB0byBiZSBkaXNwbGF5ZWRcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoIHNsaWRlLnRpbW91dHMgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUudGltb3V0cyA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2VsZi5pc0Nsb3NpbmcgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLndpZHRoICA9IHNsaWRlLm9wdHMud2lkdGggIHx8IHRoaXMubmF0dXJhbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmhlaWdodCA9IHNsaWRlLm9wdHMuaGVpZ2h0IHx8IHRoaXMubmF0dXJhbEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzbGlkZS5vcHRzLmltYWdlLnNyY3NldCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGltZy5hdHRyKCAnc2l6ZXMnLCAnMTAwdncnICkuYXR0ciggJ3NyY3NldCcsIHNsaWRlLm9wdHMuaW1hZ2Uuc3Jjc2V0ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmhpZGVMb2FkaW5nKCBzbGlkZSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNsaWRlLiRnaG9zdCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLnRpbW91dHMgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUudGltb3V0cyA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuJGdob3N0LmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIE1hdGgubWluKCAzMDAsIE1hdGgubWF4KCAxMDAwLCBzbGlkZS5oZWlnaHQgLyAxNjAwICkgKSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFmdGVyTG9hZCggc2xpZGUgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyggJ2ZhbmN5Ym94LWltYWdlJyApXHJcbiAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgc2xpZGUuc3JjKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKCBzbGlkZS4kY29udGVudCApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCAoICRpbWdbMF0uY29tcGxldGUgfHwgJGltZ1swXS5yZWFkeVN0YXRlID09IFwiY29tcGxldGVcIiApICYmICRpbWdbMF0ubmF0dXJhbFdpZHRoICYmICRpbWdbMF0ubmF0dXJhbEhlaWdodCApIHtcclxuICAgICAgICAgICAgICAgICAgJGltZy50cmlnZ2VyKCAnbG9hZCcgKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiggJGltZ1swXS5lcnJvciApIHtcclxuICAgICAgICAgICAgICAgICAkaW1nLnRyaWdnZXIoICdlcnJvcicgKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGUudGltb3V0cyA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhJGltZ1swXS5jb21wbGV0ZSAmJiAhc2xpZGUuaGFzRXJyb3IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd0xvYWRpbmcoIHNsaWRlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgaWZyYW1lIHdyYXBwZXIsIGlmcmFtZSBhbmQgYmluZGluZ3NcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgc2V0SWZyYW1lIDogZnVuY3Rpb24oIHNsaWRlICkge1xyXG4gICAgICAgICAgICB2YXIgc2VsZlx0PSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb3B0cyAgICA9IHNsaWRlLm9wdHMuaWZyYW1lLFxyXG4gICAgICAgICAgICAgICAgJHNsaWRlXHQ9IHNsaWRlLiRzbGlkZSxcclxuICAgICAgICAgICAgICAgICRpZnJhbWU7XHJcblxyXG4gICAgICAgICAgICBzbGlkZS4kY29udGVudCA9ICQoJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1jb250ZW50JyArICggb3B0cy5wcmVsb2FkID8gJyBmYW5jeWJveC1pcy1oaWRkZW4nIDogJycgKSArICdcIj48L2Rpdj4nKVxyXG4gICAgICAgICAgICAgICAgLmNzcyggb3B0cy5jc3MgKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKCAkc2xpZGUgKTtcclxuXHJcbiAgICAgICAgICAgICRpZnJhbWUgPSAkKCBvcHRzLnRwbC5yZXBsYWNlKC9cXHtybmRcXH0vZywgbmV3IERhdGUoKS5nZXRUaW1lKCkpIClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCBvcHRzLmF0dHIgKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKCBzbGlkZS4kY29udGVudCApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBvcHRzLnByZWxvYWQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi5zaG93TG9hZGluZyggc2xpZGUgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBVbmZvcnR1bmF0ZWx5LCBpdCBpcyBub3QgYWx3YXlzIHBvc3NpYmxlIHRvIGRldGVybWluZSBpZiBpZnJhbWUgaXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgLy8gKGR1ZSB0byBicm93c2VyIHNlY3VyaXR5IHBvbGljeSlcclxuXHJcbiAgICAgICAgICAgICAgICAkaWZyYW1lLm9uKCdsb2FkLmZiIGVycm9yLmZiJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLiRzbGlkZS50cmlnZ2VyKCAncmVmcmVzaCcgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZnRlckxvYWQoIHNsaWRlICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZWNhbGN1bGF0ZSBpZnJhbWUgY29udGVudCBzaXplXHJcbiAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgICAgICAgICAgJHNsaWRlLm9uKCdyZWZyZXNoLmZiJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICR3cmFwID0gc2xpZGUuJGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lV2lkdGggID0gb3B0cy5jc3Mud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lSGVpZ2h0ID0gb3B0cy5jc3MuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGNvbnRlbnRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkYm9keTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAkaWZyYW1lWzBdLmlzUmVhZHkgIT09IDEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGNvbnRlbnQgaXMgYWNjZXNzaWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBpdCB3aWxsIGZhaWwgaWYgZnJhbWUgaXMgbm90IHdpdGggdGhlIHNhbWUgb3JpZ2luXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjb250ZW50cyA9ICRpZnJhbWUuY29udGVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHkgICAgID0gJGNvbnRlbnRzLmZpbmQoJ2JvZHknKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgZGltZW5zaW9ucyBmb3IgdGhlIHdyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICBpZiAoICRib2R5ICYmICRib2R5Lmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZnJhbWVXaWR0aCA9PT0gdW5kZWZpbmVkICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsV2lkdGggPSAkaWZyYW1lWzBdLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lV2lkdGggPSBNYXRoLmNlaWwoICRib2R5Lm91dGVyV2lkdGgodHJ1ZSkgKyAoICR3cmFwLndpZHRoKCkgLSBzY3JvbGxXaWR0aCApICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVdpZHRoICs9ICR3cmFwLm91dGVyV2lkdGgoKSAtICR3cmFwLmlubmVyV2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBmcmFtZUhlaWdodCA9PT0gdW5kZWZpbmVkICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVIZWlnaHQgPSBNYXRoLmNlaWwoICRib2R5Lm91dGVySGVpZ2h0KHRydWUpICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZUhlaWdodCArPSAkd3JhcC5vdXRlckhlaWdodCgpIC0gJHdyYXAuaW5uZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzaXplIHdyYXBwZXIgdG8gZml0IGlmcmFtZSBjb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZnJhbWVXaWR0aCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3cmFwLndpZHRoKCBmcmFtZVdpZHRoICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZnJhbWVIZWlnaHQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd3JhcC5oZWlnaHQoIGZyYW1lSGVpZ2h0ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICR3cmFwLnJlbW92ZUNsYXNzKCAnZmFuY3lib3gtaXMtaGlkZGVuJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFmdGVyTG9hZCggc2xpZGUgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRpZnJhbWUuYXR0ciggJ3NyYycsIHNsaWRlLnNyYyApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzbGlkZS5vcHRzLnNtYWxsQnRuID09PSB0cnVlICkge1xyXG4gICAgICAgICAgICAgICAgc2xpZGUuJGNvbnRlbnQucHJlcGVuZCggc2VsZi50cmFuc2xhdGUoIHNsaWRlLCBzbGlkZS5vcHRzLmJ0blRwbC5zbWFsbEJ0biApICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBpZnJhbWUgaWYgY2xvc2luZyBvciBjaGFuZ2luZyBnYWxsZXJ5IGl0ZW1cclxuICAgICAgICAgICAgJHNsaWRlLm9uZSggJ29uUmVzZXQnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBoZWxwcyBJRSBub3QgdG8gdGhyb3cgZXJyb3JzIHdoZW4gY2xvc2luZ1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCggdGhpcyApLmZpbmQoICdpZnJhbWUnICkuaGlkZSgpLmF0dHIoICdzcmMnLCAnLy9hYm91dDpibGFuaycgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoICggaWdub3JlICkge31cclxuXHJcbiAgICAgICAgICAgICAgICAkKCB0aGlzICkuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzbGlkZS5pc0xvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvLyBXcmFwIGFuZCBhcHBlbmQgY29udGVudCB0byB0aGUgc2xpZGVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBzZXRDb250ZW50IDogZnVuY3Rpb24gKCBzbGlkZSwgY29udGVudCApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGlmICggc2VsZi5pc0Nsb3NpbmcgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGYuaGlkZUxvYWRpbmcoIHNsaWRlICk7XHJcblxyXG4gICAgICAgICAgICBzbGlkZS4kc2xpZGUuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggaXNRdWVyeSggY29udGVudCApICYmIGNvbnRlbnQucGFyZW50KCkubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGNvbnRlbnQgaXMgYSBqUXVlcnkgb2JqZWN0LCB0aGVuIGl0IHdpbGwgYmUgbW92ZWQgdG8gdGhlIHNsaWRlLlxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIHBsYWNlaG9sZGVyIGlzIGNyZWF0ZWQgc28gd2Ugd2lsbCBrbm93IHdoZXJlIHRvIHB1dCBpdCBiYWNrLlxyXG4gICAgICAgICAgICAgICAgLy8gSWYgdXNlciBpcyBuYXZpZ2F0aW5nIGdhbGxlcnkgZmFzdCwgdGhlbiB0aGUgY29udGVudCBtaWdodCBiZSBhbHJlYWR5IGluc2lkZSBmYW5jeUJveFxyXG4gICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBjb250ZW50IGlzIG5vdCBhbHJlYWR5IG1vdmVkIHRvIGZhbmN5Qm94XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LnBhcmVudCggJy5mYW5jeWJveC1zbGlkZS0taW5saW5lJyApLnRyaWdnZXIoICdvblJlc2V0JyApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0ZW1wb3JhcnkgZWxlbWVudCBtYXJraW5nIG9yaWdpbmFsIHBsYWNlIG9mIHRoZSBjb250ZW50XHJcbiAgICAgICAgICAgICAgICBzbGlkZS4kcGxhY2Vob2xkZXIgPSAkKCAnPGRpdj48L2Rpdj4nICkuaGlkZSgpLmluc2VydEFmdGVyKCBjb250ZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGNvbnRlbnQgaXMgdmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgY29udGVudC5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCAhc2xpZGUuaGFzRXJyb3IgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgY29udGVudCBpcyBqdXN0IGEgcGxhaW4gdGV4dCwgdHJ5IHRvIGNvbnZlcnQgaXQgdG8gaHRtbFxyXG4gICAgICAgICAgICAgICAgaWYgKCAkLnR5cGUoIGNvbnRlbnQgKSA9PT0gJ3N0cmluZycgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9ICQoJzxkaXY+JykuYXBwZW5kKCAkLnRyaW0oIGNvbnRlbnQgKSApLmNvbnRlbnRzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgdGV4dCBub2RlLCB0aGVuIGFkZCB3cmFwcGluZyBlbGVtZW50IHRvIG1ha2UgdmVydGljYWwgYWxpZ25tZW50IHdvcmtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGNvbnRlbnRbMF0ubm9kZVR5cGUgPT09IDMgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAkKCc8ZGl2PicpLmh0bWwoIGNvbnRlbnQgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgXCJmaWx0ZXJcIiBvcHRpb24gaXMgcHJvdmlkZWQsIHRoZW4gZmlsdGVyIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGlmICggc2xpZGUub3B0cy5maWx0ZXIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9ICQoJzxkaXY+JykuaHRtbCggY29udGVudCApLmZpbmQoIHNsaWRlLm9wdHMuZmlsdGVyICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzbGlkZS4kc2xpZGUub25lKCdvblJlc2V0JywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFBhdXNlIGFsbCBodG1sNSB2aWRlby9hdWRpb1xyXG4gICAgICAgICAgICAgICAgJCggdGhpcyApLmZpbmQoICd2aWRlbyxhdWRpbycgKS50cmlnZ2VyKCAncGF1c2UnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUHV0IGNvbnRlbnQgYmFja1xyXG4gICAgICAgICAgICAgICAgaWYgKCBzbGlkZS4kcGxhY2Vob2xkZXIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuJHBsYWNlaG9sZGVyLmFmdGVyKCBjb250ZW50LmhpZGUoKSApLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS4kcGxhY2Vob2xkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjdXN0b20gY2xvc2UgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBpZiAoIHNsaWRlLiRzbWFsbEJ0biApIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS4kc21hbGxCdG4ucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLiRzbWFsbEJ0biA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGNvbnRlbnQgYW5kIG1hcmsgc2xpZGUgYXMgbm90IGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgaWYgKCAhc2xpZGUuaGFzRXJyb3IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5lbXB0eSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5pc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzbGlkZS4kY29udGVudCA9ICQoIGNvbnRlbnQgKS5hcHBlbmRUbyggc2xpZGUuJHNsaWRlICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFmdGVyTG9hZCggc2xpZGUgKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBEaXNwbGF5IGVycm9yIG1lc3NhZ2VcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgc2V0RXJyb3IgOiBmdW5jdGlvbiAoIHNsaWRlICkge1xyXG5cclxuICAgICAgICAgICAgc2xpZGUuaGFzRXJyb3IgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgc2xpZGUuJHNsaWRlLnJlbW92ZUNsYXNzKCAnZmFuY3lib3gtc2xpZGUtLScgKyBzbGlkZS50eXBlICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldENvbnRlbnQoIHNsaWRlLCB0aGlzLnRyYW5zbGF0ZSggc2xpZGUsIHNsaWRlLm9wdHMuZXJyb3JUcGwgKSApO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgLy8gU2hvdyBsb2FkaW5nIGljb24gaW5zaWRlIHRoZSBzbGlkZVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgc2hvd0xvYWRpbmcgOiBmdW5jdGlvbiggc2xpZGUgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBzbGlkZSA9IHNsaWRlIHx8IHNlbGYuY3VycmVudDtcclxuXHJcbiAgICAgICAgICAgIGlmICggc2xpZGUgJiYgIXNsaWRlLiRzcGlubmVyICkge1xyXG4gICAgICAgICAgICAgICAgc2xpZGUuJHNwaW5uZXIgPSAkKCBzZWxmLm9wdHMuc3Bpbm5lclRwbCApLmFwcGVuZFRvKCBzbGlkZS4kc2xpZGUgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgbG9hZGluZyBpY29uIGZyb20gdGhlIHNsaWRlXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBoaWRlTG9hZGluZyA6IGZ1bmN0aW9uKCBzbGlkZSApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIHNsaWRlID0gc2xpZGUgfHwgc2VsZi5jdXJyZW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzbGlkZSAmJiBzbGlkZS4kc3Bpbm5lciApIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlLiRzcGlubmVyLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBzbGlkZS4kc3Bpbm5lcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgLy8gQWRqdXN0bWVudHMgYWZ0ZXIgc2xpZGUgY29udGVudCBoYXMgYmVlbiBsb2FkZWRcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBhZnRlckxvYWQgOiBmdW5jdGlvbiggc2xpZGUgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNlbGYuaXNDbG9zaW5nICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzbGlkZS5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2xpZGUuaXNMb2FkZWQgID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYudHJpZ2dlciggJ2FmdGVyTG9hZCcsIHNsaWRlICk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLmhpZGVMb2FkaW5nKCBzbGlkZSApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzbGlkZS5vcHRzLnNtYWxsQnRuICYmICFzbGlkZS4kc21hbGxCdG4gKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZS4kc21hbGxCdG4gPSAkKCBzZWxmLnRyYW5zbGF0ZSggc2xpZGUsIHNsaWRlLm9wdHMuYnRuVHBsLnNtYWxsQnRuICkgKS5hcHBlbmRUbyggc2xpZGUuJGNvbnRlbnQuZmlsdGVyKCdkaXYsZm9ybScpLmZpcnN0KCkgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBzbGlkZS5vcHRzLnByb3RlY3QgJiYgc2xpZGUuJGNvbnRlbnQgJiYgIXNsaWRlLmhhc0Vycm9yICkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERpc2FibGUgcmlnaHQgY2xpY2tcclxuICAgICAgICAgICAgICAgIHNsaWRlLiRjb250ZW50Lm9uKCAnY29udGV4dG1lbnUuZmInLCBmdW5jdGlvbiggZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgaWYgKCBlLmJ1dHRvbiA9PSAyICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGZha2UgZWxlbWVudCBvbiB0b3Agb2YgdGhlIGltYWdlXHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIG1ha2VzIGEgYml0IGhhcmRlciBmb3IgdXNlciB0byBzZWxlY3QgaW1hZ2VcclxuICAgICAgICAgICAgICAgIGlmICggc2xpZGUudHlwZSA9PT0gJ2ltYWdlJyApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LXNwYWNlYmFsbFwiPjwvZGl2PicgKS5hcHBlbmRUbyggc2xpZGUuJGNvbnRlbnQgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGYucmV2ZWFsQ29udGVudCggc2xpZGUgKTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIE1ha2UgY29udGVudCB2aXNpYmxlXHJcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIGNvbnRlbnQgaGFzIGJlZW4gbG9hZGVkIG9yXHJcbiAgICAgICAgLy8gdXNlciBuYXZpZ2F0ZXMgZ2FsbGVyeSBhbmQgdHJhbnNpdGlvbiBzaG91bGQgc3RhcnRcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgcmV2ZWFsQ29udGVudCA6IGZ1bmN0aW9uKCBzbGlkZSApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWxmICAgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgJHNsaWRlID0gc2xpZGUuJHNsaWRlO1xyXG5cclxuICAgICAgICAgICAgdmFyIGVmZmVjdCwgZWZmZWN0Q2xhc3NOYW1lLCBkdXJhdGlvbiwgb3BhY2l0eSwgZW5kLCBzdGFydCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZWZmZWN0ICAgPSBzbGlkZS5vcHRzWyBzZWxmLmZpcnN0UnVuID8gJ2FuaW1hdGlvbkVmZmVjdCcgICA6ICd0cmFuc2l0aW9uRWZmZWN0JyBdO1xyXG4gICAgICAgICAgICBkdXJhdGlvbiA9IHNsaWRlLm9wdHNbIHNlbGYuZmlyc3RSdW4gPyAnYW5pbWF0aW9uRHVyYXRpb24nIDogJ3RyYW5zaXRpb25EdXJhdGlvbicgXTtcclxuXHJcbiAgICAgICAgICAgIGR1cmF0aW9uID0gcGFyc2VJbnQoIHNsaWRlLmZvcmNlZER1cmF0aW9uID09PSB1bmRlZmluZWQgPyBkdXJhdGlvbiA6IHNsaWRlLmZvcmNlZER1cmF0aW9uLCAxMCApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzbGlkZS5pc01vdmVkIHx8IHNsaWRlLnBvcyAhPT0gc2VsZi5jdXJyUG9zIHx8ICFkdXJhdGlvbiApIHtcclxuICAgICAgICAgICAgICAgIGVmZmVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBjYW4gem9vbVxyXG4gICAgICAgICAgICBpZiAoIGVmZmVjdCA9PT0gJ3pvb20nICYmICEoIHNsaWRlLnBvcyA9PT0gc2VsZi5jdXJyUG9zICYmIGR1cmF0aW9uICYmIHNsaWRlLnR5cGUgPT09ICdpbWFnZScgJiYgIXNsaWRlLmhhc0Vycm9yICYmICggc3RhcnQgPSBzZWxmLmdldFRodW1iUG9zKCBzbGlkZSApICkgKSApIHtcclxuICAgICAgICAgICAgICAgIGVmZmVjdCA9ICdmYWRlJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gWm9vbSBhbmltYXRpb25cclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgICAgIGlmICggZWZmZWN0ID09PSAnem9vbScgKSB7XHJcbiAgICAgICAgICAgICAgICBlbmQgPSBzZWxmLmdldEZpdFBvcyggc2xpZGUgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbmQuc2NhbGVYID0gZW5kLndpZHRoICAvIHN0YXJ0LndpZHRoO1xyXG4gICAgICAgICAgICAgICAgZW5kLnNjYWxlWSA9IGVuZC5oZWlnaHQgLyBzdGFydC5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGVuZC53aWR0aDtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBlbmQuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gYW5pbWF0ZSBvcGFjaXR5XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5ID0gc2xpZGUub3B0cy56b29tT3BhY2l0eTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIG9wYWNpdHkgPT0gJ2F1dG8nICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgPSBNYXRoLmFicyggc2xpZGUud2lkdGggLyBzbGlkZS5oZWlnaHQgLSBzdGFydC53aWR0aCAvIHN0YXJ0LmhlaWdodCApID4gMC4xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggb3BhY2l0eSApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydC5vcGFjaXR5ID0gMC4xO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZC5vcGFjaXR5ICAgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIERyYXcgaW1hZ2UgYXQgc3RhcnQgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICQuZmFuY3lib3guc2V0VHJhbnNsYXRlKCBzbGlkZS4kY29udGVudC5yZW1vdmVDbGFzcyggJ2ZhbmN5Ym94LWlzLWhpZGRlbicgKSwgc3RhcnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3JjZVJlZHJhdyggc2xpZGUuJGNvbnRlbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdGFydCBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgICQuZmFuY3lib3guYW5pbWF0ZSggc2xpZGUuJGNvbnRlbnQsIGVuZCwgZHVyYXRpb24sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZi51cGRhdGVTbGlkZSggc2xpZGUgKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBTaW1wbHkgc2hvdyBjb250ZW50XHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgICAgIGlmICggIWVmZmVjdCApIHtcclxuICAgICAgICAgICAgICAgIGZvcmNlUmVkcmF3KCAkc2xpZGUgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzbGlkZS4kY29udGVudC5yZW1vdmVDbGFzcyggJ2ZhbmN5Ym94LWlzLWhpZGRlbicgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHNsaWRlLnBvcyA9PT0gc2VsZi5jdXJyUG9zICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQuZmFuY3lib3guc3RvcCggJHNsaWRlICk7XHJcblxyXG4gICAgICAgICAgICBlZmZlY3RDbGFzc05hbWUgPSAnZmFuY3lib3gtYW5pbWF0ZWQgZmFuY3lib3gtc2xpZGUtLScgKyAoIHNsaWRlLnBvcyA+PSBzZWxmLnByZXZQb3MgPyAnbmV4dCcgOiAncHJldmlvdXMnICkgKyAnIGZhbmN5Ym94LWZ4LScgKyBlZmZlY3Q7XHJcblxyXG4gICAgICAgICAgICAkc2xpZGUucmVtb3ZlQXR0ciggJ3N0eWxlJyApLnJlbW92ZUNsYXNzKCAnZmFuY3lib3gtc2xpZGUtLWN1cnJlbnQgZmFuY3lib3gtc2xpZGUtLW5leHQgZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzJyApLmFkZENsYXNzKCBlZmZlY3RDbGFzc05hbWUgKTtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlLiRjb250ZW50LnJlbW92ZUNsYXNzKCAnZmFuY3lib3gtaXMtaGlkZGVuJyApO1xyXG5cclxuICAgICAgICAgICAgLy9Gb3JjZSByZWZsb3cgZm9yIENTUzMgdHJhbnNpdGlvbnNcclxuICAgICAgICAgICAgZm9yY2VSZWRyYXcoICRzbGlkZSApO1xyXG5cclxuICAgICAgICAgICAgJC5mYW5jeWJveC5hbmltYXRlKCAkc2xpZGUsICdmYW5jeWJveC1zbGlkZS0tY3VycmVudCcsIGR1cmF0aW9uLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAkc2xpZGUucmVtb3ZlQ2xhc3MoIGVmZmVjdENsYXNzTmFtZSApLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHNsaWRlLnBvcyA9PT0gc2VsZi5jdXJyUG9zICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sIHRydWUpO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgY2FuIGFuZCBoYXZlIHRvIHpvb20gZnJvbSB0aHVtYm5haWxcclxuICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBnZXRUaHVtYlBvcyA6IGZ1bmN0aW9uKCBzbGlkZSApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIHJleiAgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGVsZW1lbnQgaXMgaW5zaWRlIHRoZSB2aWV3cG9ydCBieSBhdCBsZWFzdCAxIHBpeGVsXHJcbiAgICAgICAgICAgIHZhciBpc0VsZW1lbnRWaXNpYmxlID0gZnVuY3Rpb24oICRlbCApIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJGVsWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50UmVjdHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdmlzaWJsZUluQWxsUGFyZW50cztcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoIGVsZW1lbnQucGFyZW50RWxlbWVudCAhPT0gbnVsbCApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoICQoZWxlbWVudC5wYXJlbnRFbGVtZW50KS5jc3MoJ292ZXJmbG93JykgPT09ICdoaWRkZW4nICB8fCAkKGVsZW1lbnQucGFyZW50RWxlbWVudCkuY3NzKCdvdmVyZmxvdycpID09PSAnYXV0bycgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFJlY3RzLnB1c2goZWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZUluQWxsUGFyZW50cyA9IHBhcmVudFJlY3RzLmV2ZXJ5KGZ1bmN0aW9uKHBhcmVudFJlY3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2aXNpYmxlUGl4ZWxYID0gTWF0aC5taW4oZWxlbWVudFJlY3QucmlnaHQsIHBhcmVudFJlY3QucmlnaHQpIC0gTWF0aC5tYXgoZWxlbWVudFJlY3QubGVmdCwgcGFyZW50UmVjdC5sZWZ0KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmlzaWJsZVBpeGVsWSA9IE1hdGgubWluKGVsZW1lbnRSZWN0LmJvdHRvbSwgcGFyZW50UmVjdC5ib3R0b20pIC0gTWF0aC5tYXgoZWxlbWVudFJlY3QudG9wLCBwYXJlbnRSZWN0LnRvcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2aXNpYmxlUGl4ZWxYID4gMCAmJiB2aXNpYmxlUGl4ZWxZID4gMDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB2aXNpYmxlSW5BbGxQYXJlbnRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFJlY3QuYm90dG9tID4gMCAmJiBlbGVtZW50UmVjdC5yaWdodCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50UmVjdC5sZWZ0IDwgJCh3aW5kb3cpLndpZHRoKCkgJiYgZWxlbWVudFJlY3QudG9wIDwgJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyICR0aHVtYiAgID0gc2xpZGUub3B0cy4kdGh1bWI7XHJcbiAgICAgICAgICAgIHZhciB0aHVtYlBvcyA9ICR0aHVtYiA/ICR0aHVtYi5vZmZzZXQoKSA6IDA7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZVBvcztcclxuXHJcbiAgICAgICAgICAgIGlmICggdGh1bWJQb3MgJiYgJHRodW1iWzBdLm93bmVyRG9jdW1lbnQgPT09IGRvY3VtZW50ICYmIGlzRWxlbWVudFZpc2libGUoICR0aHVtYiApICkge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVQb3MgPSBzZWxmLiRyZWZzLnN0YWdlLm9mZnNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJleiA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgICAgOiB0aHVtYlBvcy50b3AgIC0gc2xpZGVQb3MudG9wICArIHBhcnNlRmxvYXQoICR0aHVtYi5jc3MoIFwiYm9yZGVyLXRvcC13aWR0aFwiICkgfHwgMCApLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgICA6IHRodW1iUG9zLmxlZnQgLSBzbGlkZVBvcy5sZWZ0ICsgcGFyc2VGbG9hdCggJHRodW1iLmNzcyggXCJib3JkZXItbGVmdC13aWR0aFwiICkgfHwgMCApLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoICA6ICR0aHVtYi53aWR0aCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA6ICR0aHVtYi5oZWlnaHQoKSxcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZVggOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlWSA6IDFcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXo7XHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIEZpbmFsIGFkanVzdG1lbnRzIGFmdGVyIGN1cnJlbnQgZ2FsbGVyeSBpdGVtIGlzIG1vdmVkIHRvIHBvc2l0aW9uXHJcbiAgICAgICAgLy8gYW5kIGl0YHMgY29udGVudCBpcyBsb2FkZWRcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgY29tcGxldGUgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHNlbGYuY3VycmVudCxcclxuICAgICAgICAgICAgICAgIHNsaWRlcyAgPSB7fSxcclxuICAgICAgICAgICAgICAgIHByb21pc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGN1cnJlbnQuaXNNb3ZlZCB8fCAhY3VycmVudC5pc0xvYWRlZCB8fCBjdXJyZW50LmlzQ29tcGxldGUgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnQuaXNDb21wbGV0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50LiRzbGlkZS5zaWJsaW5ncygpLnRyaWdnZXIoICdvblJlc2V0JyApO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5wcmVsb2FkKCAnaW5saW5lJyApO1xyXG5cclxuICAgICAgICAgICAgLy8gVHJpZ2dlciBhbnkgQ1NTMyB0cmFuc2l0b24gaW5zaWRlIHRoZSBzbGlkZVxyXG4gICAgICAgICAgICBmb3JjZVJlZHJhdyggY3VycmVudC4kc2xpZGUgKTtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnQuJHNsaWRlLmFkZENsYXNzKCAnZmFuY3lib3gtc2xpZGUtLWNvbXBsZXRlJyApO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHVubmVjZXNzYXJ5IHNsaWRlc1xyXG4gICAgICAgICAgICAkLmVhY2goIHNlbGYuc2xpZGVzLCBmdW5jdGlvbigga2V5LCBzbGlkZSApIHtcclxuICAgICAgICAgICAgICAgIGlmICggc2xpZGUucG9zID49IHNlbGYuY3VyclBvcyAtIDEgJiYgc2xpZGUucG9zIDw9IHNlbGYuY3VyclBvcyArIDEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzWyBzbGlkZS5wb3MgXSA9IHNsaWRlO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIHNsaWRlICkge1xyXG4gICAgICAgICAgICAgICAgICAgICQuZmFuY3lib3guc3RvcCggc2xpZGUuJHNsaWRlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLiRzbGlkZS5vZmYoKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnNsaWRlcyA9IHNsaWRlcztcclxuXHJcbiAgICAgICAgICAgIHNlbGYudXBkYXRlQ3Vyc29yKCk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnRyaWdnZXIoICdhZnRlclNob3cnICk7XHJcblxyXG4gICAgICAgICAgICAvLyBQbGF5IGZpcnN0IGh0bWw1IHZpZGVvL2F1ZGlvXHJcbiAgICAgICAgICAgIGN1cnJlbnQuJHNsaWRlLmZpbmQoICd2aWRlbyxhdWRpbycgKS5maXJzdCgpLnRyaWdnZXIoICdwbGF5JyApO1xyXG5cclxuICAgICAgICAgICAgLy8gVHJ5IHRvIGZvY3VzIG9uIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudFxyXG4gICAgICAgICAgICBpZiAoICQoIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgKS5pcyggJ1tkaXNhYmxlZF0nICkgfHwgKCBjdXJyZW50Lm9wdHMuYXV0b0ZvY3VzICYmICEoIGN1cnJlbnQudHlwZSA9PSAnaW1hZ2UnIHx8IGN1cnJlbnQudHlwZSA9PT0gJ2lmcmFtZScgKSApICkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvLyBQcmVsb2FkIG5leHQgYW5kIHByZXZpb3VzIHNsaWRlc1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIHByZWxvYWQgOiBmdW5jdGlvbiggdHlwZSApIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgbmV4dCA9IHNlbGYuc2xpZGVzWyBzZWxmLmN1cnJQb3MgKyAxIF0sXHJcbiAgICAgICAgICAgICAgICBwcmV2ID0gc2VsZi5zbGlkZXNbIHNlbGYuY3VyclBvcyAtIDEgXTtcclxuXHJcbiAgICAgICAgICAgIGlmICggbmV4dCAmJiBuZXh0LnR5cGUgPT09IHR5cGUgKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvYWRTbGlkZSggbmV4dCApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHByZXYgJiYgcHJldi50eXBlID09PSB0eXBlICkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sb2FkU2xpZGUoIHByZXYgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvLyBUcnkgdG8gZmluZCBhbmQgZm9jdXMgb24gdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBmb2N1cyA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudDtcclxuICAgICAgICAgICAgdmFyICRlbDtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5pc0Nsb3NpbmcgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggY3VycmVudCAmJiBjdXJyZW50LmlzQ29tcGxldGUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTG9vayBmb3IgZmlyc3QgaW5wdXQgd2l0aCBhdXRvZm9jdXMgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICAkZWwgPSBjdXJyZW50LiRzbGlkZS5maW5kKCdpbnB1dFthdXRvZm9jdXNdOmVuYWJsZWQ6dmlzaWJsZTpmaXJzdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggISRlbC5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGVsID0gY3VycmVudC4kc2xpZGUuZmluZCgnYnV0dG9uLDppbnB1dCxbdGFiaW5kZXhdLGEnKS5maWx0ZXIoJzplbmFibGVkOnZpc2libGU6Zmlyc3QnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGVsID0gJGVsICYmICRlbC5sZW5ndGggPyAkZWwgOiB0aGlzLiRyZWZzLmNvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgICAgICRlbC5mb2N1cygpO1xyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvLyBBY3RpdmF0ZXMgY3VycmVudCBpbnN0YW5jZSAtIGJyaW5ncyBjb250YWluZXIgdG8gdGhlIGZyb250IGFuZCBlbmFibGVzIGtleWJvYXJkLFxyXG4gICAgICAgIC8vIG5vdGlmaWVzIG90aGVyIGluc3RhbmNlcyBhYm91dCBkZWFjdGl2YXRpbmdcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgYWN0aXZhdGUgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8vIERlYWN0aXZhdGUgYWxsIGluc3RhbmNlc1xyXG4gICAgICAgICAgICAkKCAnLmZhbmN5Ym94LWNvbnRhaW5lcicgKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9ICQodGhpcykuZGF0YSggJ0ZhbmN5Qm94JyApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNraXAgc2VsZiBhbmQgY2xvc2luZyBpbnN0YW5jZXNcclxuICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5pZCAhPT0gc2VsZi5pZCAmJiAhaW5zdGFuY2UuaXNDbG9zaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UudHJpZ2dlciggJ29uRGVhY3RpdmF0ZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UucmVtb3ZlRXZlbnRzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLmlzVmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNlbGYuY3VycmVudCB8fCBzZWxmLmlzSWRsZSApIHtcclxuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGVDb250cm9scygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWxmLnRyaWdnZXIoICdvbkFjdGl2YXRlJyApO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5hZGRFdmVudHMoKTtcclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgLy8gU3RhcnQgY2xvc2luZyBwcm9jZWR1cmVcclxuICAgICAgICAvLyBUaGlzIHdpbGwgc3RhcnQgXCJ6b29tLW91dFwiIGFuaW1hdGlvbiBpZiBuZWVkZWQgYW5kIGNsZWFuIGV2ZXJ5dGhpbmcgdXAgYWZ0ZXJ3YXJkc1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBjbG9zZSA6IGZ1bmN0aW9uKCBlLCBkICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlbGYgICAgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHNlbGYuY3VycmVudDtcclxuXHJcbiAgICAgICAgICAgIHZhciBlZmZlY3QsIGR1cmF0aW9uO1xyXG4gICAgICAgICAgICB2YXIgJHdoYXQsIG9wYWNpdHksIHN0YXJ0LCBlbmQ7XHJcblxyXG4gICAgICAgICAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jbGVhblVwKCBlICk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNlbGYuaXNDbG9zaW5nICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWxmLmlzQ2xvc2luZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBiZWZvcmVDbG9zZSBjYWxsYmFjayBwcmV2ZW50cyBjbG9zaW5nLCBtYWtlIHN1cmUgY29udGVudCBpcyBjZW50ZXJlZFxyXG4gICAgICAgICAgICBpZiAoIHNlbGYudHJpZ2dlciggJ2JlZm9yZUNsb3NlJywgZSApID09PSBmYWxzZSApIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuaXNDbG9zaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFGcmFtZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsIGV2ZW50c1xyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbXVsdGlwbGUgaW5zdGFuY2VzLCB0aGV5IHdpbGwgYmUgc2V0IGFnYWluIGJ5IFwiYWN0aXZhdGVcIiBtZXRob2RcclxuICAgICAgICAgICAgc2VsZi5yZW1vdmVFdmVudHMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggY3VycmVudC50aW1vdXRzICkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCBjdXJyZW50LnRpbW91dHMgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHdoYXQgICAgPSBjdXJyZW50LiRjb250ZW50O1xyXG4gICAgICAgICAgICBlZmZlY3QgICA9IGN1cnJlbnQub3B0cy5hbmltYXRpb25FZmZlY3Q7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uID0gJC5pc051bWVyaWMoIGQgKSA/IGQgOiAoIGVmZmVjdCA/IGN1cnJlbnQub3B0cy5hbmltYXRpb25EdXJhdGlvbiA6IDAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBvdGhlciBzbGlkZXNcclxuICAgICAgICAgICAgY3VycmVudC4kc2xpZGUub2ZmKCB0cmFuc2l0aW9uRW5kICkucmVtb3ZlQ2xhc3MoICdmYW5jeWJveC1zbGlkZS0tY29tcGxldGUgZmFuY3lib3gtc2xpZGUtLW5leHQgZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzIGZhbmN5Ym94LWFuaW1hdGVkJyApO1xyXG5cclxuICAgICAgICAgICAgY3VycmVudC4kc2xpZGUuc2libGluZ3MoKS50cmlnZ2VyKCAnb25SZXNldCcgKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgYW5pbWF0aW9uc1xyXG4gICAgICAgICAgICBpZiAoIGR1cmF0aW9uICkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi4kcmVmcy5jb250YWluZXIucmVtb3ZlQ2xhc3MoICdmYW5jeWJveC1pcy1vcGVuJyApLmFkZENsYXNzKCAnZmFuY3lib3gtaXMtY2xvc2luZycgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2xlYW4gdXBcclxuICAgICAgICAgICAgc2VsZi5oaWRlTG9hZGluZyggY3VycmVudCApO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5oaWRlQ29udHJvbHMoKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYudXBkYXRlQ3Vyc29yKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBwb3NzaWJsZSB0byB6b29tLW91dFxyXG4gICAgICAgICAgICBpZiAoIGVmZmVjdCA9PT0gJ3pvb20nICYmICEoIGUgIT09IHRydWUgJiYgJHdoYXQgJiYgZHVyYXRpb24gJiYgY3VycmVudC50eXBlID09PSAnaW1hZ2UnICYmICFjdXJyZW50Lmhhc0Vycm9yICYmICggZW5kID0gc2VsZi5nZXRUaHVtYlBvcyggY3VycmVudCApICkgKSApIHtcclxuICAgICAgICAgICAgICAgIGVmZmVjdCA9ICdmYWRlJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBlZmZlY3QgPT09ICd6b29tJyApIHtcclxuICAgICAgICAgICAgICAgICQuZmFuY3lib3guc3RvcCggJHdoYXQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydCA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKCAkd2hhdCApO1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXJ0LndpZHRoICA9IHN0YXJ0LndpZHRoICAqIHN0YXJ0LnNjYWxlWDtcclxuICAgICAgICAgICAgICAgIHN0YXJ0LmhlaWdodCA9IHN0YXJ0LmhlaWdodCAqIHN0YXJ0LnNjYWxlWTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIGFuaW1hdGUgb3BhY2l0eVxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eSA9IGN1cnJlbnQub3B0cy56b29tT3BhY2l0eTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIG9wYWNpdHkgPT0gJ2F1dG8nICkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgPSBNYXRoLmFicyggY3VycmVudC53aWR0aCAvIGN1cnJlbnQuaGVpZ2h0IC0gZW5kLndpZHRoIC8gZW5kLmhlaWdodCApID4gMC4xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggb3BhY2l0eSApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmQub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhcnQuc2NhbGVYID0gc3RhcnQud2lkdGggIC8gZW5kLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgc3RhcnQuc2NhbGVZID0gc3RhcnQuaGVpZ2h0IC8gZW5kLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydC53aWR0aCAgPSBlbmQud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBzdGFydC5oZWlnaHQgPSBlbmQuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgICQuZmFuY3lib3guc2V0VHJhbnNsYXRlKCBjdXJyZW50LiRjb250ZW50LCBzdGFydCApO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcmNlUmVkcmF3KCBjdXJyZW50LiRjb250ZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5mYW5jeWJveC5hbmltYXRlKCBjdXJyZW50LiRjb250ZW50LCBlbmQsIGR1cmF0aW9uLCBkb25lICk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZWZmZWN0ICYmIGR1cmF0aW9uICkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIHNraXAgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAoIGUgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZG9uZSwgZHVyYXRpb24gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQuZmFuY3lib3guYW5pbWF0ZSggY3VycmVudC4kc2xpZGUucmVtb3ZlQ2xhc3MoICdmYW5jeWJveC1zbGlkZS0tY3VycmVudCcgKSwgJ2ZhbmN5Ym94LWFuaW1hdGVkIGZhbmN5Ym94LXNsaWRlLS1wcmV2aW91cyBmYW5jeWJveC1meC0nICsgZWZmZWN0LCBkdXJhdGlvbiwgZG9uZSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIEZpbmFsIGFkanVzdG1lbnRzIGFmdGVyIHJlbW92aW5nIHRoZSBpbnN0YW5jZVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBjbGVhblVwIDogZnVuY3Rpb24oIGUgKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmICA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAkYm9keSA9ICQoICdib2R5JyApLFxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ7XHJcblxyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnQuJHNsaWRlLnRyaWdnZXIoICdvblJlc2V0JyApO1xyXG5cclxuICAgICAgICAgICAgc2VsZi4kcmVmcy5jb250YWluZXIuZW1wdHkoKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYudHJpZ2dlciggJ2FmdGVyQ2xvc2UnLCBlICk7XHJcblxyXG4gICAgICAgICAgICAvLyBQbGFjZSBiYWNrIGZvY3VzXHJcbiAgICAgICAgICAgIGlmICggc2VsZi4kbGFzdEZvY3VzICYmICEhc2VsZi5jdXJyZW50Lm9wdHMuYmFja0ZvY3VzICkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi4kbGFzdEZvY3VzLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgb3RoZXIgaW5zdGFuY2VzXHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gJC5mYW5jeWJveC5nZXRJbnN0YW5jZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBpbnN0YW5jZSApIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmFjdGl2YXRlKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICRXLnNjcm9sbFRvcCggc2VsZi5zY3JvbGxUb3AgKS5zY3JvbGxMZWZ0KCBzZWxmLnNjcm9sbExlZnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcyggJ2ZhbmN5Ym94LWFjdGl2ZSBjb21wZW5zYXRlLWZvci1zY3JvbGxiYXInICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCAkYm9keS5oYXNDbGFzcyggJ2ZhbmN5Ym94LWlvc2ZpeCcgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBwYXJzZUludChkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCwgMTApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcyggJ2ZhbmN5Ym94LWlvc2ZpeCcgKS5jc3MoICd0b3AnLCAnJyApLnNjcm9sbFRvcCggb2Zmc2V0ICogLTEgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKCAnI2ZhbmN5Ym94LXN0eWxlLW5vc2Nyb2xsJyApLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgLy8gQ2FsbCBjYWxsYmFjayBhbmQgdHJpZ2dlciBhbiBldmVudFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgdHJpZ2dlciA6IGZ1bmN0aW9uKCBuYW1lLCBzbGlkZSApIHtcclxuICAgICAgICAgICAgdmFyIGFyZ3MgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcclxuICAgICAgICAgICAgICAgIHNlbGYgID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIG9iaiAgID0gc2xpZGUgJiYgc2xpZGUub3B0cyA/IHNsaWRlIDogc2VsZi5jdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgcmV6O1xyXG5cclxuICAgICAgICAgICAgaWYgKCBvYmogKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzLnVuc2hpZnQoIG9iaiApO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iaiA9IHNlbGY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFyZ3MudW5zaGlmdCggc2VsZiApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCAkLmlzRnVuY3Rpb24oIG9iai5vcHRzWyBuYW1lIF0gKSApIHtcclxuICAgICAgICAgICAgICAgIHJleiA9IG9iai5vcHRzWyBuYW1lIF0uYXBwbHkoIG9iaiwgYXJncyApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHJleiA9PT0gZmFsc2UgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV6O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIG5hbWUgPT09ICdhZnRlckNsb3NlJyB8fCAhc2VsZi4kcmVmcyApIHtcclxuICAgICAgICAgICAgICAgICRELnRyaWdnZXIoIG5hbWUgKyAnLmZiJywgYXJncyApO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuJHJlZnMuY29udGFpbmVyLnRyaWdnZXIoIG5hbWUgKyAnLmZiJywgYXJncyApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgaW5mb2JhciB2YWx1ZXMsIG5hdmlnYXRpb24gYnV0dG9uIHN0YXRlcyBhbmQgcmV2ZWFsIGNhcHRpb25cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgdXBkYXRlQ29udHJvbHMgOiBmdW5jdGlvbiAoIGZvcmNlICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgID0gc2VsZi5jdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgaW5kZXggICAgPSBjdXJyZW50LmluZGV4LFxyXG4gICAgICAgICAgICAgICAgY2FwdGlvbiAgPSBjdXJyZW50Lm9wdHMuY2FwdGlvbixcclxuICAgICAgICAgICAgICAgICRjb250YWluZXIgPSBzZWxmLiRyZWZzLmNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICRjYXB0aW9uICAgPSBzZWxmLiRyZWZzLmNhcHRpb247XHJcblxyXG4gICAgICAgICAgICAvLyBSZWNhbGN1bGF0ZSBjb250ZW50IGRpbWVuc2lvbnNcclxuICAgICAgICAgICAgY3VycmVudC4kc2xpZGUudHJpZ2dlciggJ3JlZnJlc2gnICk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLiRjYXB0aW9uID0gY2FwdGlvbiAmJiBjYXB0aW9uLmxlbmd0aCA/ICRjYXB0aW9uLmh0bWwoIGNhcHRpb24gKSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoICFzZWxmLmlzSGlkZGVuQ29udHJvbHMgJiYgIXNlbGYuaXNJZGxlICkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zaG93Q29udHJvbHMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIGluZm8gYW5kIG5hdmlnYXRpb24gZWxlbWVudHNcclxuICAgICAgICAgICAgJGNvbnRhaW5lci5maW5kKCdbZGF0YS1mYW5jeWJveC1jb3VudF0nKS5odG1sKCBzZWxmLmdyb3VwLmxlbmd0aCApO1xyXG4gICAgICAgICAgICAkY29udGFpbmVyLmZpbmQoJ1tkYXRhLWZhbmN5Ym94LWluZGV4XScpLmh0bWwoIGluZGV4ICsgMSApO1xyXG5cclxuICAgICAgICAgICAgJGNvbnRhaW5lci5maW5kKCdbZGF0YS1mYW5jeWJveC1wcmV2XScpLnByb3AoICdkaXNhYmxlZCcsICggIWN1cnJlbnQub3B0cy5sb29wICYmIGluZGV4IDw9IDAgKSApO1xyXG4gICAgICAgICAgICAkY29udGFpbmVyLmZpbmQoJ1tkYXRhLWZhbmN5Ym94LW5leHRdJykucHJvcCggJ2Rpc2FibGVkJywgKCAhY3VycmVudC5vcHRzLmxvb3AgJiYgaW5kZXggPj0gc2VsZi5ncm91cC5sZW5ndGggLSAxICkgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggY3VycmVudC50eXBlID09PSAnaW1hZ2UnICkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBkb3dubG9hZCBidXR0b24gc291cmNlXHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmZpbmQoJ1tkYXRhLWZhbmN5Ym94LWRvd25sb2FkXScpLmF0dHIoICdocmVmJywgY3VycmVudC5vcHRzLmltYWdlLnNyYyB8fCBjdXJyZW50LnNyYyApLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmZpbmQoJ1tkYXRhLWZhbmN5Ym94LWRvd25sb2FkXSxbZGF0YS1mYW5jeWJveC16b29tXScpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIEhpZGUgdG9vbGJhciBhbmQgY2FwdGlvblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBoaWRlQ29udHJvbHMgOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzSGlkZGVuQ29udHJvbHMgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kcmVmcy5jb250YWluZXIucmVtb3ZlQ2xhc3MoICdmYW5jeWJveC1zaG93LWluZm9iYXIgZmFuY3lib3gtc2hvdy10b29sYmFyIGZhbmN5Ym94LXNob3ctY2FwdGlvbiBmYW5jeWJveC1zaG93LW5hdicgKTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2hvd0NvbnRyb2xzIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIG9wdHMgPSBzZWxmLmN1cnJlbnQgPyBzZWxmLmN1cnJlbnQub3B0cyA6IHNlbGYub3B0cztcclxuICAgICAgICAgICAgdmFyICRjb250YWluZXIgPSBzZWxmLiRyZWZzLmNvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuaXNIaWRkZW5Db250cm9scyAgID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNlbGYuaWRsZVNlY29uZHNDb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgICRjb250YWluZXJcclxuICAgICAgICAgICAgICAgIC50b2dnbGVDbGFzcyggJ2ZhbmN5Ym94LXNob3ctdG9vbGJhcicsICEhKCBvcHRzLnRvb2xiYXIgJiYgb3B0cy5idXR0b25zICkgKVxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKCAnZmFuY3lib3gtc2hvdy1pbmZvYmFyJywgISEoIG9wdHMuaW5mb2JhciAmJiBzZWxmLmdyb3VwLmxlbmd0aCA+IDEgKSApXHJcbiAgICAgICAgICAgICAgICAudG9nZ2xlQ2xhc3MoICdmYW5jeWJveC1zaG93LW5hdicsICAgICAhISggb3B0cy5hcnJvd3MgJiYgc2VsZi5ncm91cC5sZW5ndGggPiAxICkgKVxyXG4gICAgICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKCAnZmFuY3lib3gtaXMtbW9kYWwnLCAgICAgISFvcHRzLm1vZGFsICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNlbGYuJGNhcHRpb24gKSB7XHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFkZENsYXNzKCAnZmFuY3lib3gtc2hvdy1jYXB0aW9uICcpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgJGNvbnRhaW5lci5yZW1vdmVDbGFzcyggJ2ZhbmN5Ym94LXNob3ctY2FwdGlvbicgKTtcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgLy8gVG9nZ2xlIHRvb2xiYXIgYW5kIGNhcHRpb25cclxuICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgdG9nZ2xlQ29udHJvbHMgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICBpZiAoIHRoaXMuaXNIaWRkZW5Db250cm9scyApIHtcclxuICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udHJvbHMoKTtcclxuXHJcbiAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgdGhpcy5oaWRlQ29udHJvbHMoKTtcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgfSxcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQuZmFuY3lib3ggPSB7XHJcblxyXG4gICAgICAgIHZlcnNpb24gIDogXCIzLjIuMTBcIixcclxuICAgICAgICBkZWZhdWx0cyA6IGRlZmF1bHRzLFxyXG5cclxuXHJcbiAgICAgICAgLy8gR2V0IGN1cnJlbnQgaW5zdGFuY2UgYW5kIGV4ZWN1dGUgYSBjb21tYW5kLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gRXhhbXBsZXMgb2YgdXNhZ2U6XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICRpbnN0YW5jZSA9ICQuZmFuY3lib3guZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICAvLyAgICQuZmFuY3lib3guZ2V0SW5zdGFuY2UoKS5qdW1wVG8oIDEgKTtcclxuICAgICAgICAvLyAgICQuZmFuY3lib3guZ2V0SW5zdGFuY2UoICdqdW1wVG8nLCAxICk7XHJcbiAgICAgICAgLy8gICAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgICBjb25zb2xlLmluZm8oIHRoaXMuY3VyckluZGV4ICk7XHJcbiAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgZ2V0SW5zdGFuY2UgOiBmdW5jdGlvbiAoIGNvbW1hbmQgKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9ICQoJy5mYW5jeWJveC1jb250YWluZXI6bm90KFwiLmZhbmN5Ym94LWlzLWNsb3NpbmdcIik6bGFzdCcpLmRhdGEoICdGYW5jeUJveCcgKTtcclxuICAgICAgICAgICAgdmFyIGFyZ3MgICAgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggaW5zdGFuY2UgaW5zdGFuY2VvZiBGYW5jeUJveCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoICQudHlwZSggY29tbWFuZCApID09PSAnc3RyaW5nJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZVsgY29tbWFuZCBdLmFwcGx5KCBpbnN0YW5jZSwgYXJncyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoICQudHlwZSggY29tbWFuZCApID09PSAnZnVuY3Rpb24nICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmQuYXBwbHkoIGluc3RhbmNlLCBhcmdzICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgbmV3IGluc3RhbmNlXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBvcGVuIDogZnVuY3Rpb24gKCBpdGVtcywgb3B0cywgaW5kZXggKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmFuY3lCb3goIGl0ZW1zLCBvcHRzLCBpbmRleCApO1xyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAvLyBDbG9zZSBjdXJyZW50IG9yIGFsbCBpbnN0YW5jZXNcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgY2xvc2UgOiBmdW5jdGlvbiAoIGFsbCApIHtcclxuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5nZXRJbnN0YW5jZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBpbnN0YW5jZSApIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVHJ5IHRvIGZpbmQgYW5kIGNsb3NlIG5leHQgaW5zdGFuY2VcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGFsbCA9PT0gdHJ1ZSApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gQ2xvc2UgaW5zdGFuY2VzIGFuZCB1bmJpbmQgYWxsIGV2ZW50c1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBkZXN0cm95IDogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlICk7XHJcblxyXG4gICAgICAgICAgICAkRC5vZmYoICdjbGljay5mYi1zdGFydCcgKTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIFRyeSB0byBkZXRlY3QgbW9iaWxlIGRldmljZXNcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIGlzTW9iaWxlIDogZG9jdW1lbnQuY3JlYXRlVG91Y2ggIT09IHVuZGVmaW5lZCAmJiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksXHJcblxyXG5cclxuICAgICAgICAvLyBEZXRlY3QgaWYgJ3RyYW5zbGF0ZTNkJyBzdXBwb3J0IGlzIGF2YWlsYWJsZVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIHVzZTNkIDogKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUoIGRpdiApLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpICYmICEoZG9jdW1lbnQuZG9jdW1lbnRNb2RlICYmIGRvY3VtZW50LmRvY3VtZW50TW9kZSA8IDExKTtcclxuICAgICAgICB9KCkpLFxyXG5cclxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IGN1cnJlbnQgdmlzdWFsIHN0YXRlIG9mIGFuIGVsZW1lbnRcclxuICAgICAgICAvLyByZXR1cm5zIGFycmF5WyB0b3AsIGxlZnQsIGhvcml6b250YWwtc2NhbGUsIHZlcnRpY2FsLXNjYWxlLCBvcGFjaXR5IF1cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgZ2V0VHJhbnNsYXRlIDogZnVuY3Rpb24oICRlbCApIHtcclxuICAgICAgICAgICAgdmFyIG1hdHJpeDtcclxuXHJcbiAgICAgICAgICAgIGlmICggISRlbCB8fCAhJGVsLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWF0cml4ICA9ICRlbC5lcSggMCApLmNzcygndHJhbnNmb3JtJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIG1hdHJpeCAmJiBtYXRyaXguaW5kZXhPZiggJ21hdHJpeCcgKSAhPT0gLTEgKSB7XHJcbiAgICAgICAgICAgICAgICBtYXRyaXggPSBtYXRyaXguc3BsaXQoJygnKVsxXTtcclxuICAgICAgICAgICAgICAgIG1hdHJpeCA9IG1hdHJpeC5zcGxpdCgnKScpWzBdO1xyXG4gICAgICAgICAgICAgICAgbWF0cml4ID0gbWF0cml4LnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXRyaXggPSBbXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBtYXRyaXgubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIElFXHJcbiAgICAgICAgICAgICAgICBpZiAoIG1hdHJpeC5sZW5ndGggPiAxMCApIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRyaXggPSBbIG1hdHJpeFsxM10sIG1hdHJpeFsxMl0sIG1hdHJpeFswXSwgbWF0cml4WzVdIF07XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRyaXggPSBbIG1hdHJpeFs1XSwgbWF0cml4WzRdLCBtYXRyaXhbMF0sIG1hdHJpeFszXV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbWF0cml4ID0gbWF0cml4Lm1hcChwYXJzZUZsb2F0KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXRyaXggPSBbIDAsIDAsIDEsIDEgXTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNSZWdleCA9IC9cXC4qdHJhbnNsYXRlXFwoKC4qKXB4LCguKilweFxcKS9pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zUmV6ID0gdHJhbnNSZWdleC5leGVjKCAkZWwuZXEoIDAgKS5hdHRyKCdzdHlsZScpICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0cmFuc1JleiApIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRyaXhbIDAgXSA9IHBhcnNlRmxvYXQoIHRyYW5zUmV6WzJdICk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4WyAxIF0gPSBwYXJzZUZsb2F0KCB0cmFuc1JlelsxXSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdG9wICAgICA6IG1hdHJpeFsgMCBdLFxyXG4gICAgICAgICAgICAgICAgbGVmdCAgICA6IG1hdHJpeFsgMSBdLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVYICA6IG1hdHJpeFsgMiBdLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVZICA6IG1hdHJpeFsgMyBdLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eSA6IHBhcnNlRmxvYXQoICRlbC5jc3MoJ29wYWNpdHknKSApLFxyXG4gICAgICAgICAgICAgICAgd2lkdGggICA6ICRlbC53aWR0aCgpLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICA6ICRlbC5oZWlnaHQoKVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgLy8gU2hvcnRjdXQgZm9yIHNldHRpbmcgXCJ0cmFuc2xhdGUzZFwiIHByb3BlcnRpZXMgZm9yIGVsZW1lbnRcclxuICAgICAgICAvLyBDYW4gc2V0IGJlIHVzZWQgdG8gc2V0IG9wYWNpdHksIHRvb1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIHNldFRyYW5zbGF0ZSA6IGZ1bmN0aW9uKCAkZWwsIHByb3BzICkge1xyXG4gICAgICAgICAgICB2YXIgc3RyICA9ICcnO1xyXG4gICAgICAgICAgICB2YXIgY3NzICA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKCAhJGVsIHx8ICFwcm9wcyApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBwcm9wcy5sZWZ0ICE9PSB1bmRlZmluZWQgfHwgcHJvcHMudG9wICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSAoIHByb3BzLmxlZnQgPT09IHVuZGVmaW5lZCA/ICRlbC5wb3NpdGlvbigpLmxlZnQgOiBwcm9wcy5sZWZ0ICkgICsgJ3B4LCAnICsgKCBwcm9wcy50b3AgPT09IHVuZGVmaW5lZCA/ICRlbC5wb3NpdGlvbigpLnRvcCA6IHByb3BzLnRvcCApICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMudXNlM2QgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJ3RyYW5zbGF0ZTNkKCcgKyBzdHIgKyAnLCAwcHgpJztcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ciA9ICd0cmFuc2xhdGUoJyArIHN0ciArICcpJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBwcm9wcy5zY2FsZVggIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5zY2FsZVkgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgICAgIHN0ciA9IChzdHIubGVuZ3RoID8gc3RyICsgJyAnIDogJycpICsgJ3NjYWxlKCcgKyBwcm9wcy5zY2FsZVggKyAnLCAnICsgcHJvcHMuc2NhbGVZICsgJyknO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHN0ci5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICBjc3MudHJhbnNmb3JtID0gc3RyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHByb3BzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgICAgIGNzcy5vcGFjaXR5ID0gcHJvcHMub3BhY2l0eTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBwcm9wcy53aWR0aCAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgICAgICAgICAgICAgY3NzLndpZHRoID0gcHJvcHMud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggcHJvcHMuaGVpZ2h0ICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgICAgICBjc3MuaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJGVsLmNzcyggY3NzICk7XHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIC8vIFNpbXBsZSBDU1MgdHJhbnNpdGlvbiBoYW5kbGVyXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgYW5pbWF0ZSA6IGZ1bmN0aW9uICggJGVsLCB0bywgZHVyYXRpb24sIGNhbGxiYWNrLCBsZWF2ZUFuaW1hdGlvbk5hbWUgKSB7XHJcbiAgICAgICAgICAgIGlmICggJC5pc0Z1bmN0aW9uKCBkdXJhdGlvbiApICkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBkdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCAhJC5pc1BsYWluT2JqZWN0KCB0byApICkge1xyXG4gICAgICAgICAgICAgICAgJGVsLnJlbW92ZUF0dHIoICdzdHlsZScgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGVsLm9uKCB0cmFuc2l0aW9uRW5kLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2tpcCBldmVudHMgZnJvbSBjaGlsZCBlbGVtZW50cyBhbmQgei1pbmRleCBjaGFuZ2VcclxuICAgICAgICAgICAgICAgIGlmICggZSAmJiBlLm9yaWdpbmFsRXZlbnQgJiYgKCAhJGVsLmlzKCBlLm9yaWdpbmFsRXZlbnQudGFyZ2V0ICkgfHwgZS5vcmlnaW5hbEV2ZW50LnByb3BlcnR5TmFtZSA9PSAnei1pbmRleCcgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJC5mYW5jeWJveC5zdG9wKCAkZWwgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoICQuaXNQbGFpbk9iamVjdCggdG8gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0by5zY2FsZVggIT09IHVuZGVmaW5lZCAmJiB0by5zY2FsZVkgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVsLmNzcyggJ3RyYW5zaXRpb24tZHVyYXRpb24nLCAnJyApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG8ud2lkdGggID0gTWF0aC5yb3VuZCggJGVsLndpZHRoKCkgICogdG8uc2NhbGVYICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvLmhlaWdodCA9IE1hdGgucm91bmQoICRlbC5oZWlnaHQoKSAqIHRvLnNjYWxlWSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG8uc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG8uc2NhbGVZID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQuZmFuY3lib3guc2V0VHJhbnNsYXRlKCAkZWwsIHRvICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGxlYXZlQW5pbWF0aW9uTmFtZSA9PT0gZmFsc2UgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRlbC5yZW1vdmVBdHRyKCAnc3R5bGUnICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGxlYXZlQW5pbWF0aW9uTmFtZSAhPT0gdHJ1ZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAkZWwucmVtb3ZlQ2xhc3MoIHRvICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCAkLmlzRnVuY3Rpb24oIGNhbGxiYWNrICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soIGUgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCAkLmlzTnVtZXJpYyggZHVyYXRpb24gKSApIHtcclxuICAgICAgICAgICAgICAgICRlbC5jc3MoICd0cmFuc2l0aW9uLWR1cmF0aW9uJywgZHVyYXRpb24gKyAnbXMnICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggJC5pc1BsYWluT2JqZWN0KCB0byApICkge1xyXG4gICAgICAgICAgICAgICAgJC5mYW5jeWJveC5zZXRUcmFuc2xhdGUoICRlbCwgdG8gKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkZWwuYWRkQ2xhc3MoIHRvICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggdG8uc2NhbGVYICYmICRlbC5oYXNDbGFzcyggJ2ZhbmN5Ym94LWltYWdlLXdyYXAnICkgKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwucGFyZW50KCkuYWRkQ2xhc3MoICdmYW5jeWJveC1pcy1zY2FsaW5nJyApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCBgdHJhbnNpdGlvbmVuZGAgY2FsbGJhY2sgZ2V0cyBmaXJlZFxyXG4gICAgICAgICAgICAkZWwuZGF0YShcInRpbWVyXCIsIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwudHJpZ2dlciggJ3RyYW5zaXRpb25lbmQnICk7XHJcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uICsgMTYpKTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc3RvcCA6IGZ1bmN0aW9uKCAkZWwgKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCggJGVsLmRhdGEoXCJ0aW1lclwiKSApO1xyXG5cclxuICAgICAgICAgICAgJGVsLm9mZiggJ3RyYW5zaXRpb25lbmQnICkuY3NzKCAndHJhbnNpdGlvbi1kdXJhdGlvbicsICcnICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoICRlbC5oYXNDbGFzcyggJ2ZhbmN5Ym94LWltYWdlLXdyYXAnICkgKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwucGFyZW50KCkucmVtb3ZlQ2xhc3MoICdmYW5jeWJveC1pcy1zY2FsaW5nJyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIERlZmF1bHQgY2xpY2sgaGFuZGxlciBmb3IgXCJmYW5jeWJveGVkXCIgbGlua3NcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgZnVuY3Rpb24gX3J1biggZSApIHtcclxuICAgICAgICB2YXIgJHRhcmdldFx0PSAkKCBlLmN1cnJlbnRUYXJnZXQgKSxcclxuICAgICAgICAgICAgb3B0c1x0PSBlLmRhdGEgPyBlLmRhdGEub3B0aW9ucyA6IHt9LFxyXG4gICAgICAgICAgICB2YWx1ZVx0PSAkdGFyZ2V0LmF0dHIoICdkYXRhLWZhbmN5Ym94JyApIHx8ICcnLFxyXG4gICAgICAgICAgICBpbmRleFx0PSAwLFxyXG4gICAgICAgICAgICBpdGVtcyAgID0gW107XHJcblxyXG4gICAgICAgIC8vIEF2b2lkIG9wZW5pbmcgbXVsdGlwbGUgdGltZXNcclxuICAgICAgICBpZiAoIGUuaXNEZWZhdWx0UHJldmVudGVkKCkgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IGFsbCByZWxhdGVkIGl0ZW1zIGFuZCBmaW5kIGluZGV4IGZvciBjbGlja2VkIG9uZVxyXG4gICAgICAgIGlmICggdmFsdWUgKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zID0gb3B0cy5zZWxlY3RvciA/ICQoIG9wdHMuc2VsZWN0b3IgKSA6ICggZS5kYXRhID8gZS5kYXRhLml0ZW1zIDogW10gKTtcclxuICAgICAgICAgICAgaXRlbXMgPSBpdGVtcy5sZW5ndGggPyBpdGVtcy5maWx0ZXIoICdbZGF0YS1mYW5jeWJveD1cIicgKyB2YWx1ZSArICdcIl0nICkgOiAkKCAnW2RhdGEtZmFuY3lib3g9XCInICsgdmFsdWUgKyAnXCJdJyApO1xyXG5cclxuICAgICAgICAgICAgaW5kZXggPSBpdGVtcy5pbmRleCggJHRhcmdldCApO1xyXG5cclxuICAgICAgICAgICAgLy8gU29tZXRpbWVzIGN1cnJlbnQgaXRlbSBjYW4gbm90IGJlIGZvdW5kXHJcbiAgICAgICAgICAgIC8vIChmb3IgZXhhbXBsZSwgd2hlbiBzbGlkZXIgY2xvbmVzIGl0ZW1zKVxyXG4gICAgICAgICAgICBpZiAoIGluZGV4IDwgMCApIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtcyA9IFsgJHRhcmdldCBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJC5mYW5jeWJveC5vcGVuKCBpdGVtcywgb3B0cywgaW5kZXggKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgalF1ZXJ5IHBsdWdpblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICQuZm4uZmFuY3lib3ggPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBzZWxlY3RvcjtcclxuXHJcbiAgICAgICAgb3B0aW9ucyAgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHNlbGVjdG9yID0gb3B0aW9ucy5zZWxlY3RvciB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCBzZWxlY3RvciApIHtcclxuXHJcbiAgICAgICAgICAgICQoICdib2R5JyApLm9mZiggJ2NsaWNrLmZiLXN0YXJ0Jywgc2VsZWN0b3IgKS5vbiggJ2NsaWNrLmZiLXN0YXJ0Jywgc2VsZWN0b3IsIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgOiBvcHRpb25zXHJcbiAgICAgICAgICAgIH0sIF9ydW4gKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub2ZmKCAnY2xpY2suZmItc3RhcnQnICkub24oICdjbGljay5mYi1zdGFydCcsIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zICAgOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA6IG9wdGlvbnNcclxuICAgICAgICAgICAgfSwgX3J1bik7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBTZWxmIGluaXRpYWxpemluZyBwbHVnaW5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICRELm9uKCAnY2xpY2suZmItc3RhcnQnLCAnW2RhdGEtZmFuY3lib3hdJywgX3J1biApO1xyXG5cclxufSggd2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSB8fCBqUXVlcnkgKSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL1xyXG4vLyBNZWRpYVxyXG4vLyBBZGRzIGFkZGl0aW9uYWwgbWVkaWEgdHlwZSBzdXBwb3J0XHJcbi8vXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsoZnVuY3Rpb24gKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHQvLyBGb3JtYXRzIG1hdGNoaW5nIHVybCB0byBmaW5hbCBmb3JtXHJcblxyXG5cdHZhciBmb3JtYXQgPSBmdW5jdGlvbiAodXJsLCByZXosIHBhcmFtcykge1xyXG5cdFx0aWYgKCAhdXJsICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0cGFyYW1zID0gcGFyYW1zIHx8ICcnO1xyXG5cclxuXHRcdGlmICggJC50eXBlKHBhcmFtcykgPT09IFwib2JqZWN0XCIgKSB7XHJcblx0XHRcdHBhcmFtcyA9ICQucGFyYW0ocGFyYW1zLCB0cnVlKTtcclxuXHRcdH1cclxuXHJcblx0XHQkLmVhY2gocmV6LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG5cdFx0XHR1cmwgPSB1cmwucmVwbGFjZSgnJCcgKyBrZXksIHZhbHVlIHx8ICcnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmIChwYXJhbXMubGVuZ3RoKSB7XHJcblx0XHRcdHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA+IDAgPyAnJicgOiAnPycpICsgcGFyYW1zO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB1cmw7XHJcblx0fTtcclxuXHJcblx0Ly8gT2JqZWN0IGNvbnRhaW5pbmcgcHJvcGVydGllcyBmb3IgZWFjaCBtZWRpYSB0eXBlXHJcblxyXG5cdHZhciBkZWZhdWx0cyA9IHtcclxuXHRcdHlvdXR1YmUgOiB7XHJcblx0XHRcdG1hdGNoZXIgOiAvKHlvdXR1YmVcXC5jb218eW91dHVcXC5iZXx5b3V0dWJlXFwtbm9jb29raWVcXC5jb20pXFwvKHdhdGNoXFw/KC4qJik/dj18dlxcL3x1XFwvfGVtYmVkXFwvPyk/KHZpZGVvc2VyaWVzXFw/bGlzdD0oLiopfFtcXHctXXsxMX18XFw/bGlzdFR5cGU9KC4qKSZsaXN0PSguKikpKC4qKS9pLFxyXG5cdFx0XHRwYXJhbXMgIDoge1xyXG5cdFx0XHRcdGF1dG9wbGF5IDogMSxcclxuXHRcdFx0XHRhdXRvaGlkZSA6IDEsXHJcblx0XHRcdFx0ZnMgIDogMSxcclxuXHRcdFx0XHRyZWwgOiAwLFxyXG5cdFx0XHRcdGhkICA6IDEsXHJcblx0XHRcdFx0d21vZGUgOiAndHJhbnNwYXJlbnQnLFxyXG5cdFx0XHRcdGVuYWJsZWpzYXBpIDogMSxcclxuXHRcdFx0XHRodG1sNSA6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0cGFyYW1QbGFjZSA6IDgsXHJcblx0XHRcdHR5cGUgIDogJ2lmcmFtZScsXHJcblx0XHRcdHVybCAgIDogJy8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyQ0JyxcclxuXHRcdFx0dGh1bWIgOiAnLy9pbWcueW91dHViZS5jb20vdmkvJDQvaHFkZWZhdWx0LmpwZydcclxuXHRcdH0sXHJcblxyXG5cdFx0dmltZW8gOiB7XHJcblx0XHRcdG1hdGNoZXIgOiAvXi4rdmltZW8uY29tXFwvKC4qXFwvKT8oW1xcZF0rKSguKik/LyxcclxuXHRcdFx0cGFyYW1zICA6IHtcclxuXHRcdFx0XHRhdXRvcGxheSA6IDEsXHJcblx0XHRcdFx0aGQgOiAxLFxyXG5cdFx0XHRcdHNob3dfdGl0bGUgICAgOiAxLFxyXG5cdFx0XHRcdHNob3dfYnlsaW5lICAgOiAxLFxyXG5cdFx0XHRcdHNob3dfcG9ydHJhaXQgOiAwLFxyXG5cdFx0XHRcdGZ1bGxzY3JlZW4gICAgOiAxLFxyXG5cdFx0XHRcdGFwaSA6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0cGFyYW1QbGFjZSA6IDMsXHJcblx0XHRcdHR5cGUgOiAnaWZyYW1lJyxcclxuXHRcdFx0dXJsIDogJy8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8kMidcclxuXHRcdH0sXHJcblxyXG5cdFx0bWV0YWNhZmUgOiB7XHJcblx0XHRcdG1hdGNoZXIgOiAvbWV0YWNhZmUuY29tXFwvd2F0Y2hcXC8oXFxkKylcXC8oLiopPy8sXHJcblx0XHRcdHR5cGUgICAgOiAnaWZyYW1lJyxcclxuXHRcdFx0dXJsICAgICA6ICcvL3d3dy5tZXRhY2FmZS5jb20vZW1iZWQvJDEvP2FwPTEnXHJcblx0XHR9LFxyXG5cclxuXHRcdGRhaWx5bW90aW9uIDoge1xyXG5cdFx0XHRtYXRjaGVyIDogL2RhaWx5bW90aW9uLmNvbVxcL3ZpZGVvXFwvKC4qKVxcLz8oLiopLyxcclxuXHRcdFx0cGFyYW1zIDoge1xyXG5cdFx0XHRcdGFkZGl0aW9uYWxJbmZvcyA6IDAsXHJcblx0XHRcdFx0YXV0b1N0YXJ0IDogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0eXBlIDogJ2lmcmFtZScsXHJcblx0XHRcdHVybCAgOiAnLy93d3cuZGFpbHltb3Rpb24uY29tL2VtYmVkL3ZpZGVvLyQxJ1xyXG5cdFx0fSxcclxuXHJcblx0XHR2aW5lIDoge1xyXG5cdFx0XHRtYXRjaGVyIDogL3ZpbmUuY29cXC92XFwvKFthLXpBLVowLTlcXD9cXD1cXC1dKykvLFxyXG5cdFx0XHR0eXBlICAgIDogJ2lmcmFtZScsXHJcblx0XHRcdHVybCAgICAgOiAnLy92aW5lLmNvL3YvJDEvZW1iZWQvc2ltcGxlJ1xyXG5cdFx0fSxcclxuXHJcblx0XHRpbnN0YWdyYW0gOiB7XHJcblx0XHRcdG1hdGNoZXIgOiAvKGluc3RhZ3JcXC5hbXxpbnN0YWdyYW1cXC5jb20pXFwvcFxcLyhbYS16QS1aMC05X1xcLV0rKVxcLz8vaSxcclxuXHRcdFx0dHlwZSAgICA6ICdpbWFnZScsXHJcblx0XHRcdHVybCAgICAgOiAnLy8kMS9wLyQyL21lZGlhLz9zaXplPWwnXHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIEV4YW1wbGVzOlxyXG5cdFx0Ly8gaHR0cDovL21hcHMuZ29vZ2xlLmNvbS8/bGw9NDguODU3OTk1LDIuMjk0Mjk3JnNwbj0wLjAwNzY2NiwwLjAyMTEzNiZ0PW0mej0xNlxyXG5cdFx0Ly8gaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL0AzNy43ODUyMDA2LC0xMjIuNDE0NjM1NSwxNC42NXpcclxuXHRcdC8vIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9Hb29nbGVwbGV4L0AzNy40MjIwMDQxLC0xMjIuMDgzMzQ5NCwxN3ovZGF0YT0hNG01ITNtNCExczB4MDoweDZjMjk2YzY2NjE5MzY3ZTAhOG0yITNkMzcuNDIxOTk5OCE0ZC0xMjIuMDg0MDU3MlxyXG5cdFx0Z21hcF9wbGFjZSA6IHtcclxuXHRcdFx0bWF0Y2hlciA6IC8obWFwc1xcLik/Z29vZ2xlXFwuKFthLXpdezIsM30oXFwuW2Etel17Mn0pPylcXC8oKChtYXBzXFwvKHBsYWNlXFwvKC4qKVxcLyk/XFxAKC4qKSwoXFxkKy4/XFxkKz8peikpfChcXD9sbD0pKSguKik/L2ksXHJcblx0XHRcdHR5cGUgICAgOiAnaWZyYW1lJyxcclxuXHRcdFx0dXJsICAgICA6IGZ1bmN0aW9uIChyZXopIHtcclxuXHRcdFx0XHRyZXR1cm4gJy8vbWFwcy5nb29nbGUuJyArIHJlelsyXSArICcvP2xsPScgKyAoIHJlels5XSA/IHJlels5XSArICcmej0nICsgTWF0aC5mbG9vciggIHJlelsxMF0gICkgKyAoIHJlelsxMl0gPyByZXpbMTJdLnJlcGxhY2UoL15cXC8vLCBcIiZcIikgOiAnJyApICA6IHJlelsxMl0gKSArICcmb3V0cHV0PScgKyAoIHJlelsxMl0gJiYgcmV6WzEyXS5pbmRleE9mKCdsYXllcj1jJykgPiAwID8gJ3N2ZW1iZWQnIDogJ2VtYmVkJyApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIEV4YW1wbGVzOlxyXG5cdFx0Ly8gaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC9FbXBpcmUrU3RhdGUrQnVpbGRpbmcvXHJcblx0XHQvLyBodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoLz9hcGk9MSZxdWVyeT1jZW50dXJ5bGluaytmaWVsZFxyXG5cdFx0Ly8gaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC8/YXBpPTEmcXVlcnk9NDcuNTk1MTUxOCwtMTIyLjMzMTYzOTNcclxuXHRcdGdtYXBfc2VhcmNoIDoge1xyXG5cdFx0XHRtYXRjaGVyIDogLyhtYXBzXFwuKT9nb29nbGVcXC4oW2Etel17MiwzfShcXC5bYS16XXsyfSk/KVxcLyhtYXBzXFwvc2VhcmNoXFwvKSguKikvaSxcclxuXHRcdFx0dHlwZSAgICA6ICdpZnJhbWUnLFxyXG5cdFx0XHR1cmwgICAgIDogZnVuY3Rpb24gKHJleikge1xyXG5cdFx0XHRcdHJldHVybiAnLy9tYXBzLmdvb2dsZS4nICsgcmV6WzJdICsgJy9tYXBzP3E9JyArIHJlels1XS5yZXBsYWNlKCdxdWVyeT0nLCAncT0nKS5yZXBsYWNlKCdhcGk9MScsICcnKSArICcmb3V0cHV0PWVtYmVkJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdCQoZG9jdW1lbnQpLm9uKCdvYmplY3ROZWVkc1R5cGUuZmInLCBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIGl0ZW0pIHtcclxuXHJcblx0XHR2YXIgdXJsXHQgPSBpdGVtLnNyYyB8fCAnJyxcclxuXHRcdFx0dHlwZSA9IGZhbHNlLFxyXG5cdFx0XHRtZWRpYSxcclxuXHRcdFx0dGh1bWIsXHJcblx0XHRcdHJleixcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0XHR1cmxQYXJhbXMsXHJcblx0XHRcdHBhcmFtT2JqLFxyXG5cdFx0XHRwcm92aWRlcjtcclxuXHJcblx0XHRtZWRpYSA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgZGVmYXVsdHMsIGl0ZW0ub3B0cy5tZWRpYSApO1xyXG5cclxuXHRcdC8vIExvb2sgZm9yIGFueSBtYXRjaGluZyBtZWRpYSB0eXBlXHJcblx0XHQkLmVhY2gobWVkaWEsIGZ1bmN0aW9uICggcHJvdmlkZXJOYW1lLCBwcm92aWRlck9wdHMgKSB7XHJcblx0XHRcdHJleiA9IHVybC5tYXRjaCggcHJvdmlkZXJPcHRzLm1hdGNoZXIgKTtcclxuXHJcblx0XHRcdGlmICggIXJleiApIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHR5cGUgICAgID0gcHJvdmlkZXJPcHRzLnR5cGU7XHJcblx0XHRcdHBhcmFtT2JqID0ge307XHJcblxyXG5cdFx0XHRpZiAoIHByb3ZpZGVyT3B0cy5wYXJhbVBsYWNlICYmIHJlelsgcHJvdmlkZXJPcHRzLnBhcmFtUGxhY2UgXSApIHtcclxuXHRcdFx0XHR1cmxQYXJhbXMgPSByZXpbIHByb3ZpZGVyT3B0cy5wYXJhbVBsYWNlIF07XHJcblxyXG5cdFx0XHRcdGlmICggdXJsUGFyYW1zWyAwIF0gPT0gJz8nICkge1xyXG5cdFx0XHRcdFx0dXJsUGFyYW1zID0gdXJsUGFyYW1zLnN1YnN0cmluZygxKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHVybFBhcmFtcyA9IHVybFBhcmFtcy5zcGxpdCgnJicpO1xyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgbSA9IDA7IG0gPCB1cmxQYXJhbXMubGVuZ3RoOyArK20gKSB7XHJcblx0XHRcdFx0XHR2YXIgcCA9IHVybFBhcmFtc1sgbSBdLnNwbGl0KCc9JywgMik7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBwLmxlbmd0aCA9PSAyICkge1xyXG5cdFx0XHRcdFx0XHRwYXJhbU9ialsgcFswXSBdID0gZGVjb2RlVVJJQ29tcG9uZW50KCBwWzFdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHBhcmFtcyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgcHJvdmlkZXJPcHRzLnBhcmFtcywgaXRlbS5vcHRzWyBwcm92aWRlck5hbWUgXSwgcGFyYW1PYmogKTtcclxuXHJcblx0XHRcdHVybCAgID0gJC50eXBlKCBwcm92aWRlck9wdHMudXJsICkgPT09IFwiZnVuY3Rpb25cIiA/IHByb3ZpZGVyT3B0cy51cmwuY2FsbCggdGhpcywgcmV6LCBwYXJhbXMsIGl0ZW0gKSA6IGZvcm1hdCggcHJvdmlkZXJPcHRzLnVybCwgcmV6LCBwYXJhbXMgKTtcclxuXHRcdFx0dGh1bWIgPSAkLnR5cGUoIHByb3ZpZGVyT3B0cy50aHVtYiApID09PSBcImZ1bmN0aW9uXCIgPyBwcm92aWRlck9wdHMudGh1bWIuY2FsbCggdGhpcywgcmV6LCBwYXJhbXMsIGl0ZW0gKSA6IGZvcm1hdCggcHJvdmlkZXJPcHRzLnRodW1iLCByZXogKTtcclxuXHJcblx0XHRcdGlmICggcHJvdmlkZXJOYW1lID09PSAndmltZW8nICkge1xyXG5cdFx0XHRcdHVybCA9IHVybC5yZXBsYWNlKCcmJTIzJywgJyMnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gSWYgaXQgaXMgZm91bmQsIHRoZW4gY2hhbmdlIGNvbnRlbnQgdHlwZSBhbmQgdXBkYXRlIHRoZSB1cmxcclxuXHJcblx0XHRpZiAoIHR5cGUgKSB7XHJcblx0XHRcdGl0ZW0uc3JjICA9IHVybDtcclxuXHRcdFx0aXRlbS50eXBlID0gdHlwZTtcclxuXHJcblx0XHRcdGlmICggIWl0ZW0ub3B0cy50aHVtYiAmJiAhKCBpdGVtLm9wdHMuJHRodW1iICYmIGl0ZW0ub3B0cy4kdGh1bWIubGVuZ3RoICkgKSB7XHJcblx0XHRcdFx0aXRlbS5vcHRzLnRodW1iID0gdGh1bWI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggdHlwZSA9PT0gJ2lmcmFtZScgKSB7XHJcblx0XHRcdFx0JC5leHRlbmQodHJ1ZSwgaXRlbS5vcHRzLCB7XHJcblx0XHRcdFx0XHRpZnJhbWUgOiB7XHJcblx0XHRcdFx0XHRcdHByZWxvYWQgOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0YXR0ciA6IHtcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxpbmcgOiBcIm5vXCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpdGVtLmNvbnRlbnRQcm92aWRlciA9IHByb3ZpZGVyO1xyXG5cclxuXHRcdFx0XHRpdGVtLm9wdHMuc2xpZGVDbGFzcyArPSAnIGZhbmN5Ym94LXNsaWRlLS0nICsgKCBwcm92aWRlciA9PSAnZ21hcF9wbGFjZScgfHwgcHJvdmlkZXIgPT0gJ2dtYXBfc2VhcmNoJyA/ICdtYXAnIDogJ3ZpZGVvJyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIGlmICggdXJsICkge1xyXG5cdFx0XHRpdGVtLnR5cGUgPSBpdGVtLm9wdHMuZGVmYXVsdFR5cGU7XHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSggd2luZG93LmpRdWVyeSB8fCBqUXVlcnkgKSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL1xyXG4vLyBHdWVzdHVyZXNcclxuLy8gQWRkcyB0b3VjaCBndWVzdHVyZXMsIGhhbmRsZXMgY2xpY2sgYW5kIHRhcCBldmVudHNcclxuLy9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuOyhmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgJCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyIHJlcXVlc3RBRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuXHRcdFx0d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG5cdFx0XHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcblx0XHRcdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcblx0XHRcdC8vIGlmIGFsbCBlbHNlIGZhaWxzLCB1c2Ugc2V0VGltZW91dFxyXG5cdFx0XHRmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuXHRcdFx0XHRyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XHJcblx0XHRcdH07XHJcblx0fSkoKTtcclxuXHJcblx0dmFyIGNhbmNlbEFGcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcblx0XHRcdHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG5cdFx0XHR3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuXHRcdFx0d2luZG93Lm9DYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG5cdFx0XHRmdW5jdGlvbiAoaWQpIHtcclxuXHRcdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KGlkKTtcclxuXHRcdFx0fTtcclxuXHR9KSgpO1xyXG5cclxuXHR2YXIgcG9pbnRlcnMgPSBmdW5jdGlvbiggZSApIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHJcblx0XHRlID0gZS5vcmlnaW5hbEV2ZW50IHx8IGUgfHwgd2luZG93LmU7XHJcblx0XHRlID0gZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggPyBlLnRvdWNoZXMgOiAoIGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPyBlLmNoYW5nZWRUb3VjaGVzIDogWyBlIF0gKTtcclxuXHJcblx0XHRmb3IgKCB2YXIga2V5IGluIGUgKSB7XHJcblxyXG5cdFx0XHRpZiAoIGVbIGtleSBdLnBhZ2VYICkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKCB7IHggOiBlWyBrZXkgXS5wYWdlWCwgeSA6IGVbIGtleSBdLnBhZ2VZIH0gKTtcclxuXHJcblx0XHRcdH0gZWxzZSBpZiAoIGVbIGtleSBdLmNsaWVudFggKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goIHsgeCA6IGVbIGtleSBdLmNsaWVudFgsIHkgOiBlWyBrZXkgXS5jbGllbnRZIH0gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxuXHJcblx0dmFyIGRpc3RhbmNlID0gZnVuY3Rpb24oIHBvaW50MiwgcG9pbnQxLCB3aGF0ICkge1xyXG5cdFx0aWYgKCAhcG9pbnQxIHx8ICFwb2ludDIgKSB7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggd2hhdCA9PT0gJ3gnICkge1xyXG5cdFx0XHRyZXR1cm4gcG9pbnQyLnggLSBwb2ludDEueDtcclxuXHJcblx0XHR9IGVsc2UgaWYgKCB3aGF0ID09PSAneScgKSB7XHJcblx0XHRcdHJldHVybiBwb2ludDIueSAtIHBvaW50MS55O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBNYXRoLnNxcnQoIE1hdGgucG93KCBwb2ludDIueCAtIHBvaW50MS54LCAyICkgKyBNYXRoLnBvdyggcG9pbnQyLnkgLSBwb2ludDEueSwgMiApICk7XHJcblx0fTtcclxuXHJcblx0dmFyIGlzQ2xpY2thYmxlID0gZnVuY3Rpb24oICRlbCApIHtcclxuXHRcdGlmICggJGVsLmlzKCdhLGFyZWEsYnV0dG9uLFtyb2xlPVwiYnV0dG9uXCJdLGlucHV0LGxhYmVsLHNlbGVjdCxzdW1tYXJ5LHRleHRhcmVhJykgfHwgJC5pc0Z1bmN0aW9uKCAkZWwuZ2V0KDApLm9uY2xpY2sgKSB8fCAkZWwuZGF0YSgnc2VsZWN0YWJsZScpICkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBDaGVjayBmb3IgYXR0cmlidXRlcyBsaWtlIGRhdGEtZmFuY3lib3gtbmV4dCBvciBkYXRhLWZhbmN5Ym94LWNsb3NlXHJcblx0XHRmb3IgKCB2YXIgaSA9IDAsIGF0dHMgPSAkZWxbMF0uYXR0cmlidXRlcywgbiA9IGF0dHMubGVuZ3RoOyBpIDwgbjsgaSsrICkge1xyXG5cdFx0XHRpZiAoIGF0dHNbaV0ubm9kZU5hbWUuc3Vic3RyKDAsIDE0KSA9PT0gJ2RhdGEtZmFuY3lib3gtJyApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHQgXHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcclxuXHJcblx0dmFyIGhhc1Njcm9sbGJhcnMgPSBmdW5jdGlvbiggZWwgKSB7XHJcblx0XHR2YXIgb3ZlcmZsb3dZID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoIGVsIClbJ292ZXJmbG93LXknXTtcclxuXHRcdHZhciBvdmVyZmxvd1ggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggZWwgKVsnb3ZlcmZsb3cteCddO1xyXG5cclxuXHRcdHZhciB2ZXJ0aWNhbCAgID0gKG92ZXJmbG93WSA9PT0gJ3Njcm9sbCcgfHwgb3ZlcmZsb3dZID09PSAnYXV0bycpICYmIGVsLnNjcm9sbEhlaWdodCA+IGVsLmNsaWVudEhlaWdodDtcclxuXHRcdHZhciBob3Jpem9udGFsID0gKG92ZXJmbG93WCA9PT0gJ3Njcm9sbCcgfHwgb3ZlcmZsb3dYID09PSAnYXV0bycpICYmIGVsLnNjcm9sbFdpZHRoID4gZWwuY2xpZW50V2lkdGg7XHJcblxyXG5cdFx0cmV0dXJuIHZlcnRpY2FsIHx8IGhvcml6b250YWw7XHJcblx0fTtcclxuXHJcblx0dmFyIGlzU2Nyb2xsYWJsZSA9IGZ1bmN0aW9uICggJGVsICkge1xyXG5cdFx0dmFyIHJleiA9IGZhbHNlO1xyXG5cclxuXHRcdHdoaWxlICggdHJ1ZSApIHtcclxuXHRcdFx0cmV6XHQ9IGhhc1Njcm9sbGJhcnMoICRlbC5nZXQoMCkgKTtcclxuXHJcblx0XHRcdGlmICggcmV6ICkge1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkZWwgPSAkZWwucGFyZW50KCk7XHJcblxyXG5cdFx0XHRpZiAoICEkZWwubGVuZ3RoIHx8ICRlbC5oYXNDbGFzcyggJ2ZhbmN5Ym94LXN0YWdlJyApIHx8ICRlbC5pcyggJ2JvZHknICkgKSB7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcmV6O1xyXG5cdH07XHJcblxyXG5cclxuXHR2YXIgR3Vlc3R1cmVzID0gZnVuY3Rpb24gKCBpbnN0YW5jZSApIHtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRzZWxmLmluc3RhbmNlID0gaW5zdGFuY2U7XHJcblxyXG5cdFx0c2VsZi4kYmcgICAgICAgID0gaW5zdGFuY2UuJHJlZnMuYmc7XHJcblx0XHRzZWxmLiRzdGFnZSAgICAgPSBpbnN0YW5jZS4kcmVmcy5zdGFnZTtcclxuXHRcdHNlbGYuJGNvbnRhaW5lciA9IGluc3RhbmNlLiRyZWZzLmNvbnRhaW5lcjtcclxuXHJcblx0XHRzZWxmLmRlc3Ryb3koKTtcclxuXHJcblx0XHRzZWxmLiRjb250YWluZXIub24oICd0b3VjaHN0YXJ0LmZiLnRvdWNoIG1vdXNlZG93bi5mYi50b3VjaCcsICQucHJveHkoc2VsZiwgJ29udG91Y2hzdGFydCcpICk7XHJcblx0fTtcclxuXHJcblx0R3Vlc3R1cmVzLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLiRjb250YWluZXIub2ZmKCAnLmZiLnRvdWNoJyApO1xyXG5cdH07XHJcblxyXG5cdEd1ZXN0dXJlcy5wcm90b3R5cGUub250b3VjaHN0YXJ0ID0gZnVuY3Rpb24oIGUgKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0dmFyICR0YXJnZXQgID0gJCggZS50YXJnZXQgKTtcclxuXHRcdHZhciBpbnN0YW5jZSA9IHNlbGYuaW5zdGFuY2U7XHJcblx0XHR2YXIgY3VycmVudCAgPSBpbnN0YW5jZS5jdXJyZW50O1xyXG5cdFx0dmFyICRjb250ZW50ID0gY3VycmVudC4kY29udGVudDtcclxuXHJcblx0XHR2YXIgaXNUb3VjaERldmljZSA9ICggZS50eXBlID09ICd0b3VjaHN0YXJ0JyApO1xyXG5cclxuXHRcdC8vIERvIG5vdCByZXNwb25kIHRvIGJvdGggKHRvdWNoIGFuZCBtb3VzZSkgZXZlbnRzXHJcblx0XHRpZiAoIGlzVG91Y2hEZXZpY2UgKSB7XHJcblx0XHRcdHNlbGYuJGNvbnRhaW5lci5vZmYoICdtb3VzZWRvd24uZmIudG91Y2gnICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gSWdub3JlIHJpZ2h0IGNsaWNrXHJcblx0XHRpZiAoIGUub3JpZ2luYWxFdmVudCAmJiBlLm9yaWdpbmFsRXZlbnQuYnV0dG9uID09IDIgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBJZ25vcmUgdGFwaW5nIG9uIGxpbmtzLCBidXR0b25zLCBpbnB1dCBlbGVtZW50c1xyXG5cdFx0aWYgKCAhJHRhcmdldC5sZW5ndGggfHwgaXNDbGlja2FibGUoICR0YXJnZXQgKSB8fCBpc0NsaWNrYWJsZSggJHRhcmdldC5wYXJlbnQoKSApICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gSWdub3JlIGNsaWNrcyBvbiB0aGUgc2Nyb2xsYmFyXHJcblx0XHRpZiAoICEkdGFyZ2V0LmlzKCdpbWcnKSAmJiBlLm9yaWdpbmFsRXZlbnQuY2xpZW50WCA+ICR0YXJnZXRbMF0uY2xpZW50V2lkdGggKyAkdGFyZ2V0Lm9mZnNldCgpLmxlZnQgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBJZ25vcmUgY2xpY2tzIHdoaWxlIHpvb21pbmcgb3IgY2xvc2luZ1xyXG5cdFx0aWYgKCAhY3VycmVudCB8fCBzZWxmLmluc3RhbmNlLmlzQW5pbWF0aW5nIHx8IHNlbGYuaW5zdGFuY2UuaXNDbG9zaW5nICkge1xyXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c2VsZi5yZWFsUG9pbnRzID0gc2VsZi5zdGFydFBvaW50cyA9IHBvaW50ZXJzKCBlICk7XHJcblxyXG5cdFx0aWYgKCAhc2VsZi5zdGFydFBvaW50cyApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0c2VsZi5zdGFydEV2ZW50ID0gZTtcclxuXHJcblx0XHRzZWxmLmNhblRhcCAgID0gdHJ1ZTtcclxuXHRcdHNlbGYuJHRhcmdldCAgPSAkdGFyZ2V0O1xyXG5cdFx0c2VsZi4kY29udGVudCA9ICRjb250ZW50O1xyXG5cdFx0c2VsZi5vcHRzICAgICA9IGN1cnJlbnQub3B0cy50b3VjaDtcclxuXHJcblx0XHRzZWxmLmlzUGFubmluZyAgID0gZmFsc2U7XHJcblx0XHRzZWxmLmlzU3dpcGluZyAgID0gZmFsc2U7XHJcblx0XHRzZWxmLmlzWm9vbWluZyAgID0gZmFsc2U7XHJcblx0XHRzZWxmLmlzU2Nyb2xsaW5nID0gZmFsc2U7XHJcblxyXG5cdFx0c2VsZi5zbGlkZXJTdGFydFBvcyAgPSBzZWxmLnNsaWRlckxhc3RQb3MgfHwgeyB0b3A6IDAsIGxlZnQ6IDAgfTtcclxuXHRcdHNlbGYuY29udGVudFN0YXJ0UG9zID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoIHNlbGYuJGNvbnRlbnQgKTtcclxuXHRcdHNlbGYuY29udGVudExhc3RQb3MgID0gbnVsbDtcclxuXHJcblx0XHRzZWxmLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0c2VsZi5kaXN0YW5jZVggPSBzZWxmLmRpc3RhbmNlWSA9IHNlbGYuZGlzdGFuY2UgPSAwO1xyXG5cclxuXHRcdHNlbGYuY2FudmFzV2lkdGggID0gTWF0aC5yb3VuZCggY3VycmVudC4kc2xpZGVbMF0uY2xpZW50V2lkdGggKTtcclxuXHRcdHNlbGYuY2FudmFzSGVpZ2h0ID0gTWF0aC5yb3VuZCggY3VycmVudC4kc2xpZGVbMF0uY2xpZW50SGVpZ2h0ICk7XHJcblxyXG5cdFx0JChkb2N1bWVudClcclxuXHRcdFx0Lm9mZiggJy5mYi50b3VjaCcgKVxyXG5cdFx0XHQub24oIGlzVG91Y2hEZXZpY2UgPyAndG91Y2hlbmQuZmIudG91Y2ggdG91Y2hjYW5jZWwuZmIudG91Y2gnIDogJ21vdXNldXAuZmIudG91Y2ggbW91c2VsZWF2ZS5mYi50b3VjaCcsICQucHJveHkoc2VsZiwgXCJvbnRvdWNoZW5kXCIpKVxyXG5cdFx0XHQub24oIGlzVG91Y2hEZXZpY2UgPyAndG91Y2htb3ZlLmZiLnRvdWNoJyA6ICdtb3VzZW1vdmUuZmIudG91Y2gnLCAkLnByb3h5KHNlbGYsIFwib250b3VjaG1vdmVcIikpO1xyXG5cclxuXHRcdGlmICggJC5mYW5jeWJveC5pc01vYmlsZSApIHtcclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2VsZi5vbnNjcm9sbCwgdHJ1ZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCAhKHNlbGYub3B0cyB8fCBpbnN0YW5jZS5jYW5QYW4oKSApIHx8ICEoICR0YXJnZXQuaXMoIHNlbGYuJHN0YWdlICkgfHwgc2VsZi4kc3RhZ2UuZmluZCggJHRhcmdldCApLmxlbmd0aCApICkge1xyXG5cclxuXHRcdFx0Ly8gUHJldmVudCBpbWFnZSBnaG9zdGluZyB3aGlsZSBkcmFnZ2luZ1xyXG5cdFx0XHRpZiAoICR0YXJnZXQuaXMoJ2ltZycpICkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggISggJC5mYW5jeWJveC5pc01vYmlsZSAmJiAoIGlzU2Nyb2xsYWJsZSggJHRhcmdldCApIHx8IGlzU2Nyb2xsYWJsZSggJHRhcmdldC5wYXJlbnQoKSApICkgKSApIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggc2VsZi5zdGFydFBvaW50cy5sZW5ndGggPT09IDEgKSB7XHJcblx0XHRcdGlmICggY3VycmVudC50eXBlID09PSAnaW1hZ2UnICYmICggc2VsZi5jb250ZW50U3RhcnRQb3Mud2lkdGggPiBzZWxmLmNhbnZhc1dpZHRoICsgMSB8fCBzZWxmLmNvbnRlbnRTdGFydFBvcy5oZWlnaHQgPiBzZWxmLmNhbnZhc0hlaWdodCArIDEgKSApIHtcclxuXHRcdFx0XHQkLmZhbmN5Ym94LnN0b3AoIHNlbGYuJGNvbnRlbnQgKTtcclxuXHJcblx0XHRcdFx0c2VsZi4kY29udGVudC5jc3MoICd0cmFuc2l0aW9uLWR1cmF0aW9uJywgJycgKTtcclxuXHJcblx0XHRcdFx0c2VsZi5pc1Bhbm5pbmcgPSB0cnVlO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZWxmLmlzU3dpcGluZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNlbGYuJGNvbnRhaW5lci5hZGRDbGFzcyggJ2ZhbmN5Ym94LWNvbnRyb2xzLS1pc0dyYWJiaW5nJyApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggc2VsZi5zdGFydFBvaW50cy5sZW5ndGggPT09IDIgJiYgIWluc3RhbmNlLmlzQW5pbWF0aW5nICYmICFjdXJyZW50Lmhhc0Vycm9yICYmIGN1cnJlbnQudHlwZSA9PT0gJ2ltYWdlJyAmJiAoIGN1cnJlbnQuaXNMb2FkZWQgfHwgY3VycmVudC4kZ2hvc3QgKSApIHtcclxuXHRcdFx0c2VsZi5jYW5UYXAgICAgPSBmYWxzZTtcclxuXHRcdFx0c2VsZi5pc1N3aXBpbmcgPSBmYWxzZTtcclxuXHRcdFx0c2VsZi5pc1Bhbm5pbmcgPSBmYWxzZTtcclxuXHJcblx0XHRcdHNlbGYuaXNab29taW5nID0gdHJ1ZTtcclxuXHJcblx0XHRcdCQuZmFuY3lib3guc3RvcCggc2VsZi4kY29udGVudCApO1xyXG5cclxuXHRcdFx0c2VsZi4kY29udGVudC5jc3MoICd0cmFuc2l0aW9uLWR1cmF0aW9uJywgJycgKTtcclxuXHJcblx0XHRcdHNlbGYuY2VudGVyUG9pbnRTdGFydFggPSAoICggc2VsZi5zdGFydFBvaW50c1swXS54ICsgc2VsZi5zdGFydFBvaW50c1sxXS54ICkgKiAwLjUgKSAtICQod2luZG93KS5zY3JvbGxMZWZ0KCk7XHJcblx0XHRcdHNlbGYuY2VudGVyUG9pbnRTdGFydFkgPSAoICggc2VsZi5zdGFydFBvaW50c1swXS55ICsgc2VsZi5zdGFydFBvaW50c1sxXS55ICkgKiAwLjUgKSAtICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcblx0XHRcdHNlbGYucGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRYID0gKCBzZWxmLmNlbnRlclBvaW50U3RhcnRYIC0gc2VsZi5jb250ZW50U3RhcnRQb3MubGVmdCApIC8gc2VsZi5jb250ZW50U3RhcnRQb3Mud2lkdGg7XHJcblx0XHRcdHNlbGYucGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRZID0gKCBzZWxmLmNlbnRlclBvaW50U3RhcnRZIC0gc2VsZi5jb250ZW50U3RhcnRQb3MudG9wICApIC8gc2VsZi5jb250ZW50U3RhcnRQb3MuaGVpZ2h0O1xyXG5cclxuXHRcdFx0c2VsZi5zdGFydERpc3RhbmNlQmV0d2VlbkZpbmdlcnMgPSBkaXN0YW5jZSggc2VsZi5zdGFydFBvaW50c1swXSwgc2VsZi5zdGFydFBvaW50c1sxXSApO1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHRHdWVzdHVyZXMucHJvdG90eXBlLm9uc2Nyb2xsID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0c2VsZi5pc1Njcm9sbGluZyA9IHRydWU7XHJcblx0fTtcclxuXHJcblx0R3Vlc3R1cmVzLnByb3RvdHlwZS5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzLFxyXG5cdFx0XHQkdGFyZ2V0ID0gJChlLnRhcmdldCk7XHJcblxyXG5cdFx0aWYgKCBzZWxmLmlzU2Nyb2xsaW5nIHx8ICEoICR0YXJnZXQuaXMoIHNlbGYuJHN0YWdlICkgfHwgc2VsZi4kc3RhZ2UuZmluZCggJHRhcmdldCApLmxlbmd0aCApICkge1xyXG5cdFx0XHRzZWxmLmNhblRhcCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNlbGYubmV3UG9pbnRzID0gcG9pbnRlcnMoIGUgKTtcclxuXHJcblx0XHRpZiAoICEoIHNlbGYub3B0cyB8fCBzZWxmLmluc3RhbmNlLmNhblBhbigpICkgfHwgIXNlbGYubmV3UG9pbnRzIHx8ICFzZWxmLm5ld1BvaW50cy5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoICEoc2VsZi5pc1N3aXBpbmcgJiYgc2VsZi5pc1N3aXBpbmcgPT09IHRydWUpICkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2VsZi5kaXN0YW5jZVggPSBkaXN0YW5jZSggc2VsZi5uZXdQb2ludHNbMF0sIHNlbGYuc3RhcnRQb2ludHNbMF0sICd4JyApO1xyXG5cdFx0c2VsZi5kaXN0YW5jZVkgPSBkaXN0YW5jZSggc2VsZi5uZXdQb2ludHNbMF0sIHNlbGYuc3RhcnRQb2ludHNbMF0sICd5JyApO1xyXG5cclxuXHRcdHNlbGYuZGlzdGFuY2UgPSBkaXN0YW5jZSggc2VsZi5uZXdQb2ludHNbMF0sIHNlbGYuc3RhcnRQb2ludHNbMF0gKVxyXG5cclxuXHRcdC8vIFNraXAgZmFsc2Ugb250b3VjaG1vdmUgZXZlbnRzIChDaHJvbWUpXHJcblx0XHRpZiAoIHNlbGYuZGlzdGFuY2UgPiAwICkge1xyXG5cdFx0XHRpZiAoIHNlbGYuaXNTd2lwaW5nICkge1xyXG5cdFx0XHRcdHNlbGYub25Td2lwZShlKTtcclxuXHJcblx0XHRcdH0gZWxzZSBpZiAoIHNlbGYuaXNQYW5uaW5nICkge1xyXG5cdFx0XHRcdHNlbGYub25QYW4oKTtcclxuXHJcblx0XHRcdH0gZWxzZSBpZiAoIHNlbGYuaXNab29taW5nICkge1xyXG5cdFx0XHRcdHNlbGYub25ab29tKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0R3Vlc3R1cmVzLnByb3RvdHlwZS5vblN3aXBlID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRzd2lwaW5nID0gc2VsZi5pc1N3aXBpbmcsXHJcblx0XHRcdGxlZnQgICAgPSBzZWxmLnNsaWRlclN0YXJ0UG9zLmxlZnQgfHwgMCxcclxuXHRcdFx0YW5nbGU7XHJcblxyXG5cdFx0Ly8gSWYgZGlyZWN0aW9uIGlzIG5vdCB5ZXQgZGV0ZXJtaW5lZFxyXG5cdFx0aWYgKCBzd2lwaW5nID09PSB0cnVlICkge1xyXG5cclxuXHRcdFx0Ly8gV2UgbmVlZCBhdCBsZWFzdCAxMHB4IGRpc3RhbmNlIHRvIGNvcnJlY3RseSBjYWxjdWxhdGUgYW4gYW5nbGVcclxuXHRcdFx0aWYgKCBNYXRoLmFicyggc2VsZi5kaXN0YW5jZSApID4gMTAgKSB7XHJcblx0XHRcdFx0c2VsZi5jYW5UYXAgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0aWYgKCBzZWxmLmluc3RhbmNlLmdyb3VwLmxlbmd0aCA8IDIgJiYgc2VsZi5vcHRzLnZlcnRpY2FsICkge1xyXG5cdFx0XHRcdFx0c2VsZi5pc1N3aXBpbmcgPSAneSc7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHNlbGYuaW5zdGFuY2UuaXNEcmFnZ2luZyB8fCBzZWxmLm9wdHMudmVydGljYWwgPT09IGZhbHNlIHx8ICggc2VsZi5vcHRzLnZlcnRpY2FsID09PSAnYXV0bycgJiYgJCggd2luZG93ICkud2lkdGgoKSA+IDgwMCApICkge1xyXG5cdFx0XHRcdFx0c2VsZi5pc1N3aXBpbmcgPSAneCc7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRhbmdsZSA9IE1hdGguYWJzKCBNYXRoLmF0YW4yKCBzZWxmLmRpc3RhbmNlWSwgc2VsZi5kaXN0YW5jZVggKSAqIDE4MCAvIE1hdGguUEkgKTtcclxuXHJcblx0XHRcdFx0XHRzZWxmLmlzU3dpcGluZyA9ICggYW5nbGUgPiA0NSAmJiBhbmdsZSA8IDEzNSApID8gJ3knIDogJ3gnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c2VsZi5jYW5UYXAgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0IGlmICggc2VsZi5pc1N3aXBpbmcgPT09ICd5JyAmJiAkLmZhbmN5Ym94LmlzTW9iaWxlICYmICggaXNTY3JvbGxhYmxlKCBzZWxmLiR0YXJnZXQgKSB8fCBpc1Njcm9sbGFibGUoIHNlbGYuJHRhcmdldC5wYXJlbnQoKSApICkgKSB7XHJcblx0XHRcdFx0XHQgc2VsZi5pc1Njcm9sbGluZyA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0IHJldHVybjtcclxuXHRcdFx0XHQgfVxyXG5cclxuXHRcdFx0XHRzZWxmLmluc3RhbmNlLmlzRHJhZ2dpbmcgPSBzZWxmLmlzU3dpcGluZztcclxuXHJcblx0XHRcdFx0Ly8gUmVzZXQgcG9pbnRzIHRvIGF2b2lkIGp1bXBpbmcsIGJlY2F1c2Ugd2UgZHJvcHBlZCBmaXJzdCBzd2lwZXMgdG8gY2FsY3VsYXRlIHRoZSBhbmdsZVxyXG5cdFx0XHRcdHNlbGYuc3RhcnRQb2ludHMgPSBzZWxmLm5ld1BvaW50cztcclxuXHJcblx0XHRcdFx0JC5lYWNoKHNlbGYuaW5zdGFuY2Uuc2xpZGVzLCBmdW5jdGlvbiggaW5kZXgsIHNsaWRlICkge1xyXG5cdFx0XHRcdFx0JC5mYW5jeWJveC5zdG9wKCBzbGlkZS4kc2xpZGUgKTtcclxuXHJcblx0XHRcdFx0XHRzbGlkZS4kc2xpZGUuY3NzKCAndHJhbnNpdGlvbi1kdXJhdGlvbicsICcnICk7XHJcblxyXG5cdFx0XHRcdFx0c2xpZGUuaW5UcmFuc2l0aW9uID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBzbGlkZS5wb3MgPT09IHNlbGYuaW5zdGFuY2UuY3VycmVudC5wb3MgKSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuc2xpZGVyU3RhcnRQb3MubGVmdCA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKCBzbGlkZS4kc2xpZGUgKS5sZWZ0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvLyBTdG9wIHNsaWRlc2hvd1xyXG5cdFx0XHRcdGlmICggc2VsZi5pbnN0YW5jZS5TbGlkZVNob3cgJiYgc2VsZi5pbnN0YW5jZS5TbGlkZVNob3cuaXNBY3RpdmUgKSB7XHJcblx0XHRcdFx0XHRzZWxmLmluc3RhbmNlLlNsaWRlU2hvdy5zdG9wKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gU3RpY2t5IGVkZ2VzXHJcblx0XHRpZiAoIHN3aXBpbmcgPT0gJ3gnICkge1xyXG5cdFx0XHRpZiAoIHNlbGYuZGlzdGFuY2VYID4gMCAmJiAoIHNlbGYuaW5zdGFuY2UuZ3JvdXAubGVuZ3RoIDwgMiB8fCAoIHNlbGYuaW5zdGFuY2UuY3VycmVudC5pbmRleCA9PT0gMCAmJiAhc2VsZi5pbnN0YW5jZS5jdXJyZW50Lm9wdHMubG9vcCApICkgKSB7XHJcblx0XHRcdFx0bGVmdCA9IGxlZnQgKyBNYXRoLnBvdyggc2VsZi5kaXN0YW5jZVgsIDAuOCApO1xyXG5cclxuXHRcdFx0fSBlbHNlIGlmICggc2VsZi5kaXN0YW5jZVggPCAwICYmICggc2VsZi5pbnN0YW5jZS5ncm91cC5sZW5ndGggPCAyIHx8ICggc2VsZi5pbnN0YW5jZS5jdXJyZW50LmluZGV4ID09PSBzZWxmLmluc3RhbmNlLmdyb3VwLmxlbmd0aCAtIDEgJiYgIXNlbGYuaW5zdGFuY2UuY3VycmVudC5vcHRzLmxvb3AgKSApICkge1xyXG5cdFx0XHRcdGxlZnQgPSBsZWZ0IC0gTWF0aC5wb3coIC1zZWxmLmRpc3RhbmNlWCwgMC44ICk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxlZnQgPSBsZWZ0ICsgc2VsZi5kaXN0YW5jZVg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRzZWxmLnNsaWRlckxhc3RQb3MgPSB7XHJcblx0XHRcdHRvcCAgOiBzd2lwaW5nID09ICd4JyA/IDAgOiBzZWxmLnNsaWRlclN0YXJ0UG9zLnRvcCArIHNlbGYuZGlzdGFuY2VZLFxyXG5cdFx0XHRsZWZ0IDogbGVmdFxyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAoIHNlbGYucmVxdWVzdElkICkge1xyXG5cdFx0XHRjYW5jZWxBRnJhbWUoIHNlbGYucmVxdWVzdElkICk7XHJcblxyXG5cdFx0XHRzZWxmLnJlcXVlc3RJZCA9IG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0c2VsZi5yZXF1ZXN0SWQgPSByZXF1ZXN0QUZyYW1lKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0aWYgKCBzZWxmLnNsaWRlckxhc3RQb3MgKSB7XHJcblx0XHRcdFx0JC5lYWNoKHNlbGYuaW5zdGFuY2Uuc2xpZGVzLCBmdW5jdGlvbiggaW5kZXgsIHNsaWRlICkge1xyXG5cdFx0XHRcdFx0dmFyIHBvcyA9IHNsaWRlLnBvcyAtIHNlbGYuaW5zdGFuY2UuY3VyclBvcztcclxuXHJcblx0XHRcdFx0XHQkLmZhbmN5Ym94LnNldFRyYW5zbGF0ZSggc2xpZGUuJHNsaWRlLCB7XHJcblx0XHRcdFx0XHRcdHRvcCAgOiBzZWxmLnNsaWRlckxhc3RQb3MudG9wLFxyXG5cdFx0XHRcdFx0XHRsZWZ0IDogc2VsZi5zbGlkZXJMYXN0UG9zLmxlZnQgKyAoIHBvcyAqIHNlbGYuY2FudmFzV2lkdGggKSArICggcG9zICogc2xpZGUub3B0cy5ndXR0ZXIgKVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHNlbGYuJGNvbnRhaW5lci5hZGRDbGFzcyggJ2ZhbmN5Ym94LWlzLXNsaWRpbmcnICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcblx0R3Vlc3R1cmVzLnByb3RvdHlwZS5vblBhbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdC8vIFNvbWV0aW1lcywgd2hlbiB0YXBwaW5nIGNhdXNhbGx5LCBpbWFnZSBjYW4gbW92ZSBhIGJpdCBhbmQgdGhhdCBicmVha3MgZG91YmxlIHRhcHBpbmdcclxuXHRcdGlmICggZGlzdGFuY2UoIHNlbGYubmV3UG9pbnRzWzBdLCBzZWxmLnJlYWxQb2ludHNbMF0gKSA8ICgkLmZhbmN5Ym94LmlzTW9iaWxlID8gMTAgOiA1KSApIHtcclxuXHRcdFx0c2VsZi5zdGFydFBvaW50cyA9IHNlbGYubmV3UG9pbnRzO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c2VsZi5jYW5UYXAgPSBmYWxzZTtcclxuXHJcblx0XHRzZWxmLmNvbnRlbnRMYXN0UG9zID0gc2VsZi5saW1pdE1vdmVtZW50KCk7XHJcblxyXG5cdFx0aWYgKCBzZWxmLnJlcXVlc3RJZCApIHtcclxuXHRcdFx0Y2FuY2VsQUZyYW1lKCBzZWxmLnJlcXVlc3RJZCApO1xyXG5cclxuXHRcdFx0c2VsZi5yZXF1ZXN0SWQgPSBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNlbGYucmVxdWVzdElkID0gcmVxdWVzdEFGcmFtZShmdW5jdGlvbigpIHtcclxuXHRcdFx0JC5mYW5jeWJveC5zZXRUcmFuc2xhdGUoIHNlbGYuJGNvbnRlbnQsIHNlbGYuY29udGVudExhc3RQb3MgKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8vIE1ha2UgcGFubmluZyBzdGlja3kgdG8gdGhlIGVkZ2VzXHJcblx0R3Vlc3R1cmVzLnByb3RvdHlwZS5saW1pdE1vdmVtZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0dmFyIGNhbnZhc1dpZHRoICA9IHNlbGYuY2FudmFzV2lkdGg7XHJcblx0XHR2YXIgY2FudmFzSGVpZ2h0ID0gc2VsZi5jYW52YXNIZWlnaHQ7XHJcblxyXG5cdFx0dmFyIGRpc3RhbmNlWCA9IHNlbGYuZGlzdGFuY2VYO1xyXG5cdFx0dmFyIGRpc3RhbmNlWSA9IHNlbGYuZGlzdGFuY2VZO1xyXG5cclxuXHRcdHZhciBjb250ZW50U3RhcnRQb3MgPSBzZWxmLmNvbnRlbnRTdGFydFBvcztcclxuXHJcblx0XHR2YXIgY3VycmVudE9mZnNldFggPSBjb250ZW50U3RhcnRQb3MubGVmdDtcclxuXHRcdHZhciBjdXJyZW50T2Zmc2V0WSA9IGNvbnRlbnRTdGFydFBvcy50b3A7XHJcblxyXG5cdFx0dmFyIGN1cnJlbnRXaWR0aCAgPSBjb250ZW50U3RhcnRQb3Mud2lkdGg7XHJcblx0XHR2YXIgY3VycmVudEhlaWdodCA9IGNvbnRlbnRTdGFydFBvcy5oZWlnaHQ7XHJcblxyXG5cdFx0dmFyIG1pblRyYW5zbGF0ZVgsIG1pblRyYW5zbGF0ZVksXHJcblx0XHRcdG1heFRyYW5zbGF0ZVgsIG1heFRyYW5zbGF0ZVksXHJcblx0XHRcdG5ld09mZnNldFgsIG5ld09mZnNldFk7XHJcblxyXG5cdFx0aWYgKCBjdXJyZW50V2lkdGggPiBjYW52YXNXaWR0aCApIHtcclxuXHRcdFx0bmV3T2Zmc2V0WCA9IGN1cnJlbnRPZmZzZXRYICsgZGlzdGFuY2VYO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5ld09mZnNldFggPSBjdXJyZW50T2Zmc2V0WDtcclxuXHRcdH1cclxuXHJcblx0XHRuZXdPZmZzZXRZID0gY3VycmVudE9mZnNldFkgKyBkaXN0YW5jZVk7XHJcblxyXG5cdFx0Ly8gU2xvdyBkb3duIHByb3BvcnRpb25hbGx5IHRvIHRyYXZlbGVkIGRpc3RhbmNlXHJcblx0XHRtaW5UcmFuc2xhdGVYID0gTWF0aC5tYXgoIDAsIGNhbnZhc1dpZHRoICAqIDAuNSAtIGN1cnJlbnRXaWR0aCAgKiAwLjUgKTtcclxuXHRcdG1pblRyYW5zbGF0ZVkgPSBNYXRoLm1heCggMCwgY2FudmFzSGVpZ2h0ICogMC41IC0gY3VycmVudEhlaWdodCAqIDAuNSApO1xyXG5cclxuXHRcdG1heFRyYW5zbGF0ZVggPSBNYXRoLm1pbiggY2FudmFzV2lkdGggIC0gY3VycmVudFdpZHRoLCAgY2FudmFzV2lkdGggICogMC41IC0gY3VycmVudFdpZHRoICAqIDAuNSApO1xyXG5cdFx0bWF4VHJhbnNsYXRlWSA9IE1hdGgubWluKCBjYW52YXNIZWlnaHQgLSBjdXJyZW50SGVpZ2h0LCBjYW52YXNIZWlnaHQgKiAwLjUgLSBjdXJyZW50SGVpZ2h0ICogMC41ICk7XHJcblxyXG5cdFx0aWYgKCBjdXJyZW50V2lkdGggPiBjYW52YXNXaWR0aCApIHtcclxuXHJcblx0XHRcdC8vICAgLT5cclxuXHRcdFx0aWYgKCBkaXN0YW5jZVggPiAwICYmIG5ld09mZnNldFggPiBtaW5UcmFuc2xhdGVYICkge1xyXG5cdFx0XHRcdG5ld09mZnNldFggPSBtaW5UcmFuc2xhdGVYIC0gMSArIE1hdGgucG93KCAtbWluVHJhbnNsYXRlWCArIGN1cnJlbnRPZmZzZXRYICsgZGlzdGFuY2VYLCAwLjggKSB8fCAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyAgICA8LVxyXG5cdFx0XHRpZiAoIGRpc3RhbmNlWCA8IDAgJiYgbmV3T2Zmc2V0WCA8IG1heFRyYW5zbGF0ZVggKSB7XHJcblx0XHRcdFx0bmV3T2Zmc2V0WCA9IG1heFRyYW5zbGF0ZVggKyAxIC0gTWF0aC5wb3coIG1heFRyYW5zbGF0ZVggLSBjdXJyZW50T2Zmc2V0WCAtIGRpc3RhbmNlWCwgMC44ICkgfHwgMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGN1cnJlbnRIZWlnaHQgPiBjYW52YXNIZWlnaHQgKSB7XHJcblxyXG5cdFx0XHQvLyAgIFxcL1xyXG5cdFx0XHRpZiAoIGRpc3RhbmNlWSA+IDAgJiYgbmV3T2Zmc2V0WSA+IG1pblRyYW5zbGF0ZVkgKSB7XHJcblx0XHRcdFx0bmV3T2Zmc2V0WSA9IG1pblRyYW5zbGF0ZVkgLSAxICsgTWF0aC5wb3coLW1pblRyYW5zbGF0ZVkgKyBjdXJyZW50T2Zmc2V0WSArIGRpc3RhbmNlWSwgMC44ICkgfHwgMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gICAvXFxcclxuXHRcdFx0aWYgKCBkaXN0YW5jZVkgPCAwICYmIG5ld09mZnNldFkgPCBtYXhUcmFuc2xhdGVZICkge1xyXG5cdFx0XHRcdG5ld09mZnNldFkgPSBtYXhUcmFuc2xhdGVZICsgMSAtIE1hdGgucG93ICggbWF4VHJhbnNsYXRlWSAtIGN1cnJlbnRPZmZzZXRZIC0gZGlzdGFuY2VZLCAwLjggKSB8fCAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHRvcCAgICA6IG5ld09mZnNldFksXHJcblx0XHRcdGxlZnQgICA6IG5ld09mZnNldFgsXHJcblx0XHRcdHNjYWxlWCA6IGNvbnRlbnRTdGFydFBvcy5zY2FsZVgsXHJcblx0XHRcdHNjYWxlWSA6IGNvbnRlbnRTdGFydFBvcy5zY2FsZVlcclxuXHRcdH07XHJcblxyXG5cdH07XHJcblxyXG5cdEd1ZXN0dXJlcy5wcm90b3R5cGUubGltaXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCBuZXdPZmZzZXRYLCBuZXdPZmZzZXRZLCBuZXdXaWR0aCwgbmV3SGVpZ2h0ICkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdHZhciBjYW52YXNXaWR0aCAgPSBzZWxmLmNhbnZhc1dpZHRoO1xyXG5cdFx0dmFyIGNhbnZhc0hlaWdodCA9IHNlbGYuY2FudmFzSGVpZ2h0O1xyXG5cclxuXHRcdGlmICggbmV3V2lkdGggPiBjYW52YXNXaWR0aCApIHtcclxuXHRcdFx0bmV3T2Zmc2V0WCA9IG5ld09mZnNldFggPiAwID8gMCA6IG5ld09mZnNldFg7XHJcblx0XHRcdG5ld09mZnNldFggPSBuZXdPZmZzZXRYIDwgY2FudmFzV2lkdGggLSBuZXdXaWR0aCA/IGNhbnZhc1dpZHRoIC0gbmV3V2lkdGggOiBuZXdPZmZzZXRYO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHQvLyBDZW50ZXIgaG9yaXpvbnRhbGx5XHJcblx0XHRcdG5ld09mZnNldFggPSBNYXRoLm1heCggMCwgY2FudmFzV2lkdGggLyAyIC0gbmV3V2lkdGggLyAyICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggbmV3SGVpZ2h0ID4gY2FudmFzSGVpZ2h0ICkge1xyXG5cdFx0XHRuZXdPZmZzZXRZID0gbmV3T2Zmc2V0WSA+IDAgPyAwIDogbmV3T2Zmc2V0WTtcclxuXHRcdFx0bmV3T2Zmc2V0WSA9IG5ld09mZnNldFkgPCBjYW52YXNIZWlnaHQgLSBuZXdIZWlnaHQgPyBjYW52YXNIZWlnaHQgLSBuZXdIZWlnaHQgOiBuZXdPZmZzZXRZO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHQvLyBDZW50ZXIgdmVydGljYWxseVxyXG5cdFx0XHRuZXdPZmZzZXRZID0gTWF0aC5tYXgoIDAsIGNhbnZhc0hlaWdodCAvIDIgLSBuZXdIZWlnaHQgLyAyICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHRvcCAgOiBuZXdPZmZzZXRZLFxyXG5cdFx0XHRsZWZ0IDogbmV3T2Zmc2V0WFxyXG5cdFx0fTtcclxuXHJcblx0fTtcclxuXHJcblx0R3Vlc3R1cmVzLnByb3RvdHlwZS5vblpvb20gPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHQvLyBDYWxjdWxhdGUgY3VycmVudCBkaXN0YW5jZSBiZXR3ZWVuIHBvaW50cyB0byBnZXQgcGluY2ggcmF0aW8gYW5kIG5ldyB3aWR0aCBhbmQgaGVpZ2h0XHJcblxyXG5cdFx0dmFyIGN1cnJlbnRXaWR0aCAgPSBzZWxmLmNvbnRlbnRTdGFydFBvcy53aWR0aDtcclxuXHRcdHZhciBjdXJyZW50SGVpZ2h0ID0gc2VsZi5jb250ZW50U3RhcnRQb3MuaGVpZ2h0O1xyXG5cclxuXHRcdHZhciBjdXJyZW50T2Zmc2V0WCA9IHNlbGYuY29udGVudFN0YXJ0UG9zLmxlZnQ7XHJcblx0XHR2YXIgY3VycmVudE9mZnNldFkgPSBzZWxmLmNvbnRlbnRTdGFydFBvcy50b3A7XHJcblxyXG5cdFx0dmFyIGVuZERpc3RhbmNlQmV0d2VlbkZpbmdlcnMgPSBkaXN0YW5jZSggc2VsZi5uZXdQb2ludHNbMF0sIHNlbGYubmV3UG9pbnRzWzFdICk7XHJcblxyXG5cdFx0dmFyIHBpbmNoUmF0aW8gPSBlbmREaXN0YW5jZUJldHdlZW5GaW5nZXJzIC8gc2VsZi5zdGFydERpc3RhbmNlQmV0d2VlbkZpbmdlcnM7XHJcblxyXG5cdFx0dmFyIG5ld1dpZHRoICA9IE1hdGguZmxvb3IoIGN1cnJlbnRXaWR0aCAgKiBwaW5jaFJhdGlvICk7XHJcblx0XHR2YXIgbmV3SGVpZ2h0ID0gTWF0aC5mbG9vciggY3VycmVudEhlaWdodCAqIHBpbmNoUmF0aW8gKTtcclxuXHJcblx0XHQvLyBUaGlzIGlzIHRoZSB0cmFuc2xhdGlvbiBkdWUgdG8gcGluY2gtem9vbWluZ1xyXG5cdFx0dmFyIHRyYW5zbGF0ZUZyb21ab29taW5nWCA9IChjdXJyZW50V2lkdGggIC0gbmV3V2lkdGgpICAqIHNlbGYucGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRYO1xyXG5cdFx0dmFyIHRyYW5zbGF0ZUZyb21ab29taW5nWSA9IChjdXJyZW50SGVpZ2h0IC0gbmV3SGVpZ2h0KSAqIHNlbGYucGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRZO1xyXG5cclxuXHRcdC8vUG9pbnQgYmV0d2VlbiB0aGUgdHdvIHRvdWNoZXNcclxuXHJcblx0XHR2YXIgY2VudGVyUG9pbnRFbmRYID0gKChzZWxmLm5ld1BvaW50c1swXS54ICsgc2VsZi5uZXdQb2ludHNbMV0ueCkgLyAyKSAtICQod2luZG93KS5zY3JvbGxMZWZ0KCk7XHJcblx0XHR2YXIgY2VudGVyUG9pbnRFbmRZID0gKChzZWxmLm5ld1BvaW50c1swXS55ICsgc2VsZi5uZXdQb2ludHNbMV0ueSkgLyAyKSAtICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcblx0XHQvLyBBbmQgdGhpcyBpcyB0aGUgdHJhbnNsYXRpb24gZHVlIHRvIHRyYW5zbGF0aW9uIG9mIHRoZSBjZW50ZXJwb2ludFxyXG5cdFx0Ly8gYmV0d2VlbiB0aGUgdHdvIGZpbmdlcnNcclxuXHJcblx0XHR2YXIgdHJhbnNsYXRlRnJvbVRyYW5zbGF0aW5nWCA9IGNlbnRlclBvaW50RW5kWCAtIHNlbGYuY2VudGVyUG9pbnRTdGFydFg7XHJcblx0XHR2YXIgdHJhbnNsYXRlRnJvbVRyYW5zbGF0aW5nWSA9IGNlbnRlclBvaW50RW5kWSAtIHNlbGYuY2VudGVyUG9pbnRTdGFydFk7XHJcblxyXG5cdFx0Ly8gVGhlIG5ldyBvZmZzZXQgaXMgdGhlIG9sZC9jdXJyZW50IG9uZSBwbHVzIHRoZSB0b3RhbCB0cmFuc2xhdGlvblxyXG5cclxuXHRcdHZhciBuZXdPZmZzZXRYID0gY3VycmVudE9mZnNldFggKyAoIHRyYW5zbGF0ZUZyb21ab29taW5nWCArIHRyYW5zbGF0ZUZyb21UcmFuc2xhdGluZ1ggKTtcclxuXHRcdHZhciBuZXdPZmZzZXRZID0gY3VycmVudE9mZnNldFkgKyAoIHRyYW5zbGF0ZUZyb21ab29taW5nWSArIHRyYW5zbGF0ZUZyb21UcmFuc2xhdGluZ1kgKTtcclxuXHJcblx0XHR2YXIgbmV3UG9zID0ge1xyXG5cdFx0XHR0b3AgICAgOiBuZXdPZmZzZXRZLFxyXG5cdFx0XHRsZWZ0ICAgOiBuZXdPZmZzZXRYLFxyXG5cdFx0XHRzY2FsZVggOiBzZWxmLmNvbnRlbnRTdGFydFBvcy5zY2FsZVggKiBwaW5jaFJhdGlvLFxyXG5cdFx0XHRzY2FsZVkgOiBzZWxmLmNvbnRlbnRTdGFydFBvcy5zY2FsZVkgKiBwaW5jaFJhdGlvXHJcblx0XHR9O1xyXG5cclxuXHRcdHNlbGYuY2FuVGFwID0gZmFsc2U7XHJcblxyXG5cdFx0c2VsZi5uZXdXaWR0aCAgPSBuZXdXaWR0aDtcclxuXHRcdHNlbGYubmV3SGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG5cclxuXHRcdHNlbGYuY29udGVudExhc3RQb3MgPSBuZXdQb3M7XHJcblxyXG5cdFx0aWYgKCBzZWxmLnJlcXVlc3RJZCApIHtcclxuXHRcdFx0Y2FuY2VsQUZyYW1lKCBzZWxmLnJlcXVlc3RJZCApO1xyXG5cclxuXHRcdFx0c2VsZi5yZXF1ZXN0SWQgPSBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNlbGYucmVxdWVzdElkID0gcmVxdWVzdEFGcmFtZShmdW5jdGlvbigpIHtcclxuXHRcdFx0JC5mYW5jeWJveC5zZXRUcmFuc2xhdGUoIHNlbGYuJGNvbnRlbnQsIHNlbGYuY29udGVudExhc3RQb3MgKTtcclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxuXHRHdWVzdHVyZXMucHJvdG90eXBlLm9udG91Y2hlbmQgPSBmdW5jdGlvbiggZSApIHtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHZhciBkTXMgID0gTWF0aC5tYXgoIChuZXcgRGF0ZSgpLmdldFRpbWUoKSApIC0gc2VsZi5zdGFydFRpbWUsIDEpO1xyXG5cclxuXHRcdHZhciBzd2lwaW5nICAgPSBzZWxmLmlzU3dpcGluZztcclxuXHRcdHZhciBwYW5uaW5nICAgPSBzZWxmLmlzUGFubmluZztcclxuXHRcdHZhciB6b29taW5nICAgPSBzZWxmLmlzWm9vbWluZztcclxuXHRcdHZhciBzY3JvbGxpbmcgPSBzZWxmLmlzU2Nyb2xsaW5nO1xyXG5cclxuXHRcdHNlbGYuZW5kUG9pbnRzID0gcG9pbnRlcnMoIGUgKTtcclxuXHJcblx0XHRzZWxmLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoICdmYW5jeWJveC1jb250cm9scy0taXNHcmFiYmluZycgKTtcclxuXHJcblx0XHQkKGRvY3VtZW50KS5vZmYoICcuZmIudG91Y2gnICk7XHJcblxyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2VsZi5vbnNjcm9sbCwgdHJ1ZSk7XHJcblxyXG5cdFx0aWYgKCBzZWxmLnJlcXVlc3RJZCApIHtcclxuXHRcdFx0Y2FuY2VsQUZyYW1lKCBzZWxmLnJlcXVlc3RJZCApO1xyXG5cclxuXHRcdFx0c2VsZi5yZXF1ZXN0SWQgPSBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNlbGYuaXNTd2lwaW5nICAgPSBmYWxzZTtcclxuXHRcdHNlbGYuaXNQYW5uaW5nICAgPSBmYWxzZTtcclxuXHRcdHNlbGYuaXNab29taW5nICAgPSBmYWxzZTtcclxuXHRcdHNlbGYuaXNTY3JvbGxpbmcgPSBmYWxzZTtcclxuXHJcblx0XHRzZWxmLmluc3RhbmNlLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcblx0XHRpZiAoIHNlbGYuY2FuVGFwICkge1xyXG5cdFx0XHRyZXR1cm4gc2VsZi5vblRhcCggZSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNlbGYuc3BlZWQgPSAzNjY7XHJcblxyXG5cdFx0Ly8gU3BlZWQgaW4gcHgvbXNcclxuXHRcdHNlbGYudmVsb2NpdHlYID0gc2VsZi5kaXN0YW5jZVggLyBkTXMgKiAwLjU7XHJcblx0XHRzZWxmLnZlbG9jaXR5WSA9IHNlbGYuZGlzdGFuY2VZIC8gZE1zICogMC41O1xyXG5cclxuXHRcdHNlbGYuc3BlZWRYID0gTWF0aC5tYXgoIHNlbGYuc3BlZWQgKiAwLjUsIE1hdGgubWluKCBzZWxmLnNwZWVkICogMS41LCAoIDEgLyBNYXRoLmFicyggc2VsZi52ZWxvY2l0eVggKSApICogc2VsZi5zcGVlZCApICk7XHJcblxyXG5cdFx0aWYgKCBwYW5uaW5nICkge1xyXG5cdFx0XHRzZWxmLmVuZFBhbm5pbmcoKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKCB6b29taW5nICkge1xyXG5cdFx0XHRzZWxmLmVuZFpvb21pbmcoKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZWxmLmVuZFN3aXBpbmcoIHN3aXBpbmcsIHNjcm9sbGluZyApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybjtcclxuXHR9O1xyXG5cclxuXHRHdWVzdHVyZXMucHJvdG90eXBlLmVuZFN3aXBpbmcgPSBmdW5jdGlvbiggc3dpcGluZywgc2Nyb2xsaW5nICkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRyZXQgID0gZmFsc2UsXHJcblx0XHRcdGxlbiAgPSBzZWxmLmluc3RhbmNlLmdyb3VwLmxlbmd0aDtcclxuXHJcblx0XHRzZWxmLnNsaWRlckxhc3RQb3MgPSBudWxsO1xyXG5cclxuXHRcdC8vIENsb3NlIGlmIHN3aXBlZCB2ZXJ0aWNhbGx5IC8gbmF2aWdhdGUgaWYgaG9yaXpvbnRhbGx5XHJcblx0XHRpZiAoIHN3aXBpbmcgPT0gJ3knICYmICFzY3JvbGxpbmcgJiYgTWF0aC5hYnMoIHNlbGYuZGlzdGFuY2VZICkgPiA1MCApIHtcclxuXHJcblx0XHRcdC8vIENvbnRpbnVlIHZlcnRpY2FsIG1vdmVtZW50XHJcblx0XHRcdCQuZmFuY3lib3guYW5pbWF0ZSggc2VsZi5pbnN0YW5jZS5jdXJyZW50LiRzbGlkZSwge1xyXG5cdFx0XHRcdHRvcCAgICAgOiBzZWxmLnNsaWRlclN0YXJ0UG9zLnRvcCArIHNlbGYuZGlzdGFuY2VZICsgKCBzZWxmLnZlbG9jaXR5WSAqIDE1MCApLFxyXG5cdFx0XHRcdG9wYWNpdHkgOiAwXHJcblx0XHRcdH0sIDE1MCApO1xyXG5cclxuXHRcdFx0cmV0ID0gc2VsZi5pbnN0YW5jZS5jbG9zZSggdHJ1ZSwgMzAwICk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICggc3dpcGluZyA9PSAneCcgJiYgc2VsZi5kaXN0YW5jZVggPiA1MCAmJiBsZW4gPiAxICkge1xyXG5cdFx0XHRyZXQgPSBzZWxmLmluc3RhbmNlLnByZXZpb3VzKCBzZWxmLnNwZWVkWCApO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoIHN3aXBpbmcgPT0gJ3gnICYmIHNlbGYuZGlzdGFuY2VYIDwgLTUwICYmIGxlbiA+IDEgKSB7XHJcblx0XHRcdHJldCA9IHNlbGYuaW5zdGFuY2UubmV4dCggc2VsZi5zcGVlZFggKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHJldCA9PT0gZmFsc2UgJiYgKCBzd2lwaW5nID09ICd4JyB8fCBzd2lwaW5nID09ICd5JyApICkge1xyXG5cdFx0XHRpZiAoIHNjcm9sbGluZyB8fCBsZW4gPCAyICkge1xyXG5cdFx0XHRcdHNlbGYuaW5zdGFuY2UuY2VudGVyU2xpZGUoIHNlbGYuaW5zdGFuY2UuY3VycmVudCwgMTUwICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2VsZi5pbnN0YW5jZS5qdW1wVG8oIHNlbGYuaW5zdGFuY2UuY3VycmVudC5pbmRleCApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0c2VsZi4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCAnZmFuY3lib3gtaXMtc2xpZGluZycgKTtcclxuXHJcblx0fTtcclxuXHJcblx0Ly8gTGltaXQgcGFubmluZyBmcm9tIGVkZ2VzXHJcblx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cdEd1ZXN0dXJlcy5wcm90b3R5cGUuZW5kUGFubmluZyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHZhciBuZXdPZmZzZXRYLCBuZXdPZmZzZXRZLCBuZXdQb3M7XHJcblxyXG5cdFx0aWYgKCAhc2VsZi5jb250ZW50TGFzdFBvcyApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggc2VsZi5vcHRzLm1vbWVudHVtID09PSBmYWxzZSApIHtcclxuXHRcdFx0bmV3T2Zmc2V0WCA9IHNlbGYuY29udGVudExhc3RQb3MubGVmdDtcclxuXHRcdFx0bmV3T2Zmc2V0WSA9IHNlbGYuY29udGVudExhc3RQb3MudG9wO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHQvLyBDb250aW51ZSBtb3ZlbWVudFxyXG5cdFx0XHRuZXdPZmZzZXRYID0gc2VsZi5jb250ZW50TGFzdFBvcy5sZWZ0ICsgKCBzZWxmLnZlbG9jaXR5WCAqIHNlbGYuc3BlZWQgKTtcclxuXHRcdFx0bmV3T2Zmc2V0WSA9IHNlbGYuY29udGVudExhc3RQb3MudG9wICArICggc2VsZi52ZWxvY2l0eVkgKiBzZWxmLnNwZWVkICk7XHJcblx0XHR9XHJcblxyXG5cdFx0bmV3UG9zID0gc2VsZi5saW1pdFBvc2l0aW9uKCBuZXdPZmZzZXRYLCBuZXdPZmZzZXRZLCBzZWxmLmNvbnRlbnRTdGFydFBvcy53aWR0aCwgc2VsZi5jb250ZW50U3RhcnRQb3MuaGVpZ2h0ICk7XHJcblxyXG5cdFx0IG5ld1Bvcy53aWR0aCAgPSBzZWxmLmNvbnRlbnRTdGFydFBvcy53aWR0aDtcclxuXHRcdCBuZXdQb3MuaGVpZ2h0ID0gc2VsZi5jb250ZW50U3RhcnRQb3MuaGVpZ2h0O1xyXG5cclxuXHRcdCQuZmFuY3lib3guYW5pbWF0ZSggc2VsZi4kY29udGVudCwgbmV3UG9zLCAzMzAgKTtcclxuXHR9O1xyXG5cclxuXHJcblx0R3Vlc3R1cmVzLnByb3RvdHlwZS5lbmRab29taW5nID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0dmFyIGN1cnJlbnQgPSBzZWxmLmluc3RhbmNlLmN1cnJlbnQ7XHJcblxyXG5cdFx0dmFyIG5ld09mZnNldFgsIG5ld09mZnNldFksIG5ld1BvcywgcmVzZXQ7XHJcblxyXG5cdFx0dmFyIG5ld1dpZHRoICA9IHNlbGYubmV3V2lkdGg7XHJcblx0XHR2YXIgbmV3SGVpZ2h0ID0gc2VsZi5uZXdIZWlnaHQ7XHJcblxyXG5cdFx0aWYgKCAhc2VsZi5jb250ZW50TGFzdFBvcyApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5ld09mZnNldFggPSBzZWxmLmNvbnRlbnRMYXN0UG9zLmxlZnQ7XHJcblx0XHRuZXdPZmZzZXRZID0gc2VsZi5jb250ZW50TGFzdFBvcy50b3A7XHJcblxyXG5cdFx0cmVzZXQgPSB7XHJcblx0XHRcdHRvcCAgICA6IG5ld09mZnNldFksXHJcblx0XHRcdGxlZnQgICA6IG5ld09mZnNldFgsXHJcblx0XHRcdHdpZHRoICA6IG5ld1dpZHRoLFxyXG5cdFx0XHRoZWlnaHQgOiBuZXdIZWlnaHQsXHJcblx0XHRcdHNjYWxlWCA6IDEsXHJcblx0XHRcdHNjYWxlWSA6IDFcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gUmVzZXQgc2NhbGV4L3NjYWxlWSB2YWx1ZXM7IHRoaXMgaGVscHMgZm9yIHBlcmZvbWFuY2UgYW5kIGRvZXMgbm90IGJyZWFrIGFuaW1hdGlvblxyXG5cdFx0JC5mYW5jeWJveC5zZXRUcmFuc2xhdGUoIHNlbGYuJGNvbnRlbnQsIHJlc2V0ICk7XHJcblxyXG5cdFx0aWYgKCBuZXdXaWR0aCA8IHNlbGYuY2FudmFzV2lkdGggJiYgbmV3SGVpZ2h0IDwgc2VsZi5jYW52YXNIZWlnaHQgKSB7XHJcblx0XHRcdHNlbGYuaW5zdGFuY2Uuc2NhbGVUb0ZpdCggMTUwICk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICggbmV3V2lkdGggPiBjdXJyZW50LndpZHRoIHx8IG5ld0hlaWdodCA+IGN1cnJlbnQuaGVpZ2h0ICkge1xyXG5cdFx0XHRzZWxmLmluc3RhbmNlLnNjYWxlVG9BY3R1YWwoIHNlbGYuY2VudGVyUG9pbnRTdGFydFgsIHNlbGYuY2VudGVyUG9pbnRTdGFydFksIDE1MCApO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRuZXdQb3MgPSBzZWxmLmxpbWl0UG9zaXRpb24oIG5ld09mZnNldFgsIG5ld09mZnNldFksIG5ld1dpZHRoLCBuZXdIZWlnaHQgKTtcclxuXHJcblx0XHRcdC8vIFN3aXRjaCBmcm9tIHNjYWxlKCkgdG8gd2lkdGgvaGVpZ2h0IG9yIGFuaW1hdGlvbiB3aWxsIG5vdCB3b3JrIGNvcnJlY3RseVxyXG5cdFx0XHQkLmZhbmN5Ym94LnNldFRyYW5zbGF0ZSggc2VsZi5jb250ZW50LCAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZSggc2VsZi4kY29udGVudCApICk7XHJcblxyXG5cdFx0XHQkLmZhbmN5Ym94LmFuaW1hdGUoIHNlbGYuJGNvbnRlbnQsIG5ld1BvcywgMTUwICk7XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdEd1ZXN0dXJlcy5wcm90b3R5cGUub25UYXAgPSBmdW5jdGlvbihlKSB7XHJcblx0XHR2YXIgc2VsZiAgICA9IHRoaXM7XHJcblx0XHR2YXIgJHRhcmdldCA9ICQoIGUudGFyZ2V0ICk7XHJcblxyXG5cdFx0dmFyIGluc3RhbmNlID0gc2VsZi5pbnN0YW5jZTtcclxuXHRcdHZhciBjdXJyZW50ICA9IGluc3RhbmNlLmN1cnJlbnQ7XHJcblxyXG5cdFx0dmFyIGVuZFBvaW50cyA9ICggZSAmJiBwb2ludGVycyggZSApICkgfHwgc2VsZi5zdGFydFBvaW50cztcclxuXHJcblx0XHR2YXIgdGFwWCA9IGVuZFBvaW50c1swXSA/IGVuZFBvaW50c1swXS54IC0gc2VsZi4kc3RhZ2Uub2Zmc2V0KCkubGVmdCA6IDA7XHJcblx0XHR2YXIgdGFwWSA9IGVuZFBvaW50c1swXSA/IGVuZFBvaW50c1swXS55IC0gc2VsZi4kc3RhZ2Uub2Zmc2V0KCkudG9wICA6IDA7XHJcblxyXG5cdFx0dmFyIHdoZXJlO1xyXG5cclxuXHRcdHZhciBwcm9jZXNzID0gZnVuY3Rpb24gKCBwcmVmaXggKSB7XHJcblxyXG5cdFx0XHR2YXIgYWN0aW9uID0gY3VycmVudC5vcHRzWyBwcmVmaXggXTtcclxuXHJcblx0XHRcdGlmICggJC5pc0Z1bmN0aW9uKCBhY3Rpb24gKSApIHtcclxuXHRcdFx0XHRhY3Rpb24gPSBhY3Rpb24uYXBwbHkoIGluc3RhbmNlLCBbIGN1cnJlbnQsIGUgXSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoICFhY3Rpb24pIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXRjaCAoIGFjdGlvbiApIHtcclxuXHJcblx0XHRcdFx0Y2FzZSBcImNsb3NlXCIgOlxyXG5cclxuXHRcdFx0XHRcdGluc3RhbmNlLmNsb3NlKCBzZWxmLnN0YXJ0RXZlbnQgKTtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgXCJ0b2dnbGVDb250cm9sc1wiIDpcclxuXHJcblx0XHRcdFx0XHRpbnN0YW5jZS50b2dnbGVDb250cm9scyggdHJ1ZSApO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSBcIm5leHRcIiA6XHJcblxyXG5cdFx0XHRcdFx0aW5zdGFuY2UubmV4dCgpO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSBcIm5leHRPckNsb3NlXCIgOlxyXG5cclxuXHRcdFx0XHRcdGlmICggaW5zdGFuY2UuZ3JvdXAubGVuZ3RoID4gMSApIHtcclxuXHRcdFx0XHRcdFx0aW5zdGFuY2UubmV4dCgpO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGluc3RhbmNlLmNsb3NlKCBzZWxmLnN0YXJ0RXZlbnQgKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgXCJ6b29tXCIgOlxyXG5cclxuXHRcdFx0XHRcdGlmICggY3VycmVudC50eXBlID09ICdpbWFnZScgJiYgKCBjdXJyZW50LmlzTG9hZGVkIHx8IGN1cnJlbnQuJGdob3N0ICkgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIGluc3RhbmNlLmNhblBhbigpICkge1xyXG5cdFx0XHRcdFx0XHRcdGluc3RhbmNlLnNjYWxlVG9GaXQoKTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGluc3RhbmNlLmlzU2NhbGVkRG93bigpICkge1xyXG5cdFx0XHRcdFx0XHRcdGluc3RhbmNlLnNjYWxlVG9BY3R1YWwoIHRhcFgsIHRhcFkgKTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGluc3RhbmNlLmdyb3VwLmxlbmd0aCA8IDIgKSB7XHJcblx0XHRcdFx0XHRcdFx0aW5zdGFuY2UuY2xvc2UoIHNlbGYuc3RhcnRFdmVudCApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBJZ25vcmUgcmlnaHQgY2xpY2tcclxuXHRcdGlmICggZS5vcmlnaW5hbEV2ZW50ICYmIGUub3JpZ2luYWxFdmVudC5idXR0b24gPT0gMiApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFNraXAgaWYgY2xpY2tlZCBvbiB0aGUgc2Nyb2xsYmFyXHJcblx0XHRpZiAoICEkdGFyZ2V0LmlzKCdpbWcnKSAmJiB0YXBYID4gJHRhcmdldFswXS5jbGllbnRXaWR0aCArICR0YXJnZXQub2Zmc2V0KCkubGVmdCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENoZWNrIHdoZXJlIGlzIGNsaWNrZWRcclxuXHRcdGlmICggJHRhcmdldC5pcyggJy5mYW5jeWJveC1iZywuZmFuY3lib3gtaW5uZXIsLmZhbmN5Ym94LW91dGVyLC5mYW5jeWJveC1jb250YWluZXInICkgKSB7XHJcblx0XHRcdHdoZXJlID0gJ091dHNpZGUnO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoICR0YXJnZXQuaXMoICcuZmFuY3lib3gtc2xpZGUnICkgKSB7XHJcblx0XHRcdHdoZXJlID0gJ1NsaWRlJztcclxuXHJcblx0XHR9IGVsc2UgaWYgKCBpbnN0YW5jZS5jdXJyZW50LiRjb250ZW50ICYmIGluc3RhbmNlLmN1cnJlbnQuJGNvbnRlbnQuZmluZCggJHRhcmdldCApLmFkZEJhY2soKS5maWx0ZXIoICR0YXJnZXQgKS5sZW5ndGggKSB7XHJcblx0XHQgXHR3aGVyZSA9ICdDb250ZW50JztcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ2hlY2sgaWYgdGhpcyBpcyBhIGRvdWJsZSB0YXBcclxuXHRcdGlmICggc2VsZi50YXBwZWQgKSB7XHJcblxyXG5cdFx0XHQvLyBTdG9wIHByZXZpb3VzbHkgY3JlYXRlZCBzaW5nbGUgdGFwXHJcblx0XHRcdGNsZWFyVGltZW91dCggc2VsZi50YXBwZWQgKTtcclxuXHRcdFx0c2VsZi50YXBwZWQgPSBudWxsO1xyXG5cclxuXHRcdFx0Ly8gU2tpcCBpZiBkaXN0YW5jZSBiZXR3ZWVuIHRhcHMgaXMgdG9vIGJpZ1xyXG5cdFx0XHRpZiAoIE1hdGguYWJzKCB0YXBYIC0gc2VsZi50YXBYICkgPiA1MCB8fCBNYXRoLmFicyggdGFwWSAtIHNlbGYudGFwWSApID4gNTAgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIE9LLCBub3cgd2UgYXNzdW1lIHRoYXQgdGhpcyBpcyBhIGRvdWJsZS10YXBcclxuXHRcdFx0cHJvY2VzcyggJ2RibGNsaWNrJyArIHdoZXJlICk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdC8vIFNpbmdsZSB0YXAgd2lsbCBiZSBwcm9jZXNzZWQgaWYgdXNlciBoYXMgbm90IGNsaWNrZWQgc2Vjb25kIHRpbWUgd2l0aGluIDMwMG1zXHJcblx0XHRcdC8vIG9yIHRoZXJlIGlzIG5vIG5lZWQgdG8gd2FpdCBmb3IgZG91YmxlLXRhcFxyXG5cdFx0XHRzZWxmLnRhcFggPSB0YXBYO1xyXG5cdFx0XHRzZWxmLnRhcFkgPSB0YXBZO1xyXG5cclxuXHRcdFx0aWYgKCBjdXJyZW50Lm9wdHNbICdkYmxjbGljaycgKyB3aGVyZSBdICYmIGN1cnJlbnQub3B0c1sgJ2RibGNsaWNrJyArIHdoZXJlIF0gIT09IGN1cnJlbnQub3B0c1sgJ2NsaWNrJyArIHdoZXJlIF0gKSB7XHJcblxyXG5cdFx0XHRcdHNlbGYudGFwcGVkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHNlbGYudGFwcGVkID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRwcm9jZXNzKCAnY2xpY2snICsgd2hlcmUgKTtcclxuXHJcblx0XHRcdFx0fSwgNTAwKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cHJvY2VzcyggJ2NsaWNrJyArIHdoZXJlICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0JChkb2N1bWVudCkub24oJ29uQWN0aXZhdGUuZmInLCBmdW5jdGlvbiAoZSwgaW5zdGFuY2UpIHtcclxuXHRcdGlmICggaW5zdGFuY2UgJiYgIWluc3RhbmNlLkd1ZXN0dXJlcyApIHtcclxuXHRcdFx0aW5zdGFuY2UuR3Vlc3R1cmVzID0gbmV3IEd1ZXN0dXJlcyggaW5zdGFuY2UgKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcbn0oIHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkgfHwgalF1ZXJ5ICkpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy9cclxuLy8gU2xpZGVTaG93XHJcbi8vIEVuYWJsZXMgc2xpZGVzaG93IGZ1bmN0aW9uYWxpdHlcclxuLy9cclxuLy8gRXhhbXBsZSBvZiB1c2FnZTpcclxuLy8gJC5mYW5jeWJveC5nZXRJbnN0YW5jZSgpLlNsaWRlU2hvdy5zdGFydCgpXHJcbi8vXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsoZnVuY3Rpb24gKGRvY3VtZW50LCAkKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHQkLmV4dGVuZCh0cnVlLCAkLmZhbmN5Ym94LmRlZmF1bHRzLCB7XHJcblx0XHRidG5UcGwgOiB7XHJcblx0XHRcdHNsaWRlU2hvdyA6XHJcblx0XHRcdFx0JzxidXR0b24gZGF0YS1mYW5jeWJveC1wbGF5IGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tcGxheVwiIHRpdGxlPVwie3tQTEFZX1NUQVJUfX1cIj4nICtcclxuXHRcdFx0XHRcdCc8c3ZnIHZpZXdCb3g9XCIwIDAgNDAgNDBcIj4nICtcclxuXHRcdFx0XHRcdFx0JzxwYXRoIGQ9XCJNMTMsMTIgTDI3LDIwIEwxMywyNyBaXCIgLz4nICtcclxuXHRcdFx0XHRcdFx0JzxwYXRoIGQ9XCJNMTUsMTAgdjE5IE0yMywxMCB2MTlcIiAvPicgK1xyXG5cdFx0XHRcdFx0Jzwvc3ZnPicgK1xyXG5cdFx0XHRcdCc8L2J1dHRvbj4nXHJcblx0XHR9LFxyXG5cdFx0c2xpZGVTaG93IDoge1xyXG5cdFx0XHRhdXRvU3RhcnQgOiBmYWxzZSxcclxuICAgICAgICAgICAgc3BlZWQgICAgIDogMzAwMFxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHR2YXIgU2xpZGVTaG93ID0gZnVuY3Rpb24oIGluc3RhbmNlICkge1xyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fTtcclxuXHJcblx0JC5leHRlbmQoIFNsaWRlU2hvdy5wcm90b3R5cGUsIHtcclxuXHRcdHRpbWVyICAgIDogbnVsbCxcclxuXHRcdGlzQWN0aXZlIDogZmFsc2UsXHJcblx0XHQkYnV0dG9uICA6IG51bGwsXHJcblxyXG5cdFx0aW5pdCA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHRzZWxmLiRidXR0b24gPSBzZWxmLmluc3RhbmNlLiRyZWZzLnRvb2xiYXIuZmluZCgnW2RhdGEtZmFuY3lib3gtcGxheV0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRzZWxmLnRvZ2dsZSgpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmICggc2VsZi5pbnN0YW5jZS5ncm91cC5sZW5ndGggPCAyIHx8ICFzZWxmLmluc3RhbmNlLmdyb3VwWyBzZWxmLmluc3RhbmNlLmN1cnJJbmRleCBdLm9wdHMuc2xpZGVTaG93ICkge1xyXG5cdFx0XHRcdHNlbGYuJGJ1dHRvbi5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0IDogZnVuY3Rpb24oIGZvcmNlICkge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHQvLyBDaGVjayBpZiByZWFjaGVkIGxhc3QgZWxlbWVudFxyXG5cdFx0XHRpZiAoIHNlbGYuaW5zdGFuY2UgJiYgc2VsZi5pbnN0YW5jZS5jdXJyZW50ICYmIChmb3JjZSA9PT0gdHJ1ZSB8fCBzZWxmLmluc3RhbmNlLmN1cnJlbnQub3B0cy5sb29wIHx8IHNlbGYuaW5zdGFuY2UuY3VyckluZGV4IDwgc2VsZi5pbnN0YW5jZS5ncm91cC5sZW5ndGggLSAxICkpIHtcclxuXHRcdFx0XHRzZWxmLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICggc2VsZi5pc0FjdGl2ZSApIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5pbnN0YW5jZS5qdW1wVG8oIChzZWxmLmluc3RhbmNlLmN1cnJJbmRleCArIDEpICUgc2VsZi5pbnN0YW5jZS5ncm91cC5sZW5ndGggKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSwgc2VsZi5pbnN0YW5jZS5jdXJyZW50Lm9wdHMuc2xpZGVTaG93LnNwZWVkKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2VsZi5zdG9wKCk7XHJcblx0XHRcdFx0c2VsZi5pbnN0YW5jZS5pZGxlU2Vjb25kc0NvdW50ZXIgPSAwO1xyXG5cdFx0XHRcdHNlbGYuaW5zdGFuY2Uuc2hvd0NvbnRyb2xzKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Y2xlYXIgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdFx0Y2xlYXJUaW1lb3V0KCBzZWxmLnRpbWVyICk7XHJcblxyXG5cdFx0XHRzZWxmLnRpbWVyID0gbnVsbDtcclxuXHRcdH0sXHJcblxyXG5cdFx0c3RhcnQgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHR2YXIgY3VycmVudCA9IHNlbGYuaW5zdGFuY2UuY3VycmVudDtcclxuXHJcblx0XHRcdGlmICggY3VycmVudCApIHtcclxuXHRcdFx0XHRzZWxmLmlzQWN0aXZlID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0c2VsZi4kYnV0dG9uXHJcblx0XHRcdFx0XHQuYXR0ciggJ3RpdGxlJywgY3VycmVudC5vcHRzLmkxOG5bIGN1cnJlbnQub3B0cy5sYW5nIF0uUExBWV9TVE9QIClcclxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcyggJ2ZhbmN5Ym94LWJ1dHRvbi0tcGxheScgKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCAnZmFuY3lib3gtYnV0dG9uLS1wYXVzZScgKTtcclxuXHJcblx0XHRcdFx0XHRzZWxmLnNldCggdHJ1ZSApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdHN0b3AgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHR2YXIgY3VycmVudCA9IHNlbGYuaW5zdGFuY2UuY3VycmVudDtcclxuXHJcblx0XHRcdHNlbGYuY2xlYXIoKTtcclxuXHJcblx0XHRcdHNlbGYuJGJ1dHRvblxyXG5cdFx0XHRcdC5hdHRyKCAndGl0bGUnLCBjdXJyZW50Lm9wdHMuaTE4blsgY3VycmVudC5vcHRzLmxhbmcgXS5QTEFZX1NUQVJUIClcclxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoICdmYW5jeWJveC1idXR0b24tLXBhdXNlJyApXHJcblx0XHRcdFx0LmFkZENsYXNzKCAnZmFuY3lib3gtYnV0dG9uLS1wbGF5JyApO1xyXG5cclxuXHRcdFx0c2VsZi5pc0FjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHR0b2dnbGUgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdFx0aWYgKCBzZWxmLmlzQWN0aXZlICkge1xyXG5cdFx0XHRcdHNlbGYuc3RvcCgpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZWxmLnN0YXJ0KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdCQoZG9jdW1lbnQpLm9uKHtcclxuXHRcdCdvbkluaXQuZmInIDogZnVuY3Rpb24oZSwgaW5zdGFuY2UpIHtcclxuXHRcdFx0aWYgKCBpbnN0YW5jZSAmJiAhaW5zdGFuY2UuU2xpZGVTaG93ICkge1xyXG5cdFx0XHRcdGluc3RhbmNlLlNsaWRlU2hvdyA9IG5ldyBTbGlkZVNob3coIGluc3RhbmNlICk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0J2JlZm9yZVNob3cuZmInIDogZnVuY3Rpb24oZSwgaW5zdGFuY2UsIGN1cnJlbnQsIGZpcnN0UnVuKSB7XHJcblx0XHRcdHZhciBTbGlkZVNob3cgPSBpbnN0YW5jZSAmJiBpbnN0YW5jZS5TbGlkZVNob3c7XHJcblxyXG5cdFx0XHRpZiAoIGZpcnN0UnVuICkge1xyXG5cclxuXHRcdFx0XHRpZiAoIFNsaWRlU2hvdyAmJiBjdXJyZW50Lm9wdHMuc2xpZGVTaG93LmF1dG9TdGFydCApIHtcclxuXHRcdFx0XHRcdFNsaWRlU2hvdy5zdGFydCgpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSBpZiAoIFNsaWRlU2hvdyAmJiBTbGlkZVNob3cuaXNBY3RpdmUgKSAge1xyXG5cdFx0XHRcdFNsaWRlU2hvdy5jbGVhcigpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdCdhZnRlclNob3cuZmInIDogZnVuY3Rpb24oZSwgaW5zdGFuY2UsIGN1cnJlbnQpIHtcclxuXHRcdFx0dmFyIFNsaWRlU2hvdyA9IGluc3RhbmNlICYmIGluc3RhbmNlLlNsaWRlU2hvdztcclxuXHJcblx0XHRcdGlmICggU2xpZGVTaG93ICYmIFNsaWRlU2hvdy5pc0FjdGl2ZSApIHtcclxuXHRcdFx0XHRTbGlkZVNob3cuc2V0KCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0J2FmdGVyS2V5ZG93bi5mYicgOiBmdW5jdGlvbihlLCBpbnN0YW5jZSwgY3VycmVudCwga2V5cHJlc3MsIGtleWNvZGUpIHtcclxuXHRcdFx0dmFyIFNsaWRlU2hvdyA9IGluc3RhbmNlICYmIGluc3RhbmNlLlNsaWRlU2hvdztcclxuXHJcblx0XHRcdC8vIFwiUFwiIG9yIFNwYWNlYmFyXHJcblx0XHRcdGlmICggU2xpZGVTaG93ICYmIGN1cnJlbnQub3B0cy5zbGlkZVNob3cgJiYgKCBrZXljb2RlID09PSA4MCB8fCBrZXljb2RlID09PSAzMiApICYmICEkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmlzKCAnYnV0dG9uLGEsaW5wdXQnICkgKSB7XHJcblx0XHRcdFx0a2V5cHJlc3MucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0U2xpZGVTaG93LnRvZ2dsZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdCdiZWZvcmVDbG9zZS5mYiBvbkRlYWN0aXZhdGUuZmInIDogZnVuY3Rpb24oZSwgaW5zdGFuY2UpIHtcclxuXHRcdFx0dmFyIFNsaWRlU2hvdyA9IGluc3RhbmNlICYmIGluc3RhbmNlLlNsaWRlU2hvdztcclxuXHJcblx0XHRcdGlmICggU2xpZGVTaG93ICkge1xyXG5cdFx0XHRcdFNsaWRlU2hvdy5zdG9wKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Ly8gUGFnZSBWaXNpYmlsaXR5IEFQSSB0byBwYXVzZSBzbGlkZXNob3cgd2hlbiB3aW5kb3cgaXMgbm90IGFjdGl2ZVxyXG5cdCQoZG9jdW1lbnQpLm9uKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBpbnN0YW5jZSAgPSAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCk7XHJcblx0XHR2YXIgU2xpZGVTaG93ID0gaW5zdGFuY2UgJiYgaW5zdGFuY2UuU2xpZGVTaG93O1xyXG5cclxuXHRcdGlmICggU2xpZGVTaG93ICYmIFNsaWRlU2hvdy5pc0FjdGl2ZSApIHtcclxuXHRcdFx0aWYgKCBkb2N1bWVudC5oaWRkZW4gKSB7XHJcblx0XHRcdFx0U2xpZGVTaG93LmNsZWFyKCk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFNsaWRlU2hvdy5zZXQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxufSggZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkgfHwgalF1ZXJ5ICkpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy9cclxuLy8gRnVsbFNjcmVlblxyXG4vLyBBZGRzIGZ1bGxzY3JlZW4gZnVuY3Rpb25hbGl0eVxyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG47KGZ1bmN0aW9uIChkb2N1bWVudCwgJCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0Ly8gQ29sbGVjdGlvbiBvZiBtZXRob2RzIHN1cHBvcnRlZCBieSB1c2VyIGJyb3dzZXJcclxuXHR2YXIgZm4gPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdHZhciBmbk1hcCA9IFtcclxuXHRcdFx0W1xyXG5cdFx0XHRcdCdyZXF1ZXN0RnVsbHNjcmVlbicsXHJcblx0XHRcdFx0J2V4aXRGdWxsc2NyZWVuJyxcclxuXHRcdFx0XHQnZnVsbHNjcmVlbkVsZW1lbnQnLFxyXG5cdFx0XHRcdCdmdWxsc2NyZWVuRW5hYmxlZCcsXHJcblx0XHRcdFx0J2Z1bGxzY3JlZW5jaGFuZ2UnLFxyXG5cdFx0XHRcdCdmdWxsc2NyZWVuZXJyb3InXHJcblx0XHRcdF0sXHJcblx0XHRcdC8vIG5ldyBXZWJLaXRcclxuXHRcdFx0W1xyXG5cdFx0XHRcdCd3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbicsXHJcblx0XHRcdFx0J3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcclxuXHRcdFx0XHQnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxyXG5cdFx0XHRcdCd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXHJcblx0XHRcdFx0J3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxyXG5cdFx0XHRcdCd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXHJcblxyXG5cdFx0XHRdLFxyXG5cdFx0XHQvLyBvbGQgV2ViS2l0IChTYWZhcmkgNS4xKVxyXG5cdFx0XHRbXHJcblx0XHRcdFx0J3dlYmtpdFJlcXVlc3RGdWxsU2NyZWVuJyxcclxuXHRcdFx0XHQnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXHJcblx0XHRcdFx0J3dlYmtpdEN1cnJlbnRGdWxsU2NyZWVuRWxlbWVudCcsXHJcblx0XHRcdFx0J3dlYmtpdENhbmNlbEZ1bGxTY3JlZW4nLFxyXG5cdFx0XHRcdCd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcclxuXHRcdFx0XHQnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xyXG5cclxuXHRcdFx0XSxcclxuXHRcdFx0W1xyXG5cdFx0XHRcdCdtb3pSZXF1ZXN0RnVsbFNjcmVlbicsXHJcblx0XHRcdFx0J21vekNhbmNlbEZ1bGxTY3JlZW4nLFxyXG5cdFx0XHRcdCdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXHJcblx0XHRcdFx0J21vekZ1bGxTY3JlZW5FbmFibGVkJyxcclxuXHRcdFx0XHQnbW96ZnVsbHNjcmVlbmNoYW5nZScsXHJcblx0XHRcdFx0J21vemZ1bGxzY3JlZW5lcnJvcidcclxuXHRcdFx0XSxcclxuXHRcdFx0W1xyXG5cdFx0XHRcdCdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcclxuXHRcdFx0XHQnbXNFeGl0RnVsbHNjcmVlbicsXHJcblx0XHRcdFx0J21zRnVsbHNjcmVlbkVsZW1lbnQnLFxyXG5cdFx0XHRcdCdtc0Z1bGxzY3JlZW5FbmFibGVkJyxcclxuXHRcdFx0XHQnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcclxuXHRcdFx0XHQnTVNGdWxsc2NyZWVuRXJyb3InXHJcblx0XHRcdF1cclxuXHRcdF07XHJcblxyXG5cdFx0dmFyIHZhbDtcclxuXHRcdHZhciByZXQgPSB7fTtcclxuXHRcdHZhciBpLCBqO1xyXG5cclxuXHRcdGZvciAoIGkgPSAwOyBpIDwgZm5NYXAubGVuZ3RoOyBpKysgKSB7XHJcblx0XHRcdHZhbCA9IGZuTWFwWyBpIF07XHJcblxyXG5cdFx0XHRpZiAoIHZhbCAmJiB2YWxbIDEgXSBpbiBkb2N1bWVudCApIHtcclxuXHRcdFx0XHRmb3IgKCBqID0gMDsgaiA8IHZhbC5sZW5ndGg7IGorKyApIHtcclxuXHRcdFx0XHRcdHJldFsgZm5NYXBbIDAgXVsgaiBdIF0gPSB2YWxbIGogXTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiByZXQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSkoKTtcclxuXHJcblx0Ly8gSWYgYnJvd3NlciBkb2VzIG5vdCBoYXZlIEZ1bGwgU2NyZWVuIEFQSSwgdGhlbiBzaW1wbHkgdW5zZXQgZGVmYXVsdCBidXR0b24gdGVtcGxhdGUgYW5kIHN0b3BcclxuXHRpZiAoICFmbiApIHtcclxuXHJcblx0XHRpZiAoICQgJiYgJC5mYW5jeWJveCApIHtcclxuXHRcdFx0JC5mYW5jeWJveC5kZWZhdWx0cy5idG5UcGwuZnVsbFNjcmVlbiA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHZhciBGdWxsU2NyZWVuID0ge1xyXG5cclxuXHRcdHJlcXVlc3QgOiBmdW5jdGlvbiAoIGVsZW0gKSB7XHJcblxyXG5cdFx0XHRlbGVtID0gZWxlbSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG5cdFx0XHRlbGVtWyBmbi5yZXF1ZXN0RnVsbHNjcmVlbiBdKCBlbGVtLkFMTE9XX0tFWUJPQVJEX0lOUFVUICk7XHJcblxyXG5cdFx0fSxcclxuXHRcdGV4aXQgOiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRkb2N1bWVudFsgZm4uZXhpdEZ1bGxzY3JlZW4gXSgpO1xyXG5cclxuXHRcdH0sXHJcblx0XHR0b2dnbGUgOiBmdW5jdGlvbiAoIGVsZW0gKSB7XHJcblxyXG5cdFx0XHRlbGVtID0gZWxlbSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMuaXNGdWxsc2NyZWVuKCkgKSB7XHJcblx0XHRcdFx0dGhpcy5leGl0KCk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMucmVxdWVzdCggZWxlbSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHRcdGlzRnVsbHNjcmVlbiA6IGZ1bmN0aW9uKCkgIHtcclxuXHJcblx0XHRcdHJldHVybiBCb29sZWFuKCBkb2N1bWVudFsgZm4uZnVsbHNjcmVlbkVsZW1lbnQgXSApO1xyXG5cclxuXHRcdH0sXHJcblx0XHRlbmFibGVkIDogZnVuY3Rpb24oKSAge1xyXG5cclxuXHRcdFx0cmV0dXJuIEJvb2xlYW4oIGRvY3VtZW50WyBmbi5mdWxsc2NyZWVuRW5hYmxlZCBdICk7XHJcblxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdCQuZXh0ZW5kKHRydWUsICQuZmFuY3lib3guZGVmYXVsdHMsIHtcclxuXHRcdGJ0blRwbCA6IHtcclxuXHRcdFx0ZnVsbFNjcmVlbiA6XHJcblx0XHRcdFx0JzxidXR0b24gZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tZnVsbHNjcmVlblwiIHRpdGxlPVwie3tGVUxMX1NDUkVFTn19XCI+JyArXHJcblx0XHRcdFx0XHQnPHN2ZyB2aWV3Qm94PVwiMCAwIDQwIDQwXCI+JyArXHJcblx0XHRcdFx0XHRcdCc8cGF0aCBkPVwiTTksMTIgaDIyIHYxNiBoLTIyIHYtMTYgdjE2IGgyMiB2LTE2IFpcIiAvPicgK1xyXG5cdFx0XHRcdFx0Jzwvc3ZnPicgK1xyXG5cdFx0XHRcdCc8L2J1dHRvbj4nXHJcblx0XHR9LFxyXG5cdFx0ZnVsbFNjcmVlbiA6IHtcclxuXHRcdFx0YXV0b1N0YXJ0IDogZmFsc2VcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0JChkb2N1bWVudCkub24oe1xyXG5cdFx0J29uSW5pdC5mYicgOiBmdW5jdGlvbihlLCBpbnN0YW5jZSkge1xyXG5cdFx0XHR2YXIgJGNvbnRhaW5lcjtcclxuXHJcblx0XHRcdGlmICggaW5zdGFuY2UgJiYgaW5zdGFuY2UuZ3JvdXBbIGluc3RhbmNlLmN1cnJJbmRleCBdLm9wdHMuZnVsbFNjcmVlbiApIHtcclxuXHRcdFx0XHQkY29udGFpbmVyID0gaW5zdGFuY2UuJHJlZnMuY29udGFpbmVyO1xyXG5cclxuXHRcdFx0XHQkY29udGFpbmVyLm9uKCdjbGljay5mYi1mdWxsc2NyZWVuJywgJ1tkYXRhLWZhbmN5Ym94LWZ1bGxzY3JlZW5dJywgZnVuY3Rpb24oZSkge1xyXG5cclxuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdFx0RnVsbFNjcmVlbi50b2dnbGUoICRjb250YWluZXJbIDAgXSApO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aWYgKCBpbnN0YW5jZS5vcHRzLmZ1bGxTY3JlZW4gJiYgaW5zdGFuY2Uub3B0cy5mdWxsU2NyZWVuLmF1dG9TdGFydCA9PT0gdHJ1ZSApIHtcclxuXHRcdFx0XHRcdEZ1bGxTY3JlZW4ucmVxdWVzdCggJGNvbnRhaW5lclsgMCBdICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBFeHBvc2UgQVBJXHJcblx0XHRcdFx0aW5zdGFuY2UuRnVsbFNjcmVlbiA9IEZ1bGxTY3JlZW47XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYgKCBpbnN0YW5jZSApIHtcclxuXHRcdFx0XHRpbnN0YW5jZS4kcmVmcy50b29sYmFyLmZpbmQoJ1tkYXRhLWZhbmN5Ym94LWZ1bGxzY3JlZW5dJykuaGlkZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHQnYWZ0ZXJLZXlkb3duLmZiJyA6IGZ1bmN0aW9uKGUsIGluc3RhbmNlLCBjdXJyZW50LCBrZXlwcmVzcywga2V5Y29kZSkge1xyXG5cclxuXHRcdFx0Ly8gXCJQXCIgb3IgU3BhY2ViYXJcclxuXHRcdFx0aWYgKCBpbnN0YW5jZSAmJiBpbnN0YW5jZS5GdWxsU2NyZWVuICYmIGtleWNvZGUgPT09IDcwICkge1xyXG5cdFx0XHRcdGtleXByZXNzLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGluc3RhbmNlLkZ1bGxTY3JlZW4udG9nZ2xlKCBpbnN0YW5jZS4kcmVmcy5jb250YWluZXJbIDAgXSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHQnYmVmb3JlQ2xvc2UuZmInIDogZnVuY3Rpb24oIGluc3RhbmNlICkge1xyXG5cdFx0XHRpZiAoIGluc3RhbmNlICYmIGluc3RhbmNlLkZ1bGxTY3JlZW4gKSB7XHJcblx0XHRcdFx0RnVsbFNjcmVlbi5leGl0KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0JChkb2N1bWVudCkub24oZm4uZnVsbHNjcmVlbmNoYW5nZSwgZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgaXNGdWxsc2NyZWVuID0gRnVsbFNjcmVlbi5pc0Z1bGxzY3JlZW4oKSxcclxuXHRcdFx0aW5zdGFuY2UgPSAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCk7XHJcblxyXG5cdFx0aWYgKCBpbnN0YW5jZSApIHtcclxuXHJcblx0XHRcdC8vIElmIGltYWdlIGlzIHpvb21pbmcsIHRoZW4gZm9yY2UgdG8gc3RvcCBhbmQgcmVwb3NpdGlvbiBwcm9wZXJseVxyXG5cdFx0XHRpZiAoIGluc3RhbmNlLmN1cnJlbnQgJiYgaW5zdGFuY2UuY3VycmVudC50eXBlID09PSAnaW1hZ2UnICYmIGluc3RhbmNlLmlzQW5pbWF0aW5nICkge1xyXG5cdFx0XHRcdGluc3RhbmNlLmN1cnJlbnQuJGNvbnRlbnQuY3NzKCAndHJhbnNpdGlvbicsICdub25lJyApO1xyXG5cclxuXHRcdFx0XHRpbnN0YW5jZS5pc0FuaW1hdGluZyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRpbnN0YW5jZS51cGRhdGUoIHRydWUsIHRydWUsIDAgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aW5zdGFuY2UudHJpZ2dlciggJ29uRnVsbHNjcmVlbkNoYW5nZScsIGlzRnVsbHNjcmVlbiApO1xyXG5cclxuXHRcdFx0aW5zdGFuY2UuJHJlZnMuY29udGFpbmVyLnRvZ2dsZUNsYXNzKCAnZmFuY3lib3gtaXMtZnVsbHNjcmVlbicsIGlzRnVsbHNjcmVlbiApO1xyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0oIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5IHx8IGpRdWVyeSApKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vXHJcbi8vIFRodW1ic1xyXG4vLyBEaXNwbGF5cyB0aHVtYm5haWxzIGluIGEgZ3JpZFxyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG47KGZ1bmN0aW9uIChkb2N1bWVudCwgJCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0Ly8gTWFrZSBzdXJlIHRoZXJlIGFyZSBkZWZhdWx0IHZhbHVlc1xyXG5cdCQuZmFuY3lib3guZGVmYXVsdHMgPSAkLmV4dGVuZCh0cnVlLCB7XHJcblx0XHRidG5UcGwgOiB7XHJcblx0XHRcdHRodW1icyA6XHJcblx0XHRcdCc8YnV0dG9uIGRhdGEtZmFuY3lib3gtdGh1bWJzIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tdGh1bWJzXCIgdGl0bGU9XCJ7e1RIVU1CU319XCI+JyArXHJcblx0XHRcdFx0Jzxzdmcgdmlld0JveD1cIjAgMCAxMjAgMTIwXCI+JyArXHJcblx0XHRcdFx0XHQnPHBhdGggZD1cIk0zMCwzMCBoMTQgdjE0IGgtMTQgWiBNNTAsMzAgaDE0IHYxNCBoLTE0IFogTTcwLDMwIGgxNCB2MTQgaC0xNCBaIE0zMCw1MCBoMTQgdjE0IGgtMTQgWiBNNTAsNTAgaDE0IHYxNCBoLTE0IFogTTcwLDUwIGgxNCB2MTQgaC0xNCBaIE0zMCw3MCBoMTQgdjE0IGgtMTQgWiBNNTAsNzAgaDE0IHYxNCBoLTE0IFogTTcwLDcwIGgxNCB2MTQgaC0xNCBaXCIgLz4nICtcclxuXHRcdFx0XHQnPC9zdmc+JyArXHJcblx0XHRcdCc8L2J1dHRvbj4nXHJcblx0XHR9LFxyXG5cdFx0dGh1bWJzIDoge1xyXG5cdFx0XHRhdXRvU3RhcnQgICA6IGZhbHNlLCAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgdGh1bWJuYWlscyBvbiBvcGVuaW5nXHJcblx0XHRcdGhpZGVPbkNsb3NlIDogdHJ1ZSwgICAgICAgICAgICAgICAgICAgLy8gSGlkZSB0aHVtYm5haWwgZ3JpZCB3aGVuIGNsb3NpbmcgYW5pbWF0aW9uIHN0YXJ0c1xyXG5cdFx0XHRwYXJlbnRFbCAgICA6ICcuZmFuY3lib3gtY29udGFpbmVyJywgIC8vIENvbnRhaW5lciBpcyBpbmplY3RlZCBpbnRvIHRoaXMgZWxlbWVudFxyXG5cdFx0XHRheGlzICAgICAgICA6ICd5JyAgICAgICAgICAgICAgICAgICAgIC8vIFZlcnRpY2FsICh5KSBvciBob3Jpem9udGFsICh4KSBzY3JvbGxpbmdcclxuXHRcdH1cclxuXHR9LCAkLmZhbmN5Ym94LmRlZmF1bHRzKTtcclxuXHJcblx0dmFyIEZhbmN5VGh1bWJzID0gZnVuY3Rpb24oIGluc3RhbmNlICkge1xyXG5cdFx0dGhpcy5pbml0KCBpbnN0YW5jZSApO1xyXG5cdH07XHJcblxyXG5cdCQuZXh0ZW5kKCBGYW5jeVRodW1icy5wcm90b3R5cGUsIHtcclxuXHJcblx0XHQkYnV0dG9uXHRcdDogbnVsbCxcclxuXHRcdCRncmlkXHRcdDogbnVsbCxcclxuXHRcdCRsaXN0XHRcdDogbnVsbCxcclxuXHRcdGlzVmlzaWJsZVx0OiBmYWxzZSxcclxuXHRcdGlzQWN0aXZlXHQ6IGZhbHNlLFxyXG5cclxuXHRcdGluaXQgOiBmdW5jdGlvbiggaW5zdGFuY2UgKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRcdHNlbGYuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuXHJcblx0XHRcdGluc3RhbmNlLlRodW1icyA9IHNlbGY7XHJcblxyXG5cdFx0XHQvLyBFbmFibGUgdGh1bWJzIGlmIGF0IGxlYXN0IHR3byBncm91cCBpdGVtcyBoYXZlIHRodW1ibmFpbHNcclxuXHRcdFx0dmFyIGZpcnN0ICA9IGluc3RhbmNlLmdyb3VwWzBdLFxyXG5cdFx0XHRcdHNlY29uZCA9IGluc3RhbmNlLmdyb3VwWzFdO1xyXG5cclxuXHRcdFx0c2VsZi5vcHRzID0gaW5zdGFuY2UuZ3JvdXBbIGluc3RhbmNlLmN1cnJJbmRleCBdLm9wdHMudGh1bWJzO1xyXG5cclxuXHRcdFx0c2VsZi4kYnV0dG9uID0gaW5zdGFuY2UuJHJlZnMudG9vbGJhci5maW5kKCAnW2RhdGEtZmFuY3lib3gtdGh1bWJzXScgKTtcclxuXHJcblx0XHRcdGlmICggc2VsZi5vcHRzICYmIGZpcnN0ICYmIHNlY29uZCAmJiAoXHJcblx0XHQgICAgXHRcdCggZmlyc3QudHlwZSA9PSAnaW1hZ2UnICB8fCBmaXJzdC5vcHRzLnRodW1iICB8fCBmaXJzdC5vcHRzLiR0aHVtYiApICYmXHJcblx0XHQgICAgXHRcdCggc2Vjb25kLnR5cGUgPT0gJ2ltYWdlJyB8fCBzZWNvbmQub3B0cy50aHVtYiB8fCBzZWNvbmQub3B0cy4kdGh1bWIgKVxyXG5cdFx0XHQpKSB7XHJcblxyXG5cdFx0XHRcdHNlbGYuJGJ1dHRvbi5zaG93KCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRzZWxmLnRvZ2dsZSgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRzZWxmLmlzQWN0aXZlID0gdHJ1ZTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2VsZi4kYnV0dG9uLmhpZGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRjcmVhdGUgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdGluc3RhbmNlID0gc2VsZi5pbnN0YW5jZSxcclxuXHRcdFx0XHRwYXJlbnRFbCA9IHNlbGYub3B0cy5wYXJlbnRFbCxcclxuXHRcdFx0XHRsaXN0LFxyXG5cdFx0XHRcdHNyYztcclxuXHJcblx0XHRcdHNlbGYuJGdyaWQgPSAkKCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtdGh1bWJzIGZhbmN5Ym94LXRodW1icy0nICsgc2VsZi5vcHRzLmF4aXMgKyAnXCI+PC9kaXY+JykuYXBwZW5kVG8oIGluc3RhbmNlLiRyZWZzLmNvbnRhaW5lci5maW5kKCBwYXJlbnRFbCApLmFkZEJhY2soKS5maWx0ZXIoIHBhcmVudEVsICkgKTtcclxuXHJcblx0XHRcdC8vIEJ1aWxkIGxpc3QgSFRNTFxyXG5cdFx0XHRsaXN0ID0gJzx1bD4nO1xyXG5cclxuXHRcdFx0JC5lYWNoKGluc3RhbmNlLmdyb3VwLCBmdW5jdGlvbiggaSwgaXRlbSApIHtcclxuXHRcdFx0XHRzcmMgPSBpdGVtLm9wdHMudGh1bWIgfHwgKCBpdGVtLm9wdHMuJHRodW1iID8gaXRlbS5vcHRzLiR0aHVtYi5hdHRyKCAnc3JjJyApIDogbnVsbCApO1xyXG5cclxuXHRcdFx0XHRpZiAoICFzcmMgJiYgaXRlbS50eXBlID09PSAnaW1hZ2UnICkge1xyXG5cdFx0XHRcdFx0c3JjID0gaXRlbS5zcmM7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIHNyYyAmJiBzcmMubGVuZ3RoICkge1xyXG5cdFx0XHRcdFx0bGlzdCArPSAnPGxpIGRhdGEtaW5kZXg9XCInICsgaSArICdcIiAgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJmYW5jeWJveC10aHVtYnMtbG9hZGluZ1wiPjxpbWcgZGF0YS1zcmM9XCInICsgc3JjICsgJ1wiIC8+PC9saT4nO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRsaXN0ICs9ICc8L3VsPic7XHJcblxyXG5cdFx0XHRzZWxmLiRsaXN0ID0gJCggbGlzdCApLmFwcGVuZFRvKCBzZWxmLiRncmlkICkub24oJ2NsaWNrJywgJ2xpJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aW5zdGFuY2UuanVtcFRvKCAkKHRoaXMpLmRhdGEoJ2luZGV4JykgKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzZWxmLiRsaXN0LmZpbmQoICdpbWcnICkuaGlkZSgpLm9uZSgnbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciAkcGFyZW50XHRcdD0gJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyggJ2ZhbmN5Ym94LXRodW1icy1sb2FkaW5nJyApLFxyXG5cdFx0XHRcdFx0dGh1bWJXaWR0aFx0PSAkcGFyZW50Lm91dGVyV2lkdGgoKSxcclxuXHRcdFx0XHRcdHRodW1iSGVpZ2h0XHQ9ICRwYXJlbnQub3V0ZXJIZWlnaHQoKSxcclxuXHRcdFx0XHRcdHdpZHRoLFxyXG5cdFx0XHRcdFx0aGVpZ2h0LFxyXG5cdFx0XHRcdFx0d2lkdGhSYXRpbyxcclxuXHRcdFx0XHRcdGhlaWdodFJhdGlvO1xyXG5cclxuXHRcdFx0XHR3aWR0aCAgPSB0aGlzLm5hdHVyYWxXaWR0aFx0fHwgdGhpcy53aWR0aDtcclxuXHRcdFx0XHRoZWlnaHQgPSB0aGlzLm5hdHVyYWxIZWlnaHRcdHx8IHRoaXMuaGVpZ2h0O1xyXG5cclxuXHRcdFx0XHQvLyBDYWxjdWxhdGUgdGh1bWJuYWlsIGRpbWVuc2lvbnM7IGNlbnRlciB2ZXJ0aWNhbGx5IGFuZCBob3Jpem9udGFsbHlcclxuXHRcdFx0XHR3aWR0aFJhdGlvICA9IHdpZHRoICAvIHRodW1iV2lkdGg7XHJcblx0XHRcdFx0aGVpZ2h0UmF0aW8gPSBoZWlnaHQgLyB0aHVtYkhlaWdodDtcclxuXHJcblx0XHRcdFx0aWYgKHdpZHRoUmF0aW8gPj0gMSAmJiBoZWlnaHRSYXRpbyA+PSAxKSB7XHJcblx0XHRcdFx0XHRpZiAod2lkdGhSYXRpbyA+IGhlaWdodFJhdGlvKSB7XHJcblx0XHRcdFx0XHRcdHdpZHRoICA9IHdpZHRoIC8gaGVpZ2h0UmF0aW87XHJcblx0XHRcdFx0XHRcdGhlaWdodCA9IHRodW1iSGVpZ2h0O1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHdpZHRoICA9IHRodW1iV2lkdGg7XHJcblx0XHRcdFx0XHRcdGhlaWdodCA9IGhlaWdodCAvIHdpZHRoUmF0aW87XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQkKHRoaXMpLmNzcyh7XHJcblx0XHRcdFx0XHR3aWR0aCAgICAgICAgIDogTWF0aC5mbG9vcih3aWR0aCksXHJcblx0XHRcdFx0XHRoZWlnaHQgICAgICAgIDogTWF0aC5mbG9vcihoZWlnaHQpLFxyXG5cdFx0XHRcdFx0J21hcmdpbi10b3AnICA6IGhlaWdodCA+IHRodW1iSGVpZ2h0ID8gKCBNYXRoLmZsb29yKHRodW1iSGVpZ2h0ICogMC4zIC0gaGVpZ2h0ICogMC4zICkgKSA6IE1hdGguZmxvb3IodGh1bWJIZWlnaHQgKiAwLjUgLSBoZWlnaHQgKiAwLjUgKSxcclxuXHRcdFx0XHRcdCdtYXJnaW4tbGVmdCcgOiBNYXRoLmZsb29yKHRodW1iV2lkdGggKiAwLjUgLSB3aWR0aCAqIDAuNSApXHJcblx0XHRcdFx0fSkuc2hvdygpO1xyXG5cclxuXHRcdFx0fSlcclxuXHRcdFx0LmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhpcy5zcmMgPSAkKCB0aGlzICkuZGF0YSggJ3NyYycgKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoIHNlbGYub3B0cy5heGlzID09PSAneCcgKSB7XHJcblx0XHRcdFx0c2VsZi4kbGlzdC53aWR0aCggcGFyc2VJbnQoIHNlbGYuJGdyaWQuY3NzKFwicGFkZGluZy1yaWdodFwiKSApICsgKCBpbnN0YW5jZS5ncm91cC5sZW5ndGggKiBzZWxmLiRsaXN0LmNoaWxkcmVuKCkuZXEoMCkub3V0ZXJXaWR0aCh0cnVlKSApICsgJ3B4JyApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdGZvY3VzIDogZnVuY3Rpb24oIGR1cmF0aW9uICkge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXHJcblx0XHRcdFx0JGxpc3QgPSBzZWxmLiRsaXN0LFxyXG5cdFx0XHRcdHRodW1iLFxyXG5cdFx0XHRcdHRodW1iUG9zO1xyXG5cclxuXHRcdFx0aWYgKCBzZWxmLmluc3RhbmNlLmN1cnJlbnQgKSB7XHJcblx0XHRcdFx0dGh1bWIgPSAkbGlzdC5jaGlsZHJlbigpXHJcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoICdmYW5jeWJveC10aHVtYnMtYWN0aXZlJyApXHJcblx0XHRcdFx0XHQuZmlsdGVyKCdbZGF0YS1pbmRleD1cIicgKyBzZWxmLmluc3RhbmNlLmN1cnJlbnQuaW5kZXggICsgJ1wiXScpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2ZhbmN5Ym94LXRodW1icy1hY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0dGh1bWJQb3MgPSB0aHVtYi5wb3NpdGlvbigpO1xyXG5cclxuXHRcdFx0XHQvLyBDaGVjayBpZiBuZWVkIHRvIHNjcm9sbCB0byBtYWtlIGN1cnJlbnQgdGh1bWIgdmlzaWJsZVxyXG5cdFx0XHRcdGlmICggc2VsZi5vcHRzLmF4aXMgPT09ICd5JyAmJiAoIHRodW1iUG9zLnRvcCA8IDAgfHwgdGh1bWJQb3MudG9wID4gKCAkbGlzdC5oZWlnaHQoKSAtIHRodW1iLm91dGVySGVpZ2h0KCkgKSApICkge1xyXG5cdFx0XHRcdFx0JGxpc3Quc3RvcCgpLmFuaW1hdGUoeyAnc2Nyb2xsVG9wJyA6ICRsaXN0LnNjcm9sbFRvcCgpICsgdGh1bWJQb3MudG9wIH0sIGR1cmF0aW9uKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmICggc2VsZi5vcHRzLmF4aXMgPT09ICd4JyAmJiAoXHJcblx0XHRcdFx0XHRcdHRodW1iUG9zLmxlZnQgPCAkbGlzdC5wYXJlbnQoKS5zY3JvbGxMZWZ0KCkgfHxcclxuXHRcdFx0XHRcdFx0dGh1bWJQb3MubGVmdCA+ICggJGxpc3QucGFyZW50KCkuc2Nyb2xsTGVmdCgpICsgKCAkbGlzdC5wYXJlbnQoKS53aWR0aCgpIC0gdGh1bWIub3V0ZXJXaWR0aCgpICkgKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0JGxpc3QucGFyZW50KCkuc3RvcCgpLmFuaW1hdGUoeyAnc2Nyb2xsTGVmdCcgOiB0aHVtYlBvcy5sZWZ0IH0sIGR1cmF0aW9uKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0dXBkYXRlIDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuaW5zdGFuY2UuJHJlZnMuY29udGFpbmVyLnRvZ2dsZUNsYXNzKCAnZmFuY3lib3gtc2hvdy10aHVtYnMnLCB0aGlzLmlzVmlzaWJsZSApO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLmlzVmlzaWJsZSApIHtcclxuXHRcdFx0XHRpZiAoICF0aGlzLiRncmlkICkge1xyXG5cdFx0XHRcdFx0dGhpcy5jcmVhdGUoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UudHJpZ2dlciggJ29uVGh1bWJzU2hvdycgKTtcclxuXHJcblx0XHRcdFx0dGhpcy5mb2N1cyggMCApO1xyXG5cclxuXHRcdFx0fSBlbHNlIGlmICggdGhpcy4kZ3JpZCApIHtcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlLnRyaWdnZXIoICdvblRodW1ic0hpZGUnICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFVwZGF0ZSBjb250ZW50IHBvc2l0aW9uXHJcblx0XHRcdHRoaXMuaW5zdGFuY2UudXBkYXRlKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGhpZGUgOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy51cGRhdGUoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2hvdyA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmlzVmlzaWJsZSA9IHRydWU7XHJcblx0XHRcdHRoaXMudXBkYXRlKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHRvZ2dsZSA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmlzVmlzaWJsZSA9ICF0aGlzLmlzVmlzaWJsZTtcclxuXHRcdFx0dGhpcy51cGRhdGUoKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0JChkb2N1bWVudCkub24oe1xyXG5cclxuXHRcdCdvbkluaXQuZmInIDogZnVuY3Rpb24oZSwgaW5zdGFuY2UpIHtcclxuXHRcdFx0dmFyIFRodW1icztcclxuXHJcblx0XHRcdGlmICggaW5zdGFuY2UgJiYgIWluc3RhbmNlLlRodW1icyApIHtcclxuXHRcdFx0XHRUaHVtYnMgPSBuZXcgRmFuY3lUaHVtYnMoIGluc3RhbmNlICk7XHJcblxyXG5cdFx0XHRcdGlmICggVGh1bWJzLmlzQWN0aXZlICYmIFRodW1icy5vcHRzLmF1dG9TdGFydCA9PT0gdHJ1ZSApIHtcclxuXHRcdFx0XHRcdFRodW1icy5zaG93KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdCdiZWZvcmVTaG93LmZiJyA6IGZ1bmN0aW9uKGUsIGluc3RhbmNlLCBpdGVtLCBmaXJzdFJ1bikge1xyXG5cdFx0XHR2YXIgVGh1bWJzID0gaW5zdGFuY2UgJiYgaW5zdGFuY2UuVGh1bWJzO1xyXG5cclxuXHRcdFx0aWYgKCBUaHVtYnMgJiYgVGh1bWJzLmlzVmlzaWJsZSApIHtcclxuXHRcdFx0XHRUaHVtYnMuZm9jdXMoIGZpcnN0UnVuID8gMCA6IDI1MCApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdCdhZnRlcktleWRvd24uZmInIDogZnVuY3Rpb24oZSwgaW5zdGFuY2UsIGN1cnJlbnQsIGtleXByZXNzLCBrZXljb2RlKSB7XHJcblx0XHRcdHZhciBUaHVtYnMgPSBpbnN0YW5jZSAmJiBpbnN0YW5jZS5UaHVtYnM7XHJcblxyXG5cdFx0XHQvLyBcIkdcIlxyXG5cdFx0XHRpZiAoIFRodW1icyAmJiBUaHVtYnMuaXNBY3RpdmUgJiYga2V5Y29kZSA9PT0gNzEgKSB7XHJcblx0XHRcdFx0a2V5cHJlc3MucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0VGh1bWJzLnRvZ2dsZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdCdiZWZvcmVDbG9zZS5mYicgOiBmdW5jdGlvbiggZSwgaW5zdGFuY2UgKSB7XHJcblx0XHRcdHZhciBUaHVtYnMgPSBpbnN0YW5jZSAmJiBpbnN0YW5jZS5UaHVtYnM7XHJcblxyXG5cdFx0XHRpZiAoIFRodW1icyAmJiBUaHVtYnMuaXNWaXNpYmxlICYmIFRodW1icy5vcHRzLmhpZGVPbkNsb3NlICE9PSBmYWxzZSApIHtcclxuXHRcdFx0XHRUaHVtYnMuJGdyaWQuaGlkZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufShkb2N1bWVudCwgd2luZG93LmpRdWVyeSkpO1xyXG5cclxuLy8vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL1xyXG4vLyBTaGFyZVxyXG4vLyBEaXNwbGF5cyBzaW1wbGUgZm9ybSBmb3Igc2hhcmluZyBjdXJyZW50IHVybFxyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG47KGZ1bmN0aW9uIChkb2N1bWVudCwgJCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0JC5leHRlbmQodHJ1ZSwgJC5mYW5jeWJveC5kZWZhdWx0cywge1xyXG5cdFx0YnRuVHBsIDoge1xyXG5cdFx0XHRzaGFyZSA6XHJcblx0XHRcdFx0JzxidXR0b24gZGF0YS1mYW5jeWJveC1zaGFyZSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXNoYXJlXCIgdGl0bGU9XCJ7e1NIQVJFfX1cIj4nICtcclxuXHRcdFx0XHRcdCc8c3ZnIHZpZXdCb3g9XCIwIDAgNDAgNDBcIj4nICtcclxuXHRcdFx0XHRcdFx0JzxwYXRoIGQ9XCJNNiwzMCBDOCwxOCAxOSwxNiAyMywxNiBMMjMsMTYgTDIzLDEwIEwzMywyMCBMMjMsMjkgTDIzLDI0IEMxOSwyNCA4LDI3IDYsMzAgWlwiPicgK1xyXG5cdFx0XHRcdFx0Jzwvc3ZnPicgK1xyXG5cdFx0XHRcdCc8L2J1dHRvbj4nXHJcblx0XHR9LFxyXG5cdFx0c2hhcmUgOiB7XHJcblx0XHRcdHRwbCA6XHJcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJmYW5jeWJveC1zaGFyZVwiPicgK1xyXG5cdFx0XHRcdFx0JzxoMT57e1NIQVJFfX08L2gxPicgK1xyXG5cdFx0XHRcdFx0JzxwIGNsYXNzPVwiZmFuY3lib3gtc2hhcmVfX2xpbmtzXCI+JyArXHJcblx0XHRcdFx0XHRcdCc8YSBjbGFzcz1cImZhbmN5Ym94LXNoYXJlX19idXR0b24gZmFuY3lib3gtc2hhcmVfX2J1dHRvbi0tZmJcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9e3t1cmx9fVwiPicgK1xyXG5cdFx0XHRcdFx0XHRcdCc8c3ZnIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTI4NyA0NTZ2LTI5OWMwLTIxIDYtMzUgMzUtMzVoMzh2LTYzYy03LTEtMjktMy01NS0zLTU0IDAtOTEgMzMtOTEgOTR2MzA2bTE0My0yNTRoLTIwNXY3MmgxOTZcIiAvPjwvc3ZnPicgK1xyXG5cdFx0XHRcdFx0XHRcdCc8c3Bhbj5GYWNlYm9vazwvc3Bhbj4nICtcclxuXHRcdFx0XHRcdFx0JzwvYT4nICtcclxuXHRcdFx0XHRcdFx0JzxhIGNsYXNzPVwiZmFuY3lib3gtc2hhcmVfX2J1dHRvbiBmYW5jeWJveC1zaGFyZV9fYnV0dG9uLS1wdFwiIGhyZWY9XCJodHRwczovL3d3dy5waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uLz91cmw9e3t1cmx9fSZkZXNjcmlwdGlvbj17e2Rlc2NyfX0mbWVkaWE9e3ttZWRpYX19XCI+JyArXHJcblx0XHRcdFx0XHRcdFx0Jzxzdmcgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtMjY1IDU2Yy0xMDkgMC0xNjQgNzgtMTY0IDE0NCAwIDM5IDE1IDc0IDQ3IDg3IDUgMiAxMCAwIDEyLTVsNC0xOWMyLTYgMS04LTMtMTMtOS0xMS0xNS0yNS0xNS00NSAwLTU4IDQzLTExMCAxMTMtMTEwIDYyIDAgOTYgMzggOTYgODggMCA2Ny0zMCAxMjItNzMgMTIyLTI0IDAtNDItMTktMzYtNDQgNi0yOSAyMC02MCAyMC04MSAwLTE5LTEwLTM1LTMxLTM1LTI1IDAtNDQgMjYtNDQgNjAgMCAyMSA3IDM2IDcgMzZsLTMwIDEyNWMtOCAzNy0xIDgzIDAgODcgMCAzIDQgNCA1IDIgMi0zIDMyLTM5IDQyLTc1bDE2LTY0YzggMTYgMzEgMjkgNTYgMjkgNzQgMCAxMjQtNjcgMTI0LTE1NyAwLTY5LTU4LTEzMi0xNDYtMTMyelwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPicgK1xyXG5cdFx0XHRcdFx0XHRcdCc8c3Bhbj5QaW50ZXJlc3Q8L3NwYW4+JyArXHJcblx0XHRcdFx0XHRcdCc8L2E+JyArXHJcblx0XHRcdFx0XHRcdCc8YSBjbGFzcz1cImZhbmN5Ym94LXNoYXJlX19idXR0b24gZmFuY3lib3gtc2hhcmVfX2J1dHRvbi0tdHdcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPXt7dXJsfX0mdGV4dD17e2Rlc2NyfX1cIj4nICtcclxuXHRcdFx0XHRcdFx0XHQnPHN2ZyB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm00NTYgMTMzYy0xNCA3LTMxIDExLTQ3IDEzIDE3LTEwIDMwLTI3IDM3LTQ2LTE1IDEwLTM0IDE2LTUyIDIwLTYxLTYyLTE1Ny03LTE0MSA3NS02OC0zLTEyOS0zNS0xNjktODUtMjIgMzctMTEgODYgMjYgMTA5LTEzIDAtMjYtNC0zNy05IDAgMzkgMjggNzIgNjUgODAtMTIgMy0yNSA0LTM3IDIgMTAgMzMgNDEgNTcgNzcgNTctNDIgMzAtNzcgMzgtMTIyIDM0IDE3MCAxMTEgMzc4LTMyIDM1OS0yMDggMTYtMTEgMzAtMjUgNDEtNDJ6XCIgLz48L3N2Zz4nICtcclxuXHRcdFx0XHRcdFx0XHQnPHNwYW4+VHdpdHRlcjwvc3Bhbj4nICtcclxuXHRcdFx0XHRcdFx0JzwvYT4nICtcclxuXHRcdFx0XHRcdCc8L3A+JyArXHJcblx0XHRcdFx0XHQnPHA+PGlucHV0IGNsYXNzPVwiZmFuY3lib3gtc2hhcmVfX2lucHV0XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cInt7dXJsX3Jhd319XCIgLz48L3A+JyArXHJcblx0XHRcdFx0JzwvZGl2PidcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpIHtcclxuXHRcdHZhciBlbnRpdHlNYXAgPSB7XHJcblx0XHQgICcmJzogJyZhbXA7JyxcclxuXHRcdCAgJzwnOiAnJmx0OycsXHJcblx0XHQgICc+JzogJyZndDsnLFxyXG5cdFx0ICAnXCInOiAnJnF1b3Q7JyxcclxuXHRcdCAgXCInXCI6ICcmIzM5OycsXHJcblx0XHQgICcvJzogJyYjeDJGOycsXHJcblx0XHQgICdgJzogJyYjeDYwOycsXHJcblx0XHQgICc9JzogJyYjeDNEOydcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZywgZnVuY3Rpb24gKHMpIHtcclxuXHRcdFx0cmV0dXJuIGVudGl0eU1hcFtzXTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWZhbmN5Ym94LXNoYXJlXScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGYgPSAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCksXHJcblx0XHRcdHVybCxcclxuXHRcdFx0dHBsO1xyXG5cclxuXHRcdGlmICggZiApIHtcclxuXHRcdFx0dXJsID0gZi5jdXJyZW50Lm9wdHMuaGFzaCA9PT0gZmFsc2UgPyBmLmN1cnJlbnQuc3JjIDogd2luZG93LmxvY2F0aW9uO1xyXG5cdFx0XHR0cGwgPSBmLmN1cnJlbnQub3B0cy5zaGFyZS50cGxcclxuXHRcdFx0XHRcdC5yZXBsYWNlKCAvXFx7XFx7bWVkaWFcXH1cXH0vZywgZi5jdXJyZW50LnR5cGUgPT09ICdpbWFnZScgPyBlbmNvZGVVUklDb21wb25lbnQoIGYuY3VycmVudC5zcmMgKSA6ICcnIClcclxuXHRcdFx0XHRcdC5yZXBsYWNlKCAvXFx7XFx7dXJsXFx9XFx9L2csIGVuY29kZVVSSUNvbXBvbmVudCggdXJsICkgKVxyXG5cdFx0XHRcdFx0LnJlcGxhY2UoIC9cXHtcXHt1cmxfcmF3XFx9XFx9L2csIGVzY2FwZUh0bWwoIHVybCApIClcclxuXHRcdFx0XHRcdC5yZXBsYWNlKCAvXFx7XFx7ZGVzY3JcXH1cXH0vZywgZi4kY2FwdGlvbiA/IGVuY29kZVVSSUNvbXBvbmVudCggZi4kY2FwdGlvbi50ZXh0KCkgKSA6ICcnICk7XHJcblxyXG5cdFx0XHQkLmZhbmN5Ym94Lm9wZW4oe1xyXG5cdFx0XHRcdHNyYyAgOiBmLnRyYW5zbGF0ZSggZiwgdHBsICksXHJcblx0XHRcdFx0dHlwZSA6ICdodG1sJyxcclxuXHRcdFx0XHRvcHRzIDoge1xyXG5cdFx0XHRcdFx0YW5pbWF0aW9uRWZmZWN0ICAgOiBcImZhZGVcIixcclxuXHRcdFx0XHRcdGFuaW1hdGlvbkR1cmF0aW9uIDogMjUwLFxyXG5cdFx0XHRcdFx0YWZ0ZXJMb2FkIDogZnVuY3Rpb24oaW5zdGFuY2UsIGN1cnJlbnQpIHtcclxuXHRcdFx0XHRcdFx0Ly8gT3BlbmluZyBsaW5rcyBpbiBhIHBvcHVwIHdpbmRvd1xyXG5cdFx0XHRcdFx0XHRjdXJyZW50LiRjb250ZW50LmZpbmQoJy5mYW5jeWJveC1zaGFyZV9fbGlua3MgYScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0ICAgICAgICB3aW5kb3cub3Blbih0aGlzLmhyZWYsIFwiU2hhcmVcIiwgXCJ3aWR0aD01NTAsIGhlaWdodD00NTBcIik7XHJcblx0XHRcdFx0XHQgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSB8fCBqUXVlcnkgKSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL1xyXG4vLyBIYXNoXHJcbi8vIEVuYWJsZXMgbGlua2luZyB0byBlYWNoIG1vZGFsXHJcbi8vXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsoZnVuY3Rpb24gKGRvY3VtZW50LCB3aW5kb3csICQpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdC8vIFNpbXBsZSAkLmVzY2FwZVNlbGVjdG9yIHBvbHlmaWxsIChmb3IgalF1ZXJ5IHByaW9yIHYzKVxyXG5cdGlmICggISQuZXNjYXBlU2VsZWN0b3IgKSB7XHJcblx0XHQkLmVzY2FwZVNlbGVjdG9yID0gZnVuY3Rpb24oIHNlbCApIHtcclxuXHRcdFx0dmFyIHJjc3Nlc2NhcGUgPSAvKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXHg4MC1cXHVGRkZGXFx3LV0vZztcclxuXHRcdFx0dmFyIGZjc3Nlc2NhcGUgPSBmdW5jdGlvbiggY2gsIGFzQ29kZVBvaW50ICkge1xyXG5cdFx0XHRcdGlmICggYXNDb2RlUG9pbnQgKSB7XHJcblx0XHRcdFx0XHQvLyBVKzAwMDAgTlVMTCBiZWNvbWVzIFUrRkZGRCBSRVBMQUNFTUVOVCBDSEFSQUNURVJcclxuXHRcdFx0XHRcdGlmICggY2ggPT09IFwiXFwwXCIgKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBcIlxcdUZGRkRcIjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBDb250cm9sIGNoYXJhY3RlcnMgYW5kIChkZXBlbmRlbnQgdXBvbiBwb3NpdGlvbikgbnVtYmVycyBnZXQgZXNjYXBlZCBhcyBjb2RlIHBvaW50c1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNoLnNsaWNlKCAwLCAtMSApICsgXCJcXFxcXCIgKyBjaC5jaGFyQ29kZUF0KCBjaC5sZW5ndGggLSAxICkudG9TdHJpbmcoIDE2ICkgKyBcIiBcIjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIE90aGVyIHBvdGVudGlhbGx5LXNwZWNpYWwgQVNDSUkgY2hhcmFjdGVycyBnZXQgYmFja3NsYXNoLWVzY2FwZWRcclxuXHRcdFx0XHRyZXR1cm4gXCJcXFxcXCIgKyBjaDtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJldHVybiAoIHNlbCArIFwiXCIgKS5yZXBsYWNlKCByY3NzZXNjYXBlLCBmY3NzZXNjYXBlICk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlIG5ldyBoaXN0b3J5IGVudHJ5IG9ubHkgb25jZVxyXG5cdHZhciBzaG91bGRDcmVhdGVIaXN0b3J5ID0gdHJ1ZTtcclxuXHJcblx0Ly8gVmFyaWFibGUgY29udGFpbmluZyBsYXN0IGhhc2ggdmFsdWUgc2V0IGJ5IGZhbmN5Qm94XHJcblx0Ly8gSXQgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSBpZiBmYW5jeUJveCBuZWVkcyB0byBjbG9zZSBhZnRlciBoYXNoIGNoYW5nZSBpcyBkZXRlY3RlZFxyXG4gICAgdmFyIGN1cnJlbnRIYXNoID0gbnVsbDtcclxuXHJcblx0Ly8gVGhyb3R0bGluZyB0aGUgaGlzdG9yeSBjaGFuZ2VcclxuXHR2YXIgdGltZXJJRCA9IG51bGw7XHJcblxyXG5cdC8vIEdldCBpbmZvIGFib3V0IGdhbGxlcnkgbmFtZSBhbmQgY3VycmVudCBpbmRleCBmcm9tIHVybFxyXG4gICAgZnVuY3Rpb24gcGFyc2VVcmwoKSB7XHJcbiAgICAgICAgdmFyIGhhc2ggICAgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoIDEgKTtcclxuICAgICAgICB2YXIgcmV6ICAgICA9IGhhc2guc3BsaXQoICctJyApO1xyXG4gICAgICAgIHZhciBpbmRleCAgID0gcmV6Lmxlbmd0aCA+IDEgJiYgL15cXCs/XFxkKyQvLnRlc3QoIHJlelsgcmV6Lmxlbmd0aCAtIDEgXSApID8gcGFyc2VJbnQoIHJlei5wb3AoIC0xICksIDEwICkgfHwgMSA6IDE7XHJcbiAgICAgICAgdmFyIGdhbGxlcnkgPSByZXouam9pbiggJy0nICk7XHJcblxyXG5cdFx0Ly8gSW5kZXggaXMgc3RhcnRpbmcgZnJvbSAxXHJcblx0XHRpZiAoIGluZGV4IDwgMSApIHtcclxuXHRcdFx0aW5kZXggPSAxO1xyXG5cdFx0fVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoYXNoICAgIDogaGFzaCxcclxuICAgICAgICAgICAgaW5kZXggICA6IGluZGV4LFxyXG4gICAgICAgICAgICBnYWxsZXJ5IDogZ2FsbGVyeVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cdC8vIFRyaWdnZXIgY2xpY2sgZXZudCBvbiBsaW5rcyB0byBvcGVuIG5ldyBmYW5jeUJveCBpbnN0YW5jZVxyXG5cdGZ1bmN0aW9uIHRyaWdnZXJGcm9tVXJsKCB1cmwgKSB7XHJcblx0XHR2YXIgJGVsO1xyXG5cclxuICAgICAgICBpZiAoIHVybC5nYWxsZXJ5ICE9PSAnJyApIHtcclxuXHJcblx0XHRcdC8vIElmIHdlIGNhbiBmaW5kIGVsZW1lbnQgbWF0Y2hpbmcgJ2RhdGEtZmFuY3lib3gnIGF0cmlidXRlLCB0aGVuIHRyaWdnZXIgY2xpY2sgZXZlbnQgZm9yIHRoYXQgLi5cclxuXHRcdFx0JGVsID0gJCggXCJbZGF0YS1mYW5jeWJveD0nXCIgKyAkLmVzY2FwZVNlbGVjdG9yKCB1cmwuZ2FsbGVyeSApICsgXCInXVwiICkuZXEoIHVybC5pbmRleCAtIDEgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggISRlbC5sZW5ndGggKSB7XHJcblx0XHRcdFx0Ly8gLi4gaWYgbm90LCB0cnkgZmluZGluZyBlbGVtZW50IGJ5IElEXHJcblx0XHRcdFx0JGVsID0gJCggXCIjXCIgKyAkLmVzY2FwZVNlbGVjdG9yKCB1cmwuZ2FsbGVyeSApICsgXCJcIiApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoICRlbC5sZW5ndGggKSB7XHJcblx0XHRcdFx0c2hvdWxkQ3JlYXRlSGlzdG9yeSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHQkZWwudHJpZ2dlciggJ2NsaWNrJyApO1xyXG5cdFx0XHR9XHJcblxyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cdC8vIEdldCBnYWxsZXJ5IG5hbWUgZnJvbSBjdXJyZW50IGluc3RhbmNlXHJcblx0ZnVuY3Rpb24gZ2V0R2FsbGVyeUlEKCBpbnN0YW5jZSApIHtcclxuXHRcdHZhciBvcHRzO1xyXG5cclxuXHRcdGlmICggIWluc3RhbmNlICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0b3B0cyA9IGluc3RhbmNlLmN1cnJlbnQgPyBpbnN0YW5jZS5jdXJyZW50Lm9wdHMgOiBpbnN0YW5jZS5vcHRzO1xyXG5cclxuXHRcdHJldHVybiBvcHRzLmhhc2ggfHwgKCBvcHRzLiRvcmlnID8gb3B0cy4kb3JpZy5kYXRhKCAnZmFuY3lib3gnICkgOiAnJyAgKTtcclxuXHR9XHJcblxyXG5cdC8vIFN0YXJ0IHdoZW4gRE9NIGJlY29tZXMgcmVhZHlcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0Ly8gQ2hlY2sgaWYgdXNlciBoYXMgZGlzYWJsZWQgdGhpcyBtb2R1bGVcclxuXHRcdGlmICggJC5mYW5jeWJveC5kZWZhdWx0cy5oYXNoID09PSBmYWxzZSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFVwZGF0ZSBoYXNoIHdoZW4gb3BlbmluZy9jbG9zaW5nIGZhbmN5Qm94XHJcblx0ICAgICQoZG9jdW1lbnQpLm9uKHtcclxuXHRcdFx0J29uSW5pdC5mYicgOiBmdW5jdGlvbiggZSwgaW5zdGFuY2UgKSB7XHJcblx0XHRcdFx0dmFyIHVybCwgZ2FsbGVyeTtcclxuXHJcblx0XHRcdFx0aWYgKCBpbnN0YW5jZS5ncm91cFsgaW5zdGFuY2UuY3VyckluZGV4IF0ub3B0cy5oYXNoID09PSBmYWxzZSApIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHVybCAgICAgPSBwYXJzZVVybCgpO1xyXG5cdFx0XHRcdGdhbGxlcnkgPSBnZXRHYWxsZXJ5SUQoIGluc3RhbmNlICk7XHJcblxyXG5cdFx0XHRcdC8vIE1ha2Ugc3VyZSBnYWxsZXJ5IHN0YXJ0IGluZGV4IG1hdGNoZXMgaW5kZXggZnJvbSBoYXNoXHJcblx0XHRcdFx0aWYgKCBnYWxsZXJ5ICYmIHVybC5nYWxsZXJ5ICYmIGdhbGxlcnkgPT0gdXJsLmdhbGxlcnkgKSB7XHJcblx0XHRcdFx0XHRpbnN0YW5jZS5jdXJySW5kZXggPSB1cmwuaW5kZXggLSAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdCdiZWZvcmVTaG93LmZiJyA6IGZ1bmN0aW9uKCBlLCBpbnN0YW5jZSwgY3VycmVudCApIHtcclxuXHRcdFx0XHR2YXIgZ2FsbGVyeTtcclxuXHJcblx0XHRcdFx0aWYgKCAhY3VycmVudCB8fCBjdXJyZW50Lm9wdHMuaGFzaCA9PT0gZmFsc2UgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHQgICAgICAgICAgICBnYWxsZXJ5ID0gZ2V0R2FsbGVyeUlEKCBpbnN0YW5jZSApO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBVcGRhdGUgd2luZG93IGhhc2hcclxuXHQgICAgICAgICAgICBpZiAoIGdhbGxlcnkgJiYgZ2FsbGVyeSAhPT0gJycgKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCBnYWxsZXJ5ICkgPCAwICkge1xyXG5cdFx0ICAgICAgICAgICAgICAgIGluc3RhbmNlLm9wdHMub3JpZ0hhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuXHRcdCAgICAgICAgICAgIH1cclxuXHJcblx0XHRcdFx0XHRjdXJyZW50SGFzaCA9IGdhbGxlcnkgKyAoIGluc3RhbmNlLmdyb3VwLmxlbmd0aCA+IDEgPyAnLScgKyAoIGN1cnJlbnQuaW5kZXggKyAxICkgOiAnJyApO1xyXG5cclxuXHRcdFx0XHRcdGlmICggJ3JlcGxhY2VTdGF0ZScgaW4gd2luZG93Lmhpc3RvcnkgKSB7XHJcblx0XHRcdFx0XHRcdGlmICggdGltZXJJRCApIHtcclxuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVySUQgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0dGltZXJJRCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0d2luZG93Lmhpc3RvcnlbIHNob3VsZENyZWF0ZUhpc3RvcnkgPyAncHVzaFN0YXRlJyA6ICdyZXBsYWNlU3RhdGUnIF0oIHt9ICwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyAnIycgKyAgY3VycmVudEhhc2ggKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0dGltZXJJRCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHNob3VsZENyZWF0ZUhpc3RvcnkgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRcdH0sIDMwMCk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBjdXJyZW50SGFzaDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIH0sXHJcblxyXG5cdFx0XHQnYmVmb3JlQ2xvc2UuZmInIDogZnVuY3Rpb24oIGUsIGluc3RhbmNlLCBjdXJyZW50ICkge1xyXG5cdFx0XHRcdHZhciBnYWxsZXJ5LCBvcmlnSGFzaDtcclxuXHJcblx0XHRcdFx0aWYgKCB0aW1lcklEICkge1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lcklEICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIGN1cnJlbnQub3B0cy5oYXNoID09PSBmYWxzZSApIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGdhbGxlcnkgID0gZ2V0R2FsbGVyeUlEKCBpbnN0YW5jZSApO1xyXG5cdFx0XHRcdG9yaWdIYXNoID0gaW5zdGFuY2UgJiYgaW5zdGFuY2Uub3B0cy5vcmlnSGFzaCA/IGluc3RhbmNlLm9wdHMub3JpZ0hhc2ggOiAnJztcclxuXHJcblx0ICAgICAgICAgICAgLy8gUmVtb3ZlIGhhc2ggZnJvbSBsb2NhdGlvbiBiYXJcclxuXHQgICAgICAgICAgICBpZiAoIGdhbGxlcnkgJiYgZ2FsbGVyeSAhPT0gJycgKSB7XHJcblxyXG5cdCAgICAgICAgICAgICAgICBpZiAoICdyZXBsYWNlU3RhdGUnIGluIGhpc3RvcnkgKSB7XHJcblx0XHRcdFx0XHRcdHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSgge30gLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIG9yaWdIYXNoICk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IG9yaWdIYXNoO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gS2VlcCBvcmlnaW5hbCBzY3JvbGwgcG9zaXRpb25cclxuXHRcdFx0XHRcdFx0JCggd2luZG93ICkuc2Nyb2xsVG9wKCBpbnN0YW5jZS5zY3JvbGxUb3AgKS5zY3JvbGxMZWZ0KCBpbnN0YW5jZS5zY3JvbGxMZWZ0ICk7XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdFx0XHRcdGN1cnJlbnRIYXNoID0gbnVsbDtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfSk7XHJcblxyXG5cdFx0Ly8gQ2hlY2sgaWYgbmVlZCB0byBjbG9zZSBhZnRlciB1cmwgaGFzIGNoYW5nZWRcclxuXHRcdCQod2luZG93KS5vbignaGFzaGNoYW5nZS5mYicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdXJsID0gcGFyc2VVcmwoKTtcclxuXHJcblx0XHRcdGlmICggJC5mYW5jeWJveC5nZXRJbnN0YW5jZSgpICkge1xyXG5cdFx0XHRcdGlmICggY3VycmVudEhhc2ggJiYgY3VycmVudEhhc2ggIT09IHVybC5nYWxsZXJ5ICsgJy0nICsgdXJsLmluZGV4ICYmICEoIHVybC5pbmRleCA9PT0gMSAmJiBjdXJyZW50SGFzaCA9PSB1cmwuZ2FsbGVyeSApICkge1xyXG5cdFx0XHRcdFx0Y3VycmVudEhhc2ggPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdCQuZmFuY3lib3guY2xvc2UoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYgKCB1cmwuZ2FsbGVyeSAhPT0gJycgKSB7XHJcblx0XHRcdFx0dHJpZ2dlckZyb21VcmwoIHVybCApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBDaGVjayBjdXJyZW50IGhhc2ggYW5kIHRyaWdnZXIgY2xpY2sgZXZlbnQgb24gbWF0Y2hpbmcgZWxlbWVudCB0byBzdGFydCBmYW5jeUJveCwgaWYgbmVlZGVkXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0cmlnZ2VyRnJvbVVybCggcGFyc2VVcmwoKSApO1xyXG5cdFx0fSwgNTApO1xyXG4gICAgfSk7XHJcblxyXG59KCBkb2N1bWVudCwgd2luZG93LCB3aW5kb3cualF1ZXJ5IHx8IGpRdWVyeSApKTtcclxuXHJcbjsoZnVuY3Rpb24gKGRvY3VtZW50LCAkKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHR2YXIgcHJldlRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbih7XHJcbiAgICAgICAgJ29uSW5pdC5mYicgOiBmdW5jdGlvbiggZSwgaW5zdGFuY2UsIGN1cnJlbnQgKSB7XHJcblx0XHRcdGluc3RhbmNlLiRyZWZzLnN0YWdlLm9uKCdtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsIHdoZWVsIE1vek1vdXNlUGl4ZWxTY3JvbGwnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0dmFyIGN1cnJlbnQgID0gaW5zdGFuY2UuY3VycmVudCxcclxuXHRcdFx0XHRcdGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG5cdFx0XHRcdGlmICggaW5zdGFuY2UuZ3JvdXAubGVuZ3RoIDwgMSB8fCBjdXJyZW50Lm9wdHMud2hlZWwgPT09IGZhbHNlIHx8ICggY3VycmVudC5vcHRzLndoZWVsID09PSAnYXV0bycgJiYgY3VycmVudC50eXBlICE9PSAnaW1hZ2UnICkgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdFx0aWYgKCBjdXJyZW50LiRzbGlkZS5oYXNDbGFzcyggJ2ZhbmN5Ym94LWFuaW1hdGVkJyApICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0ZSA9IGUub3JpZ2luYWxFdmVudCB8fCBlO1xyXG5cclxuXHRcdFx0XHRpZiAoIGN1cnJUaW1lIC0gcHJldlRpbWUgPCAyNTAgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRwcmV2VGltZSA9IGN1cnJUaW1lO1xyXG5cclxuXHRcdFx0XHRpbnN0YW5jZVsgKCAtZS5kZWx0YVkgfHwgLWUuZGVsdGFYIHx8IGUud2hlZWxEZWx0YSB8fCAtZS5kZXRhaWwgKSA8IDAgPyAnbmV4dCcgOiAncHJldmlvdXMnIF0oKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG4gICAgfSk7XHJcblxyXG59KCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSB8fCBqUXVlcnkgKSk7XHJcbiIsIihmdW5jdGlvbigkKSB7XHJcblx0XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblx0XHJcblx0XHJcblx0Ly9IaWRlIExvYWRpbmcgQm94IChQcmVsb2FkZXIpXHJcblx0ZnVuY3Rpb24gaGFuZGxlUHJlbG9hZGVyKCkge1xyXG5cdFx0aWYoJCgnLnByZWxvYWRlcicpLmxlbmd0aCl7XHJcblx0XHRcdCQoJy5wcmVsb2FkZXInKS5kZWxheSgyMDApLmZhZGVPdXQoNTAwKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0XHJcblx0Ly9VcGRhdGUgSGVhZGVyIFN0eWxlIGFuZCBTY3JvbGwgdG8gVG9wXHJcblx0ZnVuY3Rpb24gaGVhZGVyU3R5bGUoKSB7XHJcblx0XHRpZigkKCcubWFpbi1oZWFkZXInKS5sZW5ndGgpe1xyXG5cdFx0XHR2YXIgd2luZG93cG9zID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdFx0XHR2YXIgc2l0ZUhlYWRlciA9ICQoJy5tYWluLWhlYWRlcicpO1xyXG5cdFx0XHR2YXIgc2l0ZUhlYWRlckhlaWdodCA9ICQoJy5tYWluLWhlYWRlcicpLmhlaWdodCgpO1xyXG5cdFx0XHR2YXIgc2Nyb2xsTGluayA9ICQoJy5zY3JvbGwtdG8tdG9wJyk7XHJcblx0XHRcdGlmICh3aW5kb3dwb3MgPj0gc2l0ZUhlYWRlckhlaWdodCkge1xyXG5cdFx0XHRcdHNpdGVIZWFkZXIuYWRkQ2xhc3MoJ2ZpeGVkLWhlYWRlcicpO1xyXG5cdFx0XHRcdHNjcm9sbExpbmsuZmFkZUluKDMwMCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2l0ZUhlYWRlci5yZW1vdmVDbGFzcygnZml4ZWQtaGVhZGVyJyk7XHJcblx0XHRcdFx0c2Nyb2xsTGluay5mYWRlT3V0KDMwMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0aGVhZGVyU3R5bGUoKTtcclxuXHRcclxuXHRcclxuXHQvL1N1Ym1lbnUgRHJvcGRvd24gVG9nZ2xlXHJcblx0aWYoJCgnLm1haW4taGVhZGVyIGxpLmRyb3Bkb3duIHVsJykubGVuZ3RoKXtcclxuXHRcdCQoJy5tYWluLWhlYWRlciBsaS5kcm9wZG93bicpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRyb3Bkb3duLWJ0blwiPjxzcGFuIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93blwiPjwvc3Bhbj48L2Rpdj4nKTtcclxuXHRcdFxyXG5cdFx0Ly9Ecm9wZG93biBCdXR0b25cclxuXHRcdCQoJy5tYWluLWhlYWRlciBsaS5kcm9wZG93biAuZHJvcGRvd24tYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQodGhpcykucHJldigndWwnKS5zbGlkZVRvZ2dsZSg1MDApO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdC8vRGlzYWJsZSBkcm9wZG93biBwYXJlbnQgbGlua1xyXG5cdFx0Ly8gJCgnLm1haW4taGVhZGVyIC5uYXZpZ2F0aW9uIGxpLmRyb3Bkb3duID4gYSwuaGlkZGVuLWJhciAuc2lkZS1tZW51IGxpLmRyb3Bkb3duID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdC8vIFx0aWYgKCQodGhpcykuYXR0cignaHJlZicpID09PSAnJykge1xyXG5cdFx0Ly8gXHRcdHJldHVybiB0cnVlO1xyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyBcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHRcclxuXHQvL0V2ZW50IENvdW50ZG93biBUaW1lclxyXG5cdGlmKCQoJy50aW1lLWNvdW50ZG93bicpLmxlbmd0aCl7ICBcclxuXHRcdCQoJy50aW1lLWNvdW50ZG93bicpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLCBmaW5hbERhdGUgPSAkKHRoaXMpLmRhdGEoJ2NvdW50ZG93bicpO1xyXG5cdFx0JHRoaXMuY291bnRkb3duKGZpbmFsRGF0ZSwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKS5odG1sKGV2ZW50LnN0cmZ0aW1lKCcnICsgJzxkaXYgY2xhc3M9XCJjb3VudGVyLWNvbHVtblwiPjxzcGFuIGNsYXNzPVwiY291bnRcIj4lRDwvc3Bhbj5EYXlzPC9kaXY+ICcgKyAnPGRpdiBjbGFzcz1cImNvdW50ZXItY29sdW1uXCI+PHNwYW4gY2xhc3M9XCJjb3VudFwiPiVIPC9zcGFuPkhvdXJzPC9kaXY+ICAnICsgJzxkaXYgY2xhc3M9XCJjb3VudGVyLWNvbHVtblwiPjxzcGFuIGNsYXNzPVwiY291bnRcIj4lTTwvc3Bhbj5NaW51dGVzPC9kaXY+ICAnICsgJzxkaXYgY2xhc3M9XCJjb3VudGVyLWNvbHVtblwiPjxzcGFuIGNsYXNzPVwiY291bnRcIj4lUzwvc3Bhbj5TZWNvbmRzPC9kaXY+JykpO1xyXG5cdFx0fSk7XHJcblx0IH0pO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHQvL0ZhY3QgQ291bnRlciArIFRleHQgQ291bnRcclxuXHRpZigkKCcuY291bnQtYm94JykubGVuZ3RoKXtcclxuXHRcdCQoJy5jb3VudC1ib3gnKS5hcHBlYXIoZnVuY3Rpb24oKXtcclxuXHRcclxuXHRcdFx0dmFyICR0ID0gJCh0aGlzKSxcclxuXHRcdFx0XHRuID0gJHQuZmluZChcIi5jb3VudC10ZXh0XCIpLmF0dHIoXCJkYXRhLXN0b3BcIiksXHJcblx0XHRcdFx0ciA9IHBhcnNlSW50KCR0LmZpbmQoXCIuY291bnQtdGV4dFwiKS5hdHRyKFwiZGF0YS1zcGVlZFwiKSwgMTApO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRpZiAoISR0Lmhhc0NsYXNzKFwiY291bnRlZFwiKSkge1xyXG5cdFx0XHRcdCR0LmFkZENsYXNzKFwiY291bnRlZFwiKTtcclxuXHRcdFx0XHQkKHtcclxuXHRcdFx0XHRcdGNvdW50TnVtOiAkdC5maW5kKFwiLmNvdW50LXRleHRcIikudGV4dCgpXHJcblx0XHRcdFx0fSkuYW5pbWF0ZSh7XHJcblx0XHRcdFx0XHRjb3VudE51bTogblxyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiByLFxyXG5cdFx0XHRcdFx0ZWFzaW5nOiBcImxpbmVhclwiLFxyXG5cdFx0XHRcdFx0c3RlcDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCR0LmZpbmQoXCIuY291bnQtdGV4dFwiKS50ZXh0KE1hdGguZmxvb3IodGhpcy5jb3VudE51bSkpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0JHQuZmluZChcIi5jb3VudC10ZXh0XCIpLnRleHQodGhpcy5jb3VudE51bSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9LHthY2NZOiAwfSk7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdC8vUHJvZHVjdCBUYWJzXHJcblx0aWYoJCgnLnByb2plY3QtdGFiJykubGVuZ3RoKXtcclxuXHRcdCQoJy5wcm9qZWN0LXRhYiAucHJvZHVjdC10YWItYnRucyAucC10YWItYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHZhciB0YXJnZXQgPSAkKCQodGhpcykuYXR0cignZGF0YS10YWInKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoJCh0YXJnZXQpLmhhc0NsYXNzKCdhY3R2ZS10YWInKSl7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHQkKCcucHJvamVjdC10YWIgLnByb2R1Y3QtdGFiLWJ0bnMgLnAtdGFiLWJ0bicpLnJlbW92ZUNsYXNzKCdhY3RpdmUtYnRuJyk7XHJcblx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWJ0bicpO1xyXG5cdFx0XHRcdCQoJy5wcm9qZWN0LXRhYiAucC10YWJzLWNvbnRlbnQgLnAtdGFiJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS10YWInKTtcclxuXHRcdFx0XHQkKHRhcmdldCkuYWRkQ2xhc3MoJ2FjdGl2ZS10YWInKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdC8vSnF1ZXJ5IFNwaW5uZXIgLyBRdWFudGl0eSBTcGlubmVyXHJcblx0aWYoJCgnLnF1YW50aXR5LXNwaW5uZXInKS5sZW5ndGgpe1xyXG5cdFx0JChcImlucHV0LnF1YW50aXR5LXNwaW5uZXJcIikuVG91Y2hTcGluKHtcclxuXHRcdCAgdmVydGljYWxidXR0b25zOiB0cnVlXHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0Ly9Qcm9kdWN0IENhcm91c2VsXHJcblx0aWYgKCQoJy5wcm9qZWN0LWNhcm91c2VsJykubGVuZ3RoKSB7XHJcblx0XHQkKCcucHJvamVjdC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuXHRcdFx0bG9vcDp0cnVlLFxyXG5cdFx0XHRtYXJnaW46MzAsXHJcblx0XHRcdG5hdjp0cnVlLFxyXG5cdFx0XHRzbWFydFNwZWVkOiA3MDAsXHJcblx0XHRcdGF1dG9wbGF5OiA1MDAwLFxyXG5cdFx0XHRuYXZUZXh0OiBbICc8c3BhbiBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIj48L3NwYW4+JywgJzxzcGFuIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L3NwYW4+JyBdLFxyXG5cdFx0XHRyZXNwb25zaXZlOntcclxuXHRcdFx0XHQwOntcclxuXHRcdFx0XHRcdGl0ZW1zOjFcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDYwMDp7XHJcblx0XHRcdFx0XHRpdGVtczoyXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ4MDA6e1xyXG5cdFx0XHRcdFx0aXRlbXM6M1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTAyNDp7XHJcblx0XHRcdFx0XHRpdGVtczo0XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQxMjAwOntcclxuXHRcdFx0XHRcdGl0ZW1zOjVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9XHJcblx0XHR9KTsgICAgXHRcdFxyXG5cdH1cclxuXHRcclxuXHRcclxuXHQvL1Byb2R1Y3QgQ2Fyb3VzZWwgVHdvXHJcblx0aWYgKCQoJy5wcm9qZWN0LWNhcm91c2VsLXR3bycpLmxlbmd0aCkge1xyXG5cdFx0JCgnLnByb2plY3QtY2Fyb3VzZWwtdHdvJykub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0XHRsb29wOnRydWUsXHJcblx0XHRcdG1hcmdpbjozMCxcclxuXHRcdFx0bmF2OnRydWUsXHJcblx0XHRcdHNtYXJ0U3BlZWQ6IDcwMCxcclxuXHRcdFx0YXV0b3BsYXk6IDUwMDAsXHJcblx0XHRcdG5hdlRleHQ6IFsgJzxzcGFuIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvc3Bhbj4nLCAnPHNwYW4gY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvc3Bhbj4nIF0sXHJcblx0XHRcdHJlc3BvbnNpdmU6e1xyXG5cdFx0XHRcdDA6e1xyXG5cdFx0XHRcdFx0aXRlbXM6MVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NjAwOntcclxuXHRcdFx0XHRcdGl0ZW1zOjJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDgwMDp7XHJcblx0XHRcdFx0XHRpdGVtczozXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQxMDI0OntcclxuXHRcdFx0XHRcdGl0ZW1zOjRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDEyMDA6e1xyXG5cdFx0XHRcdFx0aXRlbXM6NFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH1cclxuXHRcdH0pOyAgICBcdFx0XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdC8vVGV4dCBSb3RhdG9yXHJcblx0IGlmKCQoJy5zbGlkZXItYmFubmVyLXNlY3Rpb24gLmNvbnRlbnQgaDIgc3BhbicpLmxlbmd0aCl7XHJcblx0XHQgIC8vICQoXCIuc2xpZGVyLWJhbm5lci1zZWN0aW9uIC5jb250ZW50IGgyIHNwYW5cIikudGV4dHJvdGF0b3Ioe1xyXG5cdFx0XHQvLyBhbmltYXRpb246IFwiZmxpcFwiLFxyXG5cdFx0XHQvLyBzcGVlZDogMzAwMFxyXG5cdFx0ICAvLyB9KTtcclxuXHQgfVxyXG5cdFxyXG5cdFxyXG5cdC8vVGFicyBCb3hcclxuXHRpZigkKCcudGFicy1ib3gnKS5sZW5ndGgpe1xyXG5cdFx0JCgnLnRhYnMtYm94IC50YWItYnV0dG9ucyAudGFiLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR2YXIgdGFyZ2V0ID0gJCgkKHRoaXMpLmF0dHIoJ2RhdGEtdGFiJykpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGFyZ2V0KS5pcygnOnZpc2libGUnKSl7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0YXJnZXQucGFyZW50cygnLnRhYnMtYm94JykuZmluZCgnLnRhYi1idXR0b25zJykuZmluZCgnLnRhYi1idG4nKS5yZW1vdmVDbGFzcygnYWN0aXZlLWJ0bicpO1xyXG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1idG4nKTtcclxuXHRcdFx0XHR0YXJnZXQucGFyZW50cygnLnRhYnMtYm94JykuZmluZCgnLnRhYnMtY29udGVudCcpLmZpbmQoJy50YWInKS5mYWRlT3V0KDApO1xyXG5cdFx0XHRcdHRhcmdldC5wYXJlbnRzKCcudGFicy1ib3gnKS5maW5kKCcudGFicy1jb250ZW50JykuZmluZCgnLnRhYicpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGFiJyk7XHJcblx0XHRcdFx0JCh0YXJnZXQpLmZhZGVJbigzMDApO1xyXG5cdFx0XHRcdCQodGFyZ2V0KS5hZGRDbGFzcygnYWN0aXZlLXRhYicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0Ly9BY2NvcmRpb24gQm94XHJcblx0aWYoJCgnLmFjY29yZGlvbi1ib3gnKS5sZW5ndGgpe1xyXG5cdFx0JChcIi5hY2NvcmRpb24tYm94XCIpLm9uKCdjbGljaycsICcuYWNjLWJ0bicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIG91dGVyQm94ID0gJCh0aGlzKS5wYXJlbnRzKCcuYWNjb3JkaW9uLWJveCcpO1xyXG5cdFx0XHR2YXIgdGFyZ2V0ID0gJCh0aGlzKS5wYXJlbnRzKCcuYWNjb3JkaW9uJyk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSE9PXRydWUpe1xyXG5cdFx0XHRcdCQob3V0ZXJCb3gpLmZpbmQoJy5hY2NvcmRpb24gLmFjYy1idG4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLm5leHQoJy5hY2MtY29udGVudCcpLmlzKCc6dmlzaWJsZScpKXtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdCQob3V0ZXJCb3gpLmNoaWxkcmVuKCcuYWNjb3JkaW9uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1ibG9jaycpO1xyXG5cdFx0XHRcdCQob3V0ZXJCb3gpLmZpbmQoJy5hY2NvcmRpb24nKS5jaGlsZHJlbignLmFjYy1jb250ZW50Jykuc2xpZGVVcCgzMDApO1xyXG5cdFx0XHRcdHRhcmdldC5hZGRDbGFzcygnYWN0aXZlLWJsb2NrJyk7XHJcblx0XHRcdFx0JCh0aGlzKS5uZXh0KCcuYWNjLWNvbnRlbnQnKS5zbGlkZURvd24oMzAwKTtcdFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcdFxyXG5cdH1cclxuXHRcclxuXHRcclxuXHQvL1R3byBJdGVtIENhcm91c2VsXHJcblx0aWYgKCQoJy50d28taXRlbS1jYXJvdXNlbCcpLmxlbmd0aCkge1xyXG5cdFx0JCgnLnR3by1pdGVtLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0XHRsb29wOnRydWUsXHJcblx0XHRcdG1hcmdpbjo5MCxcclxuXHRcdFx0bmF2OnRydWUsXHJcblx0XHRcdHNtYXJ0U3BlZWQ6IDcwMCxcclxuXHRcdFx0YXV0b3BsYXk6IDQwMDAsXHJcblx0XHRcdG5hdlRleHQ6IFsgJzxzcGFuIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvc3Bhbj4nLCAnPHNwYW4gY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvc3Bhbj4nIF0sXHJcblx0XHRcdHJlc3BvbnNpdmU6e1xyXG5cdFx0XHRcdDA6e1xyXG5cdFx0XHRcdFx0aXRlbXM6MVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NjAwOntcclxuXHRcdFx0XHRcdGl0ZW1zOjFcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDgwMDp7XHJcblx0XHRcdFx0XHRpdGVtczoxXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQxMDI0OntcclxuXHRcdFx0XHRcdGl0ZW1zOjJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDEyMDA6e1xyXG5cdFx0XHRcdFx0aXRlbXM6MlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7ICAgIFx0XHRcclxuXHR9XHJcblxyXG5cdFxyXG5cdC8vRm91ciBJdGVtIENhcm91c2VsXHJcblx0aWYgKCQoJy5mb3VyLWl0ZW0tY2Fyb3VzZWwnKS5sZW5ndGgpIHtcclxuXHRcdCQoJy5mb3VyLWl0ZW0tY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdGxvb3A6dHJ1ZSxcclxuXHRcdFx0bWFyZ2luOjMwLFxyXG5cdFx0XHRuYXY6dHJ1ZSxcclxuXHRcdFx0c21hcnRTcGVlZDogNzAwLFxyXG5cdFx0XHRhdXRvcGxheTogNDAwMCxcclxuXHRcdFx0bmF2VGV4dDogWyAnPHNwYW4gY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9zcGFuPicsICc8c3BhbiBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9zcGFuPicgXSxcclxuXHRcdFx0cmVzcG9uc2l2ZTp7XHJcblx0XHRcdFx0MDp7XHJcblx0XHRcdFx0XHRpdGVtczoxXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ2MDA6e1xyXG5cdFx0XHRcdFx0aXRlbXM6MlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ODAwOntcclxuXHRcdFx0XHRcdGl0ZW1zOjJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDEwMjQ6e1xyXG5cdFx0XHRcdFx0aXRlbXM6M1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTIwMDp7XHJcblx0XHRcdFx0XHRpdGVtczo0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTsgICAgXHRcdFxyXG5cdH1cclxuXHRcclxuXHRcclxuXHRcclxuXHQvL1NvcnRhYmxlIE1hc29uYXJ5IHdpdGggRmlsdGVyc1xyXG5cdGZ1bmN0aW9uIHNvcnRhYmxlTWFzb25yeSgpIHtcclxuXHRcdGlmKCQoJy5zb3J0YWJsZS1tYXNvbnJ5JykubGVuZ3RoKXtcclxuXHRcclxuXHRcdFx0dmFyIHdpbkRvdyA9ICQod2luZG93KTtcclxuXHRcdFx0Ly8gTmVlZGVkIHZhcmlhYmxlc1xyXG5cdFx0XHR2YXIgJGNvbnRhaW5lcj0kKCcuc29ydGFibGUtbWFzb25yeSAuaXRlbXMtY29udGFpbmVyJyk7XHJcblx0XHRcdHZhciAkZmlsdGVyPSQoJy5maWx0ZXItYnRucycpO1xyXG5cdFxyXG5cdFx0XHQkY29udGFpbmVyLmlzb3RvcGUoe1xyXG5cdFx0XHRcdGZpbHRlcjonKicsXHJcblx0XHRcdFx0IG1hc29ucnk6IHtcclxuXHRcdFx0XHRcdGNvbHVtbldpZHRoIDogJy5tYXNvbnJ5LWl0ZW0uY29sLWxnLTQnXHJcblx0XHRcdFx0IH0sXHJcblx0XHRcdFx0YW5pbWF0aW9uT3B0aW9uczp7XHJcblx0XHRcdFx0XHRkdXJhdGlvbjo1MDAsXHJcblx0XHRcdFx0XHRlYXNpbmc6J2xpbmVhcidcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcclxuXHRcdFx0Ly8gSXNvdG9wZSBGaWx0ZXIgXHJcblx0XHRcdCRmaWx0ZXIuZmluZCgnbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHZhciBzZWxlY3RvciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXInKTtcclxuXHRcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0JGNvbnRhaW5lci5pc290b3BlKHsgXHJcblx0XHRcdFx0XHRcdGZpbHRlclx0OiBzZWxlY3RvcixcclxuXHRcdFx0XHRcdFx0YW5pbWF0aW9uT3B0aW9uczoge1xyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA1MDAsXHJcblx0XHRcdFx0XHRcdFx0ZWFzaW5nXHQ6ICdsaW5lYXInLFxyXG5cdFx0XHRcdFx0XHRcdHF1ZXVlXHQ6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcblx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHJcblx0XHJcblx0XHRcdHdpbkRvdy5vbigncmVzaXplJywgZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR2YXIgc2VsZWN0b3IgPSAkZmlsdGVyLmZpbmQoJ2xpLmFjdGl2ZScpLmF0dHIoJ2RhdGEtZmlsdGVyJyk7XHJcblxyXG5cdFx0XHRcdCRjb250YWluZXIuaXNvdG9wZSh7IFxyXG5cdFx0XHRcdFx0ZmlsdGVyXHQ6IHNlbGVjdG9yLFxyXG5cdFx0XHRcdFx0YW5pbWF0aW9uT3B0aW9uczoge1xyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogNTAwLFxyXG5cdFx0XHRcdFx0XHRlYXNpbmdcdDogJ2xpbmVhcicsXHJcblx0XHRcdFx0XHRcdHF1ZXVlXHQ6IGZhbHNlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFxyXG5cdFxyXG5cdFx0XHR2YXIgZmlsdGVySXRlbUFcdD0gJCgnLmZpbHRlci1idG5zIGxpJyk7XHJcblx0XHJcblx0XHRcdGZpbHRlckl0ZW1BLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHRcdFx0XHRpZiAoICEkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHRcdGZpbHRlckl0ZW1BLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdCR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRzb3J0YWJsZU1hc29ucnkoKTtcclxuXHRcclxuXHRcclxuXHQvLyBTcG9uc29ycyBDYXJvdXNlbFxyXG5cdGlmICgkKCcuc3BvbnNvcnMtY2Fyb3VzZWwnKS5sZW5ndGgpIHtcclxuXHRcdCQoJy5zcG9uc29ycy1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuXHRcdFx0bG9vcDp0cnVlLFxyXG5cdFx0XHRtYXJnaW46MCxcclxuXHRcdFx0bmF2OnRydWUsXHJcblx0XHRcdHNtYXJ0U3BlZWQ6IDUwMCxcclxuXHRcdFx0YXV0b3BsYXk6IDQwMDAsXHJcblx0XHRcdG5hdlRleHQ6IFsgJzxzcGFuIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvc3Bhbj4nLCAnPHNwYW4gY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvc3Bhbj4nIF0sXHJcblx0XHRcdHJlc3BvbnNpdmU6e1xyXG5cdFx0XHRcdDA6e1xyXG5cdFx0XHRcdFx0aXRlbXM6MVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NDgwOntcclxuXHRcdFx0XHRcdGl0ZW1zOjJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDYwMDp7XHJcblx0XHRcdFx0XHRpdGVtczozXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ4MDA6e1xyXG5cdFx0XHRcdFx0aXRlbXM6NVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTAyNDp7XHJcblx0XHRcdFx0XHRpdGVtczo2XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTsgICAgXHRcdFxyXG5cdH1cclxuXHRcclxuXHRcclxuXHQvL0xpZ2h0Qm94IC8gRmFuY3lib3hcclxuXHRpZigkKCcubGlnaHRib3gtaW1hZ2UnKS5sZW5ndGgpIHtcclxuXHRcdCQoJy5saWdodGJveC1pbWFnZScpLmZhbmN5Ym94KHtcclxuXHRcdFx0b3BlbkVmZmVjdCAgOiAnZmFkZScsXHJcblx0XHRcdGNsb3NlRWZmZWN0IDogJ2ZhZGUnLFxyXG5cdFx0XHRoZWxwZXJzIDoge1xyXG5cdFx0XHRcdG1lZGlhIDoge31cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdC8vQ29udGFjdCBGb3JtIFZhbGlkYXRpb25cclxuXHRpZigkKCcjY29udGFjdC1mb3JtJykubGVuZ3RoKXtcclxuXHRcdCQoJyNjb250YWN0LWZvcm0nKS52YWxpZGF0ZSh7XHJcblx0XHRcdHJ1bGVzOiB7XHJcblx0XHRcdFx0Zmlyc3RuYW1lOiB7XHJcblx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZW1haWw6IHtcclxuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0ZW1haWw6IHRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBob25lOiB7XHJcblx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c3ViamVjdDoge1xyXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1lc3NhZ2U6IHtcclxuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0Ly9HYWxsZXJ5IEZpbHRlcnNcclxuXHRpZigkKCcuZmlsdGVyLWxpc3QnKS5sZW5ndGgpe1xyXG5cdFx0JCgnLmZpbHRlci1saXN0JykubWl4SXRVcCh7fSk7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdC8vIFNjcm9sbCB0byBhIFNwZWNpZmljIERpdlxyXG5cdGlmKCQoJy5zY3JvbGwtdG8tdGFyZ2V0JykubGVuZ3RoKXtcclxuXHRcdCQoXCIuc2Nyb2xsLXRvLXRhcmdldFwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHRhcmdldCA9ICQodGhpcykuYXR0cignZGF0YS10YXJnZXQnKTtcclxuXHRcdCAgIC8vIGFuaW1hdGVcclxuXHRcdCAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0ICAgc2Nyb2xsVG9wOiAkKHRhcmdldCkub2Zmc2V0KCkudG9wXHJcblx0XHRcdCB9LCAxNTAwKTtcclxuXHRcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHQvLyBFbGVtZW50cyBBbmltYXRpb25cclxuXHRpZigkKCcud293JykubGVuZ3RoKXtcclxuXHRcdHZhciB3b3cgPSBuZXcgV09XKFxyXG5cdFx0ICB7XHJcblx0XHRcdGJveENsYXNzOiAgICAgJ3dvdycsICAgICAgLy8gYW5pbWF0ZWQgZWxlbWVudCBjc3MgY2xhc3MgKGRlZmF1bHQgaXMgd293KVxyXG5cdFx0XHRhbmltYXRlQ2xhc3M6ICdhbmltYXRlZCcsIC8vIGFuaW1hdGlvbiBjc3MgY2xhc3MgKGRlZmF1bHQgaXMgYW5pbWF0ZWQpXHJcblx0XHRcdG9mZnNldDogICAgICAgMCwgICAgICAgICAgLy8gZGlzdGFuY2UgdG8gdGhlIGVsZW1lbnQgd2hlbiB0cmlnZ2VyaW5nIHRoZSBhbmltYXRpb24gKGRlZmF1bHQgaXMgMClcclxuXHRcdFx0bW9iaWxlOiAgICAgICBmYWxzZSwgICAgICAgLy8gdHJpZ2dlciBhbmltYXRpb25zIG9uIG1vYmlsZSBkZXZpY2VzIChkZWZhdWx0IGlzIHRydWUpXHJcblx0XHRcdGxpdmU6ICAgICAgICAgdHJ1ZSAgICAgICAvLyBhY3Qgb24gYXN5bmNocm9ub3VzbHkgbG9hZGVkIGNvbnRlbnQgKGRlZmF1bHQgaXMgdHJ1ZSlcclxuXHRcdCAgfVxyXG5cdFx0KTtcclxuXHRcdHdvdy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFdoZW4gZG9jdW1lbnQgaXMgU2Nyb2xsaWcsIGRvXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblx0XHJcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuXHRcdGhlYWRlclN0eWxlKCk7XHJcblx0fSk7XHJcblx0XHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFdoZW4gZG9jdW1lbnQgaXMgbG9hZGluZywgZG9cclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHRcclxuXHQkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuXHRcdGhhbmRsZVByZWxvYWRlcigpO1xyXG5cdFx0c29ydGFibGVNYXNvbnJ5KCk7XHJcblx0fSk7XHRcclxuXHJcbn0pKHdpbmRvdy5qUXVlcnkpOyIsInJlcXVpcmUoJy4vY3NzL2Jvb3RzdHJhcC5jc3MnKTtcclxucmVxdWlyZSgnLi9wbHVnaW5zL3Jldm9sdXRpb24vY3NzL3NldHRpbmdzLmNzcycpO1xyXG5yZXF1aXJlKCcuL3BsdWdpbnMvcmV2b2x1dGlvbi9jc3MvbGF5ZXJzLmNzcycpO1xyXG5yZXF1aXJlKCcuL3BsdWdpbnMvcmV2b2x1dGlvbi9jc3MvbmF2aWdhdGlvbi5jc3MnKTtcclxucmVxdWlyZSgnLi9jc3Mvc3R5bGUuY3NzJyk7XHJcbnJlcXVpcmUoJy4vY3NzL3N0eWxlLW92ZXJ3cml0ZS5jc3MnKTtcclxucmVxdWlyZSgnLi9jc3MvcmVzcG9uc2l2ZS5jc3MnKTtcclxuXHJcbmNvbnN0ICQgPSBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gJDtcclxuXHJcbnJlcXVpcmUoJ2pxdWVyeS11aScpO1xyXG5yZXF1aXJlKCcuL2pzL2pxdWVyeS5mYW5jeWJveC5qcycpO1xyXG5yZXF1aXJlKCcuL2pzL2Jvb3RzdHJhcC5taW4uanMnKTtcclxuXHJcbi8vIHJlcXVpcmUoJy4vcGx1Z2lucy9Ud2VlbkxpdGUubWluLmpzJyk7XHJcbi8vIHJlcXVpcmUoJy4vcGx1Z2lucy9DU1NQbHVnaW4ubWluLmpzJyk7XHJcblxyXG4vLyByZXF1aXJlKCcuL3BsdWdpbnMvcmV2b2x1dGlvbi9qcy9qcXVlcnkudGhlbWVwdW5jaC5yZXZvbHV0aW9uLm1pbi5qcycpO1xyXG4vLyByZXF1aXJlKCcuL3BsdWdpbnMvcmV2b2x1dGlvbi9qcy9qcXVlcnkudGhlbWVwdW5jaC50b29scy5taW4uanMnKTtcclxuXHJcbi8vIHJlcXVpcmUoJy4vcGx1Z2lucy9yZXZvbHV0aW9uL2pzL2V4dGVuc2lvbnMvcmV2b2x1dGlvbi5leHRlbnNpb24uYWN0aW9ucy5taW4uanMnKTtcclxuLy8gcmVxdWlyZSgnLi9wbHVnaW5zL3Jldm9sdXRpb24vanMvZXh0ZW5zaW9ucy9yZXZvbHV0aW9uLmV4dGVuc2lvbi5jYXJvdXNlbC5taW4uanMnKTtcclxuLy8gcmVxdWlyZSgnLi9wbHVnaW5zL3Jldm9sdXRpb24vanMvZXh0ZW5zaW9ucy9yZXZvbHV0aW9uLmV4dGVuc2lvbi5rZW5idXJuLm1pbi5qcycpO1xyXG4vLyByZXF1aXJlKCcuL3BsdWdpbnMvcmV2b2x1dGlvbi9qcy9leHRlbnNpb25zL3Jldm9sdXRpb24uZXh0ZW5zaW9uLmxheWVyYW5pbWF0aW9uLm1pbi5qcycpO1xyXG4vLyByZXF1aXJlKCcuL3BsdWdpbnMvcmV2b2x1dGlvbi9qcy9leHRlbnNpb25zL3Jldm9sdXRpb24uZXh0ZW5zaW9uLm1pZ3JhdGlvbi5taW4uanMnKTtcclxuLy8gcmVxdWlyZSgnLi9wbHVnaW5zL3Jldm9sdXRpb24vanMvZXh0ZW5zaW9ucy9yZXZvbHV0aW9uLmV4dGVuc2lvbi5uYXZpZ2F0aW9uLm1pbi5qcycpO1xyXG4vLyByZXF1aXJlKCcuL3BsdWdpbnMvcmV2b2x1dGlvbi9qcy9leHRlbnNpb25zL3Jldm9sdXRpb24uZXh0ZW5zaW9uLnBhcmFsbGF4Lm1pbi5qcycpO1xyXG4vLyByZXF1aXJlKCcuL3BsdWdpbnMvcmV2b2x1dGlvbi9qcy9leHRlbnNpb25zL3Jldm9sdXRpb24uZXh0ZW5zaW9uLnNsaWRlYW5pbXMubWluLmpzJyk7XHJcbi8vIHJlcXVpcmUoJy4vcGx1Z2lucy9yZXZvbHV0aW9uL2pzL2V4dGVuc2lvbnMvcmV2b2x1dGlvbi5leHRlbnNpb24udmlkZW8ubWluLmpzJyk7XHJcbi8vXHJcbi8vcmVxdWlyZSgnLi9qcy9tYWluLXNsaWRlci1zY3JpcHQuanMnKTtcclxucmVxdWlyZSgnLi9qcy9zY3JpcHQuanMnKTtcclxuLy9yZXF1aXJlKCcuL2pzL2lzb3RvcGUuanMnKTtcclxuLy9yZXF1aXJlKCcuL2pzL293bC5qcycpO1xyXG4vL3JlcXVpcmUoJy4vanMvbWl4aXR1cC5qcycpO1xyXG4vL3JlcXVpcmUoJy4vanMvd293LmpzJyk7XHJcbi8vcmVxdWlyZSgnLi9qcy9hcHBlYXIuanMnKTtcclxuXHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9