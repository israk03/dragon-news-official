import React from "react";
import swim from "../assets/swimming.png";
import playground from "../assets/playground.png";

export default function Advertise() {
  return (
    <div className="bg-gray-400 p-2 rounded-sm">
      <h2 className="font-semibold mb-3">Ad zone</h2>
      <div className="*:w-full">
        <img src={swim} alt="" />
        <img src={playground} alt="" />
      </div>
    </div>
  );
}
