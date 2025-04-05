import { createNewPost, getAllPosts } from "@/api/postServices";
import { toast } from "sonner";

interface Post {
    id: number;
    title: string;
    content: string;
    tags: string;
    postFor: string;
    visibility: string;
    date: string;
    username: string;
}

export const newPost = async (
    title: string,
    content: string,
    tags: string,
    postFor: string,
    visibility: string,
) => {
    // console.log({ title, content, tags, postFor, visibility });
    try {
        const response = await createNewPost(title, content, tags, postFor, visibility)
        return response;

    } catch (error) {
        console.error("Error creating post:", error);
    }
}

export const getPosts = async () => {

    try{
        const Posts: Post[] = [];
        const response:any = await getAllPosts();
        toast.success(response.message);
        Posts.push(...response.posts);
        return Posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};