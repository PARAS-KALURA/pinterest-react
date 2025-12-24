import Sidebar from "./Sidebar";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div className="flex h-screen" >
      <Sidebar />
      <div className="flex flex-col flex-1" >
        <div><Navbar /></div>
        <div>Main Content</div>
      </div>
    </div>
  );
};

export default Layout;
