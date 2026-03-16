import React, { useEffect } from "react";

export default function Form() {
    const fetchPost = async()=>{}
    useEffect(()=>{

    },[])
  return (
    <div className="bg-amber-300 m-6 h-80 p-1 ">
      <form action="">
        <div className="flex-col ">
          <label id="name">
            <input id="name" placeholder="Name" type="text" />
          </label>

          <label id="rocket-type">
            <input id="rocket-type" placeholder="Rockrt Type" type="text" />
          </label>

          <label id="iatatude">
            <input id="iatatude" placeholder="Iataude" type="number" />
          </label>

          <label id="longitude">
            <input id="longitude" placeholder="Longitude" type="number" />
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
