import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const { loginUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const mail = form.get("mail");
    const password = form.get("password");
    // console.log({ mail, password });

    loginUser(mail, password)
      .then((result) => {
        // console.log(result.user);s
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login your account
        </h2>
        {error && (
          <div className="mb-4 text-red-500 text-sm text-center">{error}</div>
        )}
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              name="mail"
              placeholder="Enter your email address"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password Input */}
          <div className="">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <p className="text-sm mb-6">
            <a href="" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </p>

          {/* Login Button */}
          <button
            type="submit"
            className="btn btn-block bg-black text-white hover:bg-gray-800"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-sm text-center mt-4">
          Don’t Have An Account?{" "}
          <a href="/auth/register" className="text-red-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
