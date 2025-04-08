import { getjwtToken } from "@/hooks/useInfo"
import wretch from 'wretch'


export const CreateOfferApply = async (postId: string, title: string, content: string) => {
    const token = getjwtToken();
    // console.log({ title, content, postId })
    await wretch('/api/job/offerapply')
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


//For Recruiter from Seeker
export const getSeekerOffer = async (username: string) => {
    try {
        const token = getjwtToken();
        const response = await wretch(`/api/job/seeker-offer/${username}`)
            .headers({
                Authorization: `Bearer ${token}`
            })
            .get().json()
        return response
    } catch (error) {

    }
}


//For status Seeker
export interface pendingProps {
    post_id: number,
    post_title: string,
    post_content: string,
    title_sender: string,
    content_sender: string,
    status: string,
    type: string
    updatedAt: string
}
export const pendingList : pendingProps[] =[]

export const getSeekerPending = async (username: string) => {
    try {
        const token = getjwtToken();
        const response = await wretch(`/api/job/seeker-pending/${username}`)
            .headers({
                Authorization: `Bearer ${token}`
            })
            .get().json<pendingProps>()
        pendingList.push(response)
        return 'Pending list added!'
    } catch (error) {

    }
}



