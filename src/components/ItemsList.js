/* Component handling items logic. Will pass props to the items themselves. */

import React, { useState } from 'react';
import { connect } from 'react-redux';

import Item from './Item'

import actions from '../redux/actions'

import './ItemsList.css';

const ItemsList = (props) => {
  const [showCompleted, setShowCompleted] = useState(false);

  const renderItems = () => props.items.map(item => (item.completed === showCompleted) &&
    <Item
      key={item._id}
      item={ item }
      completeItem={ props.completeItem }
      deleteItem={ props.deleteItem }
    />
  );

  const renderEmpty = () => <p className="ItemsList-noitems">You haven't submitted any task yet!</p>

  const renderFooter = () =>
    <div className="ItemsList-togleItemsContainer" >
      <p className="ItemsList-toggleItems" onClick={() => setShowCompleted(!showCompleted)}>
        { showCompleted ? 'Show pending tasks' : 'Show completed tasks'}
      </p>
    </div>

  return (
    <div className="ItemsList-container" >
      <div className="ItemsList-itemsContainer" >
        { props.items.length === 0 ? renderEmpty() : renderItems() }
      </div>
      { props.items.length === 0 ? null : renderFooter() }
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
