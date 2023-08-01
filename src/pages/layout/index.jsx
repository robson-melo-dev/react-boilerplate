import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const userId = useSelector((state) => state.global.userId); //grab from the redux toolkit
  return (
    <div className="App">
      ReactJS Boilerplate
      <p>
        By <a href="/user">Robson Melo de Souza</a>
      </p>
      <p>User id: {userId}</p>
      <Outlet />
    </div>
  );
};

export default Layout;
