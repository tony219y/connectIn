//hooks/useAuth.ts

import { register, login } from '@/api/userServices';
import { toast } from 'sonner';


export const userRegister =  async(username:string,email:string,password:string,passwordConfirm:string) =>{
    console.log({username,email,password,passwordConfirm})

    if (username.charAt(0) === ' ' || username.charAt(username.length - 1) === ' ' || !isNaN(Number(username.charAt(0)))) {
        toast.error("Invalid username");
    }
    if(username.length < 3){
        toast.error('Username must be at least 3 characters')
    }
    if(password !== passwordConfirm){
        toast.error('Password not match')
    }
    if(password.length < 8){
        toast.error('Password must be at least 8 characters')
    }

    try {
        await register(username,email,password)
        toast.success('Register success')
        window.location.href = '/login'
    } catch (error:any) {
         toast.error(error.message);
    }
    

}

export const userLgin =  async(email:string,password:string) =>{
    console.log({email,password,})

    try {
        await login(email,password)
        toast.success('Login success')   
        window.location.href = '/home'
    } catch (error:any) {
        // console.log(error);
         toast.error(error.message);
    }
    

}