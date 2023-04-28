import React from "react";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
     <button> <Link to={`/user/${user.id}`}>View Details</Link></button>
    </div>
  );
}

export default UserCard;
