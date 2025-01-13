import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AuthLayout() {
  return (
    <div className="bg-gray-100 py-4 font-poppins">
      <header className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  );
}
