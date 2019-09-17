/* Component recieving username input */

import React from 'react';

import './NameInput.css';

const NameInput = (props) => {
  const handleSubmit = (e) => {
    console.log(e);
  }

  return (
    <div className="NameInput-container">
      <input type="text" className="NameInput-input" onSubmit={handleSubmit} placeholder="How do your friends call you?" />
      <input type="submit" className="NameInput-submit" />
    </div>
  );
};

export default NameInput;
