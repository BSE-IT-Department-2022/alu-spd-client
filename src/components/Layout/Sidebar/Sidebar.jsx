import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { FaHome } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { IoSchoolSharp } from "react-icons/io5";

function Sidebar({ user, isOpen, setIsSidebarOpen }) {
  const navLinks = [
    { text: "Home", icon: <FaHome />, path: "/" },
    { text: "Opportunities", icon: <BsFillBagCheckFill />, path: "/opp" },
    { text: "Scholarships", icon: <IoSchoolSharp />, path: "/opp" },
    { text: "Admin Home", icon: <FaHome />, path: "/admin", admin: true },
  ];

  return (
    <>
      <div
        id="sidebar"
        className={`lg:w-1/6 top-0 left-0 text-white p-6 shadow-sm transition-all duration-300 lg:transform-none ${
          isOpen
            ? "transform translate-x-0 z-10 fixed h-screen bg-blue-600"
            : "transform -translate-x-full hidden lg:block"
        }`}
      >
        <nav className="">
          {user && (
            <div className="navigationContainer">
              <ul className="nav-links-list">
                {navLinks
                  .filter(
                    (link) =>
                      !link.admin || (link.admin && user.role === "admin")
                  )
                  .map((link, index) => (
                    <li className="nav-link px-6 py-4" key={index}>
                      <Link
                        className="flex items-center text-white text-base leading-normal hover:text-white hover:bg-blue-600"
                        to={link.path}
                      >
                        <i className="mx-2 text-base leading-normal">
                          {link.icon}
                        </i>
                        <span className="mx-2 text-xl leading-normal">
                          {link.text}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
