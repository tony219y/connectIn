import { getOfferApplicant } from "@/api/jobServices";
import { useEffect, useState } from "react";
import { useUser } from "@/contexts/UserContext";
import { Requestion } from "@/components/jobs/requestion";

const SeekersPending = () => {
  const { user } = useUser();
  const [offerApplicantList, setOfferApplicantList] = useState<any>([]);

  useEffect(() => {
    const fetchSeekerOffer = async () => {
      if (!user?.username) {
        console.error("User is not logged in or username is missing.");
        return;
      }

      try {
        const result = await getOfferApplicant(user.username, "seeker");
        if (result) {
          setOfferApplicantList(result);
        }
      } catch (error) {
        console.error("Error fetching pending:", error);
      }
    };

    fetchSeekerOffer();
  }, [user]);

  return (
    <div className="flex flex-col h-screen bg-[#070C14] text-2xl text-white px-10 pt-20">

      {offerApplicantList.length === 0 ? (
        <div className="flex w-full h-full items-center justify-center text-white">
          No applicants found.
        </div>
      ) : (
        <Requestion data={offerApplicantList} type="seeker" />
      )}
    </div>
  );
};

export default SeekersPending;
