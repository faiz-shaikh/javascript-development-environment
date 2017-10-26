webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_userApi__ = __webpack_require__(3);
/* eslint-disable */


Object(__WEBPACK_IMPORTED_MODULE_0__api_userApi__["b" /* getUsers */])().then(result => {
  let usersBody = '';
  result.forEach(user => {
    usersBody += `<tr>
    <td><a href="#" data-id='${user.id}' class='deleteUser'>Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`;
  });
  global.document.getElementById('users').innerHTML = usersBody;
  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  Array.from(deleteLinks, link => {
    link.onclick = event => {
      const element = event.target;
      event.preventDefault();
      Object(__WEBPACK_IMPORTED_MODULE_0__api_userApi__["a" /* deleteUser */])(element.attributes['data-id'].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getUsers;
/* harmony export (immutable) */ __webpack_exports__["a"] = deleteUser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseUrl__ = __webpack_require__(4);



const baseUrl = Object(__WEBPACK_IMPORTED_MODULE_1__baseUrl__["a" /* default */])();

function getUsers() {
  return get('users');
}

function deleteUser(id) {
  return del(`users/${id}`);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBaseUrl;
function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi')
    ? 'http://localhost:3001/'
    : 'http://59f1f6fba118a000126fbe66.mockapi.io/';
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href; // eslint-disable-line no-param-reassign
  name = name.replace(/[\]]/g, '\\$&'); // eslint-disable-line no-param-reassign
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


/***/ })
],[1]);
//# sourceMappingURL=main.7011459e55c0e1a4043b.js.map