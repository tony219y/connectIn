import { pendingStatus } from "./data/data";
import { AvatarProfile } from "../profile/ProfileCart";
import { pendingProps } from "@/api/jobServices";


interface inputType {
  type: string
  data: pendingProps[]

}

export const Pending = ({data, type }:inputType) => {
  return (
    <>
      {data.filter((e)=> e.type===type).map((items) => (
        <div className="flex w-full border my-4 rounded-2xl justify-between items-center py-2 px-5">
          <div className="flex gap-4 items-center">
            <AvatarProfile />
            <div className="text-sm">
              <h1>{items.post_title}</h1>
              <p>{items.}{" <"}{items.type}{" >"}</p>
              <p>{items.date}</p>
            </div>
          </div>
            <button className="text-sm border py-1 px-4 rounded-2xl">{items.status}</button>
        </div>
      ))}
    </>
  );
};
