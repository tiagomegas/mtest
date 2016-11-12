var axios     = require("axios")
  , qs        = require("qs")
  , _         = require('lodash')
  , storage   = require('../localStorage/localStorage')

var auth = {
  /**
   * Get user information from localStorage
   * @return {[type]} [description]
   */
  getUserInfoFromLocalSotrage: function() {
    return {
      data: {
        access_token  : storage.localStorageGet("token"),
        displayName   : storage.localStorageGet("displayName"),
        userId        : storage.localStorageGet("userId")
      }
    }
  },

  /**
   * Verify login
   * @param  {[type]}   username [description]
   * @param  {[type]}   password [description]
   * @param  {Function} cb       [description]
   * @return {[type]}            [description]
   */
  login: function (username, password, cb) {
    cb = cb || arguments[arguments.length - 1];
    // shortcut to false if no credentials passed
    //
    // already logged in?
    if (storage.localStorageGet("token")) {
      if (cb) { cb(true, this.getUserInfoFromLocalSotrage()); }
      this.onChange(true, this.getUserInfoFromLocalSotrage());
      this.verifyToken();
      return;
    }

    // shortcut to false if no credentials passed
    if (_.isUndefined(username) || _.isUndefined(password)) {
      if (cb) { cb(false, this.getUserInfoFromLocalSotrage()); }
      this.onChange(false, this.getUserInfoFromLocalSotrage());
      return;
    }
    axios.get(API_URL + "/sessions/create", {
      params: {
        username: username,
        password: password
      }
    })
      .then(function (response) {
        this.destroyLocalStorage();

        let displayName = response.data.displayName.split(" ");
        let firstName = displayName[0];
        let lastName = displayName[1];

        storage.localStorageSet("token", response.data.access_token);
        storage.localStorageSet("displayName", response.data.displayName);
        storage.localStorageSet("picture", response.data.picture);
        storage.localStorageSet("userId", response.data.id);
        if (cb) { cb(true, response); }
        this.onChange(true, response);
      }.bind(this)).catch(function (response) {
      if (cb) { cb(false, response); }
      this.onChange(false, response);
    }.bind(this));

  },

  /**
   * Create a new account
   * @param  {[type]}   params [description]
   * @param  {Function} cb     [description]
   * @return {[type]}          [description]
   */
  signup: function (params, cb) {
    params = params || {};

    var signupParams = qs.stringify(params);

    axios.post(API_URL + "/user/create", signupParams, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(function (response) {

      mixpanel.track("create_account");

      if (cb) { cb(true, response) }
      this.onChange(true, response);
    }).catch(function (response) {
      if (cb) { cb(false, response) }
      this.onChange(true, response);
    });
  },

  /**
   * Logout user
   * @param  {Function} cb [description]
   * @return {[type]}      [description]
   */
  logout: function (cb) {
    //TODO change to request asap
    axios({
      method: "delete",
      url: API_URL + "/sessions/destroy",
      headers: this.authHeader()
    }).then(function (response) {
      mixpanel.identify(storage.localStorageGet("userId"));
      mixpanel.track("User logged out");
      this.destroyLocalStorage();
      cb(false, response);
      // this.onChange(false, response);
    }.bind(this))
      .catch(function (response) {
        this.destroyLocalStorage();
        cb(false, response);
        // this.onChange(false, response);
      }.bind(this));
  },

  /**
   * Verify if user is already logged in
   * @param  {Function} cb [description]
   * @return {[type]}      [description]
   */
  verifyToken: function () {
    axios.get(API_URL + "/sessions/verify", {
      headers: this.authHeader()
    })
      .then(function (response) {
        mixpanel.identify(response.data.id);
        if(storage.localStorageGet("displayName") !== response.data.displayName && !_.isUndefined(response.data.displayName)){
          storage.localStorageSet("displayName", response.data.displayName);
        }
        if(storage.localStorageGet("picture") !== response.data.picture && !_.isUndefined(response.data.displayName)){
          storage.localStorageSet("picture", response.data.picture);
        }
        this.onChange(true, this.getUserInfoFromLocalSotrage());
      }.bind(this))
      .catch(function (response) {
        this.destroyLocalStorage();
        this.onChange(true, this.getUserInfoFromLocalSotrage());
      }.bind(this));
  },

  /**
   * Get profile from current user
   * @return {[type]} [description]
   */
  currentUser: function () {
    return axios.get(API_URL + "/me", {
      headers: this.authHeader()
    });
  },

  /**
   * Build auth token
   * @return {[type]} [description]
   */
  authHeader: function () {
    return this.getToken() ?
    { "Authorization": "Bearer " + this.getToken() } :
    {} ;
  },

  /**
   * Get token
   * @return {[type]} [description]
   */
  getToken: function () {
    return storage.localStorageGet("token");
  },

  loggedIn: function () {
    return !!storage.localStorageGet("token");
  },
  /**
   * Get usedId
   * @return {[type]} [description]
   */
  getUserId: function () {
    return storage.localStorageGet('userId');
  },

  /**
   * destroy all user login information saved in localstorage
   * @return {[type]} [description]
   */
  destroyLocalStorage: function(){
    storage.localStorageDelete('token');
    storage.localStorageDelete('displayName');
    storage.localStorageDelete('picture');
    storage.localStorageDelete('userId');
  }
};


module.exports = auth;

