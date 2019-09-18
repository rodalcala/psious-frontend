import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import DataInput from './components/DataInput';
import ItemsList from './components/ItemsList';

import './App.css';

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4000/');

const App = (props) => {
  const isLanding = props.user ? false : true;

  useEffect(() => {
    socket.on('itemsList', ({ usersItems }) => {
      console.log('userSubmited', usersItems);
    })
  }, []);

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

export default connect(mapStateToProps)(App);
