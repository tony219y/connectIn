import { LandingNav } from "@/components/LandingNav"
import mainLanding from '../../assets/landing.png'
import { Link } from "react-router-dom"
const Landing = () => {
  return (
    <>
      <LandingNav/> 
      <div className="flex flex-col w-full h-screen bg-[#070C14]">
        <div className="relative flex w-full text-white">
          <span className="absolute w-full h-full bg-gradient-to-r from-[#070C14] to-transparent z-10"></span>
          <div className="absolute flex flex-col w-[800px] ml-[10%] mt-[10%] z-20 gap-10">
            <h1 className="text-7xl" >Welcome to your profession community</h1>
            <p className="w-[400px]">This is a space to connect with career opportunities. 
              Whether you're looking for a job, hiring new talent, 
              or sharing work experiences, join us in building a strong 
              network and growing together!</p>
            <button className="w-[200px] px-5 py-2 bg-[#0657D080] rounded-2xl">Continue with Google</button>
            <Link to='/register' className="border w-[200px] px-5 py-2 rounded-2xl bg-[#2C2C2C] text-center">Sign in with E-mail</Link>
          </div>
          <img src={mainLanding} alt="landing" className="w-full h-full object-cover object-center" />
        </div>

        <div className="flex flex-col h-full pl-[10%] py-10 bg-[#070C14] text-white gap-4">
            <h1 className="font-bold">Explore Collaborative Articles</h1>
            <p className="w-[400px] text-white/50">
              Engage with thought-provoking articles meticulously crafted through collective expertise. 
              Delve into multifaceted insights, foster intellectual exchange, and catalyze innovation 
              by harnessing the strength of collaborative contributions!
            </p>
        </div>
      </div>
    </>
  )
}
export default Landing