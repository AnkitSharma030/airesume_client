export const runtime = "nodejs";
import { NextResponse } from "next/server";
import pdf from 'pdf-parse/lib/pdf-parse.js'
import { GoogleGenerativeAI } from "@google/generative-ai";
// import User from "../../../models/User";
import User from "@/models/User";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
export async function POST(req) {
  try {
    const formData = await req.formData();    // Read ONCE only
    // console.log("form data is: ", formData);

    const userId = formData.get("id");
    const skills = formData.get("skills");
    const jobRole = formData.get("jobRole");
    const resumeFile = formData.get("resume");

    if (!resumeFile) {
      return NextResponse.json(
        { success: false, error: "No resume file provided" },
        { status: 400 }
      );
    }

    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const data = await pdf(buffer);
    const resumeText = data.text;
    const truncatedText = resumeText.substring(0, 3000);

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

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // console.log("user id is: ", userId);

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    user.scans += 1;
    await user.save();

    return NextResponse.json({ analysis: responseText });

  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to process resume" },
      { status: 500 }
    );
  }
}


