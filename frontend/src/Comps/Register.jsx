import React, { useState } from "react";
import Form from "./Form";

export default function Register() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  

  const postRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/register/create",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          
          body: JSON.stringify({
            username,
            password,
            email,
            userType,
          }),
        },
      );
      const data = await res.json();
      localStorage.setItem("token",data.token)
      

      if (res.ok) {
        console.log(data);
        alert("Post created at:" + new Date());
      } else {
        console.log(data);
        alert("Error", data.error.message || "Request failed");
      }
     
    } catch (error) {
      console.error(error);
      alert( error.message+" Something went wrong.");
    }
  };
  return (
    <div className="bg-amber-300 m-6 h-80 p-1 rounded-2xl drop-shadow-2xl">
      <form onSubmit={postRegister}>
        <div className="flex flex-col gap-4 items-center">
          <input
            id="username"
            placeholder="Username"
            type="text"
            onChange={(e) => {
              setusername(e.target.value);
            }}
            value={username}
          />
          <input
            id="pasword"
            placeholder="Pasword"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <input
            id="Email"
            placeholder="Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <input
            id="user-type"
            placeholder="user-type"
            type="text"
            onChange={(e) => {
              setUserType(e.target.value);
            }}
            value={userType}
          />
          <button type="submit">Create User</button>
        </div>
      </form>
    </div>
  );
}
