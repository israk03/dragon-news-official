import { Link, NavLink } from "react-router-dom";
import dp from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);

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
          <img className="rounded-full" src={dp} alt="" />
        </div>

        {user ? (
          <button
            onClick={logOut}
            className="btn hover:btn-neutral px-3 py-2 rounded-sm"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn hover:btn-neutral px-3 py-2 rounded-sm"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
