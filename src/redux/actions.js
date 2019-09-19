import { SET_USER, UPDATE_ITEMS_LIST, SUBMIT_ITEM } from './constants';

const setUser = (user) => ({
  type: SET_USER,
  user,
});

const updateItemsList = (itemsList) => ({
  type: UPDATE_ITEMS_LIST,
  itemsList,
});

const submitItem = ({ user, text, priority }) => ({
  type: SUBMIT_ITEM,
  apiPackage: {
    parameters: `post/${user}`,
    method: 'POST',
    body: JSON.stringify({ text, priority })
  }
});

export default {
  setUser,
  updateItemsList,
  submitItem,
};