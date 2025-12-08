import React from 'react'

const UserList = () => {
  const users = [
    { id: 1, name: 'Mrijal', age: 20 },
    { id: 2, name: 'Rishabh', age: 21 },
    { id: 3, name: 'Ankit', age: 22 },
  ];
  return (
    <main>
      {users.map((user) =>(
        <ul key={user.id}>
          <li>
            Name: {user.name}, Age: {user.age} 
          </li>
        </ul>

      ))}
    </main>
  )
}

export default UserList
