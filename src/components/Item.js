/* Component handling items logic. Will pass props to the items themselves. */

import React from 'react';

import './Item.css';

const Item = (props) => {

  return (
    <div className="Item-container" >
      {props.item.text}
    </div>
  );
};

export default Item;
