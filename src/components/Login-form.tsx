import { userLgin } from '@/hooks/useAuth';
import logo from '../assets/banner-landing.jpg'
import {useState } from 'react'


const Loginform = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const submitLogin = async(e: React.FormEvent) => {
        e.preventDefault()
        await userLgin(email,password)
    }

  return (
    <div className="w-[800px] h-auto text-white shadow-white/20 shadow-lg">
        <div className='relative'>
            <span className='absolute flex flex-col w-full h-full bg-gradient-to-r from-[#070C14] via-[#070C14]/70 to-transparent justify-start py-20'>
                <label className='text-[36px] uppercase w-[500px] pl-[10%]'>Log In and Connect with Opportunities</label>
                <p className='text-[16px] w-[500px] pl-[10%]'>Log in to your ConnectIn account and connect seamlessly 
                    with job seekers and employers on the ultimate professional platform!
                </p>
            </span>
            <img src={logo} className='object-center object-cover w-full h-[400px]'  />
        </div>
        <div className='flex flex-col justify-center items-center bg-[#3D404550]'>
            <form action="" className='grid grid-rows-2 gap-4 py-4 font-extralight w-1/3' onSubmit={submitLogin}>
                <label className='text-center uppercase font-bold'>User login</label>
                <input required type="email" placeholder='Email' className='px-4 py-1 border text-white rounded-sm' onChange={(e)=> setEmail(e.target.value)}/>
                <input required type="password" placeholder='Password' className='px-4 py-1 border text-white rounded-sm' onChange={(e)=> setPassword(e.target.value)}/>
                <a href="#" className='text-right text-[12px] hover:underline duration-500'>Forgot password ?</a>
                <button type='submit' className='rounded-sm bg-[#0657D0] p-1'>LOGIN</button>
            </form>
        </div>
    </div>
  )
}
export default Loginform