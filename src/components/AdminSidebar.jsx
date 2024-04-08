import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const AdminSidebar = () => {
  const {user} = useContext(UserContext);
  return (
    <>
      <div className="px-10 py-3 flex justify-between items-center">
        <h4 className="font-semibold">
          Welcome  {user.userName}
        </h4>
      </div>
    </>
  );
};

export default AdminSidebar;
