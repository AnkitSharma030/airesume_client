'use client'
import { useState } from "react";
import { Plane } from "lucide-react";
import { useRouter } from "next/navigation";
import Tasks from "../../components/task";
import Review from "../../components/review";
import Features from "../../components/features";

export default function Landingpage() {
  const router = useRouter();
  const handleSignup=()=>{
    router.push('/login');
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
          <button onClick={handleSignup} className="inline-flex items-center px-6 py-2 border border-transparent text-lg font-semibold rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
            Sign in
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-8">
        
        {/* Text Section */}
        <div className="max-w-xl space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Analyze Your Resume{" "}
            <span className="text-blue-400">AI-Powered Insights</span>
          </h1>
          <p className="text-lg text-gray-200">
            Optimize your resume, get ATS-ready, and land your dream job faster.
          </p>
          <div>
            <button className="relative z-10 inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full shadow-lg  bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:ring-2 focus:ring-indigo-400 text-white">Get Started</button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img
            className="w-48 md:w-72 lg:w-80 drop-shadow-lg"
            src="/download.png"
            alt="Resume Analysis"
          />
        </div>
      </div>
       </div>
      <Tasks />
    <Review />
   <Features />

      <section className="bg-black ">
        <div className="">
        <div className="bg-[#303030]  p-6 text-[#9E9E9E]">
  
        <div>
          <p className="text-white text-xl font-extrabold">How It Works</p>
        </div>
        <div className="pt-4">
          <p className="text-blue-600">1. Upload Your Resume</p>
          <p>Upload your resume in PDF or DOCX format. Maximum file size is 10MB.
</p>
<div className="pt-4"> 
  <p className="text-blue-600">2.2 Add Job Description (Optional)</p>
  <p>Paste the job description to receive tailored feedback and match analysis.</p>
</div>
<div className="pt-4">
  <p className="text-blue-600">3. Get Instant Analysis</p>
  <p>Our AI will analyze your resume and provide detailed feedback on:</p>
<ul className="list-disc pl-5">
  <li>Key skills and qualifications</li>
  <li>ATS optimization suggestions</li>
  <li>Content and formatting improvements</li>
  <li>Job description alignment (if provided)</li>
</ul>

</div>
        </div>   </div>
        </div>
      </section>

      <footer className="bg-black pt-12 ">
        <div className="bg-[#303030] h-12"> 
        <div className="flex justify-center space-x-6 text-[#9E9E9E] ">
          <a className="mt-2" href="">About Us</a>
          <a className="mt-2"  href="">Privacy Policy</a>
          <a className="mt-2"  href="">Terms of Services</a>
        </div>
        </div>
      </footer>
   </>
  );
}
