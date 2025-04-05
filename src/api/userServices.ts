//api/userServices.ts
import { getjwtToken, setjwtToken } from '@/hooks/useInfo';
import wretch from 'wretch';

export const register = async (username: string, email: string, password: string) => {

    await wretch('/api/auth/register')
        .post({ username, email, password })
        .badRequest((err: any) => {
            throw new Error(JSON.parse(err.message).messages);
        })
        .json();
}

export const login = async (email: string, password: string) => {
    const response: any = await wretch('/api/auth/login')
        .post({ email, password })
        .badRequest((err: any) => {
            throw new Error(JSON.parse(err.message).messages);
        })
        .json();
    if (response) {
        setjwtToken(response.token);
        return response.message;
    }
}

// export const getMe = async () => {
//     const token = getjwtToken();
//     const response:{id:number, username: string, email: string} = await wretch('/api/auth/me')
//         .headers({
//             Authorization: `Bearer ${token}`
//         })
//         .get()
//         .badRequest((err: any) => {
//             throw new Error(JSON.parse(err.message).messages);
//         })
//         .json();
//     if (!response) {
//         throw new Error('User not found');
//     }
    
//     return response;
// }

// /api/userServices.ts
export const fetcher  = async () => {
    const token = getjwtToken();
    const response:{id:number, username: string, email: string} = await wretch('/api/auth/me')
        .headers({
            Authorization: `Bearer ${token}`
        })
        .get()
        .badRequest((err: any) => {
            throw new Error(JSON.parse(err.message).messages);
        })
        .json();
    if (!response) {
        throw new Error('User not found');
    }
    
    return response;
}