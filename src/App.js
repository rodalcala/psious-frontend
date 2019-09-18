import React from 'react';

import DataInput from './components/DataInput';
// import ItemsList from './components/ItemsList';

import './App.css';

function App() {

  //////////////////
  // LANDING PAGE //
  //////////////////

  return (
    <div className="App-container-landing">
      <DataInput placeholder={'How do your friends call you?'} buttonValue={'>'} />
    </div>
  );
}

export default App;
