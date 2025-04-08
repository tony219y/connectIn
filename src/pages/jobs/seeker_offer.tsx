import { Requestion } from "@/components/jobs/requestion";
import { seekerOffer } from "@/hooks/useJobs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SeekersOffer = () => {
  const location = useLocation().pathname.split("/");
  const [offerList,setOfferList] = useState([]);
  
  useEffect(() => {
    const username = location[location.length - 1];
    const fetchSeekerOffer = async() => {
       const response:any = await seekerOffer(username);
       setOfferList(response.response)
       console.log('response: ',offerList)
    };
    fetchSeekerOffer();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#070C14] text-2xl text-white px-10 pt-20">
      <Requestion type="recruiter" />
    </div>
  );
};
export default SeekersOffer;
