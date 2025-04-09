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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
        throw new Error(error.message)
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

export const getSeekerPending = async (username: string) => {
    try {
      const pendingList : pendingProps[] =[]
      const token = getjwtToken();
      const response: any = await wretch(`/api/job/seeker-pending/${username}`)
        .headers({ Authorization: `Bearer ${token}` })
        .get()
        .json();

        pendingList.push(response)
        console.log('pendingList: ', pendingList)
      return pendingList;
    } catch (error) {
      console.error("Error fetching pending:", error);
    }
  };



