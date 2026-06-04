import React from "react";
import profile from "../../assets/Images/profile.png";
import { useNavigate } from "react-router-dom";
import {
  EditIcon,
  WalletIcon,
  VoteIcon,
  NotificationIcon,
  SupportIcon,
  LogoutIcon,
  ChevronRight,
} from "../../assets/Icon";

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Edit",
      icon: <EditIcon color="white" />,
      action: () => navigate("/edit-profile"),
    },
    {
      title: "Wallet",
      icon: <WalletIcon color="white" />,
      action: () => navigate("/wallet"),
    },
    {
      title: "Voting History",
      icon: <VotesIcon color="white" />,
      action: () => navigate("/voting-history"),
    },
    {
      title: "Notifications",
      icon: <NotificationIcon color="white" />,
      action: () => navigate("/notifications"),
    },
    {
      title: "Support",
      icon: <SupportIcon color="white" />,
      action: () => navigate("/support"),
    },
    {
      title: "Log Out",
      icon: <LogoutIcon color="white" />,
      action: () => console.log("Logout"),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white px-5 pt-10 pb-28">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10">
        <img
          src={profile}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />

        <h2 className="mt-4 text-xl font-semibold">John Doe</h2>

        <p className="text-gray-400 text-sm">johndoe@gmail.com</p>
      </div>

      {/* Menu Items */}
      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className="w-full border border-violet-600 rounded-xl px-4 py-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.title}</span>
            </div>

            <ChevronRight color="white" size={20} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Profile;
