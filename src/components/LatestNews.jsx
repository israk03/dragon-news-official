import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function LatestNews() {
  return (
    <div className="flex justify-center items-center bg-gray-200 p-3 gap-4 rounded-lg mt-4">
      <p className="px-2 py-1 bg-red-500 text-white rounded-lg">Latest</p>
      <Marquee pauseOnHover={true} className="space-x-11">
        <Link>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatibus, ut.
        </Link>
        <Link>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatibus, ut.
        </Link>
        <Link>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatibus, ut.
        </Link>
      </Marquee>
    </div>
  );
}
