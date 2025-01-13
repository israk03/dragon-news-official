import Advertise from "./Advertise";
import Findus from "./Findus";
import SocialLogin from "./SocialLogin";

export default function RightNav() {
  return (
    <div className="space-y-4">
      <SocialLogin></SocialLogin>
      <Findus></Findus>
      <Advertise></Advertise>
    </div>
  );
}
