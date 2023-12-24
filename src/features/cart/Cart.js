// import React, { useState } from 'react';
// import {fetchAsync} from './cartSlice';

import styles from './Cart.css';
import { useSelector,useDispatch } from 'react-redux';
import { deleteAsync,updateAsync } from './cartSlice';



export function Cart() {
  const dispatch = useDispatch();
  const items  = useSelector((state) => state.cartStore.items);
  const handleChange = (e,id)=>{
     dispatch(updateAsync({id,change:{quantity:+e.target.value}}));
  }
  return (
    <div>
      <div className={styles.row}>
        {items.map((item) => (
          <div className="cart-item">
          <img src={item.thumbnail} alt={item.title} style={{width:"100%"}}/>
          <h1>{item.title}</h1>
          <p className="price">${item.price}</p>
          <p>{item.description}</p>
          <div className='quantity'>
            Quantity
            <select value={item.quantity} onChange={(e) => handleChange(e,item.id)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <div className='close'>
            <button onClick={()=>dispatch(deleteAsync(item.id))}>X</button>
          </div>
        
        </div>
        ))}
      </div>
      <h1>Total:${items.reduce((acc,item)=> item.price*item.quantity+acc,0)}</h1>
    </div>
  
  );
}
