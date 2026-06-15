import { useState } from "react";
import { useNavigate } from "react-router-dom";
import quorum from "../../assets/Images/quorum.png";

const RoleSelect = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = async () => {
    if (!selectedRole) {
      alert("Please select a role");
      return;
    }

    setIsLoading(true);

    try {
      // Save selected role to localStorage for authentication context
      localStorage.setItem("userRole", selectedRole);
      
      // Navigate based on selected role
      switch (selectedRole) {
        case "voter":
          navigate("/sign-in", { state: { role: "voter" } });
          break;
        case "admin":
          navigate("/sign-in", { state: { role: "admin" } });
          break;
        case "organizer":
          navigate("/sign-in", { state: { role: "organizer" } });
          break;
        default:
          alert("Invalid role selected");
          setIsLoading(false);
      }
    } catch (error) {
      console.error("Navigation error:", error);
      alert("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const getRoleDescription = (role) => {
    switch (role) {
      case "voter":
        return "Participate in events and cast your votes";
      case "admin":
        return "Manage platform settings and monitor activity";
      case "organizer":
        return "Create and manage voting events";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A12] text-white px-6">
      {/* Logo Section */}
      <div className="flex items-center mb-10 justify-center gap-1">
        <img src={quorum} alt="Quorum Logo" className="w-24" />
        <p className="text-white text-4xl font-semibold">Quorum</p>
      </div>

      {/* Title Section */}
      <h2 className="text-2xl font-semibold mb-2">Who are you?</h2>
      <p className="text-gray-400 mb-10 text-center">
        Choose how you will use the app
      </p>

      {/* Role Selection Buttons */}
      <div className="flex flex-col text-lg gap-3 w-full max-w-md">
        {/* Voter Role */}
        <button
          onClick={() => handleRoleSelect("voter")}
          className={`py-3 rounded-lg border-2 transition-all duration-200 ${
            selectedRole === "voter"
              ? "border-[#7B3FF2] bg-[#7B3FF2]/10 shadow-lg shadow-[#7B3FF2]/20"
              : "border-gray-600 hover:border-[#7B3FF2] hover:bg-[#7B3FF2]/5"
          }`}
          aria-pressed={selectedRole === "voter"}
          aria-label="Select Voter role"
        >
          <div className="flex flex-col items-center">
            <span className="font-medium">Voter</span>
            <span className="text-xs text-gray-400 mt-1">
              {getRoleDescription("voter")}
            </span>
          </div>
        </button>

        {/* Admin Role */}
        <button
          onClick={() => handleRoleSelect("admin")}
          className={`py-3 rounded-lg border-2 transition-all duration-200 ${
            selectedRole === "admin"
              ? "border-[#7B3FF2] bg-[#7B3FF2]/10 shadow-lg shadow-[#7B3FF2]/20"
              : "border-gray-600 hover:border-[#7B3FF2] hover:bg-[#7B3FF2]/5"
          }`}
          aria-pressed={selectedRole === "admin"}
          aria-label="Select Admin role"
        >
          <div className="flex flex-col items-center">
            <span className="font-medium">Admin</span>
            <span className="text-xs text-gray-400 mt-1">
              {getRoleDescription("admin")}
            </span>
          </div>
        </button>

        {/* Organizer Role */}
        <button
          onClick={() => handleRoleSelect("organizer")}
          className={`py-3 rounded-lg border-2 transition-all duration-200 ${
            selectedRole === "organizer"
              ? "border-[#7B3FF2] bg-[#7B3FF2]/10 shadow-lg shadow-[#7B3FF2]/20"
              : "border-gray-600 hover:border-[#7B3FF2] hover:bg-[#7B3FF2]/5"
          }`}
          aria-pressed={selectedRole === "organizer"}
          aria-label="Select Organizer role"
        >
          <div className="flex flex-col items-center">
            <span className="font-medium">Organizer</span>
            <span className="text-xs text-gray-400 mt-1">
              {getRoleDescription("organizer")}
            </span>
          </div>
        </button>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={!selectedRole || isLoading}
        className={`mt-10 w-full max-w-md text-lg py-3 rounded-lg font-medium transition-all duration-200 ${
          !selectedRole || isLoading
            ? "bg-gray-600 cursor-not-allowed opacity-50"
            : "bg-[#7B3FF2] hover:bg-violet-800 hover:scale-[1.02] active:scale-[0.98]"
        }`}
        aria-label="Continue with selected role"
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Loading...</span>
          </div>
        ) : (
          "Continue"
        )}
      </button>

      {/* Help Text */}
      <p className="text-gray-500 text-xs mt-6 text-center">
        You can change your role later in account settings
      </p>
    </div>
  );
};

export default RoleSelect;
