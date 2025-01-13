export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login your account
        </h2>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

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
