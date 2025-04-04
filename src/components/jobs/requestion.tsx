import { AvatarProfile } from "../profile/ProfileCart";
import { pendingStatus } from "./data/data";

interface inputType {
  type: string
}

export const Requestion = ({ type }:inputType) => {
  const filteredItems = pendingStatus.filter((item) => item.type === type);

  return (
    <>
      {filteredItems.map((item) => (
        <div
          className="flex w-full border my-4 rounded-2xl justify-between items-center py-2 px-5"
        >
          <div className="flex gap-4 items-center">
            <AvatarProfile />
            <div className="text-sm">
              <h1>{item.title}</h1>
              <p>{item.username}{" <"}{item.type}{" >"}</p>
              <p>{item.date}</p>
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
