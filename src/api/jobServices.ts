import { getjwtToken } from "@/hooks/useInfo"
import { toast } from "sonner";
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
    post_for: string,
    post_by: string,
    title_sender: string,
    content_sender: string,
    status: string,
    type: string
    updatedAt: string
}

export const getPending = async (username: string) => {
    try {
      const pendingList : pendingProps[] =[]
      const token = getjwtToken();
      const response: any = await wretch(`/api/job/pending/${username}`)
        .headers({ Authorization: `Bearer ${token}` })
        .get()
        .badRequest((e)=>{
            toast.error(JSON.parse(e.message).message)
        })
        .json();
        pendingList.push(...response)
      return pendingList;
    } catch (error:any) {
      console.error("Error fetching pending:", error.message);
    }
  };

//GetOffer-Applicant
export interface offerApplicantProps{
    postId: number
    postTitle: string
    postFor: string
    senderId: number
    sendBy: number
    sendMessage:string
    updatedAt: string
}
export const getOfferApplicant = async (username: string, type:string) => {
    try {
      const offerList : offerApplicantProps[] =[]
      const token = getjwtToken();
      const response: any = await wretch(`/api/job/offer-applicant/${username}?type=${type}`)
        .headers({ Authorization: `Bearer ${token}` })
        .get()
        .badRequest((e)=>{
          toast.error(JSON.parse(e.message).message)
        })
        .json();
        // console.log('postFor:', response[].postFor)
        offerList.push(...response)
        // console.log('offerList: ', offerList)
      return offerList;
    } catch (error) {
      console.error("Error fetching pending:", error);
    }
  };



