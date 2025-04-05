import { getjwtToken } from "@/hooks/useInfo";
import wretch from 'wretch';

export const createNewPost = async (title:string, content:string, tags:string, postFor:string, visibility:string) => {

    const token = getjwtToken();
    const response = await wretch('/api/posts/create')
        .headers({
            Authorization: `Bearer ${token}`
        })
        .post({ title, content, tags, postFor, visibility })
        .badRequest((err: any) => {
            throw new Error(JSON.parse(err.message).messages);
        })
        .json();   
    if (!response) {
        throw new Error('Post not created');
    }
    return response; 
}

export const getAllPosts = async () => {
    const token = getjwtToken();
    const response = await wretch('/api/posts/get-all-post')
        .headers({
            Authorization: `Bearer ${token}`
        })
        .get()
        .badRequest((err: any) => {
            throw new Error(JSON.parse(err.message).messages);
        })
        .json();   
    if (!response) {
        throw new Error('Post not created');
    }
    return response; 
}