import React from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import { PreventComponents } from '../components';

const HomePage = () => {
  const nav=useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/");
  };

  const handleAdd = () => nav("/home/add");

  return (
    <PreventComponents fail="/" check={localStorage.getItem("auth")}>
<div className="container mx-auto h-screen">
        <div className="w-[80%] mx-auto h-full">
          <nav className="flex justify-between px-2 py-3 shadow">
            <h1>Contact App</h1>
            <div className="space-x-5">
              <button onClick={handleAdd} className="">
                Add
              </button>
              <button onClick={handleLogout} className="">
                Logout
              </button>
            </div>
          </nav>

          <Outlet />
        </div>
      </div>
      </PreventComponents>
  )
}

export default HomePage