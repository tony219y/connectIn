import  Pending  from "@/components/jobs/pending";
import { getPending } from "@/api/jobServices";
import { useEffect, useState } from "react";
import { useUser } from "@/contexts/UserContext";


const SeekersPending = () => {
  const { user } = useUser();
  const [pendingList, setPendingList] = useState<any>([]);


  useEffect(() => {
    const fetchSeekerOffer = async () => {
      if (!user?.username) {
        console.error("User is not logged in or username is missing.");
        return;
      }

      try {
        const result = await getPending(user.username);
        if (result) {
          setPendingList(result);
        }
      } catch (error) {
        console.error("Error fetching pending:", error);
      }
    };

    fetchSeekerOffer();
  }, [user]);

  return (
    <div className="flex flex-col h-screen bg-[#070C14] text-2xl text-white px-10 pt-20">

          {pendingList.length === 0 ? (
            <div className="flex w-full h-full items-center justify-center text-white">No pending.</div>
          ) : (
            <Pending data={pendingList} type="recruiter" />
          )}
    </div>
  );
};

export default SeekersPending;
