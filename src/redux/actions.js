import { SET_USER, UPDATE_ITEMS_LIST } from './constants';

const setUser = (user) => ({
  type: SET_USER,
  user,
});

const updateItemsList = (itemsList) => ({
  type: UPDATE_ITEMS_LIST,
  itemsList,
});

export default {
  setUser,
  updateItemsList,
};