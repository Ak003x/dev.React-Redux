import React from "react";
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector((state) => state.usersInfo.users);
  console.log(users);
  return (
    <div>
      {users?.map((user, index) => {
        return (
          <div key={index}>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.email}</h1>
            <h1>{user.contact}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
