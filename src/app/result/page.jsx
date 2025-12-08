"use client";
import { useRouter } from "next/navigation";
import { useAnalysisStore } from "../../lib/zustand/analysisStore";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

export default function ResumeAnalysis() {
  const { analysis } = useAnalysisStore();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [parsedAnalysis, setParsedAnalysis] = useState(null);

  useEffect(() => {
    if (!analysis) {
      setLoading(false);
      return;
    }

    try {
      const parsed = typeof analysis === "string" ? JSON.parse(analysis) : analysis;
      setParsedAnalysis(parsed);
    } catch (err) {
      console.error("Failed to parse analysis:", err);
    }
    setLoading(false);
  }, [analysis]);

  if (loading) {
    return <Loader text="Loading your results..." />;
  }

  if (!parsedAnalysis) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md">
          <div className="text-6xl mb-4">📄</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No Analysis Available</h2>
          <p className="text-gray-500 mb-6">Upload your resume to get AI-powered insights</p>
          <button
            onClick={() => router.push("/resumeanalysis")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-200"
          >
            Analyze Resume
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <button
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition duration-200"
        onClick={() => router.push("/dashboard")}
      >
        ← Back to Dashboard
      </button>

      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 rounded-2xl p-6 text-white">
        <h1 className="font-bold text-3xl">📊 Resume Report</h1>
      </section>

      {/* Match Info */}
      <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          🎯 Match Info
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">Match Level</p>
            <p className="text-2xl font-bold text-blue-600">{parsedAnalysis.match?.match_level || 'N/A'}</p>
          </div>
          <div className="bg-green-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">Confidence Score</p>
            <p className="text-2xl font-bold text-green-600">{parsedAnalysis.match?.confidence_score || 0}/100</p>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          💪 Strengths
        </h2>
        <ul className="space-y-2">
          {parsedAnalysis.strengths?.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <span className="text-green-500 mt-1">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Improvement Areas */}
      <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          📈 Improvement Areas
        </h2>
        <ul className="space-y-2">
          {parsedAnalysis.improvement_areas?.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <span className="text-yellow-500 mt-1">→</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Technical Gaps */}
      <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          🔧 Technical Gaps
        </h2>
        <ul className="space-y-2">
          {parsedAnalysis.technical_gaps?.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <span className="text-red-500 mt-1">!</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Interview Preparation */}
      <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          🎤 Interview Preparation
        </h2>
        <ul className="space-y-2">
          {parsedAnalysis.interview_preparation?.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <span className="text-purple-500 mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Project Recommendations */}
      <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          🚀 Project Recommendations
        </h2>
        <ul className="space-y-2">
          {parsedAnalysis.project_recommendations?.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <span className="text-blue-500 mt-1">★</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Timeline */}
      <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          ⏱️ Timeline
        </h2>
        <p className="text-gray-700">{parsedAnalysis.timeline}</p>
      </section>

      {/* Assessment */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl shadow-md p-6 border border-purple-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          📝 Overall Assessment
        </h2>
        <p className="text-gray-700 leading-relaxed">{parsedAnalysis.assessment}</p>
      </section>
    </div>
  );
}
