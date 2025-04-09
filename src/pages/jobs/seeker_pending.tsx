import  Pending  from "@/components/jobs/pending";
import { getSeekerPending } from "@/api/jobServices";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
// import { pendingProps } from "@/api/jobServices";


const SeekersPending = () => {
  const { user } = useUser();
  
  const [pendingList, setPendingList] = useState<any>([]);
  // const location = useLocation().pathname.split("/");
  // const username = location[location.length - 1];
  
  useEffect(() => {
    const fetchSeekerOffer = async () => {
      if (!user?.username) {
        console.error("User is not logged in or username is missing.");
        return; // ถ้า username ไม่มีหรือ user เป็น undefined, ให้ return ออกจาก function
      }

      try {
        const result = await getSeekerPending(user.username);
        if (result) {
          console.log("Result from API:", result);
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
      <Pending data={pendingList} type="Apply" />
    </div>
  );
};

export default SeekersPending;
