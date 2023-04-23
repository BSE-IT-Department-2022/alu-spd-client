import { useState } from "react";
import Header from "./Header/Header";
import "./Layout.scss";
import Sidebar from "./Sidebar/Sidebar";

function Layout({ user, ...props }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <body className="flex flex-col">
      <Header onToggleSidebar={handleToggleSidebar} />
      <div className="h-screen pt-12 mt-12 lg:flex lg:flex-row">
        <Sidebar isOpen={isSidebarOpen} user={user}></Sidebar>
        <main className="px-8 pt-8 w-full lg:mx-8 lg:w-5/6">
          {props.children}
        </main>
      </div>
    </body>
  );
}

export default Layout;
