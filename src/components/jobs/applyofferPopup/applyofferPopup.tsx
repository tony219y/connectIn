import { useState } from "react";

interface CreatePopupProps {
  postId:string
  onClose: () => void;
  username: string;
  postFor:string
}

export const ApplyofferPopup = ({postId, onClose, username, postFor }: CreatePopupProps) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")
  const handleSubmit = async () => {

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex min-h-[200px] h-full items-center justify-center z-50 ">
      {/* Container */}
      <div className="bg-[#23282E] rounded-lg shadow-lg w-full max-w-md min-h-[200px]">
        {/* Topbar */}
        <div className="flex justify-between items-center border-b border-gray-700 p-4 ">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-white text-center">
              {postFor == 'recruiter'? 'Apply':'Offer'} for Job
            </h2>
            <p>to {username}</p>
            {/* <p>Post ID: {postId}</p> */}
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
        <form action="" className="flex flex-col w-full px-4 gap-4 pt-4">
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="title" className="p-2 rounded-lg bg-[#D9D9D910]"/>
            <textarea value={content} onChange={(e)=> setContent(e.target.value)} placeholder="description" className="min-h-[200px] h-fit p-2 rounded-lg bg-[#D9D9D910]"></textarea>
            <input type="file" className="p-2 pl-4 rounded-lg bg-[#D9D9D910]" />
            <button
            className="flex w-full p-2 my-2 text-white justify-center bg-[#0657D0] hover:bg-[#0657D070] rounded-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
