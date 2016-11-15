import { SET_SESSION, ADD_FAVOURITE, REMOVE_FAVOURITE} from '../constants/ActionTypesRedux'
import localStorage from '../../src/localstorage/localstorage';
import auth from '../../src/auth/auth';

const initialState =
  {
    name: "",
    favourites:[]
  }
// Helpers
function removeItem(item, list) {
  //takes a string as 'item', finds in the array as 'list',
  //then removes it from the list.
  for(var i = 0; i < list.length; i++)
  {
    if(item === list[i])
    {
      list.splice(i,1);
    }
  }
}
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
    case REMOVE_FAVOURITE:{

      //let tempFavourites = state.favourites.concat();
      console.log(state.favourites);
      _.remove(state.favourites, function (favourite) {
        return favourite.id === action.favourite.id
      });
      return {...state,
              favourites: state.favourites}
    }
    default:
      return state;
  }
}
