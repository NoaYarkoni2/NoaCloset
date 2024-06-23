import React, { useState } from "react";
import { addUser } from "../../store/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigte = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleUserAdd = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password) {
      const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        firstName,
        lastName,
        email,
        password,
      };
      dispatch(addUser(newUser));
      navigte("/usersList"); // Ensure this route exists and displays UsersList
    } else {
      alert("Please fill in all fields");
    }
  };
  // const handleUserAdd = (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     addUser({
  //       id: users[users.length - 1].id + 1,
  //       firstName,
  //       LastName,
  //       Email,
  //       password,
  //     })
  //   );
  // };
  return (
    <>
      <div className="register-page">
        {/* <form onSubmit={handleUserAdd}> */}
        <div className="form-box">
          <div className="register-container" id="register">
            <div className="top">
              <span>
                Have an account? <a onClick={() => navigte("/login")}>Login</a>
              </span>
              <header>Sign Up</header>
              <div className="two-forms">
                <div className="input-box">
                  <input
                    type="text"
                    className="input-field"
                    placeholder="FirstName"
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                  <i className="bx bx-user"></i>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    className="input-field"
                    placeholder="LastName"
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                  <i className="bx bx-user"></i>
                </div>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <i className="bx bx-user"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <i className="bx bx-user"></i>
              </div>
              {/* <input
                type="submit"
                className="submit"
                value="Register"
                onChange={handleSignIn}
              ></input> */}
              <button onClick={handleUserAdd}>Submit</button>
            </div>
          </div>
        </div>
        {/* </form> */}
      </div>
    </>
  );
}

export default Register;
//   // const navigte = useNavigate();
//   const users = useSelector((state) => state.users);
//   const dispatch = useDispatch();

//   const handleSignIn = (e) => {
//     if (password != confirmPassword) {
//       <p>The passwords are not the same!</p>;
//     } else {
//       e.preventDefault();
//       dispatch(
//         addUser({
//           id: users[users.length - 1].id + 1,
//           userName,
//           password,
//         })
//       );
//     }

//     // navigte("/");
//   };

//   return (
//     <>
//       <div>
//         <form onSubmit={handleSignUp}>

//           <div>
//             <label htmlFor="name">User Name:</label>
//             <input type="text" onChange={(e) => setUserName(e.target.value)} />
//           </div>
//           <div>
//             <label htmlFor="password">Password::</label>
//             <input
//               type="password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="">Confirm Password:</label>
//             <input
//               type="age"
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit">Sign In</button>
//         </form>
//       </div>
//     </>
//   );
// }
