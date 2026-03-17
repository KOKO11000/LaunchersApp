import React from "react";
import { useNavigate } from "react-router";

export default function Header({ title,addLaunchNav,detailNav,regiterNav }) {
  const navigate = useNavigate();

  return (
    <div className="drop-shadow-2xl font-serif p-3 bg-linear-150 from-red-400 to-yellow-300 rounded-2xl text-center m-5 font-bold ">
      <header
        onClick={() => navigate("/")}
        className={`text-7xl hover:cursor-pointer`}
      >
        {title}
      </header>
      <div className="flex justify-around p-3 ">
        <button
          className="hover: bg-linear-to-bl hover:from-orange-400 hover:to-yellow-200 p-1.5 rounded-md hover:cursor-pointer"
          onClick={() => navigate("/addLauncher")}
        >
          Add
        </button>
        <button
          className="hover: bg-linear-to-bl hover:from-orange-400 hover:to-yellow-200 p-1.5 rounded-md hover:cursor-pointer"
          onClick={() => navigate("/lancherDetails")}
        >
          Details
        </button>
        <button
          className="hover: bg-linear-to-bl hover:from-orange-400 hover:to-yellow-200 p-1.5 rounded-md hover:cursor-pointer"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
}
