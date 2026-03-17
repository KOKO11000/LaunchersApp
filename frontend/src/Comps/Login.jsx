import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate()
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const postRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },

        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await res.json();
      localStorage.setItem("token", data.token);

      if (res.ok) {
        console.log(data);
        alert("Post Login at:" + new Date());
        navigate("/home")
      } else {
        console.log(data);
        alert("Error", data.error.message || "Request failed");
      }
    } catch (error) {
      console.error(error);
      alert(error.message + " Something went wrong.");
    }
  };
  return (
    <div className="bg-amber-300 m-6 h-80 p-1 rounded-2xl drop-shadow-2xl">
      <header className="drop-shadow-2xl font-serif p-3 bg-linear-150 from-red-400 to-yellow-300 rounded-2xl text-center mb-5 font-bold ">
        Login
      </header>
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

          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
