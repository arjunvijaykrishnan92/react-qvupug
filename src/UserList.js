import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [user, setUser] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUser(data);
  }, []);

  return (
    <ul>
      {user.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
