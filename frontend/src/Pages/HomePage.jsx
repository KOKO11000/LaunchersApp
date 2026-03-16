import React, { useEffect } from "react";
import Header from "../Comps/Header";
import { UseLauncher } from "../Stores/home";

export default function HomePage() {
  const launchers = UseLauncher((state) => {
    return state.launcherFetch;
  });
  const data = UseLauncher((state) => {
    return state.launchers;
  });
  const handle = async () => {
    await launchers();
  };
  useEffect(() => {
    handle();
  }, []);
  return (
    <div>
      <Header title={"Home"}  />
      <div className="p-3 rounded-2xl  bg-amber-300 drop-shadow-2xl h-fit text-center ">
        <table>
          <thead className="">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Rocket Type</th>
              <th>Iatitude</th>
              <th>Longitude</th>
              <th>City</th>
              <th>CreatedAt</th>
            </tr>
          </thead>
          {data.map((a) => (
            <tbody className="">
              <tr key={a._id}>
                <td>{a._id}</td>
                <td>{a.name}</td>
                <td>{a.rocketType}</td>
                <td>{a.iatitude}</td>
                <td>{a.longitude}</td>
                <td>{a.city}</td>
                <td>{a.createdAt}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
