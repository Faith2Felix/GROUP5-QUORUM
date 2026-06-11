import { useState } from "react";
import { useNavigate } from "react-router-dom";
import quorum from "../../assets/Images/quorum.png";

const RoleSelection = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");

  const handleContinue = () => {
    switch (selectedRole) {
      case "voter":
        navigate("/voting");
        break;
      case "admin":
        navigate("/admin");
        break;
      case "organizer":
        navigate("/organizer/dashboard");
        break;
      default:
        alert("Please select a role");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A12] flex flex-col items-center justify-center bg-gray-950 text-white px-6">
      <div className="flex mb-10 items-center justify-center gap-3">
        <img src={quorum} alt="Quorum Logo" className="w-24" />
        <p className="text-white text-3xl font-semibold">Quorum</p>
      </div>
      <h2 className="text-2xl font-semibold mb-2">Who are you?</h2>

      <p className="text-gray-400 mb-8 text-center">
        Choose how you will use the app
      </p>

      <div className="flex flex-col gap-4 w-full ">
        <button
          onClick={() => setSelectedRole("voter")}
          className={`py-3 rounded-lg border transition ${
            selectedRole === "voter"
              ? "bg-[#7B3FF2] border-[#7B3FF2]"
              : "border-gray-600 hover:border-[#7B3FF2]"
          }`}
        >
          Voter
        </button>

        <button
          onClick={() => setSelectedRole("admin")}
          className={`py-3 rounded-lg border transition ${
            selectedRole === "admin"
              ? "bg-[#7B3FF2] border-[#7B3FF2]"
              : "border-gray-600 hover:border-[#7B3FF2]"
          }`}
        >
          Admin
        </button>

        <button
          onClick={() => setSelectedRole("organizer")}
          className={`py-3 rounded-lg border transition ${
            selectedRole === "organizer"
              ? "bg-[#7B3FF2] border-[#7B3FF2]"
              : "border-gray-600 hover:border-[#7B3FF2]"
          }`}
        >
          Organizer
        </button>
      </div>

      <button
        onClick={handleContinue}
        className="mt-8 bg-[#7B3FF2] w-full mt-22 max-w-xs  hover:bg-violet-700 py-3 rounded-lg font-medium transition"
      >
        Continue
      </button>
    </div>
  );
};

export default RoleSelection;
