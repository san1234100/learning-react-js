import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="space-y-5">
      <div>Hi {user.userName}</div>
      <button 
      onClick={()=>setUser({...user,userName:"Abi"})}
      className="px-4 py-2 bg-purple-500 rounded hover:bg-purple-600 text-white">
        Login with Abi
      </button>
    </div>
  );
};

export default Dashboard;
