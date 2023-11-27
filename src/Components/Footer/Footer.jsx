import logo from "../../assets/logo.png";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-neutral">
      <div className="footer p-10 container mx-auto bg-neutral text-neutral-content">
        <aside className="flex items-center justify-center">
          <img className="h-20" src={logo} alt="Loading Logo" />
          <p
            style={{ letterSpacing: "3px" }}
            className="md:text-3xl font-semibold uppercase"
          >
            Employee
            <br />
            <span
              style={{ letterSpacing: "4px" }}
              className="text-lg font-semibold uppercase"
            >
              {" "}
              Management
            </span>
          </p>
        </aside>
        <div className="">
          <header className="text-xl uppercase   font-semibold">Social</header>
          <div className="grid grid-flow-col gap-4">
           <p className="text-2xl "><ImFacebook2 /></p>
           <p className="text-2xl "><FaInstagramSquare /></p>
           <p className="text-2xl "><FaLinkedin/></p>
          </div>
        </div>
      </div>
      <div className="text-center text-slate-400 p-5 bg-gray-700">
        <p>Copyright © 2023 - All right reserved by Employee Management.</p>
      </div>
    </div>
  );
};

export default Footer;
