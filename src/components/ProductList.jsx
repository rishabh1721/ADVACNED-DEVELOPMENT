import React from 'react'

const ProductList = () => {
  const products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Smartphone', price: 20000 },
    { id: 3, name: 'Tablet', price: 15000 },
  ];

  return (
 <main>
  {products.map((product) => (
    <ul key={product.id}>
      <li>
        Name: {product.name}, Price: $ {product.price}
      </li>
    </ul>
  ))}
 </main>
  )
}

export default ProductList
