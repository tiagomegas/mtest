import { SET_SESSION, ADD_FAVOURITE} from '../constants/ActionTypesRedux'
import localStorage from '../../src/localstorage/localstorage';
import auth from '../../src/auth/auth';

const initialState =
  {
    name: "",
    favourites:[]
  }

/*const initialState = {
  user: "",
  favourites:[]
};*/


export default function userReducer(state = initialState, action) {
  switch (action.type){
    case SET_SESSION:{
      var obj = {};
      obj["name"] = action.name;
      obj["favourites"] = action.favourites;
      return Object.assign({}, state,obj);
    }
    case ADD_FAVOURITE:{
      return {...state,
              favourites: state.favourites.concat(action.favourite)}
    }
    default:
      return state;
  }
}
