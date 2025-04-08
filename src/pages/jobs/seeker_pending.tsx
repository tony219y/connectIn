import { Pending } from "@/components/jobs/pending";
import { seekerPending } from "@/hooks/useJobs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pendingList } from "@/api/jobServices";


const SeekersPending = () => {
  const location = useLocation().pathname.split("/");
  useEffect(() => {
    const username = location[location.length - 1];
    const fetchSeekerOffer = async() => {
      const response = await seekerPending(username);
      console.log(response)
    };
    fetchSeekerOffer();
  }, []);
    return (
      <div className="flex flex-col h-screen bg-[#070C14] text-2xl text-white px-10 pt-20">
        <Pending data={pendingList} type="apply"/>
      </div>
    );
  };
  export default SeekersPending;
  