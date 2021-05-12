import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Menu from "../components/menu/";
import Navbar from "../components/navbar/";

export default function Home() {
  // useEffect(() => {
  //   localStorage.clear();
  // }, []);
  return (
    <>
      <Menu />
      <div className="main-content" id="panel">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
