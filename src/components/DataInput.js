/* Re-usable component handling data input. Will recieve isLanding in thru props. */

import React, { useState } from 'react';
import { connect } from 'react-redux';

import actions from '../redux/actions'

import './DataInput.css';

const DataInput = (props) => {
  const [user, setUser] = useState('')

  const buttonValue = props.isLanding ? '>' : '+';
  const placeholder = props.isLanding ? 'How do your friends call you?' : 'Add a new item to the list';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      props.setUser(user);
      console.log(user)
      props.socket.emit('userSubmited', { user });
      setUser('');
    }
  }

  const handleChange = (e) => {
    setUser(e.target.value)
  }

  return (
    <form className="DataInput-container" onSubmit={handleSubmit} >
      <input type="text" className="DataInput-input" placeholder={placeholder} onChange={handleChange} value={user} />
      <input type="submit" className="DataInput-submit" value={buttonValue} />
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
