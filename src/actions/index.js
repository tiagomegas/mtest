import * as types from '../constants/ActionTypesRedux';

/*                   */
/*User Actions   */
/*                   */
export function setSession(name,favourites) {
  console.log(name);
  console.log(favourites);
  return {
    type: types.SET_SESSION,
    name: name,
    favourites: favourites
  };
}


/*                   */
/*Checkout Actions   */
/*                   */
export function toggleOverlay() {
  return {
    type: types.TOGGLE_OVERLAY
  };
}

/*                   */
/*LandingPage Actions*/
/*                   */
export function setCurrency(currency) {
  return {
    type: types.SET_CURRENCY,
    currency
  };
}

export function toggleSearch() {
  return {
    type: types.TOGGLE_SEARCH,
  };
}

export function setSearchAttribute(attribute, value) {
  return {
    type: types.SET_SEARCH_ATTRIBUTE,
    attribute: attribute,
    value: value
  };
}
/* RoomSelector actions */
export function addRoom() {
  return {
    type: types.ADD_ROOM
  };
}
export function addChildrenAge() {
  return {
    type: types.ADD_CHILDREN_AGE
  };
}
export function removeChildrenAge() {
  return {
    type: types.REMOVE_CHILDREN_AGE
  };
}

export function removeRoom(roomIndex) {
  return {
    type: types.REMOVE_ROOM,
    roomId: roomIndex
  };
}

export function clearRooms() {
  return {
    type: types.CLEAR_ROOM
  };
}

export function changeAdultsCounter(numAdults,roomIndex ) {
  return {
    type: types.CHANGE_ADULTS_COUNTER,
    value: numAdults,
    roomId: roomIndex
  };

}
export function changeChildrenCounter(numChildren,roomIndex) {
  return {
    type: types.CHANGE_CHILDREN_COUNTER,
    value: numChildren,
    roomId: roomIndex
  };
}
export function changeChildAge(numChildren,roomIndex,ageIndex ) {
  return {
    type: types.CHANGE_CHILD_AGE,
    value: numChildren,
    roomId: roomIndex,
    ageId: ageIndex
  };
}
/*                   */
/*Checkout Actions   */
/*                   */

export function setPayment(payment){
  return{
    type: types.SUBMIT_PAYMENT,
    payment: payment
  };
}

export function setSearchId(searchId){
  return{
    type: types.SEARCH_ID,
    searchId: searchId
  };
}


export function setBooking(type, roomHelper, route, destinationId){
  return{
    type: types.SUBMIT_BOOKING,
    bookingType: type,
    route: route,
    room: JSON.stringify(roomHelper),
    destination: destinationId
  };
}