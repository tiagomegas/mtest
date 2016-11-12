import { SET_SEARCH_ATTRIBUTE
        ,TOGGLE_SEARCH
        ,ADD_ROOM
        ,REMOVE_ROOM
        ,CLEAR_ROOM
        ,CHANGE_ADULTS_COUNTER
        ,CHANGE_CHILDREN_COUNTER
        ,CHANGE_CHILD_AGE} from '../constants/ActionTypesRedux'

const initialState = {
  selectedPackage: 1,
  airport: "",
  category: [],
  keywords:[],
  budget: 0,
  startDate: "",
  endDate: "",
  rooms:[],
  directFlights: false,
  currency: "eur"
};


export default function searchReducer(state = initialState, action) {
  switch (action.type){
    case SET_SEARCH_ATTRIBUTE:{
      var obj = {};
      obj[action.attribute] = action.value;
      return Object.assign({}, state,obj);
    }
    case TOGGLE_SEARCH:{
      return{
        ...state,
        landingPageSearch: !state.landingPageSearch
      }
    }
    case ADD_ROOM:{
      if (state.rooms.length < 5) {
        return{
          ...state,
          rooms: state.rooms.concat({
            id: state.rooms.reduce((maxId, room) => Math.max(room.id, maxId), -1) + 1,
            adults: 1,
            children: 0,
            ages: []})
        }
      }
      else return state;
    }
    case REMOVE_ROOM: {
      return{
        ...state,
        rooms: state.rooms.filter(room =>
          room.id !== action.roomId
        )
      }
    }
    case CLEAR_ROOM:{
      return{
        ...state,
        rooms: []
      }
    }
    case CHANGE_ADULTS_COUNTER:{
      return{
        ...state,
        rooms: state.rooms.map(room =>
          room.id === action.roomId ?
            Object.assign({}, room, { adults: action.value }) :
            room
        )
      }
    }
    case CHANGE_CHILDREN_COUNTER:{

      return{
        ...state,
        rooms: state.rooms.map(room =>
          room.id === action.roomId ?
            Object.assign({}, room, { children: action.value, ages: (room.children - action.value < 0 ? room.ages.concat({id: room.ages.length, age: "0"}) : room.ages.slice(0,room.ages.length-1)) }) :
            room
        )
      }
    }
    case CHANGE_CHILD_AGE:{
      let childAge = action.value.target ? action.value.target.value : action.value;
      return{
        ...state,
        rooms: state.rooms.map(room =>
          room.id === action.roomId ?
            Object.assign({}, room, { ages:  (room.ages.map(age =>
              age.id === action.ageId ? Object.assign({}, age, { age: childAge }) :
                age ))})
            :
            room
        )
      }
    }
    default:
      return state;
  }
}
