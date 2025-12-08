import React from 'react'

const Expressions = () => {
  const myName = "Rishabh Kumar"
  const multiply = (a,b) => a * b
  return (
    <div>
      <p>{2*5}</p>
      <h1>{myName}</h1>
      <h3>a multiplied with b = {multiply(5,6)}</h3>
    </div>
  )
}

export default Expressions
