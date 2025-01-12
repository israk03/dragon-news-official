import { NavLink } from "react-router-dom";
import user from "../assets/user.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="space-x-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/career">Career</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="login flex items-center gap-2">
        <div>
          <img src={user} alt="" />
        </div>
        <button className="btn btn-neutral bg-gray-200 px-3 py-2 rounded-sm">
          Login
        </button>
      </div>
    </div>
  );
}
