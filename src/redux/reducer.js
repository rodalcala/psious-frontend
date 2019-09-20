import { SET_USER, SET_SOCKET, UPDATE_ITEMS_LIST } from './constants';

const initialState = {
  user: undefined,
  socket: undefined,
  items: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    case SET_SOCKET:
      return { ...state, socket: action.socket }
    case UPDATE_ITEMS_LIST:
      return { ...state, items: action.itemsList };
    default:
      return state;
  }
};

export default reducer;