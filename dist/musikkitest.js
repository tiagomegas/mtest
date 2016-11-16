webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(31);
	
	var _router = __webpack_require__(164);
	
	var _router2 = _interopRequireDefault(_router);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rootElement = document.getElementById('musikkiTest');
	
	(0, _reactDom.render)(_router2.default, rootElement);

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(165);
	
	var _reactRedux = __webpack_require__(221);
	
	var _redux = __webpack_require__(228);
	
	var _reducers = __webpack_require__(249);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _reactRouterRedux = __webpack_require__(321);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import { App } from './components/App/App'
	
	// Top-level components
	
	
	// Store imports and initializations
	var App = __webpack_require__(326);
	var LoginPage = __webpack_require__(332);
	var MainPage = __webpack_require__(336);
	var NotFound = __webpack_require__(352);
	
	// Sync dispatched route actions to the history
	var reduxRouterMiddleware = (0, _reactRouterRedux.routerMiddleware)(_reactRouter.browserHistory);
	var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(reduxRouterMiddleware));
	
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);
	
	// -----------------------------------------------------------------------------
	
	//
	var router = _react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: history },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: App },
	      _react2.default.createElement(_reactRouter.IndexRoute, { component: MainPage }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'login', component: LoginPage })
	    )
	  )
	);
	module.exports = history;
	module.exports = router;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.RouterContext = exports.createRoutes = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;
	
	var _RouteUtils = __webpack_require__(166);
	
	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});
	
	var _PropTypes = __webpack_require__(167);
	
	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes.routerShape;
	  }
	});
	
	var _PatternUtils = __webpack_require__(168);
	
	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});
	
	var _Router2 = __webpack_require__(170);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _Link2 = __webpack_require__(186);
	
	var _Link3 = _interopRequireDefault(_Link2);
	
	var _IndexLink2 = __webpack_require__(187);
	
	var _IndexLink3 = _interopRequireDefault(_IndexLink2);
	
	var _withRouter2 = __webpack_require__(188);
	
	var _withRouter3 = _interopRequireDefault(_withRouter2);
	
	var _IndexRedirect2 = __webpack_require__(190);
	
	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);
	
	var _IndexRoute2 = __webpack_require__(192);
	
	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);
	
	var _Redirect2 = __webpack_require__(191);
	
	var _Redirect3 = _interopRequireDefault(_Redirect2);
	
	var _Route2 = __webpack_require__(193);
	
	var _Route3 = _interopRequireDefault(_Route2);
	
	var _RouterContext2 = __webpack_require__(182);
	
	var _RouterContext3 = _interopRequireDefault(_RouterContext2);
	
	var _match2 = __webpack_require__(194);
	
	var _match3 = _interopRequireDefault(_match2);
	
	var _useRouterHistory2 = __webpack_require__(208);
	
	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);
	
	var _applyRouterMiddleware2 = __webpack_require__(209);
	
	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);
	
	var _browserHistory2 = __webpack_require__(210);
	
	var _browserHistory3 = _interopRequireDefault(_browserHistory2);
	
	var _hashHistory2 = __webpack_require__(218);
	
	var _hashHistory3 = _interopRequireDefault(_hashHistory2);
	
	var _createMemoryHistory2 = __webpack_require__(196);
	
	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Router = _Router3.default; /* components */
	
	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;
	
	/* components (configuration) */
	
	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;
	
	/* utils */
	
	exports.RouterContext = _RouterContext3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;
	
	/* histories */
	
	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}
	
	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}
	
	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}
	
	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);
	
	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);
	
	    if (childRoutes.length) route.childRoutes = childRoutes;
	
	    delete route.children;
	  }
	
	  return route;
	}
	
	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];
	
	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);
	
	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });
	
	  return routes;
	}
	
	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }
	
	  return routes;
	}

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.locationShape = exports.routerShape = undefined;
	
	var _react = __webpack_require__(2);
	
	var func = _react.PropTypes.func,
	    object = _react.PropTypes.object,
	    shape = _react.PropTypes.shape,
	    string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});
	
	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;
	
	var _invariant = __webpack_require__(169);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}
	
	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];
	
	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }
	
	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }
	
	    tokens.push(match[0]);
	
	    lastIndex = matcher.lastIndex;
	  }
	
	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }
	
	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}
	
	var CompiledPatternsCache = Object.create(null);
	
	function compilePattern(pattern) {
	  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);
	
	  return CompiledPatternsCache[pattern];
	}
	
	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }
	
	  var _compilePattern2 = compilePattern(pattern),
	      regexpSource = _compilePattern2.regexpSource,
	      paramNames = _compilePattern2.paramNames,
	      tokens = _compilePattern2.tokens;
	
	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }
	
	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }
	
	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }
	
	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);
	
	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }
	
	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }
	
	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}
	
	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}
	
	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }
	
	  var paramNames = match.paramNames,
	      paramValues = match.paramValues;
	
	  var params = {};
	
	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });
	
	  return params;
	}
	
	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};
	
	  var _compilePattern3 = compilePattern(pattern),
	      tokens = _compilePattern3.tokens;
	
	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0,
	      parenHistory = [];
	
	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];
	
	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;
	
	      !(paramValue != null || parenCount > 0) ?  false ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;
	
	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenHistory[parenCount] = '';
	      parenCount += 1;
	    } else if (token === ')') {
	      var parenText = parenHistory.pop();
	      parenCount -= 1;
	
	      if (parenCount) parenHistory[parenCount - 1] += parenText;else pathname += parenText;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];
	
	      !(paramValue != null || parenCount > 0) ?  false ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;
	
	      if (paramValue == null) {
	        if (parenCount) {
	          parenHistory[parenCount - 1] = '';
	
	          var curTokenIdx = tokens.indexOf(token);
	          var tokensSubset = tokens.slice(curTokenIdx, tokens.length);
	          var nextParenIdx = -1;
	
	          for (var _i = 0; _i < tokensSubset.length; _i++) {
	            if (tokensSubset[_i] == ')') {
	              nextParenIdx = _i;
	              break;
	            }
	          }
	
	          !(nextParenIdx > 0) ?  false ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren at segment "%s"', pattern, tokensSubset.join('')) : (0, _invariant2.default)(false) : void 0;
	
	          // jump to ending paren
	          i = curTokenIdx + nextParenIdx - 1;
	        }
	      } else if (parenCount) parenHistory[parenCount - 1] += encodeURIComponent(paramValue);else pathname += encodeURIComponent(paramValue);
	    } else {
	      if (parenCount) parenHistory[parenCount - 1] += token;else pathname += token;
	    }
	  }
	
	  !(parenCount <= 0) ?  false ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren', pattern) : (0, _invariant2.default)(false) : void 0;
	
	  return pathname.replace(/\/+/g, '/');
	}

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _invariant = __webpack_require__(169);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createTransitionManager2 = __webpack_require__(171);
	
	var _createTransitionManager3 = _interopRequireDefault(_createTransitionManager2);
	
	var _InternalPropTypes = __webpack_require__(181);
	
	var _RouterContext = __webpack_require__(182);
	
	var _RouterContext2 = _interopRequireDefault(_RouterContext);
	
	var _RouteUtils = __webpack_require__(166);
	
	var _RouterUtils = __webpack_require__(185);
	
	var _routerWarning = __webpack_require__(172);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _React$PropTypes = _react2.default.PropTypes,
	    func = _React$PropTypes.func,
	    object = _React$PropTypes.object;
	
	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */
	
	var Router = _react2.default.createClass({
	  displayName: 'Router',
	
	
	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,
	
	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  createRouterObject: function createRouterObject(state) {
	    var matchContext = this.props.matchContext;
	
	    if (matchContext) {
	      return matchContext.router;
	    }
	
	    var history = this.props.history;
	
	    return (0, _RouterUtils.createRouterObject)(history, this.transitionManager, state);
	  },
	  createTransitionManager: function createTransitionManager() {
	    var matchContext = this.props.matchContext;
	
	    if (matchContext) {
	      return matchContext.transitionManager;
	    }
	
	    var history = this.props.history;
	    var _props = this.props,
	        routes = _props.routes,
	        children = _props.children;
	
	
	    !history.getCurrentLocation ?  false ? (0, _invariant2.default)(false, 'You have provided a history object created with history v2.x or ' + 'earlier. This version of React Router is only compatible with v3 ' + 'history objects. Please upgrade to history v3.x.') : (0, _invariant2.default)(false) : void 0;
	
	    return (0, _createTransitionManager3.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;
	
	    this.transitionManager = this.createTransitionManager();
	    this.router = this.createRouterObject(this.state);
	
	    this._unlisten = this.transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        // Keep the identity of this.router because of a caveat in ContextUtils:
	        // they only work if the object identity is preserved.
	        (0, _RouterUtils.assignRouterState)(_this.router, state);
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	  },
	
	
	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	     false ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;
	
	     false ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state,
	        location = _state.location,
	        routes = _state.routes,
	        params = _state.params,
	        components = _state.components;
	
	    var _props2 = this.props,
	        createElement = _props2.createElement,
	        render = _props2.render,
	        props = _objectWithoutProperties(_props2, ['createElement', 'render']);
	
	    if (location == null) return null; // Async match
	
	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });
	
	    return render(_extends({}, props, {
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});
	
	exports.default = Router;
	module.exports = exports['default'];

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = createTransitionManager;
	
	var _routerWarning = __webpack_require__(172);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _computeChangedRoutes2 = __webpack_require__(174);
	
	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);
	
	var _TransitionUtils = __webpack_require__(175);
	
	var _isActive2 = __webpack_require__(177);
	
	var _isActive3 = _interopRequireDefault(_isActive2);
	
	var _getComponents = __webpack_require__(178);
	
	var _getComponents2 = _interopRequireDefault(_getComponents);
	
	var _matchRoutes = __webpack_require__(180);
	
	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}
	
	function createTransitionManager(history, routes) {
	  var state = {};
	
	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location, indexOnly) {
	    location = history.createLocation(location);
	
	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }
	
	  var partialNextState = void 0;
	
	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }
	
	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState),
	        leaveRoutes = _computeChangedRoutes.leaveRoutes,
	        changeRoutes = _computeChangedRoutes.changeRoutes,
	        enterRoutes = _computeChangedRoutes.enterRoutes;
	
	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);
	
	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);
	
	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);
	
	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });
	
	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);
	
	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }
	
	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, redirectInfo);
	    }
	  }
	
	  var RouteGuid = 1;
	
	  function getRouteID(route) {
	    var create = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }
	
	  var RouteHooks = Object.create(null);
	
	  function getRouteHooksForRoutes(routes) {
	    return routes.map(function (route) {
	      return RouteHooks[getRouteID(route)];
	    }).filter(function (hook) {
	      return hook;
	    });
	  }
	
	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }
	
	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });
	
	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);
	
	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }
	
	      callback(result);
	    });
	  }
	
	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);
	
	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }
	
	      return message;
	    }
	  }
	
	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;
	
	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route);
	    if (!routeID) {
	      return;
	    }
	
	    delete RouteHooks[routeID];
	
	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }
	
	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }
	
	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and can return either a prompt message (string) to show the user,
	   * to make sure they want to leave the page; or `false`, to prevent the transition.
	   * Any other return value will have no effect.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
	    var routeID = getRouteID(route, true);
	
	    RouteHooks[routeID] = hook;
	
	    if (thereWereNoRouteHooks) {
	      // setup transition & beforeunload hooks
	      unlistenBefore = history.listenBefore(transitionHook);
	
	      if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	    }
	
	    return function () {
	      removeListenBeforeHooksForRoute(route);
	    };
	  }
	
	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    function historyListener(location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.replace(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	             false ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    }
	
	    // TODO: Only use a single history listener. Otherwise we'll end up with
	    // multiple concurrent calls to match.
	
	    // Set up the history listener first in case the initial match redirects.
	    var unsubscribe = history.listen(historyListener);
	
	    if (state.location) {
	      // Picking up on a matchContext.
	      listener(null, state);
	    } else {
	      historyListener(history.getCurrentLocation());
	    }
	
	    return unsubscribe;
	  }
	
	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;
	
	var _warning = __webpack_require__(173);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var warned = {};
	
	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }
	
	    warned[message] = true;
	  }
	
	  message = '[react-router] ' + message;
	
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	
	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}
	
	function _resetWarned() {
	  warned = {};
	}

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (false) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PatternUtils = __webpack_require__(168);
	
	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;
	
	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);
	
	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}
	
	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;
	
	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });
	
	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();
	
	      enterRoutes = [];
	      changeRoutes = [];
	
	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;
	
	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }
	
	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}
	
	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;
	
	var _AsyncUtils = __webpack_require__(176);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PendingHooks = function PendingHooks() {
	  var _this = this;
	
	  _classCallCheck(this, PendingHooks);
	
	  this.hooks = [];
	
	  this.add = function (hook) {
	    return _this.hooks.push(hook);
	  };
	
	  this.remove = function (hook) {
	    return _this.hooks = _this.hooks.filter(function (h) {
	      return h !== hook;
	    });
	  };
	
	  this.has = function (hook) {
	    return _this.hooks.indexOf(hook) !== -1;
	  };
	
	  this.clear = function () {
	    return _this.hooks = [];
	  };
	};
	
	var enterHooks = new PendingHooks();
	var changeHooks = new PendingHooks();
	
	function createTransitionHook(hook, route, asyncArity, pendingHooks) {
	  var isSync = hook.length < asyncArity;
	
	  var transitionHook = function transitionHook() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    hook.apply(route, args);
	
	    if (isSync) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	
	  pendingHooks.add(transitionHook);
	
	  return transitionHook;
	}
	
	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3, enterHooks));
	    return hooks;
	  }, []);
	}
	
	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4, changeHooks));
	    return hooks;
	  }, []);
	}
	
	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }
	
	  var redirectInfo = void 0;
	  function replace(location) {
	    redirectInfo = location;
	  }
	
	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	
	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  enterHooks.clear();
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    var wrappedNext = function wrappedNext() {
	      if (enterHooks.has(hooks[index])) {
	        next();
	        enterHooks.remove(hooks[index]);
	      }
	    };
	    hooks[index](nextState, replace, wrappedNext);
	  }, callback);
	}
	
	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  changeHooks.clear();
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    var wrappedNext = function wrappedNext() {
	      if (changeHooks.has(hooks[index])) {
	        next();
	        changeHooks.remove(hooks[index]);
	      }
	    };
	    hooks[index](state, nextState, replace, wrappedNext);
	  }, callback);
	}
	
	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes, prevState) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
	  }
	}

/***/ },
/* 176 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;
	
	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }
	
	    callback.apply(this, arguments);
	  }
	
	  function next() {
	    if (isDone) {
	      return;
	    }
	
	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }
	
	    sync = true;
	
	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }
	
	    sync = false;
	
	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }
	
	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }
	
	  next();
	}
	
	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];
	
	  if (length === 0) return callback(null, values);
	
	  var isDone = false,
	      doneCount = 0;
	
	  function done(index, error, value) {
	    if (isDone) return;
	
	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;
	
	      isDone = ++doneCount === length;
	
	      if (isDone) callback(null, values);
	    }
	  }
	
	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = isActive;
	
	var _PatternUtils = __webpack_require__(168);
	
	function deepEqual(a, b) {
	  if (a == b) return true;
	
	  if (a == null || b == null) return false;
	
	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }
	
	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }
	
	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }
	
	    return true;
	  }
	
	  return String(a) === String(b);
	}
	
	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }
	
	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }
	
	  return currentPathname === pathname;
	}
	
	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];
	
	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';
	
	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }
	
	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	
	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }
	
	  return false;
	}
	
	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;
	
	  if (query == null) return true;
	
	  return deepEqual(query, activeQuery);
	}
	
	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname,
	      query = _ref.query;
	
	  if (currentLocation == null) return false;
	
	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }
	
	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }
	
	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _AsyncUtils = __webpack_require__(176);
	
	var _PromiseUtils = __webpack_require__(179);
	
	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }
	
	  var getComponent = route.getComponent || route.getComponents;
	  if (getComponent) {
	    var componentReturn = getComponent.call(route, nextState, callback);
	    if ((0, _PromiseUtils.isPromise)(componentReturn)) componentReturn.then(function (component) {
	      return callback(null, component);
	    }, callback);
	  } else {
	    callback();
	  }
	}
	
	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}
	
	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },
/* 179 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.isPromise = isPromise;
	function isPromise(obj) {
	  return obj && typeof obj.then === 'function';
	}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = matchRoutes;
	
	var _AsyncUtils = __webpack_require__(176);
	
	var _PromiseUtils = __webpack_require__(179);
	
	var _PatternUtils = __webpack_require__(168);
	
	var _routerWarning = __webpack_require__(172);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _RouteUtils = __webpack_require__(166);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getChildRoutes(route, location, paramNames, paramValues, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }
	
	  var sync = true,
	      result = void 0;
	
	  var partialNextState = {
	    location: location,
	    params: createParams(paramNames, paramValues)
	  };
	
	  var childRoutesReturn = route.getChildRoutes(partialNextState, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }
	
	    callback(error, childRoutes);
	  });
	
	  if ((0, _PromiseUtils.isPromise)(childRoutesReturn)) childRoutesReturn.then(function (childRoutes) {
	    return callback(null, (0, _RouteUtils.createRoutes)(childRoutes));
	  }, callback);
	
	  sync = false;
	  return result; // Might be undefined.
	}
	
	function getIndexRoute(route, location, paramNames, paramValues, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    var partialNextState = {
	      location: location,
	      params: createParams(paramNames, paramValues)
	    };
	
	    var indexRoutesReturn = route.getIndexRoute(partialNextState, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });
	
	    if ((0, _PromiseUtils.isPromise)(indexRoutesReturn)) indexRoutesReturn.then(function (indexRoute) {
	      return callback(null, (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    }, callback);
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });
	
	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}
	
	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];
	
	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }
	
	    return params;
	  }, params);
	}
	
	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}
	
	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';
	
	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }
	
	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }
	
	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret2 = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };
	
	        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;
	
	               false ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	               false ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }
	
	            callback(null, match);
	          }
	        });
	
	        return {
	          v: void 0
	        };
	      }();
	
	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }
	  }
	
	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };
	
	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}
	
	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
	  var paramValues = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
	
	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }
	
	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;
	
	var _react = __webpack_require__(2);
	
	var func = _react.PropTypes.func,
	    object = _react.PropTypes.object,
	    arrayOf = _react.PropTypes.arrayOf,
	    oneOfType = _react.PropTypes.oneOfType,
	    element = _react.PropTypes.element,
	    shape = _react.PropTypes.shape,
	    string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}
	
	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});
	
	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _invariant = __webpack_require__(169);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _getRouteParams = __webpack_require__(183);
	
	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);
	
	var _ContextUtils = __webpack_require__(184);
	
	var _RouteUtils = __webpack_require__(166);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _React$PropTypes = _react2.default.PropTypes,
	    array = _React$PropTypes.array,
	    func = _React$PropTypes.func,
	    object = _React$PropTypes.object;
	
	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */
	
	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',
	
	
	  mixins: [(0, _ContextUtils.ContextProvider)('router')],
	
	  propTypes: {
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },
	
	
	  childContextTypes: {
	    router: object.isRequired
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      router: this.props.router
	    };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;
	
	    var _props = this.props,
	        location = _props.location,
	        routes = _props.routes,
	        params = _props.params,
	        components = _props.components,
	        router = _props.router;
	
	    var element = null;
	
	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.
	
	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          location: location,
	          params: params,
	          route: route,
	          router: router,
	          routeParams: routeParams,
	          routes: routes
	        };
	
	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }
	
	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};
	
	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }
	
	          return elements;
	        }
	
	        return _this.createElement(components, props);
	      }, element);
	    }
	
	    !(element === null || element === false || _react2.default.isValidElement(element)) ?  false ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;
	
	    return element;
	  }
	});
	
	exports.default = RouterContext;
	module.exports = exports['default'];

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PatternUtils = __webpack_require__(168);
	
	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};
	
	  if (!route.path) return routeParams;
	
	  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
	    if (Object.prototype.hasOwnProperty.call(params, p)) {
	      routeParams[p] = params[p];
	    }
	  });
	
	  return routeParams;
	}
	
	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ContextProvider = ContextProvider;
	exports.ContextSubscriber = ContextSubscriber;
	
	var _react = __webpack_require__(2);
	
	// Works around issues with context updates failing to propagate.
	// Caveat: the context value is expected to never change its identity.
	// https://github.com/facebook/react/issues/2517
	// https://github.com/reactjs/react-router/issues/470
	
	var contextProviderShape = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  eventIndex: _react.PropTypes.number.isRequired
	});
	
	function makeContextName(name) {
	  return '@@contextSubscriber/' + name;
	}
	
	function ContextProvider(name) {
	  var _childContextTypes, _ref2;
	
	  var contextName = makeContextName(name);
	  var listenersKey = contextName + '/listeners';
	  var eventIndexKey = contextName + '/eventIndex';
	  var subscribeKey = contextName + '/subscribe';
	
	  return _ref2 = {
	    childContextTypes: (_childContextTypes = {}, _childContextTypes[contextName] = contextProviderShape.isRequired, _childContextTypes),
	
	    getChildContext: function getChildContext() {
	      var _ref;
	
	      return _ref = {}, _ref[contextName] = {
	        eventIndex: this[eventIndexKey],
	        subscribe: this[subscribeKey]
	      }, _ref;
	    },
	    componentWillMount: function componentWillMount() {
	      this[listenersKey] = [];
	      this[eventIndexKey] = 0;
	    },
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this[eventIndexKey]++;
	    },
	    componentDidUpdate: function componentDidUpdate() {
	      var _this = this;
	
	      this[listenersKey].forEach(function (listener) {
	        return listener(_this[eventIndexKey]);
	      });
	    }
	  }, _ref2[subscribeKey] = function (listener) {
	    var _this2 = this;
	
	    // No need to immediately call listener here.
	    this[listenersKey].push(listener);
	
	    return function () {
	      _this2[listenersKey] = _this2[listenersKey].filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }, _ref2;
	}
	
	function ContextSubscriber(name) {
	  var _contextTypes, _ref4;
	
	  var contextName = makeContextName(name);
	  var lastRenderedEventIndexKey = contextName + '/lastRenderedEventIndex';
	  var handleContextUpdateKey = contextName + '/handleContextUpdate';
	  var unsubscribeKey = contextName + '/unsubscribe';
	
	  return _ref4 = {
	    contextTypes: (_contextTypes = {}, _contextTypes[contextName] = contextProviderShape, _contextTypes),
	
	    getInitialState: function getInitialState() {
	      var _ref3;
	
	      if (!this.context[contextName]) {
	        return {};
	      }
	
	      return _ref3 = {}, _ref3[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _ref3;
	    },
	    componentDidMount: function componentDidMount() {
	      if (!this.context[contextName]) {
	        return;
	      }
	
	      this[unsubscribeKey] = this.context[contextName].subscribe(this[handleContextUpdateKey]);
	    },
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      var _setState;
	
	      if (!this.context[contextName]) {
	        return;
	      }
	
	      this.setState((_setState = {}, _setState[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _setState));
	    },
	    componentWillUnmount: function componentWillUnmount() {
	      if (!this[unsubscribeKey]) {
	        return;
	      }
	
	      this[unsubscribeKey]();
	      this[unsubscribeKey] = null;
	    }
	  }, _ref4[handleContextUpdateKey] = function (eventIndex) {
	    if (eventIndex !== this.state[lastRenderedEventIndexKey]) {
	      var _setState2;
	
	      this.setState((_setState2 = {}, _setState2[lastRenderedEventIndexKey] = eventIndex, _setState2));
	    }
	  }, _ref4;
	}

/***/ },
/* 185 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.createRouterObject = createRouterObject;
	exports.assignRouterState = assignRouterState;
	function createRouterObject(history, transitionManager, state) {
	  var router = _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });
	
	  return assignRouterState(router, state);
	}
	
	function assignRouterState(router, _ref) {
	  var location = _ref.location,
	      params = _ref.params,
	      routes = _ref.routes;
	
	  router.location = location;
	  router.params = params;
	  router.routes = routes;
	
	  return router;
	}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(169);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _PropTypes = __webpack_require__(167);
	
	var _ContextUtils = __webpack_require__(184);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _React$PropTypes = _react2.default.PropTypes,
	    bool = _React$PropTypes.bool,
	    object = _React$PropTypes.object,
	    string = _React$PropTypes.string,
	    func = _React$PropTypes.func,
	    oneOfType = _React$PropTypes.oneOfType;
	
	
	function isLeftClickEvent(event) {
	  return event.button === 0;
	}
	
	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}
	
	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}
	
	function resolveToLocation(to, router) {
	  return typeof to === 'function' ? to(router.location) : to;
	}
	
	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',
	
	
	  mixins: [(0, _ContextUtils.ContextSubscriber)('router')],
	
	  contextTypes: {
	    router: _PropTypes.routerShape
	  },
	
	  propTypes: {
	    to: oneOfType([string, object, func]),
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    if (this.props.onClick) this.props.onClick(event);
	
	    if (event.defaultPrevented) return;
	
	    var router = this.context.router;
	
	    !router ?  false ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;
	
	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;
	
	    // If target prop is set (e.g. to "_blank"), let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) return;
	
	    event.preventDefault();
	
	    router.push(resolveToLocation(this.props.to, router));
	  },
	  render: function render() {
	    var _props = this.props,
	        to = _props.to,
	        activeClassName = _props.activeClassName,
	        activeStyle = _props.activeStyle,
	        onlyActiveOnIndex = _props.onlyActiveOnIndex,
	        props = _objectWithoutProperties(_props, ['to', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);
	
	    // Ignore if rendered outside the context of router to simplify unit testing.
	
	
	    var router = this.context.router;
	
	
	    if (router) {
	      // If user does not specify a `to` prop, return an empty anchor tag.
	      if (to == null) {
	        return _react2.default.createElement('a', props);
	      }
	
	      var toLocation = resolveToLocation(to, router);
	      props.href = router.createHref(toLocation);
	
	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(toLocation, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }
	
	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }
	
	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});
	
	exports.default = Link;
	module.exports = exports['default'];

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Link = __webpack_require__(186);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});
	
	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = withRouter;
	
	var _invariant = __webpack_require__(169);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _hoistNonReactStatics = __webpack_require__(189);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _ContextUtils = __webpack_require__(184);
	
	var _PropTypes = __webpack_require__(167);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	
	function withRouter(WrappedComponent, options) {
	  var withRef = options && options.withRef;
	
	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',
	
	    mixins: [(0, _ContextUtils.ContextSubscriber)('router')],
	
	    contextTypes: { router: _PropTypes.routerShape },
	    propTypes: { router: _PropTypes.routerShape },
	
	    getWrappedInstance: function getWrappedInstance() {
	      !withRef ?  false ? (0, _invariant2.default)(false, 'To access the wrapped instance, you need to specify ' + '`{ withRef: true }` as the second argument of the withRouter() call.') : (0, _invariant2.default)(false) : void 0;
	
	      return this.wrappedInstance;
	    },
	    render: function render() {
	      var _this = this;
	
	      var router = this.props.router || this.context.router;
	      var params = router.params,
	          location = router.location,
	          routes = router.routes;
	
	      var props = _extends({}, this.props, { router: router, params: params, location: location, routes: routes });
	
	      if (withRef) {
	        props.ref = function (c) {
	          _this.wrappedInstance = c;
	        };
	      }
	
	      return _react2.default.createElement(WrappedComponent, props);
	    }
	  });
	
	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;
	
	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];

/***/ },
/* 189 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _routerWarning = __webpack_require__(172);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _invariant = __webpack_require__(169);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Redirect = __webpack_require__(191);
	
	var _Redirect2 = _interopRequireDefault(_Redirect);
	
	var _InternalPropTypes = __webpack_require__(181);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;
	
	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */
	/* eslint-disable react/require-render-return */
	
	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',
	
	
	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	         false ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },
	
	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  false ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});
	
	exports.default = IndexRedirect;
	module.exports = exports['default'];

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(169);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _RouteUtils = __webpack_require__(166);
	
	var _PatternUtils = __webpack_require__(168);
	
	var _InternalPropTypes = __webpack_require__(181);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;
	
	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */
	/* eslint-disable react/require-render-return */
	
	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',
	
	
	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);
	
	      if (route.from) route.path = route.from;
	
	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location,
	            params = nextState.params;
	
	
	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }
	
	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };
	
	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';
	
	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';
	
	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;
	
	        if (pattern.indexOf('/') === 0) break;
	      }
	
	      return '/' + parentPattern;
	    }
	  },
	
	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  false ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});
	
	exports.default = Redirect;
	module.exports = exports['default'];

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _routerWarning = __webpack_require__(172);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _invariant = __webpack_require__(169);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _RouteUtils = __webpack_require__(166);
	
	var _InternalPropTypes = __webpack_require__(181);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var func = _react2.default.PropTypes.func;
	
	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */
	/* eslint-disable react/require-render-return */
	
	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',
	
	
	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	         false ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },
	
	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  false ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});
	
	exports.default = IndexRoute;
	module.exports = exports['default'];

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(169);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _RouteUtils = __webpack_require__(166);
	
	var _InternalPropTypes = __webpack_require__(181);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    func = _React$PropTypes.func;
	
	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */
	/* eslint-disable react/require-render-return */
	
	var Route = _react2.default.createClass({
	  displayName: 'Route',
	
	
	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },
	
	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  false ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});
	
	exports.default = Route;
	module.exports = exports['default'];

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Actions = __webpack_require__(195);
	
	var _invariant = __webpack_require__(169);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _createMemoryHistory = __webpack_require__(196);
	
	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
	
	var _createTransitionManager = __webpack_require__(171);
	
	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
	
	var _RouteUtils = __webpack_require__(166);
	
	var _RouterUtils = __webpack_require__(185);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history,
	      routes = _ref.routes,
	      location = _ref.location,
	      options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);
	
	  !(history || location) ?  false ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;
	
	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));
	
	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    location = history.getCurrentLocation();
	  }
	
	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    var renderProps = void 0;
	
	    if (nextState) {
	      var router = (0, _RouterUtils.createRouterObject)(history, transitionManager, nextState);
	      renderProps = _extends({}, nextState, {
	        router: router,
	        matchContext: { transitionManager: transitionManager, router: router }
	      });
	    }
	
	    callback(error, redirectLocation && history.createLocation(redirectLocation, _Actions.REPLACE), renderProps);
	  });
	}
	
	exports.default = match;
	module.exports = exports['default'];

/***/ },
/* 195 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	var PUSH = exports.PUSH = 'PUSH';
	
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = exports.REPLACE = 'REPLACE';
	
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = exports.POP = 'POP';

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = createMemoryHistory;
	
	var _useQueries = __webpack_require__(197);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	var _useBasename = __webpack_require__(204);
	
	var _useBasename2 = _interopRequireDefault(_useBasename);
	
	var _createMemoryHistory = __webpack_require__(205);
	
	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useQueries` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  return history;
	}
	module.exports = exports['default'];

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _queryString = __webpack_require__(198);
	
	var _runTransitionHook = __webpack_require__(200);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _LocationUtils = __webpack_require__(202);
	
	var _PathUtils = __webpack_require__(203);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultStringifyQuery = function defaultStringifyQuery(query) {
	  return (0, _queryString.stringify)(query).replace(/%20/g, '+');
	};
	
	var defaultParseQueryString = _queryString.parse;
	
	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	var useQueries = function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var history = createHistory(options);
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;
	
	
	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;
	
	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;
	
	    var decodeQuery = function decodeQuery(location) {
	      if (!location) return location;
	
	      if (location.query == null) location.query = parseQueryString(location.search.substring(1));
	
	      return location;
	    };
	
	    var encodeQuery = function encodeQuery(location, query) {
	      if (query == null) return location;
	
	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var queryString = stringifyQuery(query);
	      var search = queryString ? '?' + queryString : '';
	
	      return _extends({}, object, {
	        search: search
	      });
	    };
	
	    // Override all read methods with query-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return decodeQuery(history.getCurrentLocation());
	    };
	
	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, decodeQuery(location), callback);
	      });
	    };
	
	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(decodeQuery(location));
	      });
	    };
	
	    // Override all write methods with query-aware versions.
	    var push = function push(location) {
	      return history.push(encodeQuery(location, location.query));
	    };
	
	    var replace = function replace(location) {
	      return history.replace(encodeQuery(location, location.query));
	    };
	
	    var createPath = function createPath(location) {
	      return history.createPath(encodeQuery(location, location.query));
	    };
	
	    var createHref = function createHref(location) {
	      return history.createHref(encodeQuery(location, location.query));
	    };
	
	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var newLocation = history.createLocation.apply(history, [encodeQuery(location, location.query)].concat(args));
	
	      if (location.query) newLocation.query = (0, _LocationUtils.createQuery)(location.query);
	
	      return decodeQuery(newLocation);
	    };
	
	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};
	
	exports.default = useQueries;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(199);
	var objectAssign = __webpack_require__(4);
	
	function encode(value, opts) {
		if (opts.encode) {
			return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
		}
	
		return value;
	}
	
	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};
	
	exports.parse = function (str) {
		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		var ret = Object.create(null);
	
		if (typeof str !== 'string') {
			return ret;
		}
	
		str = str.trim().replace(/^(\?|#|&)/, '');
	
		if (!str) {
			return ret;
		}
	
		str.split('&').forEach(function (param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;
	
			key = decodeURIComponent(key);
	
			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);
	
			if (ret[key] === undefined) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}
		});
	
		return ret;
	};
	
	exports.stringify = function (obj, opts) {
		var defaults = {
			encode: true,
			strict: true
		};
	
		opts = objectAssign(defaults, opts);
	
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];
	
			if (val === undefined) {
				return '';
			}
	
			if (val === null) {
				return encode(key, opts);
			}
	
			if (Array.isArray(val)) {
				var result = [];
	
				val.slice().forEach(function (val2) {
					if (val2 === undefined) {
						return;
					}
	
					if (val2 === null) {
						result.push(encode(key, opts));
					} else {
						result.push(encode(key, opts) + '=' + encode(val2, opts));
					}
				});
	
				return result.join('&');
			}
	
			return encode(key, opts) + '=' + encode(val, opts);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 199 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _warning = __webpack_require__(201);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var runTransitionHook = function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);
	
	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	     false ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : void 0;
	  }
	};
	
	exports.default = runTransitionHook;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (false) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _invariant = __webpack_require__(169);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _warning = __webpack_require__(201);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _PathUtils = __webpack_require__(203);
	
	var _Actions = __webpack_require__(195);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createQuery = exports.createQuery = function createQuery(props) {
	  return _extends(Object.create(null), props);
	};
	
	var createLocation = exports.createLocation = function createLocation() {
	  var input = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;
	
	   false ? (0, _warning2.default)(!object.path, 'Location descriptor objects should have a `pathname`, not a `path`.') : void 0;
	
	  var pathname = object.pathname || '/';
	  var search = object.search || '';
	  var hash = object.hash || '';
	  var state = object.state;
	
	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	};
	
	var isDate = function isDate(object) {
	  return Object.prototype.toString.call(object) === '[object Date]';
	};
	
	var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
	  if (a === b) return true;
	
	  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);
	
	  if (typeofA !== typeofB) return false;
	
	  !(typeofA !== 'function') ?  false ? (0, _invariant2.default)(false, 'You must not store functions in location state') : (0, _invariant2.default)(false) : void 0;
	
	  // Not the same object, but same type.
	  if (typeofA === 'object') {
	    !!(isDate(a) && isDate(b)) ?  false ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : (0, _invariant2.default)(false) : void 0;
	
	    if (!Array.isArray(a)) {
	      var keysofA = Object.keys(a);
	      var keysofB = Object.keys(b);
	      return keysofA.length === keysofB.length && keysofA.every(function (key) {
	        return statesAreEqual(a[key], b[key]);
	      });
	    }
	
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return statesAreEqual(item, b[index]);
	    });
	  }
	
	  // All other serializable types (string, number, boolean)
	  // should be strict equal.
	  return false;
	};
	
	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.key === b.key &&
	  // a.action === b.action && // Different action !== location change.
	  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = undefined;
	
	var _warning = __webpack_require__(201);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
	  var _parsePath = parsePath(path);
	
	  var pathname = _parsePath.pathname;
	  var search = _parsePath.search;
	  var hash = _parsePath.hash;
	
	
	  return createPath({
	    pathname: pathname,
	    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
	    hash: hash
	  });
	};
	
	var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
	  var _parsePath2 = parsePath(path);
	
	  var pathname = _parsePath2.pathname;
	  var search = _parsePath2.search;
	  var hash = _parsePath2.hash;
	
	
	  return createPath({
	    pathname: pathname,
	    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
	      return prefix === '?' ? prefix : suffix;
	    }),
	    hash: hash
	  });
	};
	
	var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
	  var _parsePath3 = parsePath(path);
	
	  var search = _parsePath3.search;
	
	  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
	  return match && match[1];
	};
	
	var extractPath = function extractPath(string) {
	  var match = string.match(/^(https?:)?\/\/[^\/]*/);
	  return match == null ? string : string.substring(match[0].length);
	};
	
	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';
	
	   false ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : void 0;
	
	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }
	
	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }
	
	  if (pathname === '') pathname = '/';
	
	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	};
	
	var createPath = exports.createPath = function createPath(location) {
	  if (location == null || typeof location === 'string') return location;
	
	  var basename = location.basename;
	  var pathname = location.pathname;
	  var search = location.search;
	  var hash = location.hash;
	
	  var path = (basename || '') + pathname;
	
	  if (search && search !== '?') path += search;
	
	  if (hash) path += hash;
	
	  return path;
	};

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _runTransitionHook = __webpack_require__(200);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _PathUtils = __webpack_require__(203);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var useBasename = function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var history = createHistory(options);
	    var basename = options.basename;
	
	
	    var addBasename = function addBasename(location) {
	      if (!location) return location;
	
	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;
	
	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }
	
	      return location;
	    };
	
	    var prependBasename = function prependBasename(location) {
	      if (!basename) return location;
	
	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var pname = object.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;
	
	      return _extends({}, object, {
	        pathname: pathname
	      });
	    };
	
	    // Override all read methods with basename-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return addBasename(history.getCurrentLocation());
	    };
	
	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, addBasename(location), callback);
	      });
	    };
	
	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(addBasename(location));
	      });
	    };
	
	    // Override all write methods with basename-aware versions.
	    var push = function push(location) {
	      return history.push(prependBasename(location));
	    };
	
	    var replace = function replace(location) {
	      return history.replace(prependBasename(location));
	    };
	
	    var createPath = function createPath(location) {
	      return history.createPath(prependBasename(location));
	    };
	
	    var createHref = function createHref(location) {
	      return history.createHref(prependBasename(location));
	    };
	
	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    };
	
	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};
	
	exports.default = useBasename;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _warning = __webpack_require__(201);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(169);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _LocationUtils = __webpack_require__(202);
	
	var _PathUtils = __webpack_require__(203);
	
	var _createHistory = __webpack_require__(206);
	
	var _createHistory2 = _interopRequireDefault(_createHistory);
	
	var _Actions = __webpack_require__(195);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createStateStorage = function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	};
	
	var createMemoryHistory = function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }
	
	  var getCurrentLocation = function getCurrentLocation() {
	    var entry = entries[current];
	    var path = (0, _PathUtils.createPath)(entry);
	
	    var key = void 0,
	        state = void 0;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    }
	
	    var init = (0, _PathUtils.parsePath)(path);
	
	    return (0, _LocationUtils.createLocation)(_extends({}, init, { state: state }), undefined, key);
	  };
	
	  var canGo = function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  };
	
	  var go = function go(n) {
	    if (!n) return;
	
	    if (!canGo(n)) {
	       false ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : void 0;
	
	      return;
	    }
	
	    current += n;
	    var currentLocation = getCurrentLocation();
	
	    // Change action to POP
	    history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	  };
	
	  var pushLocation = function pushLocation(location) {
	    current += 1;
	
	    if (current < entries.length) entries.splice(current);
	
	    entries.push(location);
	
	    saveState(location.key, location.state);
	  };
	
	  var replaceLocation = function replaceLocation(location) {
	    entries[current] = location;
	    saveState(location.key, location.state);
	  };
	
	  var history = (0, _createHistory2.default)(_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));
	
	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;
	
	
	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }
	
	  entries = entries.map(function (entry) {
	    return (0, _LocationUtils.createLocation)(entry);
	  });
	
	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ?  false ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : (0, _invariant2.default)(false) : void 0;
	  }
	
	  var storage = createStateStorage(entries);
	
	  var saveState = function saveState(key, state) {
	    return storage[key] = state;
	  };
	
	  var readState = function readState(key) {
	    return storage[key];
	  };
	
	  return _extends({}, history, {
	    canGo: canGo
	  });
	};
	
	exports.default = createMemoryHistory;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _AsyncUtils = __webpack_require__(207);
	
	var _PathUtils = __webpack_require__(203);
	
	var _runTransitionHook = __webpack_require__(200);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _Actions = __webpack_require__(195);
	
	var _LocationUtils = __webpack_require__(202);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createHistory = function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var getUserConfirmation = options.getUserConfirmation;
	  var pushLocation = options.pushLocation;
	  var replaceLocation = options.replaceLocation;
	  var go = options.go;
	  var keyLength = options.keyLength;
	
	
	  var currentLocation = void 0;
	  var pendingLocation = void 0;
	  var beforeListeners = [];
	  var listeners = [];
	  var allKeys = [];
	
	  var getCurrentIndex = function getCurrentIndex() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);
	
	    if (currentLocation) return allKeys.indexOf(currentLocation.key);
	
	    return -1;
	  };
	
	  var updateLocation = function updateLocation(nextLocation) {
	    var currentIndex = getCurrentIndex();
	
	    currentLocation = nextLocation;
	
	    if (currentLocation.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, currentIndex + 1), [currentLocation.key]);
	    } else if (currentLocation.action === _Actions.REPLACE) {
	      allKeys[currentIndex] = currentLocation.key;
	    }
	
	    listeners.forEach(function (listener) {
	      return listener(currentLocation);
	    });
	  };
	
	  var listenBefore = function listenBefore(listener) {
	    beforeListeners.push(listener);
	
	    return function () {
	      return beforeListeners = beforeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };
	
	  var listen = function listen(listener) {
	    listeners.push(listener);
	
	    return function () {
	      return listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };
	
	  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
	    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
	      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
	        return result != null ? done(result) : next();
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          return callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  };
	
	  var transitionTo = function transitionTo(nextLocation) {
	    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do
	
	    pendingLocation = nextLocation;
	
	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation
	
	      pendingLocation = null;
	
	      if (ok) {
	        // Treat PUSH to same path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = (0, _PathUtils.createPath)(currentLocation);
	          var nextPath = (0, _PathUtils.createPath)(nextLocation);
	
	          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }
	
	        if (nextLocation.action === _Actions.POP) {
	          updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.PUSH) {
	          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.REPLACE) {
	          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
	        }
	      } else if (currentLocation && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(currentLocation.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);
	
	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
	      }
	    });
	  };
	
	  var push = function push(input) {
	    return transitionTo(createLocation(input, _Actions.PUSH));
	  };
	
	  var replace = function replace(input) {
	    return transitionTo(createLocation(input, _Actions.REPLACE));
	  };
	
	  var goBack = function goBack() {
	    return go(-1);
	  };
	
	  var goForward = function goForward() {
	    return go(1);
	  };
	
	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength || 6);
	  };
	
	  var createHref = function createHref(location) {
	    return (0, _PathUtils.createPath)(location);
	  };
	
	  var createLocation = function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];
	    return (0, _LocationUtils.createLocation)(location, action, key);
	  };
	
	  return {
	    getCurrentLocation: getCurrentLocation,
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: _PathUtils.createPath,
	    createHref: createHref,
	    createLocation: createLocation
	  };
	};
	
	exports.default = createHistory;

/***/ },
/* 207 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var isSync = false,
	      hasNext = false,
	      doneArgs = void 0;
	
	  var done = function done() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    isDone = true;
	
	    if (isSync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = args;
	      return;
	    }
	
	    callback.apply(undefined, args);
	  };
	
	  var next = function next() {
	    if (isDone) return;
	
	    hasNext = true;
	
	    if (isSync) return; // Iterate instead of recursing if possible.
	
	    isSync = true;
	
	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work(currentTurn++, next, done);
	    }
	
	    isSync = false;
	
	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(undefined, doneArgs);
	      return;
	    }
	
	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  };
	
	  next();
	};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = useRouterHistory;
	
	var _useQueries = __webpack_require__(197);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	var _useBasename = __webpack_require__(204);
	
	var _useBasename2 = _interopRequireDefault(_useBasename);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	    return history;
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouterContext = __webpack_require__(182);
	
	var _RouterContext2 = _interopRequireDefault(_RouterContext);
	
	var _routerWarning = __webpack_require__(172);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  if (false) {
	    middlewares.forEach(function (middleware, index) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(middleware.renderRouterContext || middleware.renderRouteComponent, 'The middleware specified at index ' + index + ' does not appear to be ' + 'a valid React Router middleware.') : void 0;
	    });
	  }
	
	  var withContext = middlewares.map(function (middleware) {
	    return middleware.renderRouterContext;
	  }).filter(Boolean);
	  var withComponent = middlewares.map(function (middleware) {
	    return middleware.renderRouteComponent;
	  }).filter(Boolean);
	
	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _react.createElement;
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };
	
	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};
	
	module.exports = exports['default'];

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createBrowserHistory = __webpack_require__(211);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _createRouterHistory = __webpack_require__(217);
	
	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _invariant = __webpack_require__(169);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ExecutionEnvironment = __webpack_require__(212);
	
	var _BrowserProtocol = __webpack_require__(213);
	
	var BrowserProtocol = _interopRequireWildcard(_BrowserProtocol);
	
	var _RefreshProtocol = __webpack_require__(216);
	
	var RefreshProtocol = _interopRequireWildcard(_RefreshProtocol);
	
	var _DOMUtils = __webpack_require__(214);
	
	var _createHistory = __webpack_require__(206);
	
	var _createHistory2 = _interopRequireDefault(_createHistory);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve clean URLs. You can force this
	 * behavior using { forceRefresh: true } in options.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  !_ExecutionEnvironment.canUseDOM ?  false ? (0, _invariant2.default)(false, 'Browser history needs a DOM') : (0, _invariant2.default)(false) : void 0;
	
	  var useRefresh = options.forceRefresh || !(0, _DOMUtils.supportsHistory)();
	  var Protocol = useRefresh ? RefreshProtocol : BrowserProtocol;
	
	  var getUserConfirmation = Protocol.getUserConfirmation;
	  var getCurrentLocation = Protocol.getCurrentLocation;
	  var pushLocation = Protocol.pushLocation;
	  var replaceLocation = Protocol.replaceLocation;
	  var go = Protocol.go;
	
	
	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));
	
	  var listenerCount = 0,
	      stopListener = void 0;
	
	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = BrowserProtocol.startListener(history.transitionTo);
	
	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopListener();
	    };
	  };
	
	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };
	
	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };
	
	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen
	  });
	};
	
	exports.default = createBrowserHistory;

/***/ },
/* 212 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.go = exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getUserConfirmation = exports.getCurrentLocation = undefined;
	
	var _LocationUtils = __webpack_require__(202);
	
	var _DOMUtils = __webpack_require__(214);
	
	var _DOMStateStorage = __webpack_require__(215);
	
	var _PathUtils = __webpack_require__(203);
	
	var _ExecutionEnvironment = __webpack_require__(212);
	
	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';
	
	var needsHashchangeListener = _ExecutionEnvironment.canUseDOM && !(0, _DOMUtils.supportsPopstateOnHashchange)();
	
	var _createLocation = function _createLocation(historyState) {
	  var key = historyState && historyState.key;
	
	  return (0, _LocationUtils.createLocation)({
	    pathname: window.location.pathname,
	    search: window.location.search,
	    hash: window.location.hash,
	    state: key ? (0, _DOMStateStorage.readState)(key) : undefined
	  }, undefined, key);
	};
	
	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  var historyState = void 0;
	  try {
	    historyState = window.history.state || {};
	  } catch (error) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    historyState = {};
	  }
	
	  return _createLocation(historyState);
	};
	
	var getUserConfirmation = exports.getUserConfirmation = function getUserConfirmation(message, callback) {
	  return callback(window.confirm(message));
	}; // eslint-disable-line no-alert
	
	var startListener = exports.startListener = function startListener(listener) {
	  var handlePopState = function handlePopState(event) {
	    if (event.state !== undefined) // Ignore extraneous popstate events in WebKit
	      listener(_createLocation(event.state));
	  };
	
	  (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);
	
	  var handleUnpoppedHashChange = function handleUnpoppedHashChange() {
	    return listener(getCurrentLocation());
	  };
	
	  if (needsHashchangeListener) {
	    (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
	  }
	
	  return function () {
	    (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);
	
	    if (needsHashchangeListener) {
	      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
	    }
	  };
	};
	
	var updateLocation = function updateLocation(location, updateState) {
	  var state = location.state;
	  var key = location.key;
	
	
	  if (state !== undefined) (0, _DOMStateStorage.saveState)(key, state);
	
	  updateState({ key: key }, (0, _PathUtils.createPath)(location));
	};
	
	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.pushState(state, null, path);
	  });
	};
	
	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.replaceState(state, null, path);
	  });
	};
	
	var go = exports.go = function go(n) {
	  if (n) window.history.go(n);
	};

/***/ },
/* 214 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};
	
	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};
	
	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;
	
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
	
	  return window.history && 'pushState' in window.history;
	};
	
	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};
	
	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	var supportsPopstateOnHashchange = exports.supportsPopstateOnHashchange = function supportsPopstateOnHashchange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.readState = exports.saveState = undefined;
	
	var _warning = __webpack_require__(201);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var QuotaExceededErrors = {
	  QuotaExceededError: true,
	  QUOTA_EXCEEDED_ERR: true
	};
	
	var SecurityErrors = {
	  SecurityError: true
	};
	
	var KeyPrefix = '@@History/';
	
	var createKey = function createKey(key) {
	  return KeyPrefix + key;
	};
	
	var saveState = exports.saveState = function saveState(key, state) {
	  if (!window.sessionStorage) {
	    // Session storage is not available or hidden.
	    // sessionStorage is undefined in Internet Explorer when served via file protocol.
	     false ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available') : void 0;
	
	    return;
	  }
	
	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (SecurityErrors[error.name]) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	       false ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available due to security settings') : void 0;
	
	      return;
	    }
	
	    if (QuotaExceededErrors[error.name] && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	       false ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : void 0;
	
	      return;
	    }
	
	    throw error;
	  }
	};
	
	var readState = exports.readState = function readState(key) {
	  var json = void 0;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (SecurityErrors[error.name]) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	       false ? (0, _warning2.default)(false, '[history] Unable to read state; sessionStorage is not available due to security settings') : void 0;
	
	      return undefined;
	    }
	  }
	
	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }
	
	  return undefined;
	};

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.replaceLocation = exports.pushLocation = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;
	
	var _BrowserProtocol = __webpack_require__(213);
	
	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});
	
	var _LocationUtils = __webpack_require__(202);
	
	var _PathUtils = __webpack_require__(203);
	
	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  return (0, _LocationUtils.createLocation)(window.location);
	};
	
	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  window.location.href = (0, _PathUtils.createPath)(location);
	  return false; // Don't update location
	};
	
	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  window.location.replace((0, _PathUtils.createPath)(location));
	  return false; // Don't update location
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	exports.default = function (createHistory) {
	  var history = void 0;
	  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
	  return history;
	};
	
	var _useRouterHistory = __webpack_require__(208);
	
	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	module.exports = exports['default'];

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createHashHistory = __webpack_require__(219);
	
	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);
	
	var _createRouterHistory = __webpack_require__(217);
	
	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _warning = __webpack_require__(201);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(169);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ExecutionEnvironment = __webpack_require__(212);
	
	var _DOMUtils = __webpack_require__(214);
	
	var _HashProtocol = __webpack_require__(220);
	
	var HashProtocol = _interopRequireWildcard(_HashProtocol);
	
	var _createHistory = __webpack_require__(206);
	
	var _createHistory2 = _interopRequireDefault(_createHistory);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DefaultQueryKey = '_k';
	
	var addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};
	
	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!' + path;
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substring(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '/' ? path.substring(1) : path;
	    },
	    decodePath: addLeadingSlash
	  },
	  slash: {
	    encodePath: addLeadingSlash,
	    decodePath: addLeadingSlash
	  }
	};
	
	var createHashHistory = function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  !_ExecutionEnvironment.canUseDOM ?  false ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;
	
	  var queryKey = options.queryKey;
	  var hashType = options.hashType;
	
	
	   false ? (0, _warning2.default)(queryKey !== false, 'Using { queryKey: false } no longer works. Instead, just don\'t ' + 'use location state if you don\'t want a key in your URL query string') : void 0;
	
	  if (typeof queryKey !== 'string') queryKey = DefaultQueryKey;
	
	  if (hashType == null) hashType = 'slash';
	
	  if (!(hashType in HashPathCoders)) {
	     false ? (0, _warning2.default)(false, 'Invalid hash type: %s', hashType) : void 0;
	
	    hashType = 'slash';
	  }
	
	  var pathCoder = HashPathCoders[hashType];
	
	  var getUserConfirmation = HashProtocol.getUserConfirmation;
	
	
	  var getCurrentLocation = function getCurrentLocation() {
	    return HashProtocol.getCurrentLocation(pathCoder, queryKey);
	  };
	
	  var pushLocation = function pushLocation(location) {
	    return HashProtocol.pushLocation(location, pathCoder, queryKey);
	  };
	
	  var replaceLocation = function replaceLocation(location) {
	    return HashProtocol.replaceLocation(location, pathCoder, queryKey);
	  };
	
	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: HashProtocol.go
	  }));
	
	  var listenerCount = 0,
	      stopListener = void 0;
	
	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = HashProtocol.startListener(history.transitionTo, pathCoder, queryKey);
	
	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopListener();
	    };
	  };
	
	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };
	
	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };
	
	  var goIsSupportedWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();
	
	  var go = function go(n) {
	     false ? (0, _warning2.default)(goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;
	
	    history.go(n);
	  };
	
	  var createHref = function createHref(path) {
	    return '#' + pathCoder.encodePath(history.createHref(path));
	  };
	
	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    go: go,
	    createHref: createHref
	  });
	};
	
	exports.default = createHashHistory;

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;
	
	var _BrowserProtocol = __webpack_require__(213);
	
	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});
	
	var _warning = __webpack_require__(201);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _LocationUtils = __webpack_require__(202);
	
	var _DOMUtils = __webpack_require__(214);
	
	var _DOMStateStorage = __webpack_require__(215);
	
	var _PathUtils = __webpack_require__(203);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HashChangeEvent = 'hashchange';
	
	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	};
	
	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};
	
	var replaceHashPath = function replaceHashPath(path) {
	  var hashIndex = window.location.href.indexOf('#');
	
	  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
	};
	
	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation(pathCoder, queryKey) {
	  var path = pathCoder.decodePath(getHashPath());
	  var key = (0, _PathUtils.getQueryStringValueFromPath)(path, queryKey);
	
	  var state = void 0;
	  if (key) {
	    path = (0, _PathUtils.stripQueryStringValueFromPath)(path, queryKey);
	    state = (0, _DOMStateStorage.readState)(key);
	  }
	
	  var init = (0, _PathUtils.parsePath)(path);
	  init.state = state;
	
	  return (0, _LocationUtils.createLocation)(init, undefined, key);
	};
	
	var prevLocation = void 0;
	
	var startListener = exports.startListener = function startListener(listener, pathCoder, queryKey) {
	  var handleHashChange = function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = pathCoder.encodePath(path);
	
	    if (path !== encodedPath) {
	      // Always be sure we have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var currentLocation = getCurrentLocation(pathCoder, queryKey);
	
	      if (prevLocation && currentLocation.key && prevLocation.key === currentLocation.key) return; // Ignore extraneous hashchange events
	
	      prevLocation = currentLocation;
	
	      listener(currentLocation);
	    }
	  };
	
	  // Ensure the hash is encoded properly.
	  var path = getHashPath();
	  var encodedPath = pathCoder.encodePath(path);
	
	  if (path !== encodedPath) replaceHashPath(encodedPath);
	
	  (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	
	  return function () {
	    return (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	  };
	};
	
	var updateLocation = function updateLocation(location, pathCoder, queryKey, updateHash) {
	  var state = location.state;
	  var key = location.key;
	
	
	  var path = pathCoder.encodePath((0, _PathUtils.createPath)(location));
	
	  if (state !== undefined) {
	    path = (0, _PathUtils.addQueryStringValueToPath)(path, queryKey, key);
	    (0, _DOMStateStorage.saveState)(key, state);
	  }
	
	  prevLocation = location;
	
	  updateHash(path);
	};
	
	var pushLocation = exports.pushLocation = function pushLocation(location, pathCoder, queryKey) {
	  return updateLocation(location, pathCoder, queryKey, function (path) {
	    if (getHashPath() !== path) {
	      pushHashPath(path);
	    } else {
	       false ? (0, _warning2.default)(false, 'You cannot PUSH the same path using hash history') : void 0;
	    }
	  });
	};
	
	var replaceLocation = exports.replaceLocation = function replaceLocation(location, pathCoder, queryKey) {
	  return updateLocation(location, pathCoder, queryKey, function (path) {
	    if (getHashPath() !== path) replaceHashPath(path);
	  });
	};

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;
	
	var _Provider = __webpack_require__(222);
	
	var _Provider2 = _interopRequireDefault(_Provider);
	
	var _connect = __webpack_require__(225);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = undefined;
	
	var _react = __webpack_require__(2);
	
	var _storeShape = __webpack_require__(223);
	
	var _storeShape2 = _interopRequireDefault(_storeShape);
	
	var _warning = __webpack_require__(224);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;
	
	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}
	
	var Provider = function (_Component) {
	  _inherits(Provider, _Component);
	
	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };
	
	  function Provider(props, context) {
	    _classCallCheck(this, Provider);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    _this.store = props.store;
	    return _this;
	  }
	
	  Provider.prototype.render = function render() {
	    var children = this.props.children;
	
	    return _react.Children.only(children);
	  };
	
	  return Provider;
	}(_react.Component);
	
	exports["default"] = Provider;
	
	if (false) {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;
	
	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}
	
	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 224 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports["default"] = connect;
	
	var _react = __webpack_require__(2);
	
	var _storeShape = __webpack_require__(223);
	
	var _storeShape2 = _interopRequireDefault(_storeShape);
	
	var _shallowEqual = __webpack_require__(226);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _wrapActionCreators = __webpack_require__(227);
	
	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);
	
	var _warning = __webpack_require__(224);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _isPlainObject = __webpack_require__(230);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _hoistNonReactStatics = __webpack_require__(189);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant = __webpack_require__(169);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	
	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}
	
	// Helps track hot reloading.
	var nextVersion = 0;
	
	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;
	
	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }
	
	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;
	
	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;
	
	  // Helps track hot reloading.
	  var version = nextVersion++;
	
	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	
	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }
	
	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (false) {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }
	
	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);
	
	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };
	
	      function Connect(props, context) {
	        _classCallCheck(this, Connect);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	        _this.version = version;
	        _this.store = props.store || context.store;
	
	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));
	
	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }
	
	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }
	
	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);
	
	        if (false) {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };
	
	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';
	
	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;
	
	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }
	
	        if (false) {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };
	
	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }
	
	        var dispatch = store.dispatch;
	
	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);
	
	        if (false) {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };
	
	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';
	
	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;
	
	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }
	
	        if (false) {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };
	
	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }
	
	        this.stateProps = nextStateProps;
	        return true;
	      };
	
	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }
	
	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };
	
	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }
	
	        this.mergedProps = nextMergedProps;
	        return true;
	      };
	
	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };
	
	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };
	
	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };
	
	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };
	
	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };
	
	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };
	
	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };
	
	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }
	
	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }
	
	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }
	
	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };
	
	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');
	
	        return this.refs.wrappedInstance;
	      };
	
	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;
	
	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	
	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }
	
	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }
	
	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }
	
	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }
	
	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }
	
	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }
	
	        return this.renderedElement;
	      };
	
	      return Connect;
	    }(_react.Component);
	
	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };
	
	    if (false) {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }
	
	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }
	
	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}

/***/ },
/* 226 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = wrapActionCreators;
	
	var _redux = __webpack_require__(228);
	
	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(229);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(244);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(246);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(247);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(248);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(245);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (false) {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(230);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(240);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(231),
	    getPrototype = __webpack_require__(237),
	    isObjectLike = __webpack_require__(239);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(232),
	    getRawTag = __webpack_require__(235),
	    objectToString = __webpack_require__(236);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  value = Object(value);
	  return (symToStringTag && symToStringTag in value)
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(233);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(234);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 234 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(232);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ },
/* 236 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(238);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 238 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 239 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(241);


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ponyfill = __webpack_require__(243);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var root; /* global window */
	
	
	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}
	
	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(242)(module)))

/***/ },
/* 242 */,
/* 243 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	var _createStore = __webpack_require__(229);
	
	var _isPlainObject = __webpack_require__(230);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(245);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (false) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  if (false) {
	    var unexpectedKeyCache = {};
	  }
	
	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    if (false) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 245 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 246 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	var _compose = __webpack_require__(248);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 248 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(228);
	
	var _userReducer = __webpack_require__(250);
	
	var _userReducer2 = _interopRequireDefault(_userReducer);
	
	var _reactRouterRedux = __webpack_require__(321);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var leApp = (0, _redux.combineReducers)({
	  userReducer: _userReducer2.default,
	  routing: _reactRouterRedux.routerReducer
	});
	
	exports.default = leApp;

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(251);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _assign = __webpack_require__(252);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	exports.default = userReducer;
	
	var _ActionTypesRedux = __webpack_require__(289);
	
	var _localstorage = __webpack_require__(290);
	
	var _localstorage2 = _interopRequireDefault(_localstorage);
	
	var _auth = __webpack_require__(293);
	
	var _auth2 = _interopRequireDefault(_auth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initialState = {
	  name: "",
	  favourites: []
	};
	// Helpers
	function removeItem(item, list) {
	  //takes a string as 'item', finds in the array as 'list',
	  //then removes it from the list.
	  for (var i = 0; i < list.length; i++) {
	    if (item === list[i]) {
	      list.splice(i, 1);
	    }
	  }
	}
	function userReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _ActionTypesRedux.SET_SESSION:
	      {
	        var obj = {};
	        obj["name"] = action.name;
	        obj["favourites"] = action.favourites;
	        return (0, _assign2.default)({}, state, obj);
	      }
	    case _ActionTypesRedux.ADD_FAVOURITE:
	      {
	        return (0, _extends3.default)({}, state, {
	          favourites: state.favourites.concat(action.favourite) });
	      }
	    case _ActionTypesRedux.REMOVE_FAVOURITE:
	      {
	
	        //let tempFavourites = state.favourites.concat();
	        console.log(state.favourites);
	        _.remove(state.favourites, function (favourite) {
	          return favourite.id === action.favourite.id;
	        });
	        return (0, _extends3.default)({}, state, {
	          favourites: state.favourites });
	      }
	    default:
	      return state;
	  }
	}

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(252);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(253), __esModule: true };

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(254);
	module.exports = __webpack_require__(257).Object.assign;

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(255);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(270)});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(256)
	  , core      = __webpack_require__(257)
	  , ctx       = __webpack_require__(258)
	  , hide      = __webpack_require__(260)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 256 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 257 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(259);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 259 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(261)
	  , createDesc = __webpack_require__(269);
	module.exports = __webpack_require__(265) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(262)
	  , IE8_DOM_DEFINE = __webpack_require__(264)
	  , toPrimitive    = __webpack_require__(268)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(265) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(263);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 263 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(265) && !__webpack_require__(266)(function(){
	  return Object.defineProperty(__webpack_require__(267)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(266)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 266 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(263)
	  , document = __webpack_require__(256).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(263);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 269 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(271)
	  , gOPS     = __webpack_require__(286)
	  , pIE      = __webpack_require__(287)
	  , toObject = __webpack_require__(288)
	  , IObject  = __webpack_require__(275)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(266)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(272)
	  , enumBugKeys = __webpack_require__(285);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(273)
	  , toIObject    = __webpack_require__(274)
	  , arrayIndexOf = __webpack_require__(278)(false)
	  , IE_PROTO     = __webpack_require__(282)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 273 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(275)
	  , defined = __webpack_require__(277);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(276);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 276 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 277 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(274)
	  , toLength  = __webpack_require__(279)
	  , toIndex   = __webpack_require__(281);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(280)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 280 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(280)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(283)('keys')
	  , uid    = __webpack_require__(284);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(256)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 284 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 285 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 286 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 287 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(277);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 289 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// This file defines the string variables that represents the action
	
	//For the UserReducer
	var SET_SESSION = exports.SET_SESSION = 'SET_SESSION';
	var ADD_FAVOURITE = exports.ADD_FAVOURITE = 'ADD_FAVOURITE';
	var REMOVE_FAVOURITE = exports.REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _stringify = __webpack_require__(291);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// global to cache value
	var storage = {
	
	    localStorageGet: function localStorageGet(pKey) {
	        return _.isUndefined(localStorage[pKey]) ? undefined : JSON.parse(localStorage[pKey]);
	    },
	
	    localStorageSet: function localStorageSet(pKey, pValue) {
	        localStorage[pKey] = (0, _stringify2.default)(pValue);
	    },
	
	    localStorageDelete: function localStorageDelete(pKey) {
	        localStorage.removeItem(pKey);
	    }
	};
	
	module.exports = storage;

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(292), __esModule: true };

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(257)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var axios = __webpack_require__(294),
	    qs = __webpack_require__(316),
	    _ = __webpack_require__(320),
	    storage = __webpack_require__(290);
	
	var auth = {
	  /**
	   * Get user information from localStorage
	   * @return {[type]} [description]
	   */
	  getUserInfoFromLocalSotrage: function getUserInfoFromLocalSotrage() {
	    return {
	      data: {
	        access_token: storage.localStorageGet("token"),
	        displayName: storage.localStorageGet("displayName"),
	        userId: storage.localStorageGet("userId")
	      }
	    };
	  },
	
	  /**
	   * Verify login
	   * @param  {[type]}   username [description]
	   * @param  {[type]}   password [description]
	   * @param  {Function} cb       [description]
	   * @return {[type]}            [description]
	   */
	  login: function login(username, password, cb) {
	    cb = cb || arguments[arguments.length - 1];
	    // shortcut to false if no credentials passed
	    //
	    // already logged in?
	    if (storage.localStorageGet("token")) {
	      if (cb) {
	        cb(true, this.getUserInfoFromLocalSotrage());
	      }
	      this.onChange(true, this.getUserInfoFromLocalSotrage());
	      this.verifyToken();
	      return;
	    }
	
	    // shortcut to false if no credentials passed
	    if (_.isUndefined(username) || _.isUndefined(password)) {
	      if (cb) {
	        cb(false, this.getUserInfoFromLocalSotrage());
	      }
	      this.onChange(false, this.getUserInfoFromLocalSotrage());
	      return;
	    }
	    axios.get(API_URL + "/sessions/create", {
	      params: {
	        username: username,
	        password: password
	      }
	    }).then(function (response) {
	      this.destroyLocalStorage();
	
	      var displayName = response.data.displayName.split(" ");
	      var firstName = displayName[0];
	      var lastName = displayName[1];
	
	      storage.localStorageSet("token", response.data.access_token);
	      storage.localStorageSet("displayName", response.data.displayName);
	      storage.localStorageSet("picture", response.data.picture);
	      storage.localStorageSet("userId", response.data.id);
	      if (cb) {
	        cb(true, response);
	      }
	      this.onChange(true, response);
	    }.bind(this)).catch(function (response) {
	      if (cb) {
	        cb(false, response);
	      }
	      this.onChange(false, response);
	    }.bind(this));
	  },
	
	  /**
	   * Create a new account
	   * @param  {[type]}   params [description]
	   * @param  {Function} cb     [description]
	   * @return {[type]}          [description]
	   */
	  signup: function signup(params, cb) {
	    params = params || {};
	
	    var signupParams = qs.stringify(params);
	
	    axios.post(API_URL + "/user/create", signupParams, {
	      headers: {
	        "Content-Type": "application/x-www-form-urlencoded"
	      }
	    }).then(function (response) {
	
	      mixpanel.track("create_account");
	
	      if (cb) {
	        cb(true, response);
	      }
	      this.onChange(true, response);
	    }).catch(function (response) {
	      if (cb) {
	        cb(false, response);
	      }
	      this.onChange(true, response);
	    });
	  },
	
	  /**
	   * Logout user
	   * @param  {Function} cb [description]
	   * @return {[type]}      [description]
	   */
	  logout: function logout() {
	    this.destroyLocalStorage();
	  },
	
	  /**
	   * Verify if user is already logged in
	   * @param  {Function} cb [description]
	   * @return {[type]}      [description]
	   */
	  verifyToken: function verifyToken() {
	    axios.get(API_URL + "/sessions/verify", {
	      headers: this.authHeader()
	    }).then(function (response) {
	      mixpanel.identify(response.data.id);
	      if (storage.localStorageGet("displayName") !== response.data.displayName && !_.isUndefined(response.data.displayName)) {
	        storage.localStorageSet("displayName", response.data.displayName);
	      }
	      if (storage.localStorageGet("picture") !== response.data.picture && !_.isUndefined(response.data.displayName)) {
	        storage.localStorageSet("picture", response.data.picture);
	      }
	      this.onChange(true, this.getUserInfoFromLocalSotrage());
	    }.bind(this)).catch(function (response) {
	      this.destroyLocalStorage();
	      this.onChange(true, this.getUserInfoFromLocalSotrage());
	    }.bind(this));
	  },
	
	  /**
	   * Get profile from current user
	   * @return {[type]} [description]
	   */
	  currentUser: function currentUser() {
	    return axios.get(API_URL + "/me", {
	      headers: this.authHeader()
	    });
	  },
	
	  /**
	   * Build auth token
	   * @return {[type]} [description]
	   */
	  authHeader: function authHeader() {
	    return this.getToken() ? { "Authorization": "Bearer " + this.getToken() } : {};
	  },
	
	  /**
	   * Get token
	   * @return {[type]} [description]
	   */
	  getToken: function getToken() {
	    return storage.localStorageGet("token");
	  },
	
	  loggedIn: function loggedIn() {
	    return !_.isUndefined(storage.localStorageGet("userLogged"));
	  },
	  /**
	   * Get usedId
	   * @return {[type]} [description]
	   */
	  getUserId: function getUserId() {
	    return storage.localStorageGet('userId');
	  },
	
	  /**
	   * destroy all user login information saved in localstorage
	   * @return {[type]} [description]
	   */
	  destroyLocalStorage: function destroyLocalStorage() {
	    storage.localStorageDelete('token');
	    storage.localStorageDelete('displayName');
	    storage.localStorageDelete('picture');
	    storage.localStorageDelete('userId');
	  }
	};
	
	module.exports = auth;

/***/ },
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stringify = __webpack_require__(317);
	var Parse = __webpack_require__(319);
	
	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__(318);
	
	var arrayPrefixGenerators = {
	    brackets: function brackets(prefix) {
	        return prefix + '[]';
	    },
	    indices: function indices(prefix, key) {
	        return prefix + '[' + key + ']';
	    },
	    repeat: function repeat(prefix) {
	        return prefix;
	    }
	};
	
	var defaults = {
	    delimiter: '&',
	    strictNullHandling: false,
	    skipNulls: false,
	    encode: true,
	    encoder: Utils.encode
	};
	
	var stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots) {
	    var obj = object;
	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    } else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    } else if (obj === null) {
	        if (strictNullHandling) {
	            return encoder ? encoder(prefix) : prefix;
	        }
	
	        obj = '';
	    }
	
	    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || Utils.isBuffer(obj)) {
	        if (encoder) {
	            return [encoder(prefix) + '=' + encoder(obj)];
	        }
	        return [prefix + '=' + String(obj)];
	    }
	
	    var values = [];
	
	    if (typeof obj === 'undefined') {
	        return values;
	    }
	
	    var objKeys;
	    if (Array.isArray(filter)) {
	        objKeys = filter;
	    } else {
	        var keys = Object.keys(obj);
	        objKeys = sort ? keys.sort(sort) : keys;
	    }
	
	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];
	
	        if (skipNulls && obj[key] === null) {
	            continue;
	        }
	
	        if (Array.isArray(obj)) {
	            values = values.concat(stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots));
	        } else {
	            values = values.concat(stringify(obj[key], prefix + (allowDots ? '.' + key : '[' + key + ']'), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots));
	        }
	    }
	
	    return values;
	};
	
	module.exports = function (object, opts) {
	    var obj = object;
	    var options = opts || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
	    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
	    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
	    var encoder = encode ? (typeof options.encoder === 'function' ? options.encoder : defaults.encoder) : null;
	    var sort = typeof options.sort === 'function' ? options.sort : null;
	    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
	    var objKeys;
	    var filter;
	
	    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
	        throw new TypeError('Encoder has to be a function.');
	    }
	
	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    } else if (Array.isArray(options.filter)) {
	        objKeys = filter = options.filter;
	    }
	
	    var keys = [];
	
	    if (typeof obj !== 'object' || obj === null) {
	        return '';
	    }
	
	    var arrayFormat;
	    if (options.arrayFormat in arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    } else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    } else {
	        arrayFormat = 'indices';
	    }
	
	    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
	
	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }
	
	    if (sort) {
	        objKeys.sort(sort);
	    }
	
	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];
	
	        if (skipNulls && obj[key] === null) {
	            continue;
	        }
	
	        keys = keys.concat(stringify(obj[key], key, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots));
	    }
	
	    return keys.join(delimiter);
	};


/***/ },
/* 318 */
/***/ function(module, exports) {

	'use strict';
	
	var hexTable = (function () {
	    var array = new Array(256);
	    for (var i = 0; i < 256; ++i) {
	        array[i] = '%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase();
	    }
	
	    return array;
	}());
	
	exports.arrayToObject = function (source, options) {
	    var obj = options.plainObjects ? Object.create(null) : {};
	    for (var i = 0; i < source.length; ++i) {
	        if (typeof source[i] !== 'undefined') {
	            obj[i] = source[i];
	        }
	    }
	
	    return obj;
	};
	
	exports.merge = function (target, source, options) {
	    if (!source) {
	        return target;
	    }
	
	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        } else if (typeof target === 'object') {
	            target[source] = true;
	        } else {
	            return [target, source];
	        }
	
	        return target;
	    }
	
	    if (typeof target !== 'object') {
	        return [target].concat(source);
	    }
	
	    var mergeTarget = target;
	    if (Array.isArray(target) && !Array.isArray(source)) {
	        mergeTarget = exports.arrayToObject(target, options);
	    }
	
	    return Object.keys(source).reduce(function (acc, key) {
	        var value = source[key];
	
	        if (Object.prototype.hasOwnProperty.call(acc, key)) {
	            acc[key] = exports.merge(acc[key], value, options);
	        } else {
	            acc[key] = value;
	        }
	        return acc;
	    }, mergeTarget);
	};
	
	exports.decode = function (str) {
	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};
	
	exports.encode = function (str) {
	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }
	
	    var string = typeof str === 'string' ? str : String(str);
	
	    var out = '';
	    for (var i = 0; i < string.length; ++i) {
	        var c = string.charCodeAt(i);
	
	        if (
	            c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A) // A-Z
	        ) {
	            out += string.charAt(i);
	            continue;
	        }
	
	        if (c < 0x80) {
	            out = out + hexTable[c];
	            continue;
	        }
	
	        if (c < 0x800) {
	            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }
	
	        if (c < 0xD800 || c >= 0xE000) {
	            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }
	
	        i += 1;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
	        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)];
	    }
	
	    return out;
	};
	
	exports.compact = function (obj, references) {
	    if (typeof obj !== 'object' || obj === null) {
	        return obj;
	    }
	
	    var refs = references || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }
	
	    refs.push(obj);
	
	    if (Array.isArray(obj)) {
	        var compacted = [];
	
	        for (var i = 0; i < obj.length; ++i) {
	            if (obj[i] && typeof obj[i] === 'object') {
	                compacted.push(exports.compact(obj[i], refs));
	            } else if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }
	
	        return compacted;
	    }
	
	    var keys = Object.keys(obj);
	    for (var j = 0; j < keys.length; ++j) {
	        var key = keys[j];
	        obj[key] = exports.compact(obj[key], refs);
	    }
	
	    return obj;
	};
	
	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};
	
	exports.isBuffer = function (obj) {
	    if (obj === null || typeof obj === 'undefined') {
	        return false;
	    }
	
	    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
	};


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__(318);
	
	var defaults = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000,
	    strictNullHandling: false,
	    plainObjects: false,
	    allowPrototypes: false,
	    allowDots: false,
	    decoder: Utils.decode
	};
	
	var parseValues = function parseValues(str, options) {
	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);
	
	    for (var i = 0; i < parts.length; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;
	
	        if (pos === -1) {
	            obj[options.decoder(part)] = '';
	
	            if (options.strictNullHandling) {
	                obj[options.decoder(part)] = null;
	            }
	        } else {
	            var key = options.decoder(part.slice(0, pos));
	            var val = options.decoder(part.slice(pos + 1));
	
	            if (Object.prototype.hasOwnProperty.call(obj, key)) {
	                obj[key] = [].concat(obj[key]).concat(val);
	            } else {
	                obj[key] = val;
	            }
	        }
	    }
	
	    return obj;
	};
	
	var parseObject = function parseObject(chain, val, options) {
	    if (!chain.length) {
	        return val;
	    }
	
	    var root = chain.shift();
	
	    var obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(parseObject(chain, val, options));
	    } else {
	        obj = options.plainObjects ? Object.create(null) : {};
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        if (
	            !isNaN(index) &&
	            root !== cleanRoot &&
	            String(index) === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays && index <= options.arrayLimit)
	        ) {
	            obj = [];
	            obj[index] = parseObject(chain, val, options);
	        } else {
	            obj[cleanRoot] = parseObject(chain, val, options);
	        }
	    }
	
	    return obj;
	};
	
	var parseKeys = function parseKeys(givenKey, val, options) {
	    if (!givenKey) {
	        return;
	    }
	
	    // Transform dot notation to bracket notation
	    var key = options.allowDots ? givenKey.replace(/\.([^\.\[]+)/g, '[$1]') : givenKey;
	
	    // The regex chunks
	
	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;
	
	    // Get the parent
	
	    var segment = parent.exec(key);
	
	    // Stash the parent if it exists
	
	    var keys = [];
	    if (segment[1]) {
	        // If we aren't using plain objects, optionally prefix keys
	        // that would overwrite object prototype properties
	        if (!options.plainObjects && Object.prototype.hasOwnProperty(segment[1])) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }
	
	        keys.push(segment[1]);
	    }
	
	    // Loop through children appending to the array until we hit depth
	
	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {
	        i += 1;
	        if (!options.plainObjects && Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
	            if (!options.allowPrototypes) {
	                continue;
	            }
	        }
	        keys.push(segment[1]);
	    }
	
	    // If there's a remainder, just add whatever is left
	
	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }
	
	    return parseObject(keys, val, options);
	};
	
	module.exports = function (str, opts) {
	    var options = opts || {};
	
	    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
	        throw new TypeError('Decoder has to be a function.');
	    }
	
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
	    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
	    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
	    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	
	    if (str === '' || str === null || typeof str === 'undefined') {
	        return options.plainObjects ? Object.create(null) : {};
	    }
	
	    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
	    var obj = options.plainObjects ? Object.create(null) : {};
	
	    // Iterate over the keys and setup the new object
	
	    var keys = Object.keys(tempObj);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var newObj = parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj, options);
	    }
	
	    return Utils.compact(obj);
	};


/***/ },
/* 320 */,
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerMiddleware = exports.routerActions = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.CALL_HISTORY_METHOD = exports.routerReducer = exports.LOCATION_CHANGE = exports.syncHistoryWithStore = undefined;
	
	var _reducer = __webpack_require__(322);
	
	Object.defineProperty(exports, 'LOCATION_CHANGE', {
	  enumerable: true,
	  get: function get() {
	    return _reducer.LOCATION_CHANGE;
	  }
	});
	Object.defineProperty(exports, 'routerReducer', {
	  enumerable: true,
	  get: function get() {
	    return _reducer.routerReducer;
	  }
	});
	
	var _actions = __webpack_require__(323);
	
	Object.defineProperty(exports, 'CALL_HISTORY_METHOD', {
	  enumerable: true,
	  get: function get() {
	    return _actions.CALL_HISTORY_METHOD;
	  }
	});
	Object.defineProperty(exports, 'push', {
	  enumerable: true,
	  get: function get() {
	    return _actions.push;
	  }
	});
	Object.defineProperty(exports, 'replace', {
	  enumerable: true,
	  get: function get() {
	    return _actions.replace;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _actions.go;
	  }
	});
	Object.defineProperty(exports, 'goBack', {
	  enumerable: true,
	  get: function get() {
	    return _actions.goBack;
	  }
	});
	Object.defineProperty(exports, 'goForward', {
	  enumerable: true,
	  get: function get() {
	    return _actions.goForward;
	  }
	});
	Object.defineProperty(exports, 'routerActions', {
	  enumerable: true,
	  get: function get() {
	    return _actions.routerActions;
	  }
	});
	
	var _sync = __webpack_require__(324);
	
	var _sync2 = _interopRequireDefault(_sync);
	
	var _middleware = __webpack_require__(325);
	
	var _middleware2 = _interopRequireDefault(_middleware);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports.syncHistoryWithStore = _sync2['default'];
	exports.routerMiddleware = _middleware2['default'];

/***/ },
/* 322 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.routerReducer = routerReducer;
	/**
	 * This action type will be dispatched when your history
	 * receives a location change.
	 */
	var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
	
	var initialState = {
	  locationBeforeTransitions: null
	};
	
	/**
	 * This reducer will update the state with the most recent location history
	 * has transitioned to. This may not be in sync with the router, particularly
	 * if you have asynchronously-loaded routes, so reading from and relying on
	 * this state is discouraged.
	 */
	function routerReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      type = _ref.type,
	      payload = _ref.payload;
	
	  if (type === LOCATION_CHANGE) {
	    return _extends({}, state, { locationBeforeTransitions: payload });
	  }
	
	  return state;
	}

/***/ },
/* 323 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * This action type will be dispatched by the history actions below.
	 * If you're writing a middleware to watch for navigation events, be sure to
	 * look for actions of this type.
	 */
	var CALL_HISTORY_METHOD = exports.CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';
	
	function updateLocation(method) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return {
	      type: CALL_HISTORY_METHOD,
	      payload: { method: method, args: args }
	    };
	  };
	}
	
	/**
	 * These actions correspond to the history API.
	 * The associated routerMiddleware will capture these events before they get to
	 * your reducer and reissue them as the matching function on your history.
	 */
	var push = exports.push = updateLocation('push');
	var replace = exports.replace = updateLocation('replace');
	var go = exports.go = updateLocation('go');
	var goBack = exports.goBack = updateLocation('goBack');
	var goForward = exports.goForward = updateLocation('goForward');
	
	var routerActions = exports.routerActions = { push: push, replace: replace, go: go, goBack: goBack, goForward: goForward };

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = syncHistoryWithStore;
	
	var _reducer = __webpack_require__(322);
	
	var defaultSelectLocationState = function defaultSelectLocationState(state) {
	  return state.routing;
	};
	
	/**
	 * This function synchronizes your history state with the Redux store.
	 * Location changes flow from history to the store. An enhanced history is
	 * returned with a listen method that responds to store updates for location.
	 *
	 * When this history is provided to the router, this means the location data
	 * will flow like this:
	 * history.push -> store.dispatch -> enhancedHistory.listen -> router
	 * This ensures that when the store state changes due to a replay or other
	 * event, the router will be updated appropriately and can transition to the
	 * correct router state.
	 */
	function syncHistoryWithStore(history, store) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      _ref$selectLocationSt = _ref.selectLocationState,
	      selectLocationState = _ref$selectLocationSt === undefined ? defaultSelectLocationState : _ref$selectLocationSt,
	      _ref$adjustUrlOnRepla = _ref.adjustUrlOnReplay,
	      adjustUrlOnReplay = _ref$adjustUrlOnRepla === undefined ? true : _ref$adjustUrlOnRepla;
	
	  // Ensure that the reducer is mounted on the store and functioning properly.
	  if (typeof selectLocationState(store.getState()) === 'undefined') {
	    throw new Error('Expected the routing state to be available either as `state.routing` ' + 'or as the custom expression you can specify as `selectLocationState` ' + 'in the `syncHistoryWithStore()` options. ' + 'Ensure you have added the `routerReducer` to your store\'s ' + 'reducers via `combineReducers` or whatever method you use to isolate ' + 'your reducers.');
	  }
	
	  var initialLocation = void 0;
	  var isTimeTraveling = void 0;
	  var unsubscribeFromStore = void 0;
	  var unsubscribeFromHistory = void 0;
	  var currentLocation = void 0;
	
	  // What does the store say about current location?
	  var getLocationInStore = function getLocationInStore(useInitialIfEmpty) {
	    var locationState = selectLocationState(store.getState());
	    return locationState.locationBeforeTransitions || (useInitialIfEmpty ? initialLocation : undefined);
	  };
	
	  // Init initialLocation with potential location in store
	  initialLocation = getLocationInStore();
	
	  // If the store is replayed, update the URL in the browser to match.
	  if (adjustUrlOnReplay) {
	    var handleStoreChange = function handleStoreChange() {
	      var locationInStore = getLocationInStore(true);
	      if (currentLocation === locationInStore || initialLocation === locationInStore) {
	        return;
	      }
	
	      // Update address bar to reflect store state
	      isTimeTraveling = true;
	      currentLocation = locationInStore;
	      history.transitionTo(_extends({}, locationInStore, {
	        action: 'PUSH'
	      }));
	      isTimeTraveling = false;
	    };
	
	    unsubscribeFromStore = store.subscribe(handleStoreChange);
	    handleStoreChange();
	  }
	
	  // Whenever location changes, dispatch an action to get it in the store
	  var handleLocationChange = function handleLocationChange(location) {
	    // ... unless we just caused that location change
	    if (isTimeTraveling) {
	      return;
	    }
	
	    // Remember where we are
	    currentLocation = location;
	
	    // Are we being called for the first time?
	    if (!initialLocation) {
	      // Remember as a fallback in case state is reset
	      initialLocation = location;
	
	      // Respect persisted location, if any
	      if (getLocationInStore()) {
	        return;
	      }
	    }
	
	    // Tell the store to update by dispatching an action
	    store.dispatch({
	      type: _reducer.LOCATION_CHANGE,
	      payload: location
	    });
	  };
	  unsubscribeFromHistory = history.listen(handleLocationChange);
	
	  // support history 3.x
	  if (history.getCurrentLocation) {
	    handleLocationChange(history.getCurrentLocation());
	  }
	
	  // The enhanced history uses store as source of truth
	  return _extends({}, history, {
	    // The listeners are subscribed to the store instead of history
	    listen: function listen(listener) {
	      // Copy of last location.
	      var lastPublishedLocation = getLocationInStore(true);
	
	      // Keep track of whether we unsubscribed, as Redux store
	      // only applies changes in subscriptions on next dispatch
	      var unsubscribed = false;
	      var unsubscribeFromStore = store.subscribe(function () {
	        var currentLocation = getLocationInStore(true);
	        if (currentLocation === lastPublishedLocation) {
	          return;
	        }
	        lastPublishedLocation = currentLocation;
	        if (!unsubscribed) {
	          listener(lastPublishedLocation);
	        }
	      });
	
	      // History listeners expect a synchronous call. Make the first call to the
	      // listener after subscribing to the store, in case the listener causes a
	      // location change (e.g. when it redirects)
	      listener(lastPublishedLocation);
	
	      // Let user unsubscribe later
	      return function () {
	        unsubscribed = true;
	        unsubscribeFromStore();
	      };
	    },
	
	
	    // It also provides a way to destroy internal listeners
	    unsubscribe: function unsubscribe() {
	      if (adjustUrlOnReplay) {
	        unsubscribeFromStore();
	      }
	      unsubscribeFromHistory();
	    }
	  });
	}

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = routerMiddleware;
	
	var _actions = __webpack_require__(323);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
	 * provided history object. This will prevent these actions from reaching your
	 * reducer or any middleware that comes after this one.
	 */
	function routerMiddleware(history) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type !== _actions.CALL_HISTORY_METHOD) {
	          return next(action);
	        }
	
	        var _action$payload = action.payload,
	            method = _action$payload.method,
	            args = _action$payload.args;
	
	        history[method].apply(history, _toConsumableArray(args));
	      };
	    };
	  };
	}

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// SCSS
	__webpack_require__(327);
	
	var React = __webpack_require__(2),
	    classnames = __webpack_require__(329),
	    request = __webpack_require__(330),
	    localStorage = __webpack_require__(290),
	    _ = __webpack_require__(320);
	
	var App = React.createClass({
	  displayName: "App",
	
	
	  getInitialState: function getInitialState() {
	    return {};
	  },
	
	  componentWillMount: function componentWillMount() {
	    if (_.isUndefined(localStorage.localStorageGet("users"))) {
	      localStorage.localStorageSet("users", {});
	    }
	  },
	
	  render: function render() {
	    console.log('testin entry point');
	    return React.createElement(
	      "div",
	      { className: 'Item' },
	      this.props.children
	    );
	  }
	});
	
	module.exports = App;

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(328)();
	// imports
	
	
	// module
	exports.push([module.id, "meta.foundation-version {\n  font-family: \"/5.5.3/\"; }\n\nmeta.foundation-mq-small {\n  font-family: \"/only screen/\";\n  width: 0; }\n\nmeta.foundation-mq-small-only {\n  font-family: \"/only screen and (max-width: 53.75em)/\";\n  width: 0; }\n\nmeta.foundation-mq-medium {\n  font-family: \"/only screen and (min-width:53.8125em)/\";\n  width: 53.8125em; }\n\nmeta.foundation-mq-medium-only {\n  font-family: \"/only screen and (min-width:53.8125em) and (max-width:53.8125em)/\";\n  width: 53.8125em; }\n\nmeta.foundation-mq-large {\n  font-family: \"/only screen and (min-width:53.875em)/\";\n  width: 53.875em; }\n\nmeta.foundation-mq-large-only {\n  font-family: \"/only screen and (min-width:53.875em) and (max-width:90em)/\";\n  width: 53.875em; }\n\nmeta.foundation-mq-xlarge {\n  font-family: \"/only screen and (min-width:90.0625em)/\";\n  width: 90.0625em; }\n\nmeta.foundation-mq-xlarge-only {\n  font-family: \"/only screen and (min-width:90.0625em) and (max-width:120em)/\";\n  width: 90.0625em; }\n\nmeta.foundation-mq-xxlarge {\n  font-family: \"/only screen and (min-width:120.0625em)/\";\n  width: 120.0625em; }\n\nmeta.foundation-data-attribute-namespace {\n  font-family: false; }\n\nhtml, body {\n  height: 100%; }\n\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml,\nbody {\n  font-size: 100%; }\n\nbody {\n  background: #fff;\n  color: #222;\n  cursor: auto;\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.5;\n  margin: 0;\n  padding: 0;\n  position: relative; }\n\na:hover {\n  cursor: pointer; }\n\nimg {\n  max-width: 100%;\n  height: auto; }\n\nimg {\n  -ms-interpolation-mode: bicubic; }\n\n#map_canvas img,\n#map_canvas embed,\n#map_canvas object,\n.map_canvas img,\n.map_canvas embed,\n.map_canvas object,\n.mqa-display img,\n.mqa-display embed,\n.mqa-display object {\n  max-width: none !important; }\n\n.left {\n  float: left !important; }\n\n.right {\n  float: right !important; }\n\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table; }\n\n.clearfix:after {\n  clear: both; }\n\n.hide {\n  display: none; }\n\n.invisible {\n  visibility: hidden; }\n\n.antialiased {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nimg {\n  display: inline-block;\n  vertical-align: middle; }\n\ntextarea {\n  height: auto;\n  min-height: 50px; }\n\nselect {\n  width: 100%; }\n\n.row {\n  margin: 0 auto;\n  max-width: 62.5rem;\n  width: 100%; }\n  .row:before, .row:after {\n    content: \" \";\n    display: table; }\n  .row:after {\n    clear: both; }\n  .row.collapse > .column,\n  .row.collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row .row {\n    margin: 0 -0.9375rem;\n    max-width: none;\n    width: auto; }\n    .row .row:before, .row .row:after {\n      content: \" \";\n      display: table; }\n    .row .row:after {\n      clear: both; }\n    .row .row.collapse {\n      margin: 0;\n      max-width: none;\n      width: auto; }\n      .row .row.collapse:before, .row .row.collapse:after {\n        content: \" \";\n        display: table; }\n      .row .row.collapse:after {\n        clear: both; }\n\n.column,\n.columns {\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n  width: 100%;\n  float: left; }\n\n.column + .column:last-child,\n.columns + .column:last-child, .column +\n.columns:last-child,\n.columns +\n.columns:last-child {\n  float: right; }\n\n.column + .column.end,\n.columns + .column.end, .column +\n.columns.end,\n.columns +\n.columns.end {\n  float: left; }\n\n@media only screen {\n  .small-push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .small-pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .small-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .small-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .small-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .small-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .small-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .small-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .small-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .small-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .small-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .small-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .small-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .small-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .small-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .small-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .small-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .small-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .small-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .small-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .small-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .small-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .small-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .small-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n  .column,\n  .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .small-1 {\n    width: 8.33333%; }\n  .small-2 {\n    width: 16.66667%; }\n  .small-3 {\n    width: 25%; }\n  .small-4 {\n    width: 33.33333%; }\n  .small-5 {\n    width: 41.66667%; }\n  .small-6 {\n    width: 50%; }\n  .small-7 {\n    width: 58.33333%; }\n  .small-8 {\n    width: 66.66667%; }\n  .small-9 {\n    width: 75%; }\n  .small-10 {\n    width: 83.33333%; }\n  .small-11 {\n    width: 91.66667%; }\n  .small-12 {\n    width: 100%; }\n  .small-offset-0 {\n    margin-left: 0 !important; }\n  .small-offset-1 {\n    margin-left: 8.33333% !important; }\n  .small-offset-2 {\n    margin-left: 16.66667% !important; }\n  .small-offset-3 {\n    margin-left: 25% !important; }\n  .small-offset-4 {\n    margin-left: 33.33333% !important; }\n  .small-offset-5 {\n    margin-left: 41.66667% !important; }\n  .small-offset-6 {\n    margin-left: 50% !important; }\n  .small-offset-7 {\n    margin-left: 58.33333% !important; }\n  .small-offset-8 {\n    margin-left: 66.66667% !important; }\n  .small-offset-9 {\n    margin-left: 75% !important; }\n  .small-offset-10 {\n    margin-left: 83.33333% !important; }\n  .small-offset-11 {\n    margin-left: 91.66667% !important; }\n  .small-reset-order {\n    float: left;\n    left: auto;\n    margin-left: 0;\n    margin-right: 0;\n    right: auto; }\n  .column.small-centered,\n  .columns.small-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  .column.small-uncentered,\n  .columns.small-uncentered {\n    float: left;\n    margin-left: 0;\n    margin-right: 0; }\n  .column.small-centered:last-child,\n  .columns.small-centered:last-child {\n    float: none; }\n  .column.small-uncentered:last-child,\n  .columns.small-uncentered:last-child {\n    float: left; }\n  .column.small-uncentered.opposite,\n  .columns.small-uncentered.opposite {\n    float: right; }\n  .row.small-collapse > .column,\n  .row.small-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.small-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row.small-uncollapse > .column,\n  .row.small-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; } }\n\n@media only screen and (min-width: 53.8125em) {\n  .medium-push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .medium-pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .medium-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .medium-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .medium-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .medium-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .medium-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .medium-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .medium-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .medium-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .medium-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .medium-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .medium-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .medium-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .medium-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .medium-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .medium-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .medium-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .medium-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .medium-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .medium-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .medium-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .medium-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .medium-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n  .column,\n  .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .medium-1 {\n    width: 8.33333%; }\n  .medium-2 {\n    width: 16.66667%; }\n  .medium-3 {\n    width: 25%; }\n  .medium-4 {\n    width: 33.33333%; }\n  .medium-5 {\n    width: 41.66667%; }\n  .medium-6 {\n    width: 50%; }\n  .medium-7 {\n    width: 58.33333%; }\n  .medium-8 {\n    width: 66.66667%; }\n  .medium-9 {\n    width: 75%; }\n  .medium-10 {\n    width: 83.33333%; }\n  .medium-11 {\n    width: 91.66667%; }\n  .medium-12 {\n    width: 100%; }\n  .medium-offset-0 {\n    margin-left: 0 !important; }\n  .medium-offset-1 {\n    margin-left: 8.33333% !important; }\n  .medium-offset-2 {\n    margin-left: 16.66667% !important; }\n  .medium-offset-3 {\n    margin-left: 25% !important; }\n  .medium-offset-4 {\n    margin-left: 33.33333% !important; }\n  .medium-offset-5 {\n    margin-left: 41.66667% !important; }\n  .medium-offset-6 {\n    margin-left: 50% !important; }\n  .medium-offset-7 {\n    margin-left: 58.33333% !important; }\n  .medium-offset-8 {\n    margin-left: 66.66667% !important; }\n  .medium-offset-9 {\n    margin-left: 75% !important; }\n  .medium-offset-10 {\n    margin-left: 83.33333% !important; }\n  .medium-offset-11 {\n    margin-left: 91.66667% !important; }\n  .medium-reset-order {\n    float: left;\n    left: auto;\n    margin-left: 0;\n    margin-right: 0;\n    right: auto; }\n  .column.medium-centered,\n  .columns.medium-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  .column.medium-uncentered,\n  .columns.medium-uncentered {\n    float: left;\n    margin-left: 0;\n    margin-right: 0; }\n  .column.medium-centered:last-child,\n  .columns.medium-centered:last-child {\n    float: none; }\n  .column.medium-uncentered:last-child,\n  .columns.medium-uncentered:last-child {\n    float: left; }\n  .column.medium-uncentered.opposite,\n  .columns.medium-uncentered.opposite {\n    float: right; }\n  .row.medium-collapse > .column,\n  .row.medium-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.medium-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row.medium-uncollapse > .column,\n  .row.medium-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; } }\n\n@media only screen and (min-width: 53.875em) {\n  .large-push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .large-pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .large-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .large-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .large-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .large-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .large-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .large-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .large-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .large-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .large-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .large-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .large-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .large-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .large-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .large-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .large-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .large-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .large-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .large-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .large-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .large-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .large-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .large-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n  .column,\n  .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .large-1 {\n    width: 8.33333%; }\n  .large-2 {\n    width: 16.66667%; }\n  .large-3 {\n    width: 25%; }\n  .large-4 {\n    width: 33.33333%; }\n  .large-5 {\n    width: 41.66667%; }\n  .large-6 {\n    width: 50%; }\n  .large-7 {\n    width: 58.33333%; }\n  .large-8 {\n    width: 66.66667%; }\n  .large-9 {\n    width: 75%; }\n  .large-10 {\n    width: 83.33333%; }\n  .large-11 {\n    width: 91.66667%; }\n  .large-12 {\n    width: 100%; }\n  .large-offset-0 {\n    margin-left: 0 !important; }\n  .large-offset-1 {\n    margin-left: 8.33333% !important; }\n  .large-offset-2 {\n    margin-left: 16.66667% !important; }\n  .large-offset-3 {\n    margin-left: 25% !important; }\n  .large-offset-4 {\n    margin-left: 33.33333% !important; }\n  .large-offset-5 {\n    margin-left: 41.66667% !important; }\n  .large-offset-6 {\n    margin-left: 50% !important; }\n  .large-offset-7 {\n    margin-left: 58.33333% !important; }\n  .large-offset-8 {\n    margin-left: 66.66667% !important; }\n  .large-offset-9 {\n    margin-left: 75% !important; }\n  .large-offset-10 {\n    margin-left: 83.33333% !important; }\n  .large-offset-11 {\n    margin-left: 91.66667% !important; }\n  .large-reset-order {\n    float: left;\n    left: auto;\n    margin-left: 0;\n    margin-right: 0;\n    right: auto; }\n  .column.large-centered,\n  .columns.large-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  .column.large-uncentered,\n  .columns.large-uncentered {\n    float: left;\n    margin-left: 0;\n    margin-right: 0; }\n  .column.large-centered:last-child,\n  .columns.large-centered:last-child {\n    float: none; }\n  .column.large-uncentered:last-child,\n  .columns.large-uncentered:last-child {\n    float: left; }\n  .column.large-uncentered.opposite,\n  .columns.large-uncentered.opposite {\n    float: right; }\n  .row.large-collapse > .column,\n  .row.large-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.large-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row.large-uncollapse > .column,\n  .row.large-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; } }\n\n[class*=\"block-grid-\"] {\n  display: block;\n  padding: 0;\n  margin: 0 -0.625rem; }\n  [class*=\"block-grid-\"]:before, [class*=\"block-grid-\"]:after {\n    content: \" \";\n    display: table; }\n  [class*=\"block-grid-\"]:after {\n    clear: both; }\n  [class*=\"block-grid-\"] > li {\n    display: block;\n    float: left;\n    height: auto;\n    padding: 0 0.625rem 1.25rem; }\n\n@media only screen {\n  .small-block-grid-1 > li {\n    list-style: none;\n    width: 100%; }\n    .small-block-grid-1 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-1 > li:nth-of-type(1n+1) {\n      clear: both; }\n  .small-block-grid-2 > li {\n    list-style: none;\n    width: 50%; }\n    .small-block-grid-2 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-2 > li:nth-of-type(2n+1) {\n      clear: both; }\n  .small-block-grid-3 > li {\n    list-style: none;\n    width: 33.33333%; }\n    .small-block-grid-3 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-3 > li:nth-of-type(3n+1) {\n      clear: both; }\n  .small-block-grid-4 > li {\n    list-style: none;\n    width: 25%; }\n    .small-block-grid-4 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-4 > li:nth-of-type(4n+1) {\n      clear: both; }\n  .small-block-grid-5 > li {\n    list-style: none;\n    width: 20%; }\n    .small-block-grid-5 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-5 > li:nth-of-type(5n+1) {\n      clear: both; }\n  .small-block-grid-6 > li {\n    list-style: none;\n    width: 16.66667%; }\n    .small-block-grid-6 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-6 > li:nth-of-type(6n+1) {\n      clear: both; }\n  .small-block-grid-7 > li {\n    list-style: none;\n    width: 14.28571%; }\n    .small-block-grid-7 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-7 > li:nth-of-type(7n+1) {\n      clear: both; }\n  .small-block-grid-8 > li {\n    list-style: none;\n    width: 12.5%; }\n    .small-block-grid-8 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-8 > li:nth-of-type(8n+1) {\n      clear: both; }\n  .small-block-grid-9 > li {\n    list-style: none;\n    width: 11.11111%; }\n    .small-block-grid-9 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-9 > li:nth-of-type(9n+1) {\n      clear: both; }\n  .small-block-grid-10 > li {\n    list-style: none;\n    width: 10%; }\n    .small-block-grid-10 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-10 > li:nth-of-type(10n+1) {\n      clear: both; }\n  .small-block-grid-11 > li {\n    list-style: none;\n    width: 9.09091%; }\n    .small-block-grid-11 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-11 > li:nth-of-type(11n+1) {\n      clear: both; }\n  .small-block-grid-12 > li {\n    list-style: none;\n    width: 8.33333%; }\n    .small-block-grid-12 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-12 > li:nth-of-type(12n+1) {\n      clear: both; } }\n\n@media only screen and (min-width: 53.8125em) {\n  .medium-block-grid-1 > li {\n    list-style: none;\n    width: 100%; }\n    .medium-block-grid-1 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-1 > li:nth-of-type(1n+1) {\n      clear: both; }\n  .medium-block-grid-2 > li {\n    list-style: none;\n    width: 50%; }\n    .medium-block-grid-2 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-2 > li:nth-of-type(2n+1) {\n      clear: both; }\n  .medium-block-grid-3 > li {\n    list-style: none;\n    width: 33.33333%; }\n    .medium-block-grid-3 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-3 > li:nth-of-type(3n+1) {\n      clear: both; }\n  .medium-block-grid-4 > li {\n    list-style: none;\n    width: 25%; }\n    .medium-block-grid-4 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-4 > li:nth-of-type(4n+1) {\n      clear: both; }\n  .medium-block-grid-5 > li {\n    list-style: none;\n    width: 20%; }\n    .medium-block-grid-5 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-5 > li:nth-of-type(5n+1) {\n      clear: both; }\n  .medium-block-grid-6 > li {\n    list-style: none;\n    width: 16.66667%; }\n    .medium-block-grid-6 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-6 > li:nth-of-type(6n+1) {\n      clear: both; }\n  .medium-block-grid-7 > li {\n    list-style: none;\n    width: 14.28571%; }\n    .medium-block-grid-7 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-7 > li:nth-of-type(7n+1) {\n      clear: both; }\n  .medium-block-grid-8 > li {\n    list-style: none;\n    width: 12.5%; }\n    .medium-block-grid-8 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-8 > li:nth-of-type(8n+1) {\n      clear: both; }\n  .medium-block-grid-9 > li {\n    list-style: none;\n    width: 11.11111%; }\n    .medium-block-grid-9 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-9 > li:nth-of-type(9n+1) {\n      clear: both; }\n  .medium-block-grid-10 > li {\n    list-style: none;\n    width: 10%; }\n    .medium-block-grid-10 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-10 > li:nth-of-type(10n+1) {\n      clear: both; }\n  .medium-block-grid-11 > li {\n    list-style: none;\n    width: 9.09091%; }\n    .medium-block-grid-11 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-11 > li:nth-of-type(11n+1) {\n      clear: both; }\n  .medium-block-grid-12 > li {\n    list-style: none;\n    width: 8.33333%; }\n    .medium-block-grid-12 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-12 > li:nth-of-type(12n+1) {\n      clear: both; } }\n\n@media only screen and (min-width: 53.875em) {\n  .large-block-grid-1 > li {\n    list-style: none;\n    width: 100%; }\n    .large-block-grid-1 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-1 > li:nth-of-type(1n+1) {\n      clear: both; }\n  .large-block-grid-2 > li {\n    list-style: none;\n    width: 50%; }\n    .large-block-grid-2 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-2 > li:nth-of-type(2n+1) {\n      clear: both; }\n  .large-block-grid-3 > li {\n    list-style: none;\n    width: 33.33333%; }\n    .large-block-grid-3 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-3 > li:nth-of-type(3n+1) {\n      clear: both; }\n  .large-block-grid-4 > li {\n    list-style: none;\n    width: 25%; }\n    .large-block-grid-4 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-4 > li:nth-of-type(4n+1) {\n      clear: both; }\n  .large-block-grid-5 > li {\n    list-style: none;\n    width: 20%; }\n    .large-block-grid-5 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-5 > li:nth-of-type(5n+1) {\n      clear: both; }\n  .large-block-grid-6 > li {\n    list-style: none;\n    width: 16.66667%; }\n    .large-block-grid-6 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-6 > li:nth-of-type(6n+1) {\n      clear: both; }\n  .large-block-grid-7 > li {\n    list-style: none;\n    width: 14.28571%; }\n    .large-block-grid-7 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-7 > li:nth-of-type(7n+1) {\n      clear: both; }\n  .large-block-grid-8 > li {\n    list-style: none;\n    width: 12.5%; }\n    .large-block-grid-8 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-8 > li:nth-of-type(8n+1) {\n      clear: both; }\n  .large-block-grid-9 > li {\n    list-style: none;\n    width: 11.11111%; }\n    .large-block-grid-9 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-9 > li:nth-of-type(9n+1) {\n      clear: both; }\n  .large-block-grid-10 > li {\n    list-style: none;\n    width: 10%; }\n    .large-block-grid-10 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-10 > li:nth-of-type(10n+1) {\n      clear: both; }\n  .large-block-grid-11 > li {\n    list-style: none;\n    width: 9.09091%; }\n    .large-block-grid-11 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-11 > li:nth-of-type(11n+1) {\n      clear: both; }\n  .large-block-grid-12 > li {\n    list-style: none;\n    width: 8.33333%; }\n    .large-block-grid-12 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-12 > li:nth-of-type(12n+1) {\n      clear: both; } }\n\n/* small displays */\n@media only screen {\n  .show-for-small-only, .show-for-small-up, .show-for-small, .show-for-small-down, .hide-for-medium-only, .hide-for-medium-up, .hide-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n  .hide-for-small-only, .hide-for-small-up, .hide-for-small, .hide-for-small-down, .show-for-medium-only, .show-for-medium-up, .show-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n  .visible-for-small-only, .visible-for-small-up, .visible-for-small, .visible-for-small-down, .hidden-for-medium-only, .hidden-for-medium-up, .hidden-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n  .hidden-for-small-only, .hidden-for-small-up, .hidden-for-small, .hidden-for-small-down, .visible-for-medium-only, .visible-for-medium-up, .visible-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .hidden-for-xxlarge-down {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute !important;\n    width: 1px; }\n  table.show-for-small-only, table.show-for-small-up, table.show-for-small, table.show-for-small-down, table.hide-for-medium-only, table.hide-for-medium-up, table.hide-for-medium, table.show-for-medium-down, table.hide-for-large-only, table.hide-for-large-up, table.hide-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xlarge, table.show-for-xlarge-down, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up, table.hide-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n  thead.show-for-small-only, thead.show-for-small-up, thead.show-for-small, thead.show-for-small-down, thead.hide-for-medium-only, thead.hide-for-medium-up, thead.hide-for-medium, thead.show-for-medium-down, thead.hide-for-large-only, thead.hide-for-large-up, thead.hide-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xlarge, thead.show-for-xlarge-down, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up, thead.hide-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n  tbody.show-for-small-only, tbody.show-for-small-up, tbody.show-for-small, tbody.show-for-small-down, tbody.hide-for-medium-only, tbody.hide-for-medium-up, tbody.hide-for-medium, tbody.show-for-medium-down, tbody.hide-for-large-only, tbody.hide-for-large-up, tbody.hide-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xlarge, tbody.show-for-xlarge-down, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up, tbody.hide-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n  tr.show-for-small-only, tr.show-for-small-up, tr.show-for-small, tr.show-for-small-down, tr.hide-for-medium-only, tr.hide-for-medium-up, tr.hide-for-medium, tr.show-for-medium-down, tr.hide-for-large-only, tr.hide-for-large-up, tr.hide-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xlarge, tr.show-for-xlarge-down, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up, tr.hide-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n  th.show-for-small-only, td.show-for-small-only, th.show-for-small-up, td.show-for-small-up, th.show-for-small, td.show-for-small, th.show-for-small-down, td.show-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.hide-for-medium-up, td.hide-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.show-for-medium-down, td.show-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.hide-for-large-up, td.hide-for-large-up, th.hide-for-large, td.hide-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xlarge, td.hide-for-xlarge, th.show-for-xlarge-down, td.show-for-xlarge-down, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up, th.hide-for-xxlarge, td.hide-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n\n/* medium displays */\n@media only screen and (min-width: 53.8125em) {\n  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .show-for-medium-only, .show-for-medium-up, .show-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .hide-for-medium-only, .hide-for-medium-up, .hide-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .visible-for-medium-only, .visible-for-medium-up, .visible-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .hidden-for-medium-only, .hidden-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .hidden-for-xxlarge-down {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute !important;\n    width: 1px; }\n  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.show-for-medium-only, table.show-for-medium-up, table.show-for-medium, table.show-for-medium-down, table.hide-for-large-only, table.hide-for-large-up, table.hide-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xlarge, table.show-for-xlarge-down, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up, table.hide-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.show-for-medium-only, thead.show-for-medium-up, thead.show-for-medium, thead.show-for-medium-down, thead.hide-for-large-only, thead.hide-for-large-up, thead.hide-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xlarge, thead.show-for-xlarge-down, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up, thead.hide-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.show-for-medium-only, tbody.show-for-medium-up, tbody.show-for-medium, tbody.show-for-medium-down, tbody.hide-for-large-only, tbody.hide-for-large-up, tbody.hide-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xlarge, tbody.show-for-xlarge-down, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up, tbody.hide-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.show-for-medium-only, tr.show-for-medium-up, tr.show-for-medium, tr.show-for-medium-down, tr.hide-for-large-only, tr.hide-for-large-up, tr.hide-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xlarge, tr.show-for-xlarge-down, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up, tr.hide-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.show-for-medium-only, td.show-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.show-for-medium, td.show-for-medium, th.show-for-medium-down, td.show-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.hide-for-large-up, td.hide-for-large-up, th.hide-for-large, td.hide-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xlarge, td.hide-for-xlarge, th.show-for-xlarge-down, td.show-for-xlarge-down, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up, th.hide-for-xxlarge, td.hide-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n\n/* large displays */\n@media only screen and (min-width: 53.875em) {\n  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .hidden-for-xxlarge-down {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute !important;\n    width: 1px; }\n  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.show-for-large-only, table.show-for-large-up, table.show-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xlarge, table.show-for-xlarge-down, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up, table.hide-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.show-for-large-only, thead.show-for-large-up, thead.show-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xlarge, thead.show-for-xlarge-down, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up, thead.hide-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.show-for-large-only, tbody.show-for-large-up, tbody.show-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xlarge, tbody.show-for-xlarge-down, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up, tbody.hide-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.show-for-large-only, tr.show-for-large-up, tr.show-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xlarge, tr.show-for-xlarge-down, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up, tr.hide-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.show-for-large-only, td.show-for-large-only, th.show-for-large-up, td.show-for-large-up, th.show-for-large, td.show-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xlarge, td.hide-for-xlarge, th.show-for-xlarge-down, td.show-for-xlarge-down, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up, th.hide-for-xxlarge, td.hide-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n\n/* xlarge displays */\n@media only screen and (min-width: 90.0625em) {\n  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .hide-for-large-only, .show-for-large-up, .hide-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .show-for-large-only, .hide-for-large-up, .show-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .hidden-for-large-only, .visible-for-large-up, .hidden-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .visible-for-large-only, .hidden-for-large-up, .visible-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .hidden-for-xxlarge-down {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute !important;\n    width: 1px; }\n  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.hide-for-large-only, table.show-for-large-up, table.hide-for-large, table.hide-for-large-down, table.show-for-xlarge-only, table.show-for-xlarge-up, table.show-for-xlarge, table.show-for-xlarge-down, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up, table.hide-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.hide-for-large-only, thead.show-for-large-up, thead.hide-for-large, thead.hide-for-large-down, thead.show-for-xlarge-only, thead.show-for-xlarge-up, thead.show-for-xlarge, thead.show-for-xlarge-down, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up, thead.hide-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.hide-for-large-only, tbody.show-for-large-up, tbody.hide-for-large, tbody.hide-for-large-down, tbody.show-for-xlarge-only, tbody.show-for-xlarge-up, tbody.show-for-xlarge, tbody.show-for-xlarge-down, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up, tbody.hide-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.hide-for-large-only, tr.show-for-large-up, tr.hide-for-large, tr.hide-for-large-down, tr.show-for-xlarge-only, tr.show-for-xlarge-up, tr.show-for-xlarge, tr.show-for-xlarge-down, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up, tr.hide-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.show-for-large-up, td.show-for-large-up, th.hide-for-large, td.hide-for-large, th.hide-for-large-down, td.hide-for-large-down, th.show-for-xlarge-only, td.show-for-xlarge-only, th.show-for-xlarge-up, td.show-for-xlarge-up, th.show-for-xlarge, td.show-for-xlarge, th.show-for-xlarge-down, td.show-for-xlarge-down, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up, th.hide-for-xxlarge, td.hide-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n\n/* xxlarge displays */\n@media only screen and (min-width: 120.0625em) {\n  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .hide-for-large-only, .show-for-large-up, .hide-for-large, .hide-for-large-down, .hide-for-xlarge-only, .show-for-xlarge-up, .hide-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .show-for-large-only, .hide-for-large-up, .show-for-large, .show-for-large-down, .show-for-xlarge-only, .hide-for-xlarge-up, .show-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .hidden-for-large-only, .visible-for-large-up, .hidden-for-large, .hidden-for-large-down, .hidden-for-xlarge-only, .visible-for-xlarge-up, .hidden-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .visible-for-large-only, .hidden-for-large-up, .visible-for-large, .visible-for-large-down, .visible-for-xlarge-only, .hidden-for-xlarge-up, .visible-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .hidden-for-xxlarge-down {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute !important;\n    width: 1px; }\n  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.hide-for-large-only, table.show-for-large-up, table.hide-for-large, table.hide-for-large-down, table.hide-for-xlarge-only, table.show-for-xlarge-up, table.hide-for-xlarge, table.hide-for-xlarge-down, table.show-for-xxlarge-only, table.show-for-xxlarge-up, table.show-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.hide-for-large-only, thead.show-for-large-up, thead.hide-for-large, thead.hide-for-large-down, thead.hide-for-xlarge-only, thead.show-for-xlarge-up, thead.hide-for-xlarge, thead.hide-for-xlarge-down, thead.show-for-xxlarge-only, thead.show-for-xxlarge-up, thead.show-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.hide-for-large-only, tbody.show-for-large-up, tbody.hide-for-large, tbody.hide-for-large-down, tbody.hide-for-xlarge-only, tbody.show-for-xlarge-up, tbody.hide-for-xlarge, tbody.hide-for-xlarge-down, tbody.show-for-xxlarge-only, tbody.show-for-xxlarge-up, tbody.show-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.hide-for-large-only, tr.show-for-large-up, tr.hide-for-large, tr.hide-for-large-down, tr.hide-for-xlarge-only, tr.show-for-xlarge-up, tr.hide-for-xlarge, tr.hide-for-xlarge-down, tr.show-for-xxlarge-only, tr.show-for-xxlarge-up, tr.show-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.show-for-large-up, td.show-for-large-up, th.hide-for-large, td.hide-for-large, th.hide-for-large-down, td.hide-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.show-for-xlarge-up, td.show-for-xlarge-up, th.hide-for-xlarge, td.hide-for-xlarge, th.hide-for-xlarge-down, td.hide-for-xlarge-down, th.show-for-xxlarge-only, td.show-for-xxlarge-only, th.show-for-xxlarge-up, td.show-for-xxlarge-up, th.show-for-xxlarge, td.show-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n\n/* Orientation targeting */\n.show-for-landscape,\n.hide-for-portrait {\n  display: inherit !important; }\n\n.hide-for-landscape,\n.show-for-portrait {\n  display: none !important; }\n\n/* Specific visibility for tables */\ntable.hide-for-landscape, table.show-for-portrait {\n  display: table !important; }\n\nthead.hide-for-landscape, thead.show-for-portrait {\n  display: table-header-group !important; }\n\ntbody.hide-for-landscape, tbody.show-for-portrait {\n  display: table-row-group !important; }\n\ntr.hide-for-landscape, tr.show-for-portrait {\n  display: table-row !important; }\n\ntd.hide-for-landscape, td.show-for-portrait,\nth.hide-for-landscape,\nth.show-for-portrait {\n  display: table-cell !important; }\n\n@media only screen and (orientation: landscape) {\n  .show-for-landscape,\n  .hide-for-portrait {\n    display: inherit !important; }\n  .hide-for-landscape,\n  .show-for-portrait {\n    display: none !important; }\n  /* Specific visibility for tables */\n  table.show-for-landscape, table.hide-for-portrait {\n    display: table !important; }\n  thead.show-for-landscape, thead.hide-for-portrait {\n    display: table-header-group !important; }\n  tbody.show-for-landscape, tbody.hide-for-portrait {\n    display: table-row-group !important; }\n  tr.show-for-landscape, tr.hide-for-portrait {\n    display: table-row !important; }\n  td.show-for-landscape, td.hide-for-portrait,\n  th.show-for-landscape,\n  th.hide-for-portrait {\n    display: table-cell !important; } }\n\n@media only screen and (orientation: portrait) {\n  .show-for-portrait,\n  .hide-for-landscape {\n    display: inherit !important; }\n  .hide-for-portrait,\n  .show-for-landscape {\n    display: none !important; }\n  /* Specific visibility for tables */\n  table.show-for-portrait, table.hide-for-landscape {\n    display: table !important; }\n  thead.show-for-portrait, thead.hide-for-landscape {\n    display: table-header-group !important; }\n  tbody.show-for-portrait, tbody.hide-for-landscape {\n    display: table-row-group !important; }\n  tr.show-for-portrait, tr.hide-for-landscape {\n    display: table-row !important; }\n  td.show-for-portrait, td.hide-for-landscape,\n  th.show-for-portrait,\n  th.hide-for-landscape {\n    display: table-cell !important; } }\n\n/* Touch-enabled device targeting */\n.show-for-touch {\n  display: none !important; }\n\n.hide-for-touch {\n  display: inherit !important; }\n\n.touch .show-for-touch {\n  display: inherit !important; }\n\n.touch .hide-for-touch {\n  display: none !important; }\n\n/* Specific visibility for tables */\ntable.hide-for-touch {\n  display: table !important; }\n\n.touch table.show-for-touch {\n  display: table !important; }\n\nthead.hide-for-touch {\n  display: table-header-group !important; }\n\n.touch thead.show-for-touch {\n  display: table-header-group !important; }\n\ntbody.hide-for-touch {\n  display: table-row-group !important; }\n\n.touch tbody.show-for-touch {\n  display: table-row-group !important; }\n\ntr.hide-for-touch {\n  display: table-row !important; }\n\n.touch tr.show-for-touch {\n  display: table-row !important; }\n\ntd.hide-for-touch {\n  display: table-cell !important; }\n\n.touch td.show-for-touch {\n  display: table-cell !important; }\n\nth.hide-for-touch {\n  display: table-cell !important; }\n\n.touch th.show-for-touch {\n  display: table-cell !important; }\n\n/* Screen reader-specific classes */\n.show-for-sr {\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  overflow: hidden;\n  position: absolute !important;\n  width: 1px; }\n\n.show-on-focus {\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  overflow: hidden;\n  position: absolute !important;\n  width: 1px; }\n  .show-on-focus:focus, .show-on-focus:active {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n\n/* Print visibility */\n.print-only,\n.show-for-print {\n  display: none !important; }\n\n@media print {\n  .print-only,\n  .show-for-print {\n    display: block !important; }\n  .hide-on-print,\n  .hide-for-print {\n    display: none !important; }\n  table.show-for-print {\n    display: table !important; }\n  thead.show-for-print {\n    display: table-header-group !important; }\n  tbody.show-for-print {\n    display: table-row-group !important; }\n  tr.show-for-print {\n    display: table-row !important; }\n  td.show-for-print {\n    display: table-cell !important; }\n  th.show-for-print {\n    display: table-cell !important; } }\n\n.Musikki-Test-loginBtn {\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.16), 5px 2px 6px rgba(0, 0, 0, 0.32);\n  cursor: pointer;\n  background-color: #949494;\n  border: none;\n  color: white;\n  padding: 8px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  border-radius: 4px; }\n\n.Musikki-Test-inputBox {\n  width: 20%;\n  padding-left: 10px;\n  margin-top: 10px;\n  height: 34px;\n  font-size: 16px;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  -webkit-appearance: none;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.16), 5px 2px 6px rgba(0, 0, 0, 0.32); }\n  .Musikki-Test-inputBox:focus {\n    outline: none; }\n\n.Musikki-Test {\n  font-family: \"Roboto\", sans-serif;\n  padding: 20px; }\n  .Musikki-Test .react-autosuggest__input {\n    width: 920px;\n    padding-left: 10px;\n    margin-top: 10px;\n    height: 34px;\n    font-size: 16px;\n    border: 1px solid #aaa;\n    border-radius: 4px;\n    -webkit-appearance: none;\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.16), 5px 2px 6px rgba(0, 0, 0, 0.32); }\n    .Musikki-Test .react-autosuggest__input:focus {\n      outline: none; }\n  .Musikki-Test ul {\n    list-style: none;\n    padding: 0;\n    width: 920px; }\n  .Musikki-Test-activeBtn {\n    background-color: #696565; }\n  .Musikki-Test-searchBtn {\n    margin-right: 10px;\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.16), 5px 2px 6px rgba(0, 0, 0, 0.32);\n    cursor: pointer;\n    background-color: #949494;\n    border: none;\n    color: white;\n    padding: 8px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    border-radius: 4px; }\n  .Musikki-Test-favouritesBtn {\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.16), 5px 2px 6px rgba(0, 0, 0, 0.32);\n    cursor: pointer;\n    background-color: #949494;\n    border: none;\n    color: white;\n    padding: 8px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    border-radius: 4px; }\n  .Musikki-Test-logOutBtn {\n    float: right;\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.16), 5px 2px 6px rgba(0, 0, 0, 0.32);\n    cursor: pointer;\n    background-color: #949494;\n    border: none;\n    color: white;\n    padding: 8px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    border-radius: 4px; }\n\n.Musikki-Test-item {\n  list-style: none;\n  padding: 0;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.16), 5px 2px 6px rgba(0, 0, 0, 0.32);\n  margin-bottom: 10px;\n  cursor: pointer; }\n  .Musikki-Test-item-photo {\n    width: 104px;\n    background-size: cover;\n    height: 96px;\n    display: inline-block;\n    vertical-align: middle; }\n  .Musikki-Test-item-name {\n    display: inline-block;\n    vertical-align: middle;\n    width: 79%;\n    color: #919191;\n    font-size: 60px; }\n  .Musikki-Test-item-fav {\n    display: inline-block;\n    vertical-align: middle;\n    height: 80px;\n    width: 80px;\n    text-align: center;\n    background-color: #00ffed;\n    border-radius: 50%; }\n    .Musikki-Test-item-fav i {\n      font-size: 58px;\n      text-align: center;\n      line-height: 1.4;\n      color: white; }\n", ""]);
	
	// exports


/***/ },
/* 328 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _axios = __webpack_require__(294);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _settings = __webpack_require__(331);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// ---- Request Methods -------------------
	
	var headers = {
	  'AppID': _settings.APP_ID,
	  'AppKey': _settings.APP_KEY,
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	var requests = {
	
	  setHeader: function setHeader() {
	
	    return headers;
	  },
	
	  get: function get(path, params) {
	    return _axios2.default.get(_settings.API_URL + path, {
	      params: params,
	      headers: headers
	    });
	  }
	
	};
	
	module.exports = requests;

/***/ },
/* 331 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  API_URL: 'https://music-api.musikki.com/v1/',
	  APP_ID: 123456789,
	  APP_KEY: 123456789
	};

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// NPM Dependencies ------------------------------------------------------------
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _uuid = __webpack_require__(333);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	var _reactRedux = __webpack_require__(221);
	
	var _actions = __webpack_require__(335);
	
	var _reactRouter = __webpack_require__(165);
	
	var _requests = __webpack_require__(330);
	
	var _requests2 = _interopRequireDefault(_requests);
	
	var _localstorage = __webpack_require__(290);
	
	var _localstorage2 = _interopRequireDefault(_localstorage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Constant Dependencies -------------------------------------------------------
	
	// Internal Dependencies ------------------------------------------------------------
	var users = {};
	
	// React Class -----------------------------------------------------------------
	var LoginPage = _react2.default.createClass({
	  displayName: 'LoginPage',
	
	
	  // Lifecycles Functions
	  getInitialState: function getInitialState() {
	    return {
	      name: "",
	      password: ""
	    };
	  },
	
	
	  componentDidMount: function componentDidMount() {
	    users = _localstorage2.default.localStorageGet("users");
	  },
	
	  // Storage Methods ------------------------
	
	
	  // Handler Methods ------------------------
	  handleChangeName: function handleChangeName(event) {
	    this.setState({ name: event.target.value });
	  },
	
	  handleChangePassword: function handleChangePassword(event) {
	    this.setState({ password: event.target.value });
	  },
	
	  Login: function Login() {
	    _localstorage2.default.localStorageSet("userLogged", { name: this.state.name, favourites: users[this.state.name].favourites });
	    _reactRouter.browserHistory.push("/");
	  },
	
	  LoginOrCreate: function LoginOrCreate() {
	    //let user = localStorage.localStorageGet(this.state.name);
	
	    // Check if user belongs to users object
	    if (!_.isUndefined(users[this.state.name])) {
	      users[this.state.name].password === this.state.password ? this.Login() : alert('invalid password');
	    } else {
	      //Create user if not
	      alert('New account created');
	      users[this.state.name] = { password: this.state.password, favourites: [] };
	      // Overwrite users object in localStorage
	      this.props.dispatch((0, _actions.setSession)(this.state.name, []));
	      _localstorage2.default.localStorageSet("users", users);
	      this.Login();
	    }
	  },
	
	  // Toogle Methods ------------------------
	
	  // Search methods ------------------------
	
	
	  // ---- Render Methods -------------------
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'Musikki-Test' },
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'label',
	            null,
	            'Username:'
	          ),
	          _react2.default.createElement('input', {
	            className: 'Musikki-Test-inputBox',
	            type: 'text',
	            placeholder: "e.g James Bond",
	            value: this.state.name,
	            onChange: this.handleChangeName
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'label',
	            null,
	            'Password:'
	          ),
	          _react2.default.createElement('input', {
	            className: 'Musikki-Test-inputBox',
	            type: 'password',
	            placeholder: "password",
	            value: this.state.password,
	            onChange: this.handleChangePassword
	          })
	        )
	      ),
	      _react2.default.createElement(
	        'button',
	        {
	          className: 'Musikki-Test-loginBtn',
	          onClick: this.LoginOrCreate
	        },
	        'GO'
	      )
	    );
	  }
	});
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    user: state.userReducer
	  };
	};
	
	module.exports = (0, _reactRedux.connect)(mapStateToProps)(LoginPage);

/***/ },
/* 333 */,
/* 334 */,
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setSession = setSession;
	exports.addFavourite = addFavourite;
	exports.removeFavourite = removeFavourite;
	
	var _ActionTypesRedux = __webpack_require__(289);
	
	var types = _interopRequireWildcard(_ActionTypesRedux);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/*                   */
	/*User Actions   */
	/*                   */
	function setSession(name, favourites) {
	  return {
	    type: types.SET_SESSION,
	    name: name,
	    favourites: favourites
	  };
	}
	function addFavourite(favourite) {
	  return {
	    type: types.ADD_FAVOURITE,
	    favourite: favourite
	  };
	}
	function removeFavourite(favourite) {
	  return {
	    type: types.REMOVE_FAVOURITE,
	    favourite: favourite
	  };
	}

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// NPM Dependencies ------------------------------------------------------------
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(221);
	
	var _reactRouter = __webpack_require__(165);
	
	var _reactAutosuggest = __webpack_require__(337);
	
	var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);
	
	var _requests = __webpack_require__(330);
	
	var _requests2 = _interopRequireDefault(_requests);
	
	var _localstorage = __webpack_require__(290);
	
	var _localstorage2 = _interopRequireDefault(_localstorage);
	
	var _auth = __webpack_require__(293);
	
	var _auth2 = _interopRequireDefault(_auth);
	
	var _actions = __webpack_require__(335);
	
	var _Item = __webpack_require__(351);
	
	var _Item2 = _interopRequireDefault(_Item);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Constant Dependencies -------------------------------------------------------
	
	// Redux Store  -------------------------------------------------------
	var users = {};
	// React Class -----------------------------------------------------------------
	
	// Components -------------------------------------------------------
	
	// Internal Dependencies ------------------------------------------------------------
	var MainPage = _react2.default.createClass({
	  displayName: 'MainPage',
	
	
	  // Lifecycles Functions
	  getInitialState: function getInitialState() {
	    return {
	      value: "",
	      inputValue: "",
	      suggestions: [],
	      tab: 1
	    };
	  },
	
	
	  componentDidMount: function componentDidMount() {
	    //Check if user is logged. If not, redirects to login page
	    if (!_auth2.default.loggedIn()) {
	      _reactRouter.browserHistory.push("/login");
	    } else {
	      users = _localstorage2.default.localStorageGet("users");
	      var user = _localstorage2.default.localStorageGet("userLogged");
	      this.props.dispatch((0, _actions.setSession)(user.name, user.favourites));
	    }
	  },
	
	  componentWillMount: function componentWillMount() {
	    this.timer = null;
	  },
	
	  // Storage Methods ------------------------
	  addToLocalStorage: function addToLocalStorage(favourite) {
	    // add favourite to both userLogged and users
	    var tmpUser = { "name": this.props.user.name, "favourites": this.props.user.favourites.concat(favourite) };
	    users[this.props.user.name].favourites = tmpUser.favourites;
	    _localstorage2.default.localStorageSet("users", users);
	    _localstorage2.default.localStorageSet("userLogged", tmpUser);
	  },
	
	  removeFromLocalStorage: function removeFromLocalStorage(favourite) {
	    // remove to both userLogged and users
	    _.remove(this.props.user.favourites, function (favouriteElem) {
	      return favouriteElem.id === favourite.id;
	    });
	    var tmpUser = { "name": this.props.user.name, "favourites": this.props.user.favourites };
	    users[this.props.user.name].favourites = tmpUser.favourites;
	    _localstorage2.default.localStorageSet("users", users);
	    _localstorage2.default.localStorageSet("userLogged", tmpUser);
	  },
	  // Login Methods ------------------------
	  logOut: function logOut() {
	    _localstorage2.default.localStorageDelete("userLogged");
	    _reactRouter.browserHistory.push("/login");
	  },
	
	  // Handler Methods ------------------------
	  //this function saves the selected favourite only if it isn't already a user's favourite
	  select: function select(favourite, isFavourite) {
	    if (!isFavourite) {
	      // add to store
	      this.props.dispatch((0, _actions.addFavourite)(favourite));
	      // add to localstorage
	      this.addToLocalStorage(favourite);
	    } else {
	      this.props.dispatch((0, _actions.removeFavourite)(favourite));
	      this.removeFromLocalStorage(favourite);
	    }
	  },
	
	  // Toogle Methods ------------------------
	  changeTab: function changeTab(value) {
	    this.setState({
	      tab: value
	    });
	  },
	
	  changeTabSearch: function changeTabSearch() {
	    this.changeTab(1);
	  },
	
	  changeFav: function changeFav() {
	    this.changeTab(2);
	  },
	
	  // Search methods ------------------------
	  shouldRenderSuggestions: function shouldRenderSuggestions(value) {
	    return value.trim().length > 1;
	  },
	
	  setSuggestionsCallback: function setSuggestionsCallback(suggestions) {
	    console.log(suggestions);
	    if (Array.isArray(suggestions)) {
	      this.setState({
	        suggestions: suggestions
	      });
	    }
	  },
	
	  onSuggestionsFetchRequested: function onSuggestionsFetchRequested(value) {
	    var _this = this;
	
	    //avoid redundant calls with same inputvalue
	    if (value.value !== this.state.inputValue.value) {
	      clearTimeout(this.timer);
	      this.timer = setTimeout(function () {
	        _this.getSuggestions(value.value, _this.setSuggestionsCallback), _this.setState({
	          inputValue: value
	        });
	      }, 500);
	    }
	  },
	
	  onChange: function onChange(event, _ref) {
	    var newValue = _ref.newValue;
	
	    this.setState({
	      value: newValue
	    });
	  },
	
	  renderSuggestion: function renderSuggestion(suggestion) {
	    var favourite = _.some(this.props.user.favourites, function (favourite) {
	      return favourite.id === suggestion.mkid;
	    });
	    return _react2.default.createElement(_Item2.default, {
	      key: "item-" + suggestion.mkid,
	      onSetAsFavourite: this.select,
	      id: suggestion.mkid,
	      favourite: favourite,
	      name: suggestion.name,
	      photo: suggestion.image
	    });
	  },
	  requestData: function requestData(inputValue, inputLength, callback) {
	    _requests2.default.get('artists', { q: "[artist-name:" + inputValue + "]" }).then(function (response) {
	      callback(response.data.results.filter(function (band) {
	        return band.name.toLowerCase().slice(0, inputLength) === inputValue;
	      }));
	    });
	  },
	  getSuggestions: function getSuggestions(value, callback) {
	    if (!_.isUndefined(value)) {
	      var inputValue = value.trim().toLowerCase();
	      var inputLength = inputValue.length;
	      inputLength === 0 ? [] : this.requestData(inputValue, inputLength, callback);
	    }
	  },
	
	  // When suggestion is clicked, Autosuggest needs to populate the input element
	  // based on the clicked suggestion.
	  getSuggestionValue: function getSuggestionValue(suggestion) {
	    return this.state.inputValue.value;
	  },
	
	  // ---- Render Methods -------------------
	  render: function render() {
	    console.log(this.state.suggestions);
	    // Autosuggest will pass through all these props to the input element.
	    var inputProps = {
	      placeholder: 'Type a band or artist',
	      value: this.state.value,
	      onChange: this.onChange
	    };
	    return _react2.default.createElement(
	      'div',
	      { className: 'Musikki-Test' },
	      _react2.default.createElement(
	        'button',
	        {
	          className: 'Musikki-Test-searchBtn',
	          onClick: this.changeTabSearch },
	        'Search'
	      ),
	      _react2.default.createElement(
	        'button',
	        {
	          className: 'Musikki-Test-favouritesBtn',
	          onClick: this.changeFav },
	        'Favourites'
	      ),
	      _react2.default.createElement(
	        'button',
	        {
	          className: 'Musikki-Test-logOutBtn',
	          onClick: this.logOut
	        },
	        'Logout'
	      ),
	      //TODO make this a component
	      this.state.tab === 1 && _react2.default.createElement(_reactAutosuggest2.default, {
	        shouldRenderSuggestions: this.shouldRenderSuggestions,
	        alwaysRenderSuggestions: true,
	        focusInputOnSuggestionClick: false,
	        suggestions: this.state.suggestions,
	        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
	        getSuggestionValue: this.getSuggestionValue,
	        renderSuggestion: this.renderSuggestion,
	        inputProps: inputProps
	      }),
	      //TODO make this a component
	      this.state.tab === 2 && _react2.default.createElement(
	        'ul',
	        null,
	        this.props.user.favourites.map(function (favourite) {
	          console.log(favourite);
	          return _react2.default.createElement(_Item2.default, {
	            key: "item-favourite-" + favourite.id,
	            onSetAsFavourite: this.select,
	            id: favourite.id,
	            favourite: true,
	            name: favourite.name,
	            photo: favourite.image
	          });
	        }.bind(this))
	      )
	    );
	  }
	});
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    search: state.searchReducer,
	    user: state.userReducer
	  };
	};
	
	module.exports = (0, _reactRedux.connect)(mapStateToProps)(MainPage);

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(338).default;

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _redux = __webpack_require__(228);
	
	var _redux2 = __webpack_require__(339);
	
	var _redux3 = _interopRequireDefault(_redux2);
	
	var _Autosuggest = __webpack_require__(340);
	
	var _Autosuggest2 = _interopRequireDefault(_Autosuggest);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var alwaysTrue = function alwaysTrue() {
	  return true;
	};
	var defaultShouldRenderSuggestions = function defaultShouldRenderSuggestions(value) {
	  return value.trim().length > 0;
	};
	var defaultTheme = {
	  container: 'react-autosuggest__container',
	  containerOpen: 'react-autosuggest__container--open',
	  input: 'react-autosuggest__input',
	  suggestionsContainer: 'react-autosuggest__suggestions-container',
	  suggestionsList: 'react-autosuggest__suggestions-list',
	  suggestion: 'react-autosuggest__suggestion',
	  suggestionFocused: 'react-autosuggest__suggestion--focused',
	  sectionContainer: 'react-autosuggest__section-container',
	  sectionTitle: 'react-autosuggest__section-title'
	};
	
	var mapToAutowhateverTheme = function mapToAutowhateverTheme(theme) {
	  var result = {};
	
	  for (var key in theme) {
	    switch (key) {
	      case 'suggestionsContainer':
	        result['itemsContainer'] = theme[key];
	        break;
	
	      case 'suggestion':
	        result['item'] = theme[key];
	        break;
	
	      case 'suggestionFocused':
	        result['itemFocused'] = theme[key];
	        break;
	
	      case 'suggestionsList':
	        result['itemsList'] = theme[key];
	        break;
	
	      default:
	        result[key] = theme[key];
	    }
	  }
	
	  return result;
	};
	
	var AutosuggestContainer = function (_Component) {
	  _inherits(AutosuggestContainer, _Component);
	
	  function AutosuggestContainer(_ref) {
	    var alwaysRenderSuggestions = _ref.alwaysRenderSuggestions;
	
	    _classCallCheck(this, AutosuggestContainer);
	
	    var _this = _possibleConstructorReturn(this, (AutosuggestContainer.__proto__ || Object.getPrototypeOf(AutosuggestContainer)).call(this));
	
	    _this.storeInputReference = function (input) {
	      _this.input = input;
	    };
	
	    var initialState = {
	      isFocused: false,
	      isCollapsed: !alwaysRenderSuggestions,
	      focusedSectionIndex: null,
	      focusedSuggestionIndex: null,
	      valueBeforeUpDown: null
	    };
	
	    _this.store = (0, _redux.createStore)(_redux3.default, initialState);
	    return _this;
	  }
	
	  _createClass(AutosuggestContainer, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var suggestions = _props.suggestions;
	      var onSuggestionsFetchRequested = _props.onSuggestionsFetchRequested;
	      var onSuggestionsClearRequested = _props.onSuggestionsClearRequested;
	      var multiSection = _props.multiSection;
	      var shouldRenderSuggestions = _props.shouldRenderSuggestions;
	      var renderInputComponent = _props.renderInputComponent;
	      var renderSuggestionsContainer = _props.renderSuggestionsContainer;
	      var getSuggestionValue = _props.getSuggestionValue;
	      var renderSuggestion = _props.renderSuggestion;
	      var renderSectionTitle = _props.renderSectionTitle;
	      var getSectionSuggestions = _props.getSectionSuggestions;
	      var inputProps = _props.inputProps;
	      var onSuggestionSelected = _props.onSuggestionSelected;
	      var focusInputOnSuggestionClick = _props.focusInputOnSuggestionClick;
	      var focusFirstSuggestion = _props.focusFirstSuggestion;
	      var alwaysRenderSuggestions = _props.alwaysRenderSuggestions;
	      var theme = _props.theme;
	      var id = _props.id;
	
	
	      return _react2.default.createElement(_Autosuggest2.default, {
	        suggestions: suggestions,
	        onSuggestionsFetchRequested: onSuggestionsFetchRequested,
	        onSuggestionsClearRequested: onSuggestionsClearRequested,
	        multiSection: multiSection,
	        shouldRenderSuggestions: alwaysRenderSuggestions ? alwaysTrue : shouldRenderSuggestions,
	        alwaysRenderSuggestions: alwaysRenderSuggestions,
	        renderInputComponent: renderInputComponent,
	        renderSuggestionsContainer: renderSuggestionsContainer,
	        getSuggestionValue: getSuggestionValue,
	        renderSuggestion: renderSuggestion,
	        renderSectionTitle: renderSectionTitle,
	        getSectionSuggestions: getSectionSuggestions,
	        inputProps: inputProps,
	        onSuggestionSelected: onSuggestionSelected,
	        focusInputOnSuggestionClick: focusInputOnSuggestionClick,
	        focusFirstSuggestion: focusFirstSuggestion,
	        theme: mapToAutowhateverTheme(theme),
	        id: id,
	        inputRef: this.storeInputReference,
	        store: this.store
	      });
	    }
	  }]);
	
	  return AutosuggestContainer;
	}(_react.Component);
	
	AutosuggestContainer.propTypes = {
	  suggestions: _react.PropTypes.array.isRequired,
	  onSuggestionsFetchRequested: function onSuggestionsFetchRequested(props, propName) {
	    var onSuggestionsFetchRequested = props[propName];
	
	    if (typeof onSuggestionsFetchRequested !== 'function') {
	      throw new Error('\'onSuggestionsFetchRequested\' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp');
	    }
	  },
	  onSuggestionsClearRequested: function onSuggestionsClearRequested(props, propName) {
	    var onSuggestionsClearRequested = props[propName];
	
	    if (props.alwaysRenderSuggestions === false && typeof onSuggestionsClearRequested !== 'function') {
	      throw new Error('\'onSuggestionsClearRequested\' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp');
	    }
	  },
	  onSuggestionSelected: _react.PropTypes.func,
	  renderInputComponent: _react.PropTypes.func,
	  renderSuggestionsContainer: _react.PropTypes.func,
	  getSuggestionValue: _react.PropTypes.func.isRequired,
	  renderSuggestion: _react.PropTypes.func.isRequired,
	  inputProps: function inputProps(props, propName) {
	    var inputProps = props[propName];
	
	    if (!inputProps.hasOwnProperty('value')) {
	      throw new Error('\'inputProps\' must have \'value\'.');
	    }
	
	    if (!inputProps.hasOwnProperty('onChange')) {
	      throw new Error('\'inputProps\' must have \'onChange\'.');
	    }
	  },
	  shouldRenderSuggestions: _react.PropTypes.func,
	  alwaysRenderSuggestions: _react.PropTypes.bool,
	  multiSection: _react.PropTypes.bool,
	  renderSectionTitle: function renderSectionTitle(props, propName) {
	    var renderSectionTitle = props[propName];
	
	    if (props.multiSection === true && typeof renderSectionTitle !== 'function') {
	      throw new Error('\'renderSectionTitle\' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp');
	    }
	  },
	  getSectionSuggestions: function getSectionSuggestions(props, propName) {
	    var getSectionSuggestions = props[propName];
	
	    if (props.multiSection === true && typeof getSectionSuggestions !== 'function') {
	      throw new Error('\'getSectionSuggestions\' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp');
	    }
	  },
	  focusInputOnSuggestionClick: _react.PropTypes.bool,
	  focusFirstSuggestion: _react.PropTypes.bool,
	  theme: _react.PropTypes.object,
	  id: _react.PropTypes.string
	};
	AutosuggestContainer.defaultProps = {
	  shouldRenderSuggestions: defaultShouldRenderSuggestions,
	  alwaysRenderSuggestions: false,
	  multiSection: false,
	  focusInputOnSuggestionClick: true,
	  focusFirstSuggestion: false,
	  theme: defaultTheme,
	  id: '1'
	};
	exports.default = AutosuggestContainer;

/***/ },
/* 339 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var INPUT_FOCUSED = 'INPUT_FOCUSED';
	var INPUT_BLURRED = 'INPUT_BLURRED';
	var INPUT_CHANGED = 'INPUT_CHANGED';
	var UPDATE_FOCUSED_SUGGESTION = 'UPDATE_FOCUSED_SUGGESTION';
	var RESET_FOCUSED_SUGGESTION = 'RESET_FOCUSED_SUGGESTION';
	var REVEAL_SUGGESTIONS = 'REVEAL_SUGGESTIONS';
	var CLOSE_SUGGESTIONS = 'CLOSE_SUGGESTIONS';
	
	var inputFocused = function inputFocused(shouldRenderSuggestions) {
	  return {
	    type: INPUT_FOCUSED,
	    shouldRenderSuggestions: shouldRenderSuggestions
	  };
	};
	
	var inputBlurred = function inputBlurred(shouldRenderSuggestions) {
	  return {
	    type: INPUT_BLURRED,
	    shouldRenderSuggestions: shouldRenderSuggestions
	  };
	};
	
	var inputChanged = function inputChanged(shouldRenderSuggestions) {
	  return {
	    type: INPUT_CHANGED,
	    shouldRenderSuggestions: shouldRenderSuggestions
	  };
	};
	
	var updateFocusedSuggestion = function updateFocusedSuggestion(sectionIndex, suggestionIndex, value) {
	  return {
	    type: UPDATE_FOCUSED_SUGGESTION,
	    sectionIndex: sectionIndex,
	    suggestionIndex: suggestionIndex,
	    value: value
	  };
	};
	
	var resetFocusedSuggestion = function resetFocusedSuggestion() {
	  var shouldResetValueBeforeUpDown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	  return {
	    type: RESET_FOCUSED_SUGGESTION,
	    shouldResetValueBeforeUpDown: shouldResetValueBeforeUpDown
	  };
	};
	
	var revealSuggestions = function revealSuggestions() {
	  return {
	    type: REVEAL_SUGGESTIONS
	  };
	};
	
	var closeSuggestions = function closeSuggestions() {
	  return {
	    type: CLOSE_SUGGESTIONS
	  };
	};
	
	var actionCreators = exports.actionCreators = {
	  inputFocused: inputFocused,
	  inputBlurred: inputBlurred,
	  inputChanged: inputChanged,
	  updateFocusedSuggestion: updateFocusedSuggestion,
	  resetFocusedSuggestion: resetFocusedSuggestion,
	  revealSuggestions: revealSuggestions,
	  closeSuggestions: closeSuggestions
	};
	
	var reducer = function reducer(state, action) {
	  switch (action.type) {
	    case INPUT_FOCUSED:
	      return _extends({}, state, {
	        isFocused: true,
	        isCollapsed: !action.shouldRenderSuggestions
	      });
	
	    case INPUT_BLURRED:
	      return _extends({}, state, {
	        isFocused: false,
	        focusedSectionIndex: null,
	        focusedSuggestionIndex: null,
	        valueBeforeUpDown: null,
	        isCollapsed: !action.shouldRenderSuggestions
	      });
	
	    case INPUT_CHANGED:
	      return _extends({}, state, {
	        focusedSectionIndex: null,
	        focusedSuggestionIndex: null,
	        valueBeforeUpDown: null,
	        isCollapsed: !action.shouldRenderSuggestions
	      });
	
	    case UPDATE_FOCUSED_SUGGESTION:
	      {
	        var sectionIndex = action.sectionIndex;
	        var suggestionIndex = action.suggestionIndex;
	        var value = action.value;
	        var valueBeforeUpDown = state.valueBeforeUpDown;
	
	
	        if (suggestionIndex === null) {
	          valueBeforeUpDown = null;
	        } else if (valueBeforeUpDown === null && typeof value !== 'undefined') {
	          valueBeforeUpDown = value;
	        }
	
	        return _extends({}, state, {
	          focusedSectionIndex: sectionIndex,
	          focusedSuggestionIndex: suggestionIndex,
	          valueBeforeUpDown: valueBeforeUpDown
	        });
	      }
	
	    case RESET_FOCUSED_SUGGESTION:
	      {
	        return _extends({}, state, {
	          focusedSectionIndex: null,
	          focusedSuggestionIndex: null,
	          valueBeforeUpDown: action.shouldResetValueBeforeUpDown ? null : state.valueBeforeUpDown
	        });
	      }
	
	    case REVEAL_SUGGESTIONS:
	      return _extends({}, state, {
	        isCollapsed: false
	      });
	
	    case CLOSE_SUGGESTIONS:
	      return _extends({}, state, {
	        focusedSectionIndex: null,
	        focusedSuggestionIndex: null,
	        valueBeforeUpDown: null,
	        isCollapsed: true
	      });
	
	    default:
	      return state;
	  }
	};
	
	exports.default = reducer;

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(221);
	
	var _arrays = __webpack_require__(341);
	
	var _arrays2 = _interopRequireDefault(_arrays);
	
	var _redux = __webpack_require__(339);
	
	var _reactAutowhatever = __webpack_require__(342);
	
	var _reactAutowhatever2 = _interopRequireDefault(_reactAutowhatever);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    isFocused: state.isFocused,
	    isCollapsed: state.isCollapsed,
	    focusedSectionIndex: state.focusedSectionIndex,
	    focusedSuggestionIndex: state.focusedSuggestionIndex,
	    valueBeforeUpDown: state.valueBeforeUpDown
	  };
	};
	
	var Autosuggest = function (_Component) {
	  _inherits(Autosuggest, _Component);
	
	  function Autosuggest() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Autosuggest);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Autosuggest.__proto__ || Object.getPrototypeOf(Autosuggest)).call.apply(_ref, [this].concat(args))), _this), _this.onDocumentMouseDown = function (event) {
	      _this.justClickedOnSuggestionsContainer = false;
	
	      var node = event.detail && event.detail.target || // This is for testing only. Please show me a better way to emulate this.
	      event.target;
	
	      do {
	        if (node.getAttribute('data-suggestion-index') !== null) {
	          // Suggestion was clicked
	          return;
	        }
	
	        if (node === _this.suggestionsContainer) {
	          // Something else inside suggestions container was clicked
	          _this.justClickedOnSuggestionsContainer = true;
	          return;
	        }
	
	        node = node.parentNode;
	      } while (node !== null && node !== document);
	    }, _this.storeReferences = function (autowhatever) {
	      if (autowhatever !== null) {
	        var input = autowhatever.input;
	
	
	        _this.input = input;
	        _this.props.inputRef(input);
	
	        _this.suggestionsContainer = autowhatever.itemsContainer;
	      }
	    }, _this.onSuggestionMouseEnter = function (event, _ref2) {
	      var sectionIndex = _ref2.sectionIndex;
	      var itemIndex = _ref2.itemIndex;
	
	      _this.props.updateFocusedSuggestion(sectionIndex, itemIndex);
	    }, _this.focusFirstSuggestion = function () {
	      _this.props.updateFocusedSuggestion(_this.props.multiSection ? 0 : null, 0);
	    }, _this.onSuggestionMouseDown = function () {
	      _this.justSelectedSuggestion = true;
	    }, _this.onSuggestionsClearRequested = function () {
	      var onSuggestionsClearRequested = _this.props.onSuggestionsClearRequested;
	
	
	      onSuggestionsClearRequested && onSuggestionsClearRequested();
	    }, _this.onSuggestionSelected = function (event, data) {
	      var _this$props = _this.props;
	      var alwaysRenderSuggestions = _this$props.alwaysRenderSuggestions;
	      var onSuggestionSelected = _this$props.onSuggestionSelected;
	      var onSuggestionsFetchRequested = _this$props.onSuggestionsFetchRequested;
	      var resetFocusedSuggestion = _this$props.resetFocusedSuggestion;
	
	
	      onSuggestionSelected && onSuggestionSelected(event, data);
	
	      if (alwaysRenderSuggestions) {
	        onSuggestionsFetchRequested({ value: data.suggestionValue });
	      } else {
	        _this.onSuggestionsClearRequested();
	      }
	
	      resetFocusedSuggestion();
	    }, _this.onSuggestionClick = function (event) {
	      var _this$props2 = _this.props;
	      var alwaysRenderSuggestions = _this$props2.alwaysRenderSuggestions;
	      var focusInputOnSuggestionClick = _this$props2.focusInputOnSuggestionClick;
	      var closeSuggestions = _this$props2.closeSuggestions;
	
	      var _this$getSuggestionIn = _this.getSuggestionIndices(_this.findSuggestionElement(event.target));
	
	      var sectionIndex = _this$getSuggestionIn.sectionIndex;
	      var suggestionIndex = _this$getSuggestionIn.suggestionIndex;
	
	      var clickedSuggestion = _this.getSuggestion(sectionIndex, suggestionIndex);
	      var clickedSuggestionValue = _this.props.getSuggestionValue(clickedSuggestion);
	
	      _this.maybeCallOnChange(event, clickedSuggestionValue, 'click');
	      _this.onSuggestionSelected(event, {
	        suggestion: clickedSuggestion,
	        suggestionValue: clickedSuggestionValue,
	        sectionIndex: sectionIndex,
	        method: 'click'
	      });
	
	      if (!alwaysRenderSuggestions) {
	        closeSuggestions();
	      }
	
	      if (focusInputOnSuggestionClick === true) {
	        _this.input.focus();
	      } else {
	        _this.onBlur();
	      }
	
	      setTimeout(function () {
	        _this.justSelectedSuggestion = false;
	      });
	    }, _this.onBlur = function () {
	      var _this$props3 = _this.props;
	      var inputProps = _this$props3.inputProps;
	      var shouldRenderSuggestions = _this$props3.shouldRenderSuggestions;
	      var inputBlurred = _this$props3.inputBlurred;
	      var value = inputProps.value;
	      var onBlur = inputProps.onBlur;
	
	      var focusedSuggestion = _this.getFocusedSuggestion();
	
	      inputBlurred(shouldRenderSuggestions(value));
	      onBlur && onBlur(_this.blurEvent, { focusedSuggestion: focusedSuggestion });
	    }, _this.resetFocusedSuggestionOnMouseLeave = function () {
	      _this.props.resetFocusedSuggestion(false);
	    }, _this.itemProps = function (_ref3) {
	      var sectionIndex = _ref3.sectionIndex;
	      var itemIndex = _ref3.itemIndex;
	
	      return {
	        'data-section-index': sectionIndex,
	        'data-suggestion-index': itemIndex,
	        onMouseEnter: _this.onSuggestionMouseEnter,
	        onMouseLeave: _this.resetFocusedSuggestionOnMouseLeave,
	        onMouseDown: _this.onSuggestionMouseDown,
	        onTouchStart: _this.onSuggestionMouseDown, // Because on iOS `onMouseDown` is not triggered
	        onClick: _this.onSuggestionClick
	      };
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Autosuggest, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      document.addEventListener('mousedown', this.onDocumentMouseDown);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ((0, _arrays2.default)(nextProps.suggestions, this.props.suggestions)) {
	        if (nextProps.focusFirstSuggestion && nextProps.suggestions.length > 0 && nextProps.focusedSuggestionIndex === null && nextProps.inputProps.value !== this.props.inputProps.value && nextProps.valueBeforeUpDown === this.props.valueBeforeUpDown) {
	          this.focusFirstSuggestion();
	        }
	      } else {
	        if (this.willRenderSuggestions(nextProps)) {
	          if (nextProps.focusFirstSuggestion) {
	            this.focusFirstSuggestion();
	          }
	
	          var isCollapsed = nextProps.isCollapsed;
	          var revealSuggestions = nextProps.revealSuggestions;
	
	
	          if (isCollapsed && !this.justSelectedSuggestion) {
	            revealSuggestions();
	          }
	        } else {
	          nextProps.resetFocusedSuggestion();
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.removeEventListener('mousedown', this.onDocumentMouseDown);
	    }
	  }, {
	    key: 'getSuggestion',
	    value: function getSuggestion(sectionIndex, suggestionIndex) {
	      var _props = this.props;
	      var suggestions = _props.suggestions;
	      var multiSection = _props.multiSection;
	      var getSectionSuggestions = _props.getSectionSuggestions;
	
	
	      if (multiSection) {
	        return getSectionSuggestions(suggestions[sectionIndex])[suggestionIndex];
	      }
	
	      return suggestions[suggestionIndex];
	    }
	  }, {
	    key: 'getFocusedSuggestion',
	    value: function getFocusedSuggestion() {
	      var _props2 = this.props;
	      var focusedSectionIndex = _props2.focusedSectionIndex;
	      var focusedSuggestionIndex = _props2.focusedSuggestionIndex;
	
	
	      if (focusedSuggestionIndex === null) {
	        return null;
	      }
	
	      return this.getSuggestion(focusedSectionIndex, focusedSuggestionIndex);
	    }
	  }, {
	    key: 'getSuggestionValueByIndex',
	    value: function getSuggestionValueByIndex(sectionIndex, suggestionIndex) {
	      var getSuggestionValue = this.props.getSuggestionValue;
	
	
	      return getSuggestionValue(this.getSuggestion(sectionIndex, suggestionIndex));
	    }
	  }, {
	    key: 'getSuggestionIndices',
	    value: function getSuggestionIndices(suggestionElement) {
	      var sectionIndex = suggestionElement.getAttribute('data-section-index');
	      var suggestionIndex = suggestionElement.getAttribute('data-suggestion-index');
	
	      return {
	        sectionIndex: typeof sectionIndex === 'string' ? parseInt(sectionIndex, 10) : null,
	        suggestionIndex: parseInt(suggestionIndex, 10)
	      };
	    }
	  }, {
	    key: 'findSuggestionElement',
	    value: function findSuggestionElement(startNode) {
	      var node = startNode;
	
	      do {
	        if (node.getAttribute('data-suggestion-index') !== null) {
	          return node;
	        }
	
	        node = node.parentNode;
	      } while (node !== null);
	
	      console.error('Clicked element:', startNode); // eslint-disable-line no-console
	      throw new Error('Couldn\'t find suggestion element');
	    }
	  }, {
	    key: 'maybeCallOnChange',
	    value: function maybeCallOnChange(event, newValue, method) {
	      var _props$inputProps = this.props.inputProps;
	      var value = _props$inputProps.value;
	      var onChange = _props$inputProps.onChange;
	
	
	      if (newValue !== value) {
	        onChange(event, { newValue: newValue, method: method });
	      }
	    }
	  }, {
	    key: 'willRenderSuggestions',
	    value: function willRenderSuggestions(props) {
	      var suggestions = props.suggestions;
	      var inputProps = props.inputProps;
	      var shouldRenderSuggestions = props.shouldRenderSuggestions;
	      var value = inputProps.value;
	
	
	      return suggestions.length > 0 && shouldRenderSuggestions(value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props3 = this.props;
	      var suggestions = _props3.suggestions;
	      var renderInputComponent = _props3.renderInputComponent;
	      var renderSuggestionsContainer = _props3.renderSuggestionsContainer;
	      var onSuggestionsFetchRequested = _props3.onSuggestionsFetchRequested;
	      var renderSuggestion = _props3.renderSuggestion;
	      var inputProps = _props3.inputProps;
	      var shouldRenderSuggestions = _props3.shouldRenderSuggestions;
	      var multiSection = _props3.multiSection;
	      var renderSectionTitle = _props3.renderSectionTitle;
	      var id = _props3.id;
	      var getSectionSuggestions = _props3.getSectionSuggestions;
	      var theme = _props3.theme;
	      var isFocused = _props3.isFocused;
	      var isCollapsed = _props3.isCollapsed;
	      var focusedSectionIndex = _props3.focusedSectionIndex;
	      var focusedSuggestionIndex = _props3.focusedSuggestionIndex;
	      var valueBeforeUpDown = _props3.valueBeforeUpDown;
	      var inputFocused = _props3.inputFocused;
	      var inputChanged = _props3.inputChanged;
	      var updateFocusedSuggestion = _props3.updateFocusedSuggestion;
	      var resetFocusedSuggestion = _props3.resetFocusedSuggestion;
	      var revealSuggestions = _props3.revealSuggestions;
	      var closeSuggestions = _props3.closeSuggestions;
	      var getSuggestionValue = _props3.getSuggestionValue;
	      var alwaysRenderSuggestions = _props3.alwaysRenderSuggestions;
	      var value = inputProps.value;
	      var _onFocus = inputProps.onFocus;
	      var _onKeyDown = inputProps.onKeyDown;
	
	      var willRenderSuggestions = this.willRenderSuggestions(this.props);
	      var isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions;
	      var items = isOpen ? suggestions : [];
	      var autowhateverInputProps = _extends({}, inputProps, {
	        onFocus: function onFocus(event) {
	          if (!_this2.justSelectedSuggestion && !_this2.justClickedOnSuggestionsContainer) {
	            inputFocused(shouldRenderSuggestions(value));
	            _onFocus && _onFocus(event);
	
	            if (shouldRenderSuggestions(value)) {
	              onSuggestionsFetchRequested({ value: value });
	            }
	          }
	        },
	        onBlur: function onBlur(event) {
	          if (_this2.justClickedOnSuggestionsContainer) {
	            _this2.input.focus();
	            return;
	          }
	
	          _this2.blurEvent = event;
	
	          if (!_this2.justSelectedSuggestion) {
	            _this2.onBlur();
	            _this2.onSuggestionsClearRequested();
	          }
	        },
	        onChange: function onChange(event) {
	          var value = event.target.value;
	
	          var shouldRender = shouldRenderSuggestions(value);
	
	          _this2.maybeCallOnChange(event, value, 'type');
	          inputChanged(shouldRender);
	
	          if (shouldRender) {
	            onSuggestionsFetchRequested({ value: value });
	          } else {
	            _this2.onSuggestionsClearRequested();
	          }
	        },
	        onKeyDown: function onKeyDown(event, data) {
	          switch (event.key) {
	            case 'ArrowDown':
	            case 'ArrowUp':
	              if (isCollapsed) {
	                if (shouldRenderSuggestions(value)) {
	                  onSuggestionsFetchRequested({ value: value });
	                  revealSuggestions();
	                }
	              } else if (suggestions.length > 0) {
	                var newFocusedSectionIndex = data.newFocusedSectionIndex;
	                var newFocusedItemIndex = data.newFocusedItemIndex;
	
	
	                var newValue = void 0;
	
	                if (newFocusedItemIndex === null) {
	                  // valueBeforeUpDown can be null if, for example, user
	                  // hovers on the first suggestion and then pressed Up.
	                  // If that happens, use the original input value.
	                  newValue = valueBeforeUpDown === null ? value : valueBeforeUpDown;
	                } else {
	                  newValue = _this2.getSuggestionValueByIndex(newFocusedSectionIndex, newFocusedItemIndex);
	                }
	
	                updateFocusedSuggestion(newFocusedSectionIndex, newFocusedItemIndex, value);
	                _this2.maybeCallOnChange(event, newValue, event.key === 'ArrowDown' ? 'down' : 'up');
	              }
	
	              event.preventDefault(); // Prevents the cursor from moving
	
	              break;
	
	            case 'Enter':
	              {
	                var focusedSuggestion = _this2.getFocusedSuggestion();
	
	                if (isOpen && !alwaysRenderSuggestions) {
	                  closeSuggestions();
	                }
	
	                if (focusedSuggestion !== null) {
	                  var _newValue = getSuggestionValue(focusedSuggestion);
	
	                  _this2.onSuggestionSelected(event, {
	                    suggestion: focusedSuggestion,
	                    suggestionValue: _newValue,
	                    sectionIndex: focusedSectionIndex,
	                    method: 'enter'
	                  });
	
	                  _this2.maybeCallOnChange(event, _newValue, 'enter');
	
	                  _this2.justSelectedSuggestion = true;
	
	                  setTimeout(function () {
	                    _this2.justSelectedSuggestion = false;
	                  });
	                }
	
	                break;
	              }
	
	            case 'Escape':
	              {
	                if (isOpen) {
	                  // If input.type === 'search', the browser clears the input
	                  // when Escape is pressed. We want to disable this default
	                  // behaviour so that, when suggestions are shown, we just hide
	                  // them, without clearing the input.
	                  event.preventDefault();
	                }
	
	                var willCloseSuggestions = isOpen && !alwaysRenderSuggestions;
	
	                if (valueBeforeUpDown === null) {
	                  // Didn't interact with Up/Down
	                  if (!willCloseSuggestions) {
	                    var _newValue2 = '';
	
	                    _this2.maybeCallOnChange(event, _newValue2, 'escape');
	
	                    if (shouldRenderSuggestions(_newValue2)) {
	                      onSuggestionsFetchRequested({ value: _newValue2 });
	                    } else {
	                      _this2.onSuggestionsClearRequested();
	                    }
	                  }
	                } else {
	                  // Interacted with Up/Down
	                  _this2.maybeCallOnChange(event, valueBeforeUpDown, 'escape');
	                }
	
	                if (willCloseSuggestions) {
	                  _this2.onSuggestionsClearRequested();
	                  closeSuggestions();
	                } else {
	                  resetFocusedSuggestion();
	                }
	
	                break;
	              }
	          }
	
	          _onKeyDown && _onKeyDown(event);
	        }
	      });
	      var renderSuggestionData = {
	        query: (valueBeforeUpDown || value).trim()
	      };
	
	      return _react2.default.createElement(_reactAutowhatever2.default, {
	        multiSection: multiSection,
	        items: items,
	        renderInputComponent: renderInputComponent,
	        renderItemsContainer: renderSuggestionsContainer,
	        renderItem: renderSuggestion,
	        renderItemData: renderSuggestionData,
	        renderSectionTitle: renderSectionTitle,
	        getSectionItems: getSectionSuggestions,
	        focusedSectionIndex: focusedSectionIndex,
	        focusedItemIndex: focusedSuggestionIndex,
	        inputProps: autowhateverInputProps,
	        itemProps: this.itemProps,
	        theme: theme,
	        id: id,
	        ref: this.storeReferences
	      });
	    }
	  }]);
	
	  return Autosuggest;
	}(_react.Component);
	
	Autosuggest.propTypes = {
	  suggestions: _react.PropTypes.array.isRequired,
	  onSuggestionsFetchRequested: _react.PropTypes.func.isRequired,
	  onSuggestionsClearRequested: _react.PropTypes.func,
	  onSuggestionSelected: _react.PropTypes.func,
	  renderInputComponent: _react.PropTypes.func,
	  renderSuggestionsContainer: _react.PropTypes.func,
	  getSuggestionValue: _react.PropTypes.func.isRequired,
	  renderSuggestion: _react.PropTypes.func.isRequired,
	  inputProps: _react.PropTypes.object.isRequired,
	  shouldRenderSuggestions: _react.PropTypes.func.isRequired,
	  alwaysRenderSuggestions: _react.PropTypes.bool.isRequired,
	  multiSection: _react.PropTypes.bool.isRequired,
	  renderSectionTitle: _react.PropTypes.func,
	  getSectionSuggestions: _react.PropTypes.func,
	  focusInputOnSuggestionClick: _react.PropTypes.bool.isRequired,
	  focusFirstSuggestion: _react.PropTypes.bool.isRequired,
	  theme: _react.PropTypes.object.isRequired,
	  id: _react.PropTypes.string.isRequired,
	  inputRef: _react.PropTypes.func.isRequired,
	
	  isFocused: _react.PropTypes.bool.isRequired,
	  isCollapsed: _react.PropTypes.bool.isRequired,
	  focusedSectionIndex: _react.PropTypes.number,
	  focusedSuggestionIndex: _react.PropTypes.number,
	  valueBeforeUpDown: _react.PropTypes.string,
	
	  inputFocused: _react.PropTypes.func.isRequired,
	  inputBlurred: _react.PropTypes.func.isRequired,
	  inputChanged: _react.PropTypes.func.isRequired,
	  updateFocusedSuggestion: _react.PropTypes.func.isRequired,
	  resetFocusedSuggestion: _react.PropTypes.func.isRequired,
	  revealSuggestions: _react.PropTypes.func.isRequired,
	  closeSuggestions: _react.PropTypes.func.isRequired
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, _redux.actionCreators)(Autosuggest);

/***/ },
/* 341 */
/***/ function(module, exports) {

	module.exports = function shallowEqualArrays(arrA, arrB) {
	  if (arrA === arrB) {
	    return true;
	  }
	
	  var len = arrA.length;
	
	  if (arrB.length !== len) {
	    return false;
	  }
	
	  for (var i = 0; i < len; i++) {
	    if (arrA[i] !== arrB[i]) {
	      return false;
	    }
	  }
	
	  return true;
	};


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(343).default;

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _sectionIterator = __webpack_require__(344);
	
	var _sectionIterator2 = _interopRequireDefault(_sectionIterator);
	
	var _reactThemeable = __webpack_require__(345);
	
	var _reactThemeable2 = _interopRequireDefault(_reactThemeable);
	
	var _SectionTitle = __webpack_require__(347);
	
	var _SectionTitle2 = _interopRequireDefault(_SectionTitle);
	
	var _ItemsList = __webpack_require__(349);
	
	var _ItemsList2 = _interopRequireDefault(_ItemsList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var alwaysTrue = function alwaysTrue() {
	  return true;
	};
	var emptyObject = {};
	var defaultRenderInputComponent = function defaultRenderInputComponent(props) {
	  return _react2.default.createElement('input', props);
	};
	var defaultRenderItemsContainer = function defaultRenderItemsContainer(props) {
	  return _react2.default.createElement('div', props);
	};
	var defaultTheme = {
	  container: 'react-autowhatever__container',
	  containerOpen: 'react-autowhatever__container--open',
	  input: 'react-autowhatever__input',
	  itemsContainer: 'react-autowhatever__items-container',
	  itemsList: 'react-autowhatever__items-list',
	  item: 'react-autowhatever__item',
	  itemFocused: 'react-autowhatever__item--focused',
	  sectionContainer: 'react-autowhatever__section-container',
	  sectionTitle: 'react-autowhatever__section-title'
	};
	
	var Autowhatever = function (_Component) {
	  _inherits(Autowhatever, _Component);
	
	  function Autowhatever(props) {
	    _classCallCheck(this, Autowhatever);
	
	    var _this = _possibleConstructorReturn(this, (Autowhatever.__proto__ || Object.getPrototypeOf(Autowhatever)).call(this, props));
	
	    _this.focusedItem = null;
	
	    _this.setSectionsItems(props);
	    _this.setSectionIterator(props);
	    _this.setTheme(props);
	
	    _this.onKeyDown = _this.onKeyDown.bind(_this);
	    _this.storeInputReference = _this.storeInputReference.bind(_this);
	    _this.storeItemsContainerReference = _this.storeItemsContainerReference.bind(_this);
	    _this.onFocusedItemChange = _this.onFocusedItemChange.bind(_this);
	    _this.getItemId = _this.getItemId.bind(_this);
	    return _this;
	  }
	
	  _createClass(Autowhatever, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.ensureFocusedItemIsVisible();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.items !== this.props.items) {
	        this.setSectionsItems(nextProps);
	      }
	
	      if (nextProps.items !== this.props.items || nextProps.multiSection !== this.props.multiSection) {
	        this.setSectionIterator(nextProps);
	      }
	
	      if (nextProps.theme !== this.props.theme) {
	        this.setTheme(nextProps);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.ensureFocusedItemIsVisible();
	    }
	  }, {
	    key: 'setSectionsItems',
	    value: function setSectionsItems(props) {
	      if (props.multiSection) {
	        this.sectionsItems = props.items.map(function (section) {
	          return props.getSectionItems(section);
	        });
	        this.sectionsLengths = this.sectionsItems.map(function (items) {
	          return items.length;
	        });
	        this.allSectionsAreEmpty = this.sectionsLengths.every(function (itemsCount) {
	          return itemsCount === 0;
	        });
	      }
	    }
	  }, {
	    key: 'setSectionIterator',
	    value: function setSectionIterator(props) {
	      this.sectionIterator = (0, _sectionIterator2.default)({
	        multiSection: props.multiSection,
	        data: props.multiSection ? this.sectionsLengths : props.items.length
	      });
	    }
	  }, {
	    key: 'setTheme',
	    value: function setTheme(props) {
	      this.theme = (0, _reactThemeable2.default)(props.theme);
	    }
	  }, {
	    key: 'storeInputReference',
	    value: function storeInputReference(input) {
	      if (input !== null) {
	        this.input = input;
	      }
	    }
	  }, {
	    key: 'storeItemsContainerReference',
	    value: function storeItemsContainerReference(itemsContainer) {
	      if (itemsContainer !== null) {
	        this.itemsContainer = itemsContainer;
	      }
	    }
	  }, {
	    key: 'onFocusedItemChange',
	    value: function onFocusedItemChange(focusedItem) {
	      this.focusedItem = focusedItem;
	    }
	  }, {
	    key: 'getItemId',
	    value: function getItemId(sectionIndex, itemIndex) {
	      if (itemIndex === null) {
	        return null;
	      }
	
	      var id = this.props.id;
	
	      var section = sectionIndex === null ? '' : 'section-' + sectionIndex;
	
	      return 'react-autowhatever-' + id + '-' + section + '-item-' + itemIndex;
	    }
	  }, {
	    key: 'renderSections',
	    value: function renderSections() {
	      var _this2 = this;
	
	      if (this.allSectionsAreEmpty) {
	        return null;
	      }
	
	      var theme = this.theme;
	      var _props = this.props;
	      var id = _props.id;
	      var items = _props.items;
	      var renderItem = _props.renderItem;
	      var renderItemData = _props.renderItemData;
	      var shouldRenderSection = _props.shouldRenderSection;
	      var renderSectionTitle = _props.renderSectionTitle;
	      var focusedSectionIndex = _props.focusedSectionIndex;
	      var focusedItemIndex = _props.focusedItemIndex;
	      var itemProps = _props.itemProps;
	
	
	      return items.map(function (section, sectionIndex) {
	        if (!shouldRenderSection(section)) {
	          return null;
	        }
	
	        var keyPrefix = 'react-autowhatever-' + id + '-';
	        var sectionKeyPrefix = keyPrefix + 'section-' + sectionIndex + '-';
	
	        // `key` is provided by theme()
	        /* eslint-disable react/jsx-key */
	        return _react2.default.createElement(
	          'div',
	          theme(sectionKeyPrefix + 'container', 'sectionContainer'),
	          _react2.default.createElement(_SectionTitle2.default, {
	            section: section,
	            renderSectionTitle: renderSectionTitle,
	            theme: theme,
	            sectionKeyPrefix: sectionKeyPrefix
	          }),
	          _react2.default.createElement(_ItemsList2.default, {
	            items: _this2.sectionsItems[sectionIndex],
	            itemProps: itemProps,
	            renderItem: renderItem,
	            renderItemData: renderItemData,
	            sectionIndex: sectionIndex,
	            focusedItemIndex: focusedSectionIndex === sectionIndex ? focusedItemIndex : null,
	            onFocusedItemChange: _this2.onFocusedItemChange,
	            getItemId: _this2.getItemId,
	            theme: theme,
	            keyPrefix: keyPrefix,
	            ref: _this2.storeItemsListReference
	          })
	        );
	        /* eslint-enable react/jsx-key */
	      });
	    }
	  }, {
	    key: 'renderItems',
	    value: function renderItems() {
	      var items = this.props.items;
	
	
	      if (items.length === 0) {
	        return null;
	      }
	
	      var theme = this.theme;
	      var _props2 = this.props;
	      var id = _props2.id;
	      var renderItem = _props2.renderItem;
	      var renderItemData = _props2.renderItemData;
	      var focusedSectionIndex = _props2.focusedSectionIndex;
	      var focusedItemIndex = _props2.focusedItemIndex;
	      var itemProps = _props2.itemProps;
	
	
	      return _react2.default.createElement(_ItemsList2.default, {
	        items: items,
	        itemProps: itemProps,
	        renderItem: renderItem,
	        renderItemData: renderItemData,
	        focusedItemIndex: focusedSectionIndex === null ? focusedItemIndex : null,
	        onFocusedItemChange: this.onFocusedItemChange,
	        getItemId: this.getItemId,
	        theme: theme,
	        keyPrefix: 'react-autowhatever-' + id + '-'
	      });
	    }
	  }, {
	    key: 'onKeyDown',
	    value: function onKeyDown(event) {
	      var _props3 = this.props;
	      var inputProps = _props3.inputProps;
	      var focusedSectionIndex = _props3.focusedSectionIndex;
	      var focusedItemIndex = _props3.focusedItemIndex;
	
	
	      switch (event.key) {
	        case 'ArrowDown':
	        case 'ArrowUp':
	          {
	            var nextPrev = event.key === 'ArrowDown' ? 'next' : 'prev';
	
	            var _sectionIterator$next = this.sectionIterator[nextPrev]([focusedSectionIndex, focusedItemIndex]);
	
	            var _sectionIterator$next2 = _slicedToArray(_sectionIterator$next, 2);
	
	            var newFocusedSectionIndex = _sectionIterator$next2[0];
	            var newFocusedItemIndex = _sectionIterator$next2[1];
	
	
	            inputProps.onKeyDown(event, { newFocusedSectionIndex: newFocusedSectionIndex, newFocusedItemIndex: newFocusedItemIndex });
	            break;
	          }
	
	        default:
	          inputProps.onKeyDown(event, { focusedSectionIndex: focusedSectionIndex, focusedItemIndex: focusedItemIndex });
	      }
	    }
	  }, {
	    key: 'ensureFocusedItemIsVisible',
	    value: function ensureFocusedItemIsVisible() {
	      var focusedItem = this.focusedItem;
	
	
	      if (!focusedItem) {
	        return;
	      }
	
	      var itemsContainer = this.itemsContainer;
	
	      var itemOffsetRelativeToContainer = focusedItem.offsetParent === itemsContainer ? focusedItem.offsetTop : focusedItem.offsetTop - itemsContainer.offsetTop;
	
	      var scrollTop = itemsContainer.scrollTop; // Top of the visible area
	
	      if (itemOffsetRelativeToContainer < scrollTop) {
	        // Item is off the top of the visible area
	        scrollTop = itemOffsetRelativeToContainer;
	      } else if (itemOffsetRelativeToContainer + focusedItem.offsetHeight > scrollTop + itemsContainer.offsetHeight) {
	        // Item is off the bottom of the visible area
	        scrollTop = itemOffsetRelativeToContainer + focusedItem.offsetHeight - itemsContainer.offsetHeight;
	      }
	
	      if (scrollTop !== itemsContainer.scrollTop) {
	        itemsContainer.scrollTop = scrollTop;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var theme = this.theme;
	      var _props4 = this.props;
	      var id = _props4.id;
	      var multiSection = _props4.multiSection;
	      var renderInputComponent = _props4.renderInputComponent;
	      var renderItemsContainer = _props4.renderItemsContainer;
	      var focusedSectionIndex = _props4.focusedSectionIndex;
	      var focusedItemIndex = _props4.focusedItemIndex;
	
	      var renderedItems = multiSection ? this.renderSections() : this.renderItems();
	      var isOpen = renderedItems !== null;
	      var ariaActivedescendant = this.getItemId(focusedSectionIndex, focusedItemIndex);
	      var containerProps = theme('react-autowhatever-' + id + '-container', 'container', isOpen && 'containerOpen');
	      var itemsContainerId = 'react-autowhatever-' + id;
	      var inputComponent = renderInputComponent(_extends({
	        type: 'text',
	        value: '',
	        autoComplete: 'off',
	        role: 'combobox',
	        'aria-autocomplete': 'list',
	        'aria-owns': itemsContainerId,
	        'aria-expanded': isOpen,
	        'aria-haspopup': isOpen,
	        'aria-activedescendant': ariaActivedescendant
	      }, theme('react-autowhatever-' + id + '-input', 'input'), this.props.inputProps, {
	        onKeyDown: this.props.inputProps.onKeyDown && this.onKeyDown,
	        ref: this.storeInputReference
	      }));
	      var itemsContainer = renderItemsContainer(_extends({
	        id: itemsContainerId
	      }, theme('react-autowhatever-' + id + '-items-container', 'itemsContainer'), {
	        ref: this.storeItemsContainerReference,
	        children: renderedItems
	      }));
	
	      return _react2.default.createElement(
	        'div',
	        containerProps,
	        inputComponent,
	        itemsContainer
	      );
	    }
	  }]);
	
	  return Autowhatever;
	}(_react.Component);
	
	Autowhatever.propTypes = {
	  id: _react.PropTypes.string, // Used in aria-* attributes. If multiple Autowhatever's are rendered on a page, they must have unique ids.
	  multiSection: _react.PropTypes.bool, // Indicates whether a multi section layout should be rendered.
	  renderInputComponent: _react.PropTypes.func, // Renders the input component.
	  items: _react.PropTypes.array.isRequired, // Array of items or sections to render.
	  renderItemsContainer: _react.PropTypes.func, // Renders the items container.
	  renderItem: _react.PropTypes.func, // This function renders a single item.
	  renderItemData: _react.PropTypes.object, // Arbitrary data that will be passed to renderItem()
	  shouldRenderSection: _react.PropTypes.func, // This function gets a section and returns whether it should be rendered, or not.
	  renderSectionTitle: _react.PropTypes.func, // This function gets a section and renders its title.
	  getSectionItems: _react.PropTypes.func, // This function gets a section and returns its items, which will be passed into `renderItem` for rendering.
	  inputComponent: _react.PropTypes.func, // When specified, it is used to render the input element
	  inputProps: _react.PropTypes.object, // Arbitrary input props
	  itemProps: _react.PropTypes.oneOfType([// Arbitrary item props
	  _react.PropTypes.object, _react.PropTypes.func]),
	  focusedSectionIndex: _react.PropTypes.number, // Section index of the focused item
	  focusedItemIndex: _react.PropTypes.number, // Focused item index (within a section)
	  theme: _react.PropTypes.oneOfType([// Styles. See: https://github.com/markdalgleish/react-themeable
	  _react.PropTypes.object, _react.PropTypes.array])
	};
	Autowhatever.defaultProps = {
	  id: '1',
	  multiSection: false,
	  renderInputComponent: defaultRenderInputComponent,
	  renderItemsContainer: defaultRenderItemsContainer,
	  shouldRenderSection: alwaysTrue,
	  renderItem: function renderItem() {
	    throw new Error('`renderItem` must be provided');
	  },
	  renderItemData: emptyObject,
	  renderSectionTitle: function renderSectionTitle() {
	    throw new Error('`renderSectionTitle` must be provided');
	  },
	  getSectionItems: function getSectionItems() {
	    throw new Error('`getSectionItems` must be provided');
	  },
	  inputProps: emptyObject,
	  itemProps: emptyObject,
	  focusedSectionIndex: null,
	  focusedItemIndex: null,
	  theme: defaultTheme
	};
	exports.default = Autowhatever;

/***/ },
/* 344 */
/***/ function(module, exports) {

	"use strict";
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	module.exports = function (_ref) {
	  var data = _ref.data;
	  var multiSection = _ref.multiSection;
	
	  function nextNonEmptySectionIndex(sectionIndex) {
	    if (sectionIndex === null) {
	      sectionIndex = 0;
	    } else {
	      sectionIndex++;
	    }
	
	    while (sectionIndex < data.length && data[sectionIndex] === 0) {
	      sectionIndex++;
	    }
	
	    return sectionIndex === data.length ? null : sectionIndex;
	  }
	
	  function prevNonEmptySectionIndex(sectionIndex) {
	    if (sectionIndex === null) {
	      sectionIndex = data.length - 1;
	    } else {
	      sectionIndex--;
	    }
	
	    while (sectionIndex >= 0 && data[sectionIndex] === 0) {
	      sectionIndex--;
	    }
	
	    return sectionIndex === -1 ? null : sectionIndex;
	  }
	
	  function next(position) {
	    var _position = _slicedToArray(position, 2);
	
	    var sectionIndex = _position[0];
	    var itemIndex = _position[1];
	
	
	    if (multiSection) {
	      if (itemIndex === null || itemIndex === data[sectionIndex] - 1) {
	        sectionIndex = nextNonEmptySectionIndex(sectionIndex);
	
	        if (sectionIndex === null) {
	          return [null, null];
	        }
	
	        return [sectionIndex, 0];
	      }
	
	      return [sectionIndex, itemIndex + 1];
	    }
	
	    if (data === 0 || itemIndex === data - 1) {
	      return [null, null];
	    }
	
	    if (itemIndex === null) {
	      return [null, 0];
	    }
	
	    return [null, itemIndex + 1];
	  }
	
	  function prev(position) {
	    var _position2 = _slicedToArray(position, 2);
	
	    var sectionIndex = _position2[0];
	    var itemIndex = _position2[1];
	
	
	    if (multiSection) {
	      if (itemIndex === null || itemIndex === 0) {
	        sectionIndex = prevNonEmptySectionIndex(sectionIndex);
	
	        if (sectionIndex === null) {
	          return [null, null];
	        }
	
	        return [sectionIndex, data[sectionIndex] - 1];
	      }
	
	      return [sectionIndex, itemIndex - 1];
	    }
	
	    if (data === 0 || itemIndex === 0) {
	      return [null, null];
	    }
	
	    if (itemIndex === null) {
	      return [null, data - 1];
	    }
	
	    return [null, itemIndex - 1];
	  }
	
	  function isLast(position) {
	    return next(position)[1] === null;
	  }
	
	  return {
	    next: next,
	    prev: prev,
	    isLast: isLast
	  };
	};


/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	var _objectAssign = __webpack_require__(346);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var truthy = function truthy(x) {
	  return x;
	};
	
	exports['default'] = function (input) {
	  var _ref = Array.isArray(input) && input.length === 2 ? input : [input, null];
	
	  var _ref2 = _slicedToArray(_ref, 2);
	
	  var theme = _ref2[0];
	  var classNameDecorator = _ref2[1];
	
	  return function (key) {
	    for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      names[_key - 1] = arguments[_key];
	    }
	
	    var styles = names.map(function (name) {
	      return theme[name];
	    }).filter(truthy);
	
	    return typeof styles[0] === 'string' || typeof classNameDecorator === 'function' ? { key: key, className: classNameDecorator ? classNameDecorator.apply(undefined, _toConsumableArray(styles)) : styles.join(' ') } : { key: key, style: _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(styles))) };
	  };
	};
	
	module.exports = exports['default'];

/***/ },
/* 346 */
/***/ function(module, exports) {

	'use strict';
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function ownEnumerableKeys(obj) {
		var keys = Object.getOwnPropertyNames(obj);
	
		if (Object.getOwnPropertySymbols) {
			keys = keys.concat(Object.getOwnPropertySymbols(obj));
		}
	
		return keys.filter(function (key) {
			return propIsEnumerable.call(obj, key);
		});
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = ownEnumerableKeys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};


/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _compareObjects = __webpack_require__(348);
	
	var _compareObjects2 = _interopRequireDefault(_compareObjects);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SectionTitle = function (_Component) {
	  _inherits(SectionTitle, _Component);
	
	  function SectionTitle() {
	    _classCallCheck(this, SectionTitle);
	
	    return _possibleConstructorReturn(this, (SectionTitle.__proto__ || Object.getPrototypeOf(SectionTitle)).apply(this, arguments));
	  }
	
	  _createClass(SectionTitle, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return (0, _compareObjects2.default)(nextProps, this.props);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var section = _props.section;
	      var renderSectionTitle = _props.renderSectionTitle;
	      var theme = _props.theme;
	      var sectionKeyPrefix = _props.sectionKeyPrefix;
	
	      var sectionTitle = renderSectionTitle(section);
	
	      if (!sectionTitle) {
	        return null;
	      }
	
	      return _react2.default.createElement(
	        'div',
	        theme(sectionKeyPrefix + 'title', 'sectionTitle'),
	        sectionTitle
	      );
	    }
	  }]);
	
	  return SectionTitle;
	}(_react.Component);
	
	SectionTitle.propTypes = {
	  section: _react.PropTypes.any.isRequired,
	  renderSectionTitle: _react.PropTypes.func.isRequired,
	  theme: _react.PropTypes.func.isRequired,
	  sectionKeyPrefix: _react.PropTypes.string.isRequired
	};
	exports.default = SectionTitle;

/***/ },
/* 348 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = compareObjects;
	function compareObjects(objA, objB) {
	  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	
	  if (objA === objB) {
	    return false;
	  }
	
	  var aKeys = Object.keys(objA);
	  var bKeys = Object.keys(objB);
	
	  if (aKeys.length !== bKeys.length) {
	    return true;
	  }
	
	  var keysMap = {};
	  var i = void 0,
	      len = void 0;
	
	  for (i = 0, len = keys.length; i < len; i++) {
	    keysMap[keys[i]] = true;
	  }
	
	  for (i = 0, len = aKeys.length; i < len; i++) {
	    var key = aKeys[i];
	    var aValue = objA[key];
	    var bValue = objB[key];
	
	    if (aValue === bValue) {
	      continue;
	    }
	
	    if (!keysMap[key] || aValue === null || bValue === null || (typeof aValue === 'undefined' ? 'undefined' : _typeof(aValue)) !== 'object' || (typeof bValue === 'undefined' ? 'undefined' : _typeof(bValue)) !== 'object') {
	      return true;
	    }
	
	    var aValueKeys = Object.keys(aValue);
	    var bValueKeys = Object.keys(bValue);
	
	    if (aValueKeys.length !== bValueKeys.length) {
	      return true;
	    }
	
	    for (var n = 0, length = aValueKeys.length; n < length; n++) {
	      var aValueKey = aValueKeys[n];
	
	      if (aValue[aValueKey] !== bValue[aValueKey]) {
	        return true;
	      }
	    }
	  }
	
	  return false;
	}

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Item = __webpack_require__(350);
	
	var _Item2 = _interopRequireDefault(_Item);
	
	var _compareObjects = __webpack_require__(348);
	
	var _compareObjects2 = _interopRequireDefault(_compareObjects);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ItemsList = function (_Component) {
	  _inherits(ItemsList, _Component);
	
	  function ItemsList() {
	    _classCallCheck(this, ItemsList);
	
	    var _this = _possibleConstructorReturn(this, (ItemsList.__proto__ || Object.getPrototypeOf(ItemsList)).call(this));
	
	    _this.storeFocusedItemReference = _this.storeFocusedItemReference.bind(_this);
	    return _this;
	  }
	
	  _createClass(ItemsList, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return (0, _compareObjects2.default)(nextProps, this.props, ['itemProps']);
	    }
	  }, {
	    key: 'storeFocusedItemReference',
	    value: function storeFocusedItemReference(focusedItem) {
	      this.props.onFocusedItemChange(focusedItem === null ? null : focusedItem.item);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var items = _props.items;
	      var itemProps = _props.itemProps;
	      var renderItem = _props.renderItem;
	      var renderItemData = _props.renderItemData;
	      var sectionIndex = _props.sectionIndex;
	      var focusedItemIndex = _props.focusedItemIndex;
	      var getItemId = _props.getItemId;
	      var theme = _props.theme;
	      var keyPrefix = _props.keyPrefix;
	
	      var sectionPrefix = sectionIndex === null ? keyPrefix : keyPrefix + 'section-' + sectionIndex + '-';
	      var isItemPropsFunction = typeof itemProps === 'function';
	
	      return _react2.default.createElement(
	        'ul',
	        _extends({ role: 'listbox' }, theme(sectionPrefix + 'items-list', 'itemsList')),
	        items.map(function (item, itemIndex) {
	          var isFocused = itemIndex === focusedItemIndex;
	          var itemKey = sectionPrefix + 'item-' + itemIndex;
	          var itemPropsObj = isItemPropsFunction ? itemProps({ sectionIndex: sectionIndex, itemIndex: itemIndex }) : itemProps;
	          var allItemProps = _extends({
	            id: getItemId(sectionIndex, itemIndex)
	          }, theme(itemKey, 'item', isFocused && 'itemFocused'), itemPropsObj);
	
	          if (isFocused) {
	            allItemProps.ref = _this2.storeFocusedItemReference;
	          }
	
	          // `key` is provided by theme()
	          /* eslint-disable react/jsx-key */
	          return _react2.default.createElement(_Item2.default, _extends({}, allItemProps, {
	            sectionIndex: sectionIndex,
	            itemIndex: itemIndex,
	            item: item,
	            renderItem: renderItem,
	            renderItemData: renderItemData
	          }));
	          /* eslint-enable react/jsx-key */
	        })
	      );
	    }
	  }]);
	
	  return ItemsList;
	}(_react.Component);
	
	ItemsList.propTypes = {
	  items: _react.PropTypes.array.isRequired,
	  itemProps: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),
	  renderItem: _react.PropTypes.func.isRequired,
	  renderItemData: _react.PropTypes.object.isRequired,
	  sectionIndex: _react.PropTypes.number,
	  focusedItemIndex: _react.PropTypes.number,
	  onFocusedItemChange: _react.PropTypes.func.isRequired,
	  getItemId: _react.PropTypes.func.isRequired,
	  theme: _react.PropTypes.func.isRequired,
	  keyPrefix: _react.PropTypes.string.isRequired
	};
	ItemsList.defaultProps = {
	  sectionIndex: null
	};
	exports.default = ItemsList;

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _compareObjects = __webpack_require__(348);
	
	var _compareObjects2 = _interopRequireDefault(_compareObjects);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Item = function (_Component) {
	  _inherits(Item, _Component);
	
	  function Item() {
	    _classCallCheck(this, Item);
	
	    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));
	
	    _this.storeItemReference = _this.storeItemReference.bind(_this);
	    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
	    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
	    _this.onMouseDown = _this.onMouseDown.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Item, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return (0, _compareObjects2.default)(nextProps, this.props, ['renderItemData']);
	    }
	  }, {
	    key: 'storeItemReference',
	    value: function storeItemReference(item) {
	      if (item !== null) {
	        this.item = item;
	      }
	    }
	  }, {
	    key: 'onMouseEnter',
	    value: function onMouseEnter(event) {
	      var _props = this.props;
	      var sectionIndex = _props.sectionIndex;
	      var itemIndex = _props.itemIndex;
	
	
	      this.props.onMouseEnter(event, { sectionIndex: sectionIndex, itemIndex: itemIndex });
	    }
	  }, {
	    key: 'onMouseLeave',
	    value: function onMouseLeave(event) {
	      var _props2 = this.props;
	      var sectionIndex = _props2.sectionIndex;
	      var itemIndex = _props2.itemIndex;
	
	
	      this.props.onMouseLeave(event, { sectionIndex: sectionIndex, itemIndex: itemIndex });
	    }
	  }, {
	    key: 'onMouseDown',
	    value: function onMouseDown(event) {
	      var _props3 = this.props;
	      var sectionIndex = _props3.sectionIndex;
	      var itemIndex = _props3.itemIndex;
	
	
	      this.props.onMouseDown(event, { sectionIndex: sectionIndex, itemIndex: itemIndex });
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(event) {
	      var _props4 = this.props;
	      var sectionIndex = _props4.sectionIndex;
	      var itemIndex = _props4.itemIndex;
	
	
	      this.props.onClick(event, { sectionIndex: sectionIndex, itemIndex: itemIndex });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props5 = this.props;
	      var item = _props5.item;
	      var renderItem = _props5.renderItem;
	      var renderItemData = _props5.renderItemData;
	
	      var restProps = _objectWithoutProperties(_props5, ['item', 'renderItem', 'renderItemData']);
	
	      delete restProps.sectionIndex;
	      delete restProps.itemIndex;
	
	      if (typeof restProps.onMouseEnter === 'function') {
	        restProps.onMouseEnter = this.onMouseEnter;
	      }
	
	      if (typeof restProps.onMouseLeave === 'function') {
	        restProps.onMouseLeave = this.onMouseLeave;
	      }
	
	      if (typeof restProps.onMouseDown === 'function') {
	        restProps.onMouseDown = this.onMouseDown;
	      }
	
	      if (typeof restProps.onClick === 'function') {
	        restProps.onClick = this.onClick;
	      }
	
	      return _react2.default.createElement(
	        'li',
	        _extends({ role: 'option' }, restProps, { ref: this.storeItemReference }),
	        renderItem(item, renderItemData)
	      );
	    }
	  }]);
	
	  return Item;
	}(_react.Component);
	
	Item.propTypes = {
	  sectionIndex: _react.PropTypes.number,
	  itemIndex: _react.PropTypes.number.isRequired,
	  item: _react.PropTypes.any.isRequired,
	  renderItem: _react.PropTypes.func.isRequired,
	  renderItemData: _react.PropTypes.object.isRequired,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onMouseDown: _react.PropTypes.func,
	  onClick: _react.PropTypes.func
	};
	exports.default = Item;

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// NPM Dependencies ------------------------------------------------------------
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// React Class -----------------------------------------------------------------
	var Item = _react2.default.createClass({
	  displayName: "Item",
	
	
	  // Lifecycles Functions
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      image: "",
	      name: "",
	      id: "",
	      favourite: false,
	      onSetAsFavourite: function onSetAsFavourite() {}
	    };
	  },
	
	  componentDidMount: function componentDidMount() {},
	
	  // Storage Methods ------------------------
	
	
	  // Handler Methods ------------------------
	
	
	  // ---- Render Methods -------------------
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      {
	        onClick: this.props.onSetAsFavourite.bind(null, {
	          id: this.props.id,
	          name: this.props.name,
	          image: this.props.photo
	        }, this.props.favourite),
	        className: "Musikki-Test-item" },
	      _react2.default.createElement("div", { className: "Musikki-Test-item-photo",
	        style: { backgroundImage: "url(" + this.props.photo + ")" } }),
	      _react2.default.createElement(
	        "div",
	        { className: "Musikki-Test-item-name" },
	        this.props.name
	      ),
	      this.props.favourite && _react2.default.createElement(
	        "div",
	        { className: "Musikki-Test-item-fav" },
	        _react2.default.createElement("i", { className: "fi-check" })
	      )
	    );
	  }
	});exports.default = Item;

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(2);
	
	var NotFound = React.createClass({
	  displayName: "NotFound",
	
	
	  //---------------------------------------------------------------------------
	  // Render
	  //---------------------------------------------------------------------------
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "NotFound" },
	      React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "h2",
	          null,
	          "Error 404."
	        ),
	        React.createElement(
	          "h3",
	          null,
	          "This page isn't real, it's a dream!"
	        )
	      )
	    );
	  }
	});
	
	module.exports = NotFound;

/***/ }
]);
//# sourceMappingURL=musikkitest.js.map