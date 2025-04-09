import { offerApplicantProps } from "@/api/jobServices";
import { AvatarProfile } from "../profile/ProfileCart";

interface inputType {
  type: string
  data: offerApplicantProps[]
}
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const thaiTime = date.toLocaleString("en-EN", {
    timeZone: "Asia/Bangkok",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return thaiTime
}

export const Requestion = ({data, type }:inputType) => {

  return (
     <>
      {data.map((data) => ( (data.postFor === type )&&
        <div key={data.postId}  className="flex w-full border my-4 rounded-2xl justify-between items-center py-2 px-5">
        <div className="flex gap-4 items-center">
          <AvatarProfile />
          <div className="text-sm">
            <h1 className="font-bold">{data.postTitle}</h1>
            <p>{data.sendBy}{" <"}{data.postFor}{">"}</p>
            <p>{formatDate(data.updatedAt)}</p>
          </div>
        </div>
        <div className="flex gap-4">
            <button className="text-sm border py-1 px-4 rounded-2xl hover:bg-white/30">Reject</button>
            <button className="text-sm border py-1 px-4 rounded-2xl bg-white text-black hover:bg-white/70">Accept</button>
         </div>
      </div>
      ))}
    </>   
  );
};
