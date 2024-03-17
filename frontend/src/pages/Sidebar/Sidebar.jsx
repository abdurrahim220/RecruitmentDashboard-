import React, { useState } from "react";
import { RiMoneyEuroBoxLine } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { HiOutlineShare } from "react-icons/hi";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { SiInstructure } from "react-icons/si";
import { FaChartPie } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="w-[268px] h-[100vh] bg-white rounded-lg">
      <div className="flex items-center justify-center my-5 gap-1">
        <RiMoneyEuroBoxLine color="green" size={30} />
        <h1 className="text-3xl text-green-600 font-bold">AyyKori</h1>
      </div>

      <div className="mt-10 bg-white mx-1">
        <span className="text-black font-bold text-[16px]">Menu</span>

        <div className="mt-1 mx-1">
          <div
            className={`flex items-center gap-3 py-2 rounded-lg px-1 ${
              activeMenu === "dashboard"
                ? "bg-[#11998E] text-white"
                : "text-[#060709] "
            }`}
            onClick={() => setActiveMenu("dashboard")}
          >
            <MdOutlineDashboard size={30} />
            <p className="text-[16px] font-semibold">Dashboard</p>
          </div>

          <div
            className={`flex items-center gap-3 py-2 rounded-lg px-1 ${
              activeMenu === "application"
                ? "bg-[#11998E] text-white"
                : "text-[#060709] "
            }`}
            onClick={() => setActiveMenu("application")}
          >
            <MdDashboardCustomize size={30} />
            <p className="text-[16px]  font-semibold">Application</p>
          </div>

          <div
            className={`flex items-center gap-3 py-2 rounded-lg px-1  ${
              activeMenu === "calender"
                ? "bg-[#11998E] text-white"
                : "text-[#060709] "
            }`}
            onClick={() => setActiveMenu("calender")}
          >
            <CiCalendarDate size={30} />
            <p className="text-[16px] font-semibold">Calender</p>
          </div>
        </div>
      </div>

      {/* Recruitment */}
      <div className="mt-1 bg-white mx-1">
        <span className="text-black font-bold text-[16px]">Recruitment</span>

        <div className="mt-1 mx-1">
          <div
            className={`flex items-center gap-3 py-2 rounded-lg px-1 ${
              activeMenu === "job"
                ? "bg-[#11998E] text-white"
                : "text-[#060709] "
            }`}
            onClick={() => setActiveMenu("job")}
          >
            <FaBriefcase size={30} />
            <p className="text-[16px] font-semibold">Jobs</p>
          </div>

          <div
            className={`flex items-center gap-3 py-2 rounded-lg px-1 ${
              activeMenu === "message"
                ? "bg-[#11998E] text-white"
                : "text-[#060709] "
            }`}
            onClick={() => setActiveMenu("message")}
          >
            <FaRegMessage size={30} />
            <p className="text-[16px]  font-semibold">Message</p>
          </div>

          <div
            className={`flex items-center gap-3 py-2 rounded-lg px-1  ${
              activeMenu === "Referrals"
                ? "bg-[#11998E] text-white"
                : "text-[#060709] "
            }`}
            onClick={() => setActiveMenu("Referrals")}
          >
            <MdOutlineCollectionsBookmark size={30} />
            <p className="text-[16px] font-semibold">My Referrals</p>
          </div>

          <div
            className={`flex items-center gap-3 py-2 rounded-lg px-1  ${
              activeMenu === "career"
                ? "bg-[#11998E] text-white"
                : "text-[#060709] "
            }`}
            onClick={() => setActiveMenu("career")}
          >
            <HiOutlineShare size={30} />
            <p className="text-[16px] font-semibold">Career site</p>
          </div>
        </div>
      </div>


      {/*  */}
      <div className="mt-1 bg-white mx-1">
        <span className="text-black font-bold text-[16px]">Organization</span>

        <div className="mt-1 mx-1">
          <div
            className={`flex items-center gap-3 py-2 rounded-lg px-1 ${
              activeMenu === "Employee"
                ? "bg-[#11998E] text-white"
                : "text-[#060709] "
            }`}
            onClick={() => setActiveMenu("Employee")}
          >
            <GoPeople size={30} />
            <p className="text-[16px] font-semibold">Employee</p>
          </div>

          <div
            className={`flex items-center gap-3 py-2 rounded-lg px-1 ${
              activeMenu === "Structure"
                ? "bg-[#11998E] text-white"
                : "text-[#060709] "
            }`}
            onClick={() => setActiveMenu("Structure")}
          >
            <SiInstructure size={30} />
            <p className="text-[16px]  font-semibold">Structure</p>
          </div>

          <div
            className={`flex items-center gap-3 py-2 rounded-lg px-1  ${
              activeMenu === "Report"
                ? "bg-[#11998E] text-white"
                : "text-[#060709] "
            }`}
            onClick={() => setActiveMenu("Report")}
          >
            <FaChartPie size={30} />
            <p className="text-[16px] font-semibold">Report</p>
          </div>

          <div
            className={`flex items-center gap-3 py-2 rounded-lg px-1  ${
              activeMenu === "Settings"
                ? "bg-[#11998E] text-white"
                : "text-[#060709] "
            }`}
            onClick={() => setActiveMenu("Settings")}
          >
            <IoSettingsOutline size={30} />
            <p className="text-[16px] font-semibold">Settings</p>
          </div>

          <div
            className={`flex items-center gap-3 py-2 rounded-lg px-1  ${
              activeMenu === "Logout"
                ? "bg-[#11998E] text-white"
                : "text-[#060709] "
            }`}
            onClick={() => setActiveMenu("Logout")}
          >
            <FiLogOut size={30} />
            <p className="text-[16px] font-semibold">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
