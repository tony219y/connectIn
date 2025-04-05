import { Link } from "react-router-dom";
import { AvatarProfile } from "./profile/ProfileCart";

const Navbar = () => {
  const username = "tony219y";

  return (
    <div className="fixed flex w-full bg-black text-white p-4 gap-4 z-90 justify-between px-[65px]">
      <h1>Logo</h1>
      <div className="flex gap-4 items-center">
        {/* <Link to="/">Landing</Link> */}
        {/* <Link to="/login">Login</Link> */}
        {/* <Link to="/register">Register</Link> */}
        <Link to="/home">Home</Link>
        <Link to={`/jobs/seeker-offer/${username}`}>Jobs</Link>
        <button onClick={()=>{
          localStorage.removeItem("token");
          window.location.href = "/login";
        }} className="hover:text-red-400">Log out</button>
        <AvatarProfile/>
      </div>
    </div>
  );
};
export default Navbar;
