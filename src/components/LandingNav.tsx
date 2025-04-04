import { Link } from "react-router-dom"

export const LandingNav = () => {
  return (
    <div className="fixed flex w-full justify-between items-center px-[65px] py-4 bg-[#070C14] text-white z-90">
        <h1>Logo</h1>
        <div className="flex gap-4">
            <Link to='/register' className="border px-4 py-1 rounded-2xl hover:bg-white/30">Join us</Link>
            <Link to='/login' className="px-4 py-1 rounded-2xl bg-[#3D4045] hover:bg-[#3D404580]">Sign in</Link>
        </div>
    </div>
  )
}