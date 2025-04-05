import { useState } from "react";
// import { AvatarProfile } from "@/components/profile/ProfileCart";
// import { Button } from "@/components/ui/button";
import { HeaderPopup } from "./(components)/HeaderPopup";
import { ContentPopup } from "./(components)/ContentPopup";
import { FooterPopup } from "./(components)/FooterPopup";
import { newPost } from "@/hooks/usePost";
import { toast } from "sonner";

interface CreatePopupProps {
  onClose: () => void;
  username: string;
}

export const CreatePopup = ({ onClose, username }: CreatePopupProps) => {
  const [visible, setVisible] = useState("public");
  const [title, setTiltle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("Jobs");
  const [postFor, setPostFor] = useState("general");

  const handleSubmit = async () => {
    try {
      if (!title || !content) {
        toast.error("Please fill in all fields");
        return;
      }
      await newPost(title, content, tags, postFor, visible);
      setTiltle("");
      setContent("");
      setPostFor("general");
      setVisible("public");

      onClose();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex min-h-[200px] h-full items-center justify-center z-50 ">
      {/* Container */}
      <div className="bg-[#23282E] rounded-lg shadow-lg w-full max-w-lg min-h-[200px]">
        {/* Topbar */}
        <div className="flex justify-between items-center border-b border-gray-700 p-4 ">
          <h2 className="text-xl font-semibold text-white text-center">
            Create Post
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
        {/* Header */}
        <HeaderPopup
          username={username}
          value={visible}
          onChange={setVisible}
        />
        {/* Title Content */}
        <ContentPopup
          title={title}
          content={content}
          onTitleChange={setTiltle}
          onContentChange={setContent}
        />
        {/* footer tags and checkbook*/}
        <FooterPopup
          tags={tags}
          onChangeTags={setTags}
          postFor={postFor}
          onChangPostFor={setPostFor}
        />
        {/* submit */}
        <div className="flex w-full px-4 my-2 text-white">
          <button
            className="flex w-full p-2 my-2 text-white justify-center bg-[#0657D0] hover:bg-[#0657D070] rounded-lg"
            onClick={handleSubmit}
          >
            POST
          </button>
        </div>
      </div>
    </div>
  );
};
