import { getSeekerOffer, getPending } from "@/api/jobServices"


//controll request recruiter
export const seekerOffer = async (username: string) => {
    try {
        const response = await getSeekerOffer(username)
        return response
    } catch (error) {

    }
}
//status apply to recruiter
export const seekerPending = async (username: string) => {
    try {
        const response = await getPending(username)
        return response

    } catch (error) {

    }
}

//controll request seeker
export const recruiterApplicant = () => {

}

//ststus offer to seeker
export const recruiterPending = () => {

}