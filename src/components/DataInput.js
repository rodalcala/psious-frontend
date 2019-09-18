/* Re-usable component handling data input. It recieves the placeholder and button value thru props */

import React from 'react';

import './DataInput.css';

const DataInput = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
  }

  return (
    <form className="DataInput-container" onSubmit={handleSubmit} >
      <input type="text" className="DataInput-input" placeholder={props.placeholder} />
      <input type="button" className="DataInput-submit" value={props.buttonValue} />
    </form>
  );
};

export default DataInput;
