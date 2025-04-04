import { Pending } from "@/components/jobs/pending";

const RecruiterPending = () => {
  return (
    <div className="flex flex-col h-screen bg-[#070C14] text-2xl text-white px-10 pt-20">
      <Pending type="seeker" />
    </div>
  );
};
export default RecruiterPending;
