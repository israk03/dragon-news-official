import moment from "moment";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-3 mt-3">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h2 className="text-gray-400 text-xl">
        Journalism without fear and favour.
      </h2>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
}
