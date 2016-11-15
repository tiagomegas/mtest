import * as types from '../constants/ActionTypesRedux';

/*                   */
/*User Actions   */
/*                   */
export function setSession(name,favourites) {
  return {
    type: types.SET_SESSION,
    name: name,
    favourites: favourites
  };
}
export function addFavourite(favourite) {
  return {
    type: types.ADD_FAVOURITE,
    favourite: favourite
  };
}
export function removeFavourite(favourite) {
  return {
    type: types.REMOVE_FAVOURITE,
    favourite: favourite
  };
}