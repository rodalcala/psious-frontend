import { SET_USER, UPDATE_ITEMS_LIST, SUBMIT_ITEM } from './constants';

const initialState = {
  user: undefined,
  items: [],
  newItem: undefined
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    case UPDATE_ITEMS_LIST:
      return { ...state, items: action.itemsList };
    case SUBMIT_ITEM:
      return { ...state, newItem: action.item }
    default:
      return state;
  }
};

export default reducer;