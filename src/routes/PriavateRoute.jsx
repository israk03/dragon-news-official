import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";

export default function PriavateRoute({ children }) {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loader) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
}
