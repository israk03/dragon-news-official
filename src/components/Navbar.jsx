import { Link, NavLink } from "react-router-dom";
import user from "../assets/user.png";
import { useContext } from "react";

export default function Navbar() {
  const { name } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="">{name}</div>
      <div className="space-x-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/career">Career</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="login flex items-center gap-2">
        <div>
          <img className="rounded-full" src={user} alt="" />
        </div>
        <Link
          to="/auth/login"
          className="btn hover:btn-neutral px-3 py-2 rounded-sm"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
