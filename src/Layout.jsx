import Sidebar from "./Sidebar";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen">

      <div className="h-screen fixed top-0" >
      <Sidebar />
      </div>

      <div className="flex flex-col flex-1">
        <Navbar />

        {/* Page Content */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
