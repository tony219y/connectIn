import { useState } from "react";
import { AvatarProfile } from "@/components/profile/ProfileCart";
import { Button } from "@/components/ui/button";
import { CreatePopup } from "./CreatePopup";

interface CreatePostProps {
  username: string;
}

const CreatePost = ({ username }: CreatePostProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex w-full bg-[#23282E] items-center px-4 py-2 gap-4 rounded-sm">
        <AvatarProfile />
        <Button
          className="flex-1 bg-white hover:bg-white/70 justify-start"
          onClick={handleOpenPopup}
        >
          What's on your mind, {username}
        </Button>
      </div>

      {isPopupOpen && <CreatePopup onClose={handleClosePopup} username={username} />}
    </div>
  );
};

export default CreatePost;