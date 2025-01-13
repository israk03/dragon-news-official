import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function Register() {
  const { setUser, createNewUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    // get form data
    const form = new FormData(e.target);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    // console.log({ name, email, password, photo });

    // create new user
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register your account
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="name"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* Photo Input */}
          <div className="mb-4">
            <label htmlFor="photo" className="block text-sm font-medium mb-1">
              Photo URL
            </label>
            <input
              type="photo"
              name="photo"
              placeholder="Enter your photo url"
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
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* Accept Terms */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              name="terms"
              className="checkbox checkbox-sm mr-2"
              required
            />
            <label htmlFor="terms" className="text-sm">
              I accept the{" "}
              <a href="" className="text-blue-500 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-block bg-black text-white hover:bg-gray-800"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-center mt-4">
          Already Have An Account?{" "}
          <a href="/auth/login" className="text-green-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
