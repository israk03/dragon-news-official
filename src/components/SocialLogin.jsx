import { FaGithub, FaGoogle } from "react-icons/fa";
export default function SocialLogin() {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="*:w-full space-y-2">
        <button className="btn btn-outline">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn btn-outline">
          <FaGithub /> Login with GitHub
        </button>
      </div>
    </div>
  );
}
