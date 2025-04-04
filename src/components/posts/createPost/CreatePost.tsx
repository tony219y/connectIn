import { AvatarProfile } from "@/components/profile/ProfileCart"
import { Button } from "@/components/ui/button"

interface CreatePostProps {
  username: string;
}
const CreatePost = ({username}:CreatePostProps) => {
  return (
    <div className="flex w-full bg-[#23282E] items-center px-4 py-2 gap-4 rounded-sm">
        <AvatarProfile/>
        <Button className="flex-1 bg-white hover:bg-white/70 justify-start">What's on your mind, {username}</Button>
    </div>
  )
}
export default CreatePost