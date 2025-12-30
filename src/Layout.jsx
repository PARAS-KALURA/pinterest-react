import Sidebar from "./Sidebar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-gray-50 ">
      
      {/* FIXED SIDEBAR */}
      <div className="
        fixed left-0 top-0 h-screen w-28 z-50
        bg-white 
        border-r border-gray-300 
      ">
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="ml-28 flex flex-col min-h-screen">

        {/* FIXED NAVBAR */}
        <div className="
          fixed top-0 left-28 right-0 h-16 z-40
          bg-white 
          border-b border-gray-300 
        ">
          <Navbar />
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="
          flex-1 overflow-y-auto p-6 mt-16
          bg-gray-50 
          text-black dark:text-white
        ">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Layout;
