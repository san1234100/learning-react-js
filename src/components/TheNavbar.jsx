import { Link } from "react-router-dom";
const TheNavbar = () => {
  return (
    <>
      <div className="bg-gray-800 text-white px-10 py-3 flex justify-between items-center">
        <Link to={'/'} className="font-semibold text-xl">Blog's</Link>
        <ul className="flex space-x-4 text-md">
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TheNavbar;
