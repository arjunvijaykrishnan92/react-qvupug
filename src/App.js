import React from 'react';

import './style.css';
import User from './user';
import UserList from './UserList';

const App = () => {
  return (
    <div className="App">
      <User />
      <UserList />
    </div>
  );
};

export default App;
