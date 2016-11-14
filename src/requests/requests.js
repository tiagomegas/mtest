import axios       from 'axios';
import {API_URL,APP_ID,APP_KEY} from '../constants/settings';
// ---- Request Methods -------------------

const headers = {
  'AppID': APP_ID,
  'AppKey': APP_KEY,
  'Content-Type': 'application/x-www-form-urlencoded'
};

var requests = {

  setHeader: function(){

    return headers;
  },

  get: function(path,params){
    return axios.get(
      API_URL + path,
      {
        params: params,
        headers: headers
      }
    )
  },


}

module.exports = requests;
