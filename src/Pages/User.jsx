import React from "react";
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector((state) => state.usersInfo.users);

  return <div>user</div>;
}

export default Users;
