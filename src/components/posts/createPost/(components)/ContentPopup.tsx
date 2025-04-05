interface ContentPopupProps {
  title: string;
  content: string;
  onTitleChange: (title: string) => void;
  onContentChange: (content: string) => void;
}

export const ContentPopup = ({
  title,
  content,
  onTitleChange,
  onContentChange,
}: ContentPopupProps) => {
  return (
    <form className="flex flex-col w-full text-white px-4">
      <input
        required
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        type="text"
        placeholder="Title"
        className="border p-2 rounded-lg"
      />
      <textarea
        required
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        className="w-full h-[200px] bg-[#23282E] border rounded-lg p-2 mt-2"
        placeholder="Write your content here..."
      />
    </form>
  );
};
