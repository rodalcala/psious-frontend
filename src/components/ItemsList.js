/* Component handling items logic. Will pass props to the items themselves. */

import React from 'react';
import { connect } from 'react-redux';

import Item from './Item'

import actions from '../redux/actions'

import './ItemsList.css';

const ItemsList = (props) => {
  const renderItems = () => props.items.map(item => <Item item={item}/>)

  return (
    <div className="ItemsList-container" >
      {renderItems()}
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(actions.setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
