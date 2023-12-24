// import React, { useState } from 'react';

import {fetchAsync} from './productsSlice';
import { addAsync } from '../cart/cartSlice';
import styles from './Products.css';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect} from 'react';

export function Products() {
  const dispatch = useDispatch();
  const products  = useSelector(state => state.productStore.products);
  useEffect(()=>{
    dispatch(fetchAsync());
  },[])
  return (
    <div>
      <div className={styles.row}>
    
        {products.map((product) => (
          <div className="card">
          <img src={product.thumbnail} alt={product.title} style={{width:"100%"}}/>
          <h1>{product.title}</h1>
          <p className="price">${product.price}</p>
          <p>{product.description}</p>
          <p><button onClick={()=> dispatch(addAsync(product))}>Add to Cart</button></p>
        </div>
        ))}
      </div>
    </div>
  );
}
