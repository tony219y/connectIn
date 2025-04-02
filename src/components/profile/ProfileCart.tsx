import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AvatarProfile = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
const ProfileCart = () => {
  return (
    <div className="max-w-[300px] h-[300px] bg-[#23282E] rounded-2xl">
      <div className="relative w-full h-[50px] bg-gray-300 rounded-t-2xl">
        <div className="absolute flex flex-col w-full items-center left-1/2 top-1/2 transform -translate-x-1/2 translate-y-[10%] text-white">
            <AvatarProfile/>
          <h1 className="text-sm font-semibold mt-1">John Doe</h1>
          <p className="text-sm mt-1">Description</p>
          <hr className="w-3/4 border mt-1" />
          {/* <h1 className="text-sm text-black">John Doe</h1> */}
        </div>
      </div>
    </div>
  );
};
export default ProfileCart;
