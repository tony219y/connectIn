// import { pendingStatus } from "./data/data";
import { AvatarProfile } from "../profile/ProfileCart";
import { pendingProps } from "@/api/jobServices";

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
interface inputType {
  type: string
  data: pendingProps[]

}

const Pending = ({data, type }:inputType) => {
  return (
    <>
      {data.map((data) => ( (data.post_for === type)&&
        <div key={data.post_id}  className="flex w-full border my-4 rounded-2xl justify-between items-center py-2 px-5">
        <div className="flex gap-4 items-center">
          <AvatarProfile />
          <div className="text-sm">
            <h1>{data.post_title}</h1>
            <p>{data.post_by}{" <"}{data.post_for}{">"}</p>
            <p>{formatDate(data.updatedAt)}</p>
          </div>
        </div>
          <div className="text-sm border py-1 px-4 rounded-2xl">{data.status}</div>
      </div>
      ))}
    </>

  );
};

export default Pending;


{/* {data.filter((e)=> e.type===type).map((items) => (
  <div key={data.post_id}  className="flex w-full border my-4 rounded-2xl justify-between items-center py-2 px-5">
    <div className="flex gap-4 items-center">
      <AvatarProfile />
      <div className="text-sm">
        <h1>{data.post_title}</h1>
        <p>{data.content_sender}{" <"}{data.type}{" >"}</p>
        <p>{data.updatedAt}</p>
      </div>
    </div>
      <button className="text-sm border py-1 px-4 rounded-2xl">{data.status}</button>
  </div>
))} */}