import {
  SET_USER,
  UPDATE_ITEMS_LIST,
  SUBMIT_ITEM, SET_SOCKET,
  COMPLETE_ITEM,
  DELETE_ITEM
} from './constants';

const setUser = (user) => ({
  type: SET_USER,
  user,
});

const setSocket = (socket) => ({
  type: SET_SOCKET,
  socket,
});

const updateItemsList = (itemsList) => ({
  type: UPDATE_ITEMS_LIST,
  itemsList,
});

const submitItem = ({ user, text }) => ({
  type: SUBMIT_ITEM,
  apiPackage: {
    parameters: `post/${user}`,
    method: 'POST',
    body: JSON.stringify({ text })
  }
});

const completeItem = (itemId) => ({
  type: COMPLETE_ITEM,
  apiPackage: {
    parameters: `complete/${itemId}`,
    method: 'PUT',
  },
});

const deleteItem = (itemId) => ({
  type: DELETE_ITEM,
  apiPackage: {
    parameters: `delete/${itemId}`,
    method: 'DELETE',
  },
});

export default {
  setUser,
  setSocket,
  updateItemsList,
  submitItem,
  completeItem,
  deleteItem,
};