import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquare } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiDashboardLine } from "react-icons/ri";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <AiOutlineHome size={20} />
            <span>Home</span>
          </li>
          <li>
            <RiDashboardLine size={20} />
            <span>Dashboard</span>
          </li>
          <li>
            <BiMessageSquare size={20} />
            <span>Messages</span>
          </li>
          <li>
            <AiOutlineUser size={20} />
            <span>Profile</span>
          </li>
          <li>
            <IoSettingsOutline size={20} />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
