import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import Login from "./pages/(registration)/login/Login";
import Register from "./pages/(registration)/register/Register";
import Navbar from "./components/Navbar";
// import {}

function App() {
  return (
    <BrowserRouter>
      {/* Nav ชั่วคราว  */}
      <Navbar/>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
