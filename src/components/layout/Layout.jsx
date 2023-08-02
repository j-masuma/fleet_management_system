/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <div className="w-full">{children || <Outlet />}</div>
    </div>
  );
}
