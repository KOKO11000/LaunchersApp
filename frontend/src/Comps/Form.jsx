import React, { useEffect, useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [rocketType, setRocketType] = useState("");
  const [iatitude, setIatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const postLauncher = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/launchers", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          rocketType,
          iatitude: parseFloat(iatitude),
          longitude: parseFloat(longitude),
          city,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        console.log(data);
        alert(
          "Post created at:"+
          new Date().toLocaleDateString() || "No timestamp",
        );
      } else {
        console.log(data);
        alert("Error", data.error.message || "Request failed");
      }
    } catch (error) {
      console.error(error);
      alert("Error", "Something went wrong.");
    }
  };


  return (
    <div className="bg-amber-300 m-6 h-80 p-1 rounded-2xl drop-shadow-2xl">
      <form onSubmit={postLauncher}>
        <div className="flex flex-col gap-4 items-center">
          <label id="name">
            <input
              id="name"
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label id="rocket-type">
            <input
              id="rocket-type"
              value={rocketType}
              onChange={(e) => setRocketType(e.target.value)}
              placeholder="Rockrt Type"
              type="text"
            />
          </label>

          <label id="iatitude">
            <input
              id="iatitude"
              value={iatitude}
              onChange={(e) => setIatitude(e.target.value)}
              placeholder="Iatitude"
              type="number"
            />
          </label>

          <label id="longitude">
            <input
              id="longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              placeholder="longitude"
              type="number"
            />
          </label>

          <label id="city">
            <input
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              type="text"
            />
          </label>
          <button type="submit">Add Lancher</button>
        </div>
      </form>
    </div>
  );
}
