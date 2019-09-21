/* Component handling items logic. Will pass props to the items themselves. */

import React from 'react';
import { connect } from 'react-redux';

import Item from './Item'

import actions from '../redux/actions'

import './ItemsList.css';

const ItemsList = (props) => {
  const renderItems = () => props.items.map(item => !item.completed &&
    <Item
      key={item._id}
      item={ item }
      completeItem={ props.completeItem }
      deleteItem={ props.deleteItem }
    />
  )

  return (
    <div className="ItemsList-container" >
      { renderItems() }
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  items: state.items,
  socket: state.socket,
});

const mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(actions.setUser(user)),
  completeItem: (itemId) => dispatch(actions.completeItem(itemId)),
  deleteItem: (itemId) => dispatch(actions.deleteItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
