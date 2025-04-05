import { getMe } from "@/api/userServices";
import { AvatarProfile } from "@/components/profile/ProfileCart";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

interface InputProps {
  username: string;
  date: string;
  tags: string[];
  postFor: string;
}

export const Header = ({ username, date, tags, postFor }: InputProps) => {
  const [me, setMe] = useState("");
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const { username } = await getMe();
        setMe(username);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    fetchMe();
  }, []);
  const postDetails = () => {
    console.log({ username, date, tags });
  };
  return (
    <div className="flex  h-fit w-full px-4 py-2 items-center rounded-sm bg-transparent text-white max-md:flex-col max-md:items-start">
      <div className="flex items-center gap-4">
        <AvatarProfile />
        <div className="flex flex-col h-full text-nowrap">
          <h1>{username}</h1>
          <p className="flex gap-2">{date}</p>
        </div>

        <Badge variant="outline" className="self-end">
          {tags}
        </Badge>
      </div>

      <div className="flex self-end justify-end w-full max-md:justify-start max-md:pt-4 ">
        {username !== me ? (
          <>
            {postFor === "seeker" && (
              <button
                onClick={postDetails}
                className="px-2 rounded-lg text-sm bg-[#0657D0] hover:bg-[#0657D0]/50"
              >
                Offer
              </button>
            )}
            {postFor === "recruiter" && (
              <button
                onClick={postDetails}
                className="px-2 rounded-lg text-sm bg-[#0657D0] hover:bg-[#0657D0]/50"
              >
                Apply
              </button>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
