import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RoleSelect = () => {
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState('')

  const handleContinue = () => {
    if (!selectedRole) {
      alert('Please select a role')
      return
    }

    // Save role to localStorage
    localStorage.setItem('userRole', selectedRole)
    
    // Navigate to sign in with role
    navigate('/sign-in', { state: { role: selectedRole } })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A12] text-white px-6">
      {/* Logo */}
      <div className="flex items-center mb-10 justify-center gap-1">
        <div className="w-16 h-16 bg-[#7B3FF2] rounded-full flex items-center justify-center text-2xl font-bold">
          Q
        </div>
        <p className="text-white text-4xl font-semibold">uorum</p>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold mb-2">Who are you?</h2>
      <p className="text-gray-400 mb-10 text-center">
        Choose how you will use the app
      </p>

      {/* Role Buttons */}
      <div className="flex flex-col text-lg gap-3 w-full max-w-md">
        <button
          onClick={() => setSelectedRole('voter')}
          className={`py-4 rounded-lg border-2 transition-all duration-200 ${
            selectedRole === 'voter'
              ? 'border-[#7B3FF2] bg-[#7B3FF2]/10'
              : 'border-gray-700 hover:border-[#7B3FF2]'
          }`}
        >
          <div className="flex flex-col">
            <span className="font-medium">Voter</span>
            <span className="text-xs text-gray-500 mt-1">
              Participate in events and cast votes
            </span>
          </div>
        </button>

        <button
          onClick={() => setSelectedRole('admin')}
          className={`py-4 rounded-lg border-2 transition-all duration-200 ${
            selectedRole === 'admin'
              ? 'border-[#7B3FF2] bg-[#7B3FF2]/10'
              : 'border-gray-700 hover:border-[#7B3FF2]'
          }`}
        >
          <div className="flex flex-col">
            <span className="font-medium">Admin</span>
            <span className="text-xs text-gray-500 mt-1">
              Manage platform and monitor activity
            </span>
          </div>
        </button>

        <button
          onClick={() => setSelectedRole('organizer')}
          className={`py-4 rounded-lg border-2 transition-all duration-200 ${
            selectedRole === 'organizer'
              ? 'border-[#7B3FF2] bg-[#7B3FF2]/10'
              : 'border-gray-700 hover:border-[#7B3FF2]'
          }`}
        >
          <div className="flex flex-col">
            <span className="font-medium">Organizer</span>
            <span className="text-xs text-gray-500 mt-1">
              Create and manage voting events
            </span>
          </div>
        </button>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={!selectedRole}
        className={`mt-10 w-full max-w-md text-lg py-3 rounded-lg font-medium transition-all duration-200 ${
          selectedRole
            ? 'bg-[#7B3FF2] hover:bg-violet-800 cursor-pointer'
            : 'bg-gray-700 cursor-not-allowed opacity-50'
        }`}
      >
        Continue
      </button>
    </div>
  )
}

export default RoleSelect
