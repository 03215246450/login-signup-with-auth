import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import Protected from "../Screens/Protected";
import Sidenav from "../Screens/Sidenav";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Protected Screen={Sidenav} />} />
        {/* <Route path="/" element={<Sidenav />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
