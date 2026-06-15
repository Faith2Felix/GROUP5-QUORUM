import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A12] text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-[#7B3FF2]">Quorum</h1>
      <p className="text-lg mb-8">Your Voting Platform</p>
      <div className="space-x-4">
        <Link to="/role-select" className="bg-[#7B3FF2] px-6 py-2 rounded-lg hover:bg-violet-800">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function RoleSelect() {
  return (
    <div className="min-h-screen bg-[#0A0A12] text-white flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-semibold mb-4">Select Your Role</h2>
      <div className="space-y-3 w-full max-w-md">
        <button className="w-full py-3 border border-gray-600 rounded-lg hover:border-[#7B3FF2]">Voter</button>
        <button className="w-full py-3 border border-gray-600 rounded-lg hover:border-[#7B3FF2]">Admin</button>
        <button className="w-full py-3 border border-gray-600 rounded-lg hover:border-[#7B3FF2]">Organizer</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/role-select" element={<RoleSelect />} />
    </Routes>
  );
}

export default App;
