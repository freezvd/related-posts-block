/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/related-posts/block.js":
/*!*******************************************!*\
  !*** ./src/blocks/related-posts/block.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Block; });\n/* harmony import */ var _searchposts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchposts.js */ \"./src/blocks/related-posts/searchposts.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    Disabled = _wp$components.Disabled,\n    Placeholder = _wp$components.Placeholder,\n    Toolbar = _wp$components.Toolbar;\nvar _wp$editor = wp.editor,\n    BlockControls = _wp$editor.BlockControls,\n    ServerSideRender = _wp$editor.ServerSideRender;\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\n\n\nvar Block =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Block, _Component);\n\n  function Block() {\n    _classCallCheck(this, Block);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Block).apply(this, arguments));\n  }\n\n  _createClass(Block, [{\n    key: \"renderEditMode\",\n    value: function renderEditMode() {\n      var props = this.props;\n      var _this$props = this.props,\n          attributes = _this$props.attributes,\n          setAttributes = _this$props.setAttributes;\n\n      var onDone = function onDone() {\n        setAttributes({\n          editMode: false\n        });\n      };\n\n      return React.createElement(Placeholder, {\n        label: \"Choose the posts you want to display\"\n      }, React.createElement(_searchposts_js__WEBPACK_IMPORTED_MODULE_1__[\"SearchPostsControl\"], props), React.createElement(Button, {\n        isDefault: true,\n        onClick: onDone\n      }, \"Done\"));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props2 = this.props,\n          attributes = _this$props2.attributes,\n          setAttributes = _this$props2.setAttributes;\n      var editMode = attributes.editMode;\n      return React.createElement(Fragment, null, React.createElement(BlockControls, null, React.createElement(Toolbar, {\n        controls: [{\n          icon: 'edit',\n          title: 'Edit',\n          onClick: function onClick() {\n            return setAttributes({\n              editMode: !editMode\n            });\n          },\n          isActive: editMode\n        }]\n      })), editMode ? this.renderEditMode() : React.createElement(Disabled, null, React.createElement(ServerSideRender, {\n        block: \"my/related-posts\",\n        attributes: attributes\n      })));\n    }\n  }]);\n\n  return Block;\n}(Component);\n\n\n\n//# sourceURL=webpack:///./src/blocks/related-posts/block.js?");

/***/ }),

/***/ "./src/blocks/related-posts/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/related-posts/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block */ \"./src/blocks/related-posts/block.js\");\nvar registerBlockType = wp.blocks.registerBlockType;\n\nregisterBlockType('my/related-posts', {\n  title: 'Related Posts',\n  category: 'widgets',\n  icon: 'image-filter',\n  attributes: {\n    'editMode': {\n      type: 'boolean',\n      \"default\": true\n    },\n    'postIds': {\n      type: 'array',\n      \"default\": []\n    },\n    'postType': {\n      type: 'string',\n      \"default\": 'posts'\n    },\n    'updated': {\n      type: 'string',\n      \"default\": ''\n    }\n  },\n  edit: function edit(props) {\n    return React.createElement(_block__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props);\n  },\n  save: function save() {\n    // Rendering in PHP\n    return null;\n  }\n});\n\n//# sourceURL=webpack:///./src/blocks/related-posts/index.js?");

/***/ }),

/***/ "./src/blocks/related-posts/searchposts.js":
/*!*************************************************!*\
  !*** ./src/blocks/related-posts/searchposts.js ***!
  \*************************************************/
/*! exports provided: SearchPostsControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchPostsControl\", function() { return SearchPostsControl; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    MenuGroup = _wp$components.MenuGroup,\n    MenuItem = _wp$components.MenuItem,\n    SelectControl = _wp$components.SelectControl,\n    TextControl = _wp$components.TextControl;\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar SearchPostsControl =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(SearchPostsControl, _Component);\n\n  function SearchPostsControl(props) {\n    var _this;\n\n    _classCallCheck(this, SearchPostsControl);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchPostsControl).call(this, props));\n    _this.state = {\n      resultObjects: [],\n      resultButtons: []\n    };\n    _this.buildResultButtons = _this.buildResultButtons.bind(_assertThisInitialized(_this));\n    _this.changePostType = _this.changePostType.bind(_assertThisInitialized(_this));\n    _this.searchFor = _this.searchFor.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(SearchPostsControl, [{\n    key: \"changePostType\",\n    value: function changePostType(newType) {\n      // Clear postIds, update postType Attribute\n      var setAttributes = this.props.setAttributes;\n      setAttributes({\n        postType: newType\n      }); // Clear state and run a new search\n\n      this.setState({\n        resultObjects: [],\n        resultButtons: []\n      }, this.searchFor(newType, ''));\n    }\n  }, {\n    key: \"searchFor\",\n    value: function searchFor() {\n      var _this2 = this;\n\n      var searchPostType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n      var keyword = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      var postType = this.props.attributes.postType;\n      var finalPostType = postType; // If a post type was explicitly passed to the function, use that instead\n\n      if (searchPostType != '') {\n        finalPostType = searchPostType;\n      } // Make REST API call to get post objects - excluding current ID, but including the postType and keyword if present\n\n\n      var currentId = wp.data.select('core/editor').getCurrentPostId();\n      var path;\n\n      if (keyword != '') {\n        path = '/wp/v2/' + finalPostType + '?search=' + keyword + '&exclude=' + currentId;\n      } else {\n        path = '/wp/v2/' + finalPostType + '?exclude=' + currentId;\n      }\n\n      wp.apiFetch({\n        path: path\n      }).then(function (posts) {\n        _this2.setState({\n          resultObjects: posts\n        });\n      }).then(function () {\n        return _this2.buildResultButtons();\n      });\n    }\n  }, {\n    key: \"buildResultButtons\",\n    value: function buildResultButtons() {\n      var setAttributes = this.props.setAttributes;\n      var resultButtons = this.state.resultObjects.map(function (item, ind) {\n        var _this3 = this;\n\n        var isChecked = false; // Save the opposite value for onClick\n        // Must have default true, because if nothing is selected, it's false, and true is what it should change to\n\n        var toCheck = true;\n\n        if (isChecked == true) {\n          toCheck = false;\n        }\n\n        return React.createElement(MenuItem, {\n          id: item.id,\n          \"data-ischecked\": isChecked,\n          onClick: function onClick() {\n            return _this3.updateSelectedIds(parseInt(event.target.id), toCheck);\n          }\n        }, item.title.rendered);\n      }, this); // Save timestamp in milliseconds - this forces the setAttributes call for postIds to work\n\n      var timeNow = Date.now();\n      this.setState({\n        resultButtons: resultButtons\n      }, setAttributes({\n        updated: timeNow\n      }));\n    }\n  }, {\n    key: \"updateSelectedIds\",\n    value: function updateSelectedIds(id, val) {\n      var postIds = this.props.attributes.postIds;\n      var stateSelected = postIds; // Update copy of selectedIds\n\n      if (val == true) {\n        stateSelected.push(id);\n      } else {\n        var idIndex = stateSelected.indexOf(id);\n        stateSelected.splice(idIndex, 1);\n      } // Update copy of resultObjects\n\n\n      var posts = this.state.resultObjects;\n\n      for (var i = 0; i < posts.length; i++) {\n        // if this post ID is in attributes, set checked to true\n        posts[i].checked = false;\n\n        for (var j = 0; j < stateSelected.length; j++) {\n          if (posts[i].id === stateSelected[j]) {\n            posts[i].checked = true;\n            break;\n          }\n        }\n      } // Save resultObjects to state, and then rebuild result buttons\n\n\n      this.setState({\n        resultObjects: posts\n      }, function () {\n        this.buildResultButtons();\n      });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.getStartingData();\n    }\n  }, {\n    key: \"getStartingData\",\n    value: function getStartingData() {\n      this.searchFor('');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this4 = this;\n\n      var postType = this.props.attributes.postType;\n      var label = 'Search for ' + postType + ' to display';\n      return React.createElement(\"div\", {\n        className: \"search-posts-control\"\n      }, React.createElement(\"div\", {\n        className: \"posts-selected\"\n      }, React.createElement(\"h2\", null, \"Currently selected:\"), React.createElement(SelectControl, {\n        label: \"Post Type\",\n        value: postType,\n        options: [{\n          label: 'Post',\n          value: 'posts'\n        }, {\n          label: 'Page',\n          value: 'pages'\n        }],\n        onChange: function onChange(val) {\n          _this4.changePostType(val);\n        }\n      })), React.createElement(\"div\", {\n        className: \"posts-search\"\n      }, React.createElement(\"h2\", null, \"Add to selections:\"), React.createElement(TextControl, {\n        label: label,\n        type: \"search\",\n        onChange: function onChange(val) {\n          return _this4.searchFor('', val);\n        }\n      }), React.createElement(MenuGroup, {\n        label: \"Search Results\",\n        className: \"posts-list\"\n      }, this.state.resultButtons)));\n    }\n  }]);\n\n  return SearchPostsControl;\n}(Component);\n\n//# sourceURL=webpack:///./src/blocks/related-posts/searchposts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_related_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/related-posts */ \"./src/blocks/related-posts/index.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });