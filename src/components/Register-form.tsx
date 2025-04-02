import {useState } from 'react'
import logo from '../assets/banner-landing.jpg'

const Registerform = () => {
    const [username, setUsername] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [passwordConfirm, setPasswordConfirm] = useState<string>();
    
    const submitRegister = (e: React.FormEvent): void => {
        e.preventDefault()
        console.log({username,email,password,passwordConfirm})
    }

  return (
        <div className="w-[800px] h-auto text-white shadow-white/20 shadow-lg">
        <div className='relative'>
            <span className='absolute flex flex-col w-full h-full bg-gradient-to-r from-[#070C14] via-[#070C14]/70 to-transparent justify-start py-20'>
                <label className='text-[36px] uppercase w-[600px] pl-[10%]'>Welcome to ConnectIn</label>
                <p className='text-[16px] w-[460px] pl-[10%]'>Create your account to become a part of ConnectIn,
                     the ultimate platform for job seekers and employers to connect seamlessly!
                </p>
            </span>
            <img src={logo} className='object-center object-cover w-full h-[400px]'  />
        </div>
        <div className='flex flex-col justify-center items-center bg-[#3D404550]'>
            <form action="" className='grid grid-rows-2 gap-4 py-4 font-extralight w-1/3' onSubmit={submitRegister}>
                <label className='text-center uppercase font-bold'>User login</label>
                <input type="text" placeholder='Username' className='px-4 py-1 border text-white rounded-sm' onChange={(e)=> setUsername(e.target.value)}/>
                <input type="email" placeholder='Email' className='px-4 py-1 border text-white rounded-sm' onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' className='px-4 py-1 border text-white rounded-sm' onChange={(e)=> setPassword(e.target.value)}/>
                <input type="password" placeholder='Password Confirm' className='px-4 py-1 border text-white rounded-sm' onChange={(e)=> setPasswordConfirm(e.target.value)}/>
                <a href="/login" className='text-left text-[12px] hover:underline duration-500'>Have an account ?</a>
                <button type='submit' className='rounded-sm bg-[#0657D0] p-1'>LOGIN</button>
            </form>
        </div>
    </div>
  )
}
export default Registerform