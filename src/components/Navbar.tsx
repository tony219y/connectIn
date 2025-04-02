import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed flex w-full bg-black text-white p-4 gap-4">
      <Link to="/">Landing</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/home">Home</Link>
    </div>
  );
};
export default Navbar;
