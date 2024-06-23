import React from "react";
import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/UserReducer";

function UsersList() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleDelete = (userId) => {
    // console.log(userId);
    dispatch(deleteUser(userId));
  };

  return (
    <table>
      <tread>
        <tr>
          <tr>ID</tr>
          <tr>First Name</tr>
          <tr>Last Name</tr>
          <tr>Email</tr>
          <tr>Action</tr>
        </tr>
      </tread>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.LastName}</td>
            <td>{user.email}</td>

            <td>
              <button>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersList;
