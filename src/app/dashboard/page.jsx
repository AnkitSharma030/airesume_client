'use client'
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import Tasks from "../../components/task";
import Review from "../../components/review";
import Features from "../../components/features";
// import  {useState, useEffect} from "react"
export default function Dashboard(){
    const router = useRouter();
      const [resumeUpload, setResumeUpload] = useState(false);
        const [selectedFile, setSelectedFile] = useState(null);
          const [userName, setUserName] = useState("Unknown");
  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) setUserName(storedUserName);
  }, []);   
   const handleLogout=()=>{
        localStorage.clear();
        router.push('/landingpage');
    }
    
    const handleResumeScan=()=>{
      router.push('/resumeanalysis');
    }

    return(
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
  <h1 className="text-5xl font-bold text-center">Welcome, {userName ? userName: 'Unknown'}</h1>
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
        <p className="text-blue-200">0/10 Scans used</p>
      </div></div>
</div>

        <div>

        {/* Image Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <button onClick={handleResumeScan} className="inline-flex items-center px-4 py-1 text-lg font-semibold rounded-full shadow-lg  bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700  focus:ring-2 focus:ring-indigo-400 w-full sm:w-auto justify-center">New Resume Scan</button>
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