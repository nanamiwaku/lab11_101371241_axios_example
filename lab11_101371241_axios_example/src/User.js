// User.js
import React from 'react';

const User = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <div className="user-info">
        <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
        <p>Username: {user.login.username}</p>
        <p>Gender: {user.gender}</p>
        <p>Email: {user.email}</p>
        // ... include other details
        <button>Details</button>
      </div>
    </div>
  );
};

export default User;