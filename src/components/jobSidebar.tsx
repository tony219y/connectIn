import { useUser } from "@/contexts/UserContext";
import { Link, useLocation } from "react-router-dom";

interface NavLinkItemProps {
  to: string;
  label: string;
}

const NavLinkItem = ({ to, label }: NavLinkItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`rounded-2xl px-4 py-2 transition ${
        isActive ? "bg-blue-500 text-white" : "bg-[#23282E]"
      }`}
    >
      {label}
    </Link>
  );
};

export const JobSidebar = () => {
  const {user} = useUser()

  return (
    <div className="absolute left-0 top-0 h-screen w-[300px] bg-black px-4 text-white">
      <SidebarSection title="Job Seekers">
        <NavLinkItem to={`/jobs/seeker-offer/${user?.username}`} label="Offer" />
        <NavLinkItem to={`/jobs/seeker-pending/${user?.username}`} label="Pending" />
      </SidebarSection>

      <SidebarSection title="Recruiter">
        <NavLinkItem to={`/jobs/recruiter-applicant/${user?.username}`} label="Applicant" />
        <NavLinkItem to={`/jobs/recruiter-pending/${user?.username}`} label="Pending" />
      </SidebarSection>
    </div>
  );
};

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarSection = ({ title, children }: SidebarSectionProps) => (
  <div className="flex flex-col mt-20 gap-4">
    <div className="flex items-center gap-2">
      <h1 className="whitespace-nowrap">{title}</h1>
      <hr className="w-full border-gray-600" />
    </div>
    {children}
  </div>
);
