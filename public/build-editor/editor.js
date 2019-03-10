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
/******/ 		"editor": 0
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
/******/ 	__webpack_require__.p = "/build-editor/";
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
/******/ 	deferredModules.push(["./src/Admin/Resources/assets/js/editor.js","vendors~editor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Admin/Resources/assets/js/editor.js":
/*!*************************************************!*\
  !*** ./src/Admin/Resources/assets/js/editor.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

global.$ = global.jQuery = $;

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js"); // Import TinyMCE


var tinymce = __webpack_require__(/*! tinymce/tinymce */ "./node_modules/tinymce/tinymce.js"); //require('tinymce/themes/silver/theme');


__webpack_require__(/*! tinymce/plugins/paste */ "./node_modules/tinymce/plugins/paste/index.js");

__webpack_require__(/*! tinymce/plugins/link */ "./node_modules/tinymce/plugins/link/index.js");

__webpack_require__(/*! tinymce/plugins/advlist */ "./node_modules/tinymce/plugins/advlist/index.js");

__webpack_require__(/*! tinymce/plugins/autolink */ "./node_modules/tinymce/plugins/autolink/index.js");

__webpack_require__(/*! tinymce/plugins/fullpage */ "./node_modules/tinymce/plugins/fullpage/index.js");

__webpack_require__(/*! tinymce/plugins/visualblocks */ "./node_modules/tinymce/plugins/visualblocks/index.js");

__webpack_require__(/*! tinymce/plugins/searchreplace */ "./node_modules/tinymce/plugins/searchreplace/index.js");

__webpack_require__(/*! tinymce/plugins/code */ "./node_modules/tinymce/plugins/code/index.js");

__webpack_require__(/*! tinymce/plugins/fullscreen */ "./node_modules/tinymce/plugins/fullscreen/index.js");

__webpack_require__(/*! tinymce/plugins/pagebreak */ "./node_modules/tinymce/plugins/pagebreak/index.js");

__webpack_require__(/*! tinymce/plugins/media */ "./node_modules/tinymce/plugins/media/index.js");

__webpack_require__(/*! tinymce/plugins/table */ "./node_modules/tinymce/plugins/table/index.js");

__webpack_require__(/*! tinymce/plugins/contextmenu */ "./node_modules/tinymce/plugins/contextmenu/index.js");

__webpack_require__(/*! tinymce/plugins/paste */ "./node_modules/tinymce/plugins/paste/index.js");

__webpack_require__(/*! tinymce/plugins/help */ "./node_modules/tinymce/plugins/help/index.js");

__webpack_require__(/*! tinymce/plugins/lists */ "./node_modules/tinymce/plugins/lists/index.js");

__webpack_require__(/*! tinymce/plugins/image */ "./node_modules/tinymce/plugins/image/index.js");

__webpack_require__(/*! tinymce/plugins/imagetools */ "./node_modules/tinymce/plugins/imagetools/index.js");

__webpack_require__(/*! tinymce/plugins/charmap */ "./node_modules/tinymce/plugins/charmap/index.js");

__webpack_require__(/*! tinymce/plugins/print */ "./node_modules/tinymce/plugins/print/index.js");

__webpack_require__(/*! tinymce/plugins/preview */ "./node_modules/tinymce/plugins/preview/index.js");

__webpack_require__(/*! tinymce/plugins/anchor */ "./node_modules/tinymce/plugins/anchor/index.js");

__webpack_require__(/*! tinymce/plugins/fullpage */ "./node_modules/tinymce/plugins/fullpage/index.js");

__webpack_require__(/*! tinymce/plugins/insertdatetime */ "./node_modules/tinymce/plugins/insertdatetime/index.js");

__webpack_require__(/*! tinymce/plugins/wordcount */ "./node_modules/tinymce/plugins/wordcount/index.js");

__webpack_require__(/*! tinymce/plugins/template */ "./node_modules/tinymce/plugins/template/index.js");

var tinymceConfig = {
  selector: '#inline_edit_content',
  height: 600,
  menubar: false,
  inline: true,
  inline_styles: false,
  relative_urls: false,
  remove_script_host: true,
  plugins: ['advlist autolink lists link image imagetools charmap print preview anchor fullpage', 'searchreplace visualblocks code fullscreen pagebreak', 'insertdatetime media table paste code help wordcount template'],
  toolbar: 'insert | undo redo | styleselect template | bold italic forecolor backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat pagebreak | code visualblocks preview',
  content_css: tiny_content_css,
  table_default_attributes: {
    border: '0'
  },
  pagebreak_split_block: true,
  plugin_preview_width: 1000,
  link_class_list: [{
    title: 'Simple link',
    value: ''
  }, {
    title: 'Button link',
    value: 'btn btn-default'
  }, {
    title: 'Button link',
    value: 'btn btn-primary'
  }, {
    title: 'Button link',
    value: 'theme-btn btn-style-one'
  }, {
    title: 'Button link',
    value: 'theme-btn btn-style-two'
  }, {
    title: 'Button link',
    value: 'theme-btn btn-style-three'
  }],
  image_title: true,
  automatic_uploads: true,
  file_picker_types: 'image',
  file_picker_callback: function file_picker_callback(cb, value, meta) {
    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    input.onchange = function () {
      var file = this.files[0];
      var reader = new FileReader();

      reader.onload = function () {
        var id = 'blobid' + new Date().getTime();
        var blobCache = tinymce.activeEditor.editorUpload.blobCache;
        var base64 = reader.result.split(',')[1];
        var blobInfo = blobCache.create(id, file, base64);
        blobCache.add(blobInfo);
        cb(blobInfo.blobUri(), {
          title: file.name
        });
      };

      reader.readAsDataURL(file);
    };

    input.click();
  },
  images_upload_credentials: true,
  images_upload_handler: function images_upload_handler(blobInfo, success, failure) {
    var xhr, formData;
    xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open('POST', '/admin/upload/from/post');

    xhr.onload = function () {
      var json;

      if (xhr.status !== 200) {
        failure('HTTP Error: ' + xhr.status);
        return;
      }

      json = JSON.parse(xhr.responseText);

      if (!json || typeof json.location !== 'string') {
        failure('Invalid JSON: ' + xhr.responseText);
        return;
      }

      success(json.location);
    };

    formData = new FormData();

    if (_typeof(blobInfo.blob().name) !== undefined) {
      fileName = blobInfo.blob().name;
    } else {
      fileName = blobInfo.filename();
    }

    formData.append('file', blobInfo.blob(), fileName);
    xhr.send(formData);
  },
  powerpaste_word_import: 'clean',
  powerpaste_html_import: 'clean',
  link_list: function link_list(success) {
    var linkItems = [];
    $.getJSON('/admin/menu/sitemap/json', function (data) {
      success(data);
    });
  },
  style_formats: [{
    title: 'Headers',
    items: [{
      title: 'Header 1',
      format: 'h1'
    }, {
      title: 'Header 2',
      format: 'h2'
    }, {
      title: 'Header 3',
      format: 'h3'
    }, {
      title: 'Header 4',
      format: 'h4'
    }, {
      title: 'Header 5',
      format: 'h5'
    }, {
      title: 'Header 6',
      format: 'h6'
    }]
  }, {
    title: 'Inline',
    items: [{
      title: 'Bold',
      icon: 'bold',
      format: 'bold'
    }, {
      title: 'Italic',
      icon: 'italic',
      format: 'italic'
    }, {
      title: 'Underline',
      icon: 'underline',
      format: 'underline'
    }, {
      title: 'Strikethrough',
      icon: 'strikethrough',
      format: 'strikethrough'
    }, {
      title: 'Superscript',
      icon: 'superscript',
      format: 'superscript'
    }, {
      title: 'Subscript',
      icon: 'subscript',
      format: 'subscript'
    }, {
      title: 'Code',
      icon: 'code',
      format: 'code'
    }]
  }, {
    title: 'Blocks',
    items: [{
      title: 'Paragraph',
      format: 'p'
    }, {
      title: 'Blockquote',
      format: 'blockquote'
    }, {
      title: 'Div',
      format: 'div'
    }, {
      title: 'Pre',
      format: 'pre'
    }]
  }, {
    title: 'Alignment',
    items: [{
      title: 'Left',
      icon: 'alignleft',
      format: 'alignleft'
    }, {
      title: 'Center',
      icon: 'aligncenter',
      format: 'aligncenter'
    }, {
      title: 'Right',
      icon: 'alignright',
      format: 'alignright'
    }, {
      title: 'Justify',
      icon: 'alignjustify',
      format: 'alignjustify'
    }, {
      title: 'Image left',
      selector: 'img',
      icon: 'alignleft',
      styles: {
        'float': 'left',
        'margin': '0 10px 0 10px'
      }
    }, {
      title: 'Image right',
      selector: 'img',
      icon: 'alignright',
      styles: {
        'float': 'right',
        'margin': '0 0 10px 10px'
      }
    }]
  }],
  templates: '/admin/post/templates'
};
tinymce.init(tinymceConfig);
$(document).on('focusin', function (e) {
  if ($(e.target).closest(".mce-window, .moxman-window").length) {
    e.stopImmediatePropagation();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FkbWluL1Jlc291cmNlcy9hc3NldHMvanMvZWRpdG9yLmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZ2xvYmFsIiwialF1ZXJ5IiwidGlueW1jZSIsInRpbnltY2VDb25maWciLCJzZWxlY3RvciIsImhlaWdodCIsIm1lbnViYXIiLCJpbmxpbmUiLCJpbmxpbmVfc3R5bGVzIiwicmVsYXRpdmVfdXJscyIsInJlbW92ZV9zY3JpcHRfaG9zdCIsInBsdWdpbnMiLCJ0b29sYmFyIiwiY29udGVudF9jc3MiLCJ0aW55X2NvbnRlbnRfY3NzIiwidGFibGVfZGVmYXVsdF9hdHRyaWJ1dGVzIiwiYm9yZGVyIiwicGFnZWJyZWFrX3NwbGl0X2Jsb2NrIiwicGx1Z2luX3ByZXZpZXdfd2lkdGgiLCJsaW5rX2NsYXNzX2xpc3QiLCJ0aXRsZSIsInZhbHVlIiwiaW1hZ2VfdGl0bGUiLCJhdXRvbWF0aWNfdXBsb2FkcyIsImZpbGVfcGlja2VyX3R5cGVzIiwiZmlsZV9waWNrZXJfY2FsbGJhY2siLCJjYiIsIm1ldGEiLCJpbnB1dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIm9uY2hhbmdlIiwiZmlsZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImlkIiwiRGF0ZSIsImdldFRpbWUiLCJibG9iQ2FjaGUiLCJhY3RpdmVFZGl0b3IiLCJlZGl0b3JVcGxvYWQiLCJiYXNlNjQiLCJyZXN1bHQiLCJzcGxpdCIsImJsb2JJbmZvIiwiY3JlYXRlIiwiYWRkIiwiYmxvYlVyaSIsIm5hbWUiLCJyZWFkQXNEYXRhVVJMIiwiY2xpY2siLCJpbWFnZXNfdXBsb2FkX2NyZWRlbnRpYWxzIiwiaW1hZ2VzX3VwbG9hZF9oYW5kbGVyIiwic3VjY2VzcyIsImZhaWx1cmUiLCJ4aHIiLCJmb3JtRGF0YSIsIlhNTEh0dHBSZXF1ZXN0Iiwid2l0aENyZWRlbnRpYWxzIiwib3BlbiIsImpzb24iLCJzdGF0dXMiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJsb2NhdGlvbiIsIkZvcm1EYXRhIiwiYmxvYiIsInVuZGVmaW5lZCIsImZpbGVOYW1lIiwiZmlsZW5hbWUiLCJhcHBlbmQiLCJzZW5kIiwicG93ZXJwYXN0ZV93b3JkX2ltcG9ydCIsInBvd2VycGFzdGVfaHRtbF9pbXBvcnQiLCJsaW5rX2xpc3QiLCJsaW5rSXRlbXMiLCJnZXRKU09OIiwiZGF0YSIsInN0eWxlX2Zvcm1hdHMiLCJpdGVtcyIsImZvcm1hdCIsImljb24iLCJzdHlsZXMiLCJ0ZW1wbGF0ZXMiLCJpbml0Iiwib24iLCJlIiwidGFyZ2V0IiwiY2xvc2VzdCIsImxlbmd0aCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VB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NEYsQ0FBQyxDQUFDQyxNQUFILENBQUQsQ0FBWUMsT0FBWixDQUFvQiw2QkFBcEIsRUFBbURDLE1BQXZELEVBQStEO0FBQzNESCxLQUFDLENBQUNJLHdCQUFGO0FBQ0g7QUFDSixDQUpELEUiLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJlZGl0b3JcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC1lZGl0b3IvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL0FkbWluL1Jlc291cmNlcy9hc3NldHMvanMvZWRpdG9yLmpzXCIsXCJ2ZW5kb3JzfmVkaXRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxyXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbmdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG5cclxuLy8gSW1wb3J0IFRpbnlNQ0VcclxudmFyIHRpbnltY2UgPSByZXF1aXJlKCd0aW55bWNlL3RpbnltY2UnKTtcclxuLy9yZXF1aXJlKCd0aW55bWNlL3RoZW1lcy9zaWx2ZXIvdGhlbWUnKTtcclxucmVxdWlyZSgndGlueW1jZS9wbHVnaW5zL3Bhc3RlJyk7XHJcbnJlcXVpcmUoJ3RpbnltY2UvcGx1Z2lucy9saW5rJyk7XHJcbnJlcXVpcmUoJ3RpbnltY2UvcGx1Z2lucy9hZHZsaXN0Jyk7XHJcbnJlcXVpcmUoJ3RpbnltY2UvcGx1Z2lucy9hdXRvbGluaycpO1xyXG5yZXF1aXJlKCd0aW55bWNlL3BsdWdpbnMvZnVsbHBhZ2UnKTtcclxucmVxdWlyZSgndGlueW1jZS9wbHVnaW5zL3Zpc3VhbGJsb2NrcycpO1xyXG5yZXF1aXJlKCd0aW55bWNlL3BsdWdpbnMvc2VhcmNocmVwbGFjZScpO1xyXG5yZXF1aXJlKCd0aW55bWNlL3BsdWdpbnMvY29kZScpO1xyXG5yZXF1aXJlKCd0aW55bWNlL3BsdWdpbnMvZnVsbHNjcmVlbicpO1xyXG5yZXF1aXJlKCd0aW55bWNlL3BsdWdpbnMvcGFnZWJyZWFrJyk7XHJcbnJlcXVpcmUoJ3RpbnltY2UvcGx1Z2lucy9tZWRpYScpO1xyXG5yZXF1aXJlKCd0aW55bWNlL3BsdWdpbnMvdGFibGUnKTtcclxucmVxdWlyZSgndGlueW1jZS9wbHVnaW5zL2NvbnRleHRtZW51Jyk7XHJcbnJlcXVpcmUoJ3RpbnltY2UvcGx1Z2lucy9wYXN0ZScpO1xyXG5yZXF1aXJlKCd0aW55bWNlL3BsdWdpbnMvaGVscCcpO1xyXG5yZXF1aXJlKCd0aW55bWNlL3BsdWdpbnMvbGlzdHMnKTtcclxucmVxdWlyZSgndGlueW1jZS9wbHVnaW5zL2ltYWdlJyk7XHJcbnJlcXVpcmUoJ3RpbnltY2UvcGx1Z2lucy9pbWFnZXRvb2xzJyk7XHJcbnJlcXVpcmUoJ3RpbnltY2UvcGx1Z2lucy9jaGFybWFwJyk7XHJcbnJlcXVpcmUoJ3RpbnltY2UvcGx1Z2lucy9wcmludCcpO1xyXG5yZXF1aXJlKCd0aW55bWNlL3BsdWdpbnMvcHJldmlldycpO1xyXG5yZXF1aXJlKCd0aW55bWNlL3BsdWdpbnMvYW5jaG9yJyk7XHJcbnJlcXVpcmUoJ3RpbnltY2UvcGx1Z2lucy9mdWxscGFnZScpO1xyXG5yZXF1aXJlKCd0aW55bWNlL3BsdWdpbnMvaW5zZXJ0ZGF0ZXRpbWUnKTtcclxucmVxdWlyZSgndGlueW1jZS9wbHVnaW5zL3dvcmRjb3VudCcpO1xyXG5yZXF1aXJlKCd0aW55bWNlL3BsdWdpbnMvdGVtcGxhdGUnKTtcclxuXHJcbnZhciB0aW55bWNlQ29uZmlnID0ge1xyXG4gICAgc2VsZWN0b3I6ICcjaW5saW5lX2VkaXRfY29udGVudCcsXHJcbiAgICBoZWlnaHQ6IDYwMCxcclxuICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgaW5saW5lOiB0cnVlLFxyXG4gICAgaW5saW5lX3N0eWxlcyA6IGZhbHNlLFxyXG4gICAgcmVsYXRpdmVfdXJscyA6IGZhbHNlLFxyXG4gICAgcmVtb3ZlX3NjcmlwdF9ob3N0IDogdHJ1ZSxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAnYWR2bGlzdCBhdXRvbGluayBsaXN0cyBsaW5rIGltYWdlIGltYWdldG9vbHMgY2hhcm1hcCBwcmludCBwcmV2aWV3IGFuY2hvciBmdWxscGFnZScsXHJcbiAgICAgICAgJ3NlYXJjaHJlcGxhY2UgdmlzdWFsYmxvY2tzIGNvZGUgZnVsbHNjcmVlbiBwYWdlYnJlYWsnLFxyXG4gICAgICAgICdpbnNlcnRkYXRldGltZSBtZWRpYSB0YWJsZSBwYXN0ZSBjb2RlIGhlbHAgd29yZGNvdW50IHRlbXBsYXRlJ1xyXG4gICAgXSxcclxuICAgIHRvb2xiYXI6ICdpbnNlcnQgfCB1bmRvIHJlZG8gfCBzdHlsZXNlbGVjdCB0ZW1wbGF0ZSB8IGJvbGQgaXRhbGljIGZvcmVjb2xvciBiYWNrY29sb3IgIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgYnVsbGlzdCBudW1saXN0IG91dGRlbnQgaW5kZW50IHwgcmVtb3ZlZm9ybWF0IHBhZ2VicmVhayB8IGNvZGUgdmlzdWFsYmxvY2tzIHByZXZpZXcnLFxyXG4gICAgY29udGVudF9jc3M6IHRpbnlfY29udGVudF9jc3MsXHJcbiAgICB0YWJsZV9kZWZhdWx0X2F0dHJpYnV0ZXM6IHtcclxuICAgICAgICBib3JkZXI6ICcwJ1xyXG4gICAgfSxcclxuICAgIHBhZ2VicmVha19zcGxpdF9ibG9jazogdHJ1ZSxcclxuICAgIHBsdWdpbl9wcmV2aWV3X3dpZHRoOiAxMDAwLFxyXG4gICAgbGlua19jbGFzc19saXN0OiBbXHJcbiAgICAgICAge3RpdGxlOiAnU2ltcGxlIGxpbmsnLCB2YWx1ZTogJyd9LFxyXG4gICAgICAgIHt0aXRsZTogJ0J1dHRvbiBsaW5rJywgdmFsdWU6ICdidG4gYnRuLWRlZmF1bHQnfSxcclxuICAgICAgICB7dGl0bGU6ICdCdXR0b24gbGluaycsIHZhbHVlOiAnYnRuIGJ0bi1wcmltYXJ5J30sXHJcbiAgICAgICAge3RpdGxlOiAnQnV0dG9uIGxpbmsnLCB2YWx1ZTogJ3RoZW1lLWJ0biBidG4tc3R5bGUtb25lJ30sXHJcbiAgICAgICAge3RpdGxlOiAnQnV0dG9uIGxpbmsnLCB2YWx1ZTogJ3RoZW1lLWJ0biBidG4tc3R5bGUtdHdvJ30sXHJcbiAgICAgICAge3RpdGxlOiAnQnV0dG9uIGxpbmsnLCB2YWx1ZTogJ3RoZW1lLWJ0biBidG4tc3R5bGUtdGhyZWUnfSxcclxuICAgIF0sXHJcbiAgICBpbWFnZV90aXRsZTogdHJ1ZSxcclxuICAgIGF1dG9tYXRpY191cGxvYWRzOiB0cnVlLFxyXG4gICAgZmlsZV9waWNrZXJfdHlwZXM6ICdpbWFnZScsXHJcbiAgICBmaWxlX3BpY2tlcl9jYWxsYmFjazogZnVuY3Rpb24gKGNiLCB2YWx1ZSwgbWV0YSkge1xyXG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKTtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FjY2VwdCcsICdpbWFnZS8qJyk7XHJcbiAgICAgICAgaW5wdXQub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlc1swXTtcclxuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSAnYmxvYmlkJyArIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmxvYkNhY2hlID0gIHRpbnltY2UuYWN0aXZlRWRpdG9yLmVkaXRvclVwbG9hZC5ibG9iQ2FjaGU7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzZTY0ID0gcmVhZGVyLnJlc3VsdC5zcGxpdCgnLCcpWzFdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2JJbmZvID0gYmxvYkNhY2hlLmNyZWF0ZShpZCwgZmlsZSwgYmFzZTY0KTtcclxuICAgICAgICAgICAgICAgIGJsb2JDYWNoZS5hZGQoYmxvYkluZm8pO1xyXG4gICAgICAgICAgICAgICAgY2IoYmxvYkluZm8uYmxvYlVyaSgpLCB7IHRpdGxlOiBmaWxlLm5hbWUgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW5wdXQuY2xpY2soKTtcclxuICAgIH0sXHJcbiAgICBpbWFnZXNfdXBsb2FkX2NyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgaW1hZ2VzX3VwbG9hZF9oYW5kbGVyOiBmdW5jdGlvbiAoYmxvYkluZm8sIHN1Y2Nlc3MsIGZhaWx1cmUpIHtcclxuICAgICAgICB2YXIgeGhyLCBmb3JtRGF0YTtcclxuICAgICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XHJcbiAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCAnL2FkbWluL3VwbG9hZC9mcm9tL3Bvc3QnKTtcclxuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIganNvbjtcclxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgZmFpbHVyZSgnSFRUUCBFcnJvcjogJyArIHhoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICBpZiAoIWpzb24gfHwgdHlwZW9mIGpzb24ubG9jYXRpb24gIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBmYWlsdXJlKCdJbnZhbGlkIEpTT046ICcgKyB4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdWNjZXNzKGpzb24ubG9jYXRpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZihibG9iSW5mby5ibG9iKCkubmFtZSkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmaWxlTmFtZSA9IGJsb2JJbmZvLmJsb2IoKS5uYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbGVOYW1lID0gYmxvYkluZm8uZmlsZW5hbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgYmxvYkluZm8uYmxvYigpLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xyXG4gICAgfSxcclxuICAgIHBvd2VycGFzdGVfd29yZF9pbXBvcnQ6ICdjbGVhbicsXHJcbiAgICBwb3dlcnBhc3RlX2h0bWxfaW1wb3J0OiAnY2xlYW4nLFxyXG4gICAgbGlua19saXN0OiBmdW5jdGlvbiAoc3VjY2Vzcykge1xyXG4gICAgICAgIHZhciBsaW5rSXRlbXMgPSBbXTtcclxuICAgICAgICAkLmdldEpTT04oJy9hZG1pbi9tZW51L3NpdGVtYXAvanNvbicsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc3R5bGVfZm9ybWF0czogW1xyXG4gICAgICAgIHt0aXRsZTogJ0hlYWRlcnMnLCBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnSGVhZGVyIDEnLCBmb3JtYXQ6ICdoMSd9LFxyXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnSGVhZGVyIDInLCBmb3JtYXQ6ICdoMid9LFxyXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnSGVhZGVyIDMnLCBmb3JtYXQ6ICdoMyd9LFxyXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnSGVhZGVyIDQnLCBmb3JtYXQ6ICdoNCd9LFxyXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnSGVhZGVyIDUnLCBmb3JtYXQ6ICdoNSd9LFxyXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnSGVhZGVyIDYnLCBmb3JtYXQ6ICdoNid9XHJcbiAgICAgICAgICAgIF19LFxyXG4gICAgICAgIHt0aXRsZTogJ0lubGluZScsIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdCb2xkJywgaWNvbjogJ2JvbGQnLCBmb3JtYXQ6ICdib2xkJ30sXHJcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdJdGFsaWMnLCBpY29uOiAnaXRhbGljJywgZm9ybWF0OiAnaXRhbGljJ30sXHJcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdVbmRlcmxpbmUnLCBpY29uOiAndW5kZXJsaW5lJywgZm9ybWF0OiAndW5kZXJsaW5lJ30sXHJcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdTdHJpa2V0aHJvdWdoJywgaWNvbjogJ3N0cmlrZXRocm91Z2gnLCBmb3JtYXQ6ICdzdHJpa2V0aHJvdWdoJ30sXHJcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdTdXBlcnNjcmlwdCcsIGljb246ICdzdXBlcnNjcmlwdCcsIGZvcm1hdDogJ3N1cGVyc2NyaXB0J30sXHJcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdTdWJzY3JpcHQnLCBpY29uOiAnc3Vic2NyaXB0JywgZm9ybWF0OiAnc3Vic2NyaXB0J30sXHJcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdDb2RlJywgaWNvbjogJ2NvZGUnLCBmb3JtYXQ6ICdjb2RlJ31cclxuICAgICAgICAgICAgXX0sXHJcbiAgICAgICAge3RpdGxlOiAnQmxvY2tzJywgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ1BhcmFncmFwaCcsIGZvcm1hdDogJ3AnfSxcclxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ0Jsb2NrcXVvdGUnLCBmb3JtYXQ6ICdibG9ja3F1b3RlJ30sXHJcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdEaXYnLCBmb3JtYXQ6ICdkaXYnfSxcclxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ1ByZScsIGZvcm1hdDogJ3ByZSd9LFxyXG4gICAgICAgICAgICBdfSxcclxuICAgICAgICB7dGl0bGU6ICdBbGlnbm1lbnQnLCBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnTGVmdCcsIGljb246ICdhbGlnbmxlZnQnLCBmb3JtYXQ6ICdhbGlnbmxlZnQnfSxcclxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ0NlbnRlcicsIGljb246ICdhbGlnbmNlbnRlcicsIGZvcm1hdDogJ2FsaWduY2VudGVyJ30sXHJcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdSaWdodCcsIGljb246ICdhbGlnbnJpZ2h0JywgZm9ybWF0OiAnYWxpZ25yaWdodCd9LFxyXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnSnVzdGlmeScsIGljb246ICdhbGlnbmp1c3RpZnknLCBmb3JtYXQ6ICdhbGlnbmp1c3RpZnknfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0ltYWdlIGxlZnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW1nJywgaWNvbjogJ2FsaWdubGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiB7J2Zsb2F0JzogJ2xlZnQnLCAnbWFyZ2luJzogJzAgMTBweCAwIDEwcHgnfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0ltYWdlIHJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2ltZycsIGljb246ICdhbGlnbnJpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHsnZmxvYXQnOiAncmlnaHQnLCAnbWFyZ2luJzogJzAgMCAxMHB4IDEwcHgnfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdfVxyXG4gICAgXSxcclxuICAgIHRlbXBsYXRlczogJy9hZG1pbi9wb3N0L3RlbXBsYXRlcydcclxufTtcclxuXHJcbnRpbnltY2UuaW5pdCh0aW55bWNlQ29uZmlnKTtcclxuJChkb2N1bWVudCkub24oJ2ZvY3VzaW4nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoXCIubWNlLXdpbmRvdywgLm1veG1hbi13aW5kb3dcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=