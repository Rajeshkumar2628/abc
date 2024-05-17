import "./App.css";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Body from "./Component/Body";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import About from "./Component/About";
import Services from "./Component/Services";
import MainPage from "./Component/MainPage";
import ProjectDetails from "./Component/Project";
import Material from "./Component/Material";
import Employee from "./Component/Labor";
import AuthProvider from "./Component/Auth";
import Dashboard from "./Component/Dashboard";

function App() {
  return (
    <div className="body">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/logout" element={<Body />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/project" element={<ProjectDetails />} />
          <Route path="/materials" element={<Material />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
