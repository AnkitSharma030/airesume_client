'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Tasks from "../../components/task";
import Review from "../../components/review";
import Features from "../../components/features";
export default function Dashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState("Unknown");
  const [scanCount, setScanCount] = useState(0);
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      const storedUserName = localStorage.getItem("userName");
      const storedScanCount = localStorage.getItem("scanCount");

      // Set initial values from local storage to avoid flicker
      if (storedUserName) setUserName(storedUserName);
      if (storedScanCount) setScanCount(storedScanCount);

      if (!token) {
        // Handle case where token is missing (maybe redirect to login? strictly user asked for fetching latest data)
        // For now, just return as we can't fetch without token.  The page likely protects itself or assumes logged in.
        return;
      }

      try {
        const res = await fetch("/api/user", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        if (res.ok) {
          const data = await res.json();
          if (data.user) {
            setUserName(data.user.name);
            setScanCount(data.user.scans);

            // Update local storage
            localStorage.setItem("userName", data.user.name);
            localStorage.setItem("userEmail", data.user.email);
            localStorage.setItem("userId", data.user.userId);
            localStorage.setItem("scanCount", data.user.scans);
          }
        } else {
          // If token is invalid (401), maybe clear storage and redirect? 
          // For now keeping it simple as requested: "show us the users latest data"
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    router.push('/landingpage');
  }

  const handleResumeScan = () => {
    router.push('/resumeanalysis');
  }



  return (
    <>
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white pb-20 pt-6 px-6">

        {/* Top Bar */}
        <div className="flex xs:flex-row  md:items-center justify-between p-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img src="/download.png" alt="Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold tracking-wide">Logo</h1>
          </div>

          {/* Button */}
          <div className="mt-4 md:mt-0">
            <button onClick={handleLogout} className="inline-flex items-center px-6 py-2 border border-transparent text-lg font-semibold rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
              Logout
            </button>


          </div>
        </div>

        {/* Hero Content */}
        <div className="pt-8">
          <div className="flex items-center justify-center">
            <h1 className="text-5xl font-bold text-center">Welcome, {userName ? userName : 'Unknown'}</h1>
          </div>
          <div className="flex items-center justify-center p-4">
            <p className="text-xl text-blue-200 font-bold">Let's optimise your Resume</p>

          </div>
        </div>

        {/*plan div*/}
        <div className="flex justify-center mt-8">
          <div className="flex flex-col items-center justify-center gap-6  bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full max-w-3xl text-center shadow-lg">
            <div className="">
              <h2 className=" font-bold text-blue-200">Plan</h2>
              <p className="font-extrabold text-xl">Free Plan </p>
            </div>
            <div>
              <p className="text-blue-200">{scanCount}/10 Scans used</p>
            </div></div>
        </div>

        <div>

          {/* Image Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              onClick={handleResumeScan}
              disabled={scanCount >= 10}
              className={`cursor-pointer inline-flex items-center px-4 py-1 text-lg font-semibold rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:ring-2 focus:ring-indigo-400 w-full sm:w-auto justify-center
    ${scanCount >= 10 ? "cursor-not-allowed opacity-60 hover:from-purple-600 hover:to-indigo-600" : ""}`}
            >
              {scanCount >= 10 ? "Scan Limit Exceeded" : "New Resume Scan"}
            </button>

            <button className="cursor-pointer inline-flex items-center px-4 py-1 text-lg font-semibold rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:ring-2 focus:ring-indigo-400 w-full sm:w-auto justify-center">Upgrade Plan</button>

          </div>
        </div>
      </div>
      <>
        <Tasks />
        <Review />
        <Features />
      </>
      <>

      </>
    </>
  )
}