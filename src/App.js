import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import DataInput from './components/DataInput';
import ItemsList from './components/ItemsList';

import actions from './redux/actions'

import './App.css';

import openSocket from 'socket.io-client';
/* NOTE: We use socket.io to connect to the server and recieve updated in real time */
const socket = openSocket('http://localhost:4000/');

const App = ({ user, updateItemsList, setSocket }) => {
  const isLanding = user ? false : true;

  useEffect(() => {
    /* NOTE: Create socket that listen for an updated list of items, and then save them to the Redux store */
    socket.on('updateList', ({ usersItems }) => {
      updateItemsList(usersItems);
    });
    /* NOTE: Save the socket object to the Redux store to make it available to the whole app */
    setSocket(socket);
  }, [updateItemsList, setSocket]);

  /* NOTE: Conditional rendering that checks if the client already submitted an username  */
  if (isLanding) {
    return (
      <div className="App-container-landing">
        <DataInput isLanding={isLanding} />
      </div>
    );
  } else {
    return (
      <div className="App-container-main">
        <DataInput isLanding={isLanding} />
        <ItemsList />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  updateItemsList: (itemsList) => dispatch(actions.updateItemsList(itemsList)),
  setSocket: (socket) => dispatch(actions.setSocket(socket)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
