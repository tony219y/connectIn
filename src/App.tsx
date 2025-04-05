import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import Login from "./pages/(registration)/login/Login";
import Register from "./pages/(registration)/register/Register";
import Navbar from "./components/Navbar";
import SeekersOffer from "./pages/jobs/seeker_offer";
import { JobSidebar } from "./components/jobSidebar";
import SeekersPending from "./pages/jobs/seeker_pending";
import RecruiterApplicant from "./pages/jobs/recruiter_applicant";
import RecruiterPending from "./pages/jobs/recruiter_pending";
import { Toaster } from "sonner";
import { UserProvider } from "./contexts/UserContext";

// ✅ Layout ที่มี Navbar
const MainLayout = () => (
  <div>
    <Navbar />
    <Outlet /> {/* Render เนื้อหาของ Route */}
  </div>
);

// ✅ Layout ที่มีทั้ง Navbar + JobSidebar
const JobLayout = () => (
  <div className="flex h-screen">
    <Navbar />
    <div className="flex flex-col flex-1 ml-[300px]">
      <JobSidebar />
      <Outlet />
    </div>
  </div>
);

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Toaster />
        <Routes>
          {/* Navbar แยกกัน */}
          <Route path="/" element={<Landing />} />
          {/* ✅ มี Navbar */}
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
          </Route>

          {/* ✅ มี Navbar + JobSidebar */}
          <Route element={<JobLayout />}>
            <Route
              path="/jobs/seeker-offer/:username"
              element={<SeekersOffer />}
            />
            <Route
              path="/jobs/seeker-pending/:username"
              element={<SeekersPending />}
            />
            <Route
              path="/jobs/recruiter-applicant/:username"
              element={<RecruiterApplicant />}
            />
            <Route
              path="/jobs/recruiter-pending/:username"
              element={<RecruiterPending />}
            />
          </Route>

          {/* ❌ ไม่มี Navbar */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
