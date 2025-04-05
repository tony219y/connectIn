interface FooterPopupProps {
    tags: string;
    postFor: string;
    onChangeTags: (tags: string) => void;
    onChangPostFor: (postFor: string) => void;
  }
  
export const FooterPopup = ({ tags, postFor, onChangeTags, onChangPostFor }: FooterPopupProps) => {
 

    const tagsList = [
        {id: 1, name: "Jobs"},
        {id: 2, name: "Interviews"},
        {id: 3, name: "Resume"},
        {id: 4, name: "Career"},
        {id: 5, name: "Remote"},
        {id: 6, name: "Freelance"},
        {id: 7, name: "Growth"},
        {id: 8, name: "Skills"},
        {id: 9, name: "Balance"},
        {id: 10, name: "Motivation"},
        
    ]
    
    return (
      <div className="flex w-full justify-between items-center px-4 mt-2 text-white">
        <select name={tagsList[0].name} value={tags} onChange={(e)=> onChangeTags(e.target.value)}  className="border rounded-lg px-2 py-1">
            {tagsList.map((tag) => (
                <option className="text-black" key={tag.id} value={tag.name}>{tag.name}</option>
            ))}
        </select>
        <div className="flex items-center gap-2">
          <label className="flex gap-2">
            <input
              name="for"
              type="radio"
              value="general"
              checked={postFor === "general"}
              onChange={e=> onChangPostFor(e.target.value)}
            />
            General
          </label>
  
          <label className="flex gap-2">
            <input
              name="for"
              type="radio"
              value="seeker"
              checked={postFor === "seeker"}
              onChange={e=> onChangPostFor(e.target.value)}
            />
            Job seeker
          </label>
  
          <label className="flex gap-2">
            <input
              name="for"
              type="radio"
              value="recruiter"
              checked={postFor === "recruiter"}
              onChange={e=> onChangPostFor(e.target.value)}
            />
            Recruiter
          </label>
        </div>
      </div>
    );
  };
  