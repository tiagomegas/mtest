// global to cache value
var storage = {

  localStorageGet: function (pKey) {
      return _.isUndefined(localStorage[pKey]) ? undefined : JSON.parse(localStorage[pKey]);
  },

  localStorageSet: function (pKey, pValue) {
      localStorage[pKey] = JSON.stringify(pValue);
  },

  localStorageDelete: function(pKey) {
      localStorage.removeItem(pKey);
  }
};

module.exports = storage;

