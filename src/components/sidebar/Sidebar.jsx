import logo from "./logo.jpg";
import { Link } from "react-router-dom";
import { AiFillCar, AiOutlineHome } from "react-icons/ai";
import { PiPersonDuotone } from "react-icons/pi";
import { GoTools, GoSignOut } from "react-icons/go";

export default function Sidebar() {
  return (
    <div className="h-screen bg-white-100 flex flex-col justify-between w-56">
      <div>
        <div className="flex items-center">
          <img
            className="rounded-full w-[150px] h-[150px] p-5"
            src={logo}
            alt="Logo"
          />
          <p className="flex text-center py-2 border-t-[2px] border-black "></p>
        </div>
        <div className="flex flex-col">
          <ul>
            <li>
              <Link to="/vehicle">
                <p className="flex border-b-[2px] gap-3 text-lg font-semibold border-gray-200 rounded-lg shadow-md">
                  <span className="p-1">
                    <AiFillCar />
                  </span>
                  Vehicle
                </p>
              </Link>
            </li>
            <li>
              <Link to="/driver">
                <p className="flex border-b-[2px] gap-3 text-lg font-semibold border-gray-200 rounded-lg shadow-md">
                  <span className="p-1">
                    <PiPersonDuotone />
                  </span>
                  Driver
                </p>
              </Link>
            </li>
            <li>
              <Link to="/equipment">
                <p className="flex border-b-[2px] gap-3 text-lg font-semibold border-gray-200 rounded-lg shadow-md">
                  <span className="p-1">
                    <GoTools />
                  </span>
                  Equipments
                </p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p className="flex border-b-[2px] gap-3 text-lg font-semibold border-gray-200 rounded-lg shadow-md">
                  <span className="p-1">
                    <AiOutlineHome />
                  </span>
                  Home
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link>
              <p className="flex border-[2px] gap-3 text-lg font-semibold border-gray-200 rounded-lg shadow-md">
                <span className="p-1">
                  <GoSignOut />
                </span>
                Sign Out
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
