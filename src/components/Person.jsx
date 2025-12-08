import React from 'react'

const Person = () => {
  return <Pers name = 'Ravi' age={21} />;
};
const Pers = (person) => {
  return <section>
    <h1>
      Name: {person.name}
    </h1>
     <p>Age: {person.age}
      </p>
    
  </section>

};
export default Person
