        "use client";
import { useAnalysisStore } from "../../lib/zustand/analysisStore";

export default function ResumeAnalysis() {
  const { analysis } = useAnalysisStore();

  if (!analysis) {
    return <p className="p-6 text-gray-500">No analysis available</p>;
  }

const parsedAnalysis = typeof analysis === "string" ? JSON.parse(analysis) : analysis;

  return (
    <div className="p-6 space-y-6  text-black">
        <section>
            <h1 className="font-bold text-2xl underline">Resume Report</h1>
        </section>
      {/* Match Info */}
      <section>
        <h2 className="text-xl font-semibold">Match Info</h2>
        <p>Match Level: {parsedAnalysis.match.match_level}</p>
        <p>Confidence Score: {parsedAnalysis.match.confidence_score}/100</p>
      </section>

      {/* Strengths */}
      <section>
        <h2 className="text-xl font-semibold">Strengths</h2>
        <ul className="list-disc pl-6">
          {parsedAnalysis.strengths?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Improvement Areas */}
      <section>
        <h2 className="text-xl font-semibold">Improvement Areas</h2>
        <ul className="list-disc pl-6">
          {parsedAnalysis.improvement_areas?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Technical Gaps */}
      <section>
        <h2 className="text-xl font-semibold">Technical Gaps</h2>
        <ul className="list-disc pl-6">
          {parsedAnalysis.technical_gaps?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Interview Preparation */}
      <section>
        <h2 className="text-xl font-semibold">Interview Preparation</h2>
        <ul className="list-disc pl-6">
          {parsedAnalysis.interview_preparation?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Project Recommendations */}
      <section>
        <h2 className="text-xl font-semibold">Project Recommendations</h2>
        <ul className="list-disc pl-6">
          {parsedAnalysis.project_recommendations?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-xl font-semibold">Timeline</h2>
        <p>{parsedAnalysis.timeline}</p>
      </section>

      {/* Assessment */}
      <section>
        <h2 className="text-xl font-semibold">Assessment</h2>
        <p>{parsedAnalysis.assessment}</p>
      </section>
    </div>
  );
}
