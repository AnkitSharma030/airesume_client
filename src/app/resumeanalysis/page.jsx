"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {useAnalysisStore} from '../../lib/zustand/analysisStore'
export default function ResumeForm() {
const router=useRouter();
  // const [analysis, setAnalysis] = useState(null);
  const [formData, setFormData] = useState({
    skills: "",
    jobRole: "",
    resume: null,
  });
  const {setAnalysis}= useAnalysisStore();

  // handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] }); // store file object
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const payload = new FormData();
    payload.append("skills", formData.skills);
    payload.append("jobRole", formData.jobRole);
    payload.append("resume", formData.resume);

    try {
      const res = await fetch("/api/resumeanalysis", {
        method: "POST",
        body: payload,
      });

      const data = await res.json();
      console.log("Analysis Result:", data);
      setAnalysis(JSON.parse(data.analysis));
      console.log("Match level:", data.match_level);
      router.push('/result');
      
    } catch (err) {
      console.error("Error uploading:", err);
    }
  };

  return (
    <section className="flex justify-center mt-[80px] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-8 border border-gray-200"
      >
        {/* Skills Input */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold text-gray-700">Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Enter your skills here"
            required
            className="text-black w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Resume Upload */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold text-gray-700">Upload Resume</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            required
            className="w-full text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 cursor-pointer"
          />
          <p className="text-sm text-gray-500">Max size: 2MB</p>
        </div>

        {/* Job Role Input */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold text-gray-700">Job Role</label>
          <input
            type="text"
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            placeholder="Enter the job role here"
            required
            className="text-black w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow-md transition duration-200"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
