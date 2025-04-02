import CreatePost from "@/components/posts/createPost/CreatePost"
import ProfileCart from "@/components/profile/ProfileCart"

const Home = () => {
  return (
  <>
    <div className="flex w-full h-screen bg-[#070C14]">
      <div className="w-[450px] h-full border pt-20 px-10 max-md:hidden">
        <ProfileCart/>
      </div>
      <div className="w-full h-full border pt-20 px-10">
        <CreatePost/>
      </div>
      <div className="w-1/3 h-full border"></div>
    </div>
  </>
  )
}
export default Home