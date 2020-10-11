import React, { useState, useEffect, Fragment } from 'react';

import { jsx, css } from '@emotion/core'
/** @jsx jsx */
const products = css`
  margin: 15px 0;
`

const Products = () => {
  const [ product, setProduct ] = useState(null);

  useEffect(() => {
    fetch("https://www.wsjwine.com/api/offer/0033008")
      .then(response => response.json())
      .then(product => setProduct(product));
  }, [])

  return (
    <div css={products}>
      {product && (
        product.response.mainItems.map(val => {
          return (
            <div key={val.itemCode}>
              <input type="radio" id={val.itemCode} value={val.itemCode} name="product" />
              <label htmlFor={val.itemCode}  style={{cursor: 'pointer'}}>{val.product.name} <strong>JUST ${val.listPrice}</strong></label>
            </div>
          )
        })
      )}
    </div>
  )
}

export default Products;
