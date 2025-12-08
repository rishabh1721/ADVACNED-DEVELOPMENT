import React from 'react'

const Props = () => {
  return <User name='Web  Dev' age={20} isMarried={false} hobbies={['coding', 'Reading', 'Sleeping']} />;
  
};

const User = (props) => {
    return <section>
      <h1>
        Name: {props.name}
        Age: {props.age}
        Is Married: {props.isMarried ? 'Yes' : 'No'}
        Hobbies:
        <ul>
          {props.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </h1>

      
    </section>
  };
  

export default Props
