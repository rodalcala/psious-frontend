import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import DataInput from './components/DataInput';
import ItemsList from './components/ItemsList';

import actions from './redux/actions'

import './App.css';

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4000/');

const App = ({ user, updateItemsList }) => {
  const isLanding = user ? false : true;

  useEffect(() => {
    socket.on('updateList', ({ usersItems }) => {
      updateItemsList(usersItems);
    })
  }, [updateItemsList]);

  if (isLanding) {
    return (
      <div className="App-container-landing">
        <DataInput socket={socket} isLanding={isLanding} />
      </div>
    );
  } else {
    return (
      <div className="App-container-main">
        <DataInput isLanding={isLanding} />
        <ItemsList socket={socket} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  updateItemsList: (itemsList) => dispatch(actions.updateItemsList(itemsList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
