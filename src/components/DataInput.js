/* Re-usable component handling data input. It recieves the placeholder and button value thru props */

import React, { useState } from 'react';
import { connect } from 'react-redux';

import actions from '../redux/actions'

import './DataInput.css';

const DataInput = (props) => {
  const [user, setUser] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setUser(user);
    setUser('');
  }

  const handleChange = (e) => {
    setUser(e.target.value)
  }

  return (
    <form className="DataInput-container" onSubmit={handleSubmit} >
      <input type="text" className="DataInput-input" placeholder={props.placeholder} onChange={handleChange} value={user} />
      <input type="submit" className="DataInput-submit" value={props.buttonValue} />
    </form>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(actions.setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataInput);
