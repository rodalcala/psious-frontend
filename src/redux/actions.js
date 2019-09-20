import { SET_USER, UPDATE_ITEMS_LIST, SUBMIT_ITEM, SET_SOCKET } from './constants';

const setUser = (user) => ({
  type: SET_USER,
  user,
});

const setSocket = (socket) => ({
  type: SET_SOCKET,
  socket
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
  setSocket,
  updateItemsList,
  submitItem,
};