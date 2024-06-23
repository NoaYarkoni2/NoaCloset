import React from "react";
import { useState } from "react";
import { addUser } from "../store/UserReducer";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // const navigte = useNavigate();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleUserAdd = (e) => {
    e.preventDefault();
    // dispatch(addUser({ id: users[users.length - 1].id + 1, name, email, age }));
    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    dispatch(addUser({ id, name, email, age }));
    // navigte("/");
  };

  return (
    <>
      <div>
        <form onSubmit={handleUserAdd}>
          <h1>create new user</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Age:</label>
            <input type="age" onChange={(e) => setAge(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default CreateUser;
