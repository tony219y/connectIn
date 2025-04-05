import { getjwtToken } from "@/hooks/useInfo"
import wretch from 'wretch'


export const CreateOfferApply = async (postId: string,title: string, content: string ) => {
    const token = getjwtToken();
    console.log({ title, content, postId })
    const response = await wretch('/api/job/offerapply')
        .headers({
            Authorization: `Bearer ${token}`
        })
        .post({
            postId: postId,
            title: title,
            content: content,
        })
        .json()
}
