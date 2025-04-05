import { Link } from "react-router-dom";
import { AvatarProfile } from "./profile/ProfileCart";
import { useUser } from "@/contexts/UserContext";

const Navbar = () => {
  const {user} = useUser();
  const getUsername = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }
      window.location.href = `/jobs/seeker-offer/${user?.username}`;
      } catch (error) {
      console.error("Error fetching username:", error);
    }
  };

  return (
    <div className="fixed flex w-full bg-black text-white p-4 gap-4 z-90 justify-between px-[65px]">
      <h1>Logo</h1>
      <div className="flex gap-4 items-center">
        <Link to="/home">Home</Link>
        <button onClick={getUsername}>Jobs</button>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="hover:text-red-400"
        >
          Log out
        </button>
        <AvatarProfile />
      </div>
    </div>
  );
};
export default Navbar;
