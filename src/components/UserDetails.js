import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserDetails() {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    // Fetch User Details API
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, [userId]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      {/* Display other user details as needed */}
    </div>
  );
}

export default UserDetails;
