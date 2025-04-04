import { Link } from "react-router-dom";

const Navbar = () => {
  const username = 'tony219y'
  return (
    <div className="fixed flex w-full bg-black text-white p-4 gap-4 z-90">
      <Link to="/">Landing</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/home">Home</Link>
      <Link to={`/jobs/seeker-offer/${username}`}>Jobs</Link>
    </div>
  );
};
export default Navbar;
