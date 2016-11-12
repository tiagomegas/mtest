var cookie = require('react-cookie');
// global to cache value
var gStorageSupported = undefined;
function localStorageSupported() {
  var testKey = 'test', storage = window.sessionStorage;
  if (gStorageSupported === undefined) {
    try {
      storage.setItem(testKey, '1');
      storage.removeItem(testKey);
      gStorageSupported = true;
    } catch (error) {
      gStorageSupported = false;
    }
  }
  return gStorageSupported;
}
var storage = {

  localStorageGet: function (pKey) {
    if (localStorageSupported()) {
      return localStorage[pKey];
    } else {
      return cookie.load('localstorage.' + pKey);
    }
  },

  localStorageSet: function (pKey, pValue) {
    if (localStorageSupported()) {
      localStorage[pKey] = pValue;
    } else {
      cookie.save('localstorage.' + pKey, pValue);
    }
  },

  localStorageDelete: function(pKey) {
    if (localStorageSupported()) {
      localStorage.removeItem(pKey);
    } else {
      cookie.remove('localstorage.' + pKey);
    }

  }
};

module.exports = storage;

