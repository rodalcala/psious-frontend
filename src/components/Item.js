/* UI component. It renders individual items. Recieves methods thru props. */

import React from 'react';
import { DoneOutline, DeleteOutline } from '@material-ui/icons';

import './Item.css';

const Item = (props) => {

  return (
    <div className="Item-container" >
      {
        props.item.completed ?
        <div style={{ width: 30, height: 30}} /> :
        <DoneOutline className="Item-checkbox" onClick={() => props.completeItem(props.item._id) } style={{ fontSize: 30 }} />
      }
      <p className="Item-text" >{props.item.text}</p>
      <DeleteOutline className="Item-delete" onClick={() => props.deleteItem(props.item._id) } style={{ fontSize: 30 }} />
    </div>
  );
};

export default Item;
