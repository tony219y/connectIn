import { getMe } from "@/api/userServices";
import { useEffect, useState } from "react";
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
  const [username, setUsername] = useState<string>("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }
    const fetchUsername = async () => {
      try {
        const response = await getMe();
        setUsername(response.username);
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };
    fetchUsername();
  }, []);

  return (
    <div className="absolute left-0 top-0 h-screen w-[300px] bg-black px-4 text-white">
      <SidebarSection title="Job Seekers">
        <NavLinkItem to={`/jobs/seeker-offer/${username}`} label="Offer" />
        <NavLinkItem to={`/jobs/seeker-pending/${username}`} label="Pending" />
      </SidebarSection>

      <SidebarSection title="Recruiter">
        <NavLinkItem to={`/jobs/recruiter-applicant/${username}`} label="Applicant" />
        <NavLinkItem to={`/jobs/recruiter-pending/${username}`} label="Pending" />
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
