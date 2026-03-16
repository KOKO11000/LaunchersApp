import React, { useEffect } from "react";

export default function Form() {
  const postLauncher = async (name, rocketType, iatitude, longitude, city) => {
    try {
      const res = await fetch("http://localhost:5000/api/launchers", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name,
          rocketType: rocketType,
          iatitude: iatitude,
          longitude: longitude,
          city: city,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        console.log(data);
        alert("Post created at:", data.createdAt || "No timestamp");
      } else {
        console.log(data);
        alert("Error", data.error.message || "Request failed");
      }

      return data;
    } catch (error) {
      console.error(error);
      alert("Error", "Something went wrong.");
    }
  };
  useEffect((e) => {
    e.preventDefault()
    postLauncher();
  }, []);
  return (
    <div className="bg-amber-300 m-6 h-80 p-1 rounded-2xl drop-shadow-2xl">
      <form onSubmit={postLauncher}>
        <div className="flex-col ">
          <label id="name">
            <input id="name" placeholder="Name" type="text" />
          </label>

          <label id="rocket-type">
            <input id="rocket-type" placeholder="Rockrt Type" type="text" />
          </label>

          <label id="iatitude">
            <input id="iatitude" placeholder="Iatitude" type="number" />
          </label>

          <label id="longitude">
            <input id="longitude" placeholder="longitude" type="number" />
          </label>

          <label id="city">
            <input id="city" placeholder="City" type="text" />
          </label>
          <button type="button">Add</button>
        </div>
      </form>
    </div>
  );
}
