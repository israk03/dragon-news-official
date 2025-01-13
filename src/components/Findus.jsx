import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Findus() {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find us on</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start p-5">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start p-5">
          <FaTwitter></FaTwitter> Twitter
        </button>
        <button className="btn join-item justify-start p-5">
          <FaInstagram></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
}
