import { ApplyofferPopup } from "@/components/jobs/applyofferPopup/applyofferPopup";
import { AvatarProfile } from "@/components/profile/ProfileCart";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@/contexts/UserContext";
import { useState } from "react";

interface InputProps {
  postId: string;
  username: string;
  date: string;
  tags: string[];
  postFor: string;
}

export const Header = ({
  postId,
  username,
  date,
  tags,
  postFor,
}: InputProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { user } = useUser();

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex flex-col w-full px-4 py-2 text-white">
      <div className="flex items-center gap-4">
        <AvatarProfile />
        <div className="flex flex-col h-full">
          <h1>{username}</h1>
          <p>{date}</p>
        </div>
        <Badge variant="outline">{tags}</Badge>
      </div>

      <div className="flex justify-end w-full pt-2">
        {username !== user?.username && (
          <>
            {postFor === "seeker" && (
              <button
                onClick={handleOpenPopup}
                className="px-2 rounded-lg text-sm bg-[#0657D0] hover:bg-[#0657D0]/50"
              >
                Offer
              </button>
            )}
            {postFor === "recruiter" && (
              <button
                onClick={handleOpenPopup}
                className="px-2 rounded-lg text-sm bg-[#0657D0] hover:bg-[#0657D0]/50"
              >
                Apply
              </button>
            )}
          </>
        )}
      </div>

      {isPopupOpen && (
        <ApplyofferPopup
          onClose={handleClosePopup}
          username={username}
          postFor={postFor}
          postId={postId}
        />
      )}
    </div>
  );
};
