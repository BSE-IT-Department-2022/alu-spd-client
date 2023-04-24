import { useState } from "react";
import logo from "../../../assets/imgs/alu-logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Header.scss";

const Header = ({ onToggleSidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    onToggleSidebar(!isSidebarOpen);
  };

  return (
    <div className="">
      <div className="fixed w-screen  top-0 left-0 text-white flex items-center justify-between px-6 pt-6 z-10">
        <h2>
          <img src={logo} width={180} alt="" />
        </h2>
        <button
          className="lg:hidden bg-blue-600 px-4 py-2 rounded text-white font-bold"
          onClick={handleToggle}
        >
          {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
    </div>
  );
};

export default Header;
