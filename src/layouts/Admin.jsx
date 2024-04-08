import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar.jsx";
import AdminSidebar from "../components/AdminSidebar.jsx";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext.js";
const Admin = () => {
    const [user,setUser] = useState({
        id: 1,
        userName: "Vignesh",
      });
  return (
    <div className="min-h-screen pb-10">
      <UserContext.Provider value={{user,setUser}}>
        <AdminNavbar />
        <div className="flex m-10 space-x-10">
          {/* left bar */}
          <div className="w-1/4 bg-white p-5 rounded">
            <AdminSidebar />
          </div>
          {/* main bar */}
          <div className="w-3/4 bg-white p-5 rounded">
            <Outlet />
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
};

export default Admin;
