import { SET_USER, UPDATE_ITEMS_LIST } from './constants';

const initialState = {
  user: undefined,
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    case UPDATE_ITEMS_LIST:
      return { ...state, items: action.itemsList};
    default:
      return state;
  }
};

export default reducer;