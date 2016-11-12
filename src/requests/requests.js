import axios       from 'axios';
import {API_URL,API_KEY} from '../constants/settings';
// ---- Request Methods -------------------


var requests = {

  setHeader: function(){
    var headers = {
      'letoken': FLYKT_CONFIG.API_KEY,
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    return headers;
  },

  get: function(path,params){
    if (!this.validateFlyktConf()) {
      return;
    }
    let headers = this.setHeader();
    return axios.get(
      API_URL + path,
      {
        params: params,
        headers: headers
      }
    )
  },

  getSocket: function () {
    if (!this.validateFlyktConf()) {
      return;
    }
    var opts = {
      extraHeaders: {
        'letoken' : FLYKT_CONFIG.API_KEY
      }
    };
    return (io(SOCKET_URL, opts));
  },

  socketMethods: function (socket, _flykter_id, _last_search, hasSocket, setLastSearchId, onReceiveResults, onReceiveResultDetails, endSearch) {
    if (!this.validateFlyktConf()) {
      return;
    }
    socket.on('connect', (data) => {
      socket.emit("create", _flykter_id)
      hasSocket();
    })

    socket.on('lastsearch', (data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        console.log("Mount last results")
      }
    });

    socket.on('start', (data) => {
      if(data.searchId) {
        socket.emit("create", data.searchId)
        setLastSearchId(data.searchId)
      }
    });

    socket.on('search', (data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        if(data.searchId) {
          socket.emit("create", data.searchId)
          setLastSearchId(data.searchId)
        }
      }
    });

    socket.on('result', (data) => {
      onReceiveResults(data)
    });

    socket.on('end', () => {
      endSearch();
    });

    socket.on('destination_detail', (data) => {
      onReceiveResultDetails(data)
    });

    socket.on('disconnect', (data) => {
      if(data === 'io server disconnect') {
        console.error('Flykt error #UIS001');
      }
    });

    return socket;
  },

  socketSearch: function (socket, searchData, validationCallback) {
    let validationObj = validation.validateSearchData(searchData);
    if (0===validationObj.errArray.length) {
      socket.emit("search", searchData);
    } else {
      validationCallback(validationObj);
    }
  },

}

module.exports = requests;
