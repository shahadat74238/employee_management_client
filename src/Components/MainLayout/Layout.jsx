import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Scroll from "../ScrollTop/Scroll";
import Footer from "../Footer/Footer";
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <div className="fixed z-10  bottom-5 right-5">
        <Scroll />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
