/* Re-usable component handling data input. Will recieve isLanding thru props. */

import React, { useState } from 'react';
import { connect } from 'react-redux';

import actions from '../redux/actions'

import './DataInput.css';

const DataInput = (props) => {
  const [input, setInput] = useState('')

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (input) {
      props.setUser(input);
      props.socket.emit('userSubmitted', { user: input });
      setInput('');
    }
  }

  const handleItemSubmit = (e) => {
    e.preventDefault();
    if (input) {
      props.submitItem({
        user: props.user,
        text: input,
      });
      setInput('');
    }
  }

  /* NOTE: Values to be displayed depending on whether the component is in the landing page or not  */
  const buttonValue = props.isLanding ? '>' : '+';
  const placeholder = props.isLanding ? 'How do your friends call you?' : 'Add a new item to the list';
  const onSubmit = props.isLanding ? handleNameSubmit : handleItemSubmit;

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <form
      className="DataInput-container"
      onSubmit={ onSubmit }
    >
      <input
        autoFocus
        type="text"
        className="DataInput-input"
        placeholder={ placeholder }
        onChange={ handleInputChange }
        value={ input }
      />
      <input
        type="submit"
        className="DataInput-submit"
        value={ buttonValue }
      />
    </form>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  socket: state.socket,
});

const mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(actions.setUser(user)),
  submitItem: (itemData) => dispatch(actions.submitItem(itemData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataInput);
