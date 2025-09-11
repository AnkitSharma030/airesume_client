// export const runtime = "nodejs";
// import { NextResponse } from "next/server";

// // Dynamic import to avoid server-side issues
// let pdf;
// if (typeof window === 'undefined') {
//   // Server-side
//   pdf = require('pdf-parse/lib/pdf-parse.js');
// } else {
//   // Client-side
//   pdf = require('pdf-parse');
// }

// const HF_API_KEY = process.env.HF_API_KEY;

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//     const skills = formData.get("skills");
//     const jobRole = formData.get("jobRole");
//     const resumeFile = formData.get("resume");

//     if (!resumeFile) {
//       return NextResponse.json(
//         { success: false, error: "No resume file provided" },
//         { status: 400 }
//       );
//     }

//     const arrayBuffer = await resumeFile.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);
    
//     // Extract text with pdf-parse
//     const data = await pdf(buffer);
//     const resumeText = data.text;
//     const truncatedText = resumeText.substring(0, 3000);

// const prompt = `
// ANALYZE THIS RESUME FOR JOB ROLE: ${jobRole}

// RESUME TEXT:
// ${truncatedText}

// CANDIDATE'S CLAIMED SKILLS: ${skills}

// INSTRUCTIONS:
// 1. Analyze the match level: Strong Match, Partial Match, or Weak Match
// 2. Provide detailed analysis in this EXACT JSON format:
// {
//   "match_level": "Partial Match",
//   "confidence_score": 0.42,
//   "strengths": ["array", "of", "3-4", "strengths"],
//   "improvement_areas": ["array", "of", "3-4", "areas"],
//   "technical_gaps": ["missing", "technologies", "required"],
//   "interview_preparation": ["specific", "topics", "to", "study"],
//   "project_recommendations": ["projects", "to", "build"],
//   "timeline_to_ready": "2-3 months",
//   "overall_assessment": "Brief summary paragraph"
// }

// 3. Focus on technical skills alignment with ${jobRole}
// 4. Be specific and actionable in recommendations
// 5. Consider education, projects, and experience
// 6. Keep assessment professional and constructive

// OUTPUT ONLY RAW JSON WITHOUT ANY ADDITIONAL TEXT.
// `;
//   const response = await fetch(
// "https://api-inference.huggingface.co/models/deepseek-ai/DeepSeek-R1",
//   {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${HF_API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       inputs: prompt,
//       parameters: {
//         max_new_tokens: 800,
//         temperature: 0.3,
//       },
//     }),
//   }
// );

// // Check if request succeeded
// if (!response.ok) {
//   const errorText = await response.text(); // Read raw error message
//   console.error("HF API Error:", response.status, errorText);
//   return NextResponse.json(
//     {
//       success: false,
//       error: `HF API request failed with status ${response.status}`,
//       details: errorText,
//     },
//     { status: 500 }
//   );
// }

// let hfData;
// try {
//   hfData = await response.json();
// } catch (jsonErr) {
//   const text = await response.text();
//   console.error("Failed to parse HF response as JSON:", text);
//   return NextResponse.json(
//     {
//       success: false,
//       error: "Invalid JSON from Hugging Face API",
//       details: text,
//     },
//     { status: 500 }
//   );
// }

// const analysisText = hfData[0]?.generated_text || "";

// let analysisJson;
// try {
//   analysisJson = JSON.parse(analysisText);
// } catch {
//   analysisJson = { rawOutput: analysisText };
// }

// return NextResponse.json({ success: true, analysis: analysisJson });


//   } catch (err) {
//     console.error("Server error:", err);
//     return NextResponse.json(
//       { 
//         success: false, 
//         error: "Failed to process resume",
//         details: process.env.NODE_ENV === "development" ? err.message : undefined
//       },
//       { status: 500 }
//     );
//   }
// }

// // export const runtime = "nodejs";
// // import { NextResponse } from "next/server";

// // import pdf from "pdf-parse";

// // const HF_API_KEY = process.env.HF_API_KEY;

// // export async function POST(req) {
// //   try {
// //     const formData = await req.formData();
// //     const skills = formData.get("skills");
// //     const jobRole = formData.get("jobRole");
// //     const resumeFile = formData.get("resume");

// //     if (!resumeFile) {
// //       return NextResponse.json(
// //         { success: false, error: "No resume file provided" },
// //         { status: 400 }
// //       );
// //     }

// //     // Convert file into buffer
// //     const arrayBuffer = await resumeFile.arrayBuffer();
// //     const buffer = Buffer.from(arrayBuffer);

// //     // Extract text with pdf-parse
// //     const data = await pdf(buffer);
// //     const resumeText = data.text;
// //     const truncatedText = resumeText.substring(0, 3000);

// //     // Build prompt
// //     const prompt = `
// // You are a career consultant and ATS analyzer.

// // Analyze this resume for job role: ${jobRole}

// // RESUME TEXT:
// // ${truncatedText}

// // CANDIDATE'S CLAIMED SKILLS: ${skills}

// // Return the result in this exact JSON format:
// // {
// //   "match_level": "Strong Match | Partial Match | Weak Match",
// //   "confidence_score": 0.0,
// //   "strengths": [],
// //   "improvement_areas": [],
// //   "technical_gaps": [],
// //   "interview_preparation": [],
// //   "project_recommendations": [],
// //   "timeline_to_ready": "string",
// //   "overall_assessment": "string"
// // }
// // `;

// //     // Call Hugging Face API
// //     const response = await fetch(
// //       "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta",
// //       {
// //         method: "POST",
// //         headers: {
// //           Authorization: `Bearer ${HF_API_KEY}`,
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           inputs: prompt,
// //           parameters: {
// //             max_new_tokens: 800,
// //             temperature: 0.3,
// //           },
// //         }),
// //       }
// //     );

// //     if (!response.ok) {
// //       const errText = await response.text();
// //       throw new Error(`HF API error: ${response.status} - ${errText}`);
// //     }

// //     const hfData = await response.json();
// //     const analysisText = hfData[0]?.generated_text || "";

// //     // Try parsing as JSON
// //     let analysisJson;
// //     try {
// //       analysisJson = JSON.parse(analysisText);
// //     } catch {
// //       analysisJson = { rawOutput: analysisText };
// //     }

// //     return NextResponse.json({ success: true, analysis: analysisJson });
// //   } catch (err) {
// //     console.error("Server error:", err);
// //     return NextResponse.json(
// //       {
// //         success: false,
// //         error: "Failed to process resume",
// //         details:
// //           process.env.NODE_ENV === "development" ? err.message : undefined,
// //       },
// //       { status: 500 }
// //     );
// //   }
// // }


export const runtime = "nodejs";
import { NextResponse } from "next/server";
import pdf from 'pdf-parse/lib/pdf-parse.js'
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.formData();
    const skills = formData.get("skills");
    const jobRole = formData.get("jobRole");
    const resumeFile = formData.get("resume");

    if (!resumeFile) {
      return NextResponse.json(
        { success: false, error: "No resume file provided" },
        { status: 400 }
      );
    }

    // Convert file into buffer
    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Extract text with pdf-parse
    const data = await pdf(buffer);
    const resumeText = data.text;
    const truncatedText = resumeText.substring(0, 3000);
// console.log('resume text', resumeText);

    // Build prompt
    const prompt = `
ANALYZE THIS RESUME FOR JOB ROLE: ${jobRole}

RESUME TEXT:
${truncatedText}

CANDIDATE'S CLAIMED SKILLS: ${skills}

ANALYZE THIS RESUME FOR JOB ROLE: ${jobRole}

RESUME TEXT:
${truncatedText}

CANDIDATE'S CLAIMED SKILLS: ${skills}

INSTRUCTIONS:
1. Your output must be **pure JSON only** — no markdown, no explanation, no extra text. 
2. Follow this exact JSON schema:

{
  "match": {
    "match_level": "Strong Match | Partial Match | Weak Match",
    "confidence_score": number
  },
  "strengths": ["item1", "item2", "item3"],
  "improvement_areas": ["item1", "item2", "item3"],
  "technical_gaps": ["item1", "item2", "item3"],
  "interview_preparation": ["item1", "item2", "item3"],
  "project_recommendations": ["item1", "item2", "item3"],
  "timeline": "timeframe (e.g. '2-3 months')",
  "assessment": "short summary paragraph"
}

3. Do not wrap JSON in backticks.
4. Do not include any explanation outside JSON.

`;

    // Call Gemini API
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Try parsing JSON
    // let analysisJson;
    // try {
    //   analysisJson = JSON.parse(responseText);
    // } catch {
    //   analysisJson = { rawOutput: responseText };
    // }

    return NextResponse.json({analysis: responseText });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process resume",
        details:
          process.env.NODE_ENV === "development" ? err.message : undefined,
      },
      { status: 500 }
    );
  }
}

