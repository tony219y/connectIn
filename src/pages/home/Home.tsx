import { getMe } from "@/api/userServices";
import CreatePost from "@/components/posts/createPost/CreatePost";
import Post from "@/components/posts/Post";
import ProfileCart from "@/components/profile/ProfileCart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [profile, setProfile] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await getMe();
        console.log("profileResponse", profileResponse);
        if (profileResponse.username) {
          setProfile(profileResponse.username);
        } else {
          navigate("/login"); // No token!!
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        navigate("/login"); // If error , redirect to login
      } finally {
        setIsLoading(false); 
      }
    };
    fetchData();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#070C14]">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="flex w-full min-h-screen h-full bg-[#070C14]">
        <div className="w-[450px] h-full border pt-20 px-10 max-md:hidden">
          <ProfileCart profile={profile} />
        </div>
        <div className="flex flex-col w-1/2 h-screen border pt-20 px-10 gap-4 overflow-y-scroll no-scrollbar">
          <CreatePost username={profile} />
          <button className="bg-white">ME</button>
          <Post />
        </div>
      </div>
    </>
  );
};

export default Home;
