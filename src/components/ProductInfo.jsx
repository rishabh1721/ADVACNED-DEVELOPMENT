import React from 'react'

const ProductInfo = () => {
  const product = {
    name : 'Laptop',
    price : 50000,
    description : 'A high performance laptop'
  };
  return (
    <div>
      <h1>Name: {product.name}</h1>
      <h2>Price: $  {product.price}</h2>
      <h3>Description: {product.description}</h3>
    </div>
  )
}

export default ProductInfo
