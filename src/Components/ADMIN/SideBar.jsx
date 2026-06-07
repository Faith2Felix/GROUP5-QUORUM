import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  QuorumIcon,
  SearchIcon,
  LayoutgridIcon,
  MegaphoneIcon,
  NomineesIcon,
  UsersIcon,
  EWalletIcon,
  TransactionIcon,
  AuditIcon,
  AlertIcon,
  SettingsIcon,
  LogoutIcon,
} from "../../assets/Icon";
import { SidebarIcon } from "../../assets/Icon";

export default function SideBar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const menuItems = [
    { name: "Dashboard", icon: LayoutgridIcon, path: "/admin" },
    { name: "Campaigns", icon: MegaphoneIcon, path: "/campaigns" },
    { name: "Nominees", icon: NomineesIcon, path: "/nominees" },
    { name: "Users", icon: UsersIcon, path: "/users" },
    { name: "Transactions", icon: TransactionIcon, path: "/transactions" },
    { name: "Alerts", icon: AlertIcon, path: "/alerts" },
    { name: "Settings", icon: SettingsIcon, path: "/settings" },
    { name: "Logout", icon: LogoutIcon, path: "/logout" },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-40" />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed h-screen top-0 left-0 w-full
  bg-[#0F172A]
  z-50 flex flex-col
  transition-transform duration-300 ease-in-out
  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-8">
  <button
    onClick={() => setIsOpen(false)}
    className="text-[#7B3FF2]"
  >
    <SidebarIcon />
  </button>

  <div className="flex items-center gap-3">
    <QuorumIcon color="bg-purple-500"/>
    <h2 className="text-[#E7E0EE] font-bold text-[28px]">
      Quorum
    </h2>
  </div>

  <SearchIcon color="#7B3FF2" />
</div>
        

        {/* Menu */}
        <div>
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className={`w-full text-[19px] flex items-center gap-8 px-8 py-3 rounded-md transition-all ${
                  isActive
                    ? "bg-[#7B3FF2] text-white"
                    : "text-white/80 hover:bg-violet-600/30"
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
}
